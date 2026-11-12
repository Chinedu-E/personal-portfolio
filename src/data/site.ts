export const site = {
  name: "Nedu Ekeruche",
  title: "Software Engineer | Quantitative Developer | FinTech",
  location: "Toronto, ON",
  email: "cekeruche@icloud.com",
  resumePath: "/NeduEkerucheResume.pdf",
  github: "https://github.com/Chinedu-E",
  linkedin: "https://www.linkedin.com/in/nedu-ekeruche",
  bio: [
    "I build software systems at the intersection of backend engineering, financial technology, and applied machine learning.",
    "With a background in Mathematics and Statistics and experience developing production backend services, I enjoy solving problems involving distributed systems, financial modelling, data-intensive applications, and intelligent analytics.",
    "My work includes real-time analytics infrastructure, reinforcement-learning-based portfolio optimization, and graph neural network approaches to financial transaction monitoring.",
  ],
  interests: [
    "Backend Engineering",
    "Quantitative Development",
    "Financial Technology",
    "Machine Learning",
  ],
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

export type DemoFigure = {
  title: string;
  caption: string;
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type DemoTable = {
  title: string;
  caption?: string;
  headers: string[];
  rows: string[][];
};

export type ProjectDemo = {
  slug: string;
  projectId: string;
  kind: "demo" | "results";
  title: string;
  subhead: string;
  github: string;
  paper?: string;
  summary?: string;
  tables?: DemoTable[];
  figures?: DemoFigure[];
  clips?: DemoClip[];
};

export const projectDemos: ProjectDemo[] = [
  {
    slug: "drl",
    projectId: "drl-portfolio",
    kind: "results",
    title: "Deep Reinforcement Learning for Portfolio Allocation",
    subhead:
      "Reproducing J.P. Morgan AI research to compare PPO against classical mean-variance optimization under market volatility.",
    github: "https://github.com/Chinedu-E/DRLPortfolio",
    paper: "https://arxiv.org/abs/2602.17098",
    summary:
      "Out-of-sample on ten S&P 500 sector portfolios, one held-out year at a time (2012–2021). PPO is a five-seed average for that year’s window. MVO is max-Sharpe with Ledoit–Wolf covariance. PPO matches MVO on Sharpe (0.96 vs 0.94) with lower volatility (9.8% vs 14.7%) and a much smaller worst drawdown (−15.4% vs −36.3%). MVO’s average annual return is higher (10.2% vs 8.5%).",
    tables: [
      {
        title: "Ten-year summary",
        caption:
          "Summary averages the ten yearly statistics. Max drawdown is the worst year (2020 for both). Calmar is the mean of yearly Calmar ratios. Turnover is mean absolute change in sector weights (cash ignored).",
        headers: ["", "PPO", "MVO"],
        rows: [
          ["Average annual return", "8.5%", "10.2%"],
          ["Average Sharpe ratio", "0.96", "0.94"],
          ["Average annual volatility", "9.8%", "14.7%"],
          ["Worst max drawdown", "−15.4%", "−36.3%"],
          ["Average yearly Calmar ratio", "2.08", "1.76"],
          ["Average daily turnover (Δp_w)", "0.68", "0.29"],
        ],
      },
      {
        title: "By test year",
        caption:
          "PPO has the higher Sharpe in 2014, 2015, 2019, 2020, and 2021. In 2020 PPO stayed positive (+3.9%, drawdown −15.4%) while MVO lost 2.5% and drew down 36.3%.",
        headers: [
          "Year",
          "PPO return",
          "MVO return",
          "PPO Sharpe",
          "MVO Sharpe",
          "PPO max DD",
          "MVO max DD",
        ],
        rows: [
          ["2012", "0.9%", "5.3%", "0.15", "0.53", "−6.4%", "−10.1%"],
          ["2013", "3.5%", "23.3%", "0.51", "1.89", "−7.2%", "−7.8%"],
          ["2014", "13.6%", "12.2%", "2.12", "1.07", "−3.4%", "−7.7%"],
          ["2015", "0.6%", "0.4%", "0.11", "0.10", "−8.1%", "−12.4%"],
          ["2016", "9.5%", "20.1%", "1.05", "1.33", "−8.9%", "−8.5%"],
          ["2017", "6.7%", "14.5%", "1.33", "2.05", "−1.9%", "−2.9%"],
          ["2018", "−6.8%", "−11.6%", "−0.82", "−0.72", "−7.4%", "−18.9%"],
          ["2019", "15.5%", "18.6%", "1.79", "1.68", "−5.3%", "−5.9%"],
          ["2020", "3.9%", "−2.5%", "0.28", "0.11", "−15.4%", "−36.3%"],
          ["2021", "37.7%", "21.2%", "3.12", "1.36", "−4.1%", "−8.0%"],
        ],
      },
    ],
    figures: [
      {
        title: "Full OOS equity",
        caption:
          "2017–2021 results console: normalized equity for PPO vs MVO vs S&P 500, summary cards, and 63-day rolling Sharpe.",
        src: "/demo/drl/full-oos-equity.webp",
        width: 1556,
        height: 1638,
        alt: "Full out-of-sample DRL portfolio equity and rolling Sharpe charts",
      },
      {
        title: "Full OOS weights",
        caption:
          "Sector allocation on a selected day and weight intensity over the full out-of-sample window.",
        src: "/demo/drl/full-oos-weights.webp",
        width: 1538,
        height: 568,
        alt: "Full out-of-sample portfolio weight bars and intensity heatmap",
      },
      {
        title: "2012 equity",
        caption:
          "Single-year preset for 2012: normalized equity, PPO and MVO cards, and rolling Sharpe.",
        src: "/demo/drl/2012-equity.webp",
        width: 1562,
        height: 1638,
        alt: "2012 DRL portfolio equity and rolling Sharpe charts",
      },
      {
        title: "2012 weights",
        caption:
          "2012 allocation snapshot and weight intensity heatmap across the year.",
        src: "/demo/drl/2012-weights.webp",
        width: 1548,
        height: 552,
        alt: "2012 portfolio weight bars and intensity heatmap",
      },
    ],
  },
  {
    slug: "aml",
    projectId: "aml",
    kind: "demo",
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
      "Reproduced a J.P. Morgan AI research setup to test whether a learning-based portfolio manager can allocate across market sectors as well as a classical optimizer.",
      "On ten held-out years of S&P 500 sector data (2012–2021), the agent matched the optimizer on Sharpe ratio (0.96 vs 0.94) and cut the worst drawdown (−15.4% vs −36.3%).",
      "Built a Gymnasium market-replay environment over those sector series, with softmax long-only weights and a Differential Sharpe reward so the agent is scored on risk-adjusted return.",
      "Trained a Stable-Baselines3 PPO policy and benchmarked each held-out year against a Ledoit–Wolf max-Sharpe mean-variance baseline in PyPortfolioOpt.",
      "Shipped a FastAPI backtesting API and a Vite/React dashboard for equity curves, rolling Sharpe, and allocation heatmaps.",
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
        label: "Results",
        href: "/demo/drl",
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
      "A live monitor that scores transactions for money-laundering risk and shows an investigator how funds moved between accounts.",
      "Runs on generated test traffic and on the public IBM anti-money-laundering dataset, so the same screen can simulate a feed or replay a known case.",
      "Modelled banks, crypto venues, and cross-border entities as a heterogeneous graph and scored flows with HeteroSAGE in PyTorch Geometric.",
      "Built a synthetic multi-network generator that injects known laundering typologies, and converted IBM AML CSV exports into replayable JSONL event streams.",
      "Streamed live scores over WebSockets to a Vite/React dashboard with graph visualization, alerts, and a switch between the simulator and dataset replay.",
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
      "A marketplace for verified handmade work, closed to dropshipping and AI-generated goods.",
      "Built the Next.js site with separate paths for makers and collectors, and an early-access waitlist ahead of the public marketplace.",
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
      "Lets a product screen comments and uploads for toxicity instead of reviewing each item by hand.",
      "Built the site and a REST API that scores text and media by category and returns an allow-or-deny decision.",
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
      "Play Whot online with friends in a private room, watch as a spectator, or play against the computer.",
      "Built a Next.js table with drag-and-drop cards, room create and join, and live match state over WebSockets.",
      "Kept the rules and match state in Redis behind FastAPI, including turn timers, spectators, and specials such as Pick Two, Hold On, and General Market.",
      "Trained a Gymnasium self-play policy with Stable-Baselines3 and served it as the computer opponent on that same rules engine.",
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
      "Built the streaming backend behind production analytics, so live results reach users as new events arrive.",
      "Designed FastAPI microservices and low-latency WebSocket streams for those analytics workloads.",
      "Used Redis for short-lived, event-driven state and PostgreSQL for durable records.",
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
          "Shipped an admin for one-time, weekly, and monthly events and for gallery folders. Image uploads go to Cloudflare R2 through presigned URLs, so the browser writes to storage directly.",
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
    title: "Quantitative & Financial",
    items: ["NumPy", "Pandas", "PyPortfolioOpt", "Excel"],
  },
  {
    title: "Machine Learning",
    items: [
      "PyTorch",
      "PyTorch Geometric",
      "Stable-Baselines3",
      "Gymnasium",
    ],
  },
  {
    title: "Languages",
    items: ["Python", "C#", "TypeScript", "Go", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "TypeScript", "Tailwind CSS"],
  },
];
