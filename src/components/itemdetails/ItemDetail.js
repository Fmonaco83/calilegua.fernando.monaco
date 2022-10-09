import './ItemDetail.css'
import { ItemCount } from '../itemcount/ItemCount';
import { useContext, useState } from "react";
import { CartContext } from '../contex/CartContext';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';






export const ItemDetail = ({item}) => {

   
   const { cart, addToCart, isInCart } =useContext(CartContext)
  
   
   const [cantidad, setCantidad] = useState(1)



   const handleAgregar = () => {
      addToCart({
         ...item,
         cantidad
      })
      
 
 }


    return (


 
      
       <div className='mx-5 mt-5 row'>
              
      <Card className='cardDetalle' style={{ width: '30rem' }}>
            <Card.Img variant="top" src={item.img} alt='dije' />
      </Card>
      
      <Card className=' col '>
            <Card.Body>
        
              <Card.Text >
                   <h1>
                     {item.nombre}
                   </h1>
               </Card.Text>
                   <hr/>
               <Card.Text>
                   <h4>
                     Categoria:{item.category}
                     <br/><br/>
                  {item.descripcion}
                   </h4>
               </Card.Text>
                     <br/>
               <Card.Text>
                   <h4>
                     Precio ${item.precio}
                     </h4>
               </Card.Text>
                     Stock {item.stock}
               <Card.Text>
       
                     <br/><hr/>
       
        {
                  isInCart(item.id)
                   ?  <Link to="/cart" className='btn btn-primary '>Finalizar Compra</Link> 
                   
                   :
                        <div className='botn'>
                           
                           
                               <ItemCount stock={item.stock}
                               counter={cantidad}
                               setCounter={setCantidad}
                               handleAgregar={handleAgregar} 
                               />
                                 
                               
                        </div>
               
                     
               }
       </Card.Text> 
       <Link className="seguirComprando" to='/'>
           <button className="btn btn-warning">Seguir Comprando</button>
        </Link>
      </Card.Body>       
     
       
      </Card>

                  
            


               
      </div>   
            
           

         
    )
}
