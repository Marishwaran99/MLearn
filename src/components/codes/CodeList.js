import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";
import Code from "../codes/Code";
class CodeList extends Component {
  render() {
    const { codes } = this.props;
    return (
      <div>
        {codes ? (
          codes.map((code, i) => {
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
