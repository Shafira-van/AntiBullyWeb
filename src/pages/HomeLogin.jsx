import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

function HomeLogin() {
  return (
    <div>
      {/* <Navbar/> */}
      <Link to="/login" className="nav-link text-decoration-none" href="#">
        <button>Login</button>
      </Link>
      <Link to="/register" className="nav-link text-decoration-none" href="#">
        <button>Register</button>
      </Link>
      {/* <Footer/> */}
    </div>
  );
}

export default HomeLogin;
