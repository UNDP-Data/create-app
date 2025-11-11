import { H6, P } from '@undp/design-system-react/Typography';

function App() {
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
        To get started, edit the App.tsx file.
      </H6>
    </>
  );
}

export default App;
