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
    let {bannerName, handleActiveMenu} = props;
    let {id} = useParams();

    let [loading, setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },800)
    },[bannerName])

    //page title and active menu
    let pathName = window.location.pathname;
    useEffect(()=>{
        handleActiveMenu(pathName.split('/').at(1));
        document.title = getTitle(bannerName,pathName,id);
    },[pathName,bannerName,id,handleActiveMenu]);

    // console.log("re-render");
    return ( 
        <div className="">
            <Header>
                {!loading&&<Banner bannerName={bannerName} id={id} />}
            </Header>
                {!loading?<div className="">{props.children}</div>:<Loading/>}
            <ToolBox />
            <Footer />
        </div>
     );
}


const mapStateToProps = (state) => ({ activeMenu: state.activeMenu});
const mapDispatchToProps = {handleActiveMenu}
export default connect(mapStateToProps,mapDispatchToProps)(DefaultLayout);
