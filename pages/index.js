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
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
          rel='stylesheet'
        ></link>
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
