import Link from "next/link";

import styles from "../styles/components/SkillMenu.module.css"
import clsx from "clsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SkillMenu = ({ skillState, setSkillState, colorScheme, disabled }) => {
  
  const skillList = [
    {
      title: "Droit Pénal",
      icon: "gavel",
      anchor: "penal",
    },
    {
      title: "Droit des Étrangers",
      icon: "earth-europe",
      anchor: "etrangers",
    },
    {
      title: "Droit des Enfants et de la Famille",
      icon: "children",
      anchor: "famille",
    },
    {
      title: "Droit du Travail",
      icon: "briefcase",
      anchor: "travail",
    },
    {
      title: "Droit des Contrats",
      icon: "file-signature",
      anchor: "contrats",
    },
    {
      title: "Droit de la Responsabilité Civile",
      icon: "house-user",
      anchor: "civile",
    },
  ];

  return (
    <ul className={styles["skill-menu"]}>
      {skillList.map((skill, index) => {

        const { title, icon } = skill;

        return (
          <Link
            className={clsx(
              styles["skill-button"],
              disabled !== true && skillState === index && styles["skill-button--is-active"],
              colorScheme === "dark" && styles["skill-button--dark"]
            )}
            onClick={() => setSkillState(index)}
            href={'/competences#slideshow'}
            scroll={false}
            key={index}
          >
            <FontAwesomeIcon icon={`fa-solid fa-${icon}`} />
            <p>{title}</p>
          </Link>
        );
      })}
    </ul>
  );
};

export default SkillMenu;