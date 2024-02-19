import React, { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (section) => {
    setShowMenu(false);
    const sectionToScroll = document.getElementById(section);
    const offset = sectionToScroll.offsetTop - 64;

    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="fixed h-16 p-4 lg:h-20 lg:py-6 lg:px-12 2xl:h-21.5 2xl:py-9 2xl:px-12 w-full bg-transparent backdrop-blur-md z-50 flex justify-between items-center">
        <a
          className="flex"
          href="https://in.linkedin.com/in/shalmali-bhave-601113163"
          target="_blank"
        >
          <span className="handlee-semibold text-white text-lg lg:text-2xl 2xl:text-4xl">
            Shalmali Bhave
          </span>
        </a>
        <div
          onClick={() => setShowMenu(!showMenu)}
          className="w-8 h-8 lg:hidden bg-no-repeat bg-center bg-cover cursor-pointer"
          style={{
            backgroundImage: `${
              !showMenu
                ? `url("/logos/hamburger.svg")`
                : `url("/logos/close.svg")`
            }`,
          }}
        ></div>
        {/* *******Larger Screens***** */}
        <div className="gap-14 text-white playfair-black text-xl hidden lg:flex">
          <a
            className="cursor-pointer"
            onClick={() => handleClick("about-section")}
          >
            About
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("projects-section")}
          >
            My Projects
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("skills-section")}
          >
            My Skills
          </a>
          <a
            className="cursor-pointer"
            onClick={() => handleClick("footer-section")}
          >
            Let's Connect
          </a>
        </div>
      </div>
      {showMenu && (
        <div className="w-full h-full left-0 top-16 fixed menu-slide bg-white bg-opacity-10 backdrop-blur-lg z-50 flex flex-col items-center justify-start text-white playfair-black text-sm gap-8 pt-10">
          <a
            className="border rounded-xl px-3 py-1 cursor-pointer"
            onClick={() => handleClick("about-section")}
          >
            About
          </a>
          <a
            className="border rounded-xl px-3 py-1 cursor-pointer"
            onClick={() => handleClick("projects-section")}
          >
            My Projects
          </a>
          <a
            className="border rounded-xl px-3 py-1 cursor-pointer"
            onClick={() => handleClick("skills-section")}
          >
            My Skills
          </a>
          <a
            className="border rounded-xl px-3 py-1 cursor-pointer"
            onClick={() => handleClick("footer-section")}
          >
            Let's Connect
          </a>
        </div>
      )}
    </>
  );
}

export default Navbar;
