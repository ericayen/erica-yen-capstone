import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils";
import CoffeeCard from "../components/CoffeeCard";

function BeansPage() {
  //   const [coffeeData, setCoffeeData] = useState([]);
  const [arabicaData, setArabicaData] = useState([]);
  const [robustaData, setRobustaData] = useState([]);
  const [libericaData, setLibericaData] = useState({});
  const [excelsaData, setExcelsaData] = useState({});

  const getBeans = async () => {
    try {
      const response = await axios.get(`${apiUrl}/coffee`);
      const data = response.data;
      //   setCoffeeData(data);
      setArabicaData(data.slice(0, 5));
      setRobustaData(data.slice(5, 8));
      setLibericaData(data[8]);
      setExcelsaData(data[9]);
    } catch (error) {
      console.error("Error getting coffee data", error);
    }
  };

  useEffect(() => {
    document.title = "About Beans";
    getBeans();
  }, []);

  //   console.log(libericaData);
  //   console.log(robustaData);

  //   const arabica = coffeeData.slice(0, 5);
  //   const robusta = coffeeData.slice(5, 8);
  //   const liberica = coffeeData[8];
  //   const excelsa = coffeeData[9];

  //   function getHistory(coffee) {
  //     if (coffee.length > 0 && coffee[0].history) {
  //       return coffee[0].history;
  //     } else {
  //       return "History data not available";
  //     }
  //   }

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">About </span>
        <span className="font-semibold">Beans</span>
      </h1>

      <section>
        <div className="mb-2 collapse collapse-plus bg-beige-light">
          <input type="radio" name="my-accordion-3" />
          <h2 className="text-lg font-medium collapse-title">Arabica</h2>
          <CoffeeCard arabicaData={arabicaData} />
          {/* <div className="collapse-content ">
            <div className="w-full bg-white card lg:card-side">
              <div className="card-body">
                <h3 className="flex items-center justify-center text-lg font-normal card-title"></h3>
                <p className="text-sm">{getHistory(arabica)}</p>
              </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
              <a
                href="#1"
                className="bg-white border-none btn btn-xs hover:bg-brown-light"
              >
                1
              </a>
              {[...Array(arabica.length)].map((_, index) => (
                <a
                  key={index}
                  href={`#${index + 2}`}
                  className="border-none bg-beige-light btn btn-xs hover:bg-brown-light"
                >
                  {index + 2}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        <div className="mb-2 collapse collapse-plus bg-beige-light">
          <input type="radio" name="my-accordion-3" />
          <h2 className="text-lg font-medium collapse-title">Robusta</h2>
          <CoffeeCard robustaData={robustaData} />
          {/* <div className="collapse-content ">
            <div className="w-full bg-white card lg:card-side">
              <div className="card-body">
                <h3 className="flex items-center justify-center text-lg font-normal card-title"></h3>
                <p className="text-sm">{getHistory(robusta)}</p>
              </div>
            </div>
            <div className="flex justify-center w-full gap-2 py-2">
              <a
                href="#1"
                className="bg-white border-none btn btn-xs hover:bg-brown-light"
              >
                1
              </a>
              {[...Array(robusta.length)].map((_, index) => (
                <a
                  key={index}
                  href={`#${index + 2}`}
                  className="border-none bg-beige-light btn btn-xs hover:bg-brown-light"
                >
                  {index + 2}
                </a>
              ))}
            </div>
          </div> */}
        </div>

        <div className="mb-2 collapse collapse-plus bg-beige-light">
          <input type="radio" name="my-accordion-3" />
          <h2 className="text-lg font-medium collapse-title">Liberica</h2>
          <CoffeeCard libericaData={libericaData} />
        </div>

        <div className="mb-2 collapse collapse-plus bg-beige-light">
          <input type="radio" name="my-accordion-3" />
          <h2 className="text-lg font-medium collapse-title">Excelsa</h2>
          <CoffeeCard excelsaData={excelsaData} />
        </div>

        {/* <div className="mb-2 collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="text-xl font-medium collapse-title">Excelsa</div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div> */}
      </section>
    </main>
  );
}

export default BeansPage;
