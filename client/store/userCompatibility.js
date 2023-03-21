import axios from "axios";

export const fetchUserCompatibility = (userCompatibility, id) => {
  return async (dispatch) => {
    const response = await axios.post(
      `/api/users/${id}/userPreference/userCompatibility`,
      userCompatibility
    );
    console.log(response);
    dispatch({
      type: "FETCH_USER_COMPATIBILITY",
      userCompatibility: response.data,
    });
  };
};

export default function userCompatibilityReducer(state = {}, action) {
  if (action.type === "FETCH_USER_COMPATIBILITY") {
    return action.userCompatibility;
  }
  return state;
}
