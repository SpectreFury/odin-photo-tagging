import React from "react";

import styles from "./PopupBox.module.css";

const PopupBox = (props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        {props.foundCharacter === "Keep Looking!"
          ? "Keep Looking"
          : `You found ${props.foundCharacter}`}
      </h1>
    </div>
  );
};

export default PopupBox;
