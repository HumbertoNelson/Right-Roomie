import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

const UserCard = (props) => {
  const { userInfo } = props;
  return (
    <Card sx={{ width: "100%", height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={userInfo?.user?.imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo.user.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {userInfo?.user?.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          <Link className="link" to={`/userDetails/${userInfo.userId}`}>
            Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
