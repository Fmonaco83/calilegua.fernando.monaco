import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import { ItemCount } from '../itemcount/ItemCount';
import { useContext, useState } from "react";
import { CartContext } from '../contex/CartContext';
import { Link } from 'react-router-dom';





export const ItemDetail = ({item}) => {

   
   const { cart, addToCart, isInCart } =useContext(CartContext)
   console.log(cart)
   
   const [cantidad, setCantidad] = useState(0)



   const handleAgregar = () => {
      console.log(isInCart(item.id))
      addToCart(item)
 
 }


    return (
         <div className='cardDet'>
            <div>   
               <img className='imagen' src={item.img} alt='dije'/>
            </div>
            <div className='titulo'>
               <h3>
                  {item.nombre}
               </h3>
            </div>
            <div className='textos'>
               {item.descripcion}
            </div>
            
            <div className='st'>
               Stock {item.stock}
               Precio ${item.precio}
               {
                  isInCart(item.id)
                   ?  <Link to="/cart" className='btn btn-primary '>Finalizar Compra</Link>
                   :
                        <div className='botn'>
            
                               <ItemCount stock={item.stock}
                               counter={cantidad}
                               setCounter={setCantidad}
                               handleAgregar={handleAgregar} />
                               
                        </div>

                     
               }


               
            </div>   
            
</div>            
         
    )
}
