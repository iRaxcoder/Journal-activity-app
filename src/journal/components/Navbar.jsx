import LogoutOutlined from "@mui/icons-material/LogoutOutlined";
import MenuOutlined from "@mui/icons-material/MenuOutlined";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";

export const Navbar = ({ drawerWidth = 240, handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: "100%",
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          direction="row"
          justifyContent={"space-between"}
          alignItems="center"
        >
          <Typography variant="h6" component={"div"} noWrap>
            JournalApp
          </Typography>
          <IconButton color="error">
            <LogoutOutlined />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
