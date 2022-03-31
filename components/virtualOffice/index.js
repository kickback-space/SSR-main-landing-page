import Image from 'next/image';
import styles from './virtualOffice.module.scss'
import virtualOfficeBanner from '../../public/banner/virtualOfficeBanner.svg';
import checkedGreenIcon from '../../public/icon/checkedGreenIcon.svg';

function VirtualOffice() {
    return(
        <div className={styles.wrapperView}>
            <div className={styles.contentView}>
                <div className={styles.wrapperLeftView}>
                    <span className={styles.leftViewTitle}>{`Spin up your Virtual Office`}</span>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon1"/>
                        <span className={styles.leftViewGroupInfo}>
                            <span className={styles.leftViewGroupHighlight}>{`solve`}</span>
                            {` workforce `}
                            <span className={styles.leftViewGroupHighlight}>{`isolation`}</span>
                        </span>
                    </div>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon2"/>
                        <span className={styles.leftViewGroupInfo}>
                            {`foster `}
                            <span className={styles.leftViewGroupHighlight}>{`collaboration`}</span>
                            {` & `}
                            <span className={styles.leftViewGroupHighlight}>{`innovation`}</span>
                        </span>
                    </div>
                    <div className={`v-mt-16 ${styles.leftViewGroup}`}>
                        <Image src={checkedGreenIcon} alt="checkedGreenIcon3"/>
                        <span className={styles.leftViewGroupInfo}>
                            {`activate `}
                            <span className={styles.leftViewGroupHighlight}>{`serendipitous  conversations`}</span>
                        </span>
                    </div>
                    <button className={`v-mt-32 ${styles.leftViewButton}`}>{`See it in action`}</button>
                </div>
                <div className={styles.WrapperRightView}>
                    <Image src={virtualOfficeBanner} alt="virtualOfficeBanner"/>
                </div>
            </div>
        </div>
    )
}

export default VirtualOffice;