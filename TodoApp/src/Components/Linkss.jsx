import React from "react";
import { Link, NavLink } from "react-router-dom";
import All from "./linkComponents/All";
import Active from "./linkComponents/Active";
import Completed from "./linkComponents/Completed";

const Linkss = () => {
  return (
    <div className=" flex justify-between top-10">
      <NavLink to="/">
        {" "}
        <All />{" "}
      </NavLink>
      <NavLink to="/Active">
        {" "}
        <Active />{" "}
      </NavLink>
      <NavLink to="/Completed">
        {" "}
        <Completed />{" "}
      </NavLink>
    </div>
  );
};

export default Linkss;
