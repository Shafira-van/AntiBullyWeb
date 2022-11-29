import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";
import DetailArtikel from "./DetailArtikel";

function Artikel() {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.artikel);

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  return (
    <div className="kontenKomponen">
      <Outlet />
      <div className="artikel">
        <div className="container">
          <div className="row">
            {article.splice(0, 4).map((item) => {
              return (
                <Link
                    to={`detailartikel/${item.id}/${item.judul}`}
                    className="nav-link"
                  >
                  <div className="col" key={item.id}>
                  
                    <button>
                      <img src={item.img} alt="" />
                      <p>{item.judul}</p>
                    </button>
                    
                  
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="baris2">
            {article.map((item) => {
              return (
                <Link to={`detailartikel/${item.id}/${item.judul}`}
                    className="nav-link"
                    href="#">
                <div className="col" key={item.id}>
                  
                    
                    <button>
                      <img src={item.img} alt="" />
                      <p>{item.judul}</p>
                    </button>
                  
                </div></Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artikel;
