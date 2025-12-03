export interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    num: "01",
    category: "Full Stack",
    title: "Craftha",
    description: "Craftha is a comprehensive marketplace platform for artisans to sell their goods. Built as a full-stack application featuring a responsive website, two mobile applications (buyer and seller apps), and an admin dashboard. This Toronto-based e-commerce solution enables local artisans to reach customers through a modern, scalable platform with secure payment processing.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "React Native" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "PostgreSQL" },
      { name: "Stripe" }
    ],
    image: "/craftha.png",
    live: "https://craftha.com/",
    github: "",
  },
  {
    num: "02",
    category: "Full Stack",
    title: "SereinMod",
    description: "A mobile application developed for Serein, a Toronto-based mobile app development company. Built with React Native and TypeScript for cross-platform compatibility, with a Python backend for robust functionality. Delivers a seamless user experience for Serein's clients and showcases modern mobile development practices.",
    stack: [
      { name: "React Native" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Node.js" }
    ],
    image: "/serein.png",
    live: "https://sereinmod.com/",
    github: "",
  },
  {
    num: "03",
    category: "Full Stack",
    title: "Whot Online",
    description: "A comprehensive fan website for Chelsea FC, built with Next.js and TypeScript for the frontend, Python and Go for high-performance backend services, PostgreSQL for reliable data storage, and Stripe for secure payment processing. Provides fans with news, match updates, and exclusive content.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "Go" },
      { name: "PostgreSQL" },
      { name: "Stripe" }
    ],
    image: "/w.avif",
    live: "https://whotonline.com/",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Shutter Unit",
    description: "A photography portfolio website developed using Next.js and TypeScript, showcasing high-quality images and providing an engaging user experience. Built for Shutter Unit Photography, a Toronto-based photography business, featuring optimized image loading and modern design principles.",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" }
    ],
    image: "/shutter.jpg",
    live: "https://shutterunit.com/",
    github: "",
  },
  {
    num: "05",
    category: "Web Scraping",
    title: "MLB Odds Scraper",
    description: "A Python-based web scraping solution that extracts MLB odds data using Selenium for dynamic content handling. Automates data collection from sports betting websites, providing real-time odds information for analysis and decision-making.",
    stack: [
      { name: "Selenium" },
      { name: "Python" }
    ],
    image: "/pic07.jpg",
    live: "",
    github: "https://github.com/Chinedu-E/mlb-odds",
  },
];


