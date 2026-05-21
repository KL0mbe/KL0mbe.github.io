import ResumeSection from "./components/ResumeSection.tsx";
import PageLayout from "../../components/PageLayout.tsx";
import BulletPoint from "./components/BulletPoint.tsx";
import ResumeTitle from "./components/ResumeTitle.tsx";
import { HiExternalLink } from "react-icons/hi";

function Resume() {
  return (
    <PageLayout title="Resume">
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
          <p>Software Praktikant</p>
        </div>

        <hr />

        <ResumeSection title="RESUMÉ">
          <BulletPoint text="2,5 års erfaring med udvikling af apps og hjemmesider." />
          <BulletPoint
            text="Stærk baggrund i objektorienteret programmering og udvikling af
            robuste softwareløsninger i teams med Flutter, Python og TypeScript."
          />
        </ResumeSection>

        <ResumeSection title="ERFARING">
          <ResumeTitle title="Software Praktikant, Anzaro Quantum Healing — Juni 2024 - Nu" />

          <BulletPoint
            text="Udvikler og vedligeholder virksomhedens egne apps og hjemmesider
              for kunder i tæt samarbejde med andre udviklere."
          />
          <BulletPoint
            text="
              Deltager i planlægning, implementering og vedligeholdelse af nye
              funktioner."
          />
          <BulletPoint
            text="Arbejder med optimering og håndtering af brugerfeedback i
              produktionsmiljø."
          />
          <BulletPoint
            text="Vant til at arbejde i teamstruktur med sprint lignende
              arbejdsgange og løbende feedback."
          />
        </ResumeSection>

        <ResumeSection title="PROJEKTER">
          <ResumeTitle
            title="StayWired"
            subtitle="E-handleswebsite"
            url="https://staywired.dk"
          />
          <BulletPoint
            text="Fuldt E-handelswebsite med checkout via Pensopay og shipping via
                Shipmondo."
          />
          <BulletPoint
            text="Udviklede admin system og backend logik til håndtering af
                produkter, ordrer og brugerdata."
          />

          <ResumeTitle
            title="Ikast Moske"
            subtitle="Website & medlemssystem"
            url="https://ikastMoske.dk"
          />
          <BulletPoint text="Website til moskeen med backend i Supabase." />
          <BulletPoint
            text="Brugerstyringssystem til håndtering af betalende medlemmer og
                bestyrelse."
          />

          <ResumeTitle
            title="Full Power Kegels"
            subtitle="App (Flutter)"
            url="https://apps.apple.com/app/id6449595806"
          />
          <BulletPoint text="Primær maintainer af produktionsapp" />
          <BulletPoint
            text="Ansvarlig for fejlretning, performance og løbende udvikling af
                nye features."
          />

          <ResumeTitle
            title="VibeAlign"
            subtitle="App (Flutter)"
            url="https://apps.apple.com/app/id6746861813"
          />
          <BulletPoint text="Bygget appen fra bunden." />
          <BulletPoint text="Udviklede appens struktur og primære funktioner." />
        </ResumeSection>

        <ResumeSection title="KOMPETENCER">
          <ResumeTitle title="Dart (Flutter)" />
          <BulletPoint
            text="2 års erfaring med udvikling af produktionsklare mobil og web
                apps."
          />

          <ResumeTitle title="Python (Django)" />
          <BulletPoint text="1 års webudvikling, backend logik og oplæring." />
          <ResumeTitle title="TypeScript (React)" />
          <BulletPoint
            text="6 måneders erfaring med frontend udvikling af moderne
                hjemmesider."
          />

          <ResumeTitle title="Sprog" />
          <BulletPoint text="Dansk (modersmål), Engelsk (flydende), Tyrkisk (flydende)." />
        </ResumeSection>
      </section>
    </PageLayout>
  );
}

export default Resume;
