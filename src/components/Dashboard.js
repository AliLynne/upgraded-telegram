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
      history.push("/login");
    } catch (err) {
      setError("Failed to log out");
    }
  };
  return (
    <>
      <div>
        <h2>Profile</h2>
        {error && <p>{error}</p>}
        <strong>Email: </strong> {currentUser && currentUser.email}
        <Link to="/update-profile">Update Profile</Link>
        <Link to="/notes">Notes</Link>
      </div>
      <button onClick={handleLogout}>Log Out</button>
    </>
  );
};

export default Dashboard;
