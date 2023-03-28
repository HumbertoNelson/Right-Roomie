import axios from "axios";

export const FETCH_MATCH_PREFS = "FETCH_MATCH_PREFS";
export const ADD_TO_MATCHPREFS = "ADD_TO_MATCHPREFS";

export const _fetchMatchPrefs = (preference) => {
  return {
    type: FETCH_MATCH_PREFS,
    preference,
  };
};

export const fetchMatchPrefs = () => {
  return async (dispatch) => {
    const { data: prefs } = await axios.get(
      `/api/compatibility/userPreferences`
    );
    dispatch(_fetchMatchPrefs(prefs));
  };
};

const matchPrefs = (state = [], action) => {
  switch (action.type) {
    case FETCH_MATCH_PREFS:
      return action.preference;
    default:
      return state;
  }
};

export default matchPrefs;
