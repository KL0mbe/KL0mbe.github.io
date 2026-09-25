import ResumeSection from "./components/ResumeSection.tsx";
import PageLayout from "../../components/PageLayout.tsx";
import ResumeTitle from "./components/ResumeTitle.tsx";
import BulletPoint from "./components/BulletPoint.tsx";
import { HiExternalLink } from "react-icons/hi";
import { useState } from "react";
import { Resume, type Entry } from "./components/Resume.tsx";

function ResumePage() {
  const [lang, setLang] = useState<"da" | "en">("da");

  var resume = Resume[lang];

  const sections: [string, Entry[]][] = [
    [resume.experienceTitle, resume.experience],
    [resume.projectsTitle, resume.projects],
    [resume.skillsTitle, resume.skills],
  ];

  return (
    <PageLayout
      title="Resume"
      quote="The problem with excuses is, they can always be found"
    >
      <div className="flex gap-1 justify-end mr-1 text-sm">
        <div
          className={`hover:text-hover hover:cursor-pointer ${lang === "en" ? "text-textPrimary" : "text-textSecondary"}`}
          onClick={() => setLang("en")}
        >
          EN
        </div>
        |
        <div
          className={`hover:text-hover hover:cursor-pointer ${lang === "da" ? "text-textPrimary" : "text-textSecondary"}`}
          onClick={() => setLang("da")}
        >
          DA
        </div>
      </div>
      <section className="bg-accent text-left p-3 rounded-lg space-y-3 text-sm">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">METIN ÖZKAYA</h1>
            <a
              href={resume.pdf}
              target="_blank"
              className="hover:text-hover flex"
            >
              PDF
              <HiExternalLink size={18} />
            </a>
          </div>
          <p>{resume.jobTitle}</p>
        </div>
        <hr />

        <ResumeSection title={resume.resumeTitle}>
          {resume.resume.map((text) => (
            <BulletPoint text={text} />
          ))}
        </ResumeSection>
        {sections.map(([title, entries]) => (
          <ResumeSection title={title}>
            {entries.map((entry) => (
              <>
                <ResumeTitle
                  title={entry.title}
                  subtitle={entry.subtitle}
                  url={entry.url}
                />
                {entry.bullets.map((text) => (
                  <BulletPoint text={text} />
                ))}
              </>
            ))}
          </ResumeSection>
        ))}
      </section>
    </PageLayout>
  );
}

export default ResumePage;
