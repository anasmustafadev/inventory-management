'use client';
import { SessionProvider } from 'next-auth/react';

const PageSessionProvider = ({ children, session }) => {
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default PageSessionProvider;
