import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Home />} path="/" exact />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
