import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { apiUrl } from "../utils";
import InputField from "../components/InputField";
import CommentCard from "../components/CommentCard";

function CommentsPage() {
  const formRef = useRef(null);
  const [comments, setComments] = useState([]);
  const [formState, setFormState] = useState({
    name: "",
    comment: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const getComments = async () => {
    const response = await axios.get(`${apiUrl}/comments`);
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = {};
    if (!formState.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formState.comment.trim()) {
      errors.comment = "Comment is required";
    }

    if (Object.keys(errors).length > 0) {
      const formOffset = formRef.current.offsetTop - 60;
      window.scrollTo({
        top: formOffset,
        behavior: "smooth",
      });
      setFormErrors(errors);
      alert("Please fill out all the fields!");
      return;
    }

    setFormErrors({});

    const newComment = {
      comment_id: uuidv4(),
      name: formState.name,
      comment: formState.comment,
      date: Date.now(),
      avatar: null, //this will display dynamically once user profile & auth is implemented
    };

    try {
      const response = await axios.post(`${apiUrl}/comments`, newComment);
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

  return (
    <main>
      <h1>
        <span className="text-brown">Let's </span>
        <span className="font-semibold">Chat!</span>
      </h1>

      <section>
        <div className="w-full px-4 pb-4 bg-beige-light card">
          <form onSubmit={handleSubmit} ref={formRef}>
            <div className="items-center w-full p-4 pt-1 mt-4 bg-white rounded-2xl card-body">
              <div className="w-full">
                <InputField
                  type="text"
                  name="name"
                  label="Name"
                  value={formState.name}
                  error={formErrors.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  placeholder="Type here..."
                />
                <InputField
                  type="text"
                  name="comment"
                  label="Comment"
                  value={formState.comment}
                  error={formErrors.comment}
                  onChange={(e) =>
                    setFormState({ ...formState, comment: e.target.value })
                  }
                  placeholder="Type here..."
                />
              </div>
              <div className="w-full sm:text-end">
                <button type="submit" className="w-full mt-2 lg:w-fit button">
                  Add comment
                </button>
              </div>
            </div>
          </form>
          <CommentCard comments={comments} />
        </div>
      </section>
    </main>
  );
}

export default CommentsPage;
