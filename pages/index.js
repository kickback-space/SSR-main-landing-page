import Head from 'next/head';
import Header from '../components/header';
import Panel from '../components/panel';
import FirstInformation from '../components/firstInformation';
import Value from '../components/value';
import Easy from '../components/easy';
import VirtualOffice from '../components/virtualOffice';
import LineView from '../components/lineView';
import VirtualEvent from '../components/virtualEvent';
import Professional from '../components/professional';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kickback space Inc</title>
        <meta name="description" content="Introducing the best way to be present online: photo-realistic virtual environments, video & audio enhancement, and bleeding-edge communication features"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <Panel/>
        <FirstInformation/>
        <Value/>
        <Easy/>
        <VirtualOffice/>
        <LineView/>
        <VirtualEvent/>
        <Professional/>
        <Footer/>
      </main>
    </div>
  )
}
