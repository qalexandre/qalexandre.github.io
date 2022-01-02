$(document).ready(function() {
    let heightUpPage = parseInt(document.body.scrollHeight) - 800;
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100 && $(this).scrollTop() < heightUpPage) {
            $(".up-page").fadeIn();
        } else {
            $(".up-page").fadeOut();
        }
        if ($(this).scrollTop() > 100) {
            $(".button-menu").fadeIn();
        } else {
            if (window.screen.width > 750) {
                $(".button-menu").fadeOut();
            }
        }
    });

    $(".up-page").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 800);
        return false;
    });
});

$("main").click(() => {
    $("#check").prop("checked", false);
});