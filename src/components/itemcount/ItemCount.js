
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';



export const ItemCount = ({stock, counter, setCounter,handleAgregar,}) => {





const sumar = () => {
    if(counter < stock) {
    setCounter(counter + 1)
   
 }
}

const restar = () =>{
    if(counter > 1){
    setCounter(counter-1)
   
} 
}


    return (
    <ButtonGroup size="ms" className="mb-2">
        <Button onClick={sumar}>+</Button>
            <p className="mx-2"> {counter} </p>
        <Button  onClick={restar}>-</Button>
        <Button className="mx-5" onClick={handleAgregar}>agregar</Button>
    </ButtonGroup> 

    
      
    )
}