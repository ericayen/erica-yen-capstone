import React from "react";

function Footer() {
  return (
    <div className="pb-4 text-xs text-center bg-white sm:pt-16 lg:pt-24 font-ms text-brown md:text-sm lg:text-base selection:bg-brown-light selection:text-white">
      <a
        href="https://github.com/ericayen/erica-yen-capstone"
        className="font-medium text-brown-dark hover:text-red"
      >
        &copy; Express-o.
      </a>{" "}
      Created by{" "}
      <a
        href="https://github.com/ericayen"
        className="font-medium text-brown-dark hover:text-red"
      >
        Erica Yen
      </a>
    </div>
  );
}

export default Footer;
