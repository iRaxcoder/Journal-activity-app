import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadNotesByUser = async (uid = "") => {
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const notes = [];
  (await getDocs(collectionRef)).forEach((doc) => {
    notes.push({ id: doc.id, ...doc.data() });
  });

  return notes;
};
