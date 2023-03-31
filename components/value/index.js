import Image from 'next/image';
import styles from './value.module.scss';
import valueBanner from '../../public/banner/valueBanner.png';

function Value() {
  return (
    <div id='valueView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <span
          className={styles.title}
        >{`Experience lifelike audio and have full control over your conversations.`}</span>
        <span
          className={styles.info}
        >{`Audio reflects spatial reality, allowing for smooth transitions in and out of conversations.`}</span>
        <div className={styles.groupEyeView}>
          <Image layout='fill' src={valueBanner} alt='eyeContactBanner' />
        </div>
      </div>
    </div>
  );
}

export default Value;
