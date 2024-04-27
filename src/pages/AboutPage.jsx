import React from "react";

function AboutPage() {
  return (
    <body className="leading-loose text-center px-2 sm:px-8 lg:px-36 xl:px-48 2xl:px-96 bg-white min-h-dvh w-screen font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 lg:pb-28 text-2xl sm:text-4xl lg:text-5xl">
        <span className="text-brown">About </span>
        <span className="font-semibold">Express-o</span>
      </h1>
      <section className="pb-8">
        <div>
          <h2 className="text-brown font-medium text-lg sm:text-2xl lg:text-3xl">
            Why "Express-o"?
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl py-2 sm:py-4 lg:py-8">
            The title is a play on the word <i>espresso</i>, which is commonly
            mispronounced as <i>ex-press-o</i>, and embodies what I hope this
            app will acheive for you: an <i>express</i> path into the coffee
            world.
          </p>
        </div>
        <div>
          <h2 className="text-brown font-medium text-lg sm:text-2xl lg:text-3xl">
            Overview
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl py-2 sm:py-4 lg:py-8">
            This app is to help you learn about different types of coffee
            varieties and coffee drinks. You can take a quiz to receive
            recommendations for a type of coffee and/or coffee drink based on
            your preferences.
          </p>
        </div>
        <div>
          <h2 className="text-brown font-medium text-lg sm:text-2xl lg:text-3xl">
            Features
          </h2>
          <p className="text-sm sm:text-lg lg:text-xl py-2 sm:py-4 lg:py-8">
            You can browse through the app to learn about coffee, such as
            origins, varieties, flavours, etc. You can also take a quiz to
            determine your preferences for coffee (i.e. nutty vs fruity, sour vs
            rich, etc.), where at the end you are given a recommendation for a
            type of coffee.
          </p>
        </div>
      </section>
    </body>
  );
}

export default AboutPage;
