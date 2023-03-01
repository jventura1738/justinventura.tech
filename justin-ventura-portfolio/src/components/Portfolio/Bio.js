import React from "react";

import justinImage from "../../assets/justin.jpg";
import amazonTransparent from "../../assets/orgLogos/amazonTransparent.png";
import cmuTransparent from "../../assets/orgLogos/cmuTransparent.png";
import googleTransparent from "../../assets/orgLogos/googleTransparent.png";
import metaTransparent from "../../assets/orgLogos/metaTransparent.png";
import umdTransparent from "../../assets/orgLogos/umdTransparent.png";

function Bio({ emphasis }) {
  return (
    <div className="text-white">
      <div className="grid grid-cols-1">
        <div className="col-span-1 text-center">
          <h1 className="text-6xl my-10">My Background.</h1>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-1">
          <div className="col-span-1 text-center">
            <img
              src={justinImage}
              alt="Justin Profile"
              className="rounded-full"
            ></img>
          </div>
          <div className="flex col-span-2 justify-center items-center m-6">
            <span className="text-xl text-center">
              I am a recent
              <strong className={`${emphasis}`}>
                {" "}
                computer science & mathematics{" "}
              </strong>
              double graduate with a passion for
              <strong className={`${emphasis}`}>
                {" "}
                software engineering and machine learning.{" "}
              </strong>
              I have a strong understanding of multiple programming languages
              including industry experience with:
              <strong className={`${emphasis}`}>
                {" "}
                Python, C++, Java, and JavaScript.{" "}
              </strong>
              I am constantly learning new technologies; my projects range from
              full stack to machine learning and discord bots. I've worked with
              and received intern offers from various organizations:
              <div className="grid grid-cols-5 mt-10">
                <img
                  src={amazonTransparent}
                  className="col-span-1 h-24 w-32 my-3 justify-center object-contain"
                  alt="logo"
                />
                <img
                  src={cmuTransparent}
                  className="col-span-1 h-24 w-24 ml-4 my-3 justify-center object-contain"
                  alt="logo"
                />
                <img
                  src={googleTransparent}
                  className="col-span-1 h-24 w-24 my-3 justify-center object-contain"
                  alt="logo"
                />
                <img
                  src={metaTransparent}
                  className="col-span-1 h-24 w-24 mr-4 my-3 justify-center object-contain"
                  alt="logo"
                />
                <img
                  src={umdTransparent}
                  className="bg-white rounded-full col-span-1 h-24 w-24 ml-4 my-3 justify-center object-contain"
                  alt="logo"
                />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
