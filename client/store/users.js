import axios from "axios";

export const fetchUsers = (users, id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/users`, users);
    console.log(response);
    dispatch({
      type: "FETCH_USERS",
      users: response.data,
    });
    console.log(response);
  };
};

export default function users(state = {}, action) {
  if (action.type === "FETCH_USERS") {
    return action.users;
  }
  return state;
}
