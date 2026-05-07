// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <section className="bg-primary flex justify-center h-screen pt-30">
        <div className="w-full max-w-xl text-left">
          <h1 className="text-textPrimary text-2xl">Metin Özkaya</h1>

          <h2 className="text-textPrimary mt-8 whitespace-normal">
            Desiging Websites. Crafting apps and hoping to impress the folks at
            Reportability.
          </h2>
          <ul className="mt-6 text-textPrimary space-y-2">
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
            <li>
              <a href="#">Something Third</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
