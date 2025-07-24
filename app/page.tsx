"use client";

import Hero from "./hero";
import About from "./about";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Experience from "./experience";
import Contact from "./contact";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <SplashCursor />
      <div className="absolute inset-0 w-full h-full -z-10">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal"
          borderColor="#00ADB5"
          hoverFillColor="#EEEEEE"
        />
      </div>
      <Hero />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
