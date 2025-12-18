
import './App.css'
import Footer from './components/Footer'
import HomePage from './pages/Home/HomePage'

function App() {


  return (
    <>
      <div className="flex flex-col min-h-screen justify-between ">
        <HomePage />
        <Footer />
      </div>

    </>
  )
}

export default App
