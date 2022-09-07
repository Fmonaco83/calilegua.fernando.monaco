import Card from 'react-bootstrap/Card';
import { ItemCount } from '../itemcount/ItemCount'
import './Item.css'
import { Link } from 'react-router-dom';
import { items } from '../../data/data';
import { ItemDetailContainer } from '../itemdetailcontainer/ItemDetailContainer';


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
        <ItemCount stock={item.stock}/>
        <Link to={`/item/${item.id}`} className='btn btn-primary my-2'>Ver Mas</Link>
      </Card.Body>
    </Card>

    )

}