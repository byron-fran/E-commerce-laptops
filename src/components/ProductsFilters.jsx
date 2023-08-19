

const ProductsFilters = ({product,handleAdd, handleView}) => {
    
  return (
    <div className="card"> 
        <img src={`${product.image} `} alt='imagen' className='image_product'/>
            <div className="product_info">
            <h2>{product.name}</h2>
            <h2 className="product_precio">${product.price}</h2>
            </div>
        
        <button className="product_boton" onClick={()=>handleView(product)}>ver</button>
    </div>
  )
}

export default ProductsFilters