import { Routes, Route } from 'react-router-dom';

import ContactsPage from 'pages/ContactsPage';
import AppBar from './AppBar/AppBar';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { authOperations } from 'redux/auth';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

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
