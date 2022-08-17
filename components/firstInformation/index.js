import Image from 'next/image';
import styles from './firstInformation.module.scss';
import videoBanner from '../../public/banner/videoBannerFirstInformation.svg';
import groupBanner from '../../public/banner/groupBannerFirstInformation.svg';

function FirstInformation() {
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.firstContentWrapper}>
          <span
            className={styles.title}
          >{`2D video limits our ability to communicate naturally online`}</span>
          <div className={styles.videoBanner}>
            <Image src={videoBanner} alt={`videoBannerFirstInformation`} />
            <button>{`Get early access`}</button>
          </div>
        </div>
        <div className={styles.groupView}>
          <div className={styles.groupViewInfo}>
            <span
              className={styles.title}
            >{`What we need is a better, more organic communication medium`}</span>
            <div className={styles.groupViewBanner}>
              <Image src={groupBanner} alt={`groupBannerFirstInformation`} />
            </div>
            <span
              className={styles.info}
            >{`So we can kick back and feel connected again`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstInformation;
