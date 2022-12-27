import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    statusMessage: null,
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveNote: (state, action) => {
      state.activeNote = action.payload;
      state.statusMessage = null;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.statusMessage = null;
    },
    updateNote: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((n) => {
        if (n.id === action.payload.id) {
          return action.payload;
        }
        return n;
      });
      state.statusMessage = {
        header: "Nice!",
        type: "success",
        message: `'${action.payload.title}', updated!`,
      };
    },
    setPhotosToActiveNote: (state, action) => {
      state.activeNote.imageUrls = [
        ...state.activeNote.imageUrls,
        ...action.payload,
      ];
      state.isSaving = false;
    },
    clearNotesLogout: (state) => {
      state.isSaving = false;
      state.statusMessage = null;
      state.activeNote = null;
      state.notes = [];
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((n) => n.id !== action.payload);
      state.activeNote = null;
    },
    errorOcurred: (state) => {
      state.statusMessage = {
        header: "Ups!",
        type: "error",
        message: `Something went wrong`,
      };
      state.isSaving = false;
    },
  },
});
export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  deleteNoteById,
  errorOcurred,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
