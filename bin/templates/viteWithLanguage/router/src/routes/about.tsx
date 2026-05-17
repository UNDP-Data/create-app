import { createRoute } from '@tanstack/react-router';
import type { AnyRoute } from '@tanstack/react-router';
import { P } from '@undp/design-system-react/Typography';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();
  return (
    <>
      <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
        <img
          src='/imgs/Vitejs-logo.svg'
          alt='vite logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='/imgs/Tailwind_CSS_Logo.svg'
          alt='tailwind logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='/imgs/Tanstack-logo.png'
          alt='tanstack logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='/imgs/Zustand-logo.svg'
          alt='Zustand logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
        <P marginBottom='none'>&</P>
        <img
          src='/imgs/undp-logo-blue.svg'
          alt='UNDP logo'
          width='72px'
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      <P marginBottom='xl' className='text-center'>
        {t('aboutPage')}
      </P>
    </>
  );
}
export default function createAboutRoute(parentRoute: AnyRoute) {
  return createRoute({
    path: '/about',
    component: About,
    getParentRoute: () => parentRoute,
  });
}