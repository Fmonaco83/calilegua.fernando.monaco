import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';




export const CartWidget =() =>{

    const { cartQuantity } = useContext(CartContext)

    return(

        <Link to="/cart">
        <Icon icon="teenyicons:cart-minus-outline" width="35" height="35" href="#" hFlip={true} />
        <p>{cartQuantity()}</p>
        </Link>
    )
}