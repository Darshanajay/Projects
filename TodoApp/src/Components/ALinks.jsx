import React from "react";
import { Link } from "react-router-dom";
import All from "../linkComponents/All";
import Active from "../linkComponents/Active";
import Completed from "../linkComponents/Completed";

const ALinks = () => {
  return (
    <div className=" flex flex-col gap-6">
      <div className=" flex justify-between">
        <Link to={All}>All</Link>
        <Link to={Active}>Active</Link>
        <Link to={Completed}>Completed</Link>
      </div>
    </div>
  );
};

export default ALinks;
