import { createRoute } from '@tanstack/react-router';
import type { AnyRootRoute } from '@tanstack/react-router';
import { H6, P } from '@undp/design-system-react/Typography';

export function About() {
  return (
    <>
      <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
        <img
          src='./imgs/Vitejs-logo.svg'
          alt='vite logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='./imgs/Tailwind_CSS_Logo.svg'
          alt='tailwind logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='./imgs/logo-color-600.png'
          alt='tanstack logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='./imgs/undp-logo-blue.svg'
          alt='UNDP logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <H6 marginBottom='xl' className='text-center'>
        This is the about page.
      </H6>
    </>
  );
}
export default function createTanStackQueryAboutRoute(
  parentRoute: AnyRootRoute,
) {
  return createRoute({
    path: '/about',
    component: About,
    getParentRoute: () => parentRoute,
  });
}
