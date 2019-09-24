import React, { Component } from "react";
import data from "../../coursedata/courseData";
import data1 from "../../coursedata/conceptCourse";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class CourseContentDetail extends Component {
  state = {
    contents: undefined,
    type: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    const cid = this.props.match.params.contentId;
    if (data[id]) {
      document.title = `${data[id].courseContent[cid].title} | MLearn`;
      this.setState({
        contents: data[id].courseContent[cid]
      });
    } else {
      document.title = `${data1[id % data.length].courseContent[cid].title} | MLearn`;
      this.setState({
        contents: data1[id % data.length].courseContent[cid],
        type: "concept"
      });
    }
  }
  render() {
    const { auth } = this.props;
    if (auth.uid) {
      const { contents, type } = this.state;

      console.log(contents);
      if (type === "")
        return (
          <div className="container">
            {contents ? (
              contents.title ? (
                <h4 className="px-1 py-sm">{contents.title}</h4>
              ) : null
            ) : null}
            {contents
              ? contents.contents.map((content, i) => {
                  console.log(content);
                  return (
                    <div className="d-flex flex-col w-100 p-1">
                      {content.title ? (
                        <h4 className="my-sm">{content.title}</h4>
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
      else
        return (
          <div className="container">
            {contents ? (
              contents.title ? (
                <h4 className="px-1 py-sm">{contents.title}</h4>
              ) : null
            ) : null}
            {contents ? (
              contents.description ? (
                <p
                  style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
                  className="px-1 py-sm"
                >
                  {contents.description}
                </p>
              ) : null
            ) : null}
            {contents ? (
              contents.image ? (
                <img
                  src={contents.image}
                  style={{ width: "100%", height: "auto" }}
                />
              ) : null
            ) : null}
          </div>
        );
    } else return <Redirect to="/" />;
  }
}
const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};
export default connect(mapStateToProps)(CourseContentDetail);
