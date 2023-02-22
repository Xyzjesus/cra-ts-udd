import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Header.css";
import { NavLink } from "react-router-dom";
import udd_logo from "./assets/udd_logo.png";

export default function Header() {
  return (
    <header className="header">
      <div className="nav">
        <NavLink to="/" className="home">
          <img src={udd_logo} alt="udd_logo" className="logo"></img>
        </NavLink>
        <div className="menu">
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
        </div>
      </div>
      <div className="connect">
        <ConnectWallet className="connectwallet" />
      </div>
    </header>
  );
}
