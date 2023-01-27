import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1"></div>
      <footer className="text-white bg-theme p-6">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p>Copyright © Justin Ventura {new Date().getFullYear()}</p>
            <p>Created from scratch with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
