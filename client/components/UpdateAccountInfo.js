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

    return(
            <div className="card">
                <Card sx={{ width: '100%', position: "center" }} elevation={10} >
                    <CardContent>
                        <CardHeader
                        title={<Typography variant="h5" component="div">
                        Update Your Account Information
                        </Typography>}
                        />   
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fullName">Full Name:</label>
                            <input
                                name="fullName"
                                type="text"
                                onChange={handleChange}
                                value={account.fullName}
                            />
                            <label htmlFor="city">City:</label>
                            <input
                                name="city"
                                type="text"
                                onChange={handleChange}
                                value={account.city}
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                name="email"
                                type="text"
                                onChange={handleChange}
                                value={account.email}
                            />
                            <label htmlFor="phone_number">Phone Number:</label>
                            <input
                                name="phone_number"
                                type="text"
                                onChange={handleChange}
                                value={account.phone_number}
                            />
                            <label htmlFor="imgUrl">Picture:</label>
                            <input
                                name="imgUrl"
                                type="text"
                                onChange={handleChange}
                                value={account.imgUrl}
                            />
                        <CardActions>  
                            <Button variant='outlined' color='success' type='submit'>Update</Button>
                            <Button variant='outlined' color='success'><Link to='/home'>Back to Dashboard</Link></Button>
                        </CardActions>                               
                    </form>
                    </CardContent>
                </Card>
            </div>
    );
};

export default UpdateAccountInfo;