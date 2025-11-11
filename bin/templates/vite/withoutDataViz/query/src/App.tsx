import { H6, P } from '@undp/design-system-react/Typography';
import { Spinner } from '@undp/design-system-react/Spinner';
import { useQuery } from '@tanstack/react-query';

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

  if (isLoading) return <Spinner size='lg' className='my-20 m-auto' />;

  if (isError) return <>Error</>;
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
      <H6 marginBottom='xl' className='text-center'>
        Data loaded successfully
        <br />
        <br />
        {data?.length} elements in the query
      </H6>
    </div>
  );
}

export default App;
