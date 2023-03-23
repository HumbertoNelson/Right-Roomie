import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import { Grid } from "@mui/material";

const AllUsers = () => {
  const usersArr = [
    {
      id: 1,
      username: "cody",
      password: "$2b$05$58X/kMrWaSu88AiHglF0UOSLP3jh1CvaJmx0sV.U5DWTBibrqHvSa",
      fullName: "Cody Miller",
      city: "Brooklyn",
      email: "cody@email.com",
      phone_number: "5556667777",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgTLDTzIKb-BpcSLg0ZW231mhbgFF0nU8jfF8dg4hS5w&usqp=CAU&ec=48665699",
    },
    {
      id: 2,
      username: "mark",
      password: "$2b$05$/gd5Z0K0au3owqksM7bn2Om56f6TfkvLsSK2.QfMBHSoOCFZ4YOMW",
      fullName: "Mark Johnson",
      city: "Brooklyn",
      email: "murphy@email.com",
      phone_number: "1112223333",
      imgUrl:
        "https://media.istockphoto.com/id/1034357476/photo/indoor-photo-of-handsome-european-guy-pictured-isolated-on-grey-background-standing-close-to.jpg?b=1&s=170667a&w=0&k=20&c=JXpvLDX1dRzAIIE4js5q6A_0v9qojsT-tqGdDjZO_Zs=",
    },
  ];
  return (
    <div>
      <div>
        <h1>Your Matches</h1>
      </div>
      <Grid container spacing={2}>
        {usersArr.map((user) => (
          <Grid item key={user.id} xs={3} md={2.4} lg={2}>
            <UserCard user={user} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AllUsers;
