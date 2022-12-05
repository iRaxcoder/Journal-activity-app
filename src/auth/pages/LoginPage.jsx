import GoogleIcon from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <>
      <AuthLayout title="Sign in">
        <form>
          <Grid container>
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
              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth>
                  Enter
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Button variant="contained" fullWidth>
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
