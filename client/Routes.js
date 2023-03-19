import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  withRouter,
  Route,
  Switch,
  Redirect,
  useParams,
} from "react-router-dom";
import { AuthForm, Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import UpdateUserInfo from "./components/UpdateUserInfo";
import UserInfo from "./components/UserInfoForm";
import UpdateAccountInfo from "./components/UpdateAccountInfo";
import Root from './components/Root';
import { me } from "./store";
import userPreference from "./components/userPreference";
import userCompatibility from "./components/userCompatibility";
import UpdateUserPreferences from "./components/UpdateUserPreference";

/**
 * COMPONENT
 */
const { id } = useParams;

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={Home} />
            <Route
              exact
              path={`/${id}/userPreference`}
              component={userPreference}
            />
            <Route
              exact
              path={`/${id}/userPreference/userCompatibility`}
              component={userCompatibility}
            />

            <Route exact path="/userInfo" component={UserInfo} />
            <Route
              exact
              path="/users/:id/account"
              component={UpdateAccountInfo}
            />
            <Route exact path="/updateUserInfo" component={UpdateUserInfo} />
            <Route
              exact
              path="/updateUserPreferences"
              component={UpdateUserPreferences}
            />
            {/* <Redirect exact to={`/${id}/userPreference/userCompatibility`} /> */}
            <Route path="/users/:id/account" component={UpdateAccountInfo} />
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
    isLoggedIn: !!state.auth.id,
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
