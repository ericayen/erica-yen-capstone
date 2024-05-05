import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../utils";
import DetailCard from "../components/DetailCard";

function ResultPage() {
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
    document.title = "Results";
    getResults();
  }, []);

  return (
    <main>
      <h1>
        <span className="text-brown">Your </span>
        <span className="font-semibold">Results</span>
      </h1>

      {results.length > 0 && (
        <section>
          <h2 className="pb-8 text-lg font-medium lg:text-2xl">Top Match:</h2>
          <div className="p-4 mb-2 rounded-2xl bg-beige-light">
            <h2 className="pb-4 text-lg font-medium lg:text-2xl">
              {results[0].coffee_type} ({results[0].region})
            </h2>
            <DetailCard item={results[0]} />
          </div>

          {results.length > 1 && (
            <div>
              <h2 className="p-8 text-lg font-medium lg:text-2xl">
                Alternative:
              </h2>
              <div className="p-4 mb-2 rounded-2xl bg-beige-light">
                <h2 className="pb-4 text-lg font-medium lg:text-2xl">
                  {results[1].coffee_type} ({results[1].region})
                </h2>
                <DetailCard item={results[1]} />
              </div>
            </div>
          )}
        </section>
      )}

      <div className="flex justify-center mt-8 mb-16 gap-x-6">
        <a href="/quiz" className="button">
          Retake Quiz
        </a>
        <a href="/beans" className="button">
          Learn More
        </a>
      </div>
    </main>
  );
}

export default ResultPage;
