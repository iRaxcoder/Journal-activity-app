import {
  loginWithEmailAndPassword,
  logoutFirebase,
  registerUserWithEmailPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

export const checkAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};

export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.message));

    dispatch(login(result));
  };
};

export const startCreatingUserWithEmailPassword = ({
  email,
  password,
  displayName,
}) => {
  return async (dispatch) => {
    dispatch(checkCredentials());

    const { ok, uid, photoURL, message } = await registerUserWithEmailPassword({
      email,
      password,
      displayName,
    });

    if (!ok) return dispatch(logout({ message }));

    dispatch(login({ uid, displayName, email, photoURL }));
  };
};

export const startLoginWithEmailPassword = (email_, password) => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    //provider function
    const result = await loginWithEmailAndPassword(email_, password);
    const { message } = result;
    if (!result.ok) return dispatch(logout({ message }));

    dispatch(login(result));
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
