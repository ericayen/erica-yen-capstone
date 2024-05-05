import React, { useEffect } from "react";

function AboutPage() {
  useEffect(() => {
    document.title = "About Express-o";
  });

  return (
    <main>
      <h1>
        <span className="text-brown">About </span>
        <span className="font-semibold">Express-o</span>
      </h1>
      <section>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            Why "Express-o"?
          </h2>
          <p className="pt-2 pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            The title is a play on the word <i>espresso</i>, which is commonly
            mispronounced as <i>ex-press-o</i>, and embodies what I hope this
            app will achieve for you: an <i>express</i> path into the world of
            coffee.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            Overview
          </h2>
          <p className="pt-2 pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            This app is to help you learn about different types of coffee
            varieties. You can take a quiz to receive recommendations for a type
            of coffee based on your preferences.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            Features
          </h2>
          <p className="pt-2 pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            You can browse through the app to learn about coffee, such as
            origins, varieties, flavours, etc. You can also take a quiz to
            determine your preferences for coffee i.e. nutty vs fruity, floral
            vs chocolate-y, etc., where at the end you are given a
            recommendation for a type of coffee.
          </p>
        </div>
      </section>
      <div className="flex justify-center gap-x-6">
        <a href="/beans" className="button">
          Explore beans
        </a>
        <a href="/quiz" className="button">
          Take a quiz
        </a>
      </div>
    </main>
  );
}

export default AboutPage;
