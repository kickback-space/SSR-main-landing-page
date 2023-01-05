import Image from 'next/image';
import styles from './tradition.module.scss';

function TraditionView() {
  return (
    <div id='traditionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.leftView}>
          <div className={styles.wrapperImageView}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/banner/traditionBanner.png'}
              alt={`traditionBannerView`}
            />
          </div>
        </div>
        <div className={styles.rightView}>
          <span className={styles.title}>{`Traditionally:`}</span>
          <ul className={styles.wrapperDetail}>
            <li
              className={styles.detail}
            >{`Only one person can speak at time`}</li>
            <li
              className={styles.detail}
            >{`No sense of non-verbal communication`}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TraditionView;
