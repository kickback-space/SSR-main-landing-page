import styles from './accordion.module.scss';
import React, { memo } from 'react';
import Image from 'next/image';
import iconDropdown from '../../public/icon/iconDropdown.svg';
import iconDropUp from '../../public/icon/iconDropUp.svg';
import iconExpand from '../../public/icon/iconExpand.svg';
import iconExpanded from '../../public/icon/iconExpanded.svg';

function Accordion(props) {
  const { title, type, children, toggleAccordion, active, indexAccordion } =
    props;

  function handleOpenAccordion() {
    toggleAccordion(indexAccordion);
  }
  return (
    <div className={styles.accordionWrapper}>
      <div className={styles.accordion}>
        <div className={styles.item}>
          <div className={styles.title} onClick={handleOpenAccordion}>
            <div
              className={type ? styles.titleQuestionStyle : styles.titleStyle}
            >
              {title}
            </div>
            <div>
              {type ? (
                <>
                  <div
                    className={`${styles.icon} ${active && styles.isDisplay} `}
                  >
                    <Image
                      layout='fill'
                      objectFit='contain'
                      src={iconExpanded}
                    />
                  </div>
                  <div
                    className={`${styles.icon} ${!active && styles.isDisplay} `}
                  >
                    <Image layout='fill' objectFit='contain' src={iconExpand} />
                  </div>
                </>
              ) : (
                <>
                  <div
                    className={`${styles.icon} ${active && styles.isDisplay} `}
                  >
                    <Image layout='fill' objectFit='contain' src={iconDropUp} />
                  </div>
                  <div
                    className={`${styles.icon} ${!active && styles.isDisplay} `}
                  >
                    <Image
                      layout='fill'
                      objectFit='contain'
                      src={iconDropdown}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {active && <div className={styles.children}>{children}</div>}
        </div>
      </div>
    </div>
  );
}

export default memo(Accordion);
