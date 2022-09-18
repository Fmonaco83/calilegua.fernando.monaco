import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';




export const Item = ({item}) => {



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
        
        <Link to={`/item/${item.id}`} className='btn btn-primary my-2'>Comprar</Link>
      </Card.Body>
    </Card>

    )

}