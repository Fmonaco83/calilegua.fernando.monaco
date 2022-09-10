import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import { ItemCount } from '../itemcount/ItemCount';
import { useState } from "react";





export const ItemDetail = ({item}) => {

   const [cantidad, setCantidad] = useState(0)



   const handleAgregar = () => {
      console.log({
         ...item,
         cantidad
      })
 
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
            <div className='botn'>
               <Button className='btn bot '> COMPRAR</Button>
                     <ItemCount stock={item.stock}
                     counter={cantidad}
                     setCounter={setCantidad}
                     handleAgregar={handleAgregar}
                     />
            </div>
            <div className='st'>
               Stock {item.stock}
               Precio ${item.precio}
            </div>   
</div>            
         
    )
}
