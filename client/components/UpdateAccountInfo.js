import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../store";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import history from "../history";
import { logout } from "../store";

const UpdateAccountInfo = (props) => {
    const { auth } = useSelector((state) => state);
    const [account, setAccountInfo] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const getUserAccountInfo = async (id) => {
            try {
                const response = await axios.get(`/api/users/${id}/account`);
                const result = await response.data;
                setAccountInfo(result);
            } catch(err) {
                console.error(err);
            }
        };
        getUserAccountInfo(auth.id);
    }, [])

    const handleChange = (event) => {
        setAccountInfo({...account, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(updateAccount(account));
    };

    const deleteUser = async (id) => {
        try {
          await axios.delete(`/api/users/${auth.id}/account`);
        } catch (err) {
          console.error(err);
        }
      };

      const handleDelete = async (id) => {
        await deleteUser();
        history.push("/");
      };


    const {fullName, city, email, phone_number} = account;

    return(
        fullName || city || email || phone_number ? (
            <div className="card">
                <Card sx={{ width: '75%', position: "center", mt: 5, backgroundColor: "#bed3de" }} elevation={10} >
                    <CardContent>
                        <CardHeader
                        title={<Typography variant="h5" component="div">
                        Update Your Account Information
                        </Typography>}
                        />   
                        <form onSubmit={handleSubmit}>
                            <div className="block">
                                <TextField
                                    name="fullName"
                                    label="Full Name"
                                    defaultValue={fullName}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="block">
                                <TextField
                                    name="city"
                                    label="City"
                                    defaultValue={city}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>                                
                            <div className="block">
                                <TextField
                                    name="email"
                                    label="Email"
                                    defaultValue={email}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>                                
                            <div className="block">                             
                                <TextField
                                    name="phone_number"
                                    label="Phone"
                                    defaultValue={phone_number}
                                    variant="outlined"
                                    onChange={handleChange}
                                />
                            </div>
                        <CardActions>  
                            <Button variant='contained' sx={{ backgroundColor: "#28536b", mr: 2 }} type='submit' >Update</Button>
                            <Link to='/'><Button onClick={() => {handleDelete()}} variant='contained' sx={{ backgroundColor: "#28536b" }}>Delete Account</Button></Link>
                            <Link to='/home'><Button variant='contained' sx={{ backgroundColor: "#28536b" }}>Back to Dashboard</Button></Link>
                        </CardActions>                             
                    </form>
                    </CardContent>
                </Card>
            </div>
        ) : (<span></span>)
    );
};

export default UpdateAccountInfo;