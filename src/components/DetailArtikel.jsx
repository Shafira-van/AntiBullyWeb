import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";

function DetailArtikel() {
  const dispatch = useDispatch();

  // let [id, setId] = useState(1);
  // let params = useParams()
  // {id} = params
  let { id } = useParams()
  console.log(id)

  const { article } = useSelector((state) => state.artikel);
  // setIde = useParams()
  // useParams({ide})

  

  // console.log(id)

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  // .filter((el) => el.id === +id)
  return (
    <div>
      {article
        .filter((el) => el.id === id)
        .map((el) => {
          return (
            <div className="detailArtikel" key={el.id}>
              <div className="judulArtikel">
                <img src={el.img} />
                <h1>{el.judul}</h1>
              </div>
              <p>{el.isi}</p>
            </div>
          );
        })}
      
    </div>
  );
}

export default DetailArtikel;
