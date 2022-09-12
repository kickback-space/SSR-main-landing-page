import Image from 'next/image';
import styles from './virtualOffice.module.scss';
import virtualOfficeBanner from '../../public/banner/virtualOfficeBanner.svg';
import checkedGreenIcon from '../../public/icon/checkedGreenIcon.svg';

function VirtualOffice() {
  return (
    <div id='virtualView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.WrapperRightView}>
          <Image
            priority={true}
            width={785}
            height={558}
            src={virtualOfficeBanner}
            alt='virtualOfficeBanner'
          />
          <span>{`*Background removal coming soon`}</span>
        </div>
        <div className={styles.wrapperLeftView}>
          <span
            className={styles.leftViewTitle}
          >{`Run an immersive event `}</span>
          <div className={`v-mt-16 ${styles.leftViewGroup}`}>
            <Image
              priority={true}
              src={checkedGreenIcon}
              alt='checkedGreenIcon1'
            />
            <span className={styles.leftViewGroupInfo}>
              {` Become an `}
              <span
                className={styles.leftViewGroupHighlight}
              >{`inclusive host `}</span>
            </span>
          </div>
          <div className={`v-mt-16 ${styles.leftViewGroup}`}>
            <Image
              priority={true}
              src={checkedGreenIcon}
              alt='checkedGreenIcon2'
            />
            <span className={styles.leftViewGroupInfo}>
              {`Increase `}
              <span
                className={styles.leftViewGroupHighlight}
              >{`engagement`}</span>
              {` & `}
              <span className={styles.leftViewGroupHighlight}>{`ROI`}</span>
            </span>
          </div>
          <div className={`v-mt-16 ${styles.leftViewGroup}`}>
            <Image
              priority={true}
              src={checkedGreenIcon}
              alt='checkedGreenIcon3'
            />
            <span className={styles.leftViewGroupInfo}>
              {`Spark `}
              <span
                className={styles.leftViewGroupHighlight}
              >{`geniune  connections`}</span>
            </span>
          </div>
          <button
            className={`v-mt-32 ${styles.leftViewButton}`}
          >{`See it in action`}</button>
        </div>
      </div>
    </div>
  );
}

export default VirtualOffice;
