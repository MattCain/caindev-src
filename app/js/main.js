(function($) {

    $('#mobile-nav-trigger').on('click', function() {
        $('#main-nav').slideToggle(function() {
            $(this).toggleClass('closed').removeAttr('style');
        });
    });

    $('.hiringEmail').attr('href', 'mailto:matt@cainmedia.com');

})(jQuery);
