import '../styles/index.scss';
import PlausibleProvider from 'next-plausible';

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain='kickback.space'
      trackOutboundLinks
      trackLocalhost
    >
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
