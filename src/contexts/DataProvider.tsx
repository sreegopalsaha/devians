import type { EventType } from "@/types/event-types";
import type { StatType } from "@/types/stat-types";
import { createContext, useContext } from "react";

type DataContextType = {
  events: EventType[];
  stats: StatType[];
};

const events: EventType[] = [
  {
    title: "Intro to Git & GitHub for Beginners",
    location: "Online",
    date: "Jul 30",
    image: "/events/git-github.png",
  },
  {
    title: "Getting Started with bkite: A Backend Starter Tool",
    location: "Online",
    date: "Aug 2",
    image: "/events/bkite-intro.png",
  },
  {
    title: "What is Devians? Inside the Student Tech Movement",
    location: "Online",
    date: "Aug 4",
    image: "/events/devians-session.png",
  },
  {
    title: "Build a Portfolio with React + Vite + Shadcn",
    location: "Online",
    date: "Aug 6",
    image: "/events/portfolio-react.png",
  },
  {
    title: "Demystifying Open Source: How to Contribute the Right Way",
    location: "Online",
    date: "Aug 8",
    image: "/events/open-source.png",
  },
];

const stats: StatType[] = [
  { value: "100+", label: "Active Members" },
  { value: "5+", label: "Colleges in West Bengal" },
  { value: "10+", label: "Projects Built" },
  { value: "5+", label: "Community Events" },
  { value: "5+", label: "Mentors & Core Team" },
  { value: "2025", label: "Founded In" },
];

const DataContext = createContext<DataContextType | null>(null);

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <DataContext.Provider value={{ events, stats }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) throw new Error("useData must be used inside DataProvider");
  return context;
};
