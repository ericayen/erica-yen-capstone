import React, { useEffect, useState, useRef } from "react";
import Quiz from "../components/Quiz";

function QuizPage() {
  const [clicked, setClicked] = useState(false);
  const quizRef = useRef(null);

  useEffect(() => {
    document.title = "Quiz";

    if (clicked && quizRef.current) {
      setTimeout(() => {
        window.scrollTo({
          top: quizRef.current.offsetTop,
          behavior: "smooth",
        });
      }, 0);
    }
  }, [clicked]);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <main>
      <h1>
        <span className="text-brown">Take a </span>
        <span className="font-semibold">Quiz</span>
      </h1>
      <h2 className="mb-4 text-base sm:text-lg lg:text-2xl">
        Find out what coffee best matches your preferences
      </h2>
      <button className="button" onClick={() => handleClick()}>
        Let's start!
      </button>
      {clicked && (
        <div ref={quizRef} className="h-dvh">
          <Quiz />
        </div>
      )}
    </main>
  );
}

export default QuizPage;
