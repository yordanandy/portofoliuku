import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";
import Advice from "./components/Advice";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Portfolio />
            <About />
            <Contact />
            <Advice />
            <Footer />
        </div>
    );
}

export default App;
