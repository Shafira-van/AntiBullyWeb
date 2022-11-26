import React from "react";
import "../StyleSheet/Profil.css";

function EditProfil() {
  return (
    <div className="editprofil">
      <h1>Edit Profil</h1>
      <div className="isieditProfil">
        <img
          src="https://assets.kompasiana.com/items/album/2021/03/24/blank-profile-picture-973460-1280-605aadc08ede4874e1153a12.png?t=o&v=770"
          className="img-thumbnail"
          alt="..."></img>

        <div className="textProfil">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder="Name"
              value="user"
            />
            <label htmlFor="floatingInputValue">Nama</label>
          </div>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputValue"
              placeholder="name@example.com"
              value="user@gmail.com"
            />
            <label htmlFor="floatingInputValue">Email</label>
          </div>
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder="No Handphone"
              // value="user@gmail.com"
            />
            <label htmlFor="floatingInputValue">No Handphone</label>
          </div>
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder="Tempat Bekerja"
              // value="user@gmail.com"
            />
            <label htmlFor="floatingInputValue">Tempat Bekerja</label>
          </div>
          <div className="form-floating ">
            <input
              type="text"
              className="form-control"
              id="floatingInputValue"
              placeholder="Alamat"
              // value="user@gmail.com"
            />
            <label htmlFor="floatingInputValue">Alamat</label>
          </div>
          <div className="form-floating">
            <select
              className="form-select"
              id="floatingSelect"
              aria-label="Floating label select example">
              <option selected>Jenis Kelamin</option>
              <option value="perempuan">Perempuan</option>
              <option value="laki-laki">Laki-laki</option>
            </select>
            <label htmlFor="floatingSelect">Perempuan</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfil;
