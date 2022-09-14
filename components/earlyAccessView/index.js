import styles from './earlyAccess.module.scss';
import React from 'react';

function EarlyAccessView() {
  const [isOpenForm, setIsOpenFrom] = React.useState(false);

  function openForm() {
    setIsOpenFrom(true);
  }
  return (
    <div id='earlyAccessView' className={styles.wrapperView}>
      {isOpenForm ? (
        <div className={styles.wrapperForm}></div>
      ) : (
        <div className={styles.button} onClick={openForm} />
      )}
    </div>
  );
}

export default EarlyAccessView;
