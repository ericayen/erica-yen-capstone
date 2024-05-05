import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const logo = require("../assets/Logo/logo.png");

function HomePage() {
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowComponent(true);
    }, 2200);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="px-2 bg-white min-h-dvh selection:bg-brown-light selection:text-white">
      <div className="flex flex-col items-center content-between justify-center">
        <div className="w-screen pt-12 overflow-hidden text-2xl leading-loose text-center text-brown whitespace-nowrap animate-typing font-ms sm:text-4xl lg:text-5xl lg:pt-20">
          Welcome to{" "}
          <span className="text-3xl font-semibold text-brown-dark pe-2 sm:text-6xl lg:text-7xl">
            Express-<span className="inline-block animate-bounce">o</span>
          </span>
        </div>
      </div>

      {showComponent && (
        <div className="pt-4 text-xs text-center text-brown-dark font-ms sm:text-sm lg:text-xl animate-fade">
          <img
            src={logo}
            alt="coffee cup"
            className="w-1/4 py-4 mx-auto lg:w-1/5"
          />
          <p className="text-brown">
            <span className="text-brown-dark">/ikˈspresō/</span> : a coffee app
            to help you learn about the wonderful world of coffee
          </p>
          <p className="py-4 text-brown">
            <span className="text-brown-dark">/eˈspresō/</span> : the correct
            pronounciation of 'espresso'
          </p>
        </div>
      )}

      {showButton && (
        <div className="py-2 text-center font-ms animate-fade">
          <button
            onClick={() => {
              window.scrollTo(0, 0);
              navigate("/about");
            }}
            className="mt-0"
          >
            Let's get roasting!
          </button>
        </div>
      )}
    </main>
  );
}

export default HomePage;
