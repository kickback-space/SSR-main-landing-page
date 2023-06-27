import Image from 'next/image';
import styles from './tradition.module.scss';
import { traditionCopy } from '../utils/copyright_variables';

function TraditionView() {
  return (
    <div id='traditionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.leftView}>
          <span className={styles.title}>{traditionCopy.title}</span>
          <ul className={styles.wrapperDetail}>

          {traditionCopy.list.map((item, index) => {
              return (
                <li key={index} className={styles.detail}>
                  <span>{item}</span>
                </li>
              );
              })}
          </ul>
        </div>
        <div className={styles.rightView}>
          <div className={styles.wrapperImageView}>
            <Image
              layout='fill'
              objectFit='contain'
              src={'/banner/traditionBanner.png'}
              alt={`traditionBannerView`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraditionView;
