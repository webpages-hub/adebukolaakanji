import screens from "@/assets/case-bnpl-screens.jpg";
import type { CaseStudyData } from "@/components/case-study/types";

export const gamification: CaseStudyData = {
  path: "/gamification",
  seo: {
    title: "Gamification Case Study — Adebukola Akanji",
    description: "How a custom badge and rewards system tied to real product behavior lifted user retention by 10%.",
  },
  tag: "Payfi · Retention · BNPL",
  title: "Gamification that gave BNPL users a reason to return",
  lede: "Users only opened the app when they needed credit. I led a badge, level and reward system tied to valuable behaviours, which lifted retention by 10% in three months.",
  meta: [
    { label: "Role", value: "Product Manager" },
    { label: "Timeline", value: "3 months post-launch" },
    { label: "Teams", value: "Design, Engineering, Growth" },
    { label: "Product", value: "Buy Now, Pay Later app" },
  ],
  impact: [
    { value: "+10%", label: "user retention" },
    { value: "3 months", label: "to measurable impact" },
    { value: "3", label: "mechanics: badges, levels, rewards" },
  ],
  glance: {
    problem: "Engagement dropped between transactions. After repaying, users had no reason to come back.",
    solution: "Visible progress and rewards linked to actions that help users and the business, like on-time repayment.",
    result: "Retention up 10% and stronger engagement among active users.",
  },
  summary: { company: "Payfi", type: "Retention", metric: "+10%", metricLabel: "user retention" },
  items: [
    {
      kind: "section",
      title: "The problem",
      blocks: [
        {
          type: "paragraphs",
          items: [
            "BNPL has a built-in engagement gap: usage is driven by the need for financing. The challenge was to create engagement loops around valuable behaviour, not superficial rewards.",
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
            "I analysed behaviour across the BNPL journey, mapped engagement points with Growth, and studied gamification patterns from consumer products.",
          ],
        },
        {
          type: "quote",
          text: "Key insight: users stayed engaged when they had visible progress, achievable milestones and meaningful rewards.",
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
            { title: "Badges", text: "Milestones for key actions and good repayment habits" },
            { title: "Levels", text: "Progression that gives a sense of advancement" },
            { title: "Rewards", text: "Mapped to valuable actions, not short-term activity" },
          ],
        },
        {
          type: "list",
          items: [
            "Defined badge criteria and progression logic",
            "Mapped user behaviours to rewards",
            "Wrote requirements and user flows",
            "Kept the experience motivating without distracting from BNPL",
          ],
        },
      ],
    },
    {
      kind: "figure",
      src: screens,
      alt: "Payfi badges and rewards screens",
      caption: "Badges, levels and reward progression",
    },
    {
      kind: "section",
      title: "Results",
      blocks: [
        {
          type: "bullets",
          items: [
            "Increased user retention by **10%** within three months",
            "Improved BNPL engagement among active users",
            "Created a repeat engagement loop for a naturally low-frequency product",
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
              title: "Reward what already matters",
              text: "Gamification works best when it reinforces behaviour that is valuable to users and the business.",
            },
            {
              title: "Rewards alone do not retain",
              text: "The strongest loops connect user goals with business outcomes.",
            },
          ],
        },
      ],
    },
  ],
  next: {
    eyebrow: "Back to the start",
    title: "Launching Nomba's first international market in six weeks",
    href: "/drc-payments",
  },
};
