(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function U0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},yo={},Qu={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function iv(){if(gm)return Pt;gm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(k,le,Ne){this.props=k,this.context=le,this.refs=A,this.updater=Ne||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,le){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,le,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(k,le,Ne){this.props=k,this.context=le,this.refs=A,this.updater=Ne||M}var I=C.prototype=new _;I.constructor=C,T(I,y.prototype),I.isPureReactComponent=!0;var D=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function j(k,le,Ne){var Xe,qe={},te=null,de=null;if(le!=null)for(Xe in le.ref!==void 0&&(de=le.ref),le.key!==void 0&&(te=""+le.key),le)U.call(le,Xe)&&!F.hasOwnProperty(Xe)&&(qe[Xe]=le[Xe]);var Me=arguments.length-2;if(Me===1)qe.children=Ne;else if(1<Me){for(var Fe=Array(Me),Pe=0;Pe<Me;Pe++)Fe[Pe]=arguments[Pe+2];qe.children=Fe}if(k&&k.defaultProps)for(Xe in Me=k.defaultProps,Me)qe[Xe]===void 0&&(qe[Xe]=Me[Xe]);return{$$typeof:s,type:k,key:te,ref:de,props:qe,_owner:L.current}}function E(k,le){return{$$typeof:s,type:k.type,key:le,ref:k.ref,props:k.props,_owner:k._owner}}function R(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var le={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ne){return le[Ne]})}var $=/\/+/g;function K(k,le){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):le.toString(36)}function ie(k,le,Ne,Xe,qe){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var de=!1;if(k===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(k.$$typeof){case s:case e:de=!0}}if(de)return de=k,qe=qe(de),k=Xe===""?"."+K(de,0):Xe,D(qe)?(Ne="",k!=null&&(Ne=k.replace($,"$&/")+"/"),ie(qe,le,Ne,"",function(Pe){return Pe})):qe!=null&&(R(qe)&&(qe=E(qe,Ne+(!qe.key||de&&de.key===qe.key?"":(""+qe.key).replace($,"$&/")+"/")+k)),le.push(qe)),1;if(de=0,Xe=Xe===""?".":Xe+":",D(k))for(var Me=0;Me<k.length;Me++){te=k[Me];var Fe=Xe+K(te,Me);de+=ie(te,le,Ne,Fe,qe)}else if(Fe=S(k),typeof Fe=="function")for(k=Fe.call(k),Me=0;!(te=k.next()).done;)te=te.value,Fe=Xe+K(te,Me++),de+=ie(te,le,Ne,Fe,qe);else if(te==="object")throw le=String(k),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return de}function re(k,le,Ne){if(k==null)return k;var Xe=[],qe=0;return ie(k,Xe,"","",function(te){return le.call(Ne,te,qe++)}),Xe}function ee(k){if(k._status===-1){var le=k._result;le=le(),le.then(function(Ne){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ne)},function(Ne){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ne)}),k._status===-1&&(k._status=0,k._result=le)}if(k._status===1)return k._result.default;throw k._result}var q={current:null},X={transition:null},he={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:X,ReactCurrentOwner:L};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:re,forEach:function(k,le,Ne){re(k,function(){le.apply(this,arguments)},Ne)},count:function(k){var le=0;return re(k,function(){le++}),le},toArray:function(k){return re(k,function(le){return le})||[]},only:function(k){if(!R(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=C,Pt.StrictMode=r,Pt.Suspense=p,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Pt.act=ae,Pt.cloneElement=function(k,le,Ne){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Xe=T({},k.props),qe=k.key,te=k.ref,de=k._owner;if(le!=null){if(le.ref!==void 0&&(te=le.ref,de=L.current),le.key!==void 0&&(qe=""+le.key),k.type&&k.type.defaultProps)var Me=k.type.defaultProps;for(Fe in le)U.call(le,Fe)&&!F.hasOwnProperty(Fe)&&(Xe[Fe]=le[Fe]===void 0&&Me!==void 0?Me[Fe]:le[Fe])}var Fe=arguments.length-2;if(Fe===1)Xe.children=Ne;else if(1<Fe){Me=Array(Fe);for(var Pe=0;Pe<Fe;Pe++)Me[Pe]=arguments[Pe+2];Xe.children=Me}return{$$typeof:s,type:k.type,key:qe,ref:te,props:Xe,_owner:de}},Pt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Pt.createElement=j,Pt.createFactory=function(k){var le=j.bind(null,k);return le.type=k,le},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(k){return{$$typeof:f,render:k}},Pt.isValidElement=R,Pt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:ee}},Pt.memo=function(k,le){return{$$typeof:m,type:k,compare:le===void 0?null:le}},Pt.startTransition=function(k){var le=X.transition;X.transition={};try{k()}finally{X.transition=le}},Pt.unstable_act=ae,Pt.useCallback=function(k,le){return q.current.useCallback(k,le)},Pt.useContext=function(k){return q.current.useContext(k)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(k){return q.current.useDeferredValue(k)},Pt.useEffect=function(k,le){return q.current.useEffect(k,le)},Pt.useId=function(){return q.current.useId()},Pt.useImperativeHandle=function(k,le,Ne){return q.current.useImperativeHandle(k,le,Ne)},Pt.useInsertionEffect=function(k,le){return q.current.useInsertionEffect(k,le)},Pt.useLayoutEffect=function(k,le){return q.current.useLayoutEffect(k,le)},Pt.useMemo=function(k,le){return q.current.useMemo(k,le)},Pt.useReducer=function(k,le,Ne){return q.current.useReducer(k,le,Ne)},Pt.useRef=function(k){return q.current.useRef(k)},Pt.useState=function(k){return q.current.useState(k)},Pt.useSyncExternalStore=function(k,le,Ne){return q.current.useSyncExternalStore(k,le,Ne)},Pt.useTransition=function(){return q.current.useTransition()},Pt.version="18.3.1",Pt}var xm;function If(){return xm||(xm=1,Qu.exports=iv()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm;function rv(){if(vm)return yo;vm=1;var s=If(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var x,v={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:v,_owner:o.current}}return yo.Fragment=t,yo.jsx=d,yo.jsxs=d,yo}var _m;function sv(){return _m||(_m=1,Zu.exports=rv()),Zu.exports}var u=sv(),Ie=If();const av=U0(Ie);var Fl={},Ju={exports:{}},ai={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym;function ov(){return ym||(ym=1,(function(s){function e(X,he){var ae=X.length;X.push(he);e:for(;0<ae;){var k=ae-1>>>1,le=X[k];if(0<o(le,he))X[k]=he,X[ae]=le,ae=k;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var he=X[0],ae=X.pop();if(ae!==he){X[0]=ae;e:for(var k=0,le=X.length,Ne=le>>>1;k<Ne;){var Xe=2*(k+1)-1,qe=X[Xe],te=Xe+1,de=X[te];if(0>o(qe,ae))te<le&&0>o(de,qe)?(X[k]=de,X[te]=ae,k=te):(X[k]=qe,X[Xe]=ae,k=Xe);else if(te<le&&0>o(de,ae))X[k]=de,X[te]=ae,k=te;else break e}}return he}function o(X,he){var ae=X.sortIndex-he.sortIndex;return ae!==0?ae:X.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],x=1,v=null,S=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(X){for(var he=t(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=X)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(m)}}function D(X){if(A=!1,I(X),!T)if(t(p)!==null)T=!0,ee(U);else{var he=t(m);he!==null&&q(D,he.startTime-X)}}function U(X,he){T=!1,A&&(A=!1,_(j),j=-1),M=!0;var ae=S;try{for(I(he),v=t(p);v!==null&&(!(v.expirationTime>he)||X&&!z());){var k=v.callback;if(typeof k=="function"){v.callback=null,S=v.priorityLevel;var le=k(v.expirationTime<=he);he=s.unstable_now(),typeof le=="function"?v.callback=le:v===t(p)&&r(p),I(he)}else r(p);v=t(p)}if(v!==null)var Ne=!0;else{var Xe=t(m);Xe!==null&&q(D,Xe.startTime-he),Ne=!1}return Ne}finally{v=null,S=ae,M=!1}}var L=!1,F=null,j=-1,E=5,R=-1;function z(){return!(s.unstable_now()-R<E)}function $(){if(F!==null){var X=s.unstable_now();R=X;var he=!0;try{he=F(!0,X)}finally{he?K():(L=!1,F=null)}}else L=!1}var K;if(typeof C=="function")K=function(){C($)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,re=ie.port2;ie.port1.onmessage=$,K=function(){re.postMessage(null)}}else K=function(){y($,0)};function ee(X){F=X,L||(L=!0,K())}function q(X,he){j=y(function(){X(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ee(U))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var he=3;break;default:he=S}var ae=S;S=he;try{return X()}finally{S=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,he){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=S;S=X;try{return he()}finally{S=ae}},s.unstable_scheduleCallback=function(X,he,ae){var k=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?k+ae:k):ae=k,X){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=ae+le,X={id:x++,callback:he,priorityLevel:X,startTime:ae,expirationTime:le,sortIndex:-1},ae>k?(X.sortIndex=ae,e(m,X),t(p)===null&&X===t(m)&&(A?(_(j),j=-1):A=!0,q(D,ae-k))):(X.sortIndex=le,e(p,X),T||M||(T=!0,ee(U))),X},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(X){var he=S;return function(){var ae=S;S=he;try{return X.apply(this,arguments)}finally{S=ae}}}})(td)),td}var Sm;function lv(){return Sm||(Sm=1,ed.exports=ov()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mm;function cv(){if(Mm)return ai;Mm=1;var s=If(),e=lv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function S(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var D=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),X=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,k;function le(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ne=!1;function Xe(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,B=g.length-1;1<=b&&0<=B&&h[b]!==g[B];)B--;for(;1<=b&&0<=B;b--,B--)if(h[b]!==g[B]){if(b!==1||B!==1)do if(b--,B--,0>B||h[b]!==g[B]){var V=`
`+h[b].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=b&&0<=B);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function qe(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case L:return"Portal";case E:return"Profiler";case j:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function yt(n){n._valueTracker||(n._valueTracker=Pe(n))}function Yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function _t(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ot(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function tt(n,i){lt(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?$e(n,i.type,a):i.hasOwnProperty("defaultValue")&&$e(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function P(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function $e(n,i,a){(i!=="number"||_t(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var mt=Array.isArray;function rt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Te(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function O(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(mt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function w(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function H(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function Ae(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ve=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function we(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Se=null,Le=null;function me(n){if(n=ro(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Qo(i),De(n.stateNode,n.type,i))}}function fe(n){Se?Le?Le.push(n):Le=[n]:Se=n}function xe(){if(Se){var n=Se,i=Le;if(Le=Se=null,me(n),i)for(n=0;n<i.length;n++)me(i[n])}}function Je(n,i){return n(i)}function Dt(){}var bt=!1;function mn(n,i,a){if(bt)return n(i,a);bt=!0;try{return Je(n,i,a)}finally{bt=!1,(Se!==null||Le!==null)&&(Dt(),xe())}}function bn(n,i){var a=n.stateNode;if(a===null)return null;var c=Qo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var cs=!1;if(f)try{var Ci={};Object.defineProperty(Ci,"passive",{get:function(){cs=!0}}),window.addEventListener("test",Ci,Ci),window.removeEventListener("test",Ci,Ci)}catch{cs=!1}function or(n,i,a,c,h,g,b,B,V){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(ye){this.onError(ye)}}var lr=!1,cr=null,Ai=!1,_i=null,tn={onError:function(n){lr=!0,cr=n}};function us(n,i,a,c,h,g,b,B,V){lr=!1,cr=null,or.apply(tn,arguments)}function ds(n,i,a,c,h,g,b,B,V){if(us.apply(this,arguments),lr){if(lr){var ce=cr;lr=!1,cr=null}else throw Error(t(198));Ai||(Ai=!0,_i=ce)}}function Jn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Hi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Wi(n){if(Jn(n)!==n)throw Error(t(188))}function Ri(n){var i=n.alternate;if(!i){if(i=Jn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Wi(h),n;if(g===c)return Wi(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,B=h.child;B;){if(B===a){b=!0,a=h,c=g;break}if(B===c){b=!0,c=h,a=g;break}B=B.sibling}if(!b){for(B=g.child;B;){if(B===a){b=!0,a=g,c=h;break}if(B===c){b=!0,c=g,a=h;break}B=B.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function fs(n){return n=Ri(n),n!==null?Hs(n):null}function Hs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hs(n);if(i!==null)return i;n=n.sibling}return null}var hs=e.unstable_scheduleCallback,ps=e.unstable_cancelCallback,Ws=e.unstable_shouldYield,ja=e.unstable_requestPaint,$t=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,oe=e.unstable_UserBlockingPriority,se=e.unstable_NormalPriority,Q=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,ke=null,Re=null;function Ye(n){if(Re&&typeof Re.onCommitFiberRoot=="function")try{Re.onCommitFiberRoot(ke,n,void 0,(n.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:St,ot=Math.log,Ze=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(ot(n)/Ze|0)|0}var It=64,Gt=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ut(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var B=b&~h;B!==0?c=Mt(B):(g&=b,g!==0&&(c=Mt(g)))}else b=a&~h,b!==0?c=Mt(b):g!==0&&(c=Mt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ge(i),h=1<<a,c|=n[a],i&=~h;return c}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-Ge(g),B=1<<b,V=h[b];V===-1?((B&a)===0||(B&c)!==0)&&(h[b]=st(B,i)):V<=i&&(n.expiredLanes|=B),g&=~B}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=It;return It<<=1,(It&4194240)===0&&(It=64),n}function ui(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function cn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ge(i),n[i]=a}function Ni(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ge(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function kt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ge(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var gt=0;function En(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Wt,un,ur,di,Va,Xs=!1,Ur=[],ei=null,kn=null,Xi=null,ms=new Map,dr=new Map,Yn=[],Ec="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jo(n,i){switch(n){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":kn=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":ms.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":dr.delete(i.pointerId)}}function Or(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ro(i),i!==null&&un(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ga(n,i,a,c,h){switch(i){case"focusin":return ei=Or(ei,n,i,a,c,h),!0;case"dragenter":return kn=Or(kn,n,i,a,c,h),!0;case"mouseover":return Xi=Or(Xi,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return ms.set(g,Or(ms.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,dr.set(g,Or(dr.get(g)||null,n,i,a,c,h)),!0}return!1}function Vo(n){var i=_s(n.target);if(i!==null){var a=Jn(i);if(a!==null){if(i=a.tag,i===13){if(i=Hi(a),i!==null){n.blockedOn=i,Va(n.priority,function(){ur(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function qs(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$s(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ht=c,a.target.dispatchEvent(c),ht=null}else return i=ro(a),i!==null&&un(i),n.blockedOn=a,!1;i.shift()}return!0}function Ha(n,i,a){qs(n)&&a.delete(i)}function Wa(){Xs=!1,ei!==null&&qs(ei)&&(ei=null),kn!==null&&qs(kn)&&(kn=null),Xi!==null&&qs(Xi)&&(Xi=null),ms.forEach(Ha),dr.forEach(Ha)}function gs(n,i){n.blockedOn===i&&(n.blockedOn=null,Xs||(Xs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wa)))}function xs(n){function i(h){return gs(h,n)}if(0<Ur.length){gs(Ur[0],n);for(var a=1;a<Ur.length;a++){var c=Ur[a];c.blockedOn===n&&(c.blockedOn=null)}}for(ei!==null&&gs(ei,n),kn!==null&&gs(kn,n),Xi!==null&&gs(Xi,n),ms.forEach(i),dr.forEach(i),a=0;a<Yn.length;a++)c=Yn[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Yn.length&&(a=Yn[0],a.blockedOn===null);)Vo(a),a.blockedOn===null&&Yn.shift()}var fr=D.ReactCurrentBatchConfig,hr=!0;function Fr(n,i,a,c){var h=gt,g=fr.transition;fr.transition=null;try{gt=1,Ys(n,i,a,c)}finally{gt=h,fr.transition=g}}function Go(n,i,a,c){var h=gt,g=fr.transition;fr.transition=null;try{gt=4,Ys(n,i,a,c)}finally{gt=h,fr.transition=g}}function Ys(n,i,a,c){if(hr){var h=$s(n,i,a,c);if(h===null)jc(n,i,c,vs,a),jo(n,c);else if(Ga(h,n,i,a,c))c.stopPropagation();else if(jo(n,c),i&4&&-1<Ec.indexOf(n)){for(;h!==null;){var g=ro(h);if(g!==null&&Wt(g),g=$s(n,i,a,c),g===null&&jc(n,i,c,vs,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else jc(n,i,c,null,a)}}var vs=null;function $s(n,i,a,c){if(vs=null,n=G(c),n=_s(n),n!==null)if(i=Jn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Hi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vs=n,null}function Xa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case oe:return 4;case se:case Q:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var Pi=null,Nt=null,ct=null;function Zt(){if(ct)return ct;var n,i=Nt,a=i.length,c,h="value"in Pi?Pi.value:Pi.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[g-c];c++);return ct=h.slice(n,1<c?1-c:void 0)}function Bn(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Dn(){return!0}function nt(){return!1}function sn(n){function i(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(a=n[B],this[B]=a?a(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Dn:nt,this.isPropagationStopped=nt,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dn)},persist:function(){},isPersistent:Dn}),i}var nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tc=sn(nn),qa=ae({},nn,{view:0,detail:0}),Ng=sn(qa),Cc,Ac,Ya,Ho=ae({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ya&&(Ya&&n.type==="mousemove"?(Cc=n.screenX-Ya.screenX,Ac=n.screenY-Ya.screenY):Ac=Cc=0,Ya=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),sh=sn(Ho),Pg=ae({},Ho,{dataTransfer:0}),Dg=sn(Pg),Lg=ae({},qa,{relatedTarget:0}),Rc=sn(Lg),Ig=ae({},nn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ug=sn(Ig),Og=ae({},nn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Fg=sn(Og),kg=ae({},nn,{data:0}),ah=sn(kg),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=jg[n])?!!i[n]:!1}function Nc(){return Vg}var Gg=ae({},qa,{key:function(n){if(n.key){var i=Bg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Bn(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?zg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(n){return n.type==="keypress"?Bn(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Bn(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Hg=sn(Gg),Wg=ae({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oh=sn(Wg),Xg=ae({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),qg=sn(Xg),Yg=ae({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0}),$g=sn(Yg),Kg=ae({},Ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Zg=sn(Kg),Qg=[9,13,27,32],Pc=f&&"CompositionEvent"in window,$a=null;f&&"documentMode"in document&&($a=document.documentMode);var Jg=f&&"TextEvent"in window&&!$a,lh=f&&(!Pc||$a&&8<$a&&11>=$a),ch=" ",uh=!1;function dh(n,i){switch(n){case"keyup":return Qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function ex(n,i){switch(n){case"compositionend":return fh(i);case"keypress":return i.which!==32?null:(uh=!0,ch);case"textInput":return n=i.data,n===ch&&uh?null:n;default:return null}}function tx(n,i){if(Ks)return n==="compositionend"||!Pc&&dh(n,i)?(n=Zt(),ct=Nt=Pi=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return lh&&i.locale!=="ko"?null:i.data;default:return null}}var nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!nx[n.type]:i==="textarea"}function ph(n,i,a,c){fe(c),i=$o(i,"onChange"),0<i.length&&(a=new Tc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ka=null,Za=null;function ix(n){Dh(n,0)}function Wo(n){var i=ta(n);if(Yt(i))return n}function rx(n,i){if(n==="change")return i}var mh=!1;if(f){var Dc;if(f){var Lc="oninput"in document;if(!Lc){var gh=document.createElement("div");gh.setAttribute("oninput","return;"),Lc=typeof gh.oninput=="function"}Dc=Lc}else Dc=!1;mh=Dc&&(!document.documentMode||9<document.documentMode)}function xh(){Ka&&(Ka.detachEvent("onpropertychange",vh),Za=Ka=null)}function vh(n){if(n.propertyName==="value"&&Wo(Za)){var i=[];ph(i,Za,n,G(n)),mn(ix,i)}}function sx(n,i,a){n==="focusin"?(xh(),Ka=i,Za=a,Ka.attachEvent("onpropertychange",vh)):n==="focusout"&&xh()}function ax(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Wo(Za)}function ox(n,i){if(n==="click")return Wo(i)}function lx(n,i){if(n==="input"||n==="change")return Wo(i)}function cx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Di=typeof Object.is=="function"?Object.is:cx;function Qa(n,i){if(Di(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Di(n[h],i[h]))return!1}return!0}function _h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yh(n,i){var a=_h(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_h(a)}}function Sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Mh(){for(var n=window,i=_t();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=_t(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ux(n){var i=Mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Sh(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=yh(a,g);var b=yh(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var dx=f&&"documentMode"in document&&11>=document.documentMode,Zs=null,Uc=null,Ja=null,Oc=!1;function wh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||Zs==null||Zs!==_t(c)||(c=Zs,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ja&&Qa(Ja,c)||(Ja=c,c=$o(Uc,"onSelect"),0<c.length&&(i=new Tc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Zs)))}function Xo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Qs={animationend:Xo("Animation","AnimationEnd"),animationiteration:Xo("Animation","AnimationIteration"),animationstart:Xo("Animation","AnimationStart"),transitionend:Xo("Transition","TransitionEnd")},Fc={},bh={};f&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function qo(n){if(Fc[n])return Fc[n];if(!Qs[n])return n;var i=Qs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in bh)return Fc[n]=i[a];return n}var Eh=qo("animationend"),Th=qo("animationiteration"),Ch=qo("animationstart"),Ah=qo("transitionend"),Rh=new Map,Nh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,i){Rh.set(n,i),l(i,[n])}for(var kc=0;kc<Nh.length;kc++){var Bc=Nh[kc],fx=Bc.toLowerCase(),hx=Bc[0].toUpperCase()+Bc.slice(1);kr(fx,"on"+hx)}kr(Eh,"onAnimationEnd"),kr(Th,"onAnimationIteration"),kr(Ch,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(Ah,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),px=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Ph(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,ds(c,i,void 0,n),n.currentTarget=null}function Dh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var B=c[b],V=B.instance,ce=B.currentTarget;if(B=B.listener,V!==g&&h.isPropagationStopped())break e;Ph(h,B,ce),g=V}else for(b=0;b<c.length;b++){if(B=c[b],V=B.instance,ce=B.currentTarget,B=B.listener,V!==g&&h.isPropagationStopped())break e;Ph(h,B,ce),g=V}}}if(Ai)throw n=_i,Ai=!1,_i=null,n}function Qt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(Lh(i,n,2,!1),a.add(c))}function zc(n,i,a){var c=0;i&&(c|=4),Lh(a,n,c,i)}var Yo="_reactListening"+Math.random().toString(36).slice(2);function to(n){if(!n[Yo]){n[Yo]=!0,r.forEach(function(a){a!=="selectionchange"&&(px.has(a)||zc(a,!1,n),zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Yo]||(i[Yo]=!0,zc("selectionchange",!1,i))}}function Lh(n,i,a,c){switch(Xa(i)){case 1:var h=Fr;break;case 4:h=Go;break;default:h=Ys}a=h.bind(null,i,a,n),h=void 0,!cs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function jc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var B=c.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var V=b.tag;if((V===3||V===4)&&(V=b.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;b=b.return}for(;B!==null;){if(b=_s(B),b===null)return;if(V=b.tag,V===5||V===6){c=g=b;continue e}B=B.parentNode}}c=c.return}mn(function(){var ce=g,ye=G(a),be=[];e:{var ve=Rh.get(n);if(ve!==void 0){var We=Tc,Qe=n;switch(n){case"keypress":if(Bn(a)===0)break e;case"keydown":case"keyup":We=Hg;break;case"focusin":Qe="focus",We=Rc;break;case"focusout":Qe="blur",We=Rc;break;case"beforeblur":case"afterblur":We=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Dg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=qg;break;case Eh:case Th:case Ch:We=Ug;break;case Ah:We=$g;break;case"scroll":We=Ng;break;case"wheel":We=Zg;break;case"copy":case"cut":case"paste":We=Fg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=oh}var et=(i&4)!==0,hn=!et&&n==="scroll",J=et?ve!==null?ve+"Capture":null:ve;et=[];for(var W=ce,ne;W!==null;){ne=W;var Ce=ne.stateNode;if(ne.tag===5&&Ce!==null&&(ne=Ce,J!==null&&(Ce=bn(W,J),Ce!=null&&et.push(no(W,Ce,ne)))),hn)break;W=W.return}0<et.length&&(ve=new We(ve,Qe,null,a,ye),be.push({event:ve,listeners:et}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",ve&&a!==ht&&(Qe=a.relatedTarget||a.fromElement)&&(_s(Qe)||Qe[pr]))break e;if((We||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,We?(Qe=a.relatedTarget||a.toElement,We=ce,Qe=Qe?_s(Qe):null,Qe!==null&&(hn=Jn(Qe),Qe!==hn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(We=null,Qe=ce),We!==Qe)){if(et=sh,Ce="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(et=oh,Ce="onPointerLeave",J="onPointerEnter",W="pointer"),hn=We==null?ve:ta(We),ne=Qe==null?ve:ta(Qe),ve=new et(Ce,W+"leave",We,a,ye),ve.target=hn,ve.relatedTarget=ne,Ce=null,_s(ye)===ce&&(et=new et(J,W+"enter",Qe,a,ye),et.target=ne,et.relatedTarget=hn,Ce=et),hn=Ce,We&&Qe)t:{for(et=We,J=Qe,W=0,ne=et;ne;ne=Js(ne))W++;for(ne=0,Ce=J;Ce;Ce=Js(Ce))ne++;for(;0<W-ne;)et=Js(et),W--;for(;0<ne-W;)J=Js(J),ne--;for(;W--;){if(et===J||J!==null&&et===J.alternate)break t;et=Js(et),J=Js(J)}et=null}else et=null;We!==null&&Ih(be,ve,We,et,!1),Qe!==null&&hn!==null&&Ih(be,hn,Qe,et,!0)}}e:{if(ve=ce?ta(ce):window,We=ve.nodeName&&ve.nodeName.toLowerCase(),We==="select"||We==="input"&&ve.type==="file")var it=rx;else if(hh(ve))if(mh)it=lx;else{it=ax;var ut=sx}else(We=ve.nodeName)&&We.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(it=ox);if(it&&(it=it(n,ce))){ph(be,it,a,ye);break e}ut&&ut(n,ve,ce),n==="focusout"&&(ut=ve._wrapperState)&&ut.controlled&&ve.type==="number"&&$e(ve,"number",ve.value)}switch(ut=ce?ta(ce):window,n){case"focusin":(hh(ut)||ut.contentEditable==="true")&&(Zs=ut,Uc=ce,Ja=null);break;case"focusout":Ja=Uc=Zs=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,wh(be,a,ye);break;case"selectionchange":if(dx)break;case"keydown":case"keyup":wh(be,a,ye)}var dt;if(Pc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ks?dh(n,a)&&(xt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(xt="onCompositionStart");xt&&(lh&&a.locale!=="ko"&&(Ks||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ks&&(dt=Zt()):(Pi=ye,Nt="value"in Pi?Pi.value:Pi.textContent,Ks=!0)),ut=$o(ce,xt),0<ut.length&&(xt=new ah(xt,n,null,a,ye),be.push({event:xt,listeners:ut}),dt?xt.data=dt:(dt=fh(a),dt!==null&&(xt.data=dt)))),(dt=Jg?ex(n,a):tx(n,a))&&(ce=$o(ce,"onBeforeInput"),0<ce.length&&(ye=new ah("onBeforeInput","beforeinput",null,a,ye),be.push({event:ye,listeners:ce}),ye.data=dt))}Dh(be,i)})}function no(n,i,a){return{instance:n,listener:i,currentTarget:a}}function $o(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=bn(n,a),g!=null&&c.unshift(no(n,g,h)),g=bn(n,i),g!=null&&c.push(no(n,g,h))),n=n.return}return c}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ih(n,i,a,c,h){for(var g=i._reactName,b=[];a!==null&&a!==c;){var B=a,V=B.alternate,ce=B.stateNode;if(V!==null&&V===c)break;B.tag===5&&ce!==null&&(B=ce,h?(V=bn(a,g),V!=null&&b.unshift(no(a,V,B))):h||(V=bn(a,g),V!=null&&b.push(no(a,V,B)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var mx=/\r\n?/g,gx=/\u0000|\uFFFD/g;function Uh(n){return(typeof n=="string"?n:""+n).replace(mx,`
`).replace(gx,"")}function Ko(n,i,a){if(i=Uh(i),Uh(n)!==i&&a)throw Error(t(425))}function Zo(){}var Vc=null,Gc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,xx=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,vx=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(n){return Oh.resolve(null).then(n).catch(_x)}:Wc;function _x(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),xs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);xs(i)}function Br(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Fh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ea=Math.random().toString(36).slice(2),qi="__reactFiber$"+ea,io="__reactProps$"+ea,pr="__reactContainer$"+ea,qc="__reactEvents$"+ea,yx="__reactListeners$"+ea,Sx="__reactHandles$"+ea;function _s(n){var i=n[qi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[pr]||a[qi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Fh(n);n!==null;){if(a=n[qi])return a;n=Fh(n)}return i}n=a,a=n.parentNode}return null}function ro(n){return n=n[qi]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Qo(n){return n[io]||null}var Yc=[],na=-1;function zr(n){return{current:n}}function Jt(n){0>na||(n.current=Yc[na],Yc[na]=null,na--)}function Kt(n,i){na++,Yc[na]=n.current,n.current=i}var jr={},zn=zr(jr),ti=zr(!1),ys=jr;function ia(n,i){var a=n.type.contextTypes;if(!a)return jr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ni(n){return n=n.childContextTypes,n!=null}function Jo(){Jt(ti),Jt(zn)}function kh(n,i,a){if(zn.current!==jr)throw Error(t(168));Kt(zn,i),Kt(ti,a)}function Bh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,de(n)||"Unknown",h));return ae({},a,c)}function el(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||jr,ys=zn.current,Kt(zn,n),Kt(ti,ti.current),!0}function zh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Bh(n,i,ys),c.__reactInternalMemoizedMergedChildContext=n,Jt(ti),Jt(zn),Kt(zn,n)):Jt(ti),Kt(ti,a)}var mr=null,tl=!1,$c=!1;function jh(n){mr===null?mr=[n]:mr.push(n)}function Mx(n){tl=!0,jh(n)}function Vr(){if(!$c&&mr!==null){$c=!0;var n=0,i=gt;try{var a=mr;for(gt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}mr=null,tl=!1}catch(h){throw mr!==null&&(mr=mr.slice(n+1)),hs(Y,Vr),h}finally{gt=i,$c=!1}}return null}var ra=[],sa=0,nl=null,il=0,yi=[],Si=0,Ss=null,gr=1,xr="";function Ms(n,i){ra[sa++]=il,ra[sa++]=nl,nl=n,il=i}function Vh(n,i,a){yi[Si++]=gr,yi[Si++]=xr,yi[Si++]=Ss,Ss=n;var c=gr;n=xr;var h=32-Ge(c)-1;c&=~(1<<h),a+=1;var g=32-Ge(i)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,gr=1<<32-Ge(i)+h|a<<h|c,xr=g+n}else gr=1<<g|a<<h|c,xr=n}function Kc(n){n.return!==null&&(Ms(n,1),Vh(n,1,0))}function Zc(n){for(;n===nl;)nl=ra[--sa],ra[sa]=null,il=ra[--sa],ra[sa]=null;for(;n===Ss;)Ss=yi[--Si],yi[Si]=null,xr=yi[--Si],yi[Si]=null,gr=yi[--Si],yi[Si]=null}var fi=null,hi=null,rn=!1,Li=null;function Gh(n,i){var a=Ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Hh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=Br(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ss!==null?{id:gr,overflow:xr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(rn){var i=hi;if(i){var a=i;if(!Hh(n,i)){if(Qc(n))throw Error(t(418));i=Br(a.nextSibling);var c=fi;i&&Hh(n,i)?Gh(c,a):(n.flags=n.flags&-4097|2,rn=!1,fi=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,fi=n}}}function Wh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function rl(n){if(n!==fi)return!1;if(!rn)return Wh(n),rn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=hi)){if(Qc(n))throw Xh(),Error(t(418));for(;i;)Gh(n,i),i=Br(i.nextSibling)}if(Wh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=Br(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?Br(n.stateNode.nextSibling):null;return!0}function Xh(){for(var n=hi;n;)n=Br(n.nextSibling)}function aa(){hi=fi=null,rn=!1}function eu(n){Li===null?Li=[n]:Li.push(n)}var wx=D.ReactCurrentBatchConfig;function so(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var B=h.refs;b===null?delete B[g]:B[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function sl(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function qh(n){var i=n._init;return i(n._payload)}function Yh(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function h(J,W){return J=Kr(J,W),J.index=0,J.sibling=null,J}function g(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function b(J){return n&&J.alternate===null&&(J.flags|=2),J}function B(J,W,ne,Ce){return W===null||W.tag!==6?(W=Wu(ne,J.mode,Ce),W.return=J,W):(W=h(W,ne),W.return=J,W)}function V(J,W,ne,Ce){var it=ne.type;return it===F?ye(J,W,ne.props.children,Ce,ne.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&qh(it)===W.type)?(Ce=h(W,ne.props),Ce.ref=so(J,W,ne),Ce.return=J,Ce):(Ce=Rl(ne.type,ne.key,ne.props,null,J.mode,Ce),Ce.ref=so(J,W,ne),Ce.return=J,Ce)}function ce(J,W,ne,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Xu(ne,J.mode,Ce),W.return=J,W):(W=h(W,ne.children||[]),W.return=J,W)}function ye(J,W,ne,Ce,it){return W===null||W.tag!==7?(W=Ns(ne,J.mode,Ce,it),W.return=J,W):(W=h(W,ne),W.return=J,W)}function be(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Wu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return ne=Rl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=so(J,null,W),ne.return=J,ne;case L:return W=Xu(W,J.mode,ne),W.return=J,W;case ee:var Ce=W._init;return be(J,Ce(W._payload),ne)}if(mt(W)||he(W))return W=Ns(W,J.mode,ne,null),W.return=J,W;sl(J,W)}return null}function ve(J,W,ne,Ce){var it=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return it!==null?null:B(J,W,""+ne,Ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return ne.key===it?V(J,W,ne,Ce):null;case L:return ne.key===it?ce(J,W,ne,Ce):null;case ee:return it=ne._init,ve(J,W,it(ne._payload),Ce)}if(mt(ne)||he(ne))return it!==null?null:ye(J,W,ne,Ce,null);sl(J,ne)}return null}function We(J,W,ne,Ce,it){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return J=J.get(ne)||null,B(W,J,""+Ce,it);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case U:return J=J.get(Ce.key===null?ne:Ce.key)||null,V(W,J,Ce,it);case L:return J=J.get(Ce.key===null?ne:Ce.key)||null,ce(W,J,Ce,it);case ee:var ut=Ce._init;return We(J,W,ne,ut(Ce._payload),it)}if(mt(Ce)||he(Ce))return J=J.get(ne)||null,ye(W,J,Ce,it,null);sl(W,Ce)}return null}function Qe(J,W,ne,Ce){for(var it=null,ut=null,dt=W,xt=W=0,An=null;dt!==null&&xt<ne.length;xt++){dt.index>xt?(An=dt,dt=null):An=dt.sibling;var Vt=ve(J,dt,ne[xt],Ce);if(Vt===null){dt===null&&(dt=An);break}n&&dt&&Vt.alternate===null&&i(J,dt),W=g(Vt,W,xt),ut===null?it=Vt:ut.sibling=Vt,ut=Vt,dt=An}if(xt===ne.length)return a(J,dt),rn&&Ms(J,xt),it;if(dt===null){for(;xt<ne.length;xt++)dt=be(J,ne[xt],Ce),dt!==null&&(W=g(dt,W,xt),ut===null?it=dt:ut.sibling=dt,ut=dt);return rn&&Ms(J,xt),it}for(dt=c(J,dt);xt<ne.length;xt++)An=We(dt,J,xt,ne[xt],Ce),An!==null&&(n&&An.alternate!==null&&dt.delete(An.key===null?xt:An.key),W=g(An,W,xt),ut===null?it=An:ut.sibling=An,ut=An);return n&&dt.forEach(function(Zr){return i(J,Zr)}),rn&&Ms(J,xt),it}function et(J,W,ne,Ce){var it=he(ne);if(typeof it!="function")throw Error(t(150));if(ne=it.call(ne),ne==null)throw Error(t(151));for(var ut=it=null,dt=W,xt=W=0,An=null,Vt=ne.next();dt!==null&&!Vt.done;xt++,Vt=ne.next()){dt.index>xt?(An=dt,dt=null):An=dt.sibling;var Zr=ve(J,dt,Vt.value,Ce);if(Zr===null){dt===null&&(dt=An);break}n&&dt&&Zr.alternate===null&&i(J,dt),W=g(Zr,W,xt),ut===null?it=Zr:ut.sibling=Zr,ut=Zr,dt=An}if(Vt.done)return a(J,dt),rn&&Ms(J,xt),it;if(dt===null){for(;!Vt.done;xt++,Vt=ne.next())Vt=be(J,Vt.value,Ce),Vt!==null&&(W=g(Vt,W,xt),ut===null?it=Vt:ut.sibling=Vt,ut=Vt);return rn&&Ms(J,xt),it}for(dt=c(J,dt);!Vt.done;xt++,Vt=ne.next())Vt=We(dt,J,xt,Vt.value,Ce),Vt!==null&&(n&&Vt.alternate!==null&&dt.delete(Vt.key===null?xt:Vt.key),W=g(Vt,W,xt),ut===null?it=Vt:ut.sibling=Vt,ut=Vt);return n&&dt.forEach(function(nv){return i(J,nv)}),rn&&Ms(J,xt),it}function hn(J,W,ne,Ce){if(typeof ne=="object"&&ne!==null&&ne.type===F&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:e:{for(var it=ne.key,ut=W;ut!==null;){if(ut.key===it){if(it=ne.type,it===F){if(ut.tag===7){a(J,ut.sibling),W=h(ut,ne.props.children),W.return=J,J=W;break e}}else if(ut.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ee&&qh(it)===ut.type){a(J,ut.sibling),W=h(ut,ne.props),W.ref=so(J,ut,ne),W.return=J,J=W;break e}a(J,ut);break}else i(J,ut);ut=ut.sibling}ne.type===F?(W=Ns(ne.props.children,J.mode,Ce,ne.key),W.return=J,J=W):(Ce=Rl(ne.type,ne.key,ne.props,null,J.mode,Ce),Ce.ref=so(J,W,ne),Ce.return=J,J=Ce)}return b(J);case L:e:{for(ut=ne.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=h(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=Xu(ne,J.mode,Ce),W.return=J,J=W}return b(J);case ee:return ut=ne._init,hn(J,W,ut(ne._payload),Ce)}if(mt(ne))return Qe(J,W,ne,Ce);if(he(ne))return et(J,W,ne,Ce);sl(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=h(W,ne),W.return=J,J=W):(a(J,W),W=Wu(ne,J.mode,Ce),W.return=J,J=W),b(J)):a(J,W)}return hn}var oa=Yh(!0),$h=Yh(!1),al=zr(null),ol=null,la=null,tu=null;function nu(){tu=la=ol=null}function iu(n){var i=al.current;Jt(al),n._currentValue=i}function ru(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ca(n,i){ol=n,tu=la=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ii=!0),n.firstContext=null)}function Mi(n){var i=n._currentValue;if(tu!==n)if(n={context:n,memoizedValue:i,next:null},la===null){if(ol===null)throw Error(t(308));la=n,ol.dependencies={lanes:0,firstContext:n}}else la=la.next=n;return i}var ws=null;function su(n){ws===null?ws=[n]:ws.push(n)}function Kh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,su(i)):(a.next=h.next,h.next=a),i.interleaved=a,vr(n,c)}function vr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Gr=!1;function au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function _r(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Hr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Bt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,vr(n,a)}return h=c.interleaved,h===null?(i.next=i,su(c)):(i.next=h.next,h.next=i),c.interleaved=i,vr(n,a)}function ll(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}function Qh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function cl(n,i,a,c){var h=n.updateQueue;Gr=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var V=B,ce=V.next;V.next=null,b===null?g=ce:b.next=ce,b=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,B=ye.lastBaseUpdate,B!==b&&(B===null?ye.firstBaseUpdate=ce:B.next=ce,ye.lastBaseUpdate=V))}if(g!==null){var be=h.baseState;b=0,ye=ce=V=null,B=g;do{var ve=B.lane,We=B.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:We,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Qe=n,et=B;switch(ve=i,We=a,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){be=Qe.call(We,be,ve);break e}be=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,ve=typeof Qe=="function"?Qe.call(We,be,ve):Qe,ve==null)break e;be=ae({},be,ve);break e;case 2:Gr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[B]:ve.push(B))}else We={eventTime:We,lane:ve,tag:B.tag,payload:B.payload,callback:B.callback,next:null},ye===null?(ce=ye=We,V=be):ye=ye.next=We,b|=ve;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;ve=B,B=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(V=be),h.baseState=V,h.firstBaseUpdate=ce,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ts|=b,n.lanes=b,n.memoizedState=be}}function Jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ao={},Yi=zr(ao),oo=zr(ao),lo=zr(ao);function bs(n){if(n===ao)throw Error(t(174));return n}function ou(n,i){switch(Kt(lo,i),Kt(oo,n),Kt(Yi,ao),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}Jt(Yi),Kt(Yi,i)}function ua(){Jt(Yi),Jt(oo),Jt(lo)}function ep(n){bs(lo.current);var i=bs(Yi.current),a=ge(i,n.type);i!==a&&(Kt(oo,n),Kt(Yi,a))}function lu(n){oo.current===n&&(Jt(Yi),Jt(oo))}var an=zr(0);function ul(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function uu(){for(var n=0;n<cu.length;n++)cu[n]._workInProgressVersionPrimary=null;cu.length=0}var dl=D.ReactCurrentDispatcher,du=D.ReactCurrentBatchConfig,Es=0,on=null,_n=null,Tn=null,fl=!1,co=!1,uo=0,bx=0;function jn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Di(n[a],i[a]))return!1;return!0}function hu(n,i,a,c,h,g){if(Es=g,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,dl.current=n===null||n.memoizedState===null?Ax:Rx,n=a(c,h),co){g=0;do{if(co=!1,uo=0,25<=g)throw Error(t(301));g+=1,Tn=_n=null,i.updateQueue=null,dl.current=Nx,n=a(c,h)}while(co)}if(dl.current=ml,i=_n!==null&&_n.next!==null,Es=0,Tn=_n=on=null,fl=!1,i)throw Error(t(300));return n}function pu(){var n=uo!==0;return uo=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?on.memoizedState=Tn=n:Tn=Tn.next=n,Tn}function wi(){if(_n===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=_n.next;var i=Tn===null?on.memoizedState:Tn.next;if(i!==null)Tn=i,_n=n;else{if(n===null)throw Error(t(310));_n=n,n={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},Tn===null?on.memoizedState=Tn=n:Tn=Tn.next=n}return Tn}function fo(n,i){return typeof i=="function"?i(n):i}function mu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=_n,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var B=b=null,V=null,ce=g;do{var ye=ce.lane;if((Es&ye)===ye)V!==null&&(V=V.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var be={lane:ye,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};V===null?(B=V=be,b=c):V=V.next=be,on.lanes|=ye,Ts|=ye}ce=ce.next}while(ce!==null&&ce!==g);V===null?b=c:V.next=B,Di(c,i.memoizedState)||(ii=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,on.lanes|=g,Ts|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gu(n){var i=wi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);Di(g,i.memoizedState)||(ii=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function tp(){}function np(n,i){var a=on,c=wi(),h=i(),g=!Di(c.memoizedState,h);if(g&&(c.memoizedState=h,ii=!0),c=c.queue,xu(sp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Tn!==null&&Tn.memoizedState.tag&1){if(a.flags|=2048,ho(9,rp.bind(null,a,c,h,i),void 0,null),Cn===null)throw Error(t(349));(Es&30)!==0||ip(a,i,h)}return h}function ip(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function rp(n,i,a,c){i.value=a,i.getSnapshot=c,ap(i)&&op(n)}function sp(n,i,a){return a(function(){ap(i)&&op(n)})}function ap(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Di(n,a)}catch{return!0}}function op(n){var i=vr(n,1);i!==null&&Fi(i,n,1,-1)}function lp(n){var i=$i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:n},i.queue=n,n=n.dispatch=Cx.bind(null,on,n),[i.memoizedState,n]}function ho(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function cp(){return wi().memoizedState}function hl(n,i,a,c){var h=$i();on.flags|=n,h.memoizedState=ho(1|i,a,void 0,c===void 0?null:c)}function pl(n,i,a,c){var h=wi();c=c===void 0?null:c;var g=void 0;if(_n!==null){var b=_n.memoizedState;if(g=b.destroy,c!==null&&fu(c,b.deps)){h.memoizedState=ho(i,a,g,c);return}}on.flags|=n,h.memoizedState=ho(1|i,a,g,c)}function up(n,i){return hl(8390656,8,n,i)}function xu(n,i){return pl(2048,8,n,i)}function dp(n,i){return pl(4,2,n,i)}function fp(n,i){return pl(4,4,n,i)}function hp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function pp(n,i,a){return a=a!=null?a.concat([n]):null,pl(4,4,hp.bind(null,i,n),a)}function vu(){}function mp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function gp(n,i){var a=wi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function xp(n,i,a){return(Es&21)===0?(n.baseState&&(n.baseState=!1,ii=!0),n.memoizedState=a):(Di(a,i)||(a=vn(),on.lanes|=a,Ts|=a,n.baseState=!0),i)}function Ex(n,i){var a=gt;gt=a!==0&&4>a?a:4,n(!0);var c=du.transition;du.transition={};try{n(!1),i()}finally{gt=a,du.transition=c}}function vp(){return wi().memoizedState}function Tx(n,i,a){var c=Yr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},_p(n))yp(i,a);else if(a=Kh(n,i,a,c),a!==null){var h=Kn();Fi(a,n,c,h),Sp(a,i,c)}}function Cx(n,i,a){var c=Yr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(_p(n))yp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,B=g(b,a);if(h.hasEagerState=!0,h.eagerState=B,Di(B,b)){var V=i.interleaved;V===null?(h.next=h,su(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=Kh(n,i,h,c),a!==null&&(h=Kn(),Fi(a,n,c,h),Sp(a,i,c))}}function _p(n){var i=n.alternate;return n===on||i!==null&&i===on}function yp(n,i){co=fl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Sp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}var ml={readContext:Mi,useCallback:jn,useContext:jn,useEffect:jn,useImperativeHandle:jn,useInsertionEffect:jn,useLayoutEffect:jn,useMemo:jn,useReducer:jn,useRef:jn,useState:jn,useDebugValue:jn,useDeferredValue:jn,useTransition:jn,useMutableSource:jn,useSyncExternalStore:jn,useId:jn,unstable_isNewReconciler:!1},Ax={readContext:Mi,useCallback:function(n,i){return $i().memoizedState=[n,i===void 0?null:i],n},useContext:Mi,useEffect:up,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,hl(4194308,4,hp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return hl(4194308,4,n,i)},useInsertionEffect:function(n,i){return hl(4,2,n,i)},useMemo:function(n,i){var a=$i();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=$i();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Tx.bind(null,on,n),[c.memoizedState,n]},useRef:function(n){var i=$i();return n={current:n},i.memoizedState=n},useState:lp,useDebugValue:vu,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=lp(!1),i=n[0];return n=Ex.bind(null,n[1]),$i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=on,h=$i();if(rn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Cn===null)throw Error(t(349));(Es&30)!==0||ip(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,up(sp.bind(null,c,g,n),[n]),c.flags|=2048,ho(9,rp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=$i(),i=Cn.identifierPrefix;if(rn){var a=xr,c=gr;a=(c&~(1<<32-Ge(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=uo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=bx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Rx={readContext:Mi,useCallback:mp,useContext:Mi,useEffect:xu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:mu,useRef:cp,useState:function(){return mu(fo)},useDebugValue:vu,useDeferredValue:function(n){var i=wi();return xp(i,_n.memoizedState,n)},useTransition:function(){var n=mu(fo)[0],i=wi().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1},Nx={readContext:Mi,useCallback:mp,useContext:Mi,useEffect:xu,useImperativeHandle:pp,useInsertionEffect:dp,useLayoutEffect:fp,useMemo:gp,useReducer:gu,useRef:cp,useState:function(){return gu(fo)},useDebugValue:vu,useDeferredValue:function(n){var i=wi();return _n===null?i.memoizedState=n:xp(i,_n.memoizedState,n)},useTransition:function(){var n=gu(fo)[0],i=wi().memoizedState;return[n,i]},useMutableSource:tp,useSyncExternalStore:np,useId:vp,unstable_isNewReconciler:!1};function Ii(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _u(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var gl={isMounted:function(n){return(n=n._reactInternals)?Jn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kn(),h=Yr(n),g=_r(c,h);g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Fi(i,n,h,c),ll(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kn(),h=Yr(n),g=_r(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Hr(n,g,h),i!==null&&(Fi(i,n,h,c),ll(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kn(),c=Yr(n),h=_r(a,c);h.tag=2,i!=null&&(h.callback=i),i=Hr(n,h,c),i!==null&&(Fi(i,n,c,a),ll(i,n,c))}};function Mp(n,i,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!Qa(a,c)||!Qa(h,g):!0}function wp(n,i,a){var c=!1,h=jr,g=i.contextType;return typeof g=="object"&&g!==null?g=Mi(g):(h=ni(i)?ys:zn.current,c=i.contextTypes,g=(c=c!=null)?ia(n,h):jr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=gl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function bp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&gl.enqueueReplaceState(i,i.state,null)}function yu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},au(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Mi(g):(g=ni(i)?ys:zn.current,h.context=ia(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(_u(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&gl.enqueueReplaceState(h,h.state,null),cl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function da(n,i){try{var a="",c=i;do a+=qe(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Px=typeof WeakMap=="function"?WeakMap:Map;function Ep(n,i,a){a=_r(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){wl||(wl=!0,Fu=c),Mu(n,i)},a}function Tp(n,i,a){a=_r(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Mu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof c!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function Cp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Px;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Wx.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Rp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=_r(-1,1),i.tag=2,Hr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Dx=D.ReactCurrentOwner,ii=!1;function $n(n,i,a,c){i.child=n===null?$h(i,null,a,c):oa(i,n.child,a,c)}function Np(n,i,a,c,h){a=a.render;var g=i.ref;return ca(i,h),c=hu(n,i,a,c,g,h),a=pu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(rn&&a&&Kc(i),i.flags|=1,$n(n,i,c,h),i.child)}function Pp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Hu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Dp(n,i,g,c,h)):(n=Rl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:Qa,a(b,c)&&n.ref===i.ref)return yr(n,i,h)}return i.flags|=1,n=Kr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Dp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Qa(g,c)&&n.ref===i.ref)if(ii=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ii=!0);else return i.lanes=n.lanes,yr(n,i,h)}return wu(n,i,a,c,h)}function Lp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(ha,pi),pi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(ha,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Kt(ha,pi),pi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Kt(ha,pi),pi|=c;return $n(n,i,h,a),i.child}function Ip(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,h){var g=ni(a)?ys:zn.current;return g=ia(i,g),ca(i,h),a=hu(n,i,a,c,g,h),c=pu(),n!==null&&!ii?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,yr(n,i,h)):(rn&&c&&Kc(i),i.flags|=1,$n(n,i,a,h),i.child)}function Up(n,i,a,c,h){if(ni(a)){var g=!0;el(i)}else g=!1;if(ca(i,h),i.stateNode===null)vl(n,i),wp(i,a,c),yu(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,B=i.memoizedProps;b.props=B;var V=b.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=Mi(ce):(ce=ni(a)?ys:zn.current,ce=ia(i,ce));var ye=a.getDerivedStateFromProps,be=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";be||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==c||V!==ce)&&bp(i,b,c,ce),Gr=!1;var ve=i.memoizedState;b.state=ve,cl(i,c,b,h),V=i.memoizedState,B!==c||ve!==V||ti.current||Gr?(typeof ye=="function"&&(_u(i,a,ye,c),V=i.memoizedState),(B=Gr||Mp(i,a,B,c,ve,V,ce))?(be||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),b.props=c,b.state=V,b.context=ce,c=B):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Zh(n,i),B=i.memoizedProps,ce=i.type===i.elementType?B:Ii(i.type,B),b.props=ce,be=i.pendingProps,ve=b.context,V=a.contextType,typeof V=="object"&&V!==null?V=Mi(V):(V=ni(a)?ys:zn.current,V=ia(i,V));var We=a.getDerivedStateFromProps;(ye=typeof We=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(B!==be||ve!==V)&&bp(i,b,c,V),Gr=!1,ve=i.memoizedState,b.state=ve,cl(i,c,b,h);var Qe=i.memoizedState;B!==be||ve!==Qe||ti.current||Gr?(typeof We=="function"&&(_u(i,a,We,c),Qe=i.memoizedState),(ce=Gr||Mp(i,a,ce,c,ve,Qe,V)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Qe,V),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Qe,V)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Qe),b.props=c,b.state=Qe,b.context=V,c=ce):(typeof b.componentDidUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,g,h)}function bu(n,i,a,c,h,g){Ip(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&zh(i,a,!1),yr(n,i,g);c=i.stateNode,Dx.current=i;var B=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=oa(i,n.child,null,g),i.child=oa(i,null,B,g)):$n(n,i,B,g),i.memoizedState=c.state,h&&zh(i,a,!0),i.child}function Op(n){var i=n.stateNode;i.pendingContext?kh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&kh(n,i.context,!1),ou(n,i.containerInfo)}function Fp(n,i,a,c,h){return aa(),eu(h),i.flags|=256,$n(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function kp(n,i,a){var c=i.pendingProps,h=an.current,g=!1,b=(i.flags&128)!==0,B;if((B=b)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Kt(an,h&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=Nl(b,c,0,null),n=Ns(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Tu(a),i.memoizedState=Eu,n):Cu(i,b));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return Lx(n,i,b,c,B,h,a);if(g){g=c.fallback,b=i.mode,h=n.child,B=h.sibling;var V={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=Kr(h,V),c.subtreeFlags=h.subtreeFlags&14680064),B!==null?g=Kr(B,g):(g=Ns(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=n.child.memoizedState,b=b===null?Tu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return g=n.child,n=g.sibling,c=Kr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Cu(n,i){return i=Nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function xl(n,i,a,c){return c!==null&&eu(c),oa(i,n.child,null,a),n=Cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Lx(n,i,a,c,h,g,b){if(a)return i.flags&256?(i.flags&=-257,c=Su(Error(t(422))),xl(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Nl({mode:"visible",children:c.children},h,0,null),g=Ns(g,h,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&oa(i,n.child,null,b),i.child.memoizedState=Tu(b),i.memoizedState=Eu,g);if((i.mode&1)===0)return xl(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var B=c.dgst;return c=B,g=Error(t(419)),c=Su(g,c,void 0),xl(n,i,b,c)}if(B=(b&n.childLanes)!==0,ii||B){if(c=Cn,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,vr(n,h),Fi(c,n,h,-1))}return Gu(),c=Su(Error(t(421))),xl(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Xx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,hi=Br(h.nextSibling),fi=i,rn=!0,Li=null,n!==null&&(yi[Si++]=gr,yi[Si++]=xr,yi[Si++]=Ss,gr=n.id,xr=n.overflow,Ss=i),i=Cu(i,c.children),i.flags|=4096,i)}function Bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ru(n.return,i,a)}function Au(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function zp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if($n(n,i,c.children,a),c=an.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bp(n,a,i);else if(n.tag===19)Bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(an,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&ul(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Au(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&ul(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Au(i,!0,a,null,g);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function vl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function yr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ix(n,i,a){switch(i.tag){case 3:Op(i),aa();break;case 5:ep(i);break;case 1:ni(i.type)&&el(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Kt(al,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(an,an.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?kp(n,i,a):(Kt(an,an.current&1),n=yr(n,i,a),n!==null?n.sibling:null);Kt(an,an.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return zp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(an,an.current),c)break;return null;case 22:case 23:return i.lanes=0,Lp(n,i,a)}return yr(n,i,a)}var jp,Ru,Vp,Gp;jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Vp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,bs(Yi.current);var g=null;switch(a){case"input":h=At(n,h),c=At(n,c),g=[];break;case"select":h=ae({},h,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":h=Te(n,h),c=Te(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Zo)}je(a,c);var b;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var B=h[ce];for(b in B)B.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var V=c[ce];if(B=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&V!==B&&(V!=null||B!=null))if(ce==="style")if(B){for(b in B)!B.hasOwnProperty(b)||V&&V.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in V)V.hasOwnProperty(b)&&B[b]!==V[b]&&(a||(a={}),a[b]=V[b])}else a||(g||(g=[]),g.push(ce,a)),a=V;else ce==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,B=B?B.__html:void 0,V!=null&&B!==V&&(g=g||[]).push(ce,V)):ce==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ce,""+V):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(V!=null&&ce==="onScroll"&&Qt("scroll",n),g||B===V||(g=[])):(g=g||[]).push(ce,V))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},Gp=function(n,i,a,c){a!==c&&(i.flags|=4)};function po(n,i){if(!rn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ux(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Vn(i),null;case 1:return ni(i.type)&&Jo(),Vn(i),null;case 3:return c=i.stateNode,ua(),Jt(ti),Jt(zn),uu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(rl(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Li!==null&&(zu(Li),Li=null))),Ru(n,i),Vn(i),null;case 5:lu(i);var h=bs(lo.current);if(a=i.type,n!==null&&i.stateNode!=null)Vp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Vn(i),null}if(n=bs(Yi.current),rl(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[qi]=i,c[io]=g,n=(i.mode&1)!==0,a){case"dialog":Qt("cancel",c),Qt("close",c);break;case"iframe":case"object":case"embed":Qt("load",c);break;case"video":case"audio":for(h=0;h<eo.length;h++)Qt(eo[h],c);break;case"source":Qt("error",c);break;case"img":case"image":case"link":Qt("error",c),Qt("load",c);break;case"details":Qt("toggle",c);break;case"input":Ot(c,g),Qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qt("invalid",c);break;case"textarea":O(c,g),Qt("invalid",c)}je(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var B=g[b];b==="children"?typeof B=="string"?c.textContent!==B&&(g.suppressHydrationWarning!==!0&&Ko(c.textContent,B,n),h=["children",B]):typeof B=="number"&&c.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Ko(c.textContent,B,n),h=["children",""+B]):o.hasOwnProperty(b)&&B!=null&&b==="onScroll"&&Qt("scroll",c)}switch(a){case"input":yt(c),P(c,g,!0);break;case"textarea":yt(c),H(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Zo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[qi]=i,n[io]=c,jp(n,i,!1,!1),i.stateNode=n;e:{switch(b=we(a,c),a){case"dialog":Qt("cancel",n),Qt("close",n),h=c;break;case"iframe":case"object":case"embed":Qt("load",n),h=c;break;case"video":case"audio":for(h=0;h<eo.length;h++)Qt(eo[h],n);h=c;break;case"source":Qt("error",n),h=c;break;case"img":case"image":case"link":Qt("error",n),Qt("load",n),h=c;break;case"details":Qt("toggle",n),h=c;break;case"input":Ot(n,c),h=At(n,c),Qt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ae({},c,{value:void 0}),Qt("invalid",n);break;case"textarea":O(n,c),h=Te(n,c),Qt("invalid",n);break;default:h=c}je(a,h),B=h;for(g in B)if(B.hasOwnProperty(g)){var V=B[g];g==="style"?Ae(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ze(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ee(n,V):typeof V=="number"&&Ee(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Qt("scroll",n):V!=null&&I(n,g,V,b))}switch(a){case"input":yt(n),P(n,c,!1);break;case"textarea":yt(n),H(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?rt(n,!!c.multiple,g,!1):c.defaultValue!=null&&rt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Zo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Vn(i),null;case 6:if(n&&i.stateNode!=null)Gp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=bs(lo.current),bs(Yi.current),rl(i)){if(c=i.stateNode,a=i.memoizedProps,c[qi]=i,(g=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Ko(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ko(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[qi]=i,i.stateNode=c}return Vn(i),null;case 13:if(Jt(an),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Xh(),aa(),i.flags|=98560,g=!1;else if(g=rl(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[qi]=i}else aa(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Vn(i),g=!1}else Li!==null&&(zu(Li),Li=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(an.current&1)!==0?yn===0&&(yn=3):Gu())),i.updateQueue!==null&&(i.flags|=4),Vn(i),null);case 4:return ua(),Ru(n,i),n===null&&to(i.stateNode.containerInfo),Vn(i),null;case 10:return iu(i.type._context),Vn(i),null;case 17:return ni(i.type)&&Jo(),Vn(i),null;case 19:if(Jt(an),g=i.memoizedState,g===null)return Vn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)po(g,!1);else{if(yn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=ul(n),b!==null){for(i.flags|=128,po(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(an,an.current&1|2),i.child}n=n.sibling}g.tail!==null&&$t()>pa&&(i.flags|=128,c=!0,po(g,!1),i.lanes=4194304)}else{if(!c)if(n=ul(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),po(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!rn)return Vn(i),null}else 2*$t()-g.renderingStartTime>pa&&a!==1073741824&&(i.flags|=128,c=!0,po(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=$t(),i.sibling=null,a=an.current,Kt(an,c?a&1|2:a&1),i):(Vn(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(Vn(i),i.subtreeFlags&6&&(i.flags|=8192)):Vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ox(n,i){switch(Zc(i),i.tag){case 1:return ni(i.type)&&Jo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ua(),Jt(ti),Jt(zn),uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return lu(i),null;case 13:if(Jt(an),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));aa()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(an),null;case 4:return ua(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var _l=!1,Gn=!1,Fx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function fa(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){dn(n,i,c)}else a.current=null}function Nu(n,i,a){try{a()}catch(c){dn(n,i,c)}}var Hp=!1;function kx(n,i){if(Vc=hr,n=Mh(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,B=-1,V=-1,ce=0,ye=0,be=n,ve=null;t:for(;;){for(var We;be!==a||h!==0&&be.nodeType!==3||(B=b+h),be!==g||c!==0&&be.nodeType!==3||(V=b+c),be.nodeType===3&&(b+=be.nodeValue.length),(We=be.firstChild)!==null;)ve=be,be=We;for(;;){if(be===n)break t;if(ve===a&&++ce===h&&(B=b),ve===g&&++ye===c&&(V=b),(We=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=We}a=B===-1||V===-1?null:{start:B,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},hr=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,hn=Qe.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?et:Ii(i.type,et),hn);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){dn(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Qe=Hp,Hp=!1,Qe}function mo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Nu(i,a,g)}h=h.next}while(h!==c)}}function yl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Wp(n){var i=n.alternate;i!==null&&(n.alternate=null,Wp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[qi],delete i[io],delete i[qc],delete i[yx],delete i[Sx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Xp(n){return n.tag===5||n.tag===3||n.tag===4}function qp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Zo));else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var Ln=null,Ui=!1;function Wr(n,i,a){for(a=a.child;a!==null;)Yp(n,i,a),a=a.sibling}function Yp(n,i,a){if(Re&&typeof Re.onCommitFiberUnmount=="function")try{Re.onCommitFiberUnmount(ke,a)}catch{}switch(a.tag){case 5:Gn||fa(a,i);case 6:var c=Ln,h=Ui;Ln=null,Wr(n,i,a),Ln=c,Ui=h,Ln!==null&&(Ui?(n=Ln,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Ln.removeChild(a.stateNode));break;case 18:Ln!==null&&(Ui?(n=Ln,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),xs(n)):Xc(Ln,a.stateNode));break;case 4:c=Ln,h=Ui,Ln=a.stateNode.containerInfo,Ui=!0,Wr(n,i,a),Ln=c,Ui=h;break;case 0:case 11:case 14:case 15:if(!Gn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&Nu(a,i,b),h=h.next}while(h!==c)}Wr(n,i,a);break;case 1:if(!Gn&&(fa(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(B){dn(a,i,B)}Wr(n,i,a);break;case 21:Wr(n,i,a);break;case 22:a.mode&1?(Gn=(c=Gn)||a.memoizedState!==null,Wr(n,i,a),Gn=c):Wr(n,i,a);break;default:Wr(n,i,a)}}function $p(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Fx),i.forEach(function(c){var h=qx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Oi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=i,B=b;e:for(;B!==null;){switch(B.tag){case 5:Ln=B.stateNode,Ui=!1;break e;case 3:Ln=B.stateNode.containerInfo,Ui=!0;break e;case 4:Ln=B.stateNode.containerInfo,Ui=!0;break e}B=B.return}if(Ln===null)throw Error(t(160));Yp(g,b,h),Ln=null,Ui=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ce){dn(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Kp(i,n),i=i.sibling}function Kp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Oi(i,n),Ki(n),c&4){try{mo(3,n,n.return),yl(3,n)}catch(et){dn(n,n.return,et)}try{mo(5,n,n.return)}catch(et){dn(n,n.return,et)}}break;case 1:Oi(i,n),Ki(n),c&512&&a!==null&&fa(a,a.return);break;case 5:if(Oi(i,n),Ki(n),c&512&&a!==null&&fa(a,a.return),n.flags&32){var h=n.stateNode;try{Ee(h,"")}catch(et){dn(n,n.return,et)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,B=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&lt(h,g),we(B,b);var ce=we(B,g);for(b=0;b<V.length;b+=2){var ye=V[b],be=V[b+1];ye==="style"?Ae(h,be):ye==="dangerouslySetInnerHTML"?ze(h,be):ye==="children"?Ee(h,be):I(h,ye,be,ce)}switch(B){case"input":tt(h,g);break;case"textarea":w(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?rt(h,!!g.multiple,We,!1):ve!==!!g.multiple&&(g.defaultValue!=null?rt(h,!!g.multiple,g.defaultValue,!0):rt(h,!!g.multiple,g.multiple?[]:"",!1))}h[io]=g}catch(et){dn(n,n.return,et)}}break;case 6:if(Oi(i,n),Ki(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(et){dn(n,n.return,et)}}break;case 3:if(Oi(i,n),Ki(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{xs(i.containerInfo)}catch(et){dn(n,n.return,et)}break;case 4:Oi(i,n),Ki(n);break;case 13:Oi(i,n),Ki(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Ou=$t())),c&4&&$p(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(Gn=(ce=Gn)||ye,Oi(i,n),Gn=ce):Oi(i,n),Ki(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!ye&&(n.mode&1)!==0)for(Ke=n,ye=n.child;ye!==null;){for(be=Ke=ye;Ke!==null;){switch(ve=Ke,We=ve.child,ve.tag){case 0:case 11:case 14:case 15:mo(4,ve,ve.return);break;case 1:fa(ve,ve.return);var Qe=ve.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(et){dn(c,a,et)}}break;case 5:fa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Jp(be);continue}}We!==null?(We.return=ve,Ke=We):Jp(be)}ye=ye.sibling}e:for(ye=null,be=n;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=be.stateNode,V=be.memoizedProps.style,b=V!=null&&V.hasOwnProperty("display")?V.display:null,B.style.display=_e("display",b))}catch(et){dn(n,n.return,et)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=ce?"":be.memoizedProps}catch(et){dn(n,n.return,et)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Oi(i,n),Ki(n),c&4&&$p(n);break;case 21:break;default:Oi(i,n),Ki(n)}}function Ki(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Xp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ee(h,""),c.flags&=-33);var g=qp(n);Lu(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,B=qp(n);Du(n,B,b);break;default:throw Error(t(161))}}catch(V){dn(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bx(n,i,a){Ke=n,Zp(n)}function Zp(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||_l;if(!b){var B=h.alternate,V=B!==null&&B.memoizedState!==null||Gn;B=_l;var ce=Gn;if(_l=b,(Gn=V)&&!ce)for(Ke=h;Ke!==null;)b=Ke,V=b.child,b.tag===22&&b.memoizedState!==null?em(h):V!==null?(V.return=b,Ke=V):em(h);for(;g!==null;)Ke=g,Zp(g),g=g.sibling;Ke=h,_l=B,Gn=ce}Qp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ke=g):Qp(n)}}function Qp(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Gn||yl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Gn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ii(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Jh(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Jh(i,b,a)}break;case 5:var B=i.stateNode;if(a===null&&i.flags&4){a=B;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var ye=ce.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&xs(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Gn||i.flags&512&&Pu(i)}catch(ve){dn(i,i.return,ve)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function Jp(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function em(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{yl(4,i)}catch(V){dn(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){dn(i,h,V)}}var g=i.return;try{Pu(i)}catch(V){dn(i,g,V)}break;case 5:var b=i.return;try{Pu(i)}catch(V){dn(i,b,V)}}}catch(V){dn(i,i.return,V)}if(i===n){Ke=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Ke=B;break}Ke=i.return}}var zx=Math.ceil,Sl=D.ReactCurrentDispatcher,Iu=D.ReactCurrentOwner,bi=D.ReactCurrentBatchConfig,Bt=0,Cn=null,gn=null,In=0,pi=0,ha=zr(0),yn=0,go=null,Ts=0,Ml=0,Uu=0,xo=null,ri=null,Ou=0,pa=1/0,Sr=null,wl=!1,Fu=null,Xr=null,bl=!1,qr=null,El=0,vo=0,ku=null,Tl=-1,Cl=0;function Kn(){return(Bt&6)!==0?$t():Tl!==-1?Tl:Tl=$t()}function Yr(n){return(n.mode&1)===0?1:(Bt&2)!==0&&In!==0?In&-In:wx.transition!==null?(Cl===0&&(Cl=vn()),Cl):(n=gt,n!==0||(n=window.event,n=n===void 0?16:Xa(n.type)),n)}function Fi(n,i,a,c){if(50<vo)throw vo=0,ku=null,Error(t(185));cn(n,a,c),((Bt&2)===0||n!==Cn)&&(n===Cn&&((Bt&2)===0&&(Ml|=a),yn===4&&$r(n,In)),si(n,c),a===1&&Bt===0&&(i.mode&1)===0&&(pa=$t()+500,tl&&Vr()))}function si(n,i){var a=n.callbackNode;Ft(n,i);var c=Ut(n,n===Cn?In:0);if(c===0)a!==null&&ps(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ps(a),i===1)n.tag===0?Mx(nm.bind(null,n)):jh(nm.bind(null,n)),vx(function(){(Bt&6)===0&&Vr()}),a=null;else{switch(En(c)){case 1:a=Y;break;case 4:a=oe;break;case 16:a=se;break;case 536870912:a=Ue;break;default:a=se}a=um(a,tm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function tm(n,i){if(Tl=-1,Cl=0,(Bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ma()&&n.callbackNode!==a)return null;var c=Ut(n,n===Cn?In:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Al(n,c);else{i=c;var h=Bt;Bt|=2;var g=rm();(Cn!==n||In!==i)&&(Sr=null,pa=$t()+500,As(n,i));do try{Gx();break}catch(B){im(n,B)}while(!0);nu(),Sl.current=g,Bt=h,gn!==null?i=0:(Cn=null,In=0,i=yn)}if(i!==0){if(i===2&&(h=Rt(n),h!==0&&(c=h,i=Bu(n,h))),i===1)throw a=go,As(n,0),$r(n,c),si(n,$t()),a;if(i===6)$r(n,c);else{if(h=n.current.alternate,(c&30)===0&&!jx(h)&&(i=Al(n,c),i===2&&(g=Rt(n),g!==0&&(c=g,i=Bu(n,g))),i===1))throw a=go,As(n,0),$r(n,c),si(n,$t()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Rs(n,ri,Sr);break;case 3:if($r(n,c),(c&130023424)===c&&(i=Ou+500-$t(),10<i)){if(Ut(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Wc(Rs.bind(null,n,ri,Sr),i);break}Rs(n,ri,Sr);break;case 4:if($r(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-Ge(c);g=1<<b,b=i[b],b>h&&(h=b),c&=~g}if(c=h,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*zx(c/1960))-c,10<c){n.timeoutHandle=Wc(Rs.bind(null,n,ri,Sr),c);break}Rs(n,ri,Sr);break;case 5:Rs(n,ri,Sr);break;default:throw Error(t(329))}}}return si(n,$t()),n.callbackNode===a?tm.bind(null,n):null}function Bu(n,i){var a=xo;return n.current.memoizedState.isDehydrated&&(As(n,i).flags|=256),n=Al(n,i),n!==2&&(i=ri,ri=a,i!==null&&zu(i)),n}function zu(n){ri===null?ri=n:ri.push.apply(ri,n)}function jx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Di(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function $r(n,i){for(i&=~Uu,i&=~Ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ge(i),c=1<<a;n[a]=-1,i&=~c}}function nm(n){if((Bt&6)!==0)throw Error(t(327));ma();var i=Ut(n,0);if((i&1)===0)return si(n,$t()),null;var a=Al(n,i);if(n.tag!==0&&a===2){var c=Rt(n);c!==0&&(i=c,a=Bu(n,c))}if(a===1)throw a=go,As(n,0),$r(n,i),si(n,$t()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Rs(n,ri,Sr),si(n,$t()),null}function ju(n,i){var a=Bt;Bt|=1;try{return n(i)}finally{Bt=a,Bt===0&&(pa=$t()+500,tl&&Vr())}}function Cs(n){qr!==null&&qr.tag===0&&(Bt&6)===0&&ma();var i=Bt;Bt|=1;var a=bi.transition,c=gt;try{if(bi.transition=null,gt=1,n)return n()}finally{gt=c,bi.transition=a,Bt=i,(Bt&6)===0&&Vr()}}function Vu(){pi=ha.current,Jt(ha)}function As(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,xx(a)),gn!==null)for(a=gn.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Jo();break;case 3:ua(),Jt(ti),Jt(zn),uu();break;case 5:lu(c);break;case 4:ua();break;case 13:Jt(an);break;case 19:Jt(an);break;case 10:iu(c.type._context);break;case 22:case 23:Vu()}a=a.return}if(Cn=n,gn=n=Kr(n.current,null),In=pi=i,yn=0,go=null,Uu=Ml=Ts=0,ri=xo=null,ws!==null){for(i=0;i<ws.length;i++)if(a=ws[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}ws=null}return n}function im(n,i){do{var a=gn;try{if(nu(),dl.current=ml,fl){for(var c=on.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}fl=!1}if(Es=0,Tn=_n=on=null,co=!1,uo=0,Iu.current=null,a===null||a.return===null){yn=1,go=i,gn=null;break}e:{var g=n,b=a.return,B=a,V=i;if(i=In,B.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ce=V,ye=B,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var We=Ap(b);if(We!==null){We.flags&=-257,Rp(We,b,B,g,i),We.mode&1&&Cp(g,ce,i),i=We,V=ce;var Qe=i.updateQueue;if(Qe===null){var et=new Set;et.add(V),i.updateQueue=et}else Qe.add(V);break e}else{if((i&1)===0){Cp(g,ce,i),Gu();break e}V=Error(t(426))}}else if(rn&&B.mode&1){var hn=Ap(b);if(hn!==null){(hn.flags&65536)===0&&(hn.flags|=256),Rp(hn,b,B,g,i),eu(da(V,B));break e}}g=V=da(V,B),yn!==4&&(yn=2),xo===null?xo=[g]:xo.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var J=Ep(g,V,i);Qh(g,J);break e;case 1:B=V;var W=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Xr===null||!Xr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Tp(g,B,i);Qh(g,Ce);break e}}g=g.return}while(g!==null)}am(a)}catch(it){i=it,gn===a&&a!==null&&(gn=a=a.return);continue}break}while(!0)}function rm(){var n=Sl.current;return Sl.current=ml,n===null?ml:n}function Gu(){(yn===0||yn===3||yn===2)&&(yn=4),Cn===null||(Ts&268435455)===0&&(Ml&268435455)===0||$r(Cn,In)}function Al(n,i){var a=Bt;Bt|=2;var c=rm();(Cn!==n||In!==i)&&(Sr=null,As(n,i));do try{Vx();break}catch(h){im(n,h)}while(!0);if(nu(),Bt=a,Sl.current=c,gn!==null)throw Error(t(261));return Cn=null,In=0,yn}function Vx(){for(;gn!==null;)sm(gn)}function Gx(){for(;gn!==null&&!Ws();)sm(gn)}function sm(n){var i=cm(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?am(n):gn=i,Iu.current=null}function am(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ux(a,i,pi),a!==null){gn=a;return}}else{if(a=Ox(a,i),a!==null){a.flags&=32767,gn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yn=6,gn=null;return}}if(i=i.sibling,i!==null){gn=i;return}gn=i=n}while(i!==null);yn===0&&(yn=5)}function Rs(n,i,a){var c=gt,h=bi.transition;try{bi.transition=null,gt=1,Hx(n,i,a,c)}finally{bi.transition=h,gt=c}return null}function Hx(n,i,a,c){do ma();while(qr!==null);if((Bt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ni(n,g),n===Cn&&(gn=Cn=null,In=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||bl||(bl=!0,um(se,function(){return ma(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=bi.transition,bi.transition=null;var b=gt;gt=1;var B=Bt;Bt|=4,Iu.current=null,kx(n,a),Kp(a,n),ux(Gc),hr=!!Vc,Gc=Vc=null,n.current=a,Bx(a),ja(),Bt=B,gt=b,bi.transition=g}else n.current=a;if(bl&&(bl=!1,qr=n,El=h),g=n.pendingLanes,g===0&&(Xr=null),Ye(a.stateNode),si(n,$t()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(wl)throw wl=!1,n=Fu,Fu=null,n;return(El&1)!==0&&n.tag!==0&&ma(),g=n.pendingLanes,(g&1)!==0?n===ku?vo++:(vo=0,ku=n):vo=0,Vr(),null}function ma(){if(qr!==null){var n=En(El),i=bi.transition,a=gt;try{if(bi.transition=null,gt=16>n?16:n,qr===null)var c=!1;else{if(n=qr,qr=null,El=0,(Bt&6)!==0)throw Error(t(331));var h=Bt;for(Bt|=4,Ke=n.current;Ke!==null;){var g=Ke,b=g.child;if((Ke.flags&16)!==0){var B=g.deletions;if(B!==null){for(var V=0;V<B.length;V++){var ce=B[V];for(Ke=ce;Ke!==null;){var ye=Ke;switch(ye.tag){case 0:case 11:case 15:mo(8,ye,g)}var be=ye.child;if(be!==null)be.return=ye,Ke=be;else for(;Ke!==null;){ye=Ke;var ve=ye.sibling,We=ye.return;if(Wp(ye),ye===ce){Ke=null;break}if(ve!==null){ve.return=We,Ke=ve;break}Ke=We}}}var Qe=g.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var hn=et.sibling;et.sibling=null,et=hn}while(et!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Ke=b;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:mo(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Ke=J;break e}Ke=g.return}}var W=n.current;for(Ke=W;Ke!==null;){b=Ke;var ne=b.child;if((b.subtreeFlags&2064)!==0&&ne!==null)ne.return=b,Ke=ne;else e:for(b=W;Ke!==null;){if(B=Ke,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:yl(9,B)}}catch(it){dn(B,B.return,it)}if(B===b){Ke=null;break e}var Ce=B.sibling;if(Ce!==null){Ce.return=B.return,Ke=Ce;break e}Ke=B.return}}if(Bt=h,Vr(),Re&&typeof Re.onPostCommitFiberRoot=="function")try{Re.onPostCommitFiberRoot(ke,n)}catch{}c=!0}return c}finally{gt=a,bi.transition=i}}return!1}function om(n,i,a){i=da(a,i),i=Ep(n,i,1),n=Hr(n,i,1),i=Kn(),n!==null&&(cn(n,1,i),si(n,i))}function dn(n,i,a){if(n.tag===3)om(n,n,a);else for(;i!==null;){if(i.tag===3){om(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Xr===null||!Xr.has(c))){n=da(a,n),n=Tp(i,n,1),i=Hr(i,n,1),n=Kn(),i!==null&&(cn(i,1,n),si(i,n));break}}i=i.return}}function Wx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kn(),n.pingedLanes|=n.suspendedLanes&a,Cn===n&&(In&a)===a&&(yn===4||yn===3&&(In&130023424)===In&&500>$t()-Ou?As(n,0):Uu|=a),si(n,i)}function lm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var a=Kn();n=vr(n,i),n!==null&&(cn(n,i,a),si(n,a))}function Xx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),lm(n,a)}function qx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),lm(n,a)}var cm;cm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ti.current)ii=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ii=!1,Ix(n,i,a);ii=(n.flags&131072)!==0}else ii=!1,rn&&(i.flags&1048576)!==0&&Vh(i,il,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;vl(n,i),n=i.pendingProps;var h=ia(i,zn.current);ca(i,a),h=hu(null,i,c,n,h,a);var g=pu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ni(c)?(g=!0,el(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,au(i),h.updater=gl,i.stateNode=h,h._reactInternals=i,yu(i,c,n,a),i=bu(null,i,c,!0,g,a)):(i.tag=0,rn&&g&&Kc(i),$n(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(vl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=$x(c),n=Ii(c,n),h){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Up(null,i,c,n,a);break e;case 11:i=Np(null,i,c,n,a);break e;case 14:i=Pp(null,i,c,Ii(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),wu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Up(n,i,c,h,a);case 3:e:{if(Op(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Zh(n,i),cl(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=da(Error(t(423)),i),i=Fp(n,i,c,a,h);break e}else if(c!==h){h=da(Error(t(424)),i),i=Fp(n,i,c,a,h);break e}else for(hi=Br(i.stateNode.containerInfo.firstChild),fi=i,rn=!0,Li=null,a=$h(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(aa(),c===h){i=yr(n,i,a);break e}$n(n,i,c,a)}i=i.child}return i;case 5:return ep(i),n===null&&Jc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Hc(c,h)?b=null:g!==null&&Hc(c,g)&&(i.flags|=32),Ip(n,i),$n(n,i,b,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return kp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=oa(i,null,c,a):$n(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),Np(n,i,c,h,a);case 7:return $n(n,i,i.pendingProps,a),i.child;case 8:return $n(n,i,i.pendingProps.children,a),i.child;case 12:return $n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,Kt(al,c._currentValue),c._currentValue=b,g!==null)if(Di(g.value,b)){if(g.children===h.children&&!ti.current){i=yr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){b=g.child;for(var V=B.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=_r(-1,a&-a),V.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var ye=ce.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),ce.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),ru(g.return,a,i),B.lanes|=a;break}V=V.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,B=b.alternate,B!==null&&(B.lanes|=a),ru(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}$n(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ca(i,a),h=Mi(h),c=c(h),i.flags|=1,$n(n,i,c,a),i.child;case 14:return c=i.type,h=Ii(c,i.pendingProps),h=Ii(c.type,h),Pp(n,i,c,h,a);case 15:return Dp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ii(c,h),vl(n,i),i.tag=1,ni(c)?(n=!0,el(i)):n=!1,ca(i,a),wp(i,c,h),yu(i,c,h,a),bu(null,i,c,!0,n,a);case 19:return zp(n,i,a);case 22:return Lp(n,i,a)}throw Error(t(156,i.tag))};function um(n,i){return hs(n,i)}function Yx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ei(n,i,a,c){return new Yx(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function $x(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===re)return 14}return 2}function Kr(n,i){var a=n.alternate;return a===null?(a=Ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Rl(n,i,a,c,h,g){var b=2;if(c=n,typeof n=="function")Hu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return Ns(a.children,h,g,i);case j:b=8,h|=8;break;case E:return n=Ei(12,a,i,h|2),n.elementType=E,n.lanes=g,n;case K:return n=Ei(13,a,i,h),n.elementType=K,n.lanes=g,n;case ie:return n=Ei(19,a,i,h),n.elementType=ie,n.lanes=g,n;case q:return Nl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case z:b=9;break e;case $:b=11;break e;case re:b=14;break e;case ee:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ei(b,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Ns(n,i,a,c){return n=Ei(7,n,c,i),n.lanes=a,n}function Nl(n,i,a,c){return n=Ei(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=Ei(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=Ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Kx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,c,h,g,b,B,V){return n=new Kx(n,i,a,B,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ei(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(g),n}function Zx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function dm(n){if(!n)return jr;n=n._reactInternals;e:{if(Jn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ni(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ni(a))return Bh(n,a,i)}return i}function fm(n,i,a,c,h,g,b,B,V){return n=qu(a,c,!0,n,h,g,b,B,V),n.context=dm(null),a=n.current,c=Kn(),h=Yr(a),g=_r(c,h),g.callback=i??null,Hr(a,g,h),n.current.lanes=h,cn(n,h,c),si(n,c),n}function Pl(n,i,a,c){var h=i.current,g=Kn(),b=Yr(h);return a=dm(a),i.context===null?i.context=a:i.pendingContext=a,i=_r(g,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Hr(h,i,b),n!==null&&(Fi(n,h,b,g),ll(n,h,b)),b}function Dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function hm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yu(n,i){hm(n,i),(n=n.alternate)&&hm(n,i)}function Qx(){return null}var pm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}Ll.prototype.render=$u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Pl(n,i,null,null)},Ll.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Cs(function(){Pl(null,n,null,null)}),i[pr]=null}};function Ll(n){this._internalRoot=n}Ll.prototype.unstable_scheduleHydration=function(n){if(n){var i=di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Yn.length&&i!==0&&i<Yn[a].priority;a++);Yn.splice(a,0,n),a===0&&Vo(n)}};function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function mm(){}function Jx(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=Dl(b);g.call(ce)}}var b=fm(i,c,n,0,null,!1,!1,"",mm);return n._reactRootContainer=b,n[pr]=b.current,to(n.nodeType===8?n.parentNode:n),Cs(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var B=c;c=function(){var ce=Dl(V);B.call(ce)}}var V=qu(n,0,!1,null,null,!1,!1,"",mm);return n._reactRootContainer=V,n[pr]=V.current,to(n.nodeType===8?n.parentNode:n),Cs(function(){Pl(i,V,a,c)}),V}function Ul(n,i,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var B=h;h=function(){var V=Dl(b);B.call(V)}}Pl(i,b,n,h)}else b=Jx(a,i,n,h,c);return Dl(b)}Wt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Mt(i.pendingLanes);a!==0&&(kt(i,a|1),si(i,$t()),(Bt&6)===0&&(pa=$t()+500,Vr()))}break;case 13:Cs(function(){var c=vr(n,1);if(c!==null){var h=Kn();Fi(c,n,1,h)}}),Yu(n,1)}},un=function(n){if(n.tag===13){var i=vr(n,134217728);if(i!==null){var a=Kn();Fi(i,n,134217728,a)}Yu(n,134217728)}},ur=function(n){if(n.tag===13){var i=Yr(n),a=vr(n,i);if(a!==null){var c=Kn();Fi(a,n,i,c)}Yu(n,i)}},di=function(){return gt},Va=function(n,i){var a=gt;try{return gt=n,i()}finally{gt=a}},De=function(n,i,a){switch(i){case"input":if(tt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Qo(c);if(!h)throw Error(t(90));Yt(c),tt(c,h)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&rt(n,!!a.multiple,i,!1)}},Je=ju,Dt=Cs;var ev={usingClientEntryPoint:!1,Events:[ro,ta,Qo,fe,xe,ju]},_o={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},tv={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fs(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{ke=Ol.inject(tv),Re=Ol}catch{}}return ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ev,ai.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(t(200));return Zx(n,i,null,a)},ai.createRoot=function(n,i){if(!Ku(n))throw Error(t(299));var a=!1,c="",h=pm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,c,h),n[pr]=i.current,to(n.nodeType===8?n.parentNode:n),new $u(i)},ai.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fs(i),n=n===null?null:n.stateNode,n},ai.flushSync=function(n){return Cs(n)},ai.hydrate=function(n,i,a){if(!Il(i))throw Error(t(200));return Ul(null,n,i,!0,a)},ai.hydrateRoot=function(n,i,a){if(!Ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=pm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=fm(i,null,n,1,a??null,h,!1,g,b),n[pr]=i.current,to(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ll(i)},ai.render=function(n,i,a){if(!Il(i))throw Error(t(200));return Ul(null,n,i,!1,a)},ai.unmountComponentAtNode=function(n){if(!Il(n))throw Error(t(40));return n._reactRootContainer?(Cs(function(){Ul(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},ai.unstable_batchedUpdates=ju,ai.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Il(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ul(n,i,a,!1,c)},ai.version="18.3.1-next-f1338f8080-20240426",ai}var wm;function uv(){if(wm)return Ju.exports;wm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=cv(),Ju.exports}var bm;function dv(){if(bm)return Fl;bm=1;var s=uv();return Fl.createRoot=s.createRoot,Fl.hydrateRoot=s.hydrateRoot,Fl}var fv=dv();const hv=U0(fv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var mv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Ie.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>Ie.createElement("svg",{ref:p,...mv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:O0("lucide",o),...f},[...d.map(([m,x])=>Ie.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(s,e)=>{const t=Ie.forwardRef(({className:r,...o},l)=>Ie.createElement(gv,{ref:l,iconNode:e,className:O0(`lucide-${pv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=ft("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ft("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=ft("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ft("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ft("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ft("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ft("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=ft("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ft("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ft("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ft("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ft("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ft("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=ft("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ft("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ft("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ft("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ft("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ft("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=ft("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ft("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ft("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ft("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ft("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ft("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ft("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=ft("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ft("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ft("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ft("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ft("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ft("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Ie.useState(!1),[o,l]=Ie.useState(!1);Ie.useEffect(()=>{const f=()=>{r(window.scrollY>window.innerHeight*.7)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:Po},{name:"Central VTS",href:"#central-vts",icon:Ov},{name:"Normas NBR",href:"#normas",icon:Ud},{name:"Calculadora & Diagrama",href:"#calculadora",icon:F0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:mc},{name:"Manuais",href:"#manuais",icon:Ud},{name:"Fotos Reais",href:"#galeria",icon:Fo},{name:"Contato",href:"#contato",icon:Nr}];return u.jsxs("div",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${t?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium shadow-md",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(Nr,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(mc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(Fd,{className:"w-6 h-6"}):u.jsx(Rv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(Nr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="182",Da={ROTATE:0,DOLLY:1,PAN:2},Pa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gv=0,Pm=1,Hv=2,ac=1,Of=2,Ro=3,ls=0,ci=1,Ar=2,Pr=0,La=1,Dm=2,Lm=3,Im=4,Wv=5,Fs=100,Xv=101,qv=102,Yv=103,$v=104,Kv=200,Zv=201,Qv=202,Jv=203,kd=204,Bd=205,e_=206,t_=207,n_=208,i_=209,r_=210,s_=211,a_=212,o_=213,l_=214,zd=0,jd=1,Vd=2,Ua=3,Gd=4,Hd=5,Wd=6,Xd=7,H0=0,c_=1,u_=2,tr=0,W0=1,X0=2,q0=3,yc=4,Y0=5,$0=6,K0=7,Z0=300,js=301,Oa=302,qd=303,Yd=304,Sc=306,$d=1e3,Rr=1001,Kd=1002,On=1003,d_=1004,kl=1005,qn=1006,nd=1007,Bs=1008,xi=1009,Q0=1010,J0=1011,Do=1012,Ff=1013,rr=1014,Ji=1015,Lr=1016,kf=1017,Bf=1018,Lo=1020,eg=35902,tg=35899,ng=1021,ig=1022,Gi=1023,Ir=1026,zs=1027,rg=1028,zf=1029,Fa=1030,jf=1031,Vf=1033,oc=33776,lc=33777,cc=33778,uc=33779,Zd=35840,Qd=35841,Jd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37488,af=37489,of=37490,lf=37491,cf=37808,uf=37809,df=37810,ff=37811,hf=37812,pf=37813,mf=37814,gf=37815,xf=37816,vf=37817,_f=37818,yf=37819,Sf=37820,Mf=37821,wf=36492,bf=36494,Ef=36495,Tf=36283,Cf=36284,Af=36285,Rf=36286,f_=3200,sg=0,h_=1,as="",Un="srgb",ka="srgb-linear",gc="linear",Xt="srgb",ga=7680,Um=519,p_=512,m_=513,g_=514,Gf=515,x_=516,v_=517,Hf=518,__=519,Om=35044,Fm="300 es",er=2e3,xc=2001;function ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function y_(){const s=Io("canvas");return s.style.display="block",s}const km={};function Bm(...s){const e="THREE."+s.shift();console.log(e,...s)}function vt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function zt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Uo(...s){const e=s.join(" ");e in km||(km[e]=!0,vt(...s))}function S_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dc=Math.PI/180,vc=180/Math.PI;function ko(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Hn[s&255]+Hn[s>>8&255]+Hn[s>>16&255]+Hn[s>>24&255]+"-"+Hn[e&255]+Hn[e>>8&255]+"-"+Hn[e>>16&15|64]+Hn[e>>24&255]+"-"+Hn[t&63|128]+Hn[t>>8&255]+"-"+Hn[t>>16&255]+Hn[t>>24&255]+Hn[r&255]+Hn[r>>8&255]+Hn[r>>16&255]+Hn[r>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function M_(s,e){return(s%e+e)%e}function id(s,e,t){return(1-t)*s+t*e}function So(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function oi(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const w_={DEG2RAD:dc};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],A=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(v!==A||p!==S||m!==M||x!==T){let y=p*S+m*M+x*T+v*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let _=1-f;if(y<.9995){const C=Math.acos(y),I=Math.sin(C);_=Math.sin(_*C)/I,f=Math.sin(f*C)/I,p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f}else{p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+x*v+p*M-m*S,e[t+1]=p*T+x*S+m*v-f*M,e[t+2]=m*T+x*M+f*S-p*v,e[t+3]=x*T-f*v-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),x=f(o/2),v=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"YXZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"ZXY":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"ZYX":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"YZX":this._x=S*x*v+m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v-S*M*T;break;case"XZY":this._x=S*x*v-m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v+S*M*T;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],x=t[6],v=t[10],S=r+f+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>v){const M=2*Math.sqrt(1+r-f-v);this._w=(x-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>v){const M=2*Math.sqrt(1+f-r-v);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+d*f+o*m-l*p,this._y=o*x+d*p+l*f-r*m,this._z=l*x+d*m+r*p-o*f,this._w=d*x-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),x=2*(f*t-l*o),v=2*(l*r-d*t);return this.x=t+p*m+d*v-f*x,this.y=r+p*x+f*m-l*v,this.z=o+p*v+l*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new Z,zm=new Vs;class Et{constructor(e,t,r,o,l,d,f,p,m){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],x=r[4],v=r[7],S=r[2],M=r[5],T=r[8],A=o[0],y=o[3],_=o[6],C=o[1],I=o[4],D=o[7],U=o[2],L=o[5],F=o[8];return l[0]=d*A+f*C+p*U,l[3]=d*y+f*I+p*L,l[6]=d*_+f*D+p*F,l[1]=m*A+x*C+v*U,l[4]=m*y+x*I+v*L,l[7]=m*_+x*D+v*F,l[2]=S*A+M*C+T*U,l[5]=S*y+M*I+T*L,l[8]=S*_+M*D+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return t*d*x-t*f*m-r*l*x+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=x*d-f*m,S=f*p-x*l,M=m*l-d*p,T=t*v+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=S*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new Et,jm=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vm=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b_(){const s={enabled:!0,workingColorSpace:ka,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Xt&&(o.r=Dr(o.r),o.g=Dr(o.g),o.b=Dr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(o.r=Ia(o.r),o.g=Ia(o.g),o.b=Ia(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===as?gc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[ka]:{primaries:e,whitePoint:r,transfer:gc,toXYZ:jm,fromXYZ:Vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:jm,fromXYZ:Vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),s}const jt=b_();function Dr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xa;class E_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xa===void 0&&(xa=Io("canvas")),xa.width=e.width,xa.height=e.height;const o=xa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=xa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Io("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Dr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Dr(t[r]/255)*255):t[r]=Dr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let T_=0;class Wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(ad(o[d].image)):l.push(ad(o[d]))}else l=ad(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ad(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?E_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let C_=0;const od=new Z;class Fn extends Gs{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=Rr,o=Rr,l=qn,d=Bs,f=Gi,p=xi,m=Fn.DEFAULT_ANISOTROPY,x=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=ko(),this.name="",this.source=new Wf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Rr:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Rr:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Z0;Fn.DEFAULT_ANISOTROPY=1;class fn{constructor(e=0,t=0,r=0,o=1){fn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],S=p[1],M=p[5],T=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(x-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(m+1)/2,D=(M+1)/2,U=(_+1)/2,L=(x+S)/4,F=(v+A)/4,j=(T+y)/4;return I>D&&I>U?I<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(I),o=L/r,l=F/r):D>U?D<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(D),r=L/o,l=j/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=F/l,o=j/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(S-x)*(S-x));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-A)/C,this.z=(S-x)/C,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A_ extends Gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new fn(0,0,e,t),this.scissorTest=!1,this.viewport=new fn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Fn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Wf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class nr extends A_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class og extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class R_ extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=On,this.minFilter=On,this.wrapR=Rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,ki):ki.fromBufferAttribute(l,d),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Bl.copy(r.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),zl.subVectors(this.max,Mo),va.subVectors(e.a,Mo),_a.subVectors(e.b,Mo),ya.subVectors(e.c,Mo),Qr.subVectors(_a,va),Jr.subVectors(ya,_a),Ps.subVectors(va,ya);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-Ps.z,Ps.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,Ps.z,0,-Ps.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-Ps.y,Ps.x,0];return!ld(t,va,_a,ya,zl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,va,_a,ya,zl))?!1:(jl.crossVectors(Qr,Jr),t=[jl.x,jl.y,jl.z],ld(t,va,_a,ya,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],ki=new Z,Bl=new Bo,va=new Z,_a=new Z,ya=new Z,Qr=new Z,Jr=new Z,Ps=new Z,Mo=new Z,zl=new Z,jl=new Z,Ds=new Z;function ld(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Ds.fromArray(s,l);const f=o.x*Math.abs(Ds.x)+o.y*Math.abs(Ds.y)+o.z*Math.abs(Ds.z),p=e.dot(Ds),m=t.dot(Ds),x=r.dot(Ds);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const N_=new Bo,wo=new Z,cd=new Z;class Xf{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):N_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const t=wo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(wo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(cd)),this.expandByPoint(wo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wr=new Z,ud=new Z,Vl=new Z,es=new Z,dd=new Z,Gl=new Z,fd=new Z;class qf{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ud.copy(e).add(t).multiplyScalar(.5),Vl.copy(t).sub(e).normalize(),es.copy(this.origin).sub(ud);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Vl),f=es.dot(this.direction),p=-es.dot(Vl),m=es.lengthSq(),x=Math.abs(1-d*d);let v,S,M,T;if(x>0)if(v=d*p-f,S=d*f-p,T=l*x,v>=0)if(S>=-T)if(S<=T){const A=1/x;v*=A,S*=A,M=v*(v+d*S+2*f)+S*(d*v+S+2*p)+m}else S=l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S=-l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S<=-T?(v=Math.max(0,-(-d*l+f)),S=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m):S<=T?(v=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(v=Math.max(0,-(d*l+f)),S=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m);else S=d>0?-l:l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ud).addScaledVector(Vl,S),M}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const r=wr.dot(this.direction),o=wr.dot(wr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(l=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(f=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,r,o,l){dd.subVectors(t,e),Gl.subVectors(r,e),fd.crossVectors(dd,Gl);let d=this.direction.dot(fd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;es.subVectors(this.origin,e);const p=f*this.direction.dot(Gl.crossVectors(es,Gl));if(p<0)return null;const m=f*this.direction.dot(dd.cross(es));if(m<0||p+m>d)return null;const x=-f*es.dot(fd);return x<0?null:this.at(x/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y)}set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=S,_[3]=M,_[7]=T,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Sa.setFromMatrixColumn(e,0).length(),l=1/Sa.setFromMatrixColumn(e,1).length(),d=1/Sa.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=M+T*m,t[5]=S-A*m,t[9]=-f*p,t[2]=A-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S+A*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*v,t[5]=d*x,t[9]=-f,t[2]=M*f-T,t[6]=A+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S-A*f,t[4]=-d*v,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*x,t[9]=A-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=T*m-M,t[8]=S*m+A,t[1]=p*v,t[5]=A*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=A-S*v,t[8]=T*v+M,t[1]=v,t[5]=d*x,t[9]=-f*x,t[2]=-m*x,t[6]=M*v+T,t[10]=S-A*v}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=S*v+A,t[5]=d*x,t[9]=M*v-T,t[2]=T*v-M,t[6]=f*x,t[10]=A*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(P_,e,D_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ts.crossVectors(r,mi),ts.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ts.crossVectors(r,mi)),ts.normalize(),Hl.crossVectors(mi,ts),o[0]=ts.x,o[4]=Hl.x,o[8]=mi.x,o[1]=ts.y,o[5]=Hl.y,o[9]=mi.y,o[2]=ts.z,o[6]=Hl.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],x=r[1],v=r[5],S=r[9],M=r[13],T=r[2],A=r[6],y=r[10],_=r[14],C=r[3],I=r[7],D=r[11],U=r[15],L=o[0],F=o[4],j=o[8],E=o[12],R=o[1],z=o[5],$=o[9],K=o[13],ie=o[2],re=o[6],ee=o[10],q=o[14],X=o[3],he=o[7],ae=o[11],k=o[15];return l[0]=d*L+f*R+p*ie+m*X,l[4]=d*F+f*z+p*re+m*he,l[8]=d*j+f*$+p*ee+m*ae,l[12]=d*E+f*K+p*q+m*k,l[1]=x*L+v*R+S*ie+M*X,l[5]=x*F+v*z+S*re+M*he,l[9]=x*j+v*$+S*ee+M*ae,l[13]=x*E+v*K+S*q+M*k,l[2]=T*L+A*R+y*ie+_*X,l[6]=T*F+A*z+y*re+_*he,l[10]=T*j+A*$+y*ee+_*ae,l[14]=T*E+A*K+y*q+_*k,l[3]=C*L+I*R+D*ie+U*X,l[7]=C*F+I*z+D*re+U*he,l[11]=C*j+I*$+D*ee+U*ae,l[15]=C*E+I*K+D*q+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],x=e[2],v=e[6],S=e[10],M=e[14],T=e[3],A=e[7],y=e[11],_=e[15],C=p*M-m*S,I=f*M-m*v,D=f*S-p*v,U=d*M-m*x,L=d*S-p*x,F=d*v-f*x;return t*(A*C-y*I+_*D)-r*(T*C-y*U+_*L)+o*(T*I-A*U+_*F)-l*(T*D-A*L+y*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=e[9],S=e[10],M=e[11],T=e[12],A=e[13],y=e[14],_=e[15],C=v*y*m-A*S*m+A*p*M-f*y*M-v*p*_+f*S*_,I=T*S*m-x*y*m-T*p*M+d*y*M+x*p*_-d*S*_,D=x*A*m-T*v*m+T*f*M-d*A*M-x*f*_+d*v*_,U=T*v*p-x*A*p-T*f*S+d*A*S+x*f*y-d*v*y,L=t*C+r*I+o*D+l*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/L;return e[0]=C*F,e[1]=(A*S*l-v*y*l-A*o*M+r*y*M+v*o*_-r*S*_)*F,e[2]=(f*y*l-A*p*l+A*o*m-r*y*m-f*o*_+r*p*_)*F,e[3]=(v*p*l-f*S*l-v*o*m+r*S*m+f*o*M-r*p*M)*F,e[4]=I*F,e[5]=(x*y*l-T*S*l+T*o*M-t*y*M-x*o*_+t*S*_)*F,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*_-t*p*_)*F,e[7]=(d*S*l-x*p*l+x*o*m-t*S*m-d*o*M+t*p*M)*F,e[8]=D*F,e[9]=(T*v*l-x*A*l-T*r*M+t*A*M+x*r*_-t*v*_)*F,e[10]=(d*A*l-T*f*l+T*r*m-t*A*m-d*r*_+t*f*_)*F,e[11]=(x*f*l-d*v*l-x*r*m+t*v*m+d*r*M-t*f*M)*F,e[12]=U*F,e[13]=(x*A*o-T*v*o+T*r*S-t*A*S-x*r*y+t*v*y)*F,e[14]=(T*f*o-d*A*o-T*r*p+t*A*p+d*r*y-t*f*y)*F,e[15]=(d*v*o-x*f*o+x*r*p-t*v*p-d*r*S+t*f*S)*F,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,x=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,x*f+r,x*p-o*d,0,m*p-o*f,x*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,x=d+d,v=f+f,S=l*m,M=l*x,T=l*v,A=d*x,y=d*v,_=f*v,C=p*m,I=p*x,D=p*v,U=r.x,L=r.y,F=r.z;return o[0]=(1-(A+_))*U,o[1]=(M+D)*U,o[2]=(T-I)*U,o[3]=0,o[4]=(M-D)*L,o[5]=(1-(S+_))*L,o[6]=(y+C)*L,o[7]=0,o[8]=(T+I)*F,o[9]=(y-C)*F,o[10]=(1-(S+A))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Sa.set(o[0],o[1],o[2]).length();const d=Sa.set(o[4],o[5],o[6]).length(),f=Sa.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Bi.copy(this);const m=1/l,x=1/d,v=1/f;return Bi.elements[0]*=m,Bi.elements[1]*=m,Bi.elements[2]*=m,Bi.elements[4]*=x,Bi.elements[5]*=x,Bi.elements[6]*=x,Bi.elements[8]*=v,Bi.elements[9]*=v,Bi.elements[10]*=v,t.setFromRotationMatrix(Bi),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=er,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(p)T=l/(d-l),A=d*l/(d-l);else if(f===er)T=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(f===xc)T=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=er,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(p)T=1/(d-l),A=d/(d-l);else if(f===er)T=-2/(d-l),A=-(d+l)/(d-l);else if(f===xc)T=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Sa=new Z,Bi=new ln,P_=new Z(0,0,0),D_=new Z(1,1,1),ts=new Z,Hl=new Z,mi=new Z,Gm=new ln,Hm=new Vs;class sr{constructor(e=0,t=0,r=0,o=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],x=o[9],v=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Gm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class Yf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let L_=0;const Wm=new Z,Ma=new Vs,br=new ln,Wl=new Z,bo=new Z,I_=new Z,U_=new Vs,Xm=new Z(1,0,0),qm=new Z(0,1,0),Ym=new Z(0,0,1),$m={type:"added"},O_={type:"removed"},wa={type:"childadded",child:null},hd={type:"childremoved",child:null};class Pn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new Z,t=new sr,r=new Vs,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new Et}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.multiply(Ma),this}rotateOnWorldAxis(e,t){return Ma.setFromAxisAngle(e,t),this.quaternion.premultiply(Ma),this}rotateX(e){return this.rotateOnAxis(Xm,e)}rotateY(e){return this.rotateOnAxis(qm,e)}rotateZ(e){return this.rotateOnAxis(Ym,e)}translateOnAxis(e,t){return Wm.copy(e).applyQuaternion(this.quaternion),this.position.add(Wm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xm,e)}translateY(e){return this.translateOnAxis(qm,e)}translateZ(e){return this.translateOnAxis(Ym,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(br.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Wl.copy(e):Wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?br.lookAt(bo,Wl,this.up):br.lookAt(Wl,bo,this.up),this.quaternion.setFromRotationMatrix(br),o&&(br.extractRotation(o.matrixWorld),Ma.setFromRotationMatrix(br),this.quaternion.premultiply(Ma.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($m),wa.child=e,this.dispatchEvent(wa),wa.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(O_),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),br.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),br.multiply(e.parent.matrixWorld)),e.applyMatrix4(br),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($m),wa.child=e,this.dispatchEvent(wa),wa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,I_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,U_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Pn.DEFAULT_UP=new Z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zi=new Z,Er=new Z,pd=new Z,Tr=new Z,ba=new Z,Ea=new Z,Km=new Z,md=new Z,gd=new Z,xd=new Z,vd=new fn,_d=new fn,yd=new fn;class ji{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),zi.subVectors(e,t),o.cross(zi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){zi.subVectors(o,t),Er.subVectors(r,t),pd.subVectors(e,t);const d=zi.dot(zi),f=zi.dot(Er),p=zi.dot(pd),m=Er.dot(Er),x=Er.dot(pd),v=d*m-f*f;if(v===0)return l.set(0,0,0),null;const S=1/v,M=(m*p-f*x)*S,T=(d*x-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,Tr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Tr.x),p.addScaledVector(d,Tr.y),p.addScaledVector(f,Tr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(vd,l.x),d.addScaledVector(_d,l.y),d.addScaledVector(yd,l.z),d}static isFrontFacing(e,t,r,o){return zi.subVectors(r,t),Er.subVectors(e,t),zi.cross(Er).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),zi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ji.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ji.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ji.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ji.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ji.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;ba.subVectors(o,r),Ea.subVectors(l,r),md.subVectors(e,r);const p=ba.dot(md),m=Ea.dot(md);if(p<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const x=ba.dot(gd),v=Ea.dot(gd);if(x>=0&&v<=x)return t.copy(o);const S=p*v-x*m;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),t.copy(r).addScaledVector(ba,d);xd.subVectors(e,l);const M=ba.dot(xd),T=Ea.dot(xd);if(T>=0&&M<=T)return t.copy(l);const A=M*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(Ea,f);const y=x*T-M*v;if(y<=0&&v-x>=0&&M-T>=0)return Km.subVectors(l,o),f=(v-x)/(v-x+(M-T)),t.copy(o).addScaledVector(Km,f);const _=1/(y+A+S);return d=A*_,f=S*_,t.copy(r).addScaledVector(ba,d).addScaledVector(Ea,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=jt.workingColorSpace){if(e=M_(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=Sd(d,l,e+1/3),this.g=Sd(d,l,e),this.b=Sd(d,l,e-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(e,t=Un){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return jt.workingToColorSpace(Wn.copy(this),e),Math.round(Lt(Wn.r*255,0,255))*65536+Math.round(Lt(Wn.g*255,0,255))*256+Math.round(Lt(Wn.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(Wn.copy(this),t);const r=Wn.r,o=Wn.g,l=Wn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const x=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=x<=.5?v/(d+f):v/(2-d-f),d){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=Un){jt.workingToColorSpace(Wn.copy(this),e);const t=Wn.r,r=Wn.g,o=Wn.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Xl);const r=id(ns.h,Xl.h,t),o=id(ns.s,Xl.s,t),l=id(ns.l,Xl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ct;Ct.NAMES=lg;let F_=0;class zo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=La,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Bd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ua,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(r.blending=this.blending),this.side!==ls&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ua&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ga&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ga&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ga&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vi extends zo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=H0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new Z,ql=new pt;let k_=0;class ir{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:k_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Om,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=So(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=oi(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=So(t,this.array)),t}setX(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=So(t,this.array)),t}setY(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=So(t,this.array)),t}setZ(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=So(t,this.array)),t}setW(e,t){return this.normalized&&(t=oi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=oi(t,this.array),r=oi(r,this.array),o=oi(o,this.array),l=oi(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Om&&(e.usage=this.usage),e}}class cg extends ir{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ug extends ir{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class pn extends ir{constructor(e,t,r){super(new Float32Array(e),t,r)}}let B_=0;const Ti=new ln,Md=new Pn,Ta=new Z,gi=new Bo,Eo=new Bo,Rn=new Z;class vi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?ug:cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Et().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,t,r){return Ti.makeTranslation(e,t,r),this.applyMatrix4(Ti),this}scale(e,t,r){return Ti.makeScale(e,t,r),this.applyMatrix4(Ti),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(Rn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Rn),Rn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Rn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];Eo.setFromBufferAttribute(f),this.morphTargetsRelative?(Rn.addVectors(gi.min,Eo.min),gi.expandByPoint(Rn),Rn.addVectors(gi.max,Eo.max),gi.expandByPoint(Rn)):(gi.expandByPoint(Eo.min),gi.expandByPoint(Eo.max))}gi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Rn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Rn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Rn.fromBufferAttribute(f,m),p&&(Ta.fromBufferAttribute(e,m),Rn.add(Ta)),o=Math.max(o,r.distanceToSquared(Rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ir(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let j=0;j<r.count;j++)f[j]=new Z,p[j]=new Z;const m=new Z,x=new Z,v=new Z,S=new pt,M=new pt,T=new pt,A=new Z,y=new Z;function _(j,E,R){m.fromBufferAttribute(r,j),x.fromBufferAttribute(r,E),v.fromBufferAttribute(r,R),S.fromBufferAttribute(l,j),M.fromBufferAttribute(l,E),T.fromBufferAttribute(l,R),x.sub(m),v.sub(m),M.sub(S),T.sub(S);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(z),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(z),f[j].add(A),f[E].add(A),f[R].add(A),p[j].add(y),p[E].add(y),p[R].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let j=0,E=C.length;j<E;++j){const R=C[j],z=R.start,$=R.count;for(let K=z,ie=z+$;K<ie;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const I=new Z,D=new Z,U=new Z,L=new Z;function F(j){U.fromBufferAttribute(o,j),L.copy(U);const E=f[j];I.copy(E),I.sub(U.multiplyScalar(U.dot(E))).normalize(),D.crossVectors(L,E);const z=D.dot(p[j])<0?-1:1;d.setXYZW(j,I.x,I.y,I.z,z)}for(let j=0,E=C.length;j<E;++j){const R=C[j],z=R.start,$=R.count;for(let K=z,ie=z+$;K<ie;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new ir(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new Z,l=new Z,d=new Z,f=new Z,p=new Z,m=new Z,x=new Z,v=new Z;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),f.add(x),p.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Rn.fromBufferAttribute(e,t),Rn.normalize(),e.setXYZ(t,Rn.x,Rn.y,Rn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,v=f.normalized,S=new m.constructor(p.length*x);let M=0,T=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?M=p[A]*f.data.stride+f.offset:M=p[A]*x;for(let _=0;_<x;_++)S[T++]=m[M++]}return new ir(S,x,v)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,v=m.length;x<v;x++){const S=m[x],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,S=m.length;v<S;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zm=new ln,Ls=new qf,Yl=new Xf,Qm=new Z,$l=new Z,Kl=new Z,Zl=new Z,wd=new Z,Ql=new Z,Jm=new Z,Jl=new Z;class Oe extends Pn{constructor(e=new vi,t=new Vi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ql.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],v=l[p];x!==0&&(wd.fromBufferAttribute(v,e),d?Ql.addScaledVector(wd,x):Ql.addScaledVector(wd.sub(t),x))}t.add(Ql)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Yl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Yl,Qm)===null||Ls.origin.distanceToSquared(Qm)>(e.far-e.near)**2))&&(Zm.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(Zm),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,U=I;D<U;D+=3){const L=f.getX(D),F=f.getX(D+1),j=f.getX(D+2);o=ec(this,_,e,r,m,x,v,L,F,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=f.getX(y),I=f.getX(y+1),D=f.getX(y+2);o=ec(this,d,e,r,m,x,v,C,I,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),I=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let D=C,U=I;D<U;D+=3){const L=D,F=D+1,j=D+2;o=ec(this,_,e,r,m,x,v,L,F,j),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=y,I=y+1,D=y+2;o=ec(this,d,e,r,m,x,v,C,I,D),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function z_(s,e,t,r,o,l,d,f){let p;if(e.side===ci?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===ls,f),p===null)return null;Jl.copy(f),Jl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Jl);return m<t.near||m>t.far?null:{distance:m,point:Jl.clone(),object:s}}function ec(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,$l),s.getVertexPosition(p,Kl),s.getVertexPosition(m,Zl);const x=z_(s,e,t,r,$l,Kl,Zl,Jm);if(x){const v=new Z;ji.getBarycoord(Jm,$l,Kl,Zl,v),o&&(x.uv=ji.getInterpolatedAttribute(o,f,p,m,v,new pt)),l&&(x.uv1=ji.getInterpolatedAttribute(l,f,p,m,v,new pt)),d&&(x.normal=ji.getInterpolatedAttribute(d,f,p,m,v,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new Z,materialIndex:0};ji.getNormal($l,Kl,Zl,S.normal),x.face=S,x.barycoord=v}return x}class Ht extends vi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],x=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(v,2));function T(A,y,_,C,I,D,U,L,F,j,E){const R=D/F,z=U/j,$=D/2,K=U/2,ie=L/2,re=F+1,ee=j+1;let q=0,X=0;const he=new Z;for(let ae=0;ae<ee;ae++){const k=ae*z-K;for(let le=0;le<re;le++){const Ne=le*R-$;he[A]=Ne*C,he[y]=k*I,he[_]=ie,m.push(he.x,he.y,he.z),he[A]=0,he[y]=0,he[_]=L>0?1:-1,x.push(he.x,he.y,he.z),v.push(le/F),v.push(1-ae/j),q+=1}}for(let ae=0;ae<j;ae++)for(let k=0;k<F;k++){const le=S+k+re*ae,Ne=S+k+re*(ae+1),Xe=S+(k+1)+re*(ae+1),qe=S+(k+1)+re*ae;p.push(le,Ne,qe),p.push(Ne,Xe,qe),X+=6}f.addGroup(M,X,E),M+=X,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ht(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ba(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=Ba(s[t]);for(const o in r)e[o]=r[o]}return e}function j_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const V_={clone:Ba,merge:Zn};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,H_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ar extends zo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=H_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ba(e.uniforms),this.uniformsGroups=j_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class fg extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new Z,e0=new pt,t0=new pt;class Qn extends fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vc*2*Math.atan(Math.tan(dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,e0,t0),t.subVectors(t0,e0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(dc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ca=-90,Aa=1;class W_ extends Pn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Ca,Aa,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Ca,Aa,e,t);l.layers=this.layers,this.add(l);const d=new Qn(Ca,Aa,e,t);d.layers=this.layers,this.add(d);const f=new Qn(Ca,Aa,e,t);f.layers=this.layers,this.add(f);const p=new Qn(Ca,Aa,e,t);p.layers=this.layers,this.add(p);const m=new Qn(Ca,Aa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===er)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class hg extends Fn{constructor(e=[],t=js,r,o,l,d,f,p,m,x){super(e,t,r,o,l,d,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends nr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ht(5,5,5),l=new ar({name:"CubemapFromEquirect",uniforms:Ba(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ci,blending:Pr});l.uniforms.tEquirect.value=t;const d=new Oe(o,l),f=t.minFilter;return t.minFilter===Bs&&(t.minFilter=qn),new W_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class Nn extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X_={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(X_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Nn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class $f{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=t}clone(){return new $f(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mg extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class q_ extends Fn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=On,x=On,v,S){super(null,d,f,p,m,x,o,l,v,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new Z,Y_=new Z,$_=new Et;class ss{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ed.subVectors(r,t).cross(Y_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$_.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new Xf,K_=new pt(.5,.5),tc=new Z;class Kf{constructor(e=new ss,t=new ss,r=new ss,o=new ss,l=new ss,d=new ss){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=er,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],x=l[4],v=l[5],S=l[6],M=l[7],T=l[8],A=l[9],y=l[10],_=l[11],C=l[12],I=l[13],D=l[14],U=l[15];if(o[0].setComponents(m-d,M-x,_-T,U-C).normalize(),o[1].setComponents(m+d,M+x,_+T,U+C).normalize(),o[2].setComponents(m+f,M+v,_+A,U+I).normalize(),o[3].setComponents(m-f,M-v,_-A,U-I).normalize(),r)o[4].setComponents(p,S,y,D).normalize(),o[5].setComponents(m-p,M-S,_-y,U-D).normalize();else if(o[4].setComponents(m-p,M-S,_-y,U-D).normalize(),t===er)o[5].setComponents(m+p,M+S,_+y,U+D).normalize();else if(t===xc)o[5].setComponents(p,S,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=K_.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(tc.x=o.normal.x>0?e.max.x:e.min.x,tc.y=o.normal.y>0?e.max.y:e.min.y,tc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(tc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gg extends Fn{constructor(e,t,r,o,l,d,f,p,m){super(e,t,r,o,l,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oo extends Fn{constructor(e,t,r=rr,o,l,d,f=On,p=On,m,x=Ir,v=1){if(x!==Ir&&x!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:v};super(S,o,l,d,f,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z_ extends Oo{constructor(e,t=rr,r=js,o,l,d=On,f=On,p,m=Ir){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,f,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xg extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Zf extends vi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],d=[],f=[],p=[],m=new Z,x=new pt;d.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let v=0,S=3;v<=t;v++,S+=3){const M=r+v/t*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),d.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(d[S]/e+1)/2,x.y=(d[S+1]/e+1)/2,p.push(x.x,x.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class en extends vi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],S=[],M=[];let T=0;const A=[],y=r/2;let _=0;C(),d===!1&&(e>0&&I(!0),t>0&&I(!1)),this.setIndex(x),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(S,3)),this.setAttribute("uv",new pn(M,2));function C(){const D=new Z,U=new Z;let L=0;const F=(t-e)/r;for(let j=0;j<=l;j++){const E=[],R=j/l,z=R*(t-e)+e;for(let $=0;$<=o;$++){const K=$/o,ie=K*p+f,re=Math.sin(ie),ee=Math.cos(ie);U.x=z*re,U.y=-R*r+y,U.z=z*ee,v.push(U.x,U.y,U.z),D.set(re,F,ee).normalize(),S.push(D.x,D.y,D.z),M.push(K,1-R),E.push(T++)}A.push(E)}for(let j=0;j<o;j++)for(let E=0;E<l;E++){const R=A[E][j],z=A[E+1][j],$=A[E+1][j+1],K=A[E][j+1];(e>0||E!==0)&&(x.push(R,z,K),L+=3),(t>0||E!==l-1)&&(x.push(z,$,K),L+=3)}m.addGroup(_,L,0),_+=L}function I(D){const U=T,L=new pt,F=new Z;let j=0;const E=D===!0?e:t,R=D===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,y*R,0),S.push(0,R,0),M.push(.5,.5),T++;const z=T;for(let $=0;$<=o;$++){const ie=$/o*p+f,re=Math.cos(ie),ee=Math.sin(ie);F.x=E*ee,F.y=y*R,F.z=E*re,v.push(F.x,F.y,F.z),S.push(0,R,0),L.x=re*.5+.5,L.y=ee*.5*R+.5,M.push(L.x,L.y),T++}for(let $=0;$<o;$++){const K=U+$,ie=z+$;D===!0?x.push(ie,ie+1,K):x.push(ie+1,ie,K),j+=3}m.addGroup(_,j,D===!0?1:2),_+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Qf extends en{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new Qf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jf extends vi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),x(),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(l.slice(),3)),this.setAttribute("uv",new pn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const I=new Z,D=new Z,U=new Z;for(let L=0;L<t.length;L+=3)M(t[L+0],I),M(t[L+1],D),M(t[L+2],U),p(I,D,U,C)}function p(C,I,D,U){const L=U+1,F=[];for(let j=0;j<=L;j++){F[j]=[];const E=C.clone().lerp(D,j/L),R=I.clone().lerp(D,j/L),z=L-j;for(let $=0;$<=z;$++)$===0&&j===L?F[j][$]=E:F[j][$]=E.clone().lerp(R,$/z)}for(let j=0;j<L;j++)for(let E=0;E<2*(L-j)-1;E++){const R=Math.floor(E/2);E%2===0?(S(F[j][R+1]),S(F[j+1][R]),S(F[j][R])):(S(F[j][R+1]),S(F[j+1][R+1]),S(F[j+1][R]))}}function m(C){const I=new Z;for(let D=0;D<l.length;D+=3)I.x=l[D+0],I.y=l[D+1],I.z=l[D+2],I.normalize().multiplyScalar(C),l[D+0]=I.x,l[D+1]=I.y,l[D+2]=I.z}function x(){const C=new Z;for(let I=0;I<l.length;I+=3){C.x=l[I+0],C.y=l[I+1],C.z=l[I+2];const D=y(C)/2/Math.PI+.5,U=_(C)/Math.PI+.5;d.push(D,1-U)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const I=d[C+0],D=d[C+2],U=d[C+4],L=Math.max(I,D,U),F=Math.min(I,D,U);L>.9&&F<.1&&(I<.2&&(d[C+0]+=1),D<.2&&(d[C+2]+=1),U<.2&&(d[C+4]+=1))}}function S(C){l.push(C.x,C.y,C.z)}function M(C,I){const D=C*3;I.x=e[D+0],I.y=e[D+1],I.z=e[D+2]}function T(){const C=new Z,I=new Z,D=new Z,U=new Z,L=new pt,F=new pt,j=new pt;for(let E=0,R=0;E<l.length;E+=9,R+=6){C.set(l[E+0],l[E+1],l[E+2]),I.set(l[E+3],l[E+4],l[E+5]),D.set(l[E+6],l[E+7],l[E+8]),L.set(d[R+0],d[R+1]),F.set(d[R+2],d[R+3]),j.set(d[R+4],d[R+5]),U.copy(C).add(I).add(D).divideScalar(3);const z=y(U);A(L,R+0,C,z),A(F,R+2,I,z),A(j,R+4,D,z)}}function A(C,I,D,U){U<0&&C.x===1&&(d[I]=C.x-1),D.x===0&&D.z===0&&(d[I]=U/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.vertices,e.indices,e.radius,e.detail)}}class eh extends Jf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eh(e.radius,e.detail)}}class Xn extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,x=p+1,v=e/f,S=t/p,M=[],T=[],A=[],y=[];for(let _=0;_<x;_++){const C=_*S-d;for(let I=0;I<m;I++){const D=I*v-l;T.push(D,-C,0),A.push(0,0,1),y.push(I/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<f;C++){const I=C+m*_,D=C+m*(_+1),U=C+1+m*(_+1),L=C+1+m*_;M.push(I,D,L),M.push(D,U,L)}this.setIndex(M),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(A,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Cr extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const x=[],v=new Z,S=new Z,M=[],T=[],A=[],y=[];for(let _=0;_<=r;_++){const C=[],I=_/r;let D=0;_===0&&d===0?D=.5/t:_===r&&p===Math.PI&&(D=-.5/t);for(let U=0;U<=t;U++){const L=U/t;v.x=-e*Math.cos(o+L*l)*Math.sin(d+I*f),v.y=e*Math.cos(d+I*f),v.z=e*Math.sin(o+L*l)*Math.sin(d+I*f),T.push(v.x,v.y,v.z),S.copy(v).normalize(),A.push(S.x,S.y,S.z),y.push(L+D,1-I),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const I=x[_][C+1],D=x[_][C],U=x[_+1][C],L=x[_+1][C+1];(_!==0||d>0)&&M.push(I,D,L),(_!==r-1||p<Math.PI)&&M.push(D,U,L)}this.setIndex(M),this.setAttribute("position",new pn(T,3)),this.setAttribute("normal",new pn(A,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Q_ extends ar{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends zo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class J_ extends zo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=f_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends zo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class t1{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&o.onStart!==void 0&&o.onStart(x,d,f),l=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,S=m.length;v<S;v+=2){const M=m[v],T=m[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const n1=new t1;class th{constructor(e){this.manager=e!==void 0?e:n1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ra=new WeakMap;class i1 extends th{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Td.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let v=Ra.get(d);v===void 0&&(v=[],Ra.set(d,v)),v.push({onLoad:t,onError:o})}return d}const f=Io("img");function p(){x(),t&&t(this);const v=Ra.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onLoad&&M.onLoad(this)}Ra.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),Td.remove(`image:${e}`);const S=Ra.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(v)}Ra.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Td.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class vg extends th{constructor(e){super(e)}load(e,t,r,o){const l=new Fn,d=new i1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class Mc extends Pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new ln,n0=new Z,i0=new Z;class nh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kf,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;n0.setFromMatrixPosition(e.matrixWorld),t.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r1 extends nh{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=vc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class r0 extends Mc{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new r1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class s1 extends nh{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class s0 extends Mc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new s1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ih extends fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class a1 extends nh{constructor(){super(new ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nf extends Mc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new a1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class _g extends Mc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class o1 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class l1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const a0=new ln;class yg{constructor(e,t,r=0,o=1/0){this.ray=new qf(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Yf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return a0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a0),this}intersectObject(e,t=!0,r=[]){return Pf(e,this,r,t),r.sort(o0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Pf(e[o],this,r,t);return r.sort(o0),r}}function o0(s,e){return s.distance-e.distance}function Pf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)Pf(l[d],e,t,!0)}}class l0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class c1 extends Gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){vt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c0(s,e,t,r){const o=u1(r);switch(t){case ng:return s*e;case rg:return s*e/o.components*o.byteLength;case zf:return s*e/o.components*o.byteLength;case Fa:return s*e*2/o.components*o.byteLength;case jf:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case Gi:return s*e*4/o.components*o.byteLength;case Vf:return s*e*4/o.components*o.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:case ef:return Math.max(s,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(s,8)*Math.max(e,8)/2;case tf:case nf:case sf:case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rf:case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wf:case bf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Af:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function u1(s){switch(s){case xi:case Q0:return{byteLength:1,components:1};case Do:case J0:case Lr:return{byteLength:2,components:1};case kf:case Bf:return{byteLength:2,components:4};case rr:case Ff:case Ji:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function d1(s){const e=new WeakMap;function t(f,p){const m=f.array,x=f.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,x);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var f1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,p1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,m1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,x1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,v1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,y1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,S1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,M1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,E1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,U1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,k1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V1="gl_FragColor = linearToOutputTexel( gl_FragColor );",G1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,K1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Z1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ey=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ty=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ny=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,hy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Sy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,My=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ey=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ry=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ny=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Oy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,By=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ky=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,eS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,aS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,yS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,SS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ES=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,TS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,NS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,LS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,OS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,GS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:f1,alphahash_pars_fragment:h1,alphamap_fragment:p1,alphamap_pars_fragment:m1,alphatest_fragment:g1,alphatest_pars_fragment:x1,aomap_fragment:v1,aomap_pars_fragment:_1,batching_pars_vertex:y1,batching_vertex:S1,begin_vertex:M1,beginnormal_vertex:w1,bsdfs:b1,iridescence_fragment:E1,bumpmap_pars_fragment:T1,clipping_planes_fragment:C1,clipping_planes_pars_fragment:A1,clipping_planes_pars_vertex:R1,clipping_planes_vertex:N1,color_fragment:P1,color_pars_fragment:D1,color_pars_vertex:L1,color_vertex:I1,common:U1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:F1,displacementmap_pars_vertex:k1,displacementmap_vertex:B1,emissivemap_fragment:z1,emissivemap_pars_fragment:j1,colorspace_fragment:V1,colorspace_pars_fragment:G1,envmap_fragment:H1,envmap_common_pars_fragment:W1,envmap_pars_fragment:X1,envmap_pars_vertex:q1,envmap_physical_pars_fragment:ry,envmap_vertex:Y1,fog_vertex:$1,fog_pars_vertex:K1,fog_fragment:Z1,fog_pars_fragment:Q1,gradientmap_pars_fragment:J1,lightmap_pars_fragment:ey,lights_lambert_fragment:ty,lights_lambert_pars_fragment:ny,lights_pars_begin:iy,lights_toon_fragment:sy,lights_toon_pars_fragment:ay,lights_phong_fragment:oy,lights_phong_pars_fragment:ly,lights_physical_fragment:cy,lights_physical_pars_fragment:uy,lights_fragment_begin:dy,lights_fragment_maps:fy,lights_fragment_end:hy,logdepthbuf_fragment:py,logdepthbuf_pars_fragment:my,logdepthbuf_pars_vertex:gy,logdepthbuf_vertex:xy,map_fragment:vy,map_pars_fragment:_y,map_particle_fragment:yy,map_particle_pars_fragment:Sy,metalnessmap_fragment:My,metalnessmap_pars_fragment:wy,morphinstance_vertex:by,morphcolor_vertex:Ey,morphnormal_vertex:Ty,morphtarget_pars_vertex:Cy,morphtarget_vertex:Ay,normal_fragment_begin:Ry,normal_fragment_maps:Ny,normal_pars_fragment:Py,normal_pars_vertex:Dy,normal_vertex:Ly,normalmap_pars_fragment:Iy,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Oy,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:ky,opaque_fragment:By,packing:zy,premultiplied_alpha_fragment:jy,project_vertex:Vy,dithering_fragment:Gy,dithering_pars_fragment:Hy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:qy,shadowmap_pars_vertex:Yy,shadowmap_vertex:$y,shadowmask_pars_fragment:Ky,skinbase_vertex:Zy,skinning_pars_vertex:Qy,skinning_vertex:Jy,skinnormal_vertex:eS,specularmap_fragment:tS,specularmap_pars_fragment:nS,tonemapping_fragment:iS,tonemapping_pars_fragment:rS,transmission_fragment:sS,transmission_pars_fragment:aS,uv_pars_fragment:oS,uv_pars_vertex:lS,uv_vertex:cS,worldpos_vertex:uS,background_vert:dS,background_frag:fS,backgroundCube_vert:hS,backgroundCube_frag:pS,cube_vert:mS,cube_frag:gS,depth_vert:xS,depth_frag:vS,distance_vert:_S,distance_frag:yS,equirect_vert:SS,equirect_frag:MS,linedashed_vert:wS,linedashed_frag:bS,meshbasic_vert:ES,meshbasic_frag:TS,meshlambert_vert:CS,meshlambert_frag:AS,meshmatcap_vert:RS,meshmatcap_frag:NS,meshnormal_vert:PS,meshnormal_frag:DS,meshphong_vert:LS,meshphong_frag:IS,meshphysical_vert:US,meshphysical_frag:OS,meshtoon_vert:FS,meshtoon_frag:kS,points_vert:BS,points_frag:zS,shadow_vert:jS,shadow_frag:VS,sprite_vert:GS,sprite_frag:HS},Be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Qi={basic:{uniforms:Zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Zn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Zn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Zn([Be.points,Be.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Zn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Zn([Be.common,Be.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Zn([Be.sprite,Be.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Zn([Be.common,Be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Zn([Be.lights,Be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Qi.physical={uniforms:Zn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const nc={r:0,b:0,g:0},Us=new sr,WS=new ln;function XS(s,e,t,r,o,l,d){const f=new Ct(0);let p=l===!0?0:1,m,x,v=null,S=0,M=null;function T(I){let D=I.isScene===!0?I.background:null;return D&&D.isTexture&&(D=(I.backgroundBlurriness>0?t:e).get(D)),D}function A(I){let D=!1;const U=T(I);U===null?_(f,p):U&&U.isColor&&(_(U,1),D=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,d):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(I,D){const U=T(D);U&&(U.isCubeTexture||U.mapping===Sc)?(x===void 0&&(x=new Oe(new Ht(1,1,1),new ar({name:"BackgroundCubeMaterial",uniforms:Ba(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,F,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Us.copy(D.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(WS.makeRotationFromEuler(Us)),x.material.toneMapped=jt.getTransfer(U.colorSpace)!==Xt,(v!==U||S!==U.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),x.layers.enableAll(),I.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Oe(new Xn(2,2),new ar({name:"BackgroundMaterial",uniforms:Ba(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.toneMapped=jt.getTransfer(U.colorSpace)!==Xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||S!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function _(I,D){I.getRGB(nc,dg(s)),r.buffers.color.setClear(nc.r,nc.g,nc.b,D,d)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,D=1){f.set(I),p=D,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(I){p=I,_(f,p)},render:A,addToRenderList:y,dispose:C}}function qS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(R,z,$,K,ie){let re=!1;const ee=v(K,$,z);l!==ee&&(l=ee,m(l.object)),re=M(R,K,$,ie),re&&T(R,K,$,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,D(R,z,$,K),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return s.createVertexArray()}function m(R){return s.bindVertexArray(R)}function x(R){return s.deleteVertexArray(R)}function v(R,z,$){const K=$.wireframe===!0;let ie=r[R.id];ie===void 0&&(ie={},r[R.id]=ie);let re=ie[z.id];re===void 0&&(re={},ie[z.id]=re);let ee=re[K];return ee===void 0&&(ee=S(p()),re[K]=ee),ee}function S(R){const z=[],$=[],K=[];for(let ie=0;ie<t;ie++)z[ie]=0,$[ie]=0,K[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:R,attributes:{},index:null}}function M(R,z,$,K){const ie=l.attributes,re=z.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){const ae=ie[X];let k=re[X];if(k===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),ae===void 0||ae.attribute!==k||k&&ae.data!==k.data)return!0;ee++}return l.attributesNum!==ee||l.index!==K}function T(R,z,$,K){const ie={},re=z.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){let ae=re[X];ae===void 0&&(X==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),X==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor));const k={};k.attribute=ae,ae&&ae.data&&(k.data=ae.data),ie[X]=k,ee++}l.attributes=ie,l.attributesNum=ee,l.index=K}function A(){const R=l.newAttributes;for(let z=0,$=R.length;z<$;z++)R[z]=0}function y(R){_(R,0)}function _(R,z){const $=l.newAttributes,K=l.enabledAttributes,ie=l.attributeDivisors;$[R]=1,K[R]===0&&(s.enableVertexAttribArray(R),K[R]=1),ie[R]!==z&&(s.vertexAttribDivisor(R,z),ie[R]=z)}function C(){const R=l.newAttributes,z=l.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==R[$]&&(s.disableVertexAttribArray($),z[$]=0)}function I(R,z,$,K,ie,re,ee){ee===!0?s.vertexAttribIPointer(R,z,$,ie,re):s.vertexAttribPointer(R,z,$,K,ie,re)}function D(R,z,$,K){A();const ie=K.attributes,re=$.getAttributes(),ee=z.defaultAttributeValues;for(const q in re){const X=re[q];if(X.location>=0){let he=ie[q];if(he===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(he=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(he=R.instanceColor)),he!==void 0){const ae=he.normalized,k=he.itemSize,le=e.get(he);if(le===void 0)continue;const Ne=le.buffer,Xe=le.type,qe=le.bytesPerElement,te=Xe===s.INT||Xe===s.UNSIGNED_INT||he.gpuType===Ff;if(he.isInterleavedBufferAttribute){const de=he.data,Me=de.stride,Fe=he.offset;if(de.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)_(X.location+Pe,de.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)y(X.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Pe=0;Pe<X.locationSize;Pe++)I(X.location+Pe,k/X.locationSize,Xe,ae,Me*qe,(Fe+k/X.locationSize*Pe)*qe,te)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)_(X.location+de,he.meshPerAttribute);R.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<X.locationSize;de++)y(X.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let de=0;de<X.locationSize;de++)I(X.location+de,k/X.locationSize,Xe,ae,k*qe,k/X.locationSize*de*qe,te)}}else if(ee!==void 0){const ae=ee[q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(X.location,ae);break;case 3:s.vertexAttrib3fv(X.location,ae);break;case 4:s.vertexAttrib4fv(X.location,ae);break;default:s.vertexAttrib1fv(X.location,ae)}}}}C()}function U(){j();for(const R in r){const z=r[R];for(const $ in z){const K=z[$];for(const ie in K)x(K[ie].object),delete K[ie];delete z[$]}delete r[R]}}function L(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const $ in z){const K=z[$];for(const ie in K)x(K[ie].object),delete K[ie];delete z[$]}delete r[R.id]}function F(R){for(const z in r){const $=r[z];if($[R.id]===void 0)continue;const K=$[R.id];for(const ie in K)x(K[ie].object),delete K[ie];delete $[R.id]}}function j(){E(),d=!0,l!==o&&(l=o,m(l.object))}function E(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:j,resetDefaultState:E,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function YS(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function d(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function f(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=x[T];t.update(M,r,1)}function p(m,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*S[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function $S(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(F){return!(F!==Gi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const j=F===Lr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==xi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ji&&!j)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(vt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),D=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:D,maxSamples:U,samples:L}}function KS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new ss,f=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||o;return o=S,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,S){t=x(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!y)l?x(null):m();else{const C=l?0:r,I=C*4;let D=_.clippingState||null;p.value=D,D=x(T,S,I,M);for(let U=0;U!==I;++U)D[U]=t[U];_.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,S,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const _=M+A*4,C=S.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let I=0,D=M;I!==A;++I,D+=4)d.copy(v[I]).applyMatrix4(C,f),d.normal.toArray(y,D),y[D+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function ZS(s){let e=new WeakMap;function t(d,f){return f===qd?d.mapping=js:f===Yd&&(d.mapping=Oa),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===qd||f===Yd)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new pg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const os=4,u0=[.125,.215,.35,.446,.526,.582],ks=20,QS=256,To=new ih,d0=new Ct;let Ad=null,Rd=0,Nd=0,Pd=!1;const JS=new Z;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=JS}=l;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Nd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Na(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===Oa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:Lr,format:Gi,colorSpace:ka,depthBuffer:!1},o=h0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eM(l)),this._blurMaterial=nM(l,e,t),this._ggxMaterial=tM(l,e,t)}return o}_compileMaterial(e){const t=new Oe(new vi,e);this._renderer.compile(t,To)}_sceneToCubeUV(e,t,r,o,l){const p=new Qn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(d0),v.toneMapping=tr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Ht,new Vi({name:"PMREM.Background",side:ci,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(d0),_=!0);for(let I=0;I<6;I++){const D=I%3;D===0?(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[I],l.y,l.z)):D===1?(p.up.set(0,0,m[I]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[I],l.z)):(p.up.set(0,m[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[I]));const U=this._cubeSize;Na(o,D*U,I>2?U:0,U,U),v.setRenderTarget(o),_&&v.render(A,p),v.render(e,p)}v.toneMapping=M,v.autoClear=S,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===js||e.mapping===Oa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Na(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,To)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),S=0+m*1.25,M=v*S,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-os?r-T+os:0),_=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,Na(l,y,_,3*A,2*A),o.setRenderTarget(l),o.render(f,To),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,Na(e,y,_,3*A,2*A),o.setRenderTarget(e),o.render(f,To)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ks-1),A=l/T,y=isFinite(l)?1+Math.floor(x*A):ks;y>ks&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const _=[];let C=0;for(let F=0;F<ks;++F){const j=F/A,E=Math.exp(-j*j/2);_.push(E),F===0?C+=E:F<y&&(C+=2*E)}for(let F=0;F<_.length;F++)_[F]=_[F]/C;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:I}=this;S.dTheta.value=T,S.mipInt.value=I-r;const D=this._sizeLods[o],U=3*D*(o>I-os?o-I+os:0),L=4*(this._cubeSize-D);Na(t,U,L,3*D,2*D),p.setRenderTarget(t),p.render(v,To)}}function eM(s){const e=[],t=[],r=[];let o=s;const l=s-os+1+u0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-os?p=u0[d-s+os-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),x=-m,v=1+m,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,A=3,y=2,_=1,C=new Float32Array(A*T*M),I=new Float32Array(y*T*M),D=new Float32Array(_*T*M);for(let L=0;L<M;L++){const F=L%3*2/3-1,j=L>2?0:-1,E=[F,j,0,F+2/3,j,0,F+2/3,j+1,0,F,j,0,F+2/3,j+1,0,F,j+1,0];C.set(E,A*T*L),I.set(S,y*T*L);const R=[L,L,L,L,L,L];D.set(R,_*T*L)}const U=new vi;U.setAttribute("position",new ir(C,A)),U.setAttribute("uv",new ir(I,y)),U.setAttribute("faceIndex",new ir(D,_)),r.push(new Oe(U,null)),o>os&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function h0(s,e,t){const r=new nr(s,e,t);return r.texture.mapping=Sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Na(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function tM(s,e,t){return new ar({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function nM(s,e,t){const r=new Float32Array(ks),o=new Z(0,1,0);return new ar({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function p0(){return new ar({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function m0(){return new ar({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function wc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function iM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===qd||p===Yd,x=p===js||p===Oa;if(m||x){let v=e.get(f);const S=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new f0(s)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new f0(s)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function rM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Uo("WebGLRenderer: "+r+" extension not supported."),o}}}function sM(s,e,t,r){const o={},l=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(v,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(v){const S=v.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(v){const S=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const C=M.array;A=M.version;for(let I=0,D=C.length;I<D;I+=3){const U=C[I+0],L=C[I+1],F=C[I+2];S.push(U,L,L,F,F,U)}}else if(T!==void 0){const C=T.array;A=T.version;for(let I=0,D=C.length/3-1;I<D;I+=3){const U=I+0,L=I+1,F=I+2;S.push(U,L,L,F,F,U)}}else return;const y=new(ag(S)?ug:cg)(S,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function x(v){const S=l.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:x}}function aM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];t.update(y,r,1)}function v(S,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)m(S[_]/d,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*A[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function oM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:zt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function lM(s,e,t){const r=new WeakMap,o=new fn;function l(d,f,p){const m=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==v){let R=function(){j.dispose(),r.delete(f),f.removeEventListener("dispose",R)};var M=R;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let U=f.attributes.position.count*D,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const F=new Float32Array(U*L*4*v),j=new og(F,U,L,v);j.type=Ji,j.needsUpdate=!0;const E=D*4;for(let z=0;z<v;z++){const $=_[z],K=C[z],ie=I[z],re=U*L*4*z;for(let ee=0;ee<$.count;ee++){const q=ee*E;T===!0&&(o.fromBufferAttribute($,ee),F[re+q+0]=o.x,F[re+q+1]=o.y,F[re+q+2]=o.z,F[re+q+3]=0),A===!0&&(o.fromBufferAttribute(K,ee),F[re+q+4]=o.x,F[re+q+5]=o.y,F[re+q+6]=o.z,F[re+q+7]=0),y===!0&&(o.fromBufferAttribute(ie,ee),F[re+q+8]=o.x,F[re+q+9]=o.y,F[re+q+10]=o.z,F[re+q+11]=ie.itemSize===4?o.w:1)}}S={count:v,texture:j,size:new pt(U,L)},r.set(f,S),f.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function cM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return v}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const uM={[W0]:"LINEAR_TONE_MAPPING",[X0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[yc]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[K0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function dM(s,e,t,r,o){const l=new nr(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new nr(e,t,{type:Lr,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new pn([0,2,0,0,2,0],2));const p=new Q_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Oe(f,p),x=new ih(-1,1,1,-1,0,1);let v=null,S=null,M=!1,T,A=null,y=[],_=!1;this.setSize=function(C,I){l.setSize(C,I),d.setSize(C,I);for(let D=0;D<y.length;D++){const U=y[D];U.setSize&&U.setSize(C,I)}},this.setEffects=function(C){y=C,_=y.length>0&&y[0].isRenderPass===!0;const I=l.width,D=l.height;for(let U=0;U<y.length;U++){const L=y[U];L.setSize&&L.setSize(I,D)}},this.begin=function(C,I){if(M||C.toneMapping===tr&&y.length===0)return!1;if(A=I,I!==null){const D=I.width,U=I.height;(l.width!==D||l.height!==U)&&this.setSize(D,U)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=tr,!0},this.hasRenderPass=function(){return _},this.end=function(C,I){C.toneMapping=T,M=!0;let D=l,U=d;for(let L=0;L<y.length;L++){const F=y[L];if(F.enabled!==!1&&(F.render(C,U,D,I),F.needsSwap!==!1)){const j=D;D=U,U=j}}if(v!==C.outputColorSpace||S!==C.toneMapping){v=C.outputColorSpace,S=C.toneMapping,p.defines={},jt.getTransfer(v)===Xt&&(p.defines.SRGB_TRANSFER="");const L=uM[S];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=D.texture,C.setRenderTarget(A),C.render(m,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const Mg=new Fn,Df=new Oo(1,1),wg=new og,bg=new R_,Eg=new hg,g0=[],x0=[],v0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function za(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=g0[o];if(l===void 0&&(l=new Float32Array(o),g0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function Mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function wn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function bc(s,e){let t=x0[e];t===void 0&&(t=new Int32Array(e),x0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2fv(this.addr,e),wn(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;s.uniform3fv(this.addr,e),wn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4fv(this.addr,e),wn(t,e)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),wn(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),wn(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,r))return;v0.set(r),s.uniformMatrix4fv(this.addr,!1,v0),wn(t,r)}}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2iv(this.addr,e),wn(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3iv(this.addr,e),wn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4iv(this.addr,e),wn(t,e)}}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;s.uniform2uiv(this.addr,e),wn(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;s.uniform3uiv(this.addr,e),wn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;s.uniform4uiv(this.addr,e),wn(t,e)}}function CM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Df.compareFunction=t.isReversedDepthBuffer()?Hf:Gf,l=Df):l=Mg,t.setTexture2D(e||l,o)}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||bg,o)}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Eg,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||wg,o)}function PM(s){switch(s){case 5126:return fM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return xM;case 35676:return vM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return bM;case 36295:return EM;case 36296:return TM;case 35678:case 36198:case 36298:case 36306:case 35682:return CM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return NM}}function DM(s,e){s.uniform1fv(this.addr,e)}function LM(s,e){const t=za(e,this.size,2);s.uniform2fv(this.addr,t)}function IM(s,e){const t=za(e,this.size,3);s.uniform3fv(this.addr,t)}function UM(s,e){const t=za(e,this.size,4);s.uniform4fv(this.addr,t)}function OM(s,e){const t=za(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function FM(s,e){const t=za(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kM(s,e){const t=za(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function BM(s,e){s.uniform1iv(this.addr,e)}function zM(s,e){s.uniform2iv(this.addr,e)}function jM(s,e){s.uniform3iv(this.addr,e)}function VM(s,e){s.uniform4iv(this.addr,e)}function GM(s,e){s.uniform1uiv(this.addr,e)}function HM(s,e){s.uniform2uiv(this.addr,e)}function WM(s,e){s.uniform3uiv(this.addr,e)}function XM(s,e){s.uniform4uiv(this.addr,e)}function qM(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=Df:d=Mg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function YM(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||bg,l[d])}function $M(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Eg,l[d])}function KM(s,e,t){const r=this.cache,o=e.length,l=bc(t,o);Mn(r,l)||(s.uniform1iv(this.addr,l),wn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||wg,l[d])}function ZM(s){switch(s){case 5126:return DM;case 35664:return LM;case 35665:return IM;case 35666:return UM;case 35674:return OM;case 35675:return FM;case 35676:return kM;case 5124:case 35670:return BM;case 35667:case 35671:return zM;case 35668:case 35672:return jM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return HM;case 36295:return WM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return qM;case 35679:case 36299:case 36307:return YM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class QM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=PM(t.type)}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}}class ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function S0(s,e){s.seq.push(e),s.map[e.id]=e}function tw(s,e,t){const r=s.name,o=r.length;for(Dd.lastIndex=0;;){const l=Dd.exec(r),d=Dd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){S0(t,m===void 0?new QM(f,s,e):new JM(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new ew(f),S0(t,v)),t=v}}}class fc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);tw(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function M0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const nw=37297;let iw=0;function rw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const w0=new Et;function sw(s){jt._getMatrix(w0,jt.workingColorSpace,s);const e=`mat3( ${w0.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(s)){case gc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function b0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+rw(s.getShaderSource(e),f)}else return l}function aw(s,e){const t=sw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ow={[W0]:"Linear",[X0]:"Reinhard",[q0]:"Cineon",[yc]:"ACESFilmic",[$0]:"AgX",[K0]:"Neutral",[Y0]:"Custom"};function lw(s,e){const t=ow[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new Z;function cw(){jt.getLuminanceCoefficients(ic);const s=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function dw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function fw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function No(s){return s!==""}function E0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lf(s){return s.replace(hw,mw)}const pw=new Map;function mw(s,e){let t=Tt[e];if(t===void 0){const r=pw.get(e);if(r!==void 0)t=Tt[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Lf(t)}const gw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(s){return s.replace(gw,xw)}function xw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function A0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vw={[ac]:"SHADOWMAP_TYPE_PCF",[Ro]:"SHADOWMAP_TYPE_VSM"};function _w(s){return vw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yw={[js]:"ENVMAP_TYPE_CUBE",[Oa]:"ENVMAP_TYPE_CUBE",[Sc]:"ENVMAP_TYPE_CUBE_UV"};function Sw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":yw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mw={[Oa]:"ENVMAP_MODE_REFRACTION"};function ww(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Mw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bw={[H0]:"ENVMAP_BLENDING_MULTIPLY",[c_]:"ENVMAP_BLENDING_MIX",[u_]:"ENVMAP_BLENDING_ADD"};function Ew(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":bw[s.combine]||"ENVMAP_BLENDING_NONE"}function Tw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Cw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=_w(t),m=Sw(t),x=ww(t),v=Ew(t),S=Tw(t),M=uw(t),T=dw(l),A=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(No).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(No).join(`
`),_.length>0&&(_+=`
`)):(y=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),_=[A0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==tr?"#define TONE_MAPPING":"",t.toneMapping!==tr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==tr?lw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,aw("linearToOutputTexel",t.outputColorSpace),cw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(No).join(`
`)),d=Lf(d),d=E0(d,t),d=T0(d,t),f=Lf(f),f=E0(f,t),f=T0(f,t),d=C0(d),f=C0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const I=C+y+d,D=C+_+f,U=M0(o,o.VERTEX_SHADER,I),L=M0(o,o.FRAGMENT_SHADER,D);o.attachShader(A,U),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function F(z){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(U)||"",ie=o.getShaderInfoLog(L)||"",re=$.trim(),ee=K.trim(),q=ie.trim();let X=!0,he=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,U,L);else{const ae=b0(o,U,"vertex"),k=b0(o,L,"fragment");zt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+ae+`
`+k)}else re!==""?vt("WebGLProgram: Program Info Log:",re):(ee===""||q==="")&&(he=!1);he&&(z.diagnostics={runnable:X,programLog:re,vertexShader:{log:ee,prefix:y},fragmentShader:{log:q,prefix:_}})}o.deleteShader(U),o.deleteShader(L),j=new fc(o,A),E=fw(o,A)}let j;this.getUniforms=function(){return j===void 0&&F(this),j};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(A,nw)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=L,this}let Aw=0;class Rw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Nw(e),t.set(e,r)),r}}class Nw{constructor(e){this.id=Aw++,this.code=e,this.usedTimes=0}}function Pw(s,e,t,r,o,l,d){const f=new Yf,p=new Rw,m=new Set,x=[],v=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(E){return m.add(E),E===0?"uv":`uv${E}`}function y(E,R,z,$,K){const ie=$.fog,re=K.geometry,ee=E.isMeshStandardMaterial?$.environment:null,q=(E.isMeshStandardMaterial?t:e).get(E.envMap||ee),X=q&&q.mapping===Sc?q.image.height:null,he=T[E.type];E.precision!==null&&(M=o.getMaxPrecision(E.precision),M!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",M,"instead."));const ae=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,k=ae!==void 0?ae.length:0;let le=0;re.morphAttributes.position!==void 0&&(le=1),re.morphAttributes.normal!==void 0&&(le=2),re.morphAttributes.color!==void 0&&(le=3);let Ne,Xe,qe,te;if(he){const bt=Qi[he];Ne=bt.vertexShader,Xe=bt.fragmentShader}else Ne=E.vertexShader,Xe=E.fragmentShader,p.update(E),qe=p.getVertexShaderID(E),te=p.getFragmentShaderID(E);const de=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Fe=K.isInstancedMesh===!0,Pe=K.isBatchedMesh===!0,yt=!!E.map,Yt=!!E.matcap,_t=!!q,At=!!E.aoMap,Ot=!!E.lightMap,lt=!!E.bumpMap,tt=!!E.normalMap,P=!!E.displacementMap,$e=!!E.emissiveMap,mt=!!E.metalnessMap,rt=!!E.roughnessMap,Te=E.anisotropy>0,O=E.clearcoat>0,w=E.dispersion>0,H=E.iridescence>0,pe=E.sheen>0,ge=E.transmission>0,ue=Te&&!!E.anisotropyMap,ze=O&&!!E.clearcoatMap,Ee=O&&!!E.clearcoatNormalMap,He=O&&!!E.clearcoatRoughnessMap,at=H&&!!E.iridescenceMap,_e=H&&!!E.iridescenceThicknessMap,Ae=pe&&!!E.sheenColorMap,Ve=pe&&!!E.sheenRoughnessMap,je=!!E.specularMap,we=!!E.specularColorMap,ht=!!E.specularIntensityMap,G=ge&&!!E.transmissionMap,De=ge&&!!E.thicknessMap,Se=!!E.gradientMap,Le=!!E.alphaMap,me=E.alphaTest>0,fe=!!E.alphaHash,xe=!!E.extensions;let Je=tr;E.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Dt={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:Ne,fragmentShader:Xe,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:M,batching:Pe,batchingColor:Pe&&K._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&K.instanceColor!==null,instancingMorph:Fe&&K.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ka,alphaToCoverage:!!E.alphaToCoverage,map:yt,matcap:Yt,envMap:_t,envMapMode:_t&&q.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:Ot,bumpMap:lt,normalMap:tt,displacementMap:P,emissiveMap:$e,normalMapObjectSpace:tt&&E.normalMapType===h_,normalMapTangentSpace:tt&&E.normalMapType===sg,metalnessMap:mt,roughnessMap:rt,anisotropy:Te,anisotropyMap:ue,clearcoat:O,clearcoatMap:ze,clearcoatNormalMap:Ee,clearcoatRoughnessMap:He,dispersion:w,iridescence:H,iridescenceMap:at,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:Ae,sheenRoughnessMap:Ve,specularMap:je,specularColorMap:we,specularIntensityMap:ht,transmission:ge,transmissionMap:G,thicknessMap:De,gradientMap:Se,opaque:E.transparent===!1&&E.blending===La&&E.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:fe,combine:E.combine,mapUv:yt&&A(E.map.channel),aoMapUv:At&&A(E.aoMap.channel),lightMapUv:Ot&&A(E.lightMap.channel),bumpMapUv:lt&&A(E.bumpMap.channel),normalMapUv:tt&&A(E.normalMap.channel),displacementMapUv:P&&A(E.displacementMap.channel),emissiveMapUv:$e&&A(E.emissiveMap.channel),metalnessMapUv:mt&&A(E.metalnessMap.channel),roughnessMapUv:rt&&A(E.roughnessMap.channel),anisotropyMapUv:ue&&A(E.anisotropyMap.channel),clearcoatMapUv:ze&&A(E.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&A(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&A(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&A(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&A(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&A(E.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&A(E.sheenRoughnessMap.channel),specularMapUv:je&&A(E.specularMap.channel),specularColorMapUv:we&&A(E.specularColorMap.channel),specularIntensityMapUv:ht&&A(E.specularIntensityMap.channel),transmissionMapUv:G&&A(E.transmissionMap.channel),thicknessMapUv:De&&A(E.thicknessMap.channel),alphaMapUv:Le&&A(E.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(tt||Te),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!re.attributes.uv&&(yt||Le),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:K.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:le,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:yt&&E.map.isVideoTexture===!0&&jt.getTransfer(E.map.colorSpace)===Xt,decodeVideoTextureEmissive:$e&&E.emissiveMap.isVideoTexture===!0&&jt.getTransfer(E.emissiveMap.colorSpace)===Xt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ar,flipSided:E.side===ci,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:xe&&E.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&E.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function _(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const z in E.defines)R.push(z),R.push(E.defines[z]);return E.isRawShaderMaterial===!1&&(C(R,E),I(R,E),R.push(s.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function C(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function I(E,R){f.disableAll(),R.instancing&&f.enable(0),R.instancingColor&&f.enable(1),R.instancingMorph&&f.enable(2),R.matcap&&f.enable(3),R.envMap&&f.enable(4),R.normalMapObjectSpace&&f.enable(5),R.normalMapTangentSpace&&f.enable(6),R.clearcoat&&f.enable(7),R.iridescence&&f.enable(8),R.alphaTest&&f.enable(9),R.vertexColors&&f.enable(10),R.vertexAlphas&&f.enable(11),R.vertexUv1s&&f.enable(12),R.vertexUv2s&&f.enable(13),R.vertexUv3s&&f.enable(14),R.vertexTangents&&f.enable(15),R.anisotropy&&f.enable(16),R.alphaHash&&f.enable(17),R.batching&&f.enable(18),R.dispersion&&f.enable(19),R.batchingColor&&f.enable(20),R.gradientMap&&f.enable(21),E.push(f.mask),f.disableAll(),R.fog&&f.enable(0),R.useFog&&f.enable(1),R.flatShading&&f.enable(2),R.logarithmicDepthBuffer&&f.enable(3),R.reversedDepthBuffer&&f.enable(4),R.skinning&&f.enable(5),R.morphTargets&&f.enable(6),R.morphNormals&&f.enable(7),R.morphColors&&f.enable(8),R.premultipliedAlpha&&f.enable(9),R.shadowMapEnabled&&f.enable(10),R.doubleSided&&f.enable(11),R.flipSided&&f.enable(12),R.useDepthPacking&&f.enable(13),R.dithering&&f.enable(14),R.transmission&&f.enable(15),R.sheen&&f.enable(16),R.opaque&&f.enable(17),R.pointsUvs&&f.enable(18),R.decodeVideoTexture&&f.enable(19),R.decodeVideoTextureEmissive&&f.enable(20),R.alphaToCoverage&&f.enable(21),E.push(f.mask)}function D(E){const R=T[E.type];let z;if(R){const $=Qi[R];z=V_.clone($.uniforms)}else z=E.uniforms;return z}function U(E,R){let z=v.get(R);return z!==void 0?++z.usedTimes:(z=new Cw(s,R,E,l),x.push(z),v.set(R,z)),z}function L(E){if(--E.usedTimes===0){const R=x.indexOf(E);x[R]=x[x.length-1],x.pop(),v.delete(E.cacheKey),E.destroy()}}function F(E){p.remove(E)}function j(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:D,acquireProgram:U,releaseProgram:L,releaseShaderCache:F,programs:x,dispose:j}}function Dw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Lw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function R0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function N0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(v,S,M,T,A,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function f(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):t.push(_)}function p(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,S){t.length>1&&t.sort(v||Lw),r.length>1&&r.sort(S||R0),o.length>1&&o.sort(S||R0)}function x(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:x,sort:m}}function Iw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new N0,s.set(r,[d])):o>=l.length?(d=new N0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Uw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ct};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Fw=0;function kw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Bw(s){const e=new Uw,t=Ow(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,l=new ln,d=new ln;function f(m){let x=0,v=0,S=0;for(let E=0;E<9;E++)r.probe[E].set(0,0,0);let M=0,T=0,A=0,y=0,_=0,C=0,I=0,D=0,U=0,L=0,F=0;m.sort(kw);for(let E=0,R=m.length;E<R;E++){const z=m[E],$=z.color,K=z.intensity,ie=z.distance;let re=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Fa?re=z.shadow.map.texture:re=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=$.r*K,v+=$.g*K,S+=$.b*K;else if(z.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(z.sh.coefficients[ee],K);F++}else if(z.isDirectionalLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=re,r.directionalShadowMatrix[M]=z.shadow.matrix,C++}r.directional[M]=ee,M++}else if(z.isSpotLight){const ee=e.get(z);ee.position.setFromMatrixPosition(z.matrixWorld),ee.color.copy($).multiplyScalar(K),ee.distance=ie,ee.coneCos=Math.cos(z.angle),ee.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ee.decay=z.decay,r.spot[A]=ee;const q=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,q.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[A]=q.matrix,z.castShadow){const X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=re,D++}A++}else if(z.isRectAreaLight){const ee=e.get(z);ee.color.copy($).multiplyScalar(K),ee.halfWidth.set(z.width*.5,0,0),ee.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ee,y++}else if(z.isPointLight){const ee=e.get(z);if(ee.color.copy(z.color).multiplyScalar(z.intensity),ee.distance=z.distance,ee.decay=z.decay,z.castShadow){const q=z.shadow,X=t.get(z);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=re,r.pointShadowMatrix[T]=z.shadow.matrix,I++}r.point[T]=ee,T++}else if(z.isHemisphereLight){const ee=e.get(z);ee.skyColor.copy(z.color).multiplyScalar(K),ee.groundColor.copy(z.groundColor).multiplyScalar(K),r.hemi[_]=ee,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const j=r.hash;(j.directionalLength!==M||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==y||j.hemiLength!==_||j.numDirectionalShadows!==C||j.numPointShadows!==I||j.numSpotShadows!==D||j.numSpotMaps!==U||j.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=D+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=F,j.directionalLength=M,j.pointLength=T,j.spotLength=A,j.rectAreaLength=y,j.hemiLength=_,j.numDirectionalShadows=C,j.numPointShadows=I,j.numSpotShadows=D,j.numSpotMaps=U,j.numLightProbes=F,r.version=Fw++)}function p(m,x){let v=0,S=0,M=0,T=0,A=0;const y=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const I=m[_];if(I.isDirectionalLight){const D=r.directional[v];D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),v++}else if(I.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(I.matrixWorld),o.setFromMatrixPosition(I.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(y),M++}else if(I.isRectAreaLight){const D=r.rectArea[T];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),d.identity(),l.copy(I.matrixWorld),l.premultiply(y),d.extractRotation(l),D.halfWidth.set(I.width*.5,0,0),D.halfHeight.set(0,I.height*.5,0),D.halfWidth.applyMatrix4(d),D.halfHeight.applyMatrix4(d),T++}else if(I.isPointLight){const D=r.point[S];D.position.setFromMatrixPosition(I.matrixWorld),D.position.applyMatrix4(y),S++}else if(I.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(I.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function P0(s){const e=new Bw(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function d(x){r.push(x)}function f(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function zw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new P0(s),e.set(o,[f])):l>=d.length?(f=new P0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Hw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],D0=new ln,Co=new Z,Ld=new Z;function Ww(s,e,t){let r=new Kf;const o=new pt,l=new pt,d=new fn,f=new J_,p=new e1,m={},x=t.maxTextureSize,v={[ls]:ci,[ci]:ls,[Ar]:Ar},S=new ar({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:jw,fragmentShader:Vw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new vi;T.setAttribute("position",new ir(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oe(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let _=this.type;this.render=function(L,F,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||L.length===0)return;L.type===Of&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=ac);const E=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Pr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=_!==this.type;K&&F.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(re=>re.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,re=L.length;ie<re;ie++){const ee=L[ie],q=ee.shadow;if(q===void 0){vt("WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const X=q.getFrameExtents();if(o.multiply(X),l.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,q.mapSize.y=l.y)),q.map===null||K===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ro){if(ee.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new nr(o.x,o.y,{format:Fa,type:Lr,minFilter:qn,magFilter:qn,generateMipmaps:!1}),q.map.texture.name=ee.name+".shadowMap",q.map.depthTexture=new Oo(o.x,o.y,Ji),q.map.depthTexture.name=ee.name+".shadowMapDepth",q.map.depthTexture.format=Ir,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On}else{ee.isPointLight?(q.map=new pg(o.x),q.map.depthTexture=new Z_(o.x,rr)):(q.map=new nr(o.x,o.y),q.map.depthTexture=new Oo(o.x,o.y,rr)),q.map.depthTexture.name=ee.name+".shadowMap",q.map.depthTexture.format=Ir;const ae=s.state.buffers.depth.getReversed();this.type===ac?(q.map.depthTexture.compareFunction=ae?Hf:Gf,q.map.depthTexture.minFilter=qn,q.map.depthTexture.magFilter=qn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=On,q.map.depthTexture.magFilter=On)}q.camera.updateProjectionMatrix()}const he=q.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<he;ae++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(q.map),s.clear());const k=q.getViewport(ae);d.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),$.viewport(d)}if(ee.isPointLight){const k=q.camera,le=q.matrix,Ne=ee.distance||k.far;Ne!==k.far&&(k.far=Ne,k.updateProjectionMatrix()),Co.setFromMatrixPosition(ee.matrixWorld),k.position.copy(Co),Ld.copy(k.position),Ld.add(Gw[ae]),k.up.copy(Hw[ae]),k.lookAt(Ld),k.updateMatrixWorld(),le.makeTranslation(-Co.x,-Co.y,-Co.z),D0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),q._frustum.setFromProjectionMatrix(D0,k.coordinateSystem,k.reversedDepth)}else q.updateMatrices(ee);r=q.getFrustum(),D(F,j,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===Ro&&C(q,j),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(E,R,z)};function C(L,F){const j=e.update(A);S.defines.VSM_SAMPLES!==L.blurSamples&&(S.defines.VSM_SAMPLES=L.blurSamples,M.defines.VSM_SAMPLES=L.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new nr(o.x,o.y,{format:Fa,type:Lr})),S.uniforms.shadow_pass.value=L.map.depthTexture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(F,null,j,S,A,null),M.uniforms.shadow_pass.value=L.mapPass.texture,M.uniforms.resolution.value=L.mapSize,M.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(F,null,j,M,A,null)}function I(L,F,j,E){let R=null;const z=j.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)R=z;else if(R=j.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const $=R.uuid,K=F.uuid;let ie=m[$];ie===void 0&&(ie={},m[$]=ie);let re=ie[K];re===void 0&&(re=R.clone(),ie[K]=re,F.addEventListener("dispose",U)),R=re}if(R.visible=F.visible,R.wireframe=F.wireframe,E===Ro?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:v[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,j.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const $=s.properties.get(R);$.light=j}return R}function D(L,F,j,E,R){if(L.visible===!1)return;if(L.layers.test(F.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&R===Ro)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ie=L.material;if(Array.isArray(ie)){const re=K.groups;for(let ee=0,q=re.length;ee<q;ee++){const X=re[ee],he=ie[X.materialIndex];if(he&&he.visible){const ae=I(L,he,E,R);L.onBeforeShadow(s,L,F,j,K,ae,X),s.renderBufferDirect(j,null,K,ae,L,X),L.onAfterShadow(s,L,F,j,K,ae,X)}}}else if(ie.visible){const re=I(L,ie,E,R);L.onBeforeShadow(s,L,F,j,K,re,null),s.renderBufferDirect(j,null,K,re,L,null),L.onAfterShadow(s,L,F,j,K,re,null)}}const $=L.children;for(let K=0,ie=$.length;K<ie;K++)D($[K],F,j,E,R)}function U(L){L.target.removeEventListener("dispose",U);for(const j in m){const E=m[j],R=L.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}const Xw={[zd]:jd,[Vd]:Wd,[Gd]:Xd,[Ua]:Hd,[jd]:zd,[Wd]:Vd,[Xd]:Gd,[Hd]:Ua};function qw(s,e){function t(){let G=!1;const De=new fn;let Se=null;const Le=new fn(0,0,0,0);return{setMask:function(me){Se!==me&&!G&&(s.colorMask(me,me,me,me),Se=me)},setLocked:function(me){G=me},setClear:function(me,fe,xe,Je,Dt){Dt===!0&&(me*=Je,fe*=Je,xe*=Je),De.set(me,fe,xe,Je),Le.equals(De)===!1&&(s.clearColor(me,fe,xe,Je),Le.copy(De))},reset:function(){G=!1,Se=null,Le.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,Se=null,Le=null,me=null;return{setReversed:function(fe){if(De!==fe){const xe=e.get("EXT_clip_control");fe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),De=fe;const Je=me;me=null,this.setClear(Je)}},getReversed:function(){return De},setTest:function(fe){fe?de(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!G&&(s.depthMask(fe),Se=fe)},setFunc:function(fe){if(De&&(fe=Xw[fe]),Le!==fe){switch(fe){case zd:s.depthFunc(s.NEVER);break;case jd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Ua:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=fe}},setLocked:function(fe){G=fe},setClear:function(fe){me!==fe&&(De&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){G=!1,Se=null,Le=null,me=null,De=!1}}}function o(){let G=!1,De=null,Se=null,Le=null,me=null,fe=null,xe=null,Je=null,Dt=null;return{setTest:function(bt){G||(bt?de(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(bt){De!==bt&&!G&&(s.stencilMask(bt),De=bt)},setFunc:function(bt,mn,bn){(Se!==bt||Le!==mn||me!==bn)&&(s.stencilFunc(bt,mn,bn),Se=bt,Le=mn,me=bn)},setOp:function(bt,mn,bn){(fe!==bt||xe!==mn||Je!==bn)&&(s.stencilOp(bt,mn,bn),fe=bt,xe=mn,Je=bn)},setLocked:function(bt){G=bt},setClear:function(bt){Dt!==bt&&(s.clearStencil(bt),Dt=bt)},reset:function(){G=!1,De=null,Se=null,Le=null,me=null,fe=null,xe=null,Je=null,Dt=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let x={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,I=null,D=null,U=null,L=null,F=new Ct(0,0,0),j=0,E=!1,R=null,z=null,$=null,K=null,ie=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=q>=2);let he=null,ae={};const k=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ne=new fn().fromArray(k),Xe=new fn().fromArray(le);function qe(G,De,Se,Le){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(G,fe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<Se;xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(De+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const te={};te[s.TEXTURE_2D]=qe(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=qe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=qe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=qe(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(s.DEPTH_TEST),d.setFunc(Ua),lt(!1),tt(Pm),de(s.CULL_FACE),At(Pr);function de(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Me(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Fe(G,De){return v[G]!==De?(s.bindFramebuffer(G,De),v[G]=De,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(G,De){let Se=M,Le=!1;if(G){Se=S.get(De),Se===void 0&&(Se=[],S.set(De,Se));const me=G.textures;if(Se.length!==me.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,xe=me.length;fe<xe;fe++)Se[fe]=s.COLOR_ATTACHMENT0+fe;Se.length=me.length,Le=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Le=!0);Le&&s.drawBuffers(Se)}function yt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const Yt={[Fs]:s.FUNC_ADD,[Xv]:s.FUNC_SUBTRACT,[qv]:s.FUNC_REVERSE_SUBTRACT};Yt[Yv]=s.MIN,Yt[$v]=s.MAX;const _t={[Kv]:s.ZERO,[Zv]:s.ONE,[Qv]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[r_]:s.SRC_ALPHA_SATURATE,[n_]:s.DST_COLOR,[e_]:s.DST_ALPHA,[Jv]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[i_]:s.ONE_MINUS_DST_COLOR,[t_]:s.ONE_MINUS_DST_ALPHA,[s_]:s.CONSTANT_COLOR,[a_]:s.ONE_MINUS_CONSTANT_COLOR,[o_]:s.CONSTANT_ALPHA,[l_]:s.ONE_MINUS_CONSTANT_ALPHA};function At(G,De,Se,Le,me,fe,xe,Je,Dt,bt){if(G===Pr){A===!0&&(Me(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),G!==Wv){if(G!==y||bt!==E){if((_!==Fs||D!==Fs)&&(s.blendEquation(s.FUNC_ADD),_=Fs,D=Fs),bt)switch(G){case La:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFunc(s.ONE,s.ONE);break;case Lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Im:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",G);break}else switch(G){case La:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Lm:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Im:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",G);break}C=null,I=null,U=null,L=null,F.set(0,0,0),j=0,y=G,E=bt}return}me=me||De,fe=fe||Se,xe=xe||Le,(De!==_||me!==D)&&(s.blendEquationSeparate(Yt[De],Yt[me]),_=De,D=me),(Se!==C||Le!==I||fe!==U||xe!==L)&&(s.blendFuncSeparate(_t[Se],_t[Le],_t[fe],_t[xe]),C=Se,I=Le,U=fe,L=xe),(Je.equals(F)===!1||Dt!==j)&&(s.blendColor(Je.r,Je.g,Je.b,Dt),F.copy(Je),j=Dt),y=G,E=!1}function Ot(G,De){G.side===Ar?Me(s.CULL_FACE):de(s.CULL_FACE);let Se=G.side===ci;De&&(Se=!Se),lt(Se),G.blending===La&&G.transparent===!1?At(Pr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const Le=G.stencilWrite;f.setTest(Le),Le&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$e(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){R!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),R=G)}function tt(G){G!==Gv?(de(s.CULL_FACE),G!==z&&(G===Pm?s.cullFace(s.BACK):G===Hv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),z=G}function P(G){G!==$&&(ee&&s.lineWidth(G),$=G)}function $e(G,De,Se){G?(de(s.POLYGON_OFFSET_FILL),(K!==De||ie!==Se)&&(s.polygonOffset(De,Se),K=De,ie=Se)):Me(s.POLYGON_OFFSET_FILL)}function mt(G){G?de(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function rt(G){G===void 0&&(G=s.TEXTURE0+re-1),he!==G&&(s.activeTexture(G),he=G)}function Te(G,De,Se){Se===void 0&&(he===null?Se=s.TEXTURE0+re-1:Se=he);let Le=ae[Se];Le===void 0&&(Le={type:void 0,texture:void 0},ae[Se]=Le),(Le.type!==G||Le.texture!==De)&&(he!==Se&&(s.activeTexture(Se),he=Se),s.bindTexture(G,De||te[G]),Le.type=G,Le.texture=De)}function O(){const G=ae[he];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function pe(){try{s.texSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ze(){try{s.compressedTexSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ee(){try{s.texStorage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function He(){try{s.texStorage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function at(){try{s.texImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ae(G){Ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function Ve(G){Xe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Xe.copy(G))}function je(G,De){let Se=m.get(De);Se===void 0&&(Se=new WeakMap,m.set(De,Se));let Le=Se.get(G);Le===void 0&&(Le=s.getUniformBlockIndex(De,G.name),Se.set(G,Le))}function we(G,De){const Le=m.get(De).get(G);p.get(De)!==Le&&(s.uniformBlockBinding(De,Le,G.__bindingPointIndex),p.set(De,Le))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},he=null,ae={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,I=null,D=null,U=null,L=null,F=new Ct(0,0,0),j=0,E=!1,R=null,z=null,$=null,K=null,ie=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:de,disable:Me,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:yt,setBlending:At,setMaterial:Ot,setFlipSided:lt,setCullFace:tt,setLineWidth:P,setPolygonOffset:$e,setScissorTest:mt,activeTexture:rt,bindTexture:Te,unbindTexture:O,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:at,texImage3D:_e,updateUBOMapping:je,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:He,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:ze,scissor:Ae,viewport:Ve,reset:ht}}function Yw(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new pt,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,w){return M?new OffscreenCanvas(O,w):Io("canvas")}function A(O,w,H){let pe=1;const ge=Te(O);if((ge.width>H||ge.height>H)&&(pe=H/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const ue=Math.floor(pe*ge.width),ze=Math.floor(pe*ge.height);v===void 0&&(v=T(ue,ze));const Ee=w?T(ue,ze):v;return Ee.width=ue,Ee.height=ze,Ee.getContext("2d").drawImage(O,0,0,ue,ze),vt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+ze+")."),Ee}else return"data"in O&&vt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),O;return O}function y(O){return O.generateMipmaps}function _(O){s.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?s.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function I(O,w,H,pe,ge=!1){if(O!==null){if(s[O]!==void 0)return s[O];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let ue=w;if(w===s.RED&&(H===s.FLOAT&&(ue=s.R32F),H===s.HALF_FLOAT&&(ue=s.R16F),H===s.UNSIGNED_BYTE&&(ue=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.R8UI),H===s.UNSIGNED_SHORT&&(ue=s.R16UI),H===s.UNSIGNED_INT&&(ue=s.R32UI),H===s.BYTE&&(ue=s.R8I),H===s.SHORT&&(ue=s.R16I),H===s.INT&&(ue=s.R32I)),w===s.RG&&(H===s.FLOAT&&(ue=s.RG32F),H===s.HALF_FLOAT&&(ue=s.RG16F),H===s.UNSIGNED_BYTE&&(ue=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RG8UI),H===s.UNSIGNED_SHORT&&(ue=s.RG16UI),H===s.UNSIGNED_INT&&(ue=s.RG32UI),H===s.BYTE&&(ue=s.RG8I),H===s.SHORT&&(ue=s.RG16I),H===s.INT&&(ue=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),H===s.UNSIGNED_INT&&(ue=s.RGB32UI),H===s.BYTE&&(ue=s.RGB8I),H===s.SHORT&&(ue=s.RGB16I),H===s.INT&&(ue=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),H===s.UNSIGNED_INT&&(ue=s.RGBA32UI),H===s.BYTE&&(ue=s.RGBA8I),H===s.SHORT&&(ue=s.RGBA16I),H===s.INT&&(ue=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),w===s.RGBA){const ze=ge?gc:jt.getTransfer(pe);H===s.FLOAT&&(ue=s.RGBA32F),H===s.HALF_FLOAT&&(ue=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ue=ze===Xt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function D(O,w){let H;return O?w===null||w===rr||w===Lo?H=s.DEPTH24_STENCIL8:w===Ji?H=s.DEPTH32F_STENCIL8:w===Do&&(H=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===rr||w===Lo?H=s.DEPTH_COMPONENT24:w===Ji?H=s.DEPTH_COMPONENT32F:w===Do&&(H=s.DEPTH_COMPONENT16),H}function U(O,w){return y(O)===!0||O.isFramebufferTexture&&O.minFilter!==On&&O.minFilter!==qn?Math.log2(Math.max(w.width,w.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?w.mipmaps.length:1}function L(O){const w=O.target;w.removeEventListener("dispose",L),j(w),w.isVideoTexture&&x.delete(w)}function F(O){const w=O.target;w.removeEventListener("dispose",F),R(w)}function j(O){const w=r.get(O);if(w.__webglInit===void 0)return;const H=O.source,pe=S.get(H);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&E(O),Object.keys(pe).length===0&&S.delete(H)}r.remove(O)}function E(O){const w=r.get(O);s.deleteTexture(w.__webglTexture);const H=O.source,pe=S.get(H);delete pe[w.__cacheKey],d.memory.textures--}function R(O){const w=r.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),r.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=O.textures;for(let pe=0,ge=H.length;pe<ge;pe++){const ue=r.get(H[pe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(H[pe])}r.remove(O)}let z=0;function $(){z=0}function K(){const O=z;return O>=o.maxTextures&&vt("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+o.maxTextures),z+=1,O}function ie(O){const w=[];return w.push(O.wrapS),w.push(O.wrapT),w.push(O.wrapR||0),w.push(O.magFilter),w.push(O.minFilter),w.push(O.anisotropy),w.push(O.internalFormat),w.push(O.format),w.push(O.type),w.push(O.generateMipmaps),w.push(O.premultiplyAlpha),w.push(O.flipY),w.push(O.unpackAlignment),w.push(O.colorSpace),w.join()}function re(O,w){const H=r.get(O);if(O.isVideoTexture&&mt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&H.__version!==O.version){const pe=O.image;if(pe===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,O,w);return}}else O.isExternalTexture&&(H.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function ee(O,w){const H=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){te(H,O,w);return}else O.isExternalTexture&&(H.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function q(O,w){const H=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&H.__version!==O.version){te(H,O,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(O,w){const H=r.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&H.__version!==O.version){de(H,O,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const he={[$d]:s.REPEAT,[Rr]:s.CLAMP_TO_EDGE,[Kd]:s.MIRRORED_REPEAT},ae={[On]:s.NEAREST,[d_]:s.NEAREST_MIPMAP_NEAREST,[kl]:s.NEAREST_MIPMAP_LINEAR,[qn]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},k={[p_]:s.NEVER,[__]:s.ALWAYS,[m_]:s.LESS,[Gf]:s.LEQUAL,[g_]:s.EQUAL,[Hf]:s.GEQUAL,[x_]:s.GREATER,[v_]:s.NOTEQUAL};function le(O,w){if(w.type===Ji&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===qn||w.magFilter===nd||w.magFilter===kl||w.magFilter===Bs||w.minFilter===qn||w.minFilter===nd||w.minFilter===kl||w.minFilter===Bs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(O,s.TEXTURE_WRAP_S,he[w.wrapS]),s.texParameteri(O,s.TEXTURE_WRAP_T,he[w.wrapT]),(O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY)&&s.texParameteri(O,s.TEXTURE_WRAP_R,he[w.wrapR]),s.texParameteri(O,s.TEXTURE_MAG_FILTER,ae[w.magFilter]),s.texParameteri(O,s.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(s.texParameteri(O,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(O,s.TEXTURE_COMPARE_FUNC,k[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===On||w.minFilter!==kl&&w.minFilter!==Bs||w.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(O,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(O,w){let H=!1;O.__webglInit===void 0&&(O.__webglInit=!0,w.addEventListener("dispose",L));const pe=w.source;let ge=S.get(pe);ge===void 0&&(ge={},S.set(pe,ge));const ue=ie(w);if(ue!==O.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,H=!0),ge[ue].usedTimes++;const ze=ge[O.__cacheKey];ze!==void 0&&(ge[O.__cacheKey].usedTimes--,ze.usedTimes===0&&E(w)),O.__cacheKey=ue,O.__webglTexture=ge[ue].texture}return H}function Xe(O,w,H){return Math.floor(Math.floor(O/H)/w)}function qe(O,w,H,pe){const ue=O.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,pe,w.data);else{ue.sort((_e,Ae)=>_e.start-Ae.start);let ze=0;for(let _e=1;_e<ue.length;_e++){const Ae=ue[ze],Ve=ue[_e],je=Ae.start+Ae.count,we=Xe(Ve.start,w.width,4),ht=Xe(Ae.start,w.width,4);Ve.start<=je+1&&we===ht&&Xe(Ve.start+Ve.count-1,w.width,4)===we?Ae.count=Math.max(Ae.count,Ve.start+Ve.count-Ae.start):(++ze,ue[ze]=Ve)}ue.length=ze+1;const Ee=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let _e=0,Ae=ue.length;_e<Ae;_e++){const Ve=ue[_e],je=Math.floor(Ve.start/4),we=Math.ceil(Ve.count/4),ht=je%w.width,G=Math.floor(je/w.width),De=we,Se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,ht,G,De,Se,H,pe,w.data)}O.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ee),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function te(O,w,H){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ne(O,w),ue=w.source;t.bindTexture(pe,O.__webglTexture,s.TEXTURE0+H);const ze=r.get(ue);if(ue.version!==ze.__version||ge===!0){t.activeTexture(s.TEXTURE0+H);const Ee=jt.getPrimaries(jt.workingColorSpace),He=w.colorSpace===as?null:jt.getPrimaries(w.colorSpace),at=w.colorSpace===as||Ee===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _e=A(w.image,!1,o.maxTextureSize);_e=rt(w,_e);const Ae=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type);let je=I(w.internalFormat,Ae,Ve,w.colorSpace,w.isVideoTexture);le(pe,w);let we;const ht=w.mipmaps,G=w.isVideoTexture!==!0,De=ze.__version===void 0||ge===!0,Se=ue.dataReady,Le=U(w,_e);if(w.isDepthTexture)je=D(w.format===zs,w.type),De&&(G?t.texStorage2D(s.TEXTURE_2D,1,je,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,je,_e.width,_e.height,0,Ae,Ve,null));else if(w.isDataTexture)if(ht.length>0){G&&De&&t.texStorage2D(s.TEXTURE_2D,Le,je,ht[0].width,ht[0].height);for(let me=0,fe=ht.length;me<fe;me++)we=ht[me],G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Ae,Ve,we.data):t.texImage2D(s.TEXTURE_2D,me,je,we.width,we.height,0,Ae,Ve,we.data);w.generateMipmaps=!1}else G?(De&&t.texStorage2D(s.TEXTURE_2D,Le,je,_e.width,_e.height),Se&&qe(w,_e,Ae,Ve)):t.texImage2D(s.TEXTURE_2D,0,je,_e.width,_e.height,0,Ae,Ve,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,je,ht[0].width,ht[0].height,_e.depth);for(let me=0,fe=ht.length;me<fe;me++)if(we=ht[me],w.format!==Gi)if(Ae!==null)if(G){if(Se)if(w.layerUpdates.size>0){const xe=c0(we.width,we.height,w.format,w.type);for(const Je of w.layerUpdates){const Dt=we.data.subarray(Je*xe/we.data.BYTES_PER_ELEMENT,(Je+1)*xe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Je,we.width,we.height,1,Ae,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Ae,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,je,we.width,we.height,_e.depth,0,we.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Ae,Ve,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,je,we.width,we.height,_e.depth,0,Ae,Ve,we.data)}else{G&&De&&t.texStorage2D(s.TEXTURE_2D,Le,je,ht[0].width,ht[0].height);for(let me=0,fe=ht.length;me<fe;me++)we=ht[me],w.format!==Gi?Ae!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Ae,we.data):t.compressedTexImage2D(s.TEXTURE_2D,me,je,we.width,we.height,0,we.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Ae,Ve,we.data):t.texImage2D(s.TEXTURE_2D,me,je,we.width,we.height,0,Ae,Ve,we.data)}else if(w.isDataArrayTexture)if(G){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,je,_e.width,_e.height,_e.depth),Se)if(w.layerUpdates.size>0){const me=c0(_e.width,_e.height,w.format,w.type);for(const fe of w.layerUpdates){const xe=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,Ae,Ve,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ve,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,je,_e.width,_e.height,_e.depth,0,Ae,Ve,_e.data);else if(w.isData3DTexture)G?(De&&t.texStorage3D(s.TEXTURE_3D,Le,je,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ae,Ve,_e.data)):t.texImage3D(s.TEXTURE_3D,0,je,_e.width,_e.height,_e.depth,0,Ae,Ve,_e.data);else if(w.isFramebufferTexture){if(De)if(G)t.texStorage2D(s.TEXTURE_2D,Le,je,_e.width,_e.height);else{let me=_e.width,fe=_e.height;for(let xe=0;xe<Le;xe++)t.texImage2D(s.TEXTURE_2D,xe,je,me,fe,0,Ae,Ve,null),me>>=1,fe>>=1}}else if(ht.length>0){if(G&&De){const me=Te(ht[0]);t.texStorage2D(s.TEXTURE_2D,Le,je,me.width,me.height)}for(let me=0,fe=ht.length;me<fe;me++)we=ht[me],G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Ae,Ve,we):t.texImage2D(s.TEXTURE_2D,me,je,Ae,Ve,we);w.generateMipmaps=!1}else if(G){if(De){const me=Te(_e);t.texStorage2D(s.TEXTURE_2D,Le,je,me.width,me.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Ve,_e)}else t.texImage2D(s.TEXTURE_2D,0,je,Ae,Ve,_e);y(w)&&_(pe),ze.__version=ue.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function de(O,w,H){if(w.image.length!==6)return;const pe=Ne(O,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+H);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(s.TEXTURE0+H);const ze=jt.getPrimaries(jt.workingColorSpace),Ee=w.colorSpace===as?null:jt.getPrimaries(w.colorSpace),He=w.colorSpace===as||ze===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Ae=[];for(let fe=0;fe<6;fe++)!at&&!_e?Ae[fe]=A(w.image[fe],!0,o.maxCubemapSize):Ae[fe]=_e?w.image[fe].image:w.image[fe],Ae[fe]=rt(w,Ae[fe]);const Ve=Ae[0],je=l.convert(w.format,w.colorSpace),we=l.convert(w.type),ht=I(w.internalFormat,je,we,w.colorSpace),G=w.isVideoTexture!==!0,De=ue.__version===void 0||pe===!0,Se=ge.dataReady;let Le=U(w,Ve);le(s.TEXTURE_CUBE_MAP,w);let me;if(at){G&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,Ve.width,Ve.height);for(let fe=0;fe<6;fe++){me=Ae[fe].mipmaps;for(let xe=0;xe<me.length;xe++){const Je=me[xe];w.format!==Gi?je!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Je.width,Je.height,je,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,ht,Je.width,Je.height,0,Je.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Je.width,Je.height,je,we,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,ht,Je.width,Je.height,0,je,we,Je.data)}}}else{if(me=w.mipmaps,G&&De){me.length>0&&Le++;const fe=Te(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,ht,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ae[fe].width,Ae[fe].height,je,we,Ae[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,Ae[fe].width,Ae[fe].height,0,je,we,Ae[fe].data);for(let xe=0;xe<me.length;xe++){const Dt=me[xe].image[fe].image;G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,Dt.width,Dt.height,je,we,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,ht,Dt.width,Dt.height,0,je,we,Dt.data)}}else{G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,je,we,Ae[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,je,we,Ae[fe]);for(let xe=0;xe<me.length;xe++){const Je=me[xe];G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,je,we,Je.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,ht,je,we,Je.image[fe])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}O.__version=w.version}function Me(O,w,H,pe,ge,ue){const ze=l.convert(H.format,H.colorSpace),Ee=l.convert(H.type),He=I(H.internalFormat,ze,Ee,H.colorSpace),at=r.get(w),_e=r.get(H);if(_e.__renderTarget=w,!at.__hasExternalTextures){const Ae=Math.max(1,w.width>>ue),Ve=Math.max(1,w.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,He,Ae,Ve,w.depth,0,ze,Ee,null):t.texImage2D(ge,ue,He,Ae,Ve,0,ze,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,O),$e(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,_e.__webglTexture,0,P(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,_e.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(O,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,O),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=D(w.stencilBuffer,ge),ze=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$e(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(w),ue,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(w),ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ze,s.RENDERBUFFER,O)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],ze=l.convert(ue.format,ue.colorSpace),Ee=l.convert(ue.type),He=I(ue.internalFormat,ze,Ee,ue.colorSpace);$e(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,P(w),He,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,P(w),He,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,He,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(O,w,H){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,O),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",L)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),le(s.TEXTURE_CUBE_MAP,w.depthTexture);const at=l.convert(w.depthTexture.format),_e=l.convert(w.depthTexture.type);let Ae;w.depthTexture.format===Ir?Ae=s.DEPTH_COMPONENT24:w.depthTexture.format===zs&&(Ae=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ae,w.width,w.height,0,at,_e,null)}}else re(w.depthTexture,0);const ue=ge.__webglTexture,ze=P(w),Ee=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,He=w.depthTexture.format===zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ir)$e(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ee,ue,0,ze):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ee,ue,0);else if(w.depthTexture.format===zs)$e(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ee,ue,0,ze):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ee,ue,0);else throw new Error("Unknown depthTexture format")}function yt(O){const w=r.get(O),H=O.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==O.depthTexture){const pe=O.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(O.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let pe=0;pe<6;pe++)Pe(w.__webglFramebuffer[pe],O,pe);else{const pe=O.texture.mipmaps;pe&&pe.length>0?Pe(w.__webglFramebuffer[0],O,0):Pe(w.__webglFramebuffer,O,0)}else if(H){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),Fe(w.__webglDepthbuffer[pe],O,!1);else{const ge=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else{const pe=O.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Fe(w.__webglDepthbuffer,O,!1);else{const ge=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(O,w,H){const pe=r.get(O);w!==void 0&&Me(pe.__webglFramebuffer,O,O.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&yt(O)}function _t(O){const w=O.texture,H=r.get(O),pe=r.get(w);O.addEventListener("dispose",F);const ge=O.textures,ue=O.isWebGLCubeRenderTarget===!0,ze=ge.length>1;if(ze||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,d.memory.textures++),ue){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let He=0;He<w.mipmaps.length;He++)H.__webglFramebuffer[Ee][He]=s.createFramebuffer()}else H.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(ze)for(let Ee=0,He=ge.length;Ee<He;Ee++){const at=r.get(ge[Ee]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),d.memory.textures++)}if(O.samples>0&&$e(O)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ge.length;Ee++){const He=ge[Ee];H.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const at=l.convert(He.format,He.colorSpace),_e=l.convert(He.type),Ae=I(He.internalFormat,at,_e,He.colorSpace,O.isXRRenderTarget===!0),Ve=P(O);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Ae,O.width,O.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),O.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),le(s.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Me(H.__webglFramebuffer[Ee][He],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He);else Me(H.__webglFramebuffer[Ee],O,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);y(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let Ee=0,He=ge.length;Ee<He;Ee++){const at=ge[Ee],_e=r.get(at);let Ae=s.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ae=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,_e.__webglTexture),le(Ae,at),Me(H.__webglFramebuffer,O,at,s.COLOR_ATTACHMENT0+Ee,Ae,0),y(at)&&_(Ae)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Ee=O.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),le(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Me(H.__webglFramebuffer[He],O,w,s.COLOR_ATTACHMENT0,Ee,He);else Me(H.__webglFramebuffer,O,w,s.COLOR_ATTACHMENT0,Ee,0);y(w)&&_(Ee),t.unbindTexture()}O.depthBuffer&&yt(O)}function At(O){const w=O.textures;for(let H=0,pe=w.length;H<pe;H++){const ge=w[H];if(y(ge)){const ue=C(O),ze=r.get(ge).__webglTexture;t.bindTexture(ue,ze),_(ue),t.unbindTexture()}}}const Ot=[],lt=[];function tt(O){if(O.samples>0){if($e(O)===!1){const w=O.textures,H=O.width,pe=O.height;let ge=s.COLOR_BUFFER_BIT;const ue=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ze=r.get(O),Ee=w.length>1;if(Ee)for(let at=0;at<w.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const He=O.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let at=0;at<w.length;at++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ze.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,H,pe,0,0,H,pe,ge,s.NEAREST),p===!0&&(Ot.length=0,lt.length=0,Ot.push(s.COLOR_ATTACHMENT0+at),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Ot.push(ue),lt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ot))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let at=0;at<w.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,ze.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ze.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const w=O.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function P(O){return Math.min(o.maxSamples,O.samples)}function $e(O){const w=r.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function mt(O){const w=d.render.frame;x.get(O)!==w&&(x.set(O,w),O.update())}function rt(O,w){const H=O.colorSpace,pe=O.format,ge=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||H!==ka&&H!==as&&(jt.getTransfer(H)===Xt?(pe!==Gi||ge!==xi)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",H)),w}function Te(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=Yt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $w(s,e){function t(r,o=as){let l;const d=jt.getTransfer(o);if(r===xi)return s.UNSIGNED_BYTE;if(r===kf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Bf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Q0)return s.BYTE;if(r===J0)return s.SHORT;if(r===Do)return s.UNSIGNED_SHORT;if(r===Ff)return s.INT;if(r===rr)return s.UNSIGNED_INT;if(r===Ji)return s.FLOAT;if(r===Lr)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===Gi)return s.RGBA;if(r===Ir)return s.DEPTH_COMPONENT;if(r===zs)return s.DEPTH_STENCIL;if(r===rg)return s.RED;if(r===zf)return s.RED_INTEGER;if(r===Fa)return s.RG;if(r===jf)return s.RG_INTEGER;if(r===Vf)return s.RGBA_INTEGER;if(r===oc||r===lc||r===cc||r===uc)if(d===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===oc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===oc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===tf||r===nf)return d===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sf)return l.COMPRESSED_R11_EAC;if(r===af)return l.COMPRESSED_SIGNED_R11_EAC;if(r===of)return l.COMPRESSED_RG11_EAC;if(r===lf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===cf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ff)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wf||r===bf||r===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wf)return d===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tf||r===Cf||r===Af||r===Rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Kw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new xg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ar({vertexShader:Kw,fragmentShader:Zw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Xn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jw extends Gs{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,x=null,v=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new Qw,_={},C=t.getContextAttributes();let I=null,D=null;const U=[],L=[],F=new pt;let j=null;const E=new Qn;E.viewport=new fn;const R=new Qn;R.viewport=new fn;const z=[E,R],$=new o1;let K=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=U[te];return de===void 0&&(de=new bd,U[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=U[te];return de===void 0&&(de=new bd,U[te]=de),de.getGripSpace()},this.getHand=function(te){let de=U[te];return de===void 0&&(de=new bd,U[te]=de),de.getHandSpace()};function re(te){const de=L.indexOf(te.inputSource);if(de===-1)return;const Me=U[de];Me!==void 0&&(Me.update(te.inputSource,te.frame,m||d),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",q);for(let te=0;te<U.length;te++){const de=L[te];de!==null&&(L[te]=null,U[te].disconnect(de))}K=null,ie=null,y.reset();for(const te in _)delete _[te];e.setRenderTarget(I),M=null,S=null,v=null,o=null,D=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(j),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(I=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(F),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,Pe=null;C.depth&&(Pe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=C.stencil?zs:Ir,Fe=C.stencil?Lo:rr);const yt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};v=this.getBinding(),S=v.createProjectionLayer(yt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),D=new nr(S.textureWidth,S.textureHeight,{format:Gi,type:xi,depthTexture:new Oo(S.textureWidth,S.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new nr(M.framebufferWidth,M.framebufferHeight,{format:Gi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),qe.setContext(o),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(te){for(let de=0;de<te.removed.length;de++){const Me=te.removed[de],Fe=L.indexOf(Me);Fe>=0&&(L[Fe]=null,U[Fe].disconnect(Me))}for(let de=0;de<te.added.length;de++){const Me=te.added[de];let Fe=L.indexOf(Me);if(Fe===-1){for(let yt=0;yt<U.length;yt++)if(yt>=L.length){L.push(Me),Fe=yt;break}else if(L[yt]===null){L[yt]=Me,Fe=yt;break}if(Fe===-1)break}const Pe=U[Fe];Pe&&Pe.connect(Me)}}const X=new Z,he=new Z;function ae(te,de,Me){X.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const Fe=X.distanceTo(he),Pe=de.projectionMatrix.elements,yt=Me.projectionMatrix.elements,Yt=Pe[14]/(Pe[10]-1),_t=Pe[14]/(Pe[10]+1),At=(Pe[9]+1)/Pe[5],Ot=(Pe[9]-1)/Pe[5],lt=(Pe[8]-1)/Pe[0],tt=(yt[8]+1)/yt[0],P=Yt*lt,$e=Yt*tt,mt=Fe/(-lt+tt),rt=mt*-lt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(rt),te.translateZ(mt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Te=Yt+mt,O=_t+mt,w=P-rt,H=$e+(Fe-rt),pe=At*_t/O*Te,ge=Ot*_t/O*Te;te.projectionMatrix.makePerspective(w,H,pe,ge,Te,O),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function k(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let de=te.near,Me=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),$.near=R.near=E.near=de,$.far=R.far=E.far=Me,(K!==$.near||ie!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,ie=$.far),$.layers.mask=te.layers.mask|6,E.layers.mask=$.layers.mask&3,R.layers.mask=$.layers.mask&5;const Fe=te.parent,Pe=$.cameras;k($,Fe);for(let yt=0;yt<Pe.length;yt++)k(Pe[yt],Fe);Pe.length===2?ae($,E,R):$.projectionMatrix.copy(E.projectionMatrix),le(te,$,Fe)};function le(te,de,Me){Me===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=vc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(te){p=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(te){return _[te]};let Ne=null;function Xe(te,de){if(x=de.getViewerPose(m||d),T=de,x!==null){const Me=x.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Fe=!1;Me.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let _t=0;_t<Me.length;_t++){const At=Me[_t];let Ot=null;if(M!==null)Ot=M.getViewport(At);else{const tt=v.getViewSubImage(S,At);Ot=tt.viewport,_t===0&&(e.setRenderTargetTextures(D,tt.colorTexture,tt.depthStencilTexture),e.setRenderTarget(D))}let lt=z[_t];lt===void 0&&(lt=new Qn,lt.layers.enable(_t),lt.viewport=new fn,z[_t]=lt),lt.matrix.fromArray(At.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(At.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),_t===0&&($.matrix.copy(lt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(lt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const _t=v.getDepthInformation(Me[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,o.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let _t=0;_t<Me.length;_t++){const At=Me[_t].camera;if(At){let Ot=_[At];Ot||(Ot=new xg,_[At]=Ot);const lt=v.getCameraImage(At);Ot.sourceTexture=lt}}}}for(let Me=0;Me<U.length;Me++){const Fe=L[Me],Pe=U[Me];Fe!==null&&Pe!==void 0&&Pe.update(Fe,de,m||d)}Ne&&Ne(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const qe=new Sg;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}}const Os=new sr,eb=new ln;function tb(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,dg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,I,D){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),x(y,_)):_.isMeshStandardMaterial?(l(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,D)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,C,I):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ci&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ci&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),I=C.envMap,D=C.envMapRotation;I&&(y.envMap.value=I,Os.copy(D),Os.x*=-1,Os.y*=-1,Os.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(eb.makeRotationFromEuler(Os)),y.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,C,I){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=I*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ci&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nb(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,I){const D=I.program;r.uniformBlockBinding(C,D)}function m(C,I){let D=o[C.id];D===void 0&&(T(C),D=x(C),o[C.id]=D,C.addEventListener("dispose",y));const U=I.program;r.updateUBOMapping(C,U);const L=e.render.frame;l[C.id]!==L&&(S(C),l[C.id]=L)}function x(C){const I=v();C.__bindingPointIndex=I;const D=s.createBuffer(),U=C.__size,L=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,D),D}function v(){for(let C=0;C<f;C++)if(d.indexOf(C)===-1)return d.push(C),C;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(C){const I=o[C.id],D=C.uniforms,U=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let L=0,F=D.length;L<F;L++){const j=Array.isArray(D[L])?D[L]:[D[L]];for(let E=0,R=j.length;E<R;E++){const z=j[E];if(M(z,L,E,U)===!0){const $=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ie=0;for(let re=0;re<K.length;re++){const ee=K[re],q=A(ee);typeof ee=="number"||typeof ee=="boolean"?(z.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+ie,z.__data)):ee.isMatrix3?(z.__data[0]=ee.elements[0],z.__data[1]=ee.elements[1],z.__data[2]=ee.elements[2],z.__data[3]=0,z.__data[4]=ee.elements[3],z.__data[5]=ee.elements[4],z.__data[6]=ee.elements[5],z.__data[7]=0,z.__data[8]=ee.elements[6],z.__data[9]=ee.elements[7],z.__data[10]=ee.elements[8],z.__data[11]=0):(ee.toArray(z.__data,ie),ie+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,I,D,U){const L=C.value,F=I+"_"+D;if(U[F]===void 0)return typeof L=="number"||typeof L=="boolean"?U[F]=L:U[F]=L.clone(),!0;{const j=U[F];if(typeof L=="number"||typeof L=="boolean"){if(j!==L)return U[F]=L,!0}else if(j.equals(L)===!1)return j.copy(L),!0}return!1}function T(C){const I=C.uniforms;let D=0;const U=16;for(let F=0,j=I.length;F<j;F++){const E=Array.isArray(I[F])?I[F]:[I[F]];for(let R=0,z=E.length;R<z;R++){const $=E[R],K=Array.isArray($.value)?$.value:[$.value];for(let ie=0,re=K.length;ie<re;ie++){const ee=K[ie],q=A(ee),X=D%U,he=X%q.boundary,ae=X+he;D+=he,ae!==0&&U-ae<q.storage&&(D+=U-ae),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=D,D+=q.storage}}}const L=D%U;return L>0&&(D+=U-L),C.__size=D,C.__cache={},this}function A(C){const I={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(I.boundary=4,I.storage=4):C.isVector2?(I.boundary=8,I.storage=8):C.isVector3||C.isColor?(I.boundary=16,I.storage=12):C.isVector4?(I.boundary=16,I.storage=16):C.isMatrix3?(I.boundary=48,I.storage=48):C.isMatrix4?(I.boundary=64,I.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):vt("WebGLRenderer: Unsupported uniform value type.",C),I}function y(C){const I=C.target;I.removeEventListener("dispose",y);const D=d.indexOf(I.__bindingPointIndex);d.splice(D,1),s.deleteBuffer(o[I.id]),delete o[I.id],delete l[I.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:p,update:m,dispose:_}}const ib=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function rb(){return Zi===null&&(Zi=new q_(ib,16,16,Fa,Lr),Zi.name="DFG_LUT",Zi.minFilter=qn,Zi.magFilter=qn,Zi.wrapS=Rr,Zi.wrapT=Rr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class Tg{constructor(e={}){const{canvas:t=y_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const A=M,y=new Set([Vf,jf,zf]),_=new Set([xi,rr,Do,Lo,kf,Bf]),C=new Uint32Array(4),I=new Int32Array(4);let D=null,U=null;const L=[],F=[];let j=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=tr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let R=!1;this._outputColorSpace=Un;let z=0,$=0,K=null,ie=-1,re=null;const ee=new fn,q=new fn;let X=null;const he=new Ct(0);let ae=0,k=t.width,le=t.height,Ne=1,Xe=null,qe=null;const te=new fn(0,0,k,le),de=new fn(0,0,k,le);let Me=!1;const Fe=new Kf;let Pe=!1,yt=!1;const Yt=new ln,_t=new Z,At=new fn,Ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function tt(){return K===null?Ne:1}let P=r;function $e(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Uf}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),P===null){const Y="webgl2";if(P=$e(Y,N),P===null)throw $e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw zt("WebGLRenderer: "+N.message),N}let mt,rt,Te,O,w,H,pe,ge,ue,ze,Ee,He,at,_e,Ae,Ve,je,we,ht,G,De,Se,Le,me;function fe(){mt=new rM(P),mt.init(),Se=new $w(P,mt),rt=new $S(P,mt,e,Se),Te=new qw(P,mt),rt.reversedDepthBuffer&&S&&Te.buffers.depth.setReversed(!0),O=new oM(P),w=new Dw,H=new Yw(P,mt,Te,w,rt,Se,O),pe=new ZS(E),ge=new iM(E),ue=new d1(P),Le=new qS(P,ue),ze=new sM(P,ue,O,Le),Ee=new cM(P,ze,ue,O),ht=new lM(P,rt,H),Ve=new KS(w),He=new Pw(E,pe,ge,mt,rt,Le,Ve),at=new tb(E,w),_e=new Iw,Ae=new zw(mt),we=new XS(E,pe,ge,Te,Ee,T,p),je=new Ww(E,Ee,rt),me=new nb(P,O,rt,Te),G=new YS(P,mt,O),De=new aM(P,mt,O),O.programs=He.programs,E.capabilities=rt,E.extensions=mt,E.properties=w,E.renderLists=_e,E.shadowMap=je,E.state=Te,E.info=O}fe(),A!==xi&&(j=new dM(A,t.width,t.height,o,l));const xe=new Jw(E,P);this.xr=xe,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const N=mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(N){N!==void 0&&(Ne=N,this.setSize(k,le,!1))},this.getSize=function(N){return N.set(k,le)},this.setSize=function(N,Y,oe=!0){if(xe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,le=Y,t.width=Math.floor(N*Ne),t.height=Math.floor(Y*Ne),oe===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),j!==null&&j.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(k*Ne,le*Ne).floor()},this.setDrawingBufferSize=function(N,Y,oe){k=N,le=Y,Ne=oe,t.width=Math.floor(N*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(A===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}j.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ee)},this.getViewport=function(N){return N.copy(te)},this.setViewport=function(N,Y,oe,se){N.isVector4?te.set(N.x,N.y,N.z,N.w):te.set(N,Y,oe,se),Te.viewport(ee.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(N){return N.copy(de)},this.setScissor=function(N,Y,oe,se){N.isVector4?de.set(N.x,N.y,N.z,N.w):de.set(N,Y,oe,se),Te.scissor(q.copy(de).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(N){Te.setScissorTest(Me=N)},this.setOpaqueSort=function(N){Xe=N},this.setTransparentSort=function(N){qe=N},this.getClearColor=function(N){return N.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,oe=!0){let se=0;if(N){let Q=!1;if(K!==null){const Ue=K.texture.format;Q=y.has(Ue)}if(Q){const Ue=K.texture.type,ke=_.has(Ue),Re=we.getClearColor(),Ye=we.getClearAlpha(),Ge=Re.r,ot=Re.g,Ze=Re.b;ke?(C[0]=Ge,C[1]=ot,C[2]=Ze,C[3]=Ye,P.clearBufferuiv(P.COLOR,0,C)):(I[0]=Ge,I[1]=ot,I[2]=Ze,I[3]=Ye,P.clearBufferiv(P.COLOR,0,I))}else se|=P.COLOR_BUFFER_BIT}Y&&(se|=P.DEPTH_BUFFER_BIT),oe&&(se|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),we.dispose(),_e.dispose(),Ae.dispose(),w.dispose(),pe.dispose(),ge.dispose(),Ee.dispose(),Le.dispose(),me.dispose(),He.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",cr),xe.removeEventListener("sessionend",Ai),_i.stop()};function Je(N){N.preventDefault(),Bm("WebGLRenderer: Context Lost."),R=!0}function Dt(){Bm("WebGLRenderer: Context Restored."),R=!1;const N=O.autoReset,Y=je.enabled,oe=je.autoUpdate,se=je.needsUpdate,Q=je.type;fe(),O.autoReset=N,je.enabled=Y,je.autoUpdate=oe,je.needsUpdate=se,je.type=Q}function bt(N){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function mn(N){const Y=N.target;Y.removeEventListener("dispose",mn),bn(Y)}function bn(N){cs(N),w.remove(N)}function cs(N){const Y=w.get(N).programs;Y!==void 0&&(Y.forEach(function(oe){He.releaseProgram(oe)}),N.isShaderMaterial&&He.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,oe,se,Q,Ue){Y===null&&(Y=Ot);const ke=Q.isMesh&&Q.matrixWorld.determinant()<0,Re=Hs(N,Y,oe,se,Q);Te.setMaterial(se,ke);let Ye=oe.index,Ge=1;if(se.wireframe===!0){if(Ye=ze.getWireframeAttribute(oe),Ye===void 0)return;Ge=2}const ot=oe.drawRange,Ze=oe.attributes.position;let St=ot.start*Ge,It=(ot.start+ot.count)*Ge;Ue!==null&&(St=Math.max(St,Ue.start*Ge),It=Math.min(It,(Ue.start+Ue.count)*Ge)),Ye!==null?(St=Math.max(St,0),It=Math.min(It,Ye.count)):Ze!=null&&(St=Math.max(St,0),It=Math.min(It,Ze.count));const Gt=It-St;if(Gt<0||Gt===1/0)return;Le.setup(Q,se,Re,oe,Ye);let Mt,Ut=G;if(Ye!==null&&(Mt=ue.get(Ye),Ut=De,Ut.setIndex(Mt)),Q.isMesh)se.wireframe===!0?(Te.setLineWidth(se.wireframeLinewidth*tt()),Ut.setMode(P.LINES)):Ut.setMode(P.TRIANGLES);else if(Q.isLine){let st=se.linewidth;st===void 0&&(st=1),Te.setLineWidth(st*tt()),Q.isLineSegments?Ut.setMode(P.LINES):Q.isLineLoop?Ut.setMode(P.LINE_LOOP):Ut.setMode(P.LINE_STRIP)}else Q.isPoints?Ut.setMode(P.POINTS):Q.isSprite&&Ut.setMode(P.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Uo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const st=Q._multiDrawStarts,Ft=Q._multiDrawCounts,Rt=Q._multiDrawCount,vn=Ye?ue.get(Ye).bytesPerElement:1,ui=w.get(se).currentProgram.getUniforms();for(let cn=0;cn<Rt;cn++)ui.setValue(P,"_gl_DrawID",cn),Ut.render(st[cn]/vn,Ft[cn])}else if(Q.isInstancedMesh)Ut.renderInstances(St,Gt,Q.count);else if(oe.isInstancedBufferGeometry){const st=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Ft=Math.min(oe.instanceCount,st);Ut.renderInstances(St,Gt,Ft)}else Ut.render(St,Gt)};function Ci(N,Y,oe){N.transparent===!0&&N.side===Ar&&N.forceSinglePass===!1?(N.side=ci,N.needsUpdate=!0,Wi(N,Y,oe),N.side=ls,N.needsUpdate=!0,Wi(N,Y,oe),N.side=Ar):Wi(N,Y,oe)}this.compile=function(N,Y,oe=null){oe===null&&(oe=N),U=Ae.get(oe),U.init(Y),F.push(U),oe.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),N!==oe&&N.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),U.setupLights();const se=new Set;return N.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Re=Ue[ke];Ci(Re,oe,Q),se.add(Re)}else Ci(Ue,oe,Q),se.add(Ue)}),U=F.pop(),se},this.compileAsync=function(N,Y,oe=null){const se=this.compile(N,Y,oe);return new Promise(Q=>{function Ue(){if(se.forEach(function(ke){w.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){Q(N);return}setTimeout(Ue,10)}mt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let or=null;function lr(N){or&&or(N)}function cr(){_i.stop()}function Ai(){_i.start()}const _i=new Sg;_i.setAnimationLoop(lr),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(N){or=N,xe.setAnimationLoop(N),N===null?_i.stop():_i.start()},xe.addEventListener("sessionstart",cr),xe.addEventListener("sessionend",Ai),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const oe=xe.enabled===!0&&xe.isPresenting===!0,se=j!==null&&(K===null||oe)&&j.begin(E,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(j===null||j.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Y),Y=xe.getCamera()),N.isScene===!0&&N.onBeforeRender(E,N,Y,K),U=Ae.get(N,F.length),U.init(Y),F.push(U),Yt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Fe.setFromProjectionMatrix(Yt,er,Y.reversedDepth),yt=this.localClippingEnabled,Pe=Ve.init(this.clippingPlanes,yt),D=_e.get(N,L.length),D.init(),L.push(D),xe.enabled===!0&&xe.isPresenting===!0){const ke=E.xr.getDepthSensingMesh();ke!==null&&tn(ke,Y,-1/0,E.sortObjects)}tn(N,Y,0,E.sortObjects),D.finish(),E.sortObjects===!0&&D.sort(Xe,qe),lt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,lt&&we.addToRenderList(D,N),this.info.render.frame++,Pe===!0&&Ve.beginShadows();const Q=U.state.shadowsArray;if(je.render(Q,N,Y),Pe===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&j.hasRenderPass())===!1){const ke=D.opaque,Re=D.transmissive;if(U.setupLights(),Y.isArrayCamera){const Ye=Y.cameras;if(Re.length>0)for(let Ge=0,ot=Ye.length;Ge<ot;Ge++){const Ze=Ye[Ge];ds(ke,Re,N,Ze)}lt&&we.render(N);for(let Ge=0,ot=Ye.length;Ge<ot;Ge++){const Ze=Ye[Ge];us(D,N,Ze,Ze.viewport)}}else Re.length>0&&ds(ke,Re,N,Y),lt&&we.render(N),us(D,N,Y)}K!==null&&$===0&&(H.updateMultisampleRenderTarget(K),H.updateRenderTargetMipmap(K)),se&&j.end(E),N.isScene===!0&&N.onAfterRender(E,N,Y),Le.resetDefaultState(),ie=-1,re=null,F.pop(),F.length>0?(U=F[F.length-1],Pe===!0&&Ve.setGlobalState(E.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?D=L[L.length-1]:D=null};function tn(N,Y,oe,se){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)oe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Fe.intersectsSprite(N)){se&&At.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Yt);const ke=Ee.update(N),Re=N.material;Re.visible&&D.push(N,ke,Re,oe,At.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Fe.intersectsObject(N))){const ke=Ee.update(N),Re=N.material;if(se&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),At.copy(N.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),At.copy(ke.boundingSphere.center)),At.applyMatrix4(N.matrixWorld).applyMatrix4(Yt)),Array.isArray(Re)){const Ye=ke.groups;for(let Ge=0,ot=Ye.length;Ge<ot;Ge++){const Ze=Ye[Ge],St=Re[Ze.materialIndex];St&&St.visible&&D.push(N,ke,St,oe,At.z,Ze)}}else Re.visible&&D.push(N,ke,Re,oe,At.z,null)}}const Ue=N.children;for(let ke=0,Re=Ue.length;ke<Re;ke++)tn(Ue[ke],Y,oe,se)}function us(N,Y,oe,se){const{opaque:Q,transmissive:Ue,transparent:ke}=N;U.setupLightsView(oe),Pe===!0&&Ve.setGlobalState(E.clippingPlanes,oe),se&&Te.viewport(ee.copy(se)),Q.length>0&&Jn(Q,Y,oe),Ue.length>0&&Jn(Ue,Y,oe),ke.length>0&&Jn(ke,Y,oe),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ds(N,Y,oe,se){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const St=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new nr(1,1,{generateMipmaps:!0,type:St?Lr:xi,minFilter:Bs,samples:rt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const Ue=U.state.transmissionRenderTarget[se.id],ke=se.viewport||ee;Ue.setSize(ke.z*E.transmissionResolutionScale,ke.w*E.transmissionResolutionScale);const Re=E.getRenderTarget(),Ye=E.getActiveCubeFace(),Ge=E.getActiveMipmapLevel();E.setRenderTarget(Ue),E.getClearColor(he),ae=E.getClearAlpha(),ae<1&&E.setClearColor(16777215,.5),E.clear(),lt&&we.render(oe);const ot=E.toneMapping;E.toneMapping=tr;const Ze=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),Pe===!0&&Ve.setGlobalState(E.clippingPlanes,se),Jn(N,oe,se),H.updateMultisampleRenderTarget(Ue),H.updateRenderTargetMipmap(Ue),mt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let It=0,Gt=Y.length;It<Gt;It++){const Mt=Y[It],{object:Ut,geometry:st,material:Ft,group:Rt}=Mt;if(Ft.side===Ar&&Ut.layers.test(se.layers)){const vn=Ft.side;Ft.side=ci,Ft.needsUpdate=!0,Hi(Ut,oe,se,st,Ft,Rt),Ft.side=vn,Ft.needsUpdate=!0,St=!0}}St===!0&&(H.updateMultisampleRenderTarget(Ue),H.updateRenderTargetMipmap(Ue))}E.setRenderTarget(Re,Ye,Ge),E.setClearColor(he,ae),Ze!==void 0&&(se.viewport=Ze),E.toneMapping=ot}function Jn(N,Y,oe){const se=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ue=N.length;Q<Ue;Q++){const ke=N[Q],{object:Re,geometry:Ye,group:Ge}=ke;let ot=ke.material;ot.allowOverride===!0&&se!==null&&(ot=se),Re.layers.test(oe.layers)&&Hi(Re,Y,oe,Ye,ot,Ge)}}function Hi(N,Y,oe,se,Q,Ue){N.onBeforeRender(E,Y,oe,se,Q,Ue),N.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),Q.onBeforeRender(E,Y,oe,se,N,Ue),Q.transparent===!0&&Q.side===Ar&&Q.forceSinglePass===!1?(Q.side=ci,Q.needsUpdate=!0,E.renderBufferDirect(oe,Y,se,Q,N,Ue),Q.side=ls,Q.needsUpdate=!0,E.renderBufferDirect(oe,Y,se,Q,N,Ue),Q.side=Ar):E.renderBufferDirect(oe,Y,se,Q,N,Ue),N.onAfterRender(E,Y,oe,se,Q,Ue)}function Wi(N,Y,oe){Y.isScene!==!0&&(Y=Ot);const se=w.get(N),Q=U.state.lights,Ue=U.state.shadowsArray,ke=Q.state.version,Re=He.getParameters(N,Q.state,Ue,Y,oe),Ye=He.getProgramCacheKey(Re);let Ge=se.programs;se.environment=N.isMeshStandardMaterial?Y.environment:null,se.fog=Y.fog,se.envMap=(N.isMeshStandardMaterial?ge:pe).get(N.envMap||se.environment),se.envMapRotation=se.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Ge===void 0&&(N.addEventListener("dispose",mn),Ge=new Map,se.programs=Ge);let ot=Ge.get(Ye);if(ot!==void 0){if(se.currentProgram===ot&&se.lightsStateVersion===ke)return fs(N,Re),ot}else Re.uniforms=He.getUniforms(N),N.onBeforeCompile(Re,E),ot=He.acquireProgram(Re,Ye),Ge.set(Ye,ot),se.uniforms=Re.uniforms;const Ze=se.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ze.clippingPlanes=Ve.uniform),fs(N,Re),se.needsLights=ps(N),se.lightsStateVersion=ke,se.needsLights&&(Ze.ambientLightColor.value=Q.state.ambient,Ze.lightProbe.value=Q.state.probe,Ze.directionalLights.value=Q.state.directional,Ze.directionalLightShadows.value=Q.state.directionalShadow,Ze.spotLights.value=Q.state.spot,Ze.spotLightShadows.value=Q.state.spotShadow,Ze.rectAreaLights.value=Q.state.rectArea,Ze.ltc_1.value=Q.state.rectAreaLTC1,Ze.ltc_2.value=Q.state.rectAreaLTC2,Ze.pointLights.value=Q.state.point,Ze.pointLightShadows.value=Q.state.pointShadow,Ze.hemisphereLights.value=Q.state.hemi,Ze.directionalShadowMap.value=Q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ze.spotShadowMap.value=Q.state.spotShadowMap,Ze.spotLightMatrix.value=Q.state.spotLightMatrix,Ze.spotLightMap.value=Q.state.spotLightMap,Ze.pointShadowMap.value=Q.state.pointShadowMap,Ze.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=ot,se.uniformsList=null,ot}function Ri(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=fc.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function fs(N,Y){const oe=w.get(N);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function Hs(N,Y,oe,se,Q){Y.isScene!==!0&&(Y=Ot),H.resetTextureUnits();const Ue=Y.fog,ke=se.isMeshStandardMaterial?Y.environment:null,Re=K===null?E.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:ka,Ye=(se.isMeshStandardMaterial?ge:pe).get(se.envMap||ke),Ge=se.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ot=!!oe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ze=!!oe.morphAttributes.position,St=!!oe.morphAttributes.normal,It=!!oe.morphAttributes.color;let Gt=tr;se.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Gt=E.toneMapping);const Mt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ut=Mt!==void 0?Mt.length:0,st=w.get(se),Ft=U.state.lights;if(Pe===!0&&(yt===!0||N!==re)){const Wt=N===re&&se.id===ie;Ve.setState(se,N,Wt)}let Rt=!1;se.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Ft.state.version||st.outputColorSpace!==Re||Q.isBatchedMesh&&st.batching===!1||!Q.isBatchedMesh&&st.batching===!0||Q.isBatchedMesh&&st.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&st.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&st.instancing===!1||!Q.isInstancedMesh&&st.instancing===!0||Q.isSkinnedMesh&&st.skinning===!1||!Q.isSkinnedMesh&&st.skinning===!0||Q.isInstancedMesh&&st.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&st.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&st.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&st.instancingMorph===!1&&Q.morphTexture!==null||st.envMap!==Ye||se.fog===!0&&st.fog!==Ue||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==Ve.numPlanes||st.numIntersection!==Ve.numIntersection)||st.vertexAlphas!==Ge||st.vertexTangents!==ot||st.morphTargets!==Ze||st.morphNormals!==St||st.morphColors!==It||st.toneMapping!==Gt||st.morphTargetsCount!==Ut)&&(Rt=!0):(Rt=!0,st.__version=se.version);let vn=st.currentProgram;Rt===!0&&(vn=Wi(se,Y,Q));let ui=!1,cn=!1,Ni=!1;const kt=vn.getUniforms(),gt=st.uniforms;if(Te.useProgram(vn.program)&&(ui=!0,cn=!0,Ni=!0),se.id!==ie&&(ie=se.id,cn=!0),ui||re!==N){Te.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(P,"projectionMatrix",N.projectionMatrix),kt.setValue(P,"viewMatrix",N.matrixWorldInverse);const un=kt.map.cameraPosition;un!==void 0&&un.setValue(P,_t.setFromMatrixPosition(N.matrixWorld)),rt.logarithmicDepthBuffer&&kt.setValue(P,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(P,"isOrthographic",N.isOrthographicCamera===!0),re!==N&&(re=N,cn=!0,Ni=!0)}if(st.needsLights&&(Ft.state.directionalShadowMap.length>0&&kt.setValue(P,"directionalShadowMap",Ft.state.directionalShadowMap,H),Ft.state.spotShadowMap.length>0&&kt.setValue(P,"spotShadowMap",Ft.state.spotShadowMap,H),Ft.state.pointShadowMap.length>0&&kt.setValue(P,"pointShadowMap",Ft.state.pointShadowMap,H)),Q.isSkinnedMesh){kt.setOptional(P,Q,"bindMatrix"),kt.setOptional(P,Q,"bindMatrixInverse");const Wt=Q.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),kt.setValue(P,"boneTexture",Wt.boneTexture,H))}Q.isBatchedMesh&&(kt.setOptional(P,Q,"batchingTexture"),kt.setValue(P,"batchingTexture",Q._matricesTexture,H),kt.setOptional(P,Q,"batchingIdTexture"),kt.setValue(P,"batchingIdTexture",Q._indirectTexture,H),kt.setOptional(P,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(P,"batchingColorTexture",Q._colorsTexture,H));const En=oe.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ht.update(Q,oe,vn),(cn||st.receiveShadow!==Q.receiveShadow)&&(st.receiveShadow=Q.receiveShadow,kt.setValue(P,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(gt.envMap.value=Ye,gt.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&Y.environment!==null&&(gt.envMapIntensity.value=Y.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=rb()),cn&&(kt.setValue(P,"toneMappingExposure",E.toneMappingExposure),st.needsLights&&hs(gt,Ni),Ue&&se.fog===!0&&at.refreshFogUniforms(gt,Ue),at.refreshMaterialUniforms(gt,se,Ne,le,U.state.transmissionRenderTarget[N.id]),fc.upload(P,Ri(st),gt,H)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(fc.upload(P,Ri(st),gt,H),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(P,"center",Q.center),kt.setValue(P,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(P,"normalMatrix",Q.normalMatrix),kt.setValue(P,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const Wt=se.uniformsGroups;for(let un=0,ur=Wt.length;un<ur;un++){const di=Wt[un];me.update(di,vn),me.bind(di,vn)}}return vn}function hs(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function ps(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,Y,oe){const se=w.get(N);se.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(N.texture).__webglTexture=Y,w.get(N.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:oe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const oe=w.get(N);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0};const Ws=P.createFramebuffer();this.setRenderTarget=function(N,Y=0,oe=0){K=N,z=Y,$=oe;let se=null,Q=!1,Ue=!1;if(N){const Re=w.get(N);if(Re.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(P.FRAMEBUFFER,Re.__webglFramebuffer),ee.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest,Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),ie=-1;return}else if(Re.__webglFramebuffer===void 0)H.setupRenderTarget(N);else if(Re.__hasExternalTextures)H.rebindTextures(N,w.get(N.texture).__webglTexture,w.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ot=N.depthTexture;if(Re.__boundDepthTexture!==ot){if(ot!==null&&w.has(ot)&&(N.width!==ot.image.width||N.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(N)}}const Ye=N.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Ue=!0);const Ge=w.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?se=Ge[Y][oe]:se=Ge[Y],Q=!0):N.samples>0&&H.useMultisampledRTT(N)===!1?se=w.get(N).__webglMultisampledFramebuffer:Array.isArray(Ge)?se=Ge[oe]:se=Ge,ee.copy(N.viewport),q.copy(N.scissor),X=N.scissorTest}else ee.copy(te).multiplyScalar(Ne).floor(),q.copy(de).multiplyScalar(Ne).floor(),X=Me;if(oe!==0&&(se=Ws),Te.bindFramebuffer(P.FRAMEBUFFER,se)&&Te.drawBuffers(N,se),Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),Q){const Re=w.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Re.__webglTexture,oe)}else if(Ue){const Re=Y;for(let Ye=0;Ye<N.textures.length;Ye++){const Ge=w.get(N.textures[Ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Ye,Ge.__webglTexture,oe,Re)}}else if(N!==null&&oe!==0){const Re=w.get(N.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Re.__webglTexture,oe)}ie=-1},this.readRenderTargetPixels=function(N,Y,oe,se,Q,Ue,ke,Re=0){if(!(N&&N.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye){Te.bindFramebuffer(P.FRAMEBUFFER,Ye);try{const Ge=N.textures[Re],ot=Ge.format,Ze=Ge.type;if(!rt.textureFormatReadable(ot)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(Ze)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-se&&oe>=0&&oe<=N.height-Q&&(N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(Y,oe,se,Q,Se.convert(ot),Se.convert(Ze),Ue))}finally{const Ge=K!==null?w.get(K).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(N,Y,oe,se,Q,Ue,ke,Re=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=w.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&ke!==void 0&&(Ye=Ye[ke]),Ye)if(Y>=0&&Y<=N.width-se&&oe>=0&&oe<=N.height-Q){Te.bindFramebuffer(P.FRAMEBUFFER,Ye);const Ge=N.textures[Re],ot=Ge.format,Ze=Ge.type;if(!rt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const St=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.bufferData(P.PIXEL_PACK_BUFFER,Ue.byteLength,P.STREAM_READ),N.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Re),P.readPixels(Y,oe,se,Q,Se.convert(ot),Se.convert(Ze),0);const It=K!==null?w.get(K).__webglFramebuffer:null;Te.bindFramebuffer(P.FRAMEBUFFER,It);const Gt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await S_(P,Gt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,St),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Ue),P.deleteBuffer(St),P.deleteSync(Gt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,oe=0){const se=Math.pow(2,-oe),Q=Math.floor(N.image.width*se),Ue=Math.floor(N.image.height*se),ke=Y!==null?Y.x:0,Re=Y!==null?Y.y:0;H.setTexture2D(N,0),P.copyTexSubImage2D(P.TEXTURE_2D,oe,0,0,ke,Re,Q,Ue),Te.unbindTexture()};const ja=P.createFramebuffer(),$t=P.createFramebuffer();this.copyTextureToTexture=function(N,Y,oe=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(Uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let ke,Re,Ye,Ge,ot,Ze,St,It,Gt;const Mt=N.isCompressedTexture?N.mipmaps[Ue]:N.image;if(oe!==null)ke=oe.max.x-oe.min.x,Re=oe.max.y-oe.min.y,Ye=oe.isBox3?oe.max.z-oe.min.z:1,Ge=oe.min.x,ot=oe.min.y,Ze=oe.isBox3?oe.min.z:0;else{const En=Math.pow(2,-Q);ke=Math.floor(Mt.width*En),Re=Math.floor(Mt.height*En),N.isDataArrayTexture?Ye=Mt.depth:N.isData3DTexture?Ye=Math.floor(Mt.depth*En):Ye=1,Ge=0,ot=0,Ze=0}se!==null?(St=se.x,It=se.y,Gt=se.z):(St=0,It=0,Gt=0);const Ut=Se.convert(Y.format),st=Se.convert(Y.type);let Ft;Y.isData3DTexture?(H.setTexture3D(Y,0),Ft=P.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Ft=P.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Ft=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);const Rt=P.getParameter(P.UNPACK_ROW_LENGTH),vn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ui=P.getParameter(P.UNPACK_SKIP_PIXELS),cn=P.getParameter(P.UNPACK_SKIP_ROWS),Ni=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,ot),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ze);const kt=N.isDataArrayTexture||N.isData3DTexture,gt=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const En=w.get(N),Wt=w.get(Y),un=w.get(En.__renderTarget),ur=w.get(Wt.__renderTarget);Te.bindFramebuffer(P.READ_FRAMEBUFFER,un.__webglFramebuffer),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,ur.__webglFramebuffer);for(let di=0;di<Ye;di++)kt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(N).__webglTexture,Q,Ze+di),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,Ue,Gt+di)),P.blitFramebuffer(Ge,ot,ke,Re,St,It,ke,Re,P.DEPTH_BUFFER_BIT,P.NEAREST);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(Q!==0||N.isRenderTargetTexture||w.has(N)){const En=w.get(N),Wt=w.get(Y);Te.bindFramebuffer(P.READ_FRAMEBUFFER,ja),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,$t);for(let un=0;un<Ye;un++)kt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,En.__webglTexture,Q,Ze+un):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,En.__webglTexture,Q),gt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,Ue,Gt+un):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,Ue),Q!==0?P.blitFramebuffer(Ge,ot,ke,Re,St,It,ke,Re,P.COLOR_BUFFER_BIT,P.NEAREST):gt?P.copyTexSubImage3D(Ft,Ue,St,It,Gt+un,Ge,ot,ke,Re):P.copyTexSubImage2D(Ft,Ue,St,It,Ge,ot,ke,Re);Te.bindFramebuffer(P.READ_FRAMEBUFFER,null),Te.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else gt?N.isDataTexture||N.isData3DTexture?P.texSubImage3D(Ft,Ue,St,It,Gt,ke,Re,Ye,Ut,st,Mt.data):Y.isCompressedArrayTexture?P.compressedTexSubImage3D(Ft,Ue,St,It,Gt,ke,Re,Ye,Ut,Mt.data):P.texSubImage3D(Ft,Ue,St,It,Gt,ke,Re,Ye,Ut,st,Mt):N.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Ue,St,It,ke,Re,Ut,st,Mt.data):N.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Ue,St,It,Mt.width,Mt.height,Ut,Mt.data):P.texSubImage2D(P.TEXTURE_2D,Ue,St,It,ke,Re,Ut,st,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,vn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ui),P.pixelStorei(P.UNPACK_SKIP_ROWS,cn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ni),Ue===0&&Y.generateMipmaps&&P.generateMipmap(Ft),Te.unbindTexture()},this.initRenderTarget=function(N){w.get(N).__webglFramebuffer===void 0&&H.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?H.setTextureCube(N,0):N.isData3DTexture?H.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?H.setTexture2DArray(N,0):H.setTexture2D(N,0),Te.unbindTexture()},this.resetState=function(){z=0,$=0,K=null,Te.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const L0={type:"change"},rh={type:"start"},Cg={type:"end"},rc=new qf,I0=new ss,sb=Math.cos(70*w_.DEG2RAD),Sn=new Z,li=2*Math.PI,qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class Ag extends c1{constructor(e,t=null){super(e,t),this.state=qt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Da.ROTATE,MIDDLE:Da.DOLLY,RIGHT:Da.PAN},this.touches={ONE:Pa.ROTATE,TWO:Pa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new Vs,this._lastTargetPosition=new Z,this._quat=new Vs().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l0,this._sphericalDelta=new l0,this._scale=1,this._panOffset=new Z,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new Z,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ob.bind(this),this._onPointerDown=ab.bind(this),this._onPointerUp=lb.bind(this),this._onContextMenu=mb.bind(this),this._onMouseWheel=db.bind(this),this._onKeyDown=fb.bind(this),this._onTouchStart=hb.bind(this),this._onTouchMove=pb.bind(this),this._onMouseDown=cb.bind(this),this._onMouseMove=ub.bind(this),this._interceptControlDown=gb.bind(this),this._interceptControlUp=xb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L0),this.update(),this.state=qt.NONE}update(e=null){const t=this.object.position;Sn.copy(t).sub(this.target),Sn.applyQuaternion(this._quat),this._spherical.setFromVector3(Sn),this.autoRotate&&this.state===qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=li:r>Math.PI&&(r-=li),o<-Math.PI?o+=li:o>Math.PI&&(o-=li),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(Sn.setFromSpherical(this._spherical),Sn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Sn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=Sn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new Z(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=Sn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(rc.origin.copy(this.object.position),rc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(rc.direction))<sb?this.object.lookAt(this.target):(I0.setFromNormalAndCoplanarPoint(this.object.up,this.target),rc.intersectPlane(I0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(L0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?li/60*this.autoRotateSpeed*e:li/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Sn.setFromMatrixColumn(t,0),Sn.multiplyScalar(-e),this._panOffset.add(Sn)}_panUp(e,t){this.screenSpacePanning===!0?Sn.setFromMatrixColumn(t,1):(Sn.setFromMatrixColumn(t,0),Sn.crossVectors(this.object.up,Sn)),Sn.multiplyScalar(e),this._panOffset.add(Sn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;Sn.copy(o).sub(this.target);let l=Sn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(li*this._rotateDelta.x/t.clientHeight),this._rotateUp(li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-li*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(li*this._rotateDelta.x/t.clientHeight),this._rotateUp(li*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function ab(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function ob(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function lb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cg),this.state=qt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function cb(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Da.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=qt.DOLLY;break;case Da.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}break;case Da.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(rh)}function ub(s){switch(this.state){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function db(s){this.enabled===!1||this.enableZoom===!1||this.state!==qt.NONE||(s.preventDefault(),this.dispatchEvent(rh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Cg))}function fb(s){this.enabled!==!1&&this._handleKeyDown(s)}function hb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Pa.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=qt.TOUCH_ROTATE;break;case Pa.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=qt.TOUCH_PAN;break;default:this.state=qt.NONE}break;case 2:switch(this.touches.TWO){case Pa.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=qt.TOUCH_DOLLY_PAN;break;case Pa.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=qt.TOUCH_DOLLY_ROTATE;break;default:this.state=qt.NONE}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(rh)}function pb(s){switch(this._trackPointer(s),this.state){case qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=qt.NONE}}function mb(s){this.enabled!==!1&&s.preventDefault()}function gb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rg(){const s=document.createElement("canvas");s.width=1024,s.height=768;const e=s.getContext("2d");if(!e)return s;e.fillStyle="#08101a",e.fillRect(0,0,1024,768);const t=(f,p,m,x,v)=>{e.beginPath(),e.moveTo(f+v,p),e.lineTo(f+m-v,p),e.quadraticCurveTo(f+m,p,f+m,p+v),e.lineTo(f+m,p+x-v),e.quadraticCurveTo(f+m,p+x,f+m-v,p+x),e.lineTo(f+v,p+x),e.quadraticCurveTo(f,p+x,f,p+x-v),e.lineTo(f,p+v),e.quadraticCurveTo(f,p,f+v,p),e.closePath()},r=e.createLinearGradient(0,0,0,90);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.fillRect(0,0,1024,90),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,90),e.lineTo(1024,90),e.stroke(),e.fillStyle="#ffffff",e.font='bold 38px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("10/05  15:42",490,48),e.beginPath(),e.arc(950,45,14,0,Math.PI*2),e.fillStyle="#22c55e",e.fill(),e.lineWidth=3,e.strokeStyle="#ffffff",e.stroke(),[{title:"EXAUSTOR",val:"OK",x:42},{title:"ENERGIA",val:"OK",x:367},{title:"GÁS",val:"ABERTO",x:692}].forEach(f=>{const p=e.createLinearGradient(0,120,0,245);p.addColorStop(0,"#22c55e"),p.addColorStop(1,"#15803d"),e.fillStyle=p,t(f.x,120,290,125,18),e.fill(),e.strokeStyle="#4ade80",e.lineWidth=3.5,e.stroke(),e.fillStyle="#ffffff",e.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="alphabetic",e.fillText(f.title,f.x+145,160),e.font='900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(f.val,f.x+145,212)}),[{title:"SETORES",x:42,y:280},{title:"CONTROLE GÁS",x:532,y:280},{title:"REARMAR",x:42,y:470},{title:"CONFIG",x:532,y:470}].forEach(f=>{const p=e.createLinearGradient(0,f.y,0,f.y+160);p.addColorStop(0,"#2563eb"),p.addColorStop(.5,"#1d4ed8"),p.addColorStop(1,"#1e40af"),e.fillStyle=p,t(f.x,f.y,450,160,22),e.fill(),e.strokeStyle="#60a5fa",e.lineWidth=4,e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",t(f.x+4,f.y+4,442,75,18),e.fill(),e.fillStyle="#ffffff",e.font='900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(f.title,f.x+225,f.y+80)});const d=e.createLinearGradient(0,683,0,768);return d.addColorStop(0,"#0369a1"),d.addColorStop(1,"#0284c7"),e.fillStyle=d,e.fillRect(0,683,1024,85),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,683),e.lineTo(1024,683),e.stroke(),e.fillStyle="#ffffff",e.font='900 34px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA OPERANTE",512,725),s}const vb=()=>{const s=Ie.useRef(null),e=Ie.useRef(null),t=Ie.useRef(null),[r,o]=Ie.useState(0),l=Ie.useRef(0),[d,f]=Ie.useState(!1),p=Ie.useRef(!1),[m,x]=Ie.useState("STANDBY"),v=Ie.useRef("STANDBY");v.current=m;const[S,M]=Ie.useState(10),T=Ie.useRef(10);T.current=S;const[A,y]=Ie.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,C]=Ie.useState(null),[I,D]=Ie.useState("geral"),U=Ie.useRef(null),L=Ie.useRef(null),F=Ie.useRef(null),j=Ie.useRef(null),E=Ie.useRef(null),R=Ie.useRef(null),z=Ie.useRef(null),$=Ie.useRef(null),K=Ie.useRef(null),ie=Ie.useRef(null),re=Ie.useRef(null),ee=Ie.useRef(null),q=Ie.useRef(null),X=Ie.useRef(null),he=Ie.useRef(null),ae=Ie.useRef(null),k=Ie.useRef(null),le=Ie.useRef(null),Ne=Ie.useRef(null),Xe=Ie.useRef(null),qe=Ie.useRef(null),te=Ie.useRef(new Z(0,2.2,4.4)),de=Ie.useRef(new Z(0,1.4,0)),Me=Ie.useCallback(()=>{let tt=R.current;tt||(tt=document.createElement("canvas"),tt.width=512,tt.height=380,R.current=tt);const P=tt.getContext("2d");if(!P)return;const $e=v.current,mt=T.current;$e==="FIRE_ALARM"?(P.fillStyle="#ba1016",P.fillRect(0,0,512,380),P.fillStyle="#ffffff",P.font='bold 28px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("FOGO DETECTADO",230,48),P.beginPath(),P.arc(460,40,10,0,Math.PI*2),P.fillStyle="#22c55e",P.fill(),P.lineWidth=2,P.strokeStyle="#ffffff",P.stroke(),P.fillStyle="#ffffff",P.font='bold 21px "Courier New", Courier, monospace',P.fillText("FOGO DETECTADO: SUB-1",256,95),P.fillText("EM DISPARO",256,128),P.fillStyle="#67e8f9",P.font='900 86px "Courier New", Courier, monospace',P.fillText(`${mt}s`,256,230),P.fillStyle="#ffffff",P.font='bold 19px "Courier New", Courier, monospace',P.fillText("TOQUE NA TELA PARA ABORTAR",256,325)):$e==="SUPPRESSION"?(P.fillStyle="#7f1d1d",P.fillRect(0,0,512,380),P.fillStyle="#ffffff",P.font='bold 24px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("SISTEMA CO2 / SAP !",256,50),P.fillStyle="#fef08a",P.font='bold 30px "Courier New", Courier, monospace',P.fillText("DESCARGA EFETUADA",256,130),P.fillStyle="#0284c7",P.fillRect(80,190,352,60),P.fillStyle="#ffffff",P.font="bold 18px sans-serif",P.fillText("REARMAR SISTEMA",256,228)):$e==="EXTINGUISHED"?(P.fillStyle="#06261c",P.fillRect(0,0,512,380),P.fillStyle="#10b981",P.font="bold 26px sans-serif",P.textAlign="center",P.fillText("● INCÊNDIO EXTINTO",256,70),P.fillStyle="#a7f3d0",P.font="bold 15px monospace",P.fillText("SUPRESSÃO CLASSE K BEM-SUCEDIDA",256,115),P.fillStyle="#064e3b",P.fillRect(30,150,452,50),P.fillStyle="#6ee7b7",P.font="bold 15px sans-serif",P.fillText("AVCB & NBR 14518 CONFORME",256,180),P.fillStyle="#d4af37",P.font="bold 13px monospace",P.fillText("COZINHA E VIDAS PRESERVADAS",256,260)):(P.fillStyle="#0284c7",P.fillRect(0,0,512,45),P.fillStyle="#ffffff",P.font='bold 20px "Courier New", Courier, monospace',P.textAlign="center",P.fillText("10/05 15:42",240,30),P.beginPath(),P.arc(460,24,9,0,Math.PI*2),P.fillStyle="#22c55e",P.fill(),P.fillStyle="#0c1a29",P.fillRect(0,45,512,290),P.fillStyle="#15803d",P.fillRect(18,55,145,60),P.fillStyle="#ffffff",P.font="bold 13px sans-serif",P.textAlign="center",P.fillText("EXAUSTOR",90,80),P.fillText("OK",90,100),P.fillStyle="#15803d",P.fillRect(183,55,145,60),P.fillText("ENERGIA",256,80),P.fillText("OK",256,100),P.fillStyle="#15803d",P.fillRect(348,55,145,60),P.fillText("GÁS",420,80),P.fillText("ABERTO",420,100),P.fillStyle="#1d4ed8",P.fillRect(25,130,220,70),P.fillStyle="#ffffff",P.font="bold 16px sans-serif",P.fillText("SETORES",135,172),P.fillRect(265,130,220,70),P.fillStyle="#ffffff",P.fillText("CONTROLE GÁS",375,172),P.fillStyle="#1d4ed8",P.fillRect(25,215,220,70),P.fillStyle="#ffffff",P.fillText("REARMAR",135,257),P.fillStyle="#1d4ed8",P.fillRect(265,215,220,70),P.fillStyle="#ffffff",P.fillText("CONFIG",375,257),P.fillStyle="#0284c7",P.fillRect(0,335,512,45),P.fillStyle="#ffffff",P.font='bold 18px "Courier New", Courier, monospace',P.fillText("SISTEMA OPERANTE",256,363)),E.current&&(E.current.needsUpdate=!0)},[]),[Fe,Pe]=Ie.useState(!1),yt=Ie.useCallback(()=>{m==="SUPPRESSION"||m==="EXTINGUISHED"||(q.current&&(q.current.rotation.x=.65),p.current=!0,f(!0),x("FIRE_ALARM"),M(60),Pe(!0),y({temp:290,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:60}))},[m]),Yt=Ie.useCallback(()=>{p.current=!1,f(!1),Pe(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0)},[]),_t=()=>{s.current?s.current.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:window.innerHeight,behavior:"smooth"})},At=()=>{if(!s.current)return;const tt=window.scrollY,P=window.innerHeight*.85;window.scrollTo({top:tt+P,behavior:"smooth"})};Ie.useEffect(()=>{if(!Fe)return;const tt=setInterval(()=>{M(P=>P<=5?(clearInterval(tt),Pe(!1),x("SUPPRESSION"),y($e=>({...$e,temp:140,systemStatus:"COMBATE ATIVO",countdown:0})),setTimeout(()=>{x("EXTINGUISHED"),y($e=>({...$e,temp:38,systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3500),0):P-5)},600);return()=>clearInterval(tt)},[Fe]);const Ot=Ie.useCallback(()=>{p.current=!1,f(!1),Pe(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0),k.current&&(k.current.scale.set(.001,.001,.001),k.current.visible=!1)},[]);Ie.useEffect(()=>{Me()},[m,S,Me]),Ie.useEffect(()=>{const tt=()=>{if(!s.current)return;const P=s.current.getBoundingClientRect(),$e=s.current.offsetHeight-window.innerHeight;if($e<=0)return;const mt=-P.top,rt=Math.min(1,Math.max(0,mt/$e));if(l.current=rt,o(rt),!(p.current&&Fe))if(p.current&&rt<=.05&&(p.current=!1,f(!1),Pe(!1)),rt<.2)x("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60});else if(rt>=.2&&rt<.45){x("HEATING");const Te=Math.round(180+(rt-.2)/.25*160);y({temp:Te,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:60})}else if(rt>=.45&&rt<.7){x("FIRE_ALARM");const Te=Math.max(1,Math.round(60-(rt-.45)/.25*59));M(Te),y({temp:380,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:Te})}else rt>=.7&&rt<.88?(x("SUPPRESSION"),y({temp:135,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),y({temp:38,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",tt,{passive:!0}),tt(),()=>window.removeEventListener("scroll",tt)},[Fe]);const lt=tt=>{D(tt),tt==="geral"?(te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)):tt==="central"?(te.current.set(1.9,1.85,1.5),de.current.set(2.1,1.8,.15)):tt==="fritadeira"?(te.current.set(-.2,1.4,2.2),de.current.set(-.2,1,0)):tt==="botoeira"&&(te.current.set(1.4,1.45,1.3),de.current.set(1.45,1.4,.05))};return Ie.useEffect(()=>{if(!t.current||!e.current)return;const tt=e.current.clientWidth||window.innerWidth,P=e.current.clientHeight||window.innerHeight,$e=new mg;U.current=$e,$e.background=new Ct(658448),$e.fog=new $f(658448,.035);const mt=tt<768,rt=new Qn(mt?58:45,tt/P,.1,100);mt?(rt.position.set(.1,2.15,5.6),te.current.set(.1,2.15,5.6),de.current.set(.1,1.35,0)):(rt.position.set(0,2.2,4.4),te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)),L.current=rt;const Te=new Tg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});Te.setSize(tt,P),Te.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.shadowMap.enabled=!0,Te.shadowMap.type=Of,Te.toneMapping=yc,Te.toneMappingExposure=1.1,F.current=Te;const O=new Ag(rt,Te.domElement);O.enableDamping=!0,O.dampingFactor=.05,O.enableZoom=!1,O.enablePan=!1,O.maxPolarAngle=Math.PI/2+.05,O.target.set(mt?.1:0,mt?1.35:1.4,0),j.current=O;const w=new _g(16774890,.75);$e.add(w);const H=new Nf(16777215,1.3);H.position.set(4,6,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,$e.add(H);const pe=new r0(16766880,2.8,6,Math.PI/3,.3);pe.position.set(0,2.7,0),pe.target.position.set(0,.9,0),$e.add(pe),$e.add(pe.target);const ge=new s0(16733440,0,5);ge.position.set(-.35,1.2,.1),$e.add(ge),ee.current=ge;const ue=new s0(16711680,0,8);ue.position.set(2.1,2.25,.2),$e.add(ue),ie.current=ue;const ze=new wt({color:13421772,metalness:.9,roughness:.22}),Ee=new wt({color:1579551,roughness:.6,metalness:.1}),He=new wt({color:987413,roughness:.8,metalness:.2}),at=new Oe(new Xn(14,14),He);at.rotation.x=-Math.PI/2,at.receiveShadow=!0,$e.add(at);const _e=new Oe(new Xn(14,8),Ee);_e.position.set(0,4,-1.2),_e.receiveShadow=!0,$e.add(_e);const Ae=new Oe(new Xn(14,8),Ee);Ae.rotation.y=Math.PI/2,Ae.position.set(-4.5,4,0),$e.add(Ae);const Ve=new Nn;$e.add(Ve);const je=new Oe(new Ht(2.6,.9,1),ze);je.position.set(0,.45,0),je.castShadow=!0,je.receiveShadow=!0,Ve.add(je);const we=new Nn;we.position.set(-.55,.9,0),Ve.add(we),ae.current=we;const ht=new Oe(new Ht(.85,.12,.75),ze);ht.position.set(0,.06,0),we.add(ht);const G=new Oe(new Ht(.72,.02,.62),new wt({color:9584654,roughness:.1,metalness:.3}));G.position.set(0,.11,0),we.add(G);const De=new wt({color:1118481,roughness:.5}),Se=new Oe(new en(.012,.012,.28),De);Se.position.set(-.16,.22,.34),Se.rotation.x=Math.PI/3,we.add(Se);const Le=new Oe(new en(.012,.012,.28),De);Le.position.set(.16,.22,.34),Le.rotation.x=Math.PI/3,we.add(Le);const me=new Nn;me.position.set(.65,.9,0),Ve.add(me);const fe=new Oe(new Ht(.95,.06,.75),new wt({color:3355448,roughness:.4,metalness:.7}));fe.position.set(0,.03,0),me.add(fe);const xe=new Nn;xe.position.set(0,2.3,0),$e.add(xe);const Je=new Oe(new Ht(2.8,.6,1.2),ze);Je.castShadow=!0,xe.add(Je);const Dt=new wt({color:10066329,metalness:.9,roughness:.3});for(let Nt=-1;Nt<=1;Nt+=.5){const ct=new Oe(new Ht(.42,.35,.04),Dt);ct.position.set(Nt,-.15,0),ct.rotation.x=-Math.PI/6,xe.add(ct)}const bt=new Oe(new en(.28,.28,1.5,32),ze);bt.position.set(0,1,0),xe.add(bt);const mn=new Oe(new Ht(.64,.18,.64),new wt({color:4674921,metalness:.85,roughness:.25}));mn.position.set(0,.55,0),xe.add(mn);const bn=new Oe(new Ht(.14,.14,.14),new wt({color:14251782,roughness:.4}));bn.position.set(.36,.55,0),xe.add(bn);const cs=new wt({color:11580860,metalness:.88,roughness:.3}),Ci=new Oe(new Xn(3.6,1.4),cs);Ci.position.set(0,1.6,-.6),$e.add(Ci);const or=new Oe(new en(.008,.008,2.4,16),ze);or.rotation.z=Math.PI/2,or.position.set(0,1.95,-.58),$e.add(or);const lr=new wt({color:11817737,metalness:.8,roughness:.3}),cr=new wt({color:13938487,metalness:.9,roughness:.2}),Ai=new Oe(new en(.015,.015,2.4),lr);Ai.rotation.z=Math.PI/2,Ai.position.set(0,-.28,-.2),xe.add(Ai),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Nt,ct,Zt])=>{const Bn=new Oe(new Qf(.025,.06,16),cr);Bn.position.set(Nt,ct,Zt),Bn.rotation.x=Math.PI,xe.add(Bn)});const tn=new Nn;tn.position.set(2.1,1.8,.15),tn.rotation.y=-.28,$e.add(tn),he.current=tn,tn.userData={interactiveType:"central",name:"Central Outfire VTS"};const us=new vg,ds=us.load("/assets/tampa-central-moderna.png");ds.colorSpace=Un;const Jn=Rg(),Hi=new gg(Jn);Hi.colorSpace=Un,$.current=Hi;const Wi=us.load("/assets/tela-ihm-alarme.jpg");Wi.colorSpace=Un,K.current=Wi;const Ri=new wt({color:1316378,roughness:.45,metalness:.8}),fs=new wt({map:ds,roughness:.35,metalness:.25}),Hs=[Ri,Ri,Ri,Ri,fs,Ri],hs=new Oe(new Ht(.72,.52,.22),Hs);hs.castShadow=!0,tn.add(hs);const ps=new wt({map:Hi,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:Hi,emissiveIntensity:.95});z.current=ps;const Ws=new Oe(new Xn(.2,.15),ps);Ws.position.set(0,0,.115),tn.add(Ws);const ja=new wt({color:1579552,metalness:.9,roughness:.35}),$t=new Oe(new Ht(.218,.168,.005),ja);$t.position.set(0,0,.111),tn.add($t);const N=new wt({color:11580344,metalness:.95,roughness:.2}),Y=new en(.004,.004,.005,8);[[-.098,.072],[.098,.072],[-.098,-.072],[.098,-.072]].forEach(([Nt,ct])=>{const Zt=new Oe(Y,N);Zt.rotation.x=Math.PI/2,Zt.position.set(Nt,ct,.1155),tn.add(Zt)});const oe=new r0(16774890,2.2,5,Math.PI/3,.3);oe.position.set(2.4,2.4,1.6),oe.target=tn,$e.add(oe);const se=new Oe(new en(.016,.016,1.6,16),ze);se.position.set(0,1.05,0),tn.add(se);const Q=new Oe(new en(.045,.045,.03,16),new wt({color:1118481,metalness:.8}));Q.position.set(0,.275,0),tn.add(Q);const Ue=new wt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),ke=new Oe(new en(.038,.042,.065,16),Ue);ke.position.set(0,.32,0),tn.add(ke),re.current=ke;const Re=new Oe(new Ht(.68,.02,.2),Ri);Re.position.set(0,-.32,0),tn.add(Re);const Ye=new wt({color:592396,roughness:.5}),Ge=new Oe(new Ht(.24,.15,.14),Ye);Ge.position.set(-.16,-.23,0),tn.add(Ge);const ot=new Oe(new Ht(.24,.15,.14),Ye);ot.position.set(.16,-.23,0),tn.add(ot);const Ze=new Nn;Ze.position.set(1.45,1.4,.08),$e.add(Ze),X.current=Ze,Ze.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const St=new Oe(new Ht(.18,.24,.08),new wt({color:13373713,roughness:.3,metalness:.3}));St.castShadow=!0,Ze.add(St);const It=new Oe(new Ht(.14,.18,.015),new wt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));It.position.set(0,0,.042),Ze.add(It);const Gt=new Oe(new Ht(.1,.06,.025),new wt({color:16436245,roughness:.3}));Gt.position.set(0,-.01,.048),Ze.add(Gt),q.current=Gt;const Mt=new Nn;Mt.position.set(-1.85,1.1,-.3),$e.add(Mt),Mt.userData={interactiveType:"saponificante",name:"Cilindro Saponificante Classe K (Inox Cromado)"};const Ut=new wt({color:15857145,metalness:.96,roughness:.12}),st=new Oe(new en(.13,.13,.82,32),Ut);st.castShadow=!0,Mt.add(st);const Ft=new Oe(new Cr(.13,32,16,0,Math.PI*2,0,Math.PI/2),Ut);Ft.position.set(0,.41,0),Mt.add(Ft);const Rt=new Oe(new Cr(.13,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),Ut);Rt.position.set(0,-.41,0),Mt.add(Rt);const vn=new wt({color:3355443,metalness:.8}),ui=new Oe(new Ht(.32,.04,.06),vn);ui.position.set(0,.22,-.09),Mt.add(ui);const cn=new Oe(new Ht(.32,.04,.06),vn);cn.position.set(0,-.22,-.09),Mt.add(cn);const Ni=new Oe(new en(.032,.032,.02,16),new wt({color:13938487,metalness:.85}));Ni.rotation.x=Math.PI/2,Ni.position.set(0,.55,.08),Mt.add(Ni);const kt=new Oe(new Zf(.028,16),new Vi({color:2278750}));kt.position.set(0,.55,.091),Mt.add(kt);const gt=new Oe(new en(.022,.022,.12,16),new wt({color:13938487,metalness:.9}));gt.position.set(0,.52,0),Mt.add(gt);const En=new Oe(new en(.132,.132,.12,32),new wt({color:13938487,metalness:.85,roughness:.2}));En.position.set(0,.05,0),Mt.add(En);const Wt=new Nn;Wt.position.set(.85,2.7,-.35),$e.add(Wt),Wt.userData={interactiveType:"co2",name:"Cilindro de CO2 (Injeção no Duto)"};const un=new wt({color:14427686,metalness:.65,roughness:.28}),ur=new Oe(new en(.09,.09,.95,32),un);ur.castShadow=!0,Wt.add(ur);const di=new Oe(new Cr(.09,32,16,0,Math.PI*2,0,Math.PI/2),un);di.position.set(0,.475,0),Wt.add(di);const Va=new Oe(new Cr(.09,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),un);Va.position.set(0,-.475,0),Wt.add(Va);const Xs=new Oe(new en(.025,.025,.14,16),new wt({color:13938487,metalness:.85}));Xs.position.set(0,.6,0),Wt.add(Xs);const Ur=new Oe(new en(.012,.012,.85,16),ze);Ur.rotation.z=Math.PI/2,Ur.position.set(-.42,.66,.35),Wt.add(Ur);const ei=new Oe(new Ht(.74,.08,.64),new wt({color:16317180,roughness:.9,metalness:.05}));ei.position.set(-.55,1.05,0),ei.scale.set(.001,.001,.001),ei.visible=!1,$e.add(ei),k.current=ei;const kn=new Nn;$e.add(kn),le.current=kn;const Xi=70,ms=new eh(.08,1),dr=[];for(let Nt=0;Nt<Xi;Nt++){const ct=new Oe(ms,new Vi({color:16729344,transparent:!0,opacity:.85}));ct.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),ct.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},kn.add(ct),dr.push(ct)}const Yn=new Nn;$e.add(Yn),Ne.current=Yn;const Ec=50,jo=new Cr(.12,8,8),Or=[];for(let Nt=0;Nt<Ec;Nt++){const ct=new Oe(jo,new Vi({color:2040877,transparent:!0,opacity:.4}));ct.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),ct.userData={speedY:.6+Math.random()*1,maxH:2.2},Yn.add(ct),Or.push(ct)}const Ga=new Nn;$e.add(Ga),Xe.current=Ga;const Vo=80,qs=new Cr(.025,8,8),Ha=[];for(let Nt=0;Nt<Vo;Nt++){const ct=new Oe(qs,new Vi({color:16777215,transparent:!0,opacity:.9}));ct.position.set(-.55,1.9,0),ct.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},Ga.add(ct),Ha.push(ct)}const Wa=new Nn;$e.add(Wa),qe.current=Wa;const gs=35,xs=new Cr(.16,8,8),fr=[];for(let Nt=0;Nt<gs;Nt++){const ct=new Oe(xs,new Vi({color:14870768,transparent:!0,opacity:.4}));ct.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),Wa.add(ct),fr.push(ct)}const hr=new yg,Fr=new pt,Go=Nt=>{var Bn,Dn;const ct=Te.domElement.getBoundingClientRect();Fr.x=(Nt.clientX-ct.left)/ct.width*2-1,Fr.y=-((Nt.clientY-ct.top)/ct.height)*2+1,hr.setFromCamera(Fr,rt);const Zt=hr.intersectObjects([Ze,tn,we,Mt,Wt],!0);if(Zt.length>0){let nt=Zt[0].object;for(;nt&&!((Bn=nt.userData)!=null&&Bn.interactiveType)&&nt.parent;)nt=nt.parent;if(nt&&((Dn=nt.userData)!=null&&Dn.interactiveType)){Te.domElement.style.cursor="pointer",C(nt.userData.name);return}}Te.domElement.style.cursor="default",C(null)},Ys=Nt=>{var Bn,Dn,nt,sn;const ct=Te.domElement.getBoundingClientRect();Fr.x=(Nt.clientX-ct.left)/ct.width*2-1,Fr.y=-((Nt.clientY-ct.top)/ct.height)*2+1,hr.setFromCamera(Fr,rt);const Zt=hr.intersectObjects([Ze,tn,we,Mt,Wt],!0);if(Zt.length>0){let nn=Zt[0].object;for(;nn&&!((Bn=nn.userData)!=null&&Bn.interactiveType)&&nn.parent;)nn=nn.parent;((Dn=nn==null?void 0:nn.userData)==null?void 0:Dn.interactiveType)==="botoeira"?yt():((nt=nn==null?void 0:nn.userData)==null?void 0:nt.interactiveType)==="central"?lt("central"):((sn=nn==null?void 0:nn.userData)==null?void 0:sn.interactiveType)==="fritadeira"&&lt("fritadeira")}};Te.domElement.addEventListener("mousemove",Go),Te.domElement.addEventListener("click",Ys);const vs=()=>{if(!e.current||!F.current||!L.current)return;const Nt=e.current.clientWidth,ct=e.current.clientHeight,Zt=Nt<768;L.current.aspect=Nt/ct,L.current.fov=Zt?58:45,L.current.updateProjectionMatrix(),F.current.setSize(Nt,ct)};window.addEventListener("resize",vs);let $s;const Xa=new l1,Pi=()=>{$s=requestAnimationFrame(Pi);const Nt=Xa.getDelta(),ct=Xa.getElapsedTime();rt.position.lerp(te.current,.05),O.target.lerp(de.current,.05),O.update();const Zt=v.current,Bn=l.current;if(Zt==="HEATING"||Zt==="FIRE_ALARM"){kn.visible=!0,Yn.visible=!0,Xe.current.visible=!1,qe.current.visible=!1;const Dn=Zt==="FIRE_ALARM"?1:Math.max(.2,(Bn-.18)/.24);if(ee.current&&(ee.current.intensity=(2.5+Math.sin(ct*20)*1.5)*Dn,ee.current.color.setHex(Math.random()>.3?16729344:16755200)),dr.forEach((nt,sn)=>{nt.visible=!0,nt.position.y+=nt.userData.speedY*Nt,nt.position.x+=Math.sin(ct*10+sn)*.006;const nn=(nt.position.y-nt.userData.baseY)/1;nt.scale.setScalar(Math.max(.01,(1-nn)*nt.userData.scale*Dn)),nt.material.opacity=1-nn,nt.position.y>nt.userData.baseY+.9&&(nt.position.y=nt.userData.baseY,nt.position.x=-.55+(Math.random()-.5)*.5,nt.position.z=(Math.random()-.5)*.4)}),Or.forEach(nt=>{nt.visible=!0,nt.position.y+=nt.userData.speedY*Nt,nt.scale.setScalar(Dn),nt.position.y>nt.userData.maxH&&(nt.position.y=1.3,nt.position.x=-.55+(Math.random()-.5)*.4)}),Zt==="FIRE_ALARM"){const nt=Math.sin(ct*24)>0;ie.current&&re.current&&(ie.current.intensity=nt?5:0,re.current.material.emissive=nt?new Ct(16711680):new Ct(0))}}else if(Zt==="SUPPRESSION"){kn.visible=!0,Xe.current.visible=!0,qe.current.visible=!0,dr.forEach(nt=>{nt.scale.multiplyScalar(.92),nt.scale.x<.05&&(nt.visible=!1)}),ee.current&&(ee.current.intensity=Math.max(0,ee.current.intensity-Nt*4)),Ha.forEach((nt,sn)=>{nt.visible=!0,nt.position.y-=nt.userData.speed*Nt,nt.position.x+=Math.sin(ct*15+sn)*.01,nt.position.y<1.05&&(nt.position.y=nt.userData.origY,nt.position.x=-.55+nt.userData.spread)}),k.current&&(k.current.visible=!0,k.current.scale.lerp(new Z(1,1,1),.08)),fr.forEach((nt,sn)=>{nt.visible=!0,nt.position.y+=Math.sin(ct*3+sn)*.004,nt.position.x+=Math.cos(ct*2+sn)*.004});const Dn=Math.sin(ct*30)>0;ie.current&&re.current&&(ie.current.intensity=Dn?4:.2,re.current.material.emissive=Dn?new Ct(16711680):new Ct(3342336))}else Zt==="EXTINGUISHED"?(kn.visible=!1,Yn.visible=!1,Xe.current.visible=!1,qe.current.visible=!1,ee.current&&(ee.current.intensity=0),k.current&&(k.current.visible=!0,k.current.scale.set(1,1,1)),ie.current&&re.current&&(ie.current.intensity=0,re.current.material.emissive=new Ct(0))):(kn.visible=!1,Yn.visible=!1,Xe.current.visible=!1,qe.current.visible=!1,ee.current&&(ee.current.intensity=0),k.current&&(k.current.visible=!1),ie.current&&re.current&&(ie.current.intensity=0,re.current.material.emissive=new Ct(0)));z.current&&(Zt==="FIRE_ALARM"||Zt==="SUPPRESSION"?K.current&&z.current.map!==K.current&&(z.current.map=K.current,z.current.emissiveMap=K.current,z.current.emissiveIntensity=1,z.current.needsUpdate=!0):$.current&&z.current.map!==$.current&&(z.current.map=$.current,z.current.emissiveMap=$.current,z.current.emissiveIntensity=.95,z.current.needsUpdate=!0)),Te.render($e,rt)};return Pi(),()=>{cancelAnimationFrame($s),window.removeEventListener("resize",vs),Te.domElement.removeEventListener("mousemove",Go),Te.domElement.removeEventListener("click",Ys),Te.dispose()}},[yt,Me]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"splash-hero",className:"relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none"}),u.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center px-4 text-center",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"Outfire Sistemas Contra Incêndio",className:"w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"})}),u.jsx("button",{onClick:_t,"aria-label":"Descer para a simulação da cozinha",className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none",children:u.jsx("div",{className:"w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all",children:u.jsx(Tm,{className:"w-6 h-6 text-[#d4af37] animate-bounce"})})})]}),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[450vh] bg-[#07080a]",children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none",children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(z0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(pc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(Po,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(Po,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(bv,{className:"w-4 h-4 text-cyan-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(_c,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(Po,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(zv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(G0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),_&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(B0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[_," — Clique para interagir"]})]}),Fe&&u.jsxs("div",{className:"absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse",children:[u.jsxs("div",{className:"flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Rm,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"Acionador Manual Disparado • Contagem de Segurança"})]}),u.jsxs("div",{className:"font-mono text-2xl font-black text-[#67e8f9]",children:["Supressão em ",S,"s"]}),u.jsxs("p",{className:"text-[11px] text-gray-200",children:["O saponificante ",u.jsx("strong",{children:"NÃO"})," é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento."]}),u.jsxs("button",{onClick:Yt,className:"mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30",children:[u.jsx(hc,{className:"w-3.5 h-3.5 text-white"}),u.jsx("span",{children:"Toque aqui para Abortar Disparo"})]})]}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden",children:[u.jsx("button",{onClick:At,"aria-label":"Avançar simulação para baixo",className:"w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0",children:u.jsx(Tm,{className:`w-5 h-5 text-[#d4af37] ${m!=="STANDBY"?"animate-bounce":"animate-pulse"}`})}),u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[m==="STANDBY"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-gray-200",children:["Cozinha Industrial em Standby • ",u.jsx("span",{className:"text-[#d4af37]",children:"Role para descer"})]})]}),m==="HEATING"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0",children:"FASE 1"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-amber-200 truncate",children:["Princípio de Incêndio (Óleo a ",A.temp,"°C) — Continue descendo"]})]}),m==="FIRE_ALARM"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:"FASE 2"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-red-200 truncate",children:["Alarme Térmico 145°C Disparado • Contagem: ",S,"s"]})]}),m==="SUPPRESSION"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]",children:"FASE 3"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-cyan-200 truncate",children:"Supressão Ativa: Saponificante Classe K + CO2 no duto"})]}),m==="EXTINGUISHED"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0",children:"FASE 4"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-emerald-200 truncate",children:"Cozinha Preservada • NBR 14518 Cumprida — Continue descendo"})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("button",{onClick:yt,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED"||Fe,className:`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Rm,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(Fe||m==="FIRE_ALARM")&&u.jsxs("button",{onClick:Yt,className:"py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95",children:[u.jsx(hc,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Abortar Disparo"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:Ot,className:"py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(j0,{className:"w-3 h-3"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1",children:[u.jsx(Sv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>lt("geral"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>lt("central"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>lt("fritadeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>lt("botoeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${I==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})]})})]})},_b=()=>{const[s,e]=Ie.useState("3d"),t=Ie.useRef(null),r=Ie.useRef(null),[o,l]=Ie.useState(!1),d=Ie.useRef(!1);d.current=o;const[f,p]=Ie.useState(!1),m=Ie.useRef(!1);m.current=f;const[x,v]=Ie.useState(null),S=Ie.useRef(null),M=Ie.useRef(null),T=Ie.useRef(null),A=Ie.useRef(null),y=()=>{l(D=>!D)},_=()=>{p(D=>!D)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Ie.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const D=r.current.clientWidth,U=r.current.clientHeight,L=new mg;L.background=new Ct(921879);const F=new Qn(40,D/U,.1,100);F.position.set(1.8,1.2,2.2),A.current=F;const j=new Tg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});j.setSize(D,U),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.shadowMap.enabled=!0,j.shadowMap.type=Of,j.toneMapping=yc,j.toneMappingExposure=1.15;const E=new Ag(F,j.domElement);E.enableDamping=!0,E.dampingFactor=.05,E.minDistance=1.2,E.maxDistance=6,E.target.set(0,0,0),T.current=E;const R=new _g(16774890,.9);L.add(R);const z=new Nf(16777215,1.5);z.position.set(3,4,3),z.castShadow=!0,L.add(z);const $=new Nf(13938487,.85);$.position.set(-3,-2,-3),L.add($);const K=new Vi({color:0,transparent:!0,opacity:.35}),ie=new Oe(new Xn(2.2,1.4),K);ie.rotation.x=-Math.PI/2,ie.position.set(0,-.65,0),L.add(ie);const ee=new vg().load("/assets/tampa-central-moderna.png");ee.colorSpace=Un;const q=new wt({color:1316379,metalness:.85,roughness:.35}),X=new wt({map:ee,metalness:.2,roughness:.35}),he=[q,q,q,q,X,q],ae=new Oe(new Ht(1.4,1,.58),he);ae.castShadow=!0,ae.receiveShadow=!0,L.add(ae);const k=new Vi({color:460810}),le=new Oe(new Xn(.88,.22),k);le.rotation.x=-Math.PI/2,le.position.set(0,.501,-.05),L.add(le);const Ne=new Oe(new Xn(.7,.22),k);Ne.rotation.x=Math.PI/2,Ne.position.set(0,-.501,-.05),L.add(Ne);const Xe=Rg(),qe=new gg(Xe);qe.colorSpace=Un;const te=new wt({map:qe,roughness:.2,metalness:.05,emissive:16777215,emissiveMap:qe,emissiveIntensity:.9}),de=new Oe(new Xn(.219,.164),te);de.position.set(0,0,.295),L.add(de);const Me=new wt({color:1579552,metalness:.9,roughness:.35}),Fe=new Oe(new Ht(.238,.182,.008),Me);Fe.position.set(0,0,.291),L.add(Fe);const Pe=new wt({color:11580344,metalness:.95,roughness:.2}),yt=new en(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([me,fe])=>{const xe=new Oe(yt,Pe);xe.rotation.x=Math.PI/2,xe.position.set(me,fe,.295),L.add(xe)});const Yt=new Vi({color:460810}),_t=new Oe(new Xn(.04,.12),Yt);_t.rotation.y=Math.PI,_t.position.set(-.5,.3,-.291),L.add(_t);const At=new Oe(new Xn(.04,.12),Yt);At.rotation.y=Math.PI,At.position.set(.5,.3,-.291),L.add(At);const Ot=new wt({color:11580344,metalness:.9,roughness:.2}),lt=new en(.012,.012,.015,8),tt=new Nn;tt.position.set(0,0,-.05),L.add(tt),S.current=tt;const P=new wt({color:2040619,metalness:.8,roughness:.35}),$e=new Oe(new Ht(.95,.02,.25),P);$e.position.set(0,.505,0),$e.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},tt.add($e),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([me,fe,xe])=>{const Je=new Oe(lt,Ot);Je.position.set(me,fe,xe),tt.add(Je)});const mt=new wt({color:13948120,metalness:.9,roughness:.2}),rt=new Oe(new Ht(.85,.44,.2),mt);rt.position.set(0,.27,0),rt.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},tt.add(rt);const Te=new Vi({color:15381256}),O=new Oe(new Xn(.24,.08),Te);O.position.set(0,.27,.101),tt.add(O);const w=new Nn;w.position.set(0,0,-.05),L.add(w),M.current=w;const H=new wt({color:2040619,metalness:.8,roughness:.35}),pe=new Oe(new Ht(.74,.02,.24),H);pe.position.set(0,-.505,0),pe.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},w.add(pe),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([me,fe,xe])=>{const Je=new Oe(lt,Ot);Je.position.set(me,fe,xe),w.add(Je)});const ge=new wt({color:592397,roughness:.5}),ue=new Oe(new Ht(.3,.38,.18),ge);ue.position.set(-.18,-.305,0),ue.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},w.add(ue);const ze=new Oe(new Ht(.3,.38,.18),ge);ze.position.set(.18,-.305,0),ze.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},w.add(ze);const Ee=new wt({color:2450411,metalness:.8}),He=new wt({color:15680580,metalness:.8}),at=new Oe(new en(.012,.012,.03),Ee);at.position.set(-.24,-.1,.05),w.add(at);const _e=new Oe(new en(.012,.012,.03),He);_e.position.set(-.12,-.1,.05),w.add(_e);const Ae=new Oe(new en(.012,.012,.03),Ee);Ae.position.set(.12,-.1,.05),w.add(Ae);const Ve=new Oe(new en(.012,.012,.03),He);Ve.position.set(.24,-.1,.05),w.add(Ve);const je=new yg,we=new pt,ht=me=>{var Je,Dt;const fe=j.domElement.getBoundingClientRect();we.x=(me.clientX-fe.left)/fe.width*2-1,we.y=-((me.clientY-fe.top)/fe.height)*2+1,je.setFromCamera(we,F);const xe=je.intersectObjects([tt,w,ae],!0);if(xe.length>0){let bt=xe[0].object;if((Je=bt.userData)!=null&&Je.isPsu){j.domElement.style.cursor="pointer",v(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((Dt=bt.userData)!=null&&Dt.isBattery){j.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{j.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}j.domElement.style.cursor="default",v(null)},G=me=>{var Je,Dt;const fe=j.domElement.getBoundingClientRect();we.x=(me.clientX-fe.left)/fe.width*2-1,we.y=-((me.clientY-fe.top)/fe.height)*2+1,je.setFromCamera(we,F);const xe=je.intersectObjects([tt,w],!0);if(xe.length>0){const bt=xe[0].object;(Je=bt.userData)!=null&&Je.isPsu?l(mn=>!mn):(Dt=bt.userData)!=null&&Dt.isBattery&&p(mn=>!mn)}};j.domElement.addEventListener("mousemove",ht),j.domElement.addEventListener("click",G);const De=()=>{if(!r.current||!j||!F)return;const me=r.current.clientWidth,fe=r.current.clientHeight;F.aspect=me/fe,F.updateProjectionMatrix(),j.setSize(me,fe)};window.addEventListener("resize",De);let Se;const Le=()=>{Se=requestAnimationFrame(Le);const me=d.current?.52:0;S.current&&(S.current.position.y+=(me-S.current.position.y)*.12);const fe=m.current?-.52:0;M.current&&(M.current.position.y+=(fe-M.current.position.y)*.12),E.update(),j.render(L,F)};return Le(),()=>{cancelAnimationFrame(Se),window.removeEventListener("resize",De),j.domElement.removeEventListener("mousemove",ht),j.domElement.removeEventListener("click",G),j.dispose()}},[s]);const I=[{icon:Tv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:Cm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:kv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:yv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Od,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:z0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(Cm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(jv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(xv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(j0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(Fo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(Fv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(rs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(sc,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(k0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:I.map((D,U)=>{const L=D.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(L,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:D.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:D.desc})]},U)})})]})]})},yb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Od,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(hc,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Po,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(hc,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Od,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(_c,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(Fo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),Sb=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Lv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(Ev,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(_c,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(wv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(_v,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Mb=({onAddToCart:s})=>{const[e,t]=Ie.useState(1),[r,o]=Ie.useState(9),[l,d]=Ie.useState(!0),[f,p]=Ie.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const _=[...f];for(let C=f.length+1;C<=y;C++)_.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(_)}else y<f.length&&p(f.slice(0,y))},x=(y,_)=>{const C=[...f];C[y].lengthMeters=Math.max(1,Math.min(8,Number(_.toFixed(1)))),p(C)},v=(y,_)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},D={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},U=[...f];U[y].appliances.push({id:Math.random().toString(36).substring(7),name:C[_],type:_,icon:I[_],widthMeters:D[_]}),p(U)},S=(y,_)=>{const C=[...f];C[y].appliances.splice(_,1),p(C)},M=Ie.useMemo(()=>{let y=0,_=0,C=0,I=0;f.forEach(q=>{y+=q.appliances.length,_+=2,l&&(C+=1);const X=Math.max(1,Math.round(q.lengthMeters/.9));I+=X});const D=y+_+C,U=D*2,L=Math.max(9,U);let F=9;L>9&&L<=16?F=16:L>16&&L<=25?F=25:L>25&&(F=Math.ceil(L/9)*9);const j=Math.max(1,Math.ceil(r/3)),E=j,R=Math.max(10,Math.ceil(r/3*5)),z=R<=10?10:R<=25?25:45,$=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,K=e===1?8900:e===2?14500:19800,ie=D*185+j*210,re=I*295+E*320,ee=K+ie+re+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:_,damperNozzlesCount:C,totalSaponificanteNozzles:D,saponificanteLiters:L,recommendedSaponificanteCylinderLiters:F,hoodSensorsCount:I,co2NozzlesCount:j,ductSensorsCount:E,co2Kg:R,recommendedCo2CylinderKg:z,centralModel:$,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:ee}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;y+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,y+=`🏢 *Configuração da Cozinha:*
`,y+=`• Quantidade de Coifas: ${e} independente(s)
`,y+=`• Comprimento do Duto de Exaustão: ${r} metros

`,f.forEach((C,I)=>{y+=`📍 *Coifa ${I+1} (${C.lengthMeters}m):*
`,y+=`  Equipamentos sob a coifa: ${C.appliances.map(D=>D.name).join(", ")||"Nenhum"}
`}),y+=`
⚙️ *Memória de Cálculo de Supressão:*
`,y+=`• Bicos de Saponificante (Classe K): ${M.totalSaponificanteNozzles} bicos (${M.applianceNozzlesCount} equipamentos + ${M.plenumNozzlesCount} pleno + ${M.damperNozzlesCount} colarinho)
`,y+=`• Volume de Saponificante: ${M.saponificanteLiters} Litros (Cilindro recomendado: ${M.recommendedSaponificanteCylinderLiters}L)
`,y+=`• Sensores Reguláveis na Coifa (145°C): ${M.hoodSensorsCount} unidades
`,y+=`• Bicos de CO2 no Duto: ${M.co2NozzlesCount} unidades (1 a cada 3m)
`,y+=`• Sensores Reguláveis no Duto (300°C): ${M.ductSensorsCount} unidades (1 a cada 3m)
`,y+=`• Volume de CO2 no Duto: ${M.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,y+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,y+=`• Modelo da Central: ${M.centralModel}

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const _=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${_}`,"_blank")},A=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(F0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(G0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,_)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:_+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:C=>x(_,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((C,I)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:C.icon}),u.jsx("span",{className:"font-medium",children:C.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(_,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx(V0,{className:"w-3.5 h-3.5"})})]},C.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>v(_,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ao,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>v(_,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ao,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>v(_,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ao,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>v(_,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ao,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,_)=>{const C=180+_*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:C,y1:"24",x2:C,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:C,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${C-4},43 ${C+4},43 ${C},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:C,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:C+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+18.5}, 37.5)`}),u.jsx("text",{x:C+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${_}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,_)=>{const C=e,I=635,D=C===1?0:C===2?30:18,U=(I-(C-1)*D)/C,L=95+_*(U+D),F=C===1?84:C===2?65:52,j=L+(U-F)/2,E=F+16,R=j-8,z=66,$=38,K=y.appliances.length>0?y.appliances:[{id:`app-${_}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:j,y:"58",width:F,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${_}`,children:[u.jsx("rect",{x:R-2,y:z,width:E+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R-2,y:z+$-4,width:E+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:R,y:z+3,width:E,height:$-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:R+E-2,y:z+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:R+E+4,cy:z+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:R+E/2,y:z+18,fill:"#ffffff",fontSize:C===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",C>1?`#${_+1}`:""]}),u.jsx("text",{x:R+E/2,y:z+27,fill:"#fca5a5",fontSize:C===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:_===0?95:L-D,y1:"122",x2:L+U-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${L},158 ${L+U*.12},118 ${L+U*.88},118 ${L+U},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:L,y:"158",width:U,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:L+U/2,y:"172",fill:"#f8fafc",fontSize:C===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",C>1?`${_+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",_+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:L+U*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+U*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:L+U*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:L+U*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((ie,re,ee)=>{const q=L+25+re*((U-50)/Math.max(1,ee.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:q,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:q,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${_}-${re}`)}),u.jsx("rect",{x:L,y:"240",width:U,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),K.map((ie,re)=>{const ee=K.length,q=(U-12)/ee,X=L+6+re*q,he=q-6;return u.jsxs("g",{children:[u.jsx("rect",{x:X,y:"245",width:he,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:X+he/2,y:"272",fill:"#ffffff",fontSize:C===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:ie.name.split(" ")[0]}),u.jsx("text",{x:X+he/2,y:"286",fill:"#94a3b8",fontSize:C===3?"5.5":"6.5",textAnchor:"middle",children:ie.type.toUpperCase()}),u.jsx("line",{x1:X+he/2,y1:"178",x2:X+he/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${X+he/2-4},225 ${X+he/2+4},225 ${X+he/2},233`,fill:"#d4af37"}),u.jsx("text",{x:X+he/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},ie.id||`app-${_}-${re}`)})]},`hood-block-${y.id||_}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(rs,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Nr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(vv,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},wb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],bb=({onAddToCart:s})=>{const[e,t]=Ie.useState("all"),[r,o]=Ie.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=wb.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(mc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Iv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(Fo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(Mv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(mc,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(Nr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Eb=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Em,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(Ud,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(Em,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(k0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Baixar PDF"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(Bv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(pc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Tb=()=>{const[s,e]=Ie.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Fo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(B0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Av,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Cb=()=>{const[s,e]=Ie.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Ie.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(Nr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(Nr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(Nr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Cv,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(rs,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Uv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Ab=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=Ie.useState(!1),[p,m]=Ie.useState(!1);if(!s)return null;const x=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),v=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{M+=`${A+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Nm,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Nm,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Pv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(Ao,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx(V0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(Nr,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Am,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(pc,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(_c,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Dv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(sc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Am,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(sc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(pc,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(sc,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Rb=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(Nv,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Nb(){const[s,e]=Ie.useState([]),[t,r]=Ie.useState(!1),o=m=>{e(x=>x.find(S=>S.product.id===m.id)?x.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(S=>{if(S.product.id===m){const M=S.quantity+x;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(x=>x.filter(v=>v.product.id!==m))},f=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(Vv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(vb,{}),u.jsx(_b,{}),u.jsx(yb,{}),u.jsx(Sb,{}),u.jsx(Mb,{onAddToCart:o}),u.jsx(bb,{onAddToCart:o}),u.jsx(Eb,{}),u.jsx(Tb,{})]}),u.jsx(Cb,{}),u.jsx(Ab,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Rb,{})]})}hv.createRoot(document.getElementById("root")).render(u.jsx(av.StrictMode,{children:u.jsx(Nb,{})}));
