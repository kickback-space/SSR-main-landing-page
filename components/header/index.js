import { useState } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import headerIcon from '../../public/icon/headerIcon.svg';
import headerIconBrowser from '../../public/icon/headerIconBrowser.svg';
import menuIcon from '../../public/icon/menuIcon.svg';
import Sidebar from '../sidebar';

function Header(props) {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  function getStart() {}

  function FAQ() {}

  function action() {}

  function handleViewSidebar() {
    setSideBarOpen(!sidebarOpen);
  }
  return (
    <div className={styles.headerWrapperView}>
      <div className={styles.headerLogo}>
        <Image src={headerIcon} alt='iconHeader' />
      </div>
      <div className={styles.headerLogoBrowser}>
        <Image src={headerIconBrowser} alt='iconHeader' />
      </div>
      <div
        onClick={handleViewSidebar}
        className={`cursor ${styles.headerMenuIcon}`}
      >
        <Image src={menuIcon} alt='menuIcon' />
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
          className={`v-ml-83 ${styles.actionButton}`}
          onClick={action}
        >{`See it in action`}</button>
      </div>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
    </div>
  );
}

export default Header;
