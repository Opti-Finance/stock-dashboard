import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Carousel from './components/Carousel'
import bot1 from './assets/bot1.png'
import bot2 from './assets/bot2.png'
import bot3 from './assets/bot3.png'

function App() {
  const botData = [
    {
      image: bot1,
      title: 'Slide 1',
      description: 'loreum ipsum dolor sit amet...',
      url: 'https://example.com/1',
    },
    {
      image: bot2,
      title: 'Slide 2',
      description: 'Occaecat pariatur labore cillum id...',
      url: 'https://example.com/2',
    },
    {
      image: bot3,
      title: 'Slide 3',
      description: 'Esse aliquip duis adipisicing est nostrud minim...',
      url: 'https://example.com/3',
    },
  ];

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Main />
        <div id="models" className="flex-grow">
          <Carousel data={botData}/>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App