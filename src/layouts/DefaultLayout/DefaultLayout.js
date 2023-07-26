


//title
export const getTitle = (bannerName, pathName,id, rooms, tour_travels) =>{
    let pageName = pathName.split('/').at(-1);
    // console.log("pageName-bannername",pageName,"-", bannerName);
    if(!pageName&&!bannerName){
        console.log("not-foung page 404"); 
        return;
    }
    if(id){
        if(rooms.length!==0&&bannerName==="roomDetails"){
            pageName = rooms.find(item => item.id==id).name;
        }
        else if(tour_travels.length!==0&&bannerName==="tourDetails"){
            pageName = tour_travels.find(item => item.id==id).name;
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