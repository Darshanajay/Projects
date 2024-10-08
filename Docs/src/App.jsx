import "./App.css";

function App() {
  return (
    <>
      <div className="relative  w-full h-screen bg-zinc-800">
        <div className="w-full py-10 absolute top-[5%] flex justify-center text-zinc-600 font-semibold text-xl">
          Documents.
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter font-semibold text-zinc-900 ">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default App;
