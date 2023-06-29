import { Header } from "./Header";
import { Home } from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeMachine } from "./ChangeMachine";
import "./App.css";
import "/public/fonts/Calinastiya.ttf";
import { Landing } from "./Landing";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/changemachine" element={<ChangeMachine />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
