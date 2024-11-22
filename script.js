$(document).ready(function () {
    $(".toggle-btn").click(function () {
        var bio = $(".profile-bio");
        var img = $(".profile-img");
        var card = $(".profile-card");

        if (bio.hasClass("visible")) {
            bio.removeClass("visible expanded").animate({
                opacity: 0.6,
                maxHeight: "3em"
            }, 300);
            img.css("filter", "none");
            card.css("height", "auto");
            $(this).text("Show More");
        } else {

            bio.addClass("visible expanded").animate({
                opacity: 1,
                maxHeight: "1000px" 
            }, 300);
            
            img.css("filter", "blur(5px)");
            card.css("height", "auto");
            $(this).text("Show Less");
        }
    });
});
