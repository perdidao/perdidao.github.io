var scrolled;

console.log("Feito com ♥ por lucasalmeida.cc"), $("#menu-button").click(function(e) {
    e.preventDefault(), $(this).toggleClass("active"), $("#menu").slideToggle();
}), $("#hero").owlCarousel({
    items: 1,
    singleItem: !0,
    autoplay: !0,
    autoplayTimeout: 5e3,
    loop: !0,
    nav: !0,
    navText: [ "anterior", "próximo" ]
}), $("#cortes").owlCarousel({
    items: 3,
    loop: !0,
    nav: !0,
    center: !0,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 3
        }
    }
}), $(document).scroll(function() {
    20 <= (scrolled = $(this).scrollTop()) ? $("#header").addClass("scrolled") : scrolled < 20 && $("#header").removeClass("scrolled");
}), $(".cardapio__galeria").owlCarousel({
    items: 1,
    singleItem: !0,
    autoplay: !0,
    autoplayTimeout: 5e3,
    loop: !0,
    nav: !0
});

var SPMaskBehavior = function(val) {
    return 11 === val.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009";
}, spOptions = {
    onKeyPress: function(val, e, field, options) {
        field.mask(SPMaskBehavior.apply({}, arguments), options);
    }
};

$(".fone").mask(SPMaskBehavior, spOptions);