import Menu from './menu.js'
import Link from 'next/link';
import clsx from 'clsx';
import styles from '../styles/components/navbar.module.css';
import { useState } from 'react';

const Navbar = ({sectionName, currentSection, slugId, forceDarkMode}) => {
    const [menuState, setmenuState] = useState(0);
    const menuActivation = () => {
        menuState === 0 ? setmenuState(1) : setmenuState(0);
    }
    console.log(currentSection)

    return (
        <nav className={clsx(
            styles['c-nav'],
            currentSection === 0 && styles['c-nav--hero-theme'],
            currentSection === 1 && styles['c-nav--dark-theme'],
            currentSection === 2 && styles['c-nav--light-theme'],
            currentSection === 3 && styles['c-nav--dark-theme'],
            currentSection === 5 && styles['c-nav--dark-theme'],
            forceDarkMode === true && styles['c-nav--dark-theme']
        )}>
            <Link href="/#accueil" scroll={false} legacyBehavior>
                <a className={styles['c-nav__logo']}>
                    <svg className={styles['c-nav__logo-image']} viewBox="0 0 64 38" xmlns="http://www.w3.org/2000/svg">
                        <path fill="" d="M63.4 0.0999985V1.2C62.2 1.2 61.3 1.4 60.7001 1.6C60.1001 1.8 59.7 2.3 59.5 2.9C59.3 3.5 59.2001 4.5 59.2001 5.8V32.1C59.2001 33.4 59.3 34.3 59.5 35C59.7 35.7 60.1001 36.1 60.7001 36.3C61.3 36.5 62.2 36.7 63.4 36.7V37.8C62.6 37.7 61.6 37.7 60.4 37.7C59.2 37.7 58 37.7 56.7001 37.7C55.3 37.7 54 37.7 52.8 37.7C51.6 37.7 50.6 37.8 49.9 37.8V36.7C51.1 36.6 52.0001 36.5 52.6001 36.3C53.2001 36.1 53.6 35.7 53.8 35C54 34.4 54.1001 33.4 54.1001 32.1V2.9L54.3 3.1L41.3 38H40.5L27.2001 3.5V19.3H26V5.7C26 4.4 25.9001 3.4 25.7001 2.8C25.5001 2.2 25.1 1.8 24.5 1.5C23.9 1.3 23 1.1 21.8 1.1V0C22.4 0 23.2 0.0999985 24.1 0.0999985C25 0.0999985 25.9 0.200001 26.8 0.200001C27.6 0.200001 28.4001 0.199998 29.2001 0.0999985C30.0001 0.0999985 30.7 0 31.3 0L43.3 31.7L42.4 32.1L54.3 0.0999985C54.7001 0.0999985 55.1 0.0999985 55.5 0.0999985C55.9 0.0999985 56.3 0.0999985 56.7001 0.0999985C57.9001 0.0999985 59.2 0.1 60.4 0C61.6 0.2 62.6 0.199998 63.4 0.0999985Z"/>
                        <path fill="" d="M13.4 0.200012V1.30001C12.2 1.30001 11.3 1.50001 10.7 1.70001C10.1 1.90001 9.7 2.40001 9.5 3.00001C9.3 3.60001 9.2 4.60001 9.2 5.90001V32.2C9.2 33.5 9.3 34.4 9.5 35.1C9.7 35.8 10.1 36.2 10.7 36.3C11.3 36.5 12.2 36.6 13.4 36.6H17.3C19 36.6 20.3 36.4 21.4 36.1C22.4 35.7 23.3 35.2 23.9 34.4C24.5 33.6 25 32.6 25.3 31.4C25.6 30.1 25.9 28.6 26 26.7H27.2C27.1 27.8 27 29.2 27 31C27 31.7 27 32.6 27.1 33.9C27.2 35.2 27.3 36.5 27.4 37.8C25.6 37.7 23.6 37.7 21.3 37.7C19 37.7 17 37.7 15.3 37.7C14.5 37.7 13.5 37.7 12.3 37.7C11.1 37.7 9.8 37.7 8.4 37.7C7 37.7 5.6 37.7 4.1 37.8C2.7 37.8 1.3 37.8 0 37.9V36.8C1.2 36.7 2.1 36.6 2.7 36.4C3.3 36.2 3.7 35.8 3.9 35.1C4.1 34.5 4.2 33.5 4.2 32.2V5.90001C4.2 4.60001 4.1 3.60001 3.9 3.00001C3.7 2.40001 3.3 2.00001 2.7 1.70001C2.1 1.50001 1.2 1.30001 0 1.30001V0.200012C0.7 0.200012 1.7 0.300011 2.9 0.300011C4.1 0.300011 5.4 0.400009 6.8 0.400009C8 0.400009 9.3 0.400011 10.5 0.300011C11.6 0.300011 12.6 0.300012 13.4 0.200012Z"/>
                    </svg>
                    <span>MANCINI<br />AVOCATE</span>
                </a>
            </Link>
            <ul className={clsx(
                styles['c-nav__menu'],
                currentSection === 0 && styles['c-nav__menu--hero-theme'],
                menuState === 1 && styles['c-nav__menu--menu-is-active']
            )}>
                {sectionName.map((id) => {
                    if (id != 'À PROPOS' && id != 'ACCUEIL') {
                        return (
                            <li key={`c-nav__menu-item${id}`} className={styles['c-nav__menu-item']}>
                                <Link href={slugId[sectionName.indexOf(id)]} scroll={true} legacyBehavior>
                                    <a
                                        className={clsx(
                                                styles['c-nav__menu-link'],
                                                currentSection === sectionName.indexOf(id) && styles['c-nav__menu-link--is-current'],
                                        )}
                                        draggable="false"
                                    >
                                        {id}
                                    </a>
                                </Link>
                            </li>
                        )
                    } else {
                        return (
                            <li key={`c-nav__menu-item${id}`} className={styles['c-nav__menu-item']}>
                                <Link href={`/#${slugId[sectionName.indexOf(id)]}`} scroll={true} legacyBehavior>
                                    <a
                                        className={clsx(
                                            // TODO: onClick is to be removed when implementing scrollSpy
                                                styles['c-nav__menu-link'],
                                                currentSection === sectionName.indexOf(id) && styles['c-nav__menu-link--is-current'],
                                        )}
                                        draggable="false"
                                    >
                                        {id}
                                    </a>
                                </Link>
                            </li>
                        )
                    }
                })}
            </ul>
            <svg className={clsx(
                styles['c-nav__hamburger-menu'],
                currentSection === 0 && styles['c-nav__hamburger-menu--hero-theme'],
                currentSection === 1 && styles['c-nav__hamburger-menu--dark-theme'],
                currentSection === 2 && styles['c-nav__hamburger-menu--light-theme'],
                currentSection === 3 && styles['c-nav__hamburger-menu--dark-theme'],
                currentSection === 4 && styles['c-nav__hamburger-menu--light-theme'],
                forceDarkMode === true && styles['c-nav__hamburger-menu--forced-dark-theme'],
                menuState === 1 && styles['c-nav__hamburger-menu--dark-theme'],
                menuState === 1 && styles['c-nav__hamburger-menu--is-active']
            )}
            onClick={() => menuActivation()} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. */}<path fill="currentcolor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            <Menu slugId={slugId} sectionName={sectionName} menuState={menuState} menuActivation={menuActivation} />
        </nav>
    )
};

export default Navbar;