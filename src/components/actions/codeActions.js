export const uploadCode = codes => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase;
    var batch = firestore.batch();
    const codesRef = firestore.collection("codes");
    const docRef = codesRef.doc();
    batch.set(docRef, {
      tag: "web",
      title: codes.title,
      code: codes.code,
      createdBy: profile.auth.uid,
      createdAt: new Date()
    });
    const userRef = firestore.collection("users").doc(profile.auth.uid);
    batch.set(userRef.collection("codes").doc(docRef.id), {
      id: docRef.id,
      tag: "web",
      title: codes.title,
      code: codes.code,
      createdBy: profile.auth.uid,
      createdAt: new Date()
    });
    batch
      .commit()
      .then(() => {
        dispatch({ type: "CODE_UPLOAD_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "CODE_UPLOAD_FAILED", err });
      });
  };
};

export const updateCode = codes => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    console.log(firestore);
    const codeRef = firestore.collection("codes").doc(codes.id);
    const batch = firestore.batch();
    batch.update(codeRef, {
      code: codes.code
    });
    const userRef = firestore
      .collection("users")
      .doc(codes.createdBy)
      .collection("codes")
      .doc(codes.id);
    batch.update(userRef, {
      code: codes.code
    });
    batch
      .commit()
      .then(() => {
        dispatch({ type: "UPDATE_CODE_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "UPDATE_CODE_SUCCESS" }, err);
      });
  };
};
