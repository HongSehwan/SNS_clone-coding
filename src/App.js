import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';
import { useSelector } from 'react-redux';

function App() {
  const { isLogin } = useSelector((state) => state.loginReducer);

  return (
    <>
      {isLogin ? <NavBar /> : null}
      <Routes>
        <Route path="/" element={isLogin ? <MainPage /> : <LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
