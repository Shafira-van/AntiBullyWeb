import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfil } from '../redux/action/profilAction';
import loading from "../Asset/homePage/login.gif";
import JadwalPraktek from './JadwalPraktek';

function DetailPsikolog() {
   const dispatch = useDispatch();
   const { profil, isLoading } = useSelector((state) => state.profil);
   let { id } = useParams();

  console.log(profil)

   useEffect(() => {
     dispatch(getProfil());
   }, []);
  
  return (
    <div className='kontenKomponen'>
      <div>
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <img className="img-fluid" src={loading} alt="" />
        </div>
      ) : (profil
        .filter((item) => item.id === id)
        .map((item) => {
          return (
            <div key={item.id} className="card-psikolog mx-auto mt-3 ">
              <img src={item.avatar} style={{ width: "10vw" }} alt="" />
              <p>nama {item.nama}</p>
              <p>tempat kerja {item.tempatkerja}</p>
           
                <a href={`https://wa.me/628${item.no}`} >wa me</a>
      

              <table className="table table-bordered">
                <thead>
                  <tr className="table-primary">
                    <th scope="col">#</th>
                    <th scope="col">Senin</th>
                    <th scope="col">Selasa</th>
                    <th scope="col">Rabu</th>
                    <th scope="col">Kamis</th>
                    <th scope="col">Jumat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="table-primary">
                      Buka
                    </th>
                    <td>{item.jadwalpraktek.senin.buka}</td>
                    <td>{item.jadwalpraktek.selasa.buka}</td>
                    <td>{item.jadwalpraktek.rabu.buka}</td>
                    <td>{item.jadwalpraktek.kamis.buka}</td>
                    <td>{item.jadwalpraktek.jumat.buka}</td>
                  </tr>
                  <tr>
                    <th scope="row" className="table-primary">
                      Tutup
                    </th>
                    <td>{item.jadwalpraktek.senin.tutup}</td>
                    <td>{item.jadwalpraktek.selasa.tutup}</td>
                    <td>{item.jadwalpraktek.rabu.tutup}</td>
                    <td>{item.jadwalpraktek.kamis.tutup}</td>
                    <td>{item.jadwalpraktek.jumat.tutup}</td>
                  </tr>
                </tbody>
              </table>
              {/* dangerouslySetInnerHTML={{ __html: el.isi }} */}
              <p dangerouslySetInnerHTML={{ __html: item.deskripsi }}></p>
            </div>
          );
        }))}
      {/* <JadwalPraktek /> */}
      </div>
    </div>
  )
}

export default DetailPsikolog