import { TbArrowBackUp } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

type Props = {
  title: string;
  buttonText?: string;
  children?: React.ReactNode;
};

function PageLayout({ title, buttonText, children }: Props) {
  const navigate = useNavigate();

  return (
    <main className="w-full px-4 py-18 md:py-32">
      <div
        className="mx-auto max-w-5xl gap-x-2
          grid max-md:grid-cols-1
          grid-cols-[minmax(max-content,1fr)_640px_minmax(0,1fr)]"
      >
        {/* LEFT COLUMN */}
        <nav className="h-fit md:sticky md:top-32">
          <button
            onClick={() => navigate("/")}
            className="flex items-center w-17 gap-2
              hover:text-hover cursor-pointer"
          >
            <TbArrowBackUp size={14} />
            <em>{buttonText ? buttonText : "Home"}</em>
          </button>
        </nav>

        {/* CENTER COLUMN */}
        <section className="min-w-0 w-full max-md:pt-12">
          <h1 className=" font-semibold mb-6 text-left text-[18px]">{title}</h1>
          {children}
        </section>
      </div>
    </main>
  );
}

export default PageLayout;
