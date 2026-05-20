import { useCoordinates } from "../../hooks/useCoordinates";
import { PiMailboxFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import PacoClock from "../../components/PacoClock";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

function Home() {
  const [isOpen, _setIsopen] = useState(false);
  const navigate = useNavigate();
  const {
    buttonRef,
    // columnRef,
    // buttonX,
    // buttonY,
    // divX,
    // divTop,
    // divWidth,
    // divHeight,
  } = useCoordinates(isOpen);

  // function handleClick() {
  //   // alter to md
  //   if (window.innerWidth >= 1000) {
  //     setIsopen(!isOpen);
  //   } else {
  //     navigate("/projects");
  //   }
  // }

  return (
    <>
      <section
        // probably change to the grid pagelayout
        className="relative flex flex-col items-center h-screen
        min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:justify-center 
        max-md:px-8 py-15 md:py-30"
      >
        <div className="w-full max-w-160 text-left">
          <h1 className=" text-2xl">Metin Özkaya</h1>

          <h2 className=" mt-8 whitespace-normal">
            Programmer aplenty. Desiging Websites, developing apps and improving
            this craft for 2.5 years also currently hoping to impress the good
            folks at Reportability.
            <br />
            <br />
            Self taught through small games and apps, which landed me my first
            internship, that lead to my first proper gig. The work of which you
            can see below.
          </h2>
          <section
            className="
           flex justify-between
           mt-10  space-y-2 h-70"
          >
            <div className="w-48">
              <button
                ref={buttonRef}
                className="hover:text-hover hover:cursor-pointer"
                onClick={() => {
                  navigate("/projects");
                }}
              >
                <div className="text-left underline">Projects</div>
              </button>
              <div className="mt-6"></div>
            </div>
            <div className="w-48">
              <Link to="/resume" className="hover:text-hover underline">
                Resume
              </Link>
            </div>
            <div className="w-48">
              <Link to="/writings" className="hover:text-hover underline">
                Writings
              </Link>
            </div>
          </section>
          <section>
            <h2>Connect</h2>
            <div className="mt-2 flex gap-4">
              <p>You can reach me at</p>
              <a href="https://github.com/KL0mbe" target="_blank">
                <RxGithubLogo size={22} className="hover:text-hover" />
              </a>

              <a
                href="https://www.linkedin.com/in/metin-%C3%B6zkaya-184603366/"
                target="_blank"
              >
                <FaLinkedin size={22} className="hover:text-hover" />
              </a>

              <a href="mailto:hello@klombe.com" className="underline">
                <PiMailboxFill size={22} className="hover:text-hover" />
              </a>
            </div>
          </section>
        </div>

        {/* alter to md */}
        {/* {isOpen && window.innerWidth >= 1000 && (
          <ProjectsConnector
            {...{ buttonX, buttonY, divX, divTop, divWidth, divHeight }}
          />
        )}
        {isOpen && <Projects columnRef={columnRef} />} */}
      </section>
      <footer className="border-t border-secondary text-textSecondary text-sm flex justify-center ">
        <div className="flex justify-between h-12 items-center w-160 mx-8">
          <p className="text-left">
            So the day started poorly, thats no excuse to end it as such.
          </p>
          <div className="flex gap-2 items-center">
            2026
            <PacoClock />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
