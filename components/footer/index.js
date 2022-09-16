import Image from 'next/image';
import styles from './footer.module.scss';
import Insta from '../../public/icon/insta.svg';
import Email from '../../public/icon/email.svg';
import LogoNoColor from '../../public/icon/logoNoColor.svg';

const contactData = [
  {
    info: 'kickback.space',
    icon: 'kickback.space',
  },
  {
    info: 'support@kickback.space',
    icon: 'support@kickback.space',
  },
];

function ContactItem(props) {
  return <div></div>;
}
function getStart() {
  let easyView = document.getElementById('easyView');
  easyView.scrollIntoView({ behavior: 'smooth' }, true);
}
function faqAction() {
  let faqView = document.getElementById('questionView');
  faqView.scrollIntoView({ behavior: 'smooth' }, true);
}

function Footer() {
  return (
    <div id='footerView'>
      <div className={styles.divine} />
      <div className={styles.wrapperView}>
        <div className={styles.contentView}>
          <div className={styles.contactGroup}>
            <div className={styles.firstContact}>
              <div className={styles.leftFooter}>
                <span
                  className='cursor'
                  onClick={getStart}
                >{`How to get started`}</span>
                <span className='cursor' onClick={faqAction}>{`FAQ`}</span>
              </div>
              <div className={styles.rightFooter}>
                <div className={styles.kickBackSpace}>
                  <Image src={Insta} alt='instaIcon' />
                  <p>{`kickback.space`}</p>
                </div>
                <div className={styles.kickBackSupport}>
                  <Image src={Email} alt='emailIcon' />
                  <p>{`support@kickback.space`}</p>
                </div>
              </div>
            </div>

            <div>
              {contactData.map((item, index) => (
                <ContactItem key={index} data={item} />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.logoGroup}>
          <Image src={LogoNoColor} alt='logo' />
          <span>{`Copyright reserved by Kickback Space Inc, 2021`}</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
