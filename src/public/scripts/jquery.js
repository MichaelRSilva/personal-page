
/**
 * Created by michaeldfti on 04/02/17.
 * Actions with jquery
 */

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

    $(".lightgallery").lightGallery();
});