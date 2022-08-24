import { useEffect } from 'react';
import styles from './question.module.scss';

function Question() {
  useEffect(() => {
    var coll = document.getElementsByClassName('question_collapsible__eL14B');
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener('click', function () {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    }
  }, []);
  return (
    <div className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Frequently Asked Questions'}</span>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{'What hardware do I need to use Kickback?'}</span>
            </button>
            <div className={styles.content}>
              <hr className={styles.divine} />
              <span>
                {
                  'All you need is a web camera and a microphone! We built Kickback with accessibility in mind, so you don’t have to worry about purchasing any additional hardware.'
                }
              </span>
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{'Through what network is my video processed?'}</span>
            </button>
            <div className={styles.content}>
              <hr className={styles.divine} />
              <span>
                {
                  'Everything enters through Google’s high speed network, and can go through either Google, Microsoft, Lumen, Oracle, or AWS’ private networks. It all depends on where you are; since we strive to give you the fastest connection we hook our network into various cloud providers. '
                }
              </span>
            </div>
          </div>
          <div className={styles.questionItem}>
            <button className={styles.collapsible}>
              <span>{'Does kick back care about privacy?'}</span>
            </button>
            <div className={styles.content}>
              <hr className={styles.divine} />
              <span>
                {
                  'Privacy is everything to us. Your data is always yours; you can choose to remove some or all data that is used to improve your experience within kick back. Our business model is soley dependent on providing you the best experience. In other words, we will never sell user data to 3rd parties.'
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
