import { useEffect } from 'react';
import styles from './faq.module.scss';
import Accordion from '../according';

function FAQ() {
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
    <div id='questionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Frequently Asked Questions'}</span>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={'What hardware do I need to use Kickback?'}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  {
                    'All you need is a web camera and a microphone! We built Kickback with accessibility in mind, so you don’t have to worry about purchasing any additional hardware.'
                  }
                </span>
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={'Through what network is my video processed?'}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  {
                    'Everything enters through Google’s high speed network, and can go through either Google, Microsoft, Lumen, Oracle, or AWS’ private networks. It all depends on where you are; since we strive to give you the fastest connection we hook our network into various cloud providers. '
                  }
                </span>
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={'Does kick back care about privacy?'}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  {
                    'Privacy is everything to us. Your data is always yours; you can choose to remove some or all data that is used to improve your experience within kick back. Our business model is soley dependent on providing you the best experience. In other words, we will never sell user data to 3rd parties. '
                  }
                </span>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
