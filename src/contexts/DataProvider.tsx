import type { EventType } from "@/types/event-types";
import type { SocialLinksType } from "@/types/socials-types";
import type { StatType } from "@/types/stat-types";
import { createContext, useContext } from "react";

type DataContextType = {
  events: EventType[];
  stats: StatType[];
  socialLinks: SocialLinksType;
};

const events: EventType[] = [
  {
    title: "Kickoff: Inside the Devians Tech Movement",
    location: "Online",
    date: "Jun 6",
    image: "/event-placeholder.png",
  },
  {
    title: "Design with DevTools: Figma + Tailwind Tips",
    location: "Online",
    date: "Jun 18",
    image: "/event-placeholder.png",
  },
  {
    title: "Hackathon 101: Win Your First Hack",
    location: "Online",
    date: "Jun 30",
    image: "/event-placeholder.png",
  },
  {
    title: "Offline AI: Building Smart Tools Without Cloud",
    location: "Online",
    date: "Jul 10",
    image: "/event-placeholder.png",
  },
  {
    title: "Devians Open Mic: Build, Break, Brag!",
    location: "Online",
    date: "Jul 18",
    image: "/event-placeholder.png",
  },
];

const stats: StatType[] = [
  { value: "200+", label: "Active Members" },
  { value: "5+", label: "Colleges in West Bengal" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Community Events" },
  { value: "10+", label: "Mentors & Core Team" },
  { value: "2025", label: "Founded In" },
];

const socialLinks: SocialLinksType = {
  linkedin: "https://www.linkedin.com/company/devians",
  instagram: "https://www.instagram.com/the_devians",
  whatsapp: "https://chat.whatsapp.com/L8A5eDhSlhDFUgdkN0f1Wc",
  twitter: "https://www.x.com/the_devians",
  discord: "https://discord.gg/UY7T57dqYE",
  email: "sreegopal0101@gmail.com",
  website: "https://devians.vercel.app",
};

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={{ events, stats, socialLinks }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};
