import Image from 'next/image';
import styles from './value.module.scss';
import valueBanner from '../../public/banner/valueBanner.png';

function Value() {
  return (
    <div id='valueView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <span
          className={styles.title}
        >{`Hear people as you would in real life and control your conversations`}</span>
        <span
          className={styles.info}
        >{`Those who are closer sound louder than those who are distant, letting you move in and out of conversations gracefully`}</span>
        <div className={styles.groupEyeView}>
          <Image layout='fill' src={valueBanner} alt='eyeContactBanner' />
        </div>
      </div>
    </div>
  );
}

export default Value;
