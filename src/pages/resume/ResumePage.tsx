import ResumeSection from "./components/ResumeSection.tsx";
import PageLayout from "../../components/PageLayout.tsx";
import ResumeTitle from "./components/ResumeTitle.tsx";
import BulletPoint from "./components/BulletPoint.tsx";
import { HiExternalLink } from "react-icons/hi";

function ResumePage() {
  return (
    <PageLayout
      title="Resume"
      quote="The problem with excuses is, they can always be found"
    >
      <section className="bg-accent text-left p-3 rounded-lg space-y-3 text-sm">
        <div>
          <div className="flex justify-between">
            <h1 className="text-[16px] font-bold">METIN ÖZKAYA</h1>
            <a
              href="/files/Resumé.pdf"
              target="_blank"
              className="hover:text-hover flex"
            >
              PDF
              <HiExternalLink size={18} />
            </a>
          </div>
          <p>Softwareudvikler</p>
        </div>

        <hr />

        <ResumeSection title="RESUMÉ">
          <BulletPoint text="3 års erfaring som selvlært softwareudvikler med udvikling af apps, hjemmesider og databaser." />
          <BulletPoint
            text="Stærk baggrund i objektorienteret programmering og robuste
            softwareløsninger i teams med Python, Flutter og TypeScript. Samt
            erfaring med backend i Go og db-design i PostgreSQL."
          />
        </ResumeSection>

        <ResumeSection title="ERFARING">
          <ResumeTitle title="Software Praktikant, Reportability (Digital Revisor) — Juni 2026 - August 2026" />

          <BulletPoint text="Byggede en Go HTTP-server fra bunden, til at query user data fra MongoDB." />
          <BulletPoint text="Containeriserede dele af backenden med Docker og opsatte CORS for at tilgå API’et." />

          <ResumeTitle title="Software Udvikler, Anzaro Quantum Healing — Juni 2024 - Nu" />

          <BulletPoint
            text="Bygger og vedligeholder virksomhedens egne apps samt
              kundehjemmesider, fra feature-udvikling til drift og brugerfeedback,
              i samarbejde med andre udviklere."
          />
        </ResumeSection>

        <ResumeSection title="PROJEKTER">
          <ResumeTitle
            title="StayWired"
            subtitle="E-handelswebsite, Lead Developer (React, TypeScript)"
            url="https://staywired.dk"
          />
          <BulletPoint
            text="E-handelswebsite med checkout via Pensopay, shipping via
                Shipmondo og deployet på Vercel."
          />
          <BulletPoint
            text="Udviklede admin-system og backend-logik til håndtering af
                produkter, ordrer og brugerdata."
          />

          <ResumeTitle
            title="Full Power Kegels"
            subtitle="App (Flutter)"
            url="https://apps.apple.com/app/id6449595806"
          />
          <BulletPoint text="1,5 år som primær maintainer af produktionsapp." />
          <BulletPoint
            text="Ansvarlig for fejlretning, performance og løbende udvikling af
                nye features."
          />

          <ResumeTitle
            title="Dit Samfund"
            subtitle="App/Website, Lead Developer (React, TypeScript)"
            url="https://apps.apple.com/app/id6760254894"
          />
          <BulletPoint
            text="Byggede AI-augmenteret website, app og admin-dashboard fra
                bunden for moskéer i Danmark."
          />
          <BulletPoint
            text="Håndterer medlemskaber og udrulning af nyheder og events,
                synkroniseret i realtid via Firebase."
          />

          <ResumeTitle
            title="Key Combo Lookup"
            subtitle="Webværktøj & Database (React, PostgreSQL)"
            url="https://KLombe.com"
          />
          <BulletPoint text="Slår op hvordan man skriver et hvilket som helst tegn på ethvert tastaturlayout." />
          <BulletPoint
            text="Designede en normaliseret PostgreSQL-database og Python-parsere
                til dead keys og modifier-lag, med 100+ layouts og 40.000+
                kombinationer. Auto-deploy via Github Actions (CI/CD)."
          />
        </ResumeSection>

        <ResumeSection title="KOMPETENCER">
          <ResumeTitle title="Dart (Flutter)" />
          <BulletPoint
            text="2 års erfaring med udvikling af produktionsklare mobil og web
                apps."
          />

          <ResumeTitle title="Python" />
          <BulletPoint text="2 års webudvikling, backend-logik og oplæring." />
          <ResumeTitle title="TypeScript (React)" />
          <BulletPoint
            text="1 års erfaring med frontend udvikling af moderne
                hjemmesider."
          />

          <ResumeTitle title="Databaser (PostgreSQL, Firebase, MongoDB)" />
          <BulletPoint text="Relationelt databasedesign i PostgreSQL og NoSQL i produktion." />

          <ResumeTitle title="Sprog" />
          <BulletPoint text="Dansk (modersmål), Tyrkisk (modersmål), Engelsk (flydende)." />
        </ResumeSection>
      </section>
    </PageLayout>
  );
}

export default ResumePage;
