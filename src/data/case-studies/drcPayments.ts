import screens from "@/assets/case-drc-screens.jpg";
import type { CaseStudyData } from "@/components/case-study/types";

export const drcPayments: CaseStudyData = {
  path: "/drc-payments",
  seo: {
    title: "DRC Payments Case Study — Adebukola Akanji",
    description:
      "How I led Nomba's first international expansion into the DRC, launching an interoperable payments platform in six weeks that onboarded 3,000+ users and processed $100K+ in payment volume.",
  },
  tag: "Nomba · Market entry · DRC",
  title: "Launching Nomba's first international market in six weeks",
  lede: "Nomba had never operated outside Nigeria. I led discovery, strategy and delivery of an interoperable payments platform that let DRC agents and merchants move money across disconnected networks.",
  meta: [
    { label: "Role", value: "Founding PM, Global Expansion" },
    { label: "Timeline", value: "6 weeks to launch" },
    { label: "Teams", value: "Engineering, Design, Partnerships, Finance, Compliance" },
    { label: "Market", value: "Democratic Republic of Congo" },
  ],
  impact: [
    { value: "6 weeks", label: "from research to live product" },
    { value: "3,000+", label: "agents, merchants and consumers onboarded" },
    { value: "$100K+", label: "local payment volume processed" },
    { value: "1st", label: "international market for Nomba" },
  ],
  glance: {
    problem: "Mobile money networks ran in silos, so agents carried several SIMs and devices just to move money between providers.",
    solution: "One interoperable platform for transfers across networks and banks, launched fast through partners with existing integrations.",
    result: "Live in six weeks with 3,000+ users and $100K+ in volume, and a foundation for every market that followed.",
  },
  summary: { company: "Nomba", type: "Market entry", metric: "3,000+", metricLabel: "users onboarded" },
  items: [
    {
      kind: "section",
      title: "The problem",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "This was Nomba's first expansion, so there was no playbook, operating model or product strategy to follow. My job was to understand the market, pick the most valuable problem, and launch quickly while staying compliant.",
            "Moving money from one mobile money network to another took multiple steps, added cost and caused delays. The opportunity was clear: simplify how money moves across disconnected networks.",
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "Discovery",
      blocks: [
        {
          type: "cards",
          items: [
            { stat: "~100", text: "field interviews with agents, merchants and consumers" },
            { title: "Market research", text: "Industry reports and data on the DRC financial ecosystem" },
            { title: "Workflow analysis", text: "Payment flows, behaviour and operational pain points" },
          ],
        },
        { type: "quote", text: "Key insight: agents carried multiple SIM cards and devices just to serve customers across providers." },
      ],
    },
    {
      kind: "section",
      title: "The solution",
      blocks: [
        { type: "lede", text: "An interoperable payments platform that lets users:" },
        {
          type: "cards",
          items: [
            { title: "Cross-network transfers", text: "Send and receive across mobile money networks" },
            { title: "Bank ↔ mobile money", text: "Move funds between banks and wallets" },
            { title: "Airtime and data", text: "Buy across all networks in one place" },
          ],
        },
        {
          type: "callout",
          label: "Key decision",
          title: "Launch an MVP through partners instead of direct integrations.",
          text: "Direct bank and operator integrations would have delayed launch by months. Partners with existing coverage let us validate demand fast and cut implementation complexity.",
        },
      ],
    },
    {
      kind: "figure",
      src: screens,
      alt: "DRC payments app screens: airtime purchase and transfers",
      caption: "Airtime purchase and cross-network transfer flow",
    },
    {
      kind: "section",
      title: "What I owned",
      blocks: [
        {
          type: "list",
          items: [
            "Requirements, workflows and acceptance criteria",
            "Onboarding, KYC, transaction and settlement journeys",
            "Tiered KYC balancing compliance and adoption",
            "Partner selection and API validation",
            "Pricing and reconciliation with Finance",
            "A mobile-first experience needing minimal training",
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "Results",
      blocks: [
        {
          type: "bullets",
          items: [
            "Launched Nomba's first international payments product in **six weeks**",
            "Onboarded **3,000+** agents, merchants and consumers",
            "Processed **$100K+** in local payment volume",
            "Set the product and operating foundation for later market expansion",
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "What I learned",
      blocks: [
        {
          type: "learnings",
          items: [
            {
              title: "Products do not copy across markets",
              text: "Assumptions that held in Nigeria failed in the DRC. Time in the field surfaced what desk research could not.",
            },
            {
              title: "Credibility is earned with partners",
              text: "As a new entrant, securing partners took due diligence, relationship building and careful negotiation.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    eyebrow: "Next case study",
    title: "A diaspora remittance product launched in six markets",
    href: "/global-expansion",
  },
};
