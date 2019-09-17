const initState = {
  authErr: null
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        authErr: null
      };
    case "LOGIN_FAILED":
      alert(`Login Failed\n${action.err}`);
      return {
        ...state,
        authErr: action.err
      };
    case "REG_SUCCESS":
      return {
        ...state,
        authErr: null
      };
    case "REG_FAILED":
      alert(`Registration Failed\n${action.err}`);
      return {
        ...state,
        authErr: action.err
      };
    case "RESET_SUCCESS":
      alert(`Reset sent to mail`);
      return {
        ...state,
        authErr: null
      };
    case "RESET_FAILED":
      alert(`Reset Failed\n${action.err}`);
      return {
        ...state,
        authErr: action.err
      };
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        authErr: null
      };
    case "LOGOUT_FAILED":
      alert(`logout Failed\n${action.err}`);
      return {
        ...state,
        authErr: action.err
      };
    case "UPDATE_PROFILE_SUCCESS":
      alert(`update success`);
      return {
        ...state,
        authErr: null
      };
    case "UPDATE_PROFILE_FAILED":
      alert(`update Failed\n${action.err}`);
      return {
        ...state,
        authErr: action.err
      };
    default:
      return state;
  }
};
export default authReducer;
