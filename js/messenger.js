$(document).ready(function () {
    $('.messenger__list-item').on('mouseenter', function () {
        $(this).children('.additionalThreePoints').removeClass('hide');
    }).on('mouseleave', function () {
        $(this).children('.additionalThreePoints').addClass('hide');
    });
});