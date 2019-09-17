import React, { Component } from "react";
import data from "../../coursedata/courseData";
import { Link } from "react-router-dom";
class CourseContentDetail extends Component {
  state = {
    content: undefined
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const cid = this.props.match.params.contentId;
    this.setState({
      content: data[id].courseContent[cid]
    });
  }
  render() {
    const { content } = this.state;
    return (
      <div className="container">
        {content ? (
          <div className="d-flex flex-col w-100 p-1">
            <h2 className="my-1">{content.title}</h2>
            <pre>{content.content}</pre>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CourseContentDetail;
