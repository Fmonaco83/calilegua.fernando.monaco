import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logocali.png';
import '../navbar/NavBar.css'
import { CartWidget } from '../cartwidget/CartWidget';
import { Link } from 'react-router-dom';





export const NavBar = () => {
    return(

      <Navbar  expand="lg" className='cn'>
      <Container>
        <Navbar.Brand href="#home">
            <Link className="txtb" to='/'>
            <div><img className='logo' src={logo} alt="corona"/></div>
            </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto barra">
            <Link className="txtb" to='/'>Inicio</Link>
            <Link className="txtb" to='/data/plata'>Plata</Link>
            <Link className="txtb" to='/data/fantansia'>Fantasia</Link>
            <Link className="txtb" to='/data/pulseras'>Pulseras</Link>           
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
   
 

      

