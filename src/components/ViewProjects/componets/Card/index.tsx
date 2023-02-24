import React from "react";

import styles from "./styles.module.scss";
// import img from "./no-image.jpg";
import { RiRadioButtonLine } from "react-icons/ri";
import openPadLock from "./open-padlock.png";
import lockPadLock from "./lock-padlock.png";

interface IProps {
  technologies?: string[];
  projectPublic: boolean;
  name: string;
  href: string;
  img: any;
}

const Card: React.FC<IProps> = ({
  technologies,
  projectPublic = true,
  name,
  img,
  href,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.boxSide}>
        {technologies?.map((t) => {
          return <span>{t}</span>;
        })}
      </div>
      <div className={styles.card_image}>
        <img src={img} alt="" />
      </div>
      <h2>{name}</h2>
      <div className={styles.inlineBlock}>
        <div className={styles.item_card}>
          <RiRadioButtonLine className={styles.icon_online} />{" "}
          <span>Online</span>
        </div>
        <div className={styles.item_card}>
          {projectPublic ? (
            <>
              <img src={openPadLock} /> <span>Public</span>
            </>
          ) : (
            <>
              <img src={lockPadLock} /> <span>Private</span>
            </>
          )}
        </div>
      </div>

      <div className={styles.buttonCallToVisit}>
        {projectPublic && (
          <button type="button" className={styles.buttonCall}>
            <a href={href} target="_blank">
              Visit website
            </a>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
