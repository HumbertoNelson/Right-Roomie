import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username, id} = props

  return (
    <div>
      <h3>Welcome, {username}!</h3>
      <Link to={`users/${id}/account`}>Account Information</Link>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
    id: state.auth.id
  }
}

export default connect(mapState)(Home)
