import { useRef } from 'react';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import useScrollSpy from 'react-use-scrollspy';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SkillMenu from '../components/SkillMenu';
import ContactBanner from '../components/contactBanner';

import styles from '../styles/pages/index.module.css';

import bioPic from '../public/img/bio-pic3.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPhone, faBuilding, faMail } from '@fortawesome/free-solid-svg-icons';


const Home = ({slugId, sectionName, skillState, setSkillState}) => {

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -81,
  })
  console.log(activeSection)

  return (
    <>
      <Head>
        <title>Maître MANCINI - Avocate à Tours</title>
        <meta name="description" content="Maître Léa Mancini, avocate du barreau de Tours, vous accompagne et vous conseille dans vos démarches juridiques, procès, ou dans la médiation de vos conflits." />
        <link rel="canonical" href="https://www.mancini-avocat.fr" />
      </Head>
      <Navbar currentSection={activeSection} sectionName={sectionName} slugId={slugId} />
      <section id="accueil" className={styles['c-hero']} ref={sectionRefs[0]}>
        <div className={styles['c-hero__content']}>
          <div className={styles['c-hero__logo']} ref={sectionRefs[1]}>
            <svg viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51 101C78.6142 101 101 78.6142 101 51C101 23.3858 78.6142 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6142 23.3858 101 51 101Z" stroke="currentcolor" strokeMiterlimit="10"/>
                <path d="M82.6999 32.1V33.2C81.4999 33.2 80.5999 33.4 79.9999 33.6C79.3999 33.8 78.9999 34.3 78.7999 34.9C78.5999 35.5 78.4999 36.5 78.4999 37.8V64.1C78.4999 65.4 78.5999 66.3 78.7999 67C78.9999 67.7 79.3999 68.1 79.9999 68.3C80.5999 68.5 81.4999 68.7 82.6999 68.7V69.8C81.8999 69.7 80.8999 69.7 79.6999 69.7C78.4999 69.7 77.2999 69.7 75.9999 69.7C74.5999 69.7 73.2999 69.7 72.0999 69.7C70.8999 69.7 69.8999 69.8 69.1999 69.8V68.7C70.3999 68.6 71.2999 68.5 71.8999 68.3C72.4999 68.1 72.8999 67.7 73.0999 67C73.2999 66.4 73.3999 65.4 73.3999 64.1V34.9L73.5999 35.1L60.5999 70H59.7999L46.4999 35.5V51.3H45.2999V37.7C45.2999 36.4 45.1999 35.4 44.9999 34.8C44.7999 34.2 44.3999 33.8 43.7999 33.5C43.1999 33.3 42.2999 33.1 41.0999 33.1V32C41.6999 32 42.4999 32.1 43.3999 32.1C44.2999 32.1 45.1999 32.2 46.0999 32.2C46.8999 32.2 47.6999 32.2 48.4999 32.1C49.2999 32.1 49.9999 32 50.5999 32L62.5999 63.7L61.6999 64.1L73.5999 32.1C73.9999 32.1 74.3999 32.1 74.7999 32.1C75.1999 32.1 75.5999 32.1 75.9999 32.1C77.1999 32.1 78.4999 32.1 79.6999 32C80.8999 32.2 81.8999 32.2 82.6999 32.1Z" fill="currentcolor"/>
                <path d="M32.6999 32.2V33.3C31.4999 33.3 30.5999 33.5 29.9999 33.7C29.3999 33.9 28.9999 34.4 28.7999 35C28.5999 35.6 28.4999 36.6 28.4999 37.9V64.2C28.4999 65.5 28.5999 66.4 28.7999 67.1C28.9999 67.8 29.3999 68.2 29.9999 68.3C30.5999 68.5 31.4999 68.6 32.6999 68.6H36.5999C38.2999 68.6 39.5999 68.4 40.6999 68.1C41.6999 67.7 42.5999 67.2 43.1999 66.4C43.7999 65.6 44.2999 64.6 44.5999 63.4C44.8999 62.1 45.1999 60.6 45.2999 58.7H46.4999C46.3999 59.8 46.2999 61.2 46.2999 63C46.2999 63.7 46.2999 64.6 46.3999 65.9C46.4999 67.2 46.5999 68.5 46.6999 69.8C44.8999 69.7 42.8999 69.7 40.5999 69.7C38.2999 69.7 36.2999 69.7 34.5999 69.7C33.7999 69.7 32.7999 69.7 31.5999 69.7C30.3999 69.7 29.0999 69.7 27.6999 69.7C26.2999 69.7 24.8999 69.7 23.3999 69.8C21.9999 69.8 20.5999 69.8 19.2999 69.9V68.8C20.4999 68.7 21.3999 68.6 21.9999 68.4C22.5999 68.2 22.9999 67.8 23.1999 67.1C23.3999 66.5 23.4999 65.5 23.4999 64.2V37.9C23.4999 36.6 23.3999 35.6 23.1999 35C22.9999 34.4 22.5999 34 21.9999 33.7C21.3999 33.5 20.4999 33.3 19.2999 33.3V32.2C19.9999 32.2 20.9999 32.3 22.1999 32.3C23.3999 32.3 24.6999 32.4 26.0999 32.4C27.2999 32.4 28.5999 32.4 29.7999 32.3C30.8999 32.3 31.8999 32.3 32.6999 32.2Z" fill="currentcolor"/>
            </svg>
          </div>
          <div className={styles['c-hero__title']}>
            <h1>LÉA MANCINI</h1>
            <hr></hr>
            <h2>Avocate au Barreau de Tours</h2>
          </div>
          <Link href={'/contact'} scroll={false} legacyBehavior>
            <a>CONTACT</a>
          </Link>
        </div>
        <div className={styles['c-hero__scroll-arrow']}>
          <Link href='#a-propos' scroll={false} legacyBehavior>
            <svg width="40" height="36" viewBox="0 0 40 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.2261 16.5L20 35.2362L3.77395 16.5L36.2261 16.5Z" stroke="currentcolor"/>
              <path d="M20 26.6667L2.6795 6.66669L37.3205 6.66669L20 26.6667Z" fill="currentcolor"/>
            </svg>
          </Link>
        </div>
      </section>
      <section id="a-propos">
      <div className={styles['c-bio__content']}>
          <div className={styles['c-bio__content-title']}>
            <h3>MAÎTRE <b>LEA MANCINI</b></h3>
            <h4>Avocate au barreau de Tours</h4>
            <hr />
          </div>
          <div className={styles['c-bio__content-description']}>
            <p>Diplômée d&apos;un Master I en <b>Droit pénal et carrières judiciaires</b> à l&apos;Université de Bordeaux, et d&apos;un Master II en <b>Contentieux privé</b> à l&apos;Université du Maine, Maître Léa Mancini a ensuite étudié à l&apos;École du Centre Ouest des Avocats afin de mettre en pratique son savoir.</p>
            <p>En parallèle, elle a effectué des stages pour se former auprès des professionnels de la Justice et du droit. Elle a effectué de nombreux stages auprès d&apos;avocats expérimentés. Elle a également travaillé en tant qu&apos;<b>assistante de justice</b> au tribunal du Mans, <b>juriste en droit des étrangers</b> en préfecture, ou encore comme <b>enseignante en droit de la famille</b>. Forte de son apprentissage et de son expérience, elle est devenue avocate indépendante et collaboratrice de la société Delhommais Morin.</p>
            <p><b>Disponibilité</b>, <b>réactivité</b> et <b>humanité</b> sont les maîtres mots de cette avocate au Barreau de Tours, qui met ses compétences au service de ses clients dans les domaines du <b>droit pénal</b>, du <b>droit des étrangers</b>, du <b>droit de la consommation</b>, du <b>droit des contrats et de la responsabilité</b>, ainsi que du <b>droit des enfants et de la famille</b>.</p>
            <p>Maître Mancini est une avocate à l&apos;écoute, dans la bienveillance et le respect, de ses clients. Elle veille à vous <b>accompagner tout au long de la procédure</b>, avec efficacité et transparence.  Que ce soit en phase amiable ou contentieuse, <b>elle défendra vos intérêts, avec conviction et professionnalisme</b>.</p>
          </div>
          <div className={styles['c-bio__content-img']}>
            <Image
              alt='Une photo de Maitre Lea Mancini'
              src={bioPic}
            />
          </div>
          <ul className={styles['c-bio__content-bullet']}>
            <h4>FORMATION</h4>
            <li>Licence de Droit fondamental</li>
            <li>Diplôme Universitaire de Sciences Criminelles</li>
            <li>Master 1 Carrière judiciaire et droit pénal</li>
            <li>Master 2 Contentieux privé</li>
            <li>Assistante de Justice au tribunal du Mans</li>
            <li>Chargée d&apos;enseignement en Droit de la famille à l&apos;Université du Mans</li>
            <li>Juriste Contentieux du Droit de séjour auprès de la préfecture de la Vienne</li>
          </ul>
        </div>
        <div className={styles['contact-banner']}>
          <ContactBanner />
        </div>
      </section>
      <section className={styles['c-intersection']}>
          <div className={`${styles['c-intersection__label']} ${styles['c-intersection__contact']}`}>
            <span className={styles['c-intersection__contact-info']}>
              <FontAwesomeIcon icon={['fas', 'phone']} />
              <p>06.16.88.45.41</p>
            </span>
            <span className={styles['c-intersection__contact-info']}>
              <FontAwesomeIcon icon={['fas', 'envelope']} />
              <Link href='mailTo:mancini.lea@avocat-conseil.fr'>mancini.lea@avocat-conseil.fr</Link>
            </span>
          </div>
          <div className={styles['c-intersection__image']}><a className={styles['c-intersection__anchor']} ref={sectionRefs[2]}></a></div>
          <div className={`${styles['c-intersection__label']} ${styles['c-intersection__schedule']}`}>
            <p><b>Du Lundi au Vendredi</b></p>
            <p>9h - 12h</p>
            <p>14h - 19h</p>
          </div>
      </section>
      <section className={styles['c-skill']}>
        <h3>DOMAINES D&apos;INTERVENTION</h3>
        <SkillMenu handleClick={null} colorScheme={'dark'} skillState={skillState} setSkillState={setSkillState} disabled={true} />
        <div className={styles['c-skill__button-wrapper']}>
        <Link href={'/competences'}><button className={styles['c-skill__link']}>En savoir plus</button></Link>
        </div>
      </section>
      <section ref={sectionRefs[3]}>
      <Footer sectionName={sectionName} slugId={slugId} />
      </section>
    </>
  )
};

export default Home;

{/* <section id='testimonies' className={styles['c-testimonies']}>
        <h3 className={styles['c-testimonies__title']}>What People Say</h3>
        {testimonies.data.map((testimony) => (
          <div key={`comment${testimony.id}`} className={styles['c-testimonies__container']}>
            <p className={styles['c-testimonies__comment']}>{testimony.comment}</p>
            <div>
              <h4 className={styles['c-testimonies__name']}>{testimony.name[0].toUpperCase() + testimony.name.slice(1) + ' ' + testimony.surname[0].toUpperCase() + testimony.surname.slice(1)}</h4>
              <div className={styles['c-testimonies__pic']}>
                <Image 
                  alt='The picture of a user who left a positive comment on the work of Lea Mancini'
                  src={testimony.userPic}
                  height={50}
                  width={50}
                />
              </div>
            </div>
          </div>
        ))}
      </section> */}