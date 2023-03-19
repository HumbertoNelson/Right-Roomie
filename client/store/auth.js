import axios from 'axios'
import history from '../history'

const TOKEN = 'token'

/**
 * ACTION TYPES
 */
const SET_AUTH = 'SET_AUTH'
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT'

/**
 * ACTION CREATORS
 */
const setAuth = auth => ({type: SET_AUTH, auth})
const _updateAccount = account => ({type: UPDATE_ACCOUNT, account})

/**
 * THUNK CREATORS
 */
export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticateLogin = (username, password, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {username, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const authenticateSignup = (username, password, fullName, city, email, phone_number, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {username, password, fullName, city, email, phone_number})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/')
  return {
    type: SET_AUTH,
    auth: {}
  }
}

export const updateAccount = (accountUpdate) => {
  console.log('here')
  try {
    return async (dispatch) => {
      console.log('dispatch', dispatch)
      const { data: account } = await axios.put(
        `/api/users/${accountUpdate.id}/account`,
        accountUpdate
      );
      dispatch(_updateAccount(account));
    }} catch (err) {
    console.log('Error updating account', err);
  };
}

/**
 * REDUCER
 */
export default function(state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    case UPDATE_ACCOUNT:
      return action.account;
    default:
      return state
  }
}
