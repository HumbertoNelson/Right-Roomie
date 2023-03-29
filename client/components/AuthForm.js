import React from "react";
import { connect } from "react-redux";
import { authenticateLogin, authenticateSignup } from "../store";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div className="card">
      <Card
        sx={{
          width: "75%",
          position: "center",
          mt: 5,
          backgroundColor: "#bed3de",
        }}
        style={{}}
        elevation={10}
      >
        <CardContent>
          <form onSubmit={handleSubmit} name={name}>
            <TextField
              required
              name="username"
              label="Username"
              variant="outlined"
            />
            <br />
            <TextField
              required
              name="password"
              label="Password"
              variant="outlined"
              type="password"
            />
            {name == "signup" ? (
              <div className="block">
                <TextField
                  required
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                />
                <br />
                <TextField
                  required
                  name="city"
                  label="City"
                  variant="outlined"
                />
                <br />
                <TextField
                  required
                  name="email"
                  label="Email"
                  variant="outlined"
                />
                <br />
                <TextField
                  required
                  name="phone_number"
                  label="Phone"
                  variant="outlined"
                />
                <br />
                <TextField name="imgUrl" label="Picture" variant="outlined" />
              </div>
            ) : (
              <br></br>
            )}
            <CardActions>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#28536b", ':hover': {backgroundColor: '#688697'} }}
                type="submit"
              >
                {displayName}
              </Button>
            </CardActions>
            {error && error.response && <div> {error.response.data}</div>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: "login",
    displayName: "Login",
    error: state.auth.error,
  };
};

const mapSignup = (state) => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.auth.error,
  };
};

const mapDispatchSignup = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const fullName = evt.target.fullName.value;
      const city = evt.target.city.value;
      const email = evt.target.email.value;
      const phone_number = evt.target.phone_number.value;
      const imgUrl = evt.target.imgUrl.value;
      dispatch(
        authenticateSignup(
          username,
          password,
          fullName,
          city,
          email,
          phone_number,
          imgUrl,
          formName
        )
      );
    },
  };
};

const mapDispatchLogin = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      dispatch(authenticateLogin(username, password, formName));
    },
  };
};

export const Login = connect(mapLogin, mapDispatchLogin)(AuthForm);
export const Signup = connect(mapSignup, mapDispatchSignup)(AuthForm);
