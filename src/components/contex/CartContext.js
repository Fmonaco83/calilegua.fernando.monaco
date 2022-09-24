import { createContext, useEffect, useContext  } from "react";
import { useState } from "react";
import Swal from 'sweetalert2'


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
    return cart.reduce((acc, item) =>acc +item.cantidad, 0)
  }

 const emptyCart = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      setCart([])
      }
  })
  
 }

 const terminarCompra = (id) =>{
  Swal.fire({
    title: 'Compra realizada con exito',
    text: `Numero de orden: ${id} `,
    icon: 'success',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
  })
  setCart([])
 }

 const removeItem = (id) =>{
    setCart(cart.filter((item) => item.id !== id))
     
 }

 useEffect(() => {
  localStorage.setItem('carrito', JSON.stringify(cart))
}, [cart])

const cartTotal = () => { 
  return cart.reduce((acc,item) => acc + item.cantidad * item.precio, 0)
}

    return(
       
        <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            emptyCart,
            removeItem,
            cartTotal,
            terminarCompra
          } }>
            {children}
        
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
  return useContext(CartContext)
}