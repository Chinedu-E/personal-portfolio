export const site = {
  name: "Nedu Ekeruche",
  title: "Software Developer & Quantitative Developer",
  location: "Toronto, ON",
  email: "cekeruche@icloud.com",
  resumePath: "/NeduEkerucheResume.pdf",
  github: "https://github.com/Chinedu-E",
  linkedin: "https://www.linkedin.com/in/nedu-ekeruche",
  bio: "Software developer with a B.Math & Statistics background, specializing in low-latency systems, event-driven architecture, and applied AI in finance (portfolio allocation and anti-money laundering). Currently specializing in FinTech at Sheridan College.",
};

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
] as const;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  title: string;
  subhead: string;
  takeaways: string[];
  stack: string[];
  links: ProjectLink[];
};

export type DemoClip = {
  title: string;
  caption: string;
  src: string;
  poster?: string;
  preload: "none" | "metadata";
};

export type ProjectDemo = {
  slug: string;
  projectId: string;
  title: string;
  subhead: string;
  github: string;
  clips: DemoClip[];
};

export const projectDemos: ProjectDemo[] = [
  {
    slug: "aml",
    projectId: "aml",
    title: "Graph Neural Network AML Transaction Monitoring",
    subhead:
      "Real-time financial crime intelligence: HeteroSAGE scoring over synthetic and IBM AML transaction graphs.",
    github: "https://github.com/Chinedu-E/AML",
    clips: [
      {
        title: "Overview",
        caption: "Command center layout — live feed, alerts, and the money-flow trail.",
        src: "/demo/aml/overview.mp4",
        preload: "metadata",
      },
      {
        title: "IBM replay",
        caption:
          "IBM AML dataset replay with graph investigation and the live globe view.",
        src: "/demo/aml/ibm-replay.mp4",
        poster: "/demo/aml/graph-poster.webp",
        preload: "none",
      },
    ],
  },
];

export function getProjectDemo(slug: string): ProjectDemo | undefined {
  return projectDemos.find((demo) => demo.slug === slug);
}

export const projects: Project[] = [
  {
    id: "drl-portfolio",
    title: "Deep Reinforcement Learning for Portfolio Allocation",
    subhead:
      "Reproducing J.P. Morgan AI research to compare PPO against classical mean-variance optimization under market volatility.",
    takeaways: [
      "Built a Gymnasium market-replay environment over S&P 500 sector series with softmax long-only weights and Differential Sharpe rewards.",
      "Trained a Stable-Baselines3 PPO agent against a Ledoit–Wolf max-Sharpe MVO baseline (PyPortfolioOpt).",
      "Shipped a FastAPI backtesting API and Vite/React dashboard for equity curves, rolling Sharpe, and allocation heatmaps.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "Stable-Baselines3",
      "Gymnasium",
      "PyPortfolioOpt",
      "FastAPI",
      "React",
      "Vite",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chinedu-E/DRLPortfolio",
      },
      {
        label: "Paper",
        href: "https://arxiv.org/abs/2602.17098",
      },
    ],
  },
  {
    id: "aml",
    title: "Graph Neural Network AML Transaction Monitoring",
    subhead:
      "Real-time financial crime intelligence: HeteroSAGE scoring over synthetic and IBM AML transaction graphs.",
    takeaways: [
      "Modelled banking, crypto, and cross-border entity relationships as a heterogeneous graph with PyTorch Geometric (HeteroSAGE).",
      "Built a synthetic multi-network generator with typology injection, plus IBM AML CSV conversion to replay JSONL.",
      "Served live WebSocket inference to a Vite/React dashboard with graph visualization, alerts, and simulator/replay switching.",
    ],
    stack: [
      "Python",
      "PyTorch Geometric",
      "HeteroSAGE",
      "WebSockets",
      "React",
      "Vite",
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/Chinedu-E/AML",
      },
      {
        label: "Demo",
        href: "/demo/aml",
      },
    ],
  },
];

