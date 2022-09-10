import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Nosotros } from './components/nosotros/Nosotros';
import { PreguntasFrecuentes } from './components/preguntasfrecuentes/PreguntasFrecuentes';
import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
import { Cart } from './components/cart/Cart'

function App() {
  return (

    <BrowserRouter>
          
          <NavBar/>
          
          <Routes>
             <Route path='/' element={ <ItemListContainer/> }/>
             <Route path='/data/:categoryId' element={ <ItemListContainer/> }/>
             <Route path='item/:itemId' element={ <ItemDetailContainer/> }/>
             <Route path='cart/:agregar' element={<Cart/>}/>
             <Route path='/nosotros' element={ <Nosotros/> }/>
             <Route path='/preguntasfrecuentes' element={ <PreguntasFrecuentes/> }/>
             <Route path='*' element={ <Navigate to="/"/> }/>
          </Routes>
    
    
     </BrowserRouter>
 );
}  

export default App;
