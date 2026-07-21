export interface MetadataItem {
  label: string;
  value: string;
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
  background: {
    paragraphs: string[];
  };
  research: {
    intro?: string;
    methods: string[];
    findings: string[];
  };
  productStrategy: {
    intro: string;
    list: string[];
    paragraphs: string[];
  };
  execution: {
    intro?: string;
    listIntro?: string;
    list: string[];
    outro?: string;
  };
  results: {
    intro?: string;
    listHeading?: string;
    list: string[];
  };
  challenges: {
    subheading: string;
    paragraphs: string[];
  };
  takeaways: {
    heading: string;
    cards: TakeawayCard[];
  };
  navigation: {
    prev: CaseStudyNavLink;
    next: CaseStudyNavLink;
  };
}
