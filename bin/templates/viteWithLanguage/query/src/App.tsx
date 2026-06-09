import { P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';
import { Spinner } from '@undp/design-system-react/Spinner';
import { SegmentedControl } from '@undp/design-system-react/SegmentedControl';
import { Spacer } from '@undp/design-system-react/Spacer';
import { useQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { useCounterActions, useCounter } from './stores/counter';

import '@/styles/fonts.css';
import '@/styles/style.css';

function useTodoData() {
  return useQuery({
    queryKey: ['todos'],
    queryFn: () =>
      Promise.resolve([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' },
      ]),
  });
}

function App() {
  const { data, isLoading, isError } = useTodoData();
  const { i18n, t } = useTranslation();

  const count = useCounter();
  const { increment, decrement } = useCounterActions();

  if (isLoading) return <Spinner size='lg' className='mx-auto my-20' />;

  if (isError) return <>Error</>;
  return (
    <div className='flex min-h-screen flex-col justify-center'>
      <div className='mx-auto my-8 flex items-center justify-center gap-4'>
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
          src='./imgs/Tanstack-logo.png'
          alt='tanstack logo'
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
      <div className='mb-8 flex justify-center gap-4'>
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
      <P marginBottom='xl' className='text-center'>
        {t('count', { count: data?.length })}
      </P>
    </div>
  );
}

export default App;
