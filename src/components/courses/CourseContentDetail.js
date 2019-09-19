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
    document.title = `${data[id].courseContent[cid].title} | MLearn`;
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
            <div className="snippet-code">
              <div
                style={{
                  background: "#fff",
                  padding: "0.5rem",
                  borderLeft: "4px solid #2980b9",
                  whiteSpace: "pre-wrap"
                }}
              >
                {content.content}
              </div>
              <Link
                to={{
                  pathname: `/web-compiler/${content.lesson}`,
                  state: {
                    content: content.content
                  }
                }}
              >
                <button className="btn primary my-1 brad-0">Try it</button>
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default CourseContentDetail;
