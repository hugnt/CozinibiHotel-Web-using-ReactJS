import $ from 'jquery'
/* eslint no-eval: 0 */
const handleMoveRight = (classname) =>{
    var obj=$("."+classname+" .swiper-wrapper");
    var transformMatrix = obj.css("-webkit-transform") ||
      obj.css("-moz-transform")    ||
      obj.css("-ms-transform")     ||
      obj.css("-o-transform")      ||
      obj.css("transform");
    var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    var x = matrix[12] || matrix[4];//translate x
    // var y = matrix[13] || matrix[5];//translate y
    var current_pull=eval(x);
    var step=-parseInt(obj.width());
    // console.log("current_pull",current_pull);
    // console.log("step:",step);
    var l=$("."+classname+" .swiper-slide").length-1;
    // console.log("length:", l);
    if(current_pull===step*l)
    {
        current_pull=step;
        // console.log("current_pull-l*step",current_pull,step*l);
    }
    current_pull+=step;
    // console.log(current_pull);
  
    $("."+classname+" .swiper-wrapper").css({"transform": "translate3d("+current_pull.toString()+"px, 0px, 0px)","transition-duration": "100ms"});

};

const handleMoveLeft = (classname) =>{
    var obj=$("."+classname+" .swiper-wrapper");
    var transformMatrix = obj.css("-webkit-transform") ||
      obj.css("-moz-transform")    ||
      obj.css("-ms-transform")     ||
      obj.css("-o-transform")      ||
      obj.css("transform");
    var matrix = transformMatrix.replace(/[^0-9\-.,]/g, '').split(',');
    var x = matrix[12] || matrix[4];//translate x
    // var y = matrix[13] || matrix[5];//translate y
    var current_pull=eval(x);
    var step=-parseInt(obj.width());
    // console.log("step:",step);
    var l=$("."+classname+" .swiper-slide").length-1;
    
    if(current_pull===0)
    {
        current_pull=step*l;
    }
    current_pull-=step;
    // console.log(current_pull);
    
    $("."+classname+" .swiper-wrapper").css({"transform": "translate3d("+current_pull.toString()+"px, 0px, 0px)","transition-duration": "100ms"});

};

export {handleMoveLeft, handleMoveRight}