import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import commentImg from "../../images/comment.svg";
import { addReply } from "../actions/commentAction";
import { Link } from "react-router-dom";
import Reply from "./Reply";
import moment from "moment";
import Loading from "../Loading";
class CommentDetails extends Component {
  state = {
    id: "",
    description: "",
    name: "",
    rname: ""
  };
  handleChange = e => {
    this.setState({
      description: e.target.value
    });
  };
  reply = e => {
    e.preventDefault();
    if (this.state.description.trim() !== "") {
      this.props.addReply(this.state, this.props.firebase);
      this.setState({
        description: ""
      });
    } else {
      alert("Please write something to reply");
    }
  };
  componentDidMount() {
    document.title = "Comment | MLearn";
    this.setState({
      id: this.props.match.params.id
    });
  }
  render() {
    const { comment } = this.props;
    const { auth } = this.props;
    const replies = comment ? comment.replies : null;
    var sortedReplies = comment ? comment.replies.slice() : null;
    if (comment) {
      this.props.firestore
        .collection("users")
        .doc(comment.commentedBy)
        .get()
        .then(res => {
          if (res.exists) this.setState({ name: res.data().username });
        });
      sortedReplies = sortedReplies
        ? sortedReplies.sort((a, b) =>
            a.createdAt.toDate().getTime() < b.createdAt.toDate().getTime()
              ? 1
              : -1
          )
        : null;
      return (
        <div className="container">
          <div className="w-100 d-flex flex-col p-1">
            {comment ? (
              <div>
                <h5 className="comment-title my-1">{comment.title}</h5>
                {comment.description && (
                  <p className="comment-desc my-sm">{comment.description}</p>
                )}
                <div className="d-flex flex-row flex-wrap mb-sm">
                  {comment.tags &&
                    comment.tags.map((tag, i) => {
                      return (
                        <p key={i} className="tag mr-sm mb-sm">
                          {tag}
                        </p>
                      );
                    })}
                </div>

                <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                  {moment(comment.createdAt.toDate()).fromNow()}
                </p>
                <div className="d-flex jcsb my-sm">
                  <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                    {sortedReplies
                      ? `${sortedReplies.length} Reply`
                      : "0 Reply"}
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
                <hr />
              </div>
            ) : (
              <Loading />
            )}
            {this.props.auth.uid ? (
              <form className="d-flex flex-col my-1" onSubmit={this.reply}>
                <h3>Add Reply</h3>
                <textarea
                  type="text"
                  id="reply"
                  className="textarea1"
                  value={this.state.description}
                  onChange={this.handleChange}
                  required
                  placeholder="Write your reply"
                />
                <button className="btn primary">Reply</button>
              </form>
            ) : (
              <div className="my-sm">
                <p className="my-sm">Login to Reply</p>
                <Link to="/">
                  <button className="btn primary">Login</button>
                </Link>
              </div>
            )}
            <hr />
            <h3 className="my-1">Replies</h3>
            <div className="d-flex flex-col">
              {comment ? (
                replies ? (
                  replies.length > 0 ? (
                    replies.map((reply, i) => {
                      return <Reply key={i} reply={reply} />;
                    })
                  ) : (
                    <p>No Replies yet..</p>
                  )
                ) : (
                  <p>No Replies yet..</p>
                )
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addReply: (reply, firebase) => dispatch(addReply(reply, firebase))
  };
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const comments = state.firestore.data.comments;
  const comment = comments ? comments[id] : null;
  return {
    comment: comment,
    auth: state.firebase.auth
  };
};
export default compose(
  firestoreConnect([
    { collection: "comments", orderBy: ["createdAt", "desc"] }
  ]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CommentDetails);
