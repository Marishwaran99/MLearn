export const navToggle = active => {
  return (dispatch, getState) => {
    if (active === "active") {
      dispatch({ type: "NAV_ACTIVE" });
    } else {
      dispatch({ type: "NAV_HIDE" });
    }
  };
};
