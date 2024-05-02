import React, { useEffect, useState, useRef } from "react";
import Quiz from "../components/Quiz";
import QuizResult from "../components/QuizResult";

function QuizPage() {
  const [clicked, setClicked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState();
  const quizRef = useRef(null);
  const resultRef = useRef(null);

  useEffect(() => {
    document.title = "Take a Quiz";

    if (clicked && quizRef.current) {
      setTimeout(() => {
        window.scrollTo({
          top: quizRef.current.offsetTop,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [clicked]);

  useEffect(() => {
    if (submitted) {
      window.scrollTo({
        top: resultRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, [submitted]);

  const handleClick = () => {
    setClicked(true);
  };

  const handleSubmit = (answers) => {
    setSubmitted(true);
    setAnswers(answers);
  };

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">Take a </span>
        <span className="font-semibold">Quiz</span>
      </h1>
      <h2 className="text-base sm:text-lg lg:text-2xl ">
        Find out what coffee best matches your preferences
      </h2>
      {!submitted && (
        <>
          <button
            onClick={() => handleClick()}
            className="px-3 py-2 mt-8 text-sm font-medium text-white border border-solid rounded-full w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
          >
            Let's start!
          </button>
        </>
      )}
      {clicked && !submitted && (
        <div ref={quizRef} className="h-dvh">
          <Quiz onSubmit={handleSubmit} />
        </div>
      )}
      {submitted && (
        <div ref={resultRef}>
          <QuizResult answers={answers} />
        </div>
      )}
    </main>
  );
}

export default QuizPage;
