/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-es6array-es6object-es6string-mediaqueries-setclasses !*/
 !function(e,t,n){function o(e,t){return typeof e===t}function r(){var e,t,n,r,a,s,i;for(var l in d)if(d.hasOwnProperty(l)){if(e=[],t=d[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)s=e[a],i=s.split("."),1===i.length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),p.push((r?"":"no-")+i.join("-"))}}function a(e){var t=c.className,n=Modernizr._config.classPrefix||"";if(u&&(t=t.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(o,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),u?c.className.baseVal=t:c.className=t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):u?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=s(u?"svg":"body"),e.fake=!0),e}function l(e,n,o,r){var a,l,p,d,f="modernizr",u=s("div"),y=i();if(parseInt(o,10))for(;o--;)p=s("div"),p.id=r?r[o]:f+(o+1),u.appendChild(p);return a=s("style"),a.type="text/css",a.id="s"+f,(y.fake?y:u).appendChild(a),y.appendChild(u),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),u.id=f,y.fake&&(y.style.background="",y.style.overflow="hidden",d=c.style.overflow,c.style.overflow="hidden",c.appendChild(y)),l=n(u,e),y.fake?(y.parentNode.removeChild(y),c.style.overflow=d,c.offsetHeight):u.parentNode.removeChild(u),!!l}var p=[],d=[],f={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){d.push({name:e,fn:t,options:n})},addAsyncTest:function(e){d.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("es6array",!!(Array.prototype&&Array.prototype.copyWithin&&Array.prototype.fill&&Array.prototype.find&&Array.prototype.findIndex&&Array.prototype.keys&&Array.prototype.entries&&Array.prototype.values&&Array.from&&Array.of)),Modernizr.addTest("es6object",!!(Object.assign&&Object.is&&Object.setPrototypeOf)),Modernizr.addTest("es6string",!!(String.fromCodePoint&&String.raw&&String.prototype.codePointAt&&String.prototype.repeat&&String.prototype.startsWith&&String.prototype.endsWith&&String.prototype.includes));var c=t.documentElement,u="svg"===c.nodeName.toLowerCase(),y=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}:function(t){var n=!1;return l("@media "+t+" { #modernizr { position: absolute; } }",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}),n}}();f.mq=y,Modernizr.addTest("mediaqueries",y("only all")),r(),a(p),delete f.addTest,delete f.addAsyncTest;for(var m=0;m<Modernizr._q.length;m++)Modernizr._q[m]();e.Modernizr=Modernizr}(window,document);