import { Route, Routes } from 'react-router-dom';

import "./globals.css";
import LoginForm from './_auth/Form/loginForm';
import RegisterForm from './_auth/Form/registerForm';
import { Home } from './_root/Pages';
import AuthLayoutForm from './_auth/authLayoutForm';


const App = () => {
    return (
        <main className="flex full_screen">
            <Routes>
                <Route element={<AuthLayoutForm />}>
                    <Route path="/log-in" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />

                </Route>
                <Route index element={<Home />} />
            </Routes>

        </main>
    )
}

export default App