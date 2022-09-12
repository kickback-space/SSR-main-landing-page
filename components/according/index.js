import styles from './accordion.module.scss';
import React, { Children, useState } from 'react';
import Image from 'next/image';
import iconDropdown from '../../public/icon/iconDropdown.svg';
import iconDropUp from '../../public/icon/iconDropUp.svg';
import iconExpand from '../../public/icon/iconExpand.svg';
import iconExpanded from '../../public/icon/iconExpanded.svg';

export default function Accordion({ title, type, children, styleTitle }) {
  const [isActive, setIsActive] = useState(false);
  const [isTransition, setTransition] = useState(false);
  function handleOpenAccordion() {
    setIsActive(!isActive);
    if (isActive) {
      setTransition(true);
    }
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
              {isActive ? (
                type ? (
                  <Image src={iconExpanded} />
                ) : (
                  <Image src={iconDropUp} />
                )
              ) : type ? (
                <Image src={iconExpand} />
              ) : (
                <Image src={iconDropdown} />
              )}
            </div>
          </div>
          {isActive && <div className={styles.children}>{children}</div>}
        </div>
      </div>
    </div>
  );
}
