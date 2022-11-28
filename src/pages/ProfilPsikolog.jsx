import React from "react";
import { Outlet } from "react-router-dom";
import Profil from "../components/Profil";

function ProfilPsikolog() {
  return (
    <div>
      <Profil />
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
              <td>1pm</td>
              <td>2pm</td>
              <td>3pm</td>
              <td>4pm</td>
              <td>5pm</td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Tutup
              </th>
              <td>6am</td>
              <td>7am</td>
              <td>8am</td>
              <td>9am</td>
              <td>10am</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProfilPsikolog;
