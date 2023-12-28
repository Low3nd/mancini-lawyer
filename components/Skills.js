import { useState } from 'react';
import styles from '../styles/components/Skills.module.css';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SkillItem = ({ title, list, text, icon }) => {

    const [skillState, setSkillState] = useState(0);

    return (
        <div className={styles['skill']}>
            <div className={styles['skill-header']}>
                    <h3>{title}</h3>
                    {/* <FontAwesomeIcon icon={['fas', icon]} /> */}
                    <ul>
                        {list.map((index) => (
                            <li className={styles['list-item']} key={index}>
                                {index}
                            </li>
                        ))}
                    </ul>
            </div>
            <div className={styles['skill-content']}>
                <p>{text}</p>
            </div>
        </div>
    )
}

const skillsData = [
    {
        "title": "Droit pénal",
        "list": ["Garde à vue, dépôt de plainte", "Crime/Délit/Contravention", "Auteur/Victime/Mineur"],
        "text": "Que vous soyez victime ou auteur d'une infraction, Maître MANCINI vous assiste dès le début de l'enquête et à tous les stades de la procédure. Du dépôt de plainte ou de la garde à vue, au renvoi devant le juridiction compétente, en passant par l'ouverture d'une information judiciaire devant le juge d'instruction, Maître MANCINI saura vous soutenir et établir la stratégie nécessaire au bon déroulé de votre affaire. Maître MANCINI est par ailleurs formée à l'accompagnement des mineurs devant les juridictions pénales.",
        "icon": "gavel"
    },
    {
        "title": "2",
        "list": ["1", "2", "3"],
        "text": "",
        "icon": ""
    },
    {
        "title": "3",
        "list": ["1", "2", "3"],
        "text": "",
        "icon": ""
    }
]

const Skills = () => {
    return (
        <div className={styles['skill-container']}>
            {skillsData.map((skill, index) => {
                const { title, list, icon, text } = skill
                return (
                    <SkillItem title={title} list={list} icon={icon} text={text} key={index} />
                )
            })}
        </div>
    )
}

export default Skills;
{/* <FontAwesomeIcon icon={['fas', icon]} /> */}