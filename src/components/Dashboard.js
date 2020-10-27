import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const Dashboard = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/");
    } catch (err) {
      setError("Failed to log out");
    }
  };
  return (
    <main className="flex flex-col mx-auto bg-white mt-8 items-center p-3 w-screen max-w-3xl shadow-xs">
      <div>
        <h2>Profile</h2>
        {error && <p>{error}</p>}
        <strong>Email: </strong> {currentUser && currentUser.email}
        <Link to="/update-profile">Update Profile</Link>
        <Link to="/notes">Notes</Link>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </main>
  );
};

export default Dashboard;
