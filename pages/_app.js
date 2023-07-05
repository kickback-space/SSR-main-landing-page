import '../styles/index.scss';
import PlausibleProvider from 'next-plausible';
import InsightTag from '../components/linkedin/insightTag';

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider
      domain='kickback.space'
      trackOutboundLinks
      trackLocalhost
    >
      <InsightTag />
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
