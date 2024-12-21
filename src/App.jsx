import React from "react";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import About from "./Components/About";
import Project from "./Components/Project";
import Tools from "./Components/Tools";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="bg-dark bg-grey">
      <Navbar/>
      <Landing/>
      <About/>
      <div
        style={{
          background: "linear-gradient(135deg, #AC2F3A, #181F4D)",
        }}
        className="py-16"
      >
        <Project />
        <Tools />
        <Footer />
      </div>
    </div>
  );
}

export default App
