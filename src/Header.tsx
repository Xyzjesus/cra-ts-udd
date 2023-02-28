import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Header.css";
import { NavLink } from "react-router-dom";
import udd_logo from "./assets/udd_logo.png";

export default function Header() {
  return (
    <header className="header fixed">
      
        <NavLink to="/" className="home">
          <div className="logo">
          <img src={udd_logo} alt="udd_logo" width="207" height="77"></img>
          </div>
        </NavLink>
        <nav className="nav">
          <ul>
          <NavLink to="/faq" className="link">
            FAQ
          </NavLink>
          <NavLink to="/whitepaper" className="link">
            WHITEPAPER
          </NavLink>
          <NavLink to="/closethedoor" className="link">
            CLOSE THE DOOR
          </NavLink>
          <NavLink to="/leaderboard" className="link">
            LEADERBOARD
          </NavLink>
          </ul>
        </nav>
      <div className="connectWallet">
        <ConnectWallet className="connectButton" />
      </div>
    </header>
  );
}
