var face=$("#face");$(document).on("mousemove",(function(e){const t=face.position();var o=e.pageX-t.top,a=e.pageY-t.top,n=-($(window).innerWidth()/3-o)/20,i=($(window).innerHeight()/3-a)/20;window.matchMedia("(min-width:640px)").matches&&face.attr("style","transform: rotateY("+n+"deg) rotateX("+i+"deg);")}));
//# sourceMappingURL=index.71c489d5.js.map
