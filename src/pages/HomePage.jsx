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
    <body className="px-2 bg-white min-h-dvh selection:bg-brown-light selection:text-white">
      <div className="flex flex-col items-center content-between justify-center">
        <h1 className="w-screen overflow-hidden text-2xl leading-loose text-center text-brown whitespace-nowrap animate-typing font-ms sm:text-4xl lg:text-5xl">
          Welcome to{" "}
          <span className="text-3xl font-semibold text-brown-dark pe-2 sm:text-6xl lg:text-7xl">
            Express-<span className="inline-block animate-bounce">o</span>
          </span>
        </h1>
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
            onClick={() => navigate("/about")}
            className="px-3 py-2 text-xs font-medium text-white rounded-full bg-brown sm:px-4 lg:px-5 sm:text-sm lg:text-xl hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
          >
            Let's get roasting!
          </button>
        </div>
      )}
    </body>
  );
}

export default HomePage;
