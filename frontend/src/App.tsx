import { AppRoute } from "./routes/AppRoute";
import Navbar from "./components/Navbar";
import { ProjectProvider } from "./features/projects/context/ProjectContext";
import { useLocation } from "react-router-dom";

export const App = () => {
  const { pathname } = useLocation();
  const isProjectDetailPage = /^\/projects\/[^/]+$/.test(pathname);

  return (
    <ProjectProvider>
      {!isProjectDetailPage ? <Navbar /> : null}
      <AppRoute />
    </ProjectProvider>
  );
};
