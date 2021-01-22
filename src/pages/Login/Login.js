import React, { useState } from "react";

import "./Login.css";

import * as authActions from '../../store/actions/auth';
import Router from "../../utils/router";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();


  const submitFormHandler = (e) => {
    e.preventDefault();
    authHandler();
  }

  const authHandler = () => {
    let action = authActions.login(email, password);
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
    <div className="login-container">
      <form className="form-container" onSubmit={submitFormHandler}>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}

          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Submit
        </button>
        <p className="forgot-password text-right mb-1">
          Forgot{" "}
          <a href="#">
            password?
            <br />
          </a>
        </p>
        <p className="forgot-password text-right">
          Don't have an account?{" "}
          <button
            className="route-button"
            onClick={(e) => {
              e.preventDefault();
              Router.push("/register");
            }}
          >
            Sign up.
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
