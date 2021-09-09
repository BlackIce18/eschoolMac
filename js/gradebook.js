$(document).ready(function () {
    $('.header-item-col').on('click',function () {
        let header_item_col = $('.header-item-col');
        $(header_item_col).removeClass('clicked');
        $(header_item_col).children('.lesson__info-block').addClass('hide');
        $(this).addClass('clicked');

        $(this).parent().children('.lesson__info-block').toggleClass('hide');
    });

    $('.table-row').on('mouseenter',(function () {
        var index = $(this).parent().children($(this)).index($(this)) - 1;
        $('.table-row').parent().children('.table-header-row').children('.header-item-col').removeClass('hovered');
        $(this).parent().children('.table-header-row').children('.header-item-col').addClass('hovered');

        var firstCol_row = $('.first-col > .table-row').not(':first-child');
        firstCol_row.removeClass('active');
        $(firstCol_row[index]).addClass('active');

        var lastCol_row = $('.last-col > .table-row').not(':first-child');

        $(lastCol_row).children('.lesson').removeClass('hovered');
        $(lastCol_row[index]).children('.lesson').addClass('hovered');

    }));

    $('.lesson').on('click',function () {
        $('.lesson').removeClass('clicked');
        $(this).addClass('clicked');
    });
});