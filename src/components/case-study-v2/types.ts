import { LucideIcon } from "lucide-react";

export interface MetadataItem {
  label: string;
  value: string;
}

export interface ExecutionCard {
  number: string;
  title: string;
  description: string;
}

export interface ResultMetric {
  icon: LucideIcon;
  value: string;
  label: string;
}

export interface TakeawayCard {
  number: string;
  title: string;
  description: string;
}

export interface CaseStudyNavLink {
  href: string;
  label: string;
}

export interface CaseStudyData {
  seo: {
    title: string;
    description: string;
    path: string;
  };
  hero: {
    tags: string[];
    title: string;
    image: string;
    imageAlt: string;
  };
  metadata: MetadataItem[];
  overview: {
    paragraphs: string[];
  };
  research: {
    methods: string[];
    findings: string[];
  };
  productStrategy: {
    paragraphs: string[];
  };
  execution: {
    intro?: string;
    cards: ExecutionCard[];
    extra?: string[];
  };
  results: {
    metrics: ResultMetric[];
    extra?: string[];
  };
  takeaways: {
    cards: TakeawayCard[];
    extra?: string[];
  };
  navigation: {
    prev: CaseStudyNavLink;
    next: CaseStudyNavLink;
  };
}
