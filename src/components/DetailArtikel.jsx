import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getArtikel } from "../redux/action/artikelAction";
import "../StyleSheet/detailArtikel.css";
import loading from "../Asset/homePage/login.gif";

function DetailArtikel() {
  const dispatch = useDispatch();
  const { article, isLoading } = useSelector((state) => state.artikel);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getArtikel());
  }, []);

  return (
    // <div className="kontenKomponen">
    //   {isLoading ? (
    //     <div className="d-flex align-items-center justify-content-center vh-100">
    //       <img className="img-fluid" src={loading} alt="" />
    //     </div>
    //   ) : (
    //     article
    //       .filter((el) => el.id === id)
    //       .map((el) => {
    //         return (
    //           <div className="detailArtikel" key={el.id}>
    //             <div className="judulArtikel">
    //               <img src={el.img} />
    //               <h1>{el.judul}</h1>
    //             </div>
    //             <p dangerouslySetInnerHTML={{ __html: el.isi }}></p>
    //           </div>
    //         );
    //       })
    //   )}
    // </div>

    <>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (
        article
          .filter((el) => el.id === id)
          .map((el) => {
            return(
              <div className="container detail-artikel">
                <div className="row">
                  <div className="col-5 text-center d-flex justify-content-center mx-auto">
                    <div className="mx-auto">
                      <img className="img-thumbnail my-2" src={el.img} alt="" />
                    </div>
                  </div>
                  <div className="desc-artikel mx-auto col-12">
                    <div className="judul-artikel text-center">
                      <hr />
                      <h3>{el.judul}</h3>
                      <hr />
                    </div>
                    <div className="isi-artikel mx-auto">
                      <p dangerouslySetInnerHTML={{ __html: el.isi }}></p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
      )}
    </>

    // <div  className="container kontenKomponen" id="home">
    //   <img
    //     src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda.png"
    //     alt=""
    //   />
    //   <div className="header">
    //     <h1>Our Mission</h1>
    //     <h2 className="mt-2">
    //       Your <span>Smile</span> Beautifies The <span>world</span>
    //     </h2>
    //     <p className="mt-3">
    //       Ayo hentikan budaya bully di Indonesia, mari kita bangkit bersama
    //       bangun Indonesia lebih maju.
    //     </p>
    //     <p>
    //       <i>
    //         “Beri aku 1000 orang tua, niscaya akan kucabut Sumeru dari akarnya.
    //         Beri aku 10 pemuda, akan kuguncangan dunia” - Ir.Soekarna
    //       </i>
    //     </p>
    //   </div>
    // </div>
  );
}

export default DetailArtikel;
