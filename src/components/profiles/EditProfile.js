import React, { Component } from "react";
import { connect } from "react-redux";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { resetPassword, updateProfile } from "../actions/authAction";

class EditProfile extends Component {
  state = {
    username: "",
    email: "",
    id: ""
  };
  componentDidMount() {
    document.title = "Edit Profile | MLearn";
  }
  handleChange = e => {
    this.setState({
      username: e.target.value
    });
  };
  render() {
    const { fb } = this.props;
    if (fb.auth.uid)
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            <h1 className="mt-1">Edit Profile</h1>
            <form
              onSubmit={e => {
                e.preventDefault();
                this.setState(
                  {
                    email: fb.auth.email,
                    id: fb.auth.uid
                  },
                  () => {
                    this.props.editProfile(this.state);
                    this.setState({
                      username: ""
                    });
                  }
                );
              }}
            >
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" readOnly value={fb.auth.email} />
              </div>
              <div className="input-field">
                <label htmlFor="username">New Username</label>
                <input
                  type="text"
                  id="username"
                  value={this.state.username}
                  placeholder={`Current Username - ${fb.profile.username}`}
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <div className="button-container">
              <button
                className="btn primary mb-0 mt-sm"
                onClick={e => {
                  this.props.history.goBack();
                }}
              >
                Back
              </button>
              <button
                className="btn primary mb-0 mt-sm"
                onClick={() => {
                  this.setState(
                    {
                      email: fb.auth.email
                    },
                    () => {
                      this.props.resetPassword(this.state, this.props.firebase);
                    }
                  );
                }}
              >
                Change Password
              </button>
              <button
                className="btn primary mb-0 mt-sm"
                onClick={e => {
                  this.setState(
                    {
                      email: fb.auth.email,
                      id: fb.auth.uid
                    },
                    () => {
                      this.props.editProfile(this.state);
                      this.setState({
                        username: ""
                      });
                    }
                  );
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      );
    else return <p>Loading...</p>;
  }
}
const mapStateToProps = state => {
  return {
    fb: state.firebase
  };
};
const mapDispatchToProps = dispatch => {
  return {
    editProfile: profile => {
      dispatch(updateProfile(profile));
    },
    resetPassword: (creds, firebase) => {
      dispatch(resetPassword(creds, firebase));
    }
  };
};
export default compose(
  firebaseConnect(),

  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(EditProfile);
