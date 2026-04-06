import { Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/pages/HomePage";
import CommunityPage from "@/features/community/pages/CommunityPage";
import PreviewPage from "@/features/preview/pages/PreviewPage";
import PreviewVersionPage from "@/features/preview/pages/PreviewVersionPage";
import ProjectDetailPage from "@/features/projects/pages/ProjectDetailPage";
import ProjectsPage from "@/features/projects/pages/ProjectsPage";
import ViewProjectPage from "@/features/projects/pages/ViewProjectPage";
import PricingPage from "@/features/pricing/pages/PricingPage";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/preview/:projectId" element={<PreviewPage />} />
      <Route
        path="/preview/:projectId/:versionId"
        element={<PreviewVersionPage />}
      />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/view/:projectId" element={<ViewProjectPage />} />
    </Routes>
  );
};
