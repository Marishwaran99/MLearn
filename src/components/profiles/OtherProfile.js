import React, { Component } from "react";
import profileImg from "../../images/profile.svg";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import CodeList from "../codes/CodeList";
class OtherProfile extends Component {
  componentDidMount() {
    document.title = "Profile | Mlearn";
  }

  render() {
    const { profile } = this.props;
    if (profile)
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            <h1 className="my-1">Profile</h1>
            <div className="profile-card">
              <h4 className="mb-sm">{profile.username}</h4>
              <p className="mb-sm">{profile.email}</p>
            </div>
            <hr />
            <div className="my-courses-container my-1">
              <h4 className="mb-sm">Courses</h4>
              <p className="mb-sm">List of courses</p>
            </div>
            <hr />
            <div className="my-codes-container my-sn">
              <h4>Codes</h4>
              <div className="mt-1">
                <CodeList id={this.props.match.params.id} />
              </div>
            </div>
          </div>
        </div>
      );
    return <p>Loading...</p>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const profiles = state.firestore.data.users;
  const profile = profiles ? profiles[id] : null;
  return {
    profile: profile
  };
};
export default compose(
  firestoreConnect([
    {
      collection: "users"
    }
  ]),
  connect(
    mapStateToProps,
    null
  )
)(OtherProfile);
