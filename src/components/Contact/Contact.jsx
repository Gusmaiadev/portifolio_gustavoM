import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contatos</h2>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className="icon_contact"  src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a  href="gustavo:gusmaia.araujo@outlook.com" target="blank">gusmaia.araujo@outlook.com</a>
        </li>
        <li className={styles.link}>
          <img className="icon_contact" 
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a  href="https://www.linkedin.com/in/gustavo-maia-a14908258/" target="blank">www.linkedin.com/in/gustavo-maia-a14908258/</a>
        </li>
        <li className={styles.link}>
          <img className="icon_contact" src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Gusmaiadev" target="blank">https://github.com/Gusmaiadev</a>
        </li>
      </ul>
    </footer>
  );
};
