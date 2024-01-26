import Link from 'next/link';

import styles from '../styles/components/CookiePopup.module.css';

const CookiePopup = ({ setCookieConsent }) => {
    
    return (
        <div className={styles['cookie-popup']}>
            <p>Ce site utilise des cookies tiers nécessaire à son bon fonctionnement et vous donne la possibilité de les refuser.</p>
            <div className={styles['button']}>
                <button
                    onClick={() => {
                        localStorage.setItem('cookieConsent', 'true');
                        setCookieConsent(true);
                    }}
                >
                    Accepter
                </button>
                <button
                    onClick={() => {
                        localStorage.setItem('cookieConsent', 'false');
                        setCookieConsent(false);
                    }}
                >
                    Refuser
                </button>
            </div>
        </div>
    )

}

export default CookiePopup;