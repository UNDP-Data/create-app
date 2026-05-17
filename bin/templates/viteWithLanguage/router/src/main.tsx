import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  redirect,
} from '@tanstack/react-router';

import HeaderEl from './components/Header';
import FooterEl from './components/Footer';
import App from './App';
import createAboutRoute from './routes/about';
import i18n from './i18n';
import { DEFAULT_LANGUAGE, LANGUAGES } from './constants';

import './styles/fonts.css';
import './styles/style.css';

const rootRoute = createRootRoute({
  component: () => <Outlet />,
});

const localeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/{-$locale}',
  beforeLoad: async ({ params }) => {
    const locale =
      params.locale && LANGUAGES.map(d => d.id).includes(params.locale)
        ? params.locale
        : DEFAULT_LANGUAGE;

    await i18n.changeLanguage(locale);

    return { locale };
  },
  component: () => (
    <div className='flex flex-col gap-0 min-h-screen'>
      <HeaderEl />
      <main className='grow-1 flex flex-col justify-center'>
        <div className='flex flex-col justify-center'>
          <Outlet />
        </div>
      </main>
      <FooterEl />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => localeRoute,
  path: '/',
  component: App,
});

const routeTree = rootRoute.addChildren([
  localeRoute.addChildren([
    indexRoute,
    createAboutRoute(localeRoute),
  ]),
]);

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
      </I18nextProvider>
    </StrictMode>,
  );
}