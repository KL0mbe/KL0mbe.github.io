import { useCoordinates } from "../../hooks/useCoordinates";
import { Link, useNavigate } from "react-router-dom";
import MyFooter from "../../components/MyFooter";
import { HiExternalLink } from "react-icons/hi";
import { PiMailboxFill } from "react-icons/pi";
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
        className="relative flex flex-col items-center min-h-screen
        min-[1000px]:flex-row min-[1000px]:items-start min-[1000px]:justify-center 
        max-md:px-8 py-15 md:py-30"
      >
        <div className="w-full max-w-160 text-left">
          <h1 className=" text-2xl">Metin Özkaya</h1>

          <h2 className=" mt-8 whitespace-normal">
            Designing Websites, developing apps and "Hello Worlding" since 2023.
            <br />
            <br />
            I've built and maintained multiple mobile apps, E-commerce websites
            and most importantly of all personal projects. currently developing
            websites for companies, with focus on admin dashboard and database
            integration
            <Link to="/about" className="hover:text-hover">
              ...
            </Link>
          </h2>
          <section
            className="
           flex justify-between mt-10"
          >
            <div className="w-48 min-w-30">
              <button
                // change to link if ref is no longerneeded
                ref={buttonRef}
                className="hover:text-hover hover:cursor-pointer"
                onClick={() => navigate("/projects")}
              >
                <div className="text-left underline">Projects</div>
              </button>
              <div className="mt-6 flex flex-col">
                <div className="min-h-18">
                  <a
                    href="https://apps.apple.com/app/id6449595806"
                    target="_blank"
                    className="underline"
                  >
                    <div className="flex hover:text-hover">
                      Full Power kegels <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p className="mt-2 text-textSecondary ">
                    Excercise app(Maintainer)
                  </p>
                </div>
                <div className="min-h-18">
                  <a
                    href="https://www.staywired.dk"
                    target="_blank"
                    className="underline"
                  >
                    <div className="flex hover:text-hover">
                      StayWired <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p className="text-textSecondary">
                    E-Commerce site from scratch
                  </p>
                </div>
                <div className="min-h-18">
                  <a
                    href="https://github.com/KL0mbe/AudiFile"
                    target="_blank"
                    className="underline"
                  >
                    <div className="flex hover:text-hover">
                      AudiFile <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p className="text-textSecondary">
                    play and edit custom files with full control
                  </p>
                </div>
              </div>
            </div>
            <div className="w-48 min-w-20 flex flex-col space-y-18">
              <Link to="/resume" className="hover:text-hover underline">
                Resume
              </Link>
              <Link to="/about" className="hover:text-hover underline mt-6 ">
                About
              </Link>
            </div>

            <div className="w-48 min-w-30">
              <Link to="/writings" className="hover:text-hover underline">
                Writings
              </Link>
              <div className="mt-6 flex flex-col">
                <a href="#" className="min-h-18">
                  The Tragedy of Not Having Cancer
                </a>
                <a href="#" className="min-h-18">
                  Interacting with absolutely positioned divs
                </a>
                <a href="#" className="min-h-18">
                  macOS Color Picker
                </a>
              </div>
            </div>
          </section>
          {/* <div>
            The content to make someone, anyone the best programmer exists
            freely on the internet for all to access. Improving this craft and
            getting as close to achieving that goal, is the journey I've decided
            to embark upon.
          </div> */}
          <section className="mt-10">
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
      <MyFooter quote="So the day started poorly, thats no excuse to end it as such." />
    </>
  );
}

export default Home;
