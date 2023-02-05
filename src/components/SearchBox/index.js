

//hooks
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from '~/hooks';

//redux
import { connect } from 'react-redux';
import { handleSearchResult } from '~/utils';

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
        fetch(`https://63d7fd535c4274b136ffc3ea.mockapi.io/cozinibi-hotel/api/search?name=${debounced}`)
        .then(res=>res.json())
        .then(res=>{debounced.trim()&&setResTerm(res)})
        .catch(err=>console.log(err))
        // debounced.trim() && setResTerm(() => {
        //     const resRoom = rooms.filter(rooms => rooms.name.trim().includes(debounced));
        //     const resTour = tour_travels.filter(tour_travels => tour_travels.name.trim().includes(debounced));
        //     return [...resRoom,...resTour]
        // });
        
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
                            <Item key={i} className="al-center res-item" imgSrc={require(`src/assets/images/${item.imgSrc}`)} mainTitle={item.name} subTitle={item.type}
                                textPos="right" fontSize="1rem" textTransform="capitalize"
                                width="w-100" imgWidth="w-40" imgHeight="4rem" contentWidth="w-50" link={`/${item.parentId}/${item.id}`}/>
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