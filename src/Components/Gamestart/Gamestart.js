import React from "react";

import OldNan from "../../assets/old-nan.png";
import Tyrion from "../../assets/tyrion.png";

import styles from "./Gamestart.module.css";

const Gamestart = (props) => {
  return (
    <div className={styles.gamestart}>
      <div className={styles.card}>
        <h1 className={styles.findtext}>You need to find</h1>
        <div className={styles.images}>
          <img src={OldNan} className={styles.image} />
          <img src={Tyrion} className={styles.image} />
        </div>
        <button
          className={styles.start}
          onClick={() => {
            props.handleStartTime(true);
            props.handleStartVisible(false);
          }}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Gamestart;
