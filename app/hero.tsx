"use client";

import ProfileCard from "./components/ProfileCard/ProfileCard";
import RotatingText from "./components/RotatingText/RotatingText";
import TextType from "./components/TextType/TextType";
import BlurText from "./components/BlurText/BlurText";

export default function Hero() {
  return (
    <div className="container mx-auto min-h-screen px-4 sm:px-6 md:px-10">
      <div className="grid grid-cols-12 items-center">
        {/* Kiri - Teks */}
        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20">
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl text-white font-bold">I'm Keen To Start</h1>
            <RotatingText
              texts={[
                "Web Development",
                "IT Development",
                "Python Project",
                "Linux Development",
              ]}
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
              className="text-3xl sm:text-4xl md:text-6xl font-medium text-[#00ADB5]"
              text={["I'm Hendra Kusuma", "Informatics Engineer"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>

          <div className="mt-10 md:mt-20">
            <BlurText
              text="I am Hendra Kusuma, currently in my eighth semester at Gunadarma University. I specialize and have experience in web development, cloud computing, and Python projects. I am also interested in IT support, Cybersecurity, and Linux system administration."
              delay={250}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl text-justify"
            />
          </div>
        </div>

        {/* Kanan - Kartu Profil */}
        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20">
          <div className="w-full flex justify-center">
            <ProfileCard
              name="Hendra Kusuma"
              title="Informatics Engineer"
              handle="hkxproduction"
              status="Online"
              contactText="Github"
              avatarUrl="/images/pas.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>
                window.open("https://github.com/hkxproduction", "_blank")
              }
              showBehindGradient={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
