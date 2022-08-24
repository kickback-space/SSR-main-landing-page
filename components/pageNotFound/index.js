import * as React from 'react';
import styles from './pageNotFound.module.scss';
import Image from 'next/image';
import notFoundImage from '../../public/banner/notFoundImage.svg';
import { useRouter } from 'next/router';

function PageNotFound() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push('/');
  };
  return (
    <div className={styles.wrapperContainer}>
      <div>
        <Image layout='responsive' src={notFoundImage} alt='not found image' />
        <div className={styles.numberNotFound}> 404</div>
        <div className={styles.textNotFound}>
          {'Oops! The page you are looking for doesn’t exist'}
        </div>
        <div className={styles.buttonStyled}>
          <button onClick={handleClick}>{'Go to homepage'}</button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
