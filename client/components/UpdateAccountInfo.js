import React from "react";
import { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAccount } from "../store";
import { useParams } from "react-router-dom";

function UpdateAccountInfo (props) {
    const { auth } = useSelector((state) => state);
    const dispatch = useDispatch();

    const [account, setAccountInfo] = useState({
        fullName: '',
        city: '',
        email: '',
        phone_number: ''
    });

    const handleChange = (event) => {
        setAccountInfo({...account, [event.target.name]: event.target.value});
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(updateAccount(account));
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
                <button type='Submit'>Update</button>                               
            </form>
        </div>
    );
};

export default UpdateAccountInfo;