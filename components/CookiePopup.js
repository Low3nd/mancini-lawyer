import Link from 'next/link';

import styles from '../styles/components/CookiePopup.module.css';

const CookiePopup = ({ setCookieConsent }) => {
    
    return (
        <div className={styles['cookie-popup']}>
            <p>Ce site n&apos;utilise pas de cookies, mais nous collectons des données via notre formulaire de contact. En continuant, vous acceptez notre <Link href='/competences'>politique de confidentialité</Link>.</p>
            <button
                onClick={() => {
                    localStorage.setItem('cookieConsent', 'true');
                    setCookieConsent(true);
                }}
            >
                OK
            </button>
        </div>
    )

}

export default CookiePopup;