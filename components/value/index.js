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
        >{`kick back brings back non-verbal cues in 3D spaces; all with just your laptop`}</span>
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
      </div>
    </div>
  );
}

export default Value;
