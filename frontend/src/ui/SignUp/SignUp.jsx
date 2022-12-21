import axios from "axios";
import React, { useState } from "react";

import SubmitBtn from "../../ui/SubmitBtn/SubmitBtn";

import classes from "./SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({ username: "", email: "", password: "", repeatPassword: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("/api/users", { ...data })
      .then((res) => {
        console.log(res);
        setError("");
      })
      .catch((err) => {
        setError(err.response?.data);
        //console.log(err);
      });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler}>
        <h1>Create new account.</h1>
        <input type="email" placeholder="email" autoComplete="off" name="email" value={data.email} onChange={handleChange} />
        <input
          type="text"
          placeholder="username"
          autoComplete="off"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
        <div className={classes.pswd}>
          <input type="password" placeholder="password" name="password" value={data.password} onChange={handleChange} />
          <input
            type="password"
            placeholder="password"
            name="repeatPassword"
            value={data.repeatPassword}
            onChange={handleChange}
          />
        </div>
        <div className={`${classes.error} ${!error ? classes.disabled : ""}`}>
          <h3>{error}</h3>
        </div>
        <div className={classes.btn}>
          <SubmitBtn text={"Sign up"} />
        </div>
      </form>
    </div>
  );
};

export default SignUp;
