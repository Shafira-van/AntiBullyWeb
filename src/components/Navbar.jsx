import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import '../StyleSheet/Navbar.css'
// import logo from '../Asset/Navbar/LOGO.gif'

function Navbar() {
  return (
    <>
      <nav className="container navbar navbar-expand-lg bg-transparent">
        <div className="img-nav container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/LOGO.png"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <CustomLink to="/" className="nav-link" href="#">
                  Beranda
                </CustomLink>
              </li>
              <li className="nav-item text-decoration-none">
                <CustomLink
                  to="/artikel"
                  className="nav-link text-decoration-none"
                  href="#">
                  Artikel
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/psikolog" className="nav-link" href="#">
                  Psikolog
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/komunitas" className="nav-link" href="#">
                  Komunitas
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/diskusi" className="nav-link" href="#">
                  Diskusi
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/faq" className="nav-link" href="#">
                  FAQ
                </CustomLink>
              </li>
              <li className="nav-item d-lg-none">
                <CustomLink to="/profil" className="nav-link" href="#">
                  Profil
                </CustomLink>
              </li>
              <li className="nav-item d-lg-none">
                <CustomLink to="/logout" className="nav-link" href="#">
                  Log Out
                </CustomLink>
              </li>
            </ul>
          </div>
          <div className="dropdown Account d-none d-lg-block">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src="https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=770"
                alt=""
              />
              Account
            </a>
            <ul className="dropdown-menu">
              <li>
                
                  <CustomLink to="/profil" className="dropdown-item" href="#">
                    Profil
                </CustomLink>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <CustomLink to="/logout" className="dropdown-item" href="#">
                  Log Out
                </CustomLink>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
  function CustomLink({ to, children }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
        <Link id={isActive ? "active" : ""} to={to}>
          {children}
        </Link>
    );
  }
 }
 
 export default Navbar;




