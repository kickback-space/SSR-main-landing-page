import { useState, memo, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import Sidebar from '../sidebar';
import { usePlausible } from 'next-plausible';
import axios from 'axios';

function Header() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const plausible = usePlausible();
  function getStart() {
    let easyView = document.getElementById('easyView');
    easyView.scrollIntoView({ behavior: 'smooth' }, true);
  }

  function FAQ() {
    let faqView = document.getElementById('faqView');
    faqView.scrollIntoView({ behavior: 'smooth' }, true);
  }

  function action() {
    plausible('SeeItInAction');
    const url = "https://api.kickback.space/api/v1/demo/environment_status?environment_name=open"
    axios.get(url).then( resp => {
      const is_up = resp.data.data.is_up
      if (is_up) {
        window.open('https://app.kickback.space');
      } else {
        window.open('https://calendly.com/rocco-haro/15min', '_blank');
      }
    }).catch( (e) => {
      console.log(e)
      window.open('https://calendly.com/rocco-haro/15min', '_blank');
    })
  }

  function handleViewSidebar() {
    setSideBarOpen(!sidebarOpen);
  }

  function handleResizeScreen() {
    if (window.innerWidth >= 1024 && sidebarOpen) {
      setSideBarOpen(false);
    }
  }
  function handleBlockScroll() {
    if (sidebarOpen) {
      if (!document.body.classList.contains('blockScroll'))
        document.body.classList.add('blockScroll');
    } else {
      if (document.body.classList.contains('blockScroll'))
        document.body.classList.remove('blockScroll');
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResizeScreen);
    return () => {
      window.removeEventListener('resize', handleResizeScreen);
    };
  }, [sidebarOpen]);

  useEffect(() => {
    handleBlockScroll();
  });

  function openForm() {
    window.open(
      'https://xtm50lcgfwe.typeform.com/to/cTz6CDkh?typeform-source=landing_page_desktop'
    );
    plausible('SignUp');
  }

  return (
    <div id='headerView' className={styles.headerView}>
      <div className={styles.headerWrapperView}>
        <div className={styles.headerLogo}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/icon/headerIcon.svg'}
            alt='iconHeader'
          />
        </div>
        <div className={styles.headerLogoBrowser}>
          <Image
            layout='fill'
            objectFit='contain'
            src={'/icon/headerIconBrowser.svg'}
            alt='iconHeader'
          />
        </div>
        <div
          onClick={handleViewSidebar}
          className={`cursor ${styles.headerMenuIcon}`}
        >
          <Image
            layout='fill'
            objectFit='contain'
            src={'/icon/menuIcon.svg'}
            alt='menuIcon'
          />
        </div>
        <div className={styles.headerGroupView}>
          {/* <span
            className={`cursor ${styles.titleItem}`}
            onClick={getStart}
          >{`How to get started`}</span> */}
          <span
            className={`v-ml-75 cursor ${styles.titleItem}`}
            onClick={FAQ}
          >{`FAQ`}</span>
          {/* <button
            className={`cursor v-ml-83 ${styles.actionButton}`}
            onClick={action}
          >{`See it in action`}</button> */}
          <button
            className={`cursor v-ml-83 ${styles.formButton}`}
            onClick={openForm}
          ></button>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default memo(Header);
