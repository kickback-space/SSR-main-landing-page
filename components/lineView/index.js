import Image from 'next/image';
import styles from './lineView.module.scss';
import lineIcon from '../../public/icon/orIcon.svg';

function LineView() {
    return(
        <div className={styles.wrapperView}>
            <div className={styles.contentView}>
                <div className={styles.groupView}></div>
                <div className={styles.lineIcon}>
                    <Image alt={`lineIcon`} src={lineIcon} width={58} height={68}/>
                </div>
                <div className={styles.groupView}></div>
            </div>
        </div>
    )
}
export default LineView;