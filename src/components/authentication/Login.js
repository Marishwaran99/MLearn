import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/authAction";
import { firebaseConnect } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import "../../css/style.css";
class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.firebase);
  };
  componentDidMount() {
    document.title = "Login | Mlearn";
  }
  render() {
    const { auth } = this.props;
    if (auth.uid) return <Redirect to={`/profile/${auth.uid}`} />;
    return (
      <div className="container h-min-full-64 d-flex flex-col jcc">
        <form
          onSubmit={this.handleSubmit}
          className="w-75 sm-w-80 xs-w-100 h-min-100 mx-auto flex-col"
        >
          <h1 className="mt-1 mb-2">Login</h1>
          <div className="input-field">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              required
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              required
              onChange={this.handleChange}
            />
          </div>
          <Link
            to="/forgot-password"
            className="w-100 link link-primary d-block text-right"
          >
            Forgot password?
          </Link>
          <button className="btn primary w-100" type="submit">
            Login
          </button>

          <hr className="my-1" />
          <Link to="/register" className="link link-primary mt-1 d-block text-center">
            New Here? Create New Account
          </Link>
        </form>
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
    login: (creds, firebase) => dispatch(login(creds, firebase))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Login);
