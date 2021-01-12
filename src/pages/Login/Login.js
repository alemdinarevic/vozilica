import React, { useState } from "react";

import "./Login.css";

import Router from "../../utils/router";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log({email, password});
  }
  // const authHandler = () => {
  //   let action = authActions.login(email, password);
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
	// 			console.log(error)
  //       console.log("IN CATCH OF DISPATCH auth actions");
  //       setError(error.message);
  //       setIsLoading(false);
  //     });
  // };
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
