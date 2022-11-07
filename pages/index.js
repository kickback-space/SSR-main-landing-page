import Head from 'next/head';
import Header from '../components/header';
import Panel from '../components/panel';
import Information from '../components/information';
import Value from '../components/value';
import Easy from '../components/easy';
import VirtualOffice from '../components/virtualOffice';
import FAQ from '../components/faq';
import Footer from '../components/footer';
import Team from '../components/team';
import GetEarlyAccessView from '../components/earlyAccessView';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kickback space Inc</title>
        <meta
          name='description'
          content='Introducing the best way to be present online: photo-realistic virtual environments, video & audio enhancement, and bleeding-edge communication features'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Header />
        <Panel />
        <Information />
        <VirtualOffice />
        <Easy />
        <Value />
        <FAQ />
        <Team />
        <Footer />
        <GetEarlyAccessView />
      </main>
    </div>
  );
}
