import Head from 'next/head'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import styles from '../styles/pages/legal.module.css'


const Legal = ({sectionName, slugId}) => {
    return (
      <>
        <Navbar currentSection={5} sectionName={sectionName} slugId={slugId} />
        <Head>
          <title>Maître MANCINI - Mentions Légales</title>
          <meta
            name="description"
            content="Sur cette page, vous trouverez les mentions légales qui régissent le site internet mancini-avocat.fr"
          />
          <link rel="canonical" href="https://www.mancini-avocat.fr/legal" />
        </Head>
        <div className={styles["title"]}>
          <h1>MENTIONS LÉGALES</h1>
          <hr />
        </div>
        <div className={styles['c-legal']}>
          <section className={styles["c-legal__lawyer"]}>
            <h2>Informations légales, sociales et administrative</h2>
            <p>
              L&apos;avocat qui ouvre ou modifie substantiellement un site
              Internet doit en informer le conseil de l&apos;Ordre sans délai et
              lui communiquer les noms de domaine qui permettent d&apos;y
              accéder.
            </p>
            <p>
              Le nom de domaine doit comporter le nom de l&apos;avocat ou la
              dénomination du cabinet en totalité ou en abrégé, qui peut être
              suivi ou précédé du mot « avocat ».
            </p>
            <p>
              L&apos;avocat doit, dans toute communication, veiller au respect
              des principes essentiels de la profession, faire état de sa
              qualité et permettre, quel que soit le support utilisé, de
              l&apos;identifier, de le localiser, de le joindre, de connaître le
              barreau auquel il est inscrit, la structure d&apos;exercice à
              laquelle il appartient et, le cas échéant, le réseau dont il est
              membre.
            </p>
            <p>Il peut notamment faire mention :</p>
            <ul>
              <li>
                De sa ou ses spécialisations, ainsi que de sa ou ses
                qualifications spécifiques, régulièrement obtenues et non
                invalidées ;
              </li>
              <li>De ses domaines d&apos;activités dominantes ;</li>
              <li>
                Des missions visées à l&apos;article 6 du présent règlement qui
                peuvent lui être confiées. Lorsqu&apos;il agit dans le strict
                cadre d&apos;une telle mission, il doit l&apos;indiquer
                expressément
              </li>
            </ul>
          </section>
          <section className={styles["c-legal__developer"]}>
            <h2>Politique de confidentialité</h2>
            <p>
              Nous accordons une grande importance à la confidentialité de vos
              données. Notre site ne collecte que les informations que vous
              fournissez volontairement via notre formulaire de contact.
            </p>
            <h3>Données collectées via le formulaire de contact :</h3>
            <p>Nous collectons les données suivantes :</p>
            <ul>
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>
                Autres informations que vous choisissez de partager dans le
                message
              </li>
            </ul>
            <h3>Utilisation des données :</h3>
            <p>
              Les informations que vous fournissez via notre formulaire de
              contact sont utilisées uniquement dans le but de répondre à votre
              demande ou de vous contacter concernant nos services. Nous ne
              partageons pas ces informations avec des tiers sans votre
              consentement explicite.
            </p>
            <h3>Consentement :</h3>
            <p>
              En utilisant notre formulaire de contact et en nous fournissant
              vos informations, vous consentez à la collecte et à l'utilisation
              de vos données conformément à cette politique de confidentialité.
            </p>
            <h3>Protection des données :</h3>
            <p>
              Nous prenons des mesures de sécurité pour protéger vos données
              contre tout accès non autorisé, utilisation abusive ou
              divulgation. Cependant, aucune méthode de transmission sur
              Internet ou de stockage électronique n'est totalement sécurisée et
              nous ne pouvons garantir une sécurité absolue.
            </p>
            <h3>Modifications de la politique de confidentialité :</h3>
            <p>
              Nous nous réservons le droit de mettre à jour cette politique de
              confidentialité à tout moment. Les changements seront affichés sur
              cette page.
            </p>
            <p>
              Pour toute question concernant notre politique de confidentialité,
              veuillez nous contacter via notre formulaire de contact.
            </p>
          </section>
        </div>
        <Footer sectionName={sectionName} slugId={slugId} />
      </>
    );
}

export default Legal;