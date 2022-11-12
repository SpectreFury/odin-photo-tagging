import React from "react";
import app from "../../firebaseConfig";
import { getFirestore, collection, getDocs } from "firebase/firestore";

import styles from "./Dropdown.module.css";

const Dropdown = (props) => {
  const { pageX, pageY } = props.location;
  const { pixels } = props;

  async function checkLocation(e) {
    const db = getFirestore(app);

    const characters = await getDocs(collection(db, "characters"));

    characters.forEach((character) => {
      if (character.id === e.target.textContent) {
        if (
          pixels.pixelX.includes(character.data().x) &&
          pixels.pixelY.includes(character.data().y)
        ) {
          props.handleFoundCharacter(character.id);
          props.handleIsVisible(false);
        } else {
          props.handleFoundCharacter("Keep Looking!");
          props.handleIsVisible(false);
        }
      }
    });
  }

  return (
    <div
      className={styles.dropdown}
      style={{ left: `${pageX}px`, top: `${pageY}px` }}
    >
      <button className={styles.button} onClick={checkLocation}>
        Old Nan
      </button>
      <button className={styles.button} onClick={checkLocation}>
        Tyrion
      </button>
    </div>
  );
};

export default Dropdown;
