import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import { navToggle } from "./components/actions/navActions";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import ResetPassword from "./components/authentication/ResetPassword";
import CodeEditor from "./components/codes/CodeEditor";
import Codes from "./components/codes/Codes";
import AddComment from "./components/comments/AddComment";
import CommentDetails from "./components/comments/CommentDetails";
import Comments from "./components/comments/Comments";
import CourseContent from "./components/courses/CourseContent";
import CourseContentDetail from "./components/courses/CourseContentDetail";
import Courses from "./components/courses/Courses";
import Navbar from "./components/Navbar";
import EditProfile from "./components/profiles/EditProfile";
import OtherProfile from "./components/profiles/OtherProfile";
import Profile from "./components/profiles/Profile";
import "./css/style.css";
import "./font-awesome.min.css";

class App extends Component {
  toggleNav = () => {
    const { nav } = this.props;
    if (nav === "") {
      this.props.toggle("active");
    } else {
      this.props.toggle("");
    }
    console.log(this.props.nav);
  };
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div
          onClick={e => {
            if (this.props.nav === "active") this.toggleNav();
          }}
        >
          <Route exact path="/" component={Login} />
          <Route exact path="/profile/:id" component={Profile} />
          <Route exact path="/profileo/:id" component={OtherProfile} />
          <Route exact path="/edit" component={EditProfile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ResetPassword} />
          <Route exact path="/add-comment" component={AddComment} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/courses/:id" component={CourseContent} />
          <Route
            exact
            path="/courses/:id/:contentId"
            component={CourseContentDetail}
          />
          <Route exact path="/codes" component={Codes} />
          <Route path="/web-compiler/:id" component={CodeEditor} />
          <Route
            exact
            path="/comments/comment/:id"
            component={CommentDetails}
          />
        </div>
      </BrowserRouter>
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
)(App);
