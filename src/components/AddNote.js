import React, { useRef, useState } from "react";
import { useNotes } from "../context/NotesContext";

const AddNote = () => {
  const noteRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const { addNote } = useNotes();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await addNote(noteRef.current.value);
      setLoading(false);
      noteRef.current.value = "";
    } catch (err) {
      setError("Failed to login: " + err.message);
    }
  };
  return (
    <>
      <h2>Add a note</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Note:
          <textarea name="note" ref={noteRef} />
        </label>
        <button disabled={loading} type="submit">
          Save
        </button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

export default AddNote;
