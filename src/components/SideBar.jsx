
import React, { useEffect, useRef, useState } from 'react'
import { useContext } from 'react'
import { CartProvider } from '../context/cartContext'
import { Link } from 'react-router-dom'
import ItemProductToCart from './ItemProductToCart'

const SideBar = () => {
    const {cart, deleteAllOfProduct,deleteForOne,addForOne,modal , setModal} = useContext(CartProvider);
    const [listCart, setListCart] = useState([])
    let precioTotal = 0;
    
    let precio = 0;

    for(let i = 0 ; i<cart.length; i ++){
      precioTotal += cart[i].price;
      
    }

      if(cart.length){
        cart.map (producto => {
          return {
            ...producto,
          price : producto.price * producto.cantidad
          }
        })
      }

    //setListCart(productosCantidad)
    //Calcular el precio total de todos los pedidos



    return (
      <div className='sidebar' style={{ display : modal ? 'block' : 'none' }}>
          <p className='boton-close' onClick={() => setModal(!true)} >X</p>
          <div className='siderbar-table'>
            <div >
             {cart.length>0 ? (
              <>
               <table>
                 <thead>
                   <tr>
                    <th>producto</th>
                     <th>nombre</th>
                     <th>precio</th>
                     <th>cantidad</th>
                     <th></th>
                     <th></th>
                     <th></th>
                   </tr>
                 </thead>
                 <tbody>
                   {cart.map(product=>(
                     <ItemProductToCart precio={precio} key={product.id} product={product} addForOne={addForOne} deleteForOne={deleteForOne} deleteAllOfProduct={deleteAllOfProduct}/>
                   ))}
                 </tbody>
               </table>
               <h2 className='texto-precio-total'>Total: $ {precioTotal}</h2>
               <button className='boton-pagar'>Pagar</button>
                 </>
               ): 
               <div className='lista-vacia'>
                   <h1 className='texto-pedidos'>Aún no tienes pedidos</h1>
                   <img className='carrito-vacio' src="images/carro-vacio.png" alt="image-empty" />
               </div>}
            </div>
        </div>
      </div>
    )
};

export default SideBar