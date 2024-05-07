import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router'
import FormProduct from './Components/FormProduct'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<FormProduct />} />
      </Routes>
    </>
  )
}

export default App
