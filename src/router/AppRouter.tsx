import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../views/HomePage";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
