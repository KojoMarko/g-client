import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurSolutions from "./components/OurSolutions";
import Register from "./components/Register";
import WhatNext from "./components/WhatNext";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Navbar />
      <Hero />
      <OurSolutions />
      <WhatNext />
      <Register />
      <Footer />
    </div>
  );
}