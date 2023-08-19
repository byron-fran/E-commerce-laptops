import { types } from "./types"
import { useEffect } from "react"
import { useRef } from "react"


export const reducer = (state, action)=>{
    switch(action.type){
        case types.addTocart: 
        return [...state, action.payload]
        case types.deleteAllOfProduct:
            return state.filter(product => product.id !== action.payload)
            case types.deleteForOne: {
                const productExist = state.find((product) => product.id === action.payload.id);
          
                if (productExist && productExist.cantidad >= 1) {
                  return state.map((product) => {
                    if (product.id === action.payload.id) {
                       const precioTotal =  product.price
                       const cantidadTotal = product.cantidad
                       const divisor = precioTotal / cantidadTotal
                      return {
                        ...product,
                        cantidad: product.cantidad - 1,
                        price: product.price - divisor, // Resta el precio del producto eliminado
                        image: action.payload.image,
                        name: action.payload.name,
                      };
                    }
                    return product;
                  });
                }
                return state.filter((product) => product.id !== action.payload.id);
              }

        case types.addForOne:{
            const productExist = state.find(product => product.id === action.payload.id)
            if(productExist && productExist.cantidad >=1){
                return state.map(product =>{
                    if(product.id === action.payload.id){
                        const precioTotal = product.price;
                        const cantidadTotal = product.cantidad;
                        const divisor = precioTotal / cantidadTotal
                        return {
                            ...product,
                            cantidad : product.cantidad +1,
                            price : product.price + divisor,
                            image : action.payload.image,
                            name : action.payload.name
                        }
                    }
                     return product
                });
            }
            return state.filter((product) => product.id !== action.payload.id);
        } 
        case types.removeInfoProduct:
            return state.filter(product => product.id !== action.payload) 
        default:
            return state       
    }
        
}