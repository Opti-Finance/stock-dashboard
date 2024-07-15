import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Models from './components/Models';
import About from "./components/About";

function App() {

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-500 dark:bg-gradient-to-r dark:from-black dark:to-purple-500">
        <Navbar />
        <Main />
        <About />
        <Models />        
      </div>
    </ThemeProvider>
  );
}

export default App;
