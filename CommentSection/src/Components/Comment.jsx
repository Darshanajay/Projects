import React, { useState } from "react";
import "../Components/Comment.css";

const Comment = ({ comments, handleAddComments, handleDeleteComment }) => {
  const [showInp, setShowInp] = useState(false);
  const [comment, setComment] = useState("");

  const handleAdd = () => {
    let newComment = {
      id: Date.now(),
      text: comment,
      replies: [],
    };
    handleAddComments(comments.id, newComment);
    setShowInp(false);
  };
  return (
    <div>
      <div
        className={` ${
          comments.text &&
          " m-5 p-[10px] bg-[#fff]  border-l-4 border-solid border-violet-400 border-r-[6px] shadow-xl"
        }`}
      >
        <h3>{comments.text}</h3>
        {showInp && (
          <input
            type="text"
            autoFocus
            onChange={(e) => setComment(e.target.value)}
          />
        )}
        {showInp ? (
          <div>
            <button className="bbutton" onClick={handleAdd}>
              Add
            </button>
            <button className="bbutton" onClick={() => setShowInp(false)}>
              Cancel
            </button>
          </div>
        ) : comments.text ? (
          <div>
            <button className="bbutton" onClick={() => setShowInp(true)}>
              Reply
            </button>
            <button
              className="bbutton"
              onClick={() => handleDeleteComment(comments.id)}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div className=" pl-[25px]">
        {comments?.replies?.map((ele) => (
          <Comment
            key={comments.id}
            comments={ele}
            handleAddComments={handleAddComments}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Comment;
