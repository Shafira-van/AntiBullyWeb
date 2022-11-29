import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUser from "../pages/HomeUser";
import HomePsikolog from "../pages/HomePsikolog";
import DetailArtikel from "../components/DetailArtikel";
import Diskusi from "../components/Diskusi";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ArtikelPsikolog from "../pages/ArtikelPsikolog";
import ProfilPsikolog from "../pages/ProfilPsikolog";
import EditProfilPsikolog from "../pages/EditProfilPsikolog";
import Psikolog from "../components/Psikolog";
import Profil from "../pages/Profil";
import Artikel from "../pages/Artikel";
import Login from "../components/Login";
import EditJadwalPraktek from "../components/EditJadwalPraktek";
import EditJadwalPsikolog from "../pages/EditJadwalPsikolog";
import NavbarPsikolog from "../pages/NavbarPsikolog";
import Komunitas from '../pages/Komunitas';
import DetailKomunitas from '../pages/DetailKomunitas';

function PsikologAlur() {
  return (
    <div>
      <NavbarPsikolog />
      <Routes>
      <Route path="/komunitas" element={<Komunitas />} />
      <Route path="/DetailKomunitas/:id" element={<DetailKomunitas />} />
        {/* <Route path="/userlogin" element={<Login />} /> */}
        <Route path="/" element={<HomePsikolog />} />
        <Route path="/artikel" element={<Artikel />}>
          <Route index element={<ArtikelPsikolog />} />
          <Route path="detailartikel/:id/:judul" element={<DetailArtikel />} />
        </Route>
        {/* <Route path="/komunitas" element={} /> */}
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/profil" element={<Profil />}>
          <Route index element={<ProfilPsikolog />} />
          <Route path="editprofil/:id/:nama" element={<EditProfilPsikolog />} />
          <Route path="editJadwal/:id/:nama" element={<EditJadwalPsikolog />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default PsikologAlur;
