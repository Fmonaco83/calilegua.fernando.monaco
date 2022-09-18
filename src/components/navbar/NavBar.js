import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logocali.png';
import '../navbar/NavBar.css'
import { CartWidget } from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom';




export const NavBar = () => {
    return(
    
      <Navbar className='cn'>
        <Container>
          <Navbar.Brand href="#home">
            <Link className="txtb" to='/'>
            <div><img className='logo' src={logo} alt="corona"/></div>
            </Link>
          </Navbar.Brand>
          <Nav className="me-auto mx-5 barra" >
            <Link className="txtb" to='/'>Inicio</Link>
            <Link className="txtb" to='/nosotros'>Nosotros</Link>
            <Link className="txtb" to='/preguntasfrecuentes'>Preguntas Frecuentes</Link>
            <Link className="txtb" to='/data/plata'>Plata</Link>
            <Link className="txtb" to='/data/fantansia'>Fantasia</Link>
            <Link className="txtb" to='/data/pulseras'>Pulseras</Link>
          </Nav>
          <CartWidget/>
       </Container>
      </Navbar>


    )
}