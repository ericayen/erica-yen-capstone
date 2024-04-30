import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BeansDetailPage() {
  const location = useLocation();
  const { data } = location.state;

  function getTitle(data) {
    if (data.length > 0 && data[0].coffee_type) {
      return data[0].coffee_type;
    } else {
      return "Title not available";
    }
  }

  useEffect(() => {
    document.title = `About ${getTitle(data)}`;
  });

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">About </span>
        <span className="font-semibold">{getTitle(data)}</span>
      </h1>

      <section className="flex flex-wrap justify-between">
        {data.map((item) => (
          <div
            key={item.coffee_id}
            className="mb-2 collapse collapse-plus bg-beige-light"
          >
            <input type="radio" name="my-accordion-3" />
            <h2 className="pl-12 text-lg font-medium lg:text-2xl collapse-title">
              {item.region}
            </h2>
            <div className="collapse-content ">
              <div className="w-full bg-white card lg:card-side">
                <div className="items-center card-body">
                  <p className="text-sm lg:text-base">
                    <span className="font-medium">Countries:</span>{" "}
                    {item.countries}
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-medium">Roast profile:</span>{" "}
                    {item.roast_profile}
                  </p>
                  <p className="text-sm lg:text-base">
                    <span className="font-medium">Flavor profile:</span>{" "}
                    {item.flavor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default BeansDetailPage;
