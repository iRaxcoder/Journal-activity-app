import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 8,
    "El password debe tener más de 6 carácteres",
  ],
  displayName: [
    (value) => value.length >= 1,
    "El nombre debe tener más de 1 carácter",
  ],
};

const formDefault = {
  email: "",
  password: "",
  displayName: "",
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );
  const {
    displayName,
    email,
    password,
    formState,
    onInputChange,
    errors,
    isFormValid,
  } = useForm(formDefault, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setformSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <>
      <AuthLayout title="Sign Up">
        <form
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Full name"
                name="displayName"
                value={displayName}
                onChange={onInputChange}
                type={"text"}
                error={!!errors.displayName && formSubmitted}
                helperText={formSubmitted && errors.displayName}
                placeholder="Jack Dickinson"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type={"email"}
                name="email"
                value={email}
                error={!!errors.email && formSubmitted}
                helperText={formSubmitted && errors.email}
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
                error={!!errors.password && formSubmitted}
                helperText={formSubmitted && errors.password}
                value={password}
                onChange={onInputChange}
                placeholder="pass"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid display={!!errorMessage ? "" : "none"} item xs={12} md={12}>
                <Alert severity="error">{errorMessage}</Alert>
              </Grid>
              <Grid item xs={12}>
                <Button
                  disabled={isCheckingAuthentication}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Sign Up!
                </Button>
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justifyContent={"end"}
              sx={{ mt: 1 }}
            >
              <Typography sx={{ mr: 1 }}>Already subscribed?</Typography>
              <Link component={RouterLink} color="inherit" to="/auth/login">
                Sign in now!
              </Link>
            </Grid>
          </Grid>
        </form>
      </AuthLayout>
    </>
  );
};
