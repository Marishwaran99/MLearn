import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { navToggle } from "./actions/navActions";
class Navbar extends Component {
  state = {
    links: [
      { title: "Profile", link: "/" },
      { title: "Add Comment", link: "/add-comment" },
      { title: "Comments", link: "/comments" },
      {
        title: "Web Compiler",
        link: `/web-compiler/${Math.random() * 1000000 + 1}`
      },
      { title: "Codes", link: "/codes" },
      { title: "Courses", link: "/courses" }
    ]
  };

  toggleNav = () => {
    const { nav } = this.props;
    if (nav === "") {
      this.props.toggle("active");
    } else {
      this.props.toggle("");
    }
  };
  render() {
    return (
      <div className="navbar">
        <div className="nav-container">
          <Link to="/" className="brand-logo">
            MLearn
          </Link>
          <ul className={`nav-links-mob ${this.props.nav}`}>
            {this.state.links.map((link, i) => {
              return (
                <li key={i}>
                  <Link
                    className="nav-link"
                    to={link.link}
                    onClick={e => {
                      if (this.props.nav === "active") this.toggleNav();
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className={`nav-links`}>
            {this.state.links.map((link, i) => {
              return (
                <li key={i}>
                  <Link className="nav-link" to={link.link}>
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            className={`btn-toggle`}
            onClick={e => {
              this.toggleNav();
            }}
          >
            {this.props.nav === "active" ? (
              <i className="fa fa-times" style={{ fontSize: 18 }} />
            ) : (
              <i className="fa fa-bars" style={{ fontSize: 18 }} />
            )}
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    nav: state.nav.active
  };
};
const mapDispatchToProps = dispatch => {
  return {
    toggle: active => dispatch(navToggle(active))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
