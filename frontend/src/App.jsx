import React from 'react'
import { useTheme, ThemeProvider } from './context/ThemeContext'
import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  
  return (
    <ThemeProvider>
        <main className="flex flex-col items-center">
          <Navbar />
          <Main />
        </main>
    </ThemeProvider>
  )
}

export default App
