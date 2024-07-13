import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Carousel from './components/Carousel';
import botData from "./lib/bot-data"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-cyan-500 dark:bg-gradient-to-r dark:from-black dark:to-purple-500">
        <Navbar />
        <Main />
        <div id="models" className="flex-grow">
          <Carousel data={botData} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
