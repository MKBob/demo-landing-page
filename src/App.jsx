import './App.css'
import Card from './components/Card'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {

  return (
    <div className="global-bg min-h-screen">
      <Navbar />
      <Home />
      <Products />
      <Card />
    </div>
  )
}

export default App
