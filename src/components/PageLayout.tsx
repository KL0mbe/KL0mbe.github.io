import { useLocation, useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
import MyFooter from "./MyFooter";

type Props = {
  title: string;
  children?: React.ReactNode;
  quote: string;
};

function PageLayout({ title, children, quote }: Props) {
  const navigate = useNavigate();

  const location = useLocation();
  const fromPage = location.state?.fromPage ?? "/";

  return (
    <>
      <main className="w-full px-4 py-16 md:py-32 min-h-screen">
        <div
          className="mx-auto max-w-5xl gap-x-2
          grid max-md:grid-cols-1
          grid-cols-[minmax(max-content,1fr)_640px_minmax(0,1fr)]"
        >
          {/* LEFT COLUMN */}
          <nav className="h-fit md:sticky md:top-32">
            <button
              onClick={() => navigate(fromPage)}
              className="flex items-center gap-2
              hover:text-hover cursor-pointer"
            >
              <TbArrowBackUp size={14} />
              <em>
                {fromPage == "/"
                  ? "Home"
                  : fromPage.slice(1, 2).toUpperCase() + fromPage.slice(2)}
              </em>
            </button>
          </nav>

          {/* CENTER COLUMN */}
          <section className="min-w-0 w-full max-md:pt-12">
            <h1 className=" font-semibold mb-6 text-left text-[18px]">
              {title}
            </h1>
            {children}
          </section>
        </div>
      </main>
      <MyFooter quote={quote} />
    </>
  );
}

export default PageLayout;
