import axiosInstance from '../utils/axiosConfig'

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE,
} from "./types";

import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
// LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axiosInstance.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// register user
export const register =
  ({ name, email, password }) =>
    async (dispatch) => {
      const newUser = { email, name, password };

      try {
        const res = await axiosInstance.post("/api/users/", newUser);
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data,
        });
        dispatch(loadUser());
      } catch (err) {
        const errors = err?.response?.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
          type: REGISTER_FAIL,
        });
      }
    };

export const login =
  ({ email, password }) =>
    async (dispatch) => {
      const loginUser = { email, password };
      try {
        const res = await axiosInstance.post("/api/auth", loginUser);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
        dispatch(loadUser());
      } catch (err) {
        const errors = err?.response?.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }
        dispatch({
          type: LOGIN_FAIL,
        });
      }
    };

// LOGOUT

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
  dispatch({ type: CLEAR_PROFILE });
};
