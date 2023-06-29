import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeMachine } from "./ChangeMachine";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/changemachine" element={<ChangeMachine />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
