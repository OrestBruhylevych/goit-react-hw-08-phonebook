import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import AppBar from './AppBar/AppBar';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';

export function App() {
  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  );
}
