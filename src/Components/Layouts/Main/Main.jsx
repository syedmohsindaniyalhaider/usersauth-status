import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";

const Main = (props) => {
  return (
    <>
      <div className={styles.bg}>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
};

export default Main;
