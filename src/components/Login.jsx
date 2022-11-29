import { getProfil, getProfilId } from "../redux/action/profilAction";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import pic from '../Asset/Login/picture.png'
import '../StyleSheet/Login.css'
import logo from  '../Asset/Navbar/LOGO.gif'
// import '../StyleSheet/Login.css'
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

  // return (
  //   <div>
  //     {/* <User/> */}
  //     <form onSubmit={handleSubmit}>
  //       <div className="mb-3 row">
  //         <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
  //           Username
  //         </label>
  //         <div className="col-sm-10">
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="staticEmail"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <div className="mb-3 row">
  //         <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
  //           Password
  //         </label>
  //         <div className="col-sm-10">
  //           <input
  //             type="password"
  //             className="form-control"
  //             id="inputPassword"
  //             value={password}
  //             onChange={(e) => setPassword(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <button type="submit" className="btn btn-primary mb-3">
  //         submit
  //       </button>
  //     </form>
  //   </div>
  // );

  return ( 
    <>
    <div className="row">
        <div className="form-register col-lg-7 col-md-7 vh-100">
            <div className="row d-flex align-items-center vh-100 ">
                <div className="kolom-register col-lg-7 col-md-9 col-10 mx-auto p-4">
                  <div className="logo text-center ">
                      <img className="mx-auto"  src={logo} alt="" />
                  </div>
                    <h3 className='text-center'>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="input-value mb-3">
                            <label for="InputUsername" class="form-label">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" id="InputUsername" aria-describedby="emailHelp" />
                        </div>
                        <div class="input-value mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="InputPassword" aria-describedby="emailHelp" />
                        </div>
                        <div className="button-input-value text-center">
                            <button class="btn btn-light">Masuk</button>                        
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="img-register col-5 d-none d-md-block">
            <img className="w-100 vh-100" src={pic} alt="" />
        </div>
    </div>
    </>
 );
   

}

export default Login;
