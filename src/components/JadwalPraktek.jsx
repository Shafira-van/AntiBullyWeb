import React, { useEffect } from "react";
import "../StyleSheet/Profil.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../redux/action/profilAction";

function JadwalPraktek({ id,nama, senin, selasa, rabu, kamis, jumat }) {
  console.log(senin);
  const [editJadwal, setEditJadwal] = useState(false);
  return (
    <div>
      <div className="profilpsikolog">
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
              <td>{senin.buka}</td>
              <td>{selasa.buka}</td>
              <td>{rabu.buka}</td>
              <td>{kamis.buka}</td>
              <td>{jumat.buka}</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Tutup
              </th>
              <td>{senin.tutup}</td>
              <td>{selasa.tutup}</td>
              <td>{rabu.tutup}</td>
              <td>{kamis.tutup}</td>
              <td>{jumat.tutup}</td>
            </tr>
          </tbody>
        </table>
        {!editJadwal && (
          <div id="jadwal">
            <Link
              to={`editjadwal/${id}/${nama}`}
              onClick={() => setEditJadwal(true)}>
              <button>Edit Jadwal</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default JadwalPraktek;
