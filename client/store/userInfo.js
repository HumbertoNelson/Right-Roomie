import axios from "axios";

export const ADD_USERINFO = "ADD_USERINFO";

export const _addToUserInfo = (newUserInfo) => {
  return {
    type: ADD_USERINFO,
    newUserInfo,
  };
};

export const addToUserInfo = (id) => {
  return async (dispatch) => {
    const { data: newUserInfo } = await axios.post(`/api/users/${id}/userinfo`);
    dispatch(_addToUserInfo(newUserInfo));
  };
};

const userInfo = (state = [], action) => {
  switch (action.type) {
    case ADD_USERINFO:
      return [...action.newUserInfo];
    default:
      return state;
  }
};

export default userInfo;
