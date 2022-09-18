import { useContext } from "react"
import { CartContext } from "../contex/CartContext"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



export const Cart = () => {

  
    const { cart, emptyCart, removeItem, cartTotal } = useContext(CartContext)

    
    return(
     cart != 0 ?
      <div>
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
      <h3>Total: ${cartTotal()}</h3>
        </div>
 : <Link className="txtb" to='/'>
  <button className="btn btn-primary">Selecciona tus productos</button>
  </Link>   
  )
}