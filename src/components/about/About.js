import React from "react";
import Navbar from "../navbar/Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div
        id="about-section"
        className="h-screen bg-gradient-to-r from-teal-600 to-sky-600 flex flex-col lg:flex-row gap-8 lg:gap-16 2xl:gap-24 m-auto p-8 md:py-20 md:px-28 2xl:py-44"
      >
        <div className="bg-gradient-to-r rounded-[80px] from-teal-600 to-sky-600 border border-teal-600 h-full w-full shadow-2xl shadow-slate-950 p-8 lg:p-20 mt-8">
          <div
            className="bg-no-repeat bg-cover bg-center rounded-[60px] h-full w-full"
            style={{ backgroundImage: "url('/mee.jpg')" }}
          ></div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-10 items-center lg:items-start md:justify-start lg:w-4/5 lg:justify-center">
          <span className="text-3xl md:text-4xl lg:text-5xl playfair-black text-center text-white">
            Hi there! This is Shalmali Bhave
          </span>
          <span className="text-base md:text-xl p-2 lg:p-0 lg:text-3xl 2xl:text-4xl text-white handlee-regular">
            I am a Software Engineer with 2.5 years of work experience. Keen to
            secure a position where there is every oppurtunity to constantly
            learn, grow and deliver. Beyond the realm of coding, I love to bury
            myself in novels or dance. I also try my hand at poetry. And before
            you ask, yes I am a dog person! ✨
          </span>
        </div>
      </div>
    </>
  );
}

export default About;
