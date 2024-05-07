import React from "react";

function CommentCard({ comments }) {
  if (!comments) {
    return;
  }

  return (
    <ul>
      {comments.map((comment) => (
        <li
          key={comment.comment_id}
          className="items-center w-full p-4 mt-3 bg-white rounded-2xl card-body"
        >
          <div className="w-full sm:flex">
            <div className="mt-1 avatar">
              <div className="w-12 h-12 rounded-full mask mask-squircle bg-brown-light">
                {comment.avatar && (
                  <img src={`${comment.avatar}`} alt="avatar" />
                )}
              </div>
            </div>
            <div className="w-full sm:pl-4">
              <div className="sm:flex sm:mb-2">
                <p className="text-sm font-medium sm:text-start lg:text-base">
                  {comment.name}
                </p>
                <p className="text-sm sm:text-end lg:text-base">
                  {comment.date}
                </p>
              </div>
              <p className="text-sm lg:text-base sm:text-start">
                {comment.comment}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentCard;
