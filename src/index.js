import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./components/reducers/rootReducer";
import { Provider } from "react-redux";
import firebase from "./fbConfig";
import thunk from "redux-thunk";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import {
  createFirestoreInstance,
  getFirestore,
  reduxFirestore
} from "redux-firestore";
const initState = {};
const store = createStore(
  rootReducer,
  initState,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase)
  )
);
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
