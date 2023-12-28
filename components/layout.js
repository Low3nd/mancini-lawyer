import styles from '../styles/layout.module.css';

const Layout = ({children}) => {
    return (
        <>
            <div className={styles['mobile-wrapper']}>
                <main>{children}</main>
            </div>
        </>
    )
};

export default Layout;