import React from 'react'
import {connect} from 'react-redux'
import {authenticateLogin, authenticateSignup} from '../store'

/**
 * COMPONENT
 */
const AuthForm = props => {
  const {name, displayName, handleSubmit, error} = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        {name == 'signup' ? (
        <div>
        <label htmlFor="fullName">
          <small>Full Name</small>
        </label>
        <input name="fullName" type="text" />
        <label htmlFor="city">
          <small>City</small>
        </label>
        <input name="city" type="text" />
        <label htmlFor="email">
          <small>Email</small>
        </label>
        <input name="email" type="text" />
        <label htmlFor="phone_number">
          <small>Phone Number</small>
        </label>
        <input name="phone_number" type="text" />
        <label htmlFor="imgUrl">
          <small>Picture</small>
        </label>
        <input name="imgUrl" type="text" />  
        </div>                       
        ) : <span></span>}
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
    </div>
  )
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.auth.error
  }
}

const mapSignup = state => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.auth.error
  }
}

const mapDispatchSignup = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()  
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      const fullName = evt.target.fullName.value
      const city = evt.target.city.value
      const email = evt.target.email.value
      const phone_number = evt.target.phone_number.value
      const imgUrl = evt.target.imgUrl.value
      dispatch(authenticateSignup(username, password, fullName, city, email, phone_number, imgUrl, formName))
    }
  }
}

const mapDispatchLogin = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()  
      const formName = evt.target.name
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(authenticateLogin(username, password, formName))
    }
  }
}

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm)
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm)
