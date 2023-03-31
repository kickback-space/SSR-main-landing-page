import Image from 'next/image';
import styles from './virtualOffice.module.scss';
import virtualOfficeBanner from '../../public/banner/virtualOfficeBanner.png';
import checkedGreenIcon from '../../public/icon/checkedGreenIcon.svg';
import { usePlausible } from 'next-plausible';
import axios from 'axios';

function VirtualOffice() {
  const plausible = usePlausible();
  function actionClick() {
    plausible('SeeItInAction');
    const url = "https://api.kickback.space/api/v1/demo/environment_status?environment_name=open"
    axios.get(url).then( resp => {
      const is_up = resp.data.data.is_up
      if (is_up) {
        window.open('https://app.kickback.space');
      } else {
        window.open('https://calendly.com/rocco-haro/15min', '_blank');
      }
    }).catch( (e) => {
      console.log(e)
      window.open('https://calendly.com/rocco-haro/15min', '_blank');
    })
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
          >{`Host with us to`}</span>
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
              {`Enable fruitful `}
              <span
                className={styles.leftViewGroupHighlight}
              >{` networking `}</span>
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
              {`Elevate`}
              <span className={styles.leftViewGroupHighlight}>{` inclusivity`}</span>
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
              {`Easy to use;`}
              <span
                className={styles.leftViewGroupHighlight}
              >{` no downloads`}</span>
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
