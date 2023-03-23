import React from 'react'
import {connect} from 'react-redux'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid'; 

/**
 * COMPONENT
 */
export const Home = props => {
  console.log('props', props)
  const {fullName} = props

  return (
      <div>
        <h3>Welcome, {fullName}!</h3>
        <h3>User Dashboard</h3>
          <div className='card'>
            <Grid container spacing={2} align='center'>
              <Grid item xs={6}>
                <Card sx={{ width: '95%', height: '100%', position: "center" }} elevation={10} >
                  <CardContent>
                    <CardHeader
                      title={<Typography variant="h5" component="div">
                      Account Information
                      </Typography>}
                    />
                    <Typography sx={{ mt: 1.5 }} color="text.secondary" component={'span'}>
                      <p><Button variant="outlined" color="success"><Link to="/account">Profile</Link></Button></p>
                      <p><Button variant="outlined" color="success"><Link to="/updateUserInfo">User Info Form</Link></Button></p>
                      <p><Button variant="outlined" color="success"><Link to="/updateUserPreference">Roommate Preferences Form</Link></Button></p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Card sx={{ width: '95%', height: '100%', position: "center" }} elevation={10} >
                  <CardContent>
                    <CardHeader
                      title={<Typography variant="h5" component="div">
                      Roommates
                      </Typography>}
                    />
                    <Typography sx={{ mt: 1.5 }} color="text.secondary" component={'span'}>
                      <p><Button variant="outlined" color="success"><Link to="/userCompatibility">View your matches</Link></Button></p>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </div>       
      </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    fullName: state.auth.fullName,
  }
}

export default connect(mapState)(Home)
