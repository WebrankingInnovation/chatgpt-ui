import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { SessionProvider, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { createAlias } from 'utils/app/functions';

const inter = Inter({ subsets: ['latin'] });

const PageWrapper = ({ loginRequired = false, children }) => {
  const router = useRouter();

  const { status, data: session } = useSession({
    required: loginRequired,
    onUnauthenticated() {
      router.replace(`/api/auth/signin`);
    },
  });

  useEffect(() => {
    if (session?.user?.email) {
      (function (w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
          userEmail: session?.user?.email,
          userAlias: createAlias(session?.user?.name),
        });
        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
        var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', 'GTM-59VBGGD');
    }
  }, [session?.user?.email]);

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
