import React, { useEffect, useState } from 'react'
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import axios from 'axios';
import '../StyleSheet/Psikolog.css'
import loading from '../Asset/homePage/login.gif'
import { getProfil } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Psikolog() {
  const { profil, isLoading } = useSelector((state) => state.profil);


  console.log(profil);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  return (
    <div className="kontenKomponen">
      <div className="Psikolog mb-3">
        <div className="container d-flex flex-column">
          {isLoading ? (
            <div className="d-flex align-items-center justify-content-center vh-100">
              <img className="img-fluid" src={loading} alt="" />
            </div>
          ) : (profil
            .filter((item) => item.status === "psikolog")
            .map((item) => {
              return (
                <div key={item.id} className="card-psikolog mx-auto mt-3 ">
                  <div className="row">
                    <div className=" col-3 card-img-psikolog">
                      <img className="img-fluid d-flex align-items-center justify-content-center" src={item.avatar} alt="" />
                    </div>
                    <div className="col-6 card-title-piskolog d-flex flex-column">
                      <div className="mb-auto mt-3 psikolog-name">
                        <h3>{item.nama}</h3>
                      </div>
                      <div className="psikolog-job">
                        <h4>{item.tempatkerja}</h4>
                        <h5>{item.alamat}</h5>
                      </div>
                    </div>
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <div className="btn-card-piskolog ">
                        <Link
                          to={`detailPsikolog/${item.id}`}
                          className="nav-link">
                          <button
                            type="button"
                            className="btn btn-primary m-auto p-2">
                            Lihat
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }))}
        </div>
      </div>
    </div>
  );
}

export default Psikolog