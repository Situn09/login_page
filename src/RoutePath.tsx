import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import UserPage from "./components/UserPage";
import ThemeChanger from "./components/ThemeChanger";

const RoutePath = () => {
  return (
    <div>
      <ThemeChanger />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RoutePath;
