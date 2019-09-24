import React, { Component } from "react";
import { Link } from "react-router-dom";
import courseImg from "../../images/courses.svg";
import "../../css/style.css";
class Courses extends Component {
  state = {
    courses: [
      {
        name: "HTML",
        desc:
          "In this tutorial you will learn HTML through hands on practical which will make you more interesting to learn"
      },
      {
        name: "CSS",
        desc:
          "In this tutorial you will learn CSS through hands on practical which will make you more interesting to learn"
      },
      {
        name: "JavaScript",
        desc:
          "In this tutorial you learn JavaScript through hands on practical which will make you more interesting to learn"
      },
      {
        name: "Projects",
        desc:
          "Once you done with some basics of HTML, CSS, JavaScript now put that learning into some mini projects to improve your skills"
      },
      {
        name: "Machine Learning",
        desc: "Here, you can find some basic information about Machine Learning"
      },
      {
        name: "Aritficial Intelligence",
        desc:
          "Here, you can find some basic information about Artificial Intelligence"
      }
    ]
  };
  componentDidMount() {
    document.title = "Courses | MLearn";
  }

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
