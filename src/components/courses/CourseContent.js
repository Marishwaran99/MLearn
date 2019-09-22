import React, { Component } from "react";
import data from "../../coursedata/courseData";
import data1 from "../../coursedata/conceptCourse";
import { Link } from "react-router-dom";
class CourseContent extends Component {
  state = {
    content: undefined,
    id: ""
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    this.setState({
      id: id
    });
    if (data[id]) {
      this.setState(
        {
          content: data[id]
        },
        () => (document.title = this.state.content.title + " | MLearn")
      );
    } else {
      this.setState(
        {
          content: data1[id % data.length]
        },
        () => (document.title = this.state.content.title + " | MLearn")
      );
    }
  }
  render() {
    const { content, id } = this.state;
    return (
      <div className="container">
        <div className="d-flex flex-col w-100 p-1">
          {content ? (
            <div>
              <h1 className="my-1">{content.title && content.title}</h1>
              <p className="my-sm">
                {content.description && content.description}
              </p>
            </div>
          ) : null}

          <div className="d-flex flex-col w-100">
            {content && (
              <h4 className="my-1">{`${content.courseContent.length} Lessons`}</h4>
            )}
            {content &&
              content.courseContent.map((c, i) => {
                return (
                  <Link
                    to={`/courses/${id}/${i}`}
                    key={i}
                    className="d-flex flex-row aic white w-100 link link-black w-100"
                  >
                    <p className="pr-1">{i + 1}</p>
                    <p className="py-1 bb-1 w-100">{c.title}</p>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default CourseContent;
