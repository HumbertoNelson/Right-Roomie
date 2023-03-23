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
  const { user } = props;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" height="200" image={user.imgUrl} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {user.fullName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            City: {user.city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          <Link className="link" to={`/userDetails/${user.id}`}>
            Details
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
};

export default UserCard;
