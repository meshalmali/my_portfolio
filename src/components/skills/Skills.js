import React from "react";

function Skills() {
  const skills = [
    {
      name: "React",
      url: "/logos/react.svg",
    },
    {
      name: "HTML5",
      url: "/logos/html.png",
    },
    {
      name: "JS",
      url: "/logos/js.png",
    },
    {
      name: "CSS3",
      url: "/logos/css-3.svg",
    },
    {
      name: "Tailwind",
      url: "/logos/tailwind.png",
    },
    {
      name: "Redux",
      url: "/logos/redux.png",
    },
    {
      name: "Java",
      url: "/logos/java.png",
    },
    {
      name: "MySQL",
      url: "/logos/mysql-icon.svg",
    },
    {
      name: "Firebase",
      url: "/logos/firebase.png",
    },
    {
      name: "MUI",
      url: "/logos/mui.svg",
    },
    {
      name: "Git",
      url: "/logos/git.png",
    },
    {
      name: "Bitbucket",
      url: "/logos/bitbucket.png",
    },
  ];
  return (
    <div
      id="skills-section"
      className="h-full bg-slate-900 flex flex-col gap-8 md:gap-20 2xl:gap-36 items-center p-8 md:py-20 md:px-28 2xl:py-36 2xl:px-0"
    >
      <span className="text-3xl md:text-4xl lg:text-5xl text-center playfair-black text-white">
        My Current Skills
      </span>
      <div className="flex flex-wrap justify-center lg:max-w-[72rem] 2xl:max-w-[108.62rem] w-full gap-6 md:gap-12 lg:gap-16 px-8 mb-14">
        {skills.map((skill) => {
          return (
            <>
              <div className="h-14 w-14 pt-1 lg:pt-2 2xl:pt-4 md:h-24 md:w-24 lg:w-32 lg:h-32 2xl:w-32 2xl:h-32 flex flex-col rounded-[8px] shadow-md lg:shadow-lg shadow-gray-500 lg:shadow-gray-500 hover:shadow-teal-800 bg-slate-700 overflow-hidden">
                <div
                  className="bg-no-repeat bg-contain bg-center w-full h-full hover:scale-125 transition ease-in-out delay-150 duration-200"
                  style={{
                    backgroundImage: `url(${skill.url})`,
                  }}
                ></div>
                <div className="mt-1 mb-[0.0625rem] lg:mt-2 lg:mb-1 playfair-light 2xl:mb-3 text-white text-xs md:text-sm lg:text-base 2xl:text-xl text-center">
                  {skill.name}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
