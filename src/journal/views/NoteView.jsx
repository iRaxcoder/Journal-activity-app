import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useSelector } from "react-redux";
import { useMemo } from "react";

export const NoteView = () => {
  const { activeNote } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    return new Date(date).toUTCString();
  }, [date]);

  return (
    <>
      <Grid
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ mb: 1 }}
      >
        <Grid item>
          <Typography fontSize={39} fontWeight="light">
            {dateString}
          </Typography>
        </Grid>
        <Grid item>
          <Button color="primary" sx={{ padding: 2 }}>
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            Save
          </Button>
        </Grid>
        <Grid container>
          <TextField
            type={"text"}
            variant="filled"
            fullWidth
            placeholder="Write a title"
            label="Title"
            name="title"
            value={title}
            onChange={onInputChange}
            sx={{ border: "none", mb: 1 }}
          />
          <TextField
            type={"text"}
            variant="filled"
            fullWidth
            multiline
            name="body"
            value={body}
            onChange={onInputChange}
            placeholder="What happened today?"
            minRows={5}
          />
        </Grid>
        <ImageGallery />
      </Grid>
    </>
  );
};
