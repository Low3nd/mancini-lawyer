import React, { useState } from 'react';
import Image from 'next/image';
import styles from './skillcard.module.css';
import clsx from 'clsx';

{/* <div className={styles['skill__card']}>
    <h4>Droit de la famille</h4>
    <div className={styles['skill__icon']}>
        <Image src="/user-tie-solid.svg" alt="" width={50} height={50} />
    </div>
</div> */}

const Skillcard = ({skillName, skillBullet, skillDescription}) => {
    const [cardState, setCardState] = useState(0);
    const cardClick = () => cardState === 0 ? setCardState(1):setCardState(0);
    const imgPath = "/" + skillName.toLowerCase().split(" ").join("-") + "-icon.svg";
    return (
        <div className={styles["c-skillcard"]}>
            <div className={clsx(
                styles["c-skillcard__container"],
                cardState === 1 && styles['c-skillcard__container--is-active'])}
                >
                <div className={styles['c-skillcard__front']} onClick={cardClick}>
                    <h4>{skillName}</h4>
                    <div className={styles['c-skillcard__front-icon']}>
                        <Image src={imgPath} alt="" width={50} height={50} />
                    </div>
                    <hr />
                    <ul className={styles['c-skillcard__front-bulletpoint']}>
                        {skillBullet.map((skillBullet) => (
                            <li key={`c-skillcard__front-bulletpoint-${skillBullet}`}>{skillBullet}</li>
                        ))}
                    </ul>
                </div>
                <div className={styles['c-skillcard__back']} onClick={cardClick}>
                    <h4>{skillName}</h4>
                    <p>{skillDescription}</p>
                </div>
            </div>
        </div>
    )
};

export default Skillcard;