import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/pages/legal.module.css'


const Legal = ({sectionName, slugId}) => {
    return (
        <>
            <Navbar currentSection={2} sectionName={sectionName} slugId={slugId} />
            <div className={styles['title']}>
            <h1>MENTION LÉGALES</h1>
            <hr />
            </div>
            <section className={styles['c-legal']}>
                <div className={styles['c-legal__administration']}>
                    <h2>Informations légales, sociales et administrative</h2>
                </div>
                <div className={styles['c-legal__lawyer']}>
                    <h2></h2>
                    <p>L&apos;avocat qui ouvre ou modifie substantiellement un site Internet doit en informer le conseil de l&apos;Ordre sans délai et lui communiquer les noms de domaine qui permettent d&apos;y accéder.</p>
                    <p>Le nom de domaine doit comporter le nom de l&apos;avocat ou la dénomination du cabinet en totalité ou en abrégé, qui peut être suivi ou précédé du mot « avocat ».</p>
                    <p>L&apos;avocat doit, dans toute communication, veiller au respect des principes essentiels de la profession, faire état de sa qualité et permettre, quel que soit le support utilisé, de l&apos;identifier, de le localiser, de le joindre, de connaître le barreau auquel il est inscrit, la structure d&apos;exercice à laquelle il appartient et, le cas échéant, le réseau dont il est membre.</p>
                    <p>Il peut notamment faire mention :</p>
                    <ul>
                        <li>De sa ou ses spécialisations, ainsi que de sa ou ses qualifications spécifiques, régulièrement obtenues et non invalidées ;</li>
                        <li>De ses domaines d&apos;activités dominantes ;</li>
                        <li>Des missions visées à l&apos;article 6 du présent règlement qui peuvent lui être confiées. Lorsqu&apos;il agit dans le strict cadre d&apos;une telle mission, il doit l&apos;indiquer expressément</li>
                    </ul>
                </div>
                <div className={styles['c-legal__developer']}>
                    
                </div>
                <div className={styles['c-legal__host']}>
                    
                </div>
            </section>
            <Footer sectionName={sectionName} slugId={slugId} />
        </>
    )
}

export default Legal;