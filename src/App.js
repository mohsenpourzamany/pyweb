import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./container/navbar/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Services from "./pages/Services";
import Pyweb from "./pages/Pyweb";
import Footer from "./container/footer/Footer";
import Smootup from "./container/smootup.js/Smootup";
import Sign from "./pages/Sign";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pyweb" element={<Pyweb />} />
          <Route path="/signin" element={<Sign />} />
        </Routes>
        <Smootup />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
