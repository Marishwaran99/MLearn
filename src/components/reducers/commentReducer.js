const initState = {
  msg: null
};
const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_COMMENT_SUCCESS":
      return {
        ...state,
        msg: null
      };
    case "ADD_COMMENT_FAILED":
      console.log(action.err);
      return {
        ...state,
        msg: action.err
      };
    case "REPLY_ADDED_SUCCESS":
      console.log(action.err);
      return {
        ...state,
        msg: null
      };
    case "REPLY_ADDED_FAILED":
      console.log(action.err);
      return {
        ...state,
        msg: action.err
      };

    default:
      return state;
  }
};

export default commentReducer;
