import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const { login, currentUser } = useAuth();

  if (currentUser) {
    history.push("/");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      history.push("/");
    } catch (err) {
      setError("Failed to login: " + err.message);
    }
  };

  return (
    <>
      <h2>Log In</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" placeholder="email" ref={emailRef} />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={passwordRef}
          />
        </label>

        <button disabled={loading} type="submit">
          Log In
        </button>
      </form>
      <div>
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </>
  );
};

export default Signup;
