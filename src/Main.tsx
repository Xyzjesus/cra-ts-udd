import React, { useState, useEffect, useCallback } from "react";
import "./styles/Main.css";
import dialog1 from "./assets/dialog1.svg";
import dialog2 from "./assets/dialog2.svg";
import dialog3 from "./assets/dialog3.svg";
import scrollpic from "./assets/scroll_pic.png"

export default function Main() {

  function onEntry(entry: IntersectionObserverEntry[]) {
    entry.forEach((change: IntersectionObserverEntry) => {
      if (change.isIntersecting) {
        change.target.classList.add('show');
      }
    });
  }
  
  let options = { threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.hided_nav');
  for (let elm of Array.from(elements)) {
    elm.classList.add('show');
    observer.observe(elm);
  }

  return (
    <>
    <div className="maindialog">
      <div className="display_1">
        <div className="part1 section_1 hided_nav">
          <img src={dialog1} alt="dialog1"></img>
          <p className="dialog1 text">HEY USELESS! IF U HAVE USELESS KEY ALREADY, JUST GO TO 'CLOSE THE DOOR' PAGE!</p>
        </div>
        <div className="part2 section_1 hided_nav">
          <img src={dialog2} alt="dialog2"></img>
          <p className="dialog1 text">IF U DIDN'T GET IT, SCROLL DOWN...</p>
        </div>
      </div>
      <div className="display_2">
        <div className="part3 section_2 hided_nav">
          <img src={dialog3} alt="dialog3"></img>
          <p className="dialog1 text">I AM NEWBIE! WTF IS GOING ON?</p>
        </div>
        <div className="part4 section_2 hided_nav">
          <img src={dialog2} alt="dialog4"></img>
          <p className="dialog1 text">HERE U CAN MINT OUR USELESS KEY...</p>
        </div>
      </div>
      <div className="display_3">
        <div className="part3 section_3 hided_nav">
          <img src={dialog3} alt="dialog3"></img>
          <p className="dialog1 text">WHAT'S THE USELESS KEY?</p>
        </div>
        <div className="part4 section_3 hided_nav">
          <img src={dialog2} alt="dialog4"></img>
          <p className="dialog1 text">THIS IS OUR WELCOME NFT CREATED FOR A MINI GAME...</p>
        </div>
      </div>
      <div className="display_4">
        <div className="part3 section_4 hided_nav">
          <img src={dialog3} alt="dialog3"></img>
          <p className="dialog1 text">WHAT'S THE GAME?</p>
        </div>
        <div className="part4 section_4 hided_nav">
          <img src={dialog2} alt="dialog4"></img>
          <p className="dialog1 text">IT'S INTERACRIVE, WHERE U NEED GET POINT BY CLOSING THE DOOR...</p>
        </div>
      </div>
      <div className="display_5">
        <div className="part3 section_5 hided_nav">
          <img src={dialog3} alt="dialog3"></img>
          <p className="dialog1 text">WHAT'S REASON?</p>
        </div>
        <div className="part4 section_5 hided_nav">
          <img src={dialog2} alt="dialog4"></img>
          <p className="dialog1 text">MORE POINTS - MORE CHANCES TO GAIN WL FOR MAIN COLLECTION...</p>
        </div>
      </div>
    </div>
    
    <div className="scrollpic">
        <img src={scrollpic} alt="scroll_pic" width="53px" height="130px"></img>
    </div>
    </>
  );
}
