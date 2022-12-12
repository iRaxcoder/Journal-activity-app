import { signInWithGoogle } from "../../firebase/providers";
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
