import React, { useState, useEffect, useCallback } from "react";
import "./styles/Main.css";
import dialog1 from "./assets/dialog1.svg";
import dialog2 from "./assets/dialog2.svg";

export default function Main() {
  const [imgSrc, setImgSrc] = useState(dialog1);
  const [text, setText] = useState(
    "HEY USELESS! IF U HAVE USELESS KEY ALREADY, JUST GO TO 'CLOSE THE DOOR' PAGE!"
  );

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 200) {
      setImgSrc(dialog2);
      setText("This is the updated text");
    } else {
      setImgSrc(dialog1);
      setText(
        "HEY USELESS! IF U HAVE USELESS KEY ALREADY, JUST GO TO 'CLOSE THE DOOR' PAGE!"
      );
    }
  }, [setImgSrc, setText]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="maindialog">
      <div className="nav">
        <img src={imgSrc} alt="dialog1" className="dialog1-img"></img>
        <p className="dialog1-text">{text}</p>
      </div>
    </div>
  );
}
