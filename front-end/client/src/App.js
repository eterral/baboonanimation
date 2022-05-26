import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./screens/About/About.js";
import Clients from "./screens/Clients/Clients.js";
import Contact from "./screens/Contact/Contact.js";
import Diversity from "./screens/Diversity/Diversity.js";
import Home from "./screens/Home/Home.js";
import Voices from "./screens/Voices/Voices.js";
import Work from "./screens/Work/Work.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diversity" element={<Diversity />} />
        <Route path="/voices" element={<Voices />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
