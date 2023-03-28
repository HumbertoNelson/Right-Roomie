import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";

const AllUsers = (props) => {
  const { matches } = props;
  return (
    <div>
      <Grid container spacing={2}>
        {matches.map((userInfo) => (
          <Grid item key={userInfo.id} xs={3} md={2.4} lg={2}>
            <UserCard userInfo={userInfo} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllUsers;
