import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';
import { SegmentedControl } from '@undp/design-system-react/SegmentedControl';
import { useTranslation } from 'react-i18next';

import { useCounterActions, useCounter } from './stores/counter';

import '@/styles/fonts.css';
import '@/styles/style.css';
import { Spacer } from '@undp/design-system-react/Spacer';

function App() {
  const count = useCounter();
  const { increment, decrement } = useCounterActions();
  const { i18n, t } = useTranslation();
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
      <SegmentedControl
        color="red"
        defaultValue="en"
        onValueChange={d => { i18n.changeLanguage(d) }}
        options={[
          {
            label: 'English',
            value: 'en'
          },
          {
            label: 'Spanish',
            value: 'es'
          },
          {
            label: 'French',
            value: 'fr'
          }
        ]}
        size="sm"
        variant="light"
      />
      <Spacer size='xl' />
      <P marginBottom='xl' className='text-center'>
        {t('started', { fileName: 'app.tsx' })}{' '}
        <span className='font-bold'>{t('count', { count: count })}</span>
      </P>
      <div className='flex gap-4 justify-center'>
        <Button
          variant='tertiary'
          onClick={() => {
            increment();
          }}
        >
          {t('increaseCount')}
        </Button>
        <Button
          variant='tertiary'
          onClick={() => {
            decrement();
          }}
        >
          {t('decreaseCount')}
        </Button>
      </div>
    </div>
  );
}

export default App;
