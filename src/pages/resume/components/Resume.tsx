export type Entry = {
  title: string;
  subtitle?: string;
  url?: string;
  bullets: string[];
};

export const Resume = {
  da: {
    pdf: "/files/Resumé.pdf",
    jobTitle: "Softwareudvikler",
    resumeTitle: "RESUMÉ",
    resume: [
      "3 års erfaring som selvlært softwareudvikler med udvikling af apps, hjemmesider og databaser.",
      "Stærk baggrund i OOP og robuste softwareløsninger med Python, TypeScript og Next.js, samt backend i Node, integration af eksterne API’er (OpenAI, Anthropic) og db-design i PostgreSQL.",
    ],
    experienceTitle: "ERFARING",
    experience: [
      {
        title:
          "Software Praktikant, Reportability (Digital Revisor) — Juni 2026 - August 2026",
        bullets: [
          "Byggede en Go HTTP-server fra bunden, til at query user data fra MongoDB.",
          "Containeriserede dele af backenden med Docker og opsatte CORS for at tilgå API’et.",
        ],
      },
      {
        title: "Software Udvikler, Anzaro Quantum Healing — Juni 2024 - Nu",
        bullets: [
          "Bygger og vedligeholder virksomhedens egne apps samt kundehjemmesider, fra feature-udvikling til drift og brugerfeedback, i samarbejde med andre udviklere.",
        ],
      },
    ],
    projectsTitle: "PROJEKTER",
    projects: [
      {
        title: "VibeAlign",
        subtitle: "App, Developer & Maintainer (Flutter)",
        url: "https://apps.apple.com/app/id6746861813",
        bullets: [
          "Byggede fra bunden en AI-app der genererer personligt indhold pr. bruger via OpenAI og Anthropic API'er, med fallback mellem modellerne ved forbrugsgrænser.",
          "Reducerede token-forbrug og cachede daglige svar for at skære API-kald og omkostninger ned.",
        ],
      },
      {
        title: "Dit Samfund",
        subtitle: "App/Website, Lead Dev (React, TypeScript)",
        url: "https://apps.apple.com/app/id6760254894",
        bullets: [
          "Byggede AI-augmenteret website, app og admin-dashboard fra bunden.",
          "Byggede backend i TypeScript på Firebase Cloud Functions og Firestore med realtidssync.",
        ],
      },
      {
        title: "Ikast Fatih Camii",
        subtitle: "Website & Dashboard, Lead Developer (React, Supabase)",
        url: "https://ikastmoske.dk",
        bullets: [
          "Importerede og parsede medlemsdata til et dashboard der sporer medlemsbetalinger.",
          "Byggede en live skærmvisning der viser opdateret data fra databasen i realtid på fysiske skærme.",
        ],
      },
      {
        title: "Key Combo Lookup",
        subtitle: "Webværktøj & Database (React, PostgreSQL)",
        url: "https://KLombe.com/keyboards",
        bullets: [
          "Slår op hvordan man skriver et hvilket som helst tegn på ethvert tastaturlayout.",
          "Normaliseret PostgreSQL-database og Python-parsere til 100+ layouts og 40.000+ kombinationer. Auto-deploy via Github Actions (CI/CD).",
        ],
      },
    ],
    skillsTitle: "KOMPETENCER",
    skills: [
      {
        title: "Dart (Flutter)",
        bullets: [
          "2 års erfaring med udvikling af produktionsklare mobil og web apps.",
        ],
      },
      {
        title: "Python",
        bullets: [
          "2 års webudvikling, backend-logik og parsing af strukturerede data.",
        ],
      },
      {
        title: "TypeScript (React, Next.js, Node)",
        bullets: ["1 års erfaring med frontend og backend udvikling."],
      },
      {
        title: "Databaser (PostgreSQL, Supabase, Firebase, MongoDB)",
        bullets: [
          "Relationelt databasedesign i PostgreSQL og NoSQL i produktion.",
        ],
      },
      {
        title: "Sprog",
        bullets: [
          "Dansk (modersmål), Tyrkisk (modersmål), Engelsk (flydende).",
        ],
      },
    ],
  },
  en: {
    pdf: "/files/Resume English.pdf",
    jobTitle: "Software Developer",
    resumeTitle: "RESUME",
    resume: [
      "3 years of experience as a self-taught developer, building apps, websites and databases.",
      "Strong OOP and robust software solutions with Python, TypeScript and Next.js, plus backend in Node, external API integration (OpenAI, Anthropic) and db design in PostgreSQL.",
    ],
    experienceTitle: "EXPERIENCE",
    experience: [
      {
        title:
          "Software Intern, Reportability (Digital Revisor) — June 2026 - August 2026",
        bullets: [
          "Built a Go HTTP server from scratch, to query user data from MongoDB.",
          "Containerised parts of the backend with Docker and set up CORS to access the API.",
        ],
      },
      {
        title: "Software Developer, Anzaro Quantum Healing — June 2024 - Now",
        bullets: [
          "Building and maintaining the companies own apps as well as client websites, from feature development to maintenance and user feedback, in cooperation with other developers.",
        ],
      },
    ],
    projectsTitle: "PROJECTS",
    projects: [
      {
        title: "VibeAlign",
        subtitle: "App, Developer & Maintainer (Flutter)",
        url: "https://apps.apple.com/app/id6746861813",
        bullets: [
          "Built an AI app from scratch, generating personalised content per user via the OpenAI and Anthropic APIs, with fallback between the models on usage limits.",
          "Reduced token usage and cached daily responses to cut API calls and cost.",
        ],
      },
      {
        title: "Dit Samfund",
        subtitle: "App/Website, Lead Dev (React, TypeScript)",
        url: "https://apps.apple.com/app/id6760254894",
        bullets: [
          "Built an AI-augmented website, app and admin dashboard from scratch.",
          "Built the backend in TypeScript on Firebase Cloud Functions and Firestore with real-time sync.",
        ],
      },
      {
        title: "Ikast Fatih Camii",
        subtitle: "Website & Dashboard, Lead Developer (React, Supabase)",
        url: "https://ikastmoske.dk",
        bullets: [
          "Imported and parsed member data into a dashboard tracking member payments.",
          "Built a live display showing real-time data from the db on physical screens.",
        ],
      },
      {
        title: "Key Combo Lookup",
        subtitle: "Web Tool & Database (React, PostgreSQL)",
        url: "https://KLombe.com/keyboards",
        bullets: [
          "Lookup for how to type any given character on any given keyboard layout.",
          "Normalised PostgreSQL database and Python parsers for 100+ layouts and 40,000+ combinations. Auto-deploy via Github Actions (CI/CD).",
        ],
      },
    ],
    skillsTitle: "COMPETENCIES",
    skills: [
      {
        title: "Dart (Flutter)",
        bullets: [
          "2 years of experience building production ready mobile and web apps.",
        ],
      },
      {
        title: "Python",
        bullets: [
          "2 years of web development, backend logic and parsing structured data.",
        ],
      },
      {
        title: "TypeScript (React, Next.js, Node)",
        bullets: [
          "1 year of experience with frontend and backend development.",
        ],
      },
      {
        title: "Databases (PostgreSQL, Supabase, Firebase, MongoDB)",
        bullets: [
          "Relational database design in PostgreSQL and noSQL in production.",
        ],
      },
      {
        title: "Language",
        bullets: ["Danish (native), Turkish (native), English (Fluent)."],
      },
    ],
  },
};
