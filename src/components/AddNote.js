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
    <div className="flex flex-col align-center m-3 p-3">
      <h2 className="text-center text-lg uppercase mb-3">Add a note</h2>
      <form
        className="flex flex-col p-3 bg-gradient-to-b from-pink-900 shadow"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col text-white">
          Note:
          <textarea className="my-3 shadow" name="note" ref={noteRef} />
        </label>
        <button
          className="bg-pink-900 text-white mt-2 p-3 hover:bg-pink-800"
          disabled={loading}
          type="submit"
        >
          Save
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default AddNote;
