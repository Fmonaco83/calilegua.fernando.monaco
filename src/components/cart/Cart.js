import { useContext } from "react"
import { CartContext } from "../contex/CartContext"
import { Item } from "../item/Item"
import Card from 'react-bootstrap/Card';
import { Button } from "bootstrap";

export const Cart = () => {

    const { cart, emptyCart, removeItem} = useContext(CartContext)


    return(
      <div>  
        <h3>
            Este es el Carrito 
        </h3>
        {cart.map((item) => (

            <div key={item.id}>
                  <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Card.Text>
        $ {item.precio}
        Cantidad: {item.cantidad}
        </Card.Text>
        </Card.Body>
        <button onClick={() => removeItem(item.id)} className="btn btn-primary">Eliminar</button>
        </Card>

            </div>

        ))}
      <button onClick={emptyCart} className="btn btn-primary">Vaciar Carrito</button>

        </div>
    )
}