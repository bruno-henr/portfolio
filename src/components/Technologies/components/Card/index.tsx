import React from "react";

import styles from "./styles.module.scss";
// import img from "./images/no-image.jpg";

interface IProps {
    name: string;
    img: any
}

export const Card: React.FC<IProps> = ({ img, name }) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={img} alt="" />
      </div>
      <label htmlFor="">{ name }</label>
    </div>
  );
};
