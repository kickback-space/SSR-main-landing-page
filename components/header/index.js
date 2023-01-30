import { useState, memo, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import Sidebar from '../sidebar';
import { usePlausible } from 'next-plausible';

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
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
    plausible('SeeItInAction');
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
          <span
            className={`cursor ${styles.titleItem}`}
            onClick={getStart}
          >{`How to get started`}</span>
          <span
            className={`v-ml-75 cursor ${styles.titleItem}`}
            onClick={FAQ}
          >{`FAQ`}</span>
          <button
            className={`cursor v-ml-83 ${styles.actionButton}`}
            onClick={action}
          >{`See it in action`}</button>
        </div>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default memo(Header);
