import GoogleIcon from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
  return (
    <>
      <AuthLayout title="Sign Up">
        <form>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Full name"
                type={"text"}
                placeholder="Jack Dickinson"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Email"
                type={"email"}
                placeholder="email@email.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Password"
                type={"password"}
                placeholder="pass"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Button variant="contained" fullWidth>
                  Sign Up!
                </Button>
              </Grid>
              <Grid item xs={12} md={6}></Grid>
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
