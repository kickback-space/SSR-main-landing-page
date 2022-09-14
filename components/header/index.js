import { useState, memo, useEffect } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import Sidebar from '../sidebar';

function Header() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  function getStart() {
    let easyView = document.getElementById('easyView');
    easyView.scrollIntoView({ behavior: 'smooth' }, true);
  }

  function FAQ() {
    let faqView = document.getElementById('questionView');
    faqView.scrollIntoView({ behavior: 'smooth' }, true);
  }

  function action() {
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
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
    <div id='headerView' className={styles.headerWrapperView}>
      <div className={styles.headerLogo}>
        <Image
          width={127}
          height={32}
          src={'/icon/headerIcon.svg'}
          alt='iconHeader'
        />
      </div>
      <div className={styles.headerLogoBrowser}>
        <Image
          width={200}
          height={48}
          src={'/icon/headerIconBrowser.svg'}
          alt='iconHeader'
        />
      </div>
      <div
        onClick={handleViewSidebar}
        className={`cursor ${styles.headerMenuIcon}`}
      >
        <Image
          width={32}
          height={32}
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
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default memo(Header);
