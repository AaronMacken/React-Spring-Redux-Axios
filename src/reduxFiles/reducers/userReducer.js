import { GET_USERS, CREATE_USER, DELETE_USER } from "../actions/actionTypes";

const initialState = {
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload.data,
      };
    case CREATE_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case DELETE_USER:
      let filteredArray = state.users.filter((user) => {
        if (user.id !== action.payload) {
          return user;
        }
      });
      return {
        ...state,
        users: filteredArray,
      };
    default:
      return state;
  }
}
