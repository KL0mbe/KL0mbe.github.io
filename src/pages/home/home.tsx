import MyFooter from "../../components/MyFooter";
import { HiExternalLink } from "react-icons/hi";
import { PiMailboxFill } from "react-icons/pi";
import { RxGithubLogo } from "react-icons/rx";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section
        // probably change to the grid pagelayout
        className=" flex min-h-screen justify-center max-md:px-4 py-15 md:py-30"
      >
        <div className="w-full max-w-160 text-left">
          <h1 className=" text-2xl">Metin Özkaya</h1>

          <h2 className=" mt-8 whitespace-normal">
            Designing Websites, developing apps and Hello Worlding since 2023.
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
            <div className="w-74 min-w-30">
              <Link to="/projects" className="hover:text-hover">
                <div className="text-left underline">Projects</div>
              </Link>
              <div className="mt-6 flex flex-col [&_p]:text-textSecondary">
                <div className="min-h-18">
                  <a
                    href="https://apps.apple.com/app/id6449595806"
                    target="_blank"
                  >
                    <div className="flex underline hover:text-hover">
                      Full Power kegels <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p>Excercise app(Maintainer)</p>
                </div>
                <div className="min-h-18">
                  <a href="https://www.staywired.dk" target="_blank">
                    <div className="flex underline hover:text-hover">
                      StayWired <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p>E-Commerce site from scratch</p>
                </div>
                <div className="min-h-18">
                  <a href="https://github.com/KL0mbe/AudiFile" target="_blank">
                    <div className="flex underline hover:text-hover">
                      AudiFile <HiExternalLink size={18} />
                    </div>
                  </a>
                  <p>play and edit custom files with full control</p>
                </div>
              </div>
            </div>

            <div className="w-74 min-w-30">
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
          <div className="mt-4">
            You can read more{" "}
            <Link to="/about" className="hover:text-hover underline ">
              about
            </Link>{" "}
            me or check out my{" "}
            <Link to="/resume" className="hover:text-hover underline">
              resume
            </Link>
          </div>
          <section className="mt-10 flex gap-4">
            <p>Reach me at</p>
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
          </section>
        </div>
      </section>
      <MyFooter quote="So the day started poorly, thats no excuse to end it as such." />
    </>
  );
}

export default Home;
