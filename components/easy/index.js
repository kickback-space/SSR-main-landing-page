import Image from 'next/image';
import styles from './easy.module.scss'
import easyBanner from '../../public/banner/easyBanner.svg'
import number1 from '../../public/icon/number-1.svg';
import number2 from '../../public/icon/number-2.svg';
import number3 from '../../public/icon/number-3.svg';

const data = [
    {
        text: `Create & brand your space`,
        icon: number1
    },
    {
        text: `Invite people`,
        icon: number2
    },
    {
        text: `Feel like you're together again`,
        icon: number3
    }
];

function GroupItemView(props) {

    return (
        <div className={`${styles.groupItemView} ${props.index !== 0 ? 'v-mt-32' : ''}`}>
            <div className={styles.groupItemIcon}>
                <Image src={props.icon} alt={props.text}/>
            </div>
            <span className={styles.groupItemText}>{props.text}</span>
        </div>
    )
}

function Easy() {
    return(
        <div className={styles.wrapperView}>
            <div className={styles.contentView}>
                <div className={styles.easyBanner}>
                    <Image src={easyBanner} alt="easyBanner"/>
                </div>
                <div className={styles.groupView}>
                    <span className={styles.titleGroup}>{`It’s easy to get started`}</span>
                    {
                        data.map((item, index) => <GroupItemView key={index} index={index} text={item.text} icon={item.icon}/>)
                    }
                    <button className={styles.signUpButton}>{`Sign up for beta access now`}</button>
                </div>
            </div>
        </div>
    )
}

export default Easy;