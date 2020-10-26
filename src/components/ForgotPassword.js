import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ForgotPassword = () => {
  const emailRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("check your inbox for further instructions");
    } catch (err) {
      setError("Failed to reset password: " + err.message);
    }

    setLoading(false);
  };

  return (
    <>
      <h2>Password Reset</h2>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" placeholder="email" ref={emailRef} />
        </label>

        <button disabled={loading} type="submit">
          Reset password
        </button>
      </form>
      <div>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
