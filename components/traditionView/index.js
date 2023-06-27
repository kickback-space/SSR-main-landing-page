import Image from 'next/image';
import styles from './tradition.module.scss';

function TraditionView(props) {
  const { copy } = props;
  return (
    <div id='traditionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.leftView}>
          <span className={styles.title}>{copy.tradition.title}</span>
          <ul className={styles.wrapperDetail}>

          {copy.tradition.list.map((item, index) => {
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
