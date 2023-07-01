import { Header } from "./Header";
import { Home } from "./Home";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import { ChangeMachine } from "./ChangeMachine";
import "./App.css";
import "/public/fonts/Calinastiya.ttf";
import { Landing } from "./Landing";
import { Contact } from "./Contact";
import { Login } from "./Login";

function App() {
  return (
    <div className="home">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route>
            <Route element={<Navigate to="/" replace />} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/changemachine" element={<ChangeMachine />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
