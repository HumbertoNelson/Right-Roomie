import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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

const UserDetails = () => {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchUserInfo = async (id) => {
      try {
        const response = await axios.get(`/api/users/userinfo/${id}`);
        const result = await response.data;
        setUserInfo(result[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserInfo(id);
  }, []);
  console.log("this is users info", userInfo);
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      marginTop={10}
    >
      <Grid item xs={3} md={2.4} lg={2}>
        <Card sx={{ maxWidth: 500 }}>
          <CardActionArea>
            <CardContent>
              <div className="details">
                <div>
                  <Typography gutterBottom variant="h4" component="div">
                    {userInfo?.user?.fullName}
                  </Typography>
                </div>
                <Typography gutterBottom variant="h6" component="div">
                  About:
                </Typography>
                <CardMedia
                  component="img"
                  height="200"
                  image={userInfo?.user?.imgUrl}
                />
                <ul className="no-bullets">
                  <Typography variant="body2" color="text.secondary">
                    <li>Age: {userInfo.age}</li>
                    <li>Gender: {userInfo.gender}</li>
                    <li>Sexual Orientaion: {userInfo.sexualOrientation}</li>
                    <li>Has Pets: {userInfo.hasPets}</li>
                    <li>Cleanliness: {userInfo.cleanliness}</li>
                    <li>Work Schedule: {userInfo.workSchedule}</li>
                    <li>Recreational Drug Use: {userInfo.drugs}</li>
                    <li>Smokes: {userInfo.smoking}</li>
                    <li>Political Views: {userInfo.politicalViews}</li>
                    <li>Religious Views: {userInfo.religion}</li>
                    <li>Noise Level: {userInfo.noiseLevel}</li>
                    <li>Social Level: {userInfo.socialLevel}</li>
                    <li>
                      Will Be Having Overnight Guests:{" "}
                      {userInfo.overnightGuests}
                    </li>
                  </Typography>
                </ul>
              </div>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button size="small" color="inherit" variant="contained">
              <Link className="link" to={"/allUsers"}>
                Back
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default UserDetails;
