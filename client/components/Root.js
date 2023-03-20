import * as React from 'react';
import {connect} from 'react-redux';
import Box from '@mui/material/Box';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PropTypes from "prop-types";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Rating from '@mui/material/Rating';


/**
 * COMPONENT
 * 
 * 
 */


  function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          p: 1,
          textAlign: "center",
          ...sx
        }}
        {...other}
      />
    );
  }
  
  Item.propTypes = {
    /**
     * The system prop that allows defining system overrides as well as additional CSS styles.
     */
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
      ),
      PropTypes.func,
      PropTypes.object
    ])
  };

export const Root = () => {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Right Roomie</h1>
                    <h1>Find the perfect roommate</h1>
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <Box sx={{textAlign: "center", p: 5}}><h1>Find your perfect roommate in 3 easy steps!</h1></Box>
                <Box
                    sx={{
                    display: "grid",
                    columnGap: 3,
                    rowGap: 0,
                    gridTemplateColumns: "repeat(3, 1fr)",
                    p: 5
                    }}
                >
                    <Item><PersonAddAltSharpIcon sx={{ fontSize: 175 }} /></Item>
                    <Item sx={{borderRight: "1px solid black", borderLeft: "1px solid black"}}><ListAltIcon sx={{ fontSize: 175 }} /></Item>
                    <Item><Diversity3Icon sx={{ fontSize: 175 }} /></Item>
                    <Item><h2>Signup</h2></Item>
                    <Item sx={{borderRight: "1px solid black", borderLeft: "1px solid black"}}><h2>Fill out your info and roommate preferences</h2></Item>
                    <Item><h2>Get your matches</h2></Item>
                </Box>
                <Box className='testBox' sx={{textAlign: "center", p: 8, backgroundColor: 'success.light', border: "1px solid black", color: 'white'}}><h1>What Right Roomie users are saying:</h1></Box>
                <div className='card'>
                    <Card sx={{ width: '50%' }} elevation={20} >
                        <CardContent>
                            <CardHeader
                                avatar={<Avatar alt="John" src="john.jpg" />}
                                title={<Typography variant="h5" component="div">
                                John
                               </Typography>}
                               subheader={<Typography sx={{ mb: 1.5 }} color="text.secondary">
                               Austin, TX
                           </Typography>}
                            />
                            <Rating value={5} readOnly />
                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                It was so easy.  All I had to do was fill out a form for me and a form for my roommate and I was matched immediately.  My new roommate and I get along seamlessly.  I couldn't have asked for anything better and it's a free service!
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '50%' }}>
                        <CardContent>
                            <CardHeader
                                avatar={<Avatar alt="maggie" src="maggie.jpg" />}
                                title={<Typography variant="h5" component="div">
                                Maggie
                               </Typography>}
                               subheader={<Typography sx={{ mb: 1.5 }} color="text.secondary">
                               Boston, MA
                           </Typography>}
                            />
                            <Rating value={5} readOnly />
                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                The only option I knew of to search for roommates was craigslist, and after several 'near murders', I stumbled upon Right Roomie.  Only took a few minutes to setup my profile and I was matched with multiple people who are similar to me.  So simple.  I am constantly recommending it to my friends and family!
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className='card'>
                    <Card sx={{ width: '50%' }}>
                        <CardContent>
                            <CardHeader
                                avatar={<Avatar alt="Lucy" src="lucy.jpg" />}
                                title={<Typography variant="h5" component="div">
                                Lucy
                               </Typography>}
                               subheader={<Typography sx={{ mb: 1.5 }} color="text.secondary">
                               New York, NY
                           </Typography>}
                            />
                            <Rating value={5} readOnly />
                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                Moving to a city as big as NYC can be super intimidating.  I joined Right Roomie as a way to meet potential roommates and friends.  I wasn't sure what to expect but I'm so glad I joined because I met two of my closest friends on there.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{ width: '50%' }}>
                        <CardContent>
                            <CardHeader
                                avatar={<Avatar alt="tony" src="tony.jpg" />}
                                title={<Typography variant="h5" component="div">
                                Tony
                               </Typography>}
                               subheader={<Typography sx={{ mb: 1.5 }} color="text.secondary">
                               Los Angeles, CA
                           </Typography>}
                            />
                            <Rating value={5} readOnly />
                            <Typography sx={{ mt: 1.5 }} color="text.secondary">
                                I liked using Right Roomie to find my roommate.  The whole system was quick and painless and I got to connect with a ton of like-minded fellas.  After a short search, I found someone I clicked with!  It couldn't have been a smoother process.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>        
            </div>
        </div>
  )
}


export default connect(null)(Root)
