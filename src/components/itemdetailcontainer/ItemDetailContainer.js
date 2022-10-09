import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetail } from '../itemdetails/ItemDetail';
import { doc,getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './spinner.css'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    

    const getItem = () => {
      const error = false;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if(!error) {
             resolve(db)
          }else{
             reject("Se produjo un error")
          }
        }, 2000)
      })
    }
  
    


    useEffect (()=> {
        setLoading(true)
      
        const docRef = doc(db, 'productos', itemId)
        getDoc(docRef)
          .then((doc) => {
               setItem({id: doc.id, ...doc.data()})
          })
          .finally(() => {
              setLoading(false)
          })

        
      
      
    }, [])
  

    return (

        <div className='spinner'>
            {
            loading ? <Spinner animation="grow" variant="primary" />
            : <ItemDetail item={item}/> 



            }
        </div>
        

    )
}