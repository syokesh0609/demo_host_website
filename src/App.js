import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import TwoFactorAuth from "./components/TwoFactor/TwoFactorAuth";

function App() {
  return (
    <BrowserRouter basename="/demo_host_website">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/2fa" element={<TwoFactorAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
