import React, { Component } from "react";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";
class Comment extends Component {
  state = {
    name: ""
  };
  render() {
    const { comment } = this.props;
    const { auth } = this.props;
    this.props.firestore
      .collection("users")
      .doc(comment.commentedBy)
      .get()
      .then(res => {
        if (res.exists) this.setState({ name: res.data().username });
      });

    return (
      <div className="card py-1 px-sm">
        <h5 className="card-title mt-sm">{comment.title}</h5>
        <div className="d-flex flex-row flex-wrap">
          {comment.tags &&
            comment.tags.map((tag, i) => {
              return (
                <p key={i} className="tag mt-sm">
                  {tag}
                </p>
              );
            })}
        </div>

        <p className="mt-1" style={{ fontSize: "14px", fontWeight: "bold" }}>
          {moment(comment.createdAt.toDate()).fromNow()}
        </p>
        <div className="d-flex jcsb aic mt-sm">
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            {comment.replies ? `${comment.replies.length} Reply` : "0 Reply"}
          </p>
          {auth.uid === comment.commentedBy ? (
            <Link
              className="link link-primary"
              to={`/profile/${comment.commentedBy}`}
            >
              {`By ${this.state.name}`}
            </Link>
          ) : (
            <Link
              className="link link-primary"
              to={`/profileo/${comment.commentedBy}`}
            >
              {`By ${this.state.name}`}
            </Link>
          )}
        </div>
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
)(Comment);
