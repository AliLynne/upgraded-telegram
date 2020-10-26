import React from "react";
import { Link } from "react-router-dom";
import { NotesProvider } from "../context/NotesContext";
import NotesList from "./NotesList";
import AddNote from "./AddNote";

const Notes = () => {
  return (
    <NotesProvider>
      <AddNote />
      <NotesList />
      <Link to="/">Dashboard</Link>
    </NotesProvider>
  );
};

export default Notes;
