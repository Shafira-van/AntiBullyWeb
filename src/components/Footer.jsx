import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 mt-3" id="col1">
            <div className="logoFooter">
              <img
                src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/LOGO.png"
                alt=""
              />
              <h1>Anti Bully</h1>
            </div>
            <div className="textFooter mt-3">
              <h2>Hentikan Budaya Bully Sekarang !!</h2>
              <h2>
                Jalan Murai, Air Tawar Barat, Padang, Sumatera Barat, Indonesia
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-6 mt-4" id="col2">
            <h1>Usefull Link</h1>
            <div className="fiturFooter p-3">
              <ul>
                <li>Home</li>
                <li>Article</li>
                <li>Psikolog</li>
              </ul>
              <ul>
                <li>Komunitas</li>
                <li>Forum</li>
                <li>Account</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-6 mt-4" id="col3">
            <h1>Find Us at</h1>
            <ul className="mt-2">
              <li className="mt-2">
                <img
                  src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/ig%20putih.png"
                  alt=""
                />
                <h2>@antibully_</h2>
              </li>
              <li  className="mt-3">
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/twitter%20putih.png"
                  alt=""
                />
                <h2>antibullyID</h2>
              </li>
              <li  className="mt-3">
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/fb%20putih.png"
                  alt=""
                />
                <h2>anti-bully</h2>
              </li>
              <li  className="mt-3">
                <img
                  src="https://github.com/Shafira-van/file/raw/main/AntiBully/img/telp%20putih.png"
                  alt=""
                />
                <h2>(021) 3456789</h2>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
