import { NavBar } from './components/navbar/NavBar';
import { ItemListContainer } from './components/itemlistcontainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailConteiner } from './components/itemdetailconteiner/ItemDetailConteiner';



function App() {
  return (
    <div>
        <NavBar/>
        
        <ItemListContainer/>

      
        <ItemDetailConteiner/>
     
       
    </div>  
  );
}  

export default App;
