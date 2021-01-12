import { AUTHENTICATE, LOGOUT } from "../actionTypes";
import axios from "axios";

const base = "https://stormy-brushlands-77093.herokuapp.com/api/v1";

export const authenticate = (userId, token, user) => {
  return { type: AUTHENTICATE, userId: userId, token: token, user: user };
};

export const login = (email, password) => {
  return async (dispatch) => {
    console.log("in login ");

    let response = await axios.post(base.concat("/sessions"), {
      users: { email: email, password: password },
    });
    console.log(response);
    if (response.status != 200) {
      throw new Error("Something went wrong");
    }
    console.log(response);
    dispatch(
      authenticate(response.data.userId, response.data.jwt, response.data.user)
    );
  };
};

export const signUp = (email, password) => {
  console.log("in signup");
  return async (dispatch) => {
    console.log("in signup dispatch");
    let response = await axios.post(base.concat("/registrations"), {
      users: { email: email, password: password },
    });
    console.log("after");
    if (response.status != 200) {
      throw new Error("Something went wrong");
    }
    dispatch(
      authenticate(response.data.userId, response.data.jwt, response.data.user)
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
      .then((user) => {
        return dispatch({
          type: SET_PUSH_TOKEN,
          pushToken: user.data.push_token,
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
    await AsyncStorage.removeItem("userData");
    return dispatch({ type: LOGOUT });
  };
};
