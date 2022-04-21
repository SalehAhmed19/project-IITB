import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Academic from "./Pages/Academic/Academic";
import Admission from "./Pages/Admission/Admission";
import Contact from "./Pages/Contact/Contact";
import DiplomaInEng from "./Pages/DimplomaInEng/DiplomaInEng";
import DiplomaInTex from "./Pages/DiplomaInTex/DiplomaInTex";
import Gallery from "./Pages/Gallery/Gallery";
import Home from "./Pages/Home/Home/Home";
import Teachers from "./Pages/Teachers/Teachers";
import Technology from "./Pages/Technology/Technology";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/technology" element={<Technology />}></Route>
        <Route
          path="/diploma-in-engineering"
          element={<DiplomaInEng />}
        ></Route>
        <Route path="/diploma-in-textile" element={<DiplomaInTex />}></Route>
        <Route path="/teachers" element={<Teachers />}></Route>
        <Route path="/academic" element={<Academic />}></Route>
        <Route path="/admission" element={<Admission />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
