
//=== Globals
var CURRENT_SCROLL = 0;

//=== jQuery actions

$(document).ready(function(){
    
    //Solving bug with vh + browser bar
    $('.header-main').each(fixVhBug);

    //--- Menu Top control
    $('.menu-icon-top').click(function () {
        openTopMenu("slideDown");
    });    
    
    $('.menu-close').click(function () {
       closeTopMenu("slideUp"); 
    });

});


//=== ScrollReveal

window.sr = ScrollReveal();

sr.reveal('.text-main h1', {duration: 300, delay: 250, origin: "left", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:first-child', {duration: 300, delay: 250, origin: "right", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:nth-child(2)', {duration: 300, delay: 300, container: '.text-main'});

sr.reveal('.section-model-1 .text', {duration: 300, delay: 250, origin: "left", distance: '200px'});
sr.reveal('.section-model-1 .user-data', {duration: 300, delay: 300, origin: "right", distance: '200px'});
sr.reveal('.section-model-1 .image', {duration: 300, delay: 100, origin: "bottom", distance: '300px'});




//=== Scroll Smooth page
$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: (parseInt(target.offset().top) - 20) + "px"
        }, 1000);
    }

});


//=== onScroll actions
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


//=== Axiliary JS Functions

/**
 * Close top website menu
 * effect: Effect used to close <nav> menu
 */
function closeTopMenu(effect){
    $('.header-main nav')[effect]("slow", function(){
        $('.menu-icon-top').fadeIn('fast');
    });
}

/**
 * Open top website menu
 * effect: Effect used to open <nav> menu
 */
function openTopMenu(effect){
    $('.menu-icon-top').fadeOut('fast');
    $('.header-main nav')[effect]("slow");
}


/**
 * Fixed heigh in div that is fullscreens, to avoid bad url bar effect
 */
function fixVhBug() {

    var HEIGHT_CHANGE_TOLERANCE = 100; // Approximately URL bar height in Chrome on tablet

    var jumbotron = $(this);
    var viewportHeight = $(window).height();

    $(window).resize(function () {

        if (Math.abs(viewportHeight - $(window).height()) > HEIGHT_CHANGE_TOLERANCE) {
            viewportHeight = $(window).height();
            update();
        }
    });

    function update() {
        jumbotron.css('height', viewportHeight + 'px');
    }

    update();
}
