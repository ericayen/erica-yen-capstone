import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { apiUrl } from "../utils";
import CommentCard from "../components/CommentCard";

function CommentsPage() {
  const [comments, setComments] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    comment: "",
  });
  //   const [formErrors, setFormErrors] = useState({});

  const getComments = async () => {
    const response = await axios.get(`${apiUrl}/comments`);
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formState.name.trim() || !formState.comment.trim()) {
      alert("Please fill out all the fields!");
      return;
    }

    const newComment = {
      comment_id: uuidv4(),
      name: formState.name,
      comment: formState.comment,
      date: Date.now(),
      avatar: null,
    };

    try {
      console.log(newComment);
      const response = await axios.post(`${apiUrl}/comments`, newComment);
      console.log(response);
      setComments([...comments, response.data]);
      setFormState({
        name: "",
        comment: "",
      });
      getComments();
    } catch (error) {
      console.error("Error adding comment", error);
    }
  };

  //   const validateForm = () => {
  //     let errors = {};
  //   };

  return (
    <main>
      <h1>
        <span className="text-brown">Let's </span>
        <span className="font-semibold">Chat!</span>
      </h1>

      <form
        className="w-full px-4 pb-4 bg-beige-light card"
        onSubmit={handleSubmit}
      >
        <div className="items-center w-full pt-4 pb-6 mt-4 bg-white rounded-2xl card-body">
          <div className="w-full">
            <label className="w-full form-control">
              <div className="label">
                <span className="font-medium label-text">Name</span>
              </div>
              <input
                type="text"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                placeholder="Type here..."
                className="w-full py-2 border input border-beige-light focus:outline-green focus:border-green h-fit"
              />
            </label>
            <label className="w-full form-control">
              <div className="label">
                <span className="font-medium label-text">Comment</span>
              </div>
              <input
                type="text"
                value={formState.comment}
                onChange={(e) =>
                  setFormState({ ...formState, comment: e.target.value })
                }
                placeholder="Type here..."
                className="w-full py-2 border input border-beige-light focus:outline-green focus:border-green h-fit"
              />
            </label>
          </div>
          <div className="w-full sm:text-end">
            <button type="submit" className="w-full mt-3 lg:w-fit button">
              Add comment
            </button>
          </div>
        </div>
      </form>

      <section className="pt-12 lg:pt-24">
        <h2 className="text-lg font-medium lg:text-2xl text-brown">Comments</h2>
        <ul className="w-full px-4 pb-4 bg-beige-light card">
          <CommentCard comments={comments} />
        </ul>
      </section>
    </main>
  );
}

export default CommentsPage;
