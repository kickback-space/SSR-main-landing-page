import '../styles/index.scss';
import PlausibleProvider from 'next-plausible';
import InsightTag from '../components/linkedin/insightTag';
import TawkWidget from '../components/tawkto/tawkWidget';

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain='kickback.space'
      trackOutboundLinks
      trackLocalhost
    >
      <InsightTag />
      <TawkWidget />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
