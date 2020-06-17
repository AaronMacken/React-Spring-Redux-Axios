import { GET_USERS, CREATE_USER, DELETE_USER } from "./actionTypes";
import axios from "axios";

const url = "https://reqres.in/api/users";

export function getUsers() {
  return function (dispatch) {
    const getData = async () => {
      try {
        let res = await axios.get(url);
        dispatch({
          type: GET_USERS,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  };
}

export function createUser(userData) {
  return function (dispatch) {
    const newUser = async () => {
      try {
        let res = await axios.post(url, userData);
        dispatch({
          type: CREATE_USER,
          payload: res.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    newUser();
  };
}

export function deleteUser(userId) {
  return function (dispatch) {
    const yeetUser = async () => {
      try {
        let res = await axios.delete(`${url}${userId}`);
        dispatch({
          type: DELETE_USER,
          payload: userId,
        });
      } catch (error) {
        console.log(error);
      }
    };
    yeetUser();
  };
}
