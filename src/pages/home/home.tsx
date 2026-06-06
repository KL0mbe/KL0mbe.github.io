import MyFooter from "../../components/MyFooter";
import { PiMailboxFill } from "react-icons/pi";
import { RxGithubLogo } from "react-icons/rx";
import HomeCard from "./components/HomeCard";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className=" flex min-h-screen justify-center max-md:px-4 py-15 md:py-30">
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
                <div className="text-left underline mb-6 flex flex-col">
                  Projects
                </div>
              </Link>

              <HomeCard
                title="Full Power Kegels"
                description="Kegel Excercise app (Maintainer)"
                url="https://apps.apple.com/app/id6449595806"
              />
              <HomeCard
                title="StayWired"
                description="E-Commerce site from scratch"
                url="https://www.staywired.dk"
              />
              <HomeCard
                title="AudiFile"
                description="play and edit custom files with full control"
                url="https://github.com/KL0mbe/AudiFile"
              />
            </div>

            <div className="w-74 min-w-30">
              <Link to="/writings" className="hover:text-hover underline">
                Writings
              </Link>
              <div className="mt-6 flex flex-col">
                <Link
                  to="/writings/the-value-in-ripping-someone-off"
                  className="min-h-18 hover:text-hover underline"
                >
                  The Value in Ripping Someone Off
                </Link>
                <Link
                  to="/writings"
                  className="min-h-18 hover:text-hover underline"
                >
                  All Writings
                </Link>
              </div>
            </div>
          </section>
          <div className="mt-4">
            You can read more{" "}
            <Link to="/about" className="hover:text-hover underline">
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
