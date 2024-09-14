import { useState } from "react";
import "./App.css";
import Comment from "./Components/Comment";
import useNode from "../src/Hooks/useNode";

const comments = {
  // id: 1,
  // items: [
  //   {
  //     id: 2,
  //     name: "HI",
  //     items: [
  //       {
  //         id: 3,
  //         name: "Hello",
  //         items: [
  //           {
  //             id: 4,
  //             name: "How are You",
  //             items: [],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Next Js",
  //     items: [
  //       {
  //         id: 6,
  //         name: "React",
  //         items: [],
  //       },
  //     ],
  //   },
  // ],
  id: 1,
  items: [],
};

function App() {
  const [commentsData, setCommentsData] = useState(comments);

  const { addNode, editNode, deleteNode } = useNode();

  const handleAddNode = (folderId, item) => {
    const finalStr = addNode(commentsData, folderId, item);
    setCommentsData(finalStr);
  };

  const handleEditNode = (folderId, value) => {
    const finalStr = editNode(commentsData, folderId, value);
    setCommentsData(finalStr);
  };
  const handleDeleteNode = (folderId) => {
    const finalStr = deleteNode(commentsData, folderId);
    const temp = { ...finalStr };
    setCommentsData(temp);
  };

  return (
    <>
      <div className=" grid place-content-center mt-10">
        <Comment
          comment={commentsData}
          handleAddNode={handleAddNode}
          handleEditNode={handleEditNode}
          handleDeleteNode={handleDeleteNode}
        />
      </div>
    </>
  );
}

export default App;
