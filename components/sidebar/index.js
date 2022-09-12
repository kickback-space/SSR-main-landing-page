import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import closeSidebarIcon from '../../public/icon/closeSidebarIcon.svg';
import seeItButton from '../../public/button/See-it/See_it_In_Action_Default.svg';

function Sidebar(props) {
  const { isOpen, toggleSidebar } = props;
  const sidebarClass = isOpen ? styles.sidebarOpen : styles.sidebarClose;
  return (
    <div className={`${styles.wrapperSidebar} ${sidebarClass}`}>
      <div className={`cursor ${styles.outsize}`} onClick={toggleSidebar} />
      <div className={styles.sidebar}>
        <div className={styles.headerSidebar}>
          <div className={styles.image}>
            <Image
              onClick={toggleSidebar}
              src={closeSidebarIcon}
              alt='close icon'
              className='cursor'
            />
          </div>
        </div>
        <div className={styles.contentSidebar}>
          <span className='cursor'> {'How to get started'} </span>
          <span className='cursor'> {'FAQ'} </span>
          <div className='cursor'>
            <Image src={seeItButton} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
