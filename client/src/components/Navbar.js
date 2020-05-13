import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div
      className="ui inverted secondary pointing menu"
      style={{ marginBottom: "0" }}
    >
      <Link to="/" className="item">
        <i className="camera retro inverted icon" /> ImageCatcher
      </Link>
      <div className="right menu">
        <Link to="/collections/new" className="item">
          New Collection
        </Link>
        <Link to="/collections" className="item">
          All Collections
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
