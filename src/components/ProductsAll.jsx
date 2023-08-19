import { useState, useEffect, useContext} from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { CartProvider } from '../context/cartContext'
import ProductsFilters from './ProductsFilters'
import Products from './Products'
import FormSearch from './FormSearch';
import data from '../api/data'

const ProductsAll = () => {
    const Navigate = useNavigate()
    const{ setViewProduct, setModal} = useContext(CartProvider)
    const [products, setProducts] = useState([])
    const [busqueda, setBusqueda] = useState('')
    const [productsFilters, setProductsFilter] = useState([])

    // hace la peticion a la api
    const getInfo = ()=>{

      setProducts(data)
  
    }

    useEffect(()=>{
      getInfo()
     
  
    }, [])

    //Filtrar para hacer una busqueda
    const handleBusqueda =(e)=>{
      e.preventDefault()
      const filterProduct = products.filter(item=>{
        return item.name.toLowerCase().includes(busqueda.toLowerCase())
      })
      setProductsFilter(filterProduct) 
    }
    const handleView = (product)=>{
        setViewProduct(product)
        Navigate('/view-product')
    }
    
  return (
    <>  
      <div onClick={() => setModal(!true)}>
         <FormSearch handleBusqueda={handleBusqueda} busqueda={ busqueda} setBusqueda={setBusqueda}/>
             <div className='contendor'>{ productsFilters.length ? 
                productsFilters.map(product=>(
               <ProductsFilters key={product.id} product={product} handleView={handleView}/>
                 ))
              : products.map(product=>(
              <Products  key={product.id} product={product}  handleView={handleView}/>

               ))}
            </div>
      </div>
     
    </>
  )
}

export default ProductsAll