(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{92:function(t,e,r){"use strict";r.r(e),r.d(e,"SVGLoader",(function(){return k}));var a,o,n,i,s,c,l,u,y,h,p,f,b,v,x,d,g,m=r(91),k=function(t){m.Loader.call(this,t),this.defaultDPI=90,this.defaultUnit="px"};k.prototype=Object.assign(Object.create(m.Loader.prototype),{constructor:k,load:function(t,e,r,a){var o=this,n=new m.FileLoader(o.manager);n.setPath(o.path),n.setRequestHeader(o.requestHeader),n.load(t,(function(r){try{e(o.parse(r))}catch(e){a?a(e):console.error(e),o.manager.itemError(t)}}),r,a)},parse:function(t){var e=this;function r(t,e,r,o,n,i,s,c){o=o*Math.PI/180,e=Math.abs(e),r=Math.abs(r);var l=(s.x-c.x)/2,u=(s.y-c.y)/2,y=Math.cos(o)*l+Math.sin(o)*u,h=-Math.sin(o)*l+Math.cos(o)*u,p=e*e,f=r*r,b=y*y,v=h*h,x=b/p+v/f;if(x>1){var d=Math.sqrt(x);p=(e*=d)*e,f=(r*=d)*r}var g=p*v+f*b,m=(p*f-g)/g,k=Math.sqrt(Math.max(0,m));n===i&&(k=-k);var w=k*e*h/r,A=-k*r*y/e,M=Math.cos(o)*w-Math.sin(o)*A+(s.x+c.x)/2,T=Math.sin(o)*w+Math.cos(o)*A+(s.y+c.y)/2,V=a(1,0,(y-w)/e,(h-A)/r),P=a((y-w)/e,(h-A)/r,(-y-w)/e,(-h-A)/r)%(2*Math.PI);t.currentPath.absellipse(M,T,e,r,V,V+P,0===i,o)}function a(t,e,r,a){var o=t*r+e*a,n=Math.sqrt(t*t+e*e)*Math.sqrt(r*r+a*a),i=Math.acos(Math.max(-1,Math.min(1,o/n)));return t*a-e*r<0&&(i=-i),i}function o(t,e){e=Object.assign({},e);var r={};if(t.hasAttribute("class"))for(var a=t.getAttribute("class").split(/\s/).filter(Boolean).map(t=>t.trim()),o=0;o<a.length;o++)r=Object.assign(r,p["."+a[o]]);function n(a,o,n){void 0===n&&(n=function(t){return t}),t.hasAttribute(a)&&(e[o]=n(t.getAttribute(a))),r[a]&&(e[o]=n(r[a])),t.style&&""!==t.style[a]&&(e[o]=n(t.style[a]))}function i(t){return Math.max(0,Math.min(1,l(t)))}function s(t){return Math.max(0,l(t))}return t.hasAttribute("id")&&(r=Object.assign(r,p["#"+t.getAttribute("id")])),n("fill","fill"),n("fill-opacity","fillOpacity",i),n("opacity","opacity",i),n("stroke","stroke"),n("stroke-opacity","strokeOpacity",i),n("stroke-width","strokeWidth",s),n("stroke-linejoin","strokeLineJoin"),n("stroke-linecap","strokeLineCap"),n("stroke-miterlimit","strokeMiterLimit",s),n("visibility","visibility"),e}function n(t,e){return t-(e-t)}function i(t){for(var e=t.split(/[\s,]+|(?=\s?[+\-])/),r=0;r<e.length;r++){var a=e[r];if(a.indexOf(".")!==a.lastIndexOf("."))for(var o=a.split("."),n=2;n<o.length;n++)e.splice(r+n-1,0,"0."+o[n]);e[r]=l(a)}return e}var s=["mm","cm","in","pt","pc","px"],c={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:12,pc:1,px:-1},px:{px:1}};function l(t){var r="px";if("string"==typeof t||t instanceof String)for(var a=0,o=s.length;a<o;a++){var n=s[a];if(t.endsWith(n)){r=n,t=t.substring(0,t.length-n.length);break}}var i=void 0;return"px"===r&&"px"!==e.defaultUnit?i=c.in[e.defaultUnit]/e.defaultDPI:(i=c[r][e.defaultUnit])<0&&(i=c[r].in*e.defaultDPI),i*parseFloat(t)}function u(t){var e=t.elements;return Math.sqrt(e[0]*e[0]+e[1]*e[1])}function y(t){var e=t.elements;return Math.sqrt(e[3]*e[3]+e[4]*e[4])}var h=[],p={},f=[],b=new m.Matrix3,v=new m.Matrix3,x=new m.Matrix3,d=new m.Matrix3,g=new m.Vector2,k=new m.Vector3,w=new m.Matrix3,A=(new DOMParser).parseFromString(t,"image/svg+xml");return function t(e,a){if(1===e.nodeType){var s=function(t){if(!t.hasAttribute("transform"))return null;var e=function(t){for(var e=new m.Matrix3,r=b,a=t.getAttribute("transform").split(")"),o=a.length-1;o>=0;o--){var n=a[o].trim();if(""!==n){var s=n.indexOf("("),c=n.length;if(s>0&&s<c){var l=n.substr(0,s),u=i(n.substr(s+1,c-s-1));switch(r.identity(),l){case"translate":if(u.length>=1){var y=u[0],h=y;u.length>=2&&(h=u[1]),r.translate(y,h)}break;case"rotate":if(u.length>=1){var p,f=0,g=0;p=-u[0]*Math.PI/180,u.length>=3&&(f=u[1],g=u[2]),v.identity().translate(-f,-g),x.identity().rotate(p),d.multiplyMatrices(x,v),v.identity().translate(f,g),r.multiplyMatrices(v,d)}break;case"scale":if(u.length>=1){var k=u[0],w=k;u.length>=2&&(w=u[1]),r.scale(k,w)}break;case"skewX":1===u.length&&r.set(1,Math.tan(u[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":1===u.length&&r.set(1,0,0,Math.tan(u[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":6===u.length&&r.set(u[0],u[2],u[4],u[1],u[3],u[5],0,0,1)}}e.premultiply(r)}}return e}(t);f.length>0&&e.premultiply(f[f.length-1]);return w.copy(e),f.push(e),e}(e),c=null;switch(e.nodeName){case"svg":break;case"style":!function(t){if(!t.sheet||!t.sheet.cssRules||!t.sheet.cssRules.length)return;for(var e=0;e<t.sheet.cssRules.length;e++){var r=t.sheet.cssRules[e];if(1===r.type)for(var a=r.selectorText.split(/,/gm).filter(Boolean).map(t=>t.trim()),o=0;o<a.length;o++)p[a[o]]=Object.assign(p[a[o]]||{},r.style)}}(e);break;case"g":a=o(e,a);break;case"path":a=o(e,a),e.hasAttribute("d")&&(c=function(t){for(var e=new m.ShapePath,a=new m.Vector2,o=new m.Vector2,s=new m.Vector2,c=!0,l=!1,u=t.getAttribute("d").match(/[a-df-z][^a-df-z]*/gi),y=0,h=u.length;y<h;y++){var p=u[y],f=p.charAt(0),b=p.substr(1).trim();switch(!0===c&&(l=!0,c=!1),f){case"M":for(var v=i(b),x=0,d=v.length;x<d;x+=2)a.x=v[x+0],a.y=v[x+1],o.x=a.x,o.y=a.y,0===x?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"H":for(v=i(b),x=0,d=v.length;x<d;x++)a.x=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"V":for(v=i(b),x=0,d=v.length;x<d;x++)a.y=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"L":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x=v[x+0],a.y=v[x+1],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"C":for(v=i(b),x=0,d=v.length;x<d;x+=6)e.bezierCurveTo(v[x+0],v[x+1],v[x+2],v[x+3],v[x+4],v[x+5]),o.x=v[x+2],o.y=v[x+3],a.x=v[x+4],a.y=v[x+5],0===x&&!0===l&&s.copy(a);break;case"S":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.bezierCurveTo(n(a.x,o.x),n(a.y,o.y),v[x+0],v[x+1],v[x+2],v[x+3]),o.x=v[x+0],o.y=v[x+1],a.x=v[x+2],a.y=v[x+3],0===x&&!0===l&&s.copy(a);break;case"Q":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.quadraticCurveTo(v[x+0],v[x+1],v[x+2],v[x+3]),o.x=v[x+0],o.y=v[x+1],a.x=v[x+2],a.y=v[x+3],0===x&&!0===l&&s.copy(a);break;case"T":for(v=i(b),x=0,d=v.length;x<d;x+=2){var g=n(a.x,o.x),k=n(a.y,o.y);e.quadraticCurveTo(g,k,v[x+0],v[x+1]),o.x=g,o.y=k,a.x=v[x+0],a.y=v[x+1],0===x&&!0===l&&s.copy(a)}break;case"A":for(v=i(b),x=0,d=v.length;x<d;x+=7){var w=a.clone();a.x=v[x+5],a.y=v[x+6],o.x=a.x,o.y=a.y,r(e,v[x],v[x+1],v[x+2],v[x+3],v[x+4],w,a),0===x&&!0===l&&s.copy(a)}break;case"m":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x+=v[x+0],a.y+=v[x+1],o.x=a.x,o.y=a.y,0===x?e.moveTo(a.x,a.y):e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"h":for(v=i(b),x=0,d=v.length;x<d;x++)a.x+=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"v":for(v=i(b),x=0,d=v.length;x<d;x++)a.y+=v[x],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"l":for(v=i(b),x=0,d=v.length;x<d;x+=2)a.x+=v[x+0],a.y+=v[x+1],o.x=a.x,o.y=a.y,e.lineTo(a.x,a.y),0===x&&!0===l&&s.copy(a);break;case"c":for(v=i(b),x=0,d=v.length;x<d;x+=6)e.bezierCurveTo(a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3],a.x+v[x+4],a.y+v[x+5]),o.x=a.x+v[x+2],o.y=a.y+v[x+3],a.x+=v[x+4],a.y+=v[x+5],0===x&&!0===l&&s.copy(a);break;case"s":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.bezierCurveTo(n(a.x,o.x),n(a.y,o.y),a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3]),o.x=a.x+v[x+0],o.y=a.y+v[x+1],a.x+=v[x+2],a.y+=v[x+3],0===x&&!0===l&&s.copy(a);break;case"q":for(v=i(b),x=0,d=v.length;x<d;x+=4)e.quadraticCurveTo(a.x+v[x+0],a.y+v[x+1],a.x+v[x+2],a.y+v[x+3]),o.x=a.x+v[x+0],o.y=a.y+v[x+1],a.x+=v[x+2],a.y+=v[x+3],0===x&&!0===l&&s.copy(a);break;case"t":for(v=i(b),x=0,d=v.length;x<d;x+=2){g=n(a.x,o.x),k=n(a.y,o.y);e.quadraticCurveTo(g,k,a.x+v[x+0],a.y+v[x+1]),o.x=g,o.y=k,a.x=a.x+v[x+0],a.y=a.y+v[x+1],0===x&&!0===l&&s.copy(a)}break;case"a":for(v=i(b),x=0,d=v.length;x<d;x+=7){w=a.clone();a.x+=v[x+5],a.y+=v[x+6],o.x=a.x,o.y=a.y,r(e,v[x],v[x+1],v[x+2],v[x+3],v[x+4],w,a),0===x&&!0===l&&s.copy(a)}break;case"Z":case"z":e.currentPath.autoClose=!0,e.currentPath.curves.length>0&&(a.copy(s),e.currentPath.currentPoint.copy(a),c=!0);break;default:console.warn(p)}l=!1}return e}(e));break;case"rect":a=o(e,a),c=function(t){var e=l(t.getAttribute("x")||0),r=l(t.getAttribute("y")||0),a=l(t.getAttribute("rx")||0),o=l(t.getAttribute("ry")||0),n=l(t.getAttribute("width")),i=l(t.getAttribute("height")),s=new m.ShapePath;s.moveTo(e+2*a,r),s.lineTo(e+n-2*a,r),(0!==a||0!==o)&&s.bezierCurveTo(e+n,r,e+n,r,e+n,r+2*o);s.lineTo(e+n,r+i-2*o),(0!==a||0!==o)&&s.bezierCurveTo(e+n,r+i,e+n,r+i,e+n-2*a,r+i);s.lineTo(e+2*a,r+i),(0!==a||0!==o)&&s.bezierCurveTo(e,r+i,e,r+i,e,r+i-2*o);s.lineTo(e,r+2*o),(0!==a||0!==o)&&s.bezierCurveTo(e,r,e,r,e+2*a,r);return s}(e);break;case"polygon":a=o(e,a),c=function(t){function e(t,e,o){var n=l(e),i=l(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new m.ShapePath,a=0;return t.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,e),r.currentPath.autoClose=!0,r}(e);break;case"polyline":a=o(e,a),c=function(t){function e(t,e,o){var n=l(e),i=l(o);0===a?r.moveTo(n,i):r.lineTo(n,i),a++}var r=new m.ShapePath,a=0;return t.getAttribute("points").replace(/(-?[\d\.?]+)[,|\s](-?[\d\.?]+)/g,e),r.currentPath.autoClose=!1,r}(e);break;case"circle":a=o(e,a),c=function(t){var e=l(t.getAttribute("cx")),r=l(t.getAttribute("cy")),a=l(t.getAttribute("r")),o=new m.Path;o.absarc(e,r,a,0,2*Math.PI);var n=new m.ShapePath;return n.subPaths.push(o),n}(e);break;case"ellipse":a=o(e,a),c=function(t){var e=l(t.getAttribute("cx")),r=l(t.getAttribute("cy")),a=l(t.getAttribute("rx")),o=l(t.getAttribute("ry")),n=new m.Path;n.absellipse(e,r,a,o,0,2*Math.PI);var i=new m.ShapePath;return i.subPaths.push(n),i}(e);break;case"line":a=o(e,a),c=function(t){var e=l(t.getAttribute("x1")),r=l(t.getAttribute("y1")),a=l(t.getAttribute("x2")),o=l(t.getAttribute("y2")),n=new m.ShapePath;return n.moveTo(e,r),n.lineTo(a,o),n.currentPath.autoClose=!1,n}(e)}c&&(void 0!==a.fill&&"none"!==a.fill&&c.color.setStyle(a.fill),function(t,e){function r(t){k.set(t.x,t.y,1).applyMatrix3(e),t.set(k.x,k.y)}for(var a=function(t){return 0!==t.elements[1]||0!==t.elements[3]}(e),o=t.subPaths,n=0,i=o.length;n<i;n++)for(var s=o[n].curves,c=0;c<s.length;c++){var l=s[c];l.isLineCurve?(r(l.v1),r(l.v2)):l.isCubicBezierCurve?(r(l.v0),r(l.v1),r(l.v2),r(l.v3)):l.isQuadraticBezierCurve?(r(l.v0),r(l.v1),r(l.v2)):l.isEllipseCurve&&(a&&console.warn("SVGLoader: Elliptic arc or ellipse rotation or skewing is not implemented."),g.set(l.aX,l.aY),r(g),l.aX=g.x,l.aY=g.y,l.xRadius*=u(e),l.yRadius*=y(e))}}(c,w),h.push(c),c.userData={node:e,style:a});for(var A=e.childNodes,M=0;M<A.length;M++)t(A[M],a);s&&(f.pop(),f.length>0?w.copy(f[f.length-1]):w.identity())}}(A.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:h,xml:A.documentElement}}}),k.getStrokeStyle=function(t,e,r,a,o){return{strokeColor:e=void 0!==e?e:"#000",strokeWidth:t=void 0!==t?t:1,strokeLineJoin:r=void 0!==r?r:"miter",strokeLineCap:a=void 0!==a?a:"butt",strokeMiterLimit:o=void 0!==o?o:4}},k.pointsToStroke=function(t,e,r,a){var o=[],n=[],i=[];if(0===k.pointsToStrokeWithBuffers(t,e,r,a,o,n,i))return null;var s=new m.BufferGeometry;return s.setAttribute("position",new m.Float32BufferAttribute(o,3)),s.setAttribute("normal",new m.Float32BufferAttribute(n,3)),s.setAttribute("uv",new m.Float32BufferAttribute(i,2)),s},k.pointsToStrokeWithBuffers=(a=new m.Vector2,o=new m.Vector2,n=new m.Vector2,i=new m.Vector2,s=new m.Vector2,c=new m.Vector2,l=new m.Vector2,u=new m.Vector2,y=new m.Vector2,h=new m.Vector2,p=new m.Vector2,f=new m.Vector2,b=new m.Vector2,v=new m.Vector2,x=new m.Vector2,d=new m.Vector2,g=new m.Vector2,function(t,e,r,m,k,w,A,M){r=void 0!==r?r:12,m=void 0!==m?m:.001,M=void 0!==M?M:0;var T=(t=function(t){for(var e=!1,r=1,a=t.length-1;r<a;r++)if(t[r].distanceTo(t[r+1])<m){e=!0;break}if(!e)return t;var o=[];for(o.push(t[0]),r=1,a=t.length-1;r<a;r++)t[r].distanceTo(t[r+1])>=m&&o.push(t[r]);return o.push(t[t.length-1]),o}(t)).length;if(T<2)return 0;var V,P,S,C,L,z=t[0].equals(t[T-1]),q=t[0],O=e.strokeWidth/2,I=1/(T-1),B=0,j=!1,J=0,R=3*M,W=2*M;K(t[0],t[1],a).multiplyScalar(O),u.copy(t[0]).sub(a),y.copy(t[0]).add(a),h.copy(u),p.copy(y);for(var F=1;F<T;F++){V=t[F],P=F===T-1?z?t[1]:void 0:t[F+1];var D=a;K(q,V,D),n.copy(D).multiplyScalar(O),f.copy(V).sub(n),b.copy(V).add(n);var E=B+I;if(S=!1,void 0!==P){K(V,P,o),n.copy(o).multiplyScalar(O),v.copy(V).sub(n),x.copy(V).add(n),C=!0,n.subVectors(P,q),D.dot(n)<0&&(C=!1),1===F&&(j=C),n.subVectors(P,V),n.normalize();var U=Math.abs(D.dot(n));if(0!==U){var G=O/U;n.multiplyScalar(-G),i.subVectors(V,q),s.copy(i).setLength(G).add(n),d.copy(s).negate();var H=s.length(),X=i.length();i.divideScalar(X),c.subVectors(P,V);var Y=c.length();switch(c.divideScalar(Y),i.dot(d)<X&&c.dot(d)<Y&&(S=!0),g.copy(s).add(V),d.add(V),L=!1,S?C?(x.copy(d),b.copy(d)):(v.copy(d),f.copy(d)):tt(),e.strokeLineJoin){case"bevel":et(C,S,E);break;case"round":rt(C,S),C?_(V,f,v,E,0):_(V,x,b,E,1);break;case"miter":case"miter-clip":default:var N=O*e.strokeMiterLimit/H;if(N<1){if("miter-clip"!==e.strokeLineJoin){et(C,S,E);break}rt(C,S),C?(c.subVectors(g,f).multiplyScalar(N).add(f),l.subVectors(g,v).multiplyScalar(N).add(v),$(f,E,0),$(c,E,0),$(V,E,.5),$(V,E,.5),$(c,E,0),$(l,E,0),$(V,E,.5),$(l,E,0),$(v,E,0)):(c.subVectors(g,b).multiplyScalar(N).add(b),l.subVectors(g,x).multiplyScalar(N).add(x),$(b,E,1),$(c,E,1),$(V,E,.5),$(V,E,.5),$(c,E,1),$(l,E,1),$(V,E,.5),$(l,E,1),$(x,E,1))}else S?(C?($(y,B,1),$(u,B,0),$(g,E,0),$(y,B,1),$(g,E,0),$(d,E,1)):($(y,B,1),$(u,B,0),$(g,E,1),$(u,B,0),$(d,E,0),$(g,E,1)),C?v.copy(g):x.copy(g)):C?($(f,E,0),$(g,E,0),$(V,E,.5),$(V,E,.5),$(g,E,0),$(v,E,0)):($(b,E,1),$(g,E,1),$(V,E,.5),$(V,E,.5),$(g,E,1),$(x,E,1)),L=!0}}else tt()}else tt();z||F!==T-1||at(t[0],h,p,C,!0,B),B=E,q=V,u.copy(v),y.copy(x)}if(z){if(S&&k){var Q=g,Z=d;j!==C&&(Q=d,Z=g),C?(L||j)&&(Z.toArray(k,0),Z.toArray(k,9),L&&Q.toArray(k,3)):!L&&j||(Z.toArray(k,3),Z.toArray(k,9),L&&Q.toArray(k,0))}}else at(V,f,b,C,!1,E);return J;function K(t,e,r){return r.subVectors(e,t),r.set(-r.y,r.x).normalize()}function $(t,e,r){k&&(k[R]=t.x,k[R+1]=t.y,k[R+2]=0,w&&(w[R]=0,w[R+1]=0,w[R+2]=1),R+=3,A&&(A[W]=e,A[W+1]=r,W+=2)),J+=3}function _(t,e,s,c,l){a.copy(e).sub(t).normalize(),o.copy(s).sub(t).normalize();var u=Math.PI,y=a.dot(o);Math.abs(y)<1&&(u=Math.abs(Math.acos(y))),u/=r,n.copy(e);for(var h=0,p=r-1;h<p;h++)i.copy(n).rotateAround(t,u),$(n,c,l),$(i,c,l),$(t,c,.5),n.copy(i);$(i,c,l),$(s,c,l),$(t,c,.5)}function tt(){$(y,B,1),$(u,B,0),$(f,E,0),$(y,B,1),$(f,E,1),$(b,E,0)}function et(t,e,r){e?t?($(y,B,1),$(u,B,0),$(f,E,0),$(y,B,1),$(f,E,0),$(d,E,1),$(f,r,0),$(v,r,0),$(d,r,.5)):($(y,B,1),$(u,B,0),$(b,E,1),$(u,B,0),$(d,E,0),$(b,E,1),$(b,r,1),$(x,r,0),$(d,r,.5)):t?($(f,r,0),$(v,r,0),$(V,r,.5)):($(b,r,1),$(x,r,0),$(V,r,.5))}function rt(t,e){e&&(t?($(y,B,1),$(u,B,0),$(f,E,0),$(y,B,1),$(f,E,0),$(d,E,1),$(f,B,0),$(V,E,.5),$(d,E,1),$(V,E,.5),$(v,B,0),$(d,E,1)):($(y,B,1),$(u,B,0),$(b,E,1),$(u,B,0),$(d,E,0),$(b,E,1),$(b,B,1),$(d,E,0),$(V,E,.5),$(V,E,.5),$(d,E,0),$(x,B,1)))}function at(t,r,s,c,l,u){switch(e.strokeLineCap){case"round":l?_(t,s,r,u,.5):_(t,r,s,u,.5);break;case"square":if(l)a.subVectors(r,t),o.set(a.y,-a.x),n.addVectors(a,o).add(t),i.subVectors(o,a).add(t),c?(n.toArray(k,3),i.toArray(k,0),i.toArray(k,9)):(n.toArray(k,3),n.toArray(k,9),i.toArray(k,0));else{a.subVectors(s,t),o.set(a.y,-a.x),n.addVectors(a,o).add(t),i.subVectors(o,a).add(t);var y=k.length;c?(n.toArray(k,y-3),i.toArray(k,y-6),i.toArray(k,y-12)):(n.toArray(k,y-6),i.toArray(k,y-3),i.toArray(k,y-12))}}}})}}]);