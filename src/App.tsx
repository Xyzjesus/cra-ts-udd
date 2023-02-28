import Header from "./Header";
import Main from "./Main";
import Faq from "./Faq";
import Door from "./Door";
import Leaderboard from "./Leaderboard";
import Footer from "./Footer";
import "./styles/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bg_udd from "./assets/udd_bg.png";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <Router>
          <Header />
          <div className="image">
            <img src={bg_udd} alt="bg_image"></img>
          </div>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/closethedoor" element={<Door />}></Route>
            <Route path="/leaderboard" element={<Leaderboard />}></Route>
          </Routes>
          <Footer />
        </Router>
      </main>
    </div>
  );
}
