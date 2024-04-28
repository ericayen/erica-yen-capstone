import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils";

function BeansPage() {
  const [coffeeData, setCoffeeData] = useState([]);

  const getBeans = async () => {
    try {
      const response = await axios.get(`${apiUrl}/coffee`);
      const data = response.data;
      setCoffeeData(data);
    } catch (error) {
      console.error("Error getting coffee data", error);
    }
  };

  useEffect(() => {
    document.title = "About Beans";
    getBeans();
  }, []);

  const arabica = coffeeData.slice(0, 5);
  const robusta = coffeeData.slice(5, 8);
  const liberica = coffeeData[8];
  const excelsa = coffeeData[9];

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-16 lg:px-36 xl:px-48 2xl:px-96 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">About </span>
        <span className="font-semibold">Beans</span>
      </h1>

      <section>
        <div className="mb-2 collapse collapse-plus bg-beige-light">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="text-xl font-medium collapse-title">Arabica</div>
          <div className="collapse-content">
            <div className="w-full carousel h-50">
              {arabica.map((coffee) => (
                <div id={coffee.coffee_id} className="w-full carousel-item">
                  <div className="bg-white shadow-xl card">
                    <p>{coffee.coffee_type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
              <a href="#1" className="btn btn-xs">
                1
              </a>
              <a href="#2" className="btn btn-xs">
                2
              </a>
              <a href="#3" className="btn btn-xs">
                3
              </a>
              <a href="#4" className="btn btn-xs">
                4
              </a>
            </div>
          </div>
        </div>
        <div className="mb-2 collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="text-xl font-medium collapse-title">Robusta</div>
          <div className="collapse-content">
            <div className="shadow-xl card lg:card-side bg-base-100">
              <figure>
                <img
                  src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg"
                  alt="Album"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">New album is released!</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-2 collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="text-xl font-medium collapse-title">Liberica</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="mb-2 collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="text-xl font-medium collapse-title">Excelsa</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BeansPage;
