"use client";

import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import RotatingText from "./components/RotatingText/RotatingText";

const items = [
  {
    image: "images/jec.jpeg",
    title: "JEC Eye Hospitals & Clinics",
    subtitle: "Research And Education",
    handle: "2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #3bdaf6, #000)",
    url: "https://www.linkedin.com/in/hendrakusumaweb/details/experience/",
  },
  {
    image: "images/bangkit.jpg",
    title: "Bangkit Academy",
    subtitle: "Cloud Computing",
    handle: "2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #f6e33b, #000)",
    url: "https://www.linkedin.com/in/hendrakusumaweb/details/experience/",
  },
  {
    image: "images/cloud.png",
    title: "Dicoding Indonesia",
    subtitle: "Google Cloud Engineer",
    handle: "2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #f66d3b, #000)",
    url: "https://www.dicoding.com/certificates/RVZKROVE4PD5",
  },
  {
    image: "images/support.jpg",
    title: "Google Coursera",
    subtitle: "Sysadmin and IT Services",
    handle: "2024",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #f63b70, #000)",
    url: "https://www.coursera.org/account/accomplishments/verify/6VX9YVKPKPQ2",
  },
  {
    image: "images/codefest.jpg",
    title: "Codefest 01 Gunadarma I/O",
    subtitle: "Competitive Programming",
    handle: "2023",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.linkedin.com/in/hendrakusumaweb/details/experience/",
  },
  {
    image: "images/gemastik.png",
    title: "GEMASTIK XVI",
    subtitle: "Competitive Programming",
    handle: "2023",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #f63bbe, #000)",
    url: "https://www.linkedin.com/in/hendrakusumaweb/details/experience/",
  },
  {
    image: "images/Hackfest.png",
    title: "Hackfest CCUG",
    subtitle: "Cyber Security",
    handle: "2022",
    borderColor: "#10B981",
    gradient: "linear-gradient(145deg, #10B981, #000)",
    url: "https://www.linkedin.com/in/hendrakusumaweb/details/experience/",
  },
];

export default function Experience() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 m-10 md:m-20">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl text-white font-bold">Experience</h1>
            <RotatingText
              texts={["Competitive", "Study Independent", "Intership"]}
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
      </div>
      <div>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.5}
          className="bg-transparent !bg-none !backdrop-brightness-100 pb-60"
          ease="power3.out"
        />
      </div>
    </div>
  );
}
