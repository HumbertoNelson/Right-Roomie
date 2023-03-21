import React from 'react'
import {connect} from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
      <div>
        <h3>Welcome, {username}!</h3>
      </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username,
  }
}

export default connect(mapState)(Home)
