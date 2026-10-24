export interface MetaItem {
  label: string;
  value: string;
}

export interface ImpactStat {
  value: string;
  label: string;
}

export interface MiniCardData {
  /** Bold heading. Omit when the card leads with a `stat`. */
  title?: string;
  /** Large figure shown instead of a title, e.g. "~100". */
  stat?: string;
  text: string;
}

export interface BeforeAfterData {
  label: string;
  value: string;
  text: string;
}

export interface LearningData {
  title: string;
  text: string;
}

/**
 * Content blocks that can be mixed inside a numbered section. Pick the one
 * that suits the content; plain `paragraphs` is the default for prose.
 */
export type Block =
  | { type: "paragraphs"; items: string[] }
  | { type: "lede"; text: string }
  | { type: "cards"; items: MiniCardData[] }
  | { type: "quote"; text: string }
  | { type: "callout"; label: string; title: string; text: string }
  | { type: "list"; items: string[] }
  /** Bulleted list; wrap text in **double asterisks** to bold it. */
  | { type: "bullets"; items: string[] }
  | { type: "beforeAfter"; before: BeforeAfterData; after: BeforeAfterData }
  | { type: "learnings"; items: LearningData[] };

export interface CaseStudySection {
  kind: "section";
  title: string;
  blocks: Block[];
}

export interface CaseStudyFigure {
  kind: "figure";
  src: string;
  alt: string;
  caption: string;
}

export type CaseStudyItem = CaseStudySection | CaseStudyFigure;

export interface CaseStudyData {
  path: string;
  seo: { title: string; description: string };
  /** Small pill above the headline, e.g. "Nomba · Market entry · DRC". */
  tag: string;
  title: string;
  lede: string;
  meta: MetaItem[];
  /** Headline numbers shown on the dark strip. */
  impact: ImpactStat[];
  glance: { problem: string; solution: string; result: string };
  /** Used for the case study list on the home and case studies pages. */
  summary: { company: string; type: string; metric: string; metricLabel: string };
  /** Sections are numbered in order; figures sit between them unnumbered. */
  items: CaseStudyItem[];
  next: { eyebrow: string; title: string; href: string };
}
