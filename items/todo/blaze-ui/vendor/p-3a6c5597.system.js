var __extends=this&&this.__extends||function(){var e=function(n,r){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)if(Object.prototype.hasOwnProperty.call(n,r))e[r]=n[r]};return e(n,r)};return function(n,r){if(typeof r!=="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(n,r);function t(){this.constructor=n}n.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,n,r,t){function a(e){return e instanceof r?e:new r((function(n){n(e)}))}return new(r||(r=Promise))((function(r,i){function l(e){try{s(t.next(e))}catch(e){i(e)}}function o(e){try{s(t["throw"](e))}catch(e){i(e)}}function s(e){e.done?r(e.value):a(e.value).then(l,o)}s((t=t.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(n){return s([e,n])}}function s(l){if(t)throw new TypeError("Generator is already executing.");while(r)try{if(t=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:r.label++;return{value:l[1],done:false};case 5:r.label++;a=l[1];l=[0];continue;case 7:l=r.ops.pop();r.trys.pop();continue;default:if(!(i=r.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){r=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){r.label=l[1];break}if(l[0]===6&&r.label<i[1]){r.label=i[1];i=l;break}if(i&&r.label<i[2]){r.label=i[2];r.ops.push(l);break}if(i[2])r.ops.pop();r.trys.pop();continue}l=n.call(e,r)}catch(e){l=[6,e];a=0}finally{t=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register([],(function(e,n){"use strict";return{execute:function(){var r=this;var t="blaze-atoms";var a;var i;var l=false;var o=false;var s=false;var f=false;var $=false;var u=typeof window!=="undefined"?window:{};var c=u.document||{head:{}};var v={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,n,r,t){return e.addEventListener(n,r,t)},rel:function(e,n,r,t){return e.removeEventListener(n,r,t)},ce:function(e,n){return new CustomEvent(e,n)}};var d=e("p",(function(e){return Promise.resolve(e)}));var m=function(e,n,r,t){if(r){r.map((function(r){var t=r[0],a=r[1],i=r[2];var l=p(e,t);var o=h(n,i);var s=g(t);v.ael(l,a,o,s);(n.$rmListeners$=n.$rmListeners$||[]).push((function(){return v.rel(l,a,o,s)}))}))}};var h=function(e,n){return function(r){try{{if(e.$flags$&256){e.$lazyInstance$[n](r)}else{(e.$queuedListeners$=e.$queuedListeners$||[]).push([n,r])}}}catch(e){be(e)}}};var p=function(e,n){if(n&4)return c;if(n&8)return u;return e};var g=function(e){return(e&2)!==0};var y="{visibility:hidden}.hydrated{visibility:inherit}";var b=function(e,n){if(n===void 0){n=""}{return function(){return}}};var w=function(e,n){{return function(){return}}};var N={};var R=function(e){e=typeof e;return e==="object"||e==="function"};var x=e("h",(function(e,n){var r=[];for(var t=2;t<arguments.length;t++){r[t-2]=arguments[t]}var a=null;var i=null;var l=false;var o=false;var s=[];var f=function(n){for(var r=0;r<n.length;r++){a=n[r];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(l=typeof e!=="function"&&!R(a)){a=String(a)}if(l&&o){s[s.length-1].$text$+=a}else{s.push(l?_(null,a):a)}o=l}}};f(r);if(n){if(n.name){i=n.name}{var $=n.className||n.class;if($){n.class=typeof $!=="object"?$:Object.keys($).filter((function(e){return $[e]})).join(" ")}}}var u=_(e,null);u.$attrs$=n;if(s.length>0){u.$children$=s}{u.$name$=i}return u}));var _=function(e,n){var r={$flags$:0,$tag$:e,$text$:n,$elm$:null,$children$:null};{r.$attrs$=null}{r.$name$=null}return r};var T={};var C=function(e){return e&&e.$tag$===T};var P=function(e,n,r,t,a,i){if(r!==t){var l=ye(e,n);var o=n.toLowerCase();if(n==="class"){var s=e.classList;var f=j(r);var $=j(t);s.remove.apply(s,f.filter((function(e){return e&&!$.includes(e)})));s.add.apply(s,$.filter((function(e){return e&&!f.includes(e)})))}else if(n==="style"){{for(var c in r){if(!t||t[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in t){if(!r||t[c]!==r[c]){if(c.includes("-")){e.style.setProperty(c,t[c])}else{e.style[c]=t[c]}}}}else if(n==="ref"){if(t){t(e)}}else if(!l&&n[0]==="o"&&n[1]==="n"){if(n[2]==="-"){n=n.slice(3)}else if(ye(u,o)){n=o.slice(2)}else{n=o[2]+n.slice(3)}if(r){v.rel(e,n,r,false)}if(t){v.ael(e,n,t,false)}}else{var d=R(t);if((l||d&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var m=t==null?"":t;if(n==="list"){l=false}else if(r==null||e[n]!=m){e[n]=m}}else{e[n]=t}}catch(e){}}if(t==null||t===false){if(t!==false||e.getAttribute(n)===""){{e.removeAttribute(n)}}}else if((!l||i&4||a)&&!d){t=t===true?"":t;{e.setAttribute(n,t)}}}}};var L=/\s/;var j=function(e){return!e?[]:e.split(L)};var E=function(e,n,r,t){var a=n.$elm$.nodeType===11&&n.$elm$.host?n.$elm$.host:n.$elm$;var i=e&&e.$attrs$||N;var l=n.$attrs$||N;{for(t in i){if(!(t in l)){P(a,t,i[t],undefined,r,n.$flags$)}}}for(t in l){P(a,t,i[t],l[t],r,n.$flags$)}};var k=function(e,n,r,t){var o=n.$children$[r];var $=0;var u;var v;var d;if(!l){s=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){u=o.$elm$=c.createTextNode(o.$text$)}else if(o.$flags$&1){u=o.$elm$=c.createTextNode("")}else{u=o.$elm$=c.createElement(o.$flags$&2?"slot-fb":o.$tag$);{E(null,o,f)}if(o.$children$){for($=0;$<o.$children$.length;++$){v=k(e,o,$);if(v){u.appendChild(v)}}}}{u["s-hn"]=i;if(o.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[r];if(d&&d.$tag$===o.$tag$&&e.$elm$){I(e.$elm$,false)}}}return u};var I=function(e,n){v.$flags$|=1;var r=e.childNodes;for(var t=r.length-1;t>=0;t--){var a=r[t];if(a["s-hn"]!==i&&a["s-ol"]){z(a).insertBefore(a,B(a));a["s-ol"].remove();a["s-ol"]=undefined;s=true}if(n){I(a,n)}}v.$flags$&=~1};var O=function(e,n,r,t,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(t[a]){o=k(null,r,a);if(o){t[a].$elm$=o;l.insertBefore(o,B(n))}}}};var M=function(e,n,r,t,a){for(;n<=r;++n){if(t=e[n]){a=t.$elm$;F(t);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{I(a,true)}}a.remove()}}};var S=function(e,n,r,t){var a=0;var i=0;var l=n.length-1;var o=n[0];var s=n[l];var f=t.length-1;var $=t[0];var u=t[f];var c;while(a<=l&&i<=f){if(o==null){o=n[++a]}else if(s==null){s=n[--l]}else if($==null){$=t[++i]}else if(u==null){u=t[--f]}else if(A(o,$)){U(o,$);o=n[++a];$=t[++i]}else if(A(s,u)){U(s,u);s=n[--l];u=t[--f]}else if(A(o,u)){if(o.$tag$==="slot"||u.$tag$==="slot"){I(o.$elm$.parentNode,false)}U(o,u);e.insertBefore(o.$elm$,s.$elm$.nextSibling);o=n[++a];u=t[--f]}else if(A(s,$)){if(o.$tag$==="slot"||u.$tag$==="slot"){I(s.$elm$.parentNode,false)}U(s,$);e.insertBefore(s.$elm$,o.$elm$);s=n[--l];$=t[++i]}else{{c=k(n&&n[i],r,i);$=t[++i]}if(c){{z(o.$elm$).insertBefore(c,B(o.$elm$))}}}}if(a>l){O(e,t[f+1]==null?null:t[f+1].$elm$,r,t,i,f)}else if(i>f){M(n,a,l)}};var A=function(e,n){if(e.$tag$===n.$tag$){if(e.$tag$==="slot"){return e.$name$===n.$name$}return true}return false};var B=function(e){return e&&e["s-ol"]||e};var z=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var U=function(e,n){var r=n.$elm$=e.$elm$;var t=e.$children$;var a=n.$children$;var i=n.$tag$;var l=n.$text$;var o;if(l===null){{if(i==="slot");else{E(e,n,f)}}if(t!==null&&a!==null){S(r,t,n,a)}else if(a!==null){if(e.$text$!==null){r.textContent=""}O(r,null,n,a,0,a.length-1)}else if(t!==null){M(t,0,t.length-1)}}else if(o=r["s-cr"]){o.parentNode.textContent=l}else if(e.$text$!==l){r.data=l}};var q=function(e){var n=e.childNodes;var r;var t;var a;var i;var l;var o;for(t=0,a=n.length;t<a;t++){r=n[t];if(r.nodeType===1){if(r["s-sr"]){l=r["s-sn"];r.hidden=false;for(i=0;i<a;i++){o=n[i].nodeType;if(n[i]["s-hn"]!==r["s-hn"]||l!==""){if(o===1&&l===n[i].getAttribute("slot")){r.hidden=true;break}}else{if(o===1||o===3&&n[i].textContent.trim()!==""){r.hidden=true;break}}}}q(r)}}};var V=[];var W=function(e){var n;var r;var t;var a;var i;var l;var s=0;var f=e.childNodes;var $=f.length;for(;s<$;s++){n=f[s];if(n["s-sr"]&&(r=n["s-cr"])&&r.parentNode){t=r.parentNode.childNodes;a=n["s-sn"];for(l=t.length-1;l>=0;l--){r=t[l];if(!r["s-cn"]&&!r["s-nr"]&&r["s-hn"]!==n["s-hn"]){if(D(r,a)){i=V.find((function(e){return e.$nodeToRelocate$===r}));o=true;r["s-sn"]=r["s-sn"]||a;if(i){i.$slotRefNode$=n}else{V.push({$slotRefNode$:n,$nodeToRelocate$:r})}if(r["s-sr"]){V.map((function(e){if(D(e.$nodeToRelocate$,r["s-sn"])){i=V.find((function(e){return e.$nodeToRelocate$===r}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!V.some((function(e){return e.$nodeToRelocate$===r}))){V.push({$nodeToRelocate$:r})}}}}if(n.nodeType===1){W(n)}}};var D=function(e,n){if(e.nodeType===1){if(e.getAttribute("slot")===null&&n===""){return true}if(e.getAttribute("slot")===n){return true}return false}if(e["s-sn"]===n){return true}return n===""};var F=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(F)}};var H=function(e,n){var r=e.$hostElement$;var t=e.$cmpMeta$;var f=e.$vnode$||_(null,null);var $=C(n)?n:x(null,null,n);i=r.tagName;if(t.$attrsToReflect$){$.$attrs$=$.$attrs$||{};t.$attrsToReflect$.map((function(e){var n=e[0],t=e[1];return $.$attrs$[t]=r[n]}))}$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=r;{a=r["s-cr"];l=(t.$flags$&1)!==0;o=false}U(f,$);{v.$flags$|=1;if(s){W($.$elm$);var u=void 0;var d=void 0;var m=void 0;var h=void 0;var p=void 0;var g=void 0;var y=0;for(;y<V.length;y++){u=V[y];d=u.$nodeToRelocate$;if(!d["s-ol"]){m=c.createTextNode("");m["s-nr"]=d;d.parentNode.insertBefore(d["s-ol"]=m,d)}}for(y=0;y<V.length;y++){u=V[y];d=u.$nodeToRelocate$;if(u.$slotRefNode$){h=u.$slotRefNode$.parentNode;p=u.$slotRefNode$.nextSibling;m=d["s-ol"];while(m=m.previousSibling){g=m["s-nr"];if(g&&g["s-sn"]===d["s-sn"]&&h===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){p=g;break}}}if(!p&&h!==d.parentNode||d.nextSibling!==p){if(d!==p){if(!d["s-hn"]&&d["s-ol"]){d["s-hn"]=d["s-ol"].parentNode.nodeName}h.insertBefore(d,p)}}}else{if(d.nodeType===1){d.hidden=true}}}}if(o){q($.$elm$)}v.$flags$&=~1;V.length=0}};var G=e("g",(function(e){return he(e).$hostElement$}));var J=e("c",(function(e,n,r){var t=G(e);return{emit:function(e){return K(t,n,{bubbles:!!(r&4),composed:!!(r&2),cancelable:!!(r&1),detail:e})}}}));var K=function(e,n,r){var t=v.ce(n,r);e.dispatchEvent(t);return t};var Q=function(e,n){if(n&&!e.$onRenderResolve$&&n["s-p"]){n["s-p"].push(new Promise((function(n){return e.$onRenderResolve$=n})))}};var X=function(e,n){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}Q(e,e.$ancestorComponent$);var r=function(){return Y(e,n)};return Le(r)};var Y=function(e,n){var r=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var t=e.$lazyInstance$;var a;if(n){{e.$flags$|=256;if(e.$queuedListeners$){e.$queuedListeners$.map((function(e){var n=e[0],r=e[1];return te(t,n,r)}));e.$queuedListeners$=null}}{a=te(t,"componentWillLoad")}}else{{a=te(t,"componentWillUpdate")}}r();return ae(a,(function(){return Z(e,t)}))};var Z=function(e,n,t){return __awaiter(r,void 0,void 0,(function(){var r,t,a,i,l,o;return __generator(this,(function(s){r=e.$hostElement$;t=b("update",e.$cmpMeta$.$tagName$);a=r["s-rc"];i=b("render",e.$cmpMeta$.$tagName$);{ee(e,n)}if(a){a.map((function(e){return e()}));r["s-rc"]=undefined}i();t();{l=r["s-p"];o=function(){return ne(e)};if(l.length===0){o()}else{Promise.all(l).then(o);e.$flags$|=4;l.length=0}}return[2]}))}))};var ee=function(e,n,r){try{n=n.render();{e.$flags$&=~16}{e.$flags$|=2}{{{H(e,n)}}}}catch(n){be(n,e.$hostElement$)}return null};var ne=function(e){var n=e.$cmpMeta$.$tagName$;var r=e.$hostElement$;var t=b("postUpdate",n);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{ie(r)}{te(a,"componentDidLoad")}t();{e.$onReadyResolve$(r);if(!i){re()}}}else{{te(a,"componentDidUpdate")}t()}{e.$onInstanceResolve$(r)}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Pe((function(){return X(e,false)}))}e.$flags$&=~(4|512)}};var re=function(e){{ie(c.documentElement)}Pe((function(){return K(u,"appload",{detail:{namespace:t}})}))};var te=function(e,n,r){if(e&&e[n]){try{return e[n](r)}catch(e){be(e)}}return undefined};var ae=function(e,n){return e&&e.then?e.then(n):n()};var ie=function(e){return e.classList.add("hydrated")};var le=function(e,n){if(e!=null&&!R(e)){if(n&4){return e==="false"?false:e===""||!!e}if(n&2){return parseFloat(e)}if(n&1){return String(e)}return e}return e};var oe=function(e,n){return he(e).$instanceValues$.get(n)};var se=function(e,n,r,t){var a=he(e);var i=a.$hostElement$;var l=a.$instanceValues$.get(n);var o=a.$flags$;var s=a.$lazyInstance$;r=le(r,t.$members$[n][0]);var f=Number.isNaN(l)&&Number.isNaN(r);var $=r!==l&&!f;if((!(o&8)||l===undefined)&&$){a.$instanceValues$.set(n,r);if(s){if(t.$watchers$&&o&128){var u=t.$watchers$[n];if(u){u.map((function(e){try{s[e](r,l,n)}catch(e){be(e,i)}}))}}if((o&(2|16))===2){X(a,false)}}}};var fe=function(e,n,r){if(n.$members$){if(e.watchers){n.$watchers$=e.watchers}var t=Object.entries(n.$members$);var a=e.prototype;t.map((function(e){var t=e[0],i=e[1][0];if(i&31||r&2&&i&32){Object.defineProperty(a,t,{get:function(){return oe(this,t)},set:function(e){se(this,t,e,n)},configurable:true,enumerable:true})}else if(r&1&&i&64){Object.defineProperty(a,t,{value:function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}var r=he(this);return r.$onInstancePromise$.then((function(){var n;return(n=r.$lazyInstance$)[t].apply(n,e)}))}})}}));if(r&1){var i=new Map;a.attributeChangedCallback=function(e,n,r){var t=this;v.jmp((function(){var n=i.get(e);if(t.hasOwnProperty(n)){r=t[n];delete t[n]}else if(a.hasOwnProperty(n)&&typeof t[n]==="number"&&t[n]==r){return}t[n]=r===null&&typeof t[n]==="boolean"?false:r}))};e.observedAttributes=t.filter((function(e){var n=e[0],r=e[1];return r[0]&15})).map((function(e){var r=e[0],t=e[1];var a=t[1]||r;i.set(a,r);if(t[0]&512){n.$attrsToReflect$.push([r,a])}return a}))}}return e};var $e=function(e,n,t,a,i){return __awaiter(r,void 0,void 0,(function(){var e,r,a,l;return __generator(this,(function(o){switch(o.label){case 0:if(!((n.$flags$&32)===0))return[3,3];n.$flags$|=32;i=Ne(t);if(!i.then)return[3,2];e=w();return[4,i];case 1:i=o.sent();e();o.label=2;case 2:if(!i.isProxied){{t.$watchers$=i.watchers}fe(i,t,2);i.isProxied=true}r=b("createInstance",t.$tagName$);{n.$flags$|=8}try{new i(n)}catch(e){be(e)}{n.$flags$&=~8}{n.$flags$|=128}r();o.label=3;case 3:a=n.$ancestorComponent$;l=function(){return X(n,true)};if(a&&a["s-rc"]){a["s-rc"].push(l)}else{l()}return[2]}}))}))};var ue=function(e){if((v.$flags$&1)===0){var n=he(e);var r=n.$cmpMeta$;var t=b("connectedCallback",r.$tagName$);if(!(n.$flags$&1)){n.$flags$|=1;{if(r.$flags$&(4|8)){ce(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){Q(n,n.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).map((function(n){var r=n[0],t=n[1][0];if(t&31&&e.hasOwnProperty(r)){var a=e[r];delete e[r];e[r]=a}}))}{$e(e,n,r)}}else{m(e,n,r.$listeners$)}t()}};var ce=function(e){var n=e["s-cr"]=c.createComment("");n["s-cn"]=true;e.insertBefore(n,e.firstChild)};var ve=function(e){if((v.$flags$&1)===0){var n=he(e);var r=n.$lazyInstance$;{if(n.$rmListeners$){n.$rmListeners$.map((function(e){return e()}));n.$rmListeners$=undefined}}{te(r,"disconnectedCallback")}}};var de=e("b",(function(e,n){if(n===void 0){n={}}var r=b();var t=[];var a=n.exclude||[];var i=u.customElements;var l=c.head;var o=l.querySelector("meta[charset]");var s=c.createElement("style");var f=[];var $;var d=true;Object.assign(v,n);v.$resourcesUrl$=new URL(n.resourcesUrl||"./",c.baseURI).href;e.map((function(e){e[1].map((function(n){var r={$flags$:n[0],$tagName$:n[1],$members$:n[2],$listeners$:n[3]};{r.$members$=n[2]}{r.$listeners$=n[3]}{r.$attrsToReflect$=[]}{r.$watchers$={}}var l=r.$tagName$;var o=function(e){__extends(n,e);function n(n){var t=e.call(this,n)||this;n=t;ge(n,r);return t}n.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(d){f.push(this)}else{v.jmp((function(){return ue(e)}))}};n.prototype.disconnectedCallback=function(){var e=this;v.jmp((function(){return ve(e)}))};n.prototype.componentOnReady=function(){return he(this).$onReadyPromise$};return n}(HTMLElement);r.$lazyBundleId$=e[0];if(!a.includes(l)&&!i.get(l)){t.push(l);i.define(l,fe(o,r,1))}}))}));{s.innerHTML=t+y;s.setAttribute("data-styles","");l.insertBefore(s,o?o.nextSibling:l.firstChild)}d=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{v.jmp((function(){return $=setTimeout(re,30)}))}}r()}));var me=new WeakMap;var he=function(e){return me.get(e)};var pe=e("r",(function(e,n){return me.set(n.$lazyInstance$=e,n)}));var ge=function(e,n){var r={$flags$:0,$hostElement$:e,$cmpMeta$:n,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}m(e,r,n.$listeners$);return me.set(e,r)};var ye=function(e,n){return n in e};var be=function(e,n){return(0,console.error)(e,n)};var we=new Map;var Ne=function(e,r,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=we.get(i);if(l){return l[a]}
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/return n.import("./".concat(i,".entry.js").concat("")).then((function(e){{we.set(i,e)}return e[a]}),be)};var Re=[];var xe=[];var _e=function(e,n){return function(r){e.push(r);if(!$){$=true;if(n&&v.$flags$&4){Pe(Ce)}else{v.raf(Ce)}}}};var Te=function(e){for(var n=0;n<e.length;n++){try{e[n](performance.now())}catch(e){be(e)}}e.length=0};var Ce=function(){Te(Re);{Te(xe);if($=Re.length>0){v.raf(Ce)}}};var Pe=function(e){return d().then(e)};var Le=_e(xe,true)}}}));