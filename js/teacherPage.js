$(document).ready(function () {
    var headerCols;
    var activeRow
    var lessonTime;
    var lessonTimeLastCol;
    var firstCol;
    var lastCol;
    var colIndex = 0;
    var rowIndex = 0;

    $('.lesson').on('mouseenter', function(){
        firstCol = $('.table__content-main-table-col.first-col').children();
        lastCol = $('.table__content-main-table-col.last-col').children();
        headerCols = $('.table-row.table-header-row').children();
        activeRow = $(this).parent().addClass('activeRow');

        rowIndex = $(activeRow).parent().children().index($(activeRow));
        colIndex = $(this).parent().children().index($(this));

        $(headerCols[colIndex]).addClass('hovered');
        lessonTime = $(firstCol[rowIndex]).children('.lesson-time').addClass('active');
        lessonTimeLastCol = $(lastCol[rowIndex]).children('.lesson-time').addClass('active');
    }).on('mouseleave', function(){
        $(headerCols[colIndex]).removeClass('hovered');
        $(activeRow).removeClass('activeRow');
        $(lessonTime).removeClass('active');
        $(lessonTimeLastCol).removeClass('active');
    });

    $('.lesson').on('click',function () {
        $('.lesson').removeClass('clicked');
        $(this).addClass('clicked');
        var left = $(this).offset().left - $('.first-col').offset().left;
        var top = $(this).offset().top - $('.table__content').offset().top - $('.table__content > .lesson__info-block').height();
        $('.table__content > .lesson__info-block').removeClass('hide').css({'left' : left +"px",'top' : top+"px"});
    });

    $(document).on('mouseup',(function (e){
        var tooltip = $('.table__content > .lesson__info-block');
        if (!tooltip.is(e.target)  && tooltip.has(e.target).length === 0) {
            $('.table__content > .lesson__info-block').addClass('hide');
        }
    }));
});