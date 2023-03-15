import React, { useState } from "react";
import { fetchUserPreference } from "../store/userPreference";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

const userCompatibility = () => {
  const dispatch = useDispatch();
  const { id } = useParams;
  const { auth } = useSelector((state) => state);
  const { userPreference } = useSelector((state) => state);

  return (
    <div>
      <h2>Here are you matches!</h2>
      <div>{userPreference.id}</div>
    </div>
  );
};

export default userCompatibility;
