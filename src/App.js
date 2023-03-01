import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import { BrowserRouter } from "react-router-dom";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router';
import Home from "./Components/Home";
import Features from "./Components/Features";
import Pricing from "./Components/Pricing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/feature" element={<Features />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
