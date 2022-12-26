import SaveOutlined from "@mui/icons-material/SaveOutlined";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { useEffect } from "react";
import { setActiveNote, startSaveNote } from "../../store/journal";
import UploadFileOutlined from "@mui/icons-material/UploadFileOutlined";
import { useRef } from "react";

export const NoteView = () => {
  const fileInputRef = useRef();
  const { activeNote, isSaving } = useSelector((state) => state.journal);
  const dispatch = useDispatch();
  const { body, title, date, onInputChange, formState } = useForm(activeNote);

  const dateString = useMemo(() => {
    return new Date(date).toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  const onSaveNote = () => {
    dispatch(startSaveNote());
  };

  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
  };

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
          <input
            ref={fileInputRef}
            className=""
            multiple
            accept="image/png,image/jpeg"
            type={"file"}
            onChange={onFileInputChange}
            style={{ display: "none" }}
          />

          <IconButton
            onClick={() => fileInputRef.current.click()}
            color="primary"
            disabled={isSaving}
          >
            <UploadFileOutlined />
            <Typography>Upload image</Typography>
          </IconButton>
          <Button
            disabled={isSaving}
            color="primary"
            sx={{ padding: 2 }}
            onClick={onSaveNote}
          >
            <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
            {isSaving ? "Saving..." : "Save"}
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
