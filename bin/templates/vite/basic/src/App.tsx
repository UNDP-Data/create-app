import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';

import { useCounterActions, useCounter } from './stores/counter';

import '@/styles/fonts.css';
import '@/styles/style.css';

function App() {
  const count = useCounter();
  const { increment, decrement } = useCounterActions();
  return (
    <div className=' min-h-screen flex flex-col justify-center'>
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
          src='./imgs/Zustand-logo.svg'
          alt='Zustand logo'
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
      <P marginBottom='xl' className='text-center'>
        To get started, edit the App.tsx file.{' '}
        <span className='font-bold'>Count: {count}</span>
      </P>
      <div className='flex gap-4 justify-center'>
        <Button
          variant='tertiary'
          onClick={() => {
            increment();
          }}
        >
          Increase counter
        </Button>
        <Button
          variant='tertiary'
          onClick={() => {
            decrement();
          }}
        >
          Decrease counter
        </Button>
      </div>
    </div>
  );
}

export default App;
