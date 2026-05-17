import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import * as TanStackQueryProvider from './integration/tanstack-query';
import App from './App';
import i18n from './i18n';

import './styles/fonts.css';
import './styles/style.css';

const TanStackQueryProviderContext = TanStackQueryProvider.getContext();
const rootElement = document.getElementById('root');
if (rootElement && !rootElement.innerHTML) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <TanStackQueryProvider.Provider {...TanStackQueryProviderContext}>
          <App />
        </TanStackQueryProvider.Provider>
      </I18nextProvider>
    </StrictMode>,
  );
}
