import { useState } from "react"
import { CartContext } from "../contex/CartContext"
import { useContext } from 'react';
import { createRoutesFromChildren, Navigate } from "react-router-dom";
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config";



export const Checkout = () => {
    

    const { cart, cartTotal, terminarCompra} = useContext(CartContext)


    const [values, setValues] = useState({
        nombre:'',
        email:'',
        direccion:''
    })

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })

    }

     

    const handleSubmit = (e) => {
        e.preventDefault()

        
       
        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
            
            
        }
        console.log("Submit del form")
            console.log(orden)

      const ordenesRef =collection(db, 'ordenes')

      addDoc(ordenesRef,orden)
        .then((doc) => {
            console.log(doc.id)
            terminarCompra(doc.id)
        })
    }

    
    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className="container my-5">
        <h3>este es el checkout</h3>
        <form onSubmit={handleSubmit}>
            <input 
                name="nombre"
                onChange={handleImputChange}
                value={values.nombre}
                type={'text'} 
                className=" my-3 form-control" 
                placeholder="Nombre"
            />
            <input 
                name="email"
                onChange={handleImputChange}
                value={values.email}
                type={'email'} 
                className=" my-3 form-control" 
                placeholder="Mail"
            />
            <input 
                name="direccion"
                onChange={handleImputChange}
                value={values.direccion}
                type={'text'} 
                className=" my-3 form-control" 
                placeholder="Direccion"
            />
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>  
    )
}