import React from "react";
import EditProfil from "../components/EditProfil";

function EditProfilPsikolog() {
  return (
    <div className="kontenKomponen">
      <EditProfil />
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
                <input type="text" value="hai" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
            <tr>
              <th scope="row" className="table-primary">
                Tutup
              </th>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
              <td>
                <input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
        <button>Simpan</button>
      </div>
    </div>
  );
}

export default EditProfilPsikolog;
