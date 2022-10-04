import React, { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import styles from './menu.module.css';

const Menu = ({sectionIds}) => {
    const [testCounter, setTestCounter] = useState(0);
    const click = () => {
        testCounter === 0 ? setTestCounter(1) : setTestCounter(0);
        console.log(testCounter);
    }
    return (
        <>
            <input id="check0" className={styles['check0']} type="checkbox" onClick={() => click()}></input>
            <div className={clsx(
                styles['c-menu__container'],
                testCounter === 1 && styles['c-menu--is-active']
            )}>
                <div className={styles['c-menu__blur']} />
                <div className={styles['c-menu__sections']}>
                <input id="check" type="checkbox" onClick={() => click()}></input>
                </div>
            </div>
        </>
    )
};

export default Menu;