export const otherProjects: Project[] = [
  {
    id: "craftha",
    title: "Craftha",
    subhead:
      "Marketplace for verified handmade crafts, with separate paths for makers and collectors.",
    takeaways: [
      "Built the Next.js site around maker verification and a ban on dropshipping and AI-generated goods.",
      "Shipped maker and collector entry points and an early-access waitlist ahead of the public marketplace.",
    ],
    stack: ["Next.js", "TypeScript"],
    links: [
      {
        label: "Website",
        href: "https://craftha.com/",
      },
    ],
  },
  {
    id: "sereinmod",
    title: "SereinMod",
    subhead:
      "Developer API for filtering toxic comments and media instead of reviewing them by hand.",
    takeaways: [
      "Built the product site and REST API for text and media moderation, returning category scores and an allow-or-deny decision.",
      "Documented the integration with request examples and tiered pricing so a developer can call it with an API key.",
    ],
    stack: ["Next.js", "TypeScript"],
    links: [
      {
        label: "Website",
        href: "https://sereinmod.com/",
      },
    ],
  },
  {
    id: "whot",
    title: "Whot Online",
    subhead:
      "Real-time multiplayer Whot, with private rooms, spectators, and a trained computer opponent.",
    takeaways: [
      "Built a Next.js table with drag-and-drop cards, room create and join, and live match state over WebSockets.",
      "Kept game state in Redis behind FastAPI, including turn timers, spectators, and specials such as Pick Two, Hold On, and General Market.",
      "Trained a Gymnasium self-play policy with Stable-Baselines3 and wired it in as the computer opponent on the same rules engine.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Redis",
      "WebSockets",
      "PyTorch",
      "Stable-Baselines3",
      "Gymnasium",
    ],
    links: [
      {
        label: "Live",
        href: "https://whot-front-end.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/Chinedu-E/whot-fastapi",
      },
    ],
  },
];

export type Engagement = {
  name: string;
  detail?: string;
  bullets: string[];
  links?: ProjectLink[];
};

export type TimelineItem = {
  period: string;
  role: string;
  org: string;
  detail?: string;
  bullets?: string[];
  links?: ProjectLink[];
  engagements?: Engagement[];
};

export const experience: TimelineItem[] = [
  {
    period: "Jan 2024 – Sept 2026",
    role: "Software Developer",
    org: "SevenDot Analytics",
    detail: "Python, FastAPI, Redis, WebSockets, PostgreSQL",
    bullets: [
      "Built low-latency WebSocket streaming and FastAPI microservices for production analytics workloads.",
      "Worked across Redis and PostgreSQL for event-driven data paths and persistence.",
    ],
  },
  {
    period: "Since June 2025",
    role: "Freelance Lead Developer",
    org: "Client work",
    engagements: [
      {
        name: "ThriveParth",
        detail: "Next.js, TypeScript, Cloudflare R2, Resend",
        bullets: [
          "Built the public site for a Toronto nonprofit supporting newcomers and youth: programs, events, volunteer and support intake, and a community gallery.",
          "Shipped an admin for one-time, weekly, and monthly events and for gallery folders, with presigned image uploads to Cloudflare R2.",
          "Routed contact, support, volunteer, and newsletter forms to the team through Resend.",
        ],
        links: [{ label: "Website", href: "https://thriveparth.org" }],
      },
      {
        name: "Shutter Unit",
        detail: "Next.js, TypeScript, Cloudinary",
        bullets: [
          "Built a photography site for weddings, portraits, and commissions, with collection pages, a film feature, and a contact path.",
          "Served the galleries from Cloudinary so each frame is resized and compressed on the CDN instead of shipping full-resolution files.",
        ],
        links: [{ label: "Website", href: "https://shutterunit.com/" }],
      },
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "Expected Graduation April 2027",
    role: "Financial Technology",
    org: "Sheridan College",
  },
  {
    period: "Graduated June 2023",
    role: "B.Math & Statistics",
    org: "Carleton University",
  },
];

export const credentials = [
  "Google Professional Machine Learning Engineer",
  "Google TensorFlow Developer",
];

export const skillGroups = [
  {
    title: "Languages",
    items: ["Python", "C#", "TypeScript", "Go", "SQL", "Excel"],
  },
  {
    title: "Quantitative & ML",
    items: [
      "PyTorch",
      "PyTorch Geometric",
      "Stable-Baselines3",
      "Gymnasium",
      "NumPy",
      "Pandas",
      "PyPortfolioOpt",
    ],
  },
  {
    title: "Systems & Backend",
    items: [
      "FastAPI",
      "WebSockets",
      "Redis",
      "PostgreSQL",
      "Celery",
      "Docker",
      "CI/CD",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS"],
  },
];
