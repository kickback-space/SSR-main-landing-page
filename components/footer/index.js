import Image from 'next/image';
import styles from './footer.module.scss'

const contactData = [
    {
        info: 'kickback.space',
        icon: 'kickback.space'
    },
    {
        info: 'support@kickback.space',
        icon: 'support@kickback.space'
    }
]

function ContactItem(props) {
    return (
        <div>

        </div>
    )
}

function Footer() {
    return(
        <div className={styles.wrapperView}>
            <div className={styles.contentView}>
                <div className={styles.line}></div>
                <div className={styles.contactGroup}>
                    <div>
                        <span>{`How to get started`}</span>
                        <span>{`FAQ`}</span>
                    </div>
                    <div>
                        {
                            contactData.map((item, index) => <ContactItem key={index} data={item}/>)
                        }
                    </div>
                </div>
                <div className={styles.logoGroup}>
                    <div>
                    </div>
                    <span>{`Copyright reserved by Kickback Space Inc, 2021`}</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;