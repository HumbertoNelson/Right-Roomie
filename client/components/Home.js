import React from "react";
import { connect } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

export const Home = (props) => {
  console.log("props", props);
  const { fullName, pic } = props;

  return fullName ? (
    <div>
      <Box
        className="testBox"
        sx={{
          mt: 5,
          justifyContent: "center",
          textAlign: "center",
          p: 3,
          backgroundColor: "#bed3de",
          border: "1px solid black",
          color: "white",
          height: 400,
        }}
      >
        <h1>User Dashboard</h1>
        <h2 className="dashHeader">Welcome, {fullName}!</h2>
        <Grid container align="center">
          <Grid item xs={12}>
            <Avatar alt={fullName} src={pic} sx={{ width: 250, height: 250 }} />
          </Grid>
        </Grid>
      </Box>
      <div className="card">
        <Grid container spacing={2} align="center" sx={{ mt: 2 }}>
          <Grid item xs={6}>
            <Card
              sx={{
                width: "95%",
                height: "100%",
                position: "center",
                backgroundColor: "#bed3de",
              }}
              elevation={10}
            >
              <CardContent>
                <CardHeader
                  title={
                    <Typography variant="h5" component="div">
                      Account Information
                    </Typography>
                  }
                />
                <Typography
                  sx={{ mt: 1.5, backgroundColor: "#f6f0ed" }}
                  component={"span"}
                >
                  <p>
                    <Link to="/account">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#28536b",
                          ":hover": { backgroundColor: "#688697" },
                        }}
                      >
                        Profile
                      </Button>
                    </Link>
                  </p>
                  <p>
                    <Link to="/updateUserInfo">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#28536b",
                          ":hover": { backgroundColor: "#688697" },
                        }}
                      >
                        User Info Form
                      </Button>
                    </Link>
                  </p>
                  <p>
                    <Link to="/updateUserPreference">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#28536b",
                          ":hover": { backgroundColor: "#688697" },
                        }}
                      >
                        Roommate Preferences Form
                      </Button>
                    </Link>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card
              sx={{
                width: "95%",
                height: "100%",
                position: "center",
                backgroundColor: "#bed3de",
              }}
              elevation={10}
            >
              <CardContent>
                <CardHeader
                  title={
                    <Typography variant="h5" component="div">
                      Roommates
                    </Typography>
                  }
                />
                <Typography
                  sx={{ mt: 1.5, backgroundColor: "#f6f0ed" }}
                  component={"span"}
                >
                  <p>
                    <Link to="/compatibility">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#28536b",
                          ":hover": { backgroundColor: "#688697" },
                        }}
                      >
                        View your matches
                      </Button>
                    </Link>
                  </p>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  ) : (
    <span></span>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    fullName: state.auth.fullName,
    pic: state.auth.imgUrl,
  };
};

export default connect(mapState)(Home);
