import React from "react";

function Projects() {
  const projects = [
    {
      name: "Noogle",
      description:
        "A Google clone written in React using Context API, Material UI and Google's custom search API",
      url: "/projects/noogle.png",
      projectUrl: "https://clone-806c5.web.app/",
    },
    {
      name: "Let's Chat",
      description:
        "A completely responsive Chat Application written in React using Context API and realtime database configured with Firestore.",
      url: "/projects/chat.png",
      projectUrl: "https://chat-application-e0f03.web.app/",
    },
  ];
  return (
    <div
      id="projects-section"
      className="h-full bg-slate-800 flex flex-col gap-8 md:gap-14 lg:gap-16 2xl:gap-24 items-center p-8 md:py-14 lg:py-16 md:px-28 2xl:py-24 2xl:px-0"
    >
      <span className="text-3xl md:text-4xl 2xl:text-5xl text-center playfair-black text-white">
        Check out some of my Projects
      </span>
      <div className="flex flex-col md:items-center lg:flex-row lg:flex-wrap lg:justify-center lg:max-w-[72rem] 2xl:max-w-[80.62rem] w-full gap-6 md:gap-12 lg:gap-20 2xl:gap-28 px-8">
        {projects.map((project) => {
          return (
            <>
              <div className="h-60 w-full md:max-w-96 md:h-80 lg:w-80 lg:h-96 2xl:max-w-[22.75rem] 2xl:w-[22.75rem] 2xl:h-[25rem] flex flex-col rounded-[35px] md:rounded-[50px] shadow-right bg-slate-700 overflow-hidden">
                <a
                  href={project.projectUrl}
                  target="_blank"
                  className="h-4/6 w-full overflow-hidden relative"
                >
                  <div
                    className="bg-no-repeat bg-cover bg-center w-full h-full hover:scale-125 transition ease-in-out delay-150 duration-200"
                    style={{
                      backgroundImage: `url(${project.url})`,
                    }}
                  ></div>
                  <div className="absolute shine-recurring bg-gradient-to-r from-teal-700 to-sky-700 bottom-0 text-white playfair-semibold text-base md:2xl lg:text-2xl 2xl:text-3xl p-1 2xl:p-3 rounded-t-lg">
                    {project.name}
                  </div>
                </a>
                <span className="p-4 2xl:p-8 text-sm md:text-xl lg:text-xl 2xl:text-2xl font-normal w-full text-white">
                  {project.description}
                </span>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
