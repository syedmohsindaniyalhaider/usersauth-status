import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.css";

const Registration = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Registration;
