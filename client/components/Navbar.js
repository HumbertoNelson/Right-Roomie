import React from "react";
import { connect } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, id }) => (
  <div>
    <h1>Right Roomie</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}

          <Link to="/home">Home</Link>
          <Link to={`/${id}/userPreference}`}>User Preferences</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
          <Link to="/userInfo">User Info Form</Link>
          <p>
            <Link to={`users/${id}/account`}>Account Information</Link>
          </p>
          <Link to="/updateUserInfo"> Update User Info Form</Link>
          <Link to="/updateUserPreferences"> Update User Preferences</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    id: state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
