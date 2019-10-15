import moment from "moment";
import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
class Code extends Component {
  state = {
    name: ""
  };
  render() {
    const { code, auth } = this.props;
    code.createdBy
      ? this.props.firestore
          .collection("users")
          .doc(code.createdBy)
          .get()
          .then(res => {
            if (res.exists) this.setState({ name: res.data().username });
          })
      : this.setState({ name: "" });
    return (
      <div className="card">
        <h5 className="card-title pl-0 py-sm">{code.title}</h5>
        <p className="tag mr-sm pb-sm">{code.tag}</p>
        <div className="py-1 d-flex jcsb">
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {moment(code.createdAt.toDate()).fromNow()}
          </p>
          {auth.uid === code.createdBy ? (
            <Link
              className="link link-primary"
              to={`/profile/${code.createdBy}`}
            >
              {`By ${this.state.name}`}
            </Link>
          ) : (
            <Link
              className="link link-primary"
              to={`/profileo/${code.createdBy}`}
            >
              {`By ${this.state.name}`}
            </Link>
          )}
        </div>
        <hr />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  firestoreConnect(),
  connect(mapStateToProps)
)(Code);
