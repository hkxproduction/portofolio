"use client";

import TiltedCard from "./components/TiltedCard/TiltedCard";
import RotatingText from "./components/RotatingText/RotatingText";
import TextType from "./components/TextType/TextType";

export default function About() {
  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-12 items-center">
        {/* Kiri - Teks */}
        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl text-white font-bold">About</h1>
            <RotatingText
              texts={["Me", "Us"]}
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

          <div className="mt-5">
            <TextType
              className="text-base sm:text-lg md:text-xl text-[#00ADB5] text-justify"
              text={[
                "My deep interest in technology began early in life, evolving into a strong dedication to the IT field. This foundational passion drives me to make complex technological concepts accessible and easy to understand for everyone. I have strong Hard Skills in PHP, JavaScript, and Python, along with extensive experience in web development using HTML, CSS, and frameworks like React JS, Laravel, and Tailwind CSS. My expertise also covers Google Cloud Platform (Compute Engine, Firebase), deployment tools (Docker, GitHub), and various database systems (PostgreSQL, MongoDB). Complementing these technical skills are my Soft Skills, including problem-solving, adaptability, analytical thinking, algorithmic reasoning, effective teamwork, and a commitment to professional ethics, ensuring a dedicated and collaborative approach to all projects.",
              ]}
              typingSpeed={10}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </div>

        {/* Kanan - Gambar */}
        <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
          <div className="w-full flex justify-center pt-5">
            <div className="w-full max-w-[90vw] sm:max-w-[400px]">
              <TiltedCard
                imageSrc="/images/about.png"
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={30}
                scaleOnHover={1}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
