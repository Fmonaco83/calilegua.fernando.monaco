import Card from 'react-bootstrap/Card';
import { ItemCount } from '../itemcount/ItemCount'
import './Item.css'

export const Item = ({nombre, descripcion, img, precio, stock}) => {
    return(
        <Card className='tarjeta' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>
        {descripcion}
        </Card.Text>
        <Card.Text>
        $ {precio}
        </Card.Text>
        <Card.Text>
        Stock {stock}
        </Card.Text>
        <ItemCount stock={stock}/>
      </Card.Body>
    </Card>

    )

}