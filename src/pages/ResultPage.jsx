import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ResultPage() {
  const { state } = useLocation();
  console.log(state.answers);

  useEffect(() => (document.title = "Quiz Results"));

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">Your </span>
        <span className="font-semibold">Results</span>
      </h1>
    </main>
  );
}

export default ResultPage;
