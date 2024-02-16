import React from "react";
import { useRef, useState, useEffect } from "react";

function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  const targetRef = useRef(null);

  const socials = [
    { iconUrl: "/logos/github.svg", url: "https://github.com/meshalmali" },
    {
      iconUrl: "/logos/linkedin.svg",
      url: "https://in.linkedin.com/in/shalmali-bhave-601113163",
    },
    {
      iconUrl: "/logos/instagram.svg",
      url: "https://www.instagram.com/shalmalibhave/?target_user_id=35819792784&utm_source=instagram&utm_medium=email&utm_campaign=find_friend_activity_email&click_source=header_profile&__bp=1",
    },
    {
      iconUrl: "/logos/medium.svg",
      url: "https://medium.com/@shalmali.bhave99",
    },
  ];

  useEffect(() => {
    let timeout;

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        clearTimeout(timeout);
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      id="footer-section"
      className="h-full scroll-smooth pb-20 bg-slate-950 relative"
    >
      <div className="absolute top-0 -translate-y-1/2 w-full h-20 md:h-28 lg:h-32 bg-transparent flex justify-center overflow-hidden">
        <div
          ref={targetRef}
          className={`rounded-3xl bg-gradient-to-r from-teal-500 to-sky-400 flex flex-col p-4 md:p-8 ${
            isVisible
              ? "slide-in bg-gradient-to-r from-teal-500 to-sky-400 w-3/4 md:w-1/2 h-full"
              : ""
          }`}
        >
          <span className="text-md md:text-xl lg:text-2xl text-teal-800 playfair-bold">
            Like what you see?
          </span>
          <span className="text-lg md:text-2xl lg:text-4xl text-sky-100 playfair-black -mt-1">
            Let's talk! 💫
          </span>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between px-12">
        <div className="flex flex-col mt-[4.7rem] md:mt-[6rem] lg:mt-[11rem]">
          <span className="text-white mb-3 lg:mb-1 text-3xl md:text-4xl lg:text-5xl playfair-black">
            Get in Touch
          </span>
          <span className="text-white text-md md:text-lg lg:text-xl playfair-normal mb-5 lg:mb-10">
            Drop me a line anytime, whether it's about an amazing work
            opportunity or a captivating book recommendation or anything under
            the sky!
          </span>
          <div className="flex gap-4 lg:gap-6">
            {socials.map((social) => {
              return (
                <>
                  <a
                    href={social.url}
                    target="_blank"
                    className="h-6 w-6 cursor-pointer md:h-10 md:w-10 2xl:w-12 2xl:h-12 flex flex-col rounded-[8px] overflow-hidden"
                  >
                    <div
                      className="bg-no-repeat bg-contain bg-center w-full h-full hover:scale-125 transition ease-in-out delay-150 duration-200"
                      style={{
                        backgroundImage: `url(${social.iconUrl})`,
                      }}
                    ></div>
                  </a>
                </>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center mt-10 lg:mt-[11rem] lg:ml-20">
          <div className="h-40 w-[90%] md:w-[50%] lg:w-[70%] 2xl:w-[50%] lg:h-56 rounded-tl-[35px] rounded-br-[35px] shadow-plain bg-slate-700 flex flex-col items-center justify-center">
            <div
              className="h-10 w-10 mb-5 bg-no-repeat bg-contain bg-center"
              style={{
                backgroundImage: `url("/logos/gmail.svg")`,
              }}
            ></div>
            <span className="text-white text-base md:text-xl playfair-semibold">
              shalmali.bhave99@gmail.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
