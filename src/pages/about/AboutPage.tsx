import PageLayout from "../../components/PageLayout";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <PageLayout
        title="About"
        quote="They may travel distant, but past mistakes carry permanent scars"
      >
        <div className="mt-8 text-left">
          <p>
            Designing Websites, developing apps and Hello Worlding since 2023.
            <br />
            <br />
            I've built and maintained multiple mobile apps, E-commerce websites
            and most importantly of all personal projects. currently developing
            websites for companies, with focus on admin dashboard and database
            integration
            <br />
            <br />I started off self taught through small games and apps. just
            out of pure curiosity for how these complex machines worked. ill
            never forget the first time I wrote a hello world script and couldnt
            help but wonder what journey the things I typed took to end up being
            outputted in the terminal. how did that little screen know to do
            that certain thing when I wrote Print("Hello World") from that point
            onward I was hooked and as I was very much so "not" hooked with
            school I dropped out not long after and figured id just keep working
            at my job and keep working on building this craft into a thing I
            could do for a living.
            <br />
            <br />
            I've mainly been working on the frontend but my fascination lies
            with the back, compilers, interpreters, terminal and all things
            parsers and compilers are what keeps me passionate for this
            wonderful industry and that should hopefully be reflected by my
            choice of{" "}
            <Link
              to="/projects"
              state={{ fromPage: "/about" }}
              className="hover:text-hover underline"
            >
              personal and professional projects
            </Link>
            .
            <br />
            <br />
            Outside of programming i enjoy tinkering and working with my hands,
            woodworking in particular. im an avid runner and lucky enough to
            enjoy reading.
            {/*The content to make someone, anyone the best programmer exists
            freely on the internet for all to access. Improving this craft and
            getting as close to achieving that goal, is the journey I've decided
            to embark upon. */}
          </p>
        </div>
      </PageLayout>
    </>
  );
}

export default AboutPage;
