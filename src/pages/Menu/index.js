//redux
import { connect } from 'react-redux';
import { handleAddFoods, handleData } from '~/utils';

//hooks
import { useEffect } from 'react';

//api
import * as menuServices from '~/apiServices/menuServices';


//icon
import { Icon } from '~/utils';

//css
import './Menu.css';
import { Border, SectionPart, Item } from '~/components';




function Menu(props) {
    let { handleAddFoods, foodPicked, foods, handleData } = props;

    useEffect(()=>{
        const fetchApi = async() =>{
            const res = await menuServices.getMenu();
            handleData("foods",res);
        
        }
        if(foods.length===0){
            fetchApi();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])


    const handleToggleHeart = (e) => {
        // console.log(e.target);
        e.target.classList.toggle('toggleHeart');
    }
    return (
        <SectionPart bgColor="bg-white">
            <div className="foods-list d-flex">
                {foods.map((food) => {
                    const image =  process.env.REACT_APP_IMAGE_URL + "menu/" + food.image;
                    return (
                        <Border key={food.id} color="gold" classname="w-30 wrapper-food">
                            <div className='price'><span>Price: ${food.price}</span></div>
                            <Item className="food-item" mainTitle={food.name}
                                imgSrc={image} color="#fff" bgTitle={true}
                                textPos="onBottom" textTransform="capitalize"
                                fontSize='1.5rem' fontFamily='Font-Title' />
                            <div className='options'>
                                <span onClick={handleToggleHeart} >{Icon("heart-fill")}</span>
                                <span onClick={() => handleAddFoods(food)} className="cart-btn">
                                    {Icon("cart")}
                                    {foodPicked.find(x => x.food.id == food.id) && <span className='number'>{foodPicked.find(x => x.food.id == food.id).number}</span>}
                                </span>
                            </div>
                        </Border>
                    );
                })}

            </div>
            <div className="move-pages d-flex">
                <div className="btn btn-1">1</div>
                <div className="btn btn-2">2</div>
                <div className="btn btn-3">3</div>
                {Icon("arrow-right")}
                {Icon("arrow-rights")}
            </div>
        </SectionPart>


    );
}

const mapStateToProps = (state) => ({ foodPicked: state.foodPicked, foods: state.foods })
const mapDispatchToProps = { handleAddFoods, handleData }
export default connect(mapStateToProps, mapDispatchToProps)(Menu);

