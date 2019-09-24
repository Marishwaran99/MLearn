import React, { Component } from "react";
import { Link } from "react-router-dom";
import { uploadCode, updateCode } from "../actions/codeActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orientation: true,
      code: "",
      title: "Untitled",
      btnClass: ["primary", "white", "white"],
      firstLoad: true,
      createdBy: "",
      flexDir: "flex-row",
      conWidth: "w-half h-100",
      id: ""
    };
  }
  componentDidMount() {
    document.title = "Web Compiler | MLearn";
    var w =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    var h =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    if (w >= 768) {
      this.setState({ orientation: false });
    }
    if (this.props.location.state)
      this.setState({
        code: this.props.location.state.content
      });
    this.runProgram();
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  saveProgram = () => {
    this.props.uploadCode(this.state);
  };
  updateProgram = () => {
    this.props.updateCode(this.state);
  };
  runProgram = () => {
    console.log(this.state.code);
    const out = this.refs.output.contentWindow;
    out.document.open();
    out.document.write(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
          <title>Output</title>
      </head>
      <body>
          ${this.state.code}
      </body>
      </html>`
    );
    out.document.close();
  };

  render() {
    const { auth } = this.props;
    const { code } = this.props;
    if (this.state.firstLoad) {
      if (code)
        this.setState(
          {
            html: code.html,
            css: code.css,
            js: code.js,
            title: code.title,
            code: code.code,
            createdBy: code.createdBy,
            id: this.props.match.params.id,
            firstLoad: false
          },
          () => {
            this.runProgram();
            console.log(this.state.code);
          }
        );
    }
    return (
      <div className="w-100 h-max-full-64 of-hidden">
        <div className="w-100 w-max-full of-x-auto d-flex flex-row aic px-1 py-sm ">
          <p
            className="h-100 p-sm text-primary c-pointer asb"
            onClick={this.runProgram}
          >
            Run
          </p>
          {auth.uid ? (
            <>
              <p
                className="h-100 p-sm text-primary c-pointer asb"
                onClick={this.saveProgram}
              >
                Save
              </p>
              {auth.uid === this.state.createdBy ? (
                <p
                  className="h-100 c-pointer p-sm text-primary asb"
                  onClick={this.updateProgram}
                >
                  Update
                </p>
              ) : null}
              <input
                type="text"
                id="title"
                className="file-name-input ml-1"
                value={`${this.state.title}`}
                onChange={this.handleChange}
              />
            </>
          ) : (
            <Link
              className="text-deco-none c-pointer p-sm text-primary asb"
              to="/"
            >
              <p>Login to save</p>
            </Link>
          )}
          <i
            onClick={() =>
              this.setState({ orientation: !this.state.orientation })
            }
            className="fa fa-refresh c-pointer text-primary ml-1"
            style={{ fontSize: 16, padding: "0.5rem" }}
          />
        </div>
        {/*<div className={`w-100 h-100 d-flex ${this.state.flexDir} p-sm`}>
          <div className=" ml-1 mr-sm brad-2 bb-0 shadow-sm code-container">
            <textarea
              value={this.state.code}
              onKeyDown={e => {
                if (e.key === "Tab") {
                  e.preventDefault();
                  var { code } = this.state;
                  code += "  ";
                  this.setState({
                    code: code
                  });
                  console.log(this.state.code);
                }
              }}
              style={{
                background: "bottom"
              }}
              className="w-half w-max-half h-100 h-max-100 h-min-100 w-min-half p-1 b-none"
              onChange={e => this.setState({ code: e.target.value })}
            />
          </div>
          <div className="w-half h-min-100 mr-1 ml-sm shadow-sm">
            <iframe
              width="100%"
              height="100%"
              className="output"
              title="Output"
              ref="output"
              style={{ border: "none" }}
            />
          </div>
        </div>*/}
        {this.state.orientation ? (
          <div
            style={{
              width: "100%",
              height: "auto",
              position: "absolute",
              top: "calc(64px + 60px)",
              padding: "0.5rem",
              bottom: 0
            }}
          >
            <div className="w-100 shadow-sm" style={{ height: "45%" }}>
              <textarea
                placeholder="Enter the code here..."
                value={this.state.code}
                onKeyDown={e => {
                  if (e.key === "Tab") {
                    e.preventDefault();
                    var { code } = this.state;
                    code += "  ";
                    this.setState({
                      code: code
                    });
                    console.log(this.state.code);
                  }
                }}
                className="w-100 h-max-100 p-sm pb-1 textarea2"
                style={{
                  background: "bottom",
                  resize: "none"
                }}
                onChange={e => this.setState({ code: e.target.value })}
              />
            </div>
            <div className="w-100 h-50 shadow-sm mt-1">
              <iframe
                width="100%"
                height="100%"
                className="output"
                title="Output"
                ref="output"
                style={{ border: "none" }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              height: "auto",
              position: "absolute",
              top: "calc(64px + 60px)",
              padding: "0.75rem",
              bottom: 0
            }}
          >
            <div className="w-50 shadow-sm mr-sm" style={{ height: "100%" }}>
              <textarea
                value={this.state.code}
                onKeyDown={e => {
                  if (e.key === "Tab") {
                    e.preventDefault();
                    var { code } = this.state;
                    code += "  ";
                    this.setState({
                      code: code
                    });
                    console.log(this.state.code);
                  }
                }}
                placeholder="Enter the code here..."
                className="w-100 h-max-100 p-sm pb-1 textarea2"
                style={{
                  background: "bottom"
                }}
                onChange={e => this.setState({ code: e.target.value })}
              />
            </div>
            <div className="w-50 h-100 shadow-sm ml-sm">
              <iframe
                width="100%"
                height="100%"
                className="output"
                title="Output"
                ref="output"
                style={{ border: "none" }}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    uploadCode: codes => dispatch(uploadCode(codes)),
    updateCode: code => dispatch(updateCode(code))
  };
};
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const { codes } = state.firestore.data;
  const code = codes ? codes[id] : null;
  console.log(code);
  return {
    auth: state.firebase.auth,
    codes: state.firestore.data,
    code: code
  };
};
export default compose(
  firestoreConnect(["codes"]),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(CodeEditor);
