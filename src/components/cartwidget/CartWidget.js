import { Icon } from '@iconify/react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contex/CartContext';


 

export const CartWidget =() =>{

    const { cartQuantity, cart} = useContext(CartContext)

    return(
        <div>
            <Link to="/cart" className={`widget ${cart.length > 0 ? 'widget-v' : ''}`}>
                <Icon icon="el:shopping-cart-sign"  style={{ color: 'black', fontSize: '40' }}  href="#" hFlip={true} />
            </Link>
            {cartQuantity()}
        </div>
    )
}