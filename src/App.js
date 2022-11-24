// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Navbar from './components/Navbar';
import Artikel from "./components/Artikel";
import Home from './components/Home';
import ArtikelUser from "./pages/ArtikelUser";
import HomeUser from './pages/HomeUser'
import ArtikelPsikologi from "./pages/ArtikelPsikolog";
import Diskusi from "./components/Diskusi";
import Psikolog from "./components/Psikolog";
import Faq from "./components/Faq";
import DetailArtikel from "./components/DetailArtikel";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeUser />} />
        <Route path="/artikel" element={<ArtikelUser />} /> 
        <Route path="/detailartikel/:judul" element={<DetailArtikel />} />
        {/* <Route path="/komunitas" element={} /> */}
        <Route path="/diskusi" element={<Diskusi />} />
        <Route path="/psikolog" element={<Psikolog />} />
        <Route path="/faq" element={<Faq/> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
