import "../StyleSheet/Profil.css";
import EditProfil from "./EditProfil";
import { Icon } from "@iconify/react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProfil } from "../redux/action/profilAction";



function Profil({ id, img, nama, email, no, tempatkerja, alamat, gender }) {
  
  

  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(getProfil());
   }, []);

  const [editProfil, setEditProfil] = useState(false);



  return (
    <div key={id}>
      <div className="profil" >
        <div className="isiprofil" >
          <div className="imgprofil">
            <img src={img} className="img-thumbnail" alt="..." /> 
           {!editProfil && (
              <div id="more">
                <Link
                  to={`editprofil/${id}/${nama}`}
                  onClick={() => setEditProfil(true)}>
                  <button >Edit Profil</button>
                </Link>
              </div>
            )}

          </div>
          <div className="textProfil">
            <div id="nama" className="icon">
              <h2>{nama}</h2>
            </div>
            <div id="email" className="icon">
              <Icon
                icon="material-symbols:attach-email-outline-rounded"
                width="3vw"
                height="3vw"
              />
              <span>{email}</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="fxemoji:lefthandphone" width="3vw" height="3vw" />
              <span>{no}</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon
                icon="ic:baseline-work-history"
                width="3vw"
                height="3vw"
              />
              <span>{tempatkerja}</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon icon="ph:address-book" width="3vw" height="3vw" />
              <span>{alamat}</span>
            </div>
            <div id="noHandphone" className="icon">
              <Icon
                icon="ph:gender-intersex-bold"
                width="3vw"
                height="3vw"
              />
              <span>{gender}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
