import React, { useState } from "react";

import "./Register.css";
import Router from "../../utils/router";

import authApi from '../../api/auth/auth';

const Register = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log({name, surname, email, password});
    let userData = authenticate(name, surname, email, password);
    console.log(userData);
  }

  const authenticate = async (name, surname, email, password) => {
    let data = await authApi().register(name, surname, email, password);
    return data;
  }

  // const authHandler = () => {
  //   let action = authActions.signUp(email, password);
  //   setError(null);
  //   setIsLoading(true);

  //   dispatch(action)
  //     .then((response) => {
  //       setIsLoading(false);
  //       showMessage({
  //         message: "Successfully logged in",
  //         type: "success",
  //       });
  //       console.log('in then')
  //       props.navigation.navigate("Home");
  //     })
  //     .catch((error) => {
  //       console.log("IN CATCH OF DISPATCH auth actions");
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // };

  return (
    <div className="register-container">
      <form className="form-container" onSubmit={submitFormHandler}>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="First name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input
            name="surname"
            type="text"
            className="form-control"
            placeholder="Last name"
            onChange={(e) => setSurname(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email address</label>
          <input
            name="email"
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered?{" "}
          <button
            class="route-button"
            onClick={(e) => {
              e.preventDefault();
              Router.push("/login");
            }}
          >
            Sign in.
          </button>
        </p>
      </form>
    </div>
  );
};

export default Register;
