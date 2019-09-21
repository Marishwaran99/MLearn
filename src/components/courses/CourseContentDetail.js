import React, { Component } from "react";
import data from "../../coursedata/courseData";
import { Link } from "react-router-dom";
class CourseContentDetail extends Component {
  state = {
    contents: undefined
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const cid = this.props.match.params.contentId;
    document.title = `${data[id].courseContent[cid].title} | MLearn`;
    this.setState({
      contents: data[id].courseContent[cid]
    });
  }

  render() {
    const { contents } = this.state;
    console.log(contents);
    return (
      <div className="container">
        {contents ? (
          contents.title ? (
            <h4 className="p-1">{contents.title}</h4>
          ) : null
        ) : null}
        {contents
          ? contents.contents.map((content, i) => {
              console.log(content);
              return (
                <div className="d-flex flex-col w-100 p-1">
                  {content.title ? (
                    <h4 className="my-1">{content.title}</h4>
                  ) : null}
                  {content.description ? (
                    <p
                      className="my-1"
                      style={{
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word"
                      }}
                    >
                      {content.description}
                    </p>
                  ) : null}
                  <div className="p-1 brad-2 shadow-sm">
                    <h4 className="my-sm text-primary">Example</h4>
                    {content.contentDesc ? (
                      <p
                        className="my-1"
                        style={{
                          whiteSpace: "pre-wrap",
                          overflowWrap: "break-word"
                        }}
                      >
                        {content.contentDesc}
                      </p>
                    ) : null}
                    <div
                      style={{
                        background: "#fff",
                        padding: "0.5rem",
                        borderLeft: "4px solid #2980b9",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word"
                      }}
                    >
                      {content.code}
                    </div>
                    <Link
                      to={{
                        pathname: `/web-compiler/${contents.lesson}`,
                        state: {
                          content: content.code
                        }
                      }}
                    >
                      <button className="btn primary my-1 brad-0">
                        Try it
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    );
  }
}

export default CourseContentDetail;
