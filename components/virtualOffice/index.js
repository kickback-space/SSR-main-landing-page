import Image from 'next/image';
import styles from './virtualOffice.module.scss';
import virtualOfficeBanner from '../../public/banner/virtualOfficeBanner.png';
import checkedGreenIcon from '../../public/icon/checkedGreenIcon.svg';

function VirtualOffice() {
  function actionClick() {
    window.open('https://calendly.com/rocco-haro/15min', '_blank');
  }
  return (
    <div id='virtualView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.WrapperRightView}>
          <Image
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
            <div className={styles.imageIcon}>
              <Image
                layout='fill'
                objectFit='contain'
                src={checkedGreenIcon}
                alt='checkedGreenIcon1'
              />
            </div>

            <span className={styles.leftViewGroupInfo}>
              {` Become an `}
              <span
                className={styles.leftViewGroupHighlight}
              >{`inclusive host `}</span>
            </span>
          </div>
          <div className={`v-mt-16 ${styles.leftViewGroup}`}>
            <div className={styles.imageIcon}>
              <Image
                layout='fill'
                objectFit='contain'
                src={checkedGreenIcon}
                alt='checkedGreenIcon1'
              />
            </div>
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
            <div className={styles.imageIcon}>
              <Image
                layout='fill'
                objectFit='contain'
                src={checkedGreenIcon}
                alt='checkedGreenIcon1'
              />
            </div>
            <span className={styles.leftViewGroupInfo}>
              {`Spark `}
              <span
                className={styles.leftViewGroupHighlight}
              >{`geniune  connections`}</span>
            </span>
          </div>
          <button
            onClick={actionClick}
            className={`v-mt-32 ${styles.leftViewButton}`}
          >{`See it in action`}</button>
        </div>
      </div>
    </div>
  );
}

export default VirtualOffice;
