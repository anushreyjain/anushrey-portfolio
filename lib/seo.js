// Single source of truth for SEO values (metadata, sitemap, structured data).
export const SITE_URL = "https://www.anushrey.com";
export const SITE_NAME = "Anushrey Jain";
export const TITLE = "Anushrey Jain | Lead Frontend Engineer";
export const DESCRIPTION =
  "Anushrey Jain is a Lead Frontend Engineer with 5+ years of experience building React and Next.js products, agentic AI workflows and design systems for clients like Deloitte, BCG and Apollo Tyres.";

const profiles = [
  "https://www.linkedin.com/in/anushrey-jain-95857a135/",
  "https://github.com/anushreyjain",
  "https://www.behance.net/anushreyjain",
];

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${SITE_NAME} | Portfolio`,
      description: DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#profile`,
      url: SITE_URL,
      name: TITLE,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE_NAME,
      url: SITE_URL,
      image: `${SITE_URL}/anushrey.png`,
      jobTitle: "Lead Frontend Engineer",
      description: DESCRIPTION,
      email: "mailto:anushrey1998@gmail.com",
      worksFor: {
        "@type": "Organization",
        name: "Massic AI",
        url: "https://www.massic.io/",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Technocrats Institute of Technology",
      },
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Frontend Engineering",
        "Design Systems",
        "Agentic AI workflows",
        "Web Performance",
        "Tailwind CSS",
        "UI Design",
      ],
      sameAs: profiles,
    },
  ],
};
