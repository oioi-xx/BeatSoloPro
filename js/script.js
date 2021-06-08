$(function () {
    $('.downico').click(function () {
        $('.downico i').toggleClass('rotate').css({
            "transition": "all .3s"
        });
        $('.list_wrap').slideToggle();
    });
    $('.black').click(function () {
        $('.imgchange').attr('src', 'images/black.jpg');
        $(this).addClass('border');
        $('.tab-txt').text('블랙');

    });
    $('.ivory').click(function () {
        $('.imgchange').attr('src', 'images/ivory.jpg');
        $(this).addClass('border');
         $('.tab-txt').text('아이보리');


    });
    $('.gray').click(function () {
        $('.imgchange').attr('src', 'images/gray.jpg');
            $('.tab-txt').text('그레이');


    });
});


var vi = 250;
$(window).scroll(function () {
    var num = $(window).scrollTop();
    if (num > vi) {
        $('#scroll-top-menu').slideDown();
    } else {
        $('#scroll-top-menu').slideUp();
    };
});
