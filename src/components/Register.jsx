import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProfil } from "../redux/action/profilAction";
import pic from '../Asset/Login/picture.png'
import '../StyleSheet/Login.css'
import logo from  '../Asset/Navbar/LOGO.gif'
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
      buka: " - ",
      tutup: " - ",
    },
    selasa: {
      buka: " - ",
      tutup: " - ",
    },
    rabu: {
      buka: " - ",
      tutup: " - ",
    },
    kamis: {
      buka: " - ",
      tutup: " - ",
    },
    jumat: {
      buka: " - ",
      tutup: " - ",
    },
  };


  console.log(jadwalpraktek)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(status);

    if ((username, email, password, status === "psikolog")) {
      return (
        dispatch(addProfil(username, email, password, status, jadwalpraktek)),
        alert("Registrasi Anda Berhasil, silahkan login"),
        (window.location = "/login")
      );
    }

    else if ((username, email, password, status === "user")) {
      return (
        dispatch(addProfil(username, email, password, status)),
        alert("Registrasi Anda Berhasil, silahkan login"),
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

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <div className="mb-3 row">
  //         <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
  //           Username
  //         </label>
  //         <div className="col-sm-10">
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="staticUsername"
  //             value={username}
  //             onChange={(e) => setUsername(e.target.value)}
  //           />
  //         </div>
  //       </div>
  //       <div className="mb-3 row">
  //         <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
  //           Email
  //         </label>
  //         <div className="col-sm-10">
  //           <input
  //             type="text"
  //             className="form-control"
  //             id="staticEmail"
  //             value={email}
  //             onChange={(e) => setEmail(e.target.value)}
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
  //       <select
  //         className="form-select form-select-sm"
  //         aria-label=".form-select-sm example"
  //         onChange={(e) => setStatus(e.target.value)}>
  //         <option>Login as</option>
  //         <option value="user">User</option>
  //         <option value="psikolog">Psikolog</option>
  //       </select>
  //       <button type="submit" className="btn btn-primary mb-3">
  //         submit
  //       </button>
  //     </form>
  //   </div>
  // );

  // New Editan 
  return ( 
    <>
    <div className="row">
        <div className="form-register col-lg-7 col-md-7 vh-100">
            <div className="row d-flex align-items-center vh-100 ">
              <div className="logo text-center col-lg-7 col-md-9 col-10 mx-auto">
                <img className="mx-auto"  src={logo} alt="" />
              </div>
                <div className="kolom-register col-lg-7 col-md-9 col-10 mx-auto p-4">
                    <h3 className='text-center'>Register</h3>
                    <form onSubmit={handleSubmit}>
                        <div class="input-value mb-3">
                            <label for="InputEmail" class="form-label">Email:</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" />
                        </div>
                        <div class="input-value mb-3">
                            <label for="InputUsername" class="form-label">Username</label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" class="form-control" id="InputUsername" aria-describedby="emailHelp" />
                        </div>
                        <div class="input-value mb-3">
                            <label for="InputPassword" class="form-label">Password</label>
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="InputPassword" aria-describedby="emailHelp" />
                        </div>
                        <div class="input-value mb-3">
                            <label for="inputStatus" class="form-label">Status Pengguna</label>
                            <select value={status} onChange={(e) => setStatus(e.target.value)} class="form-select" aria-label="Default select example">
                                <option selected>Daftar Sebagai</option>
                                <option value="user">User</option>
                                <option value="psikolog">Psikolog</option>
                            </select>
                        </div>
                        <div className="button-input-value text-center">
                            <button class="btn btn-light">Daftar</button>                        
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

export default Register;
