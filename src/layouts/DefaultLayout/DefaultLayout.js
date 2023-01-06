//data
import { getRoomDetails, getTourDetails } from '~/utils';


//title
export const getTitle = (bannerName, pathName,id) =>{
    let pageName = pathName.split('/').at(-1);
    // console.log("pageName-bannername",pageName,"-", bannerName);
    if(!pageName&&!bannerName){
        console.log("not-foung page 404");
        return;
    }
    if(id){
        if(bannerName==="roomDetails"){
            pageName = getRoomDetails(id).name;
        }
        else if(bannerName==="tourDetails"){
            pageName = getTourDetails(id).name;
        }
        else{
            pageName = "Cozinibi Hotel";

        }
    }
    else if(!pageName){
        pageName = "Cozinibi Hotel";
    }
    pageName = subPageName(pageName," ");
    pageName = subPageName(pageName,"-");

    return pageName;
}
const subPageName = (pageName,character) =>{
    return(
        pageName.split(character).map(word => {
        if(!word)
        {
            return '';
        }
        return word[0].toUpperCase() + word.substring(1); 
    }).join(' '))
}