import heroImage from "@/assets/drc-payments-hero.jpg";
import { CaseStudyData } from "@/components/case-study-v2/types";

export const drcPaymentsData: CaseStudyData = {
  seo: {
    title: "DRC Payments Case Study — Adebukola Akanji",
    description:
      "How I led Nomba's first international expansion into the DRC, launching an interoperable payments platform in six weeks that onboarded 3,000+ users and processed $100K+ in payment volume.",
    path: "/drc-payments",
  },
  hero: {
    tags: ["Product Management", "Fintech", "DRC"],
    title: "Building Nomba's First International Expansion in the Democratic Republic of Congo",
    image: heroImage,
    imageAlt: "DRC Payments Project Hero",
  },
  metadata: [
    { label: "Role", value: "Founding Product Manager" },
    { label: "Team", value: "Engineering, Design, Partnerships, Operations, Finance, Legal & Compliance" },
    { label: "Location", value: "Democratic Republic of Congo (DRC)" },
    { label: "Timeline", value: "6 Weeks" },
  ],
  overview: {
    paragraphs: [
      "As the Founding Product Manager for Nomba's expansion into the Democratic Republic of Congo (DRC), I led the initiative from market discovery to launch. With no existing expansion playbook, I was responsible for validating the opportunity, defining the product strategy, and leading cross-functional execution.",
      "Within six weeks, we launched an interoperable payments platform that enabled users to transact across mobile money networks and banks, onboarding over 3,000 agents, merchants, and consumers and processing more than $100,000 in local payment volume.",
    ],
  },
  background: {
    paragraphs: [
      "Nomba wanted to expand operations beyond Nigeria and enter the DRC market. This was the company's first international expansion, meaning there was no established playbook, operating model, or product strategy to follow.",
      "My responsibility was to understand the market, identify the most valuable problem to solve, and determine how we could launch quickly while remaining compliant with local regulations.",
    ],
  },
  research: {
    intro:
      "My first objective was to understand how money moved within the DRC and where existing financial services were failing users.",
    methods: [
      "Reviewed industry reports and market data on the DRC financial ecosystem.",
      "Conducted field research with the Growth team, and interviewed approximately 100 agents, merchants, and consumers.",
      "Analyzed payment workflows, customer behaviour, and operational challenges.",
    ],
    findings: [
      "The research revealed a highly fragmented payments ecosystem. Agents and merchants struggled to move money across mobile money providers because networks operated in silos. To serve customers effectively, many agents carried multiple SIM cards and devices to transact across different providers.",
      "For example, receiving money through one mobile money network and sending through another often required multiple steps, creating delays, higher costs, and operational complexity. The opportunity was clear: simplify how money moved across disconnected payment networks.",
    ],
  },
  productStrategy: {
    intro: "Based on our research, I proposed building an interoperable payments platform that would allow users to:",
    list: [
      "Send and receive money across mobile money networks",
      "Transfer funds between banks and mobile money providers",
      "Purchase airtime and data across networks",
    ],
    paragraphs: [
      "A major constraint was time to market.",
      "Direct integrations with banks and mobile money operators would have significantly delayed launch. To validate demand quickly, I proposed an MVP approach using strategic partners that already had existing integrations across mobile money and banking networks. This allowed us to test the opportunity, reduce implementation complexity, and accelerate launch.",
    ],
  },
  execution: {
    intro: "I led product delivery across Engineering, Design, Partnerships, Finance, and Compliance teams.",
    listIntro: "Key responsibilities included:",
    list: [
      "Defining product requirements, workflows, and acceptance criteria.",
      "Mapping onboarding, KYC, transaction, and settlement journeys.",
      "Designing tiered KYC requirements to balance regulatory compliance with user adoption.",
      "Evaluating and selecting integration partners based on commercial, operational, and technical requirements.",
      "Reviewing partner APIs and validating workflows before integration.",
      "Working with Finance to define pricing and reconciliation processes.",
      "Partnering with Design to create a mobile-first experience that required minimal user training.",
    ],
    outro:
      "Throughout development, I worked closely with Engineering to prioritize delivery, remove blockers, and ensure the product met both user and business requirements.",
  },
  results: {
    intro: "Within six weeks, we launched Nomba's first international payments product.",
    listHeading: "Outcomes",
    list: [
      "Onboarded over 3,000 agents, merchants, and consumers.",
      "Processed more than $100,000 in local payment volume.",
      "Enabled users to transact across previously disconnected mobile money and banking networks.",
      "Established the operational and product foundation for future market expansion initiatives.",
    ],
  },
  challenges: {
    subheading: "Building Trust in a New Market",
    paragraphs: [
      "Securing partnerships was one of the most difficult parts of the project.",
      "As a new entrant with no existing market presence, establishing credibility with potential partners required extensive due diligence, relationship building, and commercial negotiations.",
      "The success of the MVP depended heavily on identifying partners that could provide both reliable infrastructure and sufficient market coverage.",
    ],
  },
  takeaways: {
    heading: "Lessons Learned",
    cards: [
      {
        number: "1",
        title: "Research Beats Assumptions",
        description:
          "Several assumptions that would have been valid in Nigeria did not hold true in the DRC. Spending time with users in their environment uncovered insights that would not have surfaced through desk research alone.",
      },
      {
        number: "2",
        title: "Market Expansion Requires Local Understanding",
        description:
          "A successful product cannot simply be copied into a new market. Expansion requires a deep understanding of local payment behaviour, regulations, infrastructure, and customer needs.",
      },
    ],
  },
  navigation: {
    prev: { href: "/multi-currency-wallet", label: "Multi-Currency Wallet" },
    next: { href: "/global-transfers", label: "Global Transfers" },
  },
};
