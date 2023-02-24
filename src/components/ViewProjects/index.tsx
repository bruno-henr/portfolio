import React from "react";
import Card from "./componets/Card";

import styles from "./styles.module.scss";

export const ViewProjects: React.FC = () => {
  return (
    <div className={styles.container}>
      <label className={styles.title}>
        {" "}
        View projects
      </label>

      <div className={styles.container_subtitle}>
        <h2>oh right, <br /> explore each project where worked/work</h2>
        <span>💼</span> 
      </div>

      <div className={styles.container_projects}>
        <Card 
            technologies={["React JS", "Typescript", "teste"]}
        /><Card 
            technologies={["React JS", "Typescript", "teste"]}
        />
      </div>
    </div>
  );
};
