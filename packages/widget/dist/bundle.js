(()=>{"use strict";var n={385:(n,e,t)=>{t.d(e,{A:()=>s});var o=t(601),r=t.n(o),i=t(314),a=t.n(i)()(r());a.push([n.id,"body {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n}\n\n#chat-button {\n    position: fixed;\n    bottom: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    cursor: pointer;\n    border-radius: 50%;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n}\n\n#chat-button img {\n    width: 60%;\n    height: 60%;\n}\n\n#chat-window {\n    position: fixed;\n    bottom: 80px;\n    right: 20px;\n    width: 500px;\n    height: 600px;\n    border: 1px solid #ccc;\n    background-color: #fff;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n    display: flex !important;\n    flex-direction: column;\n    border-radius: 10px;\n}\n\n#chat-header {\n    color: #fff;\n    padding: 10px;\n    text-align: center;\n    position: relative;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n#chat-header::before {\n    content: '';\n    flex-grow: 1;\n}\n\n#chat-close {\n    cursor: pointer;\n    font-size: 20px;\n}\n\n#chat-body {\n    flex: 1;\n    padding: 10px;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n}\n\n#chat-input-container {\n    display: flex;\n    padding: 10px;\n    border-top: 1px solid #ccc;\n    background-color: #fff;\n}\n\n#chat-input {\n    border: 1px solid #ccc;\n    padding: 10px;\n    flex-grow: 1;\n    border-radius: 20px;\n    margin-right: 10px;\n    outline: none;\n    font-size: 16px;\n}\n\n#chat-send {\n    color: #fff;\n    border: none;\n    padding: 5px;\n    cursor: pointer;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 40px;\n    height: 40px;\n}\n\n#chat-send img {\n    width: 20px;\n    height: 20px;\n}\n\n.assistant {\n    align-self: flex-start;\n    background-color: #f1f0f0;\n    color: #000;\n    padding: 10px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    max-width: 80%;\n}\n\n.user {\n    align-self: flex-end;\n    background-color: #f1f0f0;\n    color: #000;\n    padding: 10px;\n    border-radius: 10px;\n    margin-bottom: 10px;\n    max-width: 80%;\n}",""]);const s=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=o.base?c[0]+o.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var h=r(f,o);o.byIndex=s,e.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function r(n,e){var t=e.domAPI(e);t.update(n);return function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var i=o(n=n||[],r=r||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=o(n,r),d=0;d<i.length;d++){var l=t(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={id:o,exports:{}};return n[o](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),i=t(825),a=t.n(i),s=t(659),c=t.n(s),d=t(56),l=t.n(d),u=t(540),p=t.n(u),f=t(113),h=t.n(f),m=t(385),y={};y.styleTagTransform=h(),y.setAttributes=l(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=p();r()(m.A,y);m.A&&m.A.locals&&m.A.locals;!function(){let n=null,e=null,t="";function o(n){const e=document.createElement("link");e.rel="stylesheet",e.href=n,document.head.appendChild(e)}o("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"),o("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"),window.initializeChat=function(o){const{baseURL:r,baseColor:i,module:a="default",assistantId:s,initialMessage:c}=o,d=document.createElement("div");d.id="chat-button",d.style.backgroundColor=i,d.innerHTML='<i class="fas fa-comment"></i>',document.body.appendChild(d);const l=document.createElement("div");function u(n,e){let t;if(t="string"==typeof n?n.replace(/【\d+(?::\d+)?†source】/g,""):JSON.stringify(n),"assistant"===e&&document.getElementById("chat-body").lastChild&&"assistant"===document.getElementById("chat-body").lastChild.className)document.getElementById("chat-body").lastChild.textContent=t;else{const n=document.createElement("div");n.className=e,n.textContent=t,document.getElementById("chat-body").appendChild(n)}!function(){const n=document.getElementById("chat-body");n.scrollTop=n.scrollHeight}()}l.id="chat-window",l.style.visibility="hidden",l.innerHTML='\n            <div id="chat-header"> <span id="chat-close">&times;</span></div>\n            <div id="chat-body"></div>\n            <div id="chat-input-container">\n                <input id="chat-input" type="text" placeholder="Type a message..." />\n                <button id="chat-send"><i class="fas fa-paper-plane"></i></button>\n            </div>\n        ',document.body.appendChild(l),document.getElementById("chat-header").style.backgroundColor=i,l.querySelector("#chat-close").addEventListener("click",(function(){l.style.visibility="hidden"})),d.addEventListener("click",(function(){l.style.visibility="hidden"===l.style.visibility?"visible":"hidden"})),document.getElementById("chat-send").addEventListener("click",(function(){const t=document.getElementById("chat-input"),o=t.value;""!==o.trim()&&(u(o,"user"),function(t){if(!n)return void console.error("Thread ID is not set.");u("...","assistant");const o=JSON.stringify({threadId:n,message:t,assistantId:s});e.send(o)}(o),t.value="")})),document.getElementById("chat-send").style.backgroundColor=i,document.getElementById("chat-input").addEventListener("keypress",(function(n){"Enter"===n.key&&document.getElementById("chat-send").click()}));const p=`${"https:"===window.location.protocol?"wss":"ws"}://${r.replace(/^https?:\/\//,"")}/api/v1/${a}/chat-stream`;e=new WebSocket(p),e.onopen=function(){console.log("WebSocket connection established")},e.onmessage=function(n){const e=JSON.parse(n.data);"textCreated"===e.event?t="":"textDelta"===e.event?(t+=e.data,u(t,"assistant")):e.error&&console.error("Error: ",e.error)},e.onclose=function(){console.log("WebSocket connection closed")},e.onerror=function(n){console.error("WebSocket error: ",n)};const f=new XMLHttpRequest;f.timeout=3e4,f.open("POST",`${r}/api/v1/${a}/start`,!0),f.onreadystatechange=function(){if(4===f.readyState&&200===f.status){const e=JSON.parse(f.responseText);n=e.threadId,""!==c&&u(c,"assistant")}},f.send(JSON.stringify({initialMessage:c}))}}()})();