import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logocali.png';
import '../navbar/NavBar.css'
import { CartWidget } from '../cartwidget/CartWidget';








export const NavBar = () => {
    return(
    
      <Navbar className='cn'>
        <Container>
          <Navbar.Brand href="#home">
            <div><img className='logo' src={logo} alt="corona"/></div>
          </Navbar.Brand>
          <Nav className="me-auto" >
            <Nav.Link  href="#home">Inicio</Nav.Link>
            <Nav.Link  href="#features">Productos</Nav.Link>
            <Nav.Link  href="#pricing">Preguntas Frecuentes</Nav.Link>
          </Nav>
          <CartWidget/>
       </Container>
      </Navbar>


    )
}