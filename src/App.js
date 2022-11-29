import PsikologAlur from './Alur/PsikologAlur';
import User from './Alur/User';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeLogin from './pages/HomeLogin';
import Psikolog from './components/Psikolog';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Register /> */}
        {/* <Login /> */}
       
        <Routes>
        <Route path="/" element={<HomeLogin />  } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/:id/*" element={<User />} />
          <Route path="/admin/:id/*" element={<PsikologAlur />  } />
      </Routes>
        {/* <PsikologAlur/> */}
        {/* <User /> */}
      </header>
    </div>
  );
}

export default App;
