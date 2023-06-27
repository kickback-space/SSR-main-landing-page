import { useState, memo } from 'react';
import styles from './faq.module.scss';
import Accordion from '../according';
import { faqCopy } from '../utils/copyright_variables';

function FAQ() {
  const [indexActive, setIndexActive] = useState(null);
  function updateStateAccordion(indexAccordion) {
    let result = indexActive === indexAccordion ? null : indexAccordion;
    setIndexActive(result);
  }

  return (
    <div id='faqView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.titleGroup}>
          <span className={styles.title}>{'Frequently Asked Questions'}</span>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={'What hardware do I need to use Kickback?'}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 1}
              indexAccordion={1}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  {
                    'All you need is a laptop equipped with a webcam and microphone! We designed kick back with accessibility in mind, so you don’t have to worry about purchasing additional hardware.'
                  }
                </span>
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={'Does Kickback care about privacy?'}
              toggleAccordion={updateStateAccordion}
              active={indexActive === 3}
              indexAccordion={3}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  {
                    'Privacy is everything to us. Your data is always yours; you can choose to remove some or all data that is used to improve your experience within kick back. Our business model is soley dependent on delivering the best experience.'
                  }
                </span>
              </div>
            </Accordion>
          </div>
          <div className={styles.questionItem}>
            <Accordion
              type='question'
              title={ faqCopy.whyKickback.title }
              toggleAccordion={updateStateAccordion}
              active={indexActive === 2}
              indexAccordion={2}
            >
              <div className={styles.content}>
                <div className={styles.divine} />
                <span>
                  { faqCopy.whyKickback.content1 }
                  <br />
                  <br />
                  { faqCopy.whyKickback.content2 }
                </span>
              </div>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(FAQ);
