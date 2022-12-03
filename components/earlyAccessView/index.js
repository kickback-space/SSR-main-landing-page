import styles from './earlyAccess.module.scss';
import React from 'react';
import Image from 'next/image';
function EarlyAccessView(props) {
  const [isOpenForm, setIsOpenFrom] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function openForm() {
    window.open(
      'https://xtm50lcgfwe.typeform.com/to/cTz6CDkh?typeform-source=landing_page_desktop'
    );
    setIsOpenFrom(true);
  }

  function handleScroll() {
    let isHiddenNextView = window.scrollY > 100;
    let el = document.getElementById('nextView');
    if (el) {
      if (el.classList.contains('isVisibleIcon') && !isHiddenNextView) {
        el.classList.remove('isVisibleIcon');
        el.style.visibility = '';
        return;
      }
      if (!el.classList.contains('isVisibleIcon') && isHiddenNextView) {
        el.classList.add('isVisibleIcon');
        el.style.visibility = 'hidden';
        return;
      }
    }
  }

  function handleTransitionNextView() {
    let nextView = document.getElementById('informationView');
    nextView.scrollIntoView({ behavior: 'smooth' }, true);
  }
  return (
    <div id='earlyAccessView' className={styles.wrapperView}>
      <div id='nextView' className={`${styles.bottomPanel} cursor`}>
        <Image
          onClick={handleTransitionNextView}
          layout='fill'
          objectFit='contain'
          src={'/icon/arrowBannerIcon.svg'}
          alt='arrowBannerIcon'
        />
      </div>
      <button className={styles.button} onClick={openForm} />
    </div>
  );
}

export default EarlyAccessView;
