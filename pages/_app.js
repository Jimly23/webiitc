import '@/styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag';
import TagManager from 'react-gtm-module';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GTM_ID !== null) {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />
}
