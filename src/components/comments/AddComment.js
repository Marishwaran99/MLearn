import React, { Component } from "react";
import { addComment } from "../actions/commentAction";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import addCommentImg from "../../images/addComment.svg";
import "./styles.css";
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
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                id="description"
                rows="10"
                onChange={this.handleChange}
                className="textarea1"
              />
            </div>
            <div className="input-field">
              <label htmlFor="tags">Tags</label>
              <ul className="d-flex flex-row flex-wrap w-100 ls-none p-0">
                {tags.map((tag, i) => {
                  return (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "0.5rem",
                        marginRight: "0.5rem",
                        fontSize: "12px",
                        width: "fit-content",
                        height: "fit-content",
                        paddingLeft: "0.5rem",
                        backgroundColor: "#2980b9",
                        color: "white",
                        borderRadius: "1rem"
                      }}
                    >
                      {tag}
                      <button
                        style={{
                          fontSize: "12px",
                          backgroundColor: "transparent",
                          color: "white",
                          padding: "0.1rem 0.25rem",
                          fontWeight: "bold",
                          width: "fit-content",
                          height: "fit-content",
                          borderRadius: "1rem",
                          margin: 0,
                          border: "none",
                          outline: "none",
                          marginLeft: "0.5rem"
                        }}
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

                <li style={{ display: "block", width: "100%" }}>
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
    return <Redirect to="/" />;
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
