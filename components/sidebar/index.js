import React from 'react';
import Image from 'next/image';
import styles from './sidebar.module.scss';
import closeSidebarIcon from '../../public/icon/closeSidebarIcon.svg';
import { usePlausible } from 'next-plausible';
import axios from 'axios';

function Sidebar(props) {
  const { isOpen, toggleSidebar } = props;
  const sidebarClass = isOpen ? styles.sidebarOpen : styles.sidebarClose;
  const plausible = usePlausible();

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
      let faqView = document.getElementById('faqView');
      faqView.scrollIntoView({ behavior: 'smooth' }, true);
    }, 200);
  }

  function action() {
    plausible('SeeItInAction');
    const url = "https://kickback.space/api/v1/demo/environment_status?environment_name=open"
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

  function openForm() {
    window.open(
      'https://xtm50lcgfwe.typeform.com/to/cTz6CDkh?typeform-source=landing_page_desktop'
    );
    plausible('SignUp');
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
          {/* <span className='cursor' onClick={getStart}>
            {' '}
            {'How to get started'}{' '}
          </span> */}
          <span className='cursor' onClick={FAQ}>
            {' '}
            {'FAQ'}{' '}
          </span>
          {/* <button
            className={`cursor ${styles.actionButton}`}
            onClick={action}
          >{`See it in action`}</button> */}
          <button
            className={`cursor ${styles.formButton}`}
            onClick={openForm}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Sidebar);
