import React from "react";
import "../StyleSheet/Profil.css";
import EditProfil from "./EditProfil";
import { Icon } from "@iconify/react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";

function Profil() {
  return (
    <div>
      <div className="profil">
        <h1>Profil</h1>
        <div className="isiprofil">
          <div className="imgprofil">
            <img
              src="https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=770"
              className="img-thumbnail"
              alt="..."></img>
            <Link to="editprofil/1/shafira">
              <button>Edit Profil</button>
            </Link>
          </div>
          <div className="textProfil">
            <div id="nama" className="icon">
              <h2>Nama</h2>
            </div>
            <div id="email" className="icon">
              <Icon
                icon="material-symbols:attach-email-outline-rounded"
                width="30"
                height="30"
              />
              <span>Email</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="fxemoji:lefthandphone" width="30" height="30" />
              <span>NoHandphone</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="ic:baseline-work-history" width="30" height="30" />
              <span>Tempat Bekerja</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="ph:address-book" width="30" height="30" />
              <span>Alamat</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="ph:gender-intersex-bold" width="30" height="30" />
              <span>Jenis Kelamin</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
