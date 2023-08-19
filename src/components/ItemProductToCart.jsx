const ItemProductToCart = ({product,deleteForOne, addForOne,deleteAllOfProduct,}) => {
  return (
    <>
      <tr key={product.id}>
        <td> <img src={product.image}  alt="imagen-producto"  className='image_cart' />
         </td>
         
        <td className="td-texto">{product.name}</td>
        <td className="td-texto">${product.price}</td>
        <td className="td-texto">{product.cantidad}</td>
        <td className="tabla-botones">
          <button className="boton-purchase boton-deleteForOne" onClick={()=> deleteForOne (product)}>-</button>
          <button className="boton-purchase boton-addForOne" onClick={()=>addForOne(product)} >+</button>
          <button className="boton-purchase boton-delete" onClick={()=>deleteAllOfProduct(product.id)}>x</button>
        </td>
      </tr>
    </>
    )
}

export default ItemProductToCart