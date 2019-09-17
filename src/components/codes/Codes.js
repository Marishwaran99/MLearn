import React, { Component } from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import codeImg from "../../images/code.svg";
import { Link } from "react-router-dom";
import Code from "./Code";
class Codes extends Component {
  componentDidMount = () => {
    document.title = "Codes | MLearn";
  };

  render() {
    const { auth, codes } = this.props;
    if (auth.uid)
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            <h2 className="my-1">Codes</h2>
            {codes ? (
              codes.map((code, i) => {
                return (
                  <Link
                    className="text-deco-none text-black"
                    key={i}
                    to={`/web-compiler/${code.id}`}
                  >
                    <Code code={code} />
                  </Link>
                );
              })
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      );
    return <p>Login to see codes</p>;
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
