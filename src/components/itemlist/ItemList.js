import { Item } from '../item/Item';
import { useEffect, useState } from 'react';
import { items } from '../../data/data';
import './ItemList.css'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

export const ItemList = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

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
  
  const {categoryId} = useParams ()
  console.log(categoryId)



    useEffect (()=> {
      setLoading(true)

      getData()
      .then ((res) => {

        if (!categoryId) {
          setData(res)
        }else{
          setData(res.filter((item) => item.category === categoryId))
        }      

      })
        
      .catch(error => console.log(error))
      .finally(() => {
        setLoading(false)
      })      
    }, [categoryId])
  

    return (

        <div className='row'>
        {
              loading
              ?<Spinner animation="grow" variant="primary" />
              : 
              data.map((item) =>(
              <div className='col-3 car'>
              <Item item={item} key={item.id} nombre={item.nombre} descripcion={item.descripcion} img={item.img} precio={item.precio} stock={item.stock}/>
              </div>
            ))
    
    
        }
    </div>

    )
}

