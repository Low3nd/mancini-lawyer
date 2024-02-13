import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from '../styles/components/ContactBanner.module.css';

const ContactBanner = () => {
    return (
        <div className={styles['contact-banner']}>
            <hr />
            <h2>Besoin d&apos;un renseignement ? De connaître nos disponibilités ?</h2>
            <h3>Nous sommes disponible pour toutes questions ou prises de rendez-vous</h3>
            <div className={styles['phone-link']}>
                <Link href='tel:+33616884541'>
                    <FontAwesomeIcon icon={`fa-solid fa-phone`} />
                    06.16.88.45.41
                </Link>
            </div>
            <div className={styles['button-wrapper']}>
                <Link href='/contact'>
                    <button>CONTACT</button>
                </Link>
            </div>
            <hr />
        </div>
    )
}

export default ContactBanner;