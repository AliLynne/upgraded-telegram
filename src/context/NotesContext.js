import React, { createContext, useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { useAuth } from "./AuthContext";

const NotesContext = createContext();

export const useNotes = () => {
  return useContext(NotesContext);
};

export const NotesProvider = ({ children }) => {
  const [notesList, setNotesList] = useState();

  const [loading, setLoading] = useState(true);
  const { currentUser } = useAuth();

  const newLocalDate = Date.now();

  const addNote = (note) => {
    return db
      .collection("notes")
      .add({ userId: currentUser.uid, note, date: newLocalDate });
  };

  const deleteNote = (note) => {
    return db.collection("notes").doc(note).delete();
  };

  useEffect(() => {
    const query = db.collection("notes").where("userId", "==", currentUser.uid);
    const unsubscribe = query.onSnapshot(
      (querySnapshot) => {
        // set notes list here
        const notes = [];
        querySnapshot.forEach((note) => {
          const formattedNote = {
            id: note.id,
            data: note.data(),
          };
          notes.push(formattedNote);
        });
        setNotesList(notes);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [currentUser.uid]);

  const value = {
    notesList,
    addNote,
    deleteNote,
  };

  return (
    <NotesContext.Provider value={value}>
      {!loading && children}
    </NotesContext.Provider>
  );
};
