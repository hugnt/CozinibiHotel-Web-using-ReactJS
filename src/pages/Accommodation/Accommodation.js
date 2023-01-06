import $ from 'jquery'

$(document).ready(function(){

    $(".acc-item").first().addClass("changed");
    $(".acc-item").hover(
        function()
        {
            $(this).addClass("changed1");
            $(this).css("cursor","pointer");
        },
        function()
        {
             $(this).removeClass("changed1");
        }
    );

    
    $(".move .right").click(function(){

        var temp;
        $(".acc-item").each(function(){
            if($(this).hasClass("changed")==true)
            {
                // console.log("checked!");
                temp=$(this);
                return false;
            }
        });
        // console.log(temp.attr("class"));
        // console.log($(".acc-item").last().attr("class"));
        if(temp.is($(".acc-item").last()))
        {
            $(".acc-item").first().click();
            console.log("in");
        }
        else
        {
            temp.next().click();
        }
        
    });
    $(".move .left").click(function(){

        var temp;
        $(".acc-item").each(function(){
            if($(this).hasClass("changed")==true)
            {
                // console.log("checked!");
                temp=$(this);
                return false;
            }
        });
        // console.log(temp.attr("class"));
        // console.log($(".acc-item").last().attr("class"));
        if(temp.is($(".acc-item").first()))
        {
            $(".acc-item").last().click();
            console.log("in");
        }
        else
        {
            temp.prev().click();
        }
        
    });
    

    $(".acc-item").click(function(){

        $(".acc-item").removeClass("changed");
        $(this).addClass("changed");
       let mainImg = $(this).find(">.item-image>img").attr("src");
       let mainTitle =$(this).find(">.slide-title>a").text();
       let mainNote =$(this).find(">.slide-title>span").text();

       let currentImg=$(".current-slide .current-img img").attr("src");
       let currentTitle=$(".current-slide .desc .title-focus").text();
       let currentNote=$(".current-slide .desc .note").text();
       if(currentNote.includes("("))
       {
            currentNote=currentNote.replace("(","");
            currentNote=currentNote.replace(")","\0");
       }
       if(mainImg==currentImg)
       {
            return;
       }
       $(".current-slide .current-img img").attr("src",mainImg);
       $(".current-slide .desc .title-focus").text(mainTitle);
       if(mainNote!="")
       {
            $(".current-slide .desc .note").text("("+mainNote+")");
       }
       else
       {
            $(".current-slide .desc .note").text(mainNote);
        }
       

    });





});