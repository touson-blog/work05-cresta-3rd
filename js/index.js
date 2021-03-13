$(".burger-btn").click(function () {
    $(".header__burger").toggle();
    $(".burger-btn__bar").toggleClass("cross");
    $("body").toggleClass("fixed");
});

$(window).on('load scroll', function () {
    if ($(this).scrollTop() > $('.fv').height()) {
        $('.logo').css("background-color", "black");
        $('.burger-btn').css("color", "black");
        $('.bar').css("background-color", "black");
    } else {
        $('.logo').css("background-color", "initial");
        $('.burger-btn').css("color", "white");
        $('.bar').css("background-color", "white");
    }
});