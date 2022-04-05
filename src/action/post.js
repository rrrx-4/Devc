import {
  DELETE_POST,
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from './types';
import { setAlert } from './alert';
import axiosInstance from '../utils/axiosConfig'

export const getPosts = () => async (dispatch) => {
  try {
    const res = await axiosInstance.get('/api/post');
    dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};
//like
export const addLike = (postId) => async (dispatch) => {
  try {
    const res = await axiosInstance.put(`/api/post/like/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};
// unlike
export const removeLike = (postId) => async (dispatch) => {
  try {
    const res = await axiosInstance.put(`/api/post/unlike/${postId}`);
    dispatch({
      type: UPDATE_LIKES,
      payload: { postId, likes: res.data },
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};
// delete post
export const deletePost = (postId) => async (dispatch) => {
  try {
    const res = await axiosInstance.delete(`/api/post/${postId}`);
    dispatch({
      type: DELETE_POST,
      payload: { postId, likes: res.data },
    });
    dispatch(setAlert('Post Deleted '));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// add post
export const addPost = (formData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/api/post`, formData);
    dispatch({
      type: ADD_POST,
      payload: res.data,
    });
    dispatch(setAlert('Post Created ', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// get post by id
export const getPost = (postId) => async (dispatch) => {
  try {
    const res = await axiosInstance.get(`/api/post/${postId}`);
    dispatch({
      type: GET_POST,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// add comment
export const addComment = (postId, formData) => async (dispatch) => {
  try {
    const res = await axiosInstance.post(`/api/post/comment/${postId}`, formData);
    dispatch({
      type: ADD_COMMENT,
      payload: res.data,
    });
    dispatch(setAlert('Comment Added', 'success'));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};

// delete comment

// Delete comment
export const deleteComment = (postId, commentId) => async (dispatch) => {
  try {
    await axiosInstance.delete(`/api/post/comment/${postId}/${commentId}`);

    dispatch({
      type: REMOVE_COMMENT,
      payload: commentId,
    });

    dispatch(setAlert('Comment Removed', 'success'));
  } catch (err) {
    console.log(err);
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response?.statusText, status: err.response?.status },
    });
  }
};
