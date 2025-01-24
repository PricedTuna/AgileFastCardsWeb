import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../views/HomePage";
import StackPage from "../views/StackPage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="profile" element={<StackPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
