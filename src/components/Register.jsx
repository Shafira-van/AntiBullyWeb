import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfil } from "../redux/action/profilAction";
import Login from "./Login";

function Register() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  let [jadwalpraktek, setJadwalpraktek] = useState("");

  jadwalpraktek = {
    senin: {
      buka: "",
      tutup: "",
    },
    selasa: {
      buka: "",
      tutup: "",
    },
    rabu: {
      buka: "",
      tutup: "",
    },
    kamis: {
      buka: "",
      tutup: "",
    },
    jumat: {
      buka: "",
      tutup: "",
    },
  };


  console.log(jadwalpraktek)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status);

    if ((username, email, password, status === "psikolog")) {
      return (
        dispatch(addProfil(username, email, password, status, jadwalpraktek)),
        alert("berhasil daftar login"),
        (window.location = "/login")
      );
    }

    else if ((username, email, password, status === "user")) {
      return (
        dispatch(addProfil(username, email, password, status)),
        alert("berhasil daftar user"),
        (window.location = "/login")
      );
    }

    else {
      return alert("lengkapi data anda")
    }
      
    
    // dispatch(addProfil(username, email, password, status));
    setUsername("");
    setEmail("");
    setPassword("");
    setStatus("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <select
          className="form-select form-select-sm"
          aria-label=".form-select-sm example"
          onChange={(e) => setStatus(e.target.value)}>
          <option>Login as</option>
          <option value="user">User</option>
          <option value="psikolog">Psikolog</option>
        </select>
        <button type="submit" className="btn btn-primary mb-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default Register;
