import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="flex justify-between bg-white">
      <h1 className="p-3">Stuff</h1>
      <NavBar />
    </header>
  );
};

export default Header;
