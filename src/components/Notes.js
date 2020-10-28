import React from "react";
import { NotesProvider } from "../context/NotesContext";
import NotesList from "./NotesList";
import AddNote from "./AddNote";

const Notes = () => {
  return (
    <div className="flex flex-col mx-auto bg-white mt-8 items-center p-3 w-screen max-w-3xl shadow-xs">
      <NotesProvider>
        <AddNote />
        <NotesList />
      </NotesProvider>
    </div>
  );
};

export default Notes;
