import React from "react";
import Card from "./componets/Card";

import styles from "./styles.module.scss";
import sisMedi from "../../images/sisMedi.svg";
import sctrans from "../../images/sctrans.png";
import encarte from "../../images/logo-encarte.png";

export const ViewProjects: React.FC = () => {
  return (
    <div className={styles.container}>
      <label className={styles.title}> View projects</label>

      <div className={styles.container_subtitle}>
        <h2>
          oh right, <br /> explore each project where worked/work
        </h2>
        <span>💼</span>
      </div>

      <div className={styles.container_projects}>
        <Card
          name="SisMedi"
          img={sisMedi}
          href={"http://homolog.sismedi.com.br/maissaude/m/"}
          technologies={["React JS", "Typescript", "Node JS", "PrismaORM"]}
          projectPublic={true}
        />
        <Card
          name="E-ncarte"
          img={encarte}
          href={"https://www.e-ncarte.com/"}
          technologies={["React JS", "Figma", "Node JS", "SequelizeORM"]}
          projectPublic={true}
        />
        <Card
          name="SCTRANS"
          img={sctrans}
          technologies={["React JS", "Typescript", "Node JS"]}
          href=""
          projectPublic={false}
        />
      </div>
    </div>
  );
};
