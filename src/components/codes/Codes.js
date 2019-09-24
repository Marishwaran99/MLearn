import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import codeImg from "../../images/code.svg";
import Code from "./Code";
import { Link, Redirect } from "react-router-dom";
import Loading from "../Loading";
class Codes extends Component {
  componentDidMount = () => {
    document.title = "Codes | MLearn";
  };

  render() {
    const { auth, codes } = this.props;
    if (auth.uid) {
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            {codes ? (
              codes.map((code, i) => {
                return (
                  <div>
                    <h2 className="my-1">Codes</h2>
                    <Link
                      className="text-deco-none text-black"
                      key={i}
                      to={`/web-compiler/${code.id}`}
                    >
                      <Code code={code} />
                    </Link>
                  </div>
                );
              })
            ) : (
              <Loading />
            )}
          </div>
        </div>
      );
    }
    return <Redirect to="/" />;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    codes: state.firestore.ordered.codes
  };
};
export default compose(
  firestoreConnect(["codes"]),
  connect(
    mapStateToProps,
    null
  )
)(Codes);
