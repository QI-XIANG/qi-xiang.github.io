$(document).ready(function(){
    $("#fadeArea1 p").hide()
    $("#fadeArea2 pre").hide()
    $("#fadeArea2 p").hide()
    $("#fadeArea3 pre").hide()
    $("#fadeArea3 p").hide()
    $("#fadeArea4 pre").hide()
    $("#fadeArea4 p").hide()
    $("#fadeArea5 pre").hide()
    $("#fadeArea5 p").hide()
    for(var i = 1;i<=11;i++){
       var progressbar = '#progressbar'+i
       $(progressbar).hide()
    }
    $(window).scroll(function(){
        if($(window).scrollTop()+310>=$('#about').offset().top){
            $("#fadeArea1 p").fadeIn(1000);
        }
        if($(window).scrollTop()+330>=$('#education').offset().top){
            $("#fadeArea2 p").fadeIn(1000);
            $("#fadeArea2 pre").fadeIn(1000);
        }
        if($(window).scrollTop()+420>=$('#experience').offset().top){
            $("#fadeArea3 p").fadeIn(1000);
            $("#fadeArea3 pre").fadeIn(1000);
        }
        if($(window).scrollTop()+440>=$('#skills').offset().top){
            for(var i = 1;i<=11;i++){
                var progressbar = '#progressbar'+i
                $(progressbar).fadeIn(1000)
             }
        }
        if($(window).scrollTop()+510>=$('#awards').offset().top){
            $("#fadeArea4 p").fadeIn(1200);
            $("#fadeArea4 pre").fadeIn(1200);
        }
        if($(window).scrollTop()+600>=$('#interests').offset().top){
            $("#fadeArea5 p").fadeIn(1300);
            $("#fadeArea5 pre").fadeIn(1300);
        }
    })
    $('.marquee').marquee({
        //duration in milliseconds of the marquee
        duration: 8000,
        //gap in pixels between the tickers
        gap: 50,
        //time in milliseconds before the marquee will start animating
        delayBeforeStart: 0,
        //'left' or 'right'
        direction: 'left',
        //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
    });
})

