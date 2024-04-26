import React from "react";

function Footer() {
  return (
    <div className="text-center bg-white pb-4 font-ms text-brown text-xs md:text-sm lg:text-base selection:bg-brown-light selection:text-white">
      <a
        href="https://github.com/ericayen/erica-yen-capstone"
        className="text-brown-dark font-medium hover:text-red"
      >
        &copy; Express-o.
      </a>{" "}
      Created by{" "}
      <a
        href="https://github.com/ericayen"
        className="text-brown-dark font-medium hover:text-red"
      >
        Erica Yen
      </a>
    </div>
  );
}

export default Footer;
