import { useState } from 'react';
import Image from 'next/image';
import styles from './header.module.scss';
import headerIcon from '../../public/icon/headerIcon.svg';
import menuIcon from '../../public/icon/menuIcon.svg';

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  function getStart() {}

  function FAQ() {}

  function action() {}

  function handleChangeStateMenu(value) {
    setIsOpenMenu(value);
  }
  return (
    <div className={styles.headerWrapperView}>
      <div className={styles.headerLogo}>
        <Image src={headerIcon} alt='iconHeader' />
      </div>
      {/* <div className={styles.headerGroupView}>
        <span
          className={`cursor ${styles.titleItem}`}
          onClick={getStart}
        >{`How to get started`}</span>
        <span
          className={`v-ml-75 cursor ${styles.titleItem}`}
          onClick={FAQ}
        >{`FAQ`}</span>
        <button
          className={`v-ml-83 ${styles.actionButton}`}
          onClick={action}
        >{`See it in action`}</button>
      </div> */}
      <div className={styles.headerLogo}>
        <Image src={menuIcon} aclt='menuIcon' />
      </div>
    </div>
  );
}

export default Header;
