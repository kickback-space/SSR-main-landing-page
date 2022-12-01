import Image from 'next/image';
import styles from './information.module.scss';

function Information() {
  return (
    <div id='informationView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.firstContentWrapper}>
          <span
            className={styles.title}
          >{`The traditional way kills group meetings & events`}</span>
          <div className={styles.videoBanner}>
            <Image
              src={'/banner/videoBannerFirstInformation.png'}
              alt={`videoBannerFirstInformation`}
              width={985}
              height={462}
            />
          </div>
        </div>
        <div className={styles.groupView}>
          <div className={styles.groupViewInfo}>
            <div className={styles.textInfo}>
              <span
                className={styles.titleInfo}
              >{`What we need is a better, more organic communication medium`}</span>
              <span
                className={styles.infoDesktop}
              >{`So we can kick back and feel connected again`}</span>
            </div>

            <div className={styles.groupViewBanner}>
              <Image
                width={530}
                height={530}
                src={'/banner/groupBannerFirstInformation.png'}
                alt={`groupBannerFirstInformation`}
              />
            </div>
            <span
              className={styles.infoMobile}
            >{`So we can kick back and feel connected again`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
