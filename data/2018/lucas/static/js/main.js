var el, sum, deg, mx;

console.log("Feito com ♥ por lucasalmeida.cc"), wrapper = $("#container"), el = $(".el"), 
wrapper.mousemove(function(e) {
    mx = e.offsetX, console.log(mx), deg = (sum = mx / 10) + "deg", el.css("filter", "hue-rotate(" + deg + ")");
});