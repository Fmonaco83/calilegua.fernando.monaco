import { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export const ItemCount = ({initial, stock}) => {


let [counter, setCounter] = useState(initial)


const sumar = () => {
    if(counter < stock) {
    setCounter(counter + 1)
    console.log(counter)
 }
}

const restar = () =>{
    if(counter > initial){
    setCounter(counter-1)
    console.log(counter)
} 
}
    return (
    <ButtonGroup size="ms" className="mb-2">
        <Button onClick={sumar}>+</Button>
            <p className="mx-2"> {counter} </p>
        <Button  onClick={restar}>-</Button>
    </ButtonGroup>
      
    )
}