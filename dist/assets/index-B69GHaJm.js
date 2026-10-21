(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function k0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Qu={exports:{}},bo={},Ju={exports:{}},Nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function rv(){if(_m)return Nt;_m=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function S(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function y(F,le,Ne){this.props=F,this.context=le,this.refs=A,this.updater=Ne||M}y.prototype.isReactComponent={},y.prototype.setState=function(F,le){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,le,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=y.prototype;function C(F,le,Ne){this.props=F,this.context=le,this.refs=A,this.updater=Ne||M}var L=C.prototype=new _;L.constructor=C,T(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(F,le,Ne){var qe,Ge={},te=null,de=null;if(le!=null)for(qe in le.ref!==void 0&&(de=le.ref),le.key!==void 0&&(te=""+le.key),le)U.call(le,qe)&&!O.hasOwnProperty(qe)&&(Ge[qe]=le[qe]);var _e=arguments.length-2;if(_e===1)Ge.children=Ne;else if(1<_e){for(var Be=Array(_e),De=0;De<_e;De++)Be[De]=arguments[De+2];Ge.children=Be}if(F&&F.defaultProps)for(qe in _e=F.defaultProps,_e)Ge[qe]===void 0&&(Ge[qe]=_e[qe]);return{$$typeof:s,type:F,key:te,ref:de,props:Ge,_owner:D.current}}function b(F,le){return{$$typeof:s,type:F.type,key:le,ref:F.ref,props:F.props,_owner:F._owner}}function N(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var le={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Ne){return le[Ne]})}var $=/\/+/g;function Z(F,le){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):le.toString(36)}function ie(F,le,Ne,qe,Ge){var te=typeof F;(te==="undefined"||te==="boolean")&&(F=null);var de=!1;if(F===null)de=!0;else switch(te){case"string":case"number":de=!0;break;case"object":switch(F.$$typeof){case s:case e:de=!0}}if(de)return de=F,Ge=Ge(de),F=qe===""?"."+Z(de,0):qe,P(Ge)?(Ne="",F!=null&&(Ne=F.replace($,"$&/")+"/"),ie(Ge,le,Ne,"",function(De){return De})):Ge!=null&&(N(Ge)&&(Ge=b(Ge,Ne+(!Ge.key||de&&de.key===Ge.key?"":(""+Ge.key).replace($,"$&/")+"/")+F)),le.push(Ge)),1;if(de=0,qe=qe===""?".":qe+":",P(F))for(var _e=0;_e<F.length;_e++){te=F[_e];var Be=qe+Z(te,_e);de+=ie(te,le,Ne,Be,Ge)}else if(Be=S(F),typeof Be=="function")for(F=Be.call(F),_e=0;!(te=F.next()).done;)te=te.value,Be=qe+Z(te,_e++),de+=ie(te,le,Ne,Be,Ge);else if(te==="object")throw le=String(F),Error("Objects are not valid as a React child (found: "+(le==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":le)+"). If you meant to render a collection of children, use an array instead.");return de}function re(F,le,Ne){if(F==null)return F;var qe=[],Ge=0;return ie(F,qe,"","",function(te){return le.call(Ne,te,Ge++)}),qe}function ee(F){if(F._status===-1){var le=F._result;le=le(),le.then(function(Ne){(F._status===0||F._status===-1)&&(F._status=1,F._result=Ne)},function(Ne){(F._status===0||F._status===-1)&&(F._status=2,F._result=Ne)}),F._status===-1&&(F._status=0,F._result=le)}if(F._status===1)return F._result.default;throw F._result}var Y={current:null},X={transition:null},fe={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:X,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Nt.Children={map:re,forEach:function(F,le,Ne){re(F,function(){le.apply(this,arguments)},Ne)},count:function(F){var le=0;return re(F,function(){le++}),le},toArray:function(F){return re(F,function(le){return le})||[]},only:function(F){if(!N(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Nt.Component=y,Nt.Fragment=t,Nt.Profiler=o,Nt.PureComponent=C,Nt.StrictMode=r,Nt.Suspense=p,Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,Nt.act=oe,Nt.cloneElement=function(F,le,Ne){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var qe=T({},F.props),Ge=F.key,te=F.ref,de=F._owner;if(le!=null){if(le.ref!==void 0&&(te=le.ref,de=D.current),le.key!==void 0&&(Ge=""+le.key),F.type&&F.type.defaultProps)var _e=F.type.defaultProps;for(Be in le)U.call(le,Be)&&!O.hasOwnProperty(Be)&&(qe[Be]=le[Be]===void 0&&_e!==void 0?_e[Be]:le[Be])}var Be=arguments.length-2;if(Be===1)qe.children=Ne;else if(1<Be){_e=Array(Be);for(var De=0;De<Be;De++)_e[De]=arguments[De+2];qe.children=_e}return{$$typeof:s,type:F.type,key:Ge,ref:te,props:qe,_owner:de}},Nt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},Nt.createElement=z,Nt.createFactory=function(F){var le=z.bind(null,F);return le.type=F,le},Nt.createRef=function(){return{current:null}},Nt.forwardRef=function(F){return{$$typeof:f,render:F}},Nt.isValidElement=N,Nt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ee}},Nt.memo=function(F,le){return{$$typeof:m,type:F,compare:le===void 0?null:le}},Nt.startTransition=function(F){var le=X.transition;X.transition={};try{F()}finally{X.transition=le}},Nt.unstable_act=oe,Nt.useCallback=function(F,le){return Y.current.useCallback(F,le)},Nt.useContext=function(F){return Y.current.useContext(F)},Nt.useDebugValue=function(){},Nt.useDeferredValue=function(F){return Y.current.useDeferredValue(F)},Nt.useEffect=function(F,le){return Y.current.useEffect(F,le)},Nt.useId=function(){return Y.current.useId()},Nt.useImperativeHandle=function(F,le,Ne){return Y.current.useImperativeHandle(F,le,Ne)},Nt.useInsertionEffect=function(F,le){return Y.current.useInsertionEffect(F,le)},Nt.useLayoutEffect=function(F,le){return Y.current.useLayoutEffect(F,le)},Nt.useMemo=function(F,le){return Y.current.useMemo(F,le)},Nt.useReducer=function(F,le,Ne){return Y.current.useReducer(F,le,Ne)},Nt.useRef=function(F){return Y.current.useRef(F)},Nt.useState=function(F){return Y.current.useState(F)},Nt.useSyncExternalStore=function(F,le,Ne){return Y.current.useSyncExternalStore(F,le,Ne)},Nt.useTransition=function(){return Y.current.useTransition()},Nt.version="18.3.1",Nt}var ym;function Ff(){return ym||(ym=1,Ju.exports=rv()),Ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function sv(){if(Sm)return bo;Sm=1;var s=Ff(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var x,v={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(f&&f.defaultProps)for(x in p=f.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:f,key:S,ref:M,props:v,_owner:o.current}}return bo.Fragment=t,bo.jsx=d,bo.jsxs=d,bo}var Mm;function av(){return Mm||(Mm=1,Qu.exports=sv()),Qu.exports}var u=av(),Oe=Ff();const ov=k0(Oe);var Bl={},ed={exports:{}},oi={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wm;function lv(){return wm||(wm=1,(function(s){function e(X,fe){var oe=X.length;X.push(fe);e:for(;0<oe;){var F=oe-1>>>1,le=X[F];if(0<o(le,fe))X[F]=fe,X[oe]=le,oe=F;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var fe=X[0],oe=X.pop();if(oe!==fe){X[0]=oe;e:for(var F=0,le=X.length,Ne=le>>>1;F<Ne;){var qe=2*(F+1)-1,Ge=X[qe],te=qe+1,de=X[te];if(0>o(Ge,oe))te<le&&0>o(de,Ge)?(X[F]=de,X[te]=oe,F=te):(X[F]=Ge,X[qe]=oe,F=qe);else if(te<le&&0>o(de,oe))X[F]=de,X[te]=oe,F=te;else break e}}return fe}function o(X,fe){var oe=X.sortIndex-fe.sortIndex;return oe!==0?oe:X.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],x=1,v=null,S=3,M=!1,T=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var fe=t(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=X)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=t(m)}}function P(X){if(A=!1,L(X),!T)if(t(p)!==null)T=!0,ee(U);else{var fe=t(m);fe!==null&&Y(P,fe.startTime-X)}}function U(X,fe){T=!1,A&&(A=!1,_(z),z=-1),M=!0;var oe=S;try{for(L(fe),v=t(p);v!==null&&(!(v.expirationTime>fe)||X&&!B());){var F=v.callback;if(typeof F=="function"){v.callback=null,S=v.priorityLevel;var le=F(v.expirationTime<=fe);fe=s.unstable_now(),typeof le=="function"?v.callback=le:v===t(p)&&r(p),L(fe)}else r(p);v=t(p)}if(v!==null)var Ne=!0;else{var qe=t(m);qe!==null&&Y(P,qe.startTime-fe),Ne=!1}return Ne}finally{v=null,S=oe,M=!1}}var D=!1,O=null,z=-1,b=5,N=-1;function B(){return!(s.unstable_now()-N<b)}function $(){if(O!==null){var X=s.unstable_now();N=X;var fe=!0;try{fe=O(!0,X)}finally{fe?Z():(D=!1,O=null)}}else D=!1}var Z;if(typeof C=="function")Z=function(){C($)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,re=ie.port2;ie.port1.onmessage=$,Z=function(){re.postMessage(null)}}else Z=function(){y($,0)};function ee(X){O=X,D||(D=!0,Z())}function Y(X,fe){z=y(function(){X(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ee(U))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(X){switch(S){case 1:case 2:case 3:var fe=3;break;default:fe=S}var oe=S;S=fe;try{return X()}finally{S=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,fe){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=S;S=X;try{return fe()}finally{S=oe}},s.unstable_scheduleCallback=function(X,fe,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,X){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=oe+le,X={id:x++,callback:fe,priorityLevel:X,startTime:oe,expirationTime:le,sortIndex:-1},oe>F?(X.sortIndex=oe,e(m,X),t(p)===null&&X===t(m)&&(A?(_(z),z=-1):A=!0,Y(P,oe-F))):(X.sortIndex=le,e(p,X),T||M||(T=!0,ee(U))),X},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(X){var fe=S;return function(){var oe=S;S=fe;try{return X.apply(this,arguments)}finally{S=oe}}}})(nd)),nd}var bm;function cv(){return bm||(bm=1,td.exports=lv()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Em;function uv(){if(Em)return oi;Em=1;var s=Ff(),e=cv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function S(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);y[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),B=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),re=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),X=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function le(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Ne=!1;function qe(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var h=ue.stack.split(`
`),g=c.stack.split(`
`),E=h.length-1,k=g.length-1;1<=E&&0<=k&&h[E]!==g[k];)k--;for(;1<=E&&0<=k;E--,k--)if(h[E]!==g[k]){if(E!==1||k!==1)do if(E--,k--,0>k||h[E]!==g[k]){var V=`
`+h[E].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=E&&0<=k);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?le(n):""}function Ge(n){switch(n.tag){case 5:return le(n.type);case 16:return le("Lazy");case 13:return le("Suspense");case 19:return le("SuspenseList");case 0:case 2:case 15:return n=qe(n.type,!1),n;case 11:return n=qe(n.type.render,!1),n;case 1:return n=qe(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case b:return"Profiler";case z:return"StrictMode";case Z:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case re:return i=n.displayName||null,i!==null?i:te(n.type)||"Memo";case ee:i=n._payload,n=n._init;try{return te(n(i))}catch{}}return null}function de(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Be(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Be(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function yt(n){n._valueTracker||(n._valueTracker=De(n))}function Zt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Be(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function St(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Pt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ut(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Ht(n,i){gt(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Qe(n,i.type,a):i.hasOwnProperty("defaultValue")&&Qe(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Qe(n,i,a){(i!=="number"||St(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ze=Array.isArray;function Le(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ie(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ze(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function w(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function H(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ae,Ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ae=ae||document.createElement("div"),ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function we(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){at.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Ce(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var He=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(n,i){if(i){if(He[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Pe=null,ge=null,Fe=null;function xe(n){if(n=lo(n)){if(typeof Pe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=el(i),Pe(n.stateNode,n.type,i))}}function me(n){ge?Fe?Fe.push(n):Fe=[n]:ge=n}function Ee(){if(ge){var n=ge,i=Fe;if(Fe=ge=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function lt(n,i){return n(i)}function ot(){}var it=!1;function qt(n,i,a){if(it)return n(i,a);it=!0;try{return lt(n,i,a)}finally{it=!1,(ge!==null||Fe!==null)&&(ot(),Ee())}}function Wt(n,i){var a=n.stateNode;if(a===null)return null;var c=el(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Jn=!1;if(f)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){Jn=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{Jn=!1}function Pi(n,i,a,c,h,g,E,k,V){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Se){this.onError(Se)}}var Ki=!1,Di=null,hr=!1,di=null,pr={onError:function(n){Ki=!0,Di=n}};function Wa(n,i,a,c,h,g,E,k,V){Ki=!1,Di=null,Pi.apply(pr,arguments)}function sn(n,i,a,c,h,g,E,k,V){if(Wa.apply(this,arguments),Ki){if(Ki){var ue=Di;Ki=!1,Di=null}else throw Error(t(198));hr||(hr=!0,di=ue)}}function fi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function mr(n){if(fi(n)!==n)throw Error(t(188))}function gr(n){var i=n.alternate;if(!i){if(i=fi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return mr(h),n;if(g===c)return mr(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var E=!1,k=h.child;k;){if(k===a){E=!0,a=h,c=g;break}if(k===c){E=!0,c=h,a=g;break}k=k.sibling}if(!E){for(k=g.child;k;){if(k===a){E=!0,a=g,c=h;break}if(k===c){E=!0,c=g,a=h;break}k=k.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Li(n){return n=gr(n),n!==null?jr(n):null}function jr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=jr(n);if(i!==null)return i;n=n.sibling}return null}var Ii=e.unstable_scheduleCallback,Ks=e.unstable_cancelCallback,Xa=e.unstable_shouldYield,Zs=e.unstable_requestPaint,Qt=e.unstable_now,R=e.unstable_getCurrentPriorityLevel,q=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,se=e.unstable_NormalPriority,Q=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,je=null,Ae=null;function $e(n){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var Ve=Math.clz32?Math.clz32:wt,ct=Math.log,rt=Math.LN2;function wt(n){return n>>>=0,n===0?32:31-(ct(n)/rt|0)|0}var Dt=64,Xt=4194304;function Gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,E=a&268435455;if(E!==0){var k=E&~h;k!==0?c=Gt(k):(g&=E,g!==0&&(c=Gt(g)))}else E=a&~h,E!==0?c=Gt(E):g!==0&&(c=Gt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ve(i),h=1<<a,c|=n[a],i&=~h;return c}function st(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-Ve(g),k=1<<E,V=h[E];V===-1?((k&a)===0||(k&c)!==0)&&(h[E]=st(k,i)):V<=i&&(n.expiredLanes|=k),g&=~k}}function Rt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function _n(){var n=Dt;return Dt<<=1,(Dt&4194240)===0&&(Dt=64),n}function ei(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ft(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ve(i),n[i]=a}function Ui(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ve(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function kt(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ve(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var xt=0;function Tn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var fn,hn,xr,ti,qa,Qs=!1,_s=[],yn=null,wi=null,Oi=null,Vr=new Map,Gr=new Map,Fi=[],Ya="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hr(n,i){switch(n){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":wi=null;break;case"mouseover":case"mouseout":Oi=null;break;case"pointerover":case"pointerout":Vr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gr.delete(i.pointerId)}}function hi(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=lo(i),i!==null&&hn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Cc(n,i,a,c,h){switch(i){case"focusin":return yn=hi(yn,n,i,a,c,h),!0;case"dragenter":return wi=hi(wi,n,i,a,c,h),!0;case"mouseover":return Oi=hi(Oi,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Vr.set(g,hi(Vr.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Gr.set(g,hi(Gr.get(g)||null,n,i,a,c,h)),!0}return!1}function Wo(n){var i=Es(n.target);if(i!==null){var a=fi(i);if(a!==null){if(i=a.tag,i===13){if(i=zr(a),i!==null){n.blockedOn=i,qa(n.priority,function(){xr(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Wr(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=$a(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ft=c,a.target.dispatchEvent(c),ft=null}else return i=lo(a),i!==null&&hn(i),n.blockedOn=a,!1;i.shift()}return!0}function vr(n,i,a){Wr(n)&&a.delete(i)}function Ac(){Qs=!1,yn!==null&&Wr(yn)&&(yn=null),wi!==null&&Wr(wi)&&(wi=null),Oi!==null&&Wr(Oi)&&(Oi=null),Vr.forEach(vr),Gr.forEach(vr)}function ys(n,i){n.blockedOn===i&&(n.blockedOn=null,Qs||(Qs=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ac)))}function Xr(n){function i(h){return ys(h,n)}if(0<_s.length){ys(_s[0],n);for(var a=1;a<_s.length;a++){var c=_s[a];c.blockedOn===n&&(c.blockedOn=null)}}for(yn!==null&&ys(yn,n),wi!==null&&ys(wi,n),Oi!==null&&ys(Oi,n),Vr.forEach(i),Gr.forEach(i),a=0;a<Fi.length;a++)c=Fi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Fi.length&&(a=Fi[0],a.blockedOn===null);)Wo(a),a.blockedOn===null&&Fi.shift()}var Zi=P.ReactCurrentBatchConfig,Js=!0;function Rc(n,i,a,c){var h=xt,g=Zi.transition;Zi.transition=null;try{xt=1,Ss(n,i,a,c)}finally{xt=h,Zi.transition=g}}function Xo(n,i,a,c){var h=xt,g=Zi.transition;Zi.transition=null;try{xt=4,Ss(n,i,a,c)}finally{xt=h,Zi.transition=g}}function Ss(n,i,a,c){if(Js){var h=$a(n,i,a,c);if(h===null)Vc(n,i,c,ea,a),Hr(n,c);else if(Cc(h,n,i,a,c))c.stopPropagation();else if(Hr(n,c),i&4&&-1<Ya.indexOf(n)){for(;h!==null;){var g=lo(h);if(g!==null&&fn(g),g=$a(n,i,a,c),g===null&&Vc(n,i,c,ea,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Vc(n,i,c,null,a)}}var ea=null;function $a(n,i,a,c){if(ea=null,n=G(c),n=Es(n),n!==null)if(i=fi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zr(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ea=n,null}function Ka(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R()){case q:return 1;case ce:return 4;case se:case Q:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var pi=null,Qi=null,Ms=null;function Za(){if(Ms)return Ms;var n,i=Qi,a=i.length,c,h="value"in pi?pi.value:pi.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[g-c];c++);return Ms=h.slice(n,1<c?1-c:void 0)}function ws(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bs(){return!0}function Qa(){return!1}function Bn(n){function i(a,c,h,g,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?bs:Qa,this.isPropagationStopped=Qa,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),i}var Et={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ht=Bn(Et),Yt=oe({},Et,{view:0,detail:0}),mi=Bn(Yt),zn,tt,Yn,cn=oe({},Yt,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Pc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Yn&&(Yn&&n.type==="mousemove"?(zn=n.screenX-Yn.screenX,tt=n.screenY-Yn.screenY):tt=zn=0,Yn=n),zn)},movementY:function(n){return"movementY"in n?n.movementY:tt}}),lh=Bn(cn),Dg=oe({},cn,{dataTransfer:0}),Lg=Bn(Dg),Ig=oe({},Yt,{relatedTarget:0}),Nc=Bn(Ig),Ug=oe({},Et,{animationName:0,elapsedTime:0,pseudoElement:0}),Og=Bn(Ug),Fg=oe({},Et,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),kg=Bn(Fg),Bg=oe({},Et,{data:0}),ch=Bn(Bg),zg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Vg[n])?!!i[n]:!1}function Pc(){return Gg}var Hg=oe({},Yt,{key:function(n){if(n.key){var i=zg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ws(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Pc,charCode:function(n){return n.type==="keypress"?ws(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ws(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Wg=Bn(Hg),Xg=oe({},cn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uh=Bn(Xg),qg=oe({},Yt,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Pc}),Yg=Bn(qg),$g=oe({},Et,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kg=Bn($g),Zg=oe({},cn,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qg=Bn(Zg),Jg=[9,13,27,32],Dc=f&&"CompositionEvent"in window,Ja=null;f&&"documentMode"in document&&(Ja=document.documentMode);var ex=f&&"TextEvent"in window&&!Ja,dh=f&&(!Dc||Ja&&8<Ja&&11>=Ja),fh=" ",hh=!1;function ph(n,i){switch(n){case"keyup":return Jg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ta=!1;function tx(n,i){switch(n){case"compositionend":return mh(i);case"keypress":return i.which!==32?null:(hh=!0,fh);case"textInput":return n=i.data,n===fh&&hh?null:n;default:return null}}function nx(n,i){if(ta)return n==="compositionend"||!Dc&&ph(n,i)?(n=Za(),Ms=Qi=pi=null,ta=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return dh&&i.locale!=="ko"?null:i.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ix[n.type]:i==="textarea"}function xh(n,i,a,c){me(c),i=Zo(i,"onChange"),0<i.length&&(a=new ht("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var eo=null,to=null;function rx(n){Uh(n,0)}function qo(n){var i=aa(n);if(Zt(i))return n}function sx(n,i){if(n==="change")return i}var vh=!1;if(f){var Lc;if(f){var Ic="oninput"in document;if(!Ic){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Ic=typeof _h.oninput=="function"}Lc=Ic}else Lc=!1;vh=Lc&&(!document.documentMode||9<document.documentMode)}function yh(){eo&&(eo.detachEvent("onpropertychange",Sh),to=eo=null)}function Sh(n){if(n.propertyName==="value"&&qo(to)){var i=[];xh(i,to,n,G(n)),qt(rx,i)}}function ax(n,i,a){n==="focusin"?(yh(),eo=i,to=a,eo.attachEvent("onpropertychange",Sh)):n==="focusout"&&yh()}function ox(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return qo(to)}function lx(n,i){if(n==="click")return qo(i)}function cx(n,i){if(n==="input"||n==="change")return qo(i)}function ux(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ki=typeof Object.is=="function"?Object.is:ux;function no(n,i){if(ki(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!ki(n[h],i[h]))return!1}return!0}function Mh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wh(n,i){var a=Mh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Mh(a)}}function bh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?bh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Eh(){for(var n=window,i=St();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=St(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function dx(n){var i=Eh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&bh(a.ownerDocument.documentElement,a)){if(c!==null&&Uc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=wh(a,g);var E=wh(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var fx=f&&"documentMode"in document&&11>=document.documentMode,na=null,Oc=null,io=null,Fc=!1;function Th(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fc||na==null||na!==St(c)||(c=na,"selectionStart"in c&&Uc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),io&&no(io,c)||(io=c,c=Zo(Oc,"onSelect"),0<c.length&&(i=new ht("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=na)))}function Yo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ia={animationend:Yo("Animation","AnimationEnd"),animationiteration:Yo("Animation","AnimationIteration"),animationstart:Yo("Animation","AnimationStart"),transitionend:Yo("Transition","TransitionEnd")},kc={},Ch={};f&&(Ch=document.createElement("div").style,"AnimationEvent"in window||(delete ia.animationend.animation,delete ia.animationiteration.animation,delete ia.animationstart.animation),"TransitionEvent"in window||delete ia.transitionend.transition);function $o(n){if(kc[n])return kc[n];if(!ia[n])return n;var i=ia[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Ch)return kc[n]=i[a];return n}var Ah=$o("animationend"),Rh=$o("animationiteration"),Nh=$o("animationstart"),Ph=$o("transitionend"),Dh=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qr(n,i){Dh.set(n,i),l(i,[n])}for(var Bc=0;Bc<Lh.length;Bc++){var zc=Lh[Bc],hx=zc.toLowerCase(),px=zc[0].toUpperCase()+zc.slice(1);qr(hx,"on"+px)}qr(Ah,"onAnimationEnd"),qr(Rh,"onAnimationIteration"),qr(Nh,"onAnimationStart"),qr("dblclick","onDoubleClick"),qr("focusin","onFocus"),qr("focusout","onBlur"),qr(Ph,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mx=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Ih(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,sn(c,i,void 0,n),n.currentTarget=null}function Uh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var E=c.length-1;0<=E;E--){var k=c[E],V=k.instance,ue=k.currentTarget;if(k=k.listener,V!==g&&h.isPropagationStopped())break e;Ih(h,k,ue),g=V}else for(E=0;E<c.length;E++){if(k=c[E],V=k.instance,ue=k.currentTarget,k=k.listener,V!==g&&h.isPropagationStopped())break e;Ih(h,k,ue),g=V}}}if(hr)throw n=di,hr=!1,di=null,n}function en(n,i){var a=i[Yc];a===void 0&&(a=i[Yc]=new Set);var c=n+"__bubble";a.has(c)||(Oh(i,n,2,!1),a.add(c))}function jc(n,i,a){var c=0;i&&(c|=4),Oh(a,n,c,i)}var Ko="_reactListening"+Math.random().toString(36).slice(2);function so(n){if(!n[Ko]){n[Ko]=!0,r.forEach(function(a){a!=="selectionchange"&&(mx.has(a)||jc(a,!1,n),jc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ko]||(i[Ko]=!0,jc("selectionchange",!1,i))}}function Oh(n,i,a,c){switch(Ka(i)){case 1:var h=Rc;break;case 4:h=Xo;break;default:h=Ss}a=h.bind(null,i,a,n),h=void 0,!Jn||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Vc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var V=E.tag;if((V===3||V===4)&&(V=E.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;E=E.return}for(;k!==null;){if(E=Es(k),E===null)return;if(V=E.tag,V===5||V===6){c=g=E;continue e}k=k.parentNode}}c=c.return}qt(function(){var ue=g,Se=G(a),Me=[];e:{var ve=Dh.get(n);if(ve!==void 0){var Xe=ht,Je=n;switch(n){case"keypress":if(ws(a)===0)break e;case"keydown":case"keyup":Xe=Wg;break;case"focusin":Je="focus",Xe=Nc;break;case"focusout":Je="blur",Xe=Nc;break;case"beforeblur":case"afterblur":Xe=Nc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Lg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=Yg;break;case Ah:case Rh:case Nh:Xe=Og;break;case Ph:Xe=Kg;break;case"scroll":Xe=mi;break;case"wheel":Xe=Qg;break;case"copy":case"cut":case"paste":Xe=kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=uh}var et=(i&4)!==0,pn=!et&&n==="scroll",J=et?ve!==null?ve+"Capture":null:ve;et=[];for(var W=ue,ne;W!==null;){ne=W;var Te=ne.stateNode;if(ne.tag===5&&Te!==null&&(ne=Te,J!==null&&(Te=Wt(W,J),Te!=null&&et.push(ao(W,Te,ne)))),pn)break;W=W.return}0<et.length&&(ve=new Xe(ve,Je,null,a,Se),Me.push({event:ve,listeners:et}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",ve&&a!==ft&&(Je=a.relatedTarget||a.fromElement)&&(Es(Je)||Je[_r]))break e;if((Xe||ve)&&(ve=Se.window===Se?Se:(ve=Se.ownerDocument)?ve.defaultView||ve.parentWindow:window,Xe?(Je=a.relatedTarget||a.toElement,Xe=ue,Je=Je?Es(Je):null,Je!==null&&(pn=fi(Je),Je!==pn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Xe=null,Je=ue),Xe!==Je)){if(et=lh,Te="onMouseLeave",J="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(et=uh,Te="onPointerLeave",J="onPointerEnter",W="pointer"),pn=Xe==null?ve:aa(Xe),ne=Je==null?ve:aa(Je),ve=new et(Te,W+"leave",Xe,a,Se),ve.target=pn,ve.relatedTarget=ne,Te=null,Es(Se)===ue&&(et=new et(J,W+"enter",Je,a,Se),et.target=ne,et.relatedTarget=pn,Te=et),pn=Te,Xe&&Je)t:{for(et=Xe,J=Je,W=0,ne=et;ne;ne=ra(ne))W++;for(ne=0,Te=J;Te;Te=ra(Te))ne++;for(;0<W-ne;)et=ra(et),W--;for(;0<ne-W;)J=ra(J),ne--;for(;W--;){if(et===J||J!==null&&et===J.alternate)break t;et=ra(et),J=ra(J)}et=null}else et=null;Xe!==null&&Fh(Me,ve,Xe,et,!1),Je!==null&&pn!==null&&Fh(Me,pn,Je,et,!0)}}e:{if(ve=ue?aa(ue):window,Xe=ve.nodeName&&ve.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&ve.type==="file")var nt=sx;else if(gh(ve))if(vh)nt=cx;else{nt=ox;var ut=ax}else(Xe=ve.nodeName)&&Xe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(nt=lx);if(nt&&(nt=nt(n,ue))){xh(Me,nt,a,Se);break e}ut&&ut(n,ve,ue),n==="focusout"&&(ut=ve._wrapperState)&&ut.controlled&&ve.type==="number"&&Qe(ve,"number",ve.value)}switch(ut=ue?aa(ue):window,n){case"focusin":(gh(ut)||ut.contentEditable==="true")&&(na=ut,Oc=ue,io=null);break;case"focusout":io=Oc=na=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Th(Me,a,Se);break;case"selectionchange":if(fx)break;case"keydown":case"keyup":Th(Me,a,Se)}var dt;if(Dc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else ta?ph(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(dh&&a.locale!=="ko"&&(ta||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&ta&&(dt=Za()):(pi=Se,Qi="value"in pi?pi.value:pi.textContent,ta=!0)),ut=Zo(ue,vt),0<ut.length&&(vt=new ch(vt,n,null,a,Se),Me.push({event:vt,listeners:ut}),dt?vt.data=dt:(dt=mh(a),dt!==null&&(vt.data=dt)))),(dt=ex?tx(n,a):nx(n,a))&&(ue=Zo(ue,"onBeforeInput"),0<ue.length&&(Se=new ch("onBeforeInput","beforeinput",null,a,Se),Me.push({event:Se,listeners:ue}),Se.data=dt))}Uh(Me,i)})}function ao(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Zo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Wt(n,a),g!=null&&c.unshift(ao(n,g,h)),g=Wt(n,i),g!=null&&c.push(ao(n,g,h))),n=n.return}return c}function ra(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fh(n,i,a,c,h){for(var g=i._reactName,E=[];a!==null&&a!==c;){var k=a,V=k.alternate,ue=k.stateNode;if(V!==null&&V===c)break;k.tag===5&&ue!==null&&(k=ue,h?(V=Wt(a,g),V!=null&&E.unshift(ao(a,V,k))):h||(V=Wt(a,g),V!=null&&E.push(ao(a,V,k)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var gx=/\r\n?/g,xx=/\u0000|\uFFFD/g;function kh(n){return(typeof n=="string"?n:""+n).replace(gx,`
`).replace(xx,"")}function Qo(n,i,a){if(i=kh(i),kh(n)!==i&&a)throw Error(t(425))}function Jo(){}var Gc=null,Hc=null;function Wc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Xc=typeof setTimeout=="function"?setTimeout:void 0,vx=typeof clearTimeout=="function"?clearTimeout:void 0,Bh=typeof Promise=="function"?Promise:void 0,_x=typeof queueMicrotask=="function"?queueMicrotask:typeof Bh<"u"?function(n){return Bh.resolve(null).then(n).catch(yx)}:Xc;function yx(n){setTimeout(function(){throw n})}function qc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Xr(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Xr(i)}function Yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function zh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var sa=Math.random().toString(36).slice(2),Ji="__reactFiber$"+sa,oo="__reactProps$"+sa,_r="__reactContainer$"+sa,Yc="__reactEvents$"+sa,Sx="__reactListeners$"+sa,Mx="__reactHandles$"+sa;function Es(n){var i=n[Ji];if(i)return i;for(var a=n.parentNode;a;){if(i=a[_r]||a[Ji]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=zh(n);n!==null;){if(a=n[Ji])return a;n=zh(n)}return i}n=a,a=n.parentNode}return null}function lo(n){return n=n[Ji]||n[_r],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function aa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function el(n){return n[oo]||null}var $c=[],oa=-1;function $r(n){return{current:n}}function tn(n){0>oa||(n.current=$c[oa],$c[oa]=null,oa--)}function Jt(n,i){oa++,$c[oa]=n.current,n.current=i}var Kr={},jn=$r(Kr),ni=$r(!1),Ts=Kr;function la(n,i){var a=n.type.contextTypes;if(!a)return Kr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function ii(n){return n=n.childContextTypes,n!=null}function tl(){tn(ni),tn(jn)}function jh(n,i,a){if(jn.current!==Kr)throw Error(t(168));Jt(jn,i),Jt(ni,a)}function Vh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,de(n)||"Unknown",h));return oe({},a,c)}function nl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Kr,Ts=jn.current,Jt(jn,n),Jt(ni,ni.current),!0}function Gh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Vh(n,i,Ts),c.__reactInternalMemoizedMergedChildContext=n,tn(ni),tn(jn),Jt(jn,n)):tn(ni),Jt(ni,a)}var yr=null,il=!1,Kc=!1;function Hh(n){yr===null?yr=[n]:yr.push(n)}function wx(n){il=!0,Hh(n)}function Zr(){if(!Kc&&yr!==null){Kc=!0;var n=0,i=xt;try{var a=yr;for(xt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}yr=null,il=!1}catch(h){throw yr!==null&&(yr=yr.slice(n+1)),Ii(q,Zr),h}finally{xt=i,Kc=!1}}return null}var ca=[],ua=0,rl=null,sl=0,bi=[],Ei=0,Cs=null,Sr=1,Mr="";function As(n,i){ca[ua++]=sl,ca[ua++]=rl,rl=n,sl=i}function Wh(n,i,a){bi[Ei++]=Sr,bi[Ei++]=Mr,bi[Ei++]=Cs,Cs=n;var c=Sr;n=Mr;var h=32-Ve(c)-1;c&=~(1<<h),a+=1;var g=32-Ve(i)+h;if(30<g){var E=h-h%5;g=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Sr=1<<32-Ve(i)+h|a<<h|c,Mr=g+n}else Sr=1<<g|a<<h|c,Mr=n}function Zc(n){n.return!==null&&(As(n,1),Wh(n,1,0))}function Qc(n){for(;n===rl;)rl=ca[--ua],ca[ua]=null,sl=ca[--ua],ca[ua]=null;for(;n===Cs;)Cs=bi[--Ei],bi[Ei]=null,Mr=bi[--Ei],bi[Ei]=null,Sr=bi[--Ei],bi[Ei]=null}var gi=null,xi=null,rn=!1,Bi=null;function Xh(n,i){var a=Ri(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function qh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,gi=n,xi=Yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,gi=n,xi=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Cs!==null?{id:Sr,overflow:Mr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Ri(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,gi=n,xi=null,!0):!1;default:return!1}}function Jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function eu(n){if(rn){var i=xi;if(i){var a=i;if(!qh(n,i)){if(Jc(n))throw Error(t(418));i=Yr(a.nextSibling);var c=gi;i&&qh(n,i)?Xh(c,a):(n.flags=n.flags&-4097|2,rn=!1,gi=n)}}else{if(Jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,rn=!1,gi=n}}}function Yh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gi=n}function al(n){if(n!==gi)return!1;if(!rn)return Yh(n),rn=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Wc(n.type,n.memoizedProps)),i&&(i=xi)){if(Jc(n))throw $h(),Error(t(418));for(;i;)Xh(n,i),i=Yr(i.nextSibling)}if(Yh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){xi=Yr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}xi=null}}else xi=gi?Yr(n.stateNode.nextSibling):null;return!0}function $h(){for(var n=xi;n;)n=Yr(n.nextSibling)}function da(){xi=gi=null,rn=!1}function tu(n){Bi===null?Bi=[n]:Bi.push(n)}var bx=P.ReactCurrentBatchConfig;function co(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(E){var k=h.refs;E===null?delete k[g]:k[g]=E},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function ol(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Kh(n){var i=n._init;return i(n._payload)}function Zh(n){function i(J,W){if(n){var ne=J.deletions;ne===null?(J.deletions=[W],J.flags|=16):ne.push(W)}}function a(J,W){if(!n)return null;for(;W!==null;)i(J,W),W=W.sibling;return null}function c(J,W){for(J=new Map;W!==null;)W.key!==null?J.set(W.key,W):J.set(W.index,W),W=W.sibling;return J}function h(J,W){return J=ss(J,W),J.index=0,J.sibling=null,J}function g(J,W,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<W?(J.flags|=2,W):ne):(J.flags|=2,W)):(J.flags|=1048576,W)}function E(J){return n&&J.alternate===null&&(J.flags|=2),J}function k(J,W,ne,Te){return W===null||W.tag!==6?(W=Xu(ne,J.mode,Te),W.return=J,W):(W=h(W,ne),W.return=J,W)}function V(J,W,ne,Te){var nt=ne.type;return nt===O?Se(J,W,ne.props.children,Te,ne.key):W!==null&&(W.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ee&&Kh(nt)===W.type)?(Te=h(W,ne.props),Te.ref=co(J,W,ne),Te.return=J,Te):(Te=Pl(ne.type,ne.key,ne.props,null,J.mode,Te),Te.ref=co(J,W,ne),Te.return=J,Te)}function ue(J,W,ne,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==ne.containerInfo||W.stateNode.implementation!==ne.implementation?(W=qu(ne,J.mode,Te),W.return=J,W):(W=h(W,ne.children||[]),W.return=J,W)}function Se(J,W,ne,Te,nt){return W===null||W.tag!==7?(W=Os(ne,J.mode,Te,nt),W.return=J,W):(W=h(W,ne),W.return=J,W)}function Me(J,W,ne){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Xu(""+W,J.mode,ne),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case U:return ne=Pl(W.type,W.key,W.props,null,J.mode,ne),ne.ref=co(J,null,W),ne.return=J,ne;case D:return W=qu(W,J.mode,ne),W.return=J,W;case ee:var Te=W._init;return Me(J,Te(W._payload),ne)}if(Ze(W)||fe(W))return W=Os(W,J.mode,ne,null),W.return=J,W;ol(J,W)}return null}function ve(J,W,ne,Te){var nt=W!==null?W.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return nt!==null?null:k(J,W,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:return ne.key===nt?V(J,W,ne,Te):null;case D:return ne.key===nt?ue(J,W,ne,Te):null;case ee:return nt=ne._init,ve(J,W,nt(ne._payload),Te)}if(Ze(ne)||fe(ne))return nt!==null?null:Se(J,W,ne,Te,null);ol(J,ne)}return null}function Xe(J,W,ne,Te,nt){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return J=J.get(ne)||null,k(W,J,""+Te,nt);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case U:return J=J.get(Te.key===null?ne:Te.key)||null,V(W,J,Te,nt);case D:return J=J.get(Te.key===null?ne:Te.key)||null,ue(W,J,Te,nt);case ee:var ut=Te._init;return Xe(J,W,ne,ut(Te._payload),nt)}if(Ze(Te)||fe(Te))return J=J.get(ne)||null,Se(W,J,Te,nt,null);ol(W,Te)}return null}function Je(J,W,ne,Te){for(var nt=null,ut=null,dt=W,vt=W=0,Rn=null;dt!==null&&vt<ne.length;vt++){dt.index>vt?(Rn=dt,dt=null):Rn=dt.sibling;var Vt=ve(J,dt,ne[vt],Te);if(Vt===null){dt===null&&(dt=Rn);break}n&&dt&&Vt.alternate===null&&i(J,dt),W=g(Vt,W,vt),ut===null?nt=Vt:ut.sibling=Vt,ut=Vt,dt=Rn}if(vt===ne.length)return a(J,dt),rn&&As(J,vt),nt;if(dt===null){for(;vt<ne.length;vt++)dt=Me(J,ne[vt],Te),dt!==null&&(W=g(dt,W,vt),ut===null?nt=dt:ut.sibling=dt,ut=dt);return rn&&As(J,vt),nt}for(dt=c(J,dt);vt<ne.length;vt++)Rn=Xe(dt,J,vt,ne[vt],Te),Rn!==null&&(n&&Rn.alternate!==null&&dt.delete(Rn.key===null?vt:Rn.key),W=g(Rn,W,vt),ut===null?nt=Rn:ut.sibling=Rn,ut=Rn);return n&&dt.forEach(function(as){return i(J,as)}),rn&&As(J,vt),nt}function et(J,W,ne,Te){var nt=fe(ne);if(typeof nt!="function")throw Error(t(150));if(ne=nt.call(ne),ne==null)throw Error(t(151));for(var ut=nt=null,dt=W,vt=W=0,Rn=null,Vt=ne.next();dt!==null&&!Vt.done;vt++,Vt=ne.next()){dt.index>vt?(Rn=dt,dt=null):Rn=dt.sibling;var as=ve(J,dt,Vt.value,Te);if(as===null){dt===null&&(dt=Rn);break}n&&dt&&as.alternate===null&&i(J,dt),W=g(as,W,vt),ut===null?nt=as:ut.sibling=as,ut=as,dt=Rn}if(Vt.done)return a(J,dt),rn&&As(J,vt),nt;if(dt===null){for(;!Vt.done;vt++,Vt=ne.next())Vt=Me(J,Vt.value,Te),Vt!==null&&(W=g(Vt,W,vt),ut===null?nt=Vt:ut.sibling=Vt,ut=Vt);return rn&&As(J,vt),nt}for(dt=c(J,dt);!Vt.done;vt++,Vt=ne.next())Vt=Xe(dt,J,vt,Vt.value,Te),Vt!==null&&(n&&Vt.alternate!==null&&dt.delete(Vt.key===null?vt:Vt.key),W=g(Vt,W,vt),ut===null?nt=Vt:ut.sibling=Vt,ut=Vt);return n&&dt.forEach(function(iv){return i(J,iv)}),rn&&As(J,vt),nt}function pn(J,W,ne,Te){if(typeof ne=="object"&&ne!==null&&ne.type===O&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case U:e:{for(var nt=ne.key,ut=W;ut!==null;){if(ut.key===nt){if(nt=ne.type,nt===O){if(ut.tag===7){a(J,ut.sibling),W=h(ut,ne.props.children),W.return=J,J=W;break e}}else if(ut.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ee&&Kh(nt)===ut.type){a(J,ut.sibling),W=h(ut,ne.props),W.ref=co(J,ut,ne),W.return=J,J=W;break e}a(J,ut);break}else i(J,ut);ut=ut.sibling}ne.type===O?(W=Os(ne.props.children,J.mode,Te,ne.key),W.return=J,J=W):(Te=Pl(ne.type,ne.key,ne.props,null,J.mode,Te),Te.ref=co(J,W,ne),Te.return=J,J=Te)}return E(J);case D:e:{for(ut=ne.key;W!==null;){if(W.key===ut)if(W.tag===4&&W.stateNode.containerInfo===ne.containerInfo&&W.stateNode.implementation===ne.implementation){a(J,W.sibling),W=h(W,ne.children||[]),W.return=J,J=W;break e}else{a(J,W);break}else i(J,W);W=W.sibling}W=qu(ne,J.mode,Te),W.return=J,J=W}return E(J);case ee:return ut=ne._init,pn(J,W,ut(ne._payload),Te)}if(Ze(ne))return Je(J,W,ne,Te);if(fe(ne))return et(J,W,ne,Te);ol(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,W!==null&&W.tag===6?(a(J,W.sibling),W=h(W,ne),W.return=J,J=W):(a(J,W),W=Xu(ne,J.mode,Te),W.return=J,J=W),E(J)):a(J,W)}return pn}var fa=Zh(!0),Qh=Zh(!1),ll=$r(null),cl=null,ha=null,nu=null;function iu(){nu=ha=cl=null}function ru(n){var i=ll.current;tn(ll),n._currentValue=i}function su(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function pa(n,i){cl=n,nu=ha=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(ri=!0),n.firstContext=null)}function Ti(n){var i=n._currentValue;if(nu!==n)if(n={context:n,memoizedValue:i,next:null},ha===null){if(cl===null)throw Error(t(308));ha=n,cl.dependencies={lanes:0,firstContext:n}}else ha=ha.next=n;return i}var Rs=null;function au(n){Rs===null?Rs=[n]:Rs.push(n)}function Jh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,au(i)):(a.next=h.next,h.next=a),i.interleaved=a,wr(n,c)}function wr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Qr=!1;function ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ep(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function br(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Jr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Bt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,wr(n,a)}return h=c.interleaved,h===null?(i.next=i,au(c)):(i.next=h.next,h.next=i),c.interleaved=i,wr(n,a)}function ul(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}function tp(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=E:g=g.next=E,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function dl(n,i,a,c){var h=n.updateQueue;Qr=!1;var g=h.firstBaseUpdate,E=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var V=k,ue=V.next;V.next=null,E===null?g=ue:E.next=ue,E=V;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,k=Se.lastBaseUpdate,k!==E&&(k===null?Se.firstBaseUpdate=ue:k.next=ue,Se.lastBaseUpdate=V))}if(g!==null){var Me=h.baseState;E=0,Se=ue=V=null,k=g;do{var ve=k.lane,Xe=k.eventTime;if((c&ve)===ve){Se!==null&&(Se=Se.next={eventTime:Xe,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Je=n,et=k;switch(ve=i,Xe=a,et.tag){case 1:if(Je=et.payload,typeof Je=="function"){Me=Je.call(Xe,Me,ve);break e}Me=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=et.payload,ve=typeof Je=="function"?Je.call(Xe,Me,ve):Je,ve==null)break e;Me=oe({},Me,ve);break e;case 2:Qr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[k]:ve.push(k))}else Xe={eventTime:Xe,lane:ve,tag:k.tag,payload:k.payload,callback:k.callback,next:null},Se===null?(ue=Se=Xe,V=Me):Se=Se.next=Xe,E|=ve;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;ve=k,k=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(Se===null&&(V=Me),h.baseState=V,h.firstBaseUpdate=ue,h.lastBaseUpdate=Se,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);Ds|=E,n.lanes=E,n.memoizedState=Me}}function np(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var uo={},er=$r(uo),fo=$r(uo),ho=$r(uo);function Ns(n){if(n===uo)throw Error(t(174));return n}function lu(n,i){switch(Jt(ho,i),Jt(fo,n),Jt(er,uo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=pe(i,n)}tn(er),Jt(er,i)}function ma(){tn(er),tn(fo),tn(ho)}function ip(n){Ns(ho.current);var i=Ns(er.current),a=pe(i,n.type);i!==a&&(Jt(fo,n),Jt(er,a))}function cu(n){fo.current===n&&(tn(er),tn(fo))}var an=$r(0);function fl(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var uu=[];function du(){for(var n=0;n<uu.length;n++)uu[n]._workInProgressVersionPrimary=null;uu.length=0}var hl=P.ReactCurrentDispatcher,fu=P.ReactCurrentBatchConfig,Ps=0,on=null,Sn=null,Cn=null,pl=!1,po=!1,mo=0,Ex=0;function Vn(){throw Error(t(321))}function hu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ki(n[a],i[a]))return!1;return!0}function pu(n,i,a,c,h,g){if(Ps=g,on=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,hl.current=n===null||n.memoizedState===null?Rx:Nx,n=a(c,h),po){g=0;do{if(po=!1,mo=0,25<=g)throw Error(t(301));g+=1,Cn=Sn=null,i.updateQueue=null,hl.current=Px,n=a(c,h)}while(po)}if(hl.current=xl,i=Sn!==null&&Sn.next!==null,Ps=0,Cn=Sn=on=null,pl=!1,i)throw Error(t(300));return n}function mu(){var n=mo!==0;return mo=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Cn===null?on.memoizedState=Cn=n:Cn=Cn.next=n,Cn}function Ci(){if(Sn===null){var n=on.alternate;n=n!==null?n.memoizedState:null}else n=Sn.next;var i=Cn===null?on.memoizedState:Cn.next;if(i!==null)Cn=i,Sn=n;else{if(n===null)throw Error(t(310));Sn=n,n={memoizedState:Sn.memoizedState,baseState:Sn.baseState,baseQueue:Sn.baseQueue,queue:Sn.queue,next:null},Cn===null?on.memoizedState=Cn=n:Cn=Cn.next=n}return Cn}function go(n,i){return typeof i=="function"?i(n):i}function gu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Sn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var E=h.next;h.next=g.next,g.next=E}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=E=null,V=null,ue=g;do{var Se=ue.lane;if((Ps&Se)===Se)V!==null&&(V=V.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var Me={lane:Se,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};V===null?(k=V=Me,E=c):V=V.next=Me,on.lanes|=Se,Ds|=Se}ue=ue.next}while(ue!==null&&ue!==g);V===null?E=c:V.next=k,ki(c,i.memoizedState)||(ri=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=V,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,on.lanes|=g,Ds|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function xu(n){var i=Ci(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do g=n(g,E.action),E=E.next;while(E!==h);ki(g,i.memoizedState)||(ri=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function rp(){}function sp(n,i){var a=on,c=Ci(),h=i(),g=!ki(c.memoizedState,h);if(g&&(c.memoizedState=h,ri=!0),c=c.queue,vu(lp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||Cn!==null&&Cn.memoizedState.tag&1){if(a.flags|=2048,xo(9,op.bind(null,a,c,h,i),void 0,null),An===null)throw Error(t(349));(Ps&30)!==0||ap(a,i,h)}return h}function ap(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function op(n,i,a,c){i.value=a,i.getSnapshot=c,cp(i)&&up(n)}function lp(n,i,a){return a(function(){cp(i)&&up(n)})}function cp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ki(n,a)}catch{return!0}}function up(n){var i=wr(n,1);i!==null&&Gi(i,n,1,-1)}function dp(n){var i=tr();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:n},i.queue=n,n=n.dispatch=Ax.bind(null,on,n),[i.memoizedState,n]}function xo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=on.updateQueue,i===null?(i={lastEffect:null,stores:null},on.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function fp(){return Ci().memoizedState}function ml(n,i,a,c){var h=tr();on.flags|=n,h.memoizedState=xo(1|i,a,void 0,c===void 0?null:c)}function gl(n,i,a,c){var h=Ci();c=c===void 0?null:c;var g=void 0;if(Sn!==null){var E=Sn.memoizedState;if(g=E.destroy,c!==null&&hu(c,E.deps)){h.memoizedState=xo(i,a,g,c);return}}on.flags|=n,h.memoizedState=xo(1|i,a,g,c)}function hp(n,i){return ml(8390656,8,n,i)}function vu(n,i){return gl(2048,8,n,i)}function pp(n,i){return gl(4,2,n,i)}function mp(n,i){return gl(4,4,n,i)}function gp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function xp(n,i,a){return a=a!=null?a.concat([n]):null,gl(4,4,gp.bind(null,i,n),a)}function _u(){}function vp(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function _p(n,i){var a=Ci();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&hu(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function yp(n,i,a){return(Ps&21)===0?(n.baseState&&(n.baseState=!1,ri=!0),n.memoizedState=a):(ki(a,i)||(a=_n(),on.lanes|=a,Ds|=a,n.baseState=!0),i)}function Tx(n,i){var a=xt;xt=a!==0&&4>a?a:4,n(!0);var c=fu.transition;fu.transition={};try{n(!1),i()}finally{xt=a,fu.transition=c}}function Sp(){return Ci().memoizedState}function Cx(n,i,a){var c=is(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Mp(n))wp(i,a);else if(a=Jh(n,i,a,c),a!==null){var h=Kn();Gi(a,n,c,h),bp(a,i,c)}}function Ax(n,i,a){var c=is(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mp(n))wp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var E=i.lastRenderedState,k=g(E,a);if(h.hasEagerState=!0,h.eagerState=k,ki(k,E)){var V=i.interleaved;V===null?(h.next=h,au(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=Jh(n,i,h,c),a!==null&&(h=Kn(),Gi(a,n,c,h),bp(a,i,c))}}function Mp(n){var i=n.alternate;return n===on||i!==null&&i===on}function wp(n,i){po=pl=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function bp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,kt(n,a)}}var xl={readContext:Ti,useCallback:Vn,useContext:Vn,useEffect:Vn,useImperativeHandle:Vn,useInsertionEffect:Vn,useLayoutEffect:Vn,useMemo:Vn,useReducer:Vn,useRef:Vn,useState:Vn,useDebugValue:Vn,useDeferredValue:Vn,useTransition:Vn,useMutableSource:Vn,useSyncExternalStore:Vn,useId:Vn,unstable_isNewReconciler:!1},Rx={readContext:Ti,useCallback:function(n,i){return tr().memoizedState=[n,i===void 0?null:i],n},useContext:Ti,useEffect:hp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ml(4194308,4,gp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ml(4194308,4,n,i)},useInsertionEffect:function(n,i){return ml(4,2,n,i)},useMemo:function(n,i){var a=tr();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=tr();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Cx.bind(null,on,n),[c.memoizedState,n]},useRef:function(n){var i=tr();return n={current:n},i.memoizedState=n},useState:dp,useDebugValue:_u,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=dp(!1),i=n[0];return n=Tx.bind(null,n[1]),tr().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=on,h=tr();if(rn){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),An===null)throw Error(t(349));(Ps&30)!==0||ap(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,hp(lp.bind(null,c,g,n),[n]),c.flags|=2048,xo(9,op.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=tr(),i=An.identifierPrefix;if(rn){var a=Mr,c=Sr;a=(c&~(1<<32-Ve(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=mo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Ex++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nx={readContext:Ti,useCallback:vp,useContext:Ti,useEffect:vu,useImperativeHandle:xp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:_p,useReducer:gu,useRef:fp,useState:function(){return gu(go)},useDebugValue:_u,useDeferredValue:function(n){var i=Ci();return yp(i,Sn.memoizedState,n)},useTransition:function(){var n=gu(go)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:rp,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1},Px={readContext:Ti,useCallback:vp,useContext:Ti,useEffect:vu,useImperativeHandle:xp,useInsertionEffect:pp,useLayoutEffect:mp,useMemo:_p,useReducer:xu,useRef:fp,useState:function(){return xu(go)},useDebugValue:_u,useDeferredValue:function(n){var i=Ci();return Sn===null?i.memoizedState=n:yp(i,Sn.memoizedState,n)},useTransition:function(){var n=xu(go)[0],i=Ci().memoizedState;return[n,i]},useMutableSource:rp,useSyncExternalStore:sp,useId:Sp,unstable_isNewReconciler:!1};function zi(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function yu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var vl={isMounted:function(n){return(n=n._reactInternals)?fi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Kn(),h=is(n),g=br(c,h);g.payload=i,a!=null&&(g.callback=a),i=Jr(n,g,h),i!==null&&(Gi(i,n,h,c),ul(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Kn(),h=is(n),g=br(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Jr(n,g,h),i!==null&&(Gi(i,n,h,c),ul(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Kn(),c=is(n),h=br(a,c);h.tag=2,i!=null&&(h.callback=i),i=Jr(n,h,c),i!==null&&(Gi(i,n,c,a),ul(i,n,c))}};function Ep(n,i,a,c,h,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):i.prototype&&i.prototype.isPureReactComponent?!no(a,c)||!no(h,g):!0}function Tp(n,i,a){var c=!1,h=Kr,g=i.contextType;return typeof g=="object"&&g!==null?g=Ti(g):(h=ii(i)?Ts:jn.current,c=i.contextTypes,g=(c=c!=null)?la(n,h):Kr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=vl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Cp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&vl.enqueueReplaceState(i,i.state,null)}function Su(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},ou(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=Ti(g):(g=ii(i)?Ts:jn.current,h.context=la(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(yu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&vl.enqueueReplaceState(h,h.state,null),dl(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function ga(n,i){try{var a="",c=i;do a+=Ge(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function wu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Dx=typeof WeakMap=="function"?WeakMap:Map;function Ap(n,i,a){a=br(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){El||(El=!0,ku=c),wu(n,i)},a}function Rp(n,i,a){a=br(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){wu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){wu(n,i),typeof c!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Np(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Dx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Xx.bind(null,n,i,a),i.then(n,n))}function Pp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Dp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=br(-1,1),i.tag=2,Jr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Lx=P.ReactCurrentOwner,ri=!1;function $n(n,i,a,c){i.child=n===null?Qh(i,null,a,c):fa(i,n.child,a,c)}function Lp(n,i,a,c,h){a=a.render;var g=i.ref;return pa(i,h),c=pu(n,i,a,c,g,h),a=mu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Er(n,i,h)):(rn&&a&&Zc(i),i.flags|=1,$n(n,i,c,h),i.child)}function Ip(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Wu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Up(n,i,g,c,h)):(n=Pl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var E=g.memoizedProps;if(a=a.compare,a=a!==null?a:no,a(E,c)&&n.ref===i.ref)return Er(n,i,h)}return i.flags|=1,n=ss(g,c),n.ref=i.ref,n.return=i,i.child=n}function Up(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(no(g,c)&&n.ref===i.ref)if(ri=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(ri=!0);else return i.lanes=n.lanes,Er(n,i,h)}return bu(n,i,a,c,h)}function Op(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Jt(va,vi),vi|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Jt(va,vi),vi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Jt(va,vi),vi|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Jt(va,vi),vi|=c;return $n(n,i,h,a),i.child}function Fp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function bu(n,i,a,c,h){var g=ii(a)?Ts:jn.current;return g=la(i,g),pa(i,h),a=pu(n,i,a,c,g,h),c=mu(),n!==null&&!ri?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Er(n,i,h)):(rn&&c&&Zc(i),i.flags|=1,$n(n,i,a,h),i.child)}function kp(n,i,a,c,h){if(ii(a)){var g=!0;nl(i)}else g=!1;if(pa(i,h),i.stateNode===null)yl(n,i),Tp(i,a,c),Su(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,k=i.memoizedProps;E.props=k;var V=E.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=Ti(ue):(ue=ii(a)?Ts:jn.current,ue=la(i,ue));var Se=a.getDerivedStateFromProps,Me=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";Me||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==c||V!==ue)&&Cp(i,E,c,ue),Qr=!1;var ve=i.memoizedState;E.state=ve,dl(i,c,E,h),V=i.memoizedState,k!==c||ve!==V||ni.current||Qr?(typeof Se=="function"&&(yu(i,a,Se,c),V=i.memoizedState),(k=Qr||Ep(i,a,k,c,ve,V,ue))?(Me||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=V),E.props=c,E.state=V,E.context=ue,c=k):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,ep(n,i),k=i.memoizedProps,ue=i.type===i.elementType?k:zi(i.type,k),E.props=ue,Me=i.pendingProps,ve=E.context,V=a.contextType,typeof V=="object"&&V!==null?V=Ti(V):(V=ii(a)?Ts:jn.current,V=la(i,V));var Xe=a.getDerivedStateFromProps;(Se=typeof Xe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(k!==Me||ve!==V)&&Cp(i,E,c,V),Qr=!1,ve=i.memoizedState,E.state=ve,dl(i,c,E,h);var Je=i.memoizedState;k!==Me||ve!==Je||ni.current||Qr?(typeof Xe=="function"&&(yu(i,a,Xe,c),Je=i.memoizedState),(ue=Qr||Ep(i,a,ue,c,ve,Je,V)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Je,V),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Je,V)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),E.props=c,E.state=Je,E.context=V,c=ue):(typeof E.componentDidUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return Eu(n,i,a,c,g,h)}function Eu(n,i,a,c,h,g){Fp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&Gh(i,a,!1),Er(n,i,g);c=i.stateNode,Lx.current=i;var k=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=fa(i,n.child,null,g),i.child=fa(i,null,k,g)):$n(n,i,k,g),i.memoizedState=c.state,h&&Gh(i,a,!0),i.child}function Bp(n){var i=n.stateNode;i.pendingContext?jh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&jh(n,i.context,!1),lu(n,i.containerInfo)}function zp(n,i,a,c,h){return da(),tu(h),i.flags|=256,$n(n,i,a,c),i.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function jp(n,i,a){var c=i.pendingProps,h=an.current,g=!1,E=(i.flags&128)!==0,k;if((k=E)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Jt(an,h&1),n===null)return eu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=i.mode,g=i.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=Dl(E,c,0,null),n=Os(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Cu(a),i.memoizedState=Tu,n):Au(i,E));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Ix(n,i,E,c,k,h,a);if(g){g=c.fallback,E=i.mode,h=n.child,k=h.sibling;var V={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=V,i.deletions=null):(c=ss(h,V),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=ss(k,g):(g=Os(g,E,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,E=n.child.memoizedState,E=E===null?Cu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~a,i.memoizedState=Tu,c}return g=n.child,n=g.sibling,c=ss(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Au(n,i){return i=Dl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function _l(n,i,a,c){return c!==null&&tu(c),fa(i,n.child,null,a),n=Au(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ix(n,i,a,c,h,g,E){if(a)return i.flags&256?(i.flags&=-257,c=Mu(Error(t(422))),_l(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=Dl({mode:"visible",children:c.children},h,0,null),g=Os(g,h,E,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&fa(i,n.child,null,E),i.child.memoizedState=Cu(E),i.memoizedState=Tu,g);if((i.mode&1)===0)return _l(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=Mu(g,c,void 0),_l(n,i,E,c)}if(k=(E&n.childLanes)!==0,ri||k){if(c=An,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,wr(n,h),Gi(c,n,h,-1))}return Hu(),c=Mu(Error(t(421))),_l(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=qx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,xi=Yr(h.nextSibling),gi=i,rn=!0,Bi=null,n!==null&&(bi[Ei++]=Sr,bi[Ei++]=Mr,bi[Ei++]=Cs,Sr=n.id,Mr=n.overflow,Cs=i),i=Au(i,c.children),i.flags|=4096,i)}function Vp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),su(n.return,i,a)}function Ru(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Gp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if($n(n,i,c.children,a),c=an.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Vp(n,a,i);else if(n.tag===19)Vp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Jt(an,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&fl(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ru(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&fl(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Ru(i,!0,a,null,g);break;case"together":Ru(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function yl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Ds|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=ss(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=ss(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ux(n,i,a){switch(i.tag){case 3:Bp(i),da();break;case 5:ip(i);break;case 1:ii(i.type)&&nl(i);break;case 4:lu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Jt(ll,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Jt(an,an.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?jp(n,i,a):(Jt(an,an.current&1),n=Er(n,i,a),n!==null?n.sibling:null);Jt(an,an.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Gp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Jt(an,an.current),c)break;return null;case 22:case 23:return i.lanes=0,Op(n,i,a)}return Er(n,i,a)}var Hp,Nu,Wp,Xp;Hp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Nu=function(){},Wp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Ns(er.current);var g=null;switch(a){case"input":h=Pt(n,h),c=Pt(n,c),g=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":h=Ie(n,h),c=Ie(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Jo)}We(a,c);var E;a=null;for(ue in h)if(!c.hasOwnProperty(ue)&&h.hasOwnProperty(ue)&&h[ue]!=null)if(ue==="style"){var k=h[ue];for(E in k)k.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in c){var V=c[ue];if(k=h!=null?h[ue]:void 0,c.hasOwnProperty(ue)&&V!==k&&(V!=null||k!=null))if(ue==="style")if(k){for(E in k)!k.hasOwnProperty(E)||V&&V.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in V)V.hasOwnProperty(E)&&k[E]!==V[E]&&(a||(a={}),a[E]=V[E])}else a||(g||(g=[]),g.push(ue,a)),a=V;else ue==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,k=k?k.__html:void 0,V!=null&&k!==V&&(g=g||[]).push(ue,V)):ue==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(ue,""+V):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(V!=null&&ue==="onScroll"&&en("scroll",n),g||k===V||(g=[])):(g=g||[]).push(ue,V))}a&&(g=g||[]).push("style",a);var ue=g;(i.updateQueue=ue)&&(i.flags|=4)}},Xp=function(n,i,a,c){a!==c&&(i.flags|=4)};function vo(n,i){if(!rn)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Gn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Ox(n,i,a){var c=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gn(i),null;case 1:return ii(i.type)&&tl(),Gn(i),null;case 3:return c=i.stateNode,ma(),tn(ni),tn(jn),du(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(al(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Bi!==null&&(ju(Bi),Bi=null))),Nu(n,i),Gn(i),null;case 5:cu(i);var h=Ns(ho.current);if(a=i.type,n!==null&&i.stateNode!=null)Wp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Gn(i),null}if(n=Ns(er.current),al(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ji]=i,c[oo]=g,n=(i.mode&1)!==0,a){case"dialog":en("cancel",c),en("close",c);break;case"iframe":case"object":case"embed":en("load",c);break;case"video":case"audio":for(h=0;h<ro.length;h++)en(ro[h],c);break;case"source":en("error",c);break;case"img":case"image":case"link":en("error",c),en("load",c);break;case"details":en("toggle",c);break;case"input":Ut(c,g),en("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},en("invalid",c);break;case"textarea":I(c,g),en("invalid",c)}We(a,g),h=null;for(var E in g)if(g.hasOwnProperty(E)){var k=g[E];E==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Qo(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Qo(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(E)&&k!=null&&E==="onScroll"&&en("scroll",c)}switch(a){case"input":yt(c),j(c,g,!0);break;case"textarea":yt(c),H(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Jo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[Ji]=i,n[oo]=c,Hp(n,i,!1,!1),i.stateNode=n;e:{switch(E=be(a,c),a){case"dialog":en("cancel",n),en("close",n),h=c;break;case"iframe":case"object":case"embed":en("load",n),h=c;break;case"video":case"audio":for(h=0;h<ro.length;h++)en(ro[h],n);h=c;break;case"source":en("error",n),h=c;break;case"img":case"image":case"link":en("error",n),en("load",n),h=c;break;case"details":en("toggle",n),h=c;break;case"input":Ut(n,c),h=Pt(n,c),en("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),en("invalid",n);break;case"textarea":I(n,c),h=Ie(n,c),en("invalid",n);break;default:h=c}We(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var V=k[g];g==="style"?Ce(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&Ye(n,V)):g==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&we(n,V):typeof V=="number"&&we(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?V!=null&&g==="onScroll"&&en("scroll",n):V!=null&&L(n,g,V,E))}switch(a){case"input":yt(n),j(n,c,!1);break;case"textarea":yt(n),H(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Le(n,!!c.multiple,g,!1):c.defaultValue!=null&&Le(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Jo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Gn(i),null;case 6:if(n&&i.stateNode!=null)Xp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Ns(ho.current),Ns(er.current),al(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ji]=i,(g=c.nodeValue!==a)&&(n=gi,n!==null))switch(n.tag){case 3:Qo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Qo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ji]=i,i.stateNode=c}return Gn(i),null;case 13:if(tn(an),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(rn&&xi!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$h(),da(),i.flags|=98560,g=!1;else if(g=al(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ji]=i}else da(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Gn(i),g=!1}else Bi!==null&&(ju(Bi),Bi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(an.current&1)!==0?Mn===0&&(Mn=3):Hu())),i.updateQueue!==null&&(i.flags|=4),Gn(i),null);case 4:return ma(),Nu(n,i),n===null&&so(i.stateNode.containerInfo),Gn(i),null;case 10:return ru(i.type._context),Gn(i),null;case 17:return ii(i.type)&&tl(),Gn(i),null;case 19:if(tn(an),g=i.memoizedState,g===null)return Gn(i),null;if(c=(i.flags&128)!==0,E=g.rendering,E===null)if(c)vo(g,!1);else{if(Mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=fl(n),E!==null){for(i.flags|=128,vo(g,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Jt(an,an.current&1|2),i.child}n=n.sibling}g.tail!==null&&Qt()>_a&&(i.flags|=128,c=!0,vo(g,!1),i.lanes=4194304)}else{if(!c)if(n=fl(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),vo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!rn)return Gn(i),null}else 2*Qt()-g.renderingStartTime>_a&&a!==1073741824&&(i.flags|=128,c=!0,vo(g,!1),i.lanes=4194304);g.isBackwards?(E.sibling=i.child,i.child=E):(a=g.last,a!==null?a.sibling=E:i.child=E,g.last=E)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Qt(),i.sibling=null,a=an.current,Jt(an,c?a&1|2:a&1),i):(Gn(i),null);case 22:case 23:return Gu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(vi&1073741824)!==0&&(Gn(i),i.subtreeFlags&6&&(i.flags|=8192)):Gn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Fx(n,i){switch(Qc(i),i.tag){case 1:return ii(i.type)&&tl(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ma(),tn(ni),tn(jn),du(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return cu(i),null;case 13:if(tn(an),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));da()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return tn(an),null;case 4:return ma(),null;case 10:return ru(i.type._context),null;case 22:case 23:return Gu(),null;case 24:return null;default:return null}}var Sl=!1,Hn=!1,kx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function xa(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){un(n,i,c)}else a.current=null}function Pu(n,i,a){try{a()}catch(c){un(n,i,c)}}var qp=!1;function Bx(n,i){if(Gc=Js,n=Eh(),Uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var E=0,k=-1,V=-1,ue=0,Se=0,Me=n,ve=null;t:for(;;){for(var Xe;Me!==a||h!==0&&Me.nodeType!==3||(k=E+h),Me!==g||c!==0&&Me.nodeType!==3||(V=E+c),Me.nodeType===3&&(E+=Me.nodeValue.length),(Xe=Me.firstChild)!==null;)ve=Me,Me=Xe;for(;;){if(Me===n)break t;if(ve===a&&++ue===h&&(k=E),ve===g&&++Se===c&&(V=E),(Xe=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Xe}a=k===-1||V===-1?null:{start:k,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Hc={focusedElem:n,selectionRange:a},Js=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var et=Je.memoizedProps,pn=Je.memoizedState,J=i.stateNode,W=J.getSnapshotBeforeUpdate(i.elementType===i.type?et:zi(i.type,et),pn);J.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){un(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Je=qp,qp=!1,Je}function _o(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Pu(i,a,g)}h=h.next}while(h!==c)}}function Ml(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Du(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Yp(n){var i=n.alternate;i!==null&&(n.alternate=null,Yp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ji],delete i[oo],delete i[Yc],delete i[Sx],delete i[Mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $p(n){return n.tag===5||n.tag===3||n.tag===4}function Kp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$p(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Jo));else if(c!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Iu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}var In=null,ji=!1;function es(n,i,a){for(a=a.child;a!==null;)Zp(n,i,a),a=a.sibling}function Zp(n,i,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 5:Hn||xa(a,i);case 6:var c=In,h=ji;In=null,es(n,i,a),In=c,ji=h,In!==null&&(ji?(n=In,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):In.removeChild(a.stateNode));break;case 18:In!==null&&(ji?(n=In,a=a.stateNode,n.nodeType===8?qc(n.parentNode,a):n.nodeType===1&&qc(n,a),Xr(n)):qc(In,a.stateNode));break;case 4:c=In,h=ji,In=a.stateNode.containerInfo,ji=!0,es(n,i,a),In=c,ji=h;break;case 0:case 11:case 14:case 15:if(!Hn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Pu(a,i,E),h=h.next}while(h!==c)}es(n,i,a);break;case 1:if(!Hn&&(xa(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){un(a,i,k)}es(n,i,a);break;case 21:es(n,i,a);break;case 22:a.mode&1?(Hn=(c=Hn)||a.memoizedState!==null,es(n,i,a),Hn=c):es(n,i,a);break;default:es(n,i,a)}}function Qp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new kx),i.forEach(function(c){var h=Yx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Vi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,E=i,k=E;e:for(;k!==null;){switch(k.tag){case 5:In=k.stateNode,ji=!1;break e;case 3:In=k.stateNode.containerInfo,ji=!0;break e;case 4:In=k.stateNode.containerInfo,ji=!0;break e}k=k.return}if(In===null)throw Error(t(160));Zp(g,E,h),In=null,ji=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(ue){un(h,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Jp(i,n),i=i.sibling}function Jp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(i,n),nr(n),c&4){try{_o(3,n,n.return),Ml(3,n)}catch(et){un(n,n.return,et)}try{_o(5,n,n.return)}catch(et){un(n,n.return,et)}}break;case 1:Vi(i,n),nr(n),c&512&&a!==null&&xa(a,a.return);break;case 5:if(Vi(i,n),nr(n),c&512&&a!==null&&xa(a,a.return),n.flags&32){var h=n.stateNode;try{we(h,"")}catch(et){un(n,n.return,et)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,E=a!==null?a.memoizedProps:g,k=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&gt(h,g),be(k,E);var ue=be(k,g);for(E=0;E<V.length;E+=2){var Se=V[E],Me=V[E+1];Se==="style"?Ce(h,Me):Se==="dangerouslySetInnerHTML"?Ye(h,Me):Se==="children"?we(h,Me):L(h,Se,Me,ue)}switch(k){case"input":Ht(h,g);break;case"textarea":w(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?Le(h,!!g.multiple,Xe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Le(h,!!g.multiple,g.defaultValue,!0):Le(h,!!g.multiple,g.multiple?[]:"",!1))}h[oo]=g}catch(et){un(n,n.return,et)}}break;case 6:if(Vi(i,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(et){un(n,n.return,et)}}break;case 3:if(Vi(i,n),nr(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Xr(i.containerInfo)}catch(et){un(n,n.return,et)}break;case 4:Vi(i,n),nr(n);break;case 13:Vi(i,n),nr(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Fu=Qt())),c&4&&Qp(n);break;case 22:if(Se=a!==null&&a.memoizedState!==null,n.mode&1?(Hn=(ue=Hn)||Se,Vi(i,n),Hn=ue):Vi(i,n),nr(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Se&&(n.mode&1)!==0)for(Ke=n,Se=n.child;Se!==null;){for(Me=Ke=Se;Ke!==null;){switch(ve=Ke,Xe=ve.child,ve.tag){case 0:case 11:case 14:case 15:_o(4,ve,ve.return);break;case 1:xa(ve,ve.return);var Je=ve.stateNode;if(typeof Je.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(et){un(c,a,et)}}break;case 5:xa(ve,ve.return);break;case 22:if(ve.memoizedState!==null){nm(Me);continue}}Xe!==null?(Xe.return=ve,Ke=Xe):nm(Me)}Se=Se.sibling}e:for(Se=null,Me=n;;){if(Me.tag===5){if(Se===null){Se=Me;try{h=Me.stateNode,ue?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=Me.stateNode,V=Me.memoizedProps.style,E=V!=null&&V.hasOwnProperty("display")?V.display:null,k.style.display=ye("display",E))}catch(et){un(n,n.return,et)}}}else if(Me.tag===6){if(Se===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(et){un(n,n.return,et)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;Se===Me&&(Se=null),Me=Me.return}Se===Me&&(Se=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Vi(i,n),nr(n),c&4&&Qp(n);break;case 21:break;default:Vi(i,n),nr(n)}}function nr(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if($p(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(we(h,""),c.flags&=-33);var g=Kp(n);Iu(n,g,h);break;case 3:case 4:var E=c.stateNode.containerInfo,k=Kp(n);Lu(n,k,E);break;default:throw Error(t(161))}}catch(V){un(n,n.return,V)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function zx(n,i,a){Ke=n,em(n)}function em(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,g=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||Sl;if(!E){var k=h.alternate,V=k!==null&&k.memoizedState!==null||Hn;k=Sl;var ue=Hn;if(Sl=E,(Hn=V)&&!ue)for(Ke=h;Ke!==null;)E=Ke,V=E.child,E.tag===22&&E.memoizedState!==null?im(h):V!==null?(V.return=E,Ke=V):im(h);for(;g!==null;)Ke=g,em(g),g=g.sibling;Ke=h,Sl=k,Hn=ue}tm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ke=g):tm(n)}}function tm(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Hn||Ml(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Hn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:zi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&np(i,g,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}np(i,E,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Se=ue.memoizedState;if(Se!==null){var Me=Se.dehydrated;Me!==null&&Xr(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Hn||i.flags&512&&Du(i)}catch(ve){un(i,i.return,ve)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function nm(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function im(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ml(4,i)}catch(V){un(i,a,V)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(V){un(i,h,V)}}var g=i.return;try{Du(i)}catch(V){un(i,g,V)}break;case 5:var E=i.return;try{Du(i)}catch(V){un(i,E,V)}}}catch(V){un(i,i.return,V)}if(i===n){Ke=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Ke=k;break}Ke=i.return}}var jx=Math.ceil,wl=P.ReactCurrentDispatcher,Uu=P.ReactCurrentOwner,Ai=P.ReactCurrentBatchConfig,Bt=0,An=null,gn=null,Un=0,vi=0,va=$r(0),Mn=0,yo=null,Ds=0,bl=0,Ou=0,So=null,si=null,Fu=0,_a=1/0,Tr=null,El=!1,ku=null,ts=null,Tl=!1,ns=null,Cl=0,Mo=0,Bu=null,Al=-1,Rl=0;function Kn(){return(Bt&6)!==0?Qt():Al!==-1?Al:Al=Qt()}function is(n){return(n.mode&1)===0?1:(Bt&2)!==0&&Un!==0?Un&-Un:bx.transition!==null?(Rl===0&&(Rl=_n()),Rl):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Ka(n.type)),n)}function Gi(n,i,a,c){if(50<Mo)throw Mo=0,Bu=null,Error(t(185));Ft(n,a,c),((Bt&2)===0||n!==An)&&(n===An&&((Bt&2)===0&&(bl|=a),Mn===4&&rs(n,Un)),ai(n,c),a===1&&Bt===0&&(i.mode&1)===0&&(_a=Qt()+500,il&&Zr()))}function ai(n,i){var a=n.callbackNode;bt(n,i);var c=Ot(n,n===An?Un:0);if(c===0)a!==null&&Ks(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ks(a),i===1)n.tag===0?wx(sm.bind(null,n)):Hh(sm.bind(null,n)),_x(function(){(Bt&6)===0&&Zr()}),a=null;else{switch(Tn(c)){case 1:a=q;break;case 4:a=ce;break;case 16:a=se;break;case 536870912:a=Ue;break;default:a=se}a=hm(a,rm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function rm(n,i){if(Al=-1,Rl=0,(Bt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(ya()&&n.callbackNode!==a)return null;var c=Ot(n,n===An?Un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Nl(n,c);else{i=c;var h=Bt;Bt|=2;var g=om();(An!==n||Un!==i)&&(Tr=null,_a=Qt()+500,Is(n,i));do try{Hx();break}catch(k){am(n,k)}while(!0);iu(),wl.current=g,Bt=h,gn!==null?i=0:(An=null,Un=0,i=Mn)}if(i!==0){if(i===2&&(h=Rt(n),h!==0&&(c=h,i=zu(n,h))),i===1)throw a=yo,Is(n,0),rs(n,c),ai(n,Qt()),a;if(i===6)rs(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Vx(h)&&(i=Nl(n,c),i===2&&(g=Rt(n),g!==0&&(c=g,i=zu(n,g))),i===1))throw a=yo,Is(n,0),rs(n,c),ai(n,Qt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Us(n,si,Tr);break;case 3:if(rs(n,c),(c&130023424)===c&&(i=Fu+500-Qt(),10<i)){if(Ot(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Kn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Xc(Us.bind(null,n,si,Tr),i);break}Us(n,si,Tr);break;case 4:if(rs(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-Ve(c);g=1<<E,E=i[E],E>h&&(h=E),c&=~g}if(c=h,c=Qt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*jx(c/1960))-c,10<c){n.timeoutHandle=Xc(Us.bind(null,n,si,Tr),c);break}Us(n,si,Tr);break;case 5:Us(n,si,Tr);break;default:throw Error(t(329))}}}return ai(n,Qt()),n.callbackNode===a?rm.bind(null,n):null}function zu(n,i){var a=So;return n.current.memoizedState.isDehydrated&&(Is(n,i).flags|=256),n=Nl(n,i),n!==2&&(i=si,si=a,i!==null&&ju(i)),n}function ju(n){si===null?si=n:si.push.apply(si,n)}function Vx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!ki(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function rs(n,i){for(i&=~Ou,i&=~bl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ve(i),c=1<<a;n[a]=-1,i&=~c}}function sm(n){if((Bt&6)!==0)throw Error(t(327));ya();var i=Ot(n,0);if((i&1)===0)return ai(n,Qt()),null;var a=Nl(n,i);if(n.tag!==0&&a===2){var c=Rt(n);c!==0&&(i=c,a=zu(n,c))}if(a===1)throw a=yo,Is(n,0),rs(n,i),ai(n,Qt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Us(n,si,Tr),ai(n,Qt()),null}function Vu(n,i){var a=Bt;Bt|=1;try{return n(i)}finally{Bt=a,Bt===0&&(_a=Qt()+500,il&&Zr())}}function Ls(n){ns!==null&&ns.tag===0&&(Bt&6)===0&&ya();var i=Bt;Bt|=1;var a=Ai.transition,c=xt;try{if(Ai.transition=null,xt=1,n)return n()}finally{xt=c,Ai.transition=a,Bt=i,(Bt&6)===0&&Zr()}}function Gu(){vi=va.current,tn(va)}function Is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,vx(a)),gn!==null)for(a=gn.return;a!==null;){var c=a;switch(Qc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&tl();break;case 3:ma(),tn(ni),tn(jn),du();break;case 5:cu(c);break;case 4:ma();break;case 13:tn(an);break;case 19:tn(an);break;case 10:ru(c.type._context);break;case 22:case 23:Gu()}a=a.return}if(An=n,gn=n=ss(n.current,null),Un=vi=i,Mn=0,yo=null,Ou=bl=Ds=0,si=So=null,Rs!==null){for(i=0;i<Rs.length;i++)if(a=Rs[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var E=g.next;g.next=h,c.next=E}a.pending=c}Rs=null}return n}function am(n,i){do{var a=gn;try{if(iu(),hl.current=xl,pl){for(var c=on.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}pl=!1}if(Ps=0,Cn=Sn=on=null,po=!1,mo=0,Uu.current=null,a===null||a.return===null){Mn=1,yo=i,gn=null;break}e:{var g=n,E=a.return,k=a,V=i;if(i=Un,k.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var ue=V,Se=k,Me=Se.tag;if((Se.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=Se.alternate;ve?(Se.updateQueue=ve.updateQueue,Se.memoizedState=ve.memoizedState,Se.lanes=ve.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Xe=Pp(E);if(Xe!==null){Xe.flags&=-257,Dp(Xe,E,k,g,i),Xe.mode&1&&Np(g,ue,i),i=Xe,V=ue;var Je=i.updateQueue;if(Je===null){var et=new Set;et.add(V),i.updateQueue=et}else Je.add(V);break e}else{if((i&1)===0){Np(g,ue,i),Hu();break e}V=Error(t(426))}}else if(rn&&k.mode&1){var pn=Pp(E);if(pn!==null){(pn.flags&65536)===0&&(pn.flags|=256),Dp(pn,E,k,g,i),tu(ga(V,k));break e}}g=V=ga(V,k),Mn!==4&&(Mn=2),So===null?So=[g]:So.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var J=Ap(g,V,i);tp(g,J);break e;case 1:k=V;var W=g.type,ne=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(ts===null||!ts.has(ne)))){g.flags|=65536,i&=-i,g.lanes|=i;var Te=Rp(g,k,i);tp(g,Te);break e}}g=g.return}while(g!==null)}cm(a)}catch(nt){i=nt,gn===a&&a!==null&&(gn=a=a.return);continue}break}while(!0)}function om(){var n=wl.current;return wl.current=xl,n===null?xl:n}function Hu(){(Mn===0||Mn===3||Mn===2)&&(Mn=4),An===null||(Ds&268435455)===0&&(bl&268435455)===0||rs(An,Un)}function Nl(n,i){var a=Bt;Bt|=2;var c=om();(An!==n||Un!==i)&&(Tr=null,Is(n,i));do try{Gx();break}catch(h){am(n,h)}while(!0);if(iu(),Bt=a,wl.current=c,gn!==null)throw Error(t(261));return An=null,Un=0,Mn}function Gx(){for(;gn!==null;)lm(gn)}function Hx(){for(;gn!==null&&!Xa();)lm(gn)}function lm(n){var i=fm(n.alternate,n,vi);n.memoizedProps=n.pendingProps,i===null?cm(n):gn=i,Uu.current=null}function cm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ox(a,i,vi),a!==null){gn=a;return}}else{if(a=Fx(a,i),a!==null){a.flags&=32767,gn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Mn=6,gn=null;return}}if(i=i.sibling,i!==null){gn=i;return}gn=i=n}while(i!==null);Mn===0&&(Mn=5)}function Us(n,i,a){var c=xt,h=Ai.transition;try{Ai.transition=null,xt=1,Wx(n,i,a,c)}finally{Ai.transition=h,xt=c}return null}function Wx(n,i,a,c){do ya();while(ns!==null);if((Bt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(Ui(n,g),n===An&&(gn=An=null,Un=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Tl||(Tl=!0,hm(se,function(){return ya(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Ai.transition,Ai.transition=null;var E=xt;xt=1;var k=Bt;Bt|=4,Uu.current=null,Bx(n,a),Jp(a,n),dx(Hc),Js=!!Gc,Hc=Gc=null,n.current=a,zx(a),Zs(),Bt=k,xt=E,Ai.transition=g}else n.current=a;if(Tl&&(Tl=!1,ns=n,Cl=h),g=n.pendingLanes,g===0&&(ts=null),$e(a.stateNode),ai(n,Qt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(El)throw El=!1,n=ku,ku=null,n;return(Cl&1)!==0&&n.tag!==0&&ya(),g=n.pendingLanes,(g&1)!==0?n===Bu?Mo++:(Mo=0,Bu=n):Mo=0,Zr(),null}function ya(){if(ns!==null){var n=Tn(Cl),i=Ai.transition,a=xt;try{if(Ai.transition=null,xt=16>n?16:n,ns===null)var c=!1;else{if(n=ns,ns=null,Cl=0,(Bt&6)!==0)throw Error(t(331));var h=Bt;for(Bt|=4,Ke=n.current;Ke!==null;){var g=Ke,E=g.child;if((Ke.flags&16)!==0){var k=g.deletions;if(k!==null){for(var V=0;V<k.length;V++){var ue=k[V];for(Ke=ue;Ke!==null;){var Se=Ke;switch(Se.tag){case 0:case 11:case 15:_o(8,Se,g)}var Me=Se.child;if(Me!==null)Me.return=Se,Ke=Me;else for(;Ke!==null;){Se=Ke;var ve=Se.sibling,Xe=Se.return;if(Yp(Se),Se===ue){Ke=null;break}if(ve!==null){ve.return=Xe,Ke=ve;break}Ke=Xe}}}var Je=g.alternate;if(Je!==null){var et=Je.child;if(et!==null){Je.child=null;do{var pn=et.sibling;et.sibling=null,et=pn}while(et!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ke=E;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:_o(9,g,g.return)}var J=g.sibling;if(J!==null){J.return=g.return,Ke=J;break e}Ke=g.return}}var W=n.current;for(Ke=W;Ke!==null;){E=Ke;var ne=E.child;if((E.subtreeFlags&2064)!==0&&ne!==null)ne.return=E,Ke=ne;else e:for(E=W;Ke!==null;){if(k=Ke,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Ml(9,k)}}catch(nt){un(k,k.return,nt)}if(k===E){Ke=null;break e}var Te=k.sibling;if(Te!==null){Te.return=k.return,Ke=Te;break e}Ke=k.return}}if(Bt=h,Zr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(je,n)}catch{}c=!0}return c}finally{xt=a,Ai.transition=i}}return!1}function um(n,i,a){i=ga(a,i),i=Ap(n,i,1),n=Jr(n,i,1),i=Kn(),n!==null&&(Ft(n,1,i),ai(n,i))}function un(n,i,a){if(n.tag===3)um(n,n,a);else for(;i!==null;){if(i.tag===3){um(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ts===null||!ts.has(c))){n=ga(a,n),n=Rp(i,n,1),i=Jr(i,n,1),n=Kn(),i!==null&&(Ft(i,1,n),ai(i,n));break}}i=i.return}}function Xx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Kn(),n.pingedLanes|=n.suspendedLanes&a,An===n&&(Un&a)===a&&(Mn===4||Mn===3&&(Un&130023424)===Un&&500>Qt()-Fu?Is(n,0):Ou|=a),ai(n,i)}function dm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Xt,Xt<<=1,(Xt&130023424)===0&&(Xt=4194304)));var a=Kn();n=wr(n,i),n!==null&&(Ft(n,i,a),ai(n,a))}function qx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),dm(n,a)}function Yx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),dm(n,a)}var fm;fm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||ni.current)ri=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return ri=!1,Ux(n,i,a);ri=(n.flags&131072)!==0}else ri=!1,rn&&(i.flags&1048576)!==0&&Wh(i,sl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;yl(n,i),n=i.pendingProps;var h=la(i,jn.current);pa(i,a),h=pu(null,i,c,n,h,a);var g=mu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,ii(c)?(g=!0,nl(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,ou(i),h.updater=vl,i.stateNode=h,h._reactInternals=i,Su(i,c,n,a),i=Eu(null,i,c,!0,g,a)):(i.tag=0,rn&&g&&Zc(i),$n(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(yl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Kx(c),n=zi(c,n),h){case 0:i=bu(null,i,c,n,a);break e;case 1:i=kp(null,i,c,n,a);break e;case 11:i=Lp(null,i,c,n,a);break e;case 14:i=Ip(null,i,c,zi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),bu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),kp(n,i,c,h,a);case 3:e:{if(Bp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,ep(n,i),dl(i,c,null,a);var E=i.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=ga(Error(t(423)),i),i=zp(n,i,c,a,h);break e}else if(c!==h){h=ga(Error(t(424)),i),i=zp(n,i,c,a,h);break e}else for(xi=Yr(i.stateNode.containerInfo.firstChild),gi=i,rn=!0,Bi=null,a=Qh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(da(),c===h){i=Er(n,i,a);break e}$n(n,i,c,a)}i=i.child}return i;case 5:return ip(i),n===null&&eu(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,E=h.children,Wc(c,h)?E=null:g!==null&&Wc(c,g)&&(i.flags|=32),Fp(n,i),$n(n,i,E,a),i.child;case 6:return n===null&&eu(i),null;case 13:return jp(n,i,a);case 4:return lu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=fa(i,null,c,a):$n(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),Lp(n,i,c,h,a);case 7:return $n(n,i,i.pendingProps,a),i.child;case 8:return $n(n,i,i.pendingProps.children,a),i.child;case 12:return $n(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,E=h.value,Jt(ll,c._currentValue),c._currentValue=E,g!==null)if(ki(g.value,E)){if(g.children===h.children&&!ni.current){i=Er(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){E=g.child;for(var V=k.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=br(-1,a&-a),V.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var Se=ue.pending;Se===null?V.next=V:(V.next=Se.next,Se.next=V),ue.pending=V}}g.lanes|=a,V=g.alternate,V!==null&&(V.lanes|=a),su(g.return,a,i),k.lanes|=a;break}V=V.next}}else if(g.tag===10)E=g.type===i.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=a,k=E.alternate,k!==null&&(k.lanes|=a),su(E,a,i),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===i){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}$n(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,pa(i,a),h=Ti(h),c=c(h),i.flags|=1,$n(n,i,c,a),i.child;case 14:return c=i.type,h=zi(c,i.pendingProps),h=zi(c.type,h),Ip(n,i,c,h,a);case 15:return Up(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:zi(c,h),yl(n,i),i.tag=1,ii(c)?(n=!0,nl(i)):n=!1,pa(i,a),Tp(i,c,h),Su(i,c,h,a),Eu(null,i,c,!0,n,a);case 19:return Gp(n,i,a);case 22:return Op(n,i,a)}throw Error(t(156,i.tag))};function hm(n,i){return Ii(n,i)}function $x(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ri(n,i,a,c){return new $x(n,i,a,c)}function Wu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kx(n){if(typeof n=="function")return Wu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===re)return 14}return 2}function ss(n,i){var a=n.alternate;return a===null?(a=Ri(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Pl(n,i,a,c,h,g){var E=2;if(c=n,typeof n=="function")Wu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Os(a.children,h,g,i);case z:E=8,h|=8;break;case b:return n=Ri(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case Z:return n=Ri(13,a,i,h),n.elementType=Z,n.lanes=g,n;case ie:return n=Ri(19,a,i,h),n.elementType=ie,n.lanes=g,n;case Y:return Dl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:E=10;break e;case B:E=9;break e;case $:E=11;break e;case re:E=14;break e;case ee:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Ri(E,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function Os(n,i,a,c){return n=Ri(7,n,c,i),n.lanes=a,n}function Dl(n,i,a,c){return n=Ri(22,n,c,i),n.elementType=Y,n.lanes=a,n.stateNode={isHidden:!1},n}function Xu(n,i,a){return n=Ri(6,n,null,i),n.lanes=a,n}function qu(n,i,a){return i=Ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Zx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ei(0),this.expirationTimes=ei(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ei(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Yu(n,i,a,c,h,g,E,k,V){return n=new Zx(n,i,a,k,V),i===1?(i=1,g===!0&&(i|=8)):i=0,g=Ri(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ou(g),n}function Qx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function pm(n){if(!n)return Kr;n=n._reactInternals;e:{if(fi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(ii(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(ii(a))return Vh(n,a,i)}return i}function mm(n,i,a,c,h,g,E,k,V){return n=Yu(a,c,!0,n,h,g,E,k,V),n.context=pm(null),a=n.current,c=Kn(),h=is(a),g=br(c,h),g.callback=i??null,Jr(a,g,h),n.current.lanes=h,Ft(n,h,c),ai(n,c),n}function Ll(n,i,a,c){var h=i.current,g=Kn(),E=is(h);return a=pm(a),i.context===null?i.context=a:i.pendingContext=a,i=br(g,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Jr(h,i,E),n!==null&&(Gi(n,h,E,g),ul(n,h,E)),E}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function gm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function $u(n,i){gm(n,i),(n=n.alternate)&&gm(n,i)}function Jx(){return null}var xm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ku(n){this._internalRoot=n}Ul.prototype.render=Ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Ll(n,i,null,null)},Ul.prototype.unmount=Ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Ls(function(){Ll(null,n,null,null)}),i[_r]=null}};function Ul(n){this._internalRoot=n}Ul.prototype.unstable_scheduleHydration=function(n){if(n){var i=ti();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Fi.length&&i!==0&&i<Fi[a].priority;a++);Fi.splice(a,0,n),a===0&&Wo(n)}};function Zu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ol(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vm(){}function ev(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ue=Il(E);g.call(ue)}}var E=mm(i,c,n,0,null,!1,!1,"",vm);return n._reactRootContainer=E,n[_r]=E.current,so(n.nodeType===8?n.parentNode:n),Ls(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var ue=Il(V);k.call(ue)}}var V=Yu(n,0,!1,null,null,!1,!1,"",vm);return n._reactRootContainer=V,n[_r]=V.current,so(n.nodeType===8?n.parentNode:n),Ls(function(){Ll(i,V,a,c)}),V}function Fl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var E=g;if(typeof h=="function"){var k=h;h=function(){var V=Il(E);k.call(V)}}Ll(i,E,n,h)}else E=ev(a,i,n,h,c);return Il(E)}fn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Gt(i.pendingLanes);a!==0&&(kt(i,a|1),ai(i,Qt()),(Bt&6)===0&&(_a=Qt()+500,Zr()))}break;case 13:Ls(function(){var c=wr(n,1);if(c!==null){var h=Kn();Gi(c,n,1,h)}}),$u(n,1)}},hn=function(n){if(n.tag===13){var i=wr(n,134217728);if(i!==null){var a=Kn();Gi(i,n,134217728,a)}$u(n,134217728)}},xr=function(n){if(n.tag===13){var i=is(n),a=wr(n,i);if(a!==null){var c=Kn();Gi(a,n,i,c)}$u(n,i)}},ti=function(){return xt},qa=function(n,i){var a=xt;try{return xt=n,i()}finally{xt=a}},Pe=function(n,i,a){switch(i){case"input":if(Ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=el(c);if(!h)throw Error(t(90));Zt(c),Ht(c,h)}}}break;case"textarea":w(n,a);break;case"select":i=a.value,i!=null&&Le(n,!!a.multiple,i,!1)}},lt=Vu,ot=Ls;var tv={usingClientEntryPoint:!1,Events:[lo,aa,el,me,Ee,Vu]},wo={findFiberByHostInstance:Es,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nv={bundleType:wo.bundleType,version:wo.version,rendererPackageName:wo.rendererPackageName,rendererConfig:wo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Li(n),n===null?null:n.stateNode},findFiberByHostInstance:wo.findFiberByHostInstance||Jx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{je=kl.inject(nv),Ae=kl}catch{}}return oi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tv,oi.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zu(i))throw Error(t(200));return Qx(n,i,null,a)},oi.createRoot=function(n,i){if(!Zu(n))throw Error(t(299));var a=!1,c="",h=xm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Yu(n,1,!1,null,null,a,!1,c,h),n[_r]=i.current,so(n.nodeType===8?n.parentNode:n),new Ku(i)},oi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Li(i),n=n===null?null:n.stateNode,n},oi.flushSync=function(n){return Ls(n)},oi.hydrate=function(n,i,a){if(!Ol(i))throw Error(t(200));return Fl(null,n,i,!0,a)},oi.hydrateRoot=function(n,i,a){if(!Zu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",E=xm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=mm(i,null,n,1,a??null,h,!1,g,E),n[_r]=i.current,so(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new Ul(i)},oi.render=function(n,i,a){if(!Ol(i))throw Error(t(200));return Fl(null,n,i,!1,a)},oi.unmountComponentAtNode=function(n){if(!Ol(n))throw Error(t(40));return n._reactRootContainer?(Ls(function(){Fl(null,null,n,!1,function(){n._reactRootContainer=null,n[_r]=null})}),!0):!1},oi.unstable_batchedUpdates=Vu,oi.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!Ol(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Fl(n,i,a,!1,c)},oi.version="18.3.1-next-f1338f8080-20240426",oi}var Tm;function dv(){if(Tm)return ed.exports;Tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ed.exports=uv(),ed.exports}var Cm;function fv(){if(Cm)return Bl;Cm=1;var s=dv();return Bl.createRoot=s.createRoot,Bl.hydrateRoot=s.hydrateRoot,Bl}var hv=fv();const pv=k0(hv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),B0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=Oe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>Oe.createElement("svg",{ref:p,...gv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:B0("lucide",o),...f},[...d.map(([m,x])=>Oe.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(s,e)=>{const t=Oe.forwardRef(({className:r,...o},l)=>Oe.createElement(xv,{ref:l,iconNode:e,className:B0(`lucide-${mv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=pt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=pt("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=pt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=pt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=pt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=pt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=pt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=pt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=pt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=pt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=pt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=pt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=pt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=pt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=pt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nm=pt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=pt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=pt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=pt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=pt("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=pt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=pt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=pt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=pt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=pt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=pt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=pt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=pt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=pt("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=pt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=pt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=pt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=pt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=pt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=pt("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=pt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=pt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=pt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=pt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=pt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=pt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=pt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=pt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=pt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=pt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=pt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=pt("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=pt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=pt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=pt("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=pt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Gv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Oe.useState(!1),[o,l]=Oe.useState(!1);Oe.useEffect(()=>{const f=()=>{r(window.scrollY>window.innerHeight*.7)};return window.addEventListener("scroll",f,{passive:!0}),f(),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:Uo},{name:"Central VTS",href:"#central-vts",icon:Fv},{name:"Normas NBR",href:"#normas",icon:Fd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:z0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:xc},{name:"Manuais",href:"#manuais",icon:Fd},{name:"Fotos Reais",href:"#galeria",icon:jo},{name:"Contato",href:"#contato",icon:Ur}];return u.jsxs("div",{className:`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${t?"opacity-100 translate-y-0 pointer-events-auto":"opacity-0 -translate-y-full pointer-events-none"}`,children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium shadow-md",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(Ur,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(xc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(Bd,{className:"w-6 h-6"}):u.jsx(Nv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(Ur,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="182",Oa={ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hv=0,Lm=1,Wv=2,lc=1,Bf=2,Lo=3,vs=0,ui=1,Lr=2,Or=0,Fa=1,Im=2,Um=3,Om=4,Xv=5,Gs=100,qv=101,Yv=102,$v=103,Kv=104,Zv=200,Qv=201,Jv=202,e_=203,zd=204,jd=205,t_=206,n_=207,i_=208,r_=209,s_=210,a_=211,o_=212,l_=213,c_=214,Vd=0,Gd=1,Hd=2,Ba=3,Wd=4,Xd=5,qd=6,Yd=7,q0=0,u_=1,d_=2,or=0,Y0=1,$0=2,K0=3,Mc=4,Z0=5,Q0=6,J0=7,eg=300,qs=301,za=302,$d=303,Kd=304,wc=306,Zd=1e3,Ir=1001,Qd=1002,Fn=1003,f_=1004,zl=1005,Pn=1006,rd=1007,Ws=1008,Si=1009,tg=1010,ng=1011,Oo=1012,zf=1013,ur=1014,sr=1015,kr=1016,jf=1017,Vf=1018,Fo=1020,ig=35902,rg=35899,sg=1021,ag=1022,$i=1023,Br=1026,Xs=1027,og=1028,Gf=1029,ja=1030,Hf=1031,Wf=1033,cc=33776,uc=33777,dc=33778,fc=33779,Jd=35840,ef=35841,tf=35842,nf=35843,rf=36196,sf=37492,af=37496,of=37488,lf=37489,cf=37490,uf=37491,df=37808,ff=37809,hf=37810,pf=37811,mf=37812,gf=37813,xf=37814,vf=37815,_f=37816,yf=37817,Sf=37818,Mf=37819,wf=37820,bf=37821,Ef=36492,Tf=36494,Cf=36495,Af=36283,Rf=36284,Nf=36285,Pf=36286,h_=3200,lg=0,p_=1,ms="",On="srgb",Va="srgb-linear",vc="linear",$t="srgb",Sa=7680,Fm=519,m_=512,g_=513,x_=514,Xf=515,v_=516,__=517,qf=518,y_=519,km=35044,Bm="300 es",ar=2e3,_c=2001;function cg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ko(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function S_(){const s=ko("canvas");return s.style.display="block",s}const zm={};function jm(...s){const e="THREE."+s.shift();console.log(e,...s)}function _t(...s){const e="THREE."+s.shift();console.warn(e,...s)}function zt(...s){const e="THREE."+s.shift();console.error(e,...s)}function Bo(...s){const e=s.join(" ");e in zm||(zm[e]=!0,_t(...s))}function M_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class $s{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hc=Math.PI/180,yc=180/Math.PI;function Vo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Wn[s&255]+Wn[s>>8&255]+Wn[s>>16&255]+Wn[s>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[r&255]+Wn[r>>8&255]+Wn[r>>16&255]+Wn[r>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function w_(s,e){return(s%e+e)%e}function sd(s,e,t){return(1-t)*s+t*e}function Eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function li(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const b_={DEG2RAD:hc};class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],A=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(v!==A||p!==S||m!==M||x!==T){let y=p*S+m*M+x*T+v*A;y<0&&(S=-S,M=-M,T=-T,A=-A,y=-y);let _=1-f;if(y<.9995){const C=Math.acos(y),L=Math.sin(C);_=Math.sin(_*C)/L,f=Math.sin(f*C)/L,p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f}else{p=p*_+S*f,m=m*_+M*f,x=x*_+T*f,v=v*_+A*f;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+x*v+p*M-m*S,e[t+1]=p*T+x*S+m*v-f*M,e[t+2]=m*T+x*M+f*S-p*v,e[t+3]=x*T-f*v-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),x=f(o/2),v=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"YXZ":this._x=S*x*v+m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"ZXY":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v-S*M*T;break;case"ZYX":this._x=S*x*v-m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v+S*M*T;break;case"YZX":this._x=S*x*v+m*M*T,this._y=m*M*v+S*x*T,this._z=m*x*T-S*M*v,this._w=m*x*v-S*M*T;break;case"XZY":this._x=S*x*v-m*M*T,this._y=m*M*v-S*x*T,this._z=m*x*T+S*M*v,this._w=m*x*v+S*M*T;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],x=t[6],v=t[10],S=r+f+v;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>v){const M=2*Math.sqrt(1+r-f-v);this._w=(x-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>v){const M=2*Math.sqrt(1+f-r-v);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+x)/M}else{const M=2*Math.sqrt(1+v-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+d*f+o*m-l*p,this._y=o*x+d*p+l*f-r*m,this._z=l*x+d*m+r*p-o*f,this._w=d*x-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,t=0,r=0){K.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),x=2*(f*t-l*o),v=2*(l*r-d*t);return this.x=t+p*m+d*v-f*x,this.y=r+p*x+f*m-l*v,this.z=o+p*v+l*x-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ad.copy(this).projectOnVector(e),this.sub(ad)}reflect(e){return this.sub(ad.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ad=new K,Vm=new Ys;class Tt{constructor(e,t,r,o,l,d,f,p,m){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=d,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],x=r[4],v=r[7],S=r[2],M=r[5],T=r[8],A=o[0],y=o[3],_=o[6],C=o[1],L=o[4],P=o[7],U=o[2],D=o[5],O=o[8];return l[0]=d*A+f*C+p*U,l[3]=d*y+f*L+p*D,l[6]=d*_+f*P+p*O,l[1]=m*A+x*C+v*U,l[4]=m*y+x*L+v*D,l[7]=m*_+x*P+v*O,l[2]=S*A+M*C+T*U,l[5]=S*y+M*L+T*D,l[8]=S*_+M*P+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8];return t*d*x-t*f*m-r*l*x+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=x*d-f*m,S=f*p-x*l,M=m*l-d*p,T=t*v+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-x*r)*A,e[2]=(f*r-o*d)*A,e[3]=S*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-f*t)*A,e[6]=M*A,e[7]=(r*p-m*t)*A,e[8]=(d*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(od.makeScale(e,t)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,t){return this.premultiply(od.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new Tt,Gm=new Tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hm=new Tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function E_(){const s={enabled:!0,workingColorSpace:Va,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===$t&&(o.r=Fr(o.r),o.g=Fr(o.g),o.b=Fr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===$t&&(o.r=ka(o.r),o.g=ka(o.g),o.b=ka(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ms?vc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Va]:{primaries:e,whitePoint:r,transfer:vc,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:r,transfer:$t,toXYZ:Gm,fromXYZ:Hm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),s}const jt=E_();function Fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ka(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ma;class T_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ma===void 0&&(Ma=ko("canvas")),Ma.width=e.width,Ma.height=e.height;const o=Ma.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ma}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ko("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=Fr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Fr(t[r]/255)*255):t[r]=Fr(t[r]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let C_=0;class Yf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:C_++}),this.uuid=Vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(ld(o[d].image)):l.push(ld(o[d]))}else l=ld(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ld(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?T_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let A_=0;const cd=new K;class kn extends $s{constructor(e=kn.DEFAULT_IMAGE,t=kn.DEFAULT_MAPPING,r=Ir,o=Ir,l=Pn,d=Ws,f=$i,p=Si,m=kn.DEFAULT_ANISOTROPY,x=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:A_++}),this.uuid=Vo(),this.name="",this.source=new Yf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=eg;kn.DEFAULT_ANISOTROPY=1;class dn{constructor(e=0,t=0,r=0,o=1){dn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],S=p[1],M=p[5],T=p[9],A=p[2],y=p[6],_=p[10];if(Math.abs(x-S)<.01&&Math.abs(v-A)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(v+A)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(M+1)/2,U=(_+1)/2,D=(x+S)/4,O=(v+A)/4,z=(T+y)/4;return L>P&&L>U?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=O/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=z/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=z/l),this.set(r,o,l,t),this}let C=Math.sqrt((y-T)*(y-T)+(v-A)*(v-A)+(S-x)*(S-x));return Math.abs(C)<.001&&(C=1),this.x=(y-T)/C,this.y=(v-A)/C,this.z=(S-x)/C,this.w=Math.acos((m+M+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class R_ extends $s{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new dn(0,0,e,t),this.scissorTest=!1,this.viewport=new dn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new kn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Yf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends R_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ug extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class N_ extends kn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(e=new K(1/0,1/0,1/0),t=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Hi):Hi.fromBufferAttribute(l,d),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),jl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),jl.copy(r.boundingBox)),jl.applyMatrix4(e.matrixWorld),this.union(jl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),Vl.subVectors(this.max,To),wa.subVectors(e.a,To),ba.subVectors(e.b,To),Ea.subVectors(e.c,To),os.subVectors(ba,wa),ls.subVectors(Ea,ba),Fs.subVectors(wa,Ea);let t=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Fs.z,Fs.y,os.z,0,-os.x,ls.z,0,-ls.x,Fs.z,0,-Fs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Fs.y,Fs.x,0];return!ud(t,wa,ba,Ea,Vl)||(t=[1,0,0,0,1,0,0,0,1],!ud(t,wa,ba,Ea,Vl))?!1:(Gl.crossVectors(os,ls),t=[Gl.x,Gl.y,Gl.z],ud(t,wa,ba,Ea,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new K,new K,new K,new K,new K,new K,new K,new K],Hi=new K,jl=new Go,wa=new K,ba=new K,Ea=new K,os=new K,ls=new K,Fs=new K,To=new K,Vl=new K,Gl=new K,ks=new K;function ud(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ks.fromArray(s,l);const f=o.x*Math.abs(ks.x)+o.y*Math.abs(ks.y)+o.z*Math.abs(ks.z),p=e.dot(ks),m=t.dot(ks),x=r.dot(ks);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>f)return!1}return!0}const P_=new Go,Co=new K,dd=new K;class $f{constructor(e=new K,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):P_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const t=Co.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Co,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add(dd)),this.expandByPoint(Co.copy(e.center).sub(dd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ar=new K,fd=new K,Hl=new K,cs=new K,hd=new K,Wl=new K,pd=new K;class Kf{constructor(e=new K,t=new K(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){fd.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),cs.copy(this.origin).sub(fd);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Hl),f=cs.dot(this.direction),p=-cs.dot(Hl),m=cs.lengthSq(),x=Math.abs(1-d*d);let v,S,M,T;if(x>0)if(v=d*p-f,S=d*f-p,T=l*x,v>=0)if(S>=-T)if(S<=T){const A=1/x;v*=A,S*=A,M=v*(v+d*S+2*f)+S*(d*v+S+2*p)+m}else S=l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S=-l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;else S<=-T?(v=Math.max(0,-(-d*l+f)),S=v>0?-l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m):S<=T?(v=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(v=Math.max(0,-(d*l+f)),S=v>0?l:Math.min(Math.max(-l,-p),l),M=-v*v+S*(S+2*p)+m);else S=d>0?-l:l,v=Math.max(0,-(d*S+f)),M=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(fd).addScaledVector(Hl,S),M}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const r=Ar.dot(this.direction),o=Ar.dot(Ar)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(l=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(l=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),v>=0?(f=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(f=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,r,o,l){hd.subVectors(t,e),Wl.subVectors(r,e),pd.crossVectors(hd,Wl);let d=this.direction.dot(pd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;cs.subVectors(this.origin,e);const p=f*this.direction.dot(Wl.crossVectors(cs,Wl));if(p<0)return null;const m=f*this.direction.dot(hd.cross(cs));if(m<0||p+m>d)return null;const x=-f*cs.dot(pd);return x<0?null:this.at(x/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ln{constructor(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y)}set(e,t,r,o,l,d,f,p,m,x,v,S,M,T,A,y){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=d,_[9]=f,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=S,_[3]=M,_[7]=T,_[11]=A,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Ta.setFromMatrixColumn(e,0).length(),l=1/Ta.setFromMatrixColumn(e,1).length(),d=1/Ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=M+T*m,t[5]=S-A*m,t[9]=-f*p,t[2]=A-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S+A*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*v,t[5]=d*x,t[9]=-f,t[2]=M*f-T,t[6]=A+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*x,M=p*v,T=m*x,A=m*v;t[0]=S-A*f,t[4]=-d*v,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*x,t[9]=A-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*x,M=d*v,T=f*x,A=f*v;t[0]=p*x,t[4]=T*m-M,t[8]=S*m+A,t[1]=p*v,t[5]=A*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=A-S*v,t[8]=T*v+M,t[1]=v,t[5]=d*x,t[9]=-f*x,t[2]=-m*x,t[6]=M*v+T,t[10]=S-A*v}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,A=f*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=S*v+A,t[5]=d*x,t[9]=M*v-T,t[2]=T*v-M,t[6]=f*x,t[10]=A*v+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(D_,e,L_)}lookAt(e,t,r){const o=this.elements;return _i.subVectors(e,t),_i.lengthSq()===0&&(_i.z=1),_i.normalize(),us.crossVectors(r,_i),us.lengthSq()===0&&(Math.abs(r.z)===1?_i.x+=1e-4:_i.z+=1e-4,_i.normalize(),us.crossVectors(r,_i)),us.normalize(),Xl.crossVectors(_i,us),o[0]=us.x,o[4]=Xl.x,o[8]=_i.x,o[1]=us.y,o[5]=Xl.y,o[9]=_i.y,o[2]=us.z,o[6]=Xl.z,o[10]=_i.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],x=r[1],v=r[5],S=r[9],M=r[13],T=r[2],A=r[6],y=r[10],_=r[14],C=r[3],L=r[7],P=r[11],U=r[15],D=o[0],O=o[4],z=o[8],b=o[12],N=o[1],B=o[5],$=o[9],Z=o[13],ie=o[2],re=o[6],ee=o[10],Y=o[14],X=o[3],fe=o[7],oe=o[11],F=o[15];return l[0]=d*D+f*N+p*ie+m*X,l[4]=d*O+f*B+p*re+m*fe,l[8]=d*z+f*$+p*ee+m*oe,l[12]=d*b+f*Z+p*Y+m*F,l[1]=x*D+v*N+S*ie+M*X,l[5]=x*O+v*B+S*re+M*fe,l[9]=x*z+v*$+S*ee+M*oe,l[13]=x*b+v*Z+S*Y+M*F,l[2]=T*D+A*N+y*ie+_*X,l[6]=T*O+A*B+y*re+_*fe,l[10]=T*z+A*$+y*ee+_*oe,l[14]=T*b+A*Z+y*Y+_*F,l[3]=C*D+L*N+P*ie+U*X,l[7]=C*O+L*B+P*re+U*fe,l[11]=C*z+L*$+P*ee+U*oe,l[15]=C*b+L*Z+P*Y+U*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],x=e[2],v=e[6],S=e[10],M=e[14],T=e[3],A=e[7],y=e[11],_=e[15],C=p*M-m*S,L=f*M-m*v,P=f*S-p*v,U=d*M-m*x,D=d*S-p*x,O=d*v-f*x;return t*(A*C-y*L+_*P)-r*(T*C-y*U+_*D)+o*(T*L-A*U+_*O)-l*(T*P-A*D+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],x=e[8],v=e[9],S=e[10],M=e[11],T=e[12],A=e[13],y=e[14],_=e[15],C=v*y*m-A*S*m+A*p*M-f*y*M-v*p*_+f*S*_,L=T*S*m-x*y*m-T*p*M+d*y*M+x*p*_-d*S*_,P=x*A*m-T*v*m+T*f*M-d*A*M-x*f*_+d*v*_,U=T*v*p-x*A*p-T*f*S+d*A*S+x*f*y-d*v*y,D=t*C+r*L+o*P+l*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=C*O,e[1]=(A*S*l-v*y*l-A*o*M+r*y*M+v*o*_-r*S*_)*O,e[2]=(f*y*l-A*p*l+A*o*m-r*y*m-f*o*_+r*p*_)*O,e[3]=(v*p*l-f*S*l-v*o*m+r*S*m+f*o*M-r*p*M)*O,e[4]=L*O,e[5]=(x*y*l-T*S*l+T*o*M-t*y*M-x*o*_+t*S*_)*O,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*_-t*p*_)*O,e[7]=(d*S*l-x*p*l+x*o*m-t*S*m-d*o*M+t*p*M)*O,e[8]=P*O,e[9]=(T*v*l-x*A*l-T*r*M+t*A*M+x*r*_-t*v*_)*O,e[10]=(d*A*l-T*f*l+T*r*m-t*A*m-d*r*_+t*f*_)*O,e[11]=(x*f*l-d*v*l-x*r*m+t*v*m+d*r*M-t*f*M)*O,e[12]=U*O,e[13]=(x*A*o-T*v*o+T*r*S-t*A*S-x*r*y+t*v*y)*O,e[14]=(T*f*o-d*A*o-T*r*p+t*A*p+d*r*y-t*f*y)*O,e[15]=(d*v*o-x*f*o+x*r*p-t*v*p-d*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,x=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,x*f+r,x*p-o*d,0,m*p-o*f,x*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,x=d+d,v=f+f,S=l*m,M=l*x,T=l*v,A=d*x,y=d*v,_=f*v,C=p*m,L=p*x,P=p*v,U=r.x,D=r.y,O=r.z;return o[0]=(1-(A+_))*U,o[1]=(M+P)*U,o[2]=(T-L)*U,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(S+_))*D,o[6]=(y+C)*D,o[7]=0,o[8]=(T+L)*O,o[9]=(y-C)*O,o[10]=(1-(S+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=Ta.set(o[0],o[1],o[2]).length();const d=Ta.set(o[4],o[5],o[6]).length(),f=Ta.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Wi.copy(this);const m=1/l,x=1/d,v=1/f;return Wi.elements[0]*=m,Wi.elements[1]*=m,Wi.elements[2]*=m,Wi.elements[4]*=x,Wi.elements[5]*=x,Wi.elements[6]*=x,Wi.elements[8]*=v,Wi.elements[9]*=v,Wi.elements[10]*=v,t.setFromRotationMatrix(Wi),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=ar,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,A;if(p)T=l/(d-l),A=d*l/(d-l);else if(f===ar)T=-(d+l)/(d-l),A=-2*d*l/(d-l);else if(f===_c)T=-d/(d-l),A=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=ar,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,A;if(p)T=1/(d-l),A=d/(d-l);else if(f===ar)T=-2/(d-l),A=-(d+l)/(d-l);else if(f===_c)T=-1/(d-l),A=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=x,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ta=new K,Wi=new ln,D_=new K(0,0,0),L_=new K(1,1,1),us=new K,Xl=new K,_i=new K,Wm=new ln,Xm=new Ys;class dr{constructor(e=0,t=0,r=0,o=dr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],x=o[9],v=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-It(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(It(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-It(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,M),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xm.setFromEuler(this),this.setFromQuaternion(Xm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dr.DEFAULT_ORDER="XYZ";class Zf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let I_=0;const qm=new K,Ca=new Ys,Rr=new ln,ql=new K,Ao=new K,U_=new K,O_=new Ys,Ym=new K(1,0,0),$m=new K(0,1,0),Km=new K(0,0,1),Zm={type:"added"},F_={type:"removed"},Aa={type:"childadded",child:null},md={type:"childremoved",child:null};class Dn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=Vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new K,t=new dr,r=new Ys,o=new K(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new Tt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ca.setFromAxisAngle(e,t),this.quaternion.multiply(Ca),this}rotateOnWorldAxis(e,t){return Ca.setFromAxisAngle(e,t),this.quaternion.premultiply(Ca),this}rotateX(e){return this.rotateOnAxis(Ym,e)}rotateY(e){return this.rotateOnAxis($m,e)}rotateZ(e){return this.rotateOnAxis(Km,e)}translateOnAxis(e,t){return qm.copy(e).applyQuaternion(this.quaternion),this.position.add(qm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ym,e)}translateY(e){return this.translateOnAxis($m,e)}translateZ(e){return this.translateOnAxis(Km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Rr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?ql.copy(e):ql.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rr.lookAt(Ao,ql,this.up):Rr.lookAt(ql,Ao,this.up),this.quaternion.setFromRotationMatrix(Rr),o&&(Rr.extractRotation(o.matrixWorld),Ca.setFromRotationMatrix(Rr),this.quaternion.premultiply(Ca.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zm),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(F_),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zm),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,e,U_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ao,O_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),x=d(e.images),v=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const x=f[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Dn.DEFAULT_UP=new K(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new K,Nr=new K,gd=new K,Pr=new K,Ra=new K,Na=new K,Qm=new K,xd=new K,vd=new K,_d=new K,yd=new dn,Sd=new dn,Md=new dn;class qi{constructor(e=new K,t=new K,r=new K){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Xi.subVectors(e,t),o.cross(Xi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Xi.subVectors(o,t),Nr.subVectors(r,t),gd.subVectors(e,t);const d=Xi.dot(Xi),f=Xi.dot(Nr),p=Xi.dot(gd),m=Nr.dot(Nr),x=Nr.dot(gd),v=d*m-f*f;if(v===0)return l.set(0,0,0),null;const S=1/v,M=(m*p-f*x)*S,T=(d*x-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Pr)===null?!1:Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,Pr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Pr.x),p.addScaledVector(d,Pr.y),p.addScaledVector(f,Pr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return yd.setScalar(0),Sd.setScalar(0),Md.setScalar(0),yd.fromBufferAttribute(e,t),Sd.fromBufferAttribute(e,r),Md.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(yd,l.x),d.addScaledVector(Sd,l.y),d.addScaledVector(Md,l.z),d}static isFrontFacing(e,t,r,o){return Xi.subVectors(r,t),Nr.subVectors(e,t),Xi.cross(Nr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Nr.subVectors(this.a,this.b),Xi.cross(Nr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return qi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return qi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;Ra.subVectors(o,r),Na.subVectors(l,r),xd.subVectors(e,r);const p=Ra.dot(xd),m=Na.dot(xd);if(p<=0&&m<=0)return t.copy(r);vd.subVectors(e,o);const x=Ra.dot(vd),v=Na.dot(vd);if(x>=0&&v<=x)return t.copy(o);const S=p*v-x*m;if(S<=0&&p>=0&&x<=0)return d=p/(p-x),t.copy(r).addScaledVector(Ra,d);_d.subVectors(e,l);const M=Ra.dot(_d),T=Na.dot(_d);if(T>=0&&M<=T)return t.copy(l);const A=M*m-p*T;if(A<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(Na,f);const y=x*T-M*v;if(y<=0&&v-x>=0&&M-T>=0)return Qm.subVectors(l,o),f=(v-x)/(v-x+(M-T)),t.copy(o).addScaledVector(Qm,f);const _=1/(y+A+S);return d=A*_,f=S*_,t.copy(r).addScaledVector(Ra,d).addScaledVector(Na,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function wd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,jt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=jt.workingColorSpace){return this.r=e,this.g=t,this.b=r,jt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=jt.workingColorSpace){if(e=w_(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=wd(d,l,e+1/3),this.g=wd(d,l,e),this.b=wd(d,l,e-1/3)}return jt.colorSpaceToWorking(this,o),this}setStyle(e,t=On){function r(l){l!==void 0&&parseFloat(l)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return jt.workingToColorSpace(Xn.copy(this),e),Math.round(It(Xn.r*255,0,255))*65536+Math.round(It(Xn.g*255,0,255))*256+Math.round(It(Xn.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=jt.workingColorSpace){jt.workingToColorSpace(Xn.copy(this),t);const r=Xn.r,o=Xn.g,l=Xn.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const x=(f+d)/2;if(f===d)p=0,m=0;else{const v=d-f;switch(m=x<=.5?v/(d+f):v/(2-d-f),d){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=jt.workingColorSpace){return jt.workingToColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=On){jt.workingToColorSpace(Xn.copy(this),e);const t=Xn.r,r=Xn.g,o=Xn.b;return e!==On?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(Yl);const r=sd(ds.h,Yl.h,t),o=sd(ds.s,Yl.s,t),l=sd(ds.l,Yl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xn=new At;At.NAMES=dg;let k_=0;class Ho extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=Vo(),this.name="",this.type="Material",this.blending=Fa,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=jd,this.blendEquation=Gs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sa,this.stencilZFail=Sa,this.stencilZPass=Sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(r.blending=this.blending),this.side!==vs&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==zd&&(r.blendSrc=this.blendSrc),this.blendDst!==jd&&(r.blendDst=this.blendDst),this.blendEquation!==Gs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sa&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Sa&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Sa&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yi extends Ho{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xn=new K,$l=new mt;let B_=0;class cr{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:B_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=km,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)$l.fromBufferAttribute(this,t),$l.applyMatrix3(e),this.setXY(t,$l.x,$l.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=li(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=li(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=li(t,this.array),r=li(r,this.array),o=li(o,this.array),l=li(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==km&&(e.usage=this.usage),e}}class fg extends cr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class hg extends cr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class mn extends cr{constructor(e,t,r){super(new Float32Array(e),t,r)}}let z_=0;const Ni=new ln,bd=new Dn,Pa=new K,yi=new Go,Ro=new Go,Nn=new K;class Mi extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=Vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cg(e)?hg:fg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Tt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ni.makeRotationFromQuaternion(e),this.applyMatrix4(Ni),this}rotateX(e){return Ni.makeRotationX(e),this.applyMatrix4(Ni),this}rotateY(e){return Ni.makeRotationY(e),this.applyMatrix4(Ni),this}rotateZ(e){return Ni.makeRotationZ(e),this.applyMatrix4(Ni),this}translate(e,t,r){return Ni.makeTranslation(e,t,r),this.applyMatrix4(Ni),this}scale(e,t,r){return Ni.makeScale(e,t,r),this.applyMatrix4(Ni),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pa).negate(),this.translate(Pa.x,Pa.y,Pa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new mn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];yi.setFromBufferAttribute(l),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const r=this.boundingSphere.center;if(yi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];Ro.setFromBufferAttribute(f),this.morphTargetsRelative?(Nn.addVectors(yi.min,Ro.min),yi.expandByPoint(Nn),Nn.addVectors(yi.max,Ro.max),yi.expandByPoint(Nn)):(yi.expandByPoint(Ro.min),yi.expandByPoint(Ro.max))}yi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Nn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Nn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,x=f.count;m<x;m++)Nn.fromBufferAttribute(f,m),p&&(Pa.fromBufferAttribute(e,m),Nn.add(Pa)),o=Math.max(o,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let z=0;z<r.count;z++)f[z]=new K,p[z]=new K;const m=new K,x=new K,v=new K,S=new mt,M=new mt,T=new mt,A=new K,y=new K;function _(z,b,N){m.fromBufferAttribute(r,z),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,N),S.fromBufferAttribute(l,z),M.fromBufferAttribute(l,b),T.fromBufferAttribute(l,N),x.sub(m),v.sub(m),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-M.y).multiplyScalar(B),y.copy(v).multiplyScalar(M.x).addScaledVector(x,-T.x).multiplyScalar(B),f[z].add(A),f[b].add(A),f[N].add(A),p[z].add(y),p[b].add(y),p[N].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let z=0,b=C.length;z<b;++z){const N=C[z],B=N.start,$=N.count;for(let Z=B,ie=B+$;Z<ie;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const L=new K,P=new K,U=new K,D=new K;function O(z){U.fromBufferAttribute(o,z),D.copy(U);const b=f[z];L.copy(b),L.sub(U.multiplyScalar(U.dot(b))).normalize(),P.crossVectors(D,b);const B=P.dot(p[z])<0?-1:1;d.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,b=C.length;z<b;++z){const N=C[z],B=N.start,$=N.count;for(let Z=B,ie=B+$;Z<ie;Z+=3)O(e.getX(Z+0)),O(e.getX(Z+1)),O(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new cr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new K,l=new K,d=new K,f=new K,p=new K,m=new K,x=new K,v=new K;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),d.fromBufferAttribute(t,y),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,y),f.add(x),p.add(x),m.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),x.subVectors(d,l),v.subVectors(o,l),x.cross(v),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(f,p){const m=f.array,x=f.itemSize,v=f.normalized,S=new m.constructor(p.length*x);let M=0,T=0;for(let A=0,y=p.length;A<y;A++){f.isInterleavedBufferAttribute?M=p[A]*f.data.stride+f.offset:M=p[A]*x;for(let _=0;_<x;_++)S[T++]=m[M++]}return new cr(S,x,v)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let x=0,v=m.length;x<v;x++){const S=m[x],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,S=m.length;v<S;v++){const M=m[v];x.push(M.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let S=0,M=v.length;S<M;S++)x.push(v[S].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,x=d.length;m<x;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jm=new ln,Bs=new Kf,Kl=new $f,e0=new K,Zl=new K,Ql=new K,Jl=new K,Ed=new K,ec=new K,t0=new K,tc=new K;class Re extends Dn{constructor(e=new Mi,t=new Yi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){ec.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=f[p],v=l[p];x!==0&&(Ed.fromBufferAttribute(v,e),d?ec.addScaledVector(Ed,x):ec.addScaledVector(Ed.sub(t),x))}t.add(ec)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Bs.copy(e.ray).recast(e.near),!(Kl.containsPoint(Bs.origin)===!1&&(Bs.intersectSphere(Kl,e0)===null||Bs.origin.distanceToSquared(e0)>(e.far-e.near)**2))&&(Jm.copy(l).invert(),Bs.copy(e.ray).applyMatrix4(Jm),!(r.boundingBox!==null&&Bs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Bs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,U=L;P<U;P+=3){const D=f.getX(P),O=f.getX(P+1),z=f.getX(P+2);o=nc(this,_,e,r,m,x,v,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(f.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);o=nc(this,d,e,r,m,x,v,C,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,A=S.length;T<A;T++){const y=S[T],_=d[y.materialIndex],C=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=C,U=L;P<U;P+=3){const D=P,O=P+1,z=P+2;o=nc(this,_,e,r,m,x,v,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(p.count,M.start+M.count);for(let y=T,_=A;y<_;y+=3){const C=y,L=y+1,P=y+2;o=nc(this,d,e,r,m,x,v,C,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function j_(s,e,t,r,o,l,d,f){let p;if(e.side===ui?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===vs,f),p===null)return null;tc.copy(f),tc.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(tc);return m<t.near||m>t.far?null:{distance:m,point:tc.clone(),object:s}}function nc(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,Zl),s.getVertexPosition(p,Ql),s.getVertexPosition(m,Jl);const x=j_(s,e,t,r,Zl,Ql,Jl,t0);if(x){const v=new K;qi.getBarycoord(t0,Zl,Ql,Jl,v),o&&(x.uv=qi.getInterpolatedAttribute(o,f,p,m,v,new mt)),l&&(x.uv1=qi.getInterpolatedAttribute(l,f,p,m,v,new mt)),d&&(x.normal=qi.getInterpolatedAttribute(d,f,p,m,v,new K),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new K,materialIndex:0};qi.getNormal(Zl,Ql,Jl,S.normal),x.face=S,x.barycoord=v}return x}class Lt extends Mi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],x=[],v=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new mn(m,3)),this.setAttribute("normal",new mn(x,3)),this.setAttribute("uv",new mn(v,2));function T(A,y,_,C,L,P,U,D,O,z,b){const N=P/O,B=U/z,$=P/2,Z=U/2,ie=D/2,re=O+1,ee=z+1;let Y=0,X=0;const fe=new K;for(let oe=0;oe<ee;oe++){const F=oe*B-Z;for(let le=0;le<re;le++){const Ne=le*N-$;fe[A]=Ne*C,fe[y]=F*L,fe[_]=ie,m.push(fe.x,fe.y,fe.z),fe[A]=0,fe[y]=0,fe[_]=D>0?1:-1,x.push(fe.x,fe.y,fe.z),v.push(le/O),v.push(1-oe/z),Y+=1}}for(let oe=0;oe<z;oe++)for(let F=0;F<O;F++){const le=S+F+re*oe,Ne=S+F+re*(oe+1),qe=S+(F+1)+re*(oe+1),Ge=S+(F+1)+re*oe;p.push(le,Ne,Ge),p.push(Ne,qe,Ge),X+=6}f.addGroup(M,X,b),M+=X,S+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Zn(s){const e={};for(let t=0;t<s.length;t++){const r=Ga(s[t]);for(const o in r)e[o]=r[o]}return e}function V_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function pg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:jt.workingColorSpace}const G_={clone:Ga,merge:Zn};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,W_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends Ho{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=W_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=V_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class mg extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new K,n0=new mt,i0=new mt;class Qn extends mg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(hc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,n0,i0),t.subVectors(i0,n0)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Da=-90,La=1;class X_ extends Dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Qn(Da,La,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Da,La,e,t);l.layers=this.layers,this.add(l);const d=new Qn(Da,La,e,t);d.layers=this.layers,this.add(d);const f=new Qn(Da,La,e,t);f.layers=this.layers,this.add(f);const p=new Qn(Da,La,e,t);p.layers=this.layers,this.add(p);const m=new Qn(Da,La,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===ar)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===_c)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,x]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class gg extends kn{constructor(e=[],t=qs,r,o,l,d,f,p,m,x){super(e,t,r,o,l,d,f,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xg extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new gg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Lt(5,5,5),l=new fr({name:"CubemapFromEquirect",uniforms:Ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ui,blending:Or});l.uniforms.tEquirect.value=t;const d=new Re(o,l),f=t.minFilter;return t.minFilter===Ws&&(t.minFilter=Pn),new X_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class vn extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const A of e.hand.values()){const y=t.getJointPose(A,r),_=this._getHandJoint(m,A);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=x.position.distanceTo(v.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new vn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Qf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=t}clone(){return new Qf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class vg extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dr,this.environmentIntensity=1,this.environmentRotation=new dr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y_ extends kn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=Fn,x=Fn,v,S){super(null,d,f,p,m,x,o,l,v,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cd=new K,$_=new K,K_=new Tt;class ps{constructor(e=new K(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Cd.subVectors(r,t).cross($_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Cd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||K_.getNormalMatrix(e),o=this.coplanarPoint(Cd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zs=new $f,Z_=new mt(.5,.5),ic=new K;class Jf{constructor(e=new ps,t=new ps,r=new ps,o=new ps,l=new ps,d=new ps){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ar,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],x=l[4],v=l[5],S=l[6],M=l[7],T=l[8],A=l[9],y=l[10],_=l[11],C=l[12],L=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-d,M-x,_-T,U-C).normalize(),o[1].setComponents(m+d,M+x,_+T,U+C).normalize(),o[2].setComponents(m+f,M+v,_+A,U+L).normalize(),o[3].setComponents(m-f,M-v,_-A,U-L).normalize(),r)o[4].setComponents(p,S,y,P).normalize(),o[5].setComponents(m-p,M-S,_-y,U-P).normalize();else if(o[4].setComponents(m-p,M-S,_-y,U-P).normalize(),t===ar)o[5].setComponents(m+p,M+S,_+y,U+P).normalize();else if(t===_c)o[5].setComponents(p,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zs)}intersectsSprite(e){zs.center.set(0,0,0);const t=Z_.distanceTo(e.center);return zs.radius=.7071067811865476+t,zs.applyMatrix4(e.matrixWorld),this.intersectsSphere(zs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(ic.x=o.normal.x>0?e.max.x:e.min.x,ic.y=o.normal.y>0?e.max.y:e.min.y,ic.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Df extends kn{constructor(e,t,r,o,l,d,f,p,m){super(e,t,r,o,l,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class zo extends kn{constructor(e,t,r=ur,o,l,d,f=Fn,p=Fn,m,x=Br,v=1){if(x!==Br&&x!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:v};super(S,o,l,d,f,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Q_ extends zo{constructor(e,t=ur,r=qs,o,l,d=Fn,f=Fn,p,m=Br){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,d,f,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _g extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class eh extends Mi{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],d=[],f=[],p=[],m=new K,x=new mt;d.push(0,0,0),f.push(0,0,1),p.push(.5,.5);for(let v=0,S=3;v<=t;v++,S+=3){const M=r+v/t*o;m.x=e*Math.cos(M),m.y=e*Math.sin(M),d.push(m.x,m.y,m.z),f.push(0,0,1),x.x=(d[S]/e+1)/2,x.y=(d[S+1]/e+1)/2,p.push(x.x,x.y)}for(let v=1;v<=t;v++)l.push(v,v+1,0);this.setIndex(l),this.setAttribute("position",new mn(d,3)),this.setAttribute("normal",new mn(f,3)),this.setAttribute("uv",new mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class nn extends Mi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],S=[],M=[];let T=0;const A=[],y=r/2;let _=0;C(),d===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new mn(v,3)),this.setAttribute("normal",new mn(S,3)),this.setAttribute("uv",new mn(M,2));function C(){const P=new K,U=new K;let D=0;const O=(t-e)/r;for(let z=0;z<=l;z++){const b=[],N=z/l,B=N*(t-e)+e;for(let $=0;$<=o;$++){const Z=$/o,ie=Z*p+f,re=Math.sin(ie),ee=Math.cos(ie);U.x=B*re,U.y=-N*r+y,U.z=B*ee,v.push(U.x,U.y,U.z),P.set(re,O,ee).normalize(),S.push(P.x,P.y,P.z),M.push(Z,1-N),b.push(T++)}A.push(b)}for(let z=0;z<o;z++)for(let b=0;b<l;b++){const N=A[b][z],B=A[b+1][z],$=A[b+1][z+1],Z=A[b][z+1];(e>0||b!==0)&&(x.push(N,B,Z),D+=3),(t>0||b!==l-1)&&(x.push(B,$,Z),D+=3)}m.addGroup(_,D,0),_+=D}function L(P){const U=T,D=new mt,O=new K;let z=0;const b=P===!0?e:t,N=P===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,y*N,0),S.push(0,N,0),M.push(.5,.5),T++;const B=T;for(let $=0;$<=o;$++){const ie=$/o*p+f,re=Math.cos(ie),ee=Math.sin(ie);O.x=b*ee,O.y=y*N,O.z=b*re,v.push(O.x,O.y,O.z),S.push(0,N,0),D.x=re*.5+.5,D.y=ee*.5*N+.5,M.push(D.x,D.y),T++}for(let $=0;$<o;$++){const Z=U+$,ie=B+$;P===!0?x.push(ie,ie+1,Z):x.push(ie+1,ie,Z),z+=3}m.addGroup(_,z,P===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class th extends nn{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new th(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class nh extends Mi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),x(),this.setAttribute("position",new mn(l,3)),this.setAttribute("normal",new mn(l.slice(),3)),this.setAttribute("uv",new mn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(C){const L=new K,P=new K,U=new K;for(let D=0;D<t.length;D+=3)M(t[D+0],L),M(t[D+1],P),M(t[D+2],U),p(L,P,U,C)}function p(C,L,P,U){const D=U+1,O=[];for(let z=0;z<=D;z++){O[z]=[];const b=C.clone().lerp(P,z/D),N=L.clone().lerp(P,z/D),B=D-z;for(let $=0;$<=B;$++)$===0&&z===D?O[z][$]=b:O[z][$]=b.clone().lerp(N,$/B)}for(let z=0;z<D;z++)for(let b=0;b<2*(D-z)-1;b++){const N=Math.floor(b/2);b%2===0?(S(O[z][N+1]),S(O[z+1][N]),S(O[z][N])):(S(O[z][N+1]),S(O[z+1][N+1]),S(O[z+1][N]))}}function m(C){const L=new K;for(let P=0;P<l.length;P+=3)L.x=l[P+0],L.y=l[P+1],L.z=l[P+2],L.normalize().multiplyScalar(C),l[P+0]=L.x,l[P+1]=L.y,l[P+2]=L.z}function x(){const C=new K;for(let L=0;L<l.length;L+=3){C.x=l[L+0],C.y=l[L+1],C.z=l[L+2];const P=y(C)/2/Math.PI+.5,U=_(C)/Math.PI+.5;d.push(P,1-U)}T(),v()}function v(){for(let C=0;C<d.length;C+=6){const L=d[C+0],P=d[C+2],U=d[C+4],D=Math.max(L,P,U),O=Math.min(L,P,U);D>.9&&O<.1&&(L<.2&&(d[C+0]+=1),P<.2&&(d[C+2]+=1),U<.2&&(d[C+4]+=1))}}function S(C){l.push(C.x,C.y,C.z)}function M(C,L){const P=C*3;L.x=e[P+0],L.y=e[P+1],L.z=e[P+2]}function T(){const C=new K,L=new K,P=new K,U=new K,D=new mt,O=new mt,z=new mt;for(let b=0,N=0;b<l.length;b+=9,N+=6){C.set(l[b+0],l[b+1],l[b+2]),L.set(l[b+3],l[b+4],l[b+5]),P.set(l[b+6],l[b+7],l[b+8]),D.set(d[N+0],d[N+1]),O.set(d[N+2],d[N+3]),z.set(d[N+4],d[N+5]),U.copy(C).add(L).add(P).divideScalar(3);const B=y(U);A(D,N+0,C,B),A(O,N+2,L,B),A(z,N+4,P,B)}}function A(C,L,P,U){U<0&&C.x===1&&(d[L]=C.x-1),P.x===0&&P.z===0&&(d[L]=U/2/Math.PI+.5)}function y(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nh(e.vertices,e.indices,e.radius,e.detail)}}class ih extends nh{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ih(e.radius,e.detail)}}class qn extends Mi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,x=p+1,v=e/f,S=t/p,M=[],T=[],A=[],y=[];for(let _=0;_<x;_++){const C=_*S-d;for(let L=0;L<m;L++){const P=L*v-l;T.push(P,-C,0),A.push(0,0,1),y.push(L/f),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<f;C++){const L=C+m*_,P=C+m*(_+1),U=C+1+m*(_+1),D=C+1+m*_;M.push(L,P,D),M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(A,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dr extends Mi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const x=[],v=new K,S=new K,M=[],T=[],A=[],y=[];for(let _=0;_<=r;_++){const C=[],L=_/r;let P=0;_===0&&d===0?P=.5/t:_===r&&p===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){const D=U/t;v.x=-e*Math.cos(o+D*l)*Math.sin(d+L*f),v.y=e*Math.cos(d+L*f),v.z=e*Math.sin(o+D*l)*Math.sin(d+L*f),T.push(v.x,v.y,v.z),S.copy(v).normalize(),A.push(S.x,S.y,S.z),y.push(D+P,1-L),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const L=x[_][C+1],P=x[_][C],U=x[_+1][C],D=x[_+1][C+1];(_!==0||d>0)&&M.push(L,P,D),(_!==r-1||p<Math.PI)&&M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new mn(T,3)),this.setAttribute("normal",new mn(A,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class J_ extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mt extends Ho{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lg,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class e1 extends Ho{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=h_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t1 extends Ho{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ad={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class n1{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){f++,l===!1&&o.onStart!==void 0&&o.onStart(x,d,f),l=!0},this.itemEnd=function(x){d++,o.onProgress!==void 0&&o.onProgress(x,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,S=m.length;v<S;v+=2){const M=m[v],T=m[v+1];if(M.global&&(M.lastIndex=0),M.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const i1=new n1;class rh{constructor(e){this.manager=e!==void 0?e:i1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ia=new WeakMap;class r1 extends rh{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=Ad.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let v=Ia.get(d);v===void 0&&(v=[],Ia.set(d,v)),v.push({onLoad:t,onError:o})}return d}const f=ko("img");function p(){x(),t&&t(this);const v=Ia.get(this)||[];for(let S=0;S<v.length;S++){const M=v[S];M.onLoad&&M.onLoad(this)}Ia.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),Ad.remove(`image:${e}`);const S=Ia.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(v)}Ia.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Ad.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class yg extends rh{constructor(e){super(e)}load(e,t,r,o){const l=new kn,d=new r1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class bc extends Dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Rd=new ln,r0=new K,s0=new K;class sh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=Si,this.map=null,this.mapPass=null,this.matrix=new ln,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new dn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;r0.setFromMatrixPosition(e.matrixWorld),t.position.copy(r0),s0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(s0),t.updateMatrixWorld(),Rd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class s1 extends sh{constructor(){super(new Qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class a0 extends bc{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new s1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class a1 extends sh{constructor(){super(new Qn(90,1,.5,500)),this.isPointLightShadow=!0}}class o0 extends bc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new a1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ah extends mg{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=x*this.view.offsetY,p=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class o1 extends sh{constructor(){super(new ah(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lf extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new o1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Sg extends bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class l1 extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class c1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const l0=new ln;class Mg{constructor(e,t,r=0,o=1/0){this.ray=new Kf(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Zf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return l0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(l0),this}intersectObject(e,t=!0,r=[]){return If(e,this,r,t),r.sort(c0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)If(e[o],this,r,t);return r.sort(c0),r}}function c0(s,e){return s.distance-e.distance}function If(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)If(l[d],e,t,!0)}}class u0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=It(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(It(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class u1 extends $s{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){_t("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function d0(s,e,t,r){const o=d1(r);switch(t){case sg:return s*e;case og:return s*e/o.components*o.byteLength;case Gf:return s*e/o.components*o.byteLength;case ja:return s*e*2/o.components*o.byteLength;case Hf:return s*e*2/o.components*o.byteLength;case ag:return s*e*3/o.components*o.byteLength;case $i:return s*e*4/o.components*o.byteLength;case Wf:return s*e*4/o.components*o.byteLength;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dc:case fc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:case nf:return Math.max(s,16)*Math.max(e,8)/4;case Jd:case tf:return Math.max(s,8)*Math.max(e,8)/2;case rf:case sf:case of:case lf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case af:case cf:case uf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case pf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case mf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case gf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case wf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ef:case Tf:case Cf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Af:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function d1(s){switch(s){case Si:case tg:return{byteLength:1,components:1};case Oo:case ng:case kr:return{byteLength:2,components:1};case jf:case Vf:return{byteLength:2,components:4};case ur:case zf:case sr:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function f1(s){const e=new WeakMap;function t(f,p){const m=f.array,x=f.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,x),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,x);else{v.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<v.length;M++){const T=v[S],A=v[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++S,v[S]=A)}v.length=S+1;for(let M=0,T=v.length;M<T;M++){const A=v[M];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var h1=`#ifdef USE_ALPHAHASH
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
}`,Ct={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:x1,alphatest_pars_fragment:v1,aomap_fragment:_1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:w1,beginnormal_vertex:b1,bsdfs:E1,iridescence_fragment:T1,bumpmap_pars_fragment:C1,clipping_planes_fragment:A1,clipping_planes_pars_fragment:R1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:P1,color_fragment:D1,color_pars_fragment:L1,color_pars_vertex:I1,color_vertex:U1,common:O1,cube_uv_reflection_fragment:F1,defaultnormal_vertex:k1,displacementmap_pars_vertex:B1,displacementmap_vertex:z1,emissivemap_fragment:j1,emissivemap_pars_fragment:V1,colorspace_fragment:G1,colorspace_pars_fragment:H1,envmap_fragment:W1,envmap_common_pars_fragment:X1,envmap_pars_fragment:q1,envmap_pars_vertex:Y1,envmap_physical_pars_fragment:sy,envmap_vertex:$1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:ry,lights_toon_fragment:ay,lights_toon_pars_fragment:oy,lights_phong_fragment:ly,lights_phong_pars_fragment:cy,lights_physical_fragment:uy,lights_physical_pars_fragment:dy,lights_fragment_begin:fy,lights_fragment_maps:hy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:vy,map_fragment:_y,map_pars_fragment:yy,map_particle_fragment:Sy,map_particle_pars_fragment:My,metalnessmap_fragment:wy,metalnessmap_pars_fragment:by,morphinstance_vertex:Ey,morphcolor_vertex:Ty,morphnormal_vertex:Cy,morphtarget_pars_vertex:Ay,morphtarget_vertex:Ry,normal_fragment_begin:Ny,normal_fragment_maps:Py,normal_pars_fragment:Dy,normal_pars_vertex:Ly,normal_vertex:Iy,normalmap_pars_fragment:Uy,clearcoat_normal_fragment_begin:Oy,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:ky,iridescence_pars_fragment:By,opaque_fragment:zy,packing:jy,premultiplied_alpha_fragment:Vy,project_vertex:Gy,dithering_fragment:Hy,dithering_pars_fragment:Wy,roughnessmap_fragment:Xy,roughnessmap_pars_fragment:qy,shadowmap_pars_fragment:Yy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Zy,skinbase_vertex:Qy,skinning_pars_vertex:Jy,skinning_vertex:eS,skinnormal_vertex:tS,specularmap_fragment:nS,specularmap_pars_fragment:iS,tonemapping_fragment:rS,tonemapping_pars_fragment:sS,transmission_fragment:aS,transmission_pars_fragment:oS,uv_pars_fragment:lS,uv_pars_vertex:cS,uv_vertex:uS,worldpos_vertex:dS,background_vert:fS,background_frag:hS,backgroundCube_vert:pS,backgroundCube_frag:mS,cube_vert:gS,cube_frag:xS,depth_vert:vS,depth_frag:_S,distance_vert:yS,distance_frag:SS,equirect_vert:MS,equirect_frag:wS,linedashed_vert:bS,linedashed_frag:ES,meshbasic_vert:TS,meshbasic_frag:CS,meshlambert_vert:AS,meshlambert_frag:RS,meshmatcap_vert:NS,meshmatcap_frag:PS,meshnormal_vert:DS,meshnormal_frag:LS,meshphong_vert:IS,meshphong_frag:US,meshphysical_vert:OS,meshphysical_frag:FS,meshtoon_vert:kS,meshtoon_frag:BS,points_vert:zS,points_frag:jS,shadow_vert:VS,shadow_frag:GS,sprite_vert:HS,sprite_frag:WS},ze={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},rr={basic:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:Zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:Zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:Zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new At(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:Zn([ze.points,ze.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:Zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:Zn([ze.common,ze.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:Zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:Zn([ze.sprite,ze.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:Zn([ze.common,ze.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:Zn([ze.lights,ze.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};rr.physical={uniforms:Zn([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const rc={r:0,b:0,g:0},js=new dr,XS=new ln;function qS(s,e,t,r,o,l,d){const f=new At(0);let p=l===!0?0:1,m,x,v=null,S=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function A(L){let P=!1;const U=T(L);U===null?_(f,p):U&&U.isColor&&(_(U,1),P=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===wc)?(x===void 0&&(x=new Re(new Lt(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:Ga(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),js.copy(P.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(XS.makeRotationFromEuler(js)),x.material.toneMapped=jt.getTransfer(U.colorSpace)!==$t,(v!==U||S!==U.version||M!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new Re(new qn(2,2),new fr({name:"BackgroundMaterial",uniforms:Ga(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=jt.getTransfer(U.colorSpace)!==$t,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||S!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,S=U.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,P){L.getRGB(rc,pg(s)),r.buffers.color.setClear(rc.r,rc.g,rc.b,P,d)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),p=P,_(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(f,p)},render:A,addToRenderList:y,dispose:C}}function YS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(N,B,$,Z,ie){let re=!1;const ee=v(Z,$,B);l!==ee&&(l=ee,m(l.object)),re=M(N,Z,$,ie),re&&T(N,Z,$,ie),ie!==null&&e.update(ie,s.ELEMENT_ARRAY_BUFFER),(re||d)&&(d=!1,P(N,B,$,Z),ie!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function p(){return s.createVertexArray()}function m(N){return s.bindVertexArray(N)}function x(N){return s.deleteVertexArray(N)}function v(N,B,$){const Z=$.wireframe===!0;let ie=r[N.id];ie===void 0&&(ie={},r[N.id]=ie);let re=ie[B.id];re===void 0&&(re={},ie[B.id]=re);let ee=re[Z];return ee===void 0&&(ee=S(p()),re[Z]=ee),ee}function S(N){const B=[],$=[],Z=[];for(let ie=0;ie<t;ie++)B[ie]=0,$[ie]=0,Z[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:Z,object:N,attributes:{},index:null}}function M(N,B,$,Z){const ie=l.attributes,re=B.attributes;let ee=0;const Y=$.getAttributes();for(const X in Y)if(Y[X].location>=0){const oe=ie[X];let F=re[X];if(F===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(F=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(F=N.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;ee++}return l.attributesNum!==ee||l.index!==Z}function T(N,B,$,Z){const ie={},re=B.attributes;let ee=0;const Y=$.getAttributes();for(const X in Y)if(Y[X].location>=0){let oe=re[X];oe===void 0&&(X==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),X==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),ie[X]=F,ee++}l.attributes=ie,l.attributesNum=ee,l.index=Z}function A(){const N=l.newAttributes;for(let B=0,$=N.length;B<$;B++)N[B]=0}function y(N){_(N,0)}function _(N,B){const $=l.newAttributes,Z=l.enabledAttributes,ie=l.attributeDivisors;$[N]=1,Z[N]===0&&(s.enableVertexAttribArray(N),Z[N]=1),ie[N]!==B&&(s.vertexAttribDivisor(N,B),ie[N]=B)}function C(){const N=l.newAttributes,B=l.enabledAttributes;for(let $=0,Z=B.length;$<Z;$++)B[$]!==N[$]&&(s.disableVertexAttribArray($),B[$]=0)}function L(N,B,$,Z,ie,re,ee){ee===!0?s.vertexAttribIPointer(N,B,$,ie,re):s.vertexAttribPointer(N,B,$,Z,ie,re)}function P(N,B,$,Z){A();const ie=Z.attributes,re=$.getAttributes(),ee=B.defaultAttributeValues;for(const Y in re){const X=re[Y];if(X.location>=0){let fe=ie[Y];if(fe===void 0&&(Y==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),Y==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),fe!==void 0){const oe=fe.normalized,F=fe.itemSize,le=e.get(fe);if(le===void 0)continue;const Ne=le.buffer,qe=le.type,Ge=le.bytesPerElement,te=qe===s.INT||qe===s.UNSIGNED_INT||fe.gpuType===zf;if(fe.isInterleavedBufferAttribute){const de=fe.data,_e=de.stride,Be=fe.offset;if(de.isInstancedInterleavedBuffer){for(let De=0;De<X.locationSize;De++)_(X.location+De,de.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let De=0;De<X.locationSize;De++)y(X.location+De);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let De=0;De<X.locationSize;De++)L(X.location+De,F/X.locationSize,qe,oe,_e*Ge,(Be+F/X.locationSize*De)*Ge,te)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<X.locationSize;de++)_(X.location+de,fe.meshPerAttribute);N.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<X.locationSize;de++)y(X.location+de);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let de=0;de<X.locationSize;de++)L(X.location+de,F/X.locationSize,qe,oe,F*Ge,F/X.locationSize*de*Ge,te)}}else if(ee!==void 0){const oe=ee[Y];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(X.location,oe);break;case 3:s.vertexAttrib3fv(X.location,oe);break;case 4:s.vertexAttrib4fv(X.location,oe);break;default:s.vertexAttrib1fv(X.location,oe)}}}}C()}function U(){z();for(const N in r){const B=r[N];for(const $ in B){const Z=B[$];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete B[$]}delete r[N]}}function D(N){if(r[N.id]===void 0)return;const B=r[N.id];for(const $ in B){const Z=B[$];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete B[$]}delete r[N.id]}function O(N){for(const B in r){const $=r[B];if($[N.id]===void 0)continue;const Z=$[N.id];for(const ie in Z)x(Z[ie].object),delete Z[ie];delete $[N.id]}}function z(){b(),d=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:C}}function $S(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function d(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function f(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let M=0;for(let T=0;T<v;T++)M+=x[T];t.update(M,r,1)}function p(m,x,v,S){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],x[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,x,0,S,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*S[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function KS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==$i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const z=O===kr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Si&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==sr&&!z)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(_t("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:L,maxFragmentUniforms:P,maxSamples:U,samples:D}}function ZS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new ps,f=new Tt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const M=v.length!==0||S||r!==0||o;return o=S,r=v.length,M},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,S){t=x(v,S,0)},this.setState=function(v,S,M){const T=v.clippingPlanes,A=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!y)l?x(null):m();else{const C=l?0:r,L=C*4;let P=_.clippingState||null;p.value=P,P=x(T,S,L,M);for(let U=0;U!==L;++U)P[U]=t[U];_.clippingState=P,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,S,M,T){const A=v!==null?v.length:0;let y=null;if(A!==0){if(y=p.value,T!==!0||y===null){const _=M+A*4,C=S.matrixWorldInverse;f.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let L=0,P=M;L!==A;++L,P+=4)d.copy(v[L]).applyMatrix4(C,f),d.normal.toArray(y,P),y[P+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function QS(s){let e=new WeakMap;function t(d,f){return f===$d?d.mapping=qs:f===Kd&&(d.mapping=za),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===$d||f===Kd)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new xg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const xs=4,f0=[.125,.215,.35,.446,.526,.582],Hs=20,JS=256,No=new ah,h0=new At;let Nd=null,Pd=0,Dd=0,Ld=!1;const eM=new K;class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=eM}=l;Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=x0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Pd,Dd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,Ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Pd=this._renderer.getActiveCubeFace(),Dd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:kr,format:$i,colorSpace:Va,depthBuffer:!1},o=m0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tM(l)),this._blurMaterial=iM(l,e,t),this._ggxMaterial=nM(l,e,t)}return o}_compileMaterial(e){const t=new Re(new Mi,e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,r,o,l){const p=new Qn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,M=v.toneMapping;v.getClearColor(h0),v.toneMapping=or,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new Lt,new Yi({name:"PMREM.Background",side:ui,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,y=A.material;let _=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,_=!0):(y.color.copy(h0),_=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const U=this._cubeSize;Ua(o,P*U,L>2?U:0,U,U),v.setRenderTarget(o),_&&v.render(A,p),v.render(e,p)}v.toneMapping=M,v.autoClear=S,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===qs||e.mapping===za;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=x0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;Ua(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,No)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),S=0+m*1.25,M=v*S,{_lodMax:T}=this,A=this._sizeLods[r],y=3*A*(r>T-xs?r-T+xs:0),_=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,Ua(l,y,_,3*A,2*A),o.setRenderTarget(l),o.render(f,No),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,Ua(e,y,_,3*A,2*A),o.setRenderTarget(e),o.render(f,No)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&zt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Hs-1),A=l/T,y=isFinite(l)?1+Math.floor(x*A):Hs;y>Hs&&_t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Hs}`);const _=[];let C=0;for(let O=0;O<Hs;++O){const z=O/A,b=Math.exp(-z*z/2);_.push(b),O===0?C+=b:O<y&&(C+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/C;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-r;const P=this._sizeLods[o],U=3*P*(o>L-xs?o-L+xs:0),D=4*(this._cubeSize-P);Ua(t,U,D,3*P,2*P),p.setRenderTarget(t),p.render(v,No)}}function tM(s){const e=[],t=[],r=[];let o=s;const l=s-xs+1+f0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-xs?p=f0[d-s+xs-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),x=-m,v=1+m,S=[x,x,v,x,v,v,x,x,v,v,x,v],M=6,T=6,A=3,y=2,_=1,C=new Float32Array(A*T*M),L=new Float32Array(y*T*M),P=new Float32Array(_*T*M);for(let D=0;D<M;D++){const O=D%3*2/3-1,z=D>2?0:-1,b=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];C.set(b,A*T*D),L.set(S,y*T*D);const N=[D,D,D,D,D,D];P.set(N,_*T*D)}const U=new Mi;U.setAttribute("position",new cr(C,A)),U.setAttribute("uv",new cr(L,y)),U.setAttribute("faceIndex",new cr(P,_)),r.push(new Re(U,null)),o>xs&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function m0(s,e,t){const r=new lr(s,e,t);return r.texture.mapping=wc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Ua(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function nM(s,e,t){return new fr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function iM(s,e,t){const r=new Float32Array(Hs),o=new K(0,1,0);return new fr({name:"SphericalGaussianBlur",defines:{n:Hs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function g0(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ec(),fragmentShader:`

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
		`,blending:Or,depthTest:!1,depthWrite:!1})}function x0(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Or,depthTest:!1,depthWrite:!1})}function Ec(){return`

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
	`}function rM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===$d||p===Kd,x=p===qs||p===za;if(m||x){let v=e.get(f);const S=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new p0(s)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const M=f.image;return m&&M&&M.height>0||x&&M&&o(M)?(t===null&&(t=new p0(s)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function o(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function sM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bo("WebGLRenderer: "+r+" extension not supported."),o}}}function aM(s,e,t,r){const o={},l=new WeakMap;function d(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(v,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(v){const S=v.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(v){const S=[],M=v.index,T=v.attributes.position;let A=0;if(M!==null){const C=M.array;A=M.version;for(let L=0,P=C.length;L<P;L+=3){const U=C[L+0],D=C[L+1],O=C[L+2];S.push(U,D,D,O,O,U)}}else if(T!==void 0){const C=T.array;A=T.version;for(let L=0,P=C.length/3-1;L<P;L+=3){const U=L+0,D=L+1,O=L+2;S.push(U,D,D,O,O,U)}}else return;const y=new(cg(S)?hg:fg)(S,1);y.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,y)}function x(v){const S=l.get(v);if(S){const M=v.index;M!==null&&S.version<M.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:p,getWireframeAttribute:x}}function oM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function x(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let _=0;_<T;_++)y+=M[_];t.update(y,r,1)}function v(S,M,T,A){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)m(S[_]/d,M[_],A[_]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,A,0,T);let _=0;for(let C=0;C<T;C++)_+=M[C]*A[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function lM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:zt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function cM(s,e,t){const r=new WeakMap,o=new dn;function l(d,f,p){const m=d.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=x!==void 0?x.length:0;let S=r.get(f);if(S===void 0||S.count!==v){let N=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",N)};var M=N;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,A=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),A===!0&&(P=2),y===!0&&(P=3);let U=f.attributes.position.count*P,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*D*4*v),z=new ug(O,U,D,v);z.type=sr,z.needsUpdate=!0;const b=P*4;for(let B=0;B<v;B++){const $=_[B],Z=C[B],ie=L[B],re=U*D*4*B;for(let ee=0;ee<$.count;ee++){const Y=ee*b;T===!0&&(o.fromBufferAttribute($,ee),O[re+Y+0]=o.x,O[re+Y+1]=o.y,O[re+Y+2]=o.z,O[re+Y+3]=0),A===!0&&(o.fromBufferAttribute(Z,ee),O[re+Y+4]=o.x,O[re+Y+5]=o.y,O[re+Y+6]=o.z,O[re+Y+7]=0),y===!0&&(o.fromBufferAttribute(ie,ee),O[re+Y+8]=o.x,O[re+Y+9]=o.y,O[re+Y+10]=o.z,O[re+Y+11]=ie.itemSize===4?o.w:1)}}S={count:v,texture:z,size:new mt(U,D)},r.set(f,S),f.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const A=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function uM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return v}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const dM={[Y0]:"LINEAR_TONE_MAPPING",[$0]:"REINHARD_TONE_MAPPING",[K0]:"CINEON_TONE_MAPPING",[Mc]:"ACES_FILMIC_TONE_MAPPING",[Q0]:"AGX_TONE_MAPPING",[J0]:"NEUTRAL_TONE_MAPPING",[Z0]:"CUSTOM_TONE_MAPPING"};function fM(s,e,t,r,o){const l=new lr(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new lr(e,t,{type:kr,depthBuffer:!1,stencilBuffer:!1}),f=new Mi;f.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new mn([0,2,0,0,2,0],2));const p=new J_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Re(f,p),x=new ah(-1,1,1,-1,0,1);let v=null,S=null,M=!1,T,A=null,y=[],_=!1;this.setSize=function(C,L){l.setSize(C,L),d.setSize(C,L);for(let P=0;P<y.length;P++){const U=y[P];U.setSize&&U.setSize(C,L)}},this.setEffects=function(C){y=C,_=y.length>0&&y[0].isRenderPass===!0;const L=l.width,P=l.height;for(let U=0;U<y.length;U++){const D=y[U];D.setSize&&D.setSize(L,P)}},this.begin=function(C,L){if(M||C.toneMapping===or&&y.length===0)return!1;if(A=L,L!==null){const P=L.width,U=L.height;(l.width!==P||l.height!==U)&&this.setSize(P,U)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=or,!0},this.hasRenderPass=function(){return _},this.end=function(C,L){C.toneMapping=T,M=!0;let P=l,U=d;for(let D=0;D<y.length;D++){const O=y[D];if(O.enabled!==!1&&(O.render(C,U,P,L),O.needsSwap!==!1)){const z=P;P=U,U=z}}if(v!==C.outputColorSpace||S!==C.toneMapping){v=C.outputColorSpace,S=C.toneMapping,p.defines={},jt.getTransfer(v)===$t&&(p.defines.SRGB_TRANSFER="");const D=dM[S];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(A),C.render(m,x),A=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const bg=new kn,Uf=new zo(1,1),Eg=new ug,Tg=new N_,Cg=new gg,v0=[],_0=[],y0=new Float32Array(16),S0=new Float32Array(9),M0=new Float32Array(4);function Ha(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=v0[o];if(l===void 0&&(l=new Float32Array(o),v0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function bn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function En(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Tc(s,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2fv(this.addr,e),En(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;s.uniform3fv(this.addr,e),En(t,e)}}function gM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4fv(this.addr,e),En(t,e)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),En(t,e)}else{if(bn(t,r))return;M0.set(r),s.uniformMatrix2fv(this.addr,!1,M0),En(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),En(t,e)}else{if(bn(t,r))return;S0.set(r),s.uniformMatrix3fv(this.addr,!1,S0),En(t,r)}}function _M(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(bn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),En(t,e)}else{if(bn(t,r))return;y0.set(r),s.uniformMatrix4fv(this.addr,!1,y0),En(t,r)}}function yM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2iv(this.addr,e),En(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3iv(this.addr,e),En(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4iv(this.addr,e),En(t,e)}}function bM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;s.uniform2uiv(this.addr,e),En(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;s.uniform3uiv(this.addr,e),En(t,e)}}function CM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;s.uniform4uiv(this.addr,e),En(t,e)}}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Uf.compareFunction=t.isReversedDepthBuffer()?qf:Xf,l=Uf):l=bg,t.setTexture2D(e||l,o)}function RM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Tg,o)}function NM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||Cg,o)}function PM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Eg,o)}function DM(s){switch(s){case 5126:return hM;case 35664:return pM;case 35665:return mM;case 35666:return gM;case 35674:return xM;case 35675:return vM;case 35676:return _M;case 5124:case 35670:return yM;case 35667:case 35671:return SM;case 35668:case 35672:return MM;case 35669:case 35673:return wM;case 5125:return bM;case 36294:return EM;case 36295:return TM;case 36296:return CM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return RM;case 35680:case 36300:case 36308:case 36293:return NM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(s,e){s.uniform1fv(this.addr,e)}function IM(s,e){const t=Ha(e,this.size,2);s.uniform2fv(this.addr,t)}function UM(s,e){const t=Ha(e,this.size,3);s.uniform3fv(this.addr,t)}function OM(s,e){const t=Ha(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=Ha(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=Ha(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BM(s,e){const t=Ha(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function jM(s,e){s.uniform2iv(this.addr,e)}function VM(s,e){s.uniform3iv(this.addr,e)}function GM(s,e){s.uniform4iv(this.addr,e)}function HM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function XM(s,e){s.uniform3uiv(this.addr,e)}function qM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=Uf:d=bg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function $M(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||Tg,l[d])}function KM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||Cg,l[d])}function ZM(s,e,t){const r=this.cache,o=e.length,l=Tc(t,o);bn(r,l)||(s.uniform1iv(this.addr,l),En(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||Eg,l[d])}function QM(s){switch(s){case 5126:return LM;case 35664:return IM;case 35665:return UM;case 35666:return OM;case 35674:return FM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return jM;case 35668:case 35672:return VM;case 35669:case 35673:return GM;case 5125:return HM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DM(t.type)}}class ew{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=QM(t.type)}}class tw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function w0(s,e){s.seq.push(e),s.map[e.id]=e}function nw(s,e,t){const r=s.name,o=r.length;for(Id.lastIndex=0;;){const l=Id.exec(r),d=Id.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){w0(t,m===void 0?new JM(f,s,e):new ew(f,s,e));break}else{let v=t.map[f];v===void 0&&(v=new tw(f),w0(t,v)),t=v}}}class pc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);nw(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function b0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const iw=37297;let rw=0;function sw(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const E0=new Tt;function aw(s){jt._getMatrix(E0,jt.workingColorSpace,s);const e=`mat3( ${E0.elements.map(t=>t.toFixed(4))} )`;switch(jt.getTransfer(s)){case vc:return[e,"LinearTransferOETF"];case $t:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function T0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+sw(s.getShaderSource(e),f)}else return l}function ow(s,e){const t=aw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lw={[Y0]:"Linear",[$0]:"Reinhard",[K0]:"Cineon",[Mc]:"ACESFilmic",[Q0]:"AgX",[J0]:"Neutral",[Z0]:"Custom"};function cw(s,e){const t=lw[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const sc=new K;function uw(){jt.getLuminanceCoefficients(sc);const s=sc.x.toFixed(4),e=sc.y.toFixed(4),t=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function fw(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function hw(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function Io(s){return s!==""}function C0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(s){return s.replace(pw,gw)}const mw=new Map;function gw(s,e){let t=Ct[e];if(t===void 0){const r=mw.get(e);if(r!==void 0)t=Ct[r],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Of(t)}const xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(s){return s.replace(xw,vw)}function vw(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function N0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _w={[lc]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function yw(s){return _w[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Sw={[qs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function Mw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Sw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ww={[za]:"ENVMAP_MODE_REFRACTION"};function bw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ww[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ew={[q0]:"ENVMAP_BLENDING_MULTIPLY",[u_]:"ENVMAP_BLENDING_MIX",[d_]:"ENVMAP_BLENDING_ADD"};function Tw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Ew[s.combine]||"ENVMAP_BLENDING_NONE"}function Cw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function Aw(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=yw(t),m=Mw(t),x=bw(t),v=Tw(t),S=Cw(t),M=dw(t),T=fw(l),A=o.createProgram();let y,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Io).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(y=[N0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[N0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?Ct.tonemapping_pars_fragment:"",t.toneMapping!==or?cw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,ow("linearToOutputTexel",t.outputColorSpace),uw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),d=Of(d),d=C0(d,t),d=A0(d,t),f=Of(f),f=C0(f,t),f=A0(f,t),d=R0(d),f=R0(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",t.glslVersion===Bm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=C+y+d,P=C+_+f,U=b0(o,o.VERTEX_SHADER,L),D=b0(o,o.FRAGMENT_SHADER,P);o.attachShader(A,U),o.attachShader(A,D),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(B){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",Z=o.getShaderInfoLog(U)||"",ie=o.getShaderInfoLog(D)||"",re=$.trim(),ee=Z.trim(),Y=ie.trim();let X=!0,fe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,U,D);else{const oe=T0(o,U,"vertex"),F=T0(o,D,"fragment");zt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+re+`
`+oe+`
`+F)}else re!==""?_t("WebGLProgram: Program Info Log:",re):(ee===""||Y==="")&&(fe=!1);fe&&(B.diagnostics={runnable:X,programLog:re,vertexShader:{log:ee,prefix:y},fragmentShader:{log:Y,prefix:_}})}o.deleteShader(U),o.deleteShader(D),z=new pc(o,A),b=hw(o,A)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(A,iw)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=rw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=U,this.fragmentShader=D,this}let Rw=0;class Nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Pw(e),t.set(e,r)),r}}class Pw{constructor(e){this.id=Rw++,this.code=e,this.usedTimes=0}}function Dw(s,e,t,r,o,l,d){const f=new Zf,p=new Nw,m=new Set,x=[],v=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function y(b,N,B,$,Z){const ie=$.fog,re=Z.geometry,ee=b.isMeshStandardMaterial?$.environment:null,Y=(b.isMeshStandardMaterial?t:e).get(b.envMap||ee),X=Y&&Y.mapping===wc?Y.image.height:null,fe=T[b.type];b.precision!==null&&(M=o.getMaxPrecision(b.precision),M!==b.precision&&_t("WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const oe=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,F=oe!==void 0?oe.length:0;let le=0;re.morphAttributes.position!==void 0&&(le=1),re.morphAttributes.normal!==void 0&&(le=2),re.morphAttributes.color!==void 0&&(le=3);let Ne,qe,Ge,te;if(fe){const it=rr[fe];Ne=it.vertexShader,qe=it.fragmentShader}else Ne=b.vertexShader,qe=b.fragmentShader,p.update(b),Ge=p.getVertexShaderID(b),te=p.getFragmentShaderID(b);const de=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Be=Z.isInstancedMesh===!0,De=Z.isBatchedMesh===!0,yt=!!b.map,Zt=!!b.matcap,St=!!Y,Pt=!!b.aoMap,Ut=!!b.lightMap,gt=!!b.bumpMap,Ht=!!b.normalMap,j=!!b.displacementMap,Qe=!!b.emissiveMap,Ze=!!b.metalnessMap,Le=!!b.roughnessMap,Ie=b.anisotropy>0,I=b.clearcoat>0,w=b.dispersion>0,H=b.iridescence>0,he=b.sheen>0,pe=b.transmission>0,ae=Ie&&!!b.anisotropyMap,Ye=I&&!!b.clearcoatMap,we=I&&!!b.clearcoatNormalMap,ke=I&&!!b.clearcoatRoughnessMap,at=H&&!!b.iridescenceMap,ye=H&&!!b.iridescenceThicknessMap,Ce=he&&!!b.sheenColorMap,He=he&&!!b.sheenRoughnessMap,We=!!b.specularMap,be=!!b.specularColorMap,ft=!!b.specularIntensityMap,G=pe&&!!b.transmissionMap,Pe=pe&&!!b.thicknessMap,ge=!!b.gradientMap,Fe=!!b.alphaMap,xe=b.alphaTest>0,me=!!b.alphaHash,Ee=!!b.extensions;let lt=or;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(lt=s.toneMapping);const ot={shaderID:fe,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:qe,defines:b.defines,customVertexShaderID:Ge,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:De,batchingColor:De&&Z._colorsTexture!==null,instancing:Be,instancingColor:Be&&Z.instanceColor!==null,instancingMorph:Be&&Z.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Va,alphaToCoverage:!!b.alphaToCoverage,map:yt,matcap:Zt,envMap:St,envMapMode:St&&Y.mapping,envMapCubeUVHeight:X,aoMap:Pt,lightMap:Ut,bumpMap:gt,normalMap:Ht,displacementMap:j,emissiveMap:Qe,normalMapObjectSpace:Ht&&b.normalMapType===p_,normalMapTangentSpace:Ht&&b.normalMapType===lg,metalnessMap:Ze,roughnessMap:Le,anisotropy:Ie,anisotropyMap:ae,clearcoat:I,clearcoatMap:Ye,clearcoatNormalMap:we,clearcoatRoughnessMap:ke,dispersion:w,iridescence:H,iridescenceMap:at,iridescenceThicknessMap:ye,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:He,specularMap:We,specularColorMap:be,specularIntensityMap:ft,transmission:pe,transmissionMap:G,thicknessMap:Pe,gradientMap:ge,opaque:b.transparent===!1&&b.blending===Fa&&b.alphaToCoverage===!1,alphaMap:Fe,alphaTest:xe,alphaHash:me,combine:b.combine,mapUv:yt&&A(b.map.channel),aoMapUv:Pt&&A(b.aoMap.channel),lightMapUv:Ut&&A(b.lightMap.channel),bumpMapUv:gt&&A(b.bumpMap.channel),normalMapUv:Ht&&A(b.normalMap.channel),displacementMapUv:j&&A(b.displacementMap.channel),emissiveMapUv:Qe&&A(b.emissiveMap.channel),metalnessMapUv:Ze&&A(b.metalnessMap.channel),roughnessMapUv:Le&&A(b.roughnessMap.channel),anisotropyMapUv:ae&&A(b.anisotropyMap.channel),clearcoatMapUv:Ye&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(b.sheenRoughnessMap.channel),specularMapUv:We&&A(b.specularMap.channel),specularColorMapUv:be&&A(b.specularColorMap.channel),specularIntensityMapUv:ft&&A(b.specularIntensityMap.channel),transmissionMapUv:G&&A(b.transmissionMap.channel),thicknessMapUv:Pe&&A(b.thicknessMap.channel),alphaMapUv:Fe&&A(b.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Ht||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!re.attributes.uv&&(yt||Fe),fog:!!ie,useFog:b.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:_e,skinning:Z.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:le,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:yt&&b.map.isVideoTexture===!0&&jt.getTransfer(b.map.colorSpace)===$t,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&jt.getTransfer(b.emissiveMap.colorSpace)===$t,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Lr,flipSided:b.side===ui,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&b.extensions.multiDraw===!0||De)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ot.vertexUv1s=m.has(1),ot.vertexUv2s=m.has(2),ot.vertexUv3s=m.has(3),m.clear(),ot}function _(b){const N=[];if(b.shaderID?N.push(b.shaderID):(N.push(b.customVertexShaderID),N.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)N.push(B),N.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(C(N,b),L(N,b),N.push(s.outputColorSpace)),N.push(b.customProgramCacheKey),N.join()}function C(b,N){b.push(N.precision),b.push(N.outputColorSpace),b.push(N.envMapMode),b.push(N.envMapCubeUVHeight),b.push(N.mapUv),b.push(N.alphaMapUv),b.push(N.lightMapUv),b.push(N.aoMapUv),b.push(N.bumpMapUv),b.push(N.normalMapUv),b.push(N.displacementMapUv),b.push(N.emissiveMapUv),b.push(N.metalnessMapUv),b.push(N.roughnessMapUv),b.push(N.anisotropyMapUv),b.push(N.clearcoatMapUv),b.push(N.clearcoatNormalMapUv),b.push(N.clearcoatRoughnessMapUv),b.push(N.iridescenceMapUv),b.push(N.iridescenceThicknessMapUv),b.push(N.sheenColorMapUv),b.push(N.sheenRoughnessMapUv),b.push(N.specularMapUv),b.push(N.specularColorMapUv),b.push(N.specularIntensityMapUv),b.push(N.transmissionMapUv),b.push(N.thicknessMapUv),b.push(N.combine),b.push(N.fogExp2),b.push(N.sizeAttenuation),b.push(N.morphTargetsCount),b.push(N.morphAttributeCount),b.push(N.numDirLights),b.push(N.numPointLights),b.push(N.numSpotLights),b.push(N.numSpotLightMaps),b.push(N.numHemiLights),b.push(N.numRectAreaLights),b.push(N.numDirLightShadows),b.push(N.numPointLightShadows),b.push(N.numSpotLightShadows),b.push(N.numSpotLightShadowsWithMaps),b.push(N.numLightProbes),b.push(N.shadowMapType),b.push(N.toneMapping),b.push(N.numClippingPlanes),b.push(N.numClipIntersection),b.push(N.depthPacking)}function L(b,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),b.push(f.mask)}function P(b){const N=T[b.type];let B;if(N){const $=rr[N];B=G_.clone($.uniforms)}else B=b.uniforms;return B}function U(b,N){let B=v.get(N);return B!==void 0?++B.usedTimes:(B=new Aw(s,N,b,l),x.push(B),v.set(N,B)),B}function D(b){if(--b.usedTimes===0){const N=x.indexOf(b);x[N]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function z(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:U,releaseProgram:D,releaseShaderCache:O,programs:x,dispose:z}}function Lw(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function Iw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function D0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(v,S,M,T,A,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:M,groupOrder:T,renderOrder:v.renderOrder,z:A,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=M,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=y),e++,_}function f(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.push(_):M.transparent===!0?o.push(_):t.push(_)}function p(v,S,M,T,A,y){const _=d(v,S,M,T,A,y);M.transmission>0?r.unshift(_):M.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,S){t.length>1&&t.sort(v||Iw),r.length>1&&r.sort(S||P0),o.length>1&&o.sort(S||P0)}function x(){for(let v=e,S=s.length;v<S;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:x,sort:m}}function Uw(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new D0,s.set(r,[d])):o>=l.length?(d=new D0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ow(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new K,color:new At};break;case"SpotLight":t={position:new K,direction:new K,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new K,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new K,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new K,halfWidth:new K,halfHeight:new K};break}return s[e.id]=t,t}}}function Fw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let kw=0;function Bw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function zw(s){const e=new Ow,t=Fw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new K);const o=new K,l=new ln,d=new ln;function f(m){let x=0,v=0,S=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let M=0,T=0,A=0,y=0,_=0,C=0,L=0,P=0,U=0,D=0,O=0;m.sort(Bw);for(let b=0,N=m.length;b<N;b++){const B=m[b],$=B.color,Z=B.intensity,ie=B.distance;let re=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ja?re=B.shadow.map.texture:re=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=$.r*Z,v+=$.g*Z,S+=$.b*Z;else if(B.isLightProbe){for(let ee=0;ee<9;ee++)r.probe[ee].addScaledVector(B.sh.coefficients[ee],Z);O++}else if(B.isDirectionalLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Y=B.shadow,X=t.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=re,r.directionalShadowMatrix[M]=B.shadow.matrix,C++}r.directional[M]=ee,M++}else if(B.isSpotLight){const ee=e.get(B);ee.position.setFromMatrixPosition(B.matrixWorld),ee.color.copy($).multiplyScalar(Z),ee.distance=ie,ee.coneCos=Math.cos(B.angle),ee.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ee.decay=B.decay,r.spot[A]=ee;const Y=B.shadow;if(B.map&&(r.spotLightMap[U]=B.map,U++,Y.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[A]=Y.matrix,B.castShadow){const X=t.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,r.spotShadow[A]=X,r.spotShadowMap[A]=re,P++}A++}else if(B.isRectAreaLight){const ee=e.get(B);ee.color.copy($).multiplyScalar(Z),ee.halfWidth.set(B.width*.5,0,0),ee.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ee,y++}else if(B.isPointLight){const ee=e.get(B);if(ee.color.copy(B.color).multiplyScalar(B.intensity),ee.distance=B.distance,ee.decay=B.decay,B.castShadow){const Y=B.shadow,X=t.get(B);X.shadowIntensity=Y.intensity,X.shadowBias=Y.bias,X.shadowNormalBias=Y.normalBias,X.shadowRadius=Y.radius,X.shadowMapSize=Y.mapSize,X.shadowCameraNear=Y.camera.near,X.shadowCameraFar=Y.camera.far,r.pointShadow[T]=X,r.pointShadowMap[T]=re,r.pointShadowMatrix[T]=B.shadow.matrix,L++}r.point[T]=ee,T++}else if(B.isHemisphereLight){const ee=e.get(B);ee.skyColor.copy(B.color).multiplyScalar(Z),ee.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[_]=ee,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=S;const z=r.hash;(z.directionalLength!==M||z.pointLength!==T||z.spotLength!==A||z.rectAreaLength!==y||z.hemiLength!==_||z.numDirectionalShadows!==C||z.numPointShadows!==L||z.numSpotShadows!==P||z.numSpotMaps!==U||z.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+U-D,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,z.directionalLength=M,z.pointLength=T,z.spotLength=A,z.rectAreaLength=y,z.hemiLength=_,z.numDirectionalShadows=C,z.numPointShadows=L,z.numSpotShadows=P,z.numSpotMaps=U,z.numLightProbes=O,r.version=kw++)}function p(m,x){let v=0,S=0,M=0,T=0,A=0;const y=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const L=m[_];if(L.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),v++}else if(L.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),d.identity(),l.copy(L.matrixWorld),l.premultiply(y),d.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const P=r.hemi[A];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),A++}}}return{setup:f,setupView:p,state:r}}function L0(s){const e=new zw(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function d(x){r.push(x)}function f(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function jw(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new L0(s),e.set(o,[f])):l>=d.length?(f=new L0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const Vw=`void main() {
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
}`,Hw=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],Ww=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],I0=new ln,Po=new K,Ud=new K;function Xw(s,e,t){let r=new Jf;const o=new mt,l=new mt,d=new dn,f=new e1,p=new t1,m={},x=t.maxTextureSize,v={[vs]:ui,[ui]:vs,[Lr]:Lr},S=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:Vw,fragmentShader:Gw}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new Mi;T.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Re(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lc;let _=this.type;this.render=function(D,O,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;D.type===Bf&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=lc);const b=s.getRenderTarget(),N=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),$=s.state;$.setBlending(Or),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const Z=_!==this.type;Z&&O.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(re=>re.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,re=D.length;ie<re;ie++){const ee=D[ie],Y=ee.shadow;if(Y===void 0){_t("WebGLShadowMap:",ee,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const X=Y.getFrameExtents();if(o.multiply(X),l.copy(Y.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/X.x),o.x=l.x*X.x,Y.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/X.y),o.y=l.y*X.y,Y.mapSize.y=l.y)),Y.map===null||Z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Lo){if(ee.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new lr(o.x,o.y,{format:ja,type:kr,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),Y.map.texture.name=ee.name+".shadowMap",Y.map.depthTexture=new zo(o.x,o.y,sr),Y.map.depthTexture.name=ee.name+".shadowMapDepth",Y.map.depthTexture.format=Br,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Fn,Y.map.depthTexture.magFilter=Fn}else{ee.isPointLight?(Y.map=new xg(o.x),Y.map.depthTexture=new Q_(o.x,ur)):(Y.map=new lr(o.x,o.y),Y.map.depthTexture=new zo(o.x,o.y,ur)),Y.map.depthTexture.name=ee.name+".shadowMap",Y.map.depthTexture.format=Br;const oe=s.state.buffers.depth.getReversed();this.type===lc?(Y.map.depthTexture.compareFunction=oe?qf:Xf,Y.map.depthTexture.minFilter=Pn,Y.map.depthTexture.magFilter=Pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Fn,Y.map.depthTexture.magFilter=Fn)}Y.camera.updateProjectionMatrix()}const fe=Y.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<fe;oe++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(Y.map),s.clear());const F=Y.getViewport(oe);d.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),$.viewport(d)}if(ee.isPointLight){const F=Y.camera,le=Y.matrix,Ne=ee.distance||F.far;Ne!==F.far&&(F.far=Ne,F.updateProjectionMatrix()),Po.setFromMatrixPosition(ee.matrixWorld),F.position.copy(Po),Ud.copy(F.position),Ud.add(Hw[oe]),F.up.copy(Ww[oe]),F.lookAt(Ud),F.updateMatrixWorld(),le.makeTranslation(-Po.x,-Po.y,-Po.z),I0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(I0,F.coordinateSystem,F.reversedDepth)}else Y.updateMatrices(ee);r=Y.getFrustum(),P(O,z,Y.camera,ee,this.type)}Y.isPointLightShadow!==!0&&this.type===Lo&&C(Y,z),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(b,N,B)};function C(D,O){const z=e.update(A);S.defines.VSM_SAMPLES!==D.blurSamples&&(S.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new lr(o.x,o.y,{format:ja,type:kr})),S.uniforms.shadow_pass.value=D.map.depthTexture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,z,S,A,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,z,M,A,null)}function L(D,O,z,b){let N=null;const B=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)N=B;else if(N=z.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=N.uuid,Z=O.uuid;let ie=m[$];ie===void 0&&(ie={},m[$]=ie);let re=ie[Z];re===void 0&&(re=N.clone(),ie[Z]=re,O.addEventListener("dispose",U)),N=re}if(N.visible=O.visible,N.wireframe=O.wireframe,b===Lo?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:v[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=s.properties.get(N);$.light=z}return N}function P(D,O,z,b,N){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===Lo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const Z=e.update(D),ie=D.material;if(Array.isArray(ie)){const re=Z.groups;for(let ee=0,Y=re.length;ee<Y;ee++){const X=re[ee],fe=ie[X.materialIndex];if(fe&&fe.visible){const oe=L(D,fe,b,N);D.onBeforeShadow(s,D,O,z,Z,oe,X),s.renderBufferDirect(z,null,Z,oe,D,X),D.onAfterShadow(s,D,O,z,Z,oe,X)}}}else if(ie.visible){const re=L(D,ie,b,N);D.onBeforeShadow(s,D,O,z,Z,re,null),s.renderBufferDirect(z,null,Z,re,D,null),D.onAfterShadow(s,D,O,z,Z,re,null)}}const $=D.children;for(let Z=0,ie=$.length;Z<ie;Z++)P($[Z],O,z,b,N)}function U(D){D.target.removeEventListener("dispose",U);for(const z in m){const b=m[z],N=D.target.uuid;N in b&&(b[N].dispose(),delete b[N])}}}const qw={[Vd]:Gd,[Hd]:qd,[Wd]:Yd,[Ba]:Xd,[Gd]:Vd,[qd]:Hd,[Yd]:Wd,[Xd]:Ba};function Yw(s,e){function t(){let G=!1;const Pe=new dn;let ge=null;const Fe=new dn(0,0,0,0);return{setMask:function(xe){ge!==xe&&!G&&(s.colorMask(xe,xe,xe,xe),ge=xe)},setLocked:function(xe){G=xe},setClear:function(xe,me,Ee,lt,ot){ot===!0&&(xe*=lt,me*=lt,Ee*=lt),Pe.set(xe,me,Ee,lt),Fe.equals(Pe)===!1&&(s.clearColor(xe,me,Ee,lt),Fe.copy(Pe))},reset:function(){G=!1,ge=null,Fe.set(-1,0,0,0)}}}function r(){let G=!1,Pe=!1,ge=null,Fe=null,xe=null;return{setReversed:function(me){if(Pe!==me){const Ee=e.get("EXT_clip_control");me?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Pe=me;const lt=xe;xe=null,this.setClear(lt)}},getReversed:function(){return Pe},setTest:function(me){me?de(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(me){ge!==me&&!G&&(s.depthMask(me),ge=me)},setFunc:function(me){if(Pe&&(me=qw[me]),Fe!==me){switch(me){case Vd:s.depthFunc(s.NEVER);break;case Gd:s.depthFunc(s.ALWAYS);break;case Hd:s.depthFunc(s.LESS);break;case Ba:s.depthFunc(s.LEQUAL);break;case Wd:s.depthFunc(s.EQUAL);break;case Xd:s.depthFunc(s.GEQUAL);break;case qd:s.depthFunc(s.GREATER);break;case Yd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Fe=me}},setLocked:function(me){G=me},setClear:function(me){xe!==me&&(Pe&&(me=1-me),s.clearDepth(me),xe=me)},reset:function(){G=!1,ge=null,Fe=null,xe=null,Pe=!1}}}function o(){let G=!1,Pe=null,ge=null,Fe=null,xe=null,me=null,Ee=null,lt=null,ot=null;return{setTest:function(it){G||(it?de(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(it){Pe!==it&&!G&&(s.stencilMask(it),Pe=it)},setFunc:function(it,qt,Wt){(ge!==it||Fe!==qt||xe!==Wt)&&(s.stencilFunc(it,qt,Wt),ge=it,Fe=qt,xe=Wt)},setOp:function(it,qt,Wt){(me!==it||Ee!==qt||lt!==Wt)&&(s.stencilOp(it,qt,Wt),me=it,Ee=qt,lt=Wt)},setLocked:function(it){G=it},setClear:function(it){ot!==it&&(s.clearStencil(it),ot=it)},reset:function(){G=!1,Pe=null,ge=null,Fe=null,xe=null,me=null,Ee=null,lt=null,ot=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let x={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,L=null,P=null,U=null,D=null,O=new At(0,0,0),z=0,b=!1,N=null,B=null,$=null,Z=null,ie=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Y=0;const X=s.getParameter(s.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=Y>=2);let fe=null,oe={};const F=s.getParameter(s.SCISSOR_BOX),le=s.getParameter(s.VIEWPORT),Ne=new dn().fromArray(F),qe=new dn().fromArray(le);function Ge(G,Pe,ge,Fe){const xe=new Uint8Array(4),me=s.createTexture();s.bindTexture(G,me),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ee=0;Ee<ge;Ee++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Fe,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Pe+Ee,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return me}const te={};te[s.TEXTURE_2D]=Ge(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),de(s.DEPTH_TEST),d.setFunc(Ba),gt(!1),Ht(Lm),de(s.CULL_FACE),Pt(Or);function de(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function _e(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Be(G,Pe){return v[G]!==Pe?(s.bindFramebuffer(G,Pe),v[G]=Pe,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Pe),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function De(G,Pe){let ge=M,Fe=!1;if(G){ge=S.get(Pe),ge===void 0&&(ge=[],S.set(Pe,ge));const xe=G.textures;if(ge.length!==xe.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Ee=xe.length;me<Ee;me++)ge[me]=s.COLOR_ATTACHMENT0+me;ge.length=xe.length,Fe=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Fe=!0);Fe&&s.drawBuffers(ge)}function yt(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const Zt={[Gs]:s.FUNC_ADD,[qv]:s.FUNC_SUBTRACT,[Yv]:s.FUNC_REVERSE_SUBTRACT};Zt[$v]=s.MIN,Zt[Kv]=s.MAX;const St={[Zv]:s.ZERO,[Qv]:s.ONE,[Jv]:s.SRC_COLOR,[zd]:s.SRC_ALPHA,[s_]:s.SRC_ALPHA_SATURATE,[i_]:s.DST_COLOR,[t_]:s.DST_ALPHA,[e_]:s.ONE_MINUS_SRC_COLOR,[jd]:s.ONE_MINUS_SRC_ALPHA,[r_]:s.ONE_MINUS_DST_COLOR,[n_]:s.ONE_MINUS_DST_ALPHA,[a_]:s.CONSTANT_COLOR,[o_]:s.ONE_MINUS_CONSTANT_COLOR,[l_]:s.CONSTANT_ALPHA,[c_]:s.ONE_MINUS_CONSTANT_ALPHA};function Pt(G,Pe,ge,Fe,xe,me,Ee,lt,ot,it){if(G===Or){A===!0&&(_e(s.BLEND),A=!1);return}if(A===!1&&(de(s.BLEND),A=!0),G!==Xv){if(G!==y||it!==b){if((_!==Gs||P!==Gs)&&(s.blendEquation(s.FUNC_ADD),_=Gs,P=Gs),it)switch(G){case Fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFunc(s.ONE,s.ONE);break;case Um:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Om:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:zt("WebGLState: Invalid blending: ",G);break}else switch(G){case Fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Im:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Um:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Om:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",G);break}C=null,L=null,U=null,D=null,O.set(0,0,0),z=0,y=G,b=it}return}xe=xe||Pe,me=me||ge,Ee=Ee||Fe,(Pe!==_||xe!==P)&&(s.blendEquationSeparate(Zt[Pe],Zt[xe]),_=Pe,P=xe),(ge!==C||Fe!==L||me!==U||Ee!==D)&&(s.blendFuncSeparate(St[ge],St[Fe],St[me],St[Ee]),C=ge,L=Fe,U=me,D=Ee),(lt.equals(O)===!1||ot!==z)&&(s.blendColor(lt.r,lt.g,lt.b,ot),O.copy(lt),z=ot),y=G,b=!1}function Ut(G,Pe){G.side===Lr?_e(s.CULL_FACE):de(s.CULL_FACE);let ge=G.side===ui;Pe&&(ge=!ge),gt(ge),G.blending===Fa&&G.transparent===!1?Pt(Or):Pt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),l.setMask(G.colorWrite);const Fe=G.stencilWrite;f.setTest(Fe),Fe&&(f.setMask(G.stencilWriteMask),f.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),f.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Qe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(G){N!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),N=G)}function Ht(G){G!==Hv?(de(s.CULL_FACE),G!==B&&(G===Lm?s.cullFace(s.BACK):G===Wv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),B=G}function j(G){G!==$&&(ee&&s.lineWidth(G),$=G)}function Qe(G,Pe,ge){G?(de(s.POLYGON_OFFSET_FILL),(Z!==Pe||ie!==ge)&&(s.polygonOffset(Pe,ge),Z=Pe,ie=ge)):_e(s.POLYGON_OFFSET_FILL)}function Ze(G){G?de(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Le(G){G===void 0&&(G=s.TEXTURE0+re-1),fe!==G&&(s.activeTexture(G),fe=G)}function Ie(G,Pe,ge){ge===void 0&&(fe===null?ge=s.TEXTURE0+re-1:ge=fe);let Fe=oe[ge];Fe===void 0&&(Fe={type:void 0,texture:void 0},oe[ge]=Fe),(Fe.type!==G||Fe.texture!==Pe)&&(fe!==ge&&(s.activeTexture(ge),fe=ge),s.bindTexture(G,Pe||te[G]),Fe.type=G,Fe.texture=Pe)}function I(){const G=oe[fe];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function H(){try{s.compressedTexImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function pe(){try{s.texSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function ae(){try{s.compressedTexSubImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ye(){try{s.compressedTexSubImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function we(){try{s.texStorage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ke(){try{s.texStorage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function at(){try{s.texImage2D(...arguments)}catch(G){zt("WebGLState:",G)}}function ye(){try{s.texImage3D(...arguments)}catch(G){zt("WebGLState:",G)}}function Ce(G){Ne.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ne.copy(G))}function He(G){qe.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),qe.copy(G))}function We(G,Pe){let ge=m.get(Pe);ge===void 0&&(ge=new WeakMap,m.set(Pe,ge));let Fe=ge.get(G);Fe===void 0&&(Fe=s.getUniformBlockIndex(Pe,G.name),ge.set(G,Fe))}function be(G,Pe){const Fe=m.get(Pe).get(G);p.get(Pe)!==Fe&&(s.uniformBlockBinding(Pe,Fe,G.__bindingPointIndex),p.set(Pe,Fe))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,oe={},v={},S=new WeakMap,M=[],T=null,A=!1,y=null,_=null,C=null,L=null,P=null,U=null,D=null,O=new At(0,0,0),z=0,b=!1,N=null,B=null,$=null,Z=null,ie=null,Ne.set(0,0,s.canvas.width,s.canvas.height),qe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:de,disable:_e,bindFramebuffer:Be,drawBuffers:De,useProgram:yt,setBlending:Pt,setMaterial:Ut,setFlipSided:gt,setCullFace:Ht,setLineWidth:j,setPolygonOffset:Qe,setScissorTest:Ze,activeTexture:Le,bindTexture:Ie,unbindTexture:I,compressedTexImage2D:w,compressedTexImage3D:H,texImage2D:at,texImage3D:ye,updateUBOMapping:We,uniformBlockBinding:be,texStorage2D:we,texStorage3D:ke,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ye,scissor:Ce,viewport:He,reset:ft}}function $w(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new mt,x=new WeakMap;let v;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,w){return M?new OffscreenCanvas(I,w):ko("canvas")}function A(I,w,H){let he=1;const pe=Ie(I);if((pe.width>H||pe.height>H)&&(he=H/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ae=Math.floor(he*pe.width),Ye=Math.floor(he*pe.height);v===void 0&&(v=T(ae,Ye));const we=w?T(ae,Ye):v;return we.width=ae,we.height=Ye,we.getContext("2d").drawImage(I,0,0,ae,Ye),_t("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ae+"x"+Ye+")."),we}else return"data"in I&&_t("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),I;return I}function y(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function C(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,w,H,he,pe=!1){if(I!==null){if(s[I]!==void 0)return s[I];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae=w;if(w===s.RED&&(H===s.FLOAT&&(ae=s.R32F),H===s.HALF_FLOAT&&(ae=s.R16F),H===s.UNSIGNED_BYTE&&(ae=s.R8)),w===s.RED_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.R8UI),H===s.UNSIGNED_SHORT&&(ae=s.R16UI),H===s.UNSIGNED_INT&&(ae=s.R32UI),H===s.BYTE&&(ae=s.R8I),H===s.SHORT&&(ae=s.R16I),H===s.INT&&(ae=s.R32I)),w===s.RG&&(H===s.FLOAT&&(ae=s.RG32F),H===s.HALF_FLOAT&&(ae=s.RG16F),H===s.UNSIGNED_BYTE&&(ae=s.RG8)),w===s.RG_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.RG8UI),H===s.UNSIGNED_SHORT&&(ae=s.RG16UI),H===s.UNSIGNED_INT&&(ae=s.RG32UI),H===s.BYTE&&(ae=s.RG8I),H===s.SHORT&&(ae=s.RG16I),H===s.INT&&(ae=s.RG32I)),w===s.RGB_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.RGB8UI),H===s.UNSIGNED_SHORT&&(ae=s.RGB16UI),H===s.UNSIGNED_INT&&(ae=s.RGB32UI),H===s.BYTE&&(ae=s.RGB8I),H===s.SHORT&&(ae=s.RGB16I),H===s.INT&&(ae=s.RGB32I)),w===s.RGBA_INTEGER&&(H===s.UNSIGNED_BYTE&&(ae=s.RGBA8UI),H===s.UNSIGNED_SHORT&&(ae=s.RGBA16UI),H===s.UNSIGNED_INT&&(ae=s.RGBA32UI),H===s.BYTE&&(ae=s.RGBA8I),H===s.SHORT&&(ae=s.RGBA16I),H===s.INT&&(ae=s.RGBA32I)),w===s.RGB&&(H===s.UNSIGNED_INT_5_9_9_9_REV&&(ae=s.RGB9_E5),H===s.UNSIGNED_INT_10F_11F_11F_REV&&(ae=s.R11F_G11F_B10F)),w===s.RGBA){const Ye=pe?vc:jt.getTransfer(he);H===s.FLOAT&&(ae=s.RGBA32F),H===s.HALF_FLOAT&&(ae=s.RGBA16F),H===s.UNSIGNED_BYTE&&(ae=Ye===$t?s.SRGB8_ALPHA8:s.RGBA8),H===s.UNSIGNED_SHORT_4_4_4_4&&(ae=s.RGBA4),H===s.UNSIGNED_SHORT_5_5_5_1&&(ae=s.RGB5_A1)}return(ae===s.R16F||ae===s.R32F||ae===s.RG16F||ae===s.RG32F||ae===s.RGBA16F||ae===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function P(I,w){let H;return I?w===null||w===ur||w===Fo?H=s.DEPTH24_STENCIL8:w===sr?H=s.DEPTH32F_STENCIL8:w===Oo&&(H=s.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ur||w===Fo?H=s.DEPTH_COMPONENT24:w===sr?H=s.DEPTH_COMPONENT32F:w===Oo&&(H=s.DEPTH_COMPONENT16),H}function U(I,w){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==Fn&&I.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?w.mipmaps.length:1}function D(I){const w=I.target;w.removeEventListener("dispose",D),z(w),w.isVideoTexture&&x.delete(w)}function O(I){const w=I.target;w.removeEventListener("dispose",O),N(w)}function z(I){const w=r.get(I);if(w.__webglInit===void 0)return;const H=I.source,he=S.get(H);if(he){const pe=he[w.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&b(I),Object.keys(he).length===0&&S.delete(H)}r.remove(I)}function b(I){const w=r.get(I);s.deleteTexture(w.__webglTexture);const H=I.source,he=S.get(H);delete he[w.__cacheKey],d.memory.textures--}function N(I){const w=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let pe=0;pe<w.__webglFramebuffer[he].length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[he][pe]);else s.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)s.deleteFramebuffer(w.__webglFramebuffer[he]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const H=I.textures;for(let he=0,pe=H.length;he<pe;he++){const ae=r.get(H[he]);ae.__webglTexture&&(s.deleteTexture(ae.__webglTexture),d.memory.textures--),r.remove(H[he])}r.remove(I)}let B=0;function $(){B=0}function Z(){const I=B;return I>=o.maxTextures&&_t("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),B+=1,I}function ie(I){const w=[];return w.push(I.wrapS),w.push(I.wrapT),w.push(I.wrapR||0),w.push(I.magFilter),w.push(I.minFilter),w.push(I.anisotropy),w.push(I.internalFormat),w.push(I.format),w.push(I.type),w.push(I.generateMipmaps),w.push(I.premultiplyAlpha),w.push(I.flipY),w.push(I.unpackAlignment),w.push(I.colorSpace),w.join()}function re(I,w){const H=r.get(I);if(I.isVideoTexture&&Ze(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const he=I.image;if(he===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,I,w);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,H.__webglTexture,s.TEXTURE0+w)}function ee(I,w){const H=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){te(H,I,w);return}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,H.__webglTexture,s.TEXTURE0+w)}function Y(I,w){const H=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){te(H,I,w);return}t.bindTexture(s.TEXTURE_3D,H.__webglTexture,s.TEXTURE0+w)}function X(I,w){const H=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&H.__version!==I.version){de(H,I,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,H.__webglTexture,s.TEXTURE0+w)}const fe={[Zd]:s.REPEAT,[Ir]:s.CLAMP_TO_EDGE,[Qd]:s.MIRRORED_REPEAT},oe={[Fn]:s.NEAREST,[f_]:s.NEAREST_MIPMAP_NEAREST,[zl]:s.NEAREST_MIPMAP_LINEAR,[Pn]:s.LINEAR,[rd]:s.LINEAR_MIPMAP_NEAREST,[Ws]:s.LINEAR_MIPMAP_LINEAR},F={[m_]:s.NEVER,[y_]:s.ALWAYS,[g_]:s.LESS,[Xf]:s.LEQUAL,[x_]:s.EQUAL,[qf]:s.GEQUAL,[v_]:s.GREATER,[__]:s.NOTEQUAL};function le(I,w){if(w.type===sr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===rd||w.magFilter===zl||w.magFilter===Ws||w.minFilter===Pn||w.minFilter===rd||w.minFilter===zl||w.minFilter===Ws)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,fe[w.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,fe[w.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,fe[w.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,oe[w.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,oe[w.minFilter]),w.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Fn||w.minFilter!==zl&&w.minFilter!==Ws||w.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(I,w){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,w.addEventListener("dispose",D));const he=w.source;let pe=S.get(he);pe===void 0&&(pe={},S.set(he,pe));const ae=ie(w);if(ae!==I.__cacheKey){pe[ae]===void 0&&(pe[ae]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,H=!0),pe[ae].usedTimes++;const Ye=pe[I.__cacheKey];Ye!==void 0&&(pe[I.__cacheKey].usedTimes--,Ye.usedTimes===0&&b(w)),I.__cacheKey=ae,I.__webglTexture=pe[ae].texture}return H}function qe(I,w,H){return Math.floor(Math.floor(I/H)/w)}function Ge(I,w,H,he){const ae=I.updateRanges;if(ae.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,H,he,w.data);else{ae.sort((ye,Ce)=>ye.start-Ce.start);let Ye=0;for(let ye=1;ye<ae.length;ye++){const Ce=ae[Ye],He=ae[ye],We=Ce.start+Ce.count,be=qe(He.start,w.width,4),ft=qe(Ce.start,w.width,4);He.start<=We+1&&be===ft&&qe(He.start+He.count-1,w.width,4)===be?Ce.count=Math.max(Ce.count,He.start+He.count-Ce.start):(++Ye,ae[Ye]=He)}ae.length=Ye+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),at=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let ye=0,Ce=ae.length;ye<Ce;ye++){const He=ae[ye],We=Math.floor(He.start/4),be=Math.ceil(He.count/4),ft=We%w.width,G=Math.floor(We/w.width),Pe=be,ge=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,ft,G,Pe,ge,H,he,w.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,at)}}function te(I,w,H){let he=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(he=s.TEXTURE_3D);const pe=Ne(I,w),ae=w.source;t.bindTexture(he,I.__webglTexture,s.TEXTURE0+H);const Ye=r.get(ae);if(ae.version!==Ye.__version||pe===!0){t.activeTexture(s.TEXTURE0+H);const we=jt.getPrimaries(jt.workingColorSpace),ke=w.colorSpace===ms?null:jt.getPrimaries(w.colorSpace),at=w.colorSpace===ms||we===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let ye=A(w.image,!1,o.maxTextureSize);ye=Le(w,ye);const Ce=l.convert(w.format,w.colorSpace),He=l.convert(w.type);let We=L(w.internalFormat,Ce,He,w.colorSpace,w.isVideoTexture);le(he,w);let be;const ft=w.mipmaps,G=w.isVideoTexture!==!0,Pe=Ye.__version===void 0||pe===!0,ge=ae.dataReady,Fe=U(w,ye);if(w.isDepthTexture)We=P(w.format===Xs,w.type),Pe&&(G?t.texStorage2D(s.TEXTURE_2D,1,We,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,Ce,He,null));else if(w.isDataTexture)if(ft.length>0){G&&Pe&&t.texStorage2D(s.TEXTURE_2D,Fe,We,ft[0].width,ft[0].height);for(let xe=0,me=ft.length;xe<me;xe++)be=ft[xe],G?ge&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ce,He,be.data):t.texImage2D(s.TEXTURE_2D,xe,We,be.width,be.height,0,Ce,He,be.data);w.generateMipmaps=!1}else G?(Pe&&t.texStorage2D(s.TEXTURE_2D,Fe,We,ye.width,ye.height),ge&&Ge(w,ye,Ce,He)):t.texImage2D(s.TEXTURE_2D,0,We,ye.width,ye.height,0,Ce,He,ye.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){G&&Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,We,ft[0].width,ft[0].height,ye.depth);for(let xe=0,me=ft.length;xe<me;xe++)if(be=ft[xe],w.format!==$i)if(Ce!==null)if(G){if(ge)if(w.layerUpdates.size>0){const Ee=d0(be.width,be.height,w.format,w.type);for(const lt of w.layerUpdates){const ot=be.data.subarray(lt*Ee/be.data.BYTES_PER_ELEMENT,(lt+1)*Ee/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,lt,be.width,be.height,1,Ce,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,ye.depth,Ce,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,We,be.width,be.height,ye.depth,0,be.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?ge&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,be.width,be.height,ye.depth,Ce,He,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,We,be.width,be.height,ye.depth,0,Ce,He,be.data)}else{G&&Pe&&t.texStorage2D(s.TEXTURE_2D,Fe,We,ft[0].width,ft[0].height);for(let xe=0,me=ft.length;xe<me;xe++)be=ft[xe],w.format!==$i?Ce!==null?G?ge&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,We,be.width,be.height,0,be.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?ge&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,be.width,be.height,Ce,He,be.data):t.texImage2D(s.TEXTURE_2D,xe,We,be.width,be.height,0,Ce,He,be.data)}else if(w.isDataArrayTexture)if(G){if(Pe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Fe,We,ye.width,ye.height,ye.depth),ge)if(w.layerUpdates.size>0){const xe=d0(ye.width,ye.height,w.format,w.type);for(const me of w.layerUpdates){const Ee=ye.data.subarray(me*xe/ye.data.BYTES_PER_ELEMENT,(me+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,ye.width,ye.height,1,Ce,He,Ee)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Ce,He,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,We,ye.width,ye.height,ye.depth,0,Ce,He,ye.data);else if(w.isData3DTexture)G?(Pe&&t.texStorage3D(s.TEXTURE_3D,Fe,We,ye.width,ye.height,ye.depth),ge&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Ce,He,ye.data)):t.texImage3D(s.TEXTURE_3D,0,We,ye.width,ye.height,ye.depth,0,Ce,He,ye.data);else if(w.isFramebufferTexture){if(Pe)if(G)t.texStorage2D(s.TEXTURE_2D,Fe,We,ye.width,ye.height);else{let xe=ye.width,me=ye.height;for(let Ee=0;Ee<Fe;Ee++)t.texImage2D(s.TEXTURE_2D,Ee,We,xe,me,0,Ce,He,null),xe>>=1,me>>=1}}else if(ft.length>0){if(G&&Pe){const xe=Ie(ft[0]);t.texStorage2D(s.TEXTURE_2D,Fe,We,xe.width,xe.height)}for(let xe=0,me=ft.length;xe<me;xe++)be=ft[xe],G?ge&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ce,He,be):t.texImage2D(s.TEXTURE_2D,xe,We,Ce,He,be);w.generateMipmaps=!1}else if(G){if(Pe){const xe=Ie(ye);t.texStorage2D(s.TEXTURE_2D,Fe,We,xe.width,xe.height)}ge&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,He,ye)}else t.texImage2D(s.TEXTURE_2D,0,We,Ce,He,ye);y(w)&&_(he),Ye.__version=ae.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function de(I,w,H){if(w.image.length!==6)return;const he=Ne(I,w),pe=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+H);const ae=r.get(pe);if(pe.version!==ae.__version||he===!0){t.activeTexture(s.TEXTURE0+H);const Ye=jt.getPrimaries(jt.workingColorSpace),we=w.colorSpace===ms?null:jt.getPrimaries(w.colorSpace),ke=w.colorSpace===ms||Ye===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,ye=w.image[0]&&w.image[0].isDataTexture,Ce=[];for(let me=0;me<6;me++)!at&&!ye?Ce[me]=A(w.image[me],!0,o.maxCubemapSize):Ce[me]=ye?w.image[me].image:w.image[me],Ce[me]=Le(w,Ce[me]);const He=Ce[0],We=l.convert(w.format,w.colorSpace),be=l.convert(w.type),ft=L(w.internalFormat,We,be,w.colorSpace),G=w.isVideoTexture!==!0,Pe=ae.__version===void 0||he===!0,ge=pe.dataReady;let Fe=U(w,He);le(s.TEXTURE_CUBE_MAP,w);let xe;if(at){G&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ft,He.width,He.height);for(let me=0;me<6;me++){xe=Ce[me].mipmaps;for(let Ee=0;Ee<xe.length;Ee++){const lt=xe[Ee];w.format!==$i?We!==null?G?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,0,0,lt.width,lt.height,We,lt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,ft,lt.width,lt.height,0,lt.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,0,0,lt.width,lt.height,We,be,lt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee,ft,lt.width,lt.height,0,We,be,lt.data)}}}else{if(xe=w.mipmaps,G&&Pe){xe.length>0&&Fe++;const me=Ie(Ce[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Fe,ft,me.width,me.height)}for(let me=0;me<6;me++)if(ye){G?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce[me].width,Ce[me].height,We,be,Ce[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,Ce[me].width,Ce[me].height,0,We,be,Ce[me].data);for(let Ee=0;Ee<xe.length;Ee++){const ot=xe[Ee].image[me].image;G?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,0,0,ot.width,ot.height,We,be,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,ft,ot.width,ot.height,0,We,be,ot.data)}}else{G?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,We,be,Ce[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ft,We,be,Ce[me]);for(let Ee=0;Ee<xe.length;Ee++){const lt=xe[Ee];G?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,0,0,We,be,lt.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ee+1,ft,We,be,lt.image[me])}}}y(w)&&_(s.TEXTURE_CUBE_MAP),ae.__version=pe.version,w.onUpdate&&w.onUpdate(w)}I.__version=w.version}function _e(I,w,H,he,pe,ae){const Ye=l.convert(H.format,H.colorSpace),we=l.convert(H.type),ke=L(H.internalFormat,Ye,we,H.colorSpace),at=r.get(w),ye=r.get(H);if(ye.__renderTarget=w,!at.__hasExternalTextures){const Ce=Math.max(1,w.width>>ae),He=Math.max(1,w.height>>ae);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,ae,ke,Ce,He,w.depth,0,Ye,we,null):t.texImage2D(pe,ae,ke,Ce,He,0,Ye,we,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Qe(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,pe,ye.__webglTexture,0,j(w)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,pe,ye.__webglTexture,ae),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(I,w,H){if(s.bindRenderbuffer(s.RENDERBUFFER,I),w.depthBuffer){const he=w.depthTexture,pe=he&&he.isDepthTexture?he.type:null,ae=P(w.stencilBuffer,pe),Ye=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Qe(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(w),ae,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(w),ae,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ae,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ye,s.RENDERBUFFER,I)}else{const he=w.textures;for(let pe=0;pe<he.length;pe++){const ae=he[pe],Ye=l.convert(ae.format,ae.colorSpace),we=l.convert(ae.type),ke=L(ae.internalFormat,Ye,we,ae.colorSpace);Qe(w)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(w),ke,w.width,w.height):H?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(w),ke,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ke,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function De(I,w,H){const he=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);if(pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,w.depthTexture.addEventListener("dispose",D)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),le(s.TEXTURE_CUBE_MAP,w.depthTexture);const at=l.convert(w.depthTexture.format),ye=l.convert(w.depthTexture.type);let Ce;w.depthTexture.format===Br?Ce=s.DEPTH_COMPONENT24:w.depthTexture.format===Xs&&(Ce=s.DEPTH24_STENCIL8);for(let He=0;He<6;He++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+He,0,Ce,w.width,w.height,0,at,ye,null)}}else re(w.depthTexture,0);const ae=pe.__webglTexture,Ye=j(w),we=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+H:s.TEXTURE_2D,ke=w.depthTexture.format===Xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(w.depthTexture.format===Br)Qe(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,we,ae,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,ke,we,ae,0);else if(w.depthTexture.format===Xs)Qe(w)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,we,ae,0,Ye):s.framebufferTexture2D(s.FRAMEBUFFER,ke,we,ae,0);else throw new Error("Unknown depthTexture format")}function yt(I){const w=r.get(I),H=I.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),he){const pe=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),w.__depthDisposeCallback=pe}w.__boundDepthTexture=he}if(I.depthTexture&&!w.__autoAllocateDepthBuffer)if(H)for(let he=0;he<6;he++)De(w.__webglFramebuffer[he],I,he);else{const he=I.texture.mipmaps;he&&he.length>0?De(w.__webglFramebuffer[0],I,0):De(w.__webglFramebuffer,I,0)}else if(H){w.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[he]),w.__webglDepthbuffer[he]===void 0)w.__webglDepthbuffer[he]=s.createRenderbuffer(),Be(w.__webglDepthbuffer[he],I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),Be(w.__webglDepthbuffer,I,!1);else{const pe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ae),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ae)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Zt(I,w,H){const he=r.get(I);w!==void 0&&_e(he.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),H!==void 0&&yt(I)}function St(I){const w=I.texture,H=r.get(I),he=r.get(w);I.addEventListener("dispose",O);const pe=I.textures,ae=I.isWebGLCubeRenderTarget===!0,Ye=pe.length>1;if(Ye||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=w.version,d.memory.textures++),ae){H.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer[we]=[];for(let ke=0;ke<w.mipmaps.length;ke++)H.__webglFramebuffer[we][ke]=s.createFramebuffer()}else H.__webglFramebuffer[we]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){H.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)H.__webglFramebuffer[we]=s.createFramebuffer()}else H.__webglFramebuffer=s.createFramebuffer();if(Ye)for(let we=0,ke=pe.length;we<ke;we++){const at=r.get(pe[we]);at.__webglTexture===void 0&&(at.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&Qe(I)===!1){H.__webglMultisampledFramebuffer=s.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let we=0;we<pe.length;we++){const ke=pe[we];H.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,H.__webglColorRenderbuffer[we]);const at=l.convert(ke.format,ke.colorSpace),ye=l.convert(ke.type),Ce=L(ke.internalFormat,at,ye,ke.colorSpace,I.isXRRenderTarget===!0),He=j(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Ce,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,H.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(H.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ae){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),le(s.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)_e(H.__webglFramebuffer[we][ke],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,ke);else _e(H.__webglFramebuffer[we],I,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);y(w)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let we=0,ke=pe.length;we<ke;we++){const at=pe[we],ye=r.get(at);let Ce=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ce=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ye.__webglTexture),le(Ce,at),_e(H.__webglFramebuffer,I,at,s.COLOR_ATTACHMENT0+we,Ce,0),y(at)&&_(Ce)}t.unbindTexture()}else{let we=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(we=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,he.__webglTexture),le(we,w),w.mipmaps&&w.mipmaps.length>0)for(let ke=0;ke<w.mipmaps.length;ke++)_e(H.__webglFramebuffer[ke],I,w,s.COLOR_ATTACHMENT0,we,ke);else _e(H.__webglFramebuffer,I,w,s.COLOR_ATTACHMENT0,we,0);y(w)&&_(we),t.unbindTexture()}I.depthBuffer&&yt(I)}function Pt(I){const w=I.textures;for(let H=0,he=w.length;H<he;H++){const pe=w[H];if(y(pe)){const ae=C(I),Ye=r.get(pe).__webglTexture;t.bindTexture(ae,Ye),_(ae),t.unbindTexture()}}}const Ut=[],gt=[];function Ht(I){if(I.samples>0){if(Qe(I)===!1){const w=I.textures,H=I.width,he=I.height;let pe=s.COLOR_BUFFER_BIT;const ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ye=r.get(I),we=w.length>1;if(we)for(let at=0;at<w.length;at++)t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ke=I.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let at=0;at<w.length;at++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[at]);const ye=r.get(w[at]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,H,he,0,0,H,he,pe,s.NEAREST),p===!0&&(Ut.length=0,gt.length=0,Ut.push(s.COLOR_ATTACHMENT0+at),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ut.push(ae),gt.push(ae),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,gt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let at=0;at<w.length;at++){t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.RENDERBUFFER,Ye.__webglColorRenderbuffer[at]);const ye=r.get(w[at]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ye.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+at,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const w=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function j(I){return Math.min(o.maxSamples,I.samples)}function Qe(I){const w=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ze(I){const w=d.render.frame;x.get(I)!==w&&(x.set(I,w),I.update())}function Le(I,w){const H=I.colorSpace,he=I.format,pe=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Va&&H!==ms&&(jt.getTransfer(H)===$t?(he!==$i||pe!==Si)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",H)),w}function Ie(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.setTexture2D=re,this.setTexture2DArray=ee,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Zt,this.setupRenderTarget=St,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Kw(s,e){function t(r,o=ms){let l;const d=jt.getTransfer(o);if(r===Si)return s.UNSIGNED_BYTE;if(r===jf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tg)return s.BYTE;if(r===ng)return s.SHORT;if(r===Oo)return s.UNSIGNED_SHORT;if(r===zf)return s.INT;if(r===ur)return s.UNSIGNED_INT;if(r===sr)return s.FLOAT;if(r===kr)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===ag)return s.RGB;if(r===$i)return s.RGBA;if(r===Br)return s.DEPTH_COMPONENT;if(r===Xs)return s.DEPTH_STENCIL;if(r===og)return s.RED;if(r===Gf)return s.RED_INTEGER;if(r===ja)return s.RG;if(r===Hf)return s.RG_INTEGER;if(r===Wf)return s.RGBA_INTEGER;if(r===cc||r===uc||r===dc||r===fc)if(d===$t)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===dc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jd||r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Jd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ef)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===rf||r===sf)return d===$t?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===af)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===of)return l.COMPRESSED_R11_EAC;if(r===lf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===cf)return l.COMPRESSED_RG11_EAC;if(r===uf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===wf||r===bf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===df)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ff)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===hf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===pf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===mf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===gf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_f)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===yf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Mf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bf)return d===$t?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ef||r===Tf||r===Cf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Ef)return d===$t?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Tf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Af||r===Rf||r===Nf||r===Pf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Af)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Rf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Fo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Zw=`
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

}`;class Jw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new _g(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new fr({vertexShader:Zw,fragmentShader:Qw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new qn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eb extends $s{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,x=null,v=null,S=null,M=null,T=null;const A=typeof XRWebGLBinding<"u",y=new Jw,_={},C=t.getContextAttributes();let L=null,P=null;const U=[],D=[],O=new mt;let z=null;const b=new Qn;b.viewport=new dn;const N=new Qn;N.viewport=new dn;const B=[b,N],$=new l1;let Z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=U[te];return de===void 0&&(de=new Td,U[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=U[te];return de===void 0&&(de=new Td,U[te]=de),de.getGripSpace()},this.getHand=function(te){let de=U[te];return de===void 0&&(de=new Td,U[te]=de),de.getHandSpace()};function re(te){const de=D.indexOf(te.inputSource);if(de===-1)return;const _e=U[de];_e!==void 0&&(_e.update(te.inputSource,te.frame,m||d),_e.dispatchEvent({type:te.type,data:te.inputSource}))}function ee(){o.removeEventListener("select",re),o.removeEventListener("selectstart",re),o.removeEventListener("selectend",re),o.removeEventListener("squeeze",re),o.removeEventListener("squeezestart",re),o.removeEventListener("squeezeend",re),o.removeEventListener("end",ee),o.removeEventListener("inputsourceschange",Y);for(let te=0;te<U.length;te++){const de=D[te];de!==null&&(D[te]=null,U[te].disconnect(de))}Z=null,ie=null,y.reset();for(const te in _)delete _[te];e.setRenderTarget(L),M=null,S=null,v=null,o=null,P=null,Ge.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){l=te,r.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){f=te,r.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(te){m=te},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(te){if(o=te,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",re),o.addEventListener("selectstart",re),o.addEventListener("selectend",re),o.addEventListener("squeeze",re),o.addEventListener("squeezestart",re),o.addEventListener("squeezeend",re),o.addEventListener("end",ee),o.addEventListener("inputsourceschange",Y),C.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Be=null,De=null;C.depth&&(De=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=C.stencil?Xs:Br,Be=C.stencil?Fo:ur);const yt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};v=this.getBinding(),S=v.createProjectionLayer(yt),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new lr(S.textureWidth,S.textureHeight,{format:$i,type:Si,depthTexture:new zo(S.textureWidth,S.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _e={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new lr(M.framebufferWidth,M.framebufferHeight,{format:$i,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ge.setContext(o),Ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(te){for(let de=0;de<te.removed.length;de++){const _e=te.removed[de],Be=D.indexOf(_e);Be>=0&&(D[Be]=null,U[Be].disconnect(_e))}for(let de=0;de<te.added.length;de++){const _e=te.added[de];let Be=D.indexOf(_e);if(Be===-1){for(let yt=0;yt<U.length;yt++)if(yt>=D.length){D.push(_e),Be=yt;break}else if(D[yt]===null){D[yt]=_e,Be=yt;break}if(Be===-1)break}const De=U[Be];De&&De.connect(_e)}}const X=new K,fe=new K;function oe(te,de,_e){X.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(_e.matrixWorld);const Be=X.distanceTo(fe),De=de.projectionMatrix.elements,yt=_e.projectionMatrix.elements,Zt=De[14]/(De[10]-1),St=De[14]/(De[10]+1),Pt=(De[9]+1)/De[5],Ut=(De[9]-1)/De[5],gt=(De[8]-1)/De[0],Ht=(yt[8]+1)/yt[0],j=Zt*gt,Qe=Zt*Ht,Ze=Be/(-gt+Ht),Le=Ze*-gt;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Le),te.translateZ(Ze),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),De[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ie=Zt+Ze,I=St+Ze,w=j-Le,H=Qe+(Be-Le),he=Pt*St/I*Ie,pe=Ut*St/I*Ie;te.projectionMatrix.makePerspective(w,H,he,pe,Ie,I),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function F(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(o===null)return;let de=te.near,_e=te.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),$.near=N.near=b.near=de,$.far=N.far=b.far=_e,(Z!==$.near||ie!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),Z=$.near,ie=$.far),$.layers.mask=te.layers.mask|6,b.layers.mask=$.layers.mask&3,N.layers.mask=$.layers.mask&5;const Be=te.parent,De=$.cameras;F($,Be);for(let yt=0;yt<De.length;yt++)F(De[yt],Be);De.length===2?oe($,b,N):$.projectionMatrix.copy(b.projectionMatrix),le(te,$,Be)};function le(te,de,_e){_e===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(_e.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=yc*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(te){p=te,S!==null&&(S.fixedFoveation=te),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(te){return _[te]};let Ne=null;function qe(te,de){if(x=de.getViewerPose(m||d),T=de,x!==null){const _e=x.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Be=!1;_e.length!==$.cameras.length&&($.cameras.length=0,Be=!0);for(let St=0;St<_e.length;St++){const Pt=_e[St];let Ut=null;if(M!==null)Ut=M.getViewport(Pt);else{const Ht=v.getViewSubImage(S,Pt);Ut=Ht.viewport,St===0&&(e.setRenderTargetTextures(P,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(P))}let gt=B[St];gt===void 0&&(gt=new Qn,gt.layers.enable(St),gt.viewport=new dn,B[St]=gt),gt.matrix.fromArray(Pt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(Pt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),St===0&&($.matrix.copy(gt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Be===!0&&$.cameras.push(gt)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const St=v.getDepthInformation(_e[0]);St&&St.isValid&&St.texture&&y.init(St,o.renderState)}if(De&&De.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let St=0;St<_e.length;St++){const Pt=_e[St].camera;if(Pt){let Ut=_[Pt];Ut||(Ut=new _g,_[Pt]=Ut);const gt=v.getCameraImage(Pt);Ut.sourceTexture=gt}}}}for(let _e=0;_e<U.length;_e++){const Be=D[_e],De=U[_e];Be!==null&&De!==void 0&&De.update(Be,de,m||d)}Ne&&Ne(te,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),T=null}const Ge=new wg;Ge.setAnimationLoop(qe),this.setAnimationLoop=function(te){Ne=te},this.dispose=function(){}}}const Vs=new dr,tb=new ln;function nb(s,e){function t(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,pg(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function o(y,_,C,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(y,_):_.isMeshToonMaterial?(l(y,_),v(y,_)):_.isMeshPhongMaterial?(l(y,_),x(y,_)):_.isMeshStandardMaterial?(l(y,_),S(y,_),_.isMeshPhysicalMaterial&&M(y,_,P)):_.isMeshMatcapMaterial?(l(y,_),T(y,_)):_.isMeshDepthMaterial?l(y,_):_.isMeshDistanceMaterial?(l(y,_),A(y,_)):_.isMeshNormalMaterial?l(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&f(y,_)):_.isPointsMaterial?p(y,_,C,L):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,t(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===ui&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,t(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===ui&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,t(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,t(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),L=C.envMap,P=C.envMapRotation;L&&(y.envMap.value=L,Vs.copy(P),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),y.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(Vs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform))}function f(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,C,L){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=L*.5,_.map&&(y.map.value=_.map,t(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,t(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,t(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function x(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function M(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ui&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,_){_.matcap&&(y.matcap.value=_.matcap)}function A(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ib(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,L){const P=L.program;r.uniformBlockBinding(C,P)}function m(C,L){let P=o[C.id];P===void 0&&(T(C),P=x(C),o[C.id]=P,C.addEventListener("dispose",y));const U=L.program;r.updateUBOMapping(C,U);const D=e.render.frame;l[C.id]!==D&&(S(C),l[C.id]=D)}function x(C){const L=v();C.__bindingPointIndex=L;const P=s.createBuffer(),U=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function v(){for(let C=0;C<f;C++)if(d.indexOf(C)===-1)return d.push(C),C;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(C){const L=o[C.id],P=C.uniforms,U=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,O=P.length;D<O;D++){const z=Array.isArray(P[D])?P[D]:[P[D]];for(let b=0,N=z.length;b<N;b++){const B=z[b];if(M(B,D,b,U)===!0){const $=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let ie=0;for(let re=0;re<Z.length;re++){const ee=Z[re],Y=A(ee);typeof ee=="number"||typeof ee=="boolean"?(B.__data[0]=ee,s.bufferSubData(s.UNIFORM_BUFFER,$+ie,B.__data)):ee.isMatrix3?(B.__data[0]=ee.elements[0],B.__data[1]=ee.elements[1],B.__data[2]=ee.elements[2],B.__data[3]=0,B.__data[4]=ee.elements[3],B.__data[5]=ee.elements[4],B.__data[6]=ee.elements[5],B.__data[7]=0,B.__data[8]=ee.elements[6],B.__data[9]=ee.elements[7],B.__data[10]=ee.elements[8],B.__data[11]=0):(ee.toArray(B.__data,ie),ie+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(C,L,P,U){const D=C.value,O=L+"_"+P;if(U[O]===void 0)return typeof D=="number"||typeof D=="boolean"?U[O]=D:U[O]=D.clone(),!0;{const z=U[O];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return U[O]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function T(C){const L=C.uniforms;let P=0;const U=16;for(let O=0,z=L.length;O<z;O++){const b=Array.isArray(L[O])?L[O]:[L[O]];for(let N=0,B=b.length;N<B;N++){const $=b[N],Z=Array.isArray($.value)?$.value:[$.value];for(let ie=0,re=Z.length;ie<re;ie++){const ee=Z[ie],Y=A(ee),X=P%U,fe=X%Y.boundary,oe=X+fe;P+=fe,oe!==0&&U-oe<Y.storage&&(P+=U-oe),$.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=P,P+=Y.storage}}}const D=P%U;return D>0&&(P+=U-D),C.__size=P,C.__cache={},this}function A(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_t("WebGLRenderer: Unsupported uniform value type.",C),L}function y(C){const L=C.target;L.removeEventListener("dispose",y);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);d=[],o={},l={}}return{bind:p,update:m,dispose:_}}const rb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function sb(){return ir===null&&(ir=new Y_(rb,16,16,ja,kr),ir.name="DFG_LUT",ir.minFilter=Pn,ir.magFilter=Pn,ir.wrapS=Ir,ir.wrapT=Ir,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class Ag{constructor(e={}){const{canvas:t=S_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:M=Si}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const A=M,y=new Set([Wf,Hf,Gf]),_=new Set([Si,ur,Oo,Fo,jf,Vf]),C=new Uint32Array(4),L=new Int32Array(4);let P=null,U=null;const D=[],O=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let N=!1;this._outputColorSpace=On;let B=0,$=0,Z=null,ie=-1,re=null;const ee=new dn,Y=new dn;let X=null;const fe=new At(0);let oe=0,F=t.width,le=t.height,Ne=1,qe=null,Ge=null;const te=new dn(0,0,F,le),de=new dn(0,0,F,le);let _e=!1;const Be=new Jf;let De=!1,yt=!1;const Zt=new ln,St=new K,Pt=new dn,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gt=!1;function Ht(){return Z===null?Ne:1}let j=r;function Qe(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kf}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",it,!1),j===null){const q="webgl2";if(j=Qe(q,R),j===null)throw Qe(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw zt("WebGLRenderer: "+R.message),R}let Ze,Le,Ie,I,w,H,he,pe,ae,Ye,we,ke,at,ye,Ce,He,We,be,ft,G,Pe,ge,Fe,xe;function me(){Ze=new sM(j),Ze.init(),ge=new Kw(j,Ze),Le=new KS(j,Ze,e,ge),Ie=new Yw(j,Ze),Le.reversedDepthBuffer&&S&&Ie.buffers.depth.setReversed(!0),I=new lM(j),w=new Lw,H=new $w(j,Ze,Ie,w,Le,ge,I),he=new QS(b),pe=new rM(b),ae=new f1(j),Fe=new YS(j,ae),Ye=new aM(j,ae,I,Fe),we=new uM(j,Ye,ae,I),ft=new cM(j,Le,H),He=new ZS(w),ke=new Dw(b,he,pe,Ze,Le,Fe,He),at=new nb(b,w),ye=new Uw,Ce=new jw(Ze),be=new qS(b,he,pe,Ie,we,T,p),We=new Xw(b,we,Le),xe=new ib(j,I,Le,Ie),G=new $S(j,Ze,I),Pe=new oM(j,Ze,I),I.programs=ke.programs,b.capabilities=Le,b.extensions=Ze,b.properties=w,b.renderLists=ye,b.shadowMap=We,b.state=Ie,b.info=I}me(),A!==Si&&(z=new fM(A,t.width,t.height,o,l));const Ee=new eb(b,j);this.xr=Ee,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=Ze.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ze.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(R){R!==void 0&&(Ne=R,this.setSize(F,le,!1))},this.getSize=function(R){return R.set(F,le)},this.setSize=function(R,q,ce=!0){if(Ee.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,le=q,t.width=Math.floor(R*Ne),t.height=Math.floor(q*Ne),ce===!0&&(t.style.width=R+"px",t.style.height=q+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(F*Ne,le*Ne).floor()},this.setDrawingBufferSize=function(R,q,ce){F=R,le=q,Ne=ce,t.width=Math.floor(R*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(A===Si){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ee)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,q,ce,se){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,q,ce,se),Ie.viewport(ee.copy(te).multiplyScalar(Ne).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,q,ce,se){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,q,ce,se),Ie.scissor(Y.copy(de).multiplyScalar(Ne).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Ie.setScissorTest(_e=R)},this.setOpaqueSort=function(R){qe=R},this.setTransparentSort=function(R){Ge=R},this.getClearColor=function(R){return R.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,ce=!0){let se=0;if(R){let Q=!1;if(Z!==null){const Ue=Z.texture.format;Q=y.has(Ue)}if(Q){const Ue=Z.texture.type,je=_.has(Ue),Ae=be.getClearColor(),$e=be.getClearAlpha(),Ve=Ae.r,ct=Ae.g,rt=Ae.b;je?(C[0]=Ve,C[1]=ct,C[2]=rt,C[3]=$e,j.clearBufferuiv(j.COLOR,0,C)):(L[0]=Ve,L[1]=ct,L[2]=rt,L[3]=$e,j.clearBufferiv(j.COLOR,0,L))}else se|=j.COLOR_BUFFER_BIT}q&&(se|=j.DEPTH_BUFFER_BIT),ce&&(se|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",it,!1),be.dispose(),ye.dispose(),Ce.dispose(),w.dispose(),he.dispose(),pe.dispose(),we.dispose(),Fe.dispose(),xe.dispose(),ke.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Di),Ee.removeEventListener("sessionend",hr),di.stop()};function lt(R){R.preventDefault(),jm("WebGLRenderer: Context Lost."),N=!0}function ot(){jm("WebGLRenderer: Context Restored."),N=!1;const R=I.autoReset,q=We.enabled,ce=We.autoUpdate,se=We.needsUpdate,Q=We.type;me(),I.autoReset=R,We.enabled=q,We.autoUpdate=ce,We.needsUpdate=se,We.type=Q}function it(R){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function qt(R){const q=R.target;q.removeEventListener("dispose",qt),Wt(q)}function Wt(R){Jn(R),w.remove(R)}function Jn(R){const q=w.get(R).programs;q!==void 0&&(q.forEach(function(ce){ke.releaseProgram(ce)}),R.isShaderMaterial&&ke.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,ce,se,Q,Ue){q===null&&(q=Ut);const je=Q.isMesh&&Q.matrixWorld.determinant()<0,Ae=jr(R,q,ce,se,Q);Ie.setMaterial(se,je);let $e=ce.index,Ve=1;if(se.wireframe===!0){if($e=Ye.getWireframeAttribute(ce),$e===void 0)return;Ve=2}const ct=ce.drawRange,rt=ce.attributes.position;let wt=ct.start*Ve,Dt=(ct.start+ct.count)*Ve;Ue!==null&&(wt=Math.max(wt,Ue.start*Ve),Dt=Math.min(Dt,(Ue.start+Ue.count)*Ve)),$e!==null?(wt=Math.max(wt,0),Dt=Math.min(Dt,$e.count)):rt!=null&&(wt=Math.max(wt,0),Dt=Math.min(Dt,rt.count));const Xt=Dt-wt;if(Xt<0||Xt===1/0)return;Fe.setup(Q,se,Ae,ce,$e);let Gt,Ot=G;if($e!==null&&(Gt=ae.get($e),Ot=Pe,Ot.setIndex(Gt)),Q.isMesh)se.wireframe===!0?(Ie.setLineWidth(se.wireframeLinewidth*Ht()),Ot.setMode(j.LINES)):Ot.setMode(j.TRIANGLES);else if(Q.isLine){let st=se.linewidth;st===void 0&&(st=1),Ie.setLineWidth(st*Ht()),Q.isLineSegments?Ot.setMode(j.LINES):Q.isLineLoop?Ot.setMode(j.LINE_LOOP):Ot.setMode(j.LINE_STRIP)}else Q.isPoints?Ot.setMode(j.POINTS):Q.isSprite&&Ot.setMode(j.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const st=Q._multiDrawStarts,bt=Q._multiDrawCounts,Rt=Q._multiDrawCount,_n=$e?ae.get($e).bytesPerElement:1,ei=w.get(se).currentProgram.getUniforms();for(let Ft=0;Ft<Rt;Ft++)ei.setValue(j,"_gl_DrawID",Ft),Ot.render(st[Ft]/_n,bt[Ft])}else if(Q.isInstancedMesh)Ot.renderInstances(wt,Xt,Q.count);else if(ce.isInstancedBufferGeometry){const st=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,bt=Math.min(ce.instanceCount,st);Ot.renderInstances(wt,Xt,bt)}else Ot.render(wt,Xt)};function Ln(R,q,ce){R.transparent===!0&&R.side===Lr&&R.forceSinglePass===!1?(R.side=ui,R.needsUpdate=!0,mr(R,q,ce),R.side=vs,R.needsUpdate=!0,mr(R,q,ce),R.side=Lr):mr(R,q,ce)}this.compile=function(R,q,ce=null){ce===null&&(ce=R),U=Ce.get(ce),U.init(q),O.push(U),ce.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),R!==ce&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(q.layers)&&(U.pushLight(Q),Q.castShadow&&U.pushShadow(Q))}),U.setupLights();const se=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ue=Q.material;if(Ue)if(Array.isArray(Ue))for(let je=0;je<Ue.length;je++){const Ae=Ue[je];Ln(Ae,ce,Q),se.add(Ae)}else Ln(Ue,ce,Q),se.add(Ue)}),U=O.pop(),se},this.compileAsync=function(R,q,ce=null){const se=this.compile(R,q,ce);return new Promise(Q=>{function Ue(){if(se.forEach(function(je){w.get(je).currentProgram.isReady()&&se.delete(je)}),se.size===0){Q(R);return}setTimeout(Ue,10)}Ze.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Pi=null;function Ki(R){Pi&&Pi(R)}function Di(){di.stop()}function hr(){di.start()}const di=new wg;di.setAnimationLoop(Ki),typeof self<"u"&&di.setContext(self),this.setAnimationLoop=function(R){Pi=R,Ee.setAnimationLoop(R),R===null?di.stop():di.start()},Ee.addEventListener("sessionstart",Di),Ee.addEventListener("sessionend",hr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const ce=Ee.enabled===!0&&Ee.isPresenting===!0,se=z!==null&&(Z===null||ce)&&z.begin(b,Z);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(q),q=Ee.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,q,Z),U=Ce.get(R,O.length),U.init(q),O.push(U),Zt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Be.setFromProjectionMatrix(Zt,ar,q.reversedDepth),yt=this.localClippingEnabled,De=He.init(this.clippingPlanes,yt),P=ye.get(R,D.length),P.init(),D.push(P),Ee.enabled===!0&&Ee.isPresenting===!0){const je=b.xr.getDepthSensingMesh();je!==null&&pr(je,q,-1/0,b.sortObjects)}pr(R,q,0,b.sortObjects),P.finish(),b.sortObjects===!0&&P.sort(qe,Ge),gt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,gt&&be.addToRenderList(P,R),this.info.render.frame++,De===!0&&He.beginShadows();const Q=U.state.shadowsArray;if(We.render(Q,R,q),De===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&z.hasRenderPass())===!1){const je=P.opaque,Ae=P.transmissive;if(U.setupLights(),q.isArrayCamera){const $e=q.cameras;if(Ae.length>0)for(let Ve=0,ct=$e.length;Ve<ct;Ve++){const rt=$e[Ve];sn(je,Ae,R,rt)}gt&&be.render(R);for(let Ve=0,ct=$e.length;Ve<ct;Ve++){const rt=$e[Ve];Wa(P,R,rt,rt.viewport)}}else Ae.length>0&&sn(je,Ae,R,q),gt&&be.render(R),Wa(P,R,q)}Z!==null&&$===0&&(H.updateMultisampleRenderTarget(Z),H.updateRenderTargetMipmap(Z)),se&&z.end(b),R.isScene===!0&&R.onAfterRender(b,R,q),Fe.resetDefaultState(),ie=-1,re=null,O.pop(),O.length>0?(U=O[O.length-1],De===!0&&He.setGlobalState(b.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?P=D[D.length-1]:P=null};function pr(R,q,ce,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Be.intersectsSprite(R)){se&&Pt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Zt);const je=we.update(R),Ae=R.material;Ae.visible&&P.push(R,je,Ae,ce,Pt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Be.intersectsObject(R))){const je=we.update(R),Ae=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Pt.copy(R.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Pt.copy(je.boundingSphere.center)),Pt.applyMatrix4(R.matrixWorld).applyMatrix4(Zt)),Array.isArray(Ae)){const $e=je.groups;for(let Ve=0,ct=$e.length;Ve<ct;Ve++){const rt=$e[Ve],wt=Ae[rt.materialIndex];wt&&wt.visible&&P.push(R,je,wt,ce,Pt.z,rt)}}else Ae.visible&&P.push(R,je,Ae,ce,Pt.z,null)}}const Ue=R.children;for(let je=0,Ae=Ue.length;je<Ae;je++)pr(Ue[je],q,ce,se)}function Wa(R,q,ce,se){const{opaque:Q,transmissive:Ue,transparent:je}=R;U.setupLightsView(ce),De===!0&&He.setGlobalState(b.clippingPlanes,ce),se&&Ie.viewport(ee.copy(se)),Q.length>0&&fi(Q,q,ce),Ue.length>0&&fi(Ue,q,ce),je.length>0&&fi(je,q,ce),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function sn(R,q,ce,se){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[se.id]===void 0){const wt=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[se.id]=new lr(1,1,{generateMipmaps:!0,type:wt?kr:Si,minFilter:Ws,samples:Le.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace})}const Ue=U.state.transmissionRenderTarget[se.id],je=se.viewport||ee;Ue.setSize(je.z*b.transmissionResolutionScale,je.w*b.transmissionResolutionScale);const Ae=b.getRenderTarget(),$e=b.getActiveCubeFace(),Ve=b.getActiveMipmapLevel();b.setRenderTarget(Ue),b.getClearColor(fe),oe=b.getClearAlpha(),oe<1&&b.setClearColor(16777215,.5),b.clear(),gt&&be.render(ce);const ct=b.toneMapping;b.toneMapping=or;const rt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),U.setupLightsView(se),De===!0&&He.setGlobalState(b.clippingPlanes,se),fi(R,ce,se),H.updateMultisampleRenderTarget(Ue),H.updateRenderTargetMipmap(Ue),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let Dt=0,Xt=q.length;Dt<Xt;Dt++){const Gt=q[Dt],{object:Ot,geometry:st,material:bt,group:Rt}=Gt;if(bt.side===Lr&&Ot.layers.test(se.layers)){const _n=bt.side;bt.side=ui,bt.needsUpdate=!0,zr(Ot,ce,se,st,bt,Rt),bt.side=_n,bt.needsUpdate=!0,wt=!0}}wt===!0&&(H.updateMultisampleRenderTarget(Ue),H.updateRenderTargetMipmap(Ue))}b.setRenderTarget(Ae,$e,Ve),b.setClearColor(fe,oe),rt!==void 0&&(se.viewport=rt),b.toneMapping=ct}function fi(R,q,ce){const se=q.isScene===!0?q.overrideMaterial:null;for(let Q=0,Ue=R.length;Q<Ue;Q++){const je=R[Q],{object:Ae,geometry:$e,group:Ve}=je;let ct=je.material;ct.allowOverride===!0&&se!==null&&(ct=se),Ae.layers.test(ce.layers)&&zr(Ae,q,ce,$e,ct,Ve)}}function zr(R,q,ce,se,Q,Ue){R.onBeforeRender(b,q,ce,se,Q,Ue),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,q,ce,se,R,Ue),Q.transparent===!0&&Q.side===Lr&&Q.forceSinglePass===!1?(Q.side=ui,Q.needsUpdate=!0,b.renderBufferDirect(ce,q,se,Q,R,Ue),Q.side=vs,Q.needsUpdate=!0,b.renderBufferDirect(ce,q,se,Q,R,Ue),Q.side=Lr):b.renderBufferDirect(ce,q,se,Q,R,Ue),R.onAfterRender(b,q,ce,se,Q,Ue)}function mr(R,q,ce){q.isScene!==!0&&(q=Ut);const se=w.get(R),Q=U.state.lights,Ue=U.state.shadowsArray,je=Q.state.version,Ae=ke.getParameters(R,Q.state,Ue,q,ce),$e=ke.getProgramCacheKey(Ae);let Ve=se.programs;se.environment=R.isMeshStandardMaterial?q.environment:null,se.fog=q.fog,se.envMap=(R.isMeshStandardMaterial?pe:he).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Ve===void 0&&(R.addEventListener("dispose",qt),Ve=new Map,se.programs=Ve);let ct=Ve.get($e);if(ct!==void 0){if(se.currentProgram===ct&&se.lightsStateVersion===je)return Li(R,Ae),ct}else Ae.uniforms=ke.getUniforms(R),R.onBeforeCompile(Ae,b),ct=ke.acquireProgram(Ae,$e),Ve.set($e,ct),se.uniforms=Ae.uniforms;const rt=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=He.uniform),Li(R,Ae),se.needsLights=Ks(R),se.lightsStateVersion=je,se.needsLights&&(rt.ambientLightColor.value=Q.state.ambient,rt.lightProbe.value=Q.state.probe,rt.directionalLights.value=Q.state.directional,rt.directionalLightShadows.value=Q.state.directionalShadow,rt.spotLights.value=Q.state.spot,rt.spotLightShadows.value=Q.state.spotShadow,rt.rectAreaLights.value=Q.state.rectArea,rt.ltc_1.value=Q.state.rectAreaLTC1,rt.ltc_2.value=Q.state.rectAreaLTC2,rt.pointLights.value=Q.state.point,rt.pointLightShadows.value=Q.state.pointShadow,rt.hemisphereLights.value=Q.state.hemi,rt.directionalShadowMap.value=Q.state.directionalShadowMap,rt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,rt.spotShadowMap.value=Q.state.spotShadowMap,rt.spotLightMatrix.value=Q.state.spotLightMatrix,rt.spotLightMap.value=Q.state.spotLightMap,rt.pointShadowMap.value=Q.state.pointShadowMap,rt.pointShadowMatrix.value=Q.state.pointShadowMatrix),se.currentProgram=ct,se.uniformsList=null,ct}function gr(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=pc.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function Li(R,q){const ce=w.get(R);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function jr(R,q,ce,se,Q){q.isScene!==!0&&(q=Ut),H.resetTextureUnits();const Ue=q.fog,je=se.isMeshStandardMaterial?q.environment:null,Ae=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Va,$e=(se.isMeshStandardMaterial?pe:he).get(se.envMap||je),Ve=se.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,ct=!!ce.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),rt=!!ce.morphAttributes.position,wt=!!ce.morphAttributes.normal,Dt=!!ce.morphAttributes.color;let Xt=or;se.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Xt=b.toneMapping);const Gt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Ot=Gt!==void 0?Gt.length:0,st=w.get(se),bt=U.state.lights;if(De===!0&&(yt===!0||R!==re)){const fn=R===re&&se.id===ie;He.setState(se,R,fn)}let Rt=!1;se.version===st.__version?(st.needsLights&&st.lightsStateVersion!==bt.state.version||st.outputColorSpace!==Ae||Q.isBatchedMesh&&st.batching===!1||!Q.isBatchedMesh&&st.batching===!0||Q.isBatchedMesh&&st.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&st.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&st.instancing===!1||!Q.isInstancedMesh&&st.instancing===!0||Q.isSkinnedMesh&&st.skinning===!1||!Q.isSkinnedMesh&&st.skinning===!0||Q.isInstancedMesh&&st.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&st.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&st.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&st.instancingMorph===!1&&Q.morphTexture!==null||st.envMap!==$e||se.fog===!0&&st.fog!==Ue||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==He.numPlanes||st.numIntersection!==He.numIntersection)||st.vertexAlphas!==Ve||st.vertexTangents!==ct||st.morphTargets!==rt||st.morphNormals!==wt||st.morphColors!==Dt||st.toneMapping!==Xt||st.morphTargetsCount!==Ot)&&(Rt=!0):(Rt=!0,st.__version=se.version);let _n=st.currentProgram;Rt===!0&&(_n=mr(se,q,Q));let ei=!1,Ft=!1,Ui=!1;const kt=_n.getUniforms(),xt=st.uniforms;if(Ie.useProgram(_n.program)&&(ei=!0,Ft=!0,Ui=!0),se.id!==ie&&(ie=se.id,Ft=!0),ei||re!==R){Ie.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),kt.setValue(j,"projectionMatrix",R.projectionMatrix),kt.setValue(j,"viewMatrix",R.matrixWorldInverse);const hn=kt.map.cameraPosition;hn!==void 0&&hn.setValue(j,St.setFromMatrixPosition(R.matrixWorld)),Le.logarithmicDepthBuffer&&kt.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&kt.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),re!==R&&(re=R,Ft=!0,Ui=!0)}if(st.needsLights&&(bt.state.directionalShadowMap.length>0&&kt.setValue(j,"directionalShadowMap",bt.state.directionalShadowMap,H),bt.state.spotShadowMap.length>0&&kt.setValue(j,"spotShadowMap",bt.state.spotShadowMap,H),bt.state.pointShadowMap.length>0&&kt.setValue(j,"pointShadowMap",bt.state.pointShadowMap,H)),Q.isSkinnedMesh){kt.setOptional(j,Q,"bindMatrix"),kt.setOptional(j,Q,"bindMatrixInverse");const fn=Q.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),kt.setValue(j,"boneTexture",fn.boneTexture,H))}Q.isBatchedMesh&&(kt.setOptional(j,Q,"batchingTexture"),kt.setValue(j,"batchingTexture",Q._matricesTexture,H),kt.setOptional(j,Q,"batchingIdTexture"),kt.setValue(j,"batchingIdTexture",Q._indirectTexture,H),kt.setOptional(j,Q,"batchingColorTexture"),Q._colorsTexture!==null&&kt.setValue(j,"batchingColorTexture",Q._colorsTexture,H));const Tn=ce.morphAttributes;if((Tn.position!==void 0||Tn.normal!==void 0||Tn.color!==void 0)&&ft.update(Q,ce,_n),(Ft||st.receiveShadow!==Q.receiveShadow)&&(st.receiveShadow=Q.receiveShadow,kt.setValue(j,"receiveShadow",Q.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(xt.envMap.value=$e,xt.flipEnvMap.value=$e.isCubeTexture&&$e.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&q.environment!==null&&(xt.envMapIntensity.value=q.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=sb()),Ft&&(kt.setValue(j,"toneMappingExposure",b.toneMappingExposure),st.needsLights&&Ii(xt,Ui),Ue&&se.fog===!0&&at.refreshFogUniforms(xt,Ue),at.refreshMaterialUniforms(xt,se,Ne,le,U.state.transmissionRenderTarget[R.id]),pc.upload(j,gr(st),xt,H)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(pc.upload(j,gr(st),xt,H),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&kt.setValue(j,"center",Q.center),kt.setValue(j,"modelViewMatrix",Q.modelViewMatrix),kt.setValue(j,"normalMatrix",Q.normalMatrix),kt.setValue(j,"modelMatrix",Q.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const fn=se.uniformsGroups;for(let hn=0,xr=fn.length;hn<xr;hn++){const ti=fn[hn];xe.update(ti,_n),xe.bind(ti,_n)}}return _n}function Ii(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Ks(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(R,q,ce){const se=w.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),w.get(R.texture).__webglTexture=q,w.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ce,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const ce=w.get(R);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0};const Xa=j.createFramebuffer();this.setRenderTarget=function(R,q=0,ce=0){Z=R,B=q,$=ce;let se=null,Q=!1,Ue=!1;if(R){const Ae=w.get(R);if(Ae.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(j.FRAMEBUFFER,Ae.__webglFramebuffer),ee.copy(R.viewport),Y.copy(R.scissor),X=R.scissorTest,Ie.viewport(ee),Ie.scissor(Y),Ie.setScissorTest(X),ie=-1;return}else if(Ae.__webglFramebuffer===void 0)H.setupRenderTarget(R);else if(Ae.__hasExternalTextures)H.rebindTextures(R,w.get(R.texture).__webglTexture,w.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ct=R.depthTexture;if(Ae.__boundDepthTexture!==ct){if(ct!==null&&w.has(ct)&&(R.width!==ct.image.width||R.height!==ct.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(R)}}const $e=R.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const Ve=w.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ve[q])?se=Ve[q][ce]:se=Ve[q],Q=!0):R.samples>0&&H.useMultisampledRTT(R)===!1?se=w.get(R).__webglMultisampledFramebuffer:Array.isArray(Ve)?se=Ve[ce]:se=Ve,ee.copy(R.viewport),Y.copy(R.scissor),X=R.scissorTest}else ee.copy(te).multiplyScalar(Ne).floor(),Y.copy(de).multiplyScalar(Ne).floor(),X=_e;if(ce!==0&&(se=Xa),Ie.bindFramebuffer(j.FRAMEBUFFER,se)&&Ie.drawBuffers(R,se),Ie.viewport(ee),Ie.scissor(Y),Ie.setScissorTest(X),Q){const Ae=w.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ae.__webglTexture,ce)}else if(Ue){const Ae=q;for(let $e=0;$e<R.textures.length;$e++){const Ve=w.get(R.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,Ve.__webglTexture,ce,Ae)}}else if(R!==null&&ce!==0){const Ae=w.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ae.__webglTexture,ce)}ie=-1},this.readRenderTargetPixels=function(R,q,ce,se,Q,Ue,je,Ae=0){if(!(R&&R.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e){Ie.bindFramebuffer(j.FRAMEBUFFER,$e);try{const Ve=R.textures[Ae],ct=Ve.format,rt=Ve.type;if(!Le.textureFormatReadable(ct)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(rt)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&ce>=0&&ce<=R.height-Q&&(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ae),j.readPixels(q,ce,se,Q,ge.convert(ct),ge.convert(rt),Ue))}finally{const Ve=Z!==null?w.get(Z).__webglFramebuffer:null;Ie.bindFramebuffer(j.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(R,q,ce,se,Q,Ue,je,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=w.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&($e=$e[je]),$e)if(q>=0&&q<=R.width-se&&ce>=0&&ce<=R.height-Q){Ie.bindFramebuffer(j.FRAMEBUFFER,$e);const Ve=R.textures[Ae],ct=Ve.format,rt=Ve.type;if(!Le.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,wt),j.bufferData(j.PIXEL_PACK_BUFFER,Ue.byteLength,j.STREAM_READ),R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Ae),j.readPixels(q,ce,se,Q,ge.convert(ct),ge.convert(rt),0);const Dt=Z!==null?w.get(Z).__webglFramebuffer:null;Ie.bindFramebuffer(j.FRAMEBUFFER,Dt);const Xt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await M_(j,Xt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,wt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ue),j.deleteBuffer(wt),j.deleteSync(Xt),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,ce=0){const se=Math.pow(2,-ce),Q=Math.floor(R.image.width*se),Ue=Math.floor(R.image.height*se),je=q!==null?q.x:0,Ae=q!==null?q.y:0;H.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,ce,0,0,je,Ae,Q,Ue),Ie.unbindTexture()};const Zs=j.createFramebuffer(),Qt=j.createFramebuffer();this.copyTextureToTexture=function(R,q,ce=null,se=null,Q=0,Ue=null){Ue===null&&(Q!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=Q,Q=0):Ue=0);let je,Ae,$e,Ve,ct,rt,wt,Dt,Xt;const Gt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(ce!==null)je=ce.max.x-ce.min.x,Ae=ce.max.y-ce.min.y,$e=ce.isBox3?ce.max.z-ce.min.z:1,Ve=ce.min.x,ct=ce.min.y,rt=ce.isBox3?ce.min.z:0;else{const Tn=Math.pow(2,-Q);je=Math.floor(Gt.width*Tn),Ae=Math.floor(Gt.height*Tn),R.isDataArrayTexture?$e=Gt.depth:R.isData3DTexture?$e=Math.floor(Gt.depth*Tn):$e=1,Ve=0,ct=0,rt=0}se!==null?(wt=se.x,Dt=se.y,Xt=se.z):(wt=0,Dt=0,Xt=0);const Ot=ge.convert(q.format),st=ge.convert(q.type);let bt;q.isData3DTexture?(H.setTexture3D(q,0),bt=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(H.setTexture2DArray(q,0),bt=j.TEXTURE_2D_ARRAY):(H.setTexture2D(q,0),bt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const Rt=j.getParameter(j.UNPACK_ROW_LENGTH),_n=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ei=j.getParameter(j.UNPACK_SKIP_PIXELS),Ft=j.getParameter(j.UNPACK_SKIP_ROWS),Ui=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Gt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Gt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Ve),j.pixelStorei(j.UNPACK_SKIP_ROWS,ct),j.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const kt=R.isDataArrayTexture||R.isData3DTexture,xt=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const Tn=w.get(R),fn=w.get(q),hn=w.get(Tn.__renderTarget),xr=w.get(fn.__renderTarget);Ie.bindFramebuffer(j.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,xr.__webglFramebuffer);for(let ti=0;ti<$e;ti++)kt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(R).__webglTexture,Q,rt+ti),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,w.get(q).__webglTexture,Ue,Xt+ti)),j.blitFramebuffer(Ve,ct,je,Ae,wt,Dt,je,Ae,j.DEPTH_BUFFER_BIT,j.NEAREST);Ie.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||w.has(R)){const Tn=w.get(R),fn=w.get(q);Ie.bindFramebuffer(j.READ_FRAMEBUFFER,Zs),Ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,Qt);for(let hn=0;hn<$e;hn++)kt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Tn.__webglTexture,Q,rt+hn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Tn.__webglTexture,Q),xt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,fn.__webglTexture,Ue,Xt+hn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,fn.__webglTexture,Ue),Q!==0?j.blitFramebuffer(Ve,ct,je,Ae,wt,Dt,je,Ae,j.COLOR_BUFFER_BIT,j.NEAREST):xt?j.copyTexSubImage3D(bt,Ue,wt,Dt,Xt+hn,Ve,ct,je,Ae):j.copyTexSubImage2D(bt,Ue,wt,Dt,Ve,ct,je,Ae);Ie.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else xt?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(bt,Ue,wt,Dt,Xt,je,Ae,$e,Ot,st,Gt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(bt,Ue,wt,Dt,Xt,je,Ae,$e,Ot,Gt.data):j.texSubImage3D(bt,Ue,wt,Dt,Xt,je,Ae,$e,Ot,st,Gt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ue,wt,Dt,je,Ae,Ot,st,Gt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ue,wt,Dt,Gt.width,Gt.height,Ot,Gt.data):j.texSubImage2D(j.TEXTURE_2D,Ue,wt,Dt,je,Ae,Ot,st,Gt);j.pixelStorei(j.UNPACK_ROW_LENGTH,Rt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,_n),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ei),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ft),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ui),Ue===0&&q.generateMipmaps&&j.generateMipmap(bt),Ie.unbindTexture()},this.initRenderTarget=function(R){w.get(R).__webglFramebuffer===void 0&&H.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?H.setTextureCube(R,0):R.isData3DTexture?H.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?H.setTexture2DArray(R,0):H.setTexture2D(R,0),Ie.unbindTexture()},this.resetState=function(){B=0,$=0,Z=null,Ie.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=jt._getDrawingBufferColorSpace(e),t.unpackColorSpace=jt._getUnpackColorSpace()}}const U0={type:"change"},oh={type:"start"},Rg={type:"end"},ac=new Kf,O0=new ps,ab=Math.cos(70*b_.DEG2RAD),wn=new K,ci=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Od=1e-6;class Ng extends u1{constructor(e,t=null){super(e,t),this.state=Kt.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Oa.ROTATE,MIDDLE:Oa.DOLLY,RIGHT:Oa.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new Ys,this._lastTargetPosition=new K,this._quat=new Ys().setFromUnitVectors(e.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new u0,this._sphericalDelta=new u0,this._scale=1,this._panOffset=new K,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new K,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lb.bind(this),this._onPointerDown=ob.bind(this),this._onPointerUp=cb.bind(this),this._onContextMenu=gb.bind(this),this._onMouseWheel=fb.bind(this),this._onKeyDown=hb.bind(this),this._onTouchStart=pb.bind(this),this._onTouchMove=mb.bind(this),this._onMouseDown=ub.bind(this),this._onMouseMove=db.bind(this),this._interceptControlDown=xb.bind(this),this._interceptControlUp=vb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(U0),this.update(),this.state=Kt.NONE}update(e=null){const t=this.object.position;wn.copy(t).sub(this.target),wn.applyQuaternion(this._quat),this._spherical.setFromVector3(wn),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ci:r>Math.PI&&(r-=ci),o<-Math.PI?o+=ci:o>Math.PI&&(o-=ci),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(wn.setFromSpherical(this._spherical),wn.applyQuaternion(this._quatInverse),t.copy(this.target).add(wn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=wn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new K(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new K(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=wn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(ac.origin.copy(this.object.position),ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ac.direction))<ab?this.object.lookAt(this.target):(O0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ac.intersectPlane(O0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Od||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Od||this._lastTargetPosition.distanceToSquared(this.target)>Od?(this.dispatchEvent(U0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ci/60*this.autoRotateSpeed*e:ci/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){wn.setFromMatrixColumn(t,0),wn.multiplyScalar(-e),this._panOffset.add(wn)}_panUp(e,t){this.screenSpacePanning===!0?wn.setFromMatrixColumn(t,1):(wn.setFromMatrixColumn(t,0),wn.crossVectors(this.object.up,wn)),wn.multiplyScalar(e),this._panOffset.add(wn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;wn.copy(o).sub(this.target);let l=wn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ci*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ci*this._rotateDelta.x/t.clientHeight),this._rotateUp(ci*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new mt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function ob(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cb(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rg),this.state=Kt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ub(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Oa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Kt.DOLLY;break;case Oa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}break;case Oa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(oh)}function db(s){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fb(s){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(s.preventDefault(),this.dispatchEvent(oh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Rg))}function hb(s){this.enabled!==!1&&this._handleKeyDown(s)}function pb(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Kt.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Kt.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(oh)}function mb(s){switch(this._trackPointer(s),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Kt.NONE}}function gb(s){this.enabled!==!1&&s.preventDefault()}function xb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Pg(){const s=document.createElement("canvas");s.width=1024,s.height=768;const e=s.getContext("2d");if(!e)return s;e.fillStyle="#08101a",e.fillRect(0,0,1024,768);const t=(f,p,m,x,v)=>{e.beginPath(),e.moveTo(f+v,p),e.lineTo(f+m-v,p),e.quadraticCurveTo(f+m,p,f+m,p+v),e.lineTo(f+m,p+x-v),e.quadraticCurveTo(f+m,p+x,f+m-v,p+x),e.lineTo(f+v,p+x),e.quadraticCurveTo(f,p+x,f,p+x-v),e.lineTo(f,p+v),e.quadraticCurveTo(f,p,f+v,p),e.closePath()},r=e.createLinearGradient(0,0,0,90);r.addColorStop(0,"#0284c7"),r.addColorStop(1,"#0369a1"),e.fillStyle=r,e.fillRect(0,0,1024,90),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,90),e.lineTo(1024,90),e.stroke(),e.fillStyle="#ffffff",e.font='bold 38px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("10/05  15:42",490,48),e.beginPath(),e.arc(950,45,14,0,Math.PI*2),e.fillStyle="#22c55e",e.fill(),e.lineWidth=3,e.strokeStyle="#ffffff",e.stroke(),[{title:"EXAUSTOR",val:"OK",x:42},{title:"ENERGIA",val:"OK",x:367},{title:"GÁS",val:"ABERTO",x:692}].forEach(f=>{const p=e.createLinearGradient(0,120,0,245);p.addColorStop(0,"#22c55e"),p.addColorStop(1,"#15803d"),e.fillStyle=p,t(f.x,120,290,125,18),e.fill(),e.strokeStyle="#4ade80",e.lineWidth=3.5,e.stroke(),e.fillStyle="#ffffff",e.font='bold 24px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="alphabetic",e.fillText(f.title,f.x+145,160),e.font='900 38px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText(f.val,f.x+145,212)}),[{title:"SETORES",x:42,y:280},{title:"CONTROLE GÁS",x:532,y:280},{title:"REARMAR",x:42,y:470},{title:"CONFIG",x:532,y:470}].forEach(f=>{const p=e.createLinearGradient(0,f.y,0,f.y+160);p.addColorStop(0,"#2563eb"),p.addColorStop(.5,"#1d4ed8"),p.addColorStop(1,"#1e40af"),e.fillStyle=p,t(f.x,f.y,450,160,22),e.fill(),e.strokeStyle="#60a5fa",e.lineWidth=4,e.stroke(),e.fillStyle="rgba(255, 255, 255, 0.12)",t(f.x+4,f.y+4,442,75,18),e.fill(),e.fillStyle="#ffffff",e.font='900 36px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(f.title,f.x+225,f.y+80)});const d=e.createLinearGradient(0,683,0,768);return d.addColorStop(0,"#0369a1"),d.addColorStop(1,"#0284c7"),e.fillStyle=d,e.fillRect(0,683,1024,85),e.strokeStyle="#38bdf8",e.lineWidth=3,e.beginPath(),e.moveTo(0,683),e.lineTo(1024,683),e.stroke(),e.fillStyle="#ffffff",e.font='900 34px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA OPERANTE",512,725),s}function F0(s,e){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const t=s.getContext("2d");if(!t)return;t.fillStyle="#ba1016",t.fillRect(0,0,1024,768),t.fillStyle="#ffffff",t.font='bold 54px "Courier New", Courier, monospace',t.textAlign="center",t.textBaseline="middle",t.fillText("FOGO DETECTADO",490,75),t.beginPath(),t.arc(950,75,18,0,Math.PI*2),t.fillStyle="#22c55e",t.fill(),t.lineWidth=4,t.strokeStyle="#ffffff",t.stroke(),t.fillStyle="#ffffff",t.font='bold 42px "Courier New", Courier, monospace',t.fillText("FOGO DETECTADO: SUB-1",512,175),t.fillText("EM DISPARO",512,240);const o=`${Math.max(0,Math.round(e))}s`;t.save(),t.shadowColor="rgba(103, 232, 249, 0.75)",t.shadowBlur=24,t.fillStyle="#67e8f9",t.font='900 185px "Courier New", Courier, monospace',t.fillText(o,512,440),t.restore(),t.fillStyle="#ffffff",t.font='bold 38px "Courier New", Courier, monospace',t.fillText("TOQUE NA TELA PARA ABORTAR",512,670)}function _b(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#7f1d1d",e.fillRect(0,0,1024,768),e.fillStyle="#ffffff",e.font='bold 48px "Courier New", Courier, monospace',e.textAlign="center",e.textBaseline="middle",e.fillText("SISTEMA CO2 / SAP",512,110),e.fillStyle="#fef08a",e.font='900 64px "Courier New", Courier, monospace',e.fillText("DESCARGA EFETUADA",512,260),e.fillStyle="#0284c7",e.fillRect(212,420,600,120),e.strokeStyle="#38bdf8",e.lineWidth=4,e.strokeRect(212,420,600,120),e.fillStyle="#ffffff",e.font='bold 44px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.fillText("REARMAR SISTEMA",512,480))}function yb(s){(s.width!==1024||s.height!==768)&&(s.width=1024,s.height=768);const e=s.getContext("2d");e&&(e.fillStyle="#06261c",e.fillRect(0,0,1024,768),e.fillStyle="#10b981",e.font='900 56px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText("● INCÊNDIO EXTINTO",512,140),e.fillStyle="#a7f3d0",e.font='bold 36px "Courier New", Courier, monospace',e.fillText("SUPRESSÃO CLASSE K BEM-SUCEDIDA",512,240),e.fillStyle="#064e3b",e.fillRect(100,340,824,110),e.strokeStyle="#34d399",e.lineWidth=4,e.strokeRect(100,340,824,110),e.fillStyle="#6ee7b7",e.font="bold 38px sans-serif",e.fillText("AVCB & NBR 14518 CONFORME",512,395),e.fillStyle="#d4af37",e.font='bold 32px "Courier New", Courier, monospace',e.fillText("COZINHA E VIDAS PRESERVADAS",512,570))}const Sb=()=>{const s=Oe.useRef(null),e=Oe.useRef(null),t=Oe.useRef(null),[r,o]=Oe.useState(0),l=Oe.useRef(0),[d,f]=Oe.useState(!1),p=Oe.useRef(!1),[m,x]=Oe.useState("STANDBY"),v=Oe.useRef("STANDBY");v.current=m;const[S,M]=Oe.useState(10),T=Oe.useRef(10);T.current=S;const[A,y]=Oe.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,C]=Oe.useState(null),[L,P]=Oe.useState("geral"),U=Oe.useRef(null),D=Oe.useRef(null),O=Oe.useRef(null),z=Oe.useRef(null),b=Oe.useRef(null),N=Oe.useRef(null),B=Oe.useRef(null),$=Oe.useRef(null),Z=Oe.useRef(null),ie=Oe.useRef(null),re=Oe.useRef(null),ee=Oe.useRef(null),Y=Oe.useRef(null),X=Oe.useRef(null),fe=Oe.useRef(null),oe=Oe.useRef(null),F=Oe.useRef(null),le=Oe.useRef(null),Ne=Oe.useRef(null),qe=Oe.useRef(null),Ge=Oe.useRef(null),te=Oe.useRef(new K(0,2.2,4.4)),de=Oe.useRef(new K(0,1.4,0)),_e=Oe.useCallback(()=>{const Qe=N.current;if(!Qe)return;const Ze=v.current,Le=T.current;Ze==="FIRE_ALARM"?F0(Qe,Le):Ze==="SUPPRESSION"?_b(Qe):Ze==="EXTINGUISHED"&&yb(Qe),b.current&&(b.current.needsUpdate=!0)},[]),[Be,De]=Oe.useState(!1),yt=Oe.useCallback(()=>{m==="SUPPRESSION"||m==="EXTINGUISHED"||(Y.current&&(Y.current.rotation.x=.65),p.current=!0,f(!0),x("FIRE_ALARM"),M(60),De(!0),y({temp:290,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:60}))},[m]),Zt=Oe.useCallback(()=>{p.current=!1,f(!1),De(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),Y.current&&(Y.current.rotation.x=0)},[]),St=()=>{s.current?s.current.scrollIntoView({behavior:"smooth"}):window.scrollTo({top:window.innerHeight,behavior:"smooth"})},Pt=()=>{if(!s.current)return;const Qe=window.scrollY,Ze=window.innerHeight*.85;window.scrollTo({top:Qe+Ze,behavior:"smooth"})},Ut=Qe=>{if(!s.current)return;const Ze=s.current.offsetTop,Le=s.current.offsetHeight-window.innerHeight,Ie=Ze+Le*Qe;window.scrollTo({top:Ie,behavior:"smooth"})},gt=()=>{if(!s.current)return;const Qe=s.current.offsetTop+s.current.offsetHeight;window.scrollTo({top:Qe+10,behavior:"smooth"})};Oe.useEffect(()=>{if(m!=="FIRE_ALARM")return;const Qe=setInterval(()=>{M(Ze=>{if(Ze<=1)return clearInterval(Qe),De(!1),x("SUPPRESSION"),y(Ie=>({...Ie,temp:140,systemStatus:"COMBATE ATIVO",countdown:0})),setTimeout(()=>{x("EXTINGUISHED"),y(Ie=>({...Ie,temp:38,systemStatus:"INCÊNDIO EXTINTO",countdown:0}))},3500),0;const Le=Ze-1;return y(Ie=>({...Ie,countdown:Le})),Le})},1e3);return()=>clearInterval(Qe)},[m]);const Ht=Oe.useCallback(()=>{p.current=!1,f(!1),De(!1),x("STANDBY"),M(60),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60}),Y.current&&(Y.current.rotation.x=0),F.current&&(F.current.scale.set(.001,.001,.001),F.current.visible=!1)},[]);Oe.useEffect(()=>{_e()},[m,S,_e]),Oe.useEffect(()=>{const Qe=()=>{if(!s.current)return;const Ze=s.current.getBoundingClientRect(),Le=s.current.offsetHeight-window.innerHeight;if(Le<=0)return;const Ie=-Ze.top,I=Math.min(1,Math.max(0,Ie/Le));if(l.current=I,o(I),!(p.current&&Be))if(p.current&&I<=.05&&(p.current=!1,f(!1),De(!1)),I<.2)x("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:60});else if(I>=.2&&I<.45){x("HEATING");const w=Math.round(180+(I-.2)/.25*160);y({temp:w,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:60})}else if(I>=.45&&I<.7){x("FIRE_ALARM");const w=Math.max(1,Math.round(60-(I-.45)/.25*59));M(w),y({temp:380,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"ALERTA DE FOGO",countdown:w})}else I>=.7&&I<.88?(x("SUPPRESSION"),y({temp:135,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),y({temp:38,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",Qe,{passive:!0}),Qe(),()=>window.removeEventListener("scroll",Qe)},[Be]);const j=Qe=>{P(Qe);const Ze=window.innerWidth<768;Qe==="geral"?Ze?(te.current.set(.5,2.1,7),de.current.set(.5,1.3,0)):(te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)):Qe==="central"?Ze?(te.current.set(1.9,1.85,1.6),de.current.set(2.1,1.8,.15)):(te.current.set(1.9,1.85,1.5),de.current.set(2.1,1.8,.15)):Qe==="fritadeira"?Ze?(te.current.set(-.2,1.4,2.6),de.current.set(-.2,1,0)):(te.current.set(-.2,1.4,2.2),de.current.set(-.2,1,0)):Qe==="botoeira"&&(Ze?(te.current.set(1.4,1.45,1.6),de.current.set(1.45,1.4,.05)):(te.current.set(1.4,1.45,1.3),de.current.set(1.45,1.4,.05)))};return Oe.useEffect(()=>{if(!t.current||!e.current)return;const Qe=e.current.clientWidth||window.innerWidth,Ze=e.current.clientHeight||window.innerHeight,Le=new vg;U.current=Le,Le.background=new At(658448),Le.fog=new Qf(658448,.035);const Ie=Qe<768,I=new Qn(Ie?68:45,Qe/Ze,.1,100);Ie?(I.position.set(.5,2.1,7),te.current.set(.5,2.1,7),de.current.set(.5,1.3,0)):(I.position.set(0,2.2,4.4),te.current.set(0,2.2,4.4),de.current.set(0,1.4,0)),D.current=I;const w=new Ag({canvas:t.current,antialias:!0,powerPreference:"high-performance"});w.setSize(Qe,Ze),w.setPixelRatio(Math.min(window.devicePixelRatio,2)),w.shadowMap.enabled=!0,w.shadowMap.type=Bf,w.toneMapping=Mc,w.toneMappingExposure=1.1,w.domElement.style.touchAction="pan-y",O.current=w;const H=new Ng(I,w.domElement);H.enableDamping=!0,H.dampingFactor=.05,H.enableZoom=!1,H.enablePan=!1,H.maxPolarAngle=Math.PI/2+.05,Ie&&(H.touches.ONE=gs.NONE,H.touches.TWO=gs.ROTATE),H.target.set(Ie?.5:0,Ie?1.3:1.4,0),z.current=H;const he=new Sg(16774890,.75);Le.add(he);const pe=new Lf(16777215,1.3);pe.position.set(4,6,4),pe.castShadow=!0,pe.shadow.mapSize.width=1024,pe.shadow.mapSize.height=1024,Le.add(pe);const ae=new a0(16766880,2.8,6,Math.PI/3,.3);ae.position.set(0,2.7,0),ae.target.position.set(0,.9,0),Le.add(ae),Le.add(ae.target);const Ye=new o0(16733440,0,5);Ye.position.set(-.35,1.2,.1),Le.add(Ye),ee.current=Ye;const we=new o0(16711680,0,8);we.position.set(2.1,2.25,.2),Le.add(we),ie.current=we;const ke=new Mt({color:13421772,metalness:.9,roughness:.22}),at=new Mt({color:1579551,roughness:.6,metalness:.1}),ye=new Mt({color:987413,roughness:.8,metalness:.2}),Ce=new Re(new qn(14,14),ye);Ce.rotation.x=-Math.PI/2,Ce.receiveShadow=!0,Le.add(Ce);const He=new Re(new qn(14,8),at);He.position.set(0,4,-1.2),He.receiveShadow=!0,Le.add(He);const We=new Re(new qn(14,8),at);We.rotation.y=Math.PI/2,We.position.set(-4.5,4,0),Le.add(We);const be=new vn;Le.add(be);const ft=new Re(new Lt(2.6,.9,1),ke);ft.position.set(0,.45,0),ft.castShadow=!0,ft.receiveShadow=!0,be.add(ft);const G=new vn;G.position.set(-.55,.9,0),be.add(G),oe.current=G;const Pe=new Re(new Lt(.85,.12,.75),ke);Pe.position.set(0,.06,0),G.add(Pe);const ge=new Re(new Lt(.72,.02,.62),new Mt({color:9584654,roughness:.1,metalness:.3}));ge.position.set(0,.11,0),G.add(ge);const Fe=new Mt({color:1118481,roughness:.5}),xe=new Re(new nn(.012,.012,.28),Fe);xe.position.set(-.16,.22,.34),xe.rotation.x=Math.PI/3,G.add(xe);const me=new Re(new nn(.012,.012,.28),Fe);me.position.set(.16,.22,.34),me.rotation.x=Math.PI/3,G.add(me);const Ee=new vn;Ee.position.set(.65,.9,0),be.add(Ee);const lt=new Re(new Lt(.95,.06,.75),new Mt({color:3355448,roughness:.4,metalness:.7}));lt.position.set(0,.03,0),Ee.add(lt);const ot=new vn;ot.position.set(0,2.3,0),Le.add(ot);const it=new Re(new Lt(2.8,.6,1.2),ke);it.castShadow=!0,ot.add(it);const qt=new Mt({color:10066329,metalness:.9,roughness:.3});for(let Et=-1;Et<=1;Et+=.5){const ht=new Re(new Lt(.42,.35,.04),qt);ht.position.set(Et,-.15,0),ht.rotation.x=-Math.PI/6,ot.add(ht)}const Wt=new Re(new nn(.28,.28,1.5,32),ke);Wt.position.set(0,1,0),ot.add(Wt);const Jn=new Re(new Lt(.64,.18,.64),new Mt({color:4674921,metalness:.85,roughness:.25}));Jn.position.set(0,.55,0),ot.add(Jn);const Ln=new Re(new Lt(.14,.14,.14),new Mt({color:14251782,roughness:.4}));Ln.position.set(.36,.55,0),ot.add(Ln);const Pi=new Mt({color:11580860,metalness:.88,roughness:.3}),Ki=new Re(new qn(3.6,1.4),Pi);Ki.position.set(0,1.6,-.6),Le.add(Ki);const Di=new Re(new nn(.008,.008,2.4,16),ke);Di.rotation.z=Math.PI/2,Di.position.set(0,1.95,-.58),Le.add(Di);const hr=new Mt({color:11817737,metalness:.8,roughness:.3}),di=new Mt({color:13938487,metalness:.9,roughness:.2}),pr=new Re(new nn(.015,.015,2.4),hr);pr.rotation.z=Math.PI/2,pr.position.set(0,-.28,-.2),ot.add(pr),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Et,ht,Yt])=>{const mi=new Re(new th(.025,.06,16),di);mi.position.set(Et,ht,Yt),mi.rotation.x=Math.PI,ot.add(mi)});const sn=new vn;sn.position.set(2.1,1.8,.15),sn.rotation.y=-.28,Le.add(sn),fe.current=sn,sn.userData={interactiveType:"central",name:"Central Outfire VTS"};const zr=new yg().load("/assets/tampa-central-moderna.png");zr.colorSpace=On;const mr=Pg(),gr=new Df(mr);gr.colorSpace=On,$.current=gr;const Li=document.createElement("canvas");Li.width=1024,Li.height=768,F0(Li,T.current);const jr=new Df(Li);jr.colorSpace=On,N.current=Li,b.current=jr,Z.current=jr;const Ii=new Mt({color:1316378,roughness:.45,metalness:.8}),Ks=new Mt({map:zr,roughness:.35,metalness:.25}),Xa=[Ii,Ii,Ii,Ii,Ks,Ii],Zs=new Re(new Lt(.72,.52,.22),Xa);Zs.castShadow=!0,sn.add(Zs);const Qt=new Mt({map:gr,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:gr,emissiveIntensity:.95,depthTest:!0,depthWrite:!0});B.current=Qt;const R=new Re(new qn(.2,.15),Qt);R.position.set(0,0,.116),R.renderOrder=10,R.userData={interactiveType:"central"},sn.add(R);const q=new Mt({color:1579552,metalness:.9,roughness:.35}),ce=new vn,se=new Re(new Lt(.222,.012,.006),q);se.position.set(0,.081,.113);const Q=new Re(new Lt(.222,.012,.006),q);Q.position.set(0,-.081,.113);const Ue=new Re(new Lt(.012,.15,.006),q);Ue.position.set(-.106,0,.113);const je=new Re(new Lt(.012,.15,.006),q);je.position.set(.106,0,.113),ce.add(se,Q,Ue,je),sn.add(ce);const Ae=new Mt({color:11580344,metalness:.95,roughness:.2}),$e=new nn(.004,.004,.005,8);[[-.098,.072],[.098,.072],[-.098,-.072],[.098,-.072]].forEach(([Et,ht])=>{const Yt=new Re($e,Ae);Yt.rotation.x=Math.PI/2,Yt.position.set(Et,ht,.1155),sn.add(Yt)});const Ve=new a0(16774890,2.2,5,Math.PI/3,.3);Ve.position.set(2.4,2.4,1.6),Ve.target=sn,Le.add(Ve);const ct=new Re(new nn(.016,.016,1.6,16),ke);ct.position.set(0,1.05,0),sn.add(ct);const rt=new Re(new nn(.045,.045,.03,16),new Mt({color:1118481,metalness:.8}));rt.position.set(0,.275,0),sn.add(rt);const wt=new Mt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),Dt=new Re(new nn(.038,.042,.065,16),wt);Dt.position.set(0,.32,0),sn.add(Dt),re.current=Dt;const Xt=new Re(new Lt(.68,.02,.2),Ii);Xt.position.set(0,-.32,0),sn.add(Xt);const Gt=new Mt({color:592396,roughness:.5}),Ot=new Re(new Lt(.24,.15,.14),Gt);Ot.position.set(-.16,-.23,0),sn.add(Ot);const st=new Re(new Lt(.24,.15,.14),Gt);st.position.set(.16,-.23,0),sn.add(st);const bt=new vn;bt.position.set(1.45,1.4,.08),Le.add(bt),X.current=bt,bt.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Rt=new Re(new Lt(.18,.24,.08),new Mt({color:13373713,roughness:.3,metalness:.3}));Rt.castShadow=!0,bt.add(Rt);const _n=new Re(new Lt(.14,.18,.015),new Mt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));_n.position.set(0,0,.042),bt.add(_n);const ei=new Re(new Lt(.1,.06,.025),new Mt({color:16436245,roughness:.3}));ei.position.set(0,-.01,.048),bt.add(ei),Y.current=ei;const Ft=new vn;Ft.position.set(-1.85,1.1,-.3),Le.add(Ft),Ft.userData={interactiveType:"saponificante",name:"Cilindro Saponificante Classe K (Inox Cromado)"};const Ui=new Mt({color:15857145,metalness:.96,roughness:.12}),kt=new Re(new nn(.13,.13,.82,32),Ui);kt.castShadow=!0,Ft.add(kt);const xt=new Re(new Dr(.13,32,16,0,Math.PI*2,0,Math.PI/2),Ui);xt.position.set(0,.41,0),Ft.add(xt);const Tn=new Re(new Dr(.13,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),Ui);Tn.position.set(0,-.41,0),Ft.add(Tn);const fn=new Mt({color:3355443,metalness:.8}),hn=new Re(new Lt(.32,.04,.06),fn);hn.position.set(0,.22,-.09),Ft.add(hn);const xr=new Re(new Lt(.32,.04,.06),fn);xr.position.set(0,-.22,-.09),Ft.add(xr);const ti=new Re(new nn(.032,.032,.02,16),new Mt({color:13938487,metalness:.85}));ti.rotation.x=Math.PI/2,ti.position.set(0,.55,.08),Ft.add(ti);const qa=new Re(new eh(.028,16),new Yi({color:2278750}));qa.position.set(0,.55,.091),Ft.add(qa);const Qs=new Re(new nn(.022,.022,.12,16),new Mt({color:13938487,metalness:.9}));Qs.position.set(0,.52,0),Ft.add(Qs);const _s=new Re(new nn(.132,.132,.12,32),new Mt({color:13938487,metalness:.85,roughness:.2}));_s.position.set(0,.05,0),Ft.add(_s);const yn=new vn;yn.position.set(.85,2.7,-.35),Le.add(yn),yn.userData={interactiveType:"co2",name:"Cilindro de CO2 (Injeção no Duto)"};const wi=new Mt({color:14427686,metalness:.65,roughness:.28}),Oi=new Re(new nn(.09,.09,.95,32),wi);Oi.castShadow=!0,yn.add(Oi);const Vr=new Re(new Dr(.09,32,16,0,Math.PI*2,0,Math.PI/2),wi);Vr.position.set(0,.475,0),yn.add(Vr);const Gr=new Re(new Dr(.09,32,16,0,Math.PI*2,Math.PI/2,Math.PI/2),wi);Gr.position.set(0,-.475,0),yn.add(Gr);const Fi=new Re(new nn(.025,.025,.14,16),new Mt({color:13938487,metalness:.85}));Fi.position.set(0,.6,0),yn.add(Fi);const Ya=new Re(new nn(.012,.012,.85,16),ke);Ya.rotation.z=Math.PI/2,Ya.position.set(-.42,.66,.35),yn.add(Ya);const Hr=new Re(new Lt(.74,.08,.64),new Mt({color:16317180,roughness:.9,metalness:.05}));Hr.position.set(-.55,1.05,0),Hr.scale.set(.001,.001,.001),Hr.visible=!1,Le.add(Hr),F.current=Hr;const hi=new vn;Le.add(hi),le.current=hi;const Cc=70,Wo=new ih(.08,1),Wr=[];for(let Et=0;Et<Cc;Et++){const ht=new Re(Wo,new Yi({color:16729344,transparent:!0,opacity:.85}));ht.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),ht.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},hi.add(ht),Wr.push(ht)}const vr=new vn;Le.add(vr),Ne.current=vr;const Ac=50,ys=new Dr(.12,8,8),Xr=[];for(let Et=0;Et<Ac;Et++){const ht=new Re(ys,new Yi({color:2040877,transparent:!0,opacity:.4}));ht.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),ht.userData={speedY:.6+Math.random()*1,maxH:2.2},vr.add(ht),Xr.push(ht)}const Zi=new vn;Le.add(Zi),qe.current=Zi;const Js=80,Rc=new Dr(.025,8,8),Xo=[];for(let Et=0;Et<Js;Et++){const ht=new Re(Rc,new Yi({color:16777215,transparent:!0,opacity:.9}));ht.position.set(-.55,1.9,0),ht.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},Zi.add(ht),Xo.push(ht)}const Ss=new vn;Le.add(Ss),Ge.current=Ss;const ea=35,$a=new Dr(.16,8,8),Ka=[];for(let Et=0;Et<ea;Et++){const ht=new Re($a,new Yi({color:14870768,transparent:!0,opacity:.4}));ht.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),Ss.add(ht),Ka.push(ht)}const pi=new Mg,Qi=new mt,Ms=Et=>{var mi,zn;const ht=w.domElement.getBoundingClientRect();Qi.x=(Et.clientX-ht.left)/ht.width*2-1,Qi.y=-((Et.clientY-ht.top)/ht.height)*2+1,pi.setFromCamera(Qi,I);const Yt=pi.intersectObjects([bt,sn,G,Ft,yn],!0);if(Yt.length>0){let tt=Yt[0].object;for(;tt&&!((mi=tt.userData)!=null&&mi.interactiveType)&&tt.parent;)tt=tt.parent;if(tt&&((zn=tt.userData)!=null&&zn.interactiveType)){w.domElement.style.cursor="pointer",C(tt.userData.name);return}}w.domElement.style.cursor="default",C(null)},Za=Et=>{var mi,zn,tt,Yn;const ht=w.domElement.getBoundingClientRect();Qi.x=(Et.clientX-ht.left)/ht.width*2-1,Qi.y=-((Et.clientY-ht.top)/ht.height)*2+1,pi.setFromCamera(Qi,I);const Yt=pi.intersectObjects([bt,sn,G,Ft,yn],!0);if(Yt.length>0){let cn=Yt[0].object;for(;cn&&!((mi=cn.userData)!=null&&mi.interactiveType)&&cn.parent;)cn=cn.parent;((zn=cn==null?void 0:cn.userData)==null?void 0:zn.interactiveType)==="botoeira"?yt():((tt=cn==null?void 0:cn.userData)==null?void 0:tt.interactiveType)==="central"?j("central"):((Yn=cn==null?void 0:cn.userData)==null?void 0:Yn.interactiveType)==="fritadeira"&&j("fritadeira")}};w.domElement.addEventListener("mousemove",Ms),w.domElement.addEventListener("click",Za);const ws=()=>{if(!e.current||!O.current||!D.current)return;const Et=e.current.clientWidth,ht=e.current.clientHeight,Yt=Et<768;D.current.aspect=Et/ht,D.current.fov=Yt?68:45,D.current.updateProjectionMatrix(),O.current.setSize(Et,ht)};window.addEventListener("resize",ws);let bs;const Qa=new c1,Bn=()=>{bs=requestAnimationFrame(Bn);const Et=Qa.getDelta(),ht=Qa.getElapsedTime();I.position.lerp(te.current,.05),H.target.lerp(de.current,.05),H.update();const Yt=v.current,mi=l.current;if(Yt==="HEATING"||Yt==="FIRE_ALARM"){hi.visible=!0,vr.visible=!0,qe.current.visible=!1,Ge.current.visible=!1;const zn=Yt==="FIRE_ALARM"?1:Math.max(.2,(mi-.18)/.24);if(ee.current&&(ee.current.intensity=(2.5+Math.sin(ht*20)*1.5)*zn,ee.current.color.setHex(Math.random()>.3?16729344:16755200)),Wr.forEach((tt,Yn)=>{tt.visible=!0,tt.position.y+=tt.userData.speedY*Et,tt.position.x+=Math.sin(ht*10+Yn)*.006;const cn=(tt.position.y-tt.userData.baseY)/1;tt.scale.setScalar(Math.max(.01,(1-cn)*tt.userData.scale*zn)),tt.material.opacity=1-cn,tt.position.y>tt.userData.baseY+.9&&(tt.position.y=tt.userData.baseY,tt.position.x=-.55+(Math.random()-.5)*.5,tt.position.z=(Math.random()-.5)*.4)}),Xr.forEach(tt=>{tt.visible=!0,tt.position.y+=tt.userData.speedY*Et,tt.scale.setScalar(zn),tt.position.y>tt.userData.maxH&&(tt.position.y=1.3,tt.position.x=-.55+(Math.random()-.5)*.4)}),Yt==="FIRE_ALARM"){const tt=Math.sin(ht*24)>0;ie.current&&re.current&&(ie.current.intensity=tt?5:0,re.current.material.emissive=tt?new At(16711680):new At(0))}}else if(Yt==="SUPPRESSION"){hi.visible=!0,qe.current.visible=!0,Ge.current.visible=!0,Wr.forEach(tt=>{tt.scale.multiplyScalar(.92),tt.scale.x<.05&&(tt.visible=!1)}),ee.current&&(ee.current.intensity=Math.max(0,ee.current.intensity-Et*4)),Xo.forEach((tt,Yn)=>{tt.visible=!0,tt.position.y-=tt.userData.speed*Et,tt.position.x+=Math.sin(ht*15+Yn)*.01,tt.position.y<1.05&&(tt.position.y=tt.userData.origY,tt.position.x=-.55+tt.userData.spread)}),F.current&&(F.current.visible=!0,F.current.scale.lerp(new K(1,1,1),.08)),Ka.forEach((tt,Yn)=>{tt.visible=!0,tt.position.y+=Math.sin(ht*3+Yn)*.004,tt.position.x+=Math.cos(ht*2+Yn)*.004});const zn=Math.sin(ht*30)>0;ie.current&&re.current&&(ie.current.intensity=zn?4:.2,re.current.material.emissive=zn?new At(16711680):new At(3342336))}else Yt==="EXTINGUISHED"?(hi.visible=!1,vr.visible=!1,qe.current.visible=!1,Ge.current.visible=!1,ee.current&&(ee.current.intensity=0),F.current&&(F.current.visible=!0,F.current.scale.set(1,1,1)),ie.current&&re.current&&(ie.current.intensity=0,re.current.material.emissive=new At(0))):(hi.visible=!1,vr.visible=!1,qe.current.visible=!1,Ge.current.visible=!1,ee.current&&(ee.current.intensity=0),F.current&&(F.current.visible=!1),ie.current&&re.current&&(ie.current.intensity=0,re.current.material.emissive=new At(0)));B.current&&(Yt==="FIRE_ALARM"||Yt==="SUPPRESSION"||Yt==="EXTINGUISHED"?b.current&&B.current.map!==b.current&&(B.current.map=b.current,B.current.emissiveMap=b.current,B.current.emissiveIntensity=1,B.current.needsUpdate=!0):$.current&&B.current.map!==$.current&&(B.current.map=$.current,B.current.emissiveMap=$.current,B.current.emissiveIntensity=.95,B.current.needsUpdate=!0)),w.render(Le,I)};return Bn(),()=>{cancelAnimationFrame(bs),window.removeEventListener("resize",ws),w.domElement.removeEventListener("mousemove",Ms),w.domElement.removeEventListener("click",Za),w.dispose()}},[yt,_e]),u.jsxs(u.Fragment,{children:[u.jsxs("section",{id:"splash-hero",className:"relative w-full h-[100dvh] bg-[#05070a] flex flex-col items-center justify-center select-none overflow-hidden z-20",children:[u.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#d4af37]/15 via-[#0a0c10]/60 to-[#05070a] pointer-events-none"}),u.jsx("div",{className:"relative z-10 flex flex-col items-center justify-center px-4 text-center",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"Outfire Sistemas Contra Incêndio",className:"w-80 sm:w-96 md:w-[480px] max-w-[88vw] object-contain drop-shadow-[0_0_45px_rgba(212,175,55,0.4)] select-none transition-transform duration-700 hover:scale-105"})}),u.jsx("button",{onClick:St,"aria-label":"Descer para a simulação da cozinha",className:"absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group cursor-pointer focus:outline-none",children:u.jsx("div",{className:"w-12 h-12 rounded-full border border-[#d4af37]/50 bg-black/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(212,175,55,0.35)] group-hover:border-[#d4af37] group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] transition-all",children:u.jsx(id,{className:"w-6 h-6 text-[#d4af37] animate-bounce"})})})]}),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[450vh] bg-[#07080a]",children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-[100dvh] overflow-hidden flex flex-col justify-between select-none",children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(G0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-cyan-950/90 border-cyan-500 text-cyan-200 shadow-[0_0_20px_rgba(6,182,212,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(gc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(Uo,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(Uo,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(Ev,{className:"w-4 h-4 text-cyan-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(Sc,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-pulse",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/80 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(Uo,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(jv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(X0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),_&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(V0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[_," — Clique para interagir"]})]}),Be&&u.jsxs("div",{className:"absolute top-44 left-1/2 -translate-x-1/2 z-20 pointer-events-auto px-5 py-3 rounded-2xl bg-red-950/95 backdrop-blur-md border border-red-500 text-white shadow-[0_0_40px_rgba(239,68,68,0.7)] flex flex-col items-center gap-2 text-center max-w-md animate-pulse",children:[u.jsxs("div",{className:"flex items-center gap-2 text-red-300 font-bold text-xs uppercase tracking-wider",children:[u.jsx(Pm,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"Acionador Manual Disparado • Contagem de Segurança"})]}),u.jsxs("div",{className:"font-mono text-2xl font-black text-[#67e8f9]",children:["Supressão em ",S,"s"]}),u.jsxs("p",{className:"text-[11px] text-gray-200",children:["O saponificante ",u.jsx("strong",{children:"NÃO"})," é descarregado de imediato. Aguarda zerar a contagem para evacuação da cozinha ou cancelamento."]}),u.jsxs("button",{onClick:Zt,className:"mt-1 px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs flex items-center gap-1.5 transition-all active:scale-95 border border-white/30",children:[u.jsx(mc,{className:"w-3.5 h-3.5 text-white"}),u.jsx("span",{children:"Toque aqui para Abortar Disparo"})]})]}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-5 flex flex-col items-center gap-3",children:[u.jsxs("div",{className:"flex items-center gap-3 bg-black/85 backdrop-blur-md px-5 py-2.5 rounded-full border border-[#d4af37]/40 shadow-[0_10px_35px_rgba(0,0,0,0.9)] max-w-full overflow-hidden",children:[u.jsx("button",{onClick:Pt,"aria-label":"Avançar simulação para baixo",className:"w-10 h-10 rounded-full bg-gradient-to-b from-[#d4af37]/25 to-black/80 border border-[#d4af37]/60 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(212,175,55,0.4)] cursor-pointer shrink-0",children:u.jsx(id,{className:`w-5 h-5 text-[#d4af37] ${m!=="STANDBY"?"animate-bounce":"animate-pulse"}`})}),u.jsxs("div",{className:"flex items-center gap-2 truncate",children:[m==="STANDBY"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shrink-0"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-gray-200",children:["Cozinha Industrial em Standby • ",u.jsx("span",{className:"text-[#d4af37]",children:"Role para descer"})]})]}),m==="HEATING"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-amber-500/20 border border-amber-500/60 text-amber-300 font-black text-xs shrink-0",children:"FASE 1"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-amber-200 truncate",children:["Princípio de Incêndio (Óleo a ",A.temp,"°C) — Continue descendo"]})]}),m==="FIRE_ALARM"&&u.jsxs("div",{className:"flex items-center gap-2 animate-pulse",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-red-600/30 border border-red-500 text-red-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(239,68,68,0.5)]",children:"FASE 2"}),u.jsxs("span",{className:"text-xs sm:text-sm font-bold text-red-200 truncate",children:["Alarme Térmico 145°C Disparado • Contagem: ",S,"s"]})]}),m==="SUPPRESSION"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-cyan-600/30 border border-cyan-400 text-cyan-200 font-black text-xs shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.5)]",children:"FASE 3"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-cyan-200 truncate",children:"Supressão Ativa: Saponificante Classe K + CO2 no duto"})]}),m==="EXTINGUISHED"&&u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"px-2.5 py-0.5 rounded-md bg-emerald-600/30 border border-emerald-400 text-emerald-200 font-black text-xs shrink-0",children:"FASE 4"}),u.jsx("span",{className:"text-xs sm:text-sm font-bold text-emerald-200 truncate",children:"Cozinha Preservada • NBR 14518 Cumprida — Continue descendo"})]})]})]}),u.jsxs("div",{className:"w-full flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[u.jsxs("button",{onClick:yt,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED"||Be,className:`py-2 px-4 rounded-xl font-black text-xs flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_25px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Pm,{className:"w-3.5 h-3.5 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(Be||m==="FIRE_ALARM")&&u.jsxs("button",{onClick:Zt,className:"py-2 px-3.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 font-bold text-xs flex items-center gap-1.5 border border-amber-500/40 transition-all active:scale-95",children:[u.jsx(mc,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Abortar Disparo"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:Ht,className:"py-2 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-1.5 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(H0,{className:"w-3 h-3"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-1.5 font-mono flex items-center gap-1",children:[u.jsx(Mv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>j("geral"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>j("central"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>j("fritadeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>j("botoeira"),className:`px-2 py-0.5 rounded-lg font-bold transition-all ${L==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]}),u.jsxs("div",{className:"absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1.5 pointer-events-auto",children:[u.jsx("div",{onClick:Qe=>{const Ze=Qe.currentTarget.getBoundingClientRect(),Le=Qe.clientY-Ze.top,Ie=Math.max(0,Math.min(1,Le/Ze.height));Ut(Ie)},title:"Clique para rolar na simulação",className:"relative w-2 sm:w-2.5 h-32 sm:h-48 rounded-full bg-black/75 backdrop-blur-md border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.25)] cursor-pointer p-0.5 flex flex-col justify-start overflow-hidden group hover:border-[#d4af37] transition-all",children:u.jsx("div",{className:"w-full rounded-full bg-gradient-to-b from-[#ffffff] via-[#d4af37] to-[#9a741e] shadow-[0_0_10px_rgba(212,175,55,0.8)] transition-[height] duration-150",style:{height:`${Math.max(10,r*100)}%`}})}),u.jsx("div",{className:"flex flex-col items-center gap-1",children:[{label:"0",title:"Início / Standby",progress:.05,stage:"STANDBY"},{label:"1",title:"Fase 1: Princípio de Incêndio",progress:.32,stage:"HEATING"},{label:"2",title:"Fase 2: Alarme Térmico 60s",progress:.58,stage:"FIRE_ALARM"},{label:"3",title:"Fase 3: Supressão Ativa",progress:.78,stage:"SUPPRESSION"},{label:"4",title:"Fase 4: Incêndio Extinto",progress:.95,stage:"EXTINGUISHED"}].map(Qe=>{const Ze=m===Qe.stage;return u.jsx("button",{onClick:()=>Ut(Qe.progress),title:Qe.title,className:`w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-black transition-all ${Ze?"bg-[#d4af37] text-black shadow-[0_0_12px_rgba(212,175,55,0.9)] scale-110 border border-white":"bg-black/80 hover:bg-black text-gray-400 hover:text-white border border-[#d4af37]/30 hover:border-[#d4af37]"}`,children:Qe.label},Qe.label)})}),u.jsx("button",{onClick:gt,title:"Avançar para a Central Outfire",className:"mt-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black/80 hover:bg-black border border-[#d4af37]/50 text-[#d4af37] flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-glow-gold","aria-label":"Avançar para a próxima seção",children:u.jsx(id,{className:"w-3.5 h-3.5 animate-bounce"})})]})]})})]})},Mb=()=>{const[s,e]=Oe.useState("3d"),t=Oe.useRef(null),r=Oe.useRef(null),[o,l]=Oe.useState(!1),d=Oe.useRef(!1);d.current=o;const[f,p]=Oe.useState(!1),m=Oe.useRef(!1);m.current=f;const[x,v]=Oe.useState(null),S=Oe.useRef(null),M=Oe.useRef(null),T=Oe.useRef(null),A=Oe.useRef(null),y=()=>{l(P=>!P)},_=()=>{p(P=>!P)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Oe.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const P=r.current.clientWidth,U=r.current.clientHeight,D=new vg;D.background=new At(921879);const O=new Qn(40,P/U,.1,100);O.position.set(1.8,1.2,2.2),A.current=O;const z=new Ag({canvas:t.current,antialias:!0,powerPreference:"high-performance"});z.setSize(P,U),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.shadowMap.enabled=!0,z.shadowMap.type=Bf,z.toneMapping=Mc,z.toneMappingExposure=1.15,z.domElement.style.touchAction="pan-y";const b=new Ng(O,z.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.enableZoom=!1,b.minDistance=1.2,b.maxDistance=6,b.target.set(0,0,0),T.current=b;const N=new Sg(16774890,.9);D.add(N);const B=new Lf(16777215,1.5);B.position.set(3,4,3),B.castShadow=!0,D.add(B);const $=new Lf(13938487,.85);$.position.set(-3,-2,-3),D.add($);const Z=new Yi({color:0,transparent:!0,opacity:.35}),ie=new Re(new qn(2.2,1.4),Z);ie.rotation.x=-Math.PI/2,ie.position.set(0,-.65,0),D.add(ie);const ee=new yg().load("/assets/tampa-central-moderna.png");ee.colorSpace=On;const Y=new Mt({color:1316379,metalness:.85,roughness:.35}),X=new Mt({map:ee,metalness:.2,roughness:.35}),fe=[Y,Y,Y,Y,X,Y],oe=new Re(new Lt(1.4,1,.58),fe);oe.castShadow=!0,oe.receiveShadow=!0,D.add(oe);const F=new Yi({color:460810}),le=new Re(new qn(.88,.22),F);le.rotation.x=-Math.PI/2,le.position.set(0,.501,-.05),D.add(le);const Ne=new Re(new qn(.7,.22),F);Ne.rotation.x=Math.PI/2,Ne.position.set(0,-.501,-.05),D.add(Ne);const qe=Pg(),Ge=new Df(qe);Ge.colorSpace=On,Ge.generateMipmaps=!1,Ge.minFilter=Pn,Ge.magFilter=Pn;const te=new Mt({map:Ge,roughness:.15,metalness:.05,emissive:16777215,emissiveMap:Ge,emissiveIntensity:.95,depthTest:!0,depthWrite:!0}),de=new Re(new qn(.219,.164),te);de.position.set(0,0,.298),de.renderOrder=10,D.add(de);const _e=new Mt({color:1579552,metalness:.9,roughness:.35}),Be=new vn,De=new Re(new Lt(.244,.014,.008),_e);De.position.set(0,.088,.294);const yt=new Re(new Lt(.244,.014,.008),_e);yt.position.set(0,-.088,.294);const Zt=new Re(new Lt(.014,.164,.008),_e);Zt.position.set(-.115,0,.294);const St=new Re(new Lt(.014,.164,.008),_e);St.position.set(.115,0,.294),Be.add(De,yt,Zt,St),D.add(Be);const Pt=new Mt({color:11580344,metalness:.95,roughness:.2}),Ut=new nn(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([ot,it])=>{const qt=new Re(Ut,Pt);qt.rotation.x=Math.PI/2,qt.position.set(ot,it,.2985),D.add(qt)});const gt=new Yi({color:460810}),Ht=new Re(new qn(.04,.12),gt);Ht.rotation.y=Math.PI,Ht.position.set(-.5,.3,-.291),D.add(Ht);const j=new Re(new qn(.04,.12),gt);j.rotation.y=Math.PI,j.position.set(.5,.3,-.291),D.add(j);const Qe=new Mt({color:11580344,metalness:.9,roughness:.2}),Ze=new nn(.012,.012,.015,8),Le=new vn;Le.position.set(0,0,-.05),D.add(Le),S.current=Le;const Ie=new Mt({color:2040619,metalness:.8,roughness:.35}),I=new Re(new Lt(.95,.02,.25),Ie);I.position.set(0,.505,0),I.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},Le.add(I),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([ot,it,qt])=>{const Wt=new Re(Ze,Qe);Wt.position.set(ot,it,qt),Le.add(Wt)});const w=new Mt({color:13948120,metalness:.9,roughness:.2}),H=new Re(new Lt(.85,.44,.2),w);H.position.set(0,.27,0),H.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},Le.add(H);const he=new Yi({color:15381256}),pe=new Re(new qn(.24,.08),he);pe.position.set(0,.27,.101),Le.add(pe);const ae=new vn;ae.position.set(0,0,-.05),D.add(ae),M.current=ae;const Ye=new Mt({color:2040619,metalness:.8,roughness:.35}),we=new Re(new Lt(.74,.02,.24),Ye);we.position.set(0,-.505,0),we.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},ae.add(we),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([ot,it,qt])=>{const Wt=new Re(Ze,Qe);Wt.position.set(ot,it,qt),ae.add(Wt)});const ke=new Mt({color:592397,roughness:.5}),at=new Re(new Lt(.3,.38,.18),ke);at.position.set(-.18,-.305,0),at.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},ae.add(at);const ye=new Re(new Lt(.3,.38,.18),ke);ye.position.set(.18,-.305,0),ye.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},ae.add(ye);const Ce=new Mt({color:2450411,metalness:.8}),He=new Mt({color:15680580,metalness:.8}),We=new Re(new nn(.012,.012,.03),Ce);We.position.set(-.24,-.1,.05),ae.add(We);const be=new Re(new nn(.012,.012,.03),He);be.position.set(-.12,-.1,.05),ae.add(be);const ft=new Re(new nn(.012,.012,.03),Ce);ft.position.set(.12,-.1,.05),ae.add(ft);const G=new Re(new nn(.012,.012,.03),He);G.position.set(.24,-.1,.05),ae.add(G);const Pe=new Mg,ge=new mt,Fe=ot=>{var Wt,Jn;const it=z.domElement.getBoundingClientRect();ge.x=(ot.clientX-it.left)/it.width*2-1,ge.y=-((ot.clientY-it.top)/it.height)*2+1,Pe.setFromCamera(ge,O);const qt=Pe.intersectObjects([Le,ae,oe],!0);if(qt.length>0){let Ln=qt[0].object;if((Wt=Ln.userData)!=null&&Wt.isPsu){z.domElement.style.cursor="pointer",v(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((Jn=Ln.userData)!=null&&Jn.isBattery){z.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{z.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}z.domElement.style.cursor="default",v(null)},xe=ot=>{var Wt,Jn;const it=z.domElement.getBoundingClientRect();ge.x=(ot.clientX-it.left)/it.width*2-1,ge.y=-((ot.clientY-it.top)/it.height)*2+1,Pe.setFromCamera(ge,O);const qt=Pe.intersectObjects([Le,ae],!0);if(qt.length>0){const Ln=qt[0].object;(Wt=Ln.userData)!=null&&Wt.isPsu?l(Pi=>!Pi):(Jn=Ln.userData)!=null&&Jn.isBattery&&p(Pi=>!Pi)}};z.domElement.addEventListener("mousemove",Fe),z.domElement.addEventListener("click",xe);const me=()=>{if(!r.current||!z||!O)return;const ot=r.current.clientWidth,it=r.current.clientHeight;O.aspect=ot/it,O.updateProjectionMatrix(),z.setSize(ot,it)};window.addEventListener("resize",me);let Ee;const lt=()=>{Ee=requestAnimationFrame(lt);const ot=d.current?.52:0;S.current&&(S.current.position.y+=(ot-S.current.position.y)*.12);const it=m.current?-.52:0;M.current&&(M.current.position.y+=(it-M.current.position.y)*.12),b.update(),z.render(D,O)};return lt(),()=>{cancelAnimationFrame(Ee),window.removeEventListener("resize",me),z.domElement.removeEventListener("mousemove",Fe),z.domElement.removeEventListener("click",xe),z.dispose()}},[s]);const L=[{icon:Cv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:Rm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Bv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:Sv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:kd,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:G0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(Rm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(Vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(vv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(H0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(jo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(kv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(hs,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(oc,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(j0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:L.map((P,U)=>{const D=P.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(D,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:P.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:P.desc})]},U)})})]})]})},wb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(kd,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(mc,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Uo,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(mc,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(kd,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(Sc,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(jo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),bb=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Iv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(Tv,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(Sc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(bv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(yv,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Eb=({onAddToCart:s})=>{const[e,t]=Oe.useState(1),[r,o]=Oe.useState(9),[l,d]=Oe.useState(!0),[f,p]=Oe.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const _=[...f];for(let C=f.length+1;C<=y;C++)_.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(_)}else y<f.length&&p(f.slice(0,y))},x=(y,_)=>{const C=[...f];C[y].lengthMeters=Math.max(1,Math.min(8,Number(_.toFixed(1)))),p(C)},v=(y,_)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},L={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},P={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},U=[...f];U[y].appliances.push({id:Math.random().toString(36).substring(7),name:C[_],type:_,icon:L[_],widthMeters:P[_]}),p(U)},S=(y,_)=>{const C=[...f];C[y].appliances.splice(_,1),p(C)},M=Oe.useMemo(()=>{let y=0,_=0,C=0,L=0;f.forEach(Y=>{y+=Y.appliances.length,_+=2,l&&(C+=1);const X=Math.max(1,Math.round(Y.lengthMeters/.9));L+=X});const P=y+_+C,U=P*2,D=Math.max(9,U);let O=9;D>9&&D<=16?O=16:D>16&&D<=25?O=25:D>25&&(O=Math.ceil(D/9)*9);const z=Math.max(1,Math.ceil(r/3)),b=z,N=Math.max(10,Math.ceil(r/3*5)),B=N<=10?10:N<=25?25:45,$=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,Z=e===1?8900:e===2?14500:19800,ie=P*185+z*210,re=L*295+b*320,ee=Z+ie+re+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:_,damperNozzlesCount:C,totalSaponificanteNozzles:P,saponificanteLiters:D,recommendedSaponificanteCylinderLiters:O,hoodSensorsCount:L,co2NozzlesCount:z,ductSensorsCount:b,co2Kg:N,recommendedCo2CylinderKg:B,centralModel:$,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:ee}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

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

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const _=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${_}`,"_blank")},A=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(z0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(X0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,_)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:_+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:C=>x(_,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((C,L)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:C.icon}),u.jsx("span",{className:"font-medium",children:C.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(_,L),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx(W0,{className:"w-3.5 h-3.5"})})]},C.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>v(_,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Do,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>v(_,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Do,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>v(_,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Do,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>v(_,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(Do,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,_)=>{const C=180+_*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:C,y1:"24",x2:C,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:C,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${C-4},43 ${C+4},43 ${C},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:C,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:C+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+18.5}, 37.5)`}),u.jsx("text",{x:C+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${_}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,_)=>{const C=e,L=635,P=C===1?0:C===2?30:18,U=(L-(C-1)*P)/C,D=95+_*(U+P),O=C===1?84:C===2?65:52,z=D+(U-O)/2,b=O+16,N=z-8,B=66,$=38,Z=y.appliances.length>0?y.appliances:[{id:`app-${_}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:z,y:"58",width:O,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${_}`,children:[u.jsx("rect",{x:N-2,y:B,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N-2,y:B+$-4,width:b+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N,y:B+3,width:b,height:$-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:N+b-2,y:B+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:N+b+4,cy:B+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:N+b/2,y:B+18,fill:"#ffffff",fontSize:C===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",C>1?`#${_+1}`:""]}),u.jsx("text",{x:N+b/2,y:B+27,fill:"#fca5a5",fontSize:C===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:_===0?95:D-P,y1:"122",x2:D+U-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${D},158 ${D+U*.12},118 ${D+U*.88},118 ${D+U},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:D,y:"158",width:U,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:D+U/2,y:"172",fill:"#f8fafc",fontSize:C===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",C>1?`${_+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",_+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:D+U*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+U*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:D+U*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+U*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((ie,re,ee)=>{const Y=D+25+re*((U-50)/Math.max(1,ee.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:Y,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:Y,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${_}-${re}`)}),u.jsx("rect",{x:D,y:"240",width:U,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),Z.map((ie,re)=>{const ee=Z.length,Y=(U-12)/ee,X=D+6+re*Y,fe=Y-6;return u.jsxs("g",{children:[u.jsx("rect",{x:X,y:"245",width:fe,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:X+fe/2,y:"272",fill:"#ffffff",fontSize:C===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:ie.name.split(" ")[0]}),u.jsx("text",{x:X+fe/2,y:"286",fill:"#94a3b8",fontSize:C===3?"5.5":"6.5",textAnchor:"middle",children:ie.type.toUpperCase()}),u.jsx("line",{x1:X+fe/2,y1:"178",x2:X+fe/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${X+fe/2-4},225 ${X+fe/2+4},225 ${X+fe/2},233`,fill:"#d4af37"}),u.jsx("text",{x:X+fe/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},ie.id||`app-${_}-${re}`)})]},`hood-block-${y.id||_}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(hs,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Ur,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(_v,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Tb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Cb=({onAddToCart:s})=>{const[e,t]=Oe.useState("all"),[r,o]=Oe.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=Tb.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(xc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Uv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(jo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(wv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(xc,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(Ur,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Ab=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico Oficial (POP)",size:"A4 / Imprimível",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, cuidados com inox, rearme da válvula e recarga 24h.",link:"/pop-pos-disparo.html",pdfLink:"/pop-pos-disparo.html",featured:!0},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"A4 / Laudo Oficial",description:"Documentação comprobatória das características técnicas, laudo de ensaios e conformidade estrita com a ABNT NBR 14518:2020 para instrução de processos no Corpo de Bombeiros.",link:"/certificado-conformidade-nbr14518.html",pdfLink:"/certificado-conformidade-nbr14518.html",featured:!0}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Am,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(Fd,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(Am,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(j0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:t.link.endsWith(".pdf")?"Baixar PDF":"Ver / Imprimir"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(zv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(gc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Rb=()=>{const[s,e]=Oe.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(jo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(V0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Rv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Nb=()=>{const[s,e]=Oe.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Oe.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(Ur,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(Ur,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(Ur,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Av,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(hs,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Ov,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Pb=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=Oe.useState(!1),[p,m]=Oe.useState(!1);if(!s)return null;const x=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),v=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{M+=`${A+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Dm,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(Bd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Dm,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Dv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(Do,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx(W0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(Ur,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Nm,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(gc,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(Bd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(Sc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Lv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Nm,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(gc,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(oc,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Db=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(Pv,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Lb(){const[s,e]=Oe.useState([]),[t,r]=Oe.useState(!1),o=m=>{e(x=>x.find(S=>S.product.id===m.id)?x.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(S=>{if(S.product.id===m){const M=S.quantity+x;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(x=>x.filter(v=>v.product.id!==m))},f=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(Gv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(Sb,{}),u.jsx(Mb,{}),u.jsx(wb,{}),u.jsx(bb,{}),u.jsx(Eb,{onAddToCart:o}),u.jsx(Cb,{onAddToCart:o}),u.jsx(Ab,{}),u.jsx(Rb,{})]}),u.jsx(Nb,{}),u.jsx(Pb,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Db,{})]})}pv.createRoot(document.getElementById("root")).render(u.jsx(ov.StrictMode,{children:u.jsx(Lb,{})}));
