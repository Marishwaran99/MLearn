export const login = (credentials, firebase) => {
  return (dispatch, getState) => {
    const { email, password } = credentials;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "LOGIN_FAILED",
          err
        });
      });
  };
};
export const register = (credentials, firebase) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const { username, email, password } = credentials;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: username,
            email: email,
            followers: 0,
            courses: []
          })
          .then(() =>
            dispatch({
              type: "REG_SUCCESS"
            })
          )
          .catch(err => {
            dispatch({
              type: "REG_FAILED",
              err
            });
          });
      })
      .catch(err => {
        dispatch({
          type: "REG_FAILED",
          err
        });
      });
  };
};
export const resetPassword = (creds, firebase) => {
  return (dispatch, getState) => {
    const { email } = creds;
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        dispatch({ type: "RESET_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "RESET_FAILED", err });
      });
  };
};
export const logout = firebase => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGOUT_FAILED", err });
      });
  };
};
export const updateProfile = profile => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(profile.id)
      .update({
        username: profile.username,
        email: profile.email
      })
      .then(() => {
        dispatch({
          type: "UPDATE_PROFILE_SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "UPDATE_PROFILE_FAILED"
        });
      });
  };
};
