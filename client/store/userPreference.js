import axios from "axios";

export const UPDATE_USERPREF = "UPDATE_USERPREF";

export const _updateUserPreferences = (updatedPref) => {
  return {
    type: UPDATE_USERPREF,
    updatedPref,
  };
};

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

export const updateUserPreferences = (newValues, id) => {
  return async (dispatch) => {
    console.log("these are new values", newValues);
    const { data: updatedPref } = await axios.put(
      `/api/users/${id}/userPreference`,
      newValues
    );

    dispatch(_updateUserPreferences(updatedPref));
  };
};

export default function userPreferenceReducer(state = {}, action) {
  if (action.type === "FETCH_USER_PREFERENCE") {
    return action.userPreference;
  } else if (action.type === UPDATE_USERPREF) {
    return action.updatedPref;
  }
  return state;
}
