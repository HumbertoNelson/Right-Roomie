import axios from "axios";

export const FETCH_MATCH_INFO = "FETCH_MATCH_INFO";

export const _fetchMatchInfos = (info) => {
  return {
    type: FETCH_MATCH_INFO,
    info,
  };
};

export const fetchMatchInfos = () => {
  return async (dispatch) => {
    const { data: info } = await axios.get(`/api/compatibility/userinfos`);
    dispatch(_fetchMatchInfos(info));
  };
};

const matchInfo = (state = [], action) => {
  switch (action.type) {
    case FETCH_MATCH_INFO:
      return action.info;
    default:
      return state;
  }
};

export default matchInfo;
