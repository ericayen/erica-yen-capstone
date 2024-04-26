import React from "react";
import { useLocation } from "react-router-dom";
const logo = require("../../assets/Logo/logo.png");

function Header() {
  const location = useLocation();
  return (
    <div className="w-dvw bg-white py-4 font-ms selection:bg-brown-light selection:text-white">
      <nav className="leading-loose flex justify-center items-center space-x-1 overflow-scroll sm:space-x-2 lg:space-x-4">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Beans", "/beans"],
          ["Drinks", "/drinks"],
          ["Quiz", "/quiz"],
        ].map(([title, url]) => (
          <>
            <a
              href={url}
              className={`leading-loose rounded-full px-3 py-2 text-xs md:text-sm lg:text-base hover:bg-beige-light ${
                location.pathname === url
                  ? "text-brown-dark font-medium"
                  : "text-brown"
              } ${
                location.pathname === url && url === "/"
                  ? "underline underline-offset-8"
                  : ""
              }`}
            >
              <img
                src={logo}
                className={`${
                  location.pathname === url && location.pathname !== "/"
                    ? "inline w-4 animate-bounce mx-0.5 sm:w-6 lg:w-8"
                    : "hidden"
                }`}
              />
              {title}
            </a>
          </>
        ))}
      </nav>
    </div>
  );
}

export default Header;
