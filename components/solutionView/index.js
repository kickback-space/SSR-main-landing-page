import Image from 'next/image';
import styles from './solution.module.scss';

function SolutionView(props) {
  const { copy } = props;
  return (
    <div id='solutionView' className={styles.wrapperView}>
      <div className={styles.contentView}>
        <div className={styles.headerView}>
          <div className={styles.headerLeft}>
            <span>{copy.solution.headerLeft}</span>
          </div>
          <div className={styles.headerRight}>
            <span>{copy.solution.headerRight}</span>
          </div>
        </div>
        <div className={styles.bodyView}>
          <div className={styles.bodyLeft}>
            <div className={styles.wrapperImageView}>
              <Image
                layout='fill'
                objectFit='contain'
                src={'/icon/solutionKickbackIcon.png'}
                alt={`logo`}
              />
            </div>
            <div className={styles.wrapperTitleView}>
              <ul>
                {copy.solution.list.map((item, index) => {
                  return (
                    <li key={index} className={styles.title}>
                      <span>{item}</span>
                    </li>
                  );
                })}
                {/* <li>{`Immersive 3D environments`}</li>
                <li>{`Dynamic spatial audio`}</li>
                <li>{`High-quality video`}</li> */}
              </ul>
            </div>
            {/* <div className={styles.wrapperDetailView}>
              <div className={styles.wrapperImageDetail}>
                <Image
                  layout='fill'
                  objectFit='contain'
                  src={'/icon/solutionDetailIcon.png'}
                />
              </div>
              <span>{`represents the audio waves of a person speaking. Larger represents louder waves`}</span>
            </div> */}
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
