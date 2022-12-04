import GoogleIcon from "@mui/icons-material/Google";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems={"center"}
        justifyContent="center"
        sx={{ minHeight: "100vh", bgcolor: "primary.main", padding: 4 }}
      >
        <Grid
          item
          className="box-shadow"
          xs={3}
          sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
        >
          <Typography variant="h5" sx={{ mb: 1 }}>
            Login
          </Typography>
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
                  type={"email"}
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
                    <Typography sx={{ ml: 1 }}>Google</Typography>
                  </Button>
                </Grid>
              </Grid>
              <Grid
                container
                direction="row"
                justifyContent={"end"}
                sx={{ mt: 1 }}
              >
                <Link
                  component={RouterLink}
                  color="inherit"
                  to="/auth/register"
                >
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};
