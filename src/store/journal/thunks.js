import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { fileUpload } from "../../helpers";
import { loadNotesByUser } from "../../helpers/loadNotes";
import {
  addNewEmptyNote,
  errorOcurred,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().toDateString(),
      imageUrls: [],
    };
    try {
      const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));

      await setDoc(newDoc, newNote);

      newNote.id = newDoc.id;

      dispatch(addNewEmptyNote(newNote));
      dispatch(setActiveNote(newNote));
    } catch (error) {
      dispatch(errorOcurred());
    }
  };
};
export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    try {
      const { uid } = getState().auth;
      dispatch(setNotes(await loadNotesByUser(uid)));
    } catch (error) {
      dispatch(errorOcurred());
    }
  };
};

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { activeNote } = getState().journal;
    dispatch(setSaving());
    try {
      const noteToFireStore = { ...activeNote };
      delete noteToFireStore.id;

      const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`);

      await setDoc(docRef, noteToFireStore, { merge: true });

      dispatch(updateNote(activeNote));
    } catch (error) {
      dispatch(errorOcurred());
    }
  };
};

export const startUploadingImages = (images = []) => {
  return async (dispatch) => {
    dispatch(setSaving());
    const imagesUploadedUrls = [];

    for (const img of images) {
      imagesUploadedUrls.push(fileUpload(img));
    }
    const urls = await Promise.all(imagesUploadedUrls);
    dispatch(setPhotosToActiveNote(urls));

    try {
    } catch (error) {
      dispatch(errorOcurred());
    }
  };
};
