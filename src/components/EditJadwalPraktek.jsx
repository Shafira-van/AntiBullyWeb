import React from "react";
import "../StyleSheet/Profil.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateJadwal } from "../redux/action/profilAction";

function EditJadwalPraktek({ id, senin, selasa, rabu, kamis, jumat }) {
  const dispatch = useDispatch();
  console.log(senin)
  const [editSeninBuka, setEditSeninBuka] = useState(senin.buka);
  const [editSelasaBuka, setEditSelasaBuka] = useState(selasa.buka);
  const [editRabuBuka, setEditRabuBuka] = useState(rabu.buka);
  const [editKamisBuka, setEditKamisBuka] = useState(kamis.buka);
  const [editJumatBuka, setEditJumatBuka] = useState(jumat.buka);
  const [editSeninTutup, setEditSeninTutup] = useState(senin.tutup);
  const [editSelasaTutup, setEditSelasaTutup] = useState(selasa.tutup);
  const [editRabuTutup, setEditRabuTutup] = useState(rabu.tutup);
  const [editKamisTutup, setEditKamisTutup] = useState(kamis.tutup);
  const [editJumatTutup, setEditJumatTutup] = useState(jumat.tutup);
  let [jadwalpraktek, setJadwalPraktek] = useState("");
  

      jadwalpraktek = {
        senin: {
          buka: editSeninBuka,
          tutup: editSeninTutup
        },
        selasa: {
          buka: editSelasaBuka,
          tutup: editSelasaTutup
        },
        rabu: {
          buka: editRabuBuka,
          tutup: editRabuTutup
        },
        kamis: {
          buka: editKamisBuka,
          tutup: editKamisTutup
        },
        jumat: {
          buka: editJumatBuka,
          tutup: editJumatTutup
        }
      }

  console.log(jadwalpraktek);

  const handleSubmit = (e) => {
    e.preventDefault();




    dispatch(
      updateJadwal(
        id,
        jadwalpraktek
      )
    );

    setEditSeninBuka("");
    setEditSelasaBuka("");
    setEditRabuBuka("");
    setEditKamisBuka("");
    setEditJumatBuka("");
    setEditSeninTutup("");
    setEditSelasaTutup("");
    setEditRabuTutup("");
    setEditKamisTutup("");
    setEditJumatTutup("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="editprofilpsikolog">
          <h2>Jadwal Konsultasi</h2>
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
                <td>
                  <input
                    type="text"
                    value={editSeninBuka}
                    onChange={(e) => setEditSeninBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editSelasaBuka}
                    onChange={(e) => setEditSelasaBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editRabuBuka}
                    onChange={(e) => setEditRabuBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editKamisBuka}
                    onChange={(e) => setEditKamisBuka(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editJumatBuka}
                    onChange={(e) => setEditJumatBuka(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th scope="row" className="table-primary">
                  Tutup
                </th>
                <td>
                  <input
                    type="text"
                    value={editSeninTutup}
                    onChange={(e) => setEditSeninTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editSelasaTutup}
                    onChange={(e) => setEditSelasaTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editRabuTutup}
                    onChange={(e) => setEditRabuTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editKamisTutup}
                    onChange={(e) => setEditKamisTutup(e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={editJumatTutup}
                    onChange={(e) => setEditJumatTutup(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button>Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default EditJadwalPraktek;
