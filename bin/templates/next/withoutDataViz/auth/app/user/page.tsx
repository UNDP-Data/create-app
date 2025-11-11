'use client';

import Image from 'next/image';
import { Spinner } from '@undp/design-system-react/Spinner';
import { H6, P } from '@undp/design-system-react/Typography';
import { Button } from '@undp/design-system-react/Button';

import { useSession, signIn } from '@/lib/auth-client';

export default function UserPage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <div className='my-8 mx-aut'>
        <Spinner />
      </div>
    );
  }
  const handleSignIn = async () => {
    await signIn.social({
      provider: 'microsoft',
      callbackURL: '/user',
    });
  };

  if (!session)
    return (
      <>
        <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
          <Image
            className='dark:invert'
            src='/next.svg'
            alt='Next.js logo'
            width={100}
            height={20}
            priority
          />
          <P marginBottom='none'>&</P>
          <Image
            className='dark:invert'
            src='/undp-logo-blue.svg'
            alt='UNDP logo'
            width={40}
            height={20}
            priority
          />
        </div>
        <H6 marginBottom='xl' className='text-center'>
          Please sign in to view this page
        </H6>
        <div className='flex justify-center'>
          <Button variant='tertiary' onClick={handleSignIn}>
            Sign In
          </Button>
        </div>
      </>
    );

  return (
    <>
      <div className='flex gap-4 items-center justify-center my-8 mx-auto'>
        <Image
          className='dark:invert'
          src='/next.svg'
          alt='Next.js logo'
          width={100}
          height={20}
          priority
        />
        <P marginBottom='none'>&</P>
        <Image
          className='dark:invert'
          src='/undp-logo-blue.svg'
          alt='UNDP logo'
          width={40}
          height={20}
          priority
        />
      </div>
      <H6 marginBottom='xl' className='text-center'>
        Welcome, {session.user.name || session.user.email}!
      </H6>
    </>
  );
}
