export type SocialLink = {
  label: string;
  href: string;
};

export type Achievement = {
  metric: string;
  title: string;
  description: string;
};

export type Colleague = {
  quote: string;
  author: string;
  highlights: string[];
};

export type TimelineItem = {
  date: string;
  duration: string;
  title: string;
  description: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  id: string;
  company: string;
  period: string;
  title: string;
  summary: string;
  featured?: boolean;
  metrics: ProjectMetric[];
  detail: {
    role: string;
    contribution: string;
    goal: string;
    problem: string;
    approach: string[];
    result: string;
  };
};

export type SideProject = {
  title: string;
  description: string;
  href?: string;
};

export type Skill = {
  category: string;
  items: string[];
};

export type Post = {
  category: string;
  title: string;
  date: string;
  href: string;
};
