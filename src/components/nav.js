import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
    <div className="navbar">
    <div className="logo">Rafi Hana</div>
     <ul className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/portofolio">Portofolio</Link>
     </ul>
  </div>
  </>
  );
}

export default Nav;
