import Image from 'next/image';
import styles from './panel.module.scss';
import * as React from 'react';
import { usePlausible } from 'next-plausible';
import axios from 'axios';

function Panel(props) {
  const { copy } = props;
  const plausible = usePlausible();
  function actionClick() {
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

  function openForm() {
    window.open(
      'https://xtm50lcgfwe.typeform.com/to/cTz6CDkh?typeform-source=landing_page_desktop'
    );
    plausible('SignUp');
  }
  return (
    <div id='panelView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <div className={styles.infoGroup}>
            <span>
              {copy.panel.title}
            </span>
            {/* <div className={styles.buttonContainer}>
              <button onClick={actionClick}>{`See it in action`}</button>
            </div> */}
            <button
              className={`cursor  ${styles.formButton}`}
              onClick={openForm}
            ></button>
          </div>
          <div className={styles.videoGroup}>
            <video autoPlay muted loop playsInline>
              <source src='/video/mainVideo.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
      </div>
      <div className={styles.layoutImage}>
        <Image
          layout='responsive'
          src={'/banner/backgroundImageBanner.png'}
          alt='backgroundImageBanner'
          width={1080}
          height={800}
          priority
        />
      </div>
    </div>
  );
}

export default React.memo(Panel);
