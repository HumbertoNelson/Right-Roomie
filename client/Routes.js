import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useParams,
} from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import UpdateUserInfo from "./components/UpdateUserInfo";
import UpdateUserPreference from "./components/UpdateUserInfo";
import UserInfo from "./components/UserInfoForm";
import UpdateAccountInfo from "./components/UpdateAccountInfo";
import Root from "./components/Root";
import { me } from "./store";
import userPreference from "./components/userPreference";
import UpdateUserPreferences from "./components/UpdateUserPreference";
import AllUsers from "./components/CompatibleUsers/AllUsers";
import UserDetails from "./components/CompatibleUsers/UserDetails";
import UserCompatibility from "./components/CompatibleUsers/Compatibility";

/**
 * COMPONENT
//  */
// const { id } = useParams;

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;
    return (
      <div>
        {Object.keys(isLoggedIn).length > 0 ? (
          <Switch>
            {/* <Redirect to="/home" /> */}
            <Route path="/home" component={Home} />
            <Route path="/allUsers" component={AllUsers} />
            <Route path="/userDetails/:id" component={UserDetails} />
            <Route path="/userPreference/:id" component={userPreference} />
            <Route path="/userInfo/:id" component={UserInfo} />
            <Route path="/account" component={UpdateAccountInfo} />
            <Route path="/updateUserInfo" component={UpdateUserInfo} />
            <Route
              path="/updateUserPreference"
              component={UpdateUserPreference}
            />
            <Route path="/compatibility" component={UserCompatibility} />
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Root} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: state.auth,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
