import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";
import loading from "../Asset/homePage/login.gif";

function DetailArtikel() {
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector((state) => state.artikel);
  let { id } = useParams()

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  return (
    <div className="kontenKomponen">
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (
        article
          .filter((el) => el.id === id)
          .map((el) => {
            return (
              <div className="detailArtikel" key={el.id}>
                <div className="judulArtikel">
                  <img src={el.img} />
                  <h1>{el.judul}</h1>
                </div>
                <p dangerouslySetInnerHTML={{ __html: el.isi }}></p>
              </div>
            );
          })
      )}
    </div>
  );
}

export default DetailArtikel;
