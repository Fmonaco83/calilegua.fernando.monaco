import { useContext } from "react"
import { CartContext } from "../contex/CartContext"
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import '../cart/cart.css';


export const Cart = () => {

  
    const { cart, emptyCart, removeItem, cartTotal } = useContext(CartContext)

    
    return(
     cart != 0 ?
      <div className="mt-5" >
        {cart.map((item) => (

        <div className="row" key={item.id}>
             <Card style={{ width: '10rem' }}>
                    <Card.Img variant="top" src={item.img} />
              </Card>    
              <Card className="col">
                 <Card.Body>
                    <Card.Title>
                        {item.nombre}
                    </Card.Title>
                    <Card.Text>
                        {item.descripcion}
                    </Card.Text>
                    <Card.Text>
                        Precio $ {item.precio}
                        <br/><hr/>
                        Cantidad: {item.cantidad}
                    </Card.Text>
                        <hr/>
                    <Card.Text>
                
                    </Card.Text>
                    </Card.Body>
                <Icon icon="ep:delete" onClick={() => removeItem(item.id)}> </Icon>
            </Card> 
      </div>
        
        ))}
           <h3>Total: ${cartTotal()}</h3>
      <button onClick={emptyCart} className="btn btn-primary mx-3 my-5">Vaciar Carrito</button>
      <Link to="/checkout" className='btn btn-primary my-2'>Terminar Compra</Link>
   
        </div>
        : <Link className="seguirComprando" to='/'>
          <button className="btn btn-primary">Selecciona tus productos</button>
          </Link>   
  )
}