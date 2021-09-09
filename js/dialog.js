$(document).ready(function () {
    $('.messenger__dialog_message_wrapper').on('mouseenter',function () {
        $(this).children('.dialog__message ').children('.additionalThreePoints').removeClass('hide');
    }).on('mouseleave',function () {
        $(this).children('.dialog__message ').children('.additionalThreePoints').addClass('hide');
    });

    $('.messenger__dialog_pinned_message').on('click',function () {
        $(this).toggleClass('pin_overflow');
        $('.arrow_down_SVG').toggleClass('arrow_down_SVG_inverted');
    })

    $('.dialog__message > .additionalThreePoints').click(pinNewMessage);
});

function pinNewMessage() {
    var pinnedMessage = $('.messenger__dialog_pinned_message');
    if(pinnedMessage.hasClass('hide')) {
        $(pinnedMessage).removeClass('hide');

        $('.messenger__dialog > .messenger__dialog_messages > ul').addClass('withPin');
    }

    var pin_rootElement = $('.messenger__dialog_pinned_message > .messenger__list-item');
    var pinned_userBlock = $(pin_rootElement).children('.messenger__messageBlock');

    var pinned_userSMImage = $(pin_rootElement).children('.user').children('.user__short').find('img.clip-svg.image');
    var pinned_userImage = $(pinned_userBlock).children('.user').children('.user__short').find('img.clip-svg.image');
    var pinned_userName = $(pinned_userBlock).find('.messenger__username');
    var pinned_userSendTime = $(pinned_userBlock).find('.messageDepartureTime');
    var pinned_userMessage = $(pinned_userBlock).find('.userMessage');


    var newMessage_messageBlock = $(this).parent();
    var newMessage_rootElement = $(newMessage_messageBlock).parent();

    var newMessage_userMessage = $(newMessage_messageBlock).children("p");
    var newMessage_userSendTime = $(newMessage_rootElement).parent().children('.messageDepartureTime');
    var newMessage_userName = $(newMessage_rootElement).parent().children('.messenger__username__hidden');
    var newMessage_userImage = $(newMessage_rootElement).children('.user').children('.user__short').find('img.clip-svg.image');

    $(pinned_userMessage).html($(newMessage_userMessage).html());
    $(pinned_userSendTime).html($(newMessage_userSendTime).html());
    $(pinned_userName).html($(newMessage_userName).html());
    $(pinned_userImage).html($(newMessage_userImage).html());
    $(pinned_userSMImage).html($(newMessage_userImage).html());
}

function unPinMessage() {
    var pinnedMessage = $('.messenger__dialog_pinned_message');
    if(pinnedMessage.hasClass('hide') === false) {
        $(pinnedMessage).addClass('hide');

        $('.messenger__dialog > .messenger__dialog_messages > ul').removeClass('withPin');
    }
}