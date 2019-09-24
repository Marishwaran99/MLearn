import React, { Component } from "react";
import { resetPassword } from "../actions/authAction";
import { Link } from "react-router-dom";
import forgotpassword from "../../images/forgotpassword.svg";

import { connect } from "react-redux";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
class ForgotPassword extends Component {
  state = {
    email: ""
  };
  handleChange = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.resetPassword(this.state, this.props.firebase);
  };
  componentDidMount() {
    document.title = "Mlearn | ForgotPassword";
  }
  render() {
    return (
      <div className="container h-min-full-64 d-flex flex-col jcc">
        <form
          onSubmit={this.handleSubmit}
          className="w-75 sm-w-80 xs-w-100 mx-auto flex-col"
        >
          <h2 className="mb-2 mt-1 text-center">Forgot your Password?</h2>
          <div className="input-field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <button className="btn primary w-100" type="submit">
            Reset Password
          </button>
          <hr className="my-1" />
          <Link to="/" className="link link-primary mt-1 d-block text-center">
            Go back to Login Page
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (creds, firebase) => {
      dispatch(resetPassword(creds, firebase));
    }
  };
};

export default compose(
  firebaseConnect(),
  connect(
    null,
    mapDispatchToProps
  )
)(ForgotPassword);
