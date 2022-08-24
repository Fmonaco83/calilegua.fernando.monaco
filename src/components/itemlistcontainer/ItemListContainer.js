import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../assets/logocali.png';
import '../itemlistcontainer/ItemListContainer.css'




export const ItemListContainer = ( {greeting} ) => {
    return (
      <div className='car'>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={logo} />
        <Card.Body>
          <Card.Text>
            {greeting.descripcion} 
          </Card.Text>
          <Button variant="primary">{greeting.boton}</Button>
         </Card.Body>
       </Card>
     </div>

    )
}