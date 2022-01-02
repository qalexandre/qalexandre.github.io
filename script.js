$(document).ready(function() {
    $(window).scroll(function() {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > 100 && $(this).scrollTop() < 2500) {
            $(".up-page").fadeIn();
        } else {
            $(".up-page").fadeOut();
        }
    });

    $(".up-page").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});