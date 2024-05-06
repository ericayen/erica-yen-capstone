import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiUrl } from "../utils";
import CommentCard from "../components/CommentCard";

function CommentsPage() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await axios.get(`${apiUrl}/comments`);
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <main>
      <h1>
        <span className="text-brown">Let's </span>
        <span className="font-semibold">Chat!</span>
      </h1>

      <section className="pt-12 lg:pt-24">
        <h2 className="text-lg font-medium lg:text-2xl text-brown">Comments</h2>
        <ul className="w-full px-4 pb-4 bg-beige-light card ">
          <CommentCard comments={comments} />
        </ul>
      </section>
    </main>
  );
}

export default CommentsPage;
