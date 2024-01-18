import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<div>Contact</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
