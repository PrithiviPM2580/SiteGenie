import React, { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

export default function useProjects() {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error("useProjects must be used within a ProjectProvider");
  }
  return context;
}
