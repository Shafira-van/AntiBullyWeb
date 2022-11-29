import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../StyleSheet/Komunitas.css";
function Komunitas() {
  const navigation = useNavigate();
  const [user, setUser] = useState([]);
  const [provinsi, setProvinsi] = useState([]);
  const [dataProvinsi, setDataProvinsi] = useState([]);
  const [option, setOption] = useState([]);
  useEffect(() => {
    async function getUser() {
      try {
        const response = await axios.get(
          "https://6350d871dfe45bbd55afb4ff.mockapi.io/MuseumAsia/komunitas"
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, []);

  function filterUser() {
    // console.log(user)
    const x = user.filter(function (data) {
      if (dataProvinsi === "") {
        return data;
      } else {
        return data.provinsi === provinsi ? true : false;
      }
    });
    setDataProvinsi(x);
  }

  function filterOption() {
    user.map((item) => {
      const x = item.provinsi;
      setOption(x);
      // let uniqueProvinsi = x.filter((element, index) => {
      //   return x.indexOf(element) === index;
      // })
    });

    console.log("ini option", option);

    //     let chars = ['A', 'B', 'A', 'C', 'B'];

    // let uniqueChars = chars.filter((element, index) => {
    //     return chars.indexOf(element) === index;
    // });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    filterUser();
    filterOption();
    console.log("ini data provinsi", dataProvinsi);
  };

  // const handleDetail = (id) => {
  //   navigation(`/DetailKomunitas/${id}`)
  // }

  return (
    <div className="kontenKomponen">
      <div className="row">
        <div className="col-lg-4 col-md-4 sol-sm-12 col-12 ">
          <div className="list-kota p-3">
            <div className="row d-flex justify-content-center">
              <div className="col-10">
                <form action="" onSubmit={handleSubmit}>
                  <select
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                    class="form-select form-select-sm">
                    {/* <option selected className='bg-transparent'>Lihat Daftar Kota</option>
                                    {komunitas.map((item,index) => 
                                        <option key={index} value={item.provinsi}>{item.provinsi}</option>
                                    )} */}

                    <option value="">Pilih provinsi</option>
                    <option value="provinsi 1">Sumatera Utara</option>
                    <option value="provinsi 3">Sumatera Barat</option>
                  </select>
                  <div className="button-komunitas mt-3 text-center">
                    <button class="btn btn-primary">Cari</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12 col-12 mt-3">
          {dataProvinsi.map((item) => {
            return (
              <>
                <div className="komunitas mb-3">
                  <div key={item.id} className="card mx-auto mb-3">
                    <div className="row">
                      <div className="profil-komunitas col-3 text-center">
                        <img
                          className="img-fluid p-2"
                          src={item.picture}
                          alt=""
                        />
                        <h6 className="p-2">{item.provinsi}</h6>
                      </div>
                      <div className="deskripsi-komunitas col-6 d-flex flex-column">
                        <h6>{item.nama}</h6>
                        <h5>{item.selogan}</h5>
                        <div className="alamat-komunitas mt-auto">
                          <h5>{item.alamat}</h5>
                        </div>
                      </div>
                      <div className="col-3 d-flex align-items-center justify-content-center">
                        <Link
                          to={`detailkomunitas/${item.id}`}
                          className="nav-link">
                          <button className="btn btn-primary">Lihat</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Komunitas;
