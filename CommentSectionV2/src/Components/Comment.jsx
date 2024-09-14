import React, { useRef, useState, useEffect } from "react";
import { BiSolidUpArrow } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import "../App.css";
import Logic from "./Logic";

const Comment = ({
  comment,
  handleAddNode,
  handleEditNode,
  handleDeleteNode,
}) => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(false);
  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      handleAddNode(comment.id, input);
      setShowInput(false);
      setInput("");
    }

    if (editMode) setEditMode(false);
  };

  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };

  return (
    <div className=" ">
      {comment.id === 1 ? (
        <div className=" flex space-x-2">
          <div>
            <input
              type="text"
              autoFocus
              placeholder="type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" p-2 bg-slate-200 rounded-lg pl-6 w-[415px] text-xl"
            />
          </div>
          <div className="">
            {/* <button
              className=" bg-sky-500/100 rounded-lg p-2"
              onClick={onAddComment}
            >
              COMMENT
            </button> */}
            <Logic handleClick={onAddComment} type="COMMENT" />
          </div>
        </div>
      ) : (
        <div className=" sp bg-slate-200 mt-2 p-2 pl-2 rounded-lg">
          <span
            contentEditable={editMode}
            suppressContentEditableWarning={editMode}
            ref={inputRef}
          >
            {comment.name}
          </span>
          <div className=" flex">
            {editMode ? (
              <>
                <Logic
                  className="reply"
                  type="SAVE"
                  handleClick={onAddComment}
                />
                <Logic
                  className="reply"
                  type="CANCEL"
                  handleClick={() => {
                    if (inputRef.current) {
                      inputRef.current.innerText = comment.name;
                    }
                    setEditMode(false);
                  }}
                />
              </>
            ) : comment.name ? (
              <>
                <Logic
                  className="reply"
                  type="REPLY"
                  handleClick={handleNewComment}
                />
                <Logic
                  className="reply"
                  type="EDIT"
                  handleClick={() => {
                    setEditMode(true);
                  }}
                />
                <Logic
                  className="reply"
                  type="DELETE"
                  handleClick={handleDelete}
                />
              </>
            ) : null}
          </div>
        </div>
      )}

      <div className=" pl-6">
        {showInput && (
          <div className=" flex mt-1">
            <input
              type="text"
              autoFocus
              placeholder="type..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className=" p-2 bg-slate-200 rounded-lg pl-6 w-[215px] text-sm"
            />
            <Logic className="reply" type="REPLY" handleClick={onAddComment} />
            <Logic
              className="reply"
              type="CANCEL"
              handleClick={() => {
                setShowInput(false);
              }}
            />
          </div>
        )}

        {comment?.items?.map((cmt) => {
          return (
            <Comment
              key={cmt.id}
              comment={cmt}
              handleAddNode={handleAddNode}
              handleEditNode={handleEditNode}
              handleDeleteNode={handleDeleteNode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
