import TurnedInNot from "@mui/icons-material/TurnedInNot";
import CloseOutlined from "@mui/icons-material/CloseOutlined";
import PersonIcon from "@mui/icons-material/Person";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  Toolbar,
  Typography,
  Grid,
  ListItemText,
  IconButton,
  Box,
} from "@mui/material";
import { useSelector } from "react-redux";
import { SideBarItem } from "./";

export const SideBar = ({ drawerWidth = 240, handleDrawerToggle, isOpen }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const drawer = (
    <div>
      <Toolbar
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h7"
          noWrap
          component={"div"}
          sx={{
            display: "flex",
            gap: 1,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <PersonIcon />
          {displayName}
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ display: { xs: "block", md: "none" } }}
          onClick={handleDrawerToggle}
        >
          <CloseOutlined />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {notes.map((note) => (
          <SideBarItem key={note.id} {...note} />
        ))}
      </List>
    </div>
  );

  return (
    <>
      <Box
        component={"nav"}
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={isOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              height: "100vh",
              position: "static",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
