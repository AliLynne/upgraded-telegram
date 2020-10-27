import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useAuth();

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
    <div className="flex flex-col  mx-auto bg-white mt-8 items-center p-3">
      <h2 className="mb-4 text-3xl">Log In</h2>
      {error && <p className="text-red-900 mb-4 mx-auto">{error}</p>}
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-4">
          Email:
          <input
            className="ml-8 border"
            type="email"
            name="email"
            placeholder=" email"
            ref={emailRef}
          />
        </label>
        <label className="mb-5">
          Password:
          <input
            className="ml-8 border"
            type="password"
            name="password"
            placeholder=" password"
            ref={passwordRef}
          />
        </label>

        <button
          disabled={loading}
          type="submit"
          className="bg-red-200 w-1/4 mx-auto mb-4 p-4"
        >
          Log In
        </button>
      </form>
      <div className="mb-4">
        <p>
          <Link to="/forgot-password">Forgot Password?</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
