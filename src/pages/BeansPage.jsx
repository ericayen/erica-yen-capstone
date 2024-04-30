import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../utils";
import BeansCard from "../components/BeansCard";

function BeansPage() {
  const [arabicaData, setArabicaData] = useState([]);
  const [robustaData, setRobustaData] = useState([]);
  const [libericaData, setLibericaData] = useState({});
  const [excelsaData, setExcelsaData] = useState({});

  const getBeans = async () => {
    try {
      const response = await axios.get(`${apiUrl}/coffee`);
      const data = response.data;
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

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">About </span>
        <span className="font-semibold">Beans</span>
      </h1>

      <section className="flex flex-wrap justify-between">
        <BeansCard arabicaData={arabicaData} />
        <BeansCard robustaData={robustaData} />
        <BeansCard libericaData={libericaData} />
        <BeansCard excelsaData={excelsaData} />
      </section>
    </main>
  );
}

export default BeansPage;
