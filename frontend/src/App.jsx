import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import ActiveSectionContextProvider from './context/ActiveSectionContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {

  return (
    <ThemeProvider>
      <ActiveSectionContextProvider>
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-500 dark:bg-gradient-to-r dark:from-black dark:to-purple-500">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/register' element={<Register />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </BrowserRouter>
        </div>
      </ActiveSectionContextProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-500 dark:bg-gradient-to-r dark:from-black dark:to-purple-500">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
                  
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
