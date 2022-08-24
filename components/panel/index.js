import Image from 'next/image';
import styles from './panel.module.scss';
import videoBanner from '../../public/banner/videoBanner.svg';
import arrowBannerIcon from '../../public/icon/arrowBannerIcon.svg';
import backgroundImageBanner from '../../public/banner/backgroundImageBanner.png';
import earlyButton from '../../public/button/get-early-access/Get_Early_Access_Default.svg';

function Panel() {
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <div className={styles.videoGroup}>
            <Image src={videoBanner} alt='videoBanner' />
          </div>
          <div className={styles.infoGroup}>
            <span>{`kick back and foster conversations as if you’re actually together`}</span>
            <div className={styles.buttonContainer}>
              <button>{`See it in action`}</button>
            </div>
          </div>
        </div>
        <div className={`${styles.bottomPanel} v-mt-27 cursor`}>
          <Image src={arrowBannerIcon} alt='arrowBannerIcon' />
          <Image src={earlyButton} alt='get early access button default' />
        </div>
      </div>

      <div className={styles.layoutImage}>
        <Image
          layout='responsive'
          src={backgroundImageBanner}
          alt='backgroundImageBanner'
        />
      </div>
    </div>
  );
}

export default Panel;
