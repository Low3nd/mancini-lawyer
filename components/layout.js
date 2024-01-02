import CookiePopup from '../components/CookiePopup';
import DevConsole from '../components/DevConsole';

import styles from '../styles/layout.module.css';

const Layout = ({ children, cookieConsent, setCookieConsent }) => {
    return (
        <>
            <div className={styles['mobile-wrapper']}>
                {/* <DevConsole cookieConsent={cookieConsent} /> */}
                {/* {cookieConsent === null && <CookiePopup setCookieConsent={setCookieConsent} />} */}
                <main>{children}</main>
            </div>
        </>
    )
};

export default Layout;