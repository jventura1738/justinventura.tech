// React:
import React from "react";

// The logo:

function Header() {
  return (
    <div className="text-white">
      <div className="flex bg-theme">
        <div>
          <img
            className="h-40 .max-w-full .h-auto"
            src={require("../assets/logo.png")}
          />
        </div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default Header;
