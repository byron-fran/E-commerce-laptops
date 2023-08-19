import { useContext, useEffect, useState } from "react"
import { CartProvider } from "../context/cartContext"
import { useNavigate } from "react-router-dom"
import ProductsAll from "./ProductsAll"

const ViewProduct = () => {

    const {cart, addToCart,viewProduct, setModal} = useContext(CartProvider)
    const {specs} = viewProduct;
    const [productView, setProductView] =useState({})
    const Navigate = useNavigate()
    
    const handleAdd= ()=>{
        Navigate('/products')
        const existeProducto = cart.find( producto => producto.id === viewProduct.id) //verifica si hay productos duplicados
  
         if(existeProducto){
            cart.map(producto =>{
              if( producto.id === viewProduct.id){
                producto.cantidad ++ // aumenta la cantidad en 1
                producto.price += viewProduct.price;// aumenta el precio segun la cantidad
               
                return producto
              }
              else{
                return producto
              }
            })
         }
        else{
            addToCart(viewProduct)
        }
      }

  return (
    <>
     <div onClick={() => setModal(!true)}>
      {specs !== undefined ? (
      <div className="view_product">
        <div className="grid_view">
        <img className="imagen_view" src={`${viewProduct.image}`} alt="image-product" />
       <div className="view_info">
         <ul>
           <h4>{viewProduct.name}</h4>
           <li>{specs[0].screen}</li>
           <li>{specs[0].ram}</li>
           <li>{specs[0].ssd}</li>
           <li>{specs[0].size}</li>
           {specs[0].graphics &&  <li>{specs[0].graphics}</li> }
           <li>{specs[0].procesador}</li>
           <li>{specs[0].batery}</li>
             
         </ul>
       </div>
      </div>
      <button onClick={handleAdd} className="view_boton" >Agregar al carrito</button>
      </div>
          ):<ProductsAll/>}
      </div>
    </>
  )
}

export default ViewProduct