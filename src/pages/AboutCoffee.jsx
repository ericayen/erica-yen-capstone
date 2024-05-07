import React, { useEffect } from "react";

function AboutCoffee() {
  useEffect(() => {
    document.title = "About Coffee";
  });

  return (
    <main>
      <h1>
        <span className="text-brown">About </span>
        <span className="font-semibold">Coffee</span>
      </h1>
      <section>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            What is coffee?
          </h2>
          <p className="pt-2 text-sm sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            kôfē <span className="italic text-brown">noun</span> The berries
            harvested from species of Coffea plants.
          </p>
          <p className="pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl">
            The beans you brew are actually the processed and roasted seeds from
            a fruit, which is called a coffee cherry. When dried, roasted, and
            ground, it’s used to brew coffee. If the seed isn’t processed, it
            can be planted and grown into a coffee tree.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            What is "light" or "dark" roast coffee?
          </h2>
          <p className="pt-2 pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            Roasting transforms green coffee into the aromatic brown beans that
            we know as coffee. Light roast is heated for a shorter time and at a
            lower temperature than dark roast. Dark roast coffee beans stay in
            the roasting machine for longer and at a higher temperature. Medium
            roasts are somewhere in between.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
            What's the difference?
          </h2>
          <p className="pt-2 pb-8 text-sm sm:pb-12 sm:text-lg lg:text-xl sm:pt-4 lg:pt-8">
            Light roasts tend to have more delicate yet complex flavour profiles
            than dark roasts. Dark roasts tend to have deep but simple flavours
            due to some of the initial flavours of the beans being lost or
            changed during the roasting process. Dark roast is sometimes
            described as tasting more bitter than light roast. However, the
            overall flavour of coffee is affected by many factors, such as the
            roasting method, brew method, brewing time, the coffee-to-water
            ratio used, etc.
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

export default AboutCoffee;
