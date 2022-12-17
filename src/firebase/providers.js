import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    //const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch ({ code, message }) {
    console.log(error);
    return {
      ok: false,
      code,
      message,
    };
  }
};

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, {
      displayName,
    });
    return {
      ok: true,
      uid,
      email,
      photoURL,
    };
  } catch ({ code, message, ...rest }) {
    const errorMessage =
      rest.customData._tokenResponse.error.errors[0].message === "EMAIL_EXISTS"
        ? "Error. Email is currently in use."
        : "Something bad ocurred";
    return {
      ok: false,
      code,
      message: errorMessage,
    };
  }
};

export const loginWithEmailAndPassword = async (email_, password) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email_,
      password
    );

    //const credentials = GoogleAuthProvider.credentialFromResult(result);

    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    console.log(error.message);
    const errorMessage = error.message
      ? "Error. Incorrect email or password"
      : "";
    return {
      ok: false,
      message: errorMessage,
    };
  }
};

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
