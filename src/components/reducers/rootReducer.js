import authReducer from "./authReducer";
import commentReducer from "./commentReducer";
import navReducer from "./navReducer";
import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import codeReducer from "./codeReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  nav: navReducer,
  code: codeReducer,
  comment: commentReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
export default rootReducer;
