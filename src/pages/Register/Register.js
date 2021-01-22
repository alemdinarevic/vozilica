import React, { useState } from "react";

import "./Register.css";

import Router from "../../utils/router";
import authApi from '../../api/auth/auth';
import * as authActions from '../../store/actions/auth';
import { useDispatch } from "react-redux";


const Register = (props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const submitFormHandler = (e) => {
    e.preventDefault();
    authHandler();
  }


  const authHandler = () => {
    let action = authActions.signUp(name, surname, email, password);
    setError(null);

    dispatch(action)
      .then((response) => {
        console.log(response, 'response in then');
        Router.push('/');
      })
      .catch((error) => {
        console.log("IN CATCH OF DISPATCH auth actions");
        setError(error.message);
      });
  };

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
            className="route-button"
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
