"use client";

import Hero from "./hero";
import About from "./about";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import Experience from "./experience";
import Contact from "./contact";

import Dock from "./components/Dock/Dock";

import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const items = [
  {
    icon: <VscHome size={18} />,
    label: "Home",
    onClick: () =>
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <VscArchive size={18} />,
    label: "About",
    onClick: () =>
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <VscAccount size={18} />,
    label: "Experience",
    onClick: () =>
      document
        .getElementById("experience")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <VscSettingsGear size={18} />,
    label: "Contact",
    onClick: () =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" }),
  },
];

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

      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="contact">
        <Contact />
      </div>

      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </div>
    </div>
  );
}
