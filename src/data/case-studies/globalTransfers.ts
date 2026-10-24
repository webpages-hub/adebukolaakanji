import screens from "@/assets/case-business-payments-screens.jpg";
import type { CaseStudyData } from "@/components/case-study/types";

export const globalTransfers: CaseStudyData = {
  path: "/global-transfers",
  seo: {
    title: "Global Transfers Case Study — Adebukola Akanji",
    description:
      "How I built cross-border payment infrastructure for businesses in the DRC, lowering fees, improving settlement times and generating $600K+ in revenue within eight months.",
  },
  tag: "Nomba · B2B payments · DRC",
  title: "International payments for businesses in the DRC",
  lede: "DRC businesses paying international partners faced high fees, slow settlement and limited coverage. I owned the strategy, payment flow design and partner integrations for a product that fixed all three.",
  meta: [
    { label: "Role", value: "Founding PM, Global Expansion" },
    { label: "Timeline", value: "8 months post-launch" },
    { label: "Teams", value: "Engineering, Design, Partnerships, Finance, Compliance" },
    { label: "Users", value: "Businesses in the DRC" },
  ],
  impact: [
    { value: "$600K+", label: "revenue within eight months" },
    { value: "0.5%", label: "lower fees than market alternatives" },
    { value: "3", label: "payment vendors secured and integrated" },
    { value: "Faster", label: "settlement for international payments" },
  ],
  glance: {
    problem: "Fragmented providers meant high fees, delayed payments and gaps in destination coverage.",
    solution: "A configurable payment layer that adds corridors without rebuilding the product for each market.",
    result: "$600K+ revenue in eight months, lower fees and broader reach for DRC businesses.",
  },
  summary: { company: "Nomba", type: "B2B payments", metric: "$600K+", metricLabel: "revenue in 8 months" },
  items: [
    {
      kind: "section",
      title: "The problem",
      blocks: [
        {
          type: "cards",
          items: [
            { title: "High costs", text: "Transfer fees ate into what businesses received" },
            { title: "Slow settlement", text: "Delays disrupted day-to-day operations" },
            { title: "Limited coverage", text: "Hard to pay partners in many destinations" },
          ],
        },
      ],
    },
    {
      kind: "section",
      title: "Discovery",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "I interviewed businesses, reviewed their current payment workflows, and analysed provider coverage and settlement processes across corridors.",
          ],
        },
        {
          type: "quote",
          text: "Key insight: businesses needed more than a way to send money. They needed reliable infrastructure with predictable costs and broad coverage.",
        },
      ],
    },
    {
      kind: "section",
      title: "The solution",
      blocks: [
        { type: "lede", text: "A flexible payment layer, configured per corridor:" },
        {
          type: "cards",
          items: [
            { title: "Destinations and currencies", text: "Multiple countries from one product" },
            { title: "Methods per destination", text: "Country-specific requirements handled" },
            { title: "Limits and rules", text: "By currency and regulation" },
          ],
        },
        {
          type: "callout",
          label: "Key decision",
          title: "Secure three payment vendors rather than depend on one.",
          text: "With Partnerships, I assessed vendors on coverage, reliability and operational fit, which widened destinations and improved delivery.",
        },
      ],
    },
    {
      kind: "figure",
      src: screens,
      alt: "Cross-border transfer screens: amount, destination country and summary",
      caption: "Amount entry, destination country and payment summary",
    },
    {
      kind: "section",
      title: "Results",
      blocks: [
        {
          type: "bullets",
          items: [
            "Generated **$600K+** in revenue within eight months",
            "Reduced fees by **0.5%** versus market alternatives",
            "Improved settlement timelines for international payments",
            "Expanded payment destinations available to DRC businesses",
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
              title: "Design for scale early",
              text: "As corridors grew, some early modules needed refactoring. Flexible foundations reduce costly rework.",
            },
            {
              title: "Payments are a web of dependencies",
              text: "Currencies, regulation, providers and settlement all shape the product, not just the transfer itself.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    eyebrow: "Next case study",
    title: "A multi-currency wallet that hides the complexity",
    href: "/multi-currency-wallet",
  },
};
