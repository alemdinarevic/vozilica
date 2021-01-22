import { AUTHENTICATE, SET_PUSH_TOKEN, SIGNOUT } from "../actionTypes";
import axios from "axios";
import authApi from "../../api/auth/auth";

// const base = "cryptic-everglades-12689.herokuapp.com/api/api-docs/v1";
// const base = "https://cryptic-everglades-12689.herokuapp.com/api/v1";
// const base = "https://cryptic-everglades-12689.herokuapp.com/api-docs/api/v1";
// const base = "cryptic-everglades-12689.herokuapp.com";
const base = "https://cryptic-everglades-12689.herokuapp.com/api/v1";

export const authenticate = (userId, token, user) => {
  return { type: AUTHENTICATE, userId: userId, token: token, user: user };
};

export const login = (email, password) => {
  return async (dispatch) => {
    let response = await authApi().login(email, password);
    console.log(response);
    if (response.status !== 200) {
      throw new Error("Error while logging in.");
    }
    console.log(response);
    dispatch(
      authenticate(response.data.userId, response.data.jwt, response.data.user)
    );
  };
};

export const signUp = (first_name, last_name, email, password) => {
  return async (dispatch) => {
    // let data = await authApi().register(first_name, last_name, email, password);
    // console.log(authApi.register)
    // console.log(data)
    const data = { first_name: first_name, last_name: last_name, email: email, password: password };
    console.log(JSON.stringify(data))
    fetch("https://protected-fjord-65382.herokuapp.com/api/v1/signup", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("after");
    // if (response.status !== 200) {
    //   throw new Error("Error while logging in.");
    // }
    dispatch(
      // authenticate(response.data.userId, response.data.jwt, response.data.user)
      authenticate(data.data.userId, data.data.jwt, data.data.user)
    );
  };
};

export const setPushToken = (token) => {
  return (dispatch, getState) => {
    axios
      .post(
        base.concat("/users/set_push_token"),
        { push_token: token },
        {
          headers: {
            Authorization: "Bearer " + getState().auth.token,
          },
        }
      )
      .then((res) => {
        return dispatch({
          type: SET_PUSH_TOKEN,
          pushToken: res.data.push_token,
        });
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
};

export const logout = () => {
  return async (dispatch) => {
    return dispatch({ type: SIGNOUT });
  };
};
