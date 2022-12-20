import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userActions } from "../../redux/ConfigureStore.user.js";

import SubmitBtn from "../SubmitBtn/SubmitBtn";

import classes from "./SignIn.module.css";

const Signin = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const [isSubmit, setIsSubmit] = useState(false);
  const [signError, setSignError] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  useEffect(() => {
    if (isSubmit) {
      axios
        .post("/api/users/login", { username: data.username, password: data.password })
        .then((res) => {
          dispatch(userActions.setState(res.data));
          setSignError("");
        })
        .catch((err) => {
          setSignError(err.response.data);
        });
    }
    setIsSubmit(false);
    // eslint-disable-next-line
  }, [isSubmit]);

  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <h1>Username</h1>
      <input
        type="text"
        name="email"
        autoComplete="off"
        onChange={(e) => setData({ ...data, username: e.target.value })}
        value={data.username}
      />
      <h1>Password</h1>
      <input
        type="password"
        name="password"
        autoComplete="off"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
      />
      <div className={`${classes.error} ${!signError ? classes.disabled : ""}`}>
        <h3>{signError}</h3>
      </div>
      <SubmitBtn text={"Sign in"}></SubmitBtn>
      <Link to={{ pathname: "/registration" }}>Sign up</Link>
    </form>
  );
};

export default Signin;
