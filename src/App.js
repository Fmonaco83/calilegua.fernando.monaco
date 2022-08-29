import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div>
        <NavBar/>
        
        <ItemListContainer greeting={ {descripcion: 'Proximamente podras disfrutar de nuestros productos', boton:'PROXIMAMENTE'} }  />
        
    </div>
  );
}  

export default App;
