import React from "react";
import { useNotes } from "../context/NotesContext";

const Note = ({ note }) => {
  const date = new Date(note.data.date);
  const { deleteNote } = useNotes();
  const removeNote = () => {
    console.log(note.id);
    return deleteNote(note.id);
  };
  return (
    <li>
      <p>
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
      <p>{note.data.note}</p>
      <button onClick={removeNote}>Delete</button>
    </li>
  );
};

export default Note;
