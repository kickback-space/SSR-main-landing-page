import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import closeSidebarIcon from '../../public/icon/closeSidebarIcon.svg';
import seeItButton from '../../public/button/See-it/See_it_In_Action_Default.svg';

export default function Sidebar(props) {
  const sidebarClass = props.isOpen ? styles.sidebarOpen : styles.sidebar;
  return (
    <div className={sidebarClass}>
      <div className={styles.headerSidebar}>
        <div className={styles.image}>
          <Image
            onClick={props.toggleSidebar}
            src={closeSidebarIcon}
            alt='close icon'
          ></Image>
        </div>
      </div>
      <div className={styles.contentSidebar}>
        <span> {'How to get started'} </span>
        <span> {'FAQ'} </span>
        <div>
          <Image src={seeItButton} />
        </div>
      </div>
    </div>
  );
}
