//hooks
import { useState } from 'react';

//icon
import { Icon } from '~/utils';
///css
import { Link } from 'react-router-dom';
import CartItem from '../CartItem';
import Title from '../Title';
import './Cart.css'

function Cart(props) {
    let {setShowCart} = props;
    
    let [total, setTotal] = useState(0);
    return (
        <div color="gold" className="menu-cart">
            <span className='cancel' onClick={()=>setShowCart(false)}>x</span>
            <Title name="Your menu" fontSize="1.5rem" type="underline" pos="center"/>

            <div className='item-container'>
                {total===0&&
                    <div className='menu-empty'>
                        <div className='desc'>Your menu is empty 😕</div>
                        <Link to="/menu" className='desc'><span>{Icon("point-right")}</span>Get your menu now!</Link>
                    </div>
                }
                <CartItem setTotal={setTotal}/>
            </div>

            <div className='ending-menu'>
                <div className='payment row'>
                    <span className='desc'>Total:</span>
                    <span className='total-price'>${total}</span>
                </div>
                <div className='details row'>
                    <Link onClick={()=>setShowCart(false)} to="/bill" className='detail'>Order now!</Link>
                </div>
                <div className='note'>
                    <p>
                        *Note: All services operate inside the Hotel only
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Cart;