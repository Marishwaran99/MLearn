const initState = {
  msg: null
};
const codeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CODE_UPLOAD_SUCCESS":
      alert("Upload Successfull");
      return {
        ...state,
        msg: null
      };
    case "CODE_UPLOAD_FAILED":
      alert(action.err);
      return {
        ...state,
        msg: action.err
      };
    case "UPDATE_CODE_SUCCESS":
      alert("Update Successfull");
      return {
        ...state,
        msg: null
      };
    case "UPDATE_CODE_FAILED":
      alert(action.err);
      return {
        ...state,
        msg: action.err
      };
    default:
      return state;
  }
};
export default codeReducer;
