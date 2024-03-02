import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Olá, me chamo Gustavo</h1>
        <p className={styles.description}>
        Sou um programador web junior com 6 meses de experiência, apaixonado por transformar códigos em soluções criativas e funcionais para a web. 
        Sempre buscando aprender e crescer neste dinâmico universo da programação.
        </p>
        <a href="#" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/perfil.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
