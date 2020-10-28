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
    <li className="mb-5 flex flex-col">
      <p className="text-right text-gray-700">
        {date.toLocaleDateString()} - {date.toLocaleTimeString()}
      </p>
      <p className="p-3">{note.data.note}</p>
      <button className="text-red-500 self-end" onClick={removeNote}>
        Delete
      </button>
    </li>
  );
};

export default Note;
