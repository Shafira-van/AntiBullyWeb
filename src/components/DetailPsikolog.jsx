import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProfil } from "../redux/action/profilAction";
import "../StyleSheet/detailPsikolog.css";
import loading from "../Asset/homePage/login.gif";
import hospital from "../Asset/DetailPsikolog/hospital.png";
import psikolog from "../Asset/DetailPsikolog/psikolog.png";
import JadwalPraktek from "./JadwalPraktek";

function DetailPsikolog() {
  const dispatch = useDispatch();
  const { profil, isLoading } = useSelector((state) => state.profil);
  let { id } = useParams();

  console.log(profil);

  useEffect(() => {
    dispatch(getProfil());
  }, []);

  // <div className='kontenKomponen'>
  //   <div>
  // {isLoading ? (
  //   <div className="d-flex align-items-center justify-content-center vh-100">
  //     <img className="img-fluid" src={loading} alt="" />
  //   </div>
  // ) : (profil
  //   .filter((item) => item.id === id)
  //   .map((item) => {
  //     return (
  //       <div key={item.id} className="card-psikolog mx-auto mt-3 ">
  //         <img src={item.avatar} style={{ width: "10vw" }} alt="" />
  //         <p>nama {item.nama}</p>
  //         <p>tempat kerja {item.tempatkerja}</p>

  // <a href={`https://wa.me/628${item.no}`} >wa me</a>

  //         <table className="table table-bordered">
  //           <thead>
  //             <tr className="table-primary">
  //               <th scope="col">#</th>
  //               <th scope="col">Senin</th>
  //               <th scope="col">Selasa</th>
  //               <th scope="col">Rabu</th>
  //               <th scope="col">Kamis</th>
  //               <th scope="col">Jumat</th>
  //             </tr>
  //           </thead>
  //           <tbody>
  //             <tr>
  //               <th scope="row" className="table-primary">
  //                 Buka
  //               </th>
  // <td>{item.jadwalpraktek.senin.buka}</td>
  // <td>{item.jadwalpraktek.selasa.buka}</td>
  // <td>{item.jadwalpraktek.rabu.buka}</td>
  // <td>{item.jadwalpraktek.kamis.buka}</td>
  // <td>{item.jadwalpraktek.jumat.buka}</td>
  //             </tr>
  //             <tr>
  //               <th scope="row" className="table-primary">
  //                 Tutup
  //               </th>
  // <td>{item.jadwalpraktek.senin.tutup}</td>
  // <td>{item.jadwalpraktek.selasa.tutup}</td>
  // <td>{item.jadwalpraktek.rabu.tutup}</td>
  // <td>{item.jadwalpraktek.kamis.tutup}</td>
  // <td>{item.jadwalpraktek.jumat.tutup}</td>
  //             </tr>
  //           </tbody>
  //         </table>
  //         <p dangerouslySetInnerHTML={{ __html: item.deskripsi }}></p>
  //       </div>
  //     );
  //   }))}
  //   </div>
  // </div>

  return (
    <>
      {/* {isLoading ? (
         <div className="d-flex align-items-center justify-content-center vh-100">
         <img className="img-fluid" src={loading} alt="" />
       </div>
      ) : (profil.filter((item) =>  item.id === id)) */}

      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (
        profil
          .filter((item) => item.id === id)
          .map((item) => {
            return (
              <div className="container detaiPsikolog mt-3 mb-3">
                <div className="detail-psikolog row mx-auto">
                  <div className="col-lg-3 col-md-3 col-7 mx-auto">
                    <img className="img-fluid" src={item.avatar} alt="" />
                  </div>
                  <div className="psikolog-name col-lg-7 col-md-7 col-12 m-3">
                    <table>
                      <tr>
                        <td className="icon-psikolog p-3">
                          <img src={hospital} alt="" />
                        </td>
                        <td className="detail-psikolog ">
                          <h4>{item.nama}</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="icon-psikolog p-3">
                          <img src={psikolog} alt="" />
                        </td>
                        <td className="detail-psikolog ">
                          <h6>{item.tempatkerja}</h6>
                        </td>
                      </tr>
                    </table>
                    <div className="text-center mt-3 w-100">
                      <a href={`https://wa.me/628${item.no}`}>
                        Hubungi melalui WA
                      </a>
                    </div>
                  </div>
                  <div className="deskripsi-psikolog col-12 mt-3">
                    <p dangerouslySetInnerHTML={{ __html: item.deskripsi }}></p>
                  </div>
                  <div className="jadwal-psikolog col-12 mt-3">
                    <table className="jadwal-psikolog w-100">
                      <tr>
                        <td></td>
                        <td><b>Senin</b></td>
                        <td><b>Selasa</b></td>
                        <td><b>Rabu</b></td>
                        <td><b>Kamis</b></td>
                        <td><b>Jumat</b></td>
                      </tr>
                      <tr>
                        <td><hr /></td>
                        <td><hr /></td>
                        <td><hr /></td>
                        <td><hr /></td>
                        <td><hr /></td>
                        <td><hr /></td>
                      </tr>
                      <tr>
                        <td><b>Buka</b></td>
                        <td>{item.jadwalpraktek.senin.buka}</td>
                        <td>{item.jadwalpraktek.selasa.buka}</td>
                        <td>{item.jadwalpraktek.rabu.buka}</td>
                        <td>{item.jadwalpraktek.kamis.buka}</td>
                        <td>{item.jadwalpraktek.jumat.buka}</td>
                      </tr>
                      <tr>
                        <td><b>Tutup</b></td>
                        <td>{item.jadwalpraktek.senin.tutup}</td>
                        <td>{item.jadwalpraktek.selasa.tutup}</td>
                        <td>{item.jadwalpraktek.rabu.tutup}</td>
                        <td>{item.jadwalpraktek.kamis.tutup}</td>
                        <td>{item.jadwalpraktek.jumat.tutup}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            );
          })
      )}
    </>
  );
}

export default DetailPsikolog;
