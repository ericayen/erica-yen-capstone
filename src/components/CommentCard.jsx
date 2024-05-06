import React from "react";

function CommentCard({ comments }) {
  if (!comments) {
    return;
  }

  return (
    <>
      {comments.map((comment) => (
        <li
          key={comment.comment_id}
          className="items-center w-full mt-4 bg-white rounded-2xl card-body"
        >
          <div className="w-full sm:flex">
            <div className="avatar">
              <div className="w-12 h-12 rounded-full mask mask-squircle bg-brown-light">
                {comment.avatar && (
                  <img src={`${comment.avatar}`} alt="avatar" />
                )}
              </div>
            </div>
            <div className="w-full sm:pl-4">
              <div className="sm:flex">
                <p className="sm:text-start">{comment.name}</p>
                <p className="sm:text-end">{comment.date}</p>
              </div>
              <p className="text-sm lg:text-base sm:text-start">
                {comment.comment}
              </p>
            </div>
          </div>
        </li>
      ))}
    </>
  );
}

export default CommentCard;
