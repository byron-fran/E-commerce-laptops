
import { Routes, Route } from 'react-router-dom'
import { CartContext } from './context/cartContext'
import ProductsAll from './components/ProductsAll'
import Home from './Home'
import Navegacion from './components/Navegacion'
import ViewProduct from './components/ViewProduct'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SideBar from './components/SideBar'
import '../public/css/app.css'

function App() {

  return (
    <>
      <CartContext>
        <Navegacion/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/products' Component={ProductsAll}/>
          <Route path='/contact' Component={Contact}/>
          <Route path='/view-product' Component={ViewProduct}/>
          <Route path='/contact' Component={Contact}/>
        </Routes>
        <SideBar/>
        <Footer/>
      </CartContext>
      
    </>
  )
}

export default App
