import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <div className="konten">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img
            src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/LOGO.gif"
            alt=""
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <CustomLink
                  to="/"
                  className="nav-link"
                  aria-current="page"
                  href="#">
                  Beranda
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink to="/artikel" className="nav-link" href="#">
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
            </ul>
          </div>
        </div>
        <div className="btn-group">
          <img
            src="https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=770"
            alt=""
          />

          <button
            type="button"
            className="btn dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false">
            User
          </button>
          <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
            <li>
              <a className="dropdown-item" href="#">
                Profil
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

function CustomLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
      <Link id={isActive ? "active" : ""} to={to}>
        {children}
      </Link>
  );
}

export default Navbar;
