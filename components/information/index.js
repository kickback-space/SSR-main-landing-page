import Image from 'next/image';
import styles from './information.module.scss';

function Information() {
  return (
    <div id='informationView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.firstContentWrapper}>
          <span
            className={styles.title}
          >{`Traditional methods hinder the potential of fluid, open-dialogue meetings.`}</span>
          <div className={styles.videoBanner}>
            <Image
              src={'/banner/videoBannerFirstInformation.png'}
              alt={`videoBannerFirstInformation`}
              width={985}
              height={462}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
