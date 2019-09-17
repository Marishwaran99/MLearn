import React, { Component } from "react";
import { Link } from "react-router-dom";
import courseImg from "../../images/courses.svg";
import "../../css/style.css";
class Courses extends Component {
  state = {
    courses: [
      { name: "HTML & CSS", desc: "HTML is a web language" },
      { name: "CSS", desc: "CSS is a web language" },
      { name: "JS", desc: "JS is a web language" }
    ]
  };
  render() {
    return (
      <div className="container">
        <div className="w-75 sm-w-100 xs-w-100 mx-auto">
          {this.state.courses.map((c, i) => {
            return (
              <div key={i} className="p-1 m-1 brad-1 shadow-sm">
                <h4>{c.name}</h4>
                <p className="my-sm">{c.desc}</p>
                <Link to={`/courses/${i}`} className="link link-primary">
                  More
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Courses;
