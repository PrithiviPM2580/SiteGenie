import { AppRoute } from "./routes/AppRoute";
import Navbar from "./components/Navbar";
import { ProjectProvider } from "./features/projects/context/ProjectContext";

export const App = () => {
  return (
    <ProjectProvider>
      <Navbar />
      <AppRoute />
    </ProjectProvider>
  );
};
