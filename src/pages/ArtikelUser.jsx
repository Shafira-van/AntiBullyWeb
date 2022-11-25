import React from 'react'
import Artikel from '../components/Artikel'
import DetailArtikel from '../components/DetailArtikel'
import Navbar from '../components/Navbar'

function ArtikelUser() {
  return (
    <div>
      <Navbar/>
      <Artikel />
      <DetailArtikel />
      <Footer/>
    </div>
  )
}

export default ArtikelUser