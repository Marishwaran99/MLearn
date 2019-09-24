import React, { Component } from "react";
import { register } from "../actions/authAction";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import registerImg from "../../images/register.svg";
import { compose } from "redux";
import { firebaseConnect } from "react-redux-firebase";
class Register extends Component {
  state = {
    username: "",
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
    if (this.state.username.trim())
      this.props.register(this.state, this.props.firebase);
    else alert("Please enter a valid name");
  };
  componentDidMount() {
    document.title = "Mlearn | Register";
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid)
      return (
        <div className="container h-min-full-64 d-flex flex-col jcc">
          <form
            onSubmit={this.handleSubmit}
            className="w-75 sm-w-80 xs-w-100 mx-auto flex-col"
          >
            <h2 className="mb-2 mt-1">Register</h2>
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                required
                onChange={this.handleChange}
              />
            </div>
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
            <button type="submit" className="btn primary w-100">
              Register
            </button>
            <hr className="my-1" />
            <Link to="/" className="link link-primary mt-1 d-block text-center">
              Already Have an Account? Login Here
            </Link>
          </form>
        </div>
      );
    return <Redirect to="/" />;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: (creds, firebase) => dispatch(register(creds, firebase))
  };
};
export default compose(
  firebaseConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Register);
