import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordSent from "./pages/ForgotPasswordSent";
import ResetPassword from "./pages/ResetPassword";
import ResetPasswordSuccess from "./pages/ResetPasswordSuccess";
import CitizenHome from "./pages/CitizenHome";
import ReportPothole from "./pages/ReportPothole";
import Processing from "./pages/Processing";
import Confirmation from "./pages/Confirmation";
import MyReports from "./pages/MyReports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forgot-password/sent" element={<ForgotPasswordSent />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password/success" element={<ResetPasswordSuccess />} />

        <Route path="/inicio" element={<CitizenHome />} />
        <Route path="/reportar-baches" element={<ReportPothole />} />
        <Route path="/procesando" element={<Processing />} />
        <Route path="/confirmacion" element={<Confirmation />} />
        <Route path="/mis-reportes" element={<MyReports />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;