/**
 * Created by michaeldfti on 04/02/17.
 * Functions that is called when user scroll the page
 */

var CURRENT_SCROLL = 0;

window.addEventListener('scroll', function(e){

    //Close menu when scroll
    if(Math.abs($(window).scrollTop() - CURRENT_SCROLL) > 2){
        closeTopMenu("fadeOut");
    }
    CURRENT_SCROLL = $(window).scrollTop();

    //Show arrow go to top page
    var distanceY = window.pageYOffset || document.documentElement.scrollTop;

    if(distanceY > 50){
        $('.go-top-page').fadeIn();
    }else{
        $('.go-top-page').fadeOut();
    }


});