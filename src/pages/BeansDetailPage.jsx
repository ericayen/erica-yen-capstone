import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import DetailCard from "../components/DetailCard";

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
    <main>
      <h1>
        <span className="text-brown">About </span>
        <span className="font-semibold">{getTitle(data)}</span>
      </h1>

      <section className="flex flex-wrap justify-between">
        {data.map((item) => (
          <div
            key={item.coffee_id}
            className="mb-2 collapse collapse-plus bg-beige-light"
          >
            <input
              type="checkbox"
              name="my-accordion-3"
              defaultChecked={data.length === 1}
            />
            <h2 className="pl-12 text-lg font-medium lg:text-2xl collapse-title">
              {item.region}
            </h2>
            <div className="collapse-content ">
              <DetailCard item={item} />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default BeansDetailPage;
