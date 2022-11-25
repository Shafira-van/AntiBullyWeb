// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Psikolog from "./components/Psikolog";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Psikolog/>
      </header>
    </div>
  );
}

export default App;
