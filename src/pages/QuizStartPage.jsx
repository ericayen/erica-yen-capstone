import React from "react";
import { useNavigate } from "react-router-dom";

function QuizStartPage() {
  const navigate = useNavigate();

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">Take a </span>
        <span className="font-semibold">Quiz</span>
      </h1>
      <h2 className="text-lg font-medium text-brown sm:text-2xl lg:text-3xl">
        Find out what coffee best matches your preferences
      </h2>

      <button
        onClick={() => navigate("/quiz")}
        className="px-3 py-2 mt-8 mb-12 text-sm font-medium text-white border border-solid rounded-full lg:mb-28 w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
      >
        Let's go!
      </button>
    </main>
  );
}

export default QuizStartPage;
