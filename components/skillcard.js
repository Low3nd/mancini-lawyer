import React, { useState } from 'react'
import Image from 'next/image'
import styles from './skillcard.module.css'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Skillcard = ({title, bullet, description, icon}) => {
    const [cardState, setCardState] = useState(0);
    const cardClick = () => cardState === 0 ? setCardState(1):setCardState(0);
    const imgPath = "/icon/skillcard_icon/" + title.toLowerCase().split(" ").join("-") + "-icon.svg";
    return (
        <div className={styles["c-skillcard"]}>
            <div className={clsx(
                styles["c-skillcard__individual-container"],
                cardState === 1 && styles['c-skillcard__container--is-active'])}
            >
                <div className={styles['c-skillcard__front']} onClick={cardClick}>
                    <h4>{title}</h4>
                    <div className={styles['c-skillcard__front-icon']}>
                        <FontAwesomeIcon icon={['fas', icon]} />
                    </div>
                    <hr />
                    <ul className={styles['c-skillcard__front-bulletpoint']}>
                        {bullet.map((bullet) => (
                            <li key={`c-skillcard__front-bulletpoint-${bullet}`}>{bullet}</li>
                        ))}
                    </ul>
                    <FontAwesomeIcon className={styles['c-skillcard__plus-button']} icon={['fas', 'plus']} />
                </div>
                <div className={styles['c-skillcard__back']} onClick={cardClick}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
};

export default Skillcard;