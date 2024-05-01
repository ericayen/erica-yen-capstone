import axios from "axios";
import React, { useEffect, useState } from "react";
import { apiUrl } from "../utils";
import { useNavigate } from "react-router-dom";

function QuizPage() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [answers, setAnswers] = useState({});

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

  const handleResponseChange = (questionId, selectedOption) => {
    const selectedResponse = responses.find(
      (response) =>
        response.question_id === questionId &&
        response.option === selectedOption
    );
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedResponse,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answers) {
      alert("Please answer all the questions!");
      return;
    }
    let totalWeight = 0;
    Object.values(answers).forEach((answer) => {
      if (answer) {
        totalWeight += answer.weight;
      }
    });
    console.log("Total weight:", totalWeight);
    setAnswers([]);
    e.target.reset();
  };

  console.log(answers);

  return (
    <main className="w-screen px-8 leading-loose text-center bg-white sm:px-24 lg:px-36 min-h-dvh font-ms text-brown-dark selection:bg-brown-light selection:text-white">
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.question_id}>
            <h3 className="pt-8 pb-2 text-sm font-medium sm:text-lg lg:text-xl">
              {question.question}
            </h3>
            <ul>
              {responses
                .filter(
                  (response) => response.question_id === question.question_id
                )
                .map((response) => (
                  <li
                    key={response.response_id}
                    className="flex items-center justify-center "
                  >
                    <input
                      type="radio"
                      className="mr-2 radio radio-xs checked:bg-red"
                      id={response.response_id}
                      name={`question_${question.question_id}`}
                      value={response.option}
                      onChange={(e) =>
                        handleResponseChange(
                          question.question_id,
                          e.target.value
                        )
                      }
                      required
                    />
                    <label
                      htmlFor={response.response_id}
                      className="cursor-pointer"
                    >
                      {response.option}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        <button
          type="submit"
          className="px-3 py-2 mt-4 text-sm font-medium text-white border border-solid rounded-full w-fit bg-brown border-brown sm:px-4 lg:px-5 lg:text-base hover:bg-white hover:text-brown hover:border-solid hover:border hover:border-brown active:scale-95"
        >
          Submit
        </button>
      </form>
    </main>
  );
}

export default QuizPage;
