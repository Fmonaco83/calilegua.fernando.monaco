import Button from 'react-bootstrap/Button';
import { ItemCount } from '../itemcount/ItemCount';
import './ItemDetail.css'



export const ItemDetail = ({ nombre, descripcion, img, precio, stock }) => {
    return (
         <div className='cardDet'>
            <div>   
               <img className='imagen' src={img} alt='dije'/>
            </div>
            <div className='titulo'>
               <h3>
                  {nombre}
               </h3>
            </div>
            <div className='textos'>
               
                  {descripcion}
              
            </div>
            <div className='botn'>
               <Button className='btn bot '>Comprar</Button>
            </div>
            <div className='st'>
               Stock {stock}
               <ItemCount size='lg' stock={stock}/>
               Precio ${precio}
            </div>   
</div>            
         
    )
}
