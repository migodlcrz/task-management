import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
      </Routes>
    </div>
  );
};

export default App;
