import React, { useEffect } from "react";

import styles from "./TargetingBox.module.css";

const TargetingBox = (props) => {
  const { pageX, pageY } = props.location;

  useEffect(() => {
    props.handlePixels(coveringPixels());
  }, []);

  function coveringPixels() {
    const pixelX = [];
    const pixelY = [];

    for (let i = pageX - 100; i < pageX + 100; i++) {
      pixelX.push(i);
    }

    for (let j = pageY - 100; j < pageY + 100; j++) {
      pixelY.push(j);
    }

    return {
      pixelX,
      pixelY,
    };
  }

  return (
    <div
      className={styles.targeting}
      style={{ left: `${pageX - 100}px`, top: `${pageY - 100}px` }}
    ></div>
  );
};

export default TargetingBox;
