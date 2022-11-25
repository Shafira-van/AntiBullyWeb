import React from "react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";

function Artikel() {
  return (
    <div className="kontenKomponen">
      <Outlet />
      <div className="artikel">
        <div className="container">
          <div className="row">
            <div className="col">
              <Link
                to="detailartikel/1/Cara terhindar dan mencegah terjadinya bullying"
                className="nav-link"
                href="#">
                <button>
                  <img
                    src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg"
                    alt=""
                  />
                  <p>Cara agar tidak menjadi pelaku bullying</p>
                </button>
              </Link>
            </div>
            <div className="col">
              <button>
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg"
                  alt=""
                />
                <p>Cara agar tidak menjadi pelaku bullying</p>
              </button>
            </div>
          </div>
          <div className="baris2">
            <div className="col">
              <button>
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg"
                  alt=""
                />
                <p>Cara agar tidak menjadi pelaku bullying</p>
              </button>
            </div>
            <div className="col">
              <button>
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/4026024.jpg"
                  alt=""
                />
                <p>Cara agar tidak menjadi pelaku bullying</p>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </Outlet> */}
    </div>
  );
}


export default Artikel;
