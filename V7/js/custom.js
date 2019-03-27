$(document).ready(function () {
    headerPostion();
    // pdsNavabarSticky();
    $(".go-down-btn").click(goDown);
});
$(window).resize(function () {
    headerPostion();
});

 $(document).scroll(function(){
    navBarTop();
 })

function navBarTop() {
   var slPageY = window.pageYOffset;
     var stlNav = $(".r1-container").offset().top;

    if (slPageY >= stlNav) {
        $(".pds-navbar").addClass("pds-nav-bg");
    } else {
        $(".pds-navbar").removeClass("pds-nav-bg");
    }
   
}

function headerPostion() {
    var Height = $(window).height();
    var Top = (Height - $(".header-content").height() + $(".logo-container").height()) / 6;
    var BtmContentTop = (($(".header-content").height() + $(".logo-container").height()) + $(".header-btm-content").height()) - $(".header-btn-container").height();
    $(".head-container").css({ "height": Height + "px" });
    $(".pds-about-hdr").css({ "height": Height/2 + "px" });
    $(".pds-services-hdr").css({ "height": Height/2 + "px" });
    $(".header-content").css({ "top": Top + "px" });
    //$(".header-btm-content").css({"top":BtmContentTop+"px"});
}

function goDown() {
    var position = $(".r1-container").offset().top;
    $("HTML, BODY").animate({ scrollTop: position }, 1000);
}
function navBar(){
    var position = $(".r1-container").offset().top;

}