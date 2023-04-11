import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { SessionData } from '@/types/session';

const inter = Inter({ subsets: ['latin'] });

const PageWrapper = ({ loginRequired = false, children }) => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: loginRequired,
    onUnauthenticated() {
      router.replace(`/api/auth/signin`);
    },
  });

  return loginRequired
    ? status === 'loading'
      ? null
      : session?.user
      ? children
      : null
    : children;
};

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{}>) {
  return (
    <SessionProvider session={session}>
      <PageWrapper loginRequired={Component.loginRequired || false}>
        <div className={inter.className}>
          <Toaster />
          <Component {...pageProps} />
        </div>
      </PageWrapper>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
