import Image from 'next/image';
import styles from './value.module.scss';
import noEyeContact from '../../public/banner/noEyeContactBanner.svg';
import eyeContact from '../../public/banner/eyeContactBanner.svg';

function Value() {
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <span
          className={styles.title}
        >{`Looking at the camera is now a thing of the past with our automatic eye gaze adjustment*`}</span>
        <div className={styles.groupEyeView}>
          <div className={styles.noEyeContact}>
            <span
              className={styles.titleGroupNoEyeContact}
            >{`No eye contact`}</span>
            <Image src={noEyeContact} alt={'noEyeContactBanner'} />
          </div>
          <div className={styles.eyeContact}>
            <span
              className={styles.titleGroupEyeContact}
            >{`Eye contact enabled`}</span>
            <Image src={eyeContact} alt='eyeContactBanner' />
          </div>
        </div>
        <div className={`${styles.bottomContent} 'v-mt-17'`}>
          <span>{`As we approach Angela & Chris we are able to recognize they are actively engaged  in conversation`}</span>
          <span>{`* Coming Soon`}</span>
        </div>
      </div>
    </div>
  );
}

export default Value;
