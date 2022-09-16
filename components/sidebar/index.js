import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import closeSidebarIcon from '../../public/icon/closeSidebarIcon.svg';

function Sidebar(props) {
  const { isOpen, toggleSidebar } = props;
  const sidebarClass = isOpen ? styles.sidebarOpen : styles.sidebarClose;

  function getStart() {
    toggleSidebar();
    setTimeout(() => {
      let easyView = document.getElementById('easyView');
      easyView.scrollIntoView({ behavior: 'smooth' }, true);
    }, 200);
  }

  function FAQ() {
    toggleSidebar();
    setTimeout(() => {
      faqView.scrollIntoView({ behavior: 'smooth' }, true);
      let faqView = document.getElementById('questionView');
      faqView.scrollIntoView({ behavior: 'smooth' }, true);
    }, 200);
  }

  function action() {
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
  }

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
          <span className='cursor' onClick={getStart}>
            {' '}
            {'How to get started'}{' '}
          </span>
          <span className='cursor' onClick={FAQ}>
            {' '}
            {'FAQ'}{' '}
          </span>
          <button
            className={`cursor ${styles.actionButton}`}
            onClick={action}
          >{`See it in action`}</button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
