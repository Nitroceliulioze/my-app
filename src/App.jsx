import "./App.css";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage  from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
