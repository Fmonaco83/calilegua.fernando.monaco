import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import { ItemCount } from '../itemcount/ItemCount';





export const ItemDetail = ({data}) => {
    return (
         <div className='cardDet'>
            <div>   
               <img className='imagen' src={data.img} alt='dije'/>
            </div>
            <div className='titulo'>
               <h3>
                  {data.nombre}
               </h3>
            </div>
            <div className='textos'>
               
                  {data.descripcion}
              
            </div>
            <div className='botn'>
               <Button className='btn bot '> COMPRAR</Button>
               <ItemCount stock={data.stock}/>
            </div>
            <div className='st'>
               Stock {data.stock}
               Precio ${data.precio}
            </div>   
            
</div>            
         
    )
}
