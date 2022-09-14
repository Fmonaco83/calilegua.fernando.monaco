import { Children, createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()


export const CartProvider = ({children}) => {


    const [cart, setCart] = useState([])

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
   return cart.some((item) => item.id === id)
  }

  const cartQuantity = () => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0)
  }

 const emptyCart = () => {
    setCart([])
 }

 const removeItem = (id) =>{
    setCart(cart.filter((item) => item.id !== id))
     
 }

    return(
       
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            emptyCart,
            removeItem
          } }>
            {children}
        
        </CartContext.Provider>
    )
}