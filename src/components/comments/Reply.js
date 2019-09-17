import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import moment from "moment";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class Reply extends Component {
  state = {
    name: ""
  };
  componentDidMount() {
    const { reply } = this.props;
    if (reply)
      this.props.firestore
        .collection("users")
        .doc(reply.replieddBy)
        .get()
        .then(res => {
          if (res.exists) this.setState({ name: res.data().username });
        });
  }

  render() {
    const { reply, auth } = this.props;

    return (
      <div>
        <p className="my-sm" style={{ fontSize: "16px" }}>
          {reply.descripton}
        </p>
        <div className="d-flex jcsb my-sm">
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {moment(reply.createdAt.toDate()).fromNow()}
          </p>
          {auth.uid ? (
            auth.uid === reply.replieddBy ? (
              <Link
                className="link link-primary"
                to={`/profile/${reply.replieddBy}`}
              >
                {`By ${this.state.name}`}
              </Link>
            ) : (
              <Link
                className="link link-primary"
                to={`/profileo/${reply.replieddBy}`}
              >
                {`By ${this.state.name}`}
              </Link>
            )
          ) : (
            <Link
              className="link link-primary"
              to={`/profileo/${reply.replieddBy}`}
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
)(Reply);
