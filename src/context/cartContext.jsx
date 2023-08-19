import { useContext, createContext, useReducer, useState, } from "react";
import { reducer } from "../js/reducer";
import { types } from "../js/types";

const initialState =[]

export const CartProvider = createContext()

export const CartContext = ({children})=>{
    const [viewProduct, setViewProduct] = useState({})
    const [modal , setModal] = useState(false);
    const [cart, dispatch] = useReducer(reducer, initialState);

    cart.map(product =>{
        if(product.price === 0 || product.cantidad === 0){
            dispatch({type: types.removeInfoProduct, payload: product.id})
        }
    })

    const addToCart = (product)=>{
     dispatch({type :types.addTocart, payload : product })
         
    }

    const deleteAllOfProduct =(product=>{
        dispatch({type : types.deleteAllOfProduct, payload : product})
    })

    const deleteForOne = (product)=>{
   
        dispatch({type : types.deleteForOne, payload : product})

    }
    const addForOne = (product)=>{
        dispatch({type : types.addForOne, payload :product})
    }


    return(
        <CartProvider.Provider value={{cart, addToCart,deleteAllOfProduct,deleteForOne,addForOne,viewProduct, setViewProduct,modal , setModal}}>
                {children}
        </CartProvider.Provider>
    )
}

