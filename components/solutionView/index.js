import Image from 'next/image';
import styles from './solution.module.scss';

function SolutionView() {
  return (
    <div id='solutionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.headerView}>
          <div className={styles.headerLeft}>
            <span>{`What we need is a more natural solution `}</span>
          </div>
          <div className={styles.headerRight}>
            <span>{`that let’s everyone participate`}</span>
          </div>
        </div>
        <div className={styles.bodyView}>
          <div className={styles.bodyLeft}>
            <div className={styles.wrapperImageView}>
              <Image
                layout='fill'
                objectFit='contain'
                src={'/icon/solutionKickbackIcon.png'}
              />
            </div>
            <div className={styles.wrapperTitleView}>
              <ul>
                <li>{`enables parallel conversations`}</li>
                <li>{`promotes natural group transitions`}</li>
              </ul>
            </div>
            <div className={styles.wrapperDetailView}>
              <div className={styles.wrapperImageDetail}>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={'/icon/solutionDetailIcon.png'}
                />
              </div>
              <span>{`represents the audio waves of a person speaking. Larger represents louder waves`}</span>
            </div>
          </div>
          <div className={styles.bodyRight}>
            <div className={styles.wrapperVideo}>
              <video autoPlay muted loop playsInline>
                <source src='/video/solutionVideo.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionView;
