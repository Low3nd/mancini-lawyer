import Navbar from './navbar';
import Footer from './footer';
import styles from './layout.module.css'

const Layout = ({children}) => {
    const sectionIds = ['ACCUEIL', 'À PROPOS', 'COMPÉTENCES', 'HONORAIRES', 'CONTACT'];
    return (
        <>
            <Navbar sectionIds={sectionIds} />
            <main>{children}</main>
            <Footer sectionIds={sectionIds} />
        </>
    )
};

export default Layout;