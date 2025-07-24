"use client";

import {
  FiMail,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiShield,
  FiCode,
} from "react-icons/fi";

import RotatingText from "./components/RotatingText/RotatingText";
import GlassIcons from "./components/GlassIcons/GlassIcons";

export default function Contact() {
  const items = [
    {
      icon: <FiMail />,
      color: "blue",
      label: "hxproduction@gmail.com",
      customClass: "cursor-pointer",
    },
    {
      icon: <FiGithub />,
      color: "purple",
      label: "hkxproduction",
      customClass: "cursor-pointer",
      onClick: () => window.open("https://github.com/hkxproduction", "_blank"),
    },
    {
      icon: <FiInstagram />,
      color: "red",
      label: "hendrksm",
      customClass: "cursor-pointer",
      onClick: () => window.open("https://instagram.com/hendrksm", "_blank"),
    },
    {
      icon: <FiLinkedin />,
      color: "indigo",
      label: "hendrakusumaweb",
      customClass: "cursor-pointer",
      onClick: () =>
        window.open("https://linkedin.com/in/hendrakusumaweb", "_blank"),
    },
    {
      icon: <FiShield />,
      color: "teal",
      label: "Hsociety",
      customClass: "cursor-pointer",
      onClick: () =>
        window.open("https://play.picoctf.org/users/Hsociety", "_blank"),
    },
    {
      icon: <FiCode />,
      color: "lime",
      label: "kaitohen",
      customClass: "cursor-pointer",
      onClick: () =>
        window.open("https://tlx.toki.id/profiles/kaitohen/", "_blank"),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen container mx-auto px-4 text-white text-center">
      <div className="mb-10">
        <div className="flex items-center justify-center gap-2">
          <h1 className="text-2xl font-bold">Contact</h1>
          <RotatingText
            texts={["Me", "Now"]}
            mainClassName="px-2 sm:px-2 md:px-3 bg-[#00ADB5] text-[#222831] overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </div>
      </div>

      <div
        className="flex justify-center"
        onClick={(e) => {
          const target = e.target as HTMLElement;
          const button = target.closest("button");

          if (!button) return;

          const buttons = Array.from(
            e.currentTarget.querySelectorAll("button")
          );
          const index = buttons.indexOf(button);

          if (items[index] && typeof items[index].onClick === "function") {
            items[index].onClick(); // <- pastikan dipanggil sebagai fungsi
          }
        }}
      >
        <GlassIcons
          items={items}
          className="gap-[6em] [&>button]:w-[10em] [&>button]:h-[10em] [&>button>span:last-child]:text-lg"
        />
      </div>
    </div>
  );
}
