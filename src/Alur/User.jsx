import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUser from "../pages/HomeUser";
import ArtikelUser from "../pages/ArtikelUser";
import DetailArtikel from "../components/DetailArtikel";
import Diskusi from "../components/Diskusi";
import Psikolog from "../pages/Psikolog";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ArtikelPsikolog from '../pages/ArtikelPsikolog';
import Artikel from '../components/Artikel';
// import ArtikelOutlet from '../pages/ArtikelOutlet';

function User() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/artikel" element={<ArtikelUser/>}>
          {/* <Route index element={<ArtikelUser/>} /> */}
          <Route path="detailartikel/:id/:judul" element={<DetailArtikel />} />
        </Route>
        {/* <Route path="/komunitas" element={} /> */}
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default User