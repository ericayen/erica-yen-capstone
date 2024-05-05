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
    <main>
      <h1>
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
