import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import "./index.sass"
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ContactUS } from "./components/ContactUS";

function App() {
  return (
    <>
      <Header />

      <Hero />
      <ContactUS />
      <Footer />
    </>
  );
}

export default App;
