import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authAction";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
class Home extends Component {
  logoutClicked = e => {
    this.props.logout(this.props.firebase);
  };
  render() {
    if (this.props.auth.uid) {
      return (
        <div className="container">
          <Link to="/">
            <button onClick={this.logoutClicked}>Logout</button>
          </Link>
        </div>
      );
    }
    return (
      <div className="container">
        <Link to="/">
          <button>Login</button>
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    logout: firebase => dispatch(logout(firebase))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Home);
