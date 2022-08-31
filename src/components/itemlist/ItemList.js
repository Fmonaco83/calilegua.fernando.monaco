import { Item } from '../item/Item';
import { useEffect, useState } from 'react';
import { items } from '../../data/data';
import './ItemList.css'

export const ItemList = () => {

    const [data, setData] = useState([])

    const getData = () => {
      const error = false;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!error) {
             resolve(items)
          }else{
             reject("Se produjo un error")
          }
        }, 2000)
      })
    }
  
    useEffect (()=> {
      getData()
      .then(res => setData(res))
      .catch(error => console.log(error))
    }, [])
  

    return (

        <div className='row'>
        {
    
           data.map((item) =>(
              <div className='col-3 car'>
              <Item key={item.id} nombre={item.nombre} descripcion={item.descripcion} img={item.img} precio={item.precio} stock={item.stock}/>
              </div>
            ))
    
    
        }
    </div>

    )
}

