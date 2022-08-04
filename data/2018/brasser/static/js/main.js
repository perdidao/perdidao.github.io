var elem, elemTop, scrolled, newPos, speed, headerHeight;

console.log("Feito com ♥ por lucasalmeida.cc"), $(document).ready(function() {
    var el = $("#text li"), current = 0, total = el.length - 1;
    el.hide(), el.eq(current).fadeIn(), setInterval(function() {
        current < total ? current += 1 : current = 0, el.hide(), el.eq(current).fadeIn();
    }, 3e3);
}), elem = $(".perdillax"), $(document).ready(function() {
    var fix = $(elem).offset().top / 1.3 + "px";
    elem.css("background-position", "center " + fix);
}), headerHeight = $(".header-height").height(), $(document).scroll(function() {
    scrolled = $(window).scrollTop(), $.each(elem, function(e, el) {
        quoeficient = scrolled - $(el).offset().top, speed = el.dataset.speed, newPos = quoeficient / speed + "px", 
        $(el).css("background-position", "center " + newPos);
    }), window.matchMedia("(min-width:720px)").matches && (headerHeight <= scrolled ? $("#menu").addClass("scrolled") : scrolled < headerHeight && $("#menu").removeClass("scrolled"));
}), $("#btn-menu").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active"), $("#menu").stop(!0, !0).slideToggle();
});