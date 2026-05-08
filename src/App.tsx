import { useState, useRef, useEffect } from "react";
import Projects from "./components/projects";
import { motion } from "motion/react";

function App() {
  const [isOpen, setIsopen] = useState(false);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const columnRef = useRef<HTMLDivElement>(null);

  const [buttonX, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);
  const [divX, setDivX] = useState(0);
  const [divTop, setDivTop] = useState(0);
  const [divWidth, setDivWidth] = useState(0);
  const [divHeight, setDivHeight] = useState(0);

  useEffect(() => {
    if (isOpen && columnRef.current && buttonRef.current) {
      const colRect = columnRef.current.getBoundingClientRect();
      const buttonRect = buttonRef.current.getBoundingClientRect();
      setButtonX(buttonRect.right);
      setButtonY(buttonRect.top + buttonRect.height / 2);
      setDivX(colRect.left);
      setDivTop(colRect.top);
      setDivWidth(colRect.width);
      setDivHeight(colRect.height);
    }
  }, [isOpen]);

  return (
    <>
      <section className="relative bg-primary flex justify-center h-screen pt-30">
        <div className="w-full max-w-xl text-left">
          <h1 className=" text-2xl">Metin Özkaya</h1>

          <h2 className=" mt-8 whitespace-normal">
            Desiging Websites. Crafting apps and hoping to impress the folks at
            Reportability.
          </h2>
          <ul className="mt-6  space-y-2">
            <li>
              <button
                ref={buttonRef}
                className="hover:text-blue-300 hover:cursor-pointer"
                onClick={() => {
                  setIsopen(!isOpen);
                }}
              >
                Projects
              </button>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Something Third</a>
            </li>
          </ul>
        </div>
        {isOpen && (
          <svg
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <defs>
              <clipPath id="line-reveal">
                <motion.rect
                  x={buttonX}
                  y={buttonY - 4}
                  height={8}
                  initial={{ width: 0 }}
                  animate={{ width: divX - buttonX }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                />
              </clipPath>
              <mask id="border-mask-top">
                <motion.path
                  d={`M ${divX} ${buttonY} V ${divTop} H ${divX + divWidth} V ${buttonY}`}
                  stroke="white"
                  strokeWidth={6}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </mask>
              <mask id="border-mask-bottom">
                <motion.path
                  d={`M ${divX} ${buttonY} V ${divTop + divHeight} H ${divX + divWidth} V ${buttonY}`}
                  stroke="white"
                  strokeWidth={6}
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 0.2 }}
                />
              </mask>
            </defs>
            <line
              x1={buttonX}
              y1={buttonY}
              x2={divX}
              y2={buttonY}
              stroke="#E5E5E5"
              strokeWidth={2}
              strokeDasharray="6 4"
              clipPath="url(#line-reveal)"
            />
            <path
              d={`M ${divX} ${buttonY} V ${divTop} H ${divX + divWidth} V ${buttonY}`}
              fill="none"
              stroke="#E5E5E5"
              strokeWidth={2}
              strokeDasharray="6 4"
              mask="url(#border-mask-top)"
            />
            <motion.path
              d={`M ${divX} ${buttonY} V ${divTop + divHeight} H ${divX + divWidth} V ${buttonY}`}
              fill="none"
              stroke="#E5E5E5"
              strokeWidth={2}
              strokeDasharray="6 4"
              mask="url(#border-mask-bottom)"
            />
          </svg>
        )}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Projects columnRef={columnRef} />
          </motion.div>
        )}
      </section>
    </>
  );
}

export default App;
