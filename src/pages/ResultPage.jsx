import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../utils";
import ResultCard from "../components/DetailCard";

function ResultPage() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [results, setResults] = useState([]);

  const getResults = async () => {
    try {
      const response = await axios.post(`${apiUrl}/results`, state.answers);
      setResults(response.data.results);
    } catch (error) {
      console.error("Error retrieving results", error);
    }
  };

  useEffect(() => {
    document.title = "Quiz Results";
    getResults();
  }, []);

  console.log(results);

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">Your </span>
        <span className="font-semibold">Results</span>
      </h1>

      {results.length > 0 && (
        <section>
          <h2>Top Match: </h2>
          <div className="p-8 mb-2 bg-beige-light">
            <h2 className="text-lg font-medium lg:text-2xl">
              {results[0].coffee_type} ({results[0].region})
            </h2>
            <ResultCard item={results[0]} />
          </div>

          {results.length > 1 && (
            <div>
              <h2>Alternative: </h2>
              <div className="p-8 mb-2 bg-beige-light">
                <h2 className="text-lg font-medium lg:text-2xl">
                  {results[1].coffee_type} ({results[1].region})
                </h2>
                <ResultCard item={results[1]} />
              </div>
            </div>
          )}
        </section>
      )}

      <div className="flex justify-center mt-8 mb-16">
        <button
          onClick={() => navigate("/quiz")}
          className="px-3 py-2 mr-8 text-sm font-medium text-white border border-solid rounded-full w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
        >
          Retake Quiz
        </button>
        <button
          onClick={() => navigate("/beans")}
          className="px-3 py-2 text-sm font-medium text-white border border-solid rounded-full w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
        >
          Learn More
        </button>
      </div>
    </main>
  );
}

export default ResultPage;
