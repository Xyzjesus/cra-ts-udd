import Header from "./Header";
import Main from "./Main";
import Faq from "./Faq";
import Door from "./Door";
import Leaderboard from "./Leaderboard";
import Footer from "./Footer";
import "./styles/Home.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <main className="main">
        <Router>
          <Header />
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
