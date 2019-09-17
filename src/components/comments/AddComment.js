import React, { Component } from "react";
import { addComment } from "../actions/commentAction";
import { connect } from "react-redux";
import addCommentImg from "../../images/addComment.svg";
class AddComment extends Component {
  state = {
    title: "",
    description: "",
    tags: []
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  postComment = e => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addComment(this.state);
      this.props.history.push("/comments");
    } else alert("Please provide a title to comment");
  };
  goBack = e => {
    e.preventDefault();
    this.props.history.goBack();
  };

  componentDidMount() {
    document.title = "Add Comment | MLearn";
  }
  render() {
    const { auth } = this.props;
    const { tags } = this.state;
    if (auth.uid)
      return (
        <div className="container">
          <form
            className="d-flex flex-col jcc w-100 p-1"
            onSubmit={this.postComment}
          >
            <h1 className="my-1">Add Comment</h1>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <textarea
                placeholder="Description"
                type="text"
                id="description"
                rows="10"
                onChange={this.handleChange}
              />
            </div>
            <div className="input-field">
              <label htmlFor="tags">Tags</label>
              <ul className="input-tags">
                {tags.map((tag, i) => {
                  return (
                    <li key={i}>
                      {tag}
                      <button
                        className="close-btn"
                        onClick={e => {
                          const newTags = [...this.state.tags];
                          newTags.splice(i, 1);
                          this.setState({ tags: newTags });
                        }}
                      >
                        x
                      </button>
                    </li>
                  );
                })}

                <li>
                  <input
                    type="text"
                    id="tags"
                    maxLength="6"
                    onKeyDown={e => {
                      console.log(e.key);
                      const val = e.target.value.trim();

                      if (
                        (e.key === "Tab" ||
                          e.key === "," ||
                          e.key === "Enter" ||
                          e.key === " ") &&
                        val
                      ) {
                        e.preventDefault();
                        if (
                          this.state.tags.find(tag => tag.toLowerCase()) ===
                          val.toLowerCase()
                        )
                          return;
                        this.setState({
                          tags: [...this.state.tags, val]
                        });
                        e.target.value = "";
                      } else if (e.key === "Backspace" && !val) {
                        const newTags = [...this.state.tags];
                        newTags.splice(this.state.tags.length - 1, 1);
                        this.setState({ tags: newTags });
                      }
                    }}
                  />
                </li>
              </ul>
            </div>
            <div className="button-container asfs">
              <button className="btn primary" onClick={this.postComment}>
                Add
              </button>
              <button className="btn primary" onClick={this.goBack}>
                Back
              </button>
            </div>
          </form>
        </div>
      );
    return <p>Login to comment</p>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
