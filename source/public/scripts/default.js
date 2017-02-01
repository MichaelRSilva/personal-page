
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

    //Projects Info
    $('.open-project').click(function () {
        $('.project-info').hide();
        $(this).parent().find(".project-info").fadeIn("fast");
    });

    $('.project-info-close').click(function () {
        $(this).parent().parent().fadeOut("fast");
    });


});


//=== ScrollReveal

window.sr = ScrollReveal();

//Header
sr.reveal('.text-main h1', {duration: 300, delay: 250, origin: "left", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:first-child', {duration: 300, delay: 250, origin: "right", container: '.text-main', distance: '300px'});
sr.reveal('.text-main p:nth-child(2)', {duration: 300, delay: 300, container: '.text-main'});

//About
sr.reveal('.section-model-1 .text', {duration: 300, delay: 250, origin: "left", distance: '200px'});
sr.reveal('.section-model-1 .user-data', {duration: 300, delay: 300, origin: "right", distance: '200px'});
sr.reveal('.section-model-1 .image', {duration: 300, delay: 100, origin: "bottom", distance: '300px'});

//Skills
sr.reveal('.section-model-2 li:nth-child(even)', {duration: 300, delay: 200, origin: "bottom", distance: '300px'});
sr.reveal('.section-model-2 li:nth-child(odd)', {duration: 300, delay: 200, origin: "top", distance: '300px'});

//Projects
sr.reveal('.section-model-3 .gallery li.project-item:nth-child(even)', {duration: 300, delay: 200, origin: "top", distance: '100px'});
sr.reveal('.section-model-3 .gallery li.project-item:nth-child(odd)', {duration: 400, delay: 200, origin: "bottom", distance: '100px'});

//Contact
sr.reveal('.section-model-4 .container', {duration: 400, delay: 200, origin: "left", distance: '100px'});

//Footer
sr.reveal('.footer-main i', {duration: 500, delay: 200, origin: "left", distance: '300px'});


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
    $('.header-main nav')[effect]("fast", function(){
        $('.menu-icon-top').fadeIn('fast');
    });
}

/**
 * Open top website menu
 * effect: Effect used to open <nav> menu
 */
function openTopMenu(effect){
    $('.menu-icon-top').fadeOut('fast');
    $('.header-main nav')[effect]("fast");
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
