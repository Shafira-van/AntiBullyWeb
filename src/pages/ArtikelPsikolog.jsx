import Artikel from '../components/Artikel'
import React, { useState } from "react";

import AddArtikel from '../components/AddArtikel';
import { Link } from 'react-router-dom';


function ArtikelPsikolog() {
  

  return (
    <div className="kontenKomponen">
      <Link to={`addartikel`}>
        <button className="btnAddArtikel">Add Artikel+</button>
      </Link>
      <Artikel />
    </div>
  );
}

export default ArtikelPsikolog