import Image from 'next/image';
import styles from './professional.module.scss'
import professionalDan from '../../public/avatar/professional/Dan.svg';
import professionalYossi from '../../public/avatar/professional/Yossi.svg';
import stanfordIcon from '../../public/icon/stanfordIcon.svg';
import googleIcon from '../../public/icon/googleIcon.svg';

const ProfessionalData = [
    {
        name : `Yossi Feinberg`,
        avatar: professionalDan,
        companyIcon: stanfordIcon,
        infor: 'The Adams Distinguished Professor of Management'
    },
    {
        name : `Dan Isla`,
        avatar: professionalYossi,
        companyIcon: googleIcon,
        infor: `Ex-Googler Cloud Solutions Architect`
    }
]


function ProfessionalCard(props) {
    return(
        <div className={styles.wrapperCard}>
            <div className={styles.avatar}>
                <Image {...props.data.avatar} alt={props.data.avatar}/>
            </div>
            <div className={styles.information}>
                <div className={styles.company}>
                    <Image {...props.data.companyIcon} alt={props.data.companyIcon} />
                </div>
                <span className={styles.name}>{props.data.name}</span>
                <span className={styles.info}>{props.data.infor}</span>
            </div>
        </div>
    )
}

function Professional() {
    return(
        <div className={styles.wrapperView}>
            <div className={styles.contentView}>
                <span className={styles.title}>{`Backed by, and Built for Professionals`}</span>
                <div className={styles.groupView}>
                    {
                        ProfessionalData.map((item, index) => <ProfessionalCard key={index} data={item}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Professional;