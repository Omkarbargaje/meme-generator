import React from "react";
import "./Style.css";

export default function Header() {
  return (
    <header>
      <img
        src="./assets/images/Troll Face.png"
        alt="Veactor.png"
        className="header--image"
      />
      <span className="header--title">Meme Generator</span>
      <span className="header--project">Created By: Omkar Bargaje</span>
    </header>
  );
}
