import React from "react";

import styles from "./Gameover.module.css";

const Gameover = (props) => {
  return (
    <div className={styles.gameover}>
      <div className={styles.card}>
        <h1 className={styles.heading}>You defended The North</h1>
        <p className={styles.time}>{props.time / 1000}s</p>
      </div>
    </div>
  );
};

export default Gameover;
