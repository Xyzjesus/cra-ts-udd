import React, { useState, useEffect, useCallback } from "react";
import "./styles/Main.css";
import dialog1 from "./assets/dialog1.svg";
import dialog2 from "./assets/dialog2.svg";

export default function Main() {
  return (
    <div className="maindialog">
      <div className="nav2">
        <img src={dialog1} alt="dialog1" className="dialog1-img"></img>
        <p className="dialog1_text">HEY USELESS! IF U HAVE USELESS KEY ALREADY, JUST GO TO 'CLOSE THE DOOR' PAGE!</p>
      </div>
      <div className="nav3">
        <img src={dialog2} alt="dialog1" className="dialog2-img"></img>
        <p className="dialog1_text">HEY USELESS! IF U HAVE USELESS KEY ALREADY, JUST GO TO 'CLOSE THE DOOR' PAGE!</p>
      </div>
    </div>
  );
}
