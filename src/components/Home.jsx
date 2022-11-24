import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="kontenKomponen" id="home">
      <img
        src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda.png"
        alt=""
      />
      <div className="header">
        <h1>Our Mission</h1>
        <h2>
          Your <b>Smile</b> Beautifies The <b>World</b>
        </h2>
        <p>
          Ayo hentikan budaya bully di Indonesia, mari kita bangkit bersama
          bangun Indonesia lebih maju.
        </p>
        <p>
          <i>
            “Beri aku 1000 orang tua, niscaya akan kucabut Sumeru dari akarnya.
            Beri aku 10 pemuda, akan kuguncangan dunia” - Ir.Soekarna
          </i>
        </p>
      </div>
      <div className="kontenHome">
        <div className="textKonten">
          <h3>
            <b>Butuh Teman Cerita?</b>
          </h3>
          <p>Lihat daftar psikolog yang tersedia dan hubungi melalui wa</p>
          <button>Psikolog</button>
        </div>
        <img
          src="https://raw.githubusercontent.com/Shafira-van/file/main/AntiBully/img/beranda2.png"
          alt=""
        />
      </div>
      <div class="container">
        <div class="row">
          <div class="col" id="col1">
            <h3>
              <b>Membutuhkan bantuan?</b>
            </h3>
            <p>Lihat daftar komunitas yang dapat membantu anda</p>
            <button>Komunitas</button>
          </div>
          <div class="col" id="col2">
            <h3>
              <b>Berbagi Pengalaman dengan user lain</b>
            </h3>
            <p>Ceritakan pengalamanmu atau masalahmu di forum diskusi</p>
            <button>Diskusi</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
