import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Wrapper component for li styling
const ListItem = ({ children }) => {
  return <li className="p-3">{children}</li>;
};

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <ul className="flex justify-end">
      {currentUser && (
        <>
          <ListItem>
            <Link to="/">Dashboard</Link>
          </ListItem>
          <ListItem>
            <Link to="/notes">Notes</Link>
          </ListItem>
        </>
      )}
    </ul>
  );
};

export default NavBar;
