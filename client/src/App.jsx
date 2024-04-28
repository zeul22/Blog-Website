import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About.jsx";
import FAQ from "./components/FAQ.jsx";
import LocomotiveScroll from "locomotive-scroll";
import Footer from "./components/Footer.jsx";
import Login from "./components/Login.jsx";
import InPage from "./components/InPage.jsx";
import Register from "./components/Register.jsx";

function App() {
  const [count, setCount] = useState(0);
  const locomotiveScroll = new LocomotiveScroll();
  const isloggedin = false;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {!isloggedin && <Route path="/" element={<InPage />} />}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
