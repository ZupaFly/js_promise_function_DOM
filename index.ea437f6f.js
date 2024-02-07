var e=document.querySelector("body");function t(e,t){return new Promise(function(n,c){e.addEventListener(t,function(){n("It was ".concat(t," on the element: ")+"".concat(e.nodeName,", id: ").concat(e.id,"."))})})}var n=function(t){var n=document.createElement("div");n.className="message",n.textContent=t,e.appendChild(n)},c=document.getElementById("login"),o=document.getElementById("password"),d=document.getElementById("submit");t(c,"click").then(n),t(o,"click").then(n),t(d,"click").then(n),t(c,"input").then(n),t(o,"input").then(n),t(c,"blur").then(n),t(o,"blur").then(n),t(d,"blur").then(n);// Just a coment to check gitHub
//# sourceMappingURL=index.ea437f6f.js.map

//# sourceMappingURL=index.ea437f6f.js.map
