import { useState } from "react";
import Comment from "./Components/Comment";
import { commentData } from "./Components/commentData";
import useFunction from "./hooks/useFunction";

function App() {
  const [comments, setComments] = useState(commentData);
  const { addComment, deleteComment } = useFunction();

  const handleAddComments = (commentId, comment) => {
    const updatedTree = addComment(comments, commentId, comment);
    setComments(updatedTree);
  };
  const handleDeleteComment = (commentId) => {
    const updatedTree = deleteComment(comments, commentId);
    setComments(updatedTree);
  };

  return (
    <>
      <div className="">
        <Comment
          key={comments.id}
          comments={comments}
          handleAddComments={handleAddComments}
          handleDeleteComment={handleDeleteComment}
        />
      </div>
    </>
  );
}

export default App;
