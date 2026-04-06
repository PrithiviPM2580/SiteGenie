import { Routes, Route } from "react-router-dom";

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/pricing" element={<div>Pricing</div>} />
      <Route path="/projects/:projectId" element={<div>Project</div>} />
      <Route path="/projects" element={<div>Projects</div>} />
      <Route path="/preview/:projectId" element={<div>Preview</div>} />
      <Route
        path="/preview/:projectId/:versionId"
        element={<div>Preview</div>}
      />
      <Route path="/community" element={<div>Community</div>} />
      <Route path="/view/:projectId" element={<div>View</div>} />
    </Routes>
  );
};
