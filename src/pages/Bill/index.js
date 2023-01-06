//hooks
import { useState } from 'react';

//route
import { Link } from 'react-router-dom';

//icons
import { Icon } from '~/utils';

import { Fragment } from 'react';
//components
import { CartItem, FormBooking, SectionPart, Title } from '~/components';

//css
import './Bill.css';

function Bill() {
    let [total, setTotal] = useState(0);
    let [discount, setDiscount] = useState(0);
    let [inputDiscount, setInputDiscount] = useState("");

    const handleGetDiscount = () =>{
        setDiscount(parseInt(inputDiscount));
    }
    return (
        <Fragment>
            {total === 0 &&
                < SectionPart bgColor="bg-gold" classname="empty-cart">
                    <div className='menu-empty'>
                        <div className='desc'>Your menu is empty 😕</div>
                        <Link to="/menu" className='desc'><span>{Icon("point-right")}</span>Get your menu now!</Link>
                    </div>
                </SectionPart>
            }
            <SectionPart bgColor="bg-white">
                <div className='d-flex bill'>
                    <div className='form-order w-50'>
                        <img src={require("~/assets/images/layout-logo.png")} alt='' className='logo-img'/>
                        <FormBooking type3 />
                    </div>
                    <div className='details-bill w-50'>
                        <Title name="Your bill" type="haft-underline" pos="center" />
                        <CartItem setTotal={setTotal} reRender={total} />
                        <div className='discount-code d-flex'>
                            <div className='inp-code'>
                                <input placeholder='Type your discount code' onChange={(e)=>setInputDiscount(e.target.value)}/>
                            </div>
                            <button className='btn-applyCode' onClick={handleGetDiscount}>Aplly</button>
                        </div>
                        <div className='transaction'>
                            <div className='food-price'>
                                <span>Price:</span>
                                <span style={{ fontWeight: "bolder" }}>${total}</span>
                            </div>
                            <div className='food-price discount'>
                                <span>Discount:</span>
                                <span style={{ fontWeight: "bolder", color: "red" }}>${discount}</span>
                            </div>
                        </div>
                        <div className='total'>
                            <div className='total-money'>
                                <span>TOTAL:</span>
                                <span style={{ fontWeight: "bolder", fontSize: "2rem" }}>${total-discount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionPart>

        </Fragment >
    );
}

export default Bill;