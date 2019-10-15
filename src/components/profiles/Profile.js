import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import { logout } from "../actions/authAction";
import CodeList from "../codes/CodeList";
class Profile extends Component {
  componentDidMount() {
    document.title = "Profile | Mlearn";
  }

  render() {
    const { fb, auth } = this.props;
    if (auth.uid)
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            <h1 className="my-1">Profile</h1>
            <div className="profile-card mt-sm">
              <h4>{fb.profile.username}</h4>
              <p className="mt-sm">{fb.auth.email}</p>
              <div className="button-container">
                <Link to="/edit">
                  <button className="btn primary">Edit</button>
                </Link>
                <button
                  className="btn primary"
                  onClick={e => {
                    this.props.logout(this.props.firebase);
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
            <hr />
            <div className="my-codes-container my-1">
              <h4>My Codes</h4>
              <div className="mt-1">
                <CodeList id={this.props.match.params.id} />
              </div>
            </div>
          </div>
        </div>
      );
    return <Redirect to="/" />;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    logout: firebase => dispatch(logout(firebase))
  };
};

const mapStateToProps = state => {
  return {
    fb: state.firebase,
    auth: state.firebase.auth
  };
};
export default compose(
  firestoreConnect(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Profile);
