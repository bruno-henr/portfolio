import React from "react";

import styles from "./styles.module.scss";
import { Card } from "./components/Card";

import reactjs from ".././../images/react.png";
import typescript from ".././../images/typescript.png";
import node from ".././../images/node-js.png";
import figma from ".././../images/figma.png";
import postgres from ".././../images/postgre.png";

import java from ".././../images/java.png";
import php from ".././../images/php.png";
import py from ".././../images/py.png";
import chakraui from ".././../images/chakra-ui-logo.png";
import nextjs from ".././../images/next-js.svg";

export const Technologies: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainStack}>
        <h2>My main technologies and tools</h2>
        <div className={styles.boxMap}>
          <Card img={reactjs} name="React JS" />
          <Card img={node} name="Node JS" />
          <Card img={typescript} name="Typescript" />
          <Card img={figma} name="Figma" />
          <Card img={postgres} name="Postgres" />
          <Card img={nextjs} name="Next JS" />
          <Card img={chakraui} name="Chakra UI" />
        </div>
      </div>
      <div className={styles.others}>
        <h2>some more technologies that I once studied</h2>
        <div className={styles.boxMapOthers}>
          <Card img={java} name="Java" />
          <Card img={py} name="Python" />
          <Card img={php} name="PHP" />
        </div>
      </div>
    </div>
  );
};
