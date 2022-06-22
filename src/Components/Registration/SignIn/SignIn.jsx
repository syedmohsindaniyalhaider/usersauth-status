import React, { useState } from "react";
import useInput from "../../../Hooks/use-input";

const SignInForm = (props) => {
  const {
    value: email,
    hasError: emailHasError,
    isValid: emailIsValid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));
  const {
    value: password,
    hasError: passwordHasError,
    isValid: passwordIsValid,
    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = emailIsValid && passwordIsValid;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    resetEmail();
    resetPassword();
  };
  return (
    <>
      <h3>Sign In</h3>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Enter email"
            />
          </div>
          {emailHasError && (
            <small style={{ color: "red" }}>Enter a valid email</small>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <div>
            <input
              type="password"
              name="password"
              value={password}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Enter password"
            />
          </div>
          {passwordHasError && (
            <small style={{ color: "red" }}>Enter a valid password</small>
          )}
        </div>
        <button disabled={formIsValid ? false : true}>Sign In</button>
      </form>
    </>
  );
};

const SignInHttp = (props) => {};

const SignIn = (props) => {
  return (
    <>
      <SignInForm />
      <SignInHttp />
    </>
  );
};

export default SignIn;
