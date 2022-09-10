import Card from 'react-bootstrap/Card';
import { ItemCount } from '../itemcount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom';
import { useState } from "react";
import { ItemDetail } from '../itemdetails/ItemDetail';


export const Item = ({item,}) => {


  const [cantidad, setCantidad] = useState(0)



  const handleAgregar = () => {
     console.log({
        ...item,
        cantidad
     })

}

    return(
        <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title>{item.nombre}</Card.Title>
        <Card.Text>
        {item.descripcion}
        </Card.Text>
        <Card.Text>
        $ {item.precio}
        </Card.Text>
        <Card.Text>
        Stock {item.stock}
        </Card.Text>
        <ItemCount stock={item.stock}
          counter={cantidad}
          setCounter={setCantidad}
          handleAgregar={handleAgregar}
        />
        <Link to={`/item/${item.id}`} className='btn btn-primary my-2'>Ver Mas</Link>
      </Card.Body>
    </Card>

    )

}