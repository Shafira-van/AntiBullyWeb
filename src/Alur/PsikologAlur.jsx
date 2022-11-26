import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUser from "../pages/HomeUser";
import DetailArtikel from "../components/DetailArtikel";
import Diskusi from "../components/Diskusi";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ArtikelPsikolog from "../pages/ArtikelPsikolog";
import ProfilPsikolog from "../pages/ProfilPsikolog";
import EditProfilPsikolog from "../pages/EditProfilPsikolog";
import Psikolog from '../components/Psikolog';
import Profil from '../pages/Profil';
import Artikel from '../pages/Artikel';

function PsikologAlur() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/artikel" element={<Artikel />}>
          <Route index element={<ArtikelPsikolog />} />
          <Route path="detailartikel/:id/:judul" element={<DetailArtikel />} />
        </Route>
        {/* <Route path="/komunitas" element={} /> */}
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="profil" element={<Profil  />}>
          <Route index element={<ProfilPsikolog/>} />
          <Route path="editprofil/:id/:nama" element={<EditProfilPsikolog />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default PsikologAlur