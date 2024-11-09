import { Route, Routes } from "react-router-dom";

import "./globals.css";
import RegisterForm from "./_auth/forms/registerForm";
import { Home } from "./_root/Pages";
import AuthLayoutForm from "./_auth/authLayoutForm";
import LoginForm from "./_auth/forms/LoginForm";
import RootLayout from "./_root/RootLayout";

const App = () => {
  return (
    <main className="flex full_screen">
      <Routes>
        <Route element={<AuthLayoutForm />}>
          <Route path="/log-in" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

export default App;
