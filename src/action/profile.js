
import axiosInstance from '../utils/axiosConfig'

import { setAlert } from "../action/alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  CLEAR_PROFILE,
  ACCOUNT_DELETED,
  GET_PROFILES,
  GET_REPOS,
  NO_REPOS,
} from "../action/types";

// get current user profile

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get("/api/profile/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// get all profiles
export const getProfiles = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });

  try {
    const res = await axiosInstance.get("/api/profile/");

    dispatch({
      type: GET_PROFILES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// getProfile by id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/api/profile/user/${userId}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (err) {
    if (err.response?.data.profile == null && err.response.status === 400) {
      window.location.href = "/dashboard";
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// get github repos
export const getGithubRepos = (username) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/api/profile/github/${username}`);

    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: NO_REPOS,
    });
  }
};

//create or update profile
// we are passing history , because we want to push back to other router

export const createProfile =
  (formData, history, edit = false) =>
    async (dispatch) => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        const res = await axiosInstance.post("/api/profile", formData, config);
        dispatch({
          type: GET_PROFILE,
          payload: res.data,
        });
        dispatch(
          setAlert(edit ? "Profile Updated" : "Profile Created", "success")
        );

        history.push("/dashboard");
      } catch (err) {
        const errors = err?.response?.data.errors;
        if (errors) {
          errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
        }

        dispatch({
          type: PROFILE_ERROR,
          payload: {
            msg: err.response?.statusText,
            status: err.response?.status,
          },
        });
      }
    };

// Add experiance

export const addExperience = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axiosInstance.put("/api/profile/experience", formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Experience Added", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err?.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// Add education

export const addEducation = (formData, history) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axiosInstance.put("/api/profile/education", formData, config);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("education Added", "success"));
    history.push("/dashboard");
  } catch (err) {
    const errors = err?.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// DELETE EXPERIENCE

export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.delete("/api/profile/experience/" + id);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Experience Removed ", "success"));
  } catch (err) {
    const errors = err?.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// DELETE EDUCATION

export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axiosInstance.delete("/api/profile/education/" + id);
    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data,
    });
    dispatch(setAlert("Education Removed ", "success"));
  } catch (err) {
    const errors = err?.response?.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// DELETE ACCOUNT  AND PROFILE
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm("Are You Sure ? This can not be undone")) {
    try {
      await axiosInstance.delete("/api/profile");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: ACCOUNT_DELETED });

      dispatch(setAlert("Your Account has been Permanetly Deleted "));
    } catch (err) {
      const errors = err?.response?.data.errors;
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
      }
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: err.response?.statusText,
          status: err.response?.status,
        },
      });
    }
  }
};
