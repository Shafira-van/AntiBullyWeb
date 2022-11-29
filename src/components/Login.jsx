import { getProfil, getProfilId } from "../redux/action/profilAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PsikologAlur from "../Alur/PsikologAlur";
import User from "../Alur/User";
import { Link } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const { profil } = useSelector((state) => state.profil);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    dispatch(getProfil());
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    {
      profil
        .filter(
          (item) =>
            item.nama === username &&
            item.password === password &&
            item.status === "user"
        )
        .map((item) => {
          return (
            !setLogin(true),
            alert("berhasil login user"),
            dispatch(getProfilId(item.id)),
            (window.location = `/user/${item.id}`)
          );
        });
    }

    {
      profil
        .filter(
          (item) =>
            item.nama === username &&
            item.password === password &&
            item.status === "psikolog"
        )
        .map((item) => {
          return (
            !setLogin(true),
            alert("berhasil login psikolog"),
            dispatch(getProfilId(item.id)),
            (window.location = `/admin/${item.id}`)
          );
        });
    }
    

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {/* <User/> */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
            Username
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="staticEmail"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
        <button type="submit" className="btn btn-primary mb-3">
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
