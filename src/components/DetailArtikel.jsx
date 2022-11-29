import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";

function DetailArtikel() {
  const dispatch = useDispatch();
  const { article } = useSelector((state) => state.artikel);
  let { id } = useParams()

  const inner ='lorem <b>ipsum</b>'
  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  // .filter((el) => el.id === +id)
  return (
    <div className="kontenKomponen">
      {article
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
        })}
    </div>
  );
}

export default DetailArtikel;
