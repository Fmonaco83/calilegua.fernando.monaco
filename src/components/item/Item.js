import Card from 'react-bootstrap/Card';
import './Item.css'
import { Link } from 'react-router-dom';




export const Item = ({item}) => {
    return(
      <Link className='linkCard' to={`/item/${item.id}`}>

    <Card  responsive="sm" className='tarjeta container' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.img} />
          <Card.Body className='textCard' >
              <Card.Title >
                {item.nombre}
              </Card.Title>
              <Card.Text>
                 $ {item.precio}
              </Card.Text>
              <Card.Text>
                  Stock {item.stock}
              </Card.Text>
          </Card.Body>
    </Card>
    </Link>
    
    )

}