import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';
import './CartWidget.css'

 

export const CartWidget =() =>{

    const { cartQuantity, cart} = useContext(CartContext)

    return(

        <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-v' : ''}`}>
        <Icon icon="teenyicons:cart-minus-outline" width="35" height="35" href="#" hFlip={true} />
        <p>{cartQuantity()}</p>
        </Link>
    )
}