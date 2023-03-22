import React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

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
      imgUrl: null,
    },
    {
      id: 2,
      username: "mark",
      password: "$2b$05$/gd5Z0K0au3owqksM7bn2Om56f6TfkvLsSK2.QfMBHSoOCFZ4YOMW",
      fullName: "Mark Johnson",
      city: "Brooklyn",
      email: "murphy@email.com",
      phone_number: "1112223333",
      imgUrl: null,
    },
  ];
  return (
    <Grid container spacing={2}>
      {usersArr.map((user) => (
        <Grid item key={user.id} xs={3} md={2}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default AllUsers;
