import styles from '../styles/component_testing.module.css';
import Skillcard from '../components/skillcard.js';

const ComponentTesting = () => {
    const skillList = [
        ['Droit de la famille', ['chazamm', 'hocus', 'pocus'], 'Texte très long qui décrit en détails une catégorie de compétence particulière'],
        ['Droit des entreprises', ['etiam', 'erat', 'velit'], 'Texte très long qui décrit en détails une catégorie de compétence particulière'],
        ['Test 3', ['erat', 'etiam', 'velit and company and more company'], 'Texte très long qui décrit en détails une catégorie de compétence particulière'],
        ['Test 4', ['velit', 'etiam', 'erat'], 'Texte très long qui décrit en détails une catégorie de compétence particulière'],
        ['Test 5', ['etiam', 'erat', 'velit'], 'Texte très long qui décrit en détails une catégorie de compétence particulière'],
        ['Test 6', ['vilora', 'erat', 'sabon'], 'Texte très long qui décrit en détails une catégorie de compétence particulière']
    ];
    const test = [1, 2, 3, 4, 5]
    return (
        <div className={styles['testing-container']}>
            {skillList.map((skillList) => (
                    <Skillcard key={`skill${skillList}`} skillName={skillList[0]} skillBullet={skillList[1]} skillDescription={skillList[2]} />
            ))}
        </div>
    )
}

export default ComponentTesting;