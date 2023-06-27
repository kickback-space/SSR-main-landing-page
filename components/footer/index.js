import Image from 'next/image';
import styles from './footer.module.scss';
import Insta from '../../public/icon/insta.svg';
import Email from '../../public/icon/email.svg';
import LogoNoColor from '../../public/icon/logoNoColor.svg';

function getStart() {
  let easyView = document.getElementById('easyView');
  easyView.scrollIntoView({ behavior: 'smooth' }, true);
}
function faqAction() {
  let faqView = document.getElementById('faqView');
  faqView.scrollIntoView({ behavior: 'smooth' }, true);
}
const currentYear = new Date().getFullYear();
function Footer() {
  return (
    <div id='footerView'>
      <div className={styles.divine} />
      <div className={styles.wrapperView}>
        <div className={styles.contentView}>
          <div className={styles.contactGroup}>
            <div className={styles.firstContact}>
              <div className={styles.leftFooter}>
                {/* <span
                  className='cursor'
                  onClick={getStart}
                >{`How to get started`}</span> */}
                <span className='cursor' onClick={faqAction}>{`FAQ`}</span>
              </div>
              <div className={styles.rightFooter}>
                <div className={styles.rightContent}>
                  <div className={styles.wrapperImage}>
                    <Image
                      layout='fill'
                      objectFit='contain'
                      src={Insta}
                      alt='instaIcon'
                    />
                  </div>
                  <span>{`kickback.space`}</span>
                </div>
                <div className={styles.rightContent}>
                  <div className={styles.wrapperImage}>
                    <Image
                      layout='fill'
                      objectFit='contain'
                      src={Email}
                      alt='emailIcon'
                    />
                  </div>
                  <span>{`support@kickback.space`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.logoGroup}>
          <div className={styles.wrapperImage}>
            <Image
              layout='fill'
              objectFit='contain'
              src={LogoNoColor}
              alt='logo'
            />
          </div>
          <span>{`Copyright reserved by Kickback Space Inc, ${currentYear}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
