var ScrollOut=function(){"use strict"
function O(e,t,n){return e<t?t:n<e?n:e}function T(e){return+(0<e)-+(e<0)}var t={}
function u(e){return t[e]||(t[e]=e.replace(/([A-Z])/g,n))}function n(e){return"-"+e[0].toLowerCase()}var q=window,r=document.documentElement
function v(e,t){return e&&0!==e.length?e.nodeName?[e]:[].slice.call(e[0].nodeName?e:(t||r).querySelectorAll(e)):[]}var F,d=function(e,t){for(var n in t)e.setAttribute("data-"+u(n),t[n])},N=[]
function z(){N.slice().forEach(function(e){return e()}),F=N.length?requestAnimationFrame(z):0}function h(){}var g="scroll",m="resize",p="addEventListener",X="removeEventListener"
return function(P){var i,H,L,W,A,o=(P=P||{}).onChange||h,l=P.onHidden||h,c=P.onShown||h,s=P.onScroll||h,f=P.cssProps?(i=P.cssProps,function(e,t){for(var n in t)(!0===i||i[n])&&e.style.setProperty("--"+u(n),(r=t[n],Math.round(1e4*r)/1e4))
var r}):h,e=P.scrollingElement,E=e?v(e)[0]:q,C=e?v(e)[0]:r,S=!1,x={}
function t(){H=v(P.targets||"[data-scroll]",v(P.scope||C)[0]).map(function(e){return{element:e}})}function n(){var e,t,n=C.clientWidth,r=C.clientHeight,i=T(-W+(W=C.scrollLeft||q.pageXOffset)),o=T(-A+(A=C.scrollTop||q.pageYOffset)),l=C.scrollLeft/(C.scrollWidth-n||1),c=C.scrollTop/(C.scrollHeight-r||1)
S=S||x.scrollDirX!==i||x.scrollDirY!==o||x.scrollPercentX!==l||x.scrollPercentY!==c,x.scrollDirX=i,x.scrollDirY=o,x.scrollPercentX=l,x.scrollPercentY=c
for(var s=0;s<H.length;s++){for(var f=H[s],a=f.element,u=a,v=0,d=0;v+=u.offsetLeft,d+=u.offsetTop,(u=u.offsetParent)&&u!==E;);var h=a.clientHeight||a.offsetHeight||0,g=a.clientWidth||a.offsetWidth||0,m=(O(v+g,W,W+n)-O(v,W,W+n))/g,p=(O(d+h,A,A+r)-O(d,A,A+r))/h,X=1===m?0:T(v-W),Y=1===p?0:T(d-A),b=O((W-(g/2+v-n/2))/(n/2),-1,1),_=O((A-(h/2+d-r/2))/(r/2),-1,1),w=+(P.offset?P.offset<=A:(P.threshold||0)<m*p),D=f.visible!==w;(D||f._changed||f.visible!==w||f.visibleX!==m||f.visibleY!==p||f.index!==s||f.elementHeight!==h||f.elementWidth!==g||f.offsetX!==v||f.offsetY!==d||f.intersectX!=f.intersectX||f.intersectY!=f.intersectY||f.viewportX!==b||f.viewportY!==_)&&(e=!0,f._changed=!0,f._visibleChanged=D,f.visible=w,f.elementHeight=h,f.elementWidth=g,f.index=s,f.offsetX=v,f.visibleX=m,f.visibleY=p,f.intersectX=X,f.intersectY=Y,f.viewportX=b,f.viewportY=_,f.visible=w)}(!L&&e||x.__changed__)&&(t=y,N.push(t),F||z(),L=function(){!(N=N.filter(function(e){return e!==t})).length&&F&&(F=0,cancelAnimationFrame(F))})}function y(){if(H){S&&(S=!1,d(C,{scrollDirX:x.scrollDirX,scrollDirY:x.scrollDirY}),f(C,x),s(C,x,H))
for(var e=H.length-1;-1<e;e--){var t=H[e],n=t.element,r=t.visible
t._changed&&(t._changed=!1,f(n,t)),t._visibleChanged&&(d(n,{scroll:r?"in":"out"}),o(n,t,C),(r?c:l)(n,t,C)),r&&P.once&&H.splice(e,1)}a()}}function a(){L&&(L(),L=void 0)}return t(),n(),q[p](m,n),E[p](g,n),{index:t,update:n,teardown:function(){a(),q[X](m,n),E[X](g,n)}}}}()