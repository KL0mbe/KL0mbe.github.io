import { type RefObject } from "react";

function Projects({
  columnRef,
}: {
  columnRef: RefObject<HTMLDivElement | null>;
}) {
  return (
    <>
      <div
        ref={columnRef}
        className="absolute top-30 right-15  flex flex-col  h-100 w-100 overflow-y-scroll [scrollbar-width:none] text-left p-2"
      >
        <h1>Hello World</h1>
        <h2>Hello Moon </h2>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit cumque
          rerum est aliquid ipsam dicta minus magni accusantium rem sapiente!
          Accusamus nostrum et odio consequuntur ducimus facere mollitia
          aspernatur itaque.
        </h2>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sint
          maiores architecto ea blanditiis ex eos animi. Molestiae, dolorem,
          laborum alias eum inventore culpa dolor officia repudiandae placeat
          doloribus explicabo.
        </h1>
        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo mollitia
          iste labore cumque impedit, ab quis debitis commodi dolorem, neque,
          deserunt ex quas! Ipsam mollitia dignissimos reiciendis qui ut
          assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Fugiat reiciendis dolorum itaque quaerat deserunt recusandae id nulla
          magnam, illum aut rem molestias corporis quo beatae culpa maiores
          laudantium mollitia quia.
        </h1>
      </div>
    </>
  );
}

export default Projects;
