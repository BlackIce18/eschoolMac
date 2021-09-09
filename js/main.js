$(document).ready(function () {
   
    $('.menu__more-button').on('click',function () {
        $(this).toggleClass('active');
        $(this.nextElementSibling).toggleClass('active');

    });

    $('#menu__button__burger').on('click',function () {
        $(this).toggleClass('show');
    });

    $('.input__dropdown').on('click',function () {
        var parent = $(this).parent();
        $(parent).children('.dropdown__itemsBlock').toggleClass('hide');
        $(parent).children('.arrow_down_SVG').toggleClass('arrow_down_SVG_inverted');
    });

    $('.dropdown__itemsBlock>li').on('click',function(){
        $(this).closest('.inputWrapper').children('.input__dropdown').val($(this).children('.dropdown__itemWithImage_text').text());
    });

    $(document).on('mouseup',function (e){
        var input__dropdown = $('.input__dropdown').parent();

        if (!input__dropdown.is(e.target)  && input__dropdown.has(e.target).length === 0) {
            $(input__dropdown).children('.dropdown__itemsBlock').addClass('hide');
            $(input__dropdown).children('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
        }
    });

/*    $('.input__dropdown').blur(function(){
        $('.input__dropdown').parent().children('.dropdown__itemsBlock').each(function (i, elem) {
            $(elem).addClass('hide');
        })
        $('.arrow_down_SVG').removeClass('arrow_down_SVG_inverted');
    });*/

    $('.inputMessageBlock-smiles').on('click',function () {
        $(this).toggleClass('inputMessageBlock-smiles-active');
        $('.menu__smileMenu').toggleClass('hide');
        return false;
    });

    $('.inputMessageBlock-smiles').on('mousedown', function() {
        return false;
    });

    $('.favouriteIcon').on('click',function(){
        $(this).toggleClass('active');
    });

    (function() {
        var sort = $(".sort");
        var input = $(sort).children('.sort-switch').find('input');

        $(input).on('click',function () {
            var sortItems = $(this).parents('.sort').children('.sort-item');

            $(sortItems).removeClass('active');

            var currentInput = $(this);

            if($(currentInput).prop('checked') === true) {
                $(sortItems).last().addClass('active');
                $(sortItems).last().addClass('attendance-active');
                $(sortItems).first().removeClass('active');
            }
            else {
                $(sortItems).last().removeClass('active');
                $(sortItems).last().removeClass('attendance-active');
                $(sortItems).first().addClass('active');
            }
        })
    })();
});