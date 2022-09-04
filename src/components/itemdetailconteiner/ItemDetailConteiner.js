import { useEffect, useState } from 'react';

import { ItemDetail } from '../itemdetails/ItemDetail';


export const detall =[
    {
      id: 1,
      nombre: "DIJE SUSANITO",
      descripcion: "Dije y cadena de plata. Realizados con plata 925, de forma artesanal. Manteniendo la calidad de nuestros productos",
      img: "./img/dijeSusanito.jpg",
      precio: "500",
      stock: 5,
    }]

const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        
        setTimeout(()=>{
            resolve(detall)
        },5000)
    })

}




export const ItemDetailConteiner =() => {
    
const [deta, setDeta] =useState([])


    

useEffect (() =>{

    pedirDatos()
        .then ( (res) =>{
            setDeta(res)
        })
        .catch ((error)=>{console.log(error)
        })

}, [])   

return (
  
    <div>
    {

       deta.map((detal) =>(
          <div>
          <ItemDetail key={detal.id} nombre={detal.nombre} descripcion={detal.descripcion} img={detal.img} precio={detal.precio} stock={detal.stock}/>
          </div>
        ))


    }
</div>
 
)
 }