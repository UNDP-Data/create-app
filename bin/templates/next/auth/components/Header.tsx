'use client';

import {
  Header,
  HeaderActions,
  HeaderLogoUnit,
  HeaderMainNavUnit,
  HeaderMenuUnit,
} from '@undp/design-system-react/Header';
import Link from 'next/link';
import { Spinner } from '@undp/design-system-react';
import { Button } from '@undp/design-system-react/Button';

import { signIn, useSession, signOut } from '@/lib/auth-client';

export default function HeaderEl() {
  const { data: session, isPending } = useSession();
  const handleSignIn = async () => {
    await signIn.social({
      provider: 'microsoft',
      callbackURL: window.location.href,
    });
  };
  const handleSignOut = async () => {
    await signOut();
  };
  return (
    <Header>
      <HeaderLogoUnit
        hyperlink='./'
        siteName='Site name'
        siteSubName='Sub-site name'
      />
      <HeaderMainNavUnit>
        <HeaderMenuUnit>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/user'>User</Link>
        </HeaderMenuUnit>
        <HeaderActions>
          {isPending ? (
            <Spinner />
          ) : session ? (
            <Button variant='tertiary' onClick={handleSignOut}>
              Sign Out
            </Button>
          ) : (
            <Button variant='tertiary' onClick={handleSignIn}>
              Sign In
            </Button>
          )}
        </HeaderActions>
      </HeaderMainNavUnit>
    </Header>
  );
}
