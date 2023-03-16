import React from "react";
import axios from 'axios';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../store";
import { useHistory } from "react-router-dom";


const UpdateAccountInfo = (props) => {
    const { auth } = useSelector((state) => state);
    const [account, setAccountInfo] = useState({});
    const dispatch = useDispatch();
    const history = useHistory();


const goBack = () => {
    history(-1)
}
    useEffect(() => {
        const getUserAccountInfo = async (id) => {
            try {
                const response = await axios.get(`/api/users/${id}/account`);
                const result = response.data;
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
        goBack();
    };

    return(
        <div>
            <h1>Update Your Account Information</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    name="fullName"
                    onChange={handleChange}
                    value={account.fullName}
                />
                <label htmlFor="city">City</label>
                <input
                    name="city"
                    onChange={handleChange}
                    value={account.city}
                />
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    onChange={handleChange}
                    value={account.email}
                />
                <label htmlFor="phone_number">Phone Number</label>
                <input
                    name="phone_number"
                    onChange={handleChange}
                    value={account.phone_number}
                />
                <button type='submit'>Update</button>                               
            </form>
        </div>
    );
};

export default UpdateAccountInfo;