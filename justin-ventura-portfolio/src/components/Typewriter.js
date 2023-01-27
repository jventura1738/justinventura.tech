import React from "react";
import Typewriter from "typewriter-effect";

function Typer() {
  const titles = [
    "Software Engineer",
    "Machine Learning Engineer",
    "Lover of Learning",
    "Teacher and Tutor",
    "Music Producer",
    "Clash of Clans Leader",
  ];
  return (
    <Typewriter
      options={{
        strings: titles,
        autoStart: true,
        loop: true,
        deleteSpeed: 69,
      }}
    />
  );
}

export default Typer;
