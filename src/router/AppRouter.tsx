import { Route, BrowserRouter as Router, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../views/HomePage";
import DeckForm from "../views/deck/DeckForm";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/add-deck" element={<DeckForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default AppRouter;
