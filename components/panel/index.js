import Image from 'next/image';
import styles from './panel.module.scss';
import * as React from 'react';
import { usePlausible } from 'next-plausible';

function Panel() {
  const plausible = usePlausible();
  function actionClick() {
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
    plausible('SeeItInAction');
  }
  return (
    <div id='panelView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <div className={styles.videoGroup}>
            <video autoPlay muted loop playsInline>
              <source src='/video/mainVideo.mp4' type='video/mp4' />
            </video>
          </div>
          <div className={styles.infoGroup}>
            <span>{`kick back and come together in a more human way`}</span>
            <div className={styles.buttonContainer}>
              <button onClick={actionClick}>{`See it in action`}</button>
            </div>
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
