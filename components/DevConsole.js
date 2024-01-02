import styles from '../styles/components/DevConsole.module.css'

const DevConsole = ({ cookieConsent }) => {
    return (
        <div className={styles['dev-console']}>
            <button onClick={() => localStorage.removeItem('cookieConsent')}>Clear localStorage</button>
            <button onClick={() => console.log(localStorage.getItem('cookieConsent'))}>Log localStorage</button>
            <button onClick={() => console.log(cookieConsent)}>Log CookieState</button>
        </div>
    )
}

export default DevConsole;