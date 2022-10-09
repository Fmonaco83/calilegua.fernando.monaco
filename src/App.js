import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemdetailcontainer/ItemDetailContainer';
import { Cart } from './components/cart/Cart'
import { CartProvider } from './components/contex/CartContext'
import { Checkout } from './components/checkout/Checkout';







function App() {



  return (
  <CartProvider>
 
    <BrowserRouter>
          
          <NavBar/>
          
          <Routes>
             <Route path='/' element={ <ItemListContainer/> }/>
             <Route path='/data/:categoryId' element={ <ItemListContainer/> }/>
             <Route path='item/:itemId' element={ <ItemDetailContainer/> }/>
             <Route path='cart' element={<Cart/>}/>
             <Route path='*' element={ <Navigate to="/"/> }/>
             <Route path='/checkout'  element={<Checkout/>}/>
          </Routes>
    
    
     </BrowserRouter>
   

  </CartProvider>   
 );
}  
 
export default App;
