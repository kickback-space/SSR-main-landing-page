import Image from 'next/image';
import styles from './virtualEvent.module.scss'
// import virtualEventBanner from '../../public/banner/virtualEventBanner.svg';
import virtualEventBanner from '../../public/banner/virtualEventBanner.png';
import checkedGreenIcon from '../../public/icon/checkedGreenIcon.svg';

function VirtualEvent() {
    return(
        <div className={styles.wrapperView}>

            <div className={styles.contentView}>
                <div className={styles.wrapperLeftView}>
                    <Image src={virtualEventBanner} alt="virtualEventBanner"/>
                </div>
                <div className={styles.WrapperRightView}>
                    <span className={styles.leftViewTitle}>{`Run a Virtual Event `}</span>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon1"/>
                        <span className={styles.leftViewGroupInfo}>
                            {`become an `}
                            <span className={styles.leftViewGroupHighlight}>{`inclusive host`}</span>
                        </span>
                    </div>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon2"/>
                        <span className={styles.leftViewGroupInfo}>
                            {`increase `}
                            <span className={styles.leftViewGroupHighlight}>{`engagement`}</span>
                            {` & `}
                            <span className={styles.leftViewGroupHighlight}>{`ROI`}</span>
                        </span>
                    </div>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon3"/>
                        <span className={styles.leftViewGroupInfo}>
                            {`spark `}
                            <span className={styles.leftViewGroupHighlight}>{`geniune connections`}</span>
                        </span>
                    </div>
                    <button className={`v-mt-32 ${styles.leftViewButton}`}>{`See it in action`}</button>
                </div>

            </div>
        </div>
    )
}

export default VirtualEvent;