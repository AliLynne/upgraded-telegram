import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import classnames from "classnames";

// Wrapper component for li styling
const ListItem = (props) => {
  const { children, className } = props;
  const classes = classnames("p-3", className);
  return <li className={classes}>{children}</li>;
};

const NavBar = () => {
  const { currentUser } = useAuth();
  return (
    <ul className="flex">
      {currentUser && (
        <>
          <ListItem>
            <Link to="/" className="hover:text-red-900">
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/notes" className="hover:text-red-900">
              Notes
            </Link>
          </ListItem>
        </>
      )}
    </ul>
  );
};

export default NavBar;
