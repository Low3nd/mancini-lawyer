'use client'

import { useState } from "react";

import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import SkillMenu from "../components/SkillMenu";
import ContactBanner from "../components/contactBanner";

import Image from "next/image";
import image_penal from "../public/img/image_penal.webp";
import image_etranger from "../public/img/image_etranger.webp";
import image_famille from "../public/img/image_famille.webp";
import image_civil from "../public/img/image_civil.webp";
import image_contrat from "../public/img/image_contrat.webp";
import image_travail from "../public/img/image_travail.webp";


import styles from "../styles/pages/competences.module.css";


const Competences = ({ slugId, sectionName, skillState, setSkillState }) => {

  return (
    <>
        <Head>
          <title>Maître MANCINI - domaines d&apos;intervention</title>*
          <meta name="description" content="Formée à plusieurs domaines d'expertise juridique, Maître Mancini intervient et vous conseil dans vos démarches. " />
          <meta name="robot" content="index" />
          <link rel="canonical" href="https://www.mancini-avocat.fr/competences" />
        </Head>
      <Navbar
        sectionName={sectionName}
        slugId={slugId}
        currentSection={2}
        forceDarkMode={true}
      />
      <section id="competences" className={styles["c-skill"]}>
        <h2>DOMAINES D&apos;INTERVENTION</h2>
        <SkillMenu skillState={skillState} setSkillState={setSkillState} />
        <div id="slideshow" className={styles["skill-container"]}>
          <div
            className={styles["skill-slideshow"]}
            style={{ transform: `translateX(${skillState * -100}%)` }}
          >
            <div id="penal" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit Pénal</h3>
                <ul>
                  <li>Garde à vue / Dépôt de plainte</li>
                  <li>Crime / Délit / Contravention</li>
                  <li>Auteur / Victime / Mineur</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <div>
                  <p>
                    Que vous soyez victime ou auteur d&apos;une infraction,
                    Maître MANCINI vous assiste dès le début de l&apos;enquête
                    et à tous les stades de la procédure.
                    <br />
                    Du dépôt de plainte ou de la garde à vue, au renvoi devant
                    le juridiction compétente, en passant par l&apos;ouverture
                    d&apos;une information judiciaire devant le juge
                    d&apos;instruction, le cabinet saura vous soutenir et
                    établir la stratégie nécessaire au bon déroulé de votre
                    affaire.
                    <br />
                    Maître MANCINI est par ailleurs formée à
                    l&apos;accompagnement des mineurs devant les juridictions
                    pénales.
                  </p>
                </div>
                <Image src={image_penal} alt="test" />
              </div>
            </div>
            <div id="etrangers" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit des Étrangers</h3>
                <ul>
                  <li>Recours contre les OQTF</li>
                  <li>Demande de titre de séjour</li>
                  <li>Demande de VISA ou Nationalité</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <p>
                  Avant toute demande devant l&apos;autorité compétente, Maître
                  MANCINI vous assiste et vous conseille dans la préparation de
                  votre dossier.
                  <br />
                  A ce stade, obtenir des conseils juridiques est primordial
                  puisque les fondements juridiques choisis pour déposer votre
                  demande conditionneront l&apos;obtention, ou non, d&apos;un
                  visa ou d&apos;un titre de séjour.
                  <br />A la suite d&apos;un refus de délivrance d&apos;un visa,
                  d&apos;un titre de séjour, ou du rejet d&apos;une demande de
                  naturalisation, le cabinet agit à vos côtés devant la
                  juridiction compétente afin de contester cette décision.
                </p>
                <Image src={image_etranger} alt="test" />
              </div>
            </div>
            <div id="famille" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit des Enfants et de la Famille</h3>
                <ul>
                  <li>Divorce</li>
                  <li>Conflit Parental</li>
                  <li>Assistance éducative</li>
                  <li>Audition d&apos;enfant</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <p>
                  Maître MANCINI agit en droit de la famille et en protection de
                  l&apos;enfance. Si une issue amiable est envisagée, elle
                  veillera à la protection de vos intérêts par
                  l&apos;établissement d&apos;une convention de divorce ou
                  d&apos;une convention parentale.
                  <br />
                  Dans les autres cas, elle vous assistera et vous défendra
                  devant la juridiction familiale. En cas d&apos;urgence ou de
                  danger, Maître MANCINI se rendra immédiatement disponible afin
                  d&apos;intenter une action à bref délai ou de solliciter une
                  ordonnance de protection devant le juge aux affaires
                  familiales.
                </p>
                <Image src={image_famille} alt="test" />
              </div>
            </div>
            <div id="travail" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit du Travail</h3>
                <ul>
                  <li>Contestation de licenciement</li>
                  <li>Harcèlement</li>
                  <li>Sécurité Sociale</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <p>
                  En cas de difficultés relatives à l&apos;exécution de votre
                  contrat de travail, ou de litige relatif à sa rupture, Maître
                  MANCINI engagera une action devant les juridictions
                  prud&apos;homales. Si une rupture conventionnelle est
                  envisagée, elle veillera à ce que la transaction préserve vos
                  intérêts.
                  <br />
                  Maître MANCINI intervient également devant le pole social du
                  tribunal judiciaire, en cas de litige relatif à un arrêt ou à
                  un accident du travail, ou encore à votre mise en retraite.
                </p>
                <Image src={image_travail} alt="test" />
              </div>
            </div>
            <div id="contrats" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit des Contrats</h3>
                <ul>
                  <li>Vices cachés / Non-conformité</li>
                  <li>Droit de la consommation</li>
                  <li>Responsabilité Contractuelle</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <p>
                  Vous rencontrez un litige après avoir souscrit un contrat de
                  vente, de fourniture de services, un bail ou tout autre type
                  de contrat, Maître MANCINI vous aiguillera et vous informera
                  quant aux différentes options qui s&apos;offrent à vous.
                  <br />
                  De la mise en demeure à l&apos;action judiciaire, vous pourrez
                  compter sur les conseils de votre avocat. En cas de litige
                  nécessitant un avis technique, elle sollicitera une expertise
                  judiciaire et participera aux opérations d&apos;expertise afin
                  de faire valoir vos intérêts.
                </p>
                <Image src={image_contrat} alt="test" />
              </div>
            </div>
            <div id="civile" className={`${styles["skill"]}`}>
              <div className={styles["skill-header"]}>
                <h3>Droit de la Responsabilité Civile</h3>
                <ul>
                  <li>Préjudice corporel</li>
                  <li>Expertise judiciaire</li>
                  <li>Conflit de voisinage</li>
                </ul>
              </div>
              <div className={styles["skill-content"]}>
                <p>
                  Victime d&apos;un dommage corporel, Maître MANCINI vous aidera
                  à faire valoir vos droits. Le cas échéant, elle étudiera avec
                  attention les propositions formulées par les assurances et
                  vous aidera à entrer en voie de négociations.
                  <br />
                  En cas d&apos;échec ou de refus de tout cadre amiable, elle
                  engagera l&apos;action en responsabilité adéquate et vous
                  accompagnera tout au long de la procédure, notamment durant la
                  phase d&apos;expertise judiciaire.
                  <br />
                  Le cabinet intervient également sur les autres pans de la
                  responsabilité civile et notamment en matière de troubles de
                  voisinage.
                </p>
                <Image src={image_civil} alt="test" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactBanner />
      <Footer sectionName={sectionName} slugId={slugId} />
    </>
  );
};

export default Competences;
