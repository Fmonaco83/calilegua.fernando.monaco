import { Item } from '../item/Item';
import { useEffect, useState } from 'react';
import { items } from '../../data/data';
import './ItemList.css'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { collection, getDocs, query, where  } from 'firebase/firestore';
import { db } from '../../firebase/config';

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
  



    useEffect (()=> {
      setLoading(true)
     const productosRef = collection(db, 'productos')
     const det = categoryId ? query(productosRef, where('category', '==', categoryId))
            : productosRef
     
     getDocs(det)
        .then((resp) => {
          const productosDB = resp.docs.map( (doc) =>({id: doc.id, ...doc.data()}))

          setData(productosDB)
        })
        .finally(() =>{
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

