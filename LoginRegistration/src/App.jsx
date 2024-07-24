import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  BrowserRouter,
  Router,
  Route,
  Routes,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router}>
        <Navbar />
      </RouterProvider>
    </>
  );
}

export default App;
