import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { currentUser, updatePassword, updateEmail } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setLoading(false);
        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        setError(`Failed to update account: ${error.message}`);
      });
  };

  return (
    <>
      <h2>UpdateProfile</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            defaultValue={currentUser.email}
            ref={emailRef}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Leave blank to keep the same"
            ref={passwordRef}
          />
        </label>
        <label>
          Password confirmation:
          <input
            type="password"
            name="password-confirm"
            placeholder="Leave blank to keep the same"
            ref={passwordConfirmRef}
          />
        </label>
        <button disabled={loading} type="submit">
          Update
        </button>
      </form>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </>
  );
};

export default UpdateProfile;
