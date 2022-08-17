import Image from 'next/image';
import styles from './panel.module.scss';
import videoBanner from '../../public/banner/videoBanner.svg';
import arrowBannerIcon from '../../public/icon/arrowBannerIcon.svg';
import backgroundImageBanner from '../../public/banner/backgroundImageBanner.png';

function Panel() {
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <div className={styles.videoGroup}>
            <Image src={videoBanner} alt='videoBanner' />
          </div>
          <span>{`Kick back and foster authentic conversations - from anywhere`}</span>
          <div className={styles.buttonContainer}>
            <button>{`See it in action`}</button>
          </div>
          {/* <div className={`v-mt-114 cursor`}>
            <Image src={arrowBannerIcon} alt='arrowBannerIcon' />
          </div>
           */}
        </div>
      </div>
      <div className={styles.layoutImage}>
        <Image src={backgroundImageBanner} alt='backgroundImageBanner' />
      </div>
    </div>
  );
}

export default Panel;
