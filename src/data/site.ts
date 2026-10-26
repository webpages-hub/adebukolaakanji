export const site = {
  name: "Adebukola Akanji",
  email: "adebukolaakanji@gmail.com",
  linkedin: "https://www.linkedin.com/in/aadebukola/",
  location: "Lagos, Nigeria",
};

export interface SideBuild {
  name: string;
  description: string;
  href: string;
}

export const sideBuilds: SideBuild[] = [
  {
    name: "PM Log",
    description: "A practice platform where PMs work through real-world product scenarios.",
    href: "https://pmlog.vercel.app/",
  },
  {
    name: "Feedback Analyzer",
    description: "Reads App Store and Google Play reviews and suggests concrete product fixes.",
    href: "https://product-feedback-analyzer.vercel.app/",
  },
  {
    name: "Job Match Agent",
    description: "An automated, scored and link-verified job search across your preferences.",
    href: "https://github.com/webpages-hub/job-match-agent",
  },
  {
    name: "Scholarship Finder",
    description: "Finds funded degree programmes you are eligible for, from your stated criteria.",
    href: "https://github.com/webpages-hub/scholarship-finder",
  },
];

export const processSteps = [
  { title: "Discover", text: "User interviews, surveys and behavioural data until the pattern is clear." },
  { title: "Define", text: "A clear problem statement, a prioritised backlog and a shared measure of success." },
  { title: "Build", text: "Prototype and test early with design and engineering, through to launch." },
  { title: "Launch", text: "Shape go-to-market with sales and marketing so the right users adopt it." },
  { title: "Measure", text: "Track what happens after launch and let the data decide what comes next." },
];

export const impactHighlights = [
  { value: "6", label: "markets launched, starting with Nomba's international expansion" },
  { value: "$40M+", label: "diaspora remittance volume in 12 months" },
  { value: "$600K+", label: "cross-border payments revenue in 8 months" },
  { value: "11% → 90%", label: "onboarding conversion after a progressive KYC redesign" },
];
