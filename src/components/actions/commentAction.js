export const addComment = comment => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.auth;
    console.log(profile);
    firestore
      .collection("comments")
      .add({
        ...comment,
        commentedBy: profile.uid,
        createdAt: new Date(),
        replies: []
      })
      .then(() => dispatch({ type: "ADD_COMMENT_SUCCESS" }))
      .catch(err => {
        dispatch({ type: "ADD_COMMENT_FAILED", err });
      });
  };
};
export const addReply = (reply, firebase) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase;
    const r = {
      descripton: reply.description,
      createdAt: new Date(),
      replieddBy: profile.auth.uid
    };
    firestore
      .collection("comments")
      .doc(reply.id)
      .update({
        replies: firebase.firestore.FieldValue.arrayUnion(r)
      })
      .then(() => {
        dispatch({ type: "REPLY_ADDED_SUCCESS" });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: "REPLY_ADDED_FAILED", err });
      });
  };
};
