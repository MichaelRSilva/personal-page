
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


/**
 * Fixed heigh in div that is fullscreens, to avoid bad url bar effect
 */
var modalResumeDownload = $('[data-remodal-id=modalResumeDownload]').remodal();

function closeModalResumeDownload() {
    modalResumeDownload.close();
}