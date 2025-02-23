import Link from 'next/link'
import styles from '../styles/components/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const Footer = ({sectionName, slugId}) => {
    return (
        <footer className={styles['c-footer']}>
            <div className={styles['c-footer__contact-summary']}>
                <div className={styles['c-footer__contact-schedule-container']}>
                    <div className={styles['c-footer__contact-schedule']}>
                        <h3>Horaires</h3>
                        <p>Du lundi au vendredi:</p>
                        <ul>
                            <li>9h à 12h</li>
                            <li>14h à 18h</li>
                        </ul>
                    </div>
                </div>
                <svg className={styles['c-footer__contact-logo']} width="100" height="100" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6142 23.3858 101 51 101Z" stroke="black" strokeMiterlimit="10"/>
                    <path d="M82.6999 32.1V33.2C81.4999 33.2 80.5999 33.4 79.9999 33.6C79.3999 33.8 78.9999 34.3 78.7999 34.9C78.5999 35.5 78.4999 36.5 78.4999 37.8V64.1C78.4999 65.4 78.5999 66.3 78.7999 67C78.9999 67.7 79.3999 68.1 79.9999 68.3C80.5999 68.5 81.4999 68.7 82.6999 68.7V69.8C81.8999 69.7 80.8999 69.7 79.6999 69.7C78.4999 69.7 77.2999 69.7 75.9999 69.7C74.5999 69.7 73.2999 69.7 72.0999 69.7C70.8999 69.7 69.8999 69.8 69.1999 69.8V68.7C70.3999 68.6 71.2999 68.5 71.8999 68.3C72.4999 68.1 72.8999 67.7 73.0999 67C73.2999 66.4 73.3999 65.4 73.3999 64.1V34.9L73.5999 35.1L60.5999 70H59.7999L46.4999 35.5V51.3H45.2999V37.7C45.2999 36.4 45.1999 35.4 44.9999 34.8C44.7999 34.2 44.3999 33.8 43.7999 33.5C43.1999 33.3 42.2999 33.1 41.0999 33.1V32C41.6999 32 42.4999 32.1 43.3999 32.1C44.2999 32.1 45.1999 32.2 46.0999 32.2C46.8999 32.2 47.6999 32.2 48.4999 32.1C49.2999 32.1 49.9999 32 50.5999 32L62.5999 63.7L61.6999 64.1L73.5999 32.1C73.9999 32.1 74.3999 32.1 74.7999 32.1C75.1999 32.1 75.5999 32.1 75.9999 32.1C77.1999 32.1 78.4999 32.1 79.6999 32C80.8999 32.2 81.8999 32.2 82.6999 32.1Z" fill="black"/>
                    <path d="M32.6999 32.2V33.3C31.4999 33.3 30.5999 33.5 29.9999 33.7C29.3999 33.9 28.9999 34.4 28.7999 35C28.5999 35.6 28.4999 36.6 28.4999 37.9V64.2C28.4999 65.5 28.5999 66.4 28.7999 67.1C28.9999 67.8 29.3999 68.2 29.9999 68.3C30.5999 68.5 31.4999 68.6 32.6999 68.6H36.5999C38.2999 68.6 39.5999 68.4 40.6999 68.1C41.6999 67.7 42.5999 67.2 43.1999 66.4C43.7999 65.6 44.2999 64.6 44.5999 63.4C44.8999 62.1 45.1999 60.6 45.2999 58.7H46.4999C46.3999 59.8 46.2999 61.2 46.2999 63C46.2999 63.7 46.2999 64.6 46.3999 65.9C46.4999 67.2 46.5999 68.5 46.6999 69.8C44.8999 69.7 42.8999 69.7 40.5999 69.7C38.2999 69.7 36.2999 69.7 34.5999 69.7C33.7999 69.7 32.7999 69.7 31.5999 69.7C30.3999 69.7 29.0999 69.7 27.6999 69.7C26.2999 69.7 24.8999 69.7 23.3999 69.8C21.9999 69.8 20.5999 69.8 19.2999 69.9V68.8C20.4999 68.7 21.3999 68.6 21.9999 68.4C22.5999 68.2 22.9999 67.8 23.1999 67.1C23.3999 66.5 23.4999 65.5 23.4999 64.2V37.9C23.4999 36.6 23.3999 35.6 23.1999 35C22.9999 34.4 22.5999 34 21.9999 33.7C21.3999 33.5 20.4999 33.3 19.2999 33.3V32.2C19.9999 32.2 20.9999 32.3 22.1999 32.3C23.3999 32.3 24.6999 32.4 26.0999 32.4C27.2999 32.4 28.5999 32.4 29.7999 32.3C30.8999 32.3 31.8999 32.3 32.6999 32.2Z" fill="black"/>
                </svg>
                <div className={styles['c-footer__contact-info-container']}>
                    <div className={styles['c-footer__contact-info']}>
                        <h3>Léa Mancini</h3>
                        <div className={styles['c-footer__contact-detail']}>
                            <FontAwesomeIcon icon={faPhone} />
                            <p>06.16.88.45.41</p>
                        </div>
                        <div className={styles['c-footer__contact-detail']}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <Link href='mailTo:lea.mancini@avocat.fr'>lea.mancini@avocat.fr</Link>
                        </div>
                        <div className={styles['c-footer__contact-detail']}>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>31 rue George Sand<br />37000 Tours</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <ul className={styles['c-footer__sitemap']}>
                {sectionName.map((id) => {
                    if (id != 'ACCUEIL' && id != 'À PROPOS') {
                        return (
                            <span key={`c-footer__sitemap-${id}`} className={styles['c-footer__sitemap-link']}>
                                <Link href={slugId[sectionName.indexOf(id)]} scroll={true} legacyBehavior>
                                    <a>{id}</a>
                                </Link>
                            </span>
                        )
                    } else {
                        return (
                            <span key={`c-footer__sitemap-${id}`} className={styles['c-footer__sitemap-link']}>
                                <Link href={`/#${slugId[sectionName.indexOf(id)]}`} scroll={false} legacyBehavior>
                                    <a>{id}</a>
                                </Link>
                            </span>
                        )
                    }
                })}
            </ul>
            <div className={styles['c-footer__legal-link']}>
                <Link href="/legal" scroll={true} legacyBehavior>
                    <a>Mentions Légales</a>
                </Link>
                <p>© Boolean Design</p>
            </div>
        </footer>
    )
};

export default Footer;