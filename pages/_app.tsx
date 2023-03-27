//すべてのページで必要な処理を書く
import "../styles/globals.css";
import { SessionProvider } from 'next-auth/react';

export default function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.sessionProvider}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}