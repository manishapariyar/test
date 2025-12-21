
import './App.css'
import Footer from './components/Footer'
import HomePage from './pages/Home/HomePage'
import TrandingJods from './components/TrandingJods'

function App() {


  return (
    <>
      <div className="flex flex-col justify-between ">
        <HomePage />
        <TrandingJods />
        <Footer />
      </div>

    </>
  )
}

export default App
