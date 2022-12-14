import TurnedInNot from "@mui/icons-material/TurnedInNot";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

export const SideBarItem = ({ title, body, ...rest }) => {
  const dispatch = useDispatch();

  const newTittle = useMemo(() => {
    return title.length > 17
      ? title.substring(0, 17) + "..."
      : title.length === 0
      ? "untitled"
      : title;
  }, [title]);

  const newBody = useMemo(() => {
    return body.length > 17
      ? body.substring(0, 17) + "..."
      : body.length === 0
      ? "empty"
      : body;
  }, [body]);

  const onSetActiveNote = () => {
    dispatch(setActiveNote({ title, body, ...rest }));
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onSetActiveNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid direction={"column"} container>
          <ListItemText primary={newTittle} />
          <ListItemText secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
