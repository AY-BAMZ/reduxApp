import axios from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_REQUEST,
} from "./userTypes";

export const fetchUserRequest = () => {
  return {
    typeof: FETCH_USER_REQUEST,
  };
};

const fetchUserSuccess = (user) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: user,
  };
};

const fetchUserFailure = (error) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
      dispatch(fetchUserRequest)
    axios.get("https://jsonplaceholder.typicode.com/users" ,  { 
        headers: { "Accept-Encoding": "application.json" } 
    })
      .then((response) => {
        const users = response.data;
        dispatch(fetchUserSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUserFailure(errorMsg));
      });
  };
};
