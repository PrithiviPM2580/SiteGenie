import { AppRoute } from "./routes/AppRoute";
import Navbar from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <AppRoute />;
    </>
  );
};
