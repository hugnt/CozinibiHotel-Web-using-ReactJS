//redux
import { connect } from 'react-redux';

//hooks
import { useEffect, useState } from 'react';
//css
import { SectionPart, Title, Item } from '~/components';
import './SearchResults.css';

function SearchResults(props) {
    let { resSearch } = props;
    // console.log(resSearch);
    // let resRooms = [], resTours = [];
    let [resRooms, setResRooms] = useState([]);
    let [resTours, setResTours] = useState([]);
    useEffect(() => {
        setResRooms([]);
        setResTours([]);
        resSearch.results.map((res) => {
            if (res.parentId === "accommodation") {
                setResRooms(oldRes => [...oldRes, res])
            }
            else if (res.parentId === "tour-travel") {
                setResTours(oldRes => [...oldRes, res])
            }
            return false;
        })
    }, [resSearch.results])

    return (
        <div className="search-result-box">
            <SectionPart bgColor="bg-gold">
                <Title name={`Search results for key word "${resSearch.keyword}"`} textTransform="none" />
            </SectionPart>
            <SectionPart bgColor="bg-white">
                {resRooms.length !== 0 && <Title name="Rooms" type="haft-underline" />}
                {resRooms.length !== 0 && <div className='res-rooms'>
                    {
                        resRooms.map((item, i) => {
                            return (<Item key={i} className="search-item" mainTitle={item.name} imgSrc={item.imgSrc} fontSize="1.5rem"
                                color="#fff" icon="corner" width="w-30" imgWidth="w-50" contentWidth="w-50" subTitle={item.subTitle}
                                textTransform="capitalize" textPos="right" link={`/accommodation/${item.id}`} />);
                        })
                    }
                </div>}
                {resTours.length !== 0 && <Title name="Tour Travel" type="haft-underline" />}
                {resTours.length !== 0 && <div className='res-tours'>
                    {
                        resTours.map((item, i) => {
                            return (<Item key={i} className="search-item" mainTitle={item.name} imgSrc={item.imgSrc} fontSize="1.5rem"
                                color="#fff" icon="corner" width="w-30" imgWidth="w-50" contentWidth="w-50" subTitle={item.subTitle}
                                textTransform="capitalize" textPos="right" link={`/accommodation/${item.id}`} />);
                        })
                    }
                </div>}
            </SectionPart>
        </div>
    );
}


const mapStateToProps = (state) => ({ resSearch: state.resSearch })
export default connect(mapStateToProps)(SearchResults);