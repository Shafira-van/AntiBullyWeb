import React, { useEffect } from "react";
import "../StyleSheet/Profil.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfil } from "../redux/action/profilAction";

function EditProfil({
  id,
  img,
  nama,
  email,
  no,
  tempatkerja,
  alamat,
  gender,
  status,
}) {

  
  const dispatch = useDispatch();

  const [editAvatar, setEditAvatar] = useState(img);
  const [editNama, setEditNama] = useState(nama);
  const [editEmail, setEditEmail] = useState(email);
  const [editNo, setEditNo] = useState(no);
  const [editTempatkerja, setEditTempatkerja] = useState(tempatkerja);
  const [editAlamat, setEditAlamat] = useState(alamat);
  const [editGender, setEditGender] = useState(gender);
  // const [editStatus, setEditStatus] = useState(status);

  const handleSubmit = (e) => {
    
    e.preventDefault();

    dispatch(
      updateProfil(
        id,
        editAvatar,
        editNama,
        editEmail,
        editNo,
        editTempatkerja,
        editAlamat,
        editGender
      )
    );
    
    setEditAvatar("");
    setEditNama("");
    setEditEmail("");
    setEditNo("");
    setEditTempatkerja("");
    setEditAlamat("");
    setEditGender("");
    // setEditStatus("");

    // console.log(img)

  };

  return (
    <div className="editprofil">
      <form onSubmit={handleSubmit}>
        <h1>Edit Profil</h1>
        <div className="isieditProfil" key={id}>
          <div className="editing">
            <img src={editAvatar} className="img-thumbnail" alt="..." />
            <input
              type="file"
              className="form-control"
              accept=".jpg"
              onChange={(e) =>
                setEditAvatar(URL.createObjectURL(e.target.files[0]))
              }
            />
          </div>

          <div className="textProfil">
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="Name"
                value={editNama}
                onChange={(e) => setEditNama(e.target.value)}
              />
              <label htmlFor="floatingInputValue">Nama</label>
            </div>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="floatingInputValue"
                placeholder="name@example.com"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
              />
              <label htmlFor="floatingInputValue">Email</label>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="No Handphone"
                value={editNo}
                onChange={(e) => setEditNo(e.target.value)}
              />
              <label htmlFor="floatingInputValue">No Handphone</label>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="Tempat Bekerja"
                value={editTempatkerja}
                onChange={(e) => setEditTempatkerja(e.target.value)}
              />
              <label htmlFor="floatingInputValue">Tempat Bekerja</label>
            </div>
            <div className="form-floating ">
              <input
                type="text"
                className="form-control"
                id="floatingInputValue"
                placeholder="Alamat"
                value={editAlamat}
                onChange={(e) => setEditAlamat(e.target.value)}
              />
              <label htmlFor="floatingInputValue">Alamat</label>
            </div>

            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                onChange={(e) => setEditGender(e.target.value)}>
                <option>Jenis Kelamin</option>
                <option value="Perempuan">Perempuan</option>
                <option value="Laki-Laki">Laki-Laki</option>
              </select>
              <label htmlFor="floatingSelect">{editGender}</label>
            </div>
          </div>
        </div>
        <div className="editprofiluser">
          <button>Simpan</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfil;
