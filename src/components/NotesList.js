import React from "react";
import { useNotes } from "../context/NotesContext";
import Note from "./Note";

const NotesList = () => {
  const { notesList } = useNotes();
  return (
    <ul>
      {notesList && notesList.map((note) => <Note key={note.id} note={note} />)}
    </ul>
  );
};

export default NotesList;
