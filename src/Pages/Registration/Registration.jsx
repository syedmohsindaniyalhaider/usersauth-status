import React, { useState, useEffect } from "react";
import Admin from "../Layouts/Registration/Registration";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
const Registration = (props) => {
  return (
    <>
      <h3>
        React Registration <br /> using Real Time Firebase
      </h3>
      <SignIn />
      <SignUp />
    </>
  );
};

export default Registration;
