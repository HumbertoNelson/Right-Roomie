import axios from "axios";

export const ADD_USERINFO = "ADD_USERINFO";
export const FETCH_USERINFO = "FETCH_USERINFO";
export const UPDATE_USERINFO = "UPDATE_USERINFO";

export const _addToUserInfo = (newUserInfo) => {
  return {
    type: ADD_USERINFO,
    newUserInfo,
  };
};
export const _fetchUserInfo = (info) => {
  return {
    type: FETCH_USERINFO,
    info,
  };
};
export const _updateUserInfo = (updatedInfo) => {
  return {
    type: UPDATE_USERINFO,
    updatedInfo,
  };
};

export const fetchUserInfo = (id) => {
  return async (dispatch) => {
    const { data: info } = await axios.get(`/api/users/userinfo/${id}`);
    dispatch(_fetchUserInfo(info));
  };
};

export const addToUserInfo = (values) => {
  return async (dispatch) => {
    const { data: newUserInfo } = await axios.post(
      "/api/users/userinfo",
      values
    );
    dispatch(_addToUserInfo(newUserInfo));
  };
};
export const updateUserInfo = (newValues, id) => {
  return async (dispatch) => {
    console.log("these are new values", newValues);
    const { data: updatedInfo } = await axios.put(
      `/api/users/userinfo/${id}`,
      newValues
    );

    dispatch(_updateUserInfo(updatedInfo));
  };
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case ADD_USERINFO:
      return action.newUserInfo;
    case FETCH_USERINFO:
      return action.info;
    case UPDATE_USERINFO:
      return action.updatedInfo;
    default:
      return state;
  }
};

export default userInfo;
