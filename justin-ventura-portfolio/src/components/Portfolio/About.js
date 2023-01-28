import React from "react";

import Typer from "../Typewriter";

const About = () => {
  return (
    <div className="h-screen text-white">
      <div className="grid grid-cols-2 md:grid-cols-1">
        <div>
          <lottie-player
            src="https://assets4.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="grid grid-cols-1">
          <div className="col-span-1 text-center mx-6 mb-6">
            <h1 className="text-6xl m-6">Welcome to my Portfolio.</h1>
            <p className="text-2xl">
              <Typer />
            </p>
          </div>
          <div className="col-span-1 grid grid-cols-2 mx-6">
            <div className="col-span-2 text-center"></div>
            <div className="col-span-1">
              <div className="grid grid-rows-2 mx-4">
                <p className="text-center lg:hidden">
                  Justin's Skills/Experience.
                </p>
                <button class="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  View Skills
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-rows-2 mx-4">
                <p className="text-center lg:hidden">
                  Justin's Music/Playlists.
                </p>
                <button class="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  Browse Music
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-rows-2 mx-4">
                <p className="text-center lg:hidden">
                  Justin's Teaching/School Resources.
                </p>
                <button class="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  Study Resources
                </button>
              </div>
            </div>
            <div className="col-span-1">
              <div className="grid grid-rows-2 mx-4">
                <p className="text-center lg:hidden">
                  Justin's COC Clan: KinetiKZ.
                </p>
                <button class="bg-purple-500 hover:bg-purple-700 duration-300 text-white font-bold py-2 px-4 rounded-full">
                  Join KinetiKZ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
