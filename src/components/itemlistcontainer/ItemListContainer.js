import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../assets/logocali.png';
import '../itemlistcontainer/ItemListContainer.css';
import {ItemCount} from '../itemcount/ItemCount';




export const ItemListContainer = ( {greeting} ) => {
    return (
      <div className='car'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Text>
            {greeting.descripcion} 
          </Card.Text>
          <Card.Text>
            <ItemCount initial={1} stock={7}/>
             </Card.Text>
            <Button variant="primary">{greeting.boton}</Button>
         </Card.Body>
       </Card>
     </div>

    )
}