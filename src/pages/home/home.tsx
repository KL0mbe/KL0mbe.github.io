import ProjectsConnector from "./components/ProjectConnector";
import { useCoordinates } from "../../hooks/useCoordinates";
import { Link, useNavigate } from "react-router-dom";
import Projects from "./components/Projects";
import { useState } from "react";

function Home() {
  const [isOpen, setIsopen] = useState(false);
  const navigate = useNavigate();
  const {
    buttonRef,
    columnRef,
    buttonX,
    buttonY,
    divX,
    divTop,
    divWidth,
    divHeight,
  } = useCoordinates(isOpen);

  function handleClick() {
    // alter to md
    if (window.innerWidth >= 1000) {
      setIsopen(!isOpen);
    } else {
      navigate("/projects");
    }
  }

  return (
    <>
      <section
        className="relative flex flex-col min-[1000px]:flex-row 
      min-[1000px]:items-start items-center min-[1000px]:justify-center h-screen pt-30"
      >
        <div className="w-full max-w-160 text-left">
          <h1 className=" text-2xl">Metin Özkaya</h1>

          <h2 className=" mt-8 whitespace-normal">
            Desiging Websites. Crafting apps for 2.5 years and hoping to impress
            the good folks at Reportability.
          </h2>
          <ul className="mt-6  space-y-2">
            <li>
              <button
                ref={buttonRef}
                className="hover:text-hover hover:cursor-pointer"
                onClick={() => {
                  navigate("/projects");
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <Link to="/resume" className="hover:text-hover">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/writings" className="hover:text-hover">
                Writings
              </Link>
            </li>
          </ul>
        </div>
        {/* alter to md */}
        {/* {isOpen && window.innerWidth >= 1000 && (
          <ProjectsConnector
            {...{ buttonX, buttonY, divX, divTop, divWidth, divHeight }}
          />
        )} */}
        {/* {isOpen && <Projects columnRef={columnRef} />} */}
      </section>
    </>
  );
}

export default Home;
