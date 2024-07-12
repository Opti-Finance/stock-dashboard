import './index.css'
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <>
      <main className="flex flex-col items-center">
        <Navbar />
        <Main />
      </main>
    </>
  )
}

export default App
