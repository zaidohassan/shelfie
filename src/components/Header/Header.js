import React from "react";
import "./Header.css";

function Header() {
  return (
    <div>
      <nav>
        <div className="wrap">
          <div className="brand">
            <div className="circle" /> SHELFIE{" "}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
