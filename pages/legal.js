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
          <meta name="robots" content="noindex" />
          <link rel="canonical" href="https://www.mancini-avocat.fr/legal" />
        </Head>
        <div className={styles["title"]}>
          <h1>MENTIONS LÉGALES</h1>
          <hr />
        </div>
        <div className={styles["c-legal"]}>
          <section className={styles["c-legal__lawyer"]}>
            <h2>Informations légales, sociales et administrative</h2>
            <p>Forme juridique : Entrepreneur individuel</p>
            <p>Activité : Activités juridiques</p>
            <p>SIRET : 90792385800019</p>
            <p>SIREN : 907923858</p>
            <p>N° de TVA Intracommunautaire : FR43907923858</p>
            <p>Cabinet d&apos;avocat : Léa Mancini EI</p>
            <p>Adresse : 31 rue George Sand</p>
            <p>Code postal : 37000</p>
            <p>Ville : TOURS</p>
            <p>Téléphone : 06 16 88 45 41</p>
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
              vos informations, vous consentez à la collecte et à
              l&apos;utilisation de vos données conformément à cette politique
              de confidentialité.
            </p>
            <h3>Protection des données :</h3>
            <p>
              Nous prenons des mesures de sécurité pour protéger vos données
              contre tout accès non autorisé, utilisation abusive ou
              divulgation. Cependant, aucune méthode de transmission sur
              Internet ou de stockage électronique n&apos;est totalement
              sécurisée et nous ne pouvons garantir une sécurité absolue.
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
          <section className={styles["c-legal__cnil"]}>
            <h2>Protection des données personnelles</h2>
            <p>
              Conformément à la loi « informatique et liberté » du 6 janvier
              1978 modifiée et au Règlement européen n°2016/679/UE du 27 avril
              2016, vous bénéficiez d&apos;un droit d&apos;accès,
              d&apos;opposition, de rectification, de portabilité et
              d&apos;effacement de vos données ou encore de limitation de
              traitement.
            </p>
            <p>
              Vous avez la possibilité de retirer votre consentement à tout
              moment, sans porter atteinte à la licéité du traitement fondé sur
              le consentement effectué avant le retrait de celui-ci.
            </p>
            <p>
              Vous pouvez exercer vos droits en contactant le responsable de
              traitement, en l&apos;espèce Maître Léa Mancini à l&apos;adresse
              suivante : mancini.lea@avocat-conseil.fr
            </p>
            <p>
              Vos données ont été obtenues directement auprès de vous. Les
              données relatives à votre identité seront conservées jusqu&apos;à
              10 ans conformément aux règlementations en vigueur.
            </p>
            <p>
              Maître Léa MANCINI, en qualité d&apos;avocat, considère comme
              confidentielles les informations de toute nature, écrites ou
              orales, qu&apos;elle serait amenée à connaître durant
              l&apos;exécution de sa mission ; l&apos;obligation de
              confidentialité continuera après expiration des relations
              contractuelles, aussi longtemps que lesdites informations
              n&apos;auront pas été rendues publiques.
            </p>
            <p>
              Pour toute information complémentaire ou réclamation, vous pouvez
              contacter la Commission Nationale de l&apos;Informatique et des
              Libertés (plus d&apos;informations sur{" "}
              <a href="https://www.cnil.fr">www.cnil.fr</a>).
            </p>
          </section>
          <section className={styles["c-legal__hosting"]}>
            <h2>Hébergement</h2>
            <p>
              Ce site Web est hébergé par la société : OVH - dont le siège est
              2, rue Kellermann 59053 Roubaix CEDEX 1, inscrite au RCS de Lille
              Métropole au numéro B424 761 419 00045.
            </p>
          </section>
        </div>
        <Footer sectionName={sectionName} slugId={slugId} />
      </>
    );
}

export default Legal;