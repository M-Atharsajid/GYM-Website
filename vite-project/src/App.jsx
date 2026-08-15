import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/header";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Reasons from "./Components/Reasons/Reasons";
import Plans from "./Components/Plans/Plans";
import Testimonials from "./Components/Testimonials/Testimonials";
import Join from "./Components/Join/Join";
import Footer from "./Components/Footer/footer";

function App() {
  // Which program the visitor clicked "Join Now" on, sent along with the form.
  const [selectedProgram, setSelectedProgram] = useState("");

  return (
    <div className="App">
      <Hero />
      <Programs onSelectProgram={setSelectedProgram} />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join
        selectedProgram={selectedProgram}
        onClearProgram={() => setSelectedProgram("")}
      />
      <Footer />
    </div>
  );
}

export default App;
