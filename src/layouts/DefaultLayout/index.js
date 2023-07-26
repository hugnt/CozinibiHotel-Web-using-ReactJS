//redux
import { connect } from 'react-redux';
import { handleActiveMenu } from '~/utils';

//hook
import { useEffect,useState } from 'react';


//layout
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import ToolBox from "./ToolBox";

//components
import { Loading } from '~/components';

//routes
import { useParams } from "react-router-dom";

//js
import {getTitle} from'./DefaultLayout.js'

function DefaultLayout(props) {
    let {bannerName, handleActiveMenu, rooms, tour_travels} = props;
    let {id} = useParams();

    let [loading, setLoading] = useState(true);


    //page title and active menu
    let pathName = window.location.pathname;
    useEffect(()=>{
        console.log("bannerName:", bannerName)
        handleActiveMenu(pathName.split('/').at(1));
        if(rooms){
            
            document.title = getTitle(bannerName,pathName,id,rooms, tour_travels);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pathName,bannerName,id,handleActiveMenu]);

    // useEffect(()=>{
    //     setLoading(true);
    //     fetch('https://63d7fd535c4274b136ffc3ea.mockapi.io/cozinibi-hotel/api/users')
    //     .then(()=>setLoading(false))
    //     .catch((err)=>{
    //         console.log(err);
    //         setLoading(true);
    //     })
    // },[pathName])
    return ( 
        <div className="">
            <Header>
                {<Banner bannerName={bannerName} id={id} loading={false}/>}
            </Header>
                {<div className="">{props.children}</div>}
                {/* <Home /> */}
            <ToolBox />
            <Footer />
        </div>
     );
}


const mapStateToProps = (state) => ({ 
    activeMenu: state.activeMenu,
    rooms: state.rooms,
    tour_travels: state.tour_travels,
});
const mapDispatchToProps = {handleActiveMenu}
export default connect(mapStateToProps,mapDispatchToProps)(DefaultLayout);
