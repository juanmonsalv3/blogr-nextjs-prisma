import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Session } from 'next-auth';

const App = ({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
