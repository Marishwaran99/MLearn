import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "redux";
import Code from "../codes/Code";
import Loading from "../Loading";
class CodeList extends Component {
  render() {
    const { codes } = this.props;
    var sortedCodes = codes ? codes.slice() : null;
    sortedCodes = sortedCodes
      ? sortedCodes.sort((a, b) =>
          a.createdAt.toDate().getTime() < b.createdAt.toDate().getTime()
            ? 1
            : -1
        )
      : null;
    return (
      <div>
        {sortedCodes ? (
          sortedCodes.length > 0 ? (
            sortedCodes.map((code, i) => {
              return (
                <Link
                  key={code.id}
                  to={`/web-compiler/${code.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Code code={code} />
                </Link>
              );
            })
          ) : (
            <p>No codes yet</p>
          )
        ) : (
          <Loading />
        )}
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  var codesList = [];
  var { users } = state.firestore.data;
  const id = ownProps.id;
  var codes = users && id ? (users[id] ? users[id].codes : null) : null;
  if (codes) {
    codesList = Object.values(codes);
  }
  return {
    codes: codesList
  };
};
export default compose(
  firestoreConnect(props => {
    if (props.id)
      return [
        {
          collection: "users",
          doc: props.id,
          subcollections: [{ collection: "codes" }]
        }
      ];
  }),

  connect(
    mapStateToProps,
    null
  )
)(CodeList);
