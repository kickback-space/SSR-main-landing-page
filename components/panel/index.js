import Image from 'next/image';
import styles from './panel.module.scss';
import * as React from 'react';

function Panel() {
  function handleTransitionNextView() {
    let nextViw = document.getElementById('informationView');
    nextViw.scrollIntoView({ behavior: 'smooth' }, true);
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
              <button>{`See it in action`}</button>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomPanel} v-mt-27 cursor`}>
          <Image
            onClick={handleTransitionNextView}
            width={64}
            height={64}
            src={'/icon/arrowBannerIcon.svg'}
            alt='arrowBannerIcon'
          />
          <Image
            width={166}
            height={46}
            src='/button/get-early-access/Get_Early_Access_Default.svg'
            alt='get early access button default'
          />
        </div>
      </div>
      <div className={styles.layoutImage}>
        <div>
          <Image
            layout='fill'
            src={'/banner/backgroundImageBanner.png'}
            alt='backgroundImageBanner'
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Panel);
