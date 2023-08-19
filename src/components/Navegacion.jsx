import {Link} from 'react-router-dom'

import { useContext, useState } from 'react';
import { CartProvider } from '../context/cartContext';
const Navegacion = () => {
  const { cart, setModal } = useContext(CartProvider);
  let cantidadTotal = 0;
  if(cart.length> 0){
    for(let i = 0 ; i<cart.length; i ++){
      cantidadTotal += cart[i].cantidad
    }
  }
  
  return (
    <nav className='barra'>
        <Link className='enlace_texto' to='/' onClick={() => setModal(!true)}>Home</Link>
        <Link className='enlace_texto' to='/products'  onClick={() => setModal(!true)}>products</Link>
        <Link className='enlace_texto' to='/contact'  onClick={() => setModal(!true)}>contact </Link>
        <div className='contenido-logos'>
          <img className='carrito-compras' src="images/CarritoClaro.png" alt="carrito-compras"
          onClick={() => setModal(!false)}/>
          {cart.length>0 ? (
            <p className='texto-cantidad-total'>+{cantidadTotal}</p>
          ): ''}
          
        </div>
  
      
       
    </nav>
  )
}

export default Navegacion