//redux
import { connect } from 'react-redux';
import { handleAddFoods, handleSubFoods,handleRemoveFoods} from '~/utils';
//hooks
import { useEffect } from 'react';

//comp
import Item from '../Item';

//data 
// import { foods } from '~/utils';

//css
import './CartItem.css'

function CartItem(props) {
    let {handleAddFoods, foodPicked,handleRemoveFoods,handleSubFoods, setTotal, reRender} = props;
    
    useEffect(()=>{
        var total = 0;
        foodPicked.map((item) => {
            total+=item.number*item.food.price;
            return false;
        });
        setTotal&&setTotal(total);
        // eslint-disable-next-line
    },[foodPicked,reRender])

    return (
        <div className='food-wrapper'>
            {foodPicked.map((item, i) => {
                return (
                    <div key={i} className='food-info'>
                        <Item className="al-center food-item" imgSrc={require(`src/assets/images/${item.food.imgSrc}`)} 
                            mainTitle={item.food.name} subTitle={item.food.type}
                            textPos="right" fontSize="1rem" textTransform="capitalize" 
                            width="w-60" imgWidth="w-40" imgHeight="4rem" contentWidth="w-60" />
                        <div className='counter'>
                            <span className='price'>{`$${item.food.price}`}</span>
                            <div className='number'>
                                <span className='up' onClick={()=>handleAddFoods(item.food)}>+</span>
                                <span className='quantity'>Qty: {item.number}</span>
                                <span className='down' onClick={()=>handleSubFoods(item.food)}>-</span>
                            </div>
                        </div>
                        <span className='remove' onClick={()=>handleRemoveFoods(item.food)}>x</span>
                    </div>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) =>({foodPicked:state.foodPicked});
const mapDispatchToProps = {handleAddFoods,handleSubFoods, handleRemoveFoods}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);