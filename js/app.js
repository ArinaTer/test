
// tabs
$(".tab-slider--body").hide();
$(".tab-slider--body:first").show();
$(".tab-slider--nav li").click(function () {
    $(".tab-slider--body").hide();

    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    if ($(this).attr("rel") == "tab2") {
        $('.tab-slider--tabs').addClass('slide');
    } else {
        $('.tab-slider--tabs').removeClass('slide');
    }

    $(".tab-slider--nav li").removeClass("active");
    $(this).addClass("active");
});

$(document).ready(function () {
    $('.dropdown__link').click(function () {
        $('.dropdown').toggleClass('visible');
    });
});

$(document).ready(function () {
    $(".title").lettering();
    $(".button").lettering();
});



