const initState = {
  active: ""
};
const navReducer = (state = initState, action) => {
  switch (action.type) {
    case "NAV_ACTIVE":
      return {
        ...state,
        active: "active"
      };
    case "NAV_HIDE":
      return {
        ...state,
        active: ""
      };
    default:
      return {
        ...state,
        active: ""
      };
  }
};
export default navReducer;
