import { Item } from '../item/Item';
import { useEffect, useState } from 'react';
import { items } from '../../data/data';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { ItemDetail } from '../itemdetails/ItemDetail';

export const ItemDetailContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    console.log(itemId)
    console.log (data)

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
        setLoading(true)
        
        getData()
            .then((res) => {
                setData( res.find((item) => item.id === Number(itemId)) )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
      
    }, [])
  

    return (

        <div>
            {
            loading ? <Spinner animation="grow" variant="primary" />
            : <ItemDetail data={data}/> 



            }
        </div>
        

    )
}