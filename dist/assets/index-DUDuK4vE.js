(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function F0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Zu={exports:{}},So={},Qu={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function rv(){if(xm)return Pt;xm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(F,oe,Ne){this.props=F,this.context=oe,this.refs=A,this.updater=Ne||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,oe){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,oe,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(F,oe,Ne){this.props=F,this.context=oe,this.refs=A,this.updater=Ne||M}var L=C.prototype=new _;L.constructor=C,T(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(F,oe,Ne){var qe,Ye={},te=null,de=null;if(oe!=null)for(qe in oe.ref!==void 0&&(de=oe.ref),oe.key!==void 0&&(te=""+oe.key),oe)I.call(oe,qe)&&!O.hasOwnProperty(qe)&&(Ye[qe]=oe[qe]);var Me=arguments.length-2;if(Me===1)Ye.children=Ne;else if(1<Me){for(var Fe=Array(Me),Pe=0;Pe<Me;Pe++)Fe[Pe]=arguments[Pe+2];Ye.children=Fe}if(F&&F.defaultProps)for(qe in Me=F.defaultProps,Me)Ye[qe]===void 0&&(Ye[qe]=Me[qe]);return{$$typeof:s,type:F,key:te,ref:de,props:Ye,_owner:D.current}}function b(F,oe){return{$$typeof:s,type:F.type,key:oe,ref:F.ref,props:F.props,_owner:F._owner}}function N(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var oe={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return oe[Ne]})}var $=/\/+/g;function Z(F,oe){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):oe.toString(36)}function ie(F,oe,Ne,qe,Ye){var te=typeof F;(te==="undefined"||te==="boolean")&&(F=null);var de=!1;if(F===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(F.$$typeof){case s:case e:de=!0}}if(de)return de=F,Ye=Ye(de),F=qe===""?"."+Z(de,0):qe,P(Ye)?(Ne="",F!=null&&(Ne=F.replace($,"$&/")+"/"),ie(Ye,oe,Ne,"",function(Pe){return Pe})):Ye!=null&&(N(Ye)&&(Ye=b(Ye,Ne+(!Ye.key||de&&de.key===Ye.key?"":(""+Ye.key).replace($,"$&/")+"/")+F)),oe.push(Ye)),1;if(de=0,qe=qe===""?".":qe+":",P(F))for(var Me=0;Me<F.length;Me++){te=F[Me];var Fe=qe+Z(te,Me);de+=ie(te,oe,Ne,Fe,Ye)}else if(Fe=S(F),typeof Fe=="function")for(F=Fe.call(F),Me=0;!(te=F.next()).done;)te=te.value,Fe=qe+Z(te,Me++),de+=ie(te,oe,Ne,Fe,Ye);else if(te==="object")throw oe=String(F),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return de}function se(F,oe,Ne){if(F==null)return F;var qe=[],Ye=0;return ie(F,qe,"","",function(te){return oe.call(Ne,te,Ye++)}),qe}function ee(F){if(F._status===-1){var oe=F._result;oe=oe(),oe.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=oe)}if(F._status===1)return F._result.default;throw F._result}var q={current:null},X={transition:null},he={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:X,ReactCurrentOwner:D};function ae(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:se,forEach:function(F,oe,Ne){se(F,function(){oe.apply(this,arguments)},Ne)},count:function(F){var oe=0;return se(F,function(){oe++}),oe},toArray:function(F){return se(F,function(oe){return oe})||[]},only:function(F){if(!N(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=o,Pt.PureComponent=C,Pt.StrictMode=r,Pt.Suspense=p,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Pt.act=ae,Pt.cloneElement=function(F,oe,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var qe=T({},F.props),Ye=F.key,te=F.ref,de=F._owner;if(oe!=null){if(oe.ref!==void 0&&(te=oe.ref,de=D.current),oe.key!==void 0&&(Ye=""+oe.key),F.type&&F.type.defaultProps)var Me=F.type.defaultProps;for(Fe in oe)I.call(oe,Fe)&&!O.hasOwnProperty(Fe)&&(qe[Fe]=oe[Fe]===void 0&&Me!==void 0?Me[Fe]:oe[Fe])}var Fe=arguments.length-2;if(Fe===1)qe.children=Ne;else if(1<Fe){Me=Array(Fe);for(var Pe=0;Pe<Fe;Pe++)Me[Pe]=arguments[Pe+2];qe.children=Me}return{$$typeof:s,type:F.type,key:Ye,ref:te,props:qe,_owner:de}},Pt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Pt.createElement=z,Pt.createFactory=function(F){var oe=z.bind(null,F);return oe.type=F,oe},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(F){return{$$typeof:f,render:F}},Pt.isValidElement=N,Pt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ee}},Pt.memo=function(F,oe){return{$$typeof:m,type:F,compare:oe===void 0?null:oe}},Pt.startTransition=function(F){var oe=X.transition;X.transition={};try{F()}finally{X.transition=oe}},Pt.unstable_act=ae,Pt.useCallback=function(F,oe){return q.current.useCallback(F,oe)},Pt.useContext=function(F){return q.current.useContext(F)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(F){return q.current.useDeferredValue(F)},Pt.useEffect=function(F,oe){return q.current.useEffect(F,oe)},Pt.useId=function(){return q.current.useId()},Pt.useImperativeHandle=function(F,oe,Ne){return q.current.useImperativeHandle(F,oe,Ne)},Pt.useInsertionEffect=function(F,oe){return q.current.useInsertionEffect(F,oe)},Pt.useLayoutEffect=function(F,oe){return q.current.useLayoutEffect(F,oe)},Pt.useMemo=function(F,oe){return q.current.useMemo(F,oe)},Pt.useReducer=function(F,oe,Ne){return q.current.useReducer(F,oe,Ne)},Pt.useRef=function(F){return q.current.useRef(F)},Pt.useState=function(F){return q.current.useState(F)},Pt.useSyncExternalStore=function(F,oe,Ne){return q.current.useSyncExternalStore(F,oe,Ne)},Pt.useTransition=function(){return q.current.useTransition()},Pt.version="18.3.1",Pt}var vm;function Uf(){return vm||(vm=1,Qu.exports=rv()),Qu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function sv(){if(_m)return So;_m=1;var s=Uf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var x,v={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:v,_owner:o.current}}return So.Fragment=t,So.jsx=d,So.jsxs=d,So}var ym;function av(){return ym||(ym=1,Zu.exports=sv()),Zu.exports}var u=av(),Ue=Uf();const ov=F0(Ue);var Bl={},Ju={exports:{}},si={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function lv(){return Sm||(Sm=1,(function(s){function e(X,he){var ae=X.length;X.push(he);e:for(;0<ae;){var F=ae-1>>>1,oe=X[F];if(0<o(oe,he))X[F]=he,X[ae]=oe,ae=F;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var he=X[0],ae=X.pop();if(ae!==he){X[0]=ae;e:for(var F=0,oe=X.length,Ne=oe>>>1;F<Ne;){var qe=2*(F+1)-1,Ye=X[qe],te=qe+1,de=X[te];if(0>o(Ye,ae))te<oe&&0>o(de,Ye)?(X[F]=de,X[te]=ae,F=te):(X[F]=Ye,X[qe]=ae,F=qe);else if(te<oe&&0>o(de,ae))X[F]=de,X[te]=ae,F=te;else break e}}return he}function o(X,he){var ae=X.sortIndex-he.sortIndex;return ae!==0?ae:X.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],x=1,v=null,S=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var he=t(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=X)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(m)}}function P(X){if(A=!1,L(X),!T)if(t(p)!==null)T=!0,ee(I);else{var he=t(m);he!==null&&q(P,he.startTime-X)}}function I(X,he){T=!1,A&&(A=!1,_(z),z=-1),M=!0;var ae=S;try{for(L(he),v=t(p);v!==null&&(!(v.expirationTime>he)||X&&!B());){var F=v.callback;if(typeof F=="function"){v.callback=null,S=v.priorityLevel;var oe=F(v.expirationTime<=he);he=s.unstable_now(),typeof oe=="function"?v.callback=oe:v===t(p)&&r(p),L(he)}else r(p);v=t(p)}if(v!==null)var Ne=!0;else{var qe=t(m);qe!==null&&q(P,qe.startTime-he),Ne=!1}return Ne}finally{v=null,S=ae,M=!1}}var D=!1,O=null,z=-1,b=5,N=-1;function B(){return!(s.unstable_now()-N<b)}function $(){if(O!==null){var X=s.unstable_now();N=X;var he=!0;try{he=O(!0,X)}finally{he?Z():(D=!1,O=null)}}else D=!1}var Z;if(typeof C=="function")Z=function(){C($)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,se=ie.port2;ie.port1.onmessage=$,Z=function(){se.postMessage(null)}}else Z=function(){y($,0)};function ee(X){O=X,D||(D=!0,Z())}function q(X,he){z=y(function(){X(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ee(I))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var he=3;break;default:he=S}var ae=S;S=he;try{return X()}finally{S=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,he){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=S;S=X;try{return he()}finally{S=ae}},s.unstable_scheduleCallback=function(X,he,ae){var F=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?F+ae:F):ae=F,X){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ae+oe,X={id:x++,callback:he,priorityLevel:X,startTime:ae,expirationTime:oe,sortIndex:-1},ae>F?(X.sortIndex=ae,e(m,X),t(p)===null&&X===t(m)&&(A?(_(z),z=-1):A=!0,q(P,ae-F))):(X.sortIndex=oe,e(p,X),T||M||(T=!0,ee(I))),X},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(X){var he=S;return function(){var ae=S;S=he;try{return X.apply(this,arguments)}finally{S=ae}}}})(td)),td}var Mm;function cv(){return Mm||(Mm=1,ed.exports=lv()),ed.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function uv(){if(wm)return si;wm=1;var s=Uf(),e=cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function S(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),B=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),se=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),X=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,F;function oe(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function qe(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(n,[],i)}else{try{i.call()}catch(le){c=le}n.call(i.prototype)}else{try{throw Error()}catch(le){c=le}n()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var h=le.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,k=g.length-1;1<=E&&0<=k&&h[E]!==g[k];)k--;for(;1<=E&&0<=k;E--,k--)if(h[E]!==g[k]){if(E!==1||k!==1)do if(E--,k--,0>k||h[E]!==g[k]){var V=`
`+h[E].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=E&&0<=k);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?oe(n):""}function Ye(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case b:return"Profiler";case z:return"StrictMode";case Z:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case se:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Mt(n){n._valueTracker||(n._valueTracker=Pe(n))}function $t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Me(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function lt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function it(n,i){lt(n,i);var a=Me(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Ze(n,i.type,a):i.hasOwnProperty("defaultValue")&&Ze(n,i.type,Me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Ze(n,i,a){(i!=="number"||St(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var dt=Array.isArray;function nt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Me(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Te(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(dt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Me(a)}}function w(n,i){var a=Me(i.value),c=Me(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function H(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ue,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ee(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var He={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(He).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),He[i]=He[n]})});function _e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||He.hasOwnProperty(n)&&He[n]?(""+i).trim():i+"px"}function Re(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ve=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ze(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function we(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,Se=null,Le=null;function me(n){if(n=so(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=el(i),De(n.stateNode,n.type,i))}}function fe(n){Se?Le?Le.push(n):Le=[n]:Se=n}function xe(){if(Se){var n=Se,i=Le;if(Le=Se=null,me(n),i)for(n=0;n<i.length;n++)me(i[n])}}function Je(n,i){return n(i)}function Dt(){}var bt=!1;function pn(n,i,a){if(bt)return n(i,a);bt=!0;try{return Je(n,i,a)}finally{bt=!1,(Se!==null||Le!==null)&&(Dt(),xe())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=el(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ls=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{ls=!1}function lr(n,i,a,c,h,g,E,k,V){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(ye){this.onError(ye)}}var cr=!1,ur=null,Pi=!1,_i=null,tn={onError:function(n){cr=!0,ur=n}};function Wa(n,i,a,c,h,g,E,k,V){cr=!1,ur=null,lr.apply(tn,arguments)}function cs(n,i,a,c,h,g,E,k,V){if(Wa.apply(this,arguments),cr){if(cr){var le=ur;cr=!1,ur=null}else throw Error(t(198));Pi||(Pi=!0,_i=le)}}function Qn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Wi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ci(n){if(Qn(n)!==n)throw Error(t(188))}function Lr(n){var i=n.alternate;if(!i){if(i=Qn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return ci(h),n;if(g===c)return ci(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,k=h.child;k;){if(k===a){E=!0,a=h,c=g;break}if(k===c){E=!0,c=h,a=g;break}k=k.sibling}if(!E){for(k=g.child;k;){if(k===a){E=!0,a=g,c=h;break}if(k===c){E=!0,c=g,a=h;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function yi(n){return n=Lr(n),n!==null?Hs(n):null}function Hs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hs(n);if(i!==null)return i;n=n.sibling}return null}var Ws=e.unstable_scheduleCallback,us=e.unstable_cancelCallback,Xs=e.unstable_shouldYield,ds=e.unstable_requestPaint,Zt=e.unstable_now,R=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,Q=e.unstable_LowPriority,Ie=e.unstable_IdlePriority,je=null,Ae=null;function $e(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:ht,ot=Math.log,st=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(ot(n)/st|0)|0}var It=64,Ht=4194304;function jt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function xt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var k=E&~h;k!==0?c=jt(k):(g&=E,g!==0&&(c=jt(g)))}else E=a&~h,E!==0?c=jt(E):g!==0&&(c=jt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ge(i),h=1<<a,c|=n[a],i&=~h;return c}function rt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ot(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-Ge(g),k=1<<E,V=h[E];V===-1?((k&a)===0||(k&c)!==0)&&(h[E]=rt(k,i)):V<=i&&(n.expiredLanes|=k),g&=~k}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xn(){var n=It;return It<<=1,(It&4194240)===0&&(It=64),n}function ui(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function on(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ge(i),n[i]=a}function Xi(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ge(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Ft(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ge(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var vt=0;function bn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var un,Wt,qi,di,Xa,qs=!1,fs=[],Si=null,Jn=null,On=null,hs=new Map,ps=new Map,Mi=[],Ir="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vo(n,i){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":Jn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":hs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ps.delete(i.pointerId)}}function ms(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=so(i),i!==null&&Wt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Go(n,i,a,c,h){switch(i){case"focusin":return Si=ms(Si,n,i,a,c,h),!0;case"dragenter":return Jn=ms(Jn,n,i,a,c,h),!0;case"mouseover":return On=ms(On,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return hs.set(g,ms(hs.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,ps.set(g,ms(ps.get(g)||null,n,i,a,c,h)),!0}return!1}function Ys(n){var i=_s(n.target);if(i!==null){var a=Qn(i);if(a!==null){if(i=a.tag,i===13){if(i=Wi(a),i!==null){n.blockedOn=i,Xa(n.priority,function(){qi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $s(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Qs(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);mt=c,a.target.dispatchEvent(c),mt=null}else return i=so(a),i!==null&&Wt(i),n.blockedOn=a,!1;i.shift()}return!0}function Ho(n,i,a){$s(n)&&a.delete(i)}function Wo(){qs=!1,Si!==null&&$s(Si)&&(Si=null),Jn!==null&&$s(Jn)&&(Jn=null),On!==null&&$s(On)&&(On=null),hs.forEach(Ho),ps.forEach(Ho)}function dr(n,i){n.blockedOn===i&&(n.blockedOn=null,qs||(qs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Wo)))}function gs(n){function i(h){return dr(h,n)}if(0<fs.length){dr(fs[0],n);for(var a=1;a<fs.length;a++){var c=fs[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Si!==null&&dr(Si,n),Jn!==null&&dr(Jn,n),On!==null&&dr(On,n),hs.forEach(i),ps.forEach(i),a=0;a<Mi.length;a++)c=Mi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Mi.length&&(a=Mi[0],a.blockedOn===null);)Ys(a),a.blockedOn===null&&Mi.shift()}var Ur=P.ReactCurrentBatchConfig,xs=!0;function Ks(n,i,a,c){var h=vt,g=Ur.transition;Ur.transition=null;try{vt=1,Zs(n,i,a,c)}finally{vt=h,Ur.transition=g}}function Or(n,i,a,c){var h=vt,g=Ur.transition;Ur.transition=null;try{vt=4,Zs(n,i,a,c)}finally{vt=h,Ur.transition=g}}function Zs(n,i,a,c){if(xs){var h=Qs(n,i,a,c);if(h===null)jc(n,i,c,vs,a),Vo(n,c);else if(Go(h,n,i,a,c))c.stopPropagation();else if(Vo(n,c),i&4&&-1<Ir.indexOf(n)){for(;h!==null;){var g=so(h);if(g!==null&&un(g),g=Qs(n,i,a,c),g===null&&jc(n,i,c,vs,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else jc(n,i,c,null,a)}}var vs=null;function Qs(n,i,a,c){if(vs=null,n=G(c),n=_s(n),n!==null)if(i=Qn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Wi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return vs=n,null}function qa(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R()){case Y:return 1;case ce:return 4;case re:case Q:return 16;case Ie:return 536870912;default:return 16}default:return 16}}var Di=null,Js=null,Nt=null;function pt(){if(Nt)return Nt;var n,i=Js,a=i.length,c,h="value"in Di?Di.value:Di.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return Nt=h.slice(n,1<c?1-c:void 0)}function qt(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Fn(){return!0}function qn(){return!1}function We(n){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Fn:qn,this.isPropagationStopped=qn,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Fn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Fn)},persist:function(){},isPersistent:Fn}),i}var kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dn=We(kn),Ya=ae({},kn,{view:0,detail:0}),Pg=We(Ya),Cc,Ac,$a,Xo=ae({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==$a&&($a&&n.type==="mousemove"?(Cc=n.screenX-$a.screenX,Ac=n.screenY-$a.screenY):Ac=Cc=0,$a=n),Cc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),ah=We(Xo),Dg=ae({},Xo,{dataTransfer:0}),Lg=We(Dg),Ig=ae({},Ya,{relatedTarget:0}),Rc=We(Ig),Ug=ae({},kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=We(Ug),Fg=ae({},kn,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kg=We(Fg),Bg=ae({},kn,{data:0}),oh=We(Bg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vg[n])?!!i[n]:!1}function Nc(){return Gg}var Hg=ae({},Ya,{key:function(n){if(n.key){var i=zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=qt(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nc,charCode:function(n){return n.type==="keypress"?qt(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?qt(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=We(Hg),Xg=ae({},Xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=We(Xg),qg=ae({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nc}),Yg=We(qg),$g=ae({},kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=We($g),Zg=ae({},Xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=We(Zg),Jg=[9,13,27,32],Pc=f&&"CompositionEvent"in window,Ka=null;f&&"documentMode"in document&&(Ka=document.documentMode);var ex=f&&"TextEvent"in window&&!Ka,ch=f&&(!Pc||Ka&&8<Ka&&11>=Ka),uh=" ",dh=!1;function fh(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ea=!1;function tx(n,i){switch(n){case"compositionend":return hh(i);case"keypress":return i.which!==32?null:(dh=!0,uh);case"textInput":return n=i.data,n===uh&&dh?null:n;default:return null}}function nx(n,i){if(ea)return n==="compositionend"||!Pc&&fh(n,i)?(n=pt(),Nt=Js=Di=null,ea=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ch&&i.locale!=="ko"?null:i.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ph(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ix[n.type]:i==="textarea"}function mh(n,i,a,c){fe(c),i=Zo(i,"onChange"),0<i.length&&(a=new dn("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Za=null,Qa=null;function rx(n){Lh(n,0)}function qo(n){var i=sa(n);if($t(i))return n}function sx(n,i){if(n==="change")return i}var gh=!1;if(f){var Dc;if(f){var Lc="oninput"in document;if(!Lc){var xh=document.createElement("div");xh.setAttribute("oninput","return;"),Lc=typeof xh.oninput=="function"}Dc=Lc}else Dc=!1;gh=Dc&&(!document.documentMode||9<document.documentMode)}function vh(){Za&&(Za.detachEvent("onpropertychange",_h),Qa=Za=null)}function _h(n){if(n.propertyName==="value"&&qo(Qa)){var i=[];mh(i,Qa,n,G(n)),pn(rx,i)}}function ax(n,i,a){n==="focusin"?(vh(),Za=i,Qa=a,Za.attachEvent("onpropertychange",_h)):n==="focusout"&&vh()}function ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qo(Qa)}function lx(n,i){if(n==="click")return qo(i)}function cx(n,i){if(n==="input"||n==="change")return qo(i)}function ux(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Li=typeof Object.is=="function"?Object.is:ux;function Ja(n,i){if(Li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!Li(n[h],i[h]))return!1}return!0}function yh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sh(n,i){var a=yh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=yh(a)}}function Mh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Mh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function wh(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=St(n.document)}return i}function Ic(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dx(n){var i=wh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Mh(a.ownerDocument.documentElement,a)){if(c!==null&&Ic(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=Sh(a,g);var E=Sh(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fx=f&&"documentMode"in document&&11>=document.documentMode,ta=null,Uc=null,eo=null,Oc=!1;function bh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Oc||ta==null||ta!==St(c)||(c=ta,"selectionStart"in c&&Ic(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),eo&&Ja(eo,c)||(eo=c,c=Zo(Uc,"onSelect"),0<c.length&&(i=new dn("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ta)))}function Yo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var na={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},Fc={},Eh={};f&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete na.animationend.animation,delete na.animationiteration.animation,delete na.animationstart.animation),"TransitionEvent"in window||delete na.transitionend.transition);function $o(n){if(Fc[n])return Fc[n];if(!na[n])return n;var i=na[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Fc[n]=i[a];return n}var Th=$o("animationend"),Ch=$o("animationiteration"),Ah=$o("animationstart"),Rh=$o("transitionend"),Nh=new Map,Ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,i){Nh.set(n,i),l(i,[n])}for(var kc=0;kc<Ph.length;kc++){var Bc=Ph[kc],hx=Bc.toLowerCase(),px=Bc[0].toUpperCase()+Bc.slice(1);Fr(hx,"on"+px)}Fr(Th,"onAnimationEnd"),Fr(Ch,"onAnimationIteration"),Fr(Ah,"onAnimationStart"),Fr("dblclick","onDoubleClick"),Fr("focusin","onFocus"),Fr("focusout","onBlur"),Fr(Rh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Dh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,cs(c,i,void 0,n),n.currentTarget=null}function Lh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var k=c[E],V=k.instance,le=k.currentTarget;if(k=k.listener,V!==g&&h.isPropagationStopped())break e;Dh(h,k,le),g=V}else for(E=0;E<c.length;E++){if(k=c[E],V=k.instance,le=k.currentTarget,k=k.listener,V!==g&&h.isPropagationStopped())break e;Dh(h,k,le),g=V}}}if(Pi)throw n=_i,Pi=!1,_i=null,n}function Qt(n,i){var a=i[qc];a===void 0&&(a=i[qc]=new Set);var c=n+"__bubble";a.has(c)||(Ih(i,n,2,!1),a.add(c))}function zc(n,i,a){var c=0;i&&(c|=4),Ih(a,n,c,i)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function no(n){if(!n[Ko]){n[Ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(mx.has(a)||zc(a,!1,n),zc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ko]||(i[Ko]=!0,zc("selectionchange",!1,i))}}function Ih(n,i,a,c){switch(qa(i)){case 1:var h=Ks;break;case 4:h=Or;break;default:h=Zs}a=h.bind(null,i,a,n),h=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function jc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;E=E.return}for(;k!==null;){if(E=_s(k),E===null)return;if(V=E.tag,V===5||V===6){c=g=E;continue e}k=k.parentNode}}c=c.return}pn(function(){var le=g,ye=G(a),be=[];e:{var ve=Nh.get(n);if(ve!==void 0){var Xe=dn,Qe=n;switch(n){case"keypress":if(qt(a)===0)break e;case"keydown":case"keyup":Xe=Wg;break;case"focusin":Qe="focus",Xe=Rc;break;case"focusout":Qe="blur",Xe=Rc;break;case"beforeblur":case"afterblur":Xe=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Yg;break;case Th:case Ch:case Ah:Xe=Og;break;case Rh:Xe=Kg;break;case"scroll":Xe=Pg;break;case"wheel":Xe=Qg;break;case"copy":case"cut":case"paste":Xe=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=lh}var et=(i&4)!==0,fn=!et&&n==="scroll",J=et?ve!==null?ve+"Capture":null:ve;et=[];for(var W=le,ne;W!==null;){ne=W;var Ce=ne.stateNode;if(ne.tag===5&&Ce!==null&&(ne=Ce,J!==null&&(Ce=wn(W,J),Ce!=null&&et.push(io(W,Ce,ne)))),fn)break;W=W.return}0<et.length&&(ve=new Xe(ve,Qe,null,a,ye),be.push({event:ve,listeners:et}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",ve&&a!==mt&&(Qe=a.relatedTarget||a.fromElement)&&(_s(Qe)||Qe[fr]))break e;if((Xe||ve)&&(ve=ye.window===ye?ye:(ve=ye.ownerDocument)?ve.defaultView||ve.parentWindow:window,Xe?(Qe=a.relatedTarget||a.toElement,Xe=le,Qe=Qe?_s(Qe):null,Qe!==null&&(fn=Qn(Qe),Qe!==fn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Xe=null,Qe=le),Xe!==Qe)){if(et=ah,Ce="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(et=lh,Ce="onPointerLeave",J="onPointerEnter",W="pointer"),fn=Xe==null?ve:sa(Xe),ne=Qe==null?ve:sa(Qe),ve=new et(Ce,W+"leave",Xe,a,ye),ve.target=fn,ve.relatedTarget=ne,Ce=null,_s(ye)===le&&(et=new et(J,W+"enter",Qe,a,ye),et.target=ne,et.relatedTarget=fn,Ce=et),fn=Ce,Xe&&Qe)t:{for(et=Xe,J=Qe,W=0,ne=et;ne;ne=ia(ne))W++;for(ne=0,Ce=J;Ce;Ce=ia(Ce))ne++;for(;0<W-ne;)et=ia(et),W--;for(;0<ne-W;)J=ia(J),ne--;for(;W--;){if(et===J||J!==null&&et===J.alternate)break t;et=ia(et),J=ia(J)}et=null}else et=null;Xe!==null&&Uh(be,ve,Xe,et,!1),Qe!==null&&fn!==null&&Uh(be,fn,Qe,et,!0)}}e:{if(ve=le?sa(le):window,Xe=ve.nodeName&&ve.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&ve.type==="file")var tt=sx;else if(ph(ve))if(gh)tt=cx;else{tt=ox;var ct=ax}else(Xe=ve.nodeName)&&Xe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(tt=lx);if(tt&&(tt=tt(n,le))){mh(be,tt,a,ye);break e}ct&&ct(n,ve,le),n==="focusout"&&(ct=ve._wrapperState)&&ct.controlled&&ve.type==="number"&&Ze(ve,"number",ve.value)}switch(ct=le?sa(le):window,n){case"focusin":(ph(ct)||ct.contentEditable==="true")&&(ta=ct,Uc=le,eo=null);break;case"focusout":eo=Uc=ta=null;break;case"mousedown":Oc=!0;break;case"contextmenu":case"mouseup":case"dragend":Oc=!1,bh(be,a,ye);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":bh(be,a,ye)}var ut;if(Pc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else ea?fh(n,a)&&(_t="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(ch&&a.locale!=="ko"&&(ea||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&ea&&(ut=pt()):(Di=ye,Js="value"in Di?Di.value:Di.textContent,ea=!0)),ct=Zo(le,_t),0<ct.length&&(_t=new oh(_t,n,null,a,ye),be.push({event:_t,listeners:ct}),ut?_t.data=ut:(ut=hh(a),ut!==null&&(_t.data=ut)))),(ut=ex?tx(n,a):nx(n,a))&&(le=Zo(le,"onBeforeInput"),0<le.length&&(ye=new oh("onBeforeInput","beforeinput",null,a,ye),be.push({event:ye,listeners:le}),ye.data=ut))}Lh(be,i)})}function io(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=wn(n,a),g!=null&&c.unshift(io(n,g,h)),g=wn(n,i),g!=null&&c.push(io(n,g,h))),n=n.return}return c}function ia(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Uh(n,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var k=a,V=k.alternate,le=k.stateNode;if(V!==null&&V===c)break;k.tag===5&&le!==null&&(k=le,h?(V=wn(a,g),V!=null&&E.unshift(io(a,V,k))):h||(V=wn(a,g),V!=null&&E.push(io(a,V,k)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var gx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function Oh(n){return(typeof n=="string"?n:""+n).replace(gx,`
`).replace(xx,"")}function Qo(n,i,a){if(i=Oh(i),Oh(n)!==i&&a)throw Error(t(425))}function Jo(){}var Vc=null,Gc=null;function Hc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(n){return Fh.resolve(null).then(n).catch(yx)}:Wc;function yx(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),gs(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);gs(i)}function kr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function kh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ra=Math.random().toString(36).slice(2),Yi="__reactFiber$"+ra,ro="__reactProps$"+ra,fr="__reactContainer$"+ra,qc="__reactEvents$"+ra,Sx="__reactListeners$"+ra,Mx="__reactHandles$"+ra;function _s(n){var i=n[Yi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[fr]||a[Yi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=kh(n);n!==null;){if(a=n[Yi])return a;n=kh(n)}return i}n=a,a=n.parentNode}return null}function so(n){return n=n[Yi]||n[fr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function sa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function el(n){return n[ro]||null}var Yc=[],aa=-1;function Br(n){return{current:n}}function Jt(n){0>aa||(n.current=Yc[aa],Yc[aa]=null,aa--)}function Kt(n,i){aa++,Yc[aa]=n.current,n.current=i}var zr={},Bn=Br(zr),ei=Br(!1),ys=zr;function oa(n,i){var a=n.type.contextTypes;if(!a)return zr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ti(n){return n=n.childContextTypes,n!=null}function tl(){Jt(ei),Jt(Bn)}function Bh(n,i,a){if(Bn.current!==zr)throw Error(t(168));Kt(Bn,i),Kt(ei,a)}function zh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,de(n)||"Unknown",h));return ae({},a,c)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||zr,ys=Bn.current,Kt(Bn,n),Kt(ei,ei.current),!0}function jh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=zh(n,i,ys),c.__reactInternalMemoizedMergedChildContext=n,Jt(ei),Jt(Bn),Kt(Bn,n)):Jt(ei),Kt(ei,a)}var hr=null,il=!1,$c=!1;function Vh(n){hr===null?hr=[n]:hr.push(n)}function wx(n){il=!0,Vh(n)}function jr(){if(!$c&&hr!==null){$c=!0;var n=0,i=vt;try{var a=hr;for(vt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}hr=null,il=!1}catch(h){throw hr!==null&&(hr=hr.slice(n+1)),Ws(Y,jr),h}finally{vt=i,$c=!1}}return null}var la=[],ca=0,rl=null,sl=0,wi=[],bi=0,Ss=null,pr=1,mr="";function Ms(n,i){la[ca++]=sl,la[ca++]=rl,rl=n,sl=i}function Gh(n,i,a){wi[bi++]=pr,wi[bi++]=mr,wi[bi++]=Ss,Ss=n;var c=pr;n=mr;var h=32-Ge(c)-1;c&=~(1<<h),a+=1;var g=32-Ge(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,pr=1<<32-Ge(i)+h|a<<h|c,mr=g+n}else pr=1<<g|a<<h|c,mr=n}function Kc(n){n.return!==null&&(Ms(n,1),Gh(n,1,0))}function Zc(n){for(;n===rl;)rl=la[--ca],la[ca]=null,sl=la[--ca],la[ca]=null;for(;n===Ss;)Ss=wi[--bi],wi[bi]=null,mr=wi[--bi],wi[bi]=null,pr=wi[--bi],wi[bi]=null}var fi=null,hi=null,nn=!1,Ii=null;function Hh(n,i){var a=Ai(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Wh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,fi=n,hi=kr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,fi=n,hi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ss!==null?{id:pr,overflow:mr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ai(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,fi=n,hi=null,!0):!1;default:return!1}}function Qc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(nn){var i=hi;if(i){var a=i;if(!Wh(n,i)){if(Qc(n))throw Error(t(418));i=kr(a.nextSibling);var c=fi;i&&Wh(n,i)?Hh(c,a):(n.flags=n.flags&-4097|2,nn=!1,fi=n)}}else{if(Qc(n))throw Error(t(418));n.flags=n.flags&-4097|2,nn=!1,fi=n}}}function Xh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;fi=n}function al(n){if(n!==fi)return!1;if(!nn)return Xh(n),nn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Hc(n.type,n.memoizedProps)),i&&(i=hi)){if(Qc(n))throw qh(),Error(t(418));for(;i;)Hh(n,i),i=kr(i.nextSibling)}if(Xh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){hi=kr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}hi=null}}else hi=fi?kr(n.stateNode.nextSibling):null;return!0}function qh(){for(var n=hi;n;)n=kr(n.nextSibling)}function ua(){hi=fi=null,nn=!1}function eu(n){Ii===null?Ii=[n]:Ii.push(n)}var bx=P.ReactCurrentBatchConfig;function ao(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var k=h.refs;E===null?delete k[g]:k[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ol(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Yh(n){var i=n._init;return i(n._payload)}function $h(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function h(J,W){return J=$r(J,W),J.index=0,J.sibling=null,J}function g(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function k(J,W,ne,Ce){return W===null||W.tag!==6?(W=Wu(ne,J.mode,Ce),W.return=J,W):(W=h(W,ne),W.return=J,W)}function V(J,W,ne,Ce){var tt=ne.type;return tt===O?ye(J,W,ne.props.children,Ce,ne.key):W!==null&&(W.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&Yh(tt)===W.type)?(Ce=h(W,ne.props),Ce.ref=ao(J,W,ne),Ce.return=J,Ce):(Ce=Pl(ne.type,ne.key,ne.props,null,J.mode,Ce),Ce.ref=ao(J,W,ne),Ce.return=J,Ce)}function le(J,W,ne,Ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=Xu(ne,J.mode,Ce),W.return=J,W):(W=h(W,ne.children||[]),W.return=J,W)}function ye(J,W,ne,Ce,tt){return W===null||W.tag!==7?(W=Ns(ne,J.mode,Ce,tt),W.return=J,W):(W=h(W,ne),W.return=J,W)}function be(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Wu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return ne=Pl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=ao(J,null,W),ne.return=J,ne;case D:return W=Xu(W,J.mode,ne),W.return=J,W;case ee:var Ce=W._init;return be(J,Ce(W._payload),ne)}if(dt(W)||he(W))return W=Ns(W,J.mode,ne,null),W.return=J,W;ol(J,W)}return null}function ve(J,W,ne,Ce){var tt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return tt!==null?null:k(J,W,""+ne,Ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return ne.key===tt?V(J,W,ne,Ce):null;case D:return ne.key===tt?le(J,W,ne,Ce):null;case ee:return tt=ne._init,ve(J,W,tt(ne._payload),Ce)}if(dt(ne)||he(ne))return tt!==null?null:ye(J,W,ne,Ce,null);ol(J,ne)}return null}function Xe(J,W,ne,Ce,tt){if(typeof Ce=="string"&&Ce!==""||typeof Ce=="number")return J=J.get(ne)||null,k(W,J,""+Ce,tt);if(typeof Ce=="object"&&Ce!==null){switch(Ce.$$typeof){case I:return J=J.get(Ce.key===null?ne:Ce.key)||null,V(W,J,Ce,tt);case D:return J=J.get(Ce.key===null?ne:Ce.key)||null,le(W,J,Ce,tt);case ee:var ct=Ce._init;return Xe(J,W,ne,ct(Ce._payload),tt)}if(dt(Ce)||he(Ce))return J=J.get(ne)||null,ye(W,J,Ce,tt,null);ol(W,Ce)}return null}function Qe(J,W,ne,Ce){for(var tt=null,ct=null,ut=W,_t=W=0,Cn=null;ut!==null&&_t<ne.length;_t++){ut.index>_t?(Cn=ut,ut=null):Cn=ut.sibling;var Vt=ve(J,ut,ne[_t],Ce);if(Vt===null){ut===null&&(ut=Cn);break}n&&ut&&Vt.alternate===null&&i(J,ut),W=g(Vt,W,_t),ct===null?tt=Vt:ct.sibling=Vt,ct=Vt,ut=Cn}if(_t===ne.length)return a(J,ut),nn&&Ms(J,_t),tt;if(ut===null){for(;_t<ne.length;_t++)ut=be(J,ne[_t],Ce),ut!==null&&(W=g(ut,W,_t),ct===null?tt=ut:ct.sibling=ut,ct=ut);return nn&&Ms(J,_t),tt}for(ut=c(J,ut);_t<ne.length;_t++)Cn=Xe(ut,J,_t,ne[_t],Ce),Cn!==null&&(n&&Cn.alternate!==null&&ut.delete(Cn.key===null?_t:Cn.key),W=g(Cn,W,_t),ct===null?tt=Cn:ct.sibling=Cn,ct=Cn);return n&&ut.forEach(function(Kr){return i(J,Kr)}),nn&&Ms(J,_t),tt}function et(J,W,ne,Ce){var tt=he(ne);if(typeof tt!="function")throw Error(t(150));if(ne=tt.call(ne),ne==null)throw Error(t(151));for(var ct=tt=null,ut=W,_t=W=0,Cn=null,Vt=ne.next();ut!==null&&!Vt.done;_t++,Vt=ne.next()){ut.index>_t?(Cn=ut,ut=null):Cn=ut.sibling;var Kr=ve(J,ut,Vt.value,Ce);if(Kr===null){ut===null&&(ut=Cn);break}n&&ut&&Kr.alternate===null&&i(J,ut),W=g(Kr,W,_t),ct===null?tt=Kr:ct.sibling=Kr,ct=Kr,ut=Cn}if(Vt.done)return a(J,ut),nn&&Ms(J,_t),tt;if(ut===null){for(;!Vt.done;_t++,Vt=ne.next())Vt=be(J,Vt.value,Ce),Vt!==null&&(W=g(Vt,W,_t),ct===null?tt=Vt:ct.sibling=Vt,ct=Vt);return nn&&Ms(J,_t),tt}for(ut=c(J,ut);!Vt.done;_t++,Vt=ne.next())Vt=Xe(ut,J,_t,Vt.value,Ce),Vt!==null&&(n&&Vt.alternate!==null&&ut.delete(Vt.key===null?_t:Vt.key),W=g(Vt,W,_t),ct===null?tt=Vt:ct.sibling=Vt,ct=Vt);return n&&ut.forEach(function(iv){return i(J,iv)}),nn&&Ms(J,_t),tt}function fn(J,W,ne,Ce){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:e:{for(var tt=ne.key,ct=W;ct!==null;){if(ct.key===tt){if(tt=ne.type,tt===O){if(ct.tag===7){a(J,ct.sibling),W=h(ct,ne.props.children),W.return=J,J=W;break e}}else if(ct.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ee&&Yh(tt)===ct.type){a(J,ct.sibling),W=h(ct,ne.props),W.ref=ao(J,ct,ne),W.return=J,J=W;break e}a(J,ct);break}else i(J,ct);ct=ct.sibling}ne.type===O?(W=Ns(ne.props.children,J.mode,Ce,ne.key),W.return=J,J=W):(Ce=Pl(ne.type,ne.key,ne.props,null,J.mode,Ce),Ce.ref=ao(J,W,ne),Ce.return=J,J=Ce)}return E(J);case D:e:{for(ct=ne.key;W!==null;){if(W.key===ct)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=h(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=Xu(ne,J.mode,Ce),W.return=J,J=W}return E(J);case ee:return ct=ne._init,fn(J,W,ct(ne._payload),Ce)}if(dt(ne))return Qe(J,W,ne,Ce);if(he(ne))return et(J,W,ne,Ce);ol(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=h(W,ne),W.return=J,J=W):(a(J,W),W=Wu(ne,J.mode,Ce),W.return=J,J=W),E(J)):a(J,W)}return fn}var da=$h(!0),Kh=$h(!1),ll=Br(null),cl=null,fa=null,tu=null;function nu(){tu=fa=cl=null}function iu(n){var i=ll.current;Jt(ll),n._currentValue=i}function ru(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function ha(n,i){cl=n,tu=fa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ni=!0),n.firstContext=null)}function Ei(n){var i=n._currentValue;if(tu!==n)if(n={context:n,memoizedValue:i,next:null},fa===null){if(cl===null)throw Error(t(308));fa=n,cl.dependencies={lanes:0,firstContext:n}}else fa=fa.next=n;return i}var ws=null;function su(n){ws===null?ws=[n]:ws.push(n)}function Zh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,su(i)):(a.next=h.next,h.next=a),i.interleaved=a,gr(n,c)}function gr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Vr=!1;function au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Gr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(kt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,gr(n,a)}return h=c.interleaved,h===null?(i.next=i,su(c)):(i.next=h.next,h.next=i),c.interleaved=i,gr(n,a)}function ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ft(n,a)}}function Jh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function dl(n,i,a,c){var h=n.updateQueue;Vr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var V=k,le=V.next;V.next=null,E===null?g=le:E.next=le,E=V;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,k=ye.lastBaseUpdate,k!==E&&(k===null?ye.firstBaseUpdate=le:k.next=le,ye.lastBaseUpdate=V))}if(g!==null){var be=h.baseState;E=0,ye=le=V=null,k=g;do{var ve=k.lane,Xe=k.eventTime;if((c&ve)===ve){ye!==null&&(ye=ye.next={eventTime:Xe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Qe=n,et=k;switch(ve=i,Xe=a,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){be=Qe.call(Xe,be,ve);break e}be=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,ve=typeof Qe=="function"?Qe.call(Xe,be,ve):Qe,ve==null)break e;be=ae({},be,ve);break e;case 2:Vr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[k]:ve.push(k))}else Xe={eventTime:Xe,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},ye===null?(le=ye=Xe,V=be):ye=ye.next=Xe,E|=ve;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(ye===null&&(V=be),h.baseState=V,h.firstBaseUpdate=le,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ts|=E,n.lanes=E,n.memoizedState=be}}function ep(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var oo={},$i=Br(oo),lo=Br(oo),co=Br(oo);function bs(n){if(n===oo)throw Error(t(174));return n}function ou(n,i){switch(Kt(co,i),Kt(lo,n),Kt($i,oo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}Jt($i),Kt($i,i)}function pa(){Jt($i),Jt(lo),Jt(co)}function tp(n){bs(co.current);var i=bs($i.current),a=ge(i,n.type);i!==a&&(Kt(lo,n),Kt($i,a))}function lu(n){lo.current===n&&(Jt($i),Jt(lo))}var rn=Br(0);function fl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var cu=[];function uu(){for(var n=0;n<cu.length;n++)cu[n]._workInProgressVersionPrimary=null;cu.length=0}var hl=P.ReactCurrentDispatcher,du=P.ReactCurrentBatchConfig,Es=0,sn=null,vn=null,En=null,pl=!1,uo=!1,fo=0,Ex=0;function zn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Li(n[a],i[a]))return!1;return!0}function hu(n,i,a,c,h,g){if(Es=g,sn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hl.current=n===null||n.memoizedState===null?Rx:Nx,n=a(c,h),uo){g=0;do{if(uo=!1,fo=0,25<=g)throw Error(t(301));g+=1,En=vn=null,i.updateQueue=null,hl.current=Px,n=a(c,h)}while(uo)}if(hl.current=xl,i=vn!==null&&vn.next!==null,Es=0,En=vn=sn=null,pl=!1,i)throw Error(t(300));return n}function pu(){var n=fo!==0;return fo=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?sn.memoizedState=En=n:En=En.next=n,En}function Ti(){if(vn===null){var n=sn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var i=En===null?sn.memoizedState:En.next;if(i!==null)En=i,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},En===null?sn.memoizedState=En=n:En=En.next=n}return En}function ho(n,i){return typeof i=="function"?i(n):i}function mu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=vn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=E=null,V=null,le=g;do{var ye=le.lane;if((Es&ye)===ye)V!==null&&(V=V.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:n(c,le.action);else{var be={lane:ye,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};V===null?(k=V=be,E=c):V=V.next=be,sn.lanes|=ye,Ts|=ye}le=le.next}while(le!==null&&le!==g);V===null?E=c:V.next=k,Li(c,i.memoizedState)||(ni=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,sn.lanes|=g,Ts|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function gu(n){var i=Ti(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);Li(g,i.memoizedState)||(ni=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function np(){}function ip(n,i){var a=sn,c=Ti(),h=i(),g=!Li(c.memoizedState,h);if(g&&(c.memoizedState=h,ni=!0),c=c.queue,xu(ap.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||En!==null&&En.memoizedState.tag&1){if(a.flags|=2048,po(9,sp.bind(null,a,c,h,i),void 0,null),Tn===null)throw Error(t(349));(Es&30)!==0||rp(a,i,h)}return h}function rp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function sp(n,i,a,c){i.value=a,i.getSnapshot=c,op(i)&&lp(n)}function ap(n,i,a){return a(function(){op(i)&&lp(n)})}function op(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Li(n,a)}catch{return!0}}function lp(n){var i=gr(n,1);i!==null&&ki(i,n,1,-1)}function cp(n){var i=Ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},i.queue=n,n=n.dispatch=Ax.bind(null,sn,n),[i.memoizedState,n]}function po(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=sn.updateQueue,i===null?(i={lastEffect:null,stores:null},sn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function up(){return Ti().memoizedState}function ml(n,i,a,c){var h=Ki();sn.flags|=n,h.memoizedState=po(1|i,a,void 0,c===void 0?null:c)}function gl(n,i,a,c){var h=Ti();c=c===void 0?null:c;var g=void 0;if(vn!==null){var E=vn.memoizedState;if(g=E.destroy,c!==null&&fu(c,E.deps)){h.memoizedState=po(i,a,g,c);return}}sn.flags|=n,h.memoizedState=po(1|i,a,g,c)}function dp(n,i){return ml(8390656,8,n,i)}function xu(n,i){return gl(2048,8,n,i)}function fp(n,i){return gl(4,2,n,i)}function hp(n,i){return gl(4,4,n,i)}function pp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function mp(n,i,a){return a=a!=null?a.concat([n]):null,gl(4,4,pp.bind(null,i,n),a)}function vu(){}function gp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function xp(n,i){var a=Ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&fu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function vp(n,i,a){return(Es&21)===0?(n.baseState&&(n.baseState=!1,ni=!0),n.memoizedState=a):(Li(a,i)||(a=xn(),sn.lanes|=a,Ts|=a,n.baseState=!0),i)}function Tx(n,i){var a=vt;vt=a!==0&&4>a?a:4,n(!0);var c=du.transition;du.transition={};try{n(!1),i()}finally{vt=a,du.transition=c}}function _p(){return Ti().memoizedState}function Cx(n,i,a){var c=qr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},yp(n))Sp(i,a);else if(a=Zh(n,i,a,c),a!==null){var h=$n();ki(a,n,c,h),Mp(a,i,c)}}function Ax(n,i,a){var c=qr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(yp(n))Sp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,k=g(E,a);if(h.hasEagerState=!0,h.eagerState=k,Li(k,E)){var V=i.interleaved;V===null?(h.next=h,su(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=Zh(n,i,h,c),a!==null&&(h=$n(),ki(a,n,c,h),Mp(a,i,c))}}function yp(n){var i=n.alternate;return n===sn||i!==null&&i===sn}function Sp(n,i){uo=pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Mp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Ft(n,a)}}var xl={readContext:Ei,useCallback:zn,useContext:zn,useEffect:zn,useImperativeHandle:zn,useInsertionEffect:zn,useLayoutEffect:zn,useMemo:zn,useReducer:zn,useRef:zn,useState:zn,useDebugValue:zn,useDeferredValue:zn,useTransition:zn,useMutableSource:zn,useSyncExternalStore:zn,useId:zn,unstable_isNewReconciler:!1},Rx={readContext:Ei,useCallback:function(n,i){return Ki().memoizedState=[n,i===void 0?null:i],n},useContext:Ei,useEffect:dp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ml(4194308,4,pp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ml(4194308,4,n,i)},useInsertionEffect:function(n,i){return ml(4,2,n,i)},useMemo:function(n,i){var a=Ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cx.bind(null,sn,n),[c.memoizedState,n]},useRef:function(n){var i=Ki();return n={current:n},i.memoizedState=n},useState:cp,useDebugValue:vu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=cp(!1),i=n[0];return n=Tx.bind(null,n[1]),Ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=sn,h=Ki();if(nn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Tn===null)throw Error(t(349));(Es&30)!==0||rp(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,dp(ap.bind(null,c,g,n),[n]),c.flags|=2048,po(9,sp.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Ki(),i=Tn.identifierPrefix;if(nn){var a=mr,c=pr;a=(c&~(1<<32-Ge(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=fo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ex++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nx={readContext:Ei,useCallback:gp,useContext:Ei,useEffect:xu,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:xp,useReducer:mu,useRef:up,useState:function(){return mu(ho)},useDebugValue:vu,useDeferredValue:function(n){var i=Ti();return vp(i,vn.memoizedState,n)},useTransition:function(){var n=mu(ho)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:_p,unstable_isNewReconciler:!1},Px={readContext:Ei,useCallback:gp,useContext:Ei,useEffect:xu,useImperativeHandle:mp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:xp,useReducer:gu,useRef:up,useState:function(){return gu(ho)},useDebugValue:vu,useDeferredValue:function(n){var i=Ti();return vn===null?i.memoizedState=n:vp(i,vn.memoizedState,n)},useTransition:function(){var n=gu(ho)[0],i=Ti().memoizedState;return[n,i]},useMutableSource:np,useSyncExternalStore:ip,useId:_p,unstable_isNewReconciler:!1};function Ui(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function _u(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var vl={isMounted:function(n){return(n=n._reactInternals)?Qn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=$n(),h=qr(n),g=xr(c,h);g.payload=i,a!=null&&(g.callback=a),i=Gr(n,g,h),i!==null&&(ki(i,n,h,c),ul(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=$n(),h=qr(n),g=xr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Gr(n,g,h),i!==null&&(ki(i,n,h,c),ul(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=$n(),c=qr(n),h=xr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Gr(n,h,c),i!==null&&(ki(i,n,c,a),ul(i,n,c))}};function wp(n,i,a,c,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!Ja(a,c)||!Ja(h,g):!0}function bp(n,i,a){var c=!1,h=zr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ei(g):(h=ti(i)?ys:Bn.current,c=i.contextTypes,g=(c=c!=null)?oa(n,h):zr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&vl.enqueueReplaceState(i,i.state,null)}function yu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},au(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Ei(g):(g=ti(i)?ys:Bn.current,h.context=oa(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(_u(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&vl.enqueueReplaceState(h,h.state,null),dl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function ma(n,i){try{var a="",c=i;do a+=Ye(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Su(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function Tp(n,i,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){El||(El=!0,Fu=c),Mu(n,i)},a}function Cp(n,i,a){a=xr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Mu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof c!="function"&&(Wr===null?Wr=new Set([this]):Wr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Ap(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Dx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Xx.bind(null,n,i,a),i.then(n,n))}function Rp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Np(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=xr(-1,1),i.tag=2,Gr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Lx=P.ReactCurrentOwner,ni=!1;function Yn(n,i,a,c){i.child=n===null?Kh(i,null,a,c):da(i,n.child,a,c)}function Pp(n,i,a,c,h){a=a.render;var g=i.ref;return ha(i,h),c=hu(n,i,a,c,g,h),a=pu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,vr(n,i,h)):(nn&&a&&Kc(i),i.flags|=1,Yn(n,i,c,h),i.child)}function Dp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Hu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Lp(n,i,g,c,h)):(n=Pl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ja,a(E,c)&&n.ref===i.ref)return vr(n,i,h)}return i.flags|=1,n=$r(g,c),n.ref=i.ref,n.return=i,i.child=n}function Lp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Ja(g,c)&&n.ref===i.ref)if(ni=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ni=!0);else return i.lanes=n.lanes,vr(n,i,h)}return wu(n,i,a,c,h)}function Ip(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(xa,pi),pi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(xa,pi),pi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Kt(xa,pi),pi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Kt(xa,pi),pi|=c;return Yn(n,i,h,a),i.child}function Up(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function wu(n,i,a,c,h){var g=ti(a)?ys:Bn.current;return g=oa(i,g),ha(i,h),a=hu(n,i,a,c,g,h),c=pu(),n!==null&&!ni?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,vr(n,i,h)):(nn&&c&&Kc(i),i.flags|=1,Yn(n,i,a,h),i.child)}function Op(n,i,a,c,h){if(ti(a)){var g=!0;nl(i)}else g=!1;if(ha(i,h),i.stateNode===null)yl(n,i),bp(i,a,c),yu(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,k=i.memoizedProps;E.props=k;var V=E.context,le=a.contextType;typeof le=="object"&&le!==null?le=Ei(le):(le=ti(a)?ys:Bn.current,le=oa(i,le));var ye=a.getDerivedStateFromProps,be=typeof ye=="function"||typeof E.getSnapshotBeforeUpdate=="function";be||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==c||V!==le)&&Ep(i,E,c,le),Vr=!1;var ve=i.memoizedState;E.state=ve,dl(i,c,E,h),V=i.memoizedState,k!==c||ve!==V||ei.current||Vr?(typeof ye=="function"&&(_u(i,a,ye,c),V=i.memoizedState),(k=Vr||wp(i,a,k,c,ve,V,le))?(be||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),E.props=c,E.state=V,E.context=le,c=k):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Qh(n,i),k=i.memoizedProps,le=i.type===i.elementType?k:Ui(i.type,k),E.props=le,be=i.pendingProps,ve=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=Ei(V):(V=ti(a)?ys:Bn.current,V=oa(i,V));var Xe=a.getDerivedStateFromProps;(ye=typeof Xe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==be||ve!==V)&&Ep(i,E,c,V),Vr=!1,ve=i.memoizedState,E.state=ve,dl(i,c,E,h);var Qe=i.memoizedState;k!==be||ve!==Qe||ei.current||Vr?(typeof Xe=="function"&&(_u(i,a,Xe,c),Qe=i.memoizedState),(le=Vr||wp(i,a,le,c,ve,Qe,V)||!1)?(ye||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Qe,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Qe,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Qe),E.props=c,E.state=Qe,E.context=V,c=le):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return bu(n,i,a,c,g,h)}function bu(n,i,a,c,h,g){Up(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&jh(i,a,!1),vr(n,i,g);c=i.stateNode,Lx.current=i;var k=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=da(i,n.child,null,g),i.child=da(i,null,k,g)):Yn(n,i,k,g),i.memoizedState=c.state,h&&jh(i,a,!0),i.child}function Fp(n){var i=n.stateNode;i.pendingContext?Bh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Bh(n,i.context,!1),ou(n,i.containerInfo)}function kp(n,i,a,c,h){return ua(),eu(h),i.flags|=256,Yn(n,i,a,c),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function Tu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Bp(n,i,a){var c=i.pendingProps,h=rn.current,g=!1,E=(i.flags&128)!==0,k;if((k=E)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Kt(rn,h&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Dl(E,c,0,null),n=Ns(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Tu(a),i.memoizedState=Eu,n):Cu(i,E));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Ix(n,i,E,c,k,h,a);if(g){g=c.fallback,E=i.mode,h=n.child,k=h.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=$r(h,V),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=$r(k,g):(g=Ns(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?Tu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,i.memoizedState=Eu,c}return g=n.child,n=g.sibling,c=$r(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Cu(n,i){return i=Dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function _l(n,i,a,c){return c!==null&&eu(c),da(i,n.child,null,a),n=Cu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ix(n,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=Su(Error(t(422))),_l(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Dl({mode:"visible",children:c.children},h,0,null),g=Ns(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&da(i,n.child,null,E),i.child.memoizedState=Tu(E),i.memoizedState=Eu,g);if((i.mode&1)===0)return _l(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=Su(g,c,void 0),_l(n,i,E,c)}if(k=(E&n.childLanes)!==0,ni||k){if(c=Tn,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,gr(n,h),ki(c,n,h,-1))}return Gu(),c=Su(Error(t(421))),_l(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=qx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,hi=kr(h.nextSibling),fi=i,nn=!0,Ii=null,n!==null&&(wi[bi++]=pr,wi[bi++]=mr,wi[bi++]=Ss,pr=n.id,mr=n.overflow,Ss=i),i=Cu(i,c.children),i.flags|=4096,i)}function zp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),ru(n.return,i,a)}function Au(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function jp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(Yn(n,i,c.children,a),c=rn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zp(n,a,i);else if(n.tag===19)zp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(rn,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&fl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Au(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&fl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Au(i,!0,a,null,g);break;case"together":Au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function vr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=$r(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=$r(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ux(n,i,a){switch(i.tag){case 3:Fp(i),ua();break;case 5:tp(i);break;case 1:ti(i.type)&&nl(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Kt(ll,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(rn,rn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Bp(n,i,a):(Kt(rn,rn.current&1),n=vr(n,i,a),n!==null?n.sibling:null);Kt(rn,rn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return jp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(rn,rn.current),c)break;return null;case 22:case 23:return i.lanes=0,Ip(n,i,a)}return vr(n,i,a)}var Vp,Ru,Gp,Hp;Vp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},Gp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,bs($i.current);var g=null;switch(a){case"input":h=At(n,h),c=At(n,c),g=[];break;case"select":h=ae({},h,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":h=Te(n,h),c=Te(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jo)}ze(a,c);var E;a=null;for(le in h)if(!c.hasOwnProperty(le)&&h.hasOwnProperty(le)&&h[le]!=null)if(le==="style"){var k=h[le];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in c){var V=c[le];if(k=h!=null?h[le]:void 0,c.hasOwnProperty(le)&&V!==k&&(V!=null||k!=null))if(le==="style")if(k){for(E in k)!k.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&k[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(g||(g=[]),g.push(le,a)),a=V;else le==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(g=g||[]).push(le,V)):le==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(le,""+V):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(V!=null&&le==="onScroll"&&Qt("scroll",n),g||k===V||(g=[])):(g=g||[]).push(le,V))}a&&(g=g||[]).push("style",a);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},Hp=function(n,i,a,c){a!==c&&(i.flags|=4)};function mo(n,i){if(!nn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function jn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ox(n,i,a){var c=i.pendingProps;switch(Zc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jn(i),null;case 1:return ti(i.type)&&tl(),jn(i),null;case 3:return c=i.stateNode,pa(),Jt(ei),Jt(Bn),uu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(al(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ii!==null&&(zu(Ii),Ii=null))),Ru(n,i),jn(i),null;case 5:lu(i);var h=bs(co.current);if(a=i.type,n!==null&&i.stateNode!=null)Gp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return jn(i),null}if(n=bs($i.current),al(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Yi]=i,c[ro]=g,n=(i.mode&1)!==0,a){case"dialog":Qt("cancel",c),Qt("close",c);break;case"iframe":case"object":case"embed":Qt("load",c);break;case"video":case"audio":for(h=0;h<to.length;h++)Qt(to[h],c);break;case"source":Qt("error",c);break;case"img":case"image":case"link":Qt("error",c),Qt("load",c);break;case"details":Qt("toggle",c);break;case"input":Ut(c,g),Qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Qt("invalid",c);break;case"textarea":U(c,g),Qt("invalid",c)}ze(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var k=g[E];E==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Qo(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Qo(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&Qt("scroll",c)}switch(a){case"input":Mt(c),j(c,g,!0);break;case"textarea":Mt(c),H(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Jo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Yi]=i,n[ro]=c,Vp(n,i,!1,!1),i.stateNode=n;e:{switch(E=we(a,c),a){case"dialog":Qt("cancel",n),Qt("close",n),h=c;break;case"iframe":case"object":case"embed":Qt("load",n),h=c;break;case"video":case"audio":for(h=0;h<to.length;h++)Qt(to[h],n);h=c;break;case"source":Qt("error",n),h=c;break;case"img":case"image":case"link":Qt("error",n),Qt("load",n),h=c;break;case"details":Qt("toggle",n),h=c;break;case"input":Ut(n,c),h=At(n,c),Qt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ae({},c,{value:void 0}),Qt("invalid",n);break;case"textarea":U(n,c),h=Te(n,c),Qt("invalid",n);break;default:h=c}ze(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var V=k[g];g==="style"?Re(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Be(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&Ee(n,V):typeof V=="number"&&Ee(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&Qt("scroll",n):V!=null&&L(n,g,V,E))}switch(a){case"input":Mt(n),j(n,c,!1);break;case"textarea":Mt(n),H(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Me(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?nt(n,!!c.multiple,g,!1):c.defaultValue!=null&&nt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Jo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return jn(i),null;case 6:if(n&&i.stateNode!=null)Hp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=bs(co.current),bs($i.current),al(i)){if(c=i.stateNode,a=i.memoizedProps,c[Yi]=i,(g=c.nodeValue!==a)&&(n=fi,n!==null))switch(n.tag){case 3:Qo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Yi]=i,i.stateNode=c}return jn(i),null;case 13:if(Jt(rn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(nn&&hi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)qh(),ua(),i.flags|=98560,g=!1;else if(g=al(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Yi]=i}else ua(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;jn(i),g=!1}else Ii!==null&&(zu(Ii),Ii=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(rn.current&1)!==0?_n===0&&(_n=3):Gu())),i.updateQueue!==null&&(i.flags|=4),jn(i),null);case 4:return pa(),Ru(n,i),n===null&&no(i.stateNode.containerInfo),jn(i),null;case 10:return iu(i.type._context),jn(i),null;case 17:return ti(i.type)&&tl(),jn(i),null;case 19:if(Jt(rn),g=i.memoizedState,g===null)return jn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)mo(g,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=fl(n),E!==null){for(i.flags|=128,mo(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(rn,rn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>va&&(i.flags|=128,c=!0,mo(g,!1),i.lanes=4194304)}else{if(!c)if(n=fl(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),mo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!nn)return jn(i),null}else 2*Zt()-g.renderingStartTime>va&&a!==1073741824&&(i.flags|=128,c=!0,mo(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,a=rn.current,Kt(rn,c?a&1|2:a&1),i):(jn(i),null);case 22:case 23:return Vu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pi&1073741824)!==0&&(jn(i),i.subtreeFlags&6&&(i.flags|=8192)):jn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fx(n,i){switch(Zc(i),i.tag){case 1:return ti(i.type)&&tl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return pa(),Jt(ei),Jt(Bn),uu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return lu(i),null;case 13:if(Jt(rn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ua()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Jt(rn),null;case 4:return pa(),null;case 10:return iu(i.type._context),null;case 22:case 23:return Vu(),null;case 24:return null;default:return null}}var Sl=!1,Vn=!1,kx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function ga(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){ln(n,i,c)}else a.current=null}function Nu(n,i,a){try{a()}catch(c){ln(n,i,c)}}var Wp=!1;function Bx(n,i){if(Vc=xs,n=wh(),Ic(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,k=-1,V=-1,le=0,ye=0,be=n,ve=null;t:for(;;){for(var Xe;be!==a||h!==0&&be.nodeType!==3||(k=E+h),be!==g||c!==0&&be.nodeType!==3||(V=E+c),be.nodeType===3&&(E+=be.nodeValue.length),(Xe=be.firstChild)!==null;)ve=be,be=Xe;for(;;){if(be===n)break t;if(ve===a&&++le===h&&(k=E),ve===g&&++ye===c&&(V=E),(Xe=be.nextSibling)!==null)break;be=ve,ve=be.parentNode}be=Xe}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gc={focusedElem:n,selectionRange:a},xs=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,fn=Qe.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?et:Ui(i.type,et),fn);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ce){ln(i,i.return,Ce)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Qe=Wp,Wp=!1,Qe}function go(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Nu(i,a,g)}h=h.next}while(h!==c)}}function Ml(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Xp(n){var i=n.alternate;i!==null&&(n.alternate=null,Xp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Yi],delete i[ro],delete i[qc],delete i[Sx],delete i[Mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qp(n){return n.tag===5||n.tag===3||n.tag===4}function Yp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Du(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jo));else if(c!==4&&(n=n.child,n!==null))for(Du(n,i,a),n=n.sibling;n!==null;)Du(n,i,a),n=n.sibling}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}var Pn=null,Oi=!1;function Hr(n,i,a){for(a=a.child;a!==null;)$p(n,i,a),a=a.sibling}function $p(n,i,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 5:Vn||ga(a,i);case 6:var c=Pn,h=Oi;Pn=null,Hr(n,i,a),Pn=c,Oi=h,Pn!==null&&(Oi?(n=Pn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Pn.removeChild(a.stateNode));break;case 18:Pn!==null&&(Oi?(n=Pn,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),gs(n)):Xc(Pn,a.stateNode));break;case 4:c=Pn,h=Oi,Pn=a.stateNode.containerInfo,Oi=!0,Hr(n,i,a),Pn=c,Oi=h;break;case 0:case 11:case 14:case 15:if(!Vn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Nu(a,i,E),h=h.next}while(h!==c)}Hr(n,i,a);break;case 1:if(!Vn&&(ga(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){ln(a,i,k)}Hr(n,i,a);break;case 21:Hr(n,i,a);break;case 22:a.mode&1?(Vn=(c=Vn)||a.memoizedState!==null,Hr(n,i,a),Vn=c):Hr(n,i,a);break;default:Hr(n,i,a)}}function Kp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kx),i.forEach(function(c){var h=Yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Fi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,E=i,k=E;e:for(;k!==null;){switch(k.tag){case 5:Pn=k.stateNode,Oi=!1;break e;case 3:Pn=k.stateNode.containerInfo,Oi=!0;break e;case 4:Pn=k.stateNode.containerInfo,Oi=!0;break e}k=k.return}if(Pn===null)throw Error(t(160));$p(g,E,h),Pn=null,Oi=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(le){ln(h,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Zp(i,n),i=i.sibling}function Zp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(i,n),Zi(n),c&4){try{go(3,n,n.return),Ml(3,n)}catch(et){ln(n,n.return,et)}try{go(5,n,n.return)}catch(et){ln(n,n.return,et)}}break;case 1:Fi(i,n),Zi(n),c&512&&a!==null&&ga(a,a.return);break;case 5:if(Fi(i,n),Zi(n),c&512&&a!==null&&ga(a,a.return),n.flags&32){var h=n.stateNode;try{Ee(h,"")}catch(et){ln(n,n.return,et)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,k=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&lt(h,g),we(k,E);var le=we(k,g);for(E=0;E<V.length;E+=2){var ye=V[E],be=V[E+1];ye==="style"?Re(h,be):ye==="dangerouslySetInnerHTML"?Be(h,be):ye==="children"?Ee(h,be):L(h,ye,be,le)}switch(k){case"input":it(h,g);break;case"textarea":w(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?nt(h,!!g.multiple,Xe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?nt(h,!!g.multiple,g.defaultValue,!0):nt(h,!!g.multiple,g.multiple?[]:"",!1))}h[ro]=g}catch(et){ln(n,n.return,et)}}break;case 6:if(Fi(i,n),Zi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(et){ln(n,n.return,et)}}break;case 3:if(Fi(i,n),Zi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{gs(i.containerInfo)}catch(et){ln(n,n.return,et)}break;case 4:Fi(i,n),Zi(n);break;case 13:Fi(i,n),Zi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Ou=Zt())),c&4&&Kp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(Vn=(le=Vn)||ye,Fi(i,n),Vn=le):Fi(i,n),Zi(n),c&8192){if(le=n.memoizedState!==null,(n.stateNode.isHidden=le)&&!ye&&(n.mode&1)!==0)for(Ke=n,ye=n.child;ye!==null;){for(be=Ke=ye;Ke!==null;){switch(ve=Ke,Xe=ve.child,ve.tag){case 0:case 11:case 14:case 15:go(4,ve,ve.return);break;case 1:ga(ve,ve.return);var Qe=ve.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(et){ln(c,a,et)}}break;case 5:ga(ve,ve.return);break;case 22:if(ve.memoizedState!==null){em(be);continue}}Xe!==null?(Xe.return=ve,Ke=Xe):em(be)}ye=ye.sibling}e:for(ye=null,be=n;;){if(be.tag===5){if(ye===null){ye=be;try{h=be.stateNode,le?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=be.stateNode,V=be.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=_e("display",E))}catch(et){ln(n,n.return,et)}}}else if(be.tag===6){if(ye===null)try{be.stateNode.nodeValue=le?"":be.memoizedProps}catch(et){ln(n,n.return,et)}}else if((be.tag!==22&&be.tag!==23||be.memoizedState===null||be===n)&&be.child!==null){be.child.return=be,be=be.child;continue}if(be===n)break e;for(;be.sibling===null;){if(be.return===null||be.return===n)break e;ye===be&&(ye=null),be=be.return}ye===be&&(ye=null),be.sibling.return=be.return,be=be.sibling}}break;case 19:Fi(i,n),Zi(n),c&4&&Kp(n);break;case 21:break;default:Fi(i,n),Zi(n)}}function Zi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(qp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ee(h,""),c.flags&=-33);var g=Yp(n);Lu(n,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,k=Yp(n);Du(n,k,E);break;default:throw Error(t(161))}}catch(V){ln(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function zx(n,i,a){Ke=n,Qp(n)}function Qp(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Sl;if(!E){var k=h.alternate,V=k!==null&&k.memoizedState!==null||Vn;k=Sl;var le=Vn;if(Sl=E,(Vn=V)&&!le)for(Ke=h;Ke!==null;)E=Ke,V=E.child,E.tag===22&&E.memoizedState!==null?tm(h):V!==null?(V.return=E,Ke=V):tm(h);for(;g!==null;)Ke=g,Qp(g),g=g.sibling;Ke=h,Sl=k,Vn=le}Jp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ke=g):Jp(n)}}function Jp(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Vn||Ml(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Vn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Ui(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&ep(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}ep(i,E,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var ye=le.memoizedState;if(ye!==null){var be=ye.dehydrated;be!==null&&gs(be)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Vn||i.flags&512&&Pu(i)}catch(ve){ln(i,i.return,ve)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function em(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function tm(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ml(4,i)}catch(V){ln(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){ln(i,h,V)}}var g=i.return;try{Pu(i)}catch(V){ln(i,g,V)}break;case 5:var E=i.return;try{Pu(i)}catch(V){ln(i,E,V)}}}catch(V){ln(i,i.return,V)}if(i===n){Ke=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ke=k;break}Ke=i.return}}var jx=Math.ceil,wl=P.ReactCurrentDispatcher,Iu=P.ReactCurrentOwner,Ci=P.ReactCurrentBatchConfig,kt=0,Tn=null,mn=null,Dn=0,pi=0,xa=Br(0),_n=0,xo=null,Ts=0,bl=0,Uu=0,vo=null,ii=null,Ou=0,va=1/0,_r=null,El=!1,Fu=null,Wr=null,Tl=!1,Xr=null,Cl=0,_o=0,ku=null,Al=-1,Rl=0;function $n(){return(kt&6)!==0?Zt():Al!==-1?Al:Al=Zt()}function qr(n){return(n.mode&1)===0?1:(kt&2)!==0&&Dn!==0?Dn&-Dn:bx.transition!==null?(Rl===0&&(Rl=xn()),Rl):(n=vt,n!==0||(n=window.event,n=n===void 0?16:qa(n.type)),n)}function ki(n,i,a,c){if(50<_o)throw _o=0,ku=null,Error(t(185));on(n,a,c),((kt&2)===0||n!==Tn)&&(n===Tn&&((kt&2)===0&&(bl|=a),_n===4&&Yr(n,Dn)),ri(n,c),a===1&&kt===0&&(i.mode&1)===0&&(va=Zt()+500,il&&jr()))}function ri(n,i){var a=n.callbackNode;Ot(n,i);var c=xt(n,n===Tn?Dn:0);if(c===0)a!==null&&us(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&us(a),i===1)n.tag===0?wx(im.bind(null,n)):Vh(im.bind(null,n)),_x(function(){(kt&6)===0&&jr()}),a=null;else{switch(bn(c)){case 1:a=Y;break;case 4:a=ce;break;case 16:a=re;break;case 536870912:a=Ie;break;default:a=re}a=dm(a,nm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function nm(n,i){if(Al=-1,Rl=0,(kt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(_a()&&n.callbackNode!==a)return null;var c=xt(n,n===Tn?Dn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Nl(n,c);else{i=c;var h=kt;kt|=2;var g=sm();(Tn!==n||Dn!==i)&&(_r=null,va=Zt()+500,As(n,i));do try{Hx();break}catch(k){rm(n,k)}while(!0);nu(),wl.current=g,kt=h,mn!==null?i=0:(Tn=null,Dn=0,i=_n)}if(i!==0){if(i===2&&(h=Rt(n),h!==0&&(c=h,i=Bu(n,h))),i===1)throw a=xo,As(n,0),Yr(n,c),ri(n,Zt()),a;if(i===6)Yr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Vx(h)&&(i=Nl(n,c),i===2&&(g=Rt(n),g!==0&&(c=g,i=Bu(n,g))),i===1))throw a=xo,As(n,0),Yr(n,c),ri(n,Zt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Rs(n,ii,_r);break;case 3:if(Yr(n,c),(c&130023424)===c&&(i=Ou+500-Zt(),10<i)){if(xt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){$n(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Wc(Rs.bind(null,n,ii,_r),i);break}Rs(n,ii,_r);break;case 4:if(Yr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-Ge(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jx(c/1960))-c,10<c){n.timeoutHandle=Wc(Rs.bind(null,n,ii,_r),c);break}Rs(n,ii,_r);break;case 5:Rs(n,ii,_r);break;default:throw Error(t(329))}}}return ri(n,Zt()),n.callbackNode===a?nm.bind(null,n):null}function Bu(n,i){var a=vo;return n.current.memoizedState.isDehydrated&&(As(n,i).flags|=256),n=Nl(n,i),n!==2&&(i=ii,ii=a,i!==null&&zu(i)),n}function zu(n){ii===null?ii=n:ii.push.apply(ii,n)}function Vx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!Li(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Yr(n,i){for(i&=~Uu,i&=~bl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ge(i),c=1<<a;n[a]=-1,i&=~c}}function im(n){if((kt&6)!==0)throw Error(t(327));_a();var i=xt(n,0);if((i&1)===0)return ri(n,Zt()),null;var a=Nl(n,i);if(n.tag!==0&&a===2){var c=Rt(n);c!==0&&(i=c,a=Bu(n,c))}if(a===1)throw a=xo,As(n,0),Yr(n,i),ri(n,Zt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Rs(n,ii,_r),ri(n,Zt()),null}function ju(n,i){var a=kt;kt|=1;try{return n(i)}finally{kt=a,kt===0&&(va=Zt()+500,il&&jr())}}function Cs(n){Xr!==null&&Xr.tag===0&&(kt&6)===0&&_a();var i=kt;kt|=1;var a=Ci.transition,c=vt;try{if(Ci.transition=null,vt=1,n)return n()}finally{vt=c,Ci.transition=a,kt=i,(kt&6)===0&&jr()}}function Vu(){pi=xa.current,Jt(xa)}function As(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vx(a)),mn!==null)for(a=mn.return;a!==null;){var c=a;switch(Zc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&tl();break;case 3:pa(),Jt(ei),Jt(Bn),uu();break;case 5:lu(c);break;case 4:pa();break;case 13:Jt(rn);break;case 19:Jt(rn);break;case 10:iu(c.type._context);break;case 22:case 23:Vu()}a=a.return}if(Tn=n,mn=n=$r(n.current,null),Dn=pi=i,_n=0,xo=null,Uu=bl=Ts=0,ii=vo=null,ws!==null){for(i=0;i<ws.length;i++)if(a=ws[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}ws=null}return n}function rm(n,i){do{var a=mn;try{if(nu(),hl.current=xl,pl){for(var c=sn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}pl=!1}if(Es=0,En=vn=sn=null,uo=!1,fo=0,Iu.current=null,a===null||a.return===null){_n=1,xo=i,mn=null;break}e:{var g=n,E=a.return,k=a,V=i;if(i=Dn,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var le=V,ye=k,be=ye.tag;if((ye.mode&1)===0&&(be===0||be===11||be===15)){var ve=ye.alternate;ve?(ye.updateQueue=ve.updateQueue,ye.memoizedState=ve.memoizedState,ye.lanes=ve.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Xe=Rp(E);if(Xe!==null){Xe.flags&=-257,Np(Xe,E,k,g,i),Xe.mode&1&&Ap(g,le,i),i=Xe,V=le;var Qe=i.updateQueue;if(Qe===null){var et=new Set;et.add(V),i.updateQueue=et}else Qe.add(V);break e}else{if((i&1)===0){Ap(g,le,i),Gu();break e}V=Error(t(426))}}else if(nn&&k.mode&1){var fn=Rp(E);if(fn!==null){(fn.flags&65536)===0&&(fn.flags|=256),Np(fn,E,k,g,i),eu(ma(V,k));break e}}g=V=ma(V,k),_n!==4&&(_n=2),vo===null?vo=[g]:vo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var J=Tp(g,V,i);Jh(g,J);break e;case 1:k=V;var W=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Wr===null||!Wr.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ce=Cp(g,k,i);Jh(g,Ce);break e}}g=g.return}while(g!==null)}om(a)}catch(tt){i=tt,mn===a&&a!==null&&(mn=a=a.return);continue}break}while(!0)}function sm(){var n=wl.current;return wl.current=xl,n===null?xl:n}function Gu(){(_n===0||_n===3||_n===2)&&(_n=4),Tn===null||(Ts&268435455)===0&&(bl&268435455)===0||Yr(Tn,Dn)}function Nl(n,i){var a=kt;kt|=2;var c=sm();(Tn!==n||Dn!==i)&&(_r=null,As(n,i));do try{Gx();break}catch(h){rm(n,h)}while(!0);if(nu(),kt=a,wl.current=c,mn!==null)throw Error(t(261));return Tn=null,Dn=0,_n}function Gx(){for(;mn!==null;)am(mn)}function Hx(){for(;mn!==null&&!Xs();)am(mn)}function am(n){var i=um(n.alternate,n,pi);n.memoizedProps=n.pendingProps,i===null?om(n):mn=i,Iu.current=null}function om(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ox(a,i,pi),a!==null){mn=a;return}}else{if(a=Fx(a,i),a!==null){a.flags&=32767,mn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,mn=null;return}}if(i=i.sibling,i!==null){mn=i;return}mn=i=n}while(i!==null);_n===0&&(_n=5)}function Rs(n,i,a){var c=vt,h=Ci.transition;try{Ci.transition=null,vt=1,Wx(n,i,a,c)}finally{Ci.transition=h,vt=c}return null}function Wx(n,i,a,c){do _a();while(Xr!==null);if((kt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Xi(n,g),n===Tn&&(mn=Tn=null,Dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Tl||(Tl=!0,dm(re,function(){return _a(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ci.transition,Ci.transition=null;var E=vt;vt=1;var k=kt;kt|=4,Iu.current=null,Bx(n,a),Zp(a,n),dx(Gc),xs=!!Vc,Gc=Vc=null,n.current=a,zx(a),ds(),kt=k,vt=E,Ci.transition=g}else n.current=a;if(Tl&&(Tl=!1,Xr=n,Cl=h),g=n.pendingLanes,g===0&&(Wr=null),$e(a.stateNode),ri(n,Zt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(El)throw El=!1,n=Fu,Fu=null,n;return(Cl&1)!==0&&n.tag!==0&&_a(),g=n.pendingLanes,(g&1)!==0?n===ku?_o++:(_o=0,ku=n):_o=0,jr(),null}function _a(){if(Xr!==null){var n=bn(Cl),i=Ci.transition,a=vt;try{if(Ci.transition=null,vt=16>n?16:n,Xr===null)var c=!1;else{if(n=Xr,Xr=null,Cl=0,(kt&6)!==0)throw Error(t(331));var h=kt;for(kt|=4,Ke=n.current;Ke!==null;){var g=Ke,E=g.child;if((Ke.flags&16)!==0){var k=g.deletions;if(k!==null){for(var V=0;V<k.length;V++){var le=k[V];for(Ke=le;Ke!==null;){var ye=Ke;switch(ye.tag){case 0:case 11:case 15:go(8,ye,g)}var be=ye.child;if(be!==null)be.return=ye,Ke=be;else for(;Ke!==null;){ye=Ke;var ve=ye.sibling,Xe=ye.return;if(Xp(ye),ye===le){Ke=null;break}if(ve!==null){ve.return=Xe,Ke=ve;break}Ke=Xe}}}var Qe=g.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var fn=et.sibling;et.sibling=null,et=fn}while(et!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ke=E;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:go(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Ke=J;break e}Ke=g.return}}var W=n.current;for(Ke=W;Ke!==null;){E=Ke;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,Ke=ne;else e:for(E=W;Ke!==null;){if(k=Ke,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Ml(9,k)}}catch(tt){ln(k,k.return,tt)}if(k===E){Ke=null;break e}var Ce=k.sibling;if(Ce!==null){Ce.return=k.return,Ke=Ce;break e}Ke=k.return}}if(kt=h,jr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(je,n)}catch{}c=!0}return c}finally{vt=a,Ci.transition=i}}return!1}function lm(n,i,a){i=ma(a,i),i=Tp(n,i,1),n=Gr(n,i,1),i=$n(),n!==null&&(on(n,1,i),ri(n,i))}function ln(n,i,a){if(n.tag===3)lm(n,n,a);else for(;i!==null;){if(i.tag===3){lm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Wr===null||!Wr.has(c))){n=ma(a,n),n=Cp(i,n,1),i=Gr(i,n,1),n=$n(),i!==null&&(on(i,1,n),ri(i,n));break}}i=i.return}}function Xx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=$n(),n.pingedLanes|=n.suspendedLanes&a,Tn===n&&(Dn&a)===a&&(_n===4||_n===3&&(Dn&130023424)===Dn&&500>Zt()-Ou?As(n,0):Uu|=a),ri(n,i)}function cm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var a=$n();n=gr(n,i),n!==null&&(on(n,i,a),ri(n,a))}function qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),cm(n,a)}function Yx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),cm(n,a)}var um;um=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ei.current)ni=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ni=!1,Ux(n,i,a);ni=(n.flags&131072)!==0}else ni=!1,nn&&(i.flags&1048576)!==0&&Gh(i,sl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;yl(n,i),n=i.pendingProps;var h=oa(i,Bn.current);ha(i,a),h=hu(null,i,c,n,h,a);var g=pu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ti(c)?(g=!0,nl(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,au(i),h.updater=vl,i.stateNode=h,h._reactInternals=i,yu(i,c,n,a),i=bu(null,i,c,!0,g,a)):(i.tag=0,nn&&g&&Kc(i),Yn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(yl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Kx(c),n=Ui(c,n),h){case 0:i=wu(null,i,c,n,a);break e;case 1:i=Op(null,i,c,n,a);break e;case 11:i=Pp(null,i,c,n,a);break e;case 14:i=Dp(null,i,c,Ui(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ui(c,h),wu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ui(c,h),Op(n,i,c,h,a);case 3:e:{if(Fp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Qh(n,i),dl(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=ma(Error(t(423)),i),i=kp(n,i,c,a,h);break e}else if(c!==h){h=ma(Error(t(424)),i),i=kp(n,i,c,a,h);break e}else for(hi=kr(i.stateNode.containerInfo.firstChild),fi=i,nn=!0,Ii=null,a=Kh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ua(),c===h){i=vr(n,i,a);break e}Yn(n,i,c,a)}i=i.child}return i;case 5:return tp(i),n===null&&Jc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,Hc(c,h)?E=null:g!==null&&Hc(c,g)&&(i.flags|=32),Up(n,i),Yn(n,i,E,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return Bp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=da(i,null,c,a):Yn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ui(c,h),Pp(n,i,c,h,a);case 7:return Yn(n,i,i.pendingProps,a),i.child;case 8:return Yn(n,i,i.pendingProps.children,a),i.child;case 12:return Yn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,Kt(ll,c._currentValue),c._currentValue=E,g!==null)if(Li(g.value,E)){if(g.children===h.children&&!ei.current){i=vr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){E=g.child;for(var V=k.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=xr(-1,a&-a),V.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var ye=le.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),le.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),ru(g.return,a,i),k.lanes|=a;break}V=V.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),ru(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}Yn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,ha(i,a),h=Ei(h),c=c(h),i.flags|=1,Yn(n,i,c,a),i.child;case 14:return c=i.type,h=Ui(c,i.pendingProps),h=Ui(c.type,h),Dp(n,i,c,h,a);case 15:return Lp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Ui(c,h),yl(n,i),i.tag=1,ti(c)?(n=!0,nl(i)):n=!1,ha(i,a),bp(i,c,h),yu(i,c,h,a),bu(null,i,c,!0,n,a);case 19:return jp(n,i,a);case 22:return Ip(n,i,a)}throw Error(t(156,i.tag))};function dm(n,i){return Ws(n,i)}function $x(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,i,a,c){return new $x(n,i,a,c)}function Hu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kx(n){if(typeof n=="function")return Hu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===se)return 14}return 2}function $r(n,i){var a=n.alternate;return a===null?(a=Ai(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Pl(n,i,a,c,h,g){var E=2;if(c=n,typeof n=="function")Hu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Ns(a.children,h,g,i);case z:E=8,h|=8;break;case b:return n=Ai(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case Z:return n=Ai(13,a,i,h),n.elementType=Z,n.lanes=g,n;case ie:return n=Ai(19,a,i,h),n.elementType=ie,n.lanes=g,n;case q:return Dl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:E=10;break e;case B:E=9;break e;case $:E=11;break e;case se:E=14;break e;case ee:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ai(E,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Ns(n,i,a,c){return n=Ai(7,n,c,i),n.lanes=a,n}function Dl(n,i,a,c){return n=Ai(22,n,c,i),n.elementType=q,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=Ai(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=Ai(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ui(0),this.expirationTimes=ui(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ui(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function qu(n,i,a,c,h,g,E,k,V){return n=new Zx(n,i,a,k,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ai(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},au(g),n}function Qx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function fm(n){if(!n)return zr;n=n._reactInternals;e:{if(Qn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ti(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ti(a))return zh(n,a,i)}return i}function hm(n,i,a,c,h,g,E,k,V){return n=qu(a,c,!0,n,h,g,E,k,V),n.context=fm(null),a=n.current,c=$n(),h=qr(a),g=xr(c,h),g.callback=i??null,Gr(a,g,h),n.current.lanes=h,on(n,h,c),ri(n,c),n}function Ll(n,i,a,c){var h=i.current,g=$n(),E=qr(h);return a=fm(a),i.context===null?i.context=a:i.pendingContext=a,i=xr(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Gr(h,i,E),n!==null&&(ki(n,h,E,g),ul(n,h,E)),E}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function pm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Yu(n,i){pm(n,i),(n=n.alternate)&&pm(n,i)}function Jx(){return null}var mm=typeof reportError=="function"?reportError:function(n){console.error(n)};function $u(n){this._internalRoot=n}Ul.prototype.render=$u.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ll(n,i,null,null)},Ul.prototype.unmount=$u.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Cs(function(){Ll(null,n,null,null)}),i[fr]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=di();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Mi.length&&i!==0&&i<Mi[a].priority;a++);Mi.splice(a,0,n),a===0&&Ys(n)}};function Ku(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function gm(){}function ev(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var le=Il(E);g.call(le)}}var E=hm(i,c,n,0,null,!1,!1,"",gm);return n._reactRootContainer=E,n[fr]=E.current,no(n.nodeType===8?n.parentNode:n),Cs(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var le=Il(V);k.call(le)}}var V=qu(n,0,!1,null,null,!1,!1,"",gm);return n._reactRootContainer=V,n[fr]=V.current,no(n.nodeType===8?n.parentNode:n),Cs(function(){Ll(i,V,a,c)}),V}function Fl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var k=h;h=function(){var V=Il(E);k.call(V)}}Ll(i,E,n,h)}else E=ev(a,i,n,h,c);return Il(E)}un=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=jt(i.pendingLanes);a!==0&&(Ft(i,a|1),ri(i,Zt()),(kt&6)===0&&(va=Zt()+500,jr()))}break;case 13:Cs(function(){var c=gr(n,1);if(c!==null){var h=$n();ki(c,n,1,h)}}),Yu(n,1)}},Wt=function(n){if(n.tag===13){var i=gr(n,134217728);if(i!==null){var a=$n();ki(i,n,134217728,a)}Yu(n,134217728)}},qi=function(n){if(n.tag===13){var i=qr(n),a=gr(n,i);if(a!==null){var c=$n();ki(a,n,i,c)}Yu(n,i)}},di=function(){return vt},Xa=function(n,i){var a=vt;try{return vt=n,i()}finally{vt=a}},De=function(n,i,a){switch(i){case"input":if(it(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=el(c);if(!h)throw Error(t(90));$t(c),it(c,h)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&nt(n,!!a.multiple,i,!1)}},Je=ju,Dt=Cs;var tv={usingClientEntryPoint:!1,Events:[so,sa,el,fe,xe,ju]},yo={findFiberByHostInstance:_s,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:yo.bundleType,version:yo.version,rendererPackageName:yo.rendererPackageName,rendererConfig:yo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=yi(n),n===null?null:n.stateNode},findFiberByHostInstance:yo.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{je=kl.inject(nv),Ae=kl}catch{}}return si.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv,si.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ku(i))throw Error(t(200));return Qx(n,i,null,a)},si.createRoot=function(n,i){if(!Ku(n))throw Error(t(299));var a=!1,c="",h=mm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=qu(n,1,!1,null,null,a,!1,c,h),n[fr]=i.current,no(n.nodeType===8?n.parentNode:n),new $u(i)},si.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=yi(i),n=n===null?null:n.stateNode,n},si.flushSync=function(n){return Cs(n)},si.hydrate=function(n,i,a){if(!Ol(i))throw Error(t(200));return Fl(null,n,i,!0,a)},si.hydrateRoot=function(n,i,a){if(!Ku(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=mm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=hm(i,null,n,1,a??null,h,!1,g,E),n[fr]=i.current,no(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ul(i)},si.render=function(n,i,a){if(!Ol(i))throw Error(t(200));return Fl(null,n,i,!1,a)},si.unmountComponentAtNode=function(n){if(!Ol(n))throw Error(t(40));return n._reactRootContainer?(Cs(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[fr]=null})}),!0):!1},si.unstable_batchedUpdates=ju,si.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ol(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fl(n,i,a,!1,c)},si.version="18.3.1-next-f1338f8080-20240426",si}var bm;function dv(){if(bm)return Ju.exports;bm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=uv(),Ju.exports}var Em;function fv(){if(Em)return Bl;Em=1;var s=dv();return Bl.createRoot=s.createRoot,Bl.hydrateRoot=s.hydrateRoot,Bl}var hv=fv();const pv=F0(hv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),k0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Ue.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>Ue.createElement("svg",{ref:p,...gv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:k0("lucide",o),...f},[...d.map(([m,x])=>Ue.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(s,e)=>{const t=Ue.forwardRef(({className:r,...o},l)=>Ue.createElement(xv,{ref:l,iconNode:e,className:k0(`lucide-${mv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=ft("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ft("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ft("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ft("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ft("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ft("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=ft("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=ft("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ft("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=ft("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ft("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=ft("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ft("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=ft("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ft("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ft("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ft("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ft("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=ft("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=ft("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ft("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ft("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ft("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ft("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ft("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=ft("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=ft("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ft("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ft("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=ft("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ft("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ft("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Gv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Ue.useState(!1),[o,l]=Ue.useState(!1);Ue.useEffect(()=>{const f=()=>{r(window.scrollY>window.innerHeight*.7)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:Do},{name:"Central VTS",href:"#central-vts",icon:Fv},{name:"Normas NBR",href:"#normas",icon:Ud},{name:"Calculadora & Diagrama",href:"#calculadora",icon:B0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:xc},{name:"Manuais",href:"#manuais",icon:Ud},{name:"Fotos Reais",href:"#galeria",icon:ko},{name:"Contato",href:"#contato",icon:Ar}];return u.jsxs("div",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${t?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium shadow-md",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(Ar,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(xc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(Fd,{className:"w-6 h-6"}):u.jsx(Nv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(Ar,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="182",Oa={ROTATE:0,DOLLY:1,PAN:2},Ua={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hv=0,Dm=1,Wv=2,lc=1,Ff=2,No=3,os=0,li=1,Tr=2,Rr=0,Fa=1,Lm=2,Im=3,Um=4,Xv=5,Fs=100,qv=101,Yv=102,$v=103,Kv=104,Zv=200,Qv=201,Jv=202,e_=203,kd=204,Bd=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,zd=0,jd=1,Vd=2,Ba=3,Gd=4,Hd=5,Wd=6,Xd=7,X0=0,u_=1,d_=2,nr=0,q0=1,Y0=2,$0=3,Mc=4,K0=5,Z0=6,Q0=7,J0=300,js=301,za=302,qd=303,Yd=304,wc=306,$d=1e3,Cr=1001,Kd=1002,In=1003,f_=1004,zl=1005,Xn=1006,nd=1007,Bs=1008,xi=1009,eg=1010,tg=1011,Lo=1012,kf=1013,sr=1014,er=1015,Pr=1016,Bf=1017,zf=1018,Io=1020,ng=35902,ig=35899,rg=1021,sg=1022,Hi=1023,Dr=1026,zs=1027,ag=1028,jf=1029,ja=1030,Vf=1031,Gf=1033,cc=33776,uc=33777,dc=33778,fc=33779,Zd=35840,Qd=35841,Jd=35842,ef=35843,tf=36196,nf=37492,rf=37496,sf=37488,af=37489,of=37490,lf=37491,cf=37808,uf=37809,df=37810,ff=37811,hf=37812,pf=37813,mf=37814,gf=37815,xf=37816,vf=37817,_f=37818,yf=37819,Sf=37820,Mf=37821,wf=36492,bf=36494,Ef=36495,Tf=36283,Cf=36284,Af=36285,Rf=36286,h_=3200,og=0,p_=1,ss="",Ln="srgb",Va="srgb-linear",vc="linear",Xt="srgb",ya=7680,Om=519,m_=512,g_=513,x_=514,Hf=515,v_=516,__=517,Wf=518,y_=519,Fm=35044,km="300 es",tr=2e3,_c=2001;function lg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Uo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=Uo("canvas");return s.style.display="block",s}const Bm={};function zm(...s){const e="THREE."+s.shift();console.log(e,...s)}function yt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Bt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Oo(...s){const e=s.join(" ");e in Bm||(Bm[e]=!0,yt(...s))}function M_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,yc=180/Math.PI;function Bo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]).toLowerCase()}function Lt(s,e,t){return Math.max(e,Math.min(t,s))}function w_(s,e){return(s%e+e)%e}function id(s,e,t){return(1-t)*s+t*e}function Mo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:hc};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],A=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(v!==A||p!==S||m!==M||x!==T){let y=p*S+m*M+x*T+v*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let _=1-f;if(y<.9995){const C=Math.acos(y),L=Math.sin(C);_=Math.sin(_*C)/L,f=Math.sin(f*C)/L,p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f}else{p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+x*v+p*M-m*S,e[t+1]=p*T+x*S+m*v-f*M,e[t+2]=m*T+x*M+f*S-p*v,e[t+3]=x*T-f*v-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),x=f(o/2),v=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"YXZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"ZXY":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"ZYX":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"YZX":this._x=S*x*v+m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v-S*M*T;break;case"XZY":this._x=S*x*v-m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v+S*M*T;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],x=t[6],v=t[10],S=r+f+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>v){const M=2*Math.sqrt(1+r-f-v);this._w=(x-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>v){const M=2*Math.sqrt(1+f-r-v);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+d*f+o*m-l*p,this._y=o*x+d*p+l*f-r*m,this._z=l*x+d*m+r*p-o*f,this._w=d*x-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),x=2*(f*t-l*o),v=2*(l*r-d*t);return this.x=t+p*m+d*v-f*x,this.y=r+p*x+f*m-l*v,this.z=o+p*v+l*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return rd.copy(this).projectOnVector(e),this.sub(rd)}reflect(e){return this.sub(rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Lt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const rd=new K,jm=new Vs;class Et{constructor(e,t,r,o,l,d,f,p,m){Et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],x=r[4],v=r[7],S=r[2],M=r[5],T=r[8],A=o[0],y=o[3],_=o[6],C=o[1],L=o[4],P=o[7],I=o[2],D=o[5],O=o[8];return l[0]=d*A+f*C+p*I,l[3]=d*y+f*L+p*D,l[6]=d*_+f*P+p*O,l[1]=m*A+x*C+v*I,l[4]=m*y+x*L+v*D,l[7]=m*_+x*P+v*O,l[2]=S*A+M*C+T*I,l[5]=S*y+M*L+T*D,l[8]=S*_+M*P+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return t*d*x-t*f*m-r*l*x+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=x*d-f*m,S=f*p-x*l,M=m*l-d*p,T=t*v+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=S*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(sd.makeScale(e,t)),this}rotate(e){return this.premultiply(sd.makeRotation(-e)),this}translate(e,t){return this.premultiply(sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sd=new Et,Vm=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gm=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const s={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Xt&&(o.r=Nr(o.r),o.g=Nr(o.g),o.b=Nr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ss?vc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Va]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ln},outputColorSpaceConfig:{drawingBufferColorSpace:Ln}},[Ln]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Vm,fromXYZ:Gm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ln}}}),s}const zt=E_();function Nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ka(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Sa;class T_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Sa===void 0&&(Sa=Uo("canvas")),Sa.width=e.width,Sa.height=e.height;const o=Sa.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Sa}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Uo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Nr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Nr(t[r]/255)*255):t[r]=Nr(t[r]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(ad(o[d].image)):l.push(ad(o[d]))}else l=ad(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ad(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?T_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let A_=0;const od=new K;class Un extends Gs{constructor(e=Un.DEFAULT_IMAGE,t=Un.DEFAULT_MAPPING,r=Cr,o=Cr,l=Xn,d=Bs,f=Hi,p=xi,m=Un.DEFAULT_ANISOTROPY,x=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Bo(),this.name="",this.source=new Xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $d:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $d:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=J0;Un.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,r=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],S=p[1],M=p[5],T=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(x-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(M+1)/2,I=(_+1)/2,D=(x+S)/4,O=(v+A)/4,z=(T+y)/4;return L>P&&L>I?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=O/r):P>I?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=z/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=O/l,o=z/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(S-x)*(S-x));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-A)/C,this.z=(S-x)/C,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Lt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends Gs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Un(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Xf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ir extends R_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cg extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N_ extends Un{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=In,this.minFilter=In,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zo{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Bi):Bi.fromBufferAttribute(l,d),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),Vl.subVectors(this.max,wo),Ma.subVectors(e.a,wo),wa.subVectors(e.b,wo),ba.subVectors(e.c,wo),Zr.subVectors(wa,Ma),Qr.subVectors(ba,wa),Ps.subVectors(Ma,ba);let t=[0,-Zr.z,Zr.y,0,-Qr.z,Qr.y,0,-Ps.z,Ps.y,Zr.z,0,-Zr.x,Qr.z,0,-Qr.x,Ps.z,0,-Ps.x,-Zr.y,Zr.x,0,-Qr.y,Qr.x,0,-Ps.y,Ps.x,0];return!ld(t,Ma,wa,ba,Vl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,Ma,wa,ba,Vl))?!1:(Gl.crossVectors(Zr,Qr),t=[Gl.x,Gl.y,Gl.z],ld(t,Ma,wa,ba,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new K,new K,new K,new K,new K,new K,new K,new K],Bi=new K,jl=new zo,Ma=new K,wa=new K,ba=new K,Zr=new K,Qr=new K,Ps=new K,wo=new K,Vl=new K,Gl=new K,Ds=new K;function ld(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){Ds.fromArray(s,l);const f=o.x*Math.abs(Ds.x)+o.y*Math.abs(Ds.y)+o.z*Math.abs(Ds.z),p=e.dot(Ds),m=t.dot(Ds),x=r.dot(Ds);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const P_=new zo,bo=new K,cd=new K;class qf{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):P_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(bo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(cd)),this.expandByPoint(bo.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sr=new K,ud=new K,Hl=new K,Jr=new K,dd=new K,Wl=new K,fd=new K;class Yf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ud.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),Jr.copy(this.origin).sub(ud);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Hl),f=Jr.dot(this.direction),p=-Jr.dot(Hl),m=Jr.lengthSq(),x=Math.abs(1-d*d);let v,S,M,T;if(x>0)if(v=d*p-f,S=d*f-p,T=l*x,v>=0)if(S>=-T)if(S<=T){const A=1/x;v*=A,S*=A,M=v*(v+d*S+2*f)+S*(d*v+S+2*p)+m}else S=l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S=-l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S<=-T?(v=Math.max(0,-(-d*l+f)),S=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m):S<=T?(v=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(v=Math.max(0,-(d*l+f)),S=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m);else S=d>0?-l:l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ud).addScaledVector(Hl,S),M}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const r=Sr.dot(this.direction),o=Sr.dot(Sr)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(l=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(f=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,r,o,l){dd.subVectors(t,e),Wl.subVectors(r,e),fd.crossVectors(dd,Wl);let d=this.direction.dot(fd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Jr.subVectors(this.origin,e);const p=f*this.direction.dot(Wl.crossVectors(Jr,Wl));if(p<0)return null;const m=f*this.direction.dot(dd.cross(Jr));if(m<0||p+m>d)return null;const x=-f*Jr.dot(fd);return x<0?null:this.at(x/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class an{constructor(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){an.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y)}set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=S,_[3]=M,_[7]=T,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new an().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ea.setFromMatrixColumn(e,0).length(),l=1/Ea.setFromMatrixColumn(e,1).length(),d=1/Ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=M+T*m,t[5]=S-A*m,t[9]=-f*p,t[2]=A-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S+A*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*v,t[5]=d*x,t[9]=-f,t[2]=M*f-T,t[6]=A+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S-A*f,t[4]=-d*v,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*x,t[9]=A-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=T*m-M,t[8]=S*m+A,t[1]=p*v,t[5]=A*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=A-S*v,t[8]=T*v+M,t[1]=v,t[5]=d*x,t[9]=-f*x,t[2]=-m*x,t[6]=M*v+T,t[10]=S-A*v}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=S*v+A,t[5]=d*x,t[9]=M*v-T,t[2]=T*v-M,t[6]=f*x,t[10]=A*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,r){const o=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),es.crossVectors(r,mi),es.lengthSq()===0&&(Math.abs(r.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),es.crossVectors(r,mi)),es.normalize(),Xl.crossVectors(mi,es),o[0]=es.x,o[4]=Xl.x,o[8]=mi.x,o[1]=es.y,o[5]=Xl.y,o[9]=mi.y,o[2]=es.z,o[6]=Xl.z,o[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],x=r[1],v=r[5],S=r[9],M=r[13],T=r[2],A=r[6],y=r[10],_=r[14],C=r[3],L=r[7],P=r[11],I=r[15],D=o[0],O=o[4],z=o[8],b=o[12],N=o[1],B=o[5],$=o[9],Z=o[13],ie=o[2],se=o[6],ee=o[10],q=o[14],X=o[3],he=o[7],ae=o[11],F=o[15];return l[0]=d*D+f*N+p*ie+m*X,l[4]=d*O+f*B+p*se+m*he,l[8]=d*z+f*$+p*ee+m*ae,l[12]=d*b+f*Z+p*q+m*F,l[1]=x*D+v*N+S*ie+M*X,l[5]=x*O+v*B+S*se+M*he,l[9]=x*z+v*$+S*ee+M*ae,l[13]=x*b+v*Z+S*q+M*F,l[2]=T*D+A*N+y*ie+_*X,l[6]=T*O+A*B+y*se+_*he,l[10]=T*z+A*$+y*ee+_*ae,l[14]=T*b+A*Z+y*q+_*F,l[3]=C*D+L*N+P*ie+I*X,l[7]=C*O+L*B+P*se+I*he,l[11]=C*z+L*$+P*ee+I*ae,l[15]=C*b+L*Z+P*q+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],x=e[2],v=e[6],S=e[10],M=e[14],T=e[3],A=e[7],y=e[11],_=e[15],C=p*M-m*S,L=f*M-m*v,P=f*S-p*v,I=d*M-m*x,D=d*S-p*x,O=d*v-f*x;return t*(A*C-y*L+_*P)-r*(T*C-y*I+_*D)+o*(T*L-A*I+_*O)-l*(T*P-A*D+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=e[9],S=e[10],M=e[11],T=e[12],A=e[13],y=e[14],_=e[15],C=v*y*m-A*S*m+A*p*M-f*y*M-v*p*_+f*S*_,L=T*S*m-x*y*m-T*p*M+d*y*M+x*p*_-d*S*_,P=x*A*m-T*v*m+T*f*M-d*A*M-x*f*_+d*v*_,I=T*v*p-x*A*p-T*f*S+d*A*S+x*f*y-d*v*y,D=t*C+r*L+o*P+l*I;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=C*O,e[1]=(A*S*l-v*y*l-A*o*M+r*y*M+v*o*_-r*S*_)*O,e[2]=(f*y*l-A*p*l+A*o*m-r*y*m-f*o*_+r*p*_)*O,e[3]=(v*p*l-f*S*l-v*o*m+r*S*m+f*o*M-r*p*M)*O,e[4]=L*O,e[5]=(x*y*l-T*S*l+T*o*M-t*y*M-x*o*_+t*S*_)*O,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*_-t*p*_)*O,e[7]=(d*S*l-x*p*l+x*o*m-t*S*m-d*o*M+t*p*M)*O,e[8]=P*O,e[9]=(T*v*l-x*A*l-T*r*M+t*A*M+x*r*_-t*v*_)*O,e[10]=(d*A*l-T*f*l+T*r*m-t*A*m-d*r*_+t*f*_)*O,e[11]=(x*f*l-d*v*l-x*r*m+t*v*m+d*r*M-t*f*M)*O,e[12]=I*O,e[13]=(x*A*o-T*v*o+T*r*S-t*A*S-x*r*y+t*v*y)*O,e[14]=(T*f*o-d*A*o-T*r*p+t*A*p+d*r*y-t*f*y)*O,e[15]=(d*v*o-x*f*o+x*r*p-t*v*p-d*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,x=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,x*f+r,x*p-o*d,0,m*p-o*f,x*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,x=d+d,v=f+f,S=l*m,M=l*x,T=l*v,A=d*x,y=d*v,_=f*v,C=p*m,L=p*x,P=p*v,I=r.x,D=r.y,O=r.z;return o[0]=(1-(A+_))*I,o[1]=(M+P)*I,o[2]=(T-L)*I,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(S+_))*D,o[6]=(y+C)*D,o[7]=0,o[8]=(T+L)*O,o[9]=(y-C)*O,o[10]=(1-(S+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Ea.set(o[0],o[1],o[2]).length();const d=Ea.set(o[4],o[5],o[6]).length(),f=Ea.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),zi.copy(this);const m=1/l,x=1/d,v=1/f;return zi.elements[0]*=m,zi.elements[1]*=m,zi.elements[2]*=m,zi.elements[4]*=x,zi.elements[5]*=x,zi.elements[6]*=x,zi.elements[8]*=v,zi.elements[9]*=v,zi.elements[10]*=v,t.setFromRotationMatrix(zi),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=tr,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(p)T=l/(d-l),A=d*l/(d-l);else if(f===tr)T=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(f===_c)T=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=tr,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(p)T=1/(d-l),A=d/(d-l);else if(f===tr)T=-2/(d-l),A=-(d+l)/(d-l);else if(f===_c)T=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ea=new K,zi=new an,D_=new K(0,0,0),L_=new K(1,1,1),es=new K,Xl=new K,mi=new K,Hm=new an,Wm=new Vs;class ar{constructor(e=0,t=0,r=0,o=ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],x=o[9],v=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Lt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Hm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wm.setFromEuler(this),this.setFromQuaternion(Wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ar.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const Xm=new K,Ta=new Vs,Mr=new an,ql=new K,Eo=new K,U_=new K,O_=new Vs,qm=new K(1,0,0),Ym=new K(0,1,0),$m=new K(0,0,1),Km={type:"added"},F_={type:"removed"},Ca={type:"childadded",child:null},hd={type:"childremoved",child:null};class Nn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const e=new K,t=new ar,r=new Vs,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new an},normalMatrix:{value:new Et}}),this.matrix=new an,this.matrixWorld=new an,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.multiply(Ta),this}rotateOnWorldAxis(e,t){return Ta.setFromAxisAngle(e,t),this.quaternion.premultiply(Ta),this}rotateX(e){return this.rotateOnAxis(qm,e)}rotateY(e){return this.rotateOnAxis(Ym,e)}rotateZ(e){return this.rotateOnAxis($m,e)}translateOnAxis(e,t){return Xm.copy(e).applyQuaternion(this.quaternion),this.position.add(Xm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qm,e)}translateY(e){return this.translateOnAxis(Ym,e)}translateZ(e){return this.translateOnAxis($m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ql.copy(e):ql.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Eo,ql,this.up):Mr.lookAt(ql,Eo,this.up),this.quaternion.setFromRotationMatrix(Mr),o&&(Mr.extractRotation(o.matrixWorld),Ta.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Km),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),hd.child=e,this.dispatchEvent(hd),hd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Km),Ca.child=e,this.dispatchEvent(Ca),Ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new K(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new K,wr=new K,pd=new K,br=new K,Aa=new K,Ra=new K,Zm=new K,md=new K,gd=new K,xd=new K,vd=new cn,_d=new cn,yd=new cn;class Vi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),ji.subVectors(e,t),o.cross(ji);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){ji.subVectors(o,t),wr.subVectors(r,t),pd.subVectors(e,t);const d=ji.dot(ji),f=ji.dot(wr),p=ji.dot(pd),m=wr.dot(wr),x=wr.dot(pd),v=d*m-f*f;if(v===0)return l.set(0,0,0),null;const S=1/v,M=(m*p-f*x)*S,T=(d*x-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,br)===null?!1:br.x>=0&&br.y>=0&&br.x+br.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,br)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,br.x),p.addScaledVector(d,br.y),p.addScaledVector(f,br.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return vd.setScalar(0),_d.setScalar(0),yd.setScalar(0),vd.fromBufferAttribute(e,t),_d.fromBufferAttribute(e,r),yd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(vd,l.x),d.addScaledVector(_d,l.y),d.addScaledVector(yd,l.z),d}static isFrontFacing(e,t,r,o){return ji.subVectors(r,t),wr.subVectors(e,t),ji.cross(wr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),ji.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Vi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;Aa.subVectors(o,r),Ra.subVectors(l,r),md.subVectors(e,r);const p=Aa.dot(md),m=Ra.dot(md);if(p<=0&&m<=0)return t.copy(r);gd.subVectors(e,o);const x=Aa.dot(gd),v=Ra.dot(gd);if(x>=0&&v<=x)return t.copy(o);const S=p*v-x*m;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),t.copy(r).addScaledVector(Aa,d);xd.subVectors(e,l);const M=Aa.dot(xd),T=Ra.dot(xd);if(T>=0&&M<=T)return t.copy(l);const A=M*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(Ra,f);const y=x*T-M*v;if(y<=0&&v-x>=0&&M-T>=0)return Zm.subVectors(l,o),f=(v-x)/(v-x+(M-T)),t.copy(o).addScaledVector(Zm,f);const _=1/(y+A+S);return d=A*_,f=S*_,t.copy(r).addScaledVector(Aa,d).addScaledVector(Ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Sd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,zt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=zt.workingColorSpace){return this.r=e,this.g=t,this.b=r,zt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=zt.workingColorSpace){if(e=w_(e,1),t=Lt(t,0,1),r=Lt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=Sd(d,l,e+1/3),this.g=Sd(d,l,e),this.b=Sd(d,l,e-1/3)}return zt.colorSpaceToWorking(this,o),this}setStyle(e,t=Ln){function r(l){l!==void 0&&parseFloat(l)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ln){const r=ug[e.toLowerCase()];return r!==void 0?this.setHex(r,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ln){return zt.workingToColorSpace(Hn.copy(this),e),Math.round(Lt(Hn.r*255,0,255))*65536+Math.round(Lt(Hn.g*255,0,255))*256+Math.round(Lt(Hn.b*255,0,255))}getHexString(e=Ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=zt.workingColorSpace){zt.workingToColorSpace(Hn.copy(this),t);const r=Hn.r,o=Hn.g,l=Hn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const x=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=x<=.5?v/(d+f):v/(2-d-f),d){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=zt.workingColorSpace){return zt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=Ln){zt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,r=Hn.g,o=Hn.b;return e!==Ln?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+t,ts.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ts),e.getHSL(Yl);const r=id(ts.h,Yl.h,t),o=id(ts.s,Yl.s,t),l=id(ts.l,Yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ct;Ct.NAMES=ug;let k_=0;class jo extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=Fa,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kd,this.blendDst=Bd,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Om,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ya,this.stencilZFail=ya,this.stencilZPass=ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(r.blending=this.blending),this.side!==os&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==kd&&(r.blendSrc=this.blendSrc),this.blendDst!==Bd&&(r.blendDst=this.blendDst),this.blendEquation!==Fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Om&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ya&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ya&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ya&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Gi extends jo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.combine=X0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=new K,$l=new gt;let B_=0;class rr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Fm,this.updateRanges=[],this.gpuType=er,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix3(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=ai(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array),o=ai(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=ai(t,this.array),r=ai(r,this.array),o=ai(o,this.array),l=ai(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fm&&(e.usage=this.usage),e}}class dg extends rr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class fg extends rr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class hn extends rr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z_=0;const Ri=new an,Md=new Nn,Na=new K,gi=new zo,To=new zo,An=new K;class vi extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?fg:dg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Et().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,r){return Ri.makeTranslation(e,t,r),this.applyMatrix4(Ri),this}scale(e,t,r){return Ri.makeScale(e,t,r),this.applyMatrix4(Ri),this}lookAt(e){return Md.lookAt(e),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Na).negate(),this.translate(Na.x,Na.y,Na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new hn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];gi.setFromBufferAttribute(l),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];To.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(gi.min,To.min),gi.expandByPoint(An),An.addVectors(gi.max,To.max),gi.expandByPoint(An)):(gi.expandByPoint(To.min),gi.expandByPoint(To.max))}gi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)An.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(An));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)An.fromBufferAttribute(f,m),p&&(Na.fromBufferAttribute(e,m),An.add(Na)),o=Math.max(o,r.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rr(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let z=0;z<r.count;z++)f[z]=new K,p[z]=new K;const m=new K,x=new K,v=new K,S=new gt,M=new gt,T=new gt,A=new K,y=new K;function _(z,b,N){m.fromBufferAttribute(r,z),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,N),S.fromBufferAttribute(l,z),M.fromBufferAttribute(l,b),T.fromBufferAttribute(l,N),x.sub(m),v.sub(m),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(B),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(B),f[z].add(A),f[b].add(A),f[N].add(A),p[z].add(y),p[b].add(y),p[N].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,b=C.length;z<b;++z){const N=C[z],B=N.start,$=N.count;for(let Z=B,ie=B+$;Z<ie;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new K,P=new K,I=new K,D=new K;function O(z){I.fromBufferAttribute(o,z),D.copy(I);const b=f[z];L.copy(b),L.sub(I.multiplyScalar(I.dot(b))).normalize(),P.crossVectors(D,b);const B=P.dot(p[z])<0?-1:1;d.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,b=C.length;z<b;++z){const N=C[z],B=N.start,$=N.count;for(let Z=B,ie=B+$;Z<ie;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new rr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new K,l=new K,d=new K,f=new K,p=new K,m=new K,x=new K,v=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),f.add(x),p.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,v=f.normalized,S=new m.constructor(p.length*x);let M=0,T=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?M=p[A]*f.data.stride+f.offset:M=p[A]*x;for(let _=0;_<x;_++)S[T++]=m[M++]}return new rr(S,x,v)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,v=m.length;x<v;x++){const S=m[x],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,S=m.length;v<S;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qm=new an,Ls=new Yf,Kl=new qf,Jm=new K,Zl=new K,Ql=new K,Jl=new K,wd=new K,ec=new K,e0=new K,tc=new K;class Oe extends Nn{constructor(e=new vi,t=new Gi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ec.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],v=l[p];x!==0&&(wd.fromBufferAttribute(v,e),d?ec.addScaledVector(wd,x):ec.addScaledVector(wd.sub(t),x))}t.add(ec)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Ls.copy(e.ray).recast(e.near),!(Kl.containsPoint(Ls.origin)===!1&&(Ls.intersectSphere(Kl,Jm)===null||Ls.origin.distanceToSquared(Jm)>(e.far-e.near)**2))&&(Qm.copy(l).invert(),Ls.copy(e.ray).applyMatrix4(Qm),!(r.boundingBox!==null&&Ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,I=L;P<I;P+=3){const D=f.getX(P),O=f.getX(P+1),z=f.getX(P+2);o=nc(this,_,e,r,m,x,v,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);o=nc(this,d,e,r,m,x,v,C,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,I=L;P<I;P+=3){const D=P,O=P+1,z=P+2;o=nc(this,_,e,r,m,x,v,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=y,L=y+1,P=y+2;o=nc(this,d,e,r,m,x,v,C,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function j_(s,e,t,r,o,l,d,f){let p;if(e.side===li?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===os,f),p===null)return null;tc.copy(f),tc.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(tc);return m<t.near||m>t.far?null:{distance:m,point:tc.clone(),object:s}}function nc(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,Zl),s.getVertexPosition(p,Ql),s.getVertexPosition(m,Jl);const x=j_(s,e,t,r,Zl,Ql,Jl,e0);if(x){const v=new K;Vi.getBarycoord(e0,Zl,Ql,Jl,v),o&&(x.uv=Vi.getInterpolatedAttribute(o,f,p,m,v,new gt)),l&&(x.uv1=Vi.getInterpolatedAttribute(l,f,p,m,v,new gt)),d&&(x.normal=Vi.getInterpolatedAttribute(d,f,p,m,v,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new K,materialIndex:0};Vi.getNormal(Zl,Ql,Jl,S.normal),x.face=S,x.barycoord=v}return x}class Gt extends vi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],x=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new hn(m,3)),this.setAttribute("normal",new hn(x,3)),this.setAttribute("uv",new hn(v,2));function T(A,y,_,C,L,P,I,D,O,z,b){const N=P/O,B=I/z,$=P/2,Z=I/2,ie=D/2,se=O+1,ee=z+1;let q=0,X=0;const he=new K;for(let ae=0;ae<ee;ae++){const F=ae*B-Z;for(let oe=0;oe<se;oe++){const Ne=oe*N-$;he[A]=Ne*C,he[y]=F*L,he[_]=ie,m.push(he.x,he.y,he.z),he[A]=0,he[y]=0,he[_]=D>0?1:-1,x.push(he.x,he.y,he.z),v.push(oe/O),v.push(1-ae/z),q+=1}}for(let ae=0;ae<z;ae++)for(let F=0;F<O;F++){const oe=S+F+se*ae,Ne=S+F+se*(ae+1),qe=S+(F+1)+se*(ae+1),Ye=S+(F+1)+se*ae;p.push(oe,Ne,Ye),p.push(Ne,qe,Ye),X+=6}f.addGroup(M,X,b),M+=X,S+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Kn(s){const e={};for(let t=0;t<s.length;t++){const r=Ga(s[t]);for(const o in r)e[o]=r[o]}return e}function V_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function hg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:zt.workingColorSpace}const G_={clone:Ga,merge:Kn};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends jo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class pg extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new an,this.projectionMatrix=new an,this.projectionMatrixInverse=new an,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new K,t0=new gt,n0=new gt;class Zn extends pg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,t0,n0),t.subVectors(n0,t0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Pa=-90,Da=1;class X_ extends Nn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Pa,Da,e,t);o.layers=this.layers,this.add(o);const l=new Zn(Pa,Da,e,t);l.layers=this.layers,this.add(l);const d=new Zn(Pa,Da,e,t);d.layers=this.layers,this.add(d);const f=new Zn(Pa,Da,e,t);f.layers=this.layers,this.add(f);const p=new Zn(Pa,Da,e,t);p.layers=this.layers,this.add(p);const m=new Zn(Pa,Da,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===tr)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===_c)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class mg extends Un{constructor(e=[],t=js,r,o,l,d,f,p,m,x){super(e,t,r,o,l,d,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends ir{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new mg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Gt(5,5,5),l=new or({name:"CubemapFromEquirect",uniforms:Ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:li,blending:Rr});l.uniforms.tEquirect.value=t;const d=new Oe(o,l),f=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Xn),new X_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class Rn extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Rn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Kf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ct(e),this.density=t}clone(){return new Kf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class xg extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ar,this.environmentIntensity=1,this.environmentRotation=new ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y_ extends Un{constructor(e=null,t=1,r=1,o,l,d,f,p,m=In,x=In,v,S){super(null,d,f,p,m,x,o,l,v,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ed=new K,$_=new K,K_=new Et;class rs{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Ed.subVectors(r,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ed),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K_.getNormalMatrix(e),o=this.coplanarPoint(Ed).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Is=new qf,Z_=new gt(.5,.5),ic=new K;class Zf{constructor(e=new rs,t=new rs,r=new rs,o=new rs,l=new rs,d=new rs){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=tr,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],x=l[4],v=l[5],S=l[6],M=l[7],T=l[8],A=l[9],y=l[10],_=l[11],C=l[12],L=l[13],P=l[14],I=l[15];if(o[0].setComponents(m-d,M-x,_-T,I-C).normalize(),o[1].setComponents(m+d,M+x,_+T,I+C).normalize(),o[2].setComponents(m+f,M+v,_+A,I+L).normalize(),o[3].setComponents(m-f,M-v,_-A,I-L).normalize(),r)o[4].setComponents(p,S,y,P).normalize(),o[5].setComponents(m-p,M-S,_-y,I-P).normalize();else if(o[4].setComponents(m-p,M-S,_-y,I-P).normalize(),t===tr)o[5].setComponents(m+p,M+S,_+y,I+P).normalize();else if(t===_c)o[5].setComponents(p,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Is)}intersectsSprite(e){Is.center.set(0,0,0);const t=Z_.distanceTo(e.center);return Is.radius=.7071067811865476+t,Is.applyMatrix4(e.matrixWorld),this.intersectsSphere(Is)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ic.x=o.normal.x>0?e.max.x:e.min.x,ic.y=o.normal.y>0?e.max.y:e.min.y,ic.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nf extends Un{constructor(e,t,r,o,l,d,f,p,m){super(e,t,r,o,l,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends Un{constructor(e,t,r=sr,o,l,d,f=In,p=In,m,x=Dr,v=1){if(x!==Dr&&x!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:v};super(S,o,l,d,f,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q_ extends Fo{constructor(e,t=sr,r=js,o,l,d=In,f=In,p,m=Dr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,f,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class vg extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qf extends vi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],d=[],f=[],p=[],m=new K,x=new gt;d.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let v=0,S=3;v<=t;v++,S+=3){const M=r+v/t*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),d.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(d[S]/e+1)/2,x.y=(d[S+1]/e+1)/2,p.push(x.x,x.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(f,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class en extends vi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],S=[],M=[];let T=0;const A=[],y=r/2;let _=0;C(),d===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new hn(v,3)),this.setAttribute("normal",new hn(S,3)),this.setAttribute("uv",new hn(M,2));function C(){const P=new K,I=new K;let D=0;const O=(t-e)/r;for(let z=0;z<=l;z++){const b=[],N=z/l,B=N*(t-e)+e;for(let $=0;$<=o;$++){const Z=$/o,ie=Z*p+f,se=Math.sin(ie),ee=Math.cos(ie);I.x=B*se,I.y=-N*r+y,I.z=B*ee,v.push(I.x,I.y,I.z),P.set(se,O,ee).normalize(),S.push(P.x,P.y,P.z),M.push(Z,1-N),b.push(T++)}A.push(b)}for(let z=0;z<o;z++)for(let b=0;b<l;b++){const N=A[b][z],B=A[b+1][z],$=A[b+1][z+1],Z=A[b][z+1];(e>0||b!==0)&&(x.push(N,B,Z),D+=3),(t>0||b!==l-1)&&(x.push(B,$,Z),D+=3)}m.addGroup(_,D,0),_+=D}function L(P){const I=T,D=new gt,O=new K;let z=0;const b=P===!0?e:t,N=P===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,y*N,0),S.push(0,N,0),M.push(.5,.5),T++;const B=T;for(let $=0;$<=o;$++){const ie=$/o*p+f,se=Math.cos(ie),ee=Math.sin(ie);O.x=b*ee,O.y=y*N,O.z=b*se,v.push(O.x,O.y,O.z),S.push(0,N,0),D.x=se*.5+.5,D.y=ee*.5*N+.5,M.push(D.x,D.y),T++}for(let $=0;$<o;$++){const Z=I+$,ie=B+$;P===!0?x.push(ie,ie+1,Z):x.push(ie+1,ie,Z),z+=3}m.addGroup(_,z,P===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new en(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Jf extends en{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new Jf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class eh extends vi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),x(),this.setAttribute("position",new hn(l,3)),this.setAttribute("normal",new hn(l.slice(),3)),this.setAttribute("uv",new hn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const L=new K,P=new K,I=new K;for(let D=0;D<t.length;D+=3)M(t[D+0],L),M(t[D+1],P),M(t[D+2],I),p(L,P,I,C)}function p(C,L,P,I){const D=I+1,O=[];for(let z=0;z<=D;z++){O[z]=[];const b=C.clone().lerp(P,z/D),N=L.clone().lerp(P,z/D),B=D-z;for(let $=0;$<=B;$++)$===0&&z===D?O[z][$]=b:O[z][$]=b.clone().lerp(N,$/B)}for(let z=0;z<D;z++)for(let b=0;b<2*(D-z)-1;b++){const N=Math.floor(b/2);b%2===0?(S(O[z][N+1]),S(O[z+1][N]),S(O[z][N])):(S(O[z][N+1]),S(O[z+1][N+1]),S(O[z+1][N]))}}function m(C){const L=new K;for(let P=0;P<l.length;P+=3)L.x=l[P+0],L.y=l[P+1],L.z=l[P+2],L.normalize().multiplyScalar(C),l[P+0]=L.x,l[P+1]=L.y,l[P+2]=L.z}function x(){const C=new K;for(let L=0;L<l.length;L+=3){C.x=l[L+0],C.y=l[L+1],C.z=l[L+2];const P=y(C)/2/Math.PI+.5,I=_(C)/Math.PI+.5;d.push(P,1-I)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const L=d[C+0],P=d[C+2],I=d[C+4],D=Math.max(L,P,I),O=Math.min(L,P,I);D>.9&&O<.1&&(L<.2&&(d[C+0]+=1),P<.2&&(d[C+2]+=1),I<.2&&(d[C+4]+=1))}}function S(C){l.push(C.x,C.y,C.z)}function M(C,L){const P=C*3;L.x=e[P+0],L.y=e[P+1],L.z=e[P+2]}function T(){const C=new K,L=new K,P=new K,I=new K,D=new gt,O=new gt,z=new gt;for(let b=0,N=0;b<l.length;b+=9,N+=6){C.set(l[b+0],l[b+1],l[b+2]),L.set(l[b+3],l[b+4],l[b+5]),P.set(l[b+6],l[b+7],l[b+8]),D.set(d[N+0],d[N+1]),O.set(d[N+2],d[N+3]),z.set(d[N+4],d[N+5]),I.copy(C).add(L).add(P).divideScalar(3);const B=y(I);A(D,N+0,C,B),A(O,N+2,L,B),A(z,N+4,P,B)}}function A(C,L,P,I){I<0&&C.x===1&&(d[L]=C.x-1),P.x===0&&P.z===0&&(d[L]=I/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.vertices,e.indices,e.radius,e.detail)}}class th extends eh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new th(e.radius,e.detail)}}class Wn extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,x=p+1,v=e/f,S=t/p,M=[],T=[],A=[],y=[];for(let _=0;_<x;_++){const C=_*S-d;for(let L=0;L<m;L++){const P=L*v-l;T.push(P,-C,0),A.push(0,0,1),y.push(L/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<f;C++){const L=C+m*_,P=C+m*(_+1),I=C+1+m*(_+1),D=C+1+m*_;M.push(L,P,D),M.push(P,I,D)}this.setIndex(M),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Er extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const x=[],v=new K,S=new K,M=[],T=[],A=[],y=[];for(let _=0;_<=r;_++){const C=[],L=_/r;let P=0;_===0&&d===0?P=.5/t:_===r&&p===Math.PI&&(P=-.5/t);for(let I=0;I<=t;I++){const D=I/t;v.x=-e*Math.cos(o+D*l)*Math.sin(d+L*f),v.y=e*Math.cos(d+L*f),v.z=e*Math.sin(o+D*l)*Math.sin(d+L*f),T.push(v.x,v.y,v.z),S.copy(v).normalize(),A.push(S.x,S.y,S.z),y.push(D+P,1-L),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const L=x[_][C+1],P=x[_][C],I=x[_+1][C],D=x[_+1][C+1];(_!==0||d>0)&&M.push(L,P,D),(_!==r-1||p<Math.PI)&&M.push(P,I,D)}this.setIndex(M),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Er(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J_ extends or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class wt extends jo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=og,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e1 extends jo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends jo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Td={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class n1{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&o.onStart!==void 0&&o.onStart(x,d,f),l=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,S=m.length;v<S;v+=2){const M=m[v],T=m[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const i1=new n1;class nh{constructor(e){this.manager=e!==void 0?e:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}nh.DEFAULT_MATERIAL_NAME="__DEFAULT";const La=new WeakMap;class r1 extends nh{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Td.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let v=La.get(d);v===void 0&&(v=[],La.set(d,v)),v.push({onLoad:t,onError:o})}return d}const f=Uo("img");function p(){x(),t&&t(this);const v=La.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onLoad&&M.onLoad(this)}La.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),Td.remove(`image:${e}`);const S=La.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(v)}La.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Td.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class _g extends nh{constructor(e){super(e)}load(e,t,r,o){const l=new Un,d=new r1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class bc extends Nn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Cd=new an,i0=new K,r0=new K;class ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new an,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),t.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r0),t.updateMatrixWorld(),Cd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s1 extends ih{constructor(){super(new Zn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class s0 extends bc{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new s1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class a1 extends ih{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class a0 extends bc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class rh extends pg{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o1 extends ih{constructor(){super(new rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pf extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class yg extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class l1 extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const o0=new an;class Sg{constructor(e,t,r=0,o=1/0){this.ray=new Yf(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return o0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o0),this}intersectObject(e,t=!0,r=[]){return Df(e,this,r,t),r.sort(l0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Df(e[o],this,r,t);return r.sort(l0),r}}function l0(s,e){return s.distance-e.distance}function Df(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)Df(l[d],e,t,!0)}}class c0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class u1 extends Gs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function u0(s,e,t,r){const o=d1(r);switch(t){case rg:return s*e;case ag:return s*e/o.components*o.byteLength;case jf:return s*e/o.components*o.byteLength;case ja:return s*e*2/o.components*o.byteLength;case Vf:return s*e*2/o.components*o.byteLength;case sg:return s*e*3/o.components*o.byteLength;case Hi:return s*e*4/o.components*o.byteLength;case Gf:return s*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:case ef:return Math.max(s,16)*Math.max(e,8)/4;case Zd:case Jd:return Math.max(s,8)*Math.max(e,8)/2;case tf:case nf:case sf:case af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case rf:case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ff:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case xf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Mf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case wf:case bf:case Ef:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Tf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Af:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(s){switch(s){case xi:case eg:return{byteLength:1,components:1};case Lo:case tg:case Pr:return{byteLength:2,components:1};case Bf:case zf:return{byteLength:2,components:4};case sr:case kf:case er:return{byteLength:4,components:1};case ng:case ig:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Mg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function f1(s){const e=new WeakMap;function t(f,p){const m=f.array,x=f.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,x);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
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
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_1=`#ifdef USE_AOMAP
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
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
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
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,w1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,b1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,E1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,T1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
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
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,O1=`#define PI 3.141592653589793
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
} // validated`,F1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,k1=`vec3 transformedNormal = objectNormal;
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
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",H1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W1=`#ifdef USE_ENVMAP
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,Y1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
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
}`,ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ry=`uniform bool receiveShadow;
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
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,ay=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ly=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uy=`PhysicalMaterial material;
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
#endif`,dy=`uniform sampler2D dfgLUT;
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
}`,fy=`
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
#endif`,hy=`#if defined( RE_IndirectDiffuse )
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
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,My=`#if defined( USE_POINTS_UV )
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
#endif`,wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,by=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ey=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
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
#endif`,Ry=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ny=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Py=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uy=`#ifdef USE_NORMALMAP
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
#endif`,Oy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ky=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zy=`float getShadowMask() {
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
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jy=`#ifdef USE_SKINNING
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
#endif`,eS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tS=`#ifdef USE_SKINNING
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
#endif`,nS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aS=`#ifdef USE_TRANSMISSION
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
#endif`,oS=`#ifdef USE_TRANSMISSION
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
#endif`,lS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hS=`uniform sampler2D t2D;
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
}`,pS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vS=`#include <common>
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
}`,_S=`#if DEPTH_PACKING == 3200
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
}`,yS=`#define DISTANCE
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
}`,SS=`#define DISTANCE
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
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bS=`uniform float scale;
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
}`,ES=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,CS=`uniform vec3 diffuse;
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
}`,AS=`#define LAMBERT
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
}`,RS=`#define LAMBERT
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
}`,NS=`#define MATCAP
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
}`,PS=`#define MATCAP
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
}`,DS=`#define NORMAL
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
}`,LS=`#define NORMAL
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
}`,IS=`#define PHONG
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
}`,US=`#define PHONG
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
}`,OS=`#define STANDARD
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
}`,FS=`#define STANDARD
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
}`,kS=`#define TOON
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
}`,BS=`#define TOON
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
}`,zS=`uniform float size;
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
}`,jS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 color;
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
}`,HS=`uniform float rotation;
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
}`,WS=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:x1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:w1,beginnormal_vertex:b1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:C1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:P1,color_fragment:D1,color_pars_fragment:L1,color_pars_vertex:I1,color_vertex:U1,common:O1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:k1,displacementmap_pars_vertex:B1,displacementmap_vertex:z1,emissivemap_fragment:j1,emissivemap_pars_fragment:V1,colorspace_fragment:G1,colorspace_pars_fragment:H1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:sy,envmap_vertex:$1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:uy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:hy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:vy,map_fragment:_y,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:wy,metalnessmap_pars_fragment:by,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Ny,normal_fragment_maps:Py,normal_pars_fragment:Dy,normal_pars_vertex:Ly,normal_vertex:Iy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:By,opaque_fragment:zy,packing:jy,premultiplied_alpha_fragment:Vy,project_vertex:Gy,dithering_fragment:Hy,dithering_pars_fragment:Wy,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Zy,skinbase_vertex:Qy,skinning_pars_vertex:Jy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:xS,depth_vert:vS,depth_frag:_S,distance_vert:yS,distance_frag:SS,equirect_vert:MS,equirect_frag:wS,linedashed_vert:bS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:CS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:NS,meshmatcap_frag:PS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:IS,meshphong_frag:US,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:kS,meshtoon_frag:BS,points_vert:zS,points_frag:jS,shadow_vert:VS,shadow_frag:GS,sprite_vert:HS,sprite_frag:WS},ke={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Ji={basic:{uniforms:Kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Kn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Kn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Kn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Kn([ke.points,ke.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Kn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Kn([ke.common,ke.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Kn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Kn([ke.sprite,ke.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Kn([ke.common,ke.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Kn([ke.lights,ke.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ji.physical={uniforms:Kn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const rc={r:0,b:0,g:0},Us=new ar,XS=new an;function qS(s,e,t,r,o,l,d){const f=new Ct(0);let p=l===!0?0:1,m,x,v=null,S=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function A(L){let P=!1;const I=T(L);I===null?_(f,p):I&&I.isColor&&(_(I,1),P=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const I=T(P);I&&(I.isCubeTexture||I.mapping===wc)?(x===void 0&&(x=new Oe(new Gt(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Ga(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Us.copy(P.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(XS.makeRotationFromEuler(Us)),x.material.toneMapped=zt.getTransfer(I.colorSpace)!==Xt,(v!==I||S!==I.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=I,S=I.version,M=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Oe(new Wn(2,2),new or({name:"BackgroundMaterial",uniforms:Ga(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=zt.getTransfer(I.colorSpace)!==Xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||S!==I.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,S=I.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,P){L.getRGB(rc,hg(s)),r.buffers.color.setClear(rc.r,rc.g,rc.b,P,d)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(f,p)},render:A,addToRenderList:y,dispose:C}}function YS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(N,B,$,Z,ie){let se=!1;const ee=v(Z,$,B);l!==ee&&(l=ee,m(l.object)),se=M(N,Z,$,ie),se&&T(N,Z,$,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(se||d)&&(d=!1,P(N,B,$,Z),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return s.createVertexArray()}function m(N){return s.bindVertexArray(N)}function x(N){return s.deleteVertexArray(N)}function v(N,B,$){const Z=$.wireframe===!0;let ie=r[N.id];ie===void 0&&(ie={},r[N.id]=ie);let se=ie[B.id];se===void 0&&(se={},ie[B.id]=se);let ee=se[Z];return ee===void 0&&(ee=S(p()),se[Z]=ee),ee}function S(N){const B=[],$=[],Z=[];for(let ie=0;ie<t;ie++)B[ie]=0,$[ie]=0,Z[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:Z,object:N,attributes:{},index:null}}function M(N,B,$,Z){const ie=l.attributes,se=B.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){const ae=ie[X];let F=se[X];if(F===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),ae===void 0||ae.attribute!==F||F&&ae.data!==F.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Z}function T(N,B,$,Z){const ie={},se=B.attributes;let ee=0;const q=$.getAttributes();for(const X in q)if(q[X].location>=0){let ae=se[X];ae===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor));const F={};F.attribute=ae,ae&&ae.data&&(F.data=ae.data),ie[X]=F,ee++}l.attributes=ie,l.attributesNum=ee,l.index=Z}function A(){const N=l.newAttributes;for(let B=0,$=N.length;B<$;B++)N[B]=0}function y(N){_(N,0)}function _(N,B){const $=l.newAttributes,Z=l.enabledAttributes,ie=l.attributeDivisors;$[N]=1,Z[N]===0&&(s.enableVertexAttribArray(N),Z[N]=1),ie[N]!==B&&(s.vertexAttribDivisor(N,B),ie[N]=B)}function C(){const N=l.newAttributes,B=l.enabledAttributes;for(let $=0,Z=B.length;$<Z;$++)B[$]!==N[$]&&(s.disableVertexAttribArray($),B[$]=0)}function L(N,B,$,Z,ie,se,ee){ee===!0?s.vertexAttribIPointer(N,B,$,ie,se):s.vertexAttribPointer(N,B,$,Z,ie,se)}function P(N,B,$,Z){A();const ie=Z.attributes,se=$.getAttributes(),ee=B.defaultAttributeValues;for(const q in se){const X=se[q];if(X.location>=0){let he=ie[q];if(he===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const ae=he.normalized,F=he.itemSize,oe=e.get(he);if(oe===void 0)continue;const Ne=oe.buffer,qe=oe.type,Ye=oe.bytesPerElement,te=qe===s.INT||qe===s.UNSIGNED_INT||he.gpuType===kf;if(he.isInterleavedBufferAttribute){const de=he.data,Me=de.stride,Fe=he.offset;if(de.isInstancedInterleavedBuffer){for(let Pe=0;Pe<X.locationSize;Pe++)_(X.location+Pe,de.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Pe=0;Pe<X.locationSize;Pe++)y(X.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Pe=0;Pe<X.locationSize;Pe++)L(X.location+Pe,F/X.locationSize,qe,ae,Me*Ye,(Fe+F/X.locationSize*Pe)*Ye,te)}else{if(he.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)_(X.location+de,he.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let de=0;de<X.locationSize;de++)y(X.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let de=0;de<X.locationSize;de++)L(X.location+de,F/X.locationSize,qe,ae,F*Ye,F/X.locationSize*de*Ye,te)}}else if(ee!==void 0){const ae=ee[q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(X.location,ae);break;case 3:s.vertexAttrib3fv(X.location,ae);break;case 4:s.vertexAttrib4fv(X.location,ae);break;default:s.vertexAttrib1fv(X.location,ae)}}}}C()}function I(){z();for(const N in r){const B=r[N];for(const $ in B){const Z=B[$];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete B[$]}delete r[N]}}function D(N){if(r[N.id]===void 0)return;const B=r[N.id];for(const $ in B){const Z=B[$];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete B[$]}delete r[N.id]}function O(N){for(const B in r){const $=r[B];if($[N.id]===void 0)continue;const Z=$[N.id];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete $[N.id]}}function z(){b(),d=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function $S(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function d(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function f(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=x[T];t.update(M,r,1)}function p(m,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*S[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function KS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==Hi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const z=O===Pr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==xi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==er&&!z)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(yt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:P,maxSamples:I,samples:D}}function ZS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new rs,f=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||o;return o=S,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,S){t=x(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!y)l?x(null):m();else{const C=l?0:r,L=C*4;let P=_.clippingState||null;p.value=P,P=x(T,S,L,M);for(let I=0;I!==L;++I)P[I]=t[I];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,S,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const _=M+A*4,C=S.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,P=M;L!==A;++L,P+=4)d.copy(v[L]).applyMatrix4(C,f),d.normal.toArray(y,P),y[P+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function QS(s){let e=new WeakMap;function t(d,f){return f===qd?d.mapping=js:f===Yd&&(d.mapping=za),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===qd||f===Yd)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new gg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const as=4,d0=[.125,.215,.35,.446,.526,.582],ks=20,JS=256,Co=new rh,f0=new Ct;let Ad=null,Rd=0,Nd=0,Pd=!1;const eM=new K;class h0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=eM}=l;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Nd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Ia(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Pr,format:Hi,colorSpace:Va,depthBuffer:!1},o=p0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tM(l)),this._blurMaterial=iM(l,e,t),this._ggxMaterial=nM(l,e,t)}return o}_compileMaterial(e){const t=new Oe(new vi,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,r,o,l){const p=new Zn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(f0),v.toneMapping=nr,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Oe(new Gt,new Gi({name:"PMREM.Background",side:li,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(f0),_=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const I=this._cubeSize;Ia(o,P*I,L>2?I:0,I,I),v.setRenderTarget(o),_&&v.render(A,p),v.render(e,p)}v.toneMapping=M,v.autoClear=S,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===js||e.mapping===za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ia(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,Co)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),S=0+m*1.25,M=v*S,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-as?r-T+as:0),_=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,Ia(l,y,_,3*A,2*A),o.setRenderTarget(l),o.render(f,Co),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,Ia(e,y,_,3*A,2*A),o.setRenderTarget(e),o.render(f,Co)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&Bt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ks-1),A=l/T,y=isFinite(l)?1+Math.floor(x*A):ks;y>ks&&yt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ks}`);const _=[];let C=0;for(let O=0;O<ks;++O){const z=O/A,b=Math.exp(-z*z/2);_.push(b),O===0?C+=b:O<y&&(C+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/C;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-r;const P=this._sizeLods[o],I=3*P*(o>L-as?o-L+as:0),D=4*(this._cubeSize-P);Ia(t,I,D,3*P,2*P),p.setRenderTarget(t),p.render(v,Co)}}function tM(s){const e=[],t=[],r=[];let o=s;const l=s-as+1+d0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-as?p=d0[d-s+as-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),x=-m,v=1+m,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,A=3,y=2,_=1,C=new Float32Array(A*T*M),L=new Float32Array(y*T*M),P=new Float32Array(_*T*M);for(let D=0;D<M;D++){const O=D%3*2/3-1,z=D>2?0:-1,b=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];C.set(b,A*T*D),L.set(S,y*T*D);const N=[D,D,D,D,D,D];P.set(N,_*T*D)}const I=new vi;I.setAttribute("position",new rr(C,A)),I.setAttribute("uv",new rr(L,y)),I.setAttribute("faceIndex",new rr(P,_)),r.push(new Oe(I,null)),o>as&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function p0(s,e,t){const r=new ir(s,e,t);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ia(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function nM(s,e,t){return new or({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function iM(s,e,t){const r=new Float32Array(ks),o=new K(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function m0(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function g0(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function rM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===qd||p===Yd,x=p===js||p===za;if(m||x){let v=e.get(f);const S=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new h0(s)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new h0(s)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function sM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Oo("WebGLRenderer: "+r+" extension not supported."),o}}}function aM(s,e,t,r){const o={},l=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(v,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(v){const S=v.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(v){const S=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const C=M.array;A=M.version;for(let L=0,P=C.length;L<P;L+=3){const I=C[L+0],D=C[L+1],O=C[L+2];S.push(I,D,D,O,O,I)}}else if(T!==void 0){const C=T.array;A=T.version;for(let L=0,P=C.length/3-1;L<P;L+=3){const I=L+0,D=L+1,O=L+2;S.push(I,D,D,O,O,I)}}else return;const y=new(lg(S)?fg:dg)(S,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function x(v){const S=l.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:x}}function oM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];t.update(y,r,1)}function v(S,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)m(S[_]/d,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*A[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function lM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cM(s,e,t){const r=new WeakMap,o=new cn;function l(d,f,p){const m=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==v){let N=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",N)};var M=N;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),y===!0&&(P=3);let I=f.attributes.position.count*P,D=1;I>e.maxTextureSize&&(D=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*D*4*v),z=new cg(O,I,D,v);z.type=er,z.needsUpdate=!0;const b=P*4;for(let B=0;B<v;B++){const $=_[B],Z=C[B],ie=L[B],se=I*D*4*B;for(let ee=0;ee<$.count;ee++){const q=ee*b;T===!0&&(o.fromBufferAttribute($,ee),O[se+q+0]=o.x,O[se+q+1]=o.y,O[se+q+2]=o.z,O[se+q+3]=0),A===!0&&(o.fromBufferAttribute(Z,ee),O[se+q+4]=o.x,O[se+q+5]=o.y,O[se+q+6]=o.z,O[se+q+7]=0),y===!0&&(o.fromBufferAttribute(ie,ee),O[se+q+8]=o.x,O[se+q+9]=o.y,O[se+q+10]=o.z,O[se+q+11]=ie.itemSize===4?o.w:1)}}S={count:v,texture:z,size:new gt(I,D)},r.set(f,S),f.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function uM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return v}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const dM={[q0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[$0]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[Z0]:"AGX_TONE_MAPPING",[Q0]:"NEUTRAL_TONE_MAPPING",[K0]:"CUSTOM_TONE_MAPPING"};function fM(s,e,t,r,o){const l=new ir(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new ir(e,t,{type:Pr,depthBuffer:!1,stencilBuffer:!1}),f=new vi;f.setAttribute("position",new hn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new hn([0,2,0,0,2,0],2));const p=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Oe(f,p),x=new rh(-1,1,1,-1,0,1);let v=null,S=null,M=!1,T,A=null,y=[],_=!1;this.setSize=function(C,L){l.setSize(C,L),d.setSize(C,L);for(let P=0;P<y.length;P++){const I=y[P];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){y=C,_=y.length>0&&y[0].isRenderPass===!0;const L=l.width,P=l.height;for(let I=0;I<y.length;I++){const D=y[I];D.setSize&&D.setSize(L,P)}},this.begin=function(C,L){if(M||C.toneMapping===nr&&y.length===0)return!1;if(A=L,L!==null){const P=L.width,I=L.height;(l.width!==P||l.height!==I)&&this.setSize(P,I)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=nr,!0},this.hasRenderPass=function(){return _},this.end=function(C,L){C.toneMapping=T,M=!0;let P=l,I=d;for(let D=0;D<y.length;D++){const O=y[D];if(O.enabled!==!1&&(O.render(C,I,P,L),O.needsSwap!==!1)){const z=P;P=I,I=z}}if(v!==C.outputColorSpace||S!==C.toneMapping){v=C.outputColorSpace,S=C.toneMapping,p.defines={},zt.getTransfer(v)===Xt&&(p.defines.SRGB_TRANSFER="");const D=dM[S];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(A),C.render(m,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const wg=new Un,Lf=new Fo(1,1),bg=new cg,Eg=new N_,Tg=new mg,x0=[],v0=[],_0=new Float32Array(16),y0=new Float32Array(9),S0=new Float32Array(4);function Ha(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=x0[o];if(l===void 0&&(l=new Float32Array(o),x0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function Sn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function Mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Tc(s,e){let t=v0[e];t===void 0&&(t=new Int32Array(e),v0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2fv(this.addr,e),Mn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;s.uniform3fv(this.addr,e),Mn(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4fv(this.addr,e),Mn(t,e)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;S0.set(r),s.uniformMatrix2fv(this.addr,!1,S0),Mn(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;y0.set(r),s.uniformMatrix3fv(this.addr,!1,y0),Mn(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(Sn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,r))return;_0.set(r),s.uniformMatrix4fv(this.addr,!1,_0),Mn(t,r)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2iv(this.addr,e),Mn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3iv(this.addr,e),Mn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4iv(this.addr,e),Mn(t,e)}}function bM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;s.uniform2uiv(this.addr,e),Mn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;s.uniform3uiv(this.addr,e),Mn(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;s.uniform4uiv(this.addr,e),Mn(t,e)}}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Lf.compareFunction=t.isReversedDepthBuffer()?Wf:Hf,l=Lf):l=wg,t.setTexture2D(e||l,o)}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Eg,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Tg,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||bg,o)}function DM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return wM;case 5125:return bM;case 36294:return EM;case 36295:return TM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=Ha(e,this.size,2);s.uniform2fv(this.addr,t)}function UM(s,e){const t=Ha(e,this.size,3);s.uniform3fv(this.addr,t)}function OM(s,e){const t=Ha(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=Ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=Ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=Ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function jM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function GM(s,e){s.uniform4iv(this.addr,e)}function HM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function qM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=Lf:d=wg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function $M(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Eg,l[d])}function KM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Tg,l[d])}function ZM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);Sn(r,l)||(s.uniform1iv(this.addr,l),Mn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||bg,l[d])}function QM(s){switch(s){case 5126:return LM;case 35664:return IM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return jM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Dd=/(\w+)(\])?(\[|\.)?/g;function M0(s,e){s.seq.push(e),s.map[e.id]=e}function nw(s,e,t){const r=s.name,o=r.length;for(Dd.lastIndex=0;;){const l=Dd.exec(r),d=Dd.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){M0(t,m===void 0?new JM(f,s,e):new ew(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new tw(f),M0(t,v)),t=v}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);nw(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function w0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iw=37297;let rw=0;function sw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const b0=new Et;function aw(s){zt._getMatrix(b0,zt.workingColorSpace,s);const e=`mat3( ${b0.elements.map(t=>t.toFixed(4))} )`;switch(zt.getTransfer(s)){case vc:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function E0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+sw(s.getShaderSource(e),f)}else return l}function ow(s,e){const t=aw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lw={[q0]:"Linear",[Y0]:"Reinhard",[$0]:"Cineon",[Mc]:"ACESFilmic",[Z0]:"AgX",[Q0]:"Neutral",[K0]:"Custom"};function cw(s,e){const t=lw[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new K;function uw(){zt.getLuminanceCoefficients(sc);const s=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Po).join(`
`)}function fw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Po(s){return s!==""}function T0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(s){return s.replace(pw,gw)}const mw=new Map;function gw(s,e){let t=Tt[e];if(t===void 0){const r=mw.get(e);if(r!==void 0)t=Tt[r],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return If(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(s){return s.replace(xw,vw)}function vw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function R0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _w={[lc]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function yw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[js]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function Mw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ww={[za]:"ENVMAP_MODE_REFRACTION"};function bw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ew={[X0]:"ENVMAP_BLENDING_MULTIPLY",[u_]:"ENVMAP_BLENDING_MIX",[d_]:"ENVMAP_BLENDING_ADD"};function Tw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[s.combine]||"ENVMAP_BLENDING_NONE"}function Cw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Aw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=yw(t),m=Mw(t),x=bw(t),v=Tw(t),S=Cw(t),M=dw(t),T=fw(l),A=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Po).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Po).join(`
`),_.length>0&&(_+=`
`)):(y=[R0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Po).join(`
`),_=[R0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==nr?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Po).join(`
`)),d=If(d),d=T0(d,t),d=C0(d,t),f=If(f),f=T0(f,t),f=C0(f,t),d=A0(d),f=A0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===km?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===km?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=C+y+d,P=C+_+f,I=w0(o,o.VERTEX_SHADER,L),D=w0(o,o.FRAGMENT_SHADER,P);o.attachShader(A,I),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(B){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",Z=o.getShaderInfoLog(I)||"",ie=o.getShaderInfoLog(D)||"",se=$.trim(),ee=Z.trim(),q=ie.trim();let X=!0,he=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,I,D);else{const ae=E0(o,I,"vertex"),F=E0(o,D,"fragment");Bt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+ae+`
`+F)}else se!==""?yt("WebGLProgram: Program Info Log:",se):(ee===""||q==="")&&(he=!1);he&&(B.diagnostics={runnable:X,programLog:se,vertexShader:{log:ee,prefix:y},fragmentShader:{log:q,prefix:_}})}o.deleteShader(I),o.deleteShader(D),z=new pc(o,A),b=hw(o,A)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(A,iw)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=D,this}let Rw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Pw(e),t.set(e,r)),r}}class Pw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Dw(s,e,t,r,o,l,d){const f=new $f,p=new Nw,m=new Set,x=[],v=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,N,B,$,Z){const ie=$.fog,se=Z.geometry,ee=b.isMeshStandardMaterial?$.environment:null,q=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),X=q&&q.mapping===wc?q.image.height:null,he=T[b.type];b.precision!==null&&(M=o.getMaxPrecision(b.precision),M!==b.precision&&yt("WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const ae=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,F=ae!==void 0?ae.length:0;let oe=0;se.morphAttributes.position!==void 0&&(oe=1),se.morphAttributes.normal!==void 0&&(oe=2),se.morphAttributes.color!==void 0&&(oe=3);let Ne,qe,Ye,te;if(he){const bt=Ji[he];Ne=bt.vertexShader,qe=bt.fragmentShader}else Ne=b.vertexShader,qe=b.fragmentShader,p.update(b),Ye=p.getVertexShaderID(b),te=p.getFragmentShaderID(b);const de=s.getRenderTarget(),Me=s.state.buffers.depth.getReversed(),Fe=Z.isInstancedMesh===!0,Pe=Z.isBatchedMesh===!0,Mt=!!b.map,$t=!!b.matcap,St=!!q,At=!!b.aoMap,Ut=!!b.lightMap,lt=!!b.bumpMap,it=!!b.normalMap,j=!!b.displacementMap,Ze=!!b.emissiveMap,dt=!!b.metalnessMap,nt=!!b.roughnessMap,Te=b.anisotropy>0,U=b.clearcoat>0,w=b.dispersion>0,H=b.iridescence>0,pe=b.sheen>0,ge=b.transmission>0,ue=Te&&!!b.anisotropyMap,Be=U&&!!b.clearcoatMap,Ee=U&&!!b.clearcoatNormalMap,He=U&&!!b.clearcoatRoughnessMap,at=H&&!!b.iridescenceMap,_e=H&&!!b.iridescenceThicknessMap,Re=pe&&!!b.sheenColorMap,Ve=pe&&!!b.sheenRoughnessMap,ze=!!b.specularMap,we=!!b.specularColorMap,mt=!!b.specularIntensityMap,G=ge&&!!b.transmissionMap,De=ge&&!!b.thicknessMap,Se=!!b.gradientMap,Le=!!b.alphaMap,me=b.alphaTest>0,fe=!!b.alphaHash,xe=!!b.extensions;let Je=nr;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Je=s.toneMapping);const Dt={shaderID:he,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:qe,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Pe,batchingColor:Pe&&Z._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Z.instanceColor!==null,instancingMorph:Fe&&Z.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Va,alphaToCoverage:!!b.alphaToCoverage,map:Mt,matcap:$t,envMap:St,envMapMode:St&&q.mapping,envMapCubeUVHeight:X,aoMap:At,lightMap:Ut,bumpMap:lt,normalMap:it,displacementMap:j,emissiveMap:Ze,normalMapObjectSpace:it&&b.normalMapType===p_,normalMapTangentSpace:it&&b.normalMapType===og,metalnessMap:dt,roughnessMap:nt,anisotropy:Te,anisotropyMap:ue,clearcoat:U,clearcoatMap:Be,clearcoatNormalMap:Ee,clearcoatRoughnessMap:He,dispersion:w,iridescence:H,iridescenceMap:at,iridescenceThicknessMap:_e,sheen:pe,sheenColorMap:Re,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:we,specularIntensityMap:mt,transmission:ge,transmissionMap:G,thicknessMap:De,gradientMap:Se,opaque:b.transparent===!1&&b.blending===Fa&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:fe,combine:b.combine,mapUv:Mt&&A(b.map.channel),aoMapUv:At&&A(b.aoMap.channel),lightMapUv:Ut&&A(b.lightMap.channel),bumpMapUv:lt&&A(b.bumpMap.channel),normalMapUv:it&&A(b.normalMap.channel),displacementMapUv:j&&A(b.displacementMap.channel),emissiveMapUv:Ze&&A(b.emissiveMap.channel),metalnessMapUv:dt&&A(b.metalnessMap.channel),roughnessMapUv:nt&&A(b.roughnessMap.channel),anisotropyMapUv:ue&&A(b.anisotropyMap.channel),clearcoatMapUv:Be&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&A(b.sheenRoughnessMap.channel),specularMapUv:ze&&A(b.specularMap.channel),specularColorMapUv:we&&A(b.specularColorMap.channel),specularIntensityMapUv:mt&&A(b.specularIntensityMap.channel),transmissionMapUv:G&&A(b.transmissionMap.channel),thicknessMapUv:De&&A(b.thicknessMap.channel),alphaMapUv:Le&&A(b.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(it||Te),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!se.attributes.uv&&(Mt||Le),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Me,skinning:Z.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:oe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Je,decodeVideoTexture:Mt&&b.map.isVideoTexture===!0&&zt.getTransfer(b.map.colorSpace)===Xt,decodeVideoTextureEmissive:Ze&&b.emissiveMap.isVideoTexture===!0&&zt.getTransfer(b.emissiveMap.colorSpace)===Xt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Tr,flipSided:b.side===li,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xe&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&b.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=m.has(1),Dt.vertexUv2s=m.has(2),Dt.vertexUv3s=m.has(3),m.clear(),Dt}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)N.push(B),N.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(C(N,b),L(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function C(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function L(b,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),b.push(f.mask)}function P(b){const N=T[b.type];let B;if(N){const $=Ji[N];B=G_.clone($.uniforms)}else B=b.uniforms;return B}function I(b,N){let B=v.get(N);return B!==void 0?++B.usedTimes:(B=new Aw(s,N,b,l),x.push(B),v.set(N,B)),B}function D(b){if(--b.usedTimes===0){const N=x.indexOf(b);x[N]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function z(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:I,releaseProgram:D,releaseShaderCache:O,programs:x,dispose:z}}function Lw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Iw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function N0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function P0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(v,S,M,T,A,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function f(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):t.push(_)}function p(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,S){t.length>1&&t.sort(v||Iw),r.length>1&&r.sort(S||N0),o.length>1&&o.sort(S||N0)}function x(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:x,sort:m}}function Uw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new P0,s.set(r,[d])):o>=l.length?(d=new P0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new Ct};break;case"SpotLight":t={position:new K,direction:new K,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function Fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kw=0;function Bw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zw(s){const e=new Ow,t=Fw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const o=new K,l=new an,d=new an;function f(m){let x=0,v=0,S=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,T=0,A=0,y=0,_=0,C=0,L=0,P=0,I=0,D=0,O=0;m.sort(Bw);for(let b=0,N=m.length;b<N;b++){const B=m[b],$=B.color,Z=B.intensity,ie=B.distance;let se=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ja?se=B.shadow.map.texture:se=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=$.r*Z,v+=$.g*Z,S+=$.b*Z;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],Z);O++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,X=t.get(B);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=se,r.directionalShadowMatrix[M]=B.shadow.matrix,C++}r.directional[M]=ee,M++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy($).multiplyScalar(Z),ee.distance=ie,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[A]=ee;const q=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,q.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[A]=q.matrix,B.castShadow){const X=t.get(B);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=se,P++}A++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy($).multiplyScalar(Z),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ee,y++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const q=B.shadow,X=t.get(B);X.shadowIntensity=q.intensity,X.shadowBias=q.bias,X.shadowNormalBias=q.normalBias,X.shadowRadius=q.radius,X.shadowMapSize=q.mapSize,X.shadowCameraNear=q.camera.near,X.shadowCameraFar=q.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=se,r.pointShadowMatrix[T]=B.shadow.matrix,L++}r.point[T]=ee,T++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(Z),ee.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[_]=ee,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ke.LTC_FLOAT_1,r.rectAreaLTC2=ke.LTC_FLOAT_2):(r.rectAreaLTC1=ke.LTC_HALF_1,r.rectAreaLTC2=ke.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const z=r.hash;(z.directionalLength!==M||z.pointLength!==T||z.spotLength!==A||z.rectAreaLength!==y||z.hemiLength!==_||z.numDirectionalShadows!==C||z.numPointShadows!==L||z.numSpotShadows!==P||z.numSpotMaps!==I||z.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+I-D,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,z.directionalLength=M,z.pointLength=T,z.spotLength=A,z.rectAreaLength=y,z.hemiLength=_,z.numDirectionalShadows=C,z.numPointShadows=L,z.numSpotShadows=P,z.numSpotMaps=I,z.numLightProbes=O,r.version=kw++)}function p(m,x){let v=0,S=0,M=0,T=0,A=0;const y=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const L=m[_];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(L.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),d.identity(),l.copy(L.matrixWorld),l.premultiply(y),d.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function D0(s){const e=new zw(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function d(x){r.push(x)}function f(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function jw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new D0(s),e.set(o,[f])):l>=d.length?(f=new D0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Vw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gw=`uniform sampler2D shadow_pass;
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
}`,Hw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Ww=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],L0=new an,Ao=new K,Ld=new K;function Xw(s,e,t){let r=new Zf;const o=new gt,l=new gt,d=new cn,f=new e1,p=new t1,m={},x=t.maxTextureSize,v={[os]:li,[li]:os,[Tr]:Tr},S=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new vi;T.setAttribute("position",new rr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Oe(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let _=this.type;this.render=function(D,O,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;D.type===Ff&&(yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=lc);const b=s.getRenderTarget(),N=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Rr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=_!==this.type;Z&&O.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(se=>se.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,se=D.length;ie<se;ie++){const ee=D[ie],q=ee.shadow;if(q===void 0){yt("WebGLShadowMap:",ee,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const X=q.getFrameExtents();if(o.multiply(X),l.copy(q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,q.mapSize.y=l.y)),q.map===null||Z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===No){if(ee.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new ir(o.x,o.y,{format:ja,type:Pr,minFilter:Xn,magFilter:Xn,generateMipmaps:!1}),q.map.texture.name=ee.name+".shadowMap",q.map.depthTexture=new Fo(o.x,o.y,er),q.map.depthTexture.name=ee.name+".shadowMapDepth",q.map.depthTexture.format=Dr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In}else{ee.isPointLight?(q.map=new gg(o.x),q.map.depthTexture=new Q_(o.x,sr)):(q.map=new ir(o.x,o.y),q.map.depthTexture=new Fo(o.x,o.y,sr)),q.map.depthTexture.name=ee.name+".shadowMap",q.map.depthTexture.format=Dr;const ae=s.state.buffers.depth.getReversed();this.type===lc?(q.map.depthTexture.compareFunction=ae?Wf:Hf,q.map.depthTexture.minFilter=Xn,q.map.depthTexture.magFilter=Xn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=In,q.map.depthTexture.magFilter=In)}q.camera.updateProjectionMatrix()}const he=q.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<he;ae++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(q.map),s.clear());const F=q.getViewport(ae);d.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),$.viewport(d)}if(ee.isPointLight){const F=q.camera,oe=q.matrix,Ne=ee.distance||F.far;Ne!==F.far&&(F.far=Ne,F.updateProjectionMatrix()),Ao.setFromMatrixPosition(ee.matrixWorld),F.position.copy(Ao),Ld.copy(F.position),Ld.add(Hw[ae]),F.up.copy(Ww[ae]),F.lookAt(Ld),F.updateMatrixWorld(),oe.makeTranslation(-Ao.x,-Ao.y,-Ao.z),L0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q._frustum.setFromProjectionMatrix(L0,F.coordinateSystem,F.reversedDepth)}else q.updateMatrices(ee);r=q.getFrustum(),P(O,z,q.camera,ee,this.type)}q.isPointLightShadow!==!0&&this.type===No&&C(q,z),q.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,N,B)};function C(D,O){const z=e.update(A);S.defines.VSM_SAMPLES!==D.blurSamples&&(S.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new ir(o.x,o.y,{format:ja,type:Pr})),S.uniforms.shadow_pass.value=D.map.depthTexture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,z,S,A,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,z,M,A,null)}function L(D,O,z,b){let N=null;const B=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)N=B;else if(N=z.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=N.uuid,Z=O.uuid;let ie=m[$];ie===void 0&&(ie={},m[$]=ie);let se=ie[Z];se===void 0&&(se=N.clone(),ie[Z]=se,O.addEventListener("dispose",I)),N=se}if(N.visible=O.visible,N.wireframe=O.wireframe,b===No?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:v[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=s.properties.get(N);$.light=z}return N}function P(D,O,z,b,N){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===No)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),ie=D.material;if(Array.isArray(ie)){const se=Z.groups;for(let ee=0,q=se.length;ee<q;ee++){const X=se[ee],he=ie[X.materialIndex];if(he&&he.visible){const ae=L(D,he,b,N);D.onBeforeShadow(s,D,O,z,Z,ae,X),s.renderBufferDirect(z,null,Z,ae,D,X),D.onAfterShadow(s,D,O,z,Z,ae,X)}}}else if(ie.visible){const se=L(D,ie,b,N);D.onBeforeShadow(s,D,O,z,Z,se,null),s.renderBufferDirect(z,null,Z,se,D,null),D.onAfterShadow(s,D,O,z,Z,se,null)}}const $=D.children;for(let Z=0,ie=$.length;Z<ie;Z++)P($[Z],O,z,b,N)}function I(D){D.target.removeEventListener("dispose",I);for(const z in m){const b=m[z],N=D.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}const qw={[zd]:jd,[Vd]:Wd,[Gd]:Xd,[Ba]:Hd,[jd]:zd,[Wd]:Vd,[Xd]:Gd,[Hd]:Ba};function Yw(s,e){function t(){let G=!1;const De=new cn;let Se=null;const Le=new cn(0,0,0,0);return{setMask:function(me){Se!==me&&!G&&(s.colorMask(me,me,me,me),Se=me)},setLocked:function(me){G=me},setClear:function(me,fe,xe,Je,Dt){Dt===!0&&(me*=Je,fe*=Je,xe*=Je),De.set(me,fe,xe,Je),Le.equals(De)===!1&&(s.clearColor(me,fe,xe,Je),Le.copy(De))},reset:function(){G=!1,Se=null,Le.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,Se=null,Le=null,me=null;return{setReversed:function(fe){if(De!==fe){const xe=e.get("EXT_clip_control");fe?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),De=fe;const Je=me;me=null,this.setClear(Je)}},getReversed:function(){return De},setTest:function(fe){fe?de(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!G&&(s.depthMask(fe),Se=fe)},setFunc:function(fe){if(De&&(fe=qw[fe]),Le!==fe){switch(fe){case zd:s.depthFunc(s.NEVER);break;case jd:s.depthFunc(s.ALWAYS);break;case Vd:s.depthFunc(s.LESS);break;case Ba:s.depthFunc(s.LEQUAL);break;case Gd:s.depthFunc(s.EQUAL);break;case Hd:s.depthFunc(s.GEQUAL);break;case Wd:s.depthFunc(s.GREATER);break;case Xd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=fe}},setLocked:function(fe){G=fe},setClear:function(fe){me!==fe&&(De&&(fe=1-fe),s.clearDepth(fe),me=fe)},reset:function(){G=!1,Se=null,Le=null,me=null,De=!1}}}function o(){let G=!1,De=null,Se=null,Le=null,me=null,fe=null,xe=null,Je=null,Dt=null;return{setTest:function(bt){G||(bt?de(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(bt){De!==bt&&!G&&(s.stencilMask(bt),De=bt)},setFunc:function(bt,pn,wn){(Se!==bt||Le!==pn||me!==wn)&&(s.stencilFunc(bt,pn,wn),Se=bt,Le=pn,me=wn)},setOp:function(bt,pn,wn){(fe!==bt||xe!==pn||Je!==wn)&&(s.stencilOp(bt,pn,wn),fe=bt,xe=pn,Je=wn)},setLocked:function(bt){G=bt},setClear:function(bt){Dt!==bt&&(s.clearStencil(bt),Dt=bt)},reset:function(){G=!1,De=null,Se=null,Le=null,me=null,fe=null,xe=null,Je=null,Dt=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let x={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,L=null,P=null,I=null,D=null,O=new Ct(0,0,0),z=0,b=!1,N=null,B=null,$=null,Z=null,ie=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,q=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=q>=2);let he=null,ae={};const F=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),Ne=new cn().fromArray(F),qe=new cn().fromArray(oe);function Ye(G,De,Se,Le){const me=new Uint8Array(4),fe=s.createTexture();s.bindTexture(G,fe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xe=0;xe<Se;xe++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(De+xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return fe}const te={};te[s.TEXTURE_2D]=Ye(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(s.DEPTH_TEST),d.setFunc(Ba),lt(!1),it(Dm),de(s.CULL_FACE),At(Rr);function de(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function Me(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Fe(G,De){return v[G]!==De?(s.bindFramebuffer(G,De),v[G]=De,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(G,De){let Se=M,Le=!1;if(G){Se=S.get(De),Se===void 0&&(Se=[],S.set(De,Se));const me=G.textures;if(Se.length!==me.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,xe=me.length;fe<xe;fe++)Se[fe]=s.COLOR_ATTACHMENT0+fe;Se.length=me.length,Le=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,Le=!0);Le&&s.drawBuffers(Se)}function Mt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const $t={[Fs]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[Yv]:s.FUNC_REVERSE_SUBTRACT};$t[$v]=s.MIN,$t[Kv]=s.MAX;const St={[Zv]:s.ZERO,[Qv]:s.ONE,[Jv]:s.SRC_COLOR,[kd]:s.SRC_ALPHA,[s_]:s.SRC_ALPHA_SATURATE,[i_]:s.DST_COLOR,[t_]:s.DST_ALPHA,[e_]:s.ONE_MINUS_SRC_COLOR,[Bd]:s.ONE_MINUS_SRC_ALPHA,[r_]:s.ONE_MINUS_DST_COLOR,[n_]:s.ONE_MINUS_DST_ALPHA,[a_]:s.CONSTANT_COLOR,[o_]:s.ONE_MINUS_CONSTANT_COLOR,[l_]:s.CONSTANT_ALPHA,[c_]:s.ONE_MINUS_CONSTANT_ALPHA};function At(G,De,Se,Le,me,fe,xe,Je,Dt,bt){if(G===Rr){A===!0&&(Me(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),G!==Xv){if(G!==y||bt!==b){if((_!==Fs||P!==Fs)&&(s.blendEquation(s.FUNC_ADD),_=Fs,P=Fs),bt)switch(G){case Fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFunc(s.ONE,s.ONE);break;case Im:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Um:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",G);break}else switch(G){case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Lm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Im:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Um:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",G);break}C=null,L=null,I=null,D=null,O.set(0,0,0),z=0,y=G,b=bt}return}me=me||De,fe=fe||Se,xe=xe||Le,(De!==_||me!==P)&&(s.blendEquationSeparate($t[De],$t[me]),_=De,P=me),(Se!==C||Le!==L||fe!==I||xe!==D)&&(s.blendFuncSeparate(St[Se],St[Le],St[fe],St[xe]),C=Se,L=Le,I=fe,D=xe),(Je.equals(O)===!1||Dt!==z)&&(s.blendColor(Je.r,Je.g,Je.b,Dt),O.copy(Je),z=Dt),y=G,b=!1}function Ut(G,De){G.side===Tr?Me(s.CULL_FACE):de(s.CULL_FACE);let Se=G.side===li;De&&(Se=!Se),lt(Se),G.blending===Fa&&G.transparent===!1?At(Rr):At(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const Le=G.stencilWrite;f.setTest(Le),Le&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ze(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(G){N!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),N=G)}function it(G){G!==Hv?(de(s.CULL_FACE),G!==B&&(G===Dm?s.cullFace(s.BACK):G===Wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),B=G}function j(G){G!==$&&(ee&&s.lineWidth(G),$=G)}function Ze(G,De,Se){G?(de(s.POLYGON_OFFSET_FILL),(Z!==De||ie!==Se)&&(s.polygonOffset(De,Se),Z=De,ie=Se)):Me(s.POLYGON_OFFSET_FILL)}function dt(G){G?de(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function nt(G){G===void 0&&(G=s.TEXTURE0+se-1),he!==G&&(s.activeTexture(G),he=G)}function Te(G,De,Se){Se===void 0&&(he===null?Se=s.TEXTURE0+se-1:Se=he);let Le=ae[Se];Le===void 0&&(Le={type:void 0,texture:void 0},ae[Se]=Le),(Le.type!==G||Le.texture!==De)&&(he!==Se&&(s.activeTexture(Se),he=Se),s.bindTexture(G,De||te[G]),Le.type=G,Le.texture=De)}function U(){const G=ae[he];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function pe(){try{s.texSubImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Ee(){try{s.texStorage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function He(){try{s.texStorage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function at(){try{s.texImage2D(...arguments)}catch(G){Bt("WebGLState:",G)}}function _e(){try{s.texImage3D(...arguments)}catch(G){Bt("WebGLState:",G)}}function Re(G){Ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function Ve(G){qe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),qe.copy(G))}function ze(G,De){let Se=m.get(De);Se===void 0&&(Se=new WeakMap,m.set(De,Se));let Le=Se.get(G);Le===void 0&&(Le=s.getUniformBlockIndex(De,G.name),Se.set(G,Le))}function we(G,De){const Le=m.get(De).get(G);p.get(De)!==Le&&(s.uniformBlockBinding(De,Le,G.__bindingPointIndex),p.set(De,Le))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},he=null,ae={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,L=null,P=null,I=null,D=null,O=new Ct(0,0,0),z=0,b=!1,N=null,B=null,$=null,Z=null,ie=null,Ne.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:de,disable:Me,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:Mt,setBlending:At,setMaterial:Ut,setFlipSided:lt,setCullFace:it,setLineWidth:j,setPolygonOffset:Ze,setScissorTest:dt,activeTexture:nt,bindTexture:Te,unbindTexture:U,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:at,texImage3D:_e,updateUBOMapping:ze,uniformBlockBinding:we,texStorage2D:Ee,texStorage3D:He,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:ue,compressedTexSubImage3D:Be,scissor:Re,viewport:Ve,reset:mt}}function $w(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,w){return M?new OffscreenCanvas(U,w):Uo("canvas")}function A(U,w,H){let pe=1;const ge=Te(U);if((ge.width>H||ge.height>H)&&(pe=H/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ue=Math.floor(pe*ge.width),Be=Math.floor(pe*ge.height);v===void 0&&(v=T(ue,Be));const Ee=w?T(ue,Be):v;return Ee.width=ue,Ee.height=Be,Ee.getContext("2d").drawImage(U,0,0,ue,Be),yt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ue+"x"+Be+")."),Ee}else return"data"in U&&yt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),U;return U}function y(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(U,w,H,pe,ge=!1){if(U!==null){if(s[U]!==void 0)return s[U];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ue=w;if(w===s.RED&&(H===s.FLOAT&&(ue=s.R32F),H===s.HALF_FLOAT&&(ue=s.R16F),H===s.UNSIGNED_BYTE&&(ue=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.R8UI),H===s.UNSIGNED_SHORT&&(ue=s.R16UI),H===s.UNSIGNED_INT&&(ue=s.R32UI),H===s.BYTE&&(ue=s.R8I),H===s.SHORT&&(ue=s.R16I),H===s.INT&&(ue=s.R32I)),w===s.RG&&(H===s.FLOAT&&(ue=s.RG32F),H===s.HALF_FLOAT&&(ue=s.RG16F),H===s.UNSIGNED_BYTE&&(ue=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RG8UI),H===s.UNSIGNED_SHORT&&(ue=s.RG16UI),H===s.UNSIGNED_INT&&(ue=s.RG32UI),H===s.BYTE&&(ue=s.RG8I),H===s.SHORT&&(ue=s.RG16I),H===s.INT&&(ue=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),H===s.UNSIGNED_INT&&(ue=s.RGB32UI),H===s.BYTE&&(ue=s.RGB8I),H===s.SHORT&&(ue=s.RGB16I),H===s.INT&&(ue=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),H===s.UNSIGNED_INT&&(ue=s.RGBA32UI),H===s.BYTE&&(ue=s.RGBA8I),H===s.SHORT&&(ue=s.RGBA16I),H===s.INT&&(ue=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),w===s.RGBA){const Be=ge?vc:zt.getTransfer(pe);H===s.FLOAT&&(ue=s.RGBA32F),H===s.HALF_FLOAT&&(ue=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ue=Be===Xt?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function P(U,w){let H;return U?w===null||w===sr||w===Io?H=s.DEPTH24_STENCIL8:w===er?H=s.DEPTH32F_STENCIL8:w===Lo&&(H=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===sr||w===Io?H=s.DEPTH_COMPONENT24:w===er?H=s.DEPTH_COMPONENT32F:w===Lo&&(H=s.DEPTH_COMPONENT16),H}function I(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==In&&U.minFilter!==Xn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function D(U){const w=U.target;w.removeEventListener("dispose",D),z(w),w.isVideoTexture&&x.delete(w)}function O(U){const w=U.target;w.removeEventListener("dispose",O),N(w)}function z(U){const w=r.get(U);if(w.__webglInit===void 0)return;const H=U.source,pe=S.get(H);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(U),Object.keys(pe).length===0&&S.delete(H)}r.remove(U)}function b(U){const w=r.get(U);s.deleteTexture(w.__webglTexture);const H=U.source,pe=S.get(H);delete pe[w.__cacheKey],d.memory.textures--}function N(U){const w=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=U.textures;for(let pe=0,ge=H.length;pe<ge;pe++){const ue=r.get(H[pe]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),d.memory.textures--),r.remove(H[pe])}r.remove(U)}let B=0;function $(){B=0}function Z(){const U=B;return U>=o.maxTextures&&yt("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),B+=1,U}function ie(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function se(U,w){const H=r.get(U);if(U.isVideoTexture&&dt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&H.__version!==U.version){const pe=U.image;if(pe===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,U,w);return}}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function ee(U,w){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){te(H,U,w);return}else U.isExternalTexture&&(H.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function q(U,w){const H=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&H.__version!==U.version){te(H,U,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(U,w){const H=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&H.__version!==U.version){de(H,U,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const he={[$d]:s.REPEAT,[Cr]:s.CLAMP_TO_EDGE,[Kd]:s.MIRRORED_REPEAT},ae={[In]:s.NEAREST,[f_]:s.NEAREST_MIPMAP_NEAREST,[zl]:s.NEAREST_MIPMAP_LINEAR,[Xn]:s.LINEAR,[nd]:s.LINEAR_MIPMAP_NEAREST,[Bs]:s.LINEAR_MIPMAP_LINEAR},F={[m_]:s.NEVER,[y_]:s.ALWAYS,[g_]:s.LESS,[Hf]:s.LEQUAL,[x_]:s.EQUAL,[Wf]:s.GEQUAL,[v_]:s.GREATER,[__]:s.NOTEQUAL};function oe(U,w){if(w.type===er&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Xn||w.magFilter===nd||w.magFilter===zl||w.magFilter===Bs||w.minFilter===Xn||w.minFilter===nd||w.minFilter===zl||w.minFilter===Bs)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,he[w.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,he[w.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,he[w.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ae[w.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ae[w.minFilter]),w.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===In||w.minFilter!==zl&&w.minFilter!==Bs||w.type===er&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(U,w){let H=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",D));const pe=w.source;let ge=S.get(pe);ge===void 0&&(ge={},S.set(pe,ge));const ue=ie(w);if(ue!==U.__cacheKey){ge[ue]===void 0&&(ge[ue]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,H=!0),ge[ue].usedTimes++;const Be=ge[U.__cacheKey];Be!==void 0&&(ge[U.__cacheKey].usedTimes--,Be.usedTimes===0&&b(w)),U.__cacheKey=ue,U.__webglTexture=ge[ue].texture}return H}function qe(U,w,H){return Math.floor(Math.floor(U/H)/w)}function Ye(U,w,H,pe){const ue=U.updateRanges;if(ue.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,pe,w.data);else{ue.sort((_e,Re)=>_e.start-Re.start);let Be=0;for(let _e=1;_e<ue.length;_e++){const Re=ue[Be],Ve=ue[_e],ze=Re.start+Re.count,we=qe(Ve.start,w.width,4),mt=qe(Re.start,w.width,4);Ve.start<=ze+1&&we===mt&&qe(Ve.start+Ve.count-1,w.width,4)===we?Re.count=Math.max(Re.count,Ve.start+Ve.count-Re.start):(++Be,ue[Be]=Ve)}ue.length=Be+1;const Ee=s.getParameter(s.UNPACK_ROW_LENGTH),He=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let _e=0,Re=ue.length;_e<Re;_e++){const Ve=ue[_e],ze=Math.floor(Ve.start/4),we=Math.ceil(Ve.count/4),mt=ze%w.width,G=Math.floor(ze/w.width),De=we,Se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,mt,G,De,Se,H,pe,w.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ee),s.pixelStorei(s.UNPACK_SKIP_PIXELS,He),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function te(U,w,H){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ne(U,w),ue=w.source;t.bindTexture(pe,U.__webglTexture,s.TEXTURE0+H);const Be=r.get(ue);if(ue.version!==Be.__version||ge===!0){t.activeTexture(s.TEXTURE0+H);const Ee=zt.getPrimaries(zt.workingColorSpace),He=w.colorSpace===ss?null:zt.getPrimaries(w.colorSpace),at=w.colorSpace===ss||Ee===He?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _e=A(w.image,!1,o.maxTextureSize);_e=nt(w,_e);const Re=l.convert(w.format,w.colorSpace),Ve=l.convert(w.type);let ze=L(w.internalFormat,Re,Ve,w.colorSpace,w.isVideoTexture);oe(pe,w);let we;const mt=w.mipmaps,G=w.isVideoTexture!==!0,De=Be.__version===void 0||ge===!0,Se=ue.dataReady,Le=I(w,_e);if(w.isDepthTexture)ze=P(w.format===zs,w.type),De&&(G?t.texStorage2D(s.TEXTURE_2D,1,ze,_e.width,_e.height):t.texImage2D(s.TEXTURE_2D,0,ze,_e.width,_e.height,0,Re,Ve,null));else if(w.isDataTexture)if(mt.length>0){G&&De&&t.texStorage2D(s.TEXTURE_2D,Le,ze,mt[0].width,mt[0].height);for(let me=0,fe=mt.length;me<fe;me++)we=mt[me],G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Re,Ve,we.data):t.texImage2D(s.TEXTURE_2D,me,ze,we.width,we.height,0,Re,Ve,we.data);w.generateMipmaps=!1}else G?(De&&t.texStorage2D(s.TEXTURE_2D,Le,ze,_e.width,_e.height),Se&&Ye(w,_e,Re,Ve)):t.texImage2D(s.TEXTURE_2D,0,ze,_e.width,_e.height,0,Re,Ve,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ze,mt[0].width,mt[0].height,_e.depth);for(let me=0,fe=mt.length;me<fe;me++)if(we=mt[me],w.format!==Hi)if(Re!==null)if(G){if(Se)if(w.layerUpdates.size>0){const xe=u0(we.width,we.height,w.format,w.type);for(const Je of w.layerUpdates){const Dt=we.data.subarray(Je*xe/we.data.BYTES_PER_ELEMENT,(Je+1)*xe/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Je,we.width,we.height,1,Re,Dt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Re,we.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,ze,we.width,we.height,_e.depth,0,we.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,we.width,we.height,_e.depth,Re,Ve,we.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,ze,we.width,we.height,_e.depth,0,Re,Ve,we.data)}else{G&&De&&t.texStorage2D(s.TEXTURE_2D,Le,ze,mt[0].width,mt[0].height);for(let me=0,fe=mt.length;me<fe;me++)we=mt[me],w.format!==Hi?Re!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(s.TEXTURE_2D,me,ze,we.width,we.height,0,we.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,we.width,we.height,Re,Ve,we.data):t.texImage2D(s.TEXTURE_2D,me,ze,we.width,we.height,0,Re,Ve,we.data)}else if(w.isDataArrayTexture)if(G){if(De&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,ze,_e.width,_e.height,_e.depth),Se)if(w.layerUpdates.size>0){const me=u0(_e.width,_e.height,w.format,w.type);for(const fe of w.layerUpdates){const xe=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,_e.width,_e.height,1,Re,Ve,xe)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ve,_e.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ze,_e.width,_e.height,_e.depth,0,Re,Ve,_e.data);else if(w.isData3DTexture)G?(De&&t.texStorage3D(s.TEXTURE_3D,Le,ze,_e.width,_e.height,_e.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Re,Ve,_e.data)):t.texImage3D(s.TEXTURE_3D,0,ze,_e.width,_e.height,_e.depth,0,Re,Ve,_e.data);else if(w.isFramebufferTexture){if(De)if(G)t.texStorage2D(s.TEXTURE_2D,Le,ze,_e.width,_e.height);else{let me=_e.width,fe=_e.height;for(let xe=0;xe<Le;xe++)t.texImage2D(s.TEXTURE_2D,xe,ze,me,fe,0,Re,Ve,null),me>>=1,fe>>=1}}else if(mt.length>0){if(G&&De){const me=Te(mt[0]);t.texStorage2D(s.TEXTURE_2D,Le,ze,me.width,me.height)}for(let me=0,fe=mt.length;me<fe;me++)we=mt[me],G?Se&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ve,we):t.texImage2D(s.TEXTURE_2D,me,ze,Re,Ve,we);w.generateMipmaps=!1}else if(G){if(De){const me=Te(_e);t.texStorage2D(s.TEXTURE_2D,Le,ze,me.width,me.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ve,_e)}else t.texImage2D(s.TEXTURE_2D,0,ze,Re,Ve,_e);y(w)&&_(pe),Be.__version=ue.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function de(U,w,H){if(w.image.length!==6)return;const pe=Ne(U,w),ge=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+H);const ue=r.get(ge);if(ge.version!==ue.__version||pe===!0){t.activeTexture(s.TEXTURE0+H);const Be=zt.getPrimaries(zt.workingColorSpace),Ee=w.colorSpace===ss?null:zt.getPrimaries(w.colorSpace),He=w.colorSpace===ss||Be===Ee?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,_e=w.image[0]&&w.image[0].isDataTexture,Re=[];for(let fe=0;fe<6;fe++)!at&&!_e?Re[fe]=A(w.image[fe],!0,o.maxCubemapSize):Re[fe]=_e?w.image[fe].image:w.image[fe],Re[fe]=nt(w,Re[fe]);const Ve=Re[0],ze=l.convert(w.format,w.colorSpace),we=l.convert(w.type),mt=L(w.internalFormat,ze,we,w.colorSpace),G=w.isVideoTexture!==!0,De=ue.__version===void 0||pe===!0,Se=ge.dataReady;let Le=I(w,Ve);oe(s.TEXTURE_CUBE_MAP,w);let me;if(at){G&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,Ve.width,Ve.height);for(let fe=0;fe<6;fe++){me=Re[fe].mipmaps;for(let xe=0;xe<me.length;xe++){const Je=me[xe];w.format!==Hi?ze!==null?G?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Je.width,Je.height,ze,Je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,mt,Je.width,Je.height,0,Je.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,0,0,Je.width,Je.height,ze,we,Je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe,mt,Je.width,Je.height,0,ze,we,Je.data)}}}else{if(me=w.mipmaps,G&&De){me.length>0&&Le++;const fe=Te(Re[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,mt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(_e){G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Re[fe].width,Re[fe].height,ze,we,Re[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,mt,Re[fe].width,Re[fe].height,0,ze,we,Re[fe].data);for(let xe=0;xe<me.length;xe++){const Dt=me[xe].image[fe].image;G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,Dt.width,Dt.height,ze,we,Dt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,mt,Dt.width,Dt.height,0,ze,we,Dt.data)}}else{G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze,we,Re[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,mt,ze,we,Re[fe]);for(let xe=0;xe<me.length;xe++){const Je=me[xe];G?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,0,0,ze,we,Je.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe+1,mt,ze,we,Je.image[fe])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),ue.__version=ge.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Me(U,w,H,pe,ge,ue){const Be=l.convert(H.format,H.colorSpace),Ee=l.convert(H.type),He=L(H.internalFormat,Be,Ee,H.colorSpace),at=r.get(w),_e=r.get(H);if(_e.__renderTarget=w,!at.__hasExternalTextures){const Re=Math.max(1,w.width>>ue),Ve=Math.max(1,w.height>>ue);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ue,He,Re,Ve,w.depth,0,Be,Ee,null):t.texImage2D(ge,ue,He,Re,Ve,0,Be,Ee,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),Ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,_e.__webglTexture,0,j(w)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,_e.__webglTexture,ue),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(U,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,U),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ue=P(w.stencilBuffer,ge),Be=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ze(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(w),ue,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(w),ue,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ue,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,U)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const ue=pe[ge],Be=l.convert(ue.format,ue.colorSpace),Ee=l.convert(ue.type),He=L(ue.internalFormat,Be,Ee,ue.colorSpace);Ze(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(w),He,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(w),He,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,He,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(U,w,H){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w.depthTexture);const at=l.convert(w.depthTexture.format),_e=l.convert(w.depthTexture.type);let Re;w.depthTexture.format===Dr?Re=s.DEPTH_COMPONENT24:w.depthTexture.format===zs&&(Re=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Re,w.width,w.height,0,at,_e,null)}}else se(w.depthTexture,0);const ue=ge.__webglTexture,Be=j(w),Ee=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,He=w.depthTexture.format===zs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Dr)Ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ee,ue,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ee,ue,0);else if(w.depthTexture.format===zs)Ze(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,He,Ee,ue,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,He,Ee,ue,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const w=r.get(U),H=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const pe=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let pe=0;pe<6;pe++)Pe(w.__webglFramebuffer[pe],U,pe);else{const pe=U.texture.mipmaps;pe&&pe.length>0?Pe(w.__webglFramebuffer[0],U,0):Pe(w.__webglFramebuffer,U,0)}else if(H){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),Fe(w.__webglDepthbuffer[pe],U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}else{const pe=U.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Fe(w.__webglDepthbuffer,U,!1);else{const ge=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ue)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(U,w,H){const pe=r.get(U);w!==void 0&&Me(pe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&Mt(U)}function St(U){const w=U.texture,H=r.get(U),pe=r.get(w);U.addEventListener("dispose",O);const ge=U.textures,ue=U.isWebGLCubeRenderTarget===!0,Be=ge.length>1;if(Be||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,d.memory.textures++),ue){H.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[Ee]=[];for(let He=0;He<w.mipmaps.length;He++)H.__webglFramebuffer[Ee][He]=s.createFramebuffer()}else H.__webglFramebuffer[Ee]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let Ee=0;Ee<w.mipmaps.length;Ee++)H.__webglFramebuffer[Ee]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Be)for(let Ee=0,He=ge.length;Ee<He;Ee++){const at=r.get(ge[Ee]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&Ze(U)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Ee=0;Ee<ge.length;Ee++){const He=ge[Ee];H.__webglColorRenderbuffer[Ee]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[Ee]);const at=l.convert(He.format,He.colorSpace),_e=l.convert(He.type),Re=L(He.internalFormat,at,_e,He.colorSpace,U.isXRRenderTarget===!0),Ve=j(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Re,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ee,s.RENDERBUFFER,H.__webglColorRenderbuffer[Ee])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),oe(s.TEXTURE_CUBE_MAP,w);for(let Ee=0;Ee<6;Ee++)if(w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Me(H.__webglFramebuffer[Ee][He],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,He);else Me(H.__webglFramebuffer[Ee],U,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);y(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Ee=0,He=ge.length;Ee<He;Ee++){const at=ge[Ee],_e=r.get(at);let Re=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Re=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Re,_e.__webglTexture),oe(Re,at),Me(H.__webglFramebuffer,U,at,s.COLOR_ATTACHMENT0+Ee,Re,0),y(at)&&_(Re)}t.unbindTexture()}else{let Ee=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ee=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,pe.__webglTexture),oe(Ee,w),w.mipmaps&&w.mipmaps.length>0)for(let He=0;He<w.mipmaps.length;He++)Me(H.__webglFramebuffer[He],U,w,s.COLOR_ATTACHMENT0,Ee,He);else Me(H.__webglFramebuffer,U,w,s.COLOR_ATTACHMENT0,Ee,0);y(w)&&_(Ee),t.unbindTexture()}U.depthBuffer&&Mt(U)}function At(U){const w=U.textures;for(let H=0,pe=w.length;H<pe;H++){const ge=w[H];if(y(ge)){const ue=C(U),Be=r.get(ge).__webglTexture;t.bindTexture(ue,Be),_(ue),t.unbindTexture()}}}const Ut=[],lt=[];function it(U){if(U.samples>0){if(Ze(U)===!1){const w=U.textures,H=U.width,pe=U.height;let ge=s.COLOR_BUFFER_BIT;const ue=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(U),Ee=w.length>1;if(Ee)for(let at=0;at<w.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const He=U.texture.mipmaps;He&&He.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let at=0;at<w.length;at++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ee){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,H,pe,0,0,H,pe,ge,s.NEAREST),p===!0&&(Ut.length=0,lt.length=0,Ut.push(s.COLOR_ATTACHMENT0+at),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ut.push(ue),lt.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,lt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ee)for(let at=0;at<w.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Be.__webglColorRenderbuffer[at]);const _e=r.get(w[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,_e,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const w=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function j(U){return Math.min(o.maxSamples,U.samples)}function Ze(U){const w=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function dt(U){const w=d.render.frame;x.get(U)!==w&&(x.set(U,w),U.update())}function nt(U,w){const H=U.colorSpace,pe=U.format,ge=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||H!==Va&&H!==ss&&(zt.getTransfer(H)===Xt?(pe!==Hi||ge!==xi)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",H)),w}function Te(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=se,this.setTexture2DArray=ee,this.setTexture3D=q,this.setTextureCube=X,this.rebindTextures=$t,this.setupRenderTarget=St,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kw(s,e){function t(r,o=ss){let l;const d=zt.getTransfer(o);if(r===xi)return s.UNSIGNED_BYTE;if(r===Bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===ig)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===eg)return s.BYTE;if(r===tg)return s.SHORT;if(r===Lo)return s.UNSIGNED_SHORT;if(r===kf)return s.INT;if(r===sr)return s.UNSIGNED_INT;if(r===er)return s.FLOAT;if(r===Pr)return s.HALF_FLOAT;if(r===rg)return s.ALPHA;if(r===sg)return s.RGB;if(r===Hi)return s.RGBA;if(r===Dr)return s.DEPTH_COMPONENT;if(r===zs)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===jf)return s.RED_INTEGER;if(r===ja)return s.RG;if(r===Vf)return s.RG_INTEGER;if(r===Gf)return s.RGBA_INTEGER;if(r===cc||r===uc||r===dc||r===fc)if(d===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Jd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===tf||r===nf)return d===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===rf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===sf)return l.COMPRESSED_R11_EAC;if(r===af)return l.COMPRESSED_SIGNED_R11_EAC;if(r===of)return l.COMPRESSED_RG11_EAC;if(r===lf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===cf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===uf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===df)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ff)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===pf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===gf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===xf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===vf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===_f)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===yf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Sf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Mf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wf||r===bf||r===Ef)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===wf)return d===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ef)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Tf||r===Cf||r===Af||r===Rf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Tf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Cf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Af)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Io?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Zw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new vg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new or({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new Wn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eb extends Gs{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,x=null,v=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new Jw,_={},C=t.getContextAttributes();let L=null,P=null;const I=[],D=[],O=new gt;let z=null;const b=new Zn;b.viewport=new cn;const N=new Zn;N.viewport=new cn;const B=[b,N],$=new l1;let Z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=I[te];return de===void 0&&(de=new bd,I[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=I[te];return de===void 0&&(de=new bd,I[te]=de),de.getGripSpace()},this.getHand=function(te){let de=I[te];return de===void 0&&(de=new bd,I[te]=de),de.getHandSpace()};function se(te){const de=D.indexOf(te.inputSource);if(de===-1)return;const Me=I[de];Me!==void 0&&(Me.update(te.inputSource,te.frame,m||d),Me.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){o.removeEventListener("select",se),o.removeEventListener("selectstart",se),o.removeEventListener("selectend",se),o.removeEventListener("squeeze",se),o.removeEventListener("squeezestart",se),o.removeEventListener("squeezeend",se),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",q);for(let te=0;te<I.length;te++){const de=D[te];de!==null&&(D[te]=null,I[te].disconnect(de))}Z=null,ie=null,y.reset();for(const te in _)delete _[te];e.setRenderTarget(L),M=null,S=null,v=null,o=null,P=null,Ye.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",se),o.addEventListener("selectstart",se),o.addEventListener("selectend",se),o.addEventListener("squeeze",se),o.addEventListener("squeezestart",se),o.addEventListener("squeezeend",se),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,Pe=null;C.depth&&(Pe=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=C.stencil?zs:Dr,Fe=C.stencil?Io:sr);const Mt={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:l};v=this.getBinding(),S=v.createProjectionLayer(Mt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new ir(S.textureWidth,S.textureHeight,{format:Hi,type:xi,depthTexture:new Fo(S.textureWidth,S.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ir(M.framebufferWidth,M.framebufferHeight,{format:Hi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ye.setContext(o),Ye.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(te){for(let de=0;de<te.removed.length;de++){const Me=te.removed[de],Fe=D.indexOf(Me);Fe>=0&&(D[Fe]=null,I[Fe].disconnect(Me))}for(let de=0;de<te.added.length;de++){const Me=te.added[de];let Fe=D.indexOf(Me);if(Fe===-1){for(let Mt=0;Mt<I.length;Mt++)if(Mt>=D.length){D.push(Me),Fe=Mt;break}else if(D[Mt]===null){D[Mt]=Me,Fe=Mt;break}if(Fe===-1)break}const Pe=I[Fe];Pe&&Pe.connect(Me)}}const X=new K,he=new K;function ae(te,de,Me){X.setFromMatrixPosition(de.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const Fe=X.distanceTo(he),Pe=de.projectionMatrix.elements,Mt=Me.projectionMatrix.elements,$t=Pe[14]/(Pe[10]-1),St=Pe[14]/(Pe[10]+1),At=(Pe[9]+1)/Pe[5],Ut=(Pe[9]-1)/Pe[5],lt=(Pe[8]-1)/Pe[0],it=(Mt[8]+1)/Mt[0],j=$t*lt,Ze=$t*it,dt=Fe/(-lt+it),nt=dt*-lt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(nt),te.translateZ(dt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Te=$t+dt,U=St+dt,w=j-nt,H=Ze+(Fe-nt),pe=At*St/U*Te,ge=Ut*St/U*Te;te.projectionMatrix.makePerspective(w,H,pe,ge,Te,U),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function F(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let de=te.near,Me=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(Me=y.depthFar)),$.near=N.near=b.near=de,$.far=N.far=b.far=Me,(Z!==$.near||ie!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),Z=$.near,ie=$.far),$.layers.mask=te.layers.mask|6,b.layers.mask=$.layers.mask&3,N.layers.mask=$.layers.mask&5;const Fe=te.parent,Pe=$.cameras;F($,Fe);for(let Mt=0;Mt<Pe.length;Mt++)F(Pe[Mt],Fe);Pe.length===2?ae($,b,N):$.projectionMatrix.copy(b.projectionMatrix),oe(te,$,Fe)};function oe(te,de,Me){Me===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Me.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=yc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(te){p=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(te){return _[te]};let Ne=null;function qe(te,de){if(x=de.getViewerPose(m||d),T=de,x!==null){const Me=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Fe=!1;Me.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let St=0;St<Me.length;St++){const At=Me[St];let Ut=null;if(M!==null)Ut=M.getViewport(At);else{const it=v.getViewSubImage(S,At);Ut=it.viewport,St===0&&(e.setRenderTargetTextures(P,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(P))}let lt=B[St];lt===void 0&&(lt=new Zn,lt.layers.enable(St),lt.viewport=new cn,B[St]=lt),lt.matrix.fromArray(At.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(At.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),St===0&&($.matrix.copy(lt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(lt)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const St=v.getDepthInformation(Me[0]);St&&St.isValid&&St.texture&&y.init(St,o.renderState)}if(Pe&&Pe.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let St=0;St<Me.length;St++){const At=Me[St].camera;if(At){let Ut=_[At];Ut||(Ut=new vg,_[At]=Ut);const lt=v.getCameraImage(At);Ut.sourceTexture=lt}}}}for(let Me=0;Me<I.length;Me++){const Fe=D[Me],Pe=I[Me];Fe!==null&&Pe!==void 0&&Pe.update(Fe,de,m||d)}Ne&&Ne(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ye=new Mg;Ye.setAnimationLoop(qe),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}}const Os=new ar,tb=new an;function nb(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,hg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),x(y,_)):_.isMeshStandardMaterial?(l(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,C,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===li&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===li&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),L=C.envMap,P=C.envMapRotation;L&&(y.envMap.value=L,Os.copy(P),Os.x*=-1,Os.y*=-1,Os.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Os.y*=-1,Os.z*=-1),y.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(Os)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,C,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===li&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ib(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function m(C,L){let P=o[C.id];P===void 0&&(T(C),P=x(C),o[C.id]=P,C.addEventListener("dispose",y));const I=L.program;r.updateUBOMapping(C,I);const D=e.render.frame;l[C.id]!==D&&(S(C),l[C.id]=D)}function x(C){const L=v();C.__bindingPointIndex=L;const P=s.createBuffer(),I=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,I,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function v(){for(let C=0;C<f;C++)if(d.indexOf(C)===-1)return d.push(C),C;return Bt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(C){const L=o[C.id],P=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,O=P.length;D<O;D++){const z=Array.isArray(P[D])?P[D]:[P[D]];for(let b=0,N=z.length;b<N;b++){const B=z[b];if(M(B,D,b,I)===!0){const $=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let ie=0;for(let se=0;se<Z.length;se++){const ee=Z[se],q=A(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+ie,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,ie),ie+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,L,P,I){const D=C.value,O=L+"_"+P;if(I[O]===void 0)return typeof D=="number"||typeof D=="boolean"?I[O]=D:I[O]=D.clone(),!0;{const z=I[O];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return I[O]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function T(C){const L=C.uniforms;let P=0;const I=16;for(let O=0,z=L.length;O<z;O++){const b=Array.isArray(L[O])?L[O]:[L[O]];for(let N=0,B=b.length;N<B;N++){const $=b[N],Z=Array.isArray($.value)?$.value:[$.value];for(let ie=0,se=Z.length;ie<se;ie++){const ee=Z[ie],q=A(ee),X=P%I,he=X%q.boundary,ae=X+he;P+=he,ae!==0&&I-ae<q.storage&&(P+=I-ae),$.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=q.storage}}}const D=P%I;return D>0&&(P+=I-D),C.__size=P,C.__cache={},this}function A(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):yt("WebGLRenderer: Unsupported uniform value type.",C),L}function y(C){const L=C.target;L.removeEventListener("dispose",y);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:p,update:m,dispose:_}}const rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function sb(){return Qi===null&&(Qi=new Y_(rb,16,16,ja,Pr),Qi.name="DFG_LUT",Qi.minFilter=Xn,Qi.magFilter=Xn,Qi.wrapS=Cr,Qi.wrapT=Cr,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class Cg{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:M=xi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const A=M,y=new Set([Gf,Vf,jf]),_=new Set([xi,sr,Lo,Io,Bf,zf]),C=new Uint32Array(4),L=new Int32Array(4);let P=null,I=null;const D=[],O=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=Ln;let B=0,$=0,Z=null,ie=-1,se=null;const ee=new cn,q=new cn;let X=null;const he=new Ct(0);let ae=0,F=t.width,oe=t.height,Ne=1,qe=null,Ye=null;const te=new cn(0,0,F,oe),de=new cn(0,0,F,oe);let Me=!1;const Fe=new Zf;let Pe=!1,Mt=!1;const $t=new an,St=new K,At=new cn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function it(){return Z===null?Ne:1}let j=r;function Ze(R,Y){return t.getContext(R,Y)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Of}`),t.addEventListener("webglcontextlost",Je,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),j===null){const Y="webgl2";if(j=Ze(Y,R),j===null)throw Ze(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Bt("WebGLRenderer: "+R.message),R}let dt,nt,Te,U,w,H,pe,ge,ue,Be,Ee,He,at,_e,Re,Ve,ze,we,mt,G,De,Se,Le,me;function fe(){dt=new sM(j),dt.init(),Se=new Kw(j,dt),nt=new KS(j,dt,e,Se),Te=new Yw(j,dt),nt.reversedDepthBuffer&&S&&Te.buffers.depth.setReversed(!0),U=new lM(j),w=new Lw,H=new $w(j,dt,Te,w,nt,Se,U),pe=new QS(b),ge=new rM(b),ue=new f1(j),Le=new YS(j,ue),Be=new aM(j,ue,U,Le),Ee=new uM(j,Be,ue,U),mt=new cM(j,nt,H),Ve=new ZS(w),He=new Dw(b,pe,ge,dt,nt,Le,Ve),at=new nb(b,w),_e=new Uw,Re=new jw(dt),we=new qS(b,pe,ge,Te,Ee,T,p),ze=new Xw(b,Ee,nt),me=new ib(j,U,nt,Te),G=new $S(j,dt,U),De=new oM(j,dt,U),U.programs=He.programs,b.capabilities=nt,b.extensions=dt,b.properties=w,b.renderLists=_e,b.shadowMap=ze,b.state=Te,b.info=U}fe(),A!==xi&&(z=new fM(A,t.width,t.height,o,l));const xe=new eb(b,j);this.xr=xe,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(R){R!==void 0&&(Ne=R,this.setSize(F,oe,!1))},this.getSize=function(R){return R.set(F,oe)},this.setSize=function(R,Y,ce=!0){if(xe.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,oe=Y,t.width=Math.floor(R*Ne),t.height=Math.floor(Y*Ne),ce===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(F*Ne,oe*Ne).floor()},this.setDrawingBufferSize=function(R,Y,ce){F=R,oe=Y,Ne=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Y*ce),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(A===xi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,Y,ce,re){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,Y,ce,re),Te.viewport(ee.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,Y,ce,re){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,Y,ce,re),Te.scissor(q.copy(de).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(R){Te.setScissorTest(Me=R)},this.setOpaqueSort=function(R){qe=R},this.setTransparentSort=function(R){Ye=R},this.getClearColor=function(R){return R.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ce=!0){let re=0;if(R){let Q=!1;if(Z!==null){const Ie=Z.texture.format;Q=y.has(Ie)}if(Q){const Ie=Z.texture.type,je=_.has(Ie),Ae=we.getClearColor(),$e=we.getClearAlpha(),Ge=Ae.r,ot=Ae.g,st=Ae.b;je?(C[0]=Ge,C[1]=ot,C[2]=st,C[3]=$e,j.clearBufferuiv(j.COLOR,0,C)):(L[0]=Ge,L[1]=ot,L[2]=st,L[3]=$e,j.clearBufferiv(j.COLOR,0,L))}else re|=j.COLOR_BUFFER_BIT}Y&&(re|=j.DEPTH_BUFFER_BIT),ce&&(re|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Je,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),we.dispose(),_e.dispose(),Re.dispose(),w.dispose(),pe.dispose(),ge.dispose(),Ee.dispose(),Le.dispose(),me.dispose(),He.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",ur),xe.removeEventListener("sessionend",Pi),_i.stop()};function Je(R){R.preventDefault(),zm("WebGLRenderer: Context Lost."),N=!0}function Dt(){zm("WebGLRenderer: Context Restored."),N=!1;const R=U.autoReset,Y=ze.enabled,ce=ze.autoUpdate,re=ze.needsUpdate,Q=ze.type;fe(),U.autoReset=R,ze.enabled=Y,ze.autoUpdate=ce,ze.needsUpdate=re,ze.type=Q}function bt(R){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function pn(R){const Y=R.target;Y.removeEventListener("dispose",pn),wn(Y)}function wn(R){ls(R),w.remove(R)}function ls(R){const Y=w.get(R).programs;Y!==void 0&&(Y.forEach(function(ce){He.releaseProgram(ce)}),R.isShaderMaterial&&He.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ce,re,Q,Ie){Y===null&&(Y=Ut);const je=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=Hs(R,Y,ce,re,Q);Te.setMaterial(re,je);let $e=ce.index,Ge=1;if(re.wireframe===!0){if($e=Be.getWireframeAttribute(ce),$e===void 0)return;Ge=2}const ot=ce.drawRange,st=ce.attributes.position;let ht=ot.start*Ge,It=(ot.start+ot.count)*Ge;Ie!==null&&(ht=Math.max(ht,Ie.start*Ge),It=Math.min(It,(Ie.start+Ie.count)*Ge)),$e!==null?(ht=Math.max(ht,0),It=Math.min(It,$e.count)):st!=null&&(ht=Math.max(ht,0),It=Math.min(It,st.count));const Ht=It-ht;if(Ht<0||Ht===1/0)return;Le.setup(Q,re,Ae,ce,$e);let jt,xt=G;if($e!==null&&(jt=ue.get($e),xt=De,xt.setIndex(jt)),Q.isMesh)re.wireframe===!0?(Te.setLineWidth(re.wireframeLinewidth*it()),xt.setMode(j.LINES)):xt.setMode(j.TRIANGLES);else if(Q.isLine){let rt=re.linewidth;rt===void 0&&(rt=1),Te.setLineWidth(rt*it()),Q.isLineSegments?xt.setMode(j.LINES):Q.isLineLoop?xt.setMode(j.LINE_LOOP):xt.setMode(j.LINE_STRIP)}else Q.isPoints?xt.setMode(j.POINTS):Q.isSprite&&xt.setMode(j.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))xt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const rt=Q._multiDrawStarts,Ot=Q._multiDrawCounts,Rt=Q._multiDrawCount,xn=$e?ue.get($e).bytesPerElement:1,ui=w.get(re).currentProgram.getUniforms();for(let on=0;on<Rt;on++)ui.setValue(j,"_gl_DrawID",on),xt.render(rt[on]/xn,Ot[on])}else if(Q.isInstancedMesh)xt.renderInstances(ht,Ht,Q.count);else if(ce.isInstancedBufferGeometry){const rt=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Ot=Math.min(ce.instanceCount,rt);xt.renderInstances(ht,Ht,Ot)}else xt.render(ht,Ht)};function Ni(R,Y,ce){R.transparent===!0&&R.side===Tr&&R.forceSinglePass===!1?(R.side=li,R.needsUpdate=!0,ci(R,Y,ce),R.side=os,R.needsUpdate=!0,ci(R,Y,ce),R.side=Tr):ci(R,Y,ce)}this.compile=function(R,Y,ce=null){ce===null&&(ce=R),I=Re.get(ce),I.init(Y),O.push(I),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),R!==ce&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(I.pushLight(Q),Q.castShadow&&I.pushShadow(Q))}),I.setupLights();const re=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let je=0;je<Ie.length;je++){const Ae=Ie[je];Ni(Ae,ce,Q),re.add(Ae)}else Ni(Ie,ce,Q),re.add(Ie)}),I=O.pop(),re},this.compileAsync=function(R,Y,ce=null){const re=this.compile(R,Y,ce);return new Promise(Q=>{function Ie(){if(re.forEach(function(je){w.get(je).currentProgram.isReady()&&re.delete(je)}),re.size===0){Q(R);return}setTimeout(Ie,10)}dt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let lr=null;function cr(R){lr&&lr(R)}function ur(){_i.stop()}function Pi(){_i.start()}const _i=new Mg;_i.setAnimationLoop(cr),typeof self<"u"&&_i.setContext(self),this.setAnimationLoop=function(R){lr=R,xe.setAnimationLoop(R),R===null?_i.stop():_i.start()},xe.addEventListener("sessionstart",ur),xe.addEventListener("sessionend",Pi),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ce=xe.enabled===!0&&xe.isPresenting===!0,re=z!==null&&(Z===null||ce)&&z.begin(b,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(Y),Y=xe.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,Z),I=Re.get(R,O.length),I.init(Y),O.push(I),$t.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Fe.setFromProjectionMatrix($t,tr,Y.reversedDepth),Mt=this.localClippingEnabled,Pe=Ve.init(this.clippingPlanes,Mt),P=_e.get(R,D.length),P.init(),D.push(P),xe.enabled===!0&&xe.isPresenting===!0){const je=b.xr.getDepthSensingMesh();je!==null&&tn(je,Y,-1/0,b.sortObjects)}tn(R,Y,0,b.sortObjects),P.finish(),b.sortObjects===!0&&P.sort(qe,Ye),lt=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,lt&&we.addToRenderList(P,R),this.info.render.frame++,Pe===!0&&Ve.beginShadows();const Q=I.state.shadowsArray;if(ze.render(Q,R,Y),Pe===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&z.hasRenderPass())===!1){const je=P.opaque,Ae=P.transmissive;if(I.setupLights(),Y.isArrayCamera){const $e=Y.cameras;if(Ae.length>0)for(let Ge=0,ot=$e.length;Ge<ot;Ge++){const st=$e[Ge];cs(je,Ae,R,st)}lt&&we.render(R);for(let Ge=0,ot=$e.length;Ge<ot;Ge++){const st=$e[Ge];Wa(P,R,st,st.viewport)}}else Ae.length>0&&cs(je,Ae,R,Y),lt&&we.render(R),Wa(P,R,Y)}Z!==null&&$===0&&(H.updateMultisampleRenderTarget(Z),H.updateRenderTargetMipmap(Z)),re&&z.end(b),R.isScene===!0&&R.onAfterRender(b,R,Y),Le.resetDefaultState(),ie=-1,se=null,O.pop(),O.length>0?(I=O[O.length-1],Pe===!0&&Ve.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,D.pop(),D.length>0?P=D[D.length-1]:P=null};function tn(R,Y,ce,re){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Fe.intersectsSprite(R)){re&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4($t);const je=Ee.update(R),Ae=R.material;Ae.visible&&P.push(R,je,Ae,ce,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Fe.intersectsObject(R))){const je=Ee.update(R),Ae=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),At.copy(je.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4($t)),Array.isArray(Ae)){const $e=je.groups;for(let Ge=0,ot=$e.length;Ge<ot;Ge++){const st=$e[Ge],ht=Ae[st.materialIndex];ht&&ht.visible&&P.push(R,je,ht,ce,At.z,st)}}else Ae.visible&&P.push(R,je,Ae,ce,At.z,null)}}const Ie=R.children;for(let je=0,Ae=Ie.length;je<Ae;je++)tn(Ie[je],Y,ce,re)}function Wa(R,Y,ce,re){const{opaque:Q,transmissive:Ie,transparent:je}=R;I.setupLightsView(ce),Pe===!0&&Ve.setGlobalState(b.clippingPlanes,ce),re&&Te.viewport(ee.copy(re)),Q.length>0&&Qn(Q,Y,ce),Ie.length>0&&Qn(Ie,Y,ce),je.length>0&&Qn(je,Y,ce),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function cs(R,Y,ce,re){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const ht=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new ir(1,1,{generateMipmaps:!0,type:ht?Pr:xi,minFilter:Bs,samples:nt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:zt.workingColorSpace})}const Ie=I.state.transmissionRenderTarget[re.id],je=re.viewport||ee;Ie.setSize(je.z*b.transmissionResolutionScale,je.w*b.transmissionResolutionScale);const Ae=b.getRenderTarget(),$e=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Ie),b.getClearColor(he),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),lt&&we.render(ce);const ot=b.toneMapping;b.toneMapping=nr;const st=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Pe===!0&&Ve.setGlobalState(b.clippingPlanes,re),Qn(R,ce,re),H.updateMultisampleRenderTarget(Ie),H.updateRenderTargetMipmap(Ie),dt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let It=0,Ht=Y.length;It<Ht;It++){const jt=Y[It],{object:xt,geometry:rt,material:Ot,group:Rt}=jt;if(Ot.side===Tr&&xt.layers.test(re.layers)){const xn=Ot.side;Ot.side=li,Ot.needsUpdate=!0,Wi(xt,ce,re,rt,Ot,Rt),Ot.side=xn,Ot.needsUpdate=!0,ht=!0}}ht===!0&&(H.updateMultisampleRenderTarget(Ie),H.updateRenderTargetMipmap(Ie))}b.setRenderTarget(Ae,$e,Ge),b.setClearColor(he,ae),st!==void 0&&(re.viewport=st),b.toneMapping=ot}function Qn(R,Y,ce){const re=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Ie=R.length;Q<Ie;Q++){const je=R[Q],{object:Ae,geometry:$e,group:Ge}=je;let ot=je.material;ot.allowOverride===!0&&re!==null&&(ot=re),Ae.layers.test(ce.layers)&&Wi(Ae,Y,ce,$e,ot,Ge)}}function Wi(R,Y,ce,re,Q,Ie){R.onBeforeRender(b,Y,ce,re,Q,Ie),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,Y,ce,re,R,Ie),Q.transparent===!0&&Q.side===Tr&&Q.forceSinglePass===!1?(Q.side=li,Q.needsUpdate=!0,b.renderBufferDirect(ce,Y,re,Q,R,Ie),Q.side=os,Q.needsUpdate=!0,b.renderBufferDirect(ce,Y,re,Q,R,Ie),Q.side=Tr):b.renderBufferDirect(ce,Y,re,Q,R,Ie),R.onAfterRender(b,Y,ce,re,Q,Ie)}function ci(R,Y,ce){Y.isScene!==!0&&(Y=Ut);const re=w.get(R),Q=I.state.lights,Ie=I.state.shadowsArray,je=Q.state.version,Ae=He.getParameters(R,Q.state,Ie,Y,ce),$e=He.getProgramCacheKey(Ae);let Ge=re.programs;re.environment=R.isMeshStandardMaterial?Y.environment:null,re.fog=Y.fog,re.envMap=(R.isMeshStandardMaterial?ge:pe).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,Ge===void 0&&(R.addEventListener("dispose",pn),Ge=new Map,re.programs=Ge);let ot=Ge.get($e);if(ot!==void 0){if(re.currentProgram===ot&&re.lightsStateVersion===je)return yi(R,Ae),ot}else Ae.uniforms=He.getUniforms(R),R.onBeforeCompile(Ae,b),ot=He.acquireProgram(Ae,$e),Ge.set($e,ot),re.uniforms=Ae.uniforms;const st=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(st.clippingPlanes=Ve.uniform),yi(R,Ae),re.needsLights=us(R),re.lightsStateVersion=je,re.needsLights&&(st.ambientLightColor.value=Q.state.ambient,st.lightProbe.value=Q.state.probe,st.directionalLights.value=Q.state.directional,st.directionalLightShadows.value=Q.state.directionalShadow,st.spotLights.value=Q.state.spot,st.spotLightShadows.value=Q.state.spotShadow,st.rectAreaLights.value=Q.state.rectArea,st.ltc_1.value=Q.state.rectAreaLTC1,st.ltc_2.value=Q.state.rectAreaLTC2,st.pointLights.value=Q.state.point,st.pointLightShadows.value=Q.state.pointShadow,st.hemisphereLights.value=Q.state.hemi,st.directionalShadowMap.value=Q.state.directionalShadowMap,st.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,st.spotShadowMap.value=Q.state.spotShadowMap,st.spotLightMatrix.value=Q.state.spotLightMatrix,st.spotLightMap.value=Q.state.spotLightMap,st.pointShadowMap.value=Q.state.pointShadowMap,st.pointShadowMatrix.value=Q.state.pointShadowMatrix),re.currentProgram=ot,re.uniformsList=null,ot}function Lr(R){if(R.uniformsList===null){const Y=R.currentProgram.getUniforms();R.uniformsList=pc.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function yi(R,Y){const ce=w.get(R);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function Hs(R,Y,ce,re,Q){Y.isScene!==!0&&(Y=Ut),H.resetTextureUnits();const Ie=Y.fog,je=re.isMeshStandardMaterial?Y.environment:null,Ae=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Va,$e=(re.isMeshStandardMaterial?ge:pe).get(re.envMap||je),Ge=re.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ot=!!ce.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),st=!!ce.morphAttributes.position,ht=!!ce.morphAttributes.normal,It=!!ce.morphAttributes.color;let Ht=nr;re.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ht=b.toneMapping);const jt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,xt=jt!==void 0?jt.length:0,rt=w.get(re),Ot=I.state.lights;if(Pe===!0&&(Mt===!0||R!==se)){const un=R===se&&re.id===ie;Ve.setState(re,R,un)}let Rt=!1;re.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Ot.state.version||rt.outputColorSpace!==Ae||Q.isBatchedMesh&&rt.batching===!1||!Q.isBatchedMesh&&rt.batching===!0||Q.isBatchedMesh&&rt.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&rt.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&rt.instancing===!1||!Q.isInstancedMesh&&rt.instancing===!0||Q.isSkinnedMesh&&rt.skinning===!1||!Q.isSkinnedMesh&&rt.skinning===!0||Q.isInstancedMesh&&rt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&rt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&rt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&rt.instancingMorph===!1&&Q.morphTexture!==null||rt.envMap!==$e||re.fog===!0&&rt.fog!==Ie||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ve.numPlanes||rt.numIntersection!==Ve.numIntersection)||rt.vertexAlphas!==Ge||rt.vertexTangents!==ot||rt.morphTargets!==st||rt.morphNormals!==ht||rt.morphColors!==It||rt.toneMapping!==Ht||rt.morphTargetsCount!==xt)&&(Rt=!0):(Rt=!0,rt.__version=re.version);let xn=rt.currentProgram;Rt===!0&&(xn=ci(re,Y,Q));let ui=!1,on=!1,Xi=!1;const Ft=xn.getUniforms(),vt=rt.uniforms;if(Te.useProgram(xn.program)&&(ui=!0,on=!0,Xi=!0),re.id!==ie&&(ie=re.id,on=!0),ui||se!==R){Te.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ft.setValue(j,"projectionMatrix",R.projectionMatrix),Ft.setValue(j,"viewMatrix",R.matrixWorldInverse);const Wt=Ft.map.cameraPosition;Wt!==void 0&&Wt.setValue(j,St.setFromMatrixPosition(R.matrixWorld)),nt.logarithmicDepthBuffer&&Ft.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),se!==R&&(se=R,on=!0,Xi=!0)}if(rt.needsLights&&(Ot.state.directionalShadowMap.length>0&&Ft.setValue(j,"directionalShadowMap",Ot.state.directionalShadowMap,H),Ot.state.spotShadowMap.length>0&&Ft.setValue(j,"spotShadowMap",Ot.state.spotShadowMap,H),Ot.state.pointShadowMap.length>0&&Ft.setValue(j,"pointShadowMap",Ot.state.pointShadowMap,H)),Q.isSkinnedMesh){Ft.setOptional(j,Q,"bindMatrix"),Ft.setOptional(j,Q,"bindMatrixInverse");const un=Q.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Ft.setValue(j,"boneTexture",un.boneTexture,H))}Q.isBatchedMesh&&(Ft.setOptional(j,Q,"batchingTexture"),Ft.setValue(j,"batchingTexture",Q._matricesTexture,H),Ft.setOptional(j,Q,"batchingIdTexture"),Ft.setValue(j,"batchingIdTexture",Q._indirectTexture,H),Ft.setOptional(j,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Ft.setValue(j,"batchingColorTexture",Q._colorsTexture,H));const bn=ce.morphAttributes;if((bn.position!==void 0||bn.normal!==void 0||bn.color!==void 0)&&mt.update(Q,ce,xn),(on||rt.receiveShadow!==Q.receiveShadow)&&(rt.receiveShadow=Q.receiveShadow,Ft.setValue(j,"receiveShadow",Q.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(vt.envMap.value=$e,vt.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&Y.environment!==null&&(vt.envMapIntensity.value=Y.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=sb()),on&&(Ft.setValue(j,"toneMappingExposure",b.toneMappingExposure),rt.needsLights&&Ws(vt,Xi),Ie&&re.fog===!0&&at.refreshFogUniforms(vt,Ie),at.refreshMaterialUniforms(vt,re,Ne,oe,I.state.transmissionRenderTarget[R.id]),pc.upload(j,Lr(rt),vt,H)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(pc.upload(j,Lr(rt),vt,H),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(j,"center",Q.center),Ft.setValue(j,"modelViewMatrix",Q.modelViewMatrix),Ft.setValue(j,"normalMatrix",Q.normalMatrix),Ft.setValue(j,"modelMatrix",Q.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const un=re.uniformsGroups;for(let Wt=0,qi=un.length;Wt<qi;Wt++){const di=un[Wt];me.update(di,xn),me.bind(di,xn)}}return xn}function Ws(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function us(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,Y,ce){const re=w.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),w.get(R.texture).__webglTexture=Y,w.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ce,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){const ce=w.get(R);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0};const Xs=j.createFramebuffer();this.setRenderTarget=function(R,Y=0,ce=0){Z=R,B=Y,$=ce;let re=null,Q=!1,Ie=!1;if(R){const Ae=w.get(R);if(Ae.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(j.FRAMEBUFFER,Ae.__webglFramebuffer),ee.copy(R.viewport),q.copy(R.scissor),X=R.scissorTest,Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),ie=-1;return}else if(Ae.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(Ae.__hasExternalTextures)H.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ot=R.depthTexture;if(Ae.__boundDepthTexture!==ot){if(ot!==null&&w.has(ot)&&(R.width!==ot.image.width||R.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Ge=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?re=Ge[Y][ce]:re=Ge[Y],Q=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?re=w.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?re=Ge[ce]:re=Ge,ee.copy(R.viewport),q.copy(R.scissor),X=R.scissorTest}else ee.copy(te).multiplyScalar(Ne).floor(),q.copy(de).multiplyScalar(Ne).floor(),X=Me;if(ce!==0&&(re=Xs),Te.bindFramebuffer(j.FRAMEBUFFER,re)&&Te.drawBuffers(R,re),Te.viewport(ee),Te.scissor(q),Te.setScissorTest(X),Q){const Ae=w.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae.__webglTexture,ce)}else if(Ie){const Ae=Y;for(let $e=0;$e<R.textures.length;$e++){const Ge=w.get(R.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,Ge.__webglTexture,ce,Ae)}}else if(R!==null&&ce!==0){const Ae=w.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ae.__webglTexture,ce)}ie=-1},this.readRenderTargetPixels=function(R,Y,ce,re,Q,Ie,je,Ae=0){if(!(R&&R.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Te.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Ge=R.textures[Ae],ot=Ge.format,st=Ge.type;if(!nt.textureFormatReadable(ot)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(st)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-re&&ce>=0&&ce<=R.height-Q&&(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ae),j.readPixels(Y,ce,re,Q,Se.convert(ot),Se.convert(st),Ie))}finally{const Ge=Z!==null?w.get(Z).__webglFramebuffer:null;Te.bindFramebuffer(j.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ce,re,Q,Ie,je,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e)if(Y>=0&&Y<=R.width-re&&ce>=0&&ce<=R.height-Q){Te.bindFramebuffer(j.FRAMEBUFFER,$e);const Ge=R.textures[Ae],ot=Ge.format,st=Ge.type;if(!nt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ht),j.bufferData(j.PIXEL_PACK_BUFFER,Ie.byteLength,j.STREAM_READ),R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ae),j.readPixels(Y,ce,re,Q,Se.convert(ot),Se.convert(st),0);const It=Z!==null?w.get(Z).__webglFramebuffer:null;Te.bindFramebuffer(j.FRAMEBUFFER,It);const Ht=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await M_(j,Ht,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ht),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ie),j.deleteBuffer(ht),j.deleteSync(Ht),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ce=0){const re=Math.pow(2,-ce),Q=Math.floor(R.image.width*re),Ie=Math.floor(R.image.height*re),je=Y!==null?Y.x:0,Ae=Y!==null?Y.y:0;H.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,je,Ae,Q,Ie),Te.unbindTexture()};const ds=j.createFramebuffer(),Zt=j.createFramebuffer();this.copyTextureToTexture=function(R,Y,ce=null,re=null,Q=0,Ie=null){Ie===null&&(Q!==0?(Oo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=Q,Q=0):Ie=0);let je,Ae,$e,Ge,ot,st,ht,It,Ht;const jt=R.isCompressedTexture?R.mipmaps[Ie]:R.image;if(ce!==null)je=ce.max.x-ce.min.x,Ae=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,Ge=ce.min.x,ot=ce.min.y,st=ce.isBox3?ce.min.z:0;else{const bn=Math.pow(2,-Q);je=Math.floor(jt.width*bn),Ae=Math.floor(jt.height*bn),R.isDataArrayTexture?$e=jt.depth:R.isData3DTexture?$e=Math.floor(jt.depth*bn):$e=1,Ge=0,ot=0,st=0}re!==null?(ht=re.x,It=re.y,Ht=re.z):(ht=0,It=0,Ht=0);const xt=Se.convert(Y.format),rt=Se.convert(Y.type);let Ot;Y.isData3DTexture?(H.setTexture3D(Y,0),Ot=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(H.setTexture2DArray(Y,0),Ot=j.TEXTURE_2D_ARRAY):(H.setTexture2D(Y,0),Ot=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const Rt=j.getParameter(j.UNPACK_ROW_LENGTH),xn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ui=j.getParameter(j.UNPACK_SKIP_PIXELS),on=j.getParameter(j.UNPACK_SKIP_ROWS),Xi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,jt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,jt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ge),j.pixelStorei(j.UNPACK_SKIP_ROWS,ot),j.pixelStorei(j.UNPACK_SKIP_IMAGES,st);const Ft=R.isDataArrayTexture||R.isData3DTexture,vt=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){const bn=w.get(R),un=w.get(Y),Wt=w.get(bn.__renderTarget),qi=w.get(un.__renderTarget);Te.bindFramebuffer(j.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Te.bindFramebuffer(j.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let di=0;di<$e;di++)Ft&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(R).__webglTexture,Q,st+di),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,Ie,Ht+di)),j.blitFramebuffer(Ge,ot,je,Ae,ht,It,je,Ae,j.DEPTH_BUFFER_BIT,j.NEAREST);Te.bindFramebuffer(j.READ_FRAMEBUFFER,null),Te.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||w.has(R)){const bn=w.get(R),un=w.get(Y);Te.bindFramebuffer(j.READ_FRAMEBUFFER,ds),Te.bindFramebuffer(j.DRAW_FRAMEBUFFER,Zt);for(let Wt=0;Wt<$e;Wt++)Ft?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,bn.__webglTexture,Q,st+Wt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,bn.__webglTexture,Q),vt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,un.__webglTexture,Ie,Ht+Wt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,un.__webglTexture,Ie),Q!==0?j.blitFramebuffer(Ge,ot,je,Ae,ht,It,je,Ae,j.COLOR_BUFFER_BIT,j.NEAREST):vt?j.copyTexSubImage3D(Ot,Ie,ht,It,Ht+Wt,Ge,ot,je,Ae):j.copyTexSubImage2D(Ot,Ie,ht,It,Ge,ot,je,Ae);Te.bindFramebuffer(j.READ_FRAMEBUFFER,null),Te.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else vt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(Ot,Ie,ht,It,Ht,je,Ae,$e,xt,rt,jt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Ot,Ie,ht,It,Ht,je,Ae,$e,xt,jt.data):j.texSubImage3D(Ot,Ie,ht,It,Ht,je,Ae,$e,xt,rt,jt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ie,ht,It,je,Ae,xt,rt,jt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ie,ht,It,jt.width,jt.height,xt,jt.data):j.texSubImage2D(j.TEXTURE_2D,Ie,ht,It,je,Ae,xt,rt,jt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Rt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,xn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ui),j.pixelStorei(j.UNPACK_SKIP_ROWS,on),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Xi),Ie===0&&Y.generateMipmaps&&j.generateMipmap(Ot),Te.unbindTexture()},this.initRenderTarget=function(R){w.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),Te.unbindTexture()},this.resetState=function(){B=0,$=0,Z=null,Te.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=zt._getDrawingBufferColorSpace(e),t.unpackColorSpace=zt._getUnpackColorSpace()}}const I0={type:"change"},sh={type:"start"},Ag={type:"end"},ac=new Yf,U0=new rs,ab=Math.cos(70*b_.DEG2RAD),yn=new K,oi=2*Math.PI,Yt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Id=1e-6;class Rg extends u1{constructor(e,t=null){super(e,t),this.state=Yt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oa.ROTATE,MIDDLE:Oa.DOLLY,RIGHT:Oa.PAN},this.touches={ONE:Ua.ROTATE,TWO:Ua.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Vs,this._lastTargetPosition=new K,this._quat=new Vs().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new c0,this._sphericalDelta=new c0,this._scale=1,this._panOffset=new K,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new K,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lb.bind(this),this._onPointerDown=ob.bind(this),this._onPointerUp=cb.bind(this),this._onContextMenu=gb.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=hb.bind(this),this._onTouchStart=pb.bind(this),this._onTouchMove=mb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=xb.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(I0),this.update(),this.state=Yt.NONE}update(e=null){const t=this.object.position;yn.copy(t).sub(this.target),yn.applyQuaternion(this._quat),this._spherical.setFromVector3(yn),this.autoRotate&&this.state===Yt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=oi:r>Math.PI&&(r-=oi),o<-Math.PI?o+=oi:o>Math.PI&&(o-=oi),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(yn.setFromSpherical(this._spherical),yn.applyQuaternion(this._quatInverse),t.copy(this.target).add(yn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=yn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new K(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=yn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<ab?this.object.lookAt(this.target):(U0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(U0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Id||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Id||this._lastTargetPosition.distanceToSquared(this.target)>Id?(this.dispatchEvent(I0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?oi/60*this.autoRotateSpeed*e:oi/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){yn.setFromMatrixColumn(t,0),yn.multiplyScalar(-e),this._panOffset.add(yn)}_panUp(e,t){this.screenSpacePanning===!0?yn.setFromMatrixColumn(t,1):(yn.setFromMatrixColumn(t,0),yn.crossVectors(this.object.up,yn)),yn.multiplyScalar(e),this._panOffset.add(yn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;yn.copy(o).sub(this.target);let l=yn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/t.clientHeight),this._rotateUp(oi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-oi*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(oi*this._rotateDelta.x/t.clientHeight),this._rotateUp(oi*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new gt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function ob(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ag),this.state=Yt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ub(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Yt.DOLLY;break;case Oa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}break;case Oa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Yt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Yt.PAN}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(sh)}function db(s){switch(this.state){case Yt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Yt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Yt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Yt.NONE||(s.preventDefault(),this.dispatchEvent(sh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ag))}function hb(s){this.enabled!==!1&&this._handleKeyDown(s)}function pb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Ua.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Yt.TOUCH_ROTATE;break;case Ua.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Yt.TOUCH_PAN;break;default:this.state=Yt.NONE}break;case 2:switch(this.touches.TWO){case Ua.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Yt.TOUCH_DOLLY_PAN;break;case Ua.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Yt.TOUCH_DOLLY_ROTATE;break;default:this.state=Yt.NONE}break;default:this.state=Yt.NONE}this.state!==Yt.NONE&&this.dispatchEvent(sh)}function mb(s){switch(this._trackPointer(s),this.state){case Yt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Yt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Yt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Yt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Yt.NONE}}function gb(s){this.enabled!==!1&&s.preventDefault()}function xb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ng(){const s=document.createElement("canvas");s.width=1024,s.height=768;const e=s.getContext("2d");if(!e)return s;e.fillStyle="#08101a",e.fillRect(0,0,1024,768);const t=(f,p,m,x,v)=>{e.beginPath(),e.moveTo(f+v,p),e.lineTo(f+m-v,p),e.quadraticCurveTo(f+m,p,f+m,p+v),e.lineTo(f+m,p+x-v),e.quadraticCurveTo(f+m,p+x,f+m-v,p+x),e.lineTo(f+v,p+x),e.quadraticCurveTo(f,p+x,f,p+x-v),e.lineTo(f,p+v),e.quadraticCurveTo(f,p,f+v,p),e.closePath()},r=e.createLinearGradient(0,0,0,90);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.fillRect(0,0,1024,90),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,90),e.lineTo(1024,90),e.stroke(),e.fillStyle="#ffffff",e.font='bold 38px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("10/05  15:42",490,48),e.beginPath(),e.arc(950,45,14,0,Math.PI*2),e.fillStyle="#22c55e",e.fill(),e.lineWidth=3,e.strokeStyle="#ffffff",e.stroke(),[{title:"EXAUSTOR",val:"OK",x:42},{title:"ENERGIA",val:"OK",x:367},{title:"GÁS",val:"ABERTO",x:692}].forEach(f=>{const p=e.createLinearGradient(0,120,0,245);p.addColorStop(0,"#22c55e"),p.addColorStop(1,"#15803d"),e.fillStyle=p,t(f.x,120,290,125,18),e.fill(),e.strokeStyle="#4ade80",e.lineWidth=3.5,e.stroke(),e.fillStyle="#ffffff",e.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="alphabetic",e.fillText(f.title,f.x+145,160),e.font='900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(f.val,f.x+145,212)}),[{title:"SETORES",x:42,y:280},{title:"CONTROLE GÁS",x:532,y:280},{title:"REARMAR",x:42,y:470},{title:"CONFIG",x:532,y:470}].forEach(f=>{const p=e.createLinearGradient(0,f.y,0,f.y+160);p.addColorStop(0,"#2563eb"),p.addColorStop(.5,"#1d4ed8"),p.addColorStop(1,"#1e40af"),e.fillStyle=p,t(f.x,f.y,450,160,22),e.fill(),e.strokeStyle="#60a5fa",e.lineWidth=4,e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",t(f.x+4,f.y+4,442,75,18),e.fill(),e.fillStyle="#ffffff",e.font='900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(f.title,f.x+225,f.y+80)});const d=e.createLinearGradient(0,683,0,768);return d.addColorStop(0,"#0369a1"),d.addColorStop(1,"#0284c7"),e.fillStyle=d,e.fillRect(0,683,1024,85),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,683),e.lineTo(1024,683),e.stroke(),e.fillStyle="#ffffff",e.font='900 34px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA OPERANTE",512,725),s}function O0(s,e){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const t=s.getContext("2d");if(!t)return;t.fillStyle="#ba1016",t.fillRect(0,0,1024,768),t.fillStyle="#ffffff",t.font='bold 54px "Courier New", Courier, monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("FOGO DETECTADO",490,75),t.beginPath(),t.arc(950,75,18,0,Math.PI*2),t.fillStyle="#22c55e",t.fill(),t.lineWidth=4,t.strokeStyle="#ffffff",t.stroke(),t.fillStyle="#ffffff",t.font='bold 42px "Courier New", Courier, monospace',t.fillText("FOGO DETECTADO: SUB-1",512,175),t.fillText("EM DISPARO",512,240);const o=`${Math.max(0,Math.round(e))}s`;t.save(),t.shadowColor="rgba(103, 232, 249, 0.75)",t.shadowBlur=24,t.fillStyle="#67e8f9",t.font='900 185px "Courier New", Courier, monospace',t.fillText(o,512,440),t.restore(),t.fillStyle="#ffffff",t.font='bold 38px "Courier New", Courier, monospace',t.fillText("TOQUE NA TELA PARA ABORTAR",512,670)}function _b(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#7f1d1d",e.fillRect(0,0,1024,768),e.fillStyle="#ffffff",e.font='bold 48px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA CO2 / SAP",512,110),e.fillStyle="#fef08a",e.font='900 64px "Courier New", Courier, monospace',e.fillText("DESCARGA EFETUADA",512,260),e.fillStyle="#0284c7",e.fillRect(212,420,600,120),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(212,420,600,120),e.fillStyle="#ffffff",e.font='bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText("REARMAR SISTEMA",512,480))}function yb(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#06261c",e.fillRect(0,0,1024,768),e.fillStyle="#10b981",e.font='900 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("● INCÊNDIO EXTINTO",512,140),e.fillStyle="#a7f3d0",e.font='bold 36px "Courier New", Courier, monospace',e.fillText("SUPRESSÃO CLASSE K BEM-SUCEDIDA",512,240),e.fillStyle="#064e3b",e.fillRect(100,340,824,110),e.strokeStyle="#34d399",e.lineWidth=4,e.strokeRect(100,340,824,110),e.fillStyle="#6ee7b7",e.font="bold 38px sans-serif",e.fillText("AVCB & NBR 14518 CONFORME",512,395),e.fillStyle="#d4af37",e.font='bold 32px "Courier New", Courier, monospace',e.fillText("COZINHA E VIDAS PRESERVADAS",512,570))}const Sb=()=>{const s=Ue.useRef(null),e=Ue.useRef(null),t=Ue.useRef(null),[r,o]=Ue.useState(0),l=Ue.useRef(0),[d,f]=Ue.useState(!1),p=Ue.useRef(!1),[m,x]=Ue.useState("STANDBY"),v=Ue.useRef("STANDBY");v.current=m;const[S,M]=Ue.useState(10),T=Ue.useRef(10);T.current=S;const[A,y]=Ue.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,C]=Ue.useState(null),[L,P]=Ue.useState("geral"),I=Ue.useRef(null),D=Ue.useRef(null),O=Ue.useRef(null),z=Ue.useRef(null),b=Ue.useRef(null),N=Ue.useRef(null),B=Ue.useRef(null),$=Ue.useRef(null),Z=Ue.useRef(null),ie=Ue.useRef(null),se=Ue.useRef(null),ee=Ue.useRef(null),q=Ue.useRef(null),X=Ue.useRef(null),he=Ue.useRef(null),ae=Ue.useRef(null),F=Ue.useRef(null),oe=Ue.useRef(null),Ne=Ue.useRef(null),qe=Ue.useRef(null),Ye=Ue.useRef(null),te=Ue.useRef(new K(0,2.2,4.4)),de=Ue.useRef(new K(0,1.4,0)),Me=Ue.useCallback(()=>{const it=N.current;if(!it)return;const j=v.current,Ze=T.current;j==="FIRE_ALARM"?O0(it,Ze):j==="SUPPRESSION"?_b(it):j==="EXTINGUISHED"&&yb(it),b.current&&(b.current.needsUpdate=!0)},[]),[Fe,Pe]=Ue.useState(!1),Mt=Ue.useCallback(()=>{m==="SUPPRESSION"||m==="EXTINGUISHED"||(q.current&&(q.current.rotation.x=.65),p.current=!0,f(!0),x("FIRE_ALARM"),M(60),Pe(!0),y({temp:290,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:60}))},[m]),$t=Ue.useCallback(()=>{p.current=!1,f(!1),Pe(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0)},[]),St=()=>{s.current?s.current.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:window.innerHeight,behavior:"smooth"})},At=()=>{if(!s.current)return;const it=window.scrollY,j=window.innerHeight*.85;window.scrollTo({top:it+j,behavior:"smooth"})};Ue.useEffect(()=>{if(m!=="FIRE_ALARM")return;const it=setInterval(()=>{M(j=>{if(j<=1)return clearInterval(it),Pe(!1),x("SUPPRESSION"),y(dt=>({...dt,temp:140,systemStatus:"COMBATE ATIVO",countdown:0})),setTimeout(()=>{x("EXTINGUISHED"),y(dt=>({...dt,temp:38,systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3500),0;const Ze=j-1;return y(dt=>({...dt,countdown:Ze})),Ze})},1e3);return()=>clearInterval(it)},[m]);const Ut=Ue.useCallback(()=>{p.current=!1,f(!1),Pe(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),q.current&&(q.current.rotation.x=0),F.current&&(F.current.scale.set(.001,.001,.001),F.current.visible=!1)},[]);Ue.useEffect(()=>{Me()},[m,S,Me]),Ue.useEffect(()=>{const it=()=>{if(!s.current)return;const j=s.current.getBoundingClientRect(),Ze=s.current.offsetHeight-window.innerHeight;if(Ze<=0)return;const dt=-j.top,nt=Math.min(1,Math.max(0,dt/Ze));if(l.current=nt,o(nt),!(p.current&&Fe))if(p.current&&nt<=.05&&(p.current=!1,f(!1),Pe(!1)),nt<.2)x("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60});else if(nt>=.2&&nt<.45){x("HEATING");const Te=Math.round(180+(nt-.2)/.25*160);y({temp:Te,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:60})}else if(nt>=.45&&nt<.7){x("FIRE_ALARM");const Te=Math.max(1,Math.round(60-(nt-.45)/.25*59));M(Te),y({temp:380,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:Te})}else nt>=.7&&nt<.88?(x("SUPPRESSION"),y({temp:135,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),y({temp:38,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",it,{passive:!0}),it(),()=>window.removeEventListener("scroll",it)},[Fe]);const lt=it=>{P(it),it==="geral"?(te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)):it==="central"?(te.current.set(1.9,1.85,1.5),de.current.set(2.1,1.8,.15)):it==="fritadeira"?(te.current.set(-.2,1.4,2.2),de.current.set(-.2,1,0)):it==="botoeira"&&(te.current.set(1.4,1.45,1.3),de.current.set(1.45,1.4,.05))};return Ue.useEffect(()=>{if(!t.current||!e.current)return;const it=e.current.clientWidth||window.innerWidth,j=e.current.clientHeight||window.innerHeight,Ze=new xg;I.current=Ze,Ze.background=new Ct(658448),Ze.fog=new Kf(658448,.035);const dt=it<768,nt=new Zn(dt?58:45,it/j,.1,100);dt?(nt.position.set(.1,2.15,5.6),te.current.set(.1,2.15,5.6),de.current.set(.1,1.35,0)):(nt.position.set(0,2.2,4.4),te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)),D.current=nt;const Te=new Cg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});Te.setSize(it,j),Te.setPixelRatio(Math.min(window.devicePixelRatio,2)),Te.shadowMap.enabled=!0,Te.shadowMap.type=Ff,Te.toneMapping=Mc,Te.toneMappingExposure=1.1,O.current=Te;const U=new Rg(nt,Te.domElement);U.enableDamping=!0,U.dampingFactor=.05,U.enableZoom=!1,U.enablePan=!1,U.maxPolarAngle=Math.PI/2+.05,U.target.set(dt?.1:0,dt?1.35:1.4,0),z.current=U;const w=new yg(16774890,.75);Ze.add(w);const H=new Pf(16777215,1.3);H.position.set(4,6,4),H.castShadow=!0,H.shadow.mapSize.width=1024,H.shadow.mapSize.height=1024,Ze.add(H);const pe=new s0(16766880,2.8,6,Math.PI/3,.3);pe.position.set(0,2.7,0),pe.target.position.set(0,.9,0),Ze.add(pe),Ze.add(pe.target);const ge=new a0(16733440,0,5);ge.position.set(-.35,1.2,.1),Ze.add(ge),ee.current=ge;const ue=new a0(16711680,0,8);ue.position.set(2.1,2.25,.2),Ze.add(ue),ie.current=ue;const Be=new wt({color:13421772,metalness:.9,roughness:.22}),Ee=new wt({color:1579551,roughness:.6,metalness:.1}),He=new wt({color:987413,roughness:.8,metalness:.2}),at=new Oe(new Wn(14,14),He);at.rotation.x=-Math.PI/2,at.receiveShadow=!0,Ze.add(at);const _e=new Oe(new Wn(14,8),Ee);_e.position.set(0,4,-1.2),_e.receiveShadow=!0,Ze.add(_e);const Re=new Oe(new Wn(14,8),Ee);Re.rotation.y=Math.PI/2,Re.position.set(-4.5,4,0),Ze.add(Re);const Ve=new Rn;Ze.add(Ve);const ze=new Oe(new Gt(2.6,.9,1),Be);ze.position.set(0,.45,0),ze.castShadow=!0,ze.receiveShadow=!0,Ve.add(ze);const we=new Rn;we.position.set(-.55,.9,0),Ve.add(we),ae.current=we;const mt=new Oe(new Gt(.85,.12,.75),Be);mt.position.set(0,.06,0),we.add(mt);const G=new Oe(new Gt(.72,.02,.62),new wt({color:9584654,roughness:.1,metalness:.3}));G.position.set(0,.11,0),we.add(G);const De=new wt({color:1118481,roughness:.5}),Se=new Oe(new en(.012,.012,.28),De);Se.position.set(-.16,.22,.34),Se.rotation.x=Math.PI/3,we.add(Se);const Le=new Oe(new en(.012,.012,.28),De);Le.position.set(.16,.22,.34),Le.rotation.x=Math.PI/3,we.add(Le);const me=new Rn;me.position.set(.65,.9,0),Ve.add(me);const fe=new Oe(new Gt(.95,.06,.75),new wt({color:3355448,roughness:.4,metalness:.7}));fe.position.set(0,.03,0),me.add(fe);const xe=new Rn;xe.position.set(0,2.3,0),Ze.add(xe);const Je=new Oe(new Gt(2.8,.6,1.2),Be);Je.castShadow=!0,xe.add(Je);const Dt=new wt({color:10066329,metalness:.9,roughness:.3});for(let Nt=-1;Nt<=1;Nt+=.5){const pt=new Oe(new Gt(.42,.35,.04),Dt);pt.position.set(Nt,-.15,0),pt.rotation.x=-Math.PI/6,xe.add(pt)}const bt=new Oe(new en(.28,.28,1.5,32),Be);bt.position.set(0,1,0),xe.add(bt);const pn=new Oe(new Gt(.64,.18,.64),new wt({color:4674921,metalness:.85,roughness:.25}));pn.position.set(0,.55,0),xe.add(pn);const wn=new Oe(new Gt(.14,.14,.14),new wt({color:14251782,roughness:.4}));wn.position.set(.36,.55,0),xe.add(wn);const ls=new wt({color:11580860,metalness:.88,roughness:.3}),Ni=new Oe(new Wn(3.6,1.4),ls);Ni.position.set(0,1.6,-.6),Ze.add(Ni);const lr=new Oe(new en(.008,.008,2.4,16),Be);lr.rotation.z=Math.PI/2,lr.position.set(0,1.95,-.58),Ze.add(lr);const cr=new wt({color:11817737,metalness:.8,roughness:.3}),ur=new wt({color:13938487,metalness:.9,roughness:.2}),Pi=new Oe(new en(.015,.015,2.4),cr);Pi.rotation.z=Math.PI/2,Pi.position.set(0,-.28,-.2),xe.add(Pi),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Nt,pt,qt])=>{const Fn=new Oe(new Jf(.025,.06,16),ur);Fn.position.set(Nt,pt,qt),Fn.rotation.x=Math.PI,xe.add(Fn)});const tn=new Rn;tn.position.set(2.1,1.8,.15),tn.rotation.y=-.28,Ze.add(tn),he.current=tn,tn.userData={interactiveType:"central",name:"Central Outfire VTS"};const cs=new _g().load("/assets/tampa-central-moderna.png");cs.colorSpace=Ln;const Qn=Ng(),Wi=new Nf(Qn);Wi.colorSpace=Ln,$.current=Wi;const ci=document.createElement("canvas");ci.width=1024,ci.height=768,O0(ci,T.current);const Lr=new Nf(ci);Lr.colorSpace=Ln,N.current=ci,b.current=Lr,Z.current=Lr;const yi=new wt({color:1316378,roughness:.45,metalness:.8}),Hs=new wt({map:cs,roughness:.35,metalness:.25}),Ws=[yi,yi,yi,yi,Hs,yi],us=new Oe(new Gt(.72,.52,.22),Ws);us.castShadow=!0,tn.add(us);const Xs=new wt({map:Wi,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:Wi,emissiveIntensity:.95});B.current=Xs;const ds=new Oe(new Wn(.2,.15),Xs);ds.position.set(0,0,.115),ds.userData={interactiveType:"central"},tn.add(ds);const Zt=new wt({color:1579552,metalness:.9,roughness:.35}),R=new Oe(new Gt(.218,.168,.005),Zt);R.position.set(0,0,.111),tn.add(R);const Y=new wt({color:11580344,metalness:.95,roughness:.2}),ce=new en(.004,.004,.005,8);[[-.098,.072],[.098,.072],[-.098,-.072],[.098,-.072]].forEach(([Nt,pt])=>{const qt=new Oe(ce,Y);qt.rotation.x=Math.PI/2,qt.position.set(Nt,pt,.1155),tn.add(qt)});const re=new s0(16774890,2.2,5,Math.PI/3,.3);re.position.set(2.4,2.4,1.6),re.target=tn,Ze.add(re);const Q=new Oe(new en(.016,.016,1.6,16),Be);Q.position.set(0,1.05,0),tn.add(Q);const Ie=new Oe(new en(.045,.045,.03,16),new wt({color:1118481,metalness:.8}));Ie.position.set(0,.275,0),tn.add(Ie);const je=new wt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),Ae=new Oe(new en(.038,.042,.065,16),je);Ae.position.set(0,.32,0),tn.add(Ae),se.current=Ae;const $e=new Oe(new Gt(.68,.02,.2),yi);$e.position.set(0,-.32,0),tn.add($e);const Ge=new wt({color:592396,roughness:.5}),ot=new Oe(new Gt(.24,.15,.14),Ge);ot.position.set(-.16,-.23,0),tn.add(ot);const st=new Oe(new Gt(.24,.15,.14),Ge);st.position.set(.16,-.23,0),tn.add(st);const ht=new Rn;ht.position.set(1.45,1.4,.08),Ze.add(ht),X.current=ht,ht.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const It=new Oe(new Gt(.18,.24,.08),new wt({color:13373713,roughness:.3,metalness:.3}));It.castShadow=!0,ht.add(It);const Ht=new Oe(new Gt(.14,.18,.015),new wt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));Ht.position.set(0,0,.042),ht.add(Ht);const jt=new Oe(new Gt(.1,.06,.025),new wt({color:16436245,roughness:.3}));jt.position.set(0,-.01,.048),ht.add(jt),q.current=jt;const xt=new Rn;xt.position.set(-1.85,1.1,-.3),Ze.add(xt),xt.userData={interactiveType:"saponificante",name:"Cilindro Saponificante Classe K (Inox Cromado)"};const rt=new wt({color:15857145,metalness:.96,roughness:.12}),Ot=new Oe(new en(.13,.13,.82,32),rt);Ot.castShadow=!0,xt.add(Ot);const Rt=new Oe(new Er(.13,32,16,0,Math.PI*2,0,Math.PI/2),rt);Rt.position.set(0,.41,0),xt.add(Rt);const xn=new Oe(new Er(.13,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),rt);xn.position.set(0,-.41,0),xt.add(xn);const ui=new wt({color:3355443,metalness:.8}),on=new Oe(new Gt(.32,.04,.06),ui);on.position.set(0,.22,-.09),xt.add(on);const Xi=new Oe(new Gt(.32,.04,.06),ui);Xi.position.set(0,-.22,-.09),xt.add(Xi);const Ft=new Oe(new en(.032,.032,.02,16),new wt({color:13938487,metalness:.85}));Ft.rotation.x=Math.PI/2,Ft.position.set(0,.55,.08),xt.add(Ft);const vt=new Oe(new Qf(.028,16),new Gi({color:2278750}));vt.position.set(0,.55,.091),xt.add(vt);const bn=new Oe(new en(.022,.022,.12,16),new wt({color:13938487,metalness:.9}));bn.position.set(0,.52,0),xt.add(bn);const un=new Oe(new en(.132,.132,.12,32),new wt({color:13938487,metalness:.85,roughness:.2}));un.position.set(0,.05,0),xt.add(un);const Wt=new Rn;Wt.position.set(.85,2.7,-.35),Ze.add(Wt),Wt.userData={interactiveType:"co2",name:"Cilindro de CO2 (Injeção no Duto)"};const qi=new wt({color:14427686,metalness:.65,roughness:.28}),di=new Oe(new en(.09,.09,.95,32),qi);di.castShadow=!0,Wt.add(di);const Xa=new Oe(new Er(.09,32,16,0,Math.PI*2,0,Math.PI/2),qi);Xa.position.set(0,.475,0),Wt.add(Xa);const qs=new Oe(new Er(.09,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),qi);qs.position.set(0,-.475,0),Wt.add(qs);const fs=new Oe(new en(.025,.025,.14,16),new wt({color:13938487,metalness:.85}));fs.position.set(0,.6,0),Wt.add(fs);const Si=new Oe(new en(.012,.012,.85,16),Be);Si.rotation.z=Math.PI/2,Si.position.set(-.42,.66,.35),Wt.add(Si);const Jn=new Oe(new Gt(.74,.08,.64),new wt({color:16317180,roughness:.9,metalness:.05}));Jn.position.set(-.55,1.05,0),Jn.scale.set(.001,.001,.001),Jn.visible=!1,Ze.add(Jn),F.current=Jn;const On=new Rn;Ze.add(On),oe.current=On;const hs=70,ps=new th(.08,1),Mi=[];for(let Nt=0;Nt<hs;Nt++){const pt=new Oe(ps,new Gi({color:16729344,transparent:!0,opacity:.85}));pt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),pt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},On.add(pt),Mi.push(pt)}const Ir=new Rn;Ze.add(Ir),Ne.current=Ir;const Vo=50,ms=new Er(.12,8,8),Go=[];for(let Nt=0;Nt<Vo;Nt++){const pt=new Oe(ms,new Gi({color:2040877,transparent:!0,opacity:.4}));pt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),pt.userData={speedY:.6+Math.random()*1,maxH:2.2},Ir.add(pt),Go.push(pt)}const Ys=new Rn;Ze.add(Ys),qe.current=Ys;const $s=80,Ho=new Er(.025,8,8),Wo=[];for(let Nt=0;Nt<$s;Nt++){const pt=new Oe(Ho,new Gi({color:16777215,transparent:!0,opacity:.9}));pt.position.set(-.55,1.9,0),pt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},Ys.add(pt),Wo.push(pt)}const dr=new Rn;Ze.add(dr),Ye.current=dr;const gs=35,Ur=new Er(.16,8,8),xs=[];for(let Nt=0;Nt<gs;Nt++){const pt=new Oe(Ur,new Gi({color:14870768,transparent:!0,opacity:.4}));pt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),dr.add(pt),xs.push(pt)}const Ks=new Sg,Or=new gt,Zs=Nt=>{var Fn,qn;const pt=Te.domElement.getBoundingClientRect();Or.x=(Nt.clientX-pt.left)/pt.width*2-1,Or.y=-((Nt.clientY-pt.top)/pt.height)*2+1,Ks.setFromCamera(Or,nt);const qt=Ks.intersectObjects([ht,tn,we,xt,Wt],!0);if(qt.length>0){let We=qt[0].object;for(;We&&!((Fn=We.userData)!=null&&Fn.interactiveType)&&We.parent;)We=We.parent;if(We&&((qn=We.userData)!=null&&qn.interactiveType)){Te.domElement.style.cursor="pointer",C(We.userData.name);return}}Te.domElement.style.cursor="default",C(null)},vs=Nt=>{var Fn,qn,We,kn;const pt=Te.domElement.getBoundingClientRect();Or.x=(Nt.clientX-pt.left)/pt.width*2-1,Or.y=-((Nt.clientY-pt.top)/pt.height)*2+1,Ks.setFromCamera(Or,nt);const qt=Ks.intersectObjects([ht,tn,we,xt,Wt],!0);if(qt.length>0){let dn=qt[0].object;for(;dn&&!((Fn=dn.userData)!=null&&Fn.interactiveType)&&dn.parent;)dn=dn.parent;((qn=dn==null?void 0:dn.userData)==null?void 0:qn.interactiveType)==="botoeira"?Mt():((We=dn==null?void 0:dn.userData)==null?void 0:We.interactiveType)==="central"?lt("central"):((kn=dn==null?void 0:dn.userData)==null?void 0:kn.interactiveType)==="fritadeira"&&lt("fritadeira")}};Te.domElement.addEventListener("mousemove",Zs),Te.domElement.addEventListener("click",vs);const Qs=()=>{if(!e.current||!O.current||!D.current)return;const Nt=e.current.clientWidth,pt=e.current.clientHeight,qt=Nt<768;D.current.aspect=Nt/pt,D.current.fov=qt?58:45,D.current.updateProjectionMatrix(),O.current.setSize(Nt,pt)};window.addEventListener("resize",Qs);let qa;const Di=new c1,Js=()=>{qa=requestAnimationFrame(Js);const Nt=Di.getDelta(),pt=Di.getElapsedTime();nt.position.lerp(te.current,.05),U.target.lerp(de.current,.05),U.update();const qt=v.current,Fn=l.current;if(qt==="HEATING"||qt==="FIRE_ALARM"){On.visible=!0,Ir.visible=!0,qe.current.visible=!1,Ye.current.visible=!1;const qn=qt==="FIRE_ALARM"?1:Math.max(.2,(Fn-.18)/.24);if(ee.current&&(ee.current.intensity=(2.5+Math.sin(pt*20)*1.5)*qn,ee.current.color.setHex(Math.random()>.3?16729344:16755200)),Mi.forEach((We,kn)=>{We.visible=!0,We.position.y+=We.userData.speedY*Nt,We.position.x+=Math.sin(pt*10+kn)*.006;const dn=(We.position.y-We.userData.baseY)/1;We.scale.setScalar(Math.max(.01,(1-dn)*We.userData.scale*qn)),We.material.opacity=1-dn,We.position.y>We.userData.baseY+.9&&(We.position.y=We.userData.baseY,We.position.x=-.55+(Math.random()-.5)*.5,We.position.z=(Math.random()-.5)*.4)}),Go.forEach(We=>{We.visible=!0,We.position.y+=We.userData.speedY*Nt,We.scale.setScalar(qn),We.position.y>We.userData.maxH&&(We.position.y=1.3,We.position.x=-.55+(Math.random()-.5)*.4)}),qt==="FIRE_ALARM"){const We=Math.sin(pt*24)>0;ie.current&&se.current&&(ie.current.intensity=We?5:0,se.current.material.emissive=We?new Ct(16711680):new Ct(0))}}else if(qt==="SUPPRESSION"){On.visible=!0,qe.current.visible=!0,Ye.current.visible=!0,Mi.forEach(We=>{We.scale.multiplyScalar(.92),We.scale.x<.05&&(We.visible=!1)}),ee.current&&(ee.current.intensity=Math.max(0,ee.current.intensity-Nt*4)),Wo.forEach((We,kn)=>{We.visible=!0,We.position.y-=We.userData.speed*Nt,We.position.x+=Math.sin(pt*15+kn)*.01,We.position.y<1.05&&(We.position.y=We.userData.origY,We.position.x=-.55+We.userData.spread)}),F.current&&(F.current.visible=!0,F.current.scale.lerp(new K(1,1,1),.08)),xs.forEach((We,kn)=>{We.visible=!0,We.position.y+=Math.sin(pt*3+kn)*.004,We.position.x+=Math.cos(pt*2+kn)*.004});const qn=Math.sin(pt*30)>0;ie.current&&se.current&&(ie.current.intensity=qn?4:.2,se.current.material.emissive=qn?new Ct(16711680):new Ct(3342336))}else qt==="EXTINGUISHED"?(On.visible=!1,Ir.visible=!1,qe.current.visible=!1,Ye.current.visible=!1,ee.current&&(ee.current.intensity=0),F.current&&(F.current.visible=!0,F.current.scale.set(1,1,1)),ie.current&&se.current&&(ie.current.intensity=0,se.current.material.emissive=new Ct(0))):(On.visible=!1,Ir.visible=!1,qe.current.visible=!1,Ye.current.visible=!1,ee.current&&(ee.current.intensity=0),F.current&&(F.current.visible=!1),ie.current&&se.current&&(ie.current.intensity=0,se.current.material.emissive=new Ct(0)));B.current&&(qt==="FIRE_ALARM"||qt==="SUPPRESSION"||qt==="EXTINGUISHED"?b.current&&B.current.map!==b.current&&(B.current.map=b.current,B.current.emissiveMap=b.current,B.current.emissiveIntensity=1,B.current.needsUpdate=!0):$.current&&B.current.map!==$.current&&(B.current.map=$.current,B.current.emissiveMap=$.current,B.current.emissiveIntensity=.95,B.current.needsUpdate=!0)),Te.render(Ze,nt)};return Js(),()=>{cancelAnimationFrame(qa),window.removeEventListener("resize",Qs),Te.domElement.removeEventListener("mousemove",Zs),Te.domElement.removeEventListener("click",vs),Te.dispose()}},[Mt,Me]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"splash-hero",className:"relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none"}),u.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center px-4 text-center",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"Outfire Sistemas Contra Incêndio",className:"w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"})}),u.jsx("button",{onClick:St,"aria-label":"Descer para a simulação da cozinha",className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none",children:u.jsx("div",{className:"w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all",children:u.jsx(Cm,{className:"w-6 h-6 text-[#d4af37] animate-bounce"})})})]}),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[450vh] bg-[#07080a]",children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none",children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(V0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(gc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(Do,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(Do,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(Ev,{className:"w-4 h-4 text-cyan-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(Sc,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(Do,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(jv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(W0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),_&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(j0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[_," — Clique para interagir"]})]}),Fe&&u.jsxs("div",{className:"absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse",children:[u.jsxs("div",{className:"flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Nm,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"Acionador Manual Disparado • Contagem de Segurança"})]}),u.jsxs("div",{className:"font-mono text-2xl font-black text-[#67e8f9]",children:["Supressão em ",S,"s"]}),u.jsxs("p",{className:"text-[11px] text-gray-200",children:["O saponificante ",u.jsx("strong",{children:"NÃO"})," é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento."]}),u.jsxs("button",{onClick:$t,className:"mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30",children:[u.jsx(mc,{className:"w-3.5 h-3.5 text-white"}),u.jsx("span",{children:"Toque aqui para Abortar Disparo"})]})]}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden",children:[u.jsx("button",{onClick:At,"aria-label":"Avançar simulação para baixo",className:"w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0",children:u.jsx(Cm,{className:`w-5 h-5 text-[#d4af37] ${m!=="STANDBY"?"animate-bounce":"animate-pulse"}`})}),u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[m==="STANDBY"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-gray-200",children:["Cozinha Industrial em Standby • ",u.jsx("span",{className:"text-[#d4af37]",children:"Role para descer"})]})]}),m==="HEATING"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0",children:"FASE 1"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-amber-200 truncate",children:["Princípio de Incêndio (Óleo a ",A.temp,"°C) — Continue descendo"]})]}),m==="FIRE_ALARM"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:"FASE 2"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-red-200 truncate",children:["Alarme Térmico 145°C Disparado • Contagem: ",S,"s"]})]}),m==="SUPPRESSION"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]",children:"FASE 3"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-cyan-200 truncate",children:"Supressão Ativa: Saponificante Classe K + CO2 no duto"})]}),m==="EXTINGUISHED"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0",children:"FASE 4"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-emerald-200 truncate",children:"Cozinha Preservada • NBR 14518 Cumprida — Continue descendo"})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("button",{onClick:Mt,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED"||Fe,className:`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Nm,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(Fe||m==="FIRE_ALARM")&&u.jsxs("button",{onClick:$t,className:"py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95",children:[u.jsx(mc,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Abortar Disparo"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:Ut,className:"py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(G0,{className:"w-3 h-3"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1",children:[u.jsx(Mv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>lt("geral"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>lt("central"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>lt("fritadeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>lt("botoeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})]})})]})},Mb=()=>{const[s,e]=Ue.useState("3d"),t=Ue.useRef(null),r=Ue.useRef(null),[o,l]=Ue.useState(!1),d=Ue.useRef(!1);d.current=o;const[f,p]=Ue.useState(!1),m=Ue.useRef(!1);m.current=f;const[x,v]=Ue.useState(null),S=Ue.useRef(null),M=Ue.useRef(null),T=Ue.useRef(null),A=Ue.useRef(null),y=()=>{l(P=>!P)},_=()=>{p(P=>!P)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Ue.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const P=r.current.clientWidth,I=r.current.clientHeight,D=new xg;D.background=new Ct(921879);const O=new Zn(40,P/I,.1,100);O.position.set(1.8,1.2,2.2),A.current=O;const z=new Cg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});z.setSize(P,I),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.shadowMap.enabled=!0,z.shadowMap.type=Ff,z.toneMapping=Mc,z.toneMappingExposure=1.15;const b=new Rg(O,z.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.minDistance=1.2,b.maxDistance=6,b.target.set(0,0,0),T.current=b;const N=new yg(16774890,.9);D.add(N);const B=new Pf(16777215,1.5);B.position.set(3,4,3),B.castShadow=!0,D.add(B);const $=new Pf(13938487,.85);$.position.set(-3,-2,-3),D.add($);const Z=new Gi({color:0,transparent:!0,opacity:.35}),ie=new Oe(new Wn(2.2,1.4),Z);ie.rotation.x=-Math.PI/2,ie.position.set(0,-.65,0),D.add(ie);const ee=new _g().load("/assets/tampa-central-moderna.png");ee.colorSpace=Ln;const q=new wt({color:1316379,metalness:.85,roughness:.35}),X=new wt({map:ee,metalness:.2,roughness:.35}),he=[q,q,q,q,X,q],ae=new Oe(new Gt(1.4,1,.58),he);ae.castShadow=!0,ae.receiveShadow=!0,D.add(ae);const F=new Gi({color:460810}),oe=new Oe(new Wn(.88,.22),F);oe.rotation.x=-Math.PI/2,oe.position.set(0,.501,-.05),D.add(oe);const Ne=new Oe(new Wn(.7,.22),F);Ne.rotation.x=Math.PI/2,Ne.position.set(0,-.501,-.05),D.add(Ne);const qe=Ng(),Ye=new Nf(qe);Ye.colorSpace=Ln;const te=new wt({map:Ye,roughness:.2,metalness:.05,emissive:16777215,emissiveMap:Ye,emissiveIntensity:.9}),de=new Oe(new Wn(.219,.164),te);de.position.set(0,0,.295),D.add(de);const Me=new wt({color:1579552,metalness:.9,roughness:.35}),Fe=new Oe(new Gt(.238,.182,.008),Me);Fe.position.set(0,0,.291),D.add(Fe);const Pe=new wt({color:11580344,metalness:.95,roughness:.2}),Mt=new en(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([me,fe])=>{const xe=new Oe(Mt,Pe);xe.rotation.x=Math.PI/2,xe.position.set(me,fe,.295),D.add(xe)});const $t=new Gi({color:460810}),St=new Oe(new Wn(.04,.12),$t);St.rotation.y=Math.PI,St.position.set(-.5,.3,-.291),D.add(St);const At=new Oe(new Wn(.04,.12),$t);At.rotation.y=Math.PI,At.position.set(.5,.3,-.291),D.add(At);const Ut=new wt({color:11580344,metalness:.9,roughness:.2}),lt=new en(.012,.012,.015,8),it=new Rn;it.position.set(0,0,-.05),D.add(it),S.current=it;const j=new wt({color:2040619,metalness:.8,roughness:.35}),Ze=new Oe(new Gt(.95,.02,.25),j);Ze.position.set(0,.505,0),Ze.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},it.add(Ze),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([me,fe,xe])=>{const Je=new Oe(lt,Ut);Je.position.set(me,fe,xe),it.add(Je)});const dt=new wt({color:13948120,metalness:.9,roughness:.2}),nt=new Oe(new Gt(.85,.44,.2),dt);nt.position.set(0,.27,0),nt.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},it.add(nt);const Te=new Gi({color:15381256}),U=new Oe(new Wn(.24,.08),Te);U.position.set(0,.27,.101),it.add(U);const w=new Rn;w.position.set(0,0,-.05),D.add(w),M.current=w;const H=new wt({color:2040619,metalness:.8,roughness:.35}),pe=new Oe(new Gt(.74,.02,.24),H);pe.position.set(0,-.505,0),pe.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},w.add(pe),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([me,fe,xe])=>{const Je=new Oe(lt,Ut);Je.position.set(me,fe,xe),w.add(Je)});const ge=new wt({color:592397,roughness:.5}),ue=new Oe(new Gt(.3,.38,.18),ge);ue.position.set(-.18,-.305,0),ue.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},w.add(ue);const Be=new Oe(new Gt(.3,.38,.18),ge);Be.position.set(.18,-.305,0),Be.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},w.add(Be);const Ee=new wt({color:2450411,metalness:.8}),He=new wt({color:15680580,metalness:.8}),at=new Oe(new en(.012,.012,.03),Ee);at.position.set(-.24,-.1,.05),w.add(at);const _e=new Oe(new en(.012,.012,.03),He);_e.position.set(-.12,-.1,.05),w.add(_e);const Re=new Oe(new en(.012,.012,.03),Ee);Re.position.set(.12,-.1,.05),w.add(Re);const Ve=new Oe(new en(.012,.012,.03),He);Ve.position.set(.24,-.1,.05),w.add(Ve);const ze=new Sg,we=new gt,mt=me=>{var Je,Dt;const fe=z.domElement.getBoundingClientRect();we.x=(me.clientX-fe.left)/fe.width*2-1,we.y=-((me.clientY-fe.top)/fe.height)*2+1,ze.setFromCamera(we,O);const xe=ze.intersectObjects([it,w,ae],!0);if(xe.length>0){let bt=xe[0].object;if((Je=bt.userData)!=null&&Je.isPsu){z.domElement.style.cursor="pointer",v(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((Dt=bt.userData)!=null&&Dt.isBattery){z.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{z.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}z.domElement.style.cursor="default",v(null)},G=me=>{var Je,Dt;const fe=z.domElement.getBoundingClientRect();we.x=(me.clientX-fe.left)/fe.width*2-1,we.y=-((me.clientY-fe.top)/fe.height)*2+1,ze.setFromCamera(we,O);const xe=ze.intersectObjects([it,w],!0);if(xe.length>0){const bt=xe[0].object;(Je=bt.userData)!=null&&Je.isPsu?l(pn=>!pn):(Dt=bt.userData)!=null&&Dt.isBattery&&p(pn=>!pn)}};z.domElement.addEventListener("mousemove",mt),z.domElement.addEventListener("click",G);const De=()=>{if(!r.current||!z||!O)return;const me=r.current.clientWidth,fe=r.current.clientHeight;O.aspect=me/fe,O.updateProjectionMatrix(),z.setSize(me,fe)};window.addEventListener("resize",De);let Se;const Le=()=>{Se=requestAnimationFrame(Le);const me=d.current?.52:0;S.current&&(S.current.position.y+=(me-S.current.position.y)*.12);const fe=m.current?-.52:0;M.current&&(M.current.position.y+=(fe-M.current.position.y)*.12),b.update(),z.render(D,O)};return Le(),()=>{cancelAnimationFrame(Se),window.removeEventListener("resize",De),z.domElement.removeEventListener("mousemove",mt),z.domElement.removeEventListener("click",G),z.dispose()}},[s]);const L=[{icon:Cv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:Am,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Bv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:Sv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Od,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:V0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(Am,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(Vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(G0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(ko,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(kv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(is,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(oc,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(z0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:L.map((P,I)=>{const D=P.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(D,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:P.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:P.desc})]},I)})})]})]})},wb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Od,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(mc,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Do,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(mc,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Od,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(Sc,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(ko,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),bb=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Iv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(Tv,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(Sc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(bv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(yv,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Eb=({onAddToCart:s})=>{const[e,t]=Ue.useState(1),[r,o]=Ue.useState(9),[l,d]=Ue.useState(!0),[f,p]=Ue.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const _=[...f];for(let C=f.length+1;C<=y;C++)_.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(_)}else y<f.length&&p(f.slice(0,y))},x=(y,_)=>{const C=[...f];C[y].lengthMeters=Math.max(1,Math.min(8,Number(_.toFixed(1)))),p(C)},v=(y,_)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},L={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},P={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},I=[...f];I[y].appliances.push({id:Math.random().toString(36).substring(7),name:C[_],type:_,icon:L[_],widthMeters:P[_]}),p(I)},S=(y,_)=>{const C=[...f];C[y].appliances.splice(_,1),p(C)},M=Ue.useMemo(()=>{let y=0,_=0,C=0,L=0;f.forEach(q=>{y+=q.appliances.length,_+=2,l&&(C+=1);const X=Math.max(1,Math.round(q.lengthMeters/.9));L+=X});const P=y+_+C,I=P*2,D=Math.max(9,I);let O=9;D>9&&D<=16?O=16:D>16&&D<=25?O=25:D>25&&(O=Math.ceil(D/9)*9);const z=Math.max(1,Math.ceil(r/3)),b=z,N=Math.max(10,Math.ceil(r/3*5)),B=N<=10?10:N<=25?25:45,$=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,Z=e===1?8900:e===2?14500:19800,ie=P*185+z*210,se=L*295+b*320,ee=Z+ie+se+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:_,damperNozzlesCount:C,totalSaponificanteNozzles:P,saponificanteLiters:D,recommendedSaponificanteCylinderLiters:O,hoodSensorsCount:L,co2NozzlesCount:z,ductSensorsCount:b,co2Kg:N,recommendedCo2CylinderKg:B,centralModel:$,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:ee}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;y+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,y+=`🏢 *Configuração da Cozinha:*
`,y+=`• Quantidade de Coifas: ${e} independente(s)
`,y+=`• Comprimento do Duto de Exaustão: ${r} metros

`,f.forEach((C,L)=>{y+=`📍 *Coifa ${L+1} (${C.lengthMeters}m):*
`,y+=`  Equipamentos sob a coifa: ${C.appliances.map(P=>P.name).join(", ")||"Nenhum"}
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

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const _=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${_}`,"_blank")},A=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(B0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(W0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,_)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:_+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:C=>x(_,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((C,L)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:C.icon}),u.jsx("span",{className:"font-medium",children:C.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(_,L),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx(H0,{className:"w-3.5 h-3.5"})})]},C.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>v(_,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ro,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>v(_,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ro,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>v(_,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ro,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>v(_,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Ro,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,_)=>{const C=180+_*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:C,y1:"24",x2:C,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:C,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${C-4},43 ${C+4},43 ${C},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:C,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:C+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+18.5}, 37.5)`}),u.jsx("text",{x:C+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${_}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,_)=>{const C=e,L=635,P=C===1?0:C===2?30:18,I=(L-(C-1)*P)/C,D=95+_*(I+P),O=C===1?84:C===2?65:52,z=D+(I-O)/2,b=O+16,N=z-8,B=66,$=38,Z=y.appliances.length>0?y.appliances:[{id:`app-${_}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:z,y:"58",width:O,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${_}`,children:[u.jsx("rect",{x:N-2,y:B,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N-2,y:B+$-4,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N,y:B+3,width:b,height:$-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:N+b-2,y:B+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:N+b+4,cy:B+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:N+b/2,y:B+18,fill:"#ffffff",fontSize:C===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",C>1?`#${_+1}`:""]}),u.jsx("text",{x:N+b/2,y:B+27,fill:"#fca5a5",fontSize:C===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:_===0?95:D-P,y1:"122",x2:D+I-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${D},158 ${D+I*.12},118 ${D+I*.88},118 ${D+I},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:D,y:"158",width:I,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:D+I/2,y:"172",fill:"#f8fafc",fontSize:C===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",C>1?`${_+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",_+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:D+I*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+I*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:D+I*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+I*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((ie,se,ee)=>{const q=D+25+se*((I-50)/Math.max(1,ee.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:q,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:q,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${_}-${se}`)}),u.jsx("rect",{x:D,y:"240",width:I,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),Z.map((ie,se)=>{const ee=Z.length,q=(I-12)/ee,X=D+6+se*q,he=q-6;return u.jsxs("g",{children:[u.jsx("rect",{x:X,y:"245",width:he,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:X+he/2,y:"272",fill:"#ffffff",fontSize:C===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:ie.name.split(" ")[0]}),u.jsx("text",{x:X+he/2,y:"286",fill:"#94a3b8",fontSize:C===3?"5.5":"6.5",textAnchor:"middle",children:ie.type.toUpperCase()}),u.jsx("line",{x1:X+he/2,y1:"178",x2:X+he/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${X+he/2-4},225 ${X+he/2+4},225 ${X+he/2},233`,fill:"#d4af37"}),u.jsx("text",{x:X+he/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},ie.id||`app-${_}-${se}`)})]},`hood-block-${y.id||_}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(is,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Ar,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(_v,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Tb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Cb=({onAddToCart:s})=>{const[e,t]=Ue.useState("all"),[r,o]=Ue.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=Tb.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(xc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Uv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(ko,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(wv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(xc,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(Ar,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Ab=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Tm,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(Ud,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(Tm,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(z0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Baixar PDF"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(zv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(gc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Rb=()=>{const[s,e]=Ue.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(ko,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(j0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Rv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Nb=()=>{const[s,e]=Ue.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Ue.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(Ar,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(Ar,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(Ar,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Av,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(is,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Ov,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Pb=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=Ue.useState(!1),[p,m]=Ue.useState(!1);if(!s)return null;const x=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),v=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{M+=`${A+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Pm,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Pm,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Dv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(Ro,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx(H0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(Ar,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Rm,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(gc,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(Fd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(Sc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Lv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Rm,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(gc,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Db=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(Pv,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Lb(){const[s,e]=Ue.useState([]),[t,r]=Ue.useState(!1),o=m=>{e(x=>x.find(S=>S.product.id===m.id)?x.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(S=>{if(S.product.id===m){const M=S.quantity+x;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(x=>x.filter(v=>v.product.id!==m))},f=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(Gv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(Sb,{}),u.jsx(Mb,{}),u.jsx(wb,{}),u.jsx(bb,{}),u.jsx(Eb,{onAddToCart:o}),u.jsx(Cb,{onAddToCart:o}),u.jsx(Ab,{}),u.jsx(Rb,{})]}),u.jsx(Nb,{}),u.jsx(Pb,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Db,{})]})}pv.createRoot(document.getElementById("root")).render(u.jsx(ov.StrictMode,{children:u.jsx(Lb,{})}));
