import Navbar from './navbar';
import Footer from './footer';
import menuIds from '../data/menu.json';

const Layout = ({children}) => {
    return (
        <>
            <main>{children}</main>
            <Footer sectionIds={menuIds.sectionIds} />
        </>
    )
};

export default Layout;