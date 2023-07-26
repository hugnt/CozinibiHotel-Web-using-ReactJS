

//hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '~/hooks';

//redux
import { connect } from 'react-redux';
import { handleSearchResult } from '~/utils';

//API
import * as tourServices from '~/apiServices/tourServices';
import * as roomServices from '~/apiServices/roomServices';

//icon
import { Icon } from '~/utils';
//comp
import Item from '../Item';
//css
import './SearchBox.css';


function SearchBox(props) {
    let { className,handleSearchResult } = props;
    let [searchTerm, setSearchTerm] = useState('');
    let [resTerm, setResTerm] = useState([]);
    let [displayRes, setDisplayRes] = useState(false);

    const debounced = useDebounce(searchTerm, 500);
    // console.log(debounced);

    
    const handleSearchTermChange = (e) => {
        let value = e.target.value.trim();
        if (value === '') {
            setResTerm([])
            setSearchTerm('')
            return
        }
        setSearchTerm(value);
    }


    const handleBlur = () =>{
        setTimeout(()=>{
            setDisplayRes(false)
        },300);
    }



    useEffect(() => {
        const fetchApi = async() =>{
            const resTour = await tourServices.getToursByName(debounced);
            const resRoom = await roomServices.getRoomsByName(debounced);
            var resSearch = [];
            if(resRoom){
            for (let i = 0; i < resRoom.length; i++) {
                resSearch.push({
                    id: resRoom[i].id,
                    category: "accommodation",
                    name: resRoom[i].name,
                    image:process.env.REACT_APP_IMAGE_URL + "accommodation_2/" + resRoom[i].images[0]
                });
            }}
            if(resTour){
            for (let i = 0; i < resTour.length; i++) {
                resSearch.push({
                    id: resTour[i].id,
                    category: "tour-travel",
                    name: resTour[i].name,
                    image: process.env.REACT_APP_IMAGE_URL + "tour_travel_2/" +resTour[i].tourGalleries[0]
                });
            }}
            setResTerm(resSearch);
        }
        debounced.trim()&&fetchApi();
        
    }, [debounced])


    return (
        <form className={`search-form ${className}`} >
            <div className='search-box d-flex'>
                <input
                    type="search"
                    name=""
                    id="search-input"
                    placeholder="Rooms, Travels, ..."
                    onChange={handleSearchTermChange}
                    onBlur={handleBlur}
                    onFocus={()=> setDisplayRes(true)}
                />
                <button className='search-btn'>{Icon("search")}</button>
            </div>
            {displayRes&&resTerm.length !== 0 &&
                <div className='res-box'>
                    {resTerm.length !== 0 && resTerm.map((item, i) => {
                        return (
                            <Item key={i} className="al-center res-item" imgSrc={item.image} mainTitle={item.name} subTitle={item.type}
                                textPos="right" fontSize="1rem" textTransform="capitalize"
                                width="w-100" imgWidth="w-40" imgHeight="4rem" contentWidth="w-50" link={`/${item.category}/${item.id}`}/>
                        );
                    })}
                    <div className='res-number'>{`${resTerm.length} search results `}
                        <Link onClick={()=>handleSearchResult(debounced,resTerm)} to="/search-results"  className="res-link">
                            See all 
                        </Link>
                    </div>
                </div>
            }
            
        </form>
    );
}

const mapDispatchToProps = {handleSearchResult}
export default connect(null,mapDispatchToProps)(SearchBox);