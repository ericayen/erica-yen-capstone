import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
const logo = require("../assets/Logo/logo.png");

function Header() {
  const location = useLocation();

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [navbarStyle, setNavbarStyle] = useState({ top: "0" });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setNavbarStyle({ top: "-60px", transition: "0.3s" });
      } else {
        setNavbarStyle({ top: "0", transition: "0.2s" });
      }
      setLastScrollTop(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div
      id="navbar"
      style={navbarStyle}
      className="sticky top-0 z-50 py-4 bg-white w-dvw font-ms selection:bg-brown-light selection:text-white"
    >
      <nav className="flex items-center justify-center space-x-1 leading-loose sm:space-x-2 lg:space-x-4">
        {[
          ["Home", "/"],
          ["About", "/about"],
          ["Beans", "/beans"],
          ["Quiz", "/quiz"],
          ["Forum", "/comments"],
        ].map(([title, url], index) => {
          return (
            <div key={index}>
              <a
                href={url}
                className={`leading-loose rounded-full p-3 font-medium text-xs md:text-sm lg:text-base hover:bg-beige-light ${
                  location.pathname === url ||
                  (url !== "/" && location.pathname.includes(url))
                    ? "text-brown-dark"
                    : "text-brown"
                } ${
                  location.pathname === url && url === "/"
                    ? "underline underline-offset-8"
                    : ""
                }`}
              >
                {url !== "/" && (
                  <img
                    src={logo}
                    className={`${
                      location.pathname.includes(url)
                        ? "inline w-4 animate-bounce mx-0.5 sm:w-6 lg:w-8"
                        : "hidden"
                    }`}
                  />
                )}
                {title}
              </a>
            </div>
          );
        })}
      </nav>
    </div>
  );
}

export default Header;
