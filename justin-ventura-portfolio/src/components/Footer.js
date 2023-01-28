import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1"></div>
      <footer className="text-white bg-theme/50 p-6 shadow-2xl shadow-purple-700 top-0">
        <div className="container mx-auto">
          <div className="flex justify-between text-center items-center">
            <p>Copyright © Justin Ventura {new Date().getFullYear()}</p>
            <p>Created from scratch via React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
