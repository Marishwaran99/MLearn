import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Comment from "./Comment";
import { Link } from "react-router-dom";
import discussion from "../../images/discussion.svg";
class Comments extends Component {
  state = {
    filter: "createdAt"
  };
  componentDidMount() {
    document.title = "Comments | MLearn";
  }
  handleSelectChange = e => {
    this.setState({
      filter: e.target.value
    });
  };
  render() {
    const { comments, tags } = this.props;

    var sortedComments = comments ? comments.slice() : null;
    var filter = this.state.filter;
    if (filter === "replies")
      sortedComments = sortedComments
        ? sortedComments.sort((a, b) =>
            a.replies.length < b.replies.length ? 1 : -1
          )
        : null;
    else if (filter === "createdAt")
      sortedComments = sortedComments
        ? sortedComments.sort((a, b) =>
            a.createdAt.toDate().getTime() < b.createdAt.toDate().getTime()
              ? 1
              : -1
          )
        : null;
    return (
      <div className="container">
        <div className="d-flex flex-col w-100">
          <h1 className="my-sm">Comments</h1>
          <select onChange={this.handleSelectChange}>
            <option value="createdAt">Date</option>
            <option value="replies">Replies</option>
          </select>
          {sortedComments ? (
            sortedComments.map(comment => {
              return (
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    outline: "none"
                  }}
                  className="card-container"
                  key={comment.id}
                  to={`/comments/comment/${comment.id}`}
                >
                  <Comment comment={comment} />
                  <hr />
                </Link>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.firestore.ordered.comments
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "comments" }])
)(Comments);
