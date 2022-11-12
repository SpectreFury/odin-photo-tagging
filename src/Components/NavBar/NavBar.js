import React from "react";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <h1 className={styles.heading}>Westeros</h1>
    </nav>
  );
};

export default NavBar;
