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
    <div className="px-2 bg-white min-h-dvh selection:bg-brown-light selection:text-white">
      <div className="pt-28 flex flex-col items-center justify-center content-between">
        <div className="leading-loose text-brown w-screen whitespace-nowrap overflow-hidden animate-typing font-ms text-2xl sm:text-4xl lg:text-5xl text-center">
          Welcome to{" "}
          <span className="font-semibold text-brown-dark pe-2 text-3xl sm:text-6xl lg:text-7xl">
            Express-<span className="inline-block animate-bounce">o</span>
          </span>
        </div>
      </div>

      {showComponent && (
        <div className="pt-4 text-center text-brown-dark font-ms text-xs sm:text-sm lg:text-xl animate-fade">
          <img
            src={logo}
            alt="coffee cup"
            className="w-1/4 mx-auto py-4 lg:w-1/5"
          />
          <p className="text-brown">
            <span className="text-brown-dark">/ikˈspresō/</span> : a coffee app
            to help you learn about the wonderful world of coffee
          </p>
          <p className="text-brown py-4">
            <span className="text-brown-dark">/eˈspresō/</span> : the correct
            pronounciation of 'espresso'
          </p>
        </div>
      )}

      {showButton && (
        <div className="text-center font-ms py-2 animate-fade">
          <button
            onClick={() => navigate("/about")}
            className="bg-brown text-white rounded-full px-3 py-2 sm:px-4 lg:px-5 text-xs sm:text-sm lg:text-xl font-medium hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
          >
            Let's get roasting!
          </button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
