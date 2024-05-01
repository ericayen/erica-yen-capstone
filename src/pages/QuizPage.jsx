import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils";

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);

  const getQuestions = async () => {
    try {
      const response = await axios.get(`${apiUrl}/questions`);
      const data = response.data;
      setQuestions(data);
    } catch (error) {
      console.error("Error getting quiz questions:", error);
    }
  };

  const getResponses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/responses`);
      const data = response.data;
      setResponses(data);
    } catch (error) {
      console.error("Error getting quiz responses:", error);
    }
  };

  useEffect(() => {
    document.title = "Take a Quiz";
    getQuestions();
    getResponses();
  }, []);

  console.log(questions);
  console.log(responses);

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <h1 className="pb-12 text-2xl lg:pb-28 sm:text-4xl lg:text-5xl">
        <span className="text-brown">Take a </span>
        <span className="font-semibold">Quiz</span>
      </h1>
      {/* <p className="text-sm sm:text-base lg:text-2xl">
        Find out what coffee best matches your preferences!
      </p> */}

      <section>
        {questions.map((item) => (
          <div key={item.question_id}>
            <p>{item.question}</p>
          </div>
        ))}
        {/* <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Red pill</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-red-500"
              checked
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Blue pill</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div> */}
      </section>
    </main>
  );
}

export default QuizPage;
