import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { apiUrl } from "../utils";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const navigate = useNavigate();
  const quizRef = useRef(null);

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

    const answered = Object.keys(answers).map(Number);
    const unanswered = questions.filter(
      (question) => !answered.includes(question.question_id)
    );

    if (unanswered.length > 0) {
      const updated = questions.map((question) => ({
        ...question,
        unanswered: unanswered.some(
          (unanswered) => unanswered.question_id === question.question_id
        ),
      }));

      window.scrollTo({
        top: quizRef.current.offsetTop,
        behavior: "smooth",
      });

      setQuestions(updated);
      alert("Please answer all the questions!");
      return;
    }

    navigate("/quiz/result", { state: { answers } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div ref={quizRef}>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => {
          return (
            <div key={question.question_id}>
              <h3
                className={`pt-8 pb-2 text-sm font-medium sm:text-lg lg:text-xl ${
                  question.unanswered ? "text-red" : ""
                }`}
              >
                {question.question}
              </h3>
              <ul className="flex flex-col m-auto w-fit">
                {responses
                  .filter(
                    (response) => response.question_id === question.question_id
                  )
                  .map((response) => (
                    <li
                      key={response.response_id}
                      className="flex items-center py-1 text-sm sm:text-lg lg:text-xl"
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
                      />
                      <label
                        htmlFor={response.response_id}
                        className="cursor-pointer hover:text-red"
                      >
                        {response.option}
                      </label>
                    </li>
                  ))}
              </ul>
            </div>
          );
        })}
        <button type="submit" className="mt-8">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Quiz;
