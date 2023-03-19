import * as React from 'react';
import {connect} from 'react-redux';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import PersonAddAltSharpIcon from '@mui/icons-material/PersonAddAltSharp';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";


/**
 * COMPONENT
 * 
 * 
 */

const Item = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: "center",
    // color: theme.palette.text.secondary
  }));

  const Item2 = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    // color: theme.palette.text.secondary
  }));

export const Root = () => {
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Right Roomie</h1>
                    <h1>Find the perfect roommate</h1>
                </div>
            </div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid xs={12} md={12} lg={12}>
                        <Item><h1>Find your roommate in 3 easy steps!</h1></Item>
                    </Grid>
                    <Grid container xs={12} md={7} lg={8} spacing={4}>
                        <Grid xs={4} lg={4}>
                            <Item>
                                <Box>
                                    <PersonAddAltSharpIcon sx={{ fontSize: 175 }} />   
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <Item><h2>Signup</h2></Item>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid xs={4} lg={4}>
                            <Item>
                                <Box>
                                    <ListAltIcon sx={{ fontSize: 175 }} />
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <Item><h2>Fill out your info and roommate preferences</h2></Item>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid xs={4} lg={4}>
                            <Item>
                                <Box>
                                    <Diversity3Icon sx={{ fontSize: 175 }} />
                                </Box>
                                <Box sx={{ pl: 2 }}>
                                    <Item><h2>Get your matches</h2></Item>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <hr></hr>
        </div>
  )
}


export default connect(null)(Root)
