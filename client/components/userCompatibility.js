import axios from "axios";
import React, { useState, useEffect } from "react";
import { fetchUserPreference } from "../store/userPreference";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const userCompatibility = () => {
  // const dispatch = useDispatch();
  // const { id } = useParams;
  // const { auth } = useSelector((state) => state);
  // const { userPreference } = useSelector((state) => state);

  return (
    <div>
      <h2>
        Hi {auth.fullName}!<br></br>
        <br></br>
      </h2>
      <h2>Here are you matches!</h2>
      <h1>{userInfo.religion}</h1>
    </div>
  );
};

export default userCompatibility;
