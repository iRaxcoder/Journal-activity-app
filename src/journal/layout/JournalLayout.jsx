import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Navbar, SideBar } from "../components";

const drawerWidth = 280;

export const JournalLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navbar
          drawerWidth={drawerWidth}
          handleDrawerToggle={handleDrawerToggle}
        />
        <SideBar
          isOpen={isOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />

        <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
};
