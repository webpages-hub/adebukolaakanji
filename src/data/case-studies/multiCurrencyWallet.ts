import screens from "@/assets/case-wallet-screens.jpg";
import type { CaseStudyData } from "@/components/case-study/types";

export const multiCurrencyWallet: CaseStudyData = {
  path: "/multi-currency-wallet",
  seo: {
    title: "Multi-Currency Wallet Case Study — Adebukola Akanji",
    description:
      "How I designed a multi-currency wallet that made managing money across currencies effortless and grew daily active usage by 20%.",
  },
  tag: "Nomba · Wallets · 5 currencies",
  title: "A multi-currency wallet that hides the complexity",
  lede: "Users could hold money in one currency but not spend it when a transaction needed another. I led a wallet experience that lets them hold and move funds across five currencies seamlessly.",
  meta: [
    { label: "Role", value: "Product Manager" },
    { label: "Timeline", value: "Delivered in one month" },
    { label: "Teams", value: "Engineering, Design, Operations, Compliance" },
    { label: "Currencies", value: "USD, CDF, EUR, GBP, CAD" },
  ],
  impact: [
    { value: "+20%", label: "daily active usage" },
    { value: "+10%", label: "cross-currency transactions" },
    { value: "5", label: "currency wallets supported" },
    { value: "1 month", label: "from kickoff to launch" },
  ],
  glance: {
    problem: "A DRC user with a USD balance could still be stuck waiting for CDF to finish a local payment.",
    solution: "Multiple currency wallets in one place, with routing, limits and KYC handled in the background.",
    result: "Daily active usage up 20% and cross-currency transactions up 10%.",
  },
  summary: { company: "Nomba", type: "Wallets", metric: "+20%", metricLabel: "daily active usage" },
  items: [
    {
      kind: "section",
      title: "The problem",
      blocks: [
        {
          type: "cards",
          items: [
            { title: "Locked balances", text: "Funds unusable when a different currency was needed" },
            { title: "Fragmented tools", text: "Multiple platforms or manual work per currency" },
            { title: "Market rules", text: "Different limits and regulation in every market" },
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
            "I reviewed transaction patterns and behaviour across corridors, and worked with Operations, Compliance and Engineering on regulatory and technical constraints.",
          ],
        },
        {
          type: "quote",
          text: "Key insight: users did not care how currency routing worked. They wanted their money when and where they needed it.",
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
            { title: "Simple by default", text: "Create and open any currency wallet in a tap" },
            { title: "Built to grow", text: "New currencies added as Nomba enters markets" },
            { title: "Compliance underneath", text: "Per-currency limits and KYC applied quietly" },
          ],
        },
        {
          type: "list",
          items: [
            "How users create and access wallets",
            "How balances display across currencies",
            "How funds move between currencies",
            "How availability adapts to user location",
          ],
        },
      ],
    },
    {
      kind: "figure",
      src: screens,
      alt: "Multi-currency wallet screens showing NGN and EUR balances",
      caption: "Multi-currency balances and bank transfer flow",
    },
    {
      kind: "section",
      title: "Results",
      blocks: [
        {
          type: "bullets",
          items: [
            "Increased daily active usage by **20%** within weeks",
            "Grew cross-currency transactions by **10%** across corridors",
            "Enabled wallet creation across **five currencies**",
            "Gave users flexibility to manage funds across markets",
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
              title: "Hide complexity from users",
              text: "Each currency added compliance, limit and settlement work. None of it should be visible.",
            },
            {
              title: "Simplicity is the product",
              text: "The hardest work was making a complex system feel effortless.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    eyebrow: "Next case study",
    title: "Gamification that gave BNPL users a reason to return",
    href: "/gamification",
  },
};
