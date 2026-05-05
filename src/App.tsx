import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section
        className="flex grow flex-col gap-4.5 lg:gap-6
        pt-8 px-5 pb-6 lg:p-0 bg-[#16171d]
      place-content-center place-items-center"
      >
        <div className="hero relative">
          <img
            src={heroImg}
            className="mx-auto inset-x-0 w-42.5 relative "
            width="170"
            height="179"
            alt=""
          />
          <img
            src={reactLogo}
            className="framework mx-auto inset-x-0 absolute top-8.5 h-7 z-1
            [transform:perspective(2000px)_rotateZ(300deg)_rotateX(44deg)_rotateY(39deg)_scale(1.4)]"
            alt="React logo"
          />
          <img
            src={viteLogo}
            className="vite mx-auto inset-x-0 absolute top-26.75 h-6.5 w-auto 
            [transform:perspective(2000px)_rotateZ(300deg)_rotateX(40deg)_rotateY(39deg)_scale(0.8)]"
            alt="Vite logo"
          />
        </div>
        <div>
          <h1
            className="font-medium font-sans text-4xl lg:text-5xl
          m-5 lg:m-8 tracking-[-1.68px]
          text-[#f3f4f6]"
          >
            Hello World
          </h1>
        </div>
        <button
          type="button"
          className="text-base mb-6 py-1.25 px-2.5
          text-[#c084fc] bg-[rgba(192,132,252,0.15)] font-sans
          rounded-md border-2 border-transparent tracking-wide
          transition-colors duration-300 hover:border-[rgba(192,132,252,0.5)]
          focus-visible:outline-2 focus-visible:outline-[#c084fc] focus-visible:outline-offset-2"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
    </>
  );
}

export default App;
