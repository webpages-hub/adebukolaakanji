import screens from "@/assets/case-diaspora-screens.jpg";
import type { CaseStudyData } from "@/components/case-study/types";

export const globalExpansion: CaseStudyData = {
  path: "/global-expansion",
  seo: {
    title: "Global Expansion Case Study — Adebukola Akanji",
    description:
      "How I launched a diaspora remittance product across six markets in six weeks, processing over $40M in total payment volume.",
  },
  tag: "Nomba · Remittance · 6 markets",
  title: "A diaspora remittance product launched in six markets",
  lede: "Building on the DRC launch, I adapted our expansion model into a cross-border product that lets African diaspora customers send money home to Nigeria and the DRC.",
  meta: [
    { label: "Role", value: "Founding PM, Global Expansion" },
    { label: "Timeline", value: "6 weeks to launch, 12 months measured" },
    { label: "Teams", value: "Partnerships, Compliance, Data, Finance, Engineering" },
    { label: "Corridors", value: "GBP, EUR, CAD → Nigeria and DRC" },
  ],
  impact: [
    { value: "$40M+", label: "transaction volume in 12 months" },
    { value: "11% → 90%", label: "onboarding conversion" },
    { value: "6", label: "markets live in six weeks" },
    { value: "Minimal", label: "paid acquisition spend" },
  ],
  glance: {
    problem: "Diaspora senders faced unpredictable rates, and sending to the DRC often meant relying on informal agents.",
    solution: "Rate protection, direct payouts to DRC mobile money and banks, and funding in the sender's local currency.",
    result: "$40M+ in volume within a year, and onboarding conversion up from 11% to 90% after a data-led redesign.",
  },
  summary: { company: "Nomba", type: "Remittance", metric: "$40M+", metricLabel: "volume in 12 months" },
  items: [
    {
      kind: "section",
      title: "The problem",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "Remittance is a large market, but existing providers left real gaps around exchange rate transparency, reliability and access to some destinations. My role was to validate the opportunity, define the strategy and lead the launch across six markets.",
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "Discovery",
      blocks: [
        {
          type: "lede",
          text: "User interviews, surveys, historical remittance data and a review of competing products surfaced three insights:",
        },
        {
          type: "cards",
          items: [
            { title: "Rate uncertainty", text: "Uncompetitive rates that changed mid-transaction" },
            { title: "Limited DRC access", text: "Few platforms reached DRC mobile money and banks" },
            { title: "Need for control", text: "Certainty about what the recipient will receive" },
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "The solution",
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Rate protection window", text: "Users lock the rate briefly after starting a transfer" },
            { title: "Direct DRC payouts", text: "Reused partnerships from the DRC launch" },
            { title: "Local-currency funding", text: "Fund in GBP, EUR or CAD and send direct" },
          ],
        },
        {
          type: "list",
          items: [
            "Mapped KYC across countries and integrated a provider for foreign documents",
            "Evaluated and integrated GBP, EUR and CAD funding partners",
            "Defined currency pairs and rates with Data and Finance",
            "Designed pricing that protects the business from FX exposure",
          ],
        },
      ],
    },
    {
      kind: "figure",
      src: screens,
      alt: "Diaspora remittance app screens: choosing a destination and comparing rates",
      caption: "Sign-up, destination choice and rate comparison",
    },
    {
      kind: "section",
      title: "Iterating after launch",
      blocks: [
        {
          type: "lede",
          text: "Mixpanel showed only 11% of users who started sign-up finished it. We asked for too much before users saw any value.",
        },
        {
          type: "beforeAfter",
          before: { label: "Before", value: "11%", text: "All personal details and verification required before the first transfer" },
          after: {
            label: "After",
            value: "90%",
            text: "Progressive verification: light sign-up, transact within limits, verify more as needs grow",
          },
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
            "Launched across **six markets in six weeks**",
            "Processed **$40M+** in transaction volume within 12 months",
            "Raised onboarding conversion from **11% to 90%**",
            "Gave diaspora customers one platform for sending to Nigeria and the DRC",
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
              title: "Frameworks are a starting point",
              text: "Every market brings its own expectations, behaviours and constraints.",
            },
            {
              title: "Show value before asking for more",
              text: "Compliance is necessary, but it can be designed so users experience the product first.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    eyebrow: "Next case study",
    title: "International payments for businesses in the DRC",
    href: "/global-transfers",
  },
};
