import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Link } from "react-router-dom";
import { ItemDetail } from "../itemdetails/ItemDetail";


export const ItemCount = ({stock, counter, setCounter,handleAgregar,agregar}) => {





const sumar = () => {
    if(counter < stock) {
    setCounter(counter + 1)
    console.log(counter)
 }
}

const restar = () =>{
    if(counter > 0){
    setCounter(counter-1)
    console.log(counter)
} 
}


    return (
    <ButtonGroup size="ms" className="mb-2">
        <Button onClick={sumar}>+</Button>
            <p className="mx-2"> {counter} </p>
        <Button  onClick={restar}>-</Button>
        <Link onClick={handleAgregar} to={`/cart/${agregar}`} className='btn btn-primary my-2'>Agregar al Carrito</Link>

    </ButtonGroup> 

    
      
    )
}