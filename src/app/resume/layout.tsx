import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Nedu Ekeruche - Toronto Software Developer",
  description: "Resume and professional experience of Nedu Ekeruche, a software developer in Toronto. Full-stack development, data analytics, machine learning expertise, and professional certifications.",
  openGraph: {
    title: "Resume | Nedu Ekeruche - Toronto Software Developer",
    description: "Resume and professional experience of Nedu Ekeruche, a software developer in Toronto.",
    url: "https://neduekeruche.me/resume",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}


