import { useState } from "react";
import TodoName from "./Components/TodoName";
import {
  createBrowserRouter,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import All from "./linkComponents/All";
import Active from "./linkComponents/Active";
import Completed from "./linkComponents/Completed";
import ALinks from "./Components/ALinks";



function App() {
  return (
    <>
      <div className="h-screen w-full flex justify-center mt-36">
        <div className="max-w-screen-md  ">
          <TodoName />
          <ALinks />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<All />} />
              <Route path="/Active" element={<Active />} />
              <Route path="/Completed" element={<Completed />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
