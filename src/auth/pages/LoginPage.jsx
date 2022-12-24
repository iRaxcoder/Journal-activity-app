import GoogleIcon from "@mui/icons-material/Google";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "",
    password: "",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(startLoginWithEmailPassword(email, password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <AuthLayout title="Sign in">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type={"email"}
                name="email"
                value={email}
                onChange={onInputChange}
                placeholder="email@email.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type={"password"}
                name="password"
                value={password}
                onChange={onInputChange}
                placeholder="pass"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 0 }}>
              <Grid display={!!errorMessage ? "" : "none"} item xs={12} md={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  disabled={isAuthenticating}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Enter
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button
                  disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                >
                  <GoogleIcon />
                  <Typography sx={{ ml: 1 }}>With Google!</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent={"end"}
              sx={{ mt: 1 }}
            >
              <Typography sx={{ mr: 1 }}>No account?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Sign Up!
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
