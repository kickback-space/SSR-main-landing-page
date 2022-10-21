import Image from 'next/image';
import styles from './panel.module.scss';
import * as React from 'react';

function Panel() {
  function actionClick() {
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
  }
  return (
    <div id='panelView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <div className={styles.videoGroup}>
            <video autoPlay muted loop>
              <source src='/video/mainVideo.mp4' type='video/mp4' />
            </video>
          </div>
          <div className={styles.infoGroup}>
            <span>{`kick back and foster conversations as if you’re actually together`}</span>
            <div className={styles.buttonContainer}>
              <button onClick={actionClick}>{`See it in action`}</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.layoutImage}>
        <div>
          <Image
            layout='fill'
            src={'/banner/backgroundImageBanner.png'}
            alt='backgroundImageBanner'
            objectFit='fill'
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Panel);
