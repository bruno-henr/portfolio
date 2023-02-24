import React from "react";
import hand_header from "./hand_header.webp";
import styles from "./styles.module.scss";

import email from "../../images/arroba.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";

export const Apresentation: React.FC = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.container_icon_header} id="img-top-left">
          <img src={hand_header} alt="" />
        </div>
        <div className={styles.simpleNavBar}>
          <div className={styles.contentSimpleNav}>
            <label htmlFor="">
              Portfolio | Bruno Henrique | Developer Fullstack
            </label>
            <div className={styles.social}>
              <a href="https://github.com/bruno-henr" target="_blank">
                <img src={github} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/brunohenr/" target="_blank">
                <img src={linkedin} alt="" />
              </a>
              <a href="mailto:brunohenriquefeitz@gmail.com">
                <img src={email} alt="" />
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.textOfApresentation}>
        <div className={styles.text}>
          <p>motivated by the opportunity to create new</p>
          <p><label>solutions</label> and innovations</p>
        </div>
      </div>
    </div>
  );
};
