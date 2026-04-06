import type { Project } from "@/types";
import { createContext, useEffect, useState } from "react";

interface ProjectContextType {
  projects: Project | null;
  loading: boolean;
  error: string | null;
  setProjects: React.Dispatch<React.SetStateAction<Project | null>>;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export const ProjectProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [projects, setProjects] = useState<Project | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function fetchProjects() {
    setTimeout(() => {}, 1000);
  }

  useEffect(() => {
    fetchProjects();
  }, []);
  return (
    <ProjectContext.Provider
      value={{ projects, loading, error, setProjects, setLoading, setError }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
