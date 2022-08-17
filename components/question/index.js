import styles from './question.module.scss';

function Question() {
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span>{'Frequently Asked Questions'}</span>
        </div>
      </div>
    </div>
  );
}

export default Question;
