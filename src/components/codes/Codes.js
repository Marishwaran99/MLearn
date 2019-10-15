import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import Loading from "../Loading";
import Code from "./Code";
class Codes extends Component {
  componentDidMount = () => {
    document.title = "Codes | MLearn";
  };

  render() {
    const { auth, codes } = this.props;
    var sortedCodes = codes ? codes.slice() : null;
    sortedCodes = sortedCodes
      ? sortedCodes.sort((a, b) =>
          a.createdAt.toDate().getTime() < b.createdAt.toDate().getTime()
            ? 1
            : -1
        )
      : null;
    if (auth.uid) {
      return (
        <div className="container">
          <div className="d-flex flex-col w-100">
            <h2 className="my-1">Codes</h2>
            {sortedCodes ? (
              sortedCodes.map((code, i) => {
                return (
                  <div>
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
