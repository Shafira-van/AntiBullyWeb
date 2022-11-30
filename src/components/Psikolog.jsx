import React, { useEffect, useState } from 'react'
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import axios from 'axios';
import '../StyleSheet/Psikolog.css'
import loading from '../Asset/homePage/login.gif'
import { getProfil } from "../redux/action/profilAction";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function Psikolog() {

  // const [psikolog, setPsikolog] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {

  //     axios.get('https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/psikolog')
  //     .then(res => {
  //       setPsikolog(res.data)
  //       console.log(res.data)
  //       setIsLoading(false)
  //     })
  // }, [])

  // if (isLoading) return(
  //   <div className="d-flex align-items-center justify-content-center vh-100">
  //         <img className='img-fluid' src={loading} alt="" />
  //   </div>
  // )

  // {profil
  //       .filter((item) => item.id === id)
  //   .map((item) => {


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
          {/* {psikolog.map((item, index) => ( */}
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
                    <div className=" col-3 card-img-psikolog ng-danger">
                      <img className="img-fluid" src={item.avatar} alt="" />
                    </div>
                    <div className="col-6 card-title-piskolog d-flex flex-column">
                      <div className="psikolog-name">
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
                            className="btn btn-primary m-auto">
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