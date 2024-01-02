import Link from "next/link";

import Navbar from "../components/navbar";
import Footer from '../components/footer';
import ContactBanner from '../components/contactBanner';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faPhone,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/pages/honoraires.module.css";

const Honoraires = ({ slugId, sectionName}) => {
  return (
    <>
      <Navbar
        sectionName={sectionName}
        slugId={slugId}
        currentSection={3}
        forceDarkMode={true}
      />
      <section id="honoraires" className={styles["c-pricing"]}>
        <h2>HONORAIRES</h2>
        <div className={styles["c-pricing__card-container"]}>
          <div
            className={`${styles["c-pricing__card"]} ${styles["c-pricing__card-pen"]}`}
          >
            <FontAwesomeIcon icon={faPen} />
            <span>CONSULTATION ÉCRITE</span>
            <span>180 euros</span>
          </div>
          <div
            className={`${styles["c-pricing__card"]} ${styles["c-pricing__card-phone"]}`}
          >
            <FontAwesomeIcon icon={faPhone} />
            <span>CONSULTATION TÉLÉPHONIQUE</span>
            <span>50 euros</span>
          </div>
          <div
            className={`${styles["c-pricing__card"]} ${styles["c-pricing__card-desk"]}`}
          >
            <FontAwesomeIcon icon={faBuilding} />
            <span>CONSULTATION CABINET</span>
            <span>50 euros</span>
          </div>
        </div>
        <ContactBanner />
        <div className={styles["c-pricing__text"]}>
          <p className={styles["c-pricing__description"]}>
            Les honoraires d&apos;avocat sont fonction, notamment, de chacun des
            éléments suivants conformément aux usages :
          </p>
          <ul className={styles["c-pricing__description-bullet"]}>
            <li>Le temps consacré à l&apos;affaire</li>
            <li>Le travail de recherche</li>
            <li>La nature et la difficulté de l&apos;affaire</li>
            <li>L&apos;importance des intérêts en cause</li>
            <li>
              L&apos;incidence des frais et charges du cabinet auquel il
              appartient
            </li>
            <li>
              Sa notoriété, ses titres, son ancienneté, son expérience et la
              spécialisation dont il est titulaire
            </li>
            <li>
              Les avantages et le résultat obtenus au profit du client par son
              travail, ainsi que le service rendu à celui-ci
            </li>
            <li>La situation de fortune du client</li>
          </ul>
          <p className={styles["c-pricing__description"]}>
            <b>
              Une convention d&apos;honoraires est systématiquement conclue afin
              d&apos;apporter transparence et clarté sur la question des
              honoraires, et ce, dès l&apos;issue du premier rendez-vous.
            </b>
          </p>
          <p className={styles["c-pricing__description"]}>
            L&apos;aide juridictionnelle est acceptée. Le cabinet peut également
            accorder des facilités de paiement.
          </p>
          <p className={styles["c-pricing__description"]}>
            Il vous est également possible de prendre rendez-vous directement en
            ligne sur le site du barreau de Tours.
          </p>
        </div>
        <div className={styles["c-pricing__button-wrapper"]}>
          <Link href={"/contact"}>
            <button className={`${styles["c-pricing__contact-button"]} ${styles["alternate-link"]}`}>
              PRENDRE RENDEZ-VOUS SUR LE SITE DU BARREAU DE TOURS
            </button>
          </Link>
        </div>
      </section>
      <Footer sectionName={sectionName} slugId={slugId} />
    </>
  );
};

export default Honoraires;
