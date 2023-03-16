import axios from "axios";

export const fetchUserPreference = (userPreference, id) => {
  return async (dispatch) => {
    const response = await axios.post(
      `/api/users/${id}/userPreference`,
      userPreference
    );
    console.log(response);
    dispatch({ type: "FETCH_USER_PREFERENCE", userPreference: response.data });
  };
};

export default function userPreferenceReducer(state = {}, action) {
  if (action.type === "FETCH_USER_PREFERENCE") {
    return action.userPreference;
  }
  return state;
}
