import React from "react";

import justinImage from "../../assets/justin.jpg";

function Bio() {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1">
        <div className="col-span-1 text-center">
          <h1 className="text-6xl my-10">My Background.</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1">
          <div className="col-span-1 text-center">
            <img src={justinImage} className="rounded-full"></img>
          </div>
          <div className="flex col-span-2 justify-center items-center m-6">
            <p className="text-xl text-center">
              I am a recent
              <strong className="text-orange-600">
                {" "}
                computer science & mathematics{" "}
              </strong>
              double graduate with a passion for
              <strong className="text-purple-600">
                {" "}
                software engineering and machine learning.{" "}
              </strong>
              I have a strong understanding of multiple programming languages
              including:
              <strong className="text-orange-600">
                {" "}
                Python, C++, Java, and JavaScript.{" "}
              </strong>
              I am constantly learning new technologies; my projects range from
              web development to machine learning to discord bots.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
