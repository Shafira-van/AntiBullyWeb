import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeUser from "../pages/HomeUser";
import ArtikelUser from "../pages/ArtikelUser";
import DetailArtikel from "../components/DetailArtikel";
import Diskusi from "../components/Diskusi";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import ProfilUser from "../pages/ProfilUser";
import EditProfilUser from "../pages/EditProfilUser";
import Psikolog from "../components/Psikolog";
import Profil from "../pages/Profil";
import Artikel from "../pages/Artikel";

function User() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/artikel" element={<Artikel />}>
          <Route index element={<ArtikelUser />} />
          <Route path="detailartikel/:id/:judul" element={<DetailArtikel />} />
        </Route>
        {/* <Route path="/komunitas" element={} /> */}
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="profil" element={<Profil />}>
          <Route index element={<ProfilUser />} />
          <Route path="editprofil/:id/:nama" element={<EditProfilUser />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default User;