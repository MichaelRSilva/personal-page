/**
 * Created by michaeldfti on 04/02/17.
 * When the website has <a href="#sample"> this function
 * search a section correspondent in the page to scroll
 */

$('a[href^="#"]').on('click', function(event) {

    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: (parseInt(target.offset().top) - 20) + "px"
        }, 1000);
    }

});