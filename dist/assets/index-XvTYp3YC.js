(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function s0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Nu={exports:{}},Va={},Pu={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function Ex(){if($p)return _t;$p=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(B){return B===null||typeof B!="object"?null:(B=v&&B[v]||B["@@iterator"],typeof B=="function"?B:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,N={};function M(B,oe,be){this.props=B,this.context=oe,this.refs=N,this.updater=be||S}M.prototype.isReactComponent={},M.prototype.setState=function(B,oe){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,oe,"setState")},M.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function _(){}_.prototype=M.prototype;function T(B,oe,be){this.props=B,this.context=oe,this.refs=N,this.updater=be||S}var L=T.prototype=new _;L.constructor=T,C(L,M.prototype),L.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function z(B,oe,be){var je,We={},re=null,de=null;if(oe!=null)for(je in oe.ref!==void 0&&(de=oe.ref),oe.key!==void 0&&(re=""+oe.key),oe)I.call(oe,je)&&!F.hasOwnProperty(je)&&(We[je]=oe[je]);var ve=arguments.length-2;if(ve===1)We.children=be;else if(1<ve){for(var Le=Array(ve),Pe=0;Pe<ve;Pe++)Le[Pe]=arguments[Pe+2];We.children=Le}if(B&&B.defaultProps)for(je in ve=B.defaultProps,ve)We[je]===void 0&&(We[je]=ve[je]);return{$$typeof:s,type:B,key:re,ref:de,props:We,_owner:U.current}}function w(B,oe){return{$$typeof:s,type:B.type,key:oe,ref:B.ref,props:B.props,_owner:B._owner}}function A(B){return typeof B=="object"&&B!==null&&B.$$typeof===s}function O(B){var oe={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(be){return oe[be]})}var G=/\/+/g;function H(B,oe){return typeof B=="object"&&B!==null&&B.key!=null?O(""+B.key):oe.toString(36)}function Z(B,oe,be,je,We){var re=typeof B;(re==="undefined"||re==="boolean")&&(B=null);var de=!1;if(B===null)de=!0;else switch(re){case"string":case"number":de=!0;break;case"object":switch(B.$$typeof){case s:case e:de=!0}}if(de)return de=B,We=We(de),B=je===""?"."+H(de,0):je,R(We)?(be="",B!=null&&(be=B.replace(G,"$&/")+"/"),Z(We,oe,be,"",function(Pe){return Pe})):We!=null&&(A(We)&&(We=w(We,be+(!We.key||de&&de.key===We.key?"":(""+We.key).replace(G,"$&/")+"/")+B)),oe.push(We)),1;if(de=0,je=je===""?".":je+":",R(B))for(var ve=0;ve<B.length;ve++){re=B[ve];var Le=je+H(re,ve);de+=Z(re,oe,be,Le,We)}else if(Le=y(B),typeof Le=="function")for(B=Le.call(B),ve=0;!(re=B.next()).done;)re=re.value,Le=je+H(re,ve++),de+=Z(re,oe,be,Le,We);else if(re==="object")throw oe=String(B),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return de}function te(B,oe,be){if(B==null)return B;var je=[],We=0;return Z(B,je,"","",function(re){return oe.call(be,re,We++)}),je}function ne(B){if(B._status===-1){var oe=B._result;oe=oe(),oe.then(function(be){(B._status===0||B._status===-1)&&(B._status=1,B._result=be)},function(be){(B._status===0||B._status===-1)&&(B._status=2,B._result=be)}),B._status===-1&&(B._status=0,B._result=oe)}if(B._status===1)return B._result.default;throw B._result}var K={current:null},$={transition:null},fe={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:$,ReactCurrentOwner:U};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:te,forEach:function(B,oe,be){te(B,function(){oe.apply(this,arguments)},be)},count:function(B){var oe=0;return te(B,function(){oe++}),oe},toArray:function(B){return te(B,function(oe){return oe})||[]},only:function(B){if(!A(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},_t.Component=M,_t.Fragment=n,_t.Profiler=o,_t.PureComponent=T,_t.StrictMode=r,_t.Suspense=p,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fe,_t.act=se,_t.cloneElement=function(B,oe,be){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var je=C({},B.props),We=B.key,re=B.ref,de=B._owner;if(oe!=null){if(oe.ref!==void 0&&(re=oe.ref,de=U.current),oe.key!==void 0&&(We=""+oe.key),B.type&&B.type.defaultProps)var ve=B.type.defaultProps;for(Le in oe)I.call(oe,Le)&&!F.hasOwnProperty(Le)&&(je[Le]=oe[Le]===void 0&&ve!==void 0?ve[Le]:oe[Le])}var Le=arguments.length-2;if(Le===1)je.children=be;else if(1<Le){ve=Array(Le);for(var Pe=0;Pe<Le;Pe++)ve[Pe]=arguments[Pe+2];je.children=ve}return{$$typeof:s,type:B.type,key:We,ref:re,props:je,_owner:de}},_t.createContext=function(B){return B={$$typeof:u,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:l,_context:B},B.Consumer=B},_t.createElement=z,_t.createFactory=function(B){var oe=z.bind(null,B);return oe.type=B,oe},_t.createRef=function(){return{current:null}},_t.forwardRef=function(B){return{$$typeof:d,render:B}},_t.isValidElement=A,_t.lazy=function(B){return{$$typeof:x,_payload:{_status:-1,_result:B},_init:ne}},_t.memo=function(B,oe){return{$$typeof:m,type:B,compare:oe===void 0?null:oe}},_t.startTransition=function(B){var oe=$.transition;$.transition={};try{B()}finally{$.transition=oe}},_t.unstable_act=se,_t.useCallback=function(B,oe){return K.current.useCallback(B,oe)},_t.useContext=function(B){return K.current.useContext(B)},_t.useDebugValue=function(){},_t.useDeferredValue=function(B){return K.current.useDeferredValue(B)},_t.useEffect=function(B,oe){return K.current.useEffect(B,oe)},_t.useId=function(){return K.current.useId()},_t.useImperativeHandle=function(B,oe,be){return K.current.useImperativeHandle(B,oe,be)},_t.useInsertionEffect=function(B,oe){return K.current.useInsertionEffect(B,oe)},_t.useLayoutEffect=function(B,oe){return K.current.useLayoutEffect(B,oe)},_t.useMemo=function(B,oe){return K.current.useMemo(B,oe)},_t.useReducer=function(B,oe,be){return K.current.useReducer(B,oe,be)},_t.useRef=function(B){return K.current.useRef(B)},_t.useState=function(B){return K.current.useState(B)},_t.useSyncExternalStore=function(B,oe,be){return K.current.useSyncExternalStore(B,oe,be)},_t.useTransition=function(){return K.current.useTransition()},_t.version="18.3.1",_t}var Yp;function df(){return Yp||(Yp=1,Pu.exports=Ex()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function bx(){if(Kp)return Va;Kp=1;var s=df(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:o.current}}return Va.Fragment=n,Va.jsx=u,Va.jsxs=u,Va}var Zp;function Tx(){return Zp||(Zp=1,Nu.exports=bx()),Nu.exports}var h=Tx(),ut=df();const Cx=s0(ut);var pl={},Lu={exports:{}},Bn={},Du={exports:{}},Iu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function Ax(){return Qp||(Qp=1,(function(s){function e($,fe){var se=$.length;$.push(fe);e:for(;0<se;){var B=se-1>>>1,oe=$[B];if(0<o(oe,fe))$[B]=fe,$[se]=oe,se=B;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var fe=$[0],se=$.pop();if(se!==fe){$[0]=se;e:for(var B=0,oe=$.length,be=oe>>>1;B<be;){var je=2*(B+1)-1,We=$[je],re=je+1,de=$[re];if(0>o(We,se))re<oe&&0>o(de,We)?($[B]=de,$[re]=se,B=re):($[B]=We,$[je]=se,B=je);else if(re<oe&&0>o(de,se))$[B]=de,$[re]=se,B=re;else break e}}return fe}function o($,fe){var se=$.sortIndex-fe.sortIndex;return se!==0?se:$.id-fe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,S=!1,C=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L($){for(var fe=n(m);fe!==null;){if(fe.callback===null)r(m);else if(fe.startTime<=$)r(m),fe.sortIndex=fe.expirationTime,e(p,fe);else break;fe=n(m)}}function R($){if(N=!1,L($),!C)if(n(p)!==null)C=!0,ne(I);else{var fe=n(m);fe!==null&&K(R,fe.startTime-$)}}function I($,fe){C=!1,N&&(N=!1,_(z),z=-1),S=!0;var se=y;try{for(L(fe),v=n(p);v!==null&&(!(v.expirationTime>fe)||$&&!O());){var B=v.callback;if(typeof B=="function"){v.callback=null,y=v.priorityLevel;var oe=B(v.expirationTime<=fe);fe=s.unstable_now(),typeof oe=="function"?v.callback=oe:v===n(p)&&r(p),L(fe)}else r(p);v=n(p)}if(v!==null)var be=!0;else{var je=n(m);je!==null&&K(R,je.startTime-fe),be=!1}return be}finally{v=null,y=se,S=!1}}var U=!1,F=null,z=-1,w=5,A=-1;function O(){return!(s.unstable_now()-A<w)}function G(){if(F!==null){var $=s.unstable_now();A=$;var fe=!0;try{fe=F(!0,$)}finally{fe?H():(U=!1,F=null)}}else U=!1}var H;if(typeof T=="function")H=function(){T(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,te=Z.port2;Z.port1.onmessage=G,H=function(){te.postMessage(null)}}else H=function(){M(G,0)};function ne($){F=$,U||(U=!0,H())}function K($,fe){z=M(function(){$(s.unstable_now())},fe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){C||S||(C=!0,ne(I))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function($){switch(y){case 1:case 2:case 3:var fe=3;break;default:fe=y}var se=y;y=fe;try{return $()}finally{y=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,fe){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var se=y;y=$;try{return fe()}finally{y=se}},s.unstable_scheduleCallback=function($,fe,se){var B=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?B+se:B):se=B,$){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=se+oe,$={id:x++,callback:fe,priorityLevel:$,startTime:se,expirationTime:oe,sortIndex:-1},se>B?($.sortIndex=se,e(m,$),n(p)===null&&$===n(m)&&(N?(_(z),z=-1):N=!0,K(R,se-B))):($.sortIndex=oe,e(p,$),C||S||(C=!0,ne(I))),$},s.unstable_shouldYield=O,s.unstable_wrapCallback=function($){var fe=y;return function(){var se=y;y=fe;try{return $.apply(this,arguments)}finally{y=se}}}})(Iu)),Iu}var Jp;function Rx(){return Jp||(Jp=1,Du.exports=Ax()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Nx(){if(em)return Bn;em=1;var s=df(),e=Rx();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(t){return p.call(v,t)?!0:p.call(x,t)?!1:m.test(t)?v[t]=!0:(x[t]=!0,!1)}function S(t,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function C(t,i,a,c){if(i===null||typeof i>"u"||S(t,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function N(t,i,a,c,f,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){M[t]=new N(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];M[i]=new N(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){M[t]=new N(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){M[t]=new N(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){M[t]=new N(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){M[t]=new N(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){M[t]=new N(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){M[t]=new N(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){M[t]=new N(t,5,!1,t.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function T(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(_,T);M[i]=new N(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(_,T);M[i]=new N(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(_,T);M[i]=new N(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){M[t]=new N(t,1,!1,t.toLowerCase(),null,!1,!1)}),M.xlinkHref=new N("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){M[t]=new N(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,c){var f=M.hasOwnProperty(i)?M[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(C(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?t.setAttributeNS(c,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),$=Symbol.iterator;function fe(t){return t===null||typeof t!="object"?null:(t=$&&t[$]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,B;function oe(t){if(B===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);B=i&&i[1]||""}return`
`+B+t}var be=!1;function je(t,i){if(!t||be)return"";be=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(le){var c=le}Reflect.construct(t,[],i)}else{try{i.call()}catch(le){c=le}t.call(i.prototype)}else{try{throw Error()}catch(le){c=le}t()}}catch(le){if(le&&c&&typeof le.stack=="string"){for(var f=le.stack.split(`
`),g=c.stack.split(`
`),b=f.length-1,k=g.length-1;1<=b&&0<=k&&f[b]!==g[k];)k--;for(;1<=b&&0<=k;b--,k--)if(f[b]!==g[k]){if(b!==1||k!==1)do if(b--,k--,0>k||f[b]!==g[k]){var j=`
`+f[b].replace(" at new "," at ");return t.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",t.displayName)),j}while(1<=b&&0<=k);break}}}finally{be=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?oe(t):""}function We(t){switch(t.tag){case 5:return oe(t.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return t=je(t.type,!1),t;case 11:return t=je(t.type.render,!1),t;case 1:return t=je(t.type,!0),t;default:return""}}function re(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case U:return"Portal";case w:return"Profiler";case z:return"StrictMode";case H:return"Suspense";case Z:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case O:return(t.displayName||"Context")+".Consumer";case A:return(t._context.displayName||"Context")+".Provider";case G:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case te:return i=t.displayName||null,i!==null?i:re(t.type)||"Memo";case ne:i=t._payload,t=t._init;try{return re(t(i))}catch{}}return null}function de(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Le(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Pe(t){var i=Le(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,g=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function xt(t){t._valueTracker||(t._valueTracker=Pe(t))}function Wt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return t&&(c=Le(t)?t.checked?"true":"false":t.value),t=c,t!==a?(i.setValue(t),!0):!1}function dt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function yt(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function Rt(t,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),t._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function kt(t,i){at(t,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?zt(t,i.type,a):i.hasOwnProperty("defaultValue")&&zt(t,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function V(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function zt(t,i,a){(i!=="number"||dt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ht=Array.isArray;function vt(t,i,a,c){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&c&&(t[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Ge(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function D(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(ht(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:ve(a)}}function E(t,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),c!=null&&(t.defaultValue=""+c)}function q(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function he(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pe(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?he(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ue,Xe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,c,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(ue=ue||document.createElement("div"),ue.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ue.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function Te(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Je=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(t){Je.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),ze[i]=ze[t]})});function _e(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ze.hasOwnProperty(t)&&ze[t]?(""+i).trim():i+"px"}function Ce(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=_e(a,i[a],c);a==="float"&&(a="cssFloat"),c?t.setProperty(a,f):t[a]=f}}var Ve=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(t,i){if(i){if(Ve[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function we(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ot=null;function W(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var De=null,Me=null,Ie=null;function ye(t){if(t=Ta(t)){if(typeof De!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Ro(i),De(t.stateNode,t.type,i))}}function me(t){Me?Ie?Ie.push(t):Ie=[t]:Me=t}function Re(){if(Me){var t=Me,i=Ie;if(Ie=Me=null,ye(t),i)for(t=0;t<i.length;t++)ye(i[t])}}function rt(t,i){return t(i)}function Ut(){}var Et=!1;function Gn(t,i,a){if(Et)return t(i,a);Et=!0;try{return rt(t,i,a)}finally{Et=!1,(Me!==null||Ie!==null)&&(Ut(),Re())}}function Cn(t,i){var a=t.stateNode;if(a===null)return null;var c=Ro(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var sa=!1;if(d)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){sa=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{sa=!1}function aa(t,i,a,c,f,g,b,k,j){var le=Array.prototype.slice.call(arguments,3);try{i.apply(a,le)}catch(xe){this.onError(xe)}}var Dr=!1,Ir=null,Ur=!1,li=null,oa={onError:function(t){Dr=!0,Ir=t}};function oo(t,i,a,c,f,g,b,k,j){Dr=!1,Ir=null,aa.apply(oa,arguments)}function lo(t,i,a,c,f,g,b,k,j){if(oo.apply(this,arguments),Dr){if(Dr){var le=Ir;Dr=!1,Ir=null}else throw Error(n(198));Ur||(Ur=!0,li=le)}}function Zn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function la(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Fr(t){if(Zn(t)!==t)throw Error(n(188))}function co(t){var i=t.alternate;if(!i){if(i=Zn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,c=i;;){var f=a.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===a)return Fr(f),t;if(g===c)return Fr(f),i;g=g.sibling}throw Error(n(188))}if(a.return!==c.return)a=f,c=g;else{for(var b=!1,k=f.child;k;){if(k===a){b=!0,a=f,c=g;break}if(k===c){b=!0,c=f,a=g;break}k=k.sibling}if(!b){for(k=g.child;k;){if(k===a){b=!0,a=g,c=f;break}if(k===c){b=!0,c=g,a=f;break}k=k.sibling}if(!b)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function ca(t){return t=co(t),t!==null?uo(t):null}function uo(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=uo(t);if(i!==null)return i;t=t.sibling}return null}var fo=e.unstable_scheduleCallback,ho=e.unstable_cancelCallback,Jl=e.unstable_shouldYield,ec=e.unstable_requestPaint,Xt=e.unstable_now,P=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,ce=e.unstable_UserBlockingPriority,ae=e.unstable_NormalPriority,ee=e.unstable_LowPriority,Ne=e.unstable_IdlePriority,Oe=null,Ae=null;function qe(t){if(Ae&&typeof Ae.onCommitFiberRoot=="function")try{Ae.onCommitFiberRoot(Oe,t,void 0,(t.current.flags&128)===128)}catch{}}var Be=Math.clz32?Math.clz32:pt,nt=Math.log,Ze=Math.LN2;function pt(t){return t>>>=0,t===0?32:31-(nt(t)/Ze|0)|0}var bt=64,Bt=4194304;function Ot(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Nt(t,i){var a=t.pendingLanes;if(a===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes,b=a&268435455;if(b!==0){var k=b&~f;k!==0?c=Ot(k):(g&=b,g!==0&&(c=Ot(g)))}else b=a&~f,b!==0?c=Ot(b):g!==0&&(c=Ot(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)a=31-Be(i),f=1<<a,c|=t[a],i&=~f;return c}function Qe(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(t,i){for(var a=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,g=t.pendingLanes;0<g;){var b=31-Be(g),k=1<<b,j=f[b];j===-1?((k&a)===0||(k&c)!==0)&&(f[b]=Qe(k,i)):j<=i&&(t.expiredLanes|=k),g&=~k}}function St(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=bt;return bt<<=1,(bt&4194240)===0&&(bt=64),t}function yi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function tn(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Be(i),t[i]=a}function Or(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Be(a),g=1<<f;i[f]=0,c[f]=-1,t[f]=-1,a&=~g}}function It(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var c=31-Be(a),f=1<<c;f&i|t[c]&i&&(t[c]|=i),a&=~f}}var ct=0;function An(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ln,cn,us,Si,Nf,tc=!1,po=[],rr=null,sr=null,ar=null,ua=new Map,da=new Map,or=[],X0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(t,i){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(t,i,a,c,f,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&cn(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function q0(t,i,a,c,f){switch(i){case"focusin":return rr=fa(rr,t,i,a,c,f),!0;case"dragenter":return sr=fa(sr,t,i,a,c,f),!0;case"mouseover":return ar=fa(ar,t,i,a,c,f),!0;case"pointerover":var g=f.pointerId;return ua.set(g,fa(ua.get(g)||null,t,i,a,c,f)),!0;case"gotpointercapture":return g=f.pointerId,da.set(g,fa(da.get(g)||null,t,i,a,c,f)),!0}return!1}function Lf(t){var i=kr(t.target);if(i!==null){var a=Zn(i);if(a!==null){if(i=a.tag,i===13){if(i=la(a),i!==null){t.blockedOn=i,Nf(t.priority,function(){us(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ic(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var c=new a.constructor(a.type,a);ot=c,a.target.dispatchEvent(c),ot=null}else return i=Ta(a),i!==null&&cn(i),t.blockedOn=a,!1;i.shift()}return!0}function Df(t,i,a){mo(t)&&a.delete(i)}function $0(){tc=!1,rr!==null&&mo(rr)&&(rr=null),sr!==null&&mo(sr)&&(sr=null),ar!==null&&mo(ar)&&(ar=null),ua.forEach(Df),da.forEach(Df)}function ha(t,i){t.blockedOn===i&&(t.blockedOn=null,tc||(tc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,$0)))}function pa(t){function i(f){return ha(f,t)}if(0<po.length){ha(po[0],t);for(var a=1;a<po.length;a++){var c=po[a];c.blockedOn===t&&(c.blockedOn=null)}}for(rr!==null&&ha(rr,t),sr!==null&&ha(sr,t),ar!==null&&ha(ar,t),ua.forEach(i),da.forEach(i),a=0;a<or.length;a++)c=or[a],c.blockedOn===t&&(c.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Lf(a),a.blockedOn===null&&or.shift()}var ds=R.ReactCurrentBatchConfig,go=!0;function Y0(t,i,a,c){var f=ct,g=ds.transition;ds.transition=null;try{ct=1,nc(t,i,a,c)}finally{ct=f,ds.transition=g}}function K0(t,i,a,c){var f=ct,g=ds.transition;ds.transition=null;try{ct=4,nc(t,i,a,c)}finally{ct=f,ds.transition=g}}function nc(t,i,a,c){if(go){var f=ic(t,i,a,c);if(f===null)yc(t,i,c,xo,a),Pf(t,c);else if(q0(f,t,i,a,c))c.stopPropagation();else if(Pf(t,c),i&4&&-1<X0.indexOf(t)){for(;f!==null;){var g=Ta(f);if(g!==null&&ln(g),g=ic(t,i,a,c),g===null&&yc(t,i,c,xo,a),g===f)break;f=g}f!==null&&c.stopPropagation()}else yc(t,i,c,null,a)}}var xo=null;function ic(t,i,a,c){if(xo=null,t=W(c),t=kr(t),t!==null)if(i=Zn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=la(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return xo=t,null}function If(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P()){case Y:return 1;case ce:return 4;case ae:case ee:return 16;case Ne:return 536870912;default:return 16}default:return 16}}var lr=null,rc=null,vo=null;function Uf(){if(vo)return vo;var t,i=rc,a=i.length,c,f="value"in lr?lr.value:lr.textContent,g=f.length;for(t=0;t<a&&i[t]===f[t];t++);var b=a-t;for(c=1;c<=b&&i[a-c]===f[g-c];c++);return vo=f.slice(t,1<c?1-c:void 0)}function _o(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function yo(){return!0}function Ff(){return!1}function Hn(t){function i(a,c,f,g,b){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var k in t)t.hasOwnProperty(k)&&(a=t[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?yo:Ff,this.isPropagationStopped=Ff,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=Hn(fs),ma=se({},fs,{view:0,detail:0}),Z0=Hn(ma),ac,oc,ga,So=se({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:cc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(ac=t.screenX-ga.screenX,oc=t.screenY-ga.screenY):oc=ac=0,ga=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:oc}}),Of=Hn(So),Q0=se({},So,{dataTransfer:0}),J0=Hn(Q0),eg=se({},ma,{relatedTarget:0}),lc=Hn(eg),tg=se({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),ng=Hn(tg),ig=se({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),rg=Hn(ig),sg=se({},fs,{data:0}),kf=Hn(sg),ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=lg[t])?!!i[t]:!1}function cc(){return cg}var ug=se({},ma,{key:function(t){if(t.key){var i=ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=_o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?og[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:cc,charCode:function(t){return t.type==="keypress"?_o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),dg=Hn(ug),fg=se({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bf=Hn(fg),hg=se({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:cc}),pg=Hn(hg),mg=se({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),gg=Hn(mg),xg=se({},So,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),vg=Hn(xg),_g=[9,13,27,32],uc=d&&"CompositionEvent"in window,xa=null;d&&"documentMode"in document&&(xa=document.documentMode);var yg=d&&"TextEvent"in window&&!xa,zf=d&&(!uc||xa&&8<xa&&11>=xa),Vf=" ",jf=!1;function Gf(t,i){switch(t){case"keyup":return _g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var hs=!1;function Sg(t,i){switch(t){case"compositionend":return Hf(i);case"keypress":return i.which!==32?null:(jf=!0,Vf);case"textInput":return t=i.data,t===Vf&&jf?null:t;default:return null}}function Mg(t,i){if(hs)return t==="compositionend"||!uc&&Gf(t,i)?(t=Uf(),vo=rc=lr=null,hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return zf&&i.locale!=="ko"?null:i.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!wg[t.type]:i==="textarea"}function Xf(t,i,a,c){me(c),i=To(i,"onChange"),0<i.length&&(a=new sc("onChange","change",null,a,c),t.push({event:a,listeners:i}))}var va=null,_a=null;function Eg(t){uh(t,0)}function Mo(t){var i=vs(t);if(Wt(i))return t}function bg(t,i){if(t==="change")return i}var qf=!1;if(d){var dc;if(d){var fc="oninput"in document;if(!fc){var $f=document.createElement("div");$f.setAttribute("oninput","return;"),fc=typeof $f.oninput=="function"}dc=fc}else dc=!1;qf=dc&&(!document.documentMode||9<document.documentMode)}function Yf(){va&&(va.detachEvent("onpropertychange",Kf),_a=va=null)}function Kf(t){if(t.propertyName==="value"&&Mo(_a)){var i=[];Xf(i,_a,t,W(t)),Gn(Eg,i)}}function Tg(t,i,a){t==="focusin"?(Yf(),va=i,_a=a,va.attachEvent("onpropertychange",Kf)):t==="focusout"&&Yf()}function Cg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mo(_a)}function Ag(t,i){if(t==="click")return Mo(i)}function Rg(t,i){if(t==="input"||t==="change")return Mo(i)}function Ng(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ci=typeof Object.is=="function"?Object.is:Ng;function ya(t,i){if(ci(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!p.call(i,f)||!ci(t[f],i[f]))return!1}return!0}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qf(t,i){var a=Zf(t);t=0;for(var c;a;){if(a.nodeType===3){if(c=t+a.textContent.length,t<=i&&c>=i)return{node:a,offset:i-t};t=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Zf(a)}}function Jf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Jf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function eh(){for(var t=window,i=dt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=dt(t.document)}return i}function hc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Pg(t){var i=eh(),a=t.focusedElem,c=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Jf(a.ownerDocument.documentElement,a)){if(c!==null&&hc(a)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!t.extend&&g>c&&(f=c,c=g,g=f),f=Qf(a,g);var b=Qf(a,c);f&&b&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==b.node||t.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),g>c?(t.addRange(i),t.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Lg=d&&"documentMode"in document&&11>=document.documentMode,ps=null,pc=null,Sa=null,mc=!1;function th(t,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mc||ps==null||ps!==dt(c)||(c=ps,"selectionStart"in c&&hc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Sa&&ya(Sa,c)||(Sa=c,c=To(pc,"onSelect"),0<c.length&&(i=new sc("onSelect","select",null,i,a),t.push({event:i,listeners:c}),i.target=ps)))}function wo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ms={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},gc={},nh={};d&&(nh=document.createElement("div").style,"AnimationEvent"in window||(delete ms.animationend.animation,delete ms.animationiteration.animation,delete ms.animationstart.animation),"TransitionEvent"in window||delete ms.transitionend.transition);function Eo(t){if(gc[t])return gc[t];if(!ms[t])return t;var i=ms[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in nh)return gc[t]=i[a];return t}var ih=Eo("animationend"),rh=Eo("animationiteration"),sh=Eo("animationstart"),ah=Eo("transitionend"),oh=new Map,lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){oh.set(t,i),l(i,[t])}for(var xc=0;xc<lh.length;xc++){var vc=lh[xc],Dg=vc.toLowerCase(),Ig=vc[0].toUpperCase()+vc.slice(1);cr(Dg,"on"+Ig)}cr(ih,"onAnimationEnd"),cr(rh,"onAnimationIteration"),cr(sh,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ug=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function ch(t,i,a){var c=t.type||"unknown-event";t.currentTarget=a,lo(c,i,void 0,t),t.currentTarget=null}function uh(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var c=t[a],f=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var k=c[b],j=k.instance,le=k.currentTarget;if(k=k.listener,j!==g&&f.isPropagationStopped())break e;ch(f,k,le),g=j}else for(b=0;b<c.length;b++){if(k=c[b],j=k.instance,le=k.currentTarget,k=k.listener,j!==g&&f.isPropagationStopped())break e;ch(f,k,le),g=j}}}if(Ur)throw t=li,Ur=!1,li=null,t}function jt(t,i){var a=i[Tc];a===void 0&&(a=i[Tc]=new Set);var c=t+"__bubble";a.has(c)||(dh(i,t,2,!1),a.add(c))}function _c(t,i,a){var c=0;i&&(c|=4),dh(a,t,c,i)}var bo="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[bo]){t[bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Ug.has(a)||_c(a,!1,t),_c(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bo]||(i[bo]=!0,_c("selectionchange",!1,i))}}function dh(t,i,a,c){switch(If(i)){case 1:var f=Y0;break;case 4:f=K0;break;default:f=nc}a=f.bind(null,i,a,t),f=void 0,!sa||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function yc(t,i,a,c,f){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var k=c.stateNode.containerInfo;if(k===f||k.nodeType===8&&k.parentNode===f)break;if(b===4)for(b=c.return;b!==null;){var j=b.tag;if((j===3||j===4)&&(j=b.stateNode.containerInfo,j===f||j.nodeType===8&&j.parentNode===f))return;b=b.return}for(;k!==null;){if(b=kr(k),b===null)return;if(j=b.tag,j===5||j===6){c=g=b;continue e}k=k.parentNode}}c=c.return}Gn(function(){var le=g,xe=W(a),Se=[];e:{var ge=oh.get(t);if(ge!==void 0){var ke=sc,$e=t;switch(t){case"keypress":if(_o(a)===0)break e;case"keydown":case"keyup":ke=dg;break;case"focusin":$e="focus",ke=lc;break;case"focusout":$e="blur",ke=lc;break;case"beforeblur":case"afterblur":ke=lc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Of;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=J0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=pg;break;case ih:case rh:case sh:ke=ng;break;case ah:ke=gg;break;case"scroll":ke=Z0;break;case"wheel":ke=vg;break;case"copy":case"cut":case"paste":ke=rg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Bf}var Ye=(i&4)!==0,Qt=!Ye&&t==="scroll",Q=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var X=le,ie;X!==null;){ie=X;var Ee=ie.stateNode;if(ie.tag===5&&Ee!==null&&(ie=Ee,Q!==null&&(Ee=Cn(X,Q),Ee!=null&&Ye.push(Ea(X,Ee,ie)))),Qt)break;X=X.return}0<Ye.length&&(ge=new ke(ge,$e,null,a,xe),Se.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",ge&&a!==ot&&($e=a.relatedTarget||a.fromElement)&&(kr($e)||$e[Fi]))break e;if((ke||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,ke?($e=a.relatedTarget||a.toElement,ke=le,$e=$e?kr($e):null,$e!==null&&(Qt=Zn($e),$e!==Qt||$e.tag!==5&&$e.tag!==6)&&($e=null)):(ke=null,$e=le),ke!==$e)){if(Ye=Of,Ee="onMouseLeave",Q="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=Bf,Ee="onPointerLeave",Q="onPointerEnter",X="pointer"),Qt=ke==null?ge:vs(ke),ie=$e==null?ge:vs($e),ge=new Ye(Ee,X+"leave",ke,a,xe),ge.target=Qt,ge.relatedTarget=ie,Ee=null,kr(xe)===le&&(Ye=new Ye(Q,X+"enter",$e,a,xe),Ye.target=ie,Ye.relatedTarget=Qt,Ee=Ye),Qt=Ee,ke&&$e)t:{for(Ye=ke,Q=$e,X=0,ie=Ye;ie;ie=gs(ie))X++;for(ie=0,Ee=Q;Ee;Ee=gs(Ee))ie++;for(;0<X-ie;)Ye=gs(Ye),X--;for(;0<ie-X;)Q=gs(Q),ie--;for(;X--;){if(Ye===Q||Q!==null&&Ye===Q.alternate)break t;Ye=gs(Ye),Q=gs(Q)}Ye=null}else Ye=null;ke!==null&&fh(Se,ge,ke,Ye,!1),$e!==null&&Qt!==null&&fh(Se,Qt,$e,Ye,!0)}}e:{if(ge=le?vs(le):window,ke=ge.nodeName&&ge.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ge.type==="file")var Ke=bg;else if(Wf(ge))if(qf)Ke=Rg;else{Ke=Cg;var et=Tg}else(ke=ge.nodeName)&&ke.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Ke=Ag);if(Ke&&(Ke=Ke(t,le))){Xf(Se,Ke,a,xe);break e}et&&et(t,ge,le),t==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&zt(ge,"number",ge.value)}switch(et=le?vs(le):window,t){case"focusin":(Wf(et)||et.contentEditable==="true")&&(ps=et,pc=le,Sa=null);break;case"focusout":Sa=pc=ps=null;break;case"mousedown":mc=!0;break;case"contextmenu":case"mouseup":case"dragend":mc=!1,th(Se,a,xe);break;case"selectionchange":if(Lg)break;case"keydown":case"keyup":th(Se,a,xe)}var tt;if(uc)e:{switch(t){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else hs?Gf(t,a)&&(st="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(zf&&a.locale!=="ko"&&(hs||st!=="onCompositionStart"?st==="onCompositionEnd"&&hs&&(tt=Uf()):(lr=xe,rc="value"in lr?lr.value:lr.textContent,hs=!0)),et=To(le,st),0<et.length&&(st=new kf(st,t,null,a,xe),Se.push({event:st,listeners:et}),tt?st.data=tt:(tt=Hf(a),tt!==null&&(st.data=tt)))),(tt=yg?Sg(t,a):Mg(t,a))&&(le=To(le,"onBeforeInput"),0<le.length&&(xe=new kf("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:le}),xe.data=tt))}uh(Se,i)})}function Ea(t,i,a){return{instance:t,listener:i,currentTarget:a}}function To(t,i){for(var a=i+"Capture",c=[];t!==null;){var f=t,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Cn(t,a),g!=null&&c.unshift(Ea(t,g,f)),g=Cn(t,i),g!=null&&c.push(Ea(t,g,f))),t=t.return}return c}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fh(t,i,a,c,f){for(var g=i._reactName,b=[];a!==null&&a!==c;){var k=a,j=k.alternate,le=k.stateNode;if(j!==null&&j===c)break;k.tag===5&&le!==null&&(k=le,f?(j=Cn(a,g),j!=null&&b.unshift(Ea(a,j,k))):f||(j=Cn(a,g),j!=null&&b.push(Ea(a,j,k)))),a=a.return}b.length!==0&&t.push({event:i,listeners:b})}var Fg=/\r\n?/g,Og=/\u0000|\uFFFD/g;function hh(t){return(typeof t=="string"?t:""+t).replace(Fg,`
`).replace(Og,"")}function Co(t,i,a){if(i=hh(i),hh(t)!==i&&a)throw Error(n(425))}function Ao(){}var Sc=null,Mc=null;function wc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,kg=typeof clearTimeout=="function"?clearTimeout:void 0,ph=typeof Promise=="function"?Promise:void 0,Bg=typeof queueMicrotask=="function"?queueMicrotask:typeof ph<"u"?function(t){return ph.resolve(null).then(t).catch(zg)}:Ec;function zg(t){setTimeout(function(){throw t})}function bc(t,i){var a=i,c=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){t.removeChild(f),pa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);pa(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function mh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+xs,ba="__reactProps$"+xs,Fi="__reactContainer$"+xs,Tc="__reactEvents$"+xs,Vg="__reactListeners$"+xs,jg="__reactHandles$"+xs;function kr(t){var i=t[Mi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Fi]||a[Mi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=mh(t);t!==null;){if(a=t[Mi])return a;t=mh(t)}return i}t=a,a=t.parentNode}return null}function Ta(t){return t=t[Mi]||t[Fi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Ro(t){return t[ba]||null}var Cc=[],_s=-1;function dr(t){return{current:t}}function Gt(t){0>_s||(t.current=Cc[_s],Cc[_s]=null,_s--)}function Vt(t,i){_s++,Cc[_s]=t.current,t.current=i}var fr={},_n=dr(fr),In=dr(!1),Br=fr;function ys(t,i){var a=t.type.contextTypes;if(!a)return fr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in a)f[g]=i[g];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Un(t){return t=t.childContextTypes,t!=null}function No(){Gt(In),Gt(_n)}function gh(t,i,a){if(_n.current!==fr)throw Error(n(168));Vt(_n,i),Vt(In,a)}function xh(t,i,a){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,de(t)||"Unknown",f));return se({},a,c)}function Po(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||fr,Br=_n.current,Vt(_n,t),Vt(In,In.current),!0}function vh(t,i,a){var c=t.stateNode;if(!c)throw Error(n(169));a?(t=xh(t,i,Br),c.__reactInternalMemoizedMergedChildContext=t,Gt(In),Gt(_n),Vt(_n,t)):Gt(In),Vt(In,a)}var Oi=null,Lo=!1,Ac=!1;function _h(t){Oi===null?Oi=[t]:Oi.push(t)}function Gg(t){Lo=!0,_h(t)}function hr(){if(!Ac&&Oi!==null){Ac=!0;var t=0,i=ct;try{var a=Oi;for(ct=1;t<a.length;t++){var c=a[t];do c=c(!0);while(c!==null)}Oi=null,Lo=!1}catch(f){throw Oi!==null&&(Oi=Oi.slice(t+1)),fo(Y,hr),f}finally{ct=i,Ac=!1}}return null}var Ss=[],Ms=0,Do=null,Io=0,Qn=[],Jn=0,zr=null,ki=1,Bi="";function Vr(t,i){Ss[Ms++]=Io,Ss[Ms++]=Do,Do=t,Io=i}function yh(t,i,a){Qn[Jn++]=ki,Qn[Jn++]=Bi,Qn[Jn++]=zr,zr=t;var c=ki;t=Bi;var f=32-Be(c)-1;c&=~(1<<f),a+=1;var g=32-Be(i)+f;if(30<g){var b=f-f%5;g=(c&(1<<b)-1).toString(32),c>>=b,f-=b,ki=1<<32-Be(i)+f|a<<f|c,Bi=g+t}else ki=1<<g|a<<f|c,Bi=t}function Rc(t){t.return!==null&&(Vr(t,1),yh(t,1,0))}function Nc(t){for(;t===Do;)Do=Ss[--Ms],Ss[Ms]=null,Io=Ss[--Ms],Ss[Ms]=null;for(;t===zr;)zr=Qn[--Jn],Qn[Jn]=null,Bi=Qn[--Jn],Qn[Jn]=null,ki=Qn[--Jn],Qn[Jn]=null}var Wn=null,Xn=null,Ht=!1,ui=null;function Sh(t,i){var a=ii(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function Mh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Wn=t,Xn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=zr!==null?{id:ki,overflow:Bi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ii(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Wn=t,Xn=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lc(t){if(Ht){var i=Xn;if(i){var a=i;if(!Mh(t,i)){if(Pc(t))throw Error(n(418));i=ur(a.nextSibling);var c=Wn;i&&Mh(t,i)?Sh(c,a):(t.flags=t.flags&-4097|2,Ht=!1,Wn=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Ht=!1,Wn=t}}}function wh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Wn=t}function Uo(t){if(t!==Wn)return!1;if(!Ht)return wh(t),Ht=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!wc(t.type,t.memoizedProps)),i&&(i=Xn)){if(Pc(t))throw Eh(),Error(n(418));for(;i;)Sh(t,i),i=ur(i.nextSibling)}if(wh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Xn=ur(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Xn=null}}else Xn=Wn?ur(t.stateNode.nextSibling):null;return!0}function Eh(){for(var t=Xn;t;)t=ur(t.nextSibling)}function ws(){Xn=Wn=null,Ht=!1}function Dc(t){ui===null?ui=[t]:ui.push(t)}var Hg=R.ReactCurrentBatchConfig;function Ca(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,t));var f=c,g=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var k=f.refs;b===null?delete k[g]:k[g]=b},i._stringRef=g,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Fo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function bh(t){var i=t._init;return i(t._payload)}function Th(t){function i(Q,X){if(t){var ie=Q.deletions;ie===null?(Q.deletions=[X],Q.flags|=16):ie.push(X)}}function a(Q,X){if(!t)return null;for(;X!==null;)i(Q,X),X=X.sibling;return null}function c(Q,X){for(Q=new Map;X!==null;)X.key!==null?Q.set(X.key,X):Q.set(X.index,X),X=X.sibling;return Q}function f(Q,X){return Q=Sr(Q,X),Q.index=0,Q.sibling=null,Q}function g(Q,X,ie){return Q.index=ie,t?(ie=Q.alternate,ie!==null?(ie=ie.index,ie<X?(Q.flags|=2,X):ie):(Q.flags|=2,X)):(Q.flags|=1048576,X)}function b(Q){return t&&Q.alternate===null&&(Q.flags|=2),Q}function k(Q,X,ie,Ee){return X===null||X.tag!==6?(X=Eu(ie,Q.mode,Ee),X.return=Q,X):(X=f(X,ie),X.return=Q,X)}function j(Q,X,ie,Ee){var Ke=ie.type;return Ke===F?xe(Q,X,ie.props.children,Ee,ie.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&bh(Ke)===X.type)?(Ee=f(X,ie.props),Ee.ref=Ca(Q,X,ie),Ee.return=Q,Ee):(Ee=al(ie.type,ie.key,ie.props,null,Q.mode,Ee),Ee.ref=Ca(Q,X,ie),Ee.return=Q,Ee)}function le(Q,X,ie,Ee){return X===null||X.tag!==4||X.stateNode.containerInfo!==ie.containerInfo||X.stateNode.implementation!==ie.implementation?(X=bu(ie,Q.mode,Ee),X.return=Q,X):(X=f(X,ie.children||[]),X.return=Q,X)}function xe(Q,X,ie,Ee,Ke){return X===null||X.tag!==7?(X=Yr(ie,Q.mode,Ee,Ke),X.return=Q,X):(X=f(X,ie),X.return=Q,X)}function Se(Q,X,ie){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Eu(""+X,Q.mode,ie),X.return=Q,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case I:return ie=al(X.type,X.key,X.props,null,Q.mode,ie),ie.ref=Ca(Q,null,X),ie.return=Q,ie;case U:return X=bu(X,Q.mode,ie),X.return=Q,X;case ne:var Ee=X._init;return Se(Q,Ee(X._payload),ie)}if(ht(X)||fe(X))return X=Yr(X,Q.mode,ie,null),X.return=Q,X;Fo(Q,X)}return null}function ge(Q,X,ie,Ee){var Ke=X!==null?X.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:k(Q,X,""+ie,Ee);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===Ke?j(Q,X,ie,Ee):null;case U:return ie.key===Ke?le(Q,X,ie,Ee):null;case ne:return Ke=ie._init,ge(Q,X,Ke(ie._payload),Ee)}if(ht(ie)||fe(ie))return Ke!==null?null:xe(Q,X,ie,Ee,null);Fo(Q,ie)}return null}function ke(Q,X,ie,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Q=Q.get(ie)||null,k(X,Q,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case I:return Q=Q.get(Ee.key===null?ie:Ee.key)||null,j(X,Q,Ee,Ke);case U:return Q=Q.get(Ee.key===null?ie:Ee.key)||null,le(X,Q,Ee,Ke);case ne:var et=Ee._init;return ke(Q,X,ie,et(Ee._payload),Ke)}if(ht(Ee)||fe(Ee))return Q=Q.get(ie)||null,xe(X,Q,Ee,Ke,null);Fo(X,Ee)}return null}function $e(Q,X,ie,Ee){for(var Ke=null,et=null,tt=X,st=X=0,fn=null;tt!==null&&st<ie.length;st++){tt.index>st?(fn=tt,tt=null):fn=tt.sibling;var Pt=ge(Q,tt,ie[st],Ee);if(Pt===null){tt===null&&(tt=fn);break}t&&tt&&Pt.alternate===null&&i(Q,tt),X=g(Pt,X,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt,tt=fn}if(st===ie.length)return a(Q,tt),Ht&&Vr(Q,st),Ke;if(tt===null){for(;st<ie.length;st++)tt=Se(Q,ie[st],Ee),tt!==null&&(X=g(tt,X,st),et===null?Ke=tt:et.sibling=tt,et=tt);return Ht&&Vr(Q,st),Ke}for(tt=c(Q,tt);st<ie.length;st++)fn=ke(tt,Q,st,ie[st],Ee),fn!==null&&(t&&fn.alternate!==null&&tt.delete(fn.key===null?st:fn.key),X=g(fn,X,st),et===null?Ke=fn:et.sibling=fn,et=fn);return t&&tt.forEach(function(Mr){return i(Q,Mr)}),Ht&&Vr(Q,st),Ke}function Ye(Q,X,ie,Ee){var Ke=fe(ie);if(typeof Ke!="function")throw Error(n(150));if(ie=Ke.call(ie),ie==null)throw Error(n(151));for(var et=Ke=null,tt=X,st=X=0,fn=null,Pt=ie.next();tt!==null&&!Pt.done;st++,Pt=ie.next()){tt.index>st?(fn=tt,tt=null):fn=tt.sibling;var Mr=ge(Q,tt,Pt.value,Ee);if(Mr===null){tt===null&&(tt=fn);break}t&&tt&&Mr.alternate===null&&i(Q,tt),X=g(Mr,X,st),et===null?Ke=Mr:et.sibling=Mr,et=Mr,tt=fn}if(Pt.done)return a(Q,tt),Ht&&Vr(Q,st),Ke;if(tt===null){for(;!Pt.done;st++,Pt=ie.next())Pt=Se(Q,Pt.value,Ee),Pt!==null&&(X=g(Pt,X,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt);return Ht&&Vr(Q,st),Ke}for(tt=c(Q,tt);!Pt.done;st++,Pt=ie.next())Pt=ke(tt,Q,st,Pt.value,Ee),Pt!==null&&(t&&Pt.alternate!==null&&tt.delete(Pt.key===null?st:Pt.key),X=g(Pt,X,st),et===null?Ke=Pt:et.sibling=Pt,et=Pt);return t&&tt.forEach(function(wx){return i(Q,wx)}),Ht&&Vr(Q,st),Ke}function Qt(Q,X,ie,Ee){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var Ke=ie.key,et=X;et!==null;){if(et.key===Ke){if(Ke=ie.type,Ke===F){if(et.tag===7){a(Q,et.sibling),X=f(et,ie.props.children),X.return=Q,Q=X;break e}}else if(et.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&bh(Ke)===et.type){a(Q,et.sibling),X=f(et,ie.props),X.ref=Ca(Q,et,ie),X.return=Q,Q=X;break e}a(Q,et);break}else i(Q,et);et=et.sibling}ie.type===F?(X=Yr(ie.props.children,Q.mode,Ee,ie.key),X.return=Q,Q=X):(Ee=al(ie.type,ie.key,ie.props,null,Q.mode,Ee),Ee.ref=Ca(Q,X,ie),Ee.return=Q,Q=Ee)}return b(Q);case U:e:{for(et=ie.key;X!==null;){if(X.key===et)if(X.tag===4&&X.stateNode.containerInfo===ie.containerInfo&&X.stateNode.implementation===ie.implementation){a(Q,X.sibling),X=f(X,ie.children||[]),X.return=Q,Q=X;break e}else{a(Q,X);break}else i(Q,X);X=X.sibling}X=bu(ie,Q.mode,Ee),X.return=Q,Q=X}return b(Q);case ne:return et=ie._init,Qt(Q,X,et(ie._payload),Ee)}if(ht(ie))return $e(Q,X,ie,Ee);if(fe(ie))return Ye(Q,X,ie,Ee);Fo(Q,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,X!==null&&X.tag===6?(a(Q,X.sibling),X=f(X,ie),X.return=Q,Q=X):(a(Q,X),X=Eu(ie,Q.mode,Ee),X.return=Q,Q=X),b(Q)):a(Q,X)}return Qt}var Es=Th(!0),Ch=Th(!1),Oo=dr(null),ko=null,bs=null,Ic=null;function Uc(){Ic=bs=ko=null}function Fc(t){var i=Oo.current;Gt(Oo),t._currentValue=i}function Oc(t,i,a){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===a)break;t=t.return}}function Ts(t,i){ko=t,Ic=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Fn=!0),t.firstContext=null)}function ei(t){var i=t._currentValue;if(Ic!==t)if(t={context:t,memoizedValue:i,next:null},bs===null){if(ko===null)throw Error(n(308));bs=t,ko.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return i}var jr=null;function kc(t){jr===null?jr=[t]:jr.push(t)}function Ah(t,i,a,c){var f=i.interleaved;return f===null?(a.next=a,kc(i)):(a.next=f.next,f.next=a),i.interleaved=a,zi(t,c)}function zi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var pr=!1;function Bc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,a){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,zi(t,a)}return f=c.interleaved,f===null?(i.next=i,kc(c)):(i.next=f.next,f.next=i),c.interleaved=i,zi(t,a)}function Bo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,It(t,a)}}function Nh(t,i){var a=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?f=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?f=g=i:g=g.next=i}else f=g=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function zo(t,i,a,c){var f=t.updateQueue;pr=!1;var g=f.firstBaseUpdate,b=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var j=k,le=j.next;j.next=null,b===null?g=le:b.next=le,b=j;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,k=xe.lastBaseUpdate,k!==b&&(k===null?xe.firstBaseUpdate=le:k.next=le,xe.lastBaseUpdate=j))}if(g!==null){var Se=f.baseState;b=0,xe=le=j=null,k=g;do{var ge=k.lane,ke=k.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var $e=t,Ye=k;switch(ge=i,ke=a,Ye.tag){case 1:if($e=Ye.payload,typeof $e=="function"){Se=$e.call(ke,Se,ge);break e}Se=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ye.payload,ge=typeof $e=="function"?$e.call(ke,Se,ge):$e,ge==null)break e;Se=se({},Se,ge);break e;case 2:pr=!0}}k.callback!==null&&k.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[k]:ge.push(k))}else ke={eventTime:ke,lane:ge,tag:k.tag,payload:k.payload,callback:k.callback,next:null},xe===null?(le=xe=ke,j=Se):xe=xe.next=ke,b|=ge;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;ge=k,k=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(xe===null&&(j=Se),f.baseState=j,f.firstBaseUpdate=le,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do b|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);Wr|=b,t.lanes=b,t.memoizedState=Se}}function Ph(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var Aa={},wi=dr(Aa),Ra=dr(Aa),Na=dr(Aa);function Gr(t){if(t===Aa)throw Error(n(174));return t}function zc(t,i){switch(Vt(Na,i),Vt(Ra,t),Vt(wi,Aa),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pe(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pe(i,t)}Gt(wi),Vt(wi,i)}function Cs(){Gt(wi),Gt(Ra),Gt(Na)}function Lh(t){Gr(Na.current);var i=Gr(wi.current),a=pe(i,t.type);i!==a&&(Vt(Ra,t),Vt(wi,a))}function Vc(t){Ra.current===t&&(Gt(wi),Gt(Ra))}var qt=dr(0);function Vo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var jc=[];function Gc(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var jo=R.ReactCurrentDispatcher,Hc=R.ReactCurrentBatchConfig,Hr=0,$t=null,nn=null,un=null,Go=!1,Pa=!1,La=0,Wg=0;function yn(){throw Error(n(321))}function Wc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ci(t[a],i[a]))return!1;return!0}function Xc(t,i,a,c,f,g){if(Hr=g,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,jo.current=t===null||t.memoizedState===null?Yg:Kg,t=a(c,f),Pa){g=0;do{if(Pa=!1,La=0,25<=g)throw Error(n(301));g+=1,un=nn=null,i.updateQueue=null,jo.current=Zg,t=a(c,f)}while(Pa)}if(jo.current=Xo,i=nn!==null&&nn.next!==null,Hr=0,un=nn=$t=null,Go=!1,i)throw Error(n(300));return t}function qc(){var t=La!==0;return La=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?$t.memoizedState=un=t:un=un.next=t,un}function ti(){if(nn===null){var t=$t.alternate;t=t!==null?t.memoizedState:null}else t=nn.next;var i=un===null?$t.memoizedState:un.next;if(i!==null)un=i,nn=t;else{if(t===null)throw Error(n(310));nn=t,t={memoizedState:nn.memoizedState,baseState:nn.baseState,baseQueue:nn.baseQueue,queue:nn.queue,next:null},un===null?$t.memoizedState=un=t:un=un.next=t}return un}function Da(t,i){return typeof i=="function"?i(t):i}function $c(t){var i=ti(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=nn,f=c.baseQueue,g=a.pending;if(g!==null){if(f!==null){var b=f.next;f.next=g.next,g.next=b}c.baseQueue=f=g,a.pending=null}if(f!==null){g=f.next,c=c.baseState;var k=b=null,j=null,le=g;do{var xe=le.lane;if((Hr&xe)===xe)j!==null&&(j=j.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),c=le.hasEagerState?le.eagerState:t(c,le.action);else{var Se={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};j===null?(k=j=Se,b=c):j=j.next=Se,$t.lanes|=xe,Wr|=xe}le=le.next}while(le!==null&&le!==g);j===null?b=c:j.next=k,ci(c,i.memoizedState)||(Fn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=j,a.lastRenderedState=c}if(t=a.interleaved,t!==null){f=t;do g=f.lane,$t.lanes|=g,Wr|=g,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yc(t){var i=ti(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var c=a.dispatch,f=a.pending,g=i.memoizedState;if(f!==null){a.pending=null;var b=f=f.next;do g=t(g,b.action),b=b.next;while(b!==f);ci(g,i.memoizedState)||(Fn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Dh(){}function Ih(t,i){var a=$t,c=ti(),f=i(),g=!ci(c.memoizedState,f);if(g&&(c.memoizedState=f,Fn=!0),c=c.queue,Kc(Oh.bind(null,a,c,t),[t]),c.getSnapshot!==i||g||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,Ia(9,Fh.bind(null,a,c,f,i),void 0,null),dn===null)throw Error(n(349));(Hr&30)!==0||Uh(a,i,f)}return f}function Uh(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Fh(t,i,a,c){i.value=a,i.getSnapshot=c,kh(i)&&Bh(t)}function Oh(t,i,a){return a(function(){kh(i)&&Bh(t)})}function kh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ci(t,a)}catch{return!0}}function Bh(t){var i=zi(t,1);i!==null&&pi(i,t,1,-1)}function zh(t){var i=Ei();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},i.queue=t,t=t.dispatch=$g.bind(null,$t,t),[i.memoizedState,t]}function Ia(t,i,a,c){return t={tag:t,create:i,destroy:a,deps:c,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(c=a.next,a.next=t,t.next=c,i.lastEffect=t)),t}function Vh(){return ti().memoizedState}function Ho(t,i,a,c){var f=Ei();$t.flags|=t,f.memoizedState=Ia(1|i,a,void 0,c===void 0?null:c)}function Wo(t,i,a,c){var f=ti();c=c===void 0?null:c;var g=void 0;if(nn!==null){var b=nn.memoizedState;if(g=b.destroy,c!==null&&Wc(c,b.deps)){f.memoizedState=Ia(i,a,g,c);return}}$t.flags|=t,f.memoizedState=Ia(1|i,a,g,c)}function jh(t,i){return Ho(8390656,8,t,i)}function Kc(t,i){return Wo(2048,8,t,i)}function Gh(t,i){return Wo(4,2,t,i)}function Hh(t,i){return Wo(4,4,t,i)}function Wh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Xh(t,i,a){return a=a!=null?a.concat([t]):null,Wo(4,4,Wh.bind(null,i,t),a)}function Zc(){}function qh(t,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(a.memoizedState=[t,i],t)}function $h(t,i){var a=ti();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Wc(i,c[1])?c[0]:(t=t(),a.memoizedState=[t,i],t)}function Yh(t,i,a){return(Hr&21)===0?(t.baseState&&(t.baseState=!1,Fn=!0),t.memoizedState=a):(ci(a,i)||(a=vn(),$t.lanes|=a,Wr|=a,t.baseState=!0),i)}function Xg(t,i){var a=ct;ct=a!==0&&4>a?a:4,t(!0);var c=Hc.transition;Hc.transition={};try{t(!1),i()}finally{ct=a,Hc.transition=c}}function Kh(){return ti().memoizedState}function qg(t,i,a){var c=_r(t);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Zh(t))Qh(i,a);else if(a=Ah(t,i,a,c),a!==null){var f=Nn();pi(a,t,c,f),Jh(a,i,c)}}function $g(t,i,a){var c=_r(t),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Zh(t))Qh(i,f);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,k=g(b,a);if(f.hasEagerState=!0,f.eagerState=k,ci(k,b)){var j=i.interleaved;j===null?(f.next=f,kc(i)):(f.next=j.next,j.next=f),i.interleaved=f;return}}catch{}finally{}a=Ah(t,i,f,c),a!==null&&(f=Nn(),pi(a,t,c,f),Jh(a,i,c))}}function Zh(t){var i=t.alternate;return t===$t||i!==null&&i===$t}function Qh(t,i){Pa=Go=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Jh(t,i,a){if((a&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,a|=c,i.lanes=a,It(t,a)}}var Xo={readContext:ei,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},Yg={readContext:ei,useCallback:function(t,i){return Ei().memoizedState=[t,i===void 0?null:i],t},useContext:ei,useEffect:jh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,Wh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ho(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ho(4,2,t,i)},useMemo:function(t,i){var a=Ei();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var c=Ei();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=qg.bind(null,$t,t),[c.memoizedState,t]},useRef:function(t){var i=Ei();return t={current:t},i.memoizedState=t},useState:zh,useDebugValue:Zc,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=zh(!1),i=t[0];return t=Xg.bind(null,t[1]),Ei().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var c=$t,f=Ei();if(Ht){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),dn===null)throw Error(n(349));(Hr&30)!==0||Uh(c,i,a)}f.memoizedState=a;var g={value:a,getSnapshot:i};return f.queue=g,jh(Oh.bind(null,c,g,t),[t]),c.flags|=2048,Ia(9,Fh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var t=Ei(),i=dn.identifierPrefix;if(Ht){var a=Bi,c=ki;a=(c&~(1<<32-Be(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Wg++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Kg={readContext:ei,useCallback:qh,useContext:ei,useEffect:Kc,useImperativeHandle:Xh,useInsertionEffect:Gh,useLayoutEffect:Hh,useMemo:$h,useReducer:$c,useRef:Vh,useState:function(){return $c(Da)},useDebugValue:Zc,useDeferredValue:function(t){var i=ti();return Yh(i,nn.memoizedState,t)},useTransition:function(){var t=$c(Da)[0],i=ti().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1},Zg={readContext:ei,useCallback:qh,useContext:ei,useEffect:Kc,useImperativeHandle:Xh,useInsertionEffect:Gh,useLayoutEffect:Hh,useMemo:$h,useReducer:Yc,useRef:Vh,useState:function(){return Yc(Da)},useDebugValue:Zc,useDeferredValue:function(t){var i=ti();return nn===null?i.memoizedState=t:Yh(i,nn.memoizedState,t)},useTransition:function(){var t=Yc(Da)[0],i=ti().memoizedState;return[t,i]},useMutableSource:Dh,useSyncExternalStore:Ih,useId:Kh,unstable_isNewReconciler:!1};function di(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Qc(t,i,a,c){i=t.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var qo={isMounted:function(t){return(t=t._reactInternals)?Zn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var c=Nn(),f=_r(t),g=Vi(c,f);g.payload=i,a!=null&&(g.callback=a),i=mr(t,g,f),i!==null&&(pi(i,t,f,c),Bo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var c=Nn(),f=_r(t),g=Vi(c,f);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=mr(t,g,f),i!==null&&(pi(i,t,f,c),Bo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Nn(),c=_r(t),f=Vi(a,c);f.tag=2,i!=null&&(f.callback=i),i=mr(t,f,c),i!==null&&(pi(i,t,c,a),Bo(i,t,c))}};function ep(t,i,a,c,f,g,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!ya(a,c)||!ya(f,g):!0}function tp(t,i,a){var c=!1,f=fr,g=i.contextType;return typeof g=="object"&&g!==null?g=ei(g):(f=Un(i)?Br:_n.current,c=i.contextTypes,g=(c=c!=null)?ys(t,f):fr),i=new i(a,g),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=qo,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=g),i}function np(t,i,a,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==t&&qo.enqueueReplaceState(i,i.state,null)}function Jc(t,i,a,c){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},Bc(t);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ei(g):(g=Un(i)?Br:_n.current,f.context=ys(t,g)),f.state=t.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Qc(t,i,g,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&qo.enqueueReplaceState(f,f.state,null),zo(t,a,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var a="",c=i;do a+=We(c),c=c.return;while(c);var f=a}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:t,source:i,stack:f,digest:null}}function eu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function tu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function ip(t,i,a){a=Vi(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){el||(el=!0,gu=c),tu(t,i)},a}function rp(t,i,a){a=Vi(-1,a),a.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){tu(t,i)}}var g=t.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){tu(t,i),typeof c!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function sp(t,i,a){var c=t.pingCache;if(c===null){c=t.pingCache=new Qg;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),t=fx.bind(null,t,i,a),i.then(t,t))}function ap(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function op(t,i,a,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Vi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var Jg=R.ReactCurrentOwner,Fn=!1;function Rn(t,i,a,c){i.child=t===null?Ch(i,null,a,c):Es(i,t.child,a,c)}function lp(t,i,a,c,f){a=a.render;var g=i.ref;return Ts(i,f),c=Xc(t,i,a,c,g,f),a=qc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(Ht&&a&&Rc(i),i.flags|=1,Rn(t,i,c,f),i.child)}function cp(t,i,a,c,f){if(t===null){var g=a.type;return typeof g=="function"&&!wu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,up(t,i,g,c,f)):(t=al(a.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,(t.lanes&f)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(b,c)&&t.ref===i.ref)return ji(t,i,f)}return i.flags|=1,t=Sr(g,c),t.ref=i.ref,t.return=i,i.child=t}function up(t,i,a,c,f){if(t!==null){var g=t.memoizedProps;if(ya(g,c)&&t.ref===i.ref)if(Fn=!1,i.pendingProps=c=g,(t.lanes&f)!==0)(t.flags&131072)!==0&&(Fn=!0);else return i.lanes=t.lanes,ji(t,i,f)}return nu(t,i,a,c,f)}function dp(t,i,a){var c=i.pendingProps,f=c.children,g=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ns,qn),qn|=a;else{if((a&1073741824)===0)return t=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Ns,qn),qn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Vt(Ns,qn),qn|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Vt(Ns,qn),qn|=c;return Rn(t,i,f,a),i.child}function fp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function nu(t,i,a,c,f){var g=Un(a)?Br:_n.current;return g=ys(i,g),Ts(i,f),a=Xc(t,i,a,c,g,f),c=qc(),t!==null&&!Fn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,ji(t,i,f)):(Ht&&c&&Rc(i),i.flags|=1,Rn(t,i,a,f),i.child)}function hp(t,i,a,c,f){if(Un(a)){var g=!0;Po(i)}else g=!1;if(Ts(i,f),i.stateNode===null)Yo(t,i),tp(i,a,c),Jc(i,a,c,f),c=!0;else if(t===null){var b=i.stateNode,k=i.memoizedProps;b.props=k;var j=b.context,le=a.contextType;typeof le=="object"&&le!==null?le=ei(le):(le=Un(a)?Br:_n.current,le=ys(i,le));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==c||j!==le)&&np(i,b,c,le),pr=!1;var ge=i.memoizedState;b.state=ge,zo(i,c,b,f),j=i.memoizedState,k!==c||ge!==j||In.current||pr?(typeof xe=="function"&&(Qc(i,a,xe,c),j=i.memoizedState),(k=pr||ep(i,a,k,c,ge,j,le))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=j),b.props=c,b.state=j,b.context=le,c=k):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Rh(t,i),k=i.memoizedProps,le=i.type===i.elementType?k:di(i.type,k),b.props=le,Se=i.pendingProps,ge=b.context,j=a.contextType,typeof j=="object"&&j!==null?j=ei(j):(j=Un(a)?Br:_n.current,j=ys(i,j));var ke=a.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(k!==Se||ge!==j)&&np(i,b,c,j),pr=!1,ge=i.memoizedState,b.state=ge,zo(i,c,b,f);var $e=i.memoizedState;k!==Se||ge!==$e||In.current||pr?(typeof ke=="function"&&(Qc(i,a,ke,c),$e=i.memoizedState),(le=pr||ep(i,a,le,c,ge,$e,j)||!1)?(xe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,$e,j),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,$e,j)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||k===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=$e),b.props=c,b.state=$e,b.context=j,c=le):(typeof b.componentDidUpdate!="function"||k===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||k===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),c=!1)}return iu(t,i,a,c,g,f)}function iu(t,i,a,c,f,g){fp(t,i);var b=(i.flags&128)!==0;if(!c&&!b)return f&&vh(i,a,!1),ji(t,i,g);c=i.stateNode,Jg.current=i;var k=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&b?(i.child=Es(i,t.child,null,g),i.child=Es(i,null,k,g)):Rn(t,i,k,g),i.memoizedState=c.state,f&&vh(i,a,!0),i.child}function pp(t){var i=t.stateNode;i.pendingContext?gh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&gh(t,i.context,!1),zc(t,i.containerInfo)}function mp(t,i,a,c,f){return ws(),Dc(f),i.flags|=256,Rn(t,i,a,c),i.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(t){return{baseLanes:t,cachePool:null,transitions:null}}function gp(t,i,a){var c=i.pendingProps,f=qt.current,g=!1,b=(i.flags&128)!==0,k;if((k=b)||(k=t!==null&&t.memoizedState===null?!1:(f&2)!==0),k?(g=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Vt(qt,f&1),t===null)return Lc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,t=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=ol(b,c,0,null),t=Yr(t,c,a,null),g.return=i,t.return=i,g.sibling=t,i.child=g,i.child.memoizedState=su(a),i.memoizedState=ru,t):au(i,b));if(f=t.memoizedState,f!==null&&(k=f.dehydrated,k!==null))return ex(t,i,b,c,k,f,a);if(g){g=c.fallback,b=i.mode,f=t.child,k=f.sibling;var j={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=j,i.deletions=null):(c=Sr(f,j),c.subtreeFlags=f.subtreeFlags&14680064),k!==null?g=Sr(k,g):(g=Yr(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=t.child.memoizedState,b=b===null?su(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=t.childLanes&~a,i.memoizedState=ru,c}return g=t.child,t=g.sibling,c=Sr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=c,i.memoizedState=null,c}function au(t,i){return i=ol({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function $o(t,i,a,c){return c!==null&&Dc(c),Es(i,t.child,null,a),t=au(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function ex(t,i,a,c,f,g,b){if(a)return i.flags&256?(i.flags&=-257,c=eu(Error(n(422))),$o(t,i,b,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(g=c.fallback,f=i.mode,c=ol({mode:"visible",children:c.children},f,0,null),g=Yr(g,f,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&Es(i,t.child,null,b),i.child.memoizedState=su(b),i.memoizedState=ru,g);if((i.mode&1)===0)return $o(t,i,b,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(n(419)),c=eu(g,c,void 0),$o(t,i,b,c)}if(k=(b&t.childLanes)!==0,Fn||k){if(c=dn,c!==null){switch(b&-b){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|b))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,zi(t,f),pi(c,t,f,-1))}return Mu(),c=eu(Error(n(421))),$o(t,i,b,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=hx.bind(null,t),f._reactRetry=i,null):(t=g.treeContext,Xn=ur(f.nextSibling),Wn=i,Ht=!0,ui=null,t!==null&&(Qn[Jn++]=ki,Qn[Jn++]=Bi,Qn[Jn++]=zr,ki=t.id,Bi=t.overflow,zr=i),i=au(i,c.children),i.flags|=4096,i)}function xp(t,i,a){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),Oc(t.return,i,a)}function ou(t,i,a,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=f)}function vp(t,i,a){var c=i.pendingProps,f=c.revealOrder,g=c.tail;if(Rn(t,i,c.children,a),c=qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,a,i);else if(t.tag===19)xp(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(Vt(qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Vo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ou(i,!1,f,a,g);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Vo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ou(i,!0,a,null,g);break;case"together":ou(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function ji(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Wr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function tx(t,i,a){switch(i.tag){case 3:pp(i),ws();break;case 5:Lh(i);break;case 1:Un(i.type)&&Po(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Vt(Oo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Vt(qt,qt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?gp(t,i,a):(Vt(qt,qt.current&1),t=ji(t,i,a),t!==null?t.sibling:null);Vt(qt,qt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(t.flags&128)!==0){if(c)return vp(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Vt(qt,qt.current),c)break;return null;case 22:case 23:return i.lanes=0,dp(t,i,a)}return ji(t,i,a)}var _p,lu,yp,Sp;_p=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},lu=function(){},yp=function(t,i,a,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Gr(wi.current);var g=null;switch(a){case"input":f=yt(t,f),c=yt(t,c),g=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),g=[];break;case"textarea":f=Ge(t,f),c=Ge(t,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Ao)}Fe(a,c);var b;a=null;for(le in f)if(!c.hasOwnProperty(le)&&f.hasOwnProperty(le)&&f[le]!=null)if(le==="style"){var k=f[le];for(b in k)k.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?g||(g=[]):(g=g||[]).push(le,null));for(le in c){var j=c[le];if(k=f!=null?f[le]:void 0,c.hasOwnProperty(le)&&j!==k&&(j!=null||k!=null))if(le==="style")if(k){for(b in k)!k.hasOwnProperty(b)||j&&j.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in j)j.hasOwnProperty(b)&&k[b]!==j[b]&&(a||(a={}),a[b]=j[b])}else a||(g||(g=[]),g.push(le,a)),a=j;else le==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,k=k?k.__html:void 0,j!=null&&k!==j&&(g=g||[]).push(le,j)):le==="children"?typeof j!="string"&&typeof j!="number"||(g=g||[]).push(le,""+j):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(j!=null&&le==="onScroll"&&jt("scroll",t),g||k===j||(g=[])):(g=g||[]).push(le,j))}a&&(g=g||[]).push("style",a);var le=g;(i.updateQueue=le)&&(i.flags|=4)}},Sp=function(t,i,a,c){a!==c&&(i.flags|=4)};function Ua(t,i){if(!Ht)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function Sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,c=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=a,i}function nx(t,i,a){var c=i.pendingProps;switch(Nc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Un(i.type)&&No(),Sn(i),null;case 3:return c=i.stateNode,Cs(),Gt(In),Gt(_n),Gc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Uo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ui!==null&&(_u(ui),ui=null))),lu(t,i),Sn(i),null;case 5:Vc(i);var f=Gr(Na.current);if(a=i.type,t!==null&&i.stateNode!=null)yp(t,i,a,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return Sn(i),null}if(t=Gr(wi.current),Uo(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Mi]=i,c[ba]=g,t=(i.mode&1)!==0,a){case"dialog":jt("cancel",c),jt("close",c);break;case"iframe":case"object":case"embed":jt("load",c);break;case"video":case"audio":for(f=0;f<Ma.length;f++)jt(Ma[f],c);break;case"source":jt("error",c);break;case"img":case"image":case"link":jt("error",c),jt("load",c);break;case"details":jt("toggle",c);break;case"input":Rt(c,g),jt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},jt("invalid",c);break;case"textarea":D(c,g),jt("invalid",c)}Fe(a,g),f=null;for(var b in g)if(g.hasOwnProperty(b)){var k=g[b];b==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Co(c.textContent,k,t),f=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Co(c.textContent,k,t),f=["children",""+k]):o.hasOwnProperty(b)&&k!=null&&b==="onScroll"&&jt("scroll",c)}switch(a){case"input":xt(c),V(c,g,!0);break;case"textarea":xt(c),q(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Ao)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=he(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=b.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=b.createElement(a,{is:c.is}):(t=b.createElement(a),a==="select"&&(b=t,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):t=b.createElementNS(t,a),t[Mi]=i,t[ba]=c,_p(t,i,!1,!1),i.stateNode=t;e:{switch(b=we(a,c),a){case"dialog":jt("cancel",t),jt("close",t),f=c;break;case"iframe":case"object":case"embed":jt("load",t),f=c;break;case"video":case"audio":for(f=0;f<Ma.length;f++)jt(Ma[f],t);f=c;break;case"source":jt("error",t),f=c;break;case"img":case"image":case"link":jt("error",t),jt("load",t),f=c;break;case"details":jt("toggle",t),f=c;break;case"input":Rt(t,c),f=yt(t,c),jt("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),jt("invalid",t);break;case"textarea":D(t,c),f=Ge(t,c),jt("invalid",t);break;default:f=c}Fe(a,f),k=f;for(g in k)if(k.hasOwnProperty(g)){var j=k[g];g==="style"?Ce(t,j):g==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&Xe(t,j)):g==="children"?typeof j=="string"?(a!=="textarea"||j!=="")&&Te(t,j):typeof j=="number"&&Te(t,""+j):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?j!=null&&g==="onScroll"&&jt("scroll",t):j!=null&&L(t,g,j,b))}switch(a){case"input":xt(t),V(t,c,!1);break;case"textarea":xt(t),q(t);break;case"option":c.value!=null&&t.setAttribute("value",""+ve(c.value));break;case"select":t.multiple=!!c.multiple,g=c.value,g!=null?vt(t,!!c.multiple,g,!1):c.defaultValue!=null&&vt(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(t&&i.stateNode!=null)Sp(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(a=Gr(Na.current),Gr(wi.current),Uo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Mi]=i,(g=c.nodeValue!==a)&&(t=Wn,t!==null))switch(t.tag){case 3:Co(c.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Co(c.nodeValue,a,(t.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Mi]=i,i.stateNode=c}return Sn(i),null;case 13:if(Gt(qt),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ht&&Xn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Eh(),ws(),i.flags|=98560,g=!1;else if(g=Uo(i),c!==null&&c.dehydrated!==null){if(t===null){if(!g)throw Error(n(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(n(317));g[Mi]=i}else ws(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),g=!1}else ui!==null&&(_u(ui),ui=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(qt.current&1)!==0?rn===0&&(rn=3):Mu())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return Cs(),lu(t,i),t===null&&wa(i.stateNode.containerInfo),Sn(i),null;case 10:return Fc(i.type._context),Sn(i),null;case 17:return Un(i.type)&&No(),Sn(i),null;case 19:if(Gt(qt),g=i.memoizedState,g===null)return Sn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)Ua(g,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(b=Vo(t),b!==null){for(i.flags|=128,Ua(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,t=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=t,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,t=b.dependencies,g.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(qt,qt.current&1|2),i.child}t=t.sibling}g.tail!==null&&Xt()>Ps&&(i.flags|=128,c=!0,Ua(g,!1),i.lanes=4194304)}else{if(!c)if(t=Vo(b),t!==null){if(i.flags|=128,c=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ua(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Ht)return Sn(i),null}else 2*Xt()-g.renderingStartTime>Ps&&a!==1073741824&&(i.flags|=128,c=!0,Ua(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Xt(),i.sibling=null,a=qt.current,Vt(qt,c?a&1|2:a&1),i):(Sn(i),null);case 22:case 23:return Su(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(qn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function ix(t,i){switch(Nc(i),i.tag){case 1:return Un(i.type)&&No(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Cs(),Gt(In),Gt(_n),Gc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Vc(i),null;case 13:if(Gt(qt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ws()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Gt(qt),null;case 4:return Cs(),null;case 10:return Fc(i.type._context),null;case 22:case 23:return Su(),null;case 24:return null;default:return null}}var Ko=!1,Mn=!1,rx=typeof WeakSet=="function"?WeakSet:Set,He=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(t,i,c)}else a.current=null}function cu(t,i,a){try{a()}catch(c){Yt(t,i,c)}}var Mp=!1;function sx(t,i){if(Sc=go,t=eh(),hc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,k=-1,j=-1,le=0,xe=0,Se=t,ge=null;t:for(;;){for(var ke;Se!==a||f!==0&&Se.nodeType!==3||(k=b+f),Se!==g||c!==0&&Se.nodeType!==3||(j=b+c),Se.nodeType===3&&(b+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)ge=Se,Se=ke;for(;;){if(Se===t)break t;if(ge===a&&++le===f&&(k=b),ge===g&&++xe===c&&(j=b),(ke=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=ke}a=k===-1||j===-1?null:{start:k,end:j}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:t,selectionRange:a},go=!1,He=i;He!==null;)if(i=He,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,He=t;else for(;He!==null;){i=He;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ye=$e.memoizedProps,Qt=$e.memoizedState,Q=i.stateNode,X=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:di(i.type,Ye),Qt);Q.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Yt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,He=t;break}He=i.return}return $e=Mp,Mp=!1,$e}function Fa(t,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var g=f.destroy;f.destroy=void 0,g!==void 0&&cu(i,a,g)}f=f.next}while(f!==c)}}function Zo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function uu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function wp(t){var i=t.alternate;i!==null&&(t.alternate=null,wp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[Mi],delete i[ba],delete i[Tc],delete i[Vg],delete i[jg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ep(t){return t.tag===5||t.tag===3||t.tag===4}function bp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ep(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function du(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(c!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}function fu(t,i,a){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(fu(t,i,a),t=t.sibling;t!==null;)fu(t,i,a),t=t.sibling}var mn=null,fi=!1;function gr(t,i,a){for(a=a.child;a!==null;)Tp(t,i,a),a=a.sibling}function Tp(t,i,a){if(Ae&&typeof Ae.onCommitFiberUnmount=="function")try{Ae.onCommitFiberUnmount(Oe,a)}catch{}switch(a.tag){case 5:Mn||Rs(a,i);case 6:var c=mn,f=fi;mn=null,gr(t,i,a),mn=c,fi=f,mn!==null&&(fi?(t=mn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):mn.removeChild(a.stateNode));break;case 18:mn!==null&&(fi?(t=mn,a=a.stateNode,t.nodeType===8?bc(t.parentNode,a):t.nodeType===1&&bc(t,a),pa(t)):bc(mn,a.stateNode));break;case 4:c=mn,f=fi,mn=a.stateNode.containerInfo,fi=!0,gr(t,i,a),mn=c,fi=f;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&cu(a,i,b),f=f.next}while(f!==c)}gr(t,i,a);break;case 1:if(!Mn&&(Rs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){Yt(a,i,k)}gr(t,i,a);break;case 21:gr(t,i,a);break;case 22:a.mode&1?(Mn=(c=Mn)||a.memoizedState!==null,gr(t,i,a),Mn=c):gr(t,i,a);break;default:gr(t,i,a)}}function Cp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new rx),i.forEach(function(c){var f=px.bind(null,t,c);a.has(c)||(a.add(c),c.then(f,f))})}}function hi(t,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var g=t,b=i,k=b;e:for(;k!==null;){switch(k.tag){case 5:mn=k.stateNode,fi=!1;break e;case 3:mn=k.stateNode.containerInfo,fi=!0;break e;case 4:mn=k.stateNode.containerInfo,fi=!0;break e}k=k.return}if(mn===null)throw Error(n(160));Tp(g,b,f),mn=null,fi=!1;var j=f.alternate;j!==null&&(j.return=null),f.return=null}catch(le){Yt(f,i,le)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ap(i,t),i=i.sibling}function Ap(t,i){var a=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hi(i,t),bi(t),c&4){try{Fa(3,t,t.return),Zo(3,t)}catch(Ye){Yt(t,t.return,Ye)}try{Fa(5,t,t.return)}catch(Ye){Yt(t,t.return,Ye)}}break;case 1:hi(i,t),bi(t),c&512&&a!==null&&Rs(a,a.return);break;case 5:if(hi(i,t),bi(t),c&512&&a!==null&&Rs(a,a.return),t.flags&32){var f=t.stateNode;try{Te(f,"")}catch(Ye){Yt(t,t.return,Ye)}}if(c&4&&(f=t.stateNode,f!=null)){var g=t.memoizedProps,b=a!==null?a.memoizedProps:g,k=t.type,j=t.updateQueue;if(t.updateQueue=null,j!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&at(f,g),we(k,b);var le=we(k,g);for(b=0;b<j.length;b+=2){var xe=j[b],Se=j[b+1];xe==="style"?Ce(f,Se):xe==="dangerouslySetInnerHTML"?Xe(f,Se):xe==="children"?Te(f,Se):L(f,xe,Se,le)}switch(k){case"input":kt(f,g);break;case"textarea":E(f,g);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var ke=g.value;ke!=null?vt(f,!!g.multiple,ke,!1):ge!==!!g.multiple&&(g.defaultValue!=null?vt(f,!!g.multiple,g.defaultValue,!0):vt(f,!!g.multiple,g.multiple?[]:"",!1))}f[ba]=g}catch(Ye){Yt(t,t.return,Ye)}}break;case 6:if(hi(i,t),bi(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,g=t.memoizedProps;try{f.nodeValue=g}catch(Ye){Yt(t,t.return,Ye)}}break;case 3:if(hi(i,t),bi(t),c&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Ye){Yt(t,t.return,Ye)}break;case 4:hi(i,t),bi(t);break;case 13:hi(i,t),bi(t),f=t.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(mu=Xt())),c&4&&Cp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(Mn=(le=Mn)||xe,hi(i,t),Mn=le):hi(i,t),bi(t),c&8192){if(le=t.memoizedState!==null,(t.stateNode.isHidden=le)&&!xe&&(t.mode&1)!==0)for(He=t,xe=t.child;xe!==null;){for(Se=He=xe;He!==null;){switch(ge=He,ke=ge.child,ge.tag){case 0:case 11:case 14:case 15:Fa(4,ge,ge.return);break;case 1:Rs(ge,ge.return);var $e=ge.stateNode;if(typeof $e.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ye){Yt(c,a,Ye)}}break;case 5:Rs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Pp(Se);continue}}ke!==null?(ke.return=ge,He=ke):Pp(Se)}xe=xe.sibling}e:for(xe=null,Se=t;;){if(Se.tag===5){if(xe===null){xe=Se;try{f=Se.stateNode,le?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=Se.stateNode,j=Se.memoizedProps.style,b=j!=null&&j.hasOwnProperty("display")?j.display:null,k.style.display=_e("display",b))}catch(Ye){Yt(t,t.return,Ye)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=le?"":Se.memoizedProps}catch(Ye){Yt(t,t.return,Ye)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:hi(i,t),bi(t),c&4&&Cp(t);break;case 21:break;default:hi(i,t),bi(t)}}function bi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Ep(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Te(f,""),c.flags&=-33);var g=bp(t);fu(t,g,f);break;case 3:case 4:var b=c.stateNode.containerInfo,k=bp(t);du(t,k,b);break;default:throw Error(n(161))}}catch(j){Yt(t,t.return,j)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function ax(t,i,a){He=t,Rp(t)}function Rp(t,i,a){for(var c=(t.mode&1)!==0;He!==null;){var f=He,g=f.child;if(f.tag===22&&c){var b=f.memoizedState!==null||Ko;if(!b){var k=f.alternate,j=k!==null&&k.memoizedState!==null||Mn;k=Ko;var le=Mn;if(Ko=b,(Mn=j)&&!le)for(He=f;He!==null;)b=He,j=b.child,b.tag===22&&b.memoizedState!==null?Lp(f):j!==null?(j.return=b,He=j):Lp(f);for(;g!==null;)He=g,Rp(g),g=g.sibling;He=f,Ko=k,Mn=le}Np(t)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,He=g):Np(t)}}function Np(t){for(;He!==null;){var i=He;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Zo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:di(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Ph(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Ph(i,b,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var j=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&a.focus();break;case"img":j.src&&(a.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var le=i.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&pa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}Mn||i.flags&512&&uu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===t){He=null;break}if(a=i.sibling,a!==null){a.return=i.return,He=a;break}He=i.return}}function Pp(t){for(;He!==null;){var i=He;if(i===t){He=null;break}var a=i.sibling;if(a!==null){a.return=i.return,He=a;break}He=i.return}}function Lp(t){for(;He!==null;){var i=He;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Zo(4,i)}catch(j){Yt(i,a,j)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(j){Yt(i,f,j)}}var g=i.return;try{uu(i)}catch(j){Yt(i,g,j)}break;case 5:var b=i.return;try{uu(i)}catch(j){Yt(i,b,j)}}}catch(j){Yt(i,i.return,j)}if(i===t){He=null;break}var k=i.sibling;if(k!==null){k.return=i.return,He=k;break}He=i.return}}var ox=Math.ceil,Qo=R.ReactCurrentDispatcher,hu=R.ReactCurrentOwner,ni=R.ReactCurrentBatchConfig,Tt=0,dn=null,Jt=null,gn=0,qn=0,Ns=dr(0),rn=0,Oa=null,Wr=0,Jo=0,pu=0,ka=null,On=null,mu=0,Ps=1/0,Gi=null,el=!1,gu=null,xr=null,tl=!1,vr=null,nl=0,Ba=0,xu=null,il=-1,rl=0;function Nn(){return(Tt&6)!==0?Xt():il!==-1?il:il=Xt()}function _r(t){return(t.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:Hg.transition!==null?(rl===0&&(rl=vn()),rl):(t=ct,t!==0||(t=window.event,t=t===void 0?16:If(t.type)),t)}function pi(t,i,a,c){if(50<Ba)throw Ba=0,xu=null,Error(n(185));tn(t,a,c),((Tt&2)===0||t!==dn)&&(t===dn&&((Tt&2)===0&&(Jo|=a),rn===4&&yr(t,gn)),kn(t,c),a===1&&Tt===0&&(i.mode&1)===0&&(Ps=Xt()+500,Lo&&hr()))}function kn(t,i){var a=t.callbackNode;Dt(t,i);var c=Nt(t,t===dn?gn:0);if(c===0)a!==null&&ho(a),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(a!=null&&ho(a),i===1)t.tag===0?Gg(Ip.bind(null,t)):_h(Ip.bind(null,t)),Bg(function(){(Tt&6)===0&&hr()}),a=null;else{switch(An(c)){case 1:a=Y;break;case 4:a=ce;break;case 16:a=ae;break;case 536870912:a=Ne;break;default:a=ae}a=jp(a,Dp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Dp(t,i){if(il=-1,rl=0,(Tt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ls()&&t.callbackNode!==a)return null;var c=Nt(t,t===dn?gn:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=sl(t,c);else{i=c;var f=Tt;Tt|=2;var g=Fp();(dn!==t||gn!==i)&&(Gi=null,Ps=Xt()+500,qr(t,i));do try{ux();break}catch(k){Up(t,k)}while(!0);Uc(),Qo.current=g,Tt=f,Jt!==null?i=0:(dn=null,gn=0,i=rn)}if(i!==0){if(i===2&&(f=St(t),f!==0&&(c=f,i=vu(t,f))),i===1)throw a=Oa,qr(t,0),yr(t,c),kn(t,Xt()),a;if(i===6)yr(t,c);else{if(f=t.current.alternate,(c&30)===0&&!lx(f)&&(i=sl(t,c),i===2&&(g=St(t),g!==0&&(c=g,i=vu(t,g))),i===1))throw a=Oa,qr(t,0),yr(t,c),kn(t,Xt()),a;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:$r(t,On,Gi);break;case 3:if(yr(t,c),(c&130023424)===c&&(i=mu+500-Xt(),10<i)){if(Nt(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Nn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ec($r.bind(null,t,On,Gi),i);break}$r(t,On,Gi);break;case 4:if(yr(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var b=31-Be(c);g=1<<b,b=i[b],b>f&&(f=b),c&=~g}if(c=f,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ox(c/1960))-c,10<c){t.timeoutHandle=Ec($r.bind(null,t,On,Gi),c);break}$r(t,On,Gi);break;case 5:$r(t,On,Gi);break;default:throw Error(n(329))}}}return kn(t,Xt()),t.callbackNode===a?Dp.bind(null,t):null}function vu(t,i){var a=ka;return t.current.memoizedState.isDehydrated&&(qr(t,i).flags|=256),t=sl(t,i),t!==2&&(i=On,On=a,i!==null&&_u(i)),t}function _u(t){On===null?On=t:On.push.apply(On,t)}function lx(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],g=f.getSnapshot;f=f.value;try{if(!ci(g(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~pu,i&=~Jo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Be(i),c=1<<a;t[a]=-1,i&=~c}}function Ip(t){if((Tt&6)!==0)throw Error(n(327));Ls();var i=Nt(t,0);if((i&1)===0)return kn(t,Xt()),null;var a=sl(t,i);if(t.tag!==0&&a===2){var c=St(t);c!==0&&(i=c,a=vu(t,c))}if(a===1)throw a=Oa,qr(t,0),yr(t,i),kn(t,Xt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,$r(t,On,Gi),kn(t,Xt()),null}function yu(t,i){var a=Tt;Tt|=1;try{return t(i)}finally{Tt=a,Tt===0&&(Ps=Xt()+500,Lo&&hr())}}function Xr(t){vr!==null&&vr.tag===0&&(Tt&6)===0&&Ls();var i=Tt;Tt|=1;var a=ni.transition,c=ct;try{if(ni.transition=null,ct=1,t)return t()}finally{ct=c,ni.transition=a,Tt=i,(Tt&6)===0&&hr()}}function Su(){qn=Ns.current,Gt(Ns)}function qr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,kg(a)),Jt!==null)for(a=Jt.return;a!==null;){var c=a;switch(Nc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&No();break;case 3:Cs(),Gt(In),Gt(_n),Gc();break;case 5:Vc(c);break;case 4:Cs();break;case 13:Gt(qt);break;case 19:Gt(qt);break;case 10:Fc(c.type._context);break;case 22:case 23:Su()}a=a.return}if(dn=t,Jt=t=Sr(t.current,null),gn=qn=i,rn=0,Oa=null,pu=Jo=Wr=0,On=ka=null,jr!==null){for(i=0;i<jr.length;i++)if(a=jr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=f,c.next=b}a.pending=c}jr=null}return t}function Up(t,i){do{var a=Jt;try{if(Uc(),jo.current=Xo,Go){for(var c=$t.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Go=!1}if(Hr=0,un=nn=$t=null,Pa=!1,La=0,hu.current=null,a===null||a.return===null){rn=1,Oa=i,Jt=null;break}e:{var g=t,b=a.return,k=a,j=i;if(i=gn,k.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var le=j,xe=k,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=ap(b);if(ke!==null){ke.flags&=-257,op(ke,b,k,g,i),ke.mode&1&&sp(g,le,i),i=ke,j=le;var $e=i.updateQueue;if($e===null){var Ye=new Set;Ye.add(j),i.updateQueue=Ye}else $e.add(j);break e}else{if((i&1)===0){sp(g,le,i),Mu();break e}j=Error(n(426))}}else if(Ht&&k.mode&1){var Qt=ap(b);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),op(Qt,b,k,g,i),Dc(As(j,k));break e}}g=j=As(j,k),rn!==4&&(rn=2),ka===null?ka=[g]:ka.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var Q=ip(g,j,i);Nh(g,Q);break e;case 1:k=j;var X=g.type,ie=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(xr===null||!xr.has(ie)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ee=rp(g,k,i);Nh(g,Ee);break e}}g=g.return}while(g!==null)}kp(a)}catch(Ke){i=Ke,Jt===a&&a!==null&&(Jt=a=a.return);continue}break}while(!0)}function Fp(){var t=Qo.current;return Qo.current=Xo,t===null?Xo:t}function Mu(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||(Wr&268435455)===0&&(Jo&268435455)===0||yr(dn,gn)}function sl(t,i){var a=Tt;Tt|=2;var c=Fp();(dn!==t||gn!==i)&&(Gi=null,qr(t,i));do try{cx();break}catch(f){Up(t,f)}while(!0);if(Uc(),Tt=a,Qo.current=c,Jt!==null)throw Error(n(261));return dn=null,gn=0,rn}function cx(){for(;Jt!==null;)Op(Jt)}function ux(){for(;Jt!==null&&!Jl();)Op(Jt)}function Op(t){var i=Vp(t.alternate,t,qn);t.memoizedProps=t.pendingProps,i===null?kp(t):Jt=i,hu.current=null}function kp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=nx(a,i,qn),a!==null){Jt=a;return}}else{if(a=ix(a,i),a!==null){a.flags&=32767,Jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{rn=6,Jt=null;return}}if(i=i.sibling,i!==null){Jt=i;return}Jt=i=t}while(i!==null);rn===0&&(rn=5)}function $r(t,i,a){var c=ct,f=ni.transition;try{ni.transition=null,ct=1,dx(t,i,a,c)}finally{ni.transition=f,ct=c}return null}function dx(t,i,a,c){do Ls();while(vr!==null);if((Tt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var g=a.lanes|a.childLanes;if(Or(t,g),t===dn&&(Jt=dn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||tl||(tl=!0,jp(ae,function(){return Ls(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=ni.transition,ni.transition=null;var b=ct;ct=1;var k=Tt;Tt|=4,hu.current=null,sx(t,a),Ap(a,t),Pg(Mc),go=!!Sc,Mc=Sc=null,t.current=a,ax(a),ec(),Tt=k,ct=b,ni.transition=g}else t.current=a;if(tl&&(tl=!1,vr=t,nl=f),g=t.pendingLanes,g===0&&(xr=null),qe(a.stateNode),kn(t,Xt()),i!==null)for(c=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(el)throw el=!1,t=gu,gu=null,t;return(nl&1)!==0&&t.tag!==0&&Ls(),g=t.pendingLanes,(g&1)!==0?t===xu?Ba++:(Ba=0,xu=t):Ba=0,hr(),null}function Ls(){if(vr!==null){var t=An(nl),i=ni.transition,a=ct;try{if(ni.transition=null,ct=16>t?16:t,vr===null)var c=!1;else{if(t=vr,vr=null,nl=0,(Tt&6)!==0)throw Error(n(331));var f=Tt;for(Tt|=4,He=t.current;He!==null;){var g=He,b=g.child;if((He.flags&16)!==0){var k=g.deletions;if(k!==null){for(var j=0;j<k.length;j++){var le=k[j];for(He=le;He!==null;){var xe=He;switch(xe.tag){case 0:case 11:case 15:Fa(8,xe,g)}var Se=xe.child;if(Se!==null)Se.return=xe,He=Se;else for(;He!==null;){xe=He;var ge=xe.sibling,ke=xe.return;if(wp(xe),xe===le){He=null;break}if(ge!==null){ge.return=ke,He=ge;break}He=ke}}}var $e=g.alternate;if($e!==null){var Ye=$e.child;if(Ye!==null){$e.child=null;do{var Qt=Ye.sibling;Ye.sibling=null,Ye=Qt}while(Ye!==null)}}He=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,He=b;else e:for(;He!==null;){if(g=He,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Fa(9,g,g.return)}var Q=g.sibling;if(Q!==null){Q.return=g.return,He=Q;break e}He=g.return}}var X=t.current;for(He=X;He!==null;){b=He;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,He=ie;else e:for(b=X;He!==null;){if(k=He,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:Zo(9,k)}}catch(Ke){Yt(k,k.return,Ke)}if(k===b){He=null;break e}var Ee=k.sibling;if(Ee!==null){Ee.return=k.return,He=Ee;break e}He=k.return}}if(Tt=f,hr(),Ae&&typeof Ae.onPostCommitFiberRoot=="function")try{Ae.onPostCommitFiberRoot(Oe,t)}catch{}c=!0}return c}finally{ct=a,ni.transition=i}}return!1}function Bp(t,i,a){i=As(a,i),i=ip(t,i,1),t=mr(t,i,1),i=Nn(),t!==null&&(tn(t,1,i),kn(t,i))}function Yt(t,i,a){if(t.tag===3)Bp(t,t,a);else for(;i!==null;){if(i.tag===3){Bp(i,t,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(xr===null||!xr.has(c))){t=As(a,t),t=rp(i,t,1),i=mr(i,t,1),t=Nn(),i!==null&&(tn(i,1,t),kn(i,t));break}}i=i.return}}function fx(t,i,a){var c=t.pingCache;c!==null&&c.delete(i),i=Nn(),t.pingedLanes|=t.suspendedLanes&a,dn===t&&(gn&a)===a&&(rn===4||rn===3&&(gn&130023424)===gn&&500>Xt()-mu?qr(t,0):pu|=a),kn(t,i)}function zp(t,i){i===0&&((t.mode&1)===0?i=1:(i=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var a=Nn();t=zi(t,i),t!==null&&(tn(t,i,a),kn(t,a))}function hx(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),zp(t,a)}function px(t,i){var a=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),zp(t,a)}var Vp;Vp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||In.current)Fn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return Fn=!1,tx(t,i,a);Fn=(t.flags&131072)!==0}else Fn=!1,Ht&&(i.flags&1048576)!==0&&yh(i,Io,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Yo(t,i),t=i.pendingProps;var f=ys(i,_n.current);Ts(i,a),f=Xc(null,i,c,t,f,a);var g=qc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Un(c)?(g=!0,Po(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Bc(i),f.updater=qo,i.stateNode=f,f._reactInternals=i,Jc(i,c,t,a),i=iu(null,i,c,!0,g,a)):(i.tag=0,Ht&&g&&Rc(i),Rn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Yo(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=gx(c),t=di(c,t),f){case 0:i=nu(null,i,c,t,a);break e;case 1:i=hp(null,i,c,t,a);break e;case 11:i=lp(null,i,c,t,a);break e;case 14:i=cp(null,i,c,di(c.type,t),a);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),nu(t,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),hp(t,i,c,f,a);case 3:e:{if(pp(i),t===null)throw Error(n(387));c=i.pendingProps,g=i.memoizedState,f=g.element,Rh(t,i),zo(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=As(Error(n(423)),i),i=mp(t,i,c,a,f);break e}else if(c!==f){f=As(Error(n(424)),i),i=mp(t,i,c,a,f);break e}else for(Xn=ur(i.stateNode.containerInfo.firstChild),Wn=i,Ht=!0,ui=null,a=Ch(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ws(),c===f){i=ji(t,i,a);break e}Rn(t,i,c,a)}i=i.child}return i;case 5:return Lh(i),t===null&&Lc(i),c=i.type,f=i.pendingProps,g=t!==null?t.memoizedProps:null,b=f.children,wc(c,f)?b=null:g!==null&&wc(c,g)&&(i.flags|=32),fp(t,i),Rn(t,i,b,a),i.child;case 6:return t===null&&Lc(i),null;case 13:return gp(t,i,a);case 4:return zc(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Es(i,null,c,a):Rn(t,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),lp(t,i,c,f,a);case 7:return Rn(t,i,i.pendingProps,a),i.child;case 8:return Rn(t,i,i.pendingProps.children,a),i.child;case 12:return Rn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,g=i.memoizedProps,b=f.value,Vt(Oo,c._currentValue),c._currentValue=b,g!==null)if(ci(g.value,b)){if(g.children===f.children&&!In.current){i=ji(t,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){b=g.child;for(var j=k.firstContext;j!==null;){if(j.context===c){if(g.tag===1){j=Vi(-1,a&-a),j.tag=2;var le=g.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?j.next=j:(j.next=xe.next,xe.next=j),le.pending=j}}g.lanes|=a,j=g.alternate,j!==null&&(j.lanes|=a),Oc(g.return,a,i),k.lanes|=a;break}j=j.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(n(341));b.lanes|=a,k=b.alternate,k!==null&&(k.lanes|=a),Oc(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}Rn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ts(i,a),f=ei(f),c=c(f),i.flags|=1,Rn(t,i,c,a),i.child;case 14:return c=i.type,f=di(c,i.pendingProps),f=di(c.type,f),cp(t,i,c,f,a);case 15:return up(t,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:di(c,f),Yo(t,i),i.tag=1,Un(c)?(t=!0,Po(i)):t=!1,Ts(i,a),tp(i,c,f),Jc(i,c,f,a),iu(null,i,c,!0,t,a);case 19:return vp(t,i,a);case 22:return dp(t,i,a)}throw Error(n(156,i.tag))};function jp(t,i){return fo(t,i)}function mx(t,i,a,c){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ii(t,i,a,c){return new mx(t,i,a,c)}function wu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function gx(t){if(typeof t=="function")return wu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===G)return 11;if(t===te)return 14}return 2}function Sr(t,i){var a=t.alternate;return a===null?(a=ii(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function al(t,i,a,c,f,g){var b=2;if(c=t,typeof t=="function")wu(t)&&(b=1);else if(typeof t=="string")b=5;else e:switch(t){case F:return Yr(a.children,f,g,i);case z:b=8,f|=8;break;case w:return t=ii(12,a,i,f|2),t.elementType=w,t.lanes=g,t;case H:return t=ii(13,a,i,f),t.elementType=H,t.lanes=g,t;case Z:return t=ii(19,a,i,f),t.elementType=Z,t.lanes=g,t;case K:return ol(a,f,g,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A:b=10;break e;case O:b=9;break e;case G:b=11;break e;case te:b=14;break e;case ne:b=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=ii(b,a,i,f),i.elementType=t,i.type=c,i.lanes=g,i}function Yr(t,i,a,c){return t=ii(7,t,c,i),t.lanes=a,t}function ol(t,i,a,c){return t=ii(22,t,c,i),t.elementType=K,t.lanes=a,t.stateNode={isHidden:!1},t}function Eu(t,i,a){return t=ii(6,t,null,i),t.lanes=a,t}function bu(t,i,a){return i=ii(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function xx(t,i,a,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yi(0),this.expirationTimes=yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yi(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Tu(t,i,a,c,f,g,b,k,j){return t=new xx(t,i,a,k,j),i===1?(i=1,g===!0&&(i|=8)):i=0,g=ii(3,null,null,i),t.current=g,g.stateNode=t,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bc(g),t}function vx(t,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:c==null?null:""+c,children:t,containerInfo:i,implementation:a}}function Gp(t){if(!t)return fr;t=t._reactInternals;e:{if(Zn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Un(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Un(a))return xh(t,a,i)}return i}function Hp(t,i,a,c,f,g,b,k,j){return t=Tu(a,c,!0,t,f,g,b,k,j),t.context=Gp(null),a=t.current,c=Nn(),f=_r(a),g=Vi(c,f),g.callback=i??null,mr(a,g,f),t.current.lanes=f,tn(t,f,c),kn(t,c),t}function ll(t,i,a,c){var f=i.current,g=Nn(),b=_r(f);return a=Gp(a),i.context===null?i.context=a:i.pendingContext=a,i=Vi(g,b),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=mr(f,i,b),t!==null&&(pi(t,f,b,g),Bo(t,f,b)),b}function cl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Cu(t,i){Wp(t,i),(t=t.alternate)&&Wp(t,i)}function _x(){return null}var Xp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Au(t){this._internalRoot=t}ul.prototype.render=Au.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ll(t,i,null,null)},ul.prototype.unmount=Au.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Xr(function(){ll(null,t,null,null)}),i[Fi]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var i=Si();t={blockedOn:null,target:t,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,t),a===0&&Lf(t)}};function Ru(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qp(){}function yx(t,i,a,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var le=cl(b);g.call(le)}}var b=Hp(i,c,t,0,null,!1,!1,"",qp);return t._reactRootContainer=b,t[Fi]=b.current,wa(t.nodeType===8?t.parentNode:t),Xr(),b}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var k=c;c=function(){var le=cl(j);k.call(le)}}var j=Tu(t,0,!1,null,null,!1,!1,"",qp);return t._reactRootContainer=j,t[Fi]=j.current,wa(t.nodeType===8?t.parentNode:t),Xr(function(){ll(i,j,a,c)}),j}function fl(t,i,a,c,f){var g=a._reactRootContainer;if(g){var b=g;if(typeof f=="function"){var k=f;f=function(){var j=cl(b);k.call(j)}}ll(i,b,t,f)}else b=yx(a,i,t,f,c);return cl(b)}ln=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ot(i.pendingLanes);a!==0&&(It(i,a|1),kn(i,Xt()),(Tt&6)===0&&(Ps=Xt()+500,hr()))}break;case 13:Xr(function(){var c=zi(t,1);if(c!==null){var f=Nn();pi(c,t,1,f)}}),Cu(t,1)}},cn=function(t){if(t.tag===13){var i=zi(t,134217728);if(i!==null){var a=Nn();pi(i,t,134217728,a)}Cu(t,134217728)}},us=function(t){if(t.tag===13){var i=_r(t),a=zi(t,i);if(a!==null){var c=Nn();pi(a,t,i,c)}Cu(t,i)}},Si=function(){return ct},Nf=function(t,i){var a=ct;try{return ct=t,i()}finally{ct=a}},De=function(t,i,a){switch(i){case"input":if(kt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==t&&c.form===t.form){var f=Ro(c);if(!f)throw Error(n(90));Wt(c),kt(c,f)}}}break;case"textarea":E(t,a);break;case"select":i=a.value,i!=null&&vt(t,!!a.multiple,i,!1)}},rt=yu,Ut=Xr;var Sx={usingClientEntryPoint:!1,Events:[Ta,vs,Ro,me,Re,yu]},za={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Mx={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ca(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||_x,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Oe=hl.inject(Mx),Ae=hl}catch{}}return Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sx,Bn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ru(i))throw Error(n(200));return vx(t,i,null,a)},Bn.createRoot=function(t,i){if(!Ru(t))throw Error(n(299));var a=!1,c="",f=Xp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Tu(t,1,!1,null,null,a,!1,c,f),t[Fi]=i.current,wa(t.nodeType===8?t.parentNode:t),new Au(i)},Bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=ca(i),t=t===null?null:t.stateNode,t},Bn.flushSync=function(t){return Xr(t)},Bn.hydrate=function(t,i,a){if(!dl(i))throw Error(n(200));return fl(null,t,i,!0,a)},Bn.hydrateRoot=function(t,i,a){if(!Ru(t))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,f=!1,g="",b=Xp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=Hp(i,null,t,1,a??null,f,!1,g,b),t[Fi]=i.current,wa(t),c)for(t=0;t<c.length;t++)a=c[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ul(i)},Bn.render=function(t,i,a){if(!dl(i))throw Error(n(200));return fl(null,t,i,!1,a)},Bn.unmountComponentAtNode=function(t){if(!dl(t))throw Error(n(40));return t._reactRootContainer?(Xr(function(){fl(null,null,t,!1,function(){t._reactRootContainer=null,t[Fi]=null})}),!0):!1},Bn.unstable_batchedUpdates=yu,Bn.unstable_renderSubtreeIntoContainer=function(t,i,a,c){if(!dl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return fl(t,i,a,!1,c)},Bn.version="18.3.1-next-f1338f8080-20240426",Bn}var tm;function Px(){if(tm)return Lu.exports;tm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Lu.exports=Nx(),Lu.exports}var nm;function Lx(){if(nm)return pl;nm=1;var s=Px();return pl.createRoot=s.createRoot,pl.hydrateRoot=s.hydrateRoot,pl}var Dx=Lx();const Ix=s0(Dx);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=ut.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>ut.createElement("svg",{ref:p,...Fx,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:a0("lucide",o),...d},[...u.map(([m,x])=>ut.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(s,e)=>{const n=ut.forwardRef(({className:r,...o},l)=>ut.createElement(Ox,{ref:l,iconNode:e,className:a0(`lucide-${Ux(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=it("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=it("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=it("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=it("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=it("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=it("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=it("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=it("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ff=it("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=it("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=it("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=it("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=it("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=it("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=it("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=it("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=it("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=it("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=it("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=it("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=it("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=it("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=it("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=it("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=it("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=it("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=it("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=it("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=it("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=it("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=it("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=it("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=it("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=it("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=it("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=it("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=it("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=it("Thermometer",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=it("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=it("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=it("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=it("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=it("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]),pv=({cartCount:s,onOpenCart:e})=>{const[n,r]=ut.useState(!1),[o,l]=ut.useState(!1);ut.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:fd},{name:"Central VTS",href:"#central-vts",icon:lv},{name:"Normas NBR",href:"#normas",icon:dd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:o0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Hl},{name:"Manuais",href:"#manuais",icon:dd},{name:"Fotos Reais",href:"#galeria",icon:Yl},{name:"Contato",href:"#contato",icon:Qi}];return h.jsxs(h.Fragment,{children:[h.jsxs("div",{className:"bg-gradient-to-r from-red-950 via-black to-red-950 border-b border-red-900/40 text-xs py-1.5 px-4 text-center text-red-200 flex items-center justify-center gap-2 font-medium",children:[h.jsxs("span",{className:"flex h-2 w-2 relative",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-red-500"})]}),h.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",h.jsx("strong",{children:"ABNT NBR 14518"}),", ",h.jsx("strong",{children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),h.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${n?"bg-[#0a0c0f]/95 backdrop-blur-md border-b border-white/10 shadow-2xl py-3":"bg-[#0a0c0f]/80 backdrop-blur-sm border-b border-white/5 py-4"}`,children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[h.jsxs("a",{href:"#",className:"flex items-center gap-3 group",children:[h.jsx("div",{className:"relative w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 via-red-800 to-black p-0.5 shadow-glow-red flex items-center justify-center overflow-hidden",children:h.jsx("div",{className:"w-full h-full bg-[#121316] rounded-[10px] flex items-center justify-center",children:h.jsx(fd,{className:"w-6 h-6 text-red-500 group-hover:scale-110 transition-transform duration-300"})})}),h.jsxs("div",{className:"flex flex-col",children:[h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsxs("span",{className:"text-2xl font-black tracking-tight text-white font-sans",children:["OUT",h.jsx("span",{className:"text-red-500",children:"FIRE"})]}),h.jsx("span",{className:"text-[10px] bg-red-950/80 text-red-400 border border-red-800/60 px-1.5 py-0.5 rounded font-mono font-bold uppercase tracking-wider ml-1",children:"VTS 32S3"})]}),h.jsx("span",{className:"text-[10px] text-gray-400 tracking-wider uppercase -mt-0.5 font-medium",children:"Supressão Inteligente em Cozinha"})]})]}),h.jsx("nav",{className:"hidden lg:flex items-center gap-1.5",children:u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-red-600/15 text-red-400 hover:bg-red-600/25 border border-red-500/30":"text-gray-300 hover:text-white hover:bg-white/5"}`,children:[h.jsx(p,{className:"w-3.5 h-3.5 opacity-70"}),d.name]},d.name)})}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all border border-emerald-400/30",children:[h.jsx(Qi,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"(15) 99657-6807"})]}),h.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white transition-all flex items-center justify-center group",title:"Ver Carrinho de Compras",children:[h.jsx(Hl,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&h.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-red-600 text-white font-bold text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-red animate-pulse",children:s})]}),h.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?h.jsx(md,{className:"w-6 h-6"}):h.jsx(Zx,{className:"w-6 h-6"})})]})]}),o&&h.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-white/10 space-y-2",children:[u.map(d=>{const p=d.icon;return h.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-white/5 hover:text-white transition-all",children:[h.jsx(p,{className:"w-4 h-4 text-red-500"}),h.jsx("span",{children:d.name})]},d.name)}),h.jsx("div",{className:"pt-3 border-t border-white/10",children:h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold rounded-lg shadow-lg",children:[h.jsx(Qi,{className:"w-4 h-4"}),"Falar com Engenheiro no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hf="182",mv=0,om=1,gv=2,kl=1,u0=2,Ya=3,Lr=0,jn=1,Yi=2,Ji=0,$s=1,gd=2,lm=3,cm=4,xv=5,rs=100,vv=101,_v=102,yv=103,Sv=104,Mv=200,wv=201,Ev=202,bv=203,xd=204,vd=205,Tv=206,Cv=207,Av=208,Rv=209,Nv=210,Pv=211,Lv=212,Dv=213,Iv=214,_d=0,yd=1,Sd=2,Ks=3,Md=4,wd=5,Ed=6,bd=7,d0=0,Uv=1,Fv=2,Ni=0,f0=1,h0=2,p0=3,m0=4,g0=5,x0=6,v0=7,_0=300,cs=301,Zs=302,Td=303,Cd=304,Kl=306,Ad=1e3,Zi=1001,Rd=1002,xn=1003,Ov=1004,ml=1005,bn=1006,Uu=1007,as=1008,Kn=1009,y0=1010,S0=1011,eo=1012,pf=1013,Di=1014,Ai=1015,tr=1016,mf=1017,gf=1018,to=1020,M0=35902,w0=35899,E0=1021,b0=1022,_i=1023,nr=1026,os=1027,T0=1028,xf=1029,Qs=1030,vf=1031,_f=1033,Bl=33776,zl=33777,Vl=33778,jl=33779,Nd=35840,Pd=35841,Ld=35842,Dd=35843,Id=36196,Ud=37492,Fd=37496,Od=37488,kd=37489,Bd=37490,zd=37491,Vd=37808,jd=37809,Gd=37810,Hd=37811,Wd=37812,Xd=37813,qd=37814,$d=37815,Yd=37816,Kd=37817,Zd=37818,Qd=37819,Jd=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,af=36284,of=36285,lf=36286,kv=3200,C0=0,Bv=1,Nr="",ai="srgb",Js="srgb-linear",Wl="linear",Ft="srgb",Ds=7680,um=519,zv=512,Vv=513,jv=514,yf=515,Gv=516,Hv=517,Sf=518,Wv=519,dm=35044,fm="300 es",Ri=2e3,Xl=2001;function A0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ql(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xv(){const s=ql("canvas");return s.style.display="block",s}const hm={};function pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function lt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Lt(...s){const e="THREE."+s.shift();console.error(e,...s)}function no(...s){const e=s.join(" ");e in hm||(hm[e]=!0,lt(...s))}function qv(s,e,n){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:r()}}setTimeout(l,n)})}class na{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mm=1234567;const Za=Math.PI/180,ea=180/Math.PI;function ia(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[n&63|128]+wn[n>>8&255]+"-"+wn[n>>16&255]+wn[n>>24&255]+wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]).toLowerCase()}function Mt(s,e,n){return Math.max(e,Math.min(n,s))}function Mf(s,e){return(s%e+e)%e}function $v(s,e,n,r,o){return r+(s-e)*(o-r)/(n-e)}function Yv(s,e,n){return s!==e?(n-s)/(e-s):0}function Qa(s,e,n){return(1-n)*s+n*e}function Kv(s,e,n,r){return Qa(s,e,1-Math.exp(-n*r))}function Zv(s,e=1){return e-Math.abs(Mf(s,e*2)-e)}function Qv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*(3-2*s))}function Jv(s,e,n){return s<=e?0:s>=n?1:(s=(s-e)/(n-e),s*s*s*(s*(s*6-15)+10))}function e_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function t_(s,e){return s+Math.random()*(e-s)}function n_(s){return s*(.5-Math.random())}function i_(s){s!==void 0&&(mm=s);let e=mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function r_(s){return s*Za}function s_(s){return s*ea}function a_(s){return(s&s-1)===0&&s!==0}function o_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function l_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function c_(s,e,n,r,o){const l=Math.cos,u=Math.sin,d=l(n/2),p=u(n/2),m=l((e+r)/2),x=u((e+r)/2),v=l((e-r)/2),y=u((e-r)/2),S=l((r-e)/2),C=u((r-e)/2);switch(o){case"XYX":s.set(d*x,p*v,p*y,d*m);break;case"YZY":s.set(p*y,d*x,p*v,d*m);break;case"ZXZ":s.set(p*v,p*y,d*x,d*m);break;case"XZX":s.set(d*x,p*C,p*S,d*m);break;case"YXY":s.set(p*S,d*x,p*C,d*m);break;case"ZYZ":s.set(p*C,p*S,d*x,d*m);break;default:lt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function qs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const gm={DEG2RAD:Za,RAD2DEG:ea,generateUUID:ia,clamp:Mt,euclideanModulo:Mf,mapLinear:$v,inverseLerp:Yv,lerp:Qa,damp:Kv,pingpong:Zv,smoothstep:Qv,smootherstep:Jv,randInt:e_,randFloat:t_,randFloatSpread:n_,seededRandom:i_,degToRad:r_,radToDeg:s_,isPowerOfTwo:a_,ceilPowerOfTwo:o_,floorPowerOfTwo:l_,setQuaternionFromProperEuler:c_,normalize:Pn,denormalize:qs};class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ro{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],y=l[u+0],S=l[u+1],C=l[u+2],N=l[u+3];if(d<=0){e[n+0]=p,e[n+1]=m,e[n+2]=x,e[n+3]=v;return}if(d>=1){e[n+0]=y,e[n+1]=S,e[n+2]=C,e[n+3]=N;return}if(v!==N||p!==y||m!==S||x!==C){let M=p*y+m*S+x*C+v*N;M<0&&(y=-y,S=-S,C=-C,N=-N,M=-M);let _=1-d;if(M<.9995){const T=Math.acos(M),L=Math.sin(T);_=Math.sin(_*T)/L,d=Math.sin(d*T)/L,p=p*_+y*d,m=m*_+S*d,x=x*_+C*d,v=v*_+N*d}else{p=p*_+y*d,m=m*_+S*d,x=x*_+C*d,v=v*_+N*d;const T=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=T,m*=T,x*=T,v*=T}}e[n]=p,e[n+1]=m,e[n+2]=x,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],C=l[u+3];return e[n]=d*C+x*v+p*S-m*y,e[n+1]=p*C+x*y+m*v-d*S,e[n+2]=m*C+x*S+d*y-p*v,e[n+3]=x*C-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),S=p(o/2),C=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*S*C,this._y=m*S*v-y*x*C,this._z=m*x*C+y*S*v,this._w=m*x*v-y*S*C;break;case"YXZ":this._x=y*x*v+m*S*C,this._y=m*S*v-y*x*C,this._z=m*x*C-y*S*v,this._w=m*x*v+y*S*C;break;case"ZXY":this._x=y*x*v-m*S*C,this._y=m*S*v+y*x*C,this._z=m*x*C+y*S*v,this._w=m*x*v-y*S*C;break;case"ZYX":this._x=y*x*v-m*S*C,this._y=m*S*v+y*x*C,this._z=m*x*C-y*S*v,this._w=m*x*v+y*S*C;break;case"YZX":this._x=y*x*v+m*S*C,this._y=m*S*v+y*x*C,this._z=m*x*C-y*S*v,this._w=m*x*v-y*S*C;break;case"XZY":this._x=y*x*v-m*S*C,this._y=m*S*v-y*x*C,this._z=m*x*C+y*S*v,this._w=m*x*v+y*S*C;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],l=n[8],u=n[1],d=n[5],p=n[9],m=n[2],x=n[6],v=n[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,l=e._z,u=e._w,d=n._x,p=n._y,m=n._z,x=n._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,n=Math.sin(n*m)/x,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+u*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(n),l*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,r=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[3]*r+l[6]*o,this.y=l[1]*n+l[4]*r+l[7]*o,this.z=l[2]*n+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*n+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*n+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*n+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*n-l*o),v=2*(l*r-u*n);return this.x=n+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*n+l[4]*r+l[8]*o,this.y=l[1]*n+l[5]*r+l[9]*o,this.z=l[2]*n+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,l=e.z,u=n.x,d=n.y,p=n.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new J,xm=new ro;class ft{constructor(e,n,r,o,l,u,d,p,m){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,p,m)}set(e,n,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],S=r[5],C=r[8],N=o[0],M=o[3],_=o[6],T=o[1],L=o[4],R=o[7],I=o[2],U=o[5],F=o[8];return l[0]=u*N+d*T+p*I,l[3]=u*M+d*L+p*U,l[6]=u*_+d*R+p*F,l[1]=m*N+x*T+v*I,l[4]=m*M+x*L+v*U,l[7]=m*_+x*R+v*F,l[2]=y*N+S*T+C*I,l[5]=y*M+S*L+C*U,l[8]=y*_+S*R+C*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,S=m*l-u*p,C=n*v+r*y+o*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0);const N=1/C;return e[0]=v*N,e[1]=(o*m-x*r)*N,e[2]=(d*r-o*u)*N,e[3]=y*N,e[4]=(x*n-o*p)*N,e[5]=(o*l-d*n)*N,e[6]=S*N,e[7]=(r*p-m*n)*N,e[8]=(u*n-r*l)*N,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(Ou.makeScale(e,n)),this}rotate(e){return this.premultiply(Ou.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ou.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ou=new ft,vm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function u_(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ft&&(o.r=er(o.r),o.g=er(o.g),o.b=er(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ft&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Wl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return no("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return no("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:Wl,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ft,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Ct=u_();function er(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Is;class d_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Is===void 0&&(Is=ql("canvas")),Is.width=e.width,Is.height=e.height;const o=Is.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Is}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=er(l[u]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(er(n[r]/255)*255):n[r]=er(n[r]);return{data:n,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let f_=0;class wf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(ku(o[u].image)):l.push(ku(o[u]))}else l=ku(o);r.url=l}return n||(e.images[this.uuid]=r),r}}function ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?d_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let h_=0;const Bu=new J;class Dn extends na{constructor(e=Dn.DEFAULT_IMAGE,n=Dn.DEFAULT_MAPPING,r=Zi,o=Zi,l=bn,u=as,d=_i,p=Kn,m=Dn.DEFAULT_ANISOTROPY,x=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=ia(),this.name="",this.source=new wf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bu).x}get height(){return this.source.getSize(Bu).y}get depth(){return this.source.getSize(Bu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){lt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ad:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ad:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=_0;Dn.DEFAULT_ANISOTROPY=1;class Kt{constructor(e=0,n=0,r=0,o=1){Kt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*n+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*n+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*n+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],S=p[5],C=p[9],N=p[2],M=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-N)<.01&&Math.abs(C-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+N)<.1&&Math.abs(C+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(S+1)/2,I=(_+1)/2,U=(x+y)/4,F=(v+N)/4,z=(C+M)/4;return L>R&&L>I?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=U/r,l=F/r):R>I?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=U/o,l=z/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=F/l,o=z/l),this.set(r,o,l,n),this}let T=Math.sqrt((M-C)*(M-C)+(v-N)*(v-N)+(y-x)*(y-x));return Math.abs(T)<.001&&(T=1),this.x=(M-C)/T,this.y=(v-N)/T,this.z=(y-x)/T,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Mt(this.x,e.x,n.x),this.y=Mt(this.y,e.y,n.y),this.z=Mt(this.z,e.z,n.z),this.w=Mt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Mt(this.x,e,n),this.y=Mt(this.y,e,n),this.z=Mt(this.z,e,n),this.w=Mt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p_ extends na{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Kt(0,0,e,n),this.scissorTest=!1,this.viewport=new Kt(0,0,e,n);const o={width:e,height:n,depth:r.depth},l=new Dn(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const n={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new wf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends p_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class R0 extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m_ extends Dn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class so{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(mi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(mi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=mi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(n===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,mi):mi.fromBufferAttribute(l,u),mi.applyMatrix4(e.matrixWorld),this.expandByPoint(mi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),gl.copy(r.boundingBox)),gl.applyMatrix4(e.matrixWorld),this.union(gl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mi),mi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),xl.subVectors(this.max,ja),Us.subVectors(e.a,ja),Fs.subVectors(e.b,ja),Os.subVectors(e.c,ja),wr.subVectors(Fs,Us),Er.subVectors(Os,Fs),Kr.subVectors(Us,Os);let n=[0,-wr.z,wr.y,0,-Er.z,Er.y,0,-Kr.z,Kr.y,wr.z,0,-wr.x,Er.z,0,-Er.x,Kr.z,0,-Kr.x,-wr.y,wr.x,0,-Er.y,Er.x,0,-Kr.y,Kr.x,0];return!zu(n,Us,Fs,Os,xl)||(n=[1,0,0,0,1,0,0,0,1],!zu(n,Us,Fs,Os,xl))?!1:(vl.crossVectors(wr,Er),n=[vl.x,vl.y,vl.z],zu(n,Us,Fs,Os,xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Hi=[new J,new J,new J,new J,new J,new J,new J,new J],mi=new J,gl=new so,Us=new J,Fs=new J,Os=new J,wr=new J,Er=new J,Kr=new J,ja=new J,xl=new J,vl=new J,Zr=new J;function zu(s,e,n,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Zr.fromArray(s,l);const d=o.x*Math.abs(Zr.x)+o.y*Math.abs(Zr.y)+o.z*Math.abs(Zr.z),p=e.dot(Zr),m=n.dot(Zr),x=r.dot(Zr);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const g_=new so,Ga=new J,Vu=new J;class Ef{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):g_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ga.subVectors(e,this.center);const n=Ga.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ga,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ga.copy(e.center).add(Vu)),this.expandByPoint(Ga.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Wi=new J,ju=new J,_l=new J,br=new J,Gu=new J,yl=new J,Hu=new J;class x_{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,n),Wi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){ju.copy(e).add(n).multiplyScalar(.5),_l.copy(n).sub(e).normalize(),br.copy(this.origin).sub(ju);const l=e.distanceTo(n)*.5,u=-this.direction.dot(_l),d=br.dot(this.direction),p=-br.dot(_l),m=br.lengthSq(),x=Math.abs(1-u*u);let v,y,S,C;if(x>0)if(v=u*p-d,y=u*d-p,C=l*x,v>=0)if(y>=-C)if(y<=C){const N=1/x;v*=N,y*=N,S=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-C?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=C?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ju).addScaledVector(_l,y),S}intersectSphere(e,n){Wi.subVectors(e.center,this.origin);const r=Wi.dot(this.direction),o=Wi.dot(Wi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,n,r,o,l){Gu.subVectors(n,e),yl.subVectors(r,e),Hu.crossVectors(Gu,yl);let u=this.direction.dot(Hu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;br.subVectors(this.origin,e);const p=d*this.direction.dot(yl.crossVectors(br,yl));if(p<0)return null;const m=d*this.direction.dot(Gu.cross(br));if(m<0||p+m>u)return null;const x=-d*br.dot(Hu);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,n,r,o,l,u,d,p,m,x,v,y,S,C,N,M){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,l,u,d,p,m,x,v,y,S,C,N,M)}set(e,n,r,o,l,u,d,p,m,x,v,y,S,C,N,M){const _=this.elements;return _[0]=e,_[4]=n,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=S,_[7]=C,_[11]=N,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*l,n[5]=r[5]*l,n[6]=r[6]*l,n[7]=0,n[8]=r[8]*u,n[9]=r[9]*u,n[10]=r[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,C=d*x,N=d*v;n[0]=p*x,n[4]=-p*v,n[8]=m,n[1]=S+C*m,n[5]=y-N*m,n[9]=-d*p,n[2]=N-y*m,n[6]=C+S*m,n[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*v,C=m*x,N=m*v;n[0]=y+N*d,n[4]=C*d-S,n[8]=u*m,n[1]=u*v,n[5]=u*x,n[9]=-d,n[2]=S*d-C,n[6]=N+y*d,n[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*v,C=m*x,N=m*v;n[0]=y-N*d,n[4]=-u*v,n[8]=C+S*d,n[1]=S+C*d,n[5]=u*x,n[9]=N-y*d,n[2]=-u*m,n[6]=d,n[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*v,C=d*x,N=d*v;n[0]=p*x,n[4]=C*m-S,n[8]=y*m+N,n[1]=p*v,n[5]=N*m+y,n[9]=S*m-C,n[2]=-m,n[6]=d*p,n[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,C=d*p,N=d*m;n[0]=p*x,n[4]=N-y*v,n[8]=C*v+S,n[1]=v,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=S*v+C,n[10]=y-N*v}else if(e.order==="XZY"){const y=u*p,S=u*m,C=d*p,N=d*m;n[0]=p*x,n[4]=-v,n[8]=m*x,n[1]=y*v+N,n[5]=u*x,n[9]=S*v-C,n[2]=C*v-S,n[6]=d*x,n[10]=N*v+y}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v_,e,__)}lookAt(e,n,r){const o=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Tr.crossVectors(r,$n),Tr.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Tr.crossVectors(r,$n)),Tr.normalize(),Sl.crossVectors($n,Tr),o[0]=Tr.x,o[4]=Sl.x,o[8]=$n.x,o[1]=Tr.y,o[5]=Sl.y,o[9]=$n.y,o[2]=Tr.z,o[6]=Sl.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],S=r[13],C=r[2],N=r[6],M=r[10],_=r[14],T=r[3],L=r[7],R=r[11],I=r[15],U=o[0],F=o[4],z=o[8],w=o[12],A=o[1],O=o[5],G=o[9],H=o[13],Z=o[2],te=o[6],ne=o[10],K=o[14],$=o[3],fe=o[7],se=o[11],B=o[15];return l[0]=u*U+d*A+p*Z+m*$,l[4]=u*F+d*O+p*te+m*fe,l[8]=u*z+d*G+p*ne+m*se,l[12]=u*w+d*H+p*K+m*B,l[1]=x*U+v*A+y*Z+S*$,l[5]=x*F+v*O+y*te+S*fe,l[9]=x*z+v*G+y*ne+S*se,l[13]=x*w+v*H+y*K+S*B,l[2]=C*U+N*A+M*Z+_*$,l[6]=C*F+N*O+M*te+_*fe,l[10]=C*z+N*G+M*ne+_*se,l[14]=C*w+N*H+M*K+_*B,l[3]=T*U+L*A+R*Z+I*$,l[7]=T*F+L*O+R*te+I*fe,l[11]=T*z+L*G+R*ne+I*se,l[15]=T*w+L*H+R*K+I*B,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],S=e[14],C=e[3],N=e[7],M=e[11],_=e[15],T=p*S-m*y,L=d*S-m*v,R=d*y-p*v,I=u*S-m*x,U=u*y-p*x,F=u*v-d*x;return n*(N*T-M*L+_*R)-r*(C*T-M*I+_*U)+o*(C*L-N*I+_*F)-l*(C*R-N*U+M*F)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],S=e[11],C=e[12],N=e[13],M=e[14],_=e[15],T=v*M*m-N*y*m+N*p*S-d*M*S-v*p*_+d*y*_,L=C*y*m-x*M*m-C*p*S+u*M*S+x*p*_-u*y*_,R=x*N*m-C*v*m+C*d*S-u*N*S-x*d*_+u*v*_,I=C*v*p-x*N*p-C*d*y+u*N*y+x*d*M-u*v*M,U=n*T+r*L+o*R+l*I;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/U;return e[0]=T*F,e[1]=(N*y*l-v*M*l-N*o*S+r*M*S+v*o*_-r*y*_)*F,e[2]=(d*M*l-N*p*l+N*o*m-r*M*m-d*o*_+r*p*_)*F,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*S-r*p*S)*F,e[4]=L*F,e[5]=(x*M*l-C*y*l+C*o*S-n*M*S-x*o*_+n*y*_)*F,e[6]=(C*p*l-u*M*l-C*o*m+n*M*m+u*o*_-n*p*_)*F,e[7]=(u*y*l-x*p*l+x*o*m-n*y*m-u*o*S+n*p*S)*F,e[8]=R*F,e[9]=(C*v*l-x*N*l-C*r*S+n*N*S+x*r*_-n*v*_)*F,e[10]=(u*N*l-C*d*l+C*r*m-n*N*m-u*r*_+n*d*_)*F,e[11]=(x*d*l-u*v*l-x*r*m+n*v*m+u*r*S-n*d*S)*F,e[12]=I*F,e[13]=(x*N*o-C*v*o+C*r*y-n*N*y-x*r*M+n*v*M)*F,e[14]=(C*d*o-u*N*o-C*r*p+n*N*p+u*r*M-n*d*M)*F,e[15]=(u*v*o-x*d*o+x*r*p-n*v*p-u*r*y+n*d*y)*F,this}scale(e){const n=this.elements,r=e.x,o=e.y,l=e.z;return n[0]*=r,n[4]*=o,n[8]*=l,n[1]*=r,n[5]*=o,n[9]*=l,n[2]*=r,n[6]*=o,n[10]*=l,n[3]*=r,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,l=n._x,u=n._y,d=n._z,p=n._w,m=l+l,x=u+u,v=d+d,y=l*m,S=l*x,C=l*v,N=u*x,M=u*v,_=d*v,T=p*m,L=p*x,R=p*v,I=r.x,U=r.y,F=r.z;return o[0]=(1-(N+_))*I,o[1]=(S+R)*I,o[2]=(C-L)*I,o[3]=0,o[4]=(S-R)*U,o[5]=(1-(y+_))*U,o[6]=(M+T)*U,o[7]=0,o[8]=(C+L)*F,o[9]=(M-T)*F,o[10]=(1-(y+N))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),n.identity(),this;let l=ks.set(o[0],o[1],o[2]).length();const u=ks.set(o[4],o[5],o[6]).length(),d=ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),gi.copy(this);const m=1/l,x=1/u,v=1/d;return gi.elements[0]*=m,gi.elements[1]*=m,gi.elements[2]*=m,gi.elements[4]*=x,gi.elements[5]*=x,gi.elements[6]*=x,gi.elements[8]*=v,gi.elements[9]*=v,gi.elements[10]*=v,n.setFromRotationMatrix(gi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,n,r,o,l,u,d=Ri,p=!1){const m=this.elements,x=2*l/(n-e),v=2*l/(r-o),y=(n+e)/(n-e),S=(r+o)/(r-o);let C,N;if(p)C=l/(u-l),N=u*l/(u-l);else if(d===Ri)C=-(u+l)/(u-l),N=-2*u*l/(u-l);else if(d===Xl)C=-u/(u-l),N=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=C,m[14]=N,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,l,u,d=Ri,p=!1){const m=this.elements,x=2/(n-e),v=2/(r-o),y=-(n+e)/(n-e),S=-(r+o)/(r-o);let C,N;if(p)C=1/(u-l),N=u/(u-l);else if(d===Ri)C=-2/(u-l),N=-(u+l)/(u-l);else if(d===Xl)C=-1/(u-l),N=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=C,m[14]=N,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const ks=new J,gi=new Zt,v_=new J(0,0,0),__=new J(1,1,1),Tr=new J,Sl=new J,$n=new J,ym=new Zt,Sm=new ro;class Ii{constructor(e=0,n=0,r=0,o=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Mt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return ym.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ym,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class N0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y_=0;const Mm=new J,Bs=new ro,Xi=new Zt,Ml=new J,Ha=new J,S_=new J,M_=new ro,wm=new J(1,0,0),Em=new J(0,1,0),bm=new J(0,0,1),Tm={type:"added"},w_={type:"removed"},zs={type:"childadded",child:null},Wu={type:"childremoved",child:null};class Tn extends na{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y_++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new J,n=new Ii,r=new ro,o=new J(1,1,1);function l(){r.setFromEuler(n,!1)}function u(){n.setFromQuaternion(r,void 0,!1)}n._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new ft}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new N0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,n){return Bs.setFromAxisAngle(e,n),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?Ml.copy(e):Ml.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Ha,Ml,this.up):Xi.lookAt(Ml,Ha,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Xi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(w_),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,e,S_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ha,M_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(n){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),C=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),C.length>0&&(r.nodes=C)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Tn.DEFAULT_UP=new J(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xi=new J,qi=new J,Xu=new J,$i=new J,Vs=new J,js=new J,Cm=new J,qu=new J,$u=new J,Yu=new J,Ku=new Kt,Zu=new Kt,Qu=new Kt;class vi{constructor(e=new J,n=new J,r=new J){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),xi.subVectors(e,n),o.cross(xi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,n,r,o,l){xi.subVectors(o,n),qi.subVectors(r,n),Xu.subVectors(e,n);const u=xi.dot(xi),d=xi.dot(qi),p=xi.dot(Xu),m=qi.dot(qi),x=qi.dot(Xu),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*x)*y,C=(u*x-d*p)*y;return l.set(1-S-C,C,S)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,r,o,l,u,d,p){return this.getBarycoord(e,n,r,o,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,$i.x),p.addScaledVector(u,$i.y),p.addScaledVector(d,$i.z),p)}static getInterpolatedAttribute(e,n,r,o,l,u){return Ku.setScalar(0),Zu.setScalar(0),Qu.setScalar(0),Ku.fromBufferAttribute(e,n),Zu.fromBufferAttribute(e,r),Qu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ku,l.x),u.addScaledVector(Zu,l.y),u.addScaledVector(Qu,l.z),u}static isFrontFacing(e,n,r,o){return xi.subVectors(r,n),qi.subVectors(e,n),xi.cross(qi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),xi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return vi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,l){return vi.getInterpolation(e,this.a,this.b,this.c,n,r,o,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,l=this.c;let u,d;Vs.subVectors(o,r),js.subVectors(l,r),qu.subVectors(e,r);const p=Vs.dot(qu),m=js.dot(qu);if(p<=0&&m<=0)return n.copy(r);$u.subVectors(e,o);const x=Vs.dot($u),v=js.dot($u);if(x>=0&&v<=x)return n.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),n.copy(r).addScaledVector(Vs,u);Yu.subVectors(e,l);const S=Vs.dot(Yu),C=js.dot(Yu);if(C>=0&&S<=C)return n.copy(l);const N=S*m-p*C;if(N<=0&&m>=0&&C<=0)return d=m/(m-C),n.copy(r).addScaledVector(js,d);const M=x*C-S*v;if(M<=0&&v-x>=0&&S-C>=0)return Cm.subVectors(l,o),d=(v-x)/(v-x+(S-C)),n.copy(o).addScaledVector(Cm,d);const _=1/(M+N+y);return u=N*_,d=y*_,n.copy(r).addScaledVector(Vs,u).addScaledVector(js,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const P0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},wl={h:0,s:0,l:0};function Ju(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class At{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Ct.workingColorSpace){return this.r=e,this.g=n,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Ct.workingColorSpace){if(e=Mf(e,1),n=Mt(n,0,1),r=Mt(r,0,1),n===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+n):r+n-r*n,u=2*r-l;this.r=Ju(u,l,e+1/3),this.g=Ju(u,l,e),this.b=Ju(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,n=ai){function r(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(l,16),n);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ai){const r=P0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=er(e.r),this.g=er(e.g),this.b=er(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Ct.workingToColorSpace(En.copy(this),e),Math.round(Mt(En.r*255,0,255))*65536+Math.round(Mt(En.g*255,0,255))*256+Math.round(Mt(En.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ct.workingColorSpace){Ct.workingToColorSpace(En.copy(this),n);const r=En.r,o=En.g,l=En.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,n=Ct.workingColorSpace){return Ct.workingToColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ai){Ct.workingToColorSpace(En.copy(this),e);const n=En.r,r=En.g,o=En.b;return e!==ai?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+n,Cr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(Cr),e.getHSL(wl);const r=Qa(Cr.h,wl.h,n),o=Qa(Cr.s,wl.s,n),l=Qa(Cr.l,wl.l,n);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*n+l[3]*r+l[6]*o,this.g=l[1]*n+l[4]*r+l[7]*o,this.b=l[2]*n+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new At;At.NAMES=P0;let E_=0;class ao extends na{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=$s,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=vd,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=um,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){lt(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){lt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(r.blending=this.blending),this.side!==Lr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xd&&(r.blendSrc=this.blendSrc),this.blendDst!==vd&&(r.blendDst=this.blendDst),this.blendEquation!==rs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==um&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(n){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=n[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ja extends ao{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=d0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new J,El=new wt;let b_=0;class Li{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:b_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=dm,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyMatrix3(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=qs(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,l){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),r=Pn(r,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dm&&(e.usage=this.usage),e}}class L0 extends Li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class D0 extends Li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class pn extends Li{constructor(e,n,r){super(new Float32Array(e),n,r)}}let T_=0;const ri=new Zt,ed=new Tn,Gs=new J,Yn=new so,Wa=new so,hn=new J;class oi extends na{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(A0(e)?D0:L0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ri.makeRotationFromQuaternion(e),this.applyMatrix4(ri),this}rotateX(e){return ri.makeRotationX(e),this.applyMatrix4(ri),this}rotateY(e){return ri.makeRotationY(e),this.applyMatrix4(ri),this}rotateZ(e){return ri.makeRotationZ(e),this.applyMatrix4(ri),this}translate(e,n,r){return ri.makeTranslation(e,n,r),this.applyMatrix4(ri),this}scale(e,n,r){return ri.makeScale(e,n,r),this.applyMatrix4(ri),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const l=e[o];n.setXYZ(o,l.x,l.y,l.z||0)}e.length>n.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const l=n[r];Yn.setFromBufferAttribute(l),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ef);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),n)for(let l=0,u=n.length;l<u;l++){const d=n[l];Wa.setFromBufferAttribute(d),this.morphTargetsRelative?(hn.addVectors(Yn.min,Wa.min),Yn.expandByPoint(hn),hn.addVectors(Yn.max,Wa.max),Yn.expandByPoint(hn)):(Yn.expandByPoint(Wa.min),Yn.expandByPoint(Wa.max))}Yn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)hn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(hn));if(n)for(let l=0,u=n.length;l<u;l++){const d=n[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)hn.fromBufferAttribute(d,m),p&&(Gs.fromBufferAttribute(e,m),hn.add(Gs)),o=Math.max(o,r.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let z=0;z<r.count;z++)d[z]=new J,p[z]=new J;const m=new J,x=new J,v=new J,y=new wt,S=new wt,C=new wt,N=new J,M=new J;function _(z,w,A){m.fromBufferAttribute(r,z),x.fromBufferAttribute(r,w),v.fromBufferAttribute(r,A),y.fromBufferAttribute(l,z),S.fromBufferAttribute(l,w),C.fromBufferAttribute(l,A),x.sub(m),v.sub(m),S.sub(y),C.sub(y);const O=1/(S.x*C.y-C.x*S.y);isFinite(O)&&(N.copy(x).multiplyScalar(C.y).addScaledVector(v,-S.y).multiplyScalar(O),M.copy(v).multiplyScalar(S.x).addScaledVector(x,-C.x).multiplyScalar(O),d[z].add(N),d[w].add(N),d[A].add(N),p[z].add(M),p[w].add(M),p[A].add(M))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let z=0,w=T.length;z<w;++z){const A=T[z],O=A.start,G=A.count;for(let H=O,Z=O+G;H<Z;H+=3)_(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const L=new J,R=new J,I=new J,U=new J;function F(z){I.fromBufferAttribute(o,z),U.copy(I);const w=d[z];L.copy(w),L.sub(I.multiplyScalar(I.dot(w))).normalize(),R.crossVectors(U,w);const O=R.dot(p[z])<0?-1:1;u.setXYZW(z,L.x,L.y,L.z,O)}for(let z=0,w=T.length;z<w;++z){const A=T[z],O=A.start,G=A.count;for(let H=O,Z=O+G;H<Z;H+=3)F(e.getX(H+0)),F(e.getX(H+1)),F(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new J,l=new J,u=new J,d=new J,p=new J,m=new J,x=new J,v=new J;if(e)for(let y=0,S=e.count;y<S;y+=3){const C=e.getX(y+0),N=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(n,C),l.fromBufferAttribute(n,N),u.fromBufferAttribute(n,M),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,N),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(C,d.x,d.y,d.z),r.setXYZ(N,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=n.count;y<S;y+=3)o.fromBufferAttribute(n,y+0),l.fromBufferAttribute(n,y+1),u.fromBufferAttribute(n,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)hn.fromBufferAttribute(e,n),hn.normalize(),e.setXYZ(n,hn.x,hn.y,hn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let S=0,C=0;for(let N=0,M=p.length;N<M;N++){d.isInterleavedBufferAttribute?S=p[N]*d.data.stride+d.offset:S=p[N]*x;for(let _=0;_<x;_++)y[C++]=m[S++]}return new Li(y,x,v)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new oi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],S=e(y,r);p.push(S)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Am=new Zt,Qr=new x_,bl=new Ef,Rm=new J,Tl=new J,Cl=new J,Al=new J,td=new J,Rl=new J,Nm=new J,Nl=new J;class gt extends Tn{constructor(e=new oi,n=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Rl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(td.fromBufferAttribute(v,e),u?Rl.addScaledVector(td,x):Rl.addScaledVector(td.sub(n),x))}n.add(Rl)}return n}raycast(e,n){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(bl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(bl,Rm)===null||Qr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Am.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(Am),!(r.boundingBox!==null&&Qr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Qr)))}_computeIntersections(e,n,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let C=0,N=y.length;C<N;C++){const M=y[C],_=u[M.materialIndex],T=Math.max(M.start,S.start),L=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=T,I=L;R<I;R+=3){const U=d.getX(R),F=d.getX(R+1),z=d.getX(R+2);o=Pl(this,_,e,r,m,x,v,U,F,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const C=Math.max(0,S.start),N=Math.min(d.count,S.start+S.count);for(let M=C,_=N;M<_;M+=3){const T=d.getX(M),L=d.getX(M+1),R=d.getX(M+2);o=Pl(this,u,e,r,m,x,v,T,L,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let C=0,N=y.length;C<N;C++){const M=y[C],_=u[M.materialIndex],T=Math.max(M.start,S.start),L=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let R=T,I=L;R<I;R+=3){const U=R,F=R+1,z=R+2;o=Pl(this,_,e,r,m,x,v,U,F,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const C=Math.max(0,S.start),N=Math.min(p.count,S.start+S.count);for(let M=C,_=N;M<_;M+=3){const T=M,L=M+1,R=M+2;o=Pl(this,u,e,r,m,x,v,T,L,R),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function C_(s,e,n,r,o,l,u,d){let p;if(e.side===jn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Lr,d),p===null)return null;Nl.copy(d),Nl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(Nl);return m<n.near||m>n.far?null:{distance:m,point:Nl.clone(),object:s}}function Pl(s,e,n,r,o,l,u,d,p,m){s.getVertexPosition(d,Tl),s.getVertexPosition(p,Cl),s.getVertexPosition(m,Al);const x=C_(s,e,n,r,Tl,Cl,Al,Nm);if(x){const v=new J;vi.getBarycoord(Nm,Tl,Cl,Al,v),o&&(x.uv=vi.getInterpolatedAttribute(o,d,p,m,v,new wt)),l&&(x.uv1=vi.getInterpolatedAttribute(l,d,p,m,v,new wt)),u&&(x.normal=vi.getInterpolatedAttribute(u,d,p,m,v,new J),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new J,materialIndex:0};vi.getNormal(Tl,Cl,Al,y.normal),x.face=y,x.barycoord=v}return x}class zn extends oi{constructor(e=1,n=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,S=0;C("z","y","x",-1,-1,r,n,e,u,l,0),C("z","y","x",1,-1,r,n,-e,u,l,1),C("x","z","y",1,1,e,r,n,o,u,2),C("x","z","y",1,-1,e,r,-n,o,u,3),C("x","y","z",1,-1,e,n,r,o,l,4),C("x","y","z",-1,-1,e,n,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(x,3)),this.setAttribute("uv",new pn(v,2));function C(N,M,_,T,L,R,I,U,F,z,w){const A=R/F,O=I/z,G=R/2,H=I/2,Z=U/2,te=F+1,ne=z+1;let K=0,$=0;const fe=new J;for(let se=0;se<ne;se++){const B=se*O-H;for(let oe=0;oe<te;oe++){const be=oe*A-G;fe[N]=be*T,fe[M]=B*L,fe[_]=Z,m.push(fe.x,fe.y,fe.z),fe[N]=0,fe[M]=0,fe[_]=U>0?1:-1,x.push(fe.x,fe.y,fe.z),v.push(oe/F),v.push(1-se/z),K+=1}}for(let se=0;se<z;se++)for(let B=0;B<F;B++){const oe=y+B+te*se,be=y+B+te*(se+1),je=y+(B+1)+te*(se+1),We=y+(B+1)+te*se;p.push(oe,be,We),p.push(be,je,We),$+=6}d.addGroup(S,$,w),S+=$,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ta(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone():Array.isArray(o)?e[n][r]=o.slice():e[n][r]=o}}return e}function Ln(s){const e={};for(let n=0;n<s.length;n++){const r=ta(s[n]);for(const o in r)e[o]=r[o]}return e}function A_(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function I0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const R_={clone:ta,merge:Ln};var N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends ao{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=P_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ta(e.uniforms),this.uniformsGroups=A_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class U0 extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ar=new J,Pm=new wt,Lm=new wt;class Vn extends U0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ea*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ea*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z),Ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ar.x,Ar.y).multiplyScalar(-e/Ar.z)}getViewSize(e,n){return this.getViewBounds(e,Pm,Lm),n.subVectors(Lm,Pm)}setViewOffset(e,n,r,o,l,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,n-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Ws=1;class L_ extends Tn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Vn(Hs,Ws,e,n);o.layers=this.layers,this.add(o);const l=new Vn(Hs,Ws,e,n);l.layers=this.layers,this.add(l);const u=new Vn(Hs,Ws,e,n);u.layers=this.layers,this.add(u);const d=new Vn(Hs,Ws,e,n);d.layers=this.layers,this.add(d);const p=new Vn(Hs,Ws,e,n);p.layers=this.layers,this.add(p);const m=new Vn(Hs,Ws,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,l,u,d,p]=n;for(const m of n)this.remove(m);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Xl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),C=e.xr.enabled;e.xr.enabled=!1;const N=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(n,l),e.setRenderTarget(r,1,o),e.render(n,u),e.setRenderTarget(r,2,o),e.render(n,d),e.setRenderTarget(r,3,o),e.render(n,p),e.setRenderTarget(r,4,o),e.render(n,m),r.texture.generateMipmaps=N,e.setRenderTarget(r,5,o),e.render(n,x),e.setRenderTarget(v,y,S),e.xr.enabled=C,r.texture.needsPMREMUpdate=!0}}class F0 extends Dn{constructor(e=[],n=cs,r,o,l,u,d,p,m,x){super(e,n,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class O0 extends Pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new F0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new zn(5,5,5),l=new Ui({name:"CubemapFromEquirect",uniforms:ta(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:jn,blending:Ji});l.uniforms.tEquirect.value=n;const u=new gt(o,l),d=n.minFilter;return n.minFilter===as&&(n.minFilter=bn),new L_(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,r,o);e.setRenderTarget(l)}}class Ki extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const D_={type:"move"};class nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const N of e.hand.values()){const M=n.getJointPose(N,r),_=this._getHandJoint(m,N);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,C=.005;m.inputState.pinching&&y>S+C?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-C&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=n.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(D_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ki;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}class bf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new At(e),this.density=n}clone(){return new bf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class I_ extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class U_ extends Dn{constructor(e=null,n=1,r=1,o,l,u,d,p,m=xn,x=xn,v,y){super(null,u,d,p,m,x,o,l,v,y),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const id=new J,F_=new J,O_=new ft;class ns{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=id.subVectors(r,n).cross(F_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(id),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||O_.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jr=new Ef,k_=new wt(.5,.5),Ll=new J;class Tf{constructor(e=new ns,n=new ns,r=new ns,o=new ns,l=new ns,u=new ns){this.planes=[e,n,r,o,l,u]}set(e,n,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],v=l[5],y=l[6],S=l[7],C=l[8],N=l[9],M=l[10],_=l[11],T=l[12],L=l[13],R=l[14],I=l[15];if(o[0].setComponents(m-u,S-x,_-C,I-T).normalize(),o[1].setComponents(m+u,S+x,_+C,I+T).normalize(),o[2].setComponents(m+d,S+v,_+N,I+L).normalize(),o[3].setComponents(m-d,S-v,_-N,I-L).normalize(),r)o[4].setComponents(p,y,M,R).normalize(),o[5].setComponents(m-p,S-y,_-M,I-R).normalize();else if(o[4].setComponents(m-p,S-y,_-M,I-R).normalize(),n===Ri)o[5].setComponents(m+p,S+y,_+M,I+R).normalize();else if(n===Xl)o[5].setComponents(p,y,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Jr)}intersectsSprite(e){Jr.center.set(0,0,0);const n=k_.distanceTo(e.center);return Jr.radius=.7071067811865476+n,Jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Jr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Ll.x=o.normal.x>0?e.max.x:e.min.x,Ll.y=o.normal.y>0?e.max.y:e.min.y,Ll.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ll)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class io extends Dn{constructor(e,n,r=Di,o,l,u,d=xn,p=xn,m,x=nr,v=1){if(x!==nr&&x!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:n,depth:v};super(y,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class B_ extends io{constructor(e,n=Di,r=cs,o,l,u=xn,d=xn,p,m=nr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,n,r,o,l,u,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class k0 extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class si extends oi{constructor(e=1,n=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],S=[];let C=0;const N=[],M=r/2;let _=0;T(),u===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new pn(v,3)),this.setAttribute("normal",new pn(y,3)),this.setAttribute("uv",new pn(S,2));function T(){const R=new J,I=new J;let U=0;const F=(n-e)/r;for(let z=0;z<=l;z++){const w=[],A=z/l,O=A*(n-e)+e;for(let G=0;G<=o;G++){const H=G/o,Z=H*p+d,te=Math.sin(Z),ne=Math.cos(Z);I.x=O*te,I.y=-A*r+M,I.z=O*ne,v.push(I.x,I.y,I.z),R.set(te,F,ne).normalize(),y.push(R.x,R.y,R.z),S.push(H,1-A),w.push(C++)}N.push(w)}for(let z=0;z<o;z++)for(let w=0;w<l;w++){const A=N[w][z],O=N[w+1][z],G=N[w+1][z+1],H=N[w][z+1];(e>0||w!==0)&&(x.push(A,O,H),U+=3),(n>0||w!==l-1)&&(x.push(O,G,H),U+=3)}m.addGroup(_,U,0),_+=U}function L(R){const I=C,U=new wt,F=new J;let z=0;const w=R===!0?e:n,A=R===!0?1:-1;for(let G=1;G<=o;G++)v.push(0,M*A,0),y.push(0,A,0),S.push(.5,.5),C++;const O=C;for(let G=0;G<=o;G++){const Z=G/o*p+d,te=Math.cos(Z),ne=Math.sin(Z);F.x=w*ne,F.y=M*A,F.z=w*te,v.push(F.x,F.y,F.z),y.push(0,A,0),U.x=te*.5+.5,U.y=ne*.5*A+.5,S.push(U.x,U.y),C++}for(let G=0;G<o;G++){const H=I+G,Z=O+G;R===!0?x.push(Z,Z+1,H):x.push(Z+1,Z,H),z+=3}m.addGroup(_,z,R===!0?1:2),_+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends si{constructor(e=1,n=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,n,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Rr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cf extends oi{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const l=[],u=[];d(o),m(r),x(),this.setAttribute("position",new pn(l,3)),this.setAttribute("normal",new pn(l.slice(),3)),this.setAttribute("uv",new pn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(T){const L=new J,R=new J,I=new J;for(let U=0;U<n.length;U+=3)S(n[U+0],L),S(n[U+1],R),S(n[U+2],I),p(L,R,I,T)}function p(T,L,R,I){const U=I+1,F=[];for(let z=0;z<=U;z++){F[z]=[];const w=T.clone().lerp(R,z/U),A=L.clone().lerp(R,z/U),O=U-z;for(let G=0;G<=O;G++)G===0&&z===U?F[z][G]=w:F[z][G]=w.clone().lerp(A,G/O)}for(let z=0;z<U;z++)for(let w=0;w<2*(U-z)-1;w++){const A=Math.floor(w/2);w%2===0?(y(F[z][A+1]),y(F[z+1][A]),y(F[z][A])):(y(F[z][A+1]),y(F[z+1][A+1]),y(F[z+1][A]))}}function m(T){const L=new J;for(let R=0;R<l.length;R+=3)L.x=l[R+0],L.y=l[R+1],L.z=l[R+2],L.normalize().multiplyScalar(T),l[R+0]=L.x,l[R+1]=L.y,l[R+2]=L.z}function x(){const T=new J;for(let L=0;L<l.length;L+=3){T.x=l[L+0],T.y=l[L+1],T.z=l[L+2];const R=M(T)/2/Math.PI+.5,I=_(T)/Math.PI+.5;u.push(R,1-I)}C(),v()}function v(){for(let T=0;T<u.length;T+=6){const L=u[T+0],R=u[T+2],I=u[T+4],U=Math.max(L,R,I),F=Math.min(L,R,I);U>.9&&F<.1&&(L<.2&&(u[T+0]+=1),R<.2&&(u[T+2]+=1),I<.2&&(u[T+4]+=1))}}function y(T){l.push(T.x,T.y,T.z)}function S(T,L){const R=T*3;L.x=e[R+0],L.y=e[R+1],L.z=e[R+2]}function C(){const T=new J,L=new J,R=new J,I=new J,U=new wt,F=new wt,z=new wt;for(let w=0,A=0;w<l.length;w+=9,A+=6){T.set(l[w+0],l[w+1],l[w+2]),L.set(l[w+3],l[w+4],l[w+5]),R.set(l[w+6],l[w+7],l[w+8]),U.set(u[A+0],u[A+1]),F.set(u[A+2],u[A+3]),z.set(u[A+4],u[A+5]),I.copy(T).add(L).add(R).divideScalar(3);const O=M(I);N(U,A+0,T,O),N(F,A+2,L,O),N(z,A+4,R,O)}}function N(T,L,R,I){I<0&&T.x===1&&(u[L]=T.x-1),R.x===0&&R.z===0&&(u[L]=I/2/Math.PI+.5)}function M(T){return Math.atan2(T.z,-T.x)}function _(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cf(e.vertices,e.indices,e.radius,e.detail)}}class Af extends Cf{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Af(e.radius,e.detail)}}class ls extends oi{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const l=e/2,u=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=n/p,S=[],C=[],N=[],M=[];for(let _=0;_<x;_++){const T=_*y-u;for(let L=0;L<m;L++){const R=L*v-l;C.push(R,-T,0),N.push(0,0,1),M.push(L/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let T=0;T<d;T++){const L=T+m*_,R=T+m*(_+1),I=T+1+m*(_+1),U=T+1+m*_;S.push(L,R,U),S.push(R,I,U)}this.setIndex(S),this.setAttribute("position",new pn(C,3)),this.setAttribute("normal",new pn(N,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}class $l extends oi{constructor(e=1,n=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new J,y=new J,S=[],C=[],N=[],M=[];for(let _=0;_<=r;_++){const T=[],L=_/r;let R=0;_===0&&u===0?R=.5/n:_===r&&p===Math.PI&&(R=-.5/n);for(let I=0;I<=n;I++){const U=I/n;v.x=-e*Math.cos(o+U*l)*Math.sin(u+L*d),v.y=e*Math.cos(u+L*d),v.z=e*Math.sin(o+U*l)*Math.sin(u+L*d),C.push(v.x,v.y,v.z),y.copy(v).normalize(),N.push(y.x,y.y,y.z),M.push(U+R,1-L),T.push(m++)}x.push(T)}for(let _=0;_<r;_++)for(let T=0;T<n;T++){const L=x[_][T+1],R=x[_][T],I=x[_+1][T],U=x[_+1][T+1];(_!==0||u>0)&&S.push(L,R,U),(_!==r-1||p<Math.PI)&&S.push(R,I,U)}this.setIndex(S),this.setAttribute("position",new pn(C,3)),this.setAttribute("normal",new pn(N,3)),this.setAttribute("uv",new pn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class z_ extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sn extends ao{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C0,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class V_ extends ao{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class j_ extends ao{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Rf extends Tn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const rd=new Zt,Dm=new J,Im=new J;class B0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=Kn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tf,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Dm),Im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Im),n.updateMatrixWorld(),rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rd,n.coordinateSystem,n.reversedDepth),n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(rd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class G_ extends B0{constructor(){super(new Vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const n=this.camera,r=ea*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||n.far;(r!==n.fov||o!==n.aspect||l!==n.far)&&(n.fov=r,n.aspect=o,n.far=l,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class H_ extends Rf{constructor(e,n,r=0,o=Math.PI/3,l=0,u=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new G_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}}class W_ extends B0{constructor(){super(new Vn(90,1,.5,500)),this.isPointLightShadow=!0}}class Dl extends Rf{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new W_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class z0 extends U0{constructor(e=-1,n=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class X_ extends Rf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class q_ extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class $_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Um(s,e,n,r){const o=Y_(r);switch(n){case E0:return s*e;case T0:return s*e/o.components*o.byteLength;case xf:return s*e/o.components*o.byteLength;case Qs:return s*e*2/o.components*o.byteLength;case vf:return s*e*2/o.components*o.byteLength;case b0:return s*e*3/o.components*o.byteLength;case _i:return s*e*4/o.components*o.byteLength;case _f:return s*e*4/o.components*o.byteLength;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Pd:case Dd:return Math.max(s,16)*Math.max(e,8)/4;case Nd:case Ld:return Math.max(s,8)*Math.max(e,8)/2;case Id:case Ud:case Od:case kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:case Bd:case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case sf:case af:return Math.ceil(s/4)*Math.ceil(e/4)*8;case of:case lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Y_(s){switch(s){case Kn:case y0:return{byteLength:1,components:1};case eo:case S0:case tr:return{byteLength:2,components:1};case mf:case gf:return{byteLength:2,components:4};case Di:case pf:case Ai:return{byteLength:4,components:1};case M0:case w0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function V0(){let s=null,e=!1,n=null,r=null;function o(l,u){n(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){n=l},setContext:function(l){s=l}}}function K_(s){const e=new WeakMap;function n(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((S,C)=>S.start-C.start);let y=0;for(let S=1;S<v.length;S++){const C=v[y],N=v[S];N.start<=C.start+C.count+1?C.count=Math.max(C.count,N.start+N.count-C.start):(++y,v[y]=N)}v.length=y+1;for(let S=0,C=v.length;S<C;S++){const N=v[S];s.bufferSubData(m,N.start*x.BYTES_PER_ELEMENT,x,N.start,N.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var Z_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Q_=`#ifdef USE_ALPHAHASH
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
#endif`,J_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,e1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,t1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,n1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,i1=`#ifdef USE_AOMAP
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
#endif`,r1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,s1=`#ifdef USE_BATCHING
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
#endif`,a1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,o1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,l1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,u1=`#ifdef USE_IRIDESCENCE
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
#endif`,d1=`#ifdef USE_BUMPMAP
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
#endif`,f1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,p1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,m1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,g1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,v1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,y1=`#define PI 3.141592653589793
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
} // validated`,S1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,M1=`vec3 transformedNormal = objectNormal;
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
#endif`,w1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C1="gl_FragColor = linearToOutputTexel( gl_FragColor );",A1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,R1=`#ifdef USE_ENVMAP
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
#endif`,N1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,P1=`#ifdef USE_ENVMAP
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
#endif`,L1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D1=`#ifdef USE_ENVMAP
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
#endif`,I1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,U1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,F1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k1=`#ifdef USE_GRADIENTMAP
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
}`,B1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,z1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j1=`uniform bool receiveShadow;
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
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,H1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,W1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,X1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$1=`PhysicalMaterial material;
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
#endif`,Y1=`uniform sampler2D dfgLUT;
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
}`,K1=`
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
#endif`,Z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,Q1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ey=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ty=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ay=`#if defined( USE_POINTS_UV )
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
#endif`,oy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ly=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,uy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fy=`#ifdef USE_MORPHTARGETS
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
#endif`,hy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,my=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_y=`#ifdef USE_NORMALMAP
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
#endif`,yy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,My=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ey=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,by=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ty=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ay=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ry=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Py=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ly=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Iy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Uy=`float getShadowMask() {
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
}`,Fy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Oy=`#ifdef USE_SKINNING
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
#endif`,ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,By=`#ifdef USE_SKINNING
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
#endif`,zy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Gy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hy=`#ifdef USE_TRANSMISSION
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
#endif`,Wy=`#ifdef USE_TRANSMISSION
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
#endif`,Xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$y=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ky=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zy=`uniform sampler2D t2D;
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
}`,Qy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,eS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nS=`#include <common>
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
}`,iS=`#if DEPTH_PACKING == 3200
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
}`,rS=`#define DISTANCE
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
}`,sS=`#define DISTANCE
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
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`uniform float scale;
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
}`,cS=`uniform vec3 diffuse;
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
}`,uS=`#include <common>
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
}`,dS=`uniform vec3 diffuse;
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
}`,fS=`#define LAMBERT
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
}`,hS=`#define LAMBERT
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
}`,pS=`#define MATCAP
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
}`,mS=`#define MATCAP
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
}`,gS=`#define NORMAL
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
}`,xS=`#define NORMAL
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
}`,vS=`#define PHONG
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
}`,_S=`#define PHONG
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
}`,yS=`#define STANDARD
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
}`,SS=`#define STANDARD
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
}`,MS=`#define TOON
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
}`,wS=`#define TOON
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
}`,ES=`uniform float size;
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
}`,bS=`uniform vec3 diffuse;
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
}`,TS=`#include <common>
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
}`,CS=`uniform vec3 color;
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
}`,AS=`uniform float rotation;
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
}`,RS=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Z_,alphahash_pars_fragment:Q_,alphamap_fragment:J_,alphamap_pars_fragment:e1,alphatest_fragment:t1,alphatest_pars_fragment:n1,aomap_fragment:i1,aomap_pars_fragment:r1,batching_pars_vertex:s1,batching_vertex:a1,begin_vertex:o1,beginnormal_vertex:l1,bsdfs:c1,iridescence_fragment:u1,bumpmap_pars_fragment:d1,clipping_planes_fragment:f1,clipping_planes_pars_fragment:h1,clipping_planes_pars_vertex:p1,clipping_planes_vertex:m1,color_fragment:g1,color_pars_fragment:x1,color_pars_vertex:v1,color_vertex:_1,common:y1,cube_uv_reflection_fragment:S1,defaultnormal_vertex:M1,displacementmap_pars_vertex:w1,displacementmap_vertex:E1,emissivemap_fragment:b1,emissivemap_pars_fragment:T1,colorspace_fragment:C1,colorspace_pars_fragment:A1,envmap_fragment:R1,envmap_common_pars_fragment:N1,envmap_pars_fragment:P1,envmap_pars_vertex:L1,envmap_physical_pars_fragment:G1,envmap_vertex:D1,fog_vertex:I1,fog_pars_vertex:U1,fog_fragment:F1,fog_pars_fragment:O1,gradientmap_pars_fragment:k1,lightmap_pars_fragment:B1,lights_lambert_fragment:z1,lights_lambert_pars_fragment:V1,lights_pars_begin:j1,lights_toon_fragment:H1,lights_toon_pars_fragment:W1,lights_phong_fragment:X1,lights_phong_pars_fragment:q1,lights_physical_fragment:$1,lights_physical_pars_fragment:Y1,lights_fragment_begin:K1,lights_fragment_maps:Z1,lights_fragment_end:Q1,logdepthbuf_fragment:J1,logdepthbuf_pars_fragment:ey,logdepthbuf_pars_vertex:ty,logdepthbuf_vertex:ny,map_fragment:iy,map_pars_fragment:ry,map_particle_fragment:sy,map_particle_pars_fragment:ay,metalnessmap_fragment:oy,metalnessmap_pars_fragment:ly,morphinstance_vertex:cy,morphcolor_vertex:uy,morphnormal_vertex:dy,morphtarget_pars_vertex:fy,morphtarget_vertex:hy,normal_fragment_begin:py,normal_fragment_maps:my,normal_pars_fragment:gy,normal_pars_vertex:xy,normal_vertex:vy,normalmap_pars_fragment:_y,clearcoat_normal_fragment_begin:yy,clearcoat_normal_fragment_maps:Sy,clearcoat_pars_fragment:My,iridescence_pars_fragment:wy,opaque_fragment:Ey,packing:by,premultiplied_alpha_fragment:Ty,project_vertex:Cy,dithering_fragment:Ay,dithering_pars_fragment:Ry,roughnessmap_fragment:Ny,roughnessmap_pars_fragment:Py,shadowmap_pars_fragment:Ly,shadowmap_pars_vertex:Dy,shadowmap_vertex:Iy,shadowmask_pars_fragment:Uy,skinbase_vertex:Fy,skinning_pars_vertex:Oy,skinning_vertex:ky,skinnormal_vertex:By,specularmap_fragment:zy,specularmap_pars_fragment:Vy,tonemapping_fragment:jy,tonemapping_pars_fragment:Gy,transmission_fragment:Hy,transmission_pars_fragment:Wy,uv_pars_fragment:Xy,uv_pars_vertex:qy,uv_vertex:$y,worldpos_vertex:Yy,background_vert:Ky,background_frag:Zy,backgroundCube_vert:Qy,backgroundCube_frag:Jy,cube_vert:eS,cube_frag:tS,depth_vert:nS,depth_frag:iS,distance_vert:rS,distance_frag:sS,equirect_vert:aS,equirect_frag:oS,linedashed_vert:lS,linedashed_frag:cS,meshbasic_vert:uS,meshbasic_frag:dS,meshlambert_vert:fS,meshlambert_frag:hS,meshmatcap_vert:pS,meshmatcap_frag:mS,meshnormal_vert:gS,meshnormal_frag:xS,meshphong_vert:vS,meshphong_frag:_S,meshphysical_vert:yS,meshphysical_frag:SS,meshtoon_vert:MS,meshtoon_frag:wS,points_vert:ES,points_frag:bS,shadow_vert:TS,shadow_frag:CS,sprite_vert:AS,sprite_frag:RS},Ue={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ci={basic:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:Ln([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:Ln([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:Ln([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new At(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:Ln([Ue.points,Ue.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:Ln([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:Ln([Ue.common,Ue.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:Ln([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:Ln([Ue.sprite,Ue.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distance:{uniforms:Ln([Ue.common,Ue.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distance_vert,fragmentShader:mt.distance_frag},shadow:{uniforms:Ln([Ue.lights,Ue.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Ci.physical={uniforms:Ln([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Il={r:0,b:0,g:0},es=new Ii,NS=new Zt;function PS(s,e,n,r,o,l,u){const d=new At(0);let p=l===!0?0:1,m,x,v=null,y=0,S=null;function C(L){let R=L.isScene===!0?L.background:null;return R&&R.isTexture&&(R=(L.backgroundBlurriness>0?n:e).get(R)),R}function N(L){let R=!1;const I=C(L);I===null?_(d,p):I&&I.isColor&&(_(I,1),R=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(L,R){const I=C(R);I&&(I.isCubeTexture||I.mapping===Kl)?(x===void 0&&(x=new gt(new zn(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:ta(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(U,F,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),es.copy(R.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(NS.makeRotationFromEuler(es)),x.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Ft,(v!==I||y!==I.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new gt(new ls(2,2),new Ui({name:"BackgroundMaterial",uniforms:ta(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Ft,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function _(L,R){L.getRGB(Il,I0(s)),r.buffers.color.setClear(Il.r,Il.g,Il.b,R,u)}function T(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,R=1){d.set(L),p=R,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,_(d,p)},render:N,addToRenderList:M,dispose:T}}function LS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(A,O,G,H,Z){let te=!1;const ne=v(H,G,O);l!==ne&&(l=ne,m(l.object)),te=S(A,H,G,Z),te&&C(A,H,G,Z),Z!==null&&e.update(Z,s.ELEMENT_ARRAY_BUFFER),(te||u)&&(u=!1,R(A,O,G,H),Z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Z).buffer))}function p(){return s.createVertexArray()}function m(A){return s.bindVertexArray(A)}function x(A){return s.deleteVertexArray(A)}function v(A,O,G){const H=G.wireframe===!0;let Z=r[A.id];Z===void 0&&(Z={},r[A.id]=Z);let te=Z[O.id];te===void 0&&(te={},Z[O.id]=te);let ne=te[H];return ne===void 0&&(ne=y(p()),te[H]=ne),ne}function y(A){const O=[],G=[],H=[];for(let Z=0;Z<n;Z++)O[Z]=0,G[Z]=0,H[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:H,object:A,attributes:{},index:null}}function S(A,O,G,H){const Z=l.attributes,te=O.attributes;let ne=0;const K=G.getAttributes();for(const $ in K)if(K[$].location>=0){const se=Z[$];let B=te[$];if(B===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(B=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(B=A.instanceColor)),se===void 0||se.attribute!==B||B&&se.data!==B.data)return!0;ne++}return l.attributesNum!==ne||l.index!==H}function C(A,O,G,H){const Z={},te=O.attributes;let ne=0;const K=G.getAttributes();for(const $ in K)if(K[$].location>=0){let se=te[$];se===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(se=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(se=A.instanceColor));const B={};B.attribute=se,se&&se.data&&(B.data=se.data),Z[$]=B,ne++}l.attributes=Z,l.attributesNum=ne,l.index=H}function N(){const A=l.newAttributes;for(let O=0,G=A.length;O<G;O++)A[O]=0}function M(A){_(A,0)}function _(A,O){const G=l.newAttributes,H=l.enabledAttributes,Z=l.attributeDivisors;G[A]=1,H[A]===0&&(s.enableVertexAttribArray(A),H[A]=1),Z[A]!==O&&(s.vertexAttribDivisor(A,O),Z[A]=O)}function T(){const A=l.newAttributes,O=l.enabledAttributes;for(let G=0,H=O.length;G<H;G++)O[G]!==A[G]&&(s.disableVertexAttribArray(G),O[G]=0)}function L(A,O,G,H,Z,te,ne){ne===!0?s.vertexAttribIPointer(A,O,G,Z,te):s.vertexAttribPointer(A,O,G,H,Z,te)}function R(A,O,G,H){N();const Z=H.attributes,te=G.getAttributes(),ne=O.defaultAttributeValues;for(const K in te){const $=te[K];if($.location>=0){let fe=Z[K];if(fe===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor)),fe!==void 0){const se=fe.normalized,B=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;const be=oe.buffer,je=oe.type,We=oe.bytesPerElement,re=je===s.INT||je===s.UNSIGNED_INT||fe.gpuType===pf;if(fe.isInterleavedBufferAttribute){const de=fe.data,ve=de.stride,Le=fe.offset;if(de.isInstancedInterleavedBuffer){for(let Pe=0;Pe<$.locationSize;Pe++)_($.location+Pe,de.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Pe=0;Pe<$.locationSize;Pe++)M($.location+Pe);s.bindBuffer(s.ARRAY_BUFFER,be);for(let Pe=0;Pe<$.locationSize;Pe++)L($.location+Pe,B/$.locationSize,je,se,ve*We,(Le+B/$.locationSize*Pe)*We,re)}else{if(fe.isInstancedBufferAttribute){for(let de=0;de<$.locationSize;de++)_($.location+de,fe.meshPerAttribute);A.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let de=0;de<$.locationSize;de++)M($.location+de);s.bindBuffer(s.ARRAY_BUFFER,be);for(let de=0;de<$.locationSize;de++)L($.location+de,B/$.locationSize,je,se,B*We,B/$.locationSize*de*We,re)}}else if(ne!==void 0){const se=ne[K];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv($.location,se);break;case 3:s.vertexAttrib3fv($.location,se);break;case 4:s.vertexAttrib4fv($.location,se);break;default:s.vertexAttrib1fv($.location,se)}}}}T()}function I(){z();for(const A in r){const O=r[A];for(const G in O){const H=O[G];for(const Z in H)x(H[Z].object),delete H[Z];delete O[G]}delete r[A]}}function U(A){if(r[A.id]===void 0)return;const O=r[A.id];for(const G in O){const H=O[G];for(const Z in H)x(H[Z].object),delete H[Z];delete O[G]}delete r[A.id]}function F(A){for(const O in r){const G=r[O];if(G[A.id]===void 0)continue;const H=G[A.id];for(const Z in H)x(H[Z].object),delete H[Z];delete G[A.id]}}function z(){w(),u=!0,l!==o&&(l=o,m(l.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:z,resetDefaultState:w,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:F,initAttributes:N,enableAttribute:M,disableUnusedAttributes:T}}function DS(s,e,n){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),n.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),n.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let S=0;for(let C=0;C<v;C++)S+=x[C];n.update(S,r,1)}function p(m,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let C=0;C<m.length;C++)u(m[C],x[C],y[C]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let C=0;for(let N=0;N<v;N++)C+=x[N]*y[N];n.update(C,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function IS(s,e,n,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==_i&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const z=F===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Kn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ai&&!z)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=p(m);x!==m&&(lt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=n.logarithmicDepthBuffer===!0,y=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),N=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),T=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:C,maxTextureSize:N,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:T,maxVaryings:L,maxFragmentUniforms:R,maxSamples:I,samples:U}}function US(s){const e=this;let n=null,r=0,o=!1,l=!1;const u=new ns,d=new ft,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){n=x(v,y,0)},this.setState=function(v,y,S){const C=v.clippingPlanes,N=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!o||C===null||C.length===0||l&&!M)l?x(null):m();else{const T=l?0:r,L=T*4;let R=_.clippingState||null;p.value=R,R=x(C,y,L,S);for(let I=0;I!==L;++I)R[I]=n[I];_.clippingState=R,this.numIntersection=N?this.numPlanes:0,this.numPlanes+=T}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,C){const N=v!==null?v.length:0;let M=null;if(N!==0){if(M=p.value,C!==!0||M===null){const _=S+N*4,T=y.matrixWorldInverse;d.getNormalMatrix(T),(M===null||M.length<_)&&(M=new Float32Array(_));for(let L=0,R=S;L!==N;++L,R+=4)u.copy(v[L]).applyMatrix4(T,d),u.normal.toArray(M,R),M[R+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=N,e.numIntersection=0,M}}function FS(s){let e=new WeakMap;function n(u,d){return d===Td?u.mapping=cs:d===Cd&&(u.mapping=Zs),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Td||d===Cd)if(e.has(u)){const p=e.get(u).texture;return n(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new O0(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Pr=4,Fm=[.125,.215,.35,.446,.526,.582],ss=20,OS=256,Xa=new z0,Om=new At;let sd=null,ad=0,od=0,ld=!1;const kS=new J;class km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,l={}){const{size:u=256,position:d=kS}=l;sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:tr,format:_i,colorSpace:Js,depthBuffer:!1},o=Bm(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bm(e,n,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=BS(l)),this._blurMaterial=VS(l,e,n),this._ggxMaterial=zS(l,e,n)}return o}_compileMaterial(e){const n=new gt(new oi,e);this._renderer.compile(n,Xa)}_sceneToCubeUV(e,n,r,o,l){const p=new Vn(90,1,n,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(Om),v.toneMapping=Ni,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new gt(new zn,new Ja({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const N=this._backgroundBox,M=N.material;let _=!1;const T=e.background;T?T.isColor&&(M.color.copy(T),e.background=null,_=!0):(M.color.copy(Om),_=!0);for(let L=0;L<6;L++){const R=L%3;R===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[L],l.y,l.z)):R===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[L]));const I=this._cubeSize;Xs(o,R*I,L>2?I:0,I,I),v.setRenderTarget(o),_&&v.render(N,p),v.render(e,p)}v.toneMapping=S,v.autoClear=y,e.background=T}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===cs||e.mapping===Zs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zm());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;Xs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(u,Xa)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=n/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),y=0+m*1.25,S=v*y,{_lodMax:C}=this,N=this._sizeLods[r],M=3*N*(r>C-Pr?r-C+Pr:0),_=4*(this._cubeSize-N);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=C-n,Xs(l,M,_,3*N,2*N),o.setRenderTarget(l),o.render(d,Xa),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=C-r,Xs(e,M,_,3*N,2*N),o.setRenderTarget(e),o.render(d,Xa)}_blur(e,n,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,n,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const y=m.uniforms,S=this._sizeLods[r]-1,C=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ss-1),N=l/C,M=isFinite(l)?1+Math.floor(x*N):ss;M>ss&&lt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ss}`);const _=[];let T=0;for(let F=0;F<ss;++F){const z=F/N,w=Math.exp(-z*z/2);_.push(w),F===0?T+=w:F<M&&(T+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/T;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=C,y.mipInt.value=L-r;const R=this._sizeLods[o],I=3*R*(o>L-Pr?o-L+Pr:0),U=4*(this._cubeSize-R);Xs(n,I,U,3*R,2*R),p.setRenderTarget(n),p.render(v,Xa)}}function BS(s){const e=[],n=[],r=[];let o=s;const l=s-Pr+1+Fm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-Pr?p=Fm[u-s+Pr-1]:u===0&&(p=0),n.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,C=6,N=3,M=2,_=1,T=new Float32Array(N*C*S),L=new Float32Array(M*C*S),R=new Float32Array(_*C*S);for(let U=0;U<S;U++){const F=U%3*2/3-1,z=U>2?0:-1,w=[F,z,0,F+2/3,z,0,F+2/3,z+1,0,F,z,0,F+2/3,z+1,0,F,z+1,0];T.set(w,N*C*U),L.set(y,M*C*U);const A=[U,U,U,U,U,U];R.set(A,_*C*U)}const I=new oi;I.setAttribute("position",new Li(T,N)),I.setAttribute("uv",new Li(L,M)),I.setAttribute("faceIndex",new Li(R,_)),r.push(new gt(I,null)),o>Pr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Bm(s,e,n){const r=new Pi(s,e,n);return r.texture.mapping=Kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function zS(s,e,n){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:OS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function VS(s,e,n){const r=new Float32Array(ss),o=new J(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function zm(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Vm(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function jS(s){let e=new WeakMap,n=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Td||p===Cd,x=p===cs||p===Zs;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return n===null&&(n=new km(s)),v=m?n.fromEquirectangular(d,v):n.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(n===null&&(n=new km(s)),v=m?n.fromEquirectangular(d):n.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function GS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&no("WebGLRenderer: "+r+" extension not supported."),o}}}function HS(s,e,n,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const C in y.attributes)e.remove(y.attributes[C]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,n.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,n.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,C=v.attributes.position;let N=0;if(S!==null){const T=S.array;N=S.version;for(let L=0,R=T.length;L<R;L+=3){const I=T[L+0],U=T[L+1],F=T[L+2];y.push(I,U,U,F,F,I)}}else if(C!==void 0){const T=C.array;N=C.version;for(let L=0,R=T.length/3-1;L<R;L+=3){const I=L+0,U=L+1,F=L+2;y.push(I,U,U,F,F,I)}}else return;const M=new(A0(y)?D0:L0)(y,1);M.version=N;const _=l.get(v);_&&e.remove(_),l.set(v,M)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function WS(s,e,n){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),n.update(S,r,1)}function m(y,S,C){C!==0&&(s.drawElementsInstanced(r,S,l,y*u,C),n.update(S,r,C))}function x(y,S,C){if(C===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,C);let M=0;for(let _=0;_<C;_++)M+=S[_];n.update(M,r,1)}function v(y,S,C,N){if(C===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/u,S[_],N[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,N,0,C);let _=0;for(let T=0;T<C;T++)_+=S[T]*N[T];n.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function XS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(n.calls++,u){case s.TRIANGLES:n.triangles+=d*(l/3);break;case s.LINES:n.lines+=d*(l/2);break;case s.LINE_STRIP:n.lines+=d*(l-1);break;case s.LINE_LOOP:n.lines+=d*l;break;case s.POINTS:n.points+=d*l;break;default:Lt("WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function qS(s,e,n){const r=new WeakMap,o=new Kt;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let A=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",A)};var S=A;y!==void 0&&y.texture.dispose();const C=d.morphAttributes.position!==void 0,N=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],T=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;C===!0&&(R=1),N===!0&&(R=2),M===!0&&(R=3);let I=d.attributes.position.count*R,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*U*4*v),z=new R0(F,I,U,v);z.type=Ai,z.needsUpdate=!0;const w=R*4;for(let O=0;O<v;O++){const G=_[O],H=T[O],Z=L[O],te=I*U*4*O;for(let ne=0;ne<G.count;ne++){const K=ne*w;C===!0&&(o.fromBufferAttribute(G,ne),F[te+K+0]=o.x,F[te+K+1]=o.y,F[te+K+2]=o.z,F[te+K+3]=0),N===!0&&(o.fromBufferAttribute(H,ne),F[te+K+4]=o.x,F[te+K+5]=o.y,F[te+K+6]=o.z,F[te+K+7]=0),M===!0&&(o.fromBufferAttribute(Z,ne),F[te+K+8]=o.x,F[te+K+9]=o.y,F[te+K+10]=o.z,F[te+K+11]=Z.itemSize===4?o.w:1)}}y={count:v,texture:z,size:new wt(I,U)},r.set(d,y),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,n);else{let C=0;for(let M=0;M<m.length;M++)C+=m[M];const N=d.morphTargetsRelative?1:1-C;p.getUniforms().setValue(s,"morphTargetBaseInfluence",N),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function $S(s,e,n,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(n.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:l,dispose:u}}const YS={[f0]:"LINEAR_TONE_MAPPING",[h0]:"REINHARD_TONE_MAPPING",[p0]:"CINEON_TONE_MAPPING",[m0]:"ACES_FILMIC_TONE_MAPPING",[x0]:"AGX_TONE_MAPPING",[v0]:"NEUTRAL_TONE_MAPPING",[g0]:"CUSTOM_TONE_MAPPING"};function KS(s,e,n,r,o){const l=new Pi(e,n,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Pi(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),d=new oi;d.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new pn([0,2,0,0,2,0],2));const p=new z_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new gt(d,p),x=new z0(-1,1,1,-1,0,1);let v=null,y=null,S=!1,C,N=null,M=[],_=!1;this.setSize=function(T,L){l.setSize(T,L),u.setSize(T,L);for(let R=0;R<M.length;R++){const I=M[R];I.setSize&&I.setSize(T,L)}},this.setEffects=function(T){M=T,_=M.length>0&&M[0].isRenderPass===!0;const L=l.width,R=l.height;for(let I=0;I<M.length;I++){const U=M[I];U.setSize&&U.setSize(L,R)}},this.begin=function(T,L){if(S||T.toneMapping===Ni&&M.length===0)return!1;if(N=L,L!==null){const R=L.width,I=L.height;(l.width!==R||l.height!==I)&&this.setSize(R,I)}return _===!1&&T.setRenderTarget(l),C=T.toneMapping,T.toneMapping=Ni,!0},this.hasRenderPass=function(){return _},this.end=function(T,L){T.toneMapping=C,S=!0;let R=l,I=u;for(let U=0;U<M.length;U++){const F=M[U];if(F.enabled!==!1&&(F.render(T,I,R,L),F.needsSwap!==!1)){const z=R;R=I,I=z}}if(v!==T.outputColorSpace||y!==T.toneMapping){v=T.outputColorSpace,y=T.toneMapping,p.defines={},Ct.getTransfer(v)===Ft&&(p.defines.SRGB_TRANSFER="");const U=YS[y];U&&(p.defines[U]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,T.setRenderTarget(N),T.render(m,x),N=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const j0=new Dn,cf=new io(1,1),G0=new R0,H0=new m_,W0=new F0,jm=[],Gm=[],Hm=new Float32Array(16),Wm=new Float32Array(9),Xm=new Float32Array(4);function ra(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let l=jm[o];if(l===void 0&&(l=new Float32Array(o),jm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=n,s[u].toArray(l,d)}return l}function an(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function on(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Ql(s,e){let n=Gm[e];n===void 0&&(n=new Int32Array(e),Gm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function ZS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2fv(this.addr,e),on(n,e)}}function JS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;s.uniform3fv(this.addr,e),on(n,e)}}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4fv(this.addr,e),on(n,e)}}function tM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Xm.set(r),s.uniformMatrix2fv(this.addr,!1,Xm),on(n,r)}}function nM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Wm.set(r),s.uniformMatrix3fv(this.addr,!1,Wm),on(n,r)}}function iM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Hm.set(r),s.uniformMatrix4fv(this.addr,!1,Hm),on(n,r)}}function rM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function sM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2iv(this.addr,e),on(n,e)}}function aM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3iv(this.addr,e),on(n,e)}}function oM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4iv(this.addr,e),on(n,e)}}function lM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function cM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2uiv(this.addr,e),on(n,e)}}function uM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3uiv(this.addr,e),on(n,e)}}function dM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4uiv(this.addr,e),on(n,e)}}function fM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(cf.compareFunction=n.isReversedDepthBuffer()?Sf:yf,l=cf):l=j0,n.setTexture2D(e||l,o)}function hM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||H0,o)}function pM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||W0,o)}function mM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||G0,o)}function gM(s){switch(s){case 5126:return ZS;case 35664:return QS;case 35665:return JS;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return rM;case 35667:case 35671:return sM;case 35668:case 35672:return aM;case 35669:case 35673:return oM;case 5125:return lM;case 36294:return cM;case 36295:return uM;case 36296:return dM;case 35678:case 36198:case 36298:case 36306:case 35682:return fM;case 35679:case 36299:case 36307:return hM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}function xM(s,e){s.uniform1fv(this.addr,e)}function vM(s,e){const n=ra(e,this.size,2);s.uniform2fv(this.addr,n)}function _M(s,e){const n=ra(e,this.size,3);s.uniform3fv(this.addr,n)}function yM(s,e){const n=ra(e,this.size,4);s.uniform4fv(this.addr,n)}function SM(s,e){const n=ra(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function MM(s,e){const n=ra(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function wM(s,e){const n=ra(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function EM(s,e){s.uniform1iv(this.addr,e)}function bM(s,e){s.uniform2iv(this.addr,e)}function TM(s,e){s.uniform3iv(this.addr,e)}function CM(s,e){s.uniform4iv(this.addr,e)}function AM(s,e){s.uniform1uiv(this.addr,e)}function RM(s,e){s.uniform2uiv(this.addr,e)}function NM(s,e){s.uniform3uiv(this.addr,e)}function PM(s,e){s.uniform4uiv(this.addr,e)}function LM(s,e,n){const r=this.cache,o=e.length,l=Ql(n,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=cf:u=j0;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||u,l[d])}function DM(s,e,n){const r=this.cache,o=e.length,l=Ql(n,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||H0,l[u])}function IM(s,e,n){const r=this.cache,o=e.length,l=Ql(n,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||W0,l[u])}function UM(s,e,n){const r=this.cache,o=e.length,l=Ql(n,o);an(r,l)||(s.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||G0,l[u])}function FM(s){switch(s){case 5126:return xM;case 35664:return vM;case 35665:return _M;case 35666:return yM;case 35674:return SM;case 35675:return MM;case 35676:return wM;case 5124:case 35670:return EM;case 35667:case 35671:return bM;case 35668:case 35672:return TM;case 35669:case 35673:return CM;case 5125:return AM;case 36294:return RM;case 36295:return NM;case 36296:return PM;case 35678:case 36198:case 36298:case 36306:case 35682:return LM;case 35679:case 36299:case 36307:return DM;case 35680:case 36300:case 36308:case 36293:return IM;case 36289:case 36303:case 36311:case 36292:return UM}}class OM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=gM(n.type)}}class kM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=FM(n.type)}}class BM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,n[d.id],r)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function qm(s,e){s.seq.push(e),s.map[e.id]=e}function zM(s,e,n){const r=s.name,o=r.length;for(cd.lastIndex=0;;){const l=cd.exec(r),u=cd.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){qm(n,m===void 0?new OM(d,s,e):new kM(d,s,e));break}else{let v=n.map[d];v===void 0&&(v=new BM(d),qm(n,v)),n=v}}}class Gl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(n,u),p=e.getUniformLocation(n,d.name);zM(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,n,r,o){const l=this.map[n];l!==void 0&&l.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let l=0,u=n.length;l!==u;++l){const d=n[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in n&&r.push(u)}return r}}function $m(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const VM=37297;let jM=0;function GM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,n.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return r.join(`
`)}const Ym=new ft;function HM(s){Ct._getMatrix(Ym,Ct.workingColorSpace,s);const e=`mat3( ${Ym.elements.map(n=>n.toFixed(4))} )`;switch(Ct.getTransfer(s)){case Wl:return[e,"LinearTransferOETF"];case Ft:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Km(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+l+`

`+GM(s.getShaderSource(e),d)}else return l}function WM(s,e){const n=HM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const XM={[f0]:"Linear",[h0]:"Reinhard",[p0]:"Cineon",[m0]:"ACESFilmic",[x0]:"AgX",[v0]:"Neutral",[g0]:"Custom"};function qM(s,e){const n=XM[e];return n===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ul=new J;function $M(){Ct.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),n=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ka).join(`
`)}function KM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function ZM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),n[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return n}function Ka(s){return s!==""}function Zm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Qm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QM=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(s){return s.replace(QM,ew)}const JM=new Map;function ew(s,e){let n=mt[e];if(n===void 0){const r=JM.get(e);if(r!==void 0)n=mt[r],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return uf(n)}const tw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jm(s){return s.replace(tw,nw)}function nw(s,e,n,r){let o="";for(let l=parseInt(e);l<parseInt(n);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function e0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const iw={[kl]:"SHADOWMAP_TYPE_PCF",[Ya]:"SHADOWMAP_TYPE_VSM"};function rw(s){return iw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sw={[cs]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function aw(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":sw[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const ow={[Zs]:"ENVMAP_MODE_REFRACTION"};function lw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":ow[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const cw={[d0]:"ENVMAP_BLENDING_MULTIPLY",[Uv]:"ENVMAP_BLENDING_MIX",[Fv]:"ENVMAP_BLENDING_ADD"};function uw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":cw[s.combine]||"ENVMAP_BLENDING_NONE"}function dw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function fw(s,e,n,r){const o=s.getContext(),l=n.defines;let u=n.vertexShader,d=n.fragmentShader;const p=rw(n),m=aw(n),x=lw(n),v=uw(n),y=dw(n),S=YM(n),C=KM(l),N=o.createProgram();let M,_,T=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,C].filter(Ka).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,C].filter(Ka).join(`
`),_.length>0&&(_+=`
`)):(M=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,C,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ka).join(`
`),_=[e0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,C,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ni?"#define TONE_MAPPING":"",n.toneMapping!==Ni?mt.tonemapping_pars_fragment:"",n.toneMapping!==Ni?qM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,WM("linearToOutputTexel",n.outputColorSpace),$M(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ka).join(`
`)),u=uf(u),u=Zm(u,n),u=Qm(u,n),d=uf(d),d=Zm(d,n),d=Qm(d,n),u=Jm(u),d=Jm(d),n.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",n.glslVersion===fm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===fm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=T+M+u,R=T+_+d,I=$m(o,o.VERTEX_SHADER,L),U=$m(o,o.FRAGMENT_SHADER,R);o.attachShader(N,I),o.attachShader(N,U),n.index0AttributeName!==void 0?o.bindAttribLocation(N,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(N,0,"position"),o.linkProgram(N);function F(O){if(s.debug.checkShaderErrors){const G=o.getProgramInfoLog(N)||"",H=o.getShaderInfoLog(I)||"",Z=o.getShaderInfoLog(U)||"",te=G.trim(),ne=H.trim(),K=Z.trim();let $=!0,fe=!0;if(o.getProgramParameter(N,o.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,N,I,U);else{const se=Km(o,I,"vertex"),B=Km(o,U,"fragment");Lt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(N,o.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+te+`
`+se+`
`+B)}else te!==""?lt("WebGLProgram: Program Info Log:",te):(ne===""||K==="")&&(fe=!1);fe&&(O.diagnostics={runnable:$,programLog:te,vertexShader:{log:ne,prefix:M},fragmentShader:{log:K,prefix:_}})}o.deleteShader(I),o.deleteShader(U),z=new Gl(o,N),w=ZM(o,N)}let z;this.getUniforms=function(){return z===void 0&&F(this),z};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let A=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(N,VM)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(N),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jM++,this.cacheKey=e,this.usedTimes=1,this.program=N,this.vertexShader=I,this.fragmentShader=U,this}let hw=0;class pw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new mw(e),n.set(e,r)),r}}class mw{constructor(e){this.id=hw++,this.code=e,this.usedTimes=0}}function gw(s,e,n,r,o,l,u){const d=new N0,p=new pw,m=new Set,x=[],v=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const C={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function N(w){return m.add(w),w===0?"uv":`uv${w}`}function M(w,A,O,G,H){const Z=G.fog,te=H.geometry,ne=w.isMeshStandardMaterial?G.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||ne),$=K&&K.mapping===Kl?K.image.height:null,fe=C[w.type];w.precision!==null&&(S=o.getMaxPrecision(w.precision),S!==w.precision&&lt("WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const se=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,B=se!==void 0?se.length:0;let oe=0;te.morphAttributes.position!==void 0&&(oe=1),te.morphAttributes.normal!==void 0&&(oe=2),te.morphAttributes.color!==void 0&&(oe=3);let be,je,We,re;if(fe){const Et=Ci[fe];be=Et.vertexShader,je=Et.fragmentShader}else be=w.vertexShader,je=w.fragmentShader,p.update(w),We=p.getVertexShaderID(w),re=p.getFragmentShaderID(w);const de=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Le=H.isInstancedMesh===!0,Pe=H.isBatchedMesh===!0,xt=!!w.map,Wt=!!w.matcap,dt=!!K,yt=!!w.aoMap,Rt=!!w.lightMap,at=!!w.bumpMap,kt=!!w.normalMap,V=!!w.displacementMap,zt=!!w.emissiveMap,ht=!!w.metalnessMap,vt=!!w.roughnessMap,Ge=w.anisotropy>0,D=w.clearcoat>0,E=w.dispersion>0,q=w.iridescence>0,he=w.sheen>0,pe=w.transmission>0,ue=Ge&&!!w.anisotropyMap,Xe=D&&!!w.clearcoatMap,Te=D&&!!w.clearcoatNormalMap,ze=D&&!!w.clearcoatRoughnessMap,Je=q&&!!w.iridescenceMap,_e=q&&!!w.iridescenceThicknessMap,Ce=he&&!!w.sheenColorMap,Ve=he&&!!w.sheenRoughnessMap,Fe=!!w.specularMap,we=!!w.specularColorMap,ot=!!w.specularIntensityMap,W=pe&&!!w.transmissionMap,De=pe&&!!w.thicknessMap,Me=!!w.gradientMap,Ie=!!w.alphaMap,ye=w.alphaTest>0,me=!!w.alphaHash,Re=!!w.extensions;let rt=Ni;w.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(rt=s.toneMapping);const Ut={shaderID:fe,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:je,defines:w.defines,customVertexShaderID:We,customFragmentShaderID:re,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:Pe,batchingColor:Pe&&H._colorsTexture!==null,instancing:Le,instancingColor:Le&&H.instanceColor!==null,instancingMorph:Le&&H.morphTexture!==null,outputColorSpace:de===null?s.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Js,alphaToCoverage:!!w.alphaToCoverage,map:xt,matcap:Wt,envMap:dt,envMapMode:dt&&K.mapping,envMapCubeUVHeight:$,aoMap:yt,lightMap:Rt,bumpMap:at,normalMap:kt,displacementMap:V,emissiveMap:zt,normalMapObjectSpace:kt&&w.normalMapType===Bv,normalMapTangentSpace:kt&&w.normalMapType===C0,metalnessMap:ht,roughnessMap:vt,anisotropy:Ge,anisotropyMap:ue,clearcoat:D,clearcoatMap:Xe,clearcoatNormalMap:Te,clearcoatRoughnessMap:ze,dispersion:E,iridescence:q,iridescenceMap:Je,iridescenceThicknessMap:_e,sheen:he,sheenColorMap:Ce,sheenRoughnessMap:Ve,specularMap:Fe,specularColorMap:we,specularIntensityMap:ot,transmission:pe,transmissionMap:W,thicknessMap:De,gradientMap:Me,opaque:w.transparent===!1&&w.blending===$s&&w.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:me,combine:w.combine,mapUv:xt&&N(w.map.channel),aoMapUv:yt&&N(w.aoMap.channel),lightMapUv:Rt&&N(w.lightMap.channel),bumpMapUv:at&&N(w.bumpMap.channel),normalMapUv:kt&&N(w.normalMap.channel),displacementMapUv:V&&N(w.displacementMap.channel),emissiveMapUv:zt&&N(w.emissiveMap.channel),metalnessMapUv:ht&&N(w.metalnessMap.channel),roughnessMapUv:vt&&N(w.roughnessMap.channel),anisotropyMapUv:ue&&N(w.anisotropyMap.channel),clearcoatMapUv:Xe&&N(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&N(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&N(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Je&&N(w.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&N(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&N(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&N(w.sheenRoughnessMap.channel),specularMapUv:Fe&&N(w.specularMap.channel),specularColorMapUv:we&&N(w.specularColorMap.channel),specularIntensityMapUv:ot&&N(w.specularIntensityMap.channel),transmissionMapUv:W&&N(w.transmissionMap.channel),thicknessMapUv:De&&N(w.thicknessMap.channel),alphaMapUv:Ie&&N(w.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(kt||Ge),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!te.attributes.uv&&(xt||Ie),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ve,skinning:H.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:B,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&O.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:xt&&w.map.isVideoTexture===!0&&Ct.getTransfer(w.map.colorSpace)===Ft,decodeVideoTextureEmissive:zt&&w.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(w.emissiveMap.colorSpace)===Ft,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Yi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Re&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&w.extensions.multiDraw===!0||Pe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ut.vertexUv1s=m.has(1),Ut.vertexUv2s=m.has(2),Ut.vertexUv3s=m.has(3),m.clear(),Ut}function _(w){const A=[];if(w.shaderID?A.push(w.shaderID):(A.push(w.customVertexShaderID),A.push(w.customFragmentShaderID)),w.defines!==void 0)for(const O in w.defines)A.push(O),A.push(w.defines[O]);return w.isRawShaderMaterial===!1&&(T(A,w),L(A,w),A.push(s.outputColorSpace)),A.push(w.customProgramCacheKey),A.join()}function T(w,A){w.push(A.precision),w.push(A.outputColorSpace),w.push(A.envMapMode),w.push(A.envMapCubeUVHeight),w.push(A.mapUv),w.push(A.alphaMapUv),w.push(A.lightMapUv),w.push(A.aoMapUv),w.push(A.bumpMapUv),w.push(A.normalMapUv),w.push(A.displacementMapUv),w.push(A.emissiveMapUv),w.push(A.metalnessMapUv),w.push(A.roughnessMapUv),w.push(A.anisotropyMapUv),w.push(A.clearcoatMapUv),w.push(A.clearcoatNormalMapUv),w.push(A.clearcoatRoughnessMapUv),w.push(A.iridescenceMapUv),w.push(A.iridescenceThicknessMapUv),w.push(A.sheenColorMapUv),w.push(A.sheenRoughnessMapUv),w.push(A.specularMapUv),w.push(A.specularColorMapUv),w.push(A.specularIntensityMapUv),w.push(A.transmissionMapUv),w.push(A.thicknessMapUv),w.push(A.combine),w.push(A.fogExp2),w.push(A.sizeAttenuation),w.push(A.morphTargetsCount),w.push(A.morphAttributeCount),w.push(A.numDirLights),w.push(A.numPointLights),w.push(A.numSpotLights),w.push(A.numSpotLightMaps),w.push(A.numHemiLights),w.push(A.numRectAreaLights),w.push(A.numDirLightShadows),w.push(A.numPointLightShadows),w.push(A.numSpotLightShadows),w.push(A.numSpotLightShadowsWithMaps),w.push(A.numLightProbes),w.push(A.shadowMapType),w.push(A.toneMapping),w.push(A.numClippingPlanes),w.push(A.numClipIntersection),w.push(A.depthPacking)}function L(w,A){d.disableAll(),A.instancing&&d.enable(0),A.instancingColor&&d.enable(1),A.instancingMorph&&d.enable(2),A.matcap&&d.enable(3),A.envMap&&d.enable(4),A.normalMapObjectSpace&&d.enable(5),A.normalMapTangentSpace&&d.enable(6),A.clearcoat&&d.enable(7),A.iridescence&&d.enable(8),A.alphaTest&&d.enable(9),A.vertexColors&&d.enable(10),A.vertexAlphas&&d.enable(11),A.vertexUv1s&&d.enable(12),A.vertexUv2s&&d.enable(13),A.vertexUv3s&&d.enable(14),A.vertexTangents&&d.enable(15),A.anisotropy&&d.enable(16),A.alphaHash&&d.enable(17),A.batching&&d.enable(18),A.dispersion&&d.enable(19),A.batchingColor&&d.enable(20),A.gradientMap&&d.enable(21),w.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),w.push(d.mask)}function R(w){const A=C[w.type];let O;if(A){const G=Ci[A];O=R_.clone(G.uniforms)}else O=w.uniforms;return O}function I(w,A){let O=v.get(A);return O!==void 0?++O.usedTimes:(O=new fw(s,A,w,l),x.push(O),v.set(A,O)),O}function U(w){if(--w.usedTimes===0){const A=x.indexOf(w);x[A]=x[x.length-1],x.pop(),v.delete(w.cacheKey),w.destroy()}}function F(w){p.remove(w)}function z(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:R,acquireProgram:I,releaseProgram:U,releaseShaderCache:F,programs:x,dispose:z}}function xw(){let s=new WeakMap;function e(u){return s.has(u)}function n(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:l}}function vw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function t0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function n0(){const s=[];let e=0;const n=[],r=[],o=[];function l(){e=0,n.length=0,r.length=0,o.length=0}function u(v,y,S,C,N,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:C,renderOrder:v.renderOrder,z:N,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=C,_.renderOrder=v.renderOrder,_.z=N,_.group=M),e++,_}function d(v,y,S,C,N,M){const _=u(v,y,S,C,N,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):n.push(_)}function p(v,y,S,C,N,M){const _=u(v,y,S,C,N,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):n.unshift(_)}function m(v,y){n.length>1&&n.sort(v||vw),r.length>1&&r.sort(y||t0),o.length>1&&o.sort(y||t0)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function _w(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new n0,s.set(r,[u])):o>=l.length?(u=new n0,l.push(u)):u=l[o],u}function n(){s=new WeakMap}return{get:e,dispose:n}}function yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new At};break;case"SpotLight":n={position:new J,direction:new J,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new At,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new At,groundColor:new At};break;case"RectAreaLight":n={color:new At,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=n,n}}}function Sw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let Mw=0;function ww(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Ew(s){const e=new yw,n=Sw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new J);const o=new J,l=new Zt,u=new Zt;function d(m){let x=0,v=0,y=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let S=0,C=0,N=0,M=0,_=0,T=0,L=0,R=0,I=0,U=0,F=0;m.sort(ww);for(let w=0,A=m.length;w<A;w++){const O=m[w],G=O.color,H=O.intensity,Z=O.distance;let te=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Qs?te=O.shadow.map.texture:te=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)x+=G.r*H,v+=G.g*H,y+=G.b*H;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(O.sh.coefficients[ne],H);F++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const K=O.shadow,$=n.get(O);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.directionalShadow[S]=$,r.directionalShadowMap[S]=te,r.directionalShadowMatrix[S]=O.shadow.matrix,T++}r.directional[S]=ne,S++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(G).multiplyScalar(H),ne.distance=Z,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,r.spot[N]=ne;const K=O.shadow;if(O.map&&(r.spotLightMap[I]=O.map,I++,K.updateMatrices(O),O.castShadow&&U++),r.spotLightMatrix[N]=K.matrix,O.castShadow){const $=n.get(O);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.spotShadow[N]=$,r.spotShadowMap[N]=te,R++}N++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy(G).multiplyScalar(H),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),r.rectArea[M]=ne,M++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const K=O.shadow,$=n.get(O);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,r.pointShadow[C]=$,r.pointShadowMap[C]=te,r.pointShadowMatrix[C]=O.shadow.matrix,L++}r.point[C]=ne,C++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(H),ne.groundColor.copy(O.groundColor).multiplyScalar(H),r.hemi[_]=ne,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==S||z.pointLength!==C||z.spotLength!==N||z.rectAreaLength!==M||z.hemiLength!==_||z.numDirectionalShadows!==T||z.numPointShadows!==L||z.numSpotShadows!==R||z.numSpotMaps!==I||z.numLightProbes!==F)&&(r.directional.length=S,r.spot.length=N,r.rectArea.length=M,r.point.length=C,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=R+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=F,z.directionalLength=S,z.pointLength=C,z.spotLength=N,z.rectAreaLength=M,z.hemiLength=_,z.numDirectionalShadows=T,z.numPointShadows=L,z.numSpotShadows=R,z.numSpotMaps=I,z.numLightProbes=F,r.version=Mw++)}function p(m,x){let v=0,y=0,S=0,C=0,N=0;const M=x.matrixWorldInverse;for(let _=0,T=m.length;_<T;_++){const L=m[_];if(L.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),v++}else if(L.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),S++}else if(L.isRectAreaLight){const R=r.rectArea[C];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),u.identity(),l.copy(L.matrixWorld),l.premultiply(M),u.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),C++}else if(L.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(M),y++}else if(L.isHemisphereLight){const R=r.hemi[N];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(M),N++}}}return{setup:d,setupView:p,state:r}}function i0(s){const e=new Ew(s),n=[],r=[];function o(x){m.camera=x,n.length=0,r.length=0}function l(x){n.push(x)}function u(x){r.push(x)}function d(){e.setup(n)}function p(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function bw(s){let e=new WeakMap;function n(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new i0(s),e.set(o,[d])):l>=u.length?(d=new i0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const Tw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cw=`uniform sampler2D shadow_pass;
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
}`,Aw=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Rw=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],r0=new Zt,qa=new J,ud=new J;function Nw(s,e,n){let r=new Tf;const o=new wt,l=new wt,u=new Kt,d=new V_,p=new j_,m={},x=n.maxTextureSize,v={[Lr]:jn,[jn]:Lr,[Yi]:Yi},y=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:Tw,fragmentShader:Cw}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const C=new oi;C.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const N=new gt(C,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let _=this.type;this.render=function(U,F,z){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||U.length===0)return;U.type===u0&&(lt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=kl);const w=s.getRenderTarget(),A=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),G=s.state;G.setBlending(Ji),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const H=_!==this.type;H&&F.traverse(function(Z){Z.material&&(Array.isArray(Z.material)?Z.material.forEach(te=>te.needsUpdate=!0):Z.material.needsUpdate=!0)});for(let Z=0,te=U.length;Z<te;Z++){const ne=U[Z],K=ne.shadow;if(K===void 0){lt("WebGLShadowMap:",ne,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const $=K.getFrameExtents();if(o.multiply($),l.copy(K.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/$.x),o.x=l.x*$.x,K.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/$.y),o.y=l.y*$.y,K.mapSize.y=l.y)),K.map===null||H===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ya){if(ne.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Pi(o.x,o.y,{format:Qs,type:tr,minFilter:bn,magFilter:bn,generateMipmaps:!1}),K.map.texture.name=ne.name+".shadowMap",K.map.depthTexture=new io(o.x,o.y,Ai),K.map.depthTexture.name=ne.name+".shadowMapDepth",K.map.depthTexture.format=nr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=xn,K.map.depthTexture.magFilter=xn}else{ne.isPointLight?(K.map=new O0(o.x),K.map.depthTexture=new B_(o.x,Di)):(K.map=new Pi(o.x,o.y),K.map.depthTexture=new io(o.x,o.y,Di)),K.map.depthTexture.name=ne.name+".shadowMap",K.map.depthTexture.format=nr;const se=s.state.buffers.depth.getReversed();this.type===kl?(K.map.depthTexture.compareFunction=se?Sf:yf,K.map.depthTexture.minFilter=bn,K.map.depthTexture.magFilter=bn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=xn,K.map.depthTexture.magFilter=xn)}K.camera.updateProjectionMatrix()}const fe=K.map.isWebGLCubeRenderTarget?6:1;for(let se=0;se<fe;se++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,se),s.clear();else{se===0&&(s.setRenderTarget(K.map),s.clear());const B=K.getViewport(se);u.set(l.x*B.x,l.y*B.y,l.x*B.z,l.y*B.w),G.viewport(u)}if(ne.isPointLight){const B=K.camera,oe=K.matrix,be=ne.distance||B.far;be!==B.far&&(B.far=be,B.updateProjectionMatrix()),qa.setFromMatrixPosition(ne.matrixWorld),B.position.copy(qa),ud.copy(B.position),ud.add(Aw[se]),B.up.copy(Rw[se]),B.lookAt(ud),B.updateMatrixWorld(),oe.makeTranslation(-qa.x,-qa.y,-qa.z),r0.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),K._frustum.setFromProjectionMatrix(r0,B.coordinateSystem,B.reversedDepth)}else K.updateMatrices(ne);r=K.getFrustum(),R(F,z,K.camera,ne,this.type)}K.isPointLightShadow!==!0&&this.type===Ya&&T(K,z),K.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(w,A,O)};function T(U,F){const z=e.update(N);y.defines.VSM_SAMPLES!==U.blurSamples&&(y.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Pi(o.x,o.y,{format:Qs,type:tr})),y.uniforms.shadow_pass.value=U.map.depthTexture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(F,null,z,y,N,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(F,null,z,S,N,null)}function L(U,F,z,w){let A=null;const O=z.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(O!==void 0)A=O;else if(A=z.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const G=A.uuid,H=F.uuid;let Z=m[G];Z===void 0&&(Z={},m[G]=Z);let te=Z[H];te===void 0&&(te=A.clone(),Z[H]=te,F.addEventListener("dispose",I)),A=te}if(A.visible=F.visible,A.wireframe=F.wireframe,w===Ya?A.side=F.shadowSide!==null?F.shadowSide:F.side:A.side=F.shadowSide!==null?F.shadowSide:v[F.side],A.alphaMap=F.alphaMap,A.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,A.map=F.map,A.clipShadows=F.clipShadows,A.clippingPlanes=F.clippingPlanes,A.clipIntersection=F.clipIntersection,A.displacementMap=F.displacementMap,A.displacementScale=F.displacementScale,A.displacementBias=F.displacementBias,A.wireframeLinewidth=F.wireframeLinewidth,A.linewidth=F.linewidth,z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const G=s.properties.get(A);G.light=z}return A}function R(U,F,z,w,A){if(U.visible===!1)return;if(U.layers.test(F.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===Ya)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,U.matrixWorld);const H=e.update(U),Z=U.material;if(Array.isArray(Z)){const te=H.groups;for(let ne=0,K=te.length;ne<K;ne++){const $=te[ne],fe=Z[$.materialIndex];if(fe&&fe.visible){const se=L(U,fe,w,A);U.onBeforeShadow(s,U,F,z,H,se,$),s.renderBufferDirect(z,null,H,se,U,$),U.onAfterShadow(s,U,F,z,H,se,$)}}}else if(Z.visible){const te=L(U,Z,w,A);U.onBeforeShadow(s,U,F,z,H,te,null),s.renderBufferDirect(z,null,H,te,U,null),U.onAfterShadow(s,U,F,z,H,te,null)}}const G=U.children;for(let H=0,Z=G.length;H<Z;H++)R(G[H],F,z,w,A)}function I(U){U.target.removeEventListener("dispose",I);for(const z in m){const w=m[z],A=U.target.uuid;A in w&&(w[A].dispose(),delete w[A])}}}const Pw={[_d]:yd,[Sd]:Ed,[Md]:bd,[Ks]:wd,[yd]:_d,[Ed]:Sd,[bd]:Md,[wd]:Ks};function Lw(s,e){function n(){let W=!1;const De=new Kt;let Me=null;const Ie=new Kt(0,0,0,0);return{setMask:function(ye){Me!==ye&&!W&&(s.colorMask(ye,ye,ye,ye),Me=ye)},setLocked:function(ye){W=ye},setClear:function(ye,me,Re,rt,Ut){Ut===!0&&(ye*=rt,me*=rt,Re*=rt),De.set(ye,me,Re,rt),Ie.equals(De)===!1&&(s.clearColor(ye,me,Re,rt),Ie.copy(De))},reset:function(){W=!1,Me=null,Ie.set(-1,0,0,0)}}}function r(){let W=!1,De=!1,Me=null,Ie=null,ye=null;return{setReversed:function(me){if(De!==me){const Re=e.get("EXT_clip_control");me?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),De=me;const rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return De},setTest:function(me){me?de(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(me){Me!==me&&!W&&(s.depthMask(me),Me=me)},setFunc:function(me){if(De&&(me=Pw[me]),Ie!==me){switch(me){case _d:s.depthFunc(s.NEVER);break;case yd:s.depthFunc(s.ALWAYS);break;case Sd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Md:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case Ed:s.depthFunc(s.GREATER);break;case bd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=me}},setLocked:function(me){W=me},setClear:function(me){ye!==me&&(De&&(me=1-me),s.clearDepth(me),ye=me)},reset:function(){W=!1,Me=null,Ie=null,ye=null,De=!1}}}function o(){let W=!1,De=null,Me=null,Ie=null,ye=null,me=null,Re=null,rt=null,Ut=null;return{setTest:function(Et){W||(Et?de(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Et){De!==Et&&!W&&(s.stencilMask(Et),De=Et)},setFunc:function(Et,Gn,Cn){(Me!==Et||Ie!==Gn||ye!==Cn)&&(s.stencilFunc(Et,Gn,Cn),Me=Et,Ie=Gn,ye=Cn)},setOp:function(Et,Gn,Cn){(me!==Et||Re!==Gn||rt!==Cn)&&(s.stencilOp(Et,Gn,Cn),me=Et,Re=Gn,rt=Cn)},setLocked:function(Et){W=Et},setClear:function(Et){Ut!==Et&&(s.clearStencil(Et),Ut=Et)},reset:function(){W=!1,De=null,Me=null,Ie=null,ye=null,me=null,Re=null,rt=null,Ut=null}}}const l=new n,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,S=[],C=null,N=!1,M=null,_=null,T=null,L=null,R=null,I=null,U=null,F=new At(0,0,0),z=0,w=!1,A=null,O=null,G=null,H=null,Z=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,K=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),ne=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ne=K>=2);let fe=null,se={};const B=s.getParameter(s.SCISSOR_BOX),oe=s.getParameter(s.VIEWPORT),be=new Kt().fromArray(B),je=new Kt().fromArray(oe);function We(W,De,Me,Ie){const ye=new Uint8Array(4),me=s.createTexture();s.bindTexture(W,me),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Re=0;Re<Me;Re++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(De+Re,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return me}const re={};re[s.TEXTURE_2D]=We(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=We(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=We(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=We(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),de(s.DEPTH_TEST),u.setFunc(Ks),at(!1),kt(om),de(s.CULL_FACE),yt(Ji);function de(W){x[W]!==!0&&(s.enable(W),x[W]=!0)}function ve(W){x[W]!==!1&&(s.disable(W),x[W]=!1)}function Le(W,De){return v[W]!==De?(s.bindFramebuffer(W,De),v[W]=De,W===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),W===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Pe(W,De){let Me=S,Ie=!1;if(W){Me=y.get(De),Me===void 0&&(Me=[],y.set(De,Me));const ye=W.textures;if(Me.length!==ye.length||Me[0]!==s.COLOR_ATTACHMENT0){for(let me=0,Re=ye.length;me<Re;me++)Me[me]=s.COLOR_ATTACHMENT0+me;Me.length=ye.length,Ie=!0}}else Me[0]!==s.BACK&&(Me[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Me)}function xt(W){return C!==W?(s.useProgram(W),C=W,!0):!1}const Wt={[rs]:s.FUNC_ADD,[vv]:s.FUNC_SUBTRACT,[_v]:s.FUNC_REVERSE_SUBTRACT};Wt[yv]=s.MIN,Wt[Sv]=s.MAX;const dt={[Mv]:s.ZERO,[wv]:s.ONE,[Ev]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[Nv]:s.SRC_ALPHA_SATURATE,[Av]:s.DST_COLOR,[Tv]:s.DST_ALPHA,[bv]:s.ONE_MINUS_SRC_COLOR,[vd]:s.ONE_MINUS_SRC_ALPHA,[Rv]:s.ONE_MINUS_DST_COLOR,[Cv]:s.ONE_MINUS_DST_ALPHA,[Pv]:s.CONSTANT_COLOR,[Lv]:s.ONE_MINUS_CONSTANT_COLOR,[Dv]:s.CONSTANT_ALPHA,[Iv]:s.ONE_MINUS_CONSTANT_ALPHA};function yt(W,De,Me,Ie,ye,me,Re,rt,Ut,Et){if(W===Ji){N===!0&&(ve(s.BLEND),N=!1);return}if(N===!1&&(de(s.BLEND),N=!0),W!==xv){if(W!==M||Et!==w){if((_!==rs||R!==rs)&&(s.blendEquation(s.FUNC_ADD),_=rs,R=rs),Et)switch(W){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFunc(s.ONE,s.ONE);break;case lm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case cm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case lm:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cm:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}T=null,L=null,I=null,U=null,F.set(0,0,0),z=0,M=W,w=Et}return}ye=ye||De,me=me||Me,Re=Re||Ie,(De!==_||ye!==R)&&(s.blendEquationSeparate(Wt[De],Wt[ye]),_=De,R=ye),(Me!==T||Ie!==L||me!==I||Re!==U)&&(s.blendFuncSeparate(dt[Me],dt[Ie],dt[me],dt[Re]),T=Me,L=Ie,I=me,U=Re),(rt.equals(F)===!1||Ut!==z)&&(s.blendColor(rt.r,rt.g,rt.b,Ut),F.copy(rt),z=Ut),M=W,w=!1}function Rt(W,De){W.side===Yi?ve(s.CULL_FACE):de(s.CULL_FACE);let Me=W.side===jn;De&&(Me=!Me),at(Me),W.blending===$s&&W.transparent===!1?yt(Ji):yt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ie=W.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),zt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?de(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(W){A!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),A=W)}function kt(W){W!==mv?(de(s.CULL_FACE),W!==O&&(W===om?s.cullFace(s.BACK):W===gv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),O=W}function V(W){W!==G&&(ne&&s.lineWidth(W),G=W)}function zt(W,De,Me){W?(de(s.POLYGON_OFFSET_FILL),(H!==De||Z!==Me)&&(s.polygonOffset(De,Me),H=De,Z=Me)):ve(s.POLYGON_OFFSET_FILL)}function ht(W){W?de(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function vt(W){W===void 0&&(W=s.TEXTURE0+te-1),fe!==W&&(s.activeTexture(W),fe=W)}function Ge(W,De,Me){Me===void 0&&(fe===null?Me=s.TEXTURE0+te-1:Me=fe);let Ie=se[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},se[Me]=Ie),(Ie.type!==W||Ie.texture!==De)&&(fe!==Me&&(s.activeTexture(Me),fe=Me),s.bindTexture(W,De||re[W]),Ie.type=W,Ie.texture=De)}function D(){const W=se[fe];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function q(){try{s.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function he(){try{s.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function pe(){try{s.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ue(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Xe(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Te(){try{s.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ze(){try{s.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Je(){try{s.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function _e(){try{s.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ce(W){be.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),be.copy(W))}function Ve(W){je.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),je.copy(W))}function Fe(W,De){let Me=m.get(De);Me===void 0&&(Me=new WeakMap,m.set(De,Me));let Ie=Me.get(W);Ie===void 0&&(Ie=s.getUniformBlockIndex(De,W.name),Me.set(W,Ie))}function we(W,De){const Ie=m.get(De).get(W);p.get(De)!==Ie&&(s.uniformBlockBinding(De,Ie,W.__bindingPointIndex),p.set(De,Ie))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},fe=null,se={},v={},y=new WeakMap,S=[],C=null,N=!1,M=null,_=null,T=null,L=null,R=null,I=null,U=null,F=new At(0,0,0),z=0,w=!1,A=null,O=null,G=null,H=null,Z=null,be.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:de,disable:ve,bindFramebuffer:Le,drawBuffers:Pe,useProgram:xt,setBlending:yt,setMaterial:Rt,setFlipSided:at,setCullFace:kt,setLineWidth:V,setPolygonOffset:zt,setScissorTest:ht,activeTexture:vt,bindTexture:Ge,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:q,texImage2D:Je,texImage3D:_e,updateUBOMapping:Fe,uniformBlockBinding:we,texStorage2D:Te,texStorage3D:ze,texSubImage2D:he,texSubImage3D:pe,compressedTexSubImage2D:ue,compressedTexSubImage3D:Xe,scissor:Ce,viewport:Ve,reset:ot}}function Dw(s,e,n,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(D,E){return S?new OffscreenCanvas(D,E):ql("canvas")}function N(D,E,q){let he=1;const pe=Ge(D);if((pe.width>q||pe.height>q)&&(he=q/Math.max(pe.width,pe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ue=Math.floor(he*pe.width),Xe=Math.floor(he*pe.height);v===void 0&&(v=C(ue,Xe));const Te=E?C(ue,Xe):v;return Te.width=ue,Te.height=Xe,Te.getContext("2d").drawImage(D,0,0,ue,Xe),lt("WebGLRenderer: Texture has been resized from ("+pe.width+"x"+pe.height+") to ("+ue+"x"+Xe+")."),Te}else return"data"in D&&lt("WebGLRenderer: Image in DataTexture is too big ("+pe.width+"x"+pe.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,E,q,he,pe=!1){if(D!==null){if(s[D]!==void 0)return s[D];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ue=E;if(E===s.RED&&(q===s.FLOAT&&(ue=s.R32F),q===s.HALF_FLOAT&&(ue=s.R16F),q===s.UNSIGNED_BYTE&&(ue=s.R8)),E===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.R8UI),q===s.UNSIGNED_SHORT&&(ue=s.R16UI),q===s.UNSIGNED_INT&&(ue=s.R32UI),q===s.BYTE&&(ue=s.R8I),q===s.SHORT&&(ue=s.R16I),q===s.INT&&(ue=s.R32I)),E===s.RG&&(q===s.FLOAT&&(ue=s.RG32F),q===s.HALF_FLOAT&&(ue=s.RG16F),q===s.UNSIGNED_BYTE&&(ue=s.RG8)),E===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RG8UI),q===s.UNSIGNED_SHORT&&(ue=s.RG16UI),q===s.UNSIGNED_INT&&(ue=s.RG32UI),q===s.BYTE&&(ue=s.RG8I),q===s.SHORT&&(ue=s.RG16I),q===s.INT&&(ue=s.RG32I)),E===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGB8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGB16UI),q===s.UNSIGNED_INT&&(ue=s.RGB32UI),q===s.BYTE&&(ue=s.RGB8I),q===s.SHORT&&(ue=s.RGB16I),q===s.INT&&(ue=s.RGB32I)),E===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(ue=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(ue=s.RGBA16UI),q===s.UNSIGNED_INT&&(ue=s.RGBA32UI),q===s.BYTE&&(ue=s.RGBA8I),q===s.SHORT&&(ue=s.RGBA16I),q===s.INT&&(ue=s.RGBA32I)),E===s.RGB&&(q===s.UNSIGNED_INT_5_9_9_9_REV&&(ue=s.RGB9_E5),q===s.UNSIGNED_INT_10F_11F_11F_REV&&(ue=s.R11F_G11F_B10F)),E===s.RGBA){const Xe=pe?Wl:Ct.getTransfer(he);q===s.FLOAT&&(ue=s.RGBA32F),q===s.HALF_FLOAT&&(ue=s.RGBA16F),q===s.UNSIGNED_BYTE&&(ue=Xe===Ft?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(ue=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(ue=s.RGB5_A1)}return(ue===s.R16F||ue===s.R32F||ue===s.RG16F||ue===s.RG32F||ue===s.RGBA16F||ue===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function R(D,E){let q;return D?E===null||E===Di||E===to?q=s.DEPTH24_STENCIL8:E===Ai?q=s.DEPTH32F_STENCIL8:E===eo&&(q=s.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Di||E===to?q=s.DEPTH_COMPONENT24:E===Ai?q=s.DEPTH_COMPONENT32F:E===eo&&(q=s.DEPTH_COMPONENT16),q}function I(D,E){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==bn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function U(D){const E=D.target;E.removeEventListener("dispose",U),z(E),E.isVideoTexture&&x.delete(E)}function F(D){const E=D.target;E.removeEventListener("dispose",F),A(E)}function z(D){const E=r.get(D);if(E.__webglInit===void 0)return;const q=D.source,he=y.get(q);if(he){const pe=he[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&w(D),Object.keys(he).length===0&&y.delete(q)}r.remove(D)}function w(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const q=D.source,he=y.get(q);delete he[E.__cacheKey],u.memory.textures--}function A(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let pe=0;pe<E.__webglFramebuffer[he].length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[he][pe]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=D.textures;for(let he=0,pe=q.length;he<pe;he++){const ue=r.get(q[he]);ue.__webglTexture&&(s.deleteTexture(ue.__webglTexture),u.memory.textures--),r.remove(q[he])}r.remove(D)}let O=0;function G(){O=0}function H(){const D=O;return D>=o.maxTextures&&lt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),O+=1,D}function Z(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function te(D,E){const q=r.get(D);if(D.isVideoTexture&&ht(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&q.__version!==D.version){const he=D.image;if(he===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{re(q,D,E);return}}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+E)}function ne(D,E){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){re(q,D,E);return}else D.isExternalTexture&&(q.__webglTexture=D.sourceTexture?D.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+E)}function K(D,E){const q=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){re(q,D,E);return}n.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+E)}function $(D,E){const q=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&q.__version!==D.version){de(q,D,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+E)}const fe={[Ad]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[Rd]:s.MIRRORED_REPEAT},se={[xn]:s.NEAREST,[Ov]:s.NEAREST_MIPMAP_NEAREST,[ml]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[Uu]:s.LINEAR_MIPMAP_NEAREST,[as]:s.LINEAR_MIPMAP_LINEAR},B={[zv]:s.NEVER,[Wv]:s.ALWAYS,[Vv]:s.LESS,[yf]:s.LEQUAL,[jv]:s.EQUAL,[Sf]:s.GEQUAL,[Gv]:s.GREATER,[Hv]:s.NOTEQUAL};function oe(D,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===bn||E.magFilter===Uu||E.magFilter===ml||E.magFilter===as||E.minFilter===bn||E.minFilter===Uu||E.minFilter===ml||E.minFilter===as)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,fe[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,fe[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,fe[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,se[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,se[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,B[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xn||E.minFilter!==ml&&E.minFilter!==as||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function be(D,E){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",U));const he=E.source;let pe=y.get(he);pe===void 0&&(pe={},y.set(he,pe));const ue=Z(E);if(ue!==D.__cacheKey){pe[ue]===void 0&&(pe[ue]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),pe[ue].usedTimes++;const Xe=pe[D.__cacheKey];Xe!==void 0&&(pe[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&w(E)),D.__cacheKey=ue,D.__webglTexture=pe[ue].texture}return q}function je(D,E,q){return Math.floor(Math.floor(D/q)/E)}function We(D,E,q,he){const ue=D.updateRanges;if(ue.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,q,he,E.data);else{ue.sort((_e,Ce)=>_e.start-Ce.start);let Xe=0;for(let _e=1;_e<ue.length;_e++){const Ce=ue[Xe],Ve=ue[_e],Fe=Ce.start+Ce.count,we=je(Ve.start,E.width,4),ot=je(Ce.start,E.width,4);Ve.start<=Fe+1&&we===ot&&je(Ve.start+Ve.count-1,E.width,4)===we?Ce.count=Math.max(Ce.count,Ve.start+Ve.count-Ce.start):(++Xe,ue[Xe]=Ve)}ue.length=Xe+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),ze=s.getParameter(s.UNPACK_SKIP_PIXELS),Je=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let _e=0,Ce=ue.length;_e<Ce;_e++){const Ve=ue[_e],Fe=Math.floor(Ve.start/4),we=Math.ceil(Ve.count/4),ot=Fe%E.width,W=Math.floor(Fe/E.width),De=we,Me=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ot),s.pixelStorei(s.UNPACK_SKIP_ROWS,W),n.texSubImage2D(s.TEXTURE_2D,0,ot,W,De,Me,q,he,E.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,Je)}}function re(D,E,q){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const pe=be(D,E),ue=E.source;n.bindTexture(he,D.__webglTexture,s.TEXTURE0+q);const Xe=r.get(ue);if(ue.version!==Xe.__version||pe===!0){n.activeTexture(s.TEXTURE0+q);const Te=Ct.getPrimaries(Ct.workingColorSpace),ze=E.colorSpace===Nr?null:Ct.getPrimaries(E.colorSpace),Je=E.colorSpace===Nr||Te===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);let _e=N(E.image,!1,o.maxTextureSize);_e=vt(E,_e);const Ce=l.convert(E.format,E.colorSpace),Ve=l.convert(E.type);let Fe=L(E.internalFormat,Ce,Ve,E.colorSpace,E.isVideoTexture);oe(he,E);let we;const ot=E.mipmaps,W=E.isVideoTexture!==!0,De=Xe.__version===void 0||pe===!0,Me=ue.dataReady,Ie=I(E,_e);if(E.isDepthTexture)Fe=R(E.format===os,E.type),De&&(W?n.texStorage2D(s.TEXTURE_2D,1,Fe,_e.width,_e.height):n.texImage2D(s.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,Ve,null));else if(E.isDataTexture)if(ot.length>0){W&&De&&n.texStorage2D(s.TEXTURE_2D,Ie,Fe,ot[0].width,ot[0].height);for(let ye=0,me=ot.length;ye<me;ye++)we=ot[ye],W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,Ce,Ve,we.data):n.texImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,Ce,Ve,we.data);E.generateMipmaps=!1}else W?(De&&n.texStorage2D(s.TEXTURE_2D,Ie,Fe,_e.width,_e.height),Me&&We(E,_e,Ce,Ve)):n.texImage2D(s.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ce,Ve,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,ot[0].width,ot[0].height,_e.depth);for(let ye=0,me=ot.length;ye<me;ye++)if(we=ot[ye],E.format!==_i)if(Ce!==null)if(W){if(Me)if(E.layerUpdates.size>0){const Re=Um(we.width,we.height,E.format,E.type);for(const rt of E.layerUpdates){const Ut=we.data.subarray(rt*Re/we.data.BYTES_PER_ELEMENT,(rt+1)*Re/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,rt,we.width,we.height,1,Ce,Ut)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,_e.depth,Ce,we.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,we.width,we.height,_e.depth,0,we.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Me&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,we.width,we.height,_e.depth,Ce,Ve,we.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,we.width,we.height,_e.depth,0,Ce,Ve,we.data)}else{W&&De&&n.texStorage2D(s.TEXTURE_2D,Ie,Fe,ot[0].width,ot[0].height);for(let ye=0,me=ot.length;ye<me;ye++)we=ot[ye],E.format!==_i?Ce!==null?W?Me&&n.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,Ce,we.data):n.compressedTexImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,we.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,we.width,we.height,Ce,Ve,we.data):n.texImage2D(s.TEXTURE_2D,ye,Fe,we.width,we.height,0,Ce,Ve,we.data)}else if(E.isDataArrayTexture)if(W){if(De&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,_e.width,_e.height,_e.depth),Me)if(E.layerUpdates.size>0){const ye=Um(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const Re=_e.data.subarray(me*ye/_e.data.BYTES_PER_ELEMENT,(me+1)*ye/_e.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,_e.width,_e.height,1,Ce,Ve,Re)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ve,_e.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ce,Ve,_e.data);else if(E.isData3DTexture)W?(De&&n.texStorage3D(s.TEXTURE_3D,Ie,Fe,_e.width,_e.height,_e.depth),Me&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ce,Ve,_e.data)):n.texImage3D(s.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ce,Ve,_e.data);else if(E.isFramebufferTexture){if(De)if(W)n.texStorage2D(s.TEXTURE_2D,Ie,Fe,_e.width,_e.height);else{let ye=_e.width,me=_e.height;for(let Re=0;Re<Ie;Re++)n.texImage2D(s.TEXTURE_2D,Re,Fe,ye,me,0,Ce,Ve,null),ye>>=1,me>>=1}}else if(ot.length>0){if(W&&De){const ye=Ge(ot[0]);n.texStorage2D(s.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}for(let ye=0,me=ot.length;ye<me;ye++)we=ot[ye],W?Me&&n.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ce,Ve,we):n.texImage2D(s.TEXTURE_2D,ye,Fe,Ce,Ve,we);E.generateMipmaps=!1}else if(W){if(De){const ye=Ge(_e);n.texStorage2D(s.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}Me&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Ce,Ve,_e)}else n.texImage2D(s.TEXTURE_2D,0,Fe,Ce,Ve,_e);M(E)&&_(he),Xe.__version=ue.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function de(D,E,q){if(E.image.length!==6)return;const he=be(D,E),pe=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+q);const ue=r.get(pe);if(pe.version!==ue.__version||he===!0){n.activeTexture(s.TEXTURE0+q);const Xe=Ct.getPrimaries(Ct.workingColorSpace),Te=E.colorSpace===Nr?null:Ct.getPrimaries(E.colorSpace),ze=E.colorSpace===Nr||Xe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Je=E.isCompressedTexture||E.image[0].isCompressedTexture,_e=E.image[0]&&E.image[0].isDataTexture,Ce=[];for(let me=0;me<6;me++)!Je&&!_e?Ce[me]=N(E.image[me],!0,o.maxCubemapSize):Ce[me]=_e?E.image[me].image:E.image[me],Ce[me]=vt(E,Ce[me]);const Ve=Ce[0],Fe=l.convert(E.format,E.colorSpace),we=l.convert(E.type),ot=L(E.internalFormat,Fe,we,E.colorSpace),W=E.isVideoTexture!==!0,De=ue.__version===void 0||he===!0,Me=pe.dataReady;let Ie=I(E,Ve);oe(s.TEXTURE_CUBE_MAP,E);let ye;if(Je){W&&De&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,Ve.width,Ve.height);for(let me=0;me<6;me++){ye=Ce[me].mipmaps;for(let Re=0;Re<ye.length;Re++){const rt=ye[Re];E.format!==_i?Fe!==null?W?Me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,rt.width,rt.height,Fe,rt.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ot,rt.width,rt.height,0,rt.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,0,0,rt.width,rt.height,Fe,we,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re,ot,rt.width,rt.height,0,Fe,we,rt.data)}}}else{if(ye=E.mipmaps,W&&De){ye.length>0&&Ie++;const me=Ge(Ce[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ot,me.width,me.height)}for(let me=0;me<6;me++)if(_e){W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Ce[me].width,Ce[me].height,Fe,we,Ce[me].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ot,Ce[me].width,Ce[me].height,0,Fe,we,Ce[me].data);for(let Re=0;Re<ye.length;Re++){const Ut=ye[Re].image[me].image;W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Ut.width,Ut.height,Fe,we,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ot,Ut.width,Ut.height,0,Fe,we,Ut.data)}}else{W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,Fe,we,Ce[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ot,Fe,we,Ce[me]);for(let Re=0;Re<ye.length;Re++){const rt=ye[Re];W?Me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,0,0,Fe,we,rt.image[me]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Re+1,ot,Fe,we,rt.image[me])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),ue.__version=pe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function ve(D,E,q,he,pe,ue){const Xe=l.convert(q.format,q.colorSpace),Te=l.convert(q.type),ze=L(q.internalFormat,Xe,Te,q.colorSpace),Je=r.get(E),_e=r.get(q);if(_e.__renderTarget=E,!Je.__hasExternalTextures){const Ce=Math.max(1,E.width>>ue),Ve=Math.max(1,E.height>>ue);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?n.texImage3D(pe,ue,ze,Ce,Ve,E.depth,0,Xe,Te,null):n.texImage2D(pe,ue,ze,Ce,Ve,0,Xe,Te,null)}n.bindFramebuffer(s.FRAMEBUFFER,D),zt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,pe,_e.__webglTexture,0,V(E)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,pe,_e.__webglTexture,ue),n.bindFramebuffer(s.FRAMEBUFFER,null)}function Le(D,E,q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,pe=he&&he.isDepthTexture?he.type:null,ue=R(E.stencilBuffer,pe),Xe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;zt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ue,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ue,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ue,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Xe,s.RENDERBUFFER,D)}else{const he=E.textures;for(let pe=0;pe<he.length;pe++){const ue=he[pe],Xe=l.convert(ue.format,ue.colorSpace),Te=l.convert(ue.type),ze=L(ue.internalFormat,Xe,Te,ue.colorSpace);zt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ze,E.width,E.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ze,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ze,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Pe(D,E,q){const he=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);if(pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(pe.__webglInit===void 0&&(pe.__webglInit=!0,E.depthTexture.addEventListener("dispose",U)),pe.__webglTexture===void 0){pe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),oe(s.TEXTURE_CUBE_MAP,E.depthTexture);const Je=l.convert(E.depthTexture.format),_e=l.convert(E.depthTexture.type);let Ce;E.depthTexture.format===nr?Ce=s.DEPTH_COMPONENT24:E.depthTexture.format===os&&(Ce=s.DEPTH24_STENCIL8);for(let Ve=0;Ve<6;Ve++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,Ce,E.width,E.height,0,Je,_e,null)}}else te(E.depthTexture,0);const ue=pe.__webglTexture,Xe=V(E),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+q:s.TEXTURE_2D,ze=E.depthTexture.format===os?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===nr)zt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,ue,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,ue,0);else if(E.depthTexture.format===os)zt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ze,Te,ue,0,Xe):s.framebufferTexture2D(s.FRAMEBUFFER,ze,Te,ue,0);else throw new Error("Unknown depthTexture format")}function xt(D){const E=r.get(D),q=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const pe=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",pe)};he.addEventListener("dispose",pe),E.__depthDisposeCallback=pe}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let he=0;he<6;he++)Pe(E.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?Pe(E.__webglFramebuffer[0],D,0):Pe(E.__webglFramebuffer,D,0)}else if(q){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Le(E.__webglDepthbuffer[he],D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Le(E.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ue),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ue)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(D,E,q){const he=r.get(D);E!==void 0&&ve(he.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&xt(D)}function dt(D){const E=D.texture,q=r.get(D),he=r.get(E);D.addEventListener("dispose",F);const pe=D.textures,ue=D.isWebGLCubeRenderTarget===!0,Xe=pe.length>1;if(Xe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,u.memory.textures++),ue){q.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[Te]=[];for(let ze=0;ze<E.mipmaps.length;ze++)q.__webglFramebuffer[Te][ze]=s.createFramebuffer()}else q.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)q.__webglFramebuffer[Te]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(Xe)for(let Te=0,ze=pe.length;Te<ze;Te++){const Je=r.get(pe[Te]);Je.__webglTexture===void 0&&(Je.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&zt(D)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Te=0;Te<pe.length;Te++){const ze=pe[Te];q.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Te]);const Je=l.convert(ze.format,ze.colorSpace),_e=l.convert(ze.type),Ce=L(ze.internalFormat,Je,_e,ze.colorSpace,D.isXRRenderTarget===!0),Ve=V(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ve,Ce,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,q.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),Le(q.__webglDepthRenderbuffer,D,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ue){n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),oe(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)ve(q.__webglFramebuffer[Te][ze],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,ze);else ve(q.__webglFramebuffer[Te],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);M(E)&&_(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xe){for(let Te=0,ze=pe.length;Te<ze;Te++){const Je=pe[Te],_e=r.get(Je);let Ce=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ce=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ce,_e.__webglTexture),oe(Ce,Je),ve(q.__webglFramebuffer,D,Je,s.COLOR_ATTACHMENT0+Te,Ce,0),M(Je)&&_(Ce)}n.unbindTexture()}else{let Te=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Te,he.__webglTexture),oe(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)ve(q.__webglFramebuffer[ze],D,E,s.COLOR_ATTACHMENT0,Te,ze);else ve(q.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,Te,0);M(E)&&_(Te),n.unbindTexture()}D.depthBuffer&&xt(D)}function yt(D){const E=D.textures;for(let q=0,he=E.length;q<he;q++){const pe=E[q];if(M(pe)){const ue=T(D),Xe=r.get(pe).__webglTexture;n.bindTexture(ue,Xe),_(ue),n.unbindTexture()}}}const Rt=[],at=[];function kt(D){if(D.samples>0){if(zt(D)===!1){const E=D.textures,q=D.width,he=D.height;let pe=s.COLOR_BUFFER_BIT;const ue=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Xe=r.get(D),Te=E.length>1;if(Te)for(let Je=0;Je<E.length;Je++)n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Je=0;Je<E.length;Je++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Je]);const _e=r.get(E[Je]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,_e,0)}s.blitFramebuffer(0,0,q,he,0,0,q,he,pe,s.NEAREST),p===!0&&(Rt.length=0,at.length=0,Rt.push(s.COLOR_ATTACHMENT0+Je),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ue),at.push(ue),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let Je=0;Je<E.length;Je++){n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.RENDERBUFFER,Xe.__webglColorRenderbuffer[Je]);const _e=r.get(E[Je]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Je,s.TEXTURE_2D,_e,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(D){return Math.min(o.maxSamples,D.samples)}function zt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ht(D){const E=u.render.frame;x.get(D)!==E&&(x.set(D,E),D.update())}function vt(D,E){const q=D.colorSpace,he=D.format,pe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||q!==Js&&q!==Nr&&(Ct.getTransfer(q)===Ft?(he!==_i||pe!==Kn)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",q)),E}function Ge(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=Wt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Iw(s,e){function n(r,o=Nr){let l;const u=Ct.getTransfer(o);if(r===Kn)return s.UNSIGNED_BYTE;if(r===mf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===M0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===w0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===y0)return s.BYTE;if(r===S0)return s.SHORT;if(r===eo)return s.UNSIGNED_SHORT;if(r===pf)return s.INT;if(r===Di)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===tr)return s.HALF_FLOAT;if(r===E0)return s.ALPHA;if(r===b0)return s.RGB;if(r===_i)return s.RGBA;if(r===nr)return s.DEPTH_COMPONENT;if(r===os)return s.DEPTH_STENCIL;if(r===T0)return s.RED;if(r===xf)return s.RED_INTEGER;if(r===Qs)return s.RG;if(r===vf)return s.RG_INTEGER;if(r===_f)return s.RGBA_INTEGER;if(r===Bl||r===zl||r===Vl||r===jl)if(u===Ft)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Bl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Bl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nd||r===Pd||r===Ld||r===Dd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Nd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Pd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Dd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Id||r===Ud||r===Fd||r===Od||r===kd||r===Bd||r===zd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Id||r===Ud)return u===Ft?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Fd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Od)return l.COMPRESSED_R11_EAC;if(r===kd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Bd)return l.COMPRESSED_RG11_EAC;if(r===zd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Vd||r===jd||r===Gd||r===Hd||r===Wd||r===Xd||r===qd||r===$d||r===Yd||r===Kd||r===Zd||r===Qd||r===Jd||r===ef)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Vd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Hd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Wd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===$d)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Kd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ef)return u===Ft?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===tf||r===nf||r===rf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===tf)return u===Ft?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sf||r===af||r===of||r===lf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===sf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===af)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===to?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const Uw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fw=`
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

}`;class Ow{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new k0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Ui({vertexShader:Uw,fragmentShader:Fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new gt(new ls(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kw extends na{constructor(e,n){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,S=null,C=null;const N=typeof XRWebGLBinding<"u",M=new Ow,_={},T=n.getContextAttributes();let L=null,R=null;const I=[],U=[],F=new wt;let z=null;const w=new Vn;w.viewport=new Kt;const A=new Vn;A.viewport=new Kt;const O=[w,A],G=new q_;let H=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let de=I[re];return de===void 0&&(de=new nd,I[re]=de),de.getTargetRaySpace()},this.getControllerGrip=function(re){let de=I[re];return de===void 0&&(de=new nd,I[re]=de),de.getGripSpace()},this.getHand=function(re){let de=I[re];return de===void 0&&(de=new nd,I[re]=de),de.getHandSpace()};function te(re){const de=U.indexOf(re.inputSource);if(de===-1)return;const ve=I[de];ve!==void 0&&(ve.update(re.inputSource,re.frame,m||u),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function ne(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",K);for(let re=0;re<I.length;re++){const de=U[re];de!==null&&(U[re]=null,I[re].disconnect(de))}H=null,Z=null,M.reset();for(const re in _)delete _[re];e.setRenderTarget(L),S=null,y=null,v=null,o=null,R=null,We.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&N&&(v=new XRWebGLBinding(o,n)),v},this.getFrame=function(){return C},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",K),T.xrCompatible!==!0&&await n.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(F),N&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Le=null,Pe=null;T.depth&&(Pe=T.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=T.stencil?os:nr,Le=T.stencil?to:Di);const xt={colorFormat:n.RGBA8,depthFormat:Pe,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(xt),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Pi(y.textureWidth,y.textureHeight,{format:_i,type:Kn,depthTexture:new io(y.textureWidth,y.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Pi(S.framebufferWidth,S.framebufferHeight,{format:_i,type:Kn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),We.setContext(o),We.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function K(re){for(let de=0;de<re.removed.length;de++){const ve=re.removed[de],Le=U.indexOf(ve);Le>=0&&(U[Le]=null,I[Le].disconnect(ve))}for(let de=0;de<re.added.length;de++){const ve=re.added[de];let Le=U.indexOf(ve);if(Le===-1){for(let xt=0;xt<I.length;xt++)if(xt>=U.length){U.push(ve),Le=xt;break}else if(U[xt]===null){U[xt]=ve,Le=xt;break}if(Le===-1)break}const Pe=I[Le];Pe&&Pe.connect(ve)}}const $=new J,fe=new J;function se(re,de,ve){$.setFromMatrixPosition(de.matrixWorld),fe.setFromMatrixPosition(ve.matrixWorld);const Le=$.distanceTo(fe),Pe=de.projectionMatrix.elements,xt=ve.projectionMatrix.elements,Wt=Pe[14]/(Pe[10]-1),dt=Pe[14]/(Pe[10]+1),yt=(Pe[9]+1)/Pe[5],Rt=(Pe[9]-1)/Pe[5],at=(Pe[8]-1)/Pe[0],kt=(xt[8]+1)/xt[0],V=Wt*at,zt=Wt*kt,ht=Le/(-at+kt),vt=ht*-at;if(de.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(vt),re.translateZ(ht),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Pe[10]===-1)re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ge=Wt+ht,D=dt+ht,E=V-vt,q=zt+(Le-vt),he=yt*dt/D*Ge,pe=Rt*dt/D*Ge;re.projectionMatrix.makePerspective(E,q,he,pe,Ge,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function B(re,de){de===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(de.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let de=re.near,ve=re.far;M.texture!==null&&(M.depthNear>0&&(de=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),G.near=A.near=w.near=de,G.far=A.far=w.far=ve,(H!==G.near||Z!==G.far)&&(o.updateRenderState({depthNear:G.near,depthFar:G.far}),H=G.near,Z=G.far),G.layers.mask=re.layers.mask|6,w.layers.mask=G.layers.mask&3,A.layers.mask=G.layers.mask&5;const Le=re.parent,Pe=G.cameras;B(G,Le);for(let xt=0;xt<Pe.length;xt++)B(Pe[xt],Le);Pe.length===2?se(G,w,A):G.projectionMatrix.copy(w.projectionMatrix),oe(re,G,Le)};function oe(re,de,ve){ve===null?re.matrix.copy(de.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(de.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(de.projectionMatrix),re.projectionMatrixInverse.copy(de.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ea*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(re){p=re,y!==null&&(y.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(G)},this.getCameraTexture=function(re){return _[re]};let be=null;function je(re,de){if(x=de.getViewerPose(m||u),C=de,x!==null){const ve=x.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Le=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,Le=!0);for(let dt=0;dt<ve.length;dt++){const yt=ve[dt];let Rt=null;if(S!==null)Rt=S.getViewport(yt);else{const kt=v.getViewSubImage(y,yt);Rt=kt.viewport,dt===0&&(e.setRenderTargetTextures(R,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(R))}let at=O[dt];at===void 0&&(at=new Vn,at.layers.enable(dt),at.viewport=new Kt,O[dt]=at),at.matrix.fromArray(yt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(yt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),dt===0&&(G.matrix.copy(at.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Le===!0&&G.cameras.push(at)}const Pe=o.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&N){v=r.getBinding();const dt=v.getDepthInformation(ve[0]);dt&&dt.isValid&&dt.texture&&M.init(dt,o.renderState)}if(Pe&&Pe.includes("camera-access")&&N){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<ve.length;dt++){const yt=ve[dt].camera;if(yt){let Rt=_[yt];Rt||(Rt=new k0,_[yt]=Rt);const at=v.getCameraImage(yt);Rt.sourceTexture=at}}}}for(let ve=0;ve<I.length;ve++){const Le=U[ve],Pe=I[ve];Le!==null&&Pe!==void 0&&Pe.update(Le,de,m||u)}be&&be(re,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),C=null}const We=new V0;We.setAnimationLoop(je),this.setAnimationLoop=function(re){be=re},this.dispose=function(){}}}const ts=new Ii,Bw=new Zt;function zw(s,e){function n(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,I0(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,T,L,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(M,_):_.isMeshToonMaterial?(l(M,_),v(M,_)):_.isMeshPhongMaterial?(l(M,_),x(M,_)):_.isMeshStandardMaterial?(l(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,R)):_.isMeshMatcapMaterial?(l(M,_),C(M,_)):_.isMeshDepthMaterial?l(M,_):_.isMeshDistanceMaterial?(l(M,_),N(M,_)):_.isMeshNormalMaterial?l(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,T,L):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,n(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,n(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,n(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,n(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,n(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const T=e.get(_),L=T.envMap,R=T.envMapRotation;L&&(M.envMap.value=L,ts.copy(R),ts.x*=-1,ts.y*=-1,ts.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),M.envMapRotation.value.setFromMatrix4(Bw.makeRotationFromEuler(ts)),M.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,n(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,n(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,T,L){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*T,M.scale.value=L*.5,_.map&&(M.map.value=_.map,n(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,n(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,n(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,n(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,n(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,T){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,n(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,n(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,n(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,n(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,n(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,n(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,n(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=T.texture,M.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,n(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,n(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,n(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,n(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,n(_.specularIntensityMap,M.specularIntensityMapTransform))}function C(M,_){_.matcap&&(M.matcap.value=_.matcap)}function N(M,_){const T=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(T.matrixWorld),M.nearDistance.value=T.shadow.camera.near,M.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Vw(s,e,n,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,L){const R=L.program;r.uniformBlockBinding(T,R)}function m(T,L){let R=o[T.id];R===void 0&&(C(T),R=x(T),o[T.id]=R,T.addEventListener("dispose",M));const I=L.program;r.updateUBOMapping(T,I);const U=e.render.frame;l[T.id]!==U&&(y(T),l[T.id]=U)}function x(T){const L=v();T.__bindingPointIndex=L;const R=s.createBuffer(),I=T.__size,U=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,I,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,R),R}function v(){for(let T=0;T<d;T++)if(u.indexOf(T)===-1)return u.push(T),T;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(T){const L=o[T.id],R=T.uniforms,I=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,F=R.length;U<F;U++){const z=Array.isArray(R[U])?R[U]:[R[U]];for(let w=0,A=z.length;w<A;w++){const O=z[w];if(S(O,U,w,I)===!0){const G=O.__offset,H=Array.isArray(O.value)?O.value:[O.value];let Z=0;for(let te=0;te<H.length;te++){const ne=H[te],K=N(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,G+Z,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):(ne.toArray(O.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(T,L,R,I){const U=T.value,F=L+"_"+R;if(I[F]===void 0)return typeof U=="number"||typeof U=="boolean"?I[F]=U:I[F]=U.clone(),!0;{const z=I[F];if(typeof U=="number"||typeof U=="boolean"){if(z!==U)return I[F]=U,!0}else if(z.equals(U)===!1)return z.copy(U),!0}return!1}function C(T){const L=T.uniforms;let R=0;const I=16;for(let F=0,z=L.length;F<z;F++){const w=Array.isArray(L[F])?L[F]:[L[F]];for(let A=0,O=w.length;A<O;A++){const G=w[A],H=Array.isArray(G.value)?G.value:[G.value];for(let Z=0,te=H.length;Z<te;Z++){const ne=H[Z],K=N(ne),$=R%I,fe=$%K.boundary,se=$+fe;R+=fe,se!==0&&I-se<K.storage&&(R+=I-se),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=R,R+=K.storage}}}const U=R%I;return U>0&&(R+=I-U),T.__size=R,T.__cache={},this}function N(T){const L={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(L.boundary=4,L.storage=4):T.isVector2?(L.boundary=8,L.storage=8):T.isVector3||T.isColor?(L.boundary=16,L.storage=12):T.isVector4?(L.boundary=16,L.storage=16):T.isMatrix3?(L.boundary=48,L.storage=48):T.isMatrix4?(L.boundary=64,L.storage=64):T.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):lt("WebGLRenderer: Unsupported uniform value type.",T),L}function M(T){const L=T.target;L.removeEventListener("dispose",M);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function _(){for(const T in o)s.deleteBuffer(o[T]);u=[],o={},l={}}return{bind:p,update:m,dispose:_}}const jw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function Gw(){return Ti===null&&(Ti=new U_(jw,16,16,Qs,tr),Ti.name="DFG_LUT",Ti.minFilter=bn,Ti.magFilter=bn,Ti.wrapS=Zi,Ti.wrapT=Zi,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class Hw{constructor(e={}){const{canvas:n=Xv(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=Kn}=e;this.isWebGLRenderer=!0;let C;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");C=r.getContextAttributes().alpha}else C=u;const N=S,M=new Set([_f,vf,xf]),_=new Set([Kn,Di,eo,to,mf,gf]),T=new Uint32Array(4),L=new Int32Array(4);let R=null,I=null;const U=[],F=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ni,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let A=!1;this._outputColorSpace=ai;let O=0,G=0,H=null,Z=-1,te=null;const ne=new Kt,K=new Kt;let $=null;const fe=new At(0);let se=0,B=n.width,oe=n.height,be=1,je=null,We=null;const re=new Kt(0,0,B,oe),de=new Kt(0,0,B,oe);let ve=!1;const Le=new Tf;let Pe=!1,xt=!1;const Wt=new Zt,dt=new J,yt=new Kt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function kt(){return H===null?be:1}let V=r;function zt(P,Y){return n.getContext(P,Y)}try{const P={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${hf}`),n.addEventListener("webglcontextlost",rt,!1),n.addEventListener("webglcontextrestored",Ut,!1),n.addEventListener("webglcontextcreationerror",Et,!1),V===null){const Y="webgl2";if(V=zt(Y,P),V===null)throw zt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw Lt("WebGLRenderer: "+P.message),P}let ht,vt,Ge,D,E,q,he,pe,ue,Xe,Te,ze,Je,_e,Ce,Ve,Fe,we,ot,W,De,Me,Ie,ye;function me(){ht=new GS(V),ht.init(),Me=new Iw(V,ht),vt=new IS(V,ht,e,Me),Ge=new Lw(V,ht),vt.reversedDepthBuffer&&y&&Ge.buffers.depth.setReversed(!0),D=new XS(V),E=new xw,q=new Dw(V,ht,Ge,E,vt,Me,D),he=new FS(w),pe=new jS(w),ue=new K_(V),Ie=new LS(V,ue),Xe=new HS(V,ue,D,Ie),Te=new $S(V,Xe,ue,D),ot=new qS(V,vt,q),Ve=new US(E),ze=new gw(w,he,pe,ht,vt,Ie,Ve),Je=new zw(w,E),_e=new _w,Ce=new bw(ht),we=new PS(w,he,pe,Ge,Te,C,p),Fe=new Nw(w,Te,vt),ye=new Vw(V,D,vt,Ge),W=new DS(V,ht,D),De=new WS(V,ht,D),D.programs=ze.programs,w.capabilities=vt,w.extensions=ht,w.properties=E,w.renderLists=_e,w.shadowMap=Fe,w.state=Ge,w.info=D}me(),N!==Kn&&(z=new KS(N,n.width,n.height,o,l));const Re=new kw(w,V);this.xr=Re,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const P=ht.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ht.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(P){P!==void 0&&(be=P,this.setSize(B,oe,!1))},this.getSize=function(P){return P.set(B,oe)},this.setSize=function(P,Y,ce=!0){if(Re.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}B=P,oe=Y,n.width=Math.floor(P*be),n.height=Math.floor(Y*be),ce===!0&&(n.style.width=P+"px",n.style.height=Y+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,P,Y)},this.getDrawingBufferSize=function(P){return P.set(B*be,oe*be).floor()},this.setDrawingBufferSize=function(P,Y,ce){B=P,oe=Y,be=ce,n.width=Math.floor(P*ce),n.height=Math.floor(Y*ce),this.setViewport(0,0,P,Y)},this.setEffects=function(P){if(N===Kn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let Y=0;Y<P.length;Y++)if(P[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(ne)},this.getViewport=function(P){return P.copy(re)},this.setViewport=function(P,Y,ce,ae){P.isVector4?re.set(P.x,P.y,P.z,P.w):re.set(P,Y,ce,ae),Ge.viewport(ne.copy(re).multiplyScalar(be).round())},this.getScissor=function(P){return P.copy(de)},this.setScissor=function(P,Y,ce,ae){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,Y,ce,ae),Ge.scissor(K.copy(de).multiplyScalar(be).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(P){Ge.setScissorTest(ve=P)},this.setOpaqueSort=function(P){je=P},this.setTransparentSort=function(P){We=P},this.getClearColor=function(P){return P.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor(...arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha(...arguments)},this.clear=function(P=!0,Y=!0,ce=!0){let ae=0;if(P){let ee=!1;if(H!==null){const Ne=H.texture.format;ee=M.has(Ne)}if(ee){const Ne=H.texture.type,Oe=_.has(Ne),Ae=we.getClearColor(),qe=we.getClearAlpha(),Be=Ae.r,nt=Ae.g,Ze=Ae.b;Oe?(T[0]=Be,T[1]=nt,T[2]=Ze,T[3]=qe,V.clearBufferuiv(V.COLOR,0,T)):(L[0]=Be,L[1]=nt,L[2]=Ze,L[3]=qe,V.clearBufferiv(V.COLOR,0,L))}else ae|=V.COLOR_BUFFER_BIT}Y&&(ae|=V.DEPTH_BUFFER_BIT),ce&&(ae|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",rt,!1),n.removeEventListener("webglcontextrestored",Ut,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),we.dispose(),_e.dispose(),Ce.dispose(),E.dispose(),he.dispose(),pe.dispose(),Te.dispose(),Ie.dispose(),ye.dispose(),ze.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ir),Re.removeEventListener("sessionend",Ur),li.stop()};function rt(P){P.preventDefault(),pm("WebGLRenderer: Context Lost."),A=!0}function Ut(){pm("WebGLRenderer: Context Restored."),A=!1;const P=D.autoReset,Y=Fe.enabled,ce=Fe.autoUpdate,ae=Fe.needsUpdate,ee=Fe.type;me(),D.autoReset=P,Fe.enabled=Y,Fe.autoUpdate=ce,Fe.needsUpdate=ae,Fe.type=ee}function Et(P){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Gn(P){const Y=P.target;Y.removeEventListener("dispose",Gn),Cn(Y)}function Cn(P){sa(P),E.remove(P)}function sa(P){const Y=E.get(P).programs;Y!==void 0&&(Y.forEach(function(ce){ze.releaseProgram(ce)}),P.isShaderMaterial&&ze.releaseShaderCache(P))}this.renderBufferDirect=function(P,Y,ce,ae,ee,Ne){Y===null&&(Y=Rt);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ae=uo(P,Y,ce,ae,ee);Ge.setMaterial(ae,Oe);let qe=ce.index,Be=1;if(ae.wireframe===!0){if(qe=Xe.getWireframeAttribute(ce),qe===void 0)return;Be=2}const nt=ce.drawRange,Ze=ce.attributes.position;let pt=nt.start*Be,bt=(nt.start+nt.count)*Be;Ne!==null&&(pt=Math.max(pt,Ne.start*Be),bt=Math.min(bt,(Ne.start+Ne.count)*Be)),qe!==null?(pt=Math.max(pt,0),bt=Math.min(bt,qe.count)):Ze!=null&&(pt=Math.max(pt,0),bt=Math.min(bt,Ze.count));const Bt=bt-pt;if(Bt<0||Bt===1/0)return;Ie.setup(ee,ae,Ae,ce,qe);let Ot,Nt=W;if(qe!==null&&(Ot=ue.get(qe),Nt=De,Nt.setIndex(Ot)),ee.isMesh)ae.wireframe===!0?(Ge.setLineWidth(ae.wireframeLinewidth*kt()),Nt.setMode(V.LINES)):Nt.setMode(V.TRIANGLES);else if(ee.isLine){let Qe=ae.linewidth;Qe===void 0&&(Qe=1),Ge.setLineWidth(Qe*kt()),ee.isLineSegments?Nt.setMode(V.LINES):ee.isLineLoop?Nt.setMode(V.LINE_LOOP):Nt.setMode(V.LINE_STRIP)}else ee.isPoints?Nt.setMode(V.POINTS):ee.isSprite&&Nt.setMode(V.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)no("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))Nt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const Qe=ee._multiDrawStarts,Dt=ee._multiDrawCounts,St=ee._multiDrawCount,vn=qe?ue.get(qe).bytesPerElement:1,yi=E.get(ae).currentProgram.getUniforms();for(let tn=0;tn<St;tn++)yi.setValue(V,"_gl_DrawID",tn),Nt.render(Qe[tn]/vn,Dt[tn])}else if(ee.isInstancedMesh)Nt.renderInstances(pt,Bt,ee.count);else if(ce.isInstancedBufferGeometry){const Qe=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,Dt=Math.min(ce.instanceCount,Qe);Nt.renderInstances(pt,Bt,Dt)}else Nt.render(pt,Bt)};function ir(P,Y,ce){P.transparent===!0&&P.side===Yi&&P.forceSinglePass===!1?(P.side=jn,P.needsUpdate=!0,Fr(P,Y,ce),P.side=Lr,P.needsUpdate=!0,Fr(P,Y,ce),P.side=Yi):Fr(P,Y,ce)}this.compile=function(P,Y,ce=null){ce===null&&(ce=P),I=Ce.get(ce),I.init(Y),F.push(I),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),P!==ce&&P.traverseVisible(function(ee){ee.isLight&&ee.layers.test(Y.layers)&&(I.pushLight(ee),ee.castShadow&&I.pushShadow(ee))}),I.setupLights();const ae=new Set;return P.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ne=ee.material;if(Ne)if(Array.isArray(Ne))for(let Oe=0;Oe<Ne.length;Oe++){const Ae=Ne[Oe];ir(Ae,ce,ee),ae.add(Ae)}else ir(Ne,ce,ee),ae.add(Ne)}),I=F.pop(),ae},this.compileAsync=function(P,Y,ce=null){const ae=this.compile(P,Y,ce);return new Promise(ee=>{function Ne(){if(ae.forEach(function(Oe){E.get(Oe).currentProgram.isReady()&&ae.delete(Oe)}),ae.size===0){ee(P);return}setTimeout(Ne,10)}ht.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let aa=null;function Dr(P){aa&&aa(P)}function Ir(){li.stop()}function Ur(){li.start()}const li=new V0;li.setAnimationLoop(Dr),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(P){aa=P,Re.setAnimationLoop(P),P===null?li.stop():li.start()},Re.addEventListener("sessionstart",Ir),Re.addEventListener("sessionend",Ur),this.render=function(P,Y){if(Y!==void 0&&Y.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const ce=Re.enabled===!0&&Re.isPresenting===!0,ae=z!==null&&(H===null||ce)&&z.begin(w,H);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),P.isScene===!0&&P.onBeforeRender(w,P,Y,H),I=Ce.get(P,F.length),I.init(Y),F.push(I),Wt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Le.setFromProjectionMatrix(Wt,Ri,Y.reversedDepth),xt=this.localClippingEnabled,Pe=Ve.init(this.clippingPlanes,xt),R=_e.get(P,U.length),R.init(),U.push(R),Re.enabled===!0&&Re.isPresenting===!0){const Oe=w.xr.getDepthSensingMesh();Oe!==null&&oa(Oe,Y,-1/0,w.sortObjects)}oa(P,Y,0,w.sortObjects),R.finish(),w.sortObjects===!0&&R.sort(je,We),at=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,at&&we.addToRenderList(R,P),this.info.render.frame++,Pe===!0&&Ve.beginShadows();const ee=I.state.shadowsArray;if(Fe.render(ee,P,Y),Pe===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&z.hasRenderPass())===!1){const Oe=R.opaque,Ae=R.transmissive;if(I.setupLights(),Y.isArrayCamera){const qe=Y.cameras;if(Ae.length>0)for(let Be=0,nt=qe.length;Be<nt;Be++){const Ze=qe[Be];lo(Oe,Ae,P,Ze)}at&&we.render(P);for(let Be=0,nt=qe.length;Be<nt;Be++){const Ze=qe[Be];oo(R,P,Ze,Ze.viewport)}}else Ae.length>0&&lo(Oe,Ae,P,Y),at&&we.render(P),oo(R,P,Y)}H!==null&&G===0&&(q.updateMultisampleRenderTarget(H),q.updateRenderTargetMipmap(H)),ae&&z.end(w),P.isScene===!0&&P.onAfterRender(w,P,Y),Ie.resetDefaultState(),Z=-1,te=null,F.pop(),F.length>0?(I=F[F.length-1],Pe===!0&&Ve.setGlobalState(w.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?R=U[U.length-1]:R=null};function oa(P,Y,ce,ae){if(P.visible===!1)return;if(P.layers.test(Y.layers)){if(P.isGroup)ce=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(Y);else if(P.isLight)I.pushLight(P),P.castShadow&&I.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Le.intersectsSprite(P)){ae&&yt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Wt);const Oe=Te.update(P),Ae=P.material;Ae.visible&&R.push(P,Oe,Ae,ce,yt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Le.intersectsObject(P))){const Oe=Te.update(P),Ae=P.material;if(ae&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),yt.copy(P.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),yt.copy(Oe.boundingSphere.center)),yt.applyMatrix4(P.matrixWorld).applyMatrix4(Wt)),Array.isArray(Ae)){const qe=Oe.groups;for(let Be=0,nt=qe.length;Be<nt;Be++){const Ze=qe[Be],pt=Ae[Ze.materialIndex];pt&&pt.visible&&R.push(P,Oe,pt,ce,yt.z,Ze)}}else Ae.visible&&R.push(P,Oe,Ae,ce,yt.z,null)}}const Ne=P.children;for(let Oe=0,Ae=Ne.length;Oe<Ae;Oe++)oa(Ne[Oe],Y,ce,ae)}function oo(P,Y,ce,ae){const{opaque:ee,transmissive:Ne,transparent:Oe}=P;I.setupLightsView(ce),Pe===!0&&Ve.setGlobalState(w.clippingPlanes,ce),ae&&Ge.viewport(ne.copy(ae)),ee.length>0&&Zn(ee,Y,ce),Ne.length>0&&Zn(Ne,Y,ce),Oe.length>0&&Zn(Oe,Y,ce),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function lo(P,Y,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const pt=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new Pi(1,1,{generateMipmaps:!0,type:pt?tr:Kn,minFilter:as,samples:vt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ae.id],Oe=ae.viewport||ne;Ne.setSize(Oe.z*w.transmissionResolutionScale,Oe.w*w.transmissionResolutionScale);const Ae=w.getRenderTarget(),qe=w.getActiveCubeFace(),Be=w.getActiveMipmapLevel();w.setRenderTarget(Ne),w.getClearColor(fe),se=w.getClearAlpha(),se<1&&w.setClearColor(16777215,.5),w.clear(),at&&we.render(ce);const nt=w.toneMapping;w.toneMapping=Ni;const Ze=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),Pe===!0&&Ve.setGlobalState(w.clippingPlanes,ae),Zn(P,ce,ae),q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne),ht.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let bt=0,Bt=Y.length;bt<Bt;bt++){const Ot=Y[bt],{object:Nt,geometry:Qe,material:Dt,group:St}=Ot;if(Dt.side===Yi&&Nt.layers.test(ae.layers)){const vn=Dt.side;Dt.side=jn,Dt.needsUpdate=!0,la(Nt,ce,ae,Qe,Dt,St),Dt.side=vn,Dt.needsUpdate=!0,pt=!0}}pt===!0&&(q.updateMultisampleRenderTarget(Ne),q.updateRenderTargetMipmap(Ne))}w.setRenderTarget(Ae,qe,Be),w.setClearColor(fe,se),Ze!==void 0&&(ae.viewport=Ze),w.toneMapping=nt}function Zn(P,Y,ce){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let ee=0,Ne=P.length;ee<Ne;ee++){const Oe=P[ee],{object:Ae,geometry:qe,group:Be}=Oe;let nt=Oe.material;nt.allowOverride===!0&&ae!==null&&(nt=ae),Ae.layers.test(ce.layers)&&la(Ae,Y,ce,qe,nt,Be)}}function la(P,Y,ce,ae,ee,Ne){P.onBeforeRender(w,Y,ce,ae,ee,Ne),P.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ee.onBeforeRender(w,Y,ce,ae,P,Ne),ee.transparent===!0&&ee.side===Yi&&ee.forceSinglePass===!1?(ee.side=jn,ee.needsUpdate=!0,w.renderBufferDirect(ce,Y,ae,ee,P,Ne),ee.side=Lr,ee.needsUpdate=!0,w.renderBufferDirect(ce,Y,ae,ee,P,Ne),ee.side=Yi):w.renderBufferDirect(ce,Y,ae,ee,P,Ne),P.onAfterRender(w,Y,ce,ae,ee,Ne)}function Fr(P,Y,ce){Y.isScene!==!0&&(Y=Rt);const ae=E.get(P),ee=I.state.lights,Ne=I.state.shadowsArray,Oe=ee.state.version,Ae=ze.getParameters(P,ee.state,Ne,Y,ce),qe=ze.getProgramCacheKey(Ae);let Be=ae.programs;ae.environment=P.isMeshStandardMaterial?Y.environment:null,ae.fog=Y.fog,ae.envMap=(P.isMeshStandardMaterial?pe:he).get(P.envMap||ae.environment),ae.envMapRotation=ae.environment!==null&&P.envMap===null?Y.environmentRotation:P.envMapRotation,Be===void 0&&(P.addEventListener("dispose",Gn),Be=new Map,ae.programs=Be);let nt=Be.get(qe);if(nt!==void 0){if(ae.currentProgram===nt&&ae.lightsStateVersion===Oe)return ca(P,Ae),nt}else Ae.uniforms=ze.getUniforms(P),P.onBeforeCompile(Ae,w),nt=ze.acquireProgram(Ae,qe),Be.set(qe,nt),ae.uniforms=Ae.uniforms;const Ze=ae.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ze.clippingPlanes=Ve.uniform),ca(P,Ae),ae.needsLights=ho(P),ae.lightsStateVersion=Oe,ae.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMap.value=ee.state.directionalShadowMap,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotShadowMap.value=ee.state.spotShadowMap,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMap.value=ee.state.pointShadowMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),ae.currentProgram=nt,ae.uniformsList=null,nt}function co(P){if(P.uniformsList===null){const Y=P.currentProgram.getUniforms();P.uniformsList=Gl.seqWithValue(Y.seq,P.uniforms)}return P.uniformsList}function ca(P,Y){const ce=E.get(P);ce.outputColorSpace=Y.outputColorSpace,ce.batching=Y.batching,ce.batchingColor=Y.batchingColor,ce.instancing=Y.instancing,ce.instancingColor=Y.instancingColor,ce.instancingMorph=Y.instancingMorph,ce.skinning=Y.skinning,ce.morphTargets=Y.morphTargets,ce.morphNormals=Y.morphNormals,ce.morphColors=Y.morphColors,ce.morphTargetsCount=Y.morphTargetsCount,ce.numClippingPlanes=Y.numClippingPlanes,ce.numIntersection=Y.numClipIntersection,ce.vertexAlphas=Y.vertexAlphas,ce.vertexTangents=Y.vertexTangents,ce.toneMapping=Y.toneMapping}function uo(P,Y,ce,ae,ee){Y.isScene!==!0&&(Y=Rt),q.resetTextureUnits();const Ne=Y.fog,Oe=ae.isMeshStandardMaterial?Y.environment:null,Ae=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Js,qe=(ae.isMeshStandardMaterial?pe:he).get(ae.envMap||Oe),Be=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,nt=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Ze=!!ce.morphAttributes.position,pt=!!ce.morphAttributes.normal,bt=!!ce.morphAttributes.color;let Bt=Ni;ae.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Bt=w.toneMapping);const Ot=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,Nt=Ot!==void 0?Ot.length:0,Qe=E.get(ae),Dt=I.state.lights;if(Pe===!0&&(xt===!0||P!==te)){const ln=P===te&&ae.id===Z;Ve.setState(ae,P,ln)}let St=!1;ae.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Dt.state.version||Qe.outputColorSpace!==Ae||ee.isBatchedMesh&&Qe.batching===!1||!ee.isBatchedMesh&&Qe.batching===!0||ee.isBatchedMesh&&Qe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&Qe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&Qe.instancing===!1||!ee.isInstancedMesh&&Qe.instancing===!0||ee.isSkinnedMesh&&Qe.skinning===!1||!ee.isSkinnedMesh&&Qe.skinning===!0||ee.isInstancedMesh&&Qe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&Qe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&Qe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&Qe.instancingMorph===!1&&ee.morphTexture!==null||Qe.envMap!==qe||ae.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ve.numPlanes||Qe.numIntersection!==Ve.numIntersection)||Qe.vertexAlphas!==Be||Qe.vertexTangents!==nt||Qe.morphTargets!==Ze||Qe.morphNormals!==pt||Qe.morphColors!==bt||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==Nt)&&(St=!0):(St=!0,Qe.__version=ae.version);let vn=Qe.currentProgram;St===!0&&(vn=Fr(ae,Y,ee));let yi=!1,tn=!1,Or=!1;const It=vn.getUniforms(),ct=Qe.uniforms;if(Ge.useProgram(vn.program)&&(yi=!0,tn=!0,Or=!0),ae.id!==Z&&(Z=ae.id,tn=!0),yi||te!==P){Ge.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),It.setValue(V,"projectionMatrix",P.projectionMatrix),It.setValue(V,"viewMatrix",P.matrixWorldInverse);const cn=It.map.cameraPosition;cn!==void 0&&cn.setValue(V,dt.setFromMatrixPosition(P.matrixWorld)),vt.logarithmicDepthBuffer&&It.setValue(V,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(V,"isOrthographic",P.isOrthographicCamera===!0),te!==P&&(te=P,tn=!0,Or=!0)}if(Qe.needsLights&&(Dt.state.directionalShadowMap.length>0&&It.setValue(V,"directionalShadowMap",Dt.state.directionalShadowMap,q),Dt.state.spotShadowMap.length>0&&It.setValue(V,"spotShadowMap",Dt.state.spotShadowMap,q),Dt.state.pointShadowMap.length>0&&It.setValue(V,"pointShadowMap",Dt.state.pointShadowMap,q)),ee.isSkinnedMesh){It.setOptional(V,ee,"bindMatrix"),It.setOptional(V,ee,"bindMatrixInverse");const ln=ee.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),It.setValue(V,"boneTexture",ln.boneTexture,q))}ee.isBatchedMesh&&(It.setOptional(V,ee,"batchingTexture"),It.setValue(V,"batchingTexture",ee._matricesTexture,q),It.setOptional(V,ee,"batchingIdTexture"),It.setValue(V,"batchingIdTexture",ee._indirectTexture,q),It.setOptional(V,ee,"batchingColorTexture"),ee._colorsTexture!==null&&It.setValue(V,"batchingColorTexture",ee._colorsTexture,q));const An=ce.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&ot.update(ee,ce,vn),(tn||Qe.receiveShadow!==ee.receiveShadow)&&(Qe.receiveShadow=ee.receiveShadow,It.setValue(V,"receiveShadow",ee.receiveShadow)),ae.isMeshGouraudMaterial&&ae.envMap!==null&&(ct.envMap.value=qe,ct.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ae.isMeshStandardMaterial&&ae.envMap===null&&Y.environment!==null&&(ct.envMapIntensity.value=Y.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=Gw()),tn&&(It.setValue(V,"toneMappingExposure",w.toneMappingExposure),Qe.needsLights&&fo(ct,Or),Ne&&ae.fog===!0&&Je.refreshFogUniforms(ct,Ne),Je.refreshMaterialUniforms(ct,ae,be,oe,I.state.transmissionRenderTarget[P.id]),Gl.upload(V,co(Qe),ct,q)),ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(Gl.upload(V,co(Qe),ct,q),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(V,"center",ee.center),It.setValue(V,"modelViewMatrix",ee.modelViewMatrix),It.setValue(V,"normalMatrix",ee.normalMatrix),It.setValue(V,"modelMatrix",ee.matrixWorld),ae.isShaderMaterial||ae.isRawShaderMaterial){const ln=ae.uniformsGroups;for(let cn=0,us=ln.length;cn<us;cn++){const Si=ln[cn];ye.update(Si,vn),ye.bind(Si,vn)}}return vn}function fo(P,Y){P.ambientLightColor.needsUpdate=Y,P.lightProbe.needsUpdate=Y,P.directionalLights.needsUpdate=Y,P.directionalLightShadows.needsUpdate=Y,P.pointLights.needsUpdate=Y,P.pointLightShadows.needsUpdate=Y,P.spotLights.needsUpdate=Y,P.spotLightShadows.needsUpdate=Y,P.rectAreaLights.needsUpdate=Y,P.hemisphereLights.needsUpdate=Y}function ho(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(P,Y,ce){const ae=E.get(P);ae.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),E.get(P.texture).__webglTexture=Y,E.get(P.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,Y){const ce=E.get(P);ce.__webglFramebuffer=Y,ce.__useDefaultFramebuffer=Y===void 0};const Jl=V.createFramebuffer();this.setRenderTarget=function(P,Y=0,ce=0){H=P,O=Y,G=ce;let ae=null,ee=!1,Ne=!1;if(P){const Ae=E.get(P);if(Ae.__useDefaultFramebuffer!==void 0){Ge.bindFramebuffer(V.FRAMEBUFFER,Ae.__webglFramebuffer),ne.copy(P.viewport),K.copy(P.scissor),$=P.scissorTest,Ge.viewport(ne),Ge.scissor(K),Ge.setScissorTest($),Z=-1;return}else if(Ae.__webglFramebuffer===void 0)q.setupRenderTarget(P);else if(Ae.__hasExternalTextures)q.rebindTextures(P,E.get(P.texture).__webglTexture,E.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const nt=P.depthTexture;if(Ae.__boundDepthTexture!==nt){if(nt!==null&&E.has(nt)&&(P.width!==nt.image.width||P.height!==nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(P)}}const qe=P.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ne=!0);const Be=E.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Be[Y])?ae=Be[Y][ce]:ae=Be[Y],ee=!0):P.samples>0&&q.useMultisampledRTT(P)===!1?ae=E.get(P).__webglMultisampledFramebuffer:Array.isArray(Be)?ae=Be[ce]:ae=Be,ne.copy(P.viewport),K.copy(P.scissor),$=P.scissorTest}else ne.copy(re).multiplyScalar(be).floor(),K.copy(de).multiplyScalar(be).floor(),$=ve;if(ce!==0&&(ae=Jl),Ge.bindFramebuffer(V.FRAMEBUFFER,ae)&&Ge.drawBuffers(P,ae),Ge.viewport(ne),Ge.scissor(K),Ge.setScissorTest($),ee){const Ae=E.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ae.__webglTexture,ce)}else if(Ne){const Ae=Y;for(let qe=0;qe<P.textures.length;qe++){const Be=E.get(P.textures[qe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+qe,Be.__webglTexture,ce,Ae)}}else if(P!==null&&ce!==0){const Ae=E.get(P.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ae.__webglTexture,ce)}Z=-1},this.readRenderTargetPixels=function(P,Y,ce,ae,ee,Ne,Oe,Ae=0){if(!(P&&P.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe){Ge.bindFramebuffer(V.FRAMEBUFFER,qe);try{const Be=P.textures[Ae],nt=Be.format,Ze=Be.type;if(!vt.textureFormatReadable(nt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ze)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=P.width-ae&&ce>=0&&ce<=P.height-ee&&(P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),V.readPixels(Y,ce,ae,ee,Me.convert(nt),Me.convert(Ze),Ne))}finally{const Be=H!==null?E.get(H).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(P,Y,ce,ae,ee,Ne,Oe,Ae=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe)if(Y>=0&&Y<=P.width-ae&&ce>=0&&ce<=P.height-ee){Ge.bindFramebuffer(V.FRAMEBUFFER,qe);const Be=P.textures[Ae],nt=Be.format,Ze=Be.type;if(!vt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!vt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.bufferData(V.PIXEL_PACK_BUFFER,Ne.byteLength,V.STREAM_READ),P.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ae),V.readPixels(Y,ce,ae,ee,Me.convert(nt),Me.convert(Ze),0);const bt=H!==null?E.get(H).__webglFramebuffer:null;Ge.bindFramebuffer(V.FRAMEBUFFER,bt);const Bt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await qv(V,Bt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,pt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ne),V.deleteBuffer(pt),V.deleteSync(Bt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,Y=null,ce=0){const ae=Math.pow(2,-ce),ee=Math.floor(P.image.width*ae),Ne=Math.floor(P.image.height*ae),Oe=Y!==null?Y.x:0,Ae=Y!==null?Y.y:0;q.setTexture2D(P,0),V.copyTexSubImage2D(V.TEXTURE_2D,ce,0,0,Oe,Ae,ee,Ne),Ge.unbindTexture()};const ec=V.createFramebuffer(),Xt=V.createFramebuffer();this.copyTextureToTexture=function(P,Y,ce=null,ae=null,ee=0,Ne=null){Ne===null&&(ee!==0?(no("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=ee,ee=0):Ne=0);let Oe,Ae,qe,Be,nt,Ze,pt,bt,Bt;const Ot=P.isCompressedTexture?P.mipmaps[Ne]:P.image;if(ce!==null)Oe=ce.max.x-ce.min.x,Ae=ce.max.y-ce.min.y,qe=ce.isBox3?ce.max.z-ce.min.z:1,Be=ce.min.x,nt=ce.min.y,Ze=ce.isBox3?ce.min.z:0;else{const An=Math.pow(2,-ee);Oe=Math.floor(Ot.width*An),Ae=Math.floor(Ot.height*An),P.isDataArrayTexture?qe=Ot.depth:P.isData3DTexture?qe=Math.floor(Ot.depth*An):qe=1,Be=0,nt=0,Ze=0}ae!==null?(pt=ae.x,bt=ae.y,Bt=ae.z):(pt=0,bt=0,Bt=0);const Nt=Me.convert(Y.format),Qe=Me.convert(Y.type);let Dt;Y.isData3DTexture?(q.setTexture3D(Y,0),Dt=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(q.setTexture2DArray(Y,0),Dt=V.TEXTURE_2D_ARRAY):(q.setTexture2D(Y,0),Dt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const St=V.getParameter(V.UNPACK_ROW_LENGTH),vn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),yi=V.getParameter(V.UNPACK_SKIP_PIXELS),tn=V.getParameter(V.UNPACK_SKIP_ROWS),Or=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ot.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ot.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Be),V.pixelStorei(V.UNPACK_SKIP_ROWS,nt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ze);const It=P.isDataArrayTexture||P.isData3DTexture,ct=Y.isDataArrayTexture||Y.isData3DTexture;if(P.isDepthTexture){const An=E.get(P),ln=E.get(Y),cn=E.get(An.__renderTarget),us=E.get(ln.__renderTarget);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,cn.__webglFramebuffer),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let Si=0;Si<qe;Si++)It&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(P).__webglTexture,ee,Ze+Si),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Ne,Bt+Si)),V.blitFramebuffer(Be,nt,Oe,Ae,pt,bt,Oe,Ae,V.DEPTH_BUFFER_BIT,V.NEAREST);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ee!==0||P.isRenderTargetTexture||E.has(P)){const An=E.get(P),ln=E.get(Y);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,ec),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xt);for(let cn=0;cn<qe;cn++)It?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,ee,Ze+cn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,ee),ct?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ln.__webglTexture,Ne,Bt+cn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ln.__webglTexture,Ne),ee!==0?V.blitFramebuffer(Be,nt,Oe,Ae,pt,bt,Oe,Ae,V.COLOR_BUFFER_BIT,V.NEAREST):ct?V.copyTexSubImage3D(Dt,Ne,pt,bt,Bt+cn,Be,nt,Oe,Ae):V.copyTexSubImage2D(Dt,Ne,pt,bt,Be,nt,Oe,Ae);Ge.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else ct?P.isDataTexture||P.isData3DTexture?V.texSubImage3D(Dt,Ne,pt,bt,Bt,Oe,Ae,qe,Nt,Qe,Ot.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Dt,Ne,pt,bt,Bt,Oe,Ae,qe,Nt,Ot.data):V.texSubImage3D(Dt,Ne,pt,bt,Bt,Oe,Ae,qe,Nt,Qe,Ot):P.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ne,pt,bt,Oe,Ae,Nt,Qe,Ot.data):P.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ne,pt,bt,Ot.width,Ot.height,Nt,Ot.data):V.texSubImage2D(V.TEXTURE_2D,Ne,pt,bt,Oe,Ae,Nt,Qe,Ot);V.pixelStorei(V.UNPACK_ROW_LENGTH,St),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,vn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,yi),V.pixelStorei(V.UNPACK_SKIP_ROWS,tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Or),Ne===0&&Y.generateMipmaps&&V.generateMipmap(Dt),Ge.unbindTexture()},this.initRenderTarget=function(P){E.get(P).__webglFramebuffer===void 0&&q.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?q.setTextureCube(P,0):P.isData3DTexture?q.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?q.setTexture2DArray(P,0):q.setTexture2D(P,0),Ge.unbindTexture()},this.resetState=function(){O=0,G=0,H=null,Ge.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ct._getUnpackColorSpace()}}const Fl=[{title:"1. Cozinha em Operação Normal",subtitle:"Fritadeira industrial e fogão sob coifa de exaustão.",temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"MONITORANDO",description:"Ambiente seguro. A Central Outfire monitora continuamente os sensores térmicos reguláveis da coifa (145°C) e do duto (300°C)."},{title:"2. Superaquecimento Perigoso",subtitle:"Falha no termostato da fritadeira. Temperatura do óleo sobe para > 360°C.",temp:365,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"ALERTA TÉRMICO",description:"Óleos e gorduras vegetais atingem o ponto de autoignição silenciosa sem faísca externa. Risco iminente de explosão térmica."},{title:"3. Incêndio Violento Classe K",subtitle:"O óleo entra em combustão violenta. Chamas sobem rumo aos filtros da coifa.",temp:450,gasStatus:"ABERTO",exhaustStatus:"LIGADO",centralStatus:"ALERTA TÉRMICO",description:"Água JAMAIS pode ser usada (causaria explosão de vapor mortal). Extintores comuns de pó não resfriam o óleo e causam reignição."},{title:"4. Detecção Dupla nos Sensores",subtitle:"Sensor da coifa (145°C) e sensor do duto (300°C) acionam a Central Outfire.",temp:420,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"A Central Outfire VTS 32S3 entra em ação instantânea. Identifica o setor exato da Coifa 1 e inicia contagem de supressão."},{title:"5. Intertravamento Total: Gás & Exaustão",subtitle:"Válvula solenoide fecha o gás e motor de exaustão é desligado.",temp:380,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"Corta o combustível da linha e desliga a sucção para não alimentar o duto com oxigênio forçado. Dampers se fecham."},{title:"6. Dupla Supressão: Saponificante & CO2",subtitle:"Bicos disparam líquido saponificante na fritadeira e CO2 nos dutos.",temp:160,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"DISPARO ATIVO",description:"O agente saponificante reage com a gordura quente criando uma espessa camada de sabão, sufocando e resfriando. O CO2 inunda o duto."},{title:"7. Incêndio Extinto & Cozinha Salva",subtitle:"Fogo 100% extinto sem reignição. Danos zero à estrutura e às pessoas.",temp:65,gasStatus:"CORTADO",exhaustStatus:"DESLIGADO",centralStatus:"PROTEGIDO",description:"A cozinha é preservada. Sistema pronto para limpeza e reinicialização rápida. Em conformidade com NBR 14518 e AVCB do Bombeiro."}],Ww=()=>{const s=ut.useRef(null),e=ut.useRef(null),[n,r]=ut.useState(0),[o,l]=ut.useState(!1),[u,d]=ut.useState(0),p=ut.useRef(null),m=ut.useRef(null),x=ut.useRef(null),v=ut.useRef(null),y=ut.useRef(null),S=ut.useRef(null),C=ut.useRef(null),N=ut.useRef(null),M=ut.useRef(null),_=ut.useRef([]);ut.useEffect(()=>{if(!e.current)return;const w=e.current.clientWidth||window.innerWidth,A=e.current.clientHeight||650,O=new I_;O.background=new At(658448),O.fog=new bf(658448,.035),p.current=O;const G=new Vn(45,w/A,.1,100);G.position.set(0,2.2,5.8),m.current=G;const H=new Hw({canvas:e.current,antialias:!0,powerPreference:"high-performance"});H.setSize(w,A),H.setPixelRatio(Math.min(window.devicePixelRatio,2)),H.shadowMap.enabled=!0,H.shadowMap.type=u0,x.current=H;const Z=new X_(16777215,.6);O.add(Z);const te=new H_(16774634,2.5);te.position.set(2,6,4),te.angle=Math.PI/4,te.penumbra=.5,te.castShadow=!0,O.add(te);const ne=new Dl(4878492,1.2,10);ne.position.set(-3,3,2),O.add(ne);const K=new Dl(65280,.8,5);K.position.set(2.4,2.1,.2),O.add(K),N.current=K;const $=new Dl(16733440,0,4);$.position.set(-.6,1.2,0),O.add($);const fe=new Dl(16755200,0,4);fe.position.set(-.6,1.8,0),O.add(fe),_.current=[$,fe],T(O);const se=new Ki;O.add(se),v.current=se,L(se);const B=new Ki;O.add(B),y.current=B,R(B);const oe=new Ki;O.add(oe),S.current=oe,I(oe);const be=new Ki;O.add(be),C.current=be,U(be);const je=()=>{if(!e.current||!x.current||!m.current)return;const ve=e.current.clientWidth,Le=e.current.clientHeight;m.current.aspect=ve/Le,m.current.updateProjectionMatrix(),x.current.setSize(ve,Le)};window.addEventListener("resize",je);let We,re=new $_;const de=()=>{We=requestAnimationFrame(de);const ve=re.getDelta(),Le=re.getElapsedTime();F(Le,ve),H.render(O,G)};return de(),()=>{window.removeEventListener("resize",je),cancelAnimationFrame(We),H.dispose()}},[]);const T=w=>{const A=new ls(16,16),O=new sn({color:1579551,roughness:.3,metalness:.4}),G=new gt(A,O);G.rotation.x=-Math.PI/2,G.position.y=0,G.receiveShadow=!0,w.add(G);const H=new ls(16,8),Z=new sn({color:2237997,roughness:.5,metalness:.3}),te=new gt(H,Z);te.position.set(0,4,-1.8),te.receiveShadow=!0,w.add(te);const ne=new zn(4.2,.9,1.2),K=new sn({color:13160664,metalness:.85,roughness:.2}),$=new gt(ne,K);$.position.set(0,.45,0),$.castShadow=!0,$.receiveShadow=!0,w.add($);const fe=new gt(new zn(1,.95,1.1),K);fe.position.set(-.6,.475,.05),fe.castShadow=!0,w.add(fe);const se=new zn(.8,.25,.8),B=new sn({color:9064960,roughness:.1,metalness:.3,transparent:!0,opacity:.95}),oe=new gt(se,B);oe.position.set(-.6,.85,.05),w.add(oe);const be=new si(.015,.015,.4),je=new sn({color:1118481,roughness:.8}),We=new gt(be,je);We.rotation.x=Math.PI/4,We.position.set(-.8,1.1,.5),w.add(We);const re=new gt(be,je);re.rotation.x=Math.PI/4,re.position.set(-.4,1.1,.5),w.add(re);const de=new gt(new zn(1.8,.95,1.1),K);de.position.set(1,.475,.05),de.castShadow=!0,w.add(de);const ve=new sn({color:2236962,roughness:.9});for(let Fe=.4;Fe<=1.6;Fe+=.55)for(let we=-.25;we<=.35;we+=.55){const ot=new gt(new si(.14,.14,.04,16),ve);ot.position.set(Fe,.95,we),w.add(ot)}const Le=new Ki;Le.position.set(0,2.7,0);const Pe=new gt(new zn(4.2,.6,1.6),K);Pe.castShadow=!0,Le.add(Pe);const xt=new sn({color:10068909,metalness:.9,roughness:.3});for(let Fe=-1.8;Fe<=1.8;Fe+=.6){const we=new gt(new zn(.5,.05,.8),xt);we.position.set(Fe,-.25,0),we.rotation.x=.2,Le.add(we)}w.add(Le);const Wt=new si(.35,.35,1.6,24),dt=new sn({color:11910856,metalness:.8,roughness:.25}),yt=new gt(Wt,dt);yt.position.set(0,3.8,0),w.add(yt);const Rt=new si(.35,.35,2.5,24),at=new gt(Rt,dt);at.rotation.x=Math.PI/2,at.position.set(0,4.5,-.8),w.add(at);const kt=new gt(new zn(.85,.85,.4),new sn({color:9109504,metalness:.5,roughness:.4}));kt.position.set(0,4.5,-.4),w.add(kt);const V=new sn({color:14739181,metalness:.95,roughness:.1}),zt=new si(.02,.02,3.8,12),ht=new gt(zt,V);ht.rotation.z=Math.PI/2,ht.position.set(0,2.35,.4),w.add(ht);const vt=new sn({color:13938487,metalness:.9,roughness:.2}),Ge=new gt(new Rr(.04,.08,12),vt);Ge.rotation.x=Math.PI,Ge.position.set(-.6,2.28,.1),w.add(Ge);const D=new gt(new Rr(.04,.08,12),vt);D.rotation.x=Math.PI,D.position.set(.6,2.28,.1),w.add(D);const E=new gt(new Rr(.04,.08,12),vt);E.rotation.x=Math.PI,E.position.set(1.4,2.28,.1),w.add(E);const q=new gt(new Rr(.04,.08,12),vt);q.rotation.z=Math.PI/4,q.position.set(-.8,2.6,0),w.add(q);const he=new gt(new Rr(.04,.08,12),vt);he.rotation.z=-Math.PI/4,he.position.set(.8,2.6,0),w.add(he);const pe=new gt(new si(.015,.015,.12,12),new sn({color:16724736,emissive:11145472,roughness:.2}));pe.position.set(-.6,2.42,.25),w.add(pe);const ue=new gt(new si(.015,.015,.15,12),new sn({color:10027263,emissive:6684842,roughness:.2}));ue.position.set(.35,3.8,0),ue.rotation.z=Math.PI/2,w.add(ue);const Xe=new gt(new zn(.65,.85,.18),new sn({color:1316120,metalness:.6,roughness:.3}));Xe.position.set(2.4,2.1,.1),Xe.castShadow=!0,w.add(Xe);const Te=new ls(.45,.35),ze=new Ja({color:35071}),Je=new gt(Te,ze);Je.position.set(2.4,2.25,.195),w.add(Je);const _e=new gt(new si(.04,.04,.05,16),new sn({color:16711680,roughness:.3}));_e.rotation.x=Math.PI/2,_e.position.set(2.4,1.85,.2),w.add(_e);const Ce=new gt(new si(.025,.025,3,16),new sn({color:16763904,metalness:.6}));Ce.rotation.z=Math.PI/2,Ce.position.set(0,.15,.6),w.add(Ce);const Ve=new gt(new zn(.15,.18,.15),new sn({color:13369344,metalness:.5}));Ve.position.set(-1.2,.15,.6),w.add(Ve),M.current=Ve},L=w=>{for(let O=0;O<45;O++){const G=new Rr(.12,.45,8),H=new Ja({color:O%2===0?16724736:16750848,transparent:!0,opacity:0,blending:gd}),Z=new gt(G,H);Z.position.set(-.6+(Math.random()-.5)*.5,1+Math.random()*.4,.05+(Math.random()-.5)*.5),Z.scale.set(.01,.01,.01),w.add(Z)}},R=w=>{for(let O=0;O<30;O++){const G=new Af(.18,1),H=new sn({color:2236962,roughness:1,transparent:!0,opacity:0}),Z=new gt(G,H);Z.position.set(-.6+(Math.random()-.5)*.4,1.5+Math.random()*1.5,(Math.random()-.5)*.4),w.add(Z)}},I=w=>{for(let O=0;O<60;O++){const G=new $l(.06,8,8),H=new sn({color:16777215,roughness:.2,transparent:!0,opacity:0}),Z=new gt(G,H);Z.position.set(-.6+(Math.random()-.5)*.7,.95+Math.random()*.15,.05+(Math.random()-.5)*.7),w.add(Z)}},U=w=>{for(let O=0;O<25;O++){const G=new $l(.12,8,8),H=new Ja({color:14544639,transparent:!0,opacity:0}),Z=new gt(G,H);Z.position.set((Math.random()-.5)*.3,3.5+Math.random()*1,-.5+Math.random()*.5),w.add(Z)}},F=(w,A)=>{if(!m.current)return;n<.2?(m.current.position.lerp(new J(0,2.2,5.8),A*3),m.current.lookAt(0,1.8,0)):n<.55?(m.current.position.lerp(new J(-.6,1.7,3.2),A*3),m.current.lookAt(-.6,1.3,0)):n<.8?(m.current.position.lerp(new J(.5,2.4,4.2),A*3),m.current.lookAt(.3,2.2,0)):(m.current.position.lerp(new J(0,2.3,5.2),A*3),m.current.lookAt(0,1.8,0));let O=0;if(n>=.25&&n<.85&&(n<.45?O=(n-.25)/.2:n<.75?O=1:O=1-(n-.75)/.1),v.current&&v.current.children.forEach((G,H)=>{const Z=G,te=Z.material;if(O>.05){te.opacity=O*.85;const ne=.8+.4*Math.sin(w*15+H);Z.scale.set((.8+.5*Math.sin(w*10+H))*O,(1.2+.8*Math.cos(w*12+H))*O*ne,(.8+.5*Math.sin(w*10+H))*O),Z.position.y=1+Math.sin(w*8+H)*.15}else te.opacity=0,Z.scale.set(.01,.01,.01)}),_.current.forEach((G,H)=>{G.intensity=O*(2.5+Math.sin(w*20+H)*1)}),y.current&&y.current.children.forEach((G,H)=>{const Z=G,te=Z.material;O>.1||n>=.85&&n<.98?(te.opacity=Math.min(.5,O*.5),Z.position.y+=A*.8,Z.rotation.y+=A*.5,Z.position.y>3&&(Z.position.y=1.4)):te.opacity=0}),S.current){const G=n>=.75;S.current.children.forEach((H,Z)=>{const te=H,ne=te.material;G?(ne.opacity=gm.lerp(ne.opacity,.95,A*4),te.scale.set(1+Math.sin(w*2+Z)*.2,.6+Math.cos(w*2+Z)*.1,1+Math.sin(w*2+Z)*.2)):ne.opacity=0})}if(C.current){const G=n>=.75&&n<.95;C.current.children.forEach((H,Z)=>{const te=H,ne=te.material;G?(ne.opacity=.6+Math.sin(w*10+Z)*.2,te.position.y+=A*.5,te.position.y>4.5&&(te.position.y=3.6)):ne.opacity=0})}if(N.current)if(n<.3)N.current.color.setHex(65280),N.current.intensity=.8;else if(n<.85){const G=Math.sin(w*16)>0?3:.2;N.current.color.setHex(16711680),N.current.intensity=G}else N.current.color.setHex(65382),N.current.intensity=1.2;M.current&&(n>=.55?M.current.rotation.x=gm.lerp(M.current.rotation.x,Math.PI/2,A*8):M.current.rotation.x=0)};ut.useEffect(()=>{const w=()=>{if(!s.current)return;const A=s.current.getBoundingClientRect(),O=window.innerHeight,G=A.height-O;if(G<=0)return;const Z=-A.top/G,te=Math.max(0,Math.min(1,Z));o||r(te)};return window.addEventListener("scroll",w,{passive:!0}),()=>window.removeEventListener("scroll",w)},[o]),ut.useEffect(()=>{const w=Math.min(Fl.length-1,Math.floor(n*Fl.length));d(w)},[n]),ut.useEffect(()=>{let w;return o&&(w=setInterval(()=>{r(A=>A>=1?(l(!1),1):A+.005)},50)),()=>clearInterval(w)},[o]);const z=Fl[u];return h.jsx("section",{id:"hero-3d",ref:s,className:"relative min-h-[300vh] bg-[#090a0d]",children:h.jsxs("div",{className:"sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden",children:[h.jsx("canvas",{ref:e,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing z-0"}),h.jsxs("div",{className:"relative z-10 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[h.jsxs("div",{className:"flex items-center gap-2.5 pointer-events-auto bg-[#101216]/85 backdrop-blur-md border border-white/10 px-3.5 py-2 rounded-xl shadow-2xl",children:[h.jsxs("div",{className:"flex h-3 w-3 relative",children:[h.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${n>=.3&&n<.85?"bg-red-400":"bg-emerald-400"}`}),h.jsx("span",{className:`relative inline-flex rounded-full h-3 w-3 ${n>=.3&&n<.85?"bg-red-500":"bg-emerald-500"}`})]}),h.jsxs("span",{className:"text-xs font-bold uppercase tracking-wider text-white",children:["Simulação 3D Interativa: ",z.centralStatus]})]}),h.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto",children:[h.jsxs("button",{onClick:()=>l(!o),className:"flex items-center gap-2 text-xs font-bold px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all shadow-lg",children:[o?h.jsx(ev,{className:"w-3.5 h-3.5"}):h.jsx(tv,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:o?"Pausar":"Demonstração Automática"})]}),h.jsx("button",{onClick:()=>{l(!1),r(0)},className:"p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/15 transition-all shadow-lg",title:"Reiniciar Simulação",children:h.jsx(rv,{className:"w-4 h-4"})})]})]}),h.jsx("div",{className:"relative z-10 p-4 sm:p-6 max-w-7xl mx-auto w-full pointer-events-none",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-end",children:[h.jsxs("div",{className:"lg:col-span-4 flex flex-wrap lg:flex-col gap-2 pointer-events-auto",children:[h.jsxs("div",{className:"glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[h.jsx(uv,{className:`w-4 h-4 ${z.temp>300?"text-red-500 animate-pulse":"text-amber-400"}`}),h.jsx("span",{children:"Óleo Fritadeira:"})]}),h.jsxs("span",{className:`font-mono text-sm font-black ${z.temp>350?"text-red-400":z.temp>200?"text-amber-400":"text-emerald-400"}`,children:[z.temp,"°C"]})]}),h.jsxs("div",{className:"glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[h.jsx(hv,{className:`w-4 h-4 ${z.gasStatus==="CORTADO"?"text-red-500":"text-gray-400"}`}),h.jsx("span",{children:"Válvula de Gás:"})]}),h.jsx("span",{className:`font-mono text-xs font-bold px-2 py-0.5 rounded ${z.gasStatus==="CORTADO"?"bg-red-500/20 text-red-400 border border-red-500/30":"bg-emerald-500/20 text-emerald-400"}`,children:z.gasStatus})]}),h.jsxs("div",{className:"glass-panel px-3.5 py-2.5 rounded-xl flex items-center justify-between border border-white/10 min-w-[140px] flex-1 lg:flex-initial",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-300 text-xs",children:[h.jsx(c0,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"Exaustão & Damper:"})]}),h.jsx("span",{className:`font-mono text-xs font-bold px-2 py-0.5 rounded ${z.exhaustStatus==="DESLIGADO"?"bg-amber-500/20 text-amber-400 border border-amber-500/30":"bg-emerald-500/20 text-emerald-400"}`,children:z.exhaustStatus})]})]}),h.jsx("div",{className:"lg:col-span-8 pointer-events-auto",children:h.jsxs("div",{className:`rounded-2xl p-5 sm:p-6 transition-all duration-300 ${z.centralStatus==="DISPARO ATIVO"||z.centralStatus==="ALERTA TÉRMICO"?"glass-panel-glow bg-[#13090a]/90":"glass-panel bg-[#0e1014]/90"}`,children:[h.jsx("div",{className:"w-full bg-white/10 h-1.5 rounded-full overflow-hidden mb-4",children:h.jsx("div",{className:"bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 h-full transition-all duration-150",style:{width:`${n*100}%`}})}),h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsxs("span",{className:"text-[11px] font-mono font-bold bg-red-600 text-white px-2 py-0.5 rounded-full",children:["ETAPA ",u+1," DE ",Fl.length]}),h.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white font-sans",children:z.title})]}),h.jsx("span",{className:"text-xs text-gray-400",children:"Role a página para avançar a simulação"})]}),h.jsx("p",{className:"text-sm font-medium text-amber-400/90 mb-2",children:z.subtitle}),h.jsx("p",{className:"text-xs sm:text-sm text-gray-300 leading-relaxed",children:z.description}),h.jsxs("div",{className:"mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-400",children:[h.jsxs("span",{className:"flex items-center gap-1.5 text-gray-300",children:[h.jsx(Gx,{className:"w-4 h-4 text-red-500 animate-bounce"}),"Role para baixo para ver a ação do Saponificante e CO2"]}),h.jsx("a",{href:"#calculadora",className:"text-xs font-bold text-red-400 hover:text-red-300 underline underline-offset-4",children:"Ir direto para a Calculadora da Cozinha →"})]})]})})]})})]})})},Xw=()=>{const[s,e]=ut.useState("ihm"),n=[{icon:$x,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:rm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:dv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:Vx,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:pd,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:iv,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return h.jsxs("section",{id:"central-vts",className:"py-24 bg-[#0d0f13] relative overflow-hidden",children:[h.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"}),h.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"}),h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold tracking-wide uppercase mb-4",children:[h.jsx(rm,{className:"w-3.5 h-3.5"}),"Engenharia e Automação Nacional"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-red-500",children:"Outfire VTS 32S3"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[h.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[h.jsxs("div",{className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#1a1c23] to-[#0e1014] border border-white/10 p-4 shadow-2xl flex items-center justify-center overflow-hidden group",children:[s==="ihm"&&h.jsx("img",{src:"/assets/central-outfire-fundo-removido.png",alt:"Central Outfire VTS 32S3",className:"max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(230,36,41,0.25)] transition-all duration-500 group-hover:scale-105"}),s==="interno"&&h.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&h.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),h.jsxs("div",{className:"absolute bottom-4 left-4 bg-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-xs font-mono text-gray-200",children:[s==="ihm"&&"Vista Frontal do Gabinete & IHM",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),h.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#14161c] p-1.5 rounded-2xl border border-white/10",children:[h.jsx("button",{onClick:()=>e("ihm"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="ihm"?"bg-red-600 text-white shadow-glow-red":"text-gray-400 hover:text-white"}`,children:"Gabinete & IHM Touch"}),h.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-red-600 text-white shadow-glow-red":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),h.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-red-600 text-white shadow-glow-red":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),h.jsx("div",{className:"lg:col-span-5 space-y-4",children:h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),h.jsx("span",{className:"text-xs text-red-400 font-mono",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),h.jsx("div",{className:"w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/20 flex items-center justify-center text-red-500",children:h.jsx(cv,{className:"w-6 h-6"})})]}),h.jsxs("div",{className:"space-y-3.5 text-sm",children:[h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(is,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 e Dampers no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(is,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(is,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(is,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de energia."]})]}),h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx(is,{className:"w-5 h-5 text-emerald-400 shrink-0 mt-0.5"}),h.jsxs("span",{className:"text-gray-300",children:[h.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[h.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-center text-sm rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-2",children:[h.jsx("span",{children:"Dimensionar para Minha Cozinha"}),h.jsx(Ol,{className:"w-4 h-4"})]}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"py-3 px-4 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white font-semibold text-center text-sm rounded-xl border border-white/10 transition-all",children:"Baixar Manual Técnico"})]})]})})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:n.map((r,o)=>{const l=r.icon;return h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1 group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300",children:h.jsx(l,{className:"w-6 h-6"})}),h.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans",children:r.title}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:r.desc})]},o)})})]})]})},qw=()=>h.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(pd,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",h.jsx("br",{}),h.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),h.jsx(im,{className:"w-7 h-7 text-red-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",h.jsx("strong",{children:"1.700 vezes"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(fd,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),h.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),h.jsx(im,{className:"w-7 h-7 text-amber-500"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),h.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",h.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(pd,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),h.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/40 bg-gradient-to-b from-emerald-950/30 via-emerald-950/10 to-black/50 relative flex flex-col justify-between shadow-2xl",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30",children:"SOLUÇÃO DEFINITIVA"}),h.jsx(ff,{className:"w-7 h-7 text-emerald-400"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",h.jsx("strong",{children:"saponificação"}),"."]}),h.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300 space-y-2",children:[h.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[h.jsx(Yl,{className:"w-4 h-4 text-emerald-400"}),"Manta Espumosa e Resfriamento:"]}),h.jsx("p",{children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),h.jsx("div",{className:"mt-6 pt-4 border-t border-emerald-900/30 text-xs font-mono text-emerald-400 font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),h.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[h.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),h.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),$w=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return h.jsx("section",{id:"normas",className:"py-24 bg-[#0d0f13] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(sv,{className:"w-3.5 h-3.5"}),"Conformidade Regulatória Obrigatória"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400",children:"do Corpo de Bombeiros (AVCB)"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),h.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,n)=>h.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-xs font-mono font-bold bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full border border-blue-500/30",children:e.code}),h.jsx(qx,{className:"w-6 h-6 text-blue-400"})]}),h.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),h.jsx("span",{className:"text-xs text-gray-400 block mb-4 font-medium",children:e.authority}),h.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),h.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>h.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[h.jsx(ff,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),h.jsx("span",{children:r})]},o))})]}),h.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[h.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),h.jsx(Hx,{className:"w-4 h-4"})]})]},n))}),h.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:h.jsx(zx,{className:"w-8 h-8"})}),h.jsxs("div",{className:"flex-1 text-center md:text-left",children:[h.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),h.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",h.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),h.jsx("div",{className:"shrink-0",children:h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Yw=({onAddToCart:s})=>{var M,_;const[e,n]=ut.useState(1),[r,o]=ut.useState(9),[l,u]=ut.useState(!0),[d,p]=ut.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=T=>{if(n(T),T>d.length){const L=[...d];for(let R=d.length+1;R<=T;R++)L.push({id:R,name:`Coifa Setor ${R}`,lengthMeters:2,appliances:[{id:`${R}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${R}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(L)}else T<d.length&&p(d.slice(0,T))},x=(T,L)=>{const R=[...d];R[T].lengthMeters=Math.max(1,Math.min(8,Number(L.toFixed(1)))),p(R)},v=(T,L)=>{const R={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},U={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},F=[...d];F[T].appliances.push({id:Math.random().toString(36).substring(7),name:R[L],type:L,icon:I[L],widthMeters:U[L]}),p(F)},y=(T,L)=>{const R=[...d];R[T].appliances.splice(L,1),p(R)},S=ut.useMemo(()=>{let T=0,L=0,R=0,I=0;d.forEach(fe=>{T+=fe.appliances.length,L+=2,l&&(R+=1);const se=Math.max(1,Math.round(fe.lengthMeters/.9));I+=se});const U=T+L+R,F=U*2,z=Math.max(9,F);let w=9;z>9&&z<=16?w=16:z>16&&z<=25?w=25:z>25&&(w=Math.ceil(z/9)*9);const A=Math.max(1,Math.ceil(r/3)),O=A,G=Math.max(10,Math.ceil(r/3*5)),H=G<=10?10:G<=25?25:45,Z=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,te=e===1?8900:e===2?14500:19800,ne=U*185+A*210,K=I*295+O*320,$=te+ne+K+1200;return{applianceNozzlesCount:T,plenumNozzlesCount:L,damperNozzlesCount:R,totalSaponificanteNozzles:U,saponificanteLiters:z,recommendedSaponificanteCylinderLiters:w,hoodSensorsCount:I,co2NozzlesCount:A,ductSensorsCount:O,co2Kg:G,recommendedCo2CylinderKg:H,centralModel:Z,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:$}},[d,r,l,e]),C=()=>{let T=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;T+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,T+=`🏢 *Configuração da Cozinha:*
`,T+=`• Quantidade de Coifas: ${e} independente(s)
`,T+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((R,I)=>{T+=`📍 *Coifa ${I+1} (${R.lengthMeters}m):*
`,T+=`  Equipamentos sob a coifa: ${R.appliances.map(U=>U.name).join(", ")||"Nenhum"}
`}),T+=`
⚙️ *Memória de Cálculo de Supressão:*
`,T+=`• Bicos de Saponificante (Classe K): ${S.totalSaponificanteNozzles} bicos (${S.applianceNozzlesCount} equipamentos + ${S.plenumNozzlesCount} pleno + ${S.damperNozzlesCount} colarinho)
`,T+=`• Volume de Saponificante: ${S.saponificanteLiters} Litros (Cilindro recomendado: ${S.recommendedSaponificanteCylinderLiters}L)
`,T+=`• Sensores Reguláveis na Coifa (145°C): ${S.hoodSensorsCount} unidades
`,T+=`• Bicos de CO2 no Duto: ${S.co2NozzlesCount} unidades (1 a cada 3m)
`,T+=`• Sensores Reguláveis no Duto (300°C): ${S.ductSensorsCount} unidades (1 a cada 3m)
`,T+=`• Volume de CO2 no Duto: ${S.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,T+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,T+=`• Modelo da Central: ${S.centralModel}

`,T+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const L=encodeURIComponent(T);window.open(`https://wa.me/5515996576807?text=${L}`,"_blank")},N=()=>{const T={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(T)};return h.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(o0,{className:"w-3.5 h-3.5"}),"Engenharia sob Medida"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-400",children:"Diagrama Automatizado da sua Cozinha"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[h.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[h.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),h.jsx("span",{className:"text-xs font-mono text-red-400",children:"Até 3 simultâneas"})]}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(T=>h.jsxs("button",{onClick:()=>m(T),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===T?"bg-red-600 text-white shadow-glow-red border border-red-400":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[h.jsxs("span",{children:[T," ",T===1?"Coifa":"Coifas"]}),h.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:T===1?"Individual":"Setorizada"})]},T))})]}),h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[h.jsx(c0,{className:"w-4 h-4 text-cyan-400"}),h.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),h.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),h.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:T=>o(Number(T.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),h.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[h.jsx("span",{children:"3 m (Curto)"}),h.jsx("span",{children:"15 m (Médio)"}),h.jsx("span",{children:"30 m (Longo)"})]}),h.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[h.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),h.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((T,L)=>h.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[h.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:L+1}),h.jsx("h4",{className:"font-bold text-white text-sm",children:T.name})]}),h.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[T.lengthMeters," m"]})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[h.jsx("span",{children:"Comprimento da Coifa:"}),h.jsxs("span",{children:[T.lengthMeters," metros lineares"]})]}),h.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:T.lengthMeters,onChange:R=>x(L,Number(R.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),h.jsxs("div",{children:[h.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",T.appliances.length," protegidos):"]}),h.jsx("div",{className:"space-y-2 mb-3",children:T.appliances.map((R,I)=>h.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[h.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[h.jsx("span",{className:"text-base",children:R.icon}),h.jsx("span",{className:"font-medium",children:R.name}),h.jsx("span",{className:"text-[10px] bg-red-950 text-red-400 px-1.5 py-0.5 rounded border border-red-900 font-mono",children:"1 bico Saponificante"})]}),h.jsx("button",{onClick:()=>y(L,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:h.jsx(l0,{className:"w-3.5 h-3.5"})})]},R.id))}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[h.jsxs("button",{onClick:()=>v(L,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx($a,{className:"w-3 h-3 text-red-400"}),h.jsx("span",{children:"+ Fritadeira"})]}),h.jsxs("button",{onClick:()=>v(L,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx($a,{className:"w-3 h-3 text-red-400"}),h.jsx("span",{children:"+ Fogão"})]}),h.jsxs("button",{onClick:()=>v(L,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx($a,{className:"w-3 h-3 text-red-400"}),h.jsx("span",{children:"+ Chapa"})]}),h.jsxs("button",{onClick:()=>v(L,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[h.jsx($a,{className:"w-3 h-3 text-red-400"}),h.jsx("span",{children:"+ Grelha"})]})]})]})]},T.id))]}),h.jsx("div",{className:"lg:col-span-7 space-y-6",children:h.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),h.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),h.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),h.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[h.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),h.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[h.jsxs("defs",{children:[h.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[h.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),h.jsx("stop",{offset:"50%",stopColor:"#718096"}),h.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),h.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[h.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),h.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),h.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),h.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),h.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((T,L)=>{const R=270+L*(250/Math.max(1,S.co2NozzlesCount));return h.jsxs("g",{children:[h.jsx("circle",{cx:R,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:R,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),h.jsx("rect",{x:R+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${R+17}, 49)`})]},`co2-${L}`)}),h.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),h.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),h.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),h.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),h.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),h.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((T,L)=>{const R=100+(L+1)*(400/(S.hoodSensorsCount+1));return h.jsxs("g",{children:[h.jsx("circle",{cx:R,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),h.jsx("text",{x:R,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${L}`)}),h.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(_=d[0])==null?void 0:_.appliances.map((T,L)=>{const R=d[0].appliances.length,I=440/Math.max(1,R),U=80+L*I,F=I-10;return h.jsxs("g",{children:[h.jsx("rect",{x:U,y:"220",width:F,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),h.jsx("text",{x:U+F/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:T.name.split(" ")[0]}),h.jsx("text",{x:U+F/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:T.type.toUpperCase()}),h.jsx("line",{x1:U+F/2,y1:"175",x2:U+F/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),h.jsx("polygon",{points:`${U+F/2-5},200 ${U+F/2+5},200 ${U+F/2},210`,fill:"#d4af37"}),h.jsx("text",{x:U+F/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},T.id)}),h.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),h.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),h.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),h.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),h.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),h.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),h.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),h.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),h.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),h.jsx("span",{children:"Bico Saponificante Classe K"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),h.jsx("span",{children:"Bico CO2 Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),h.jsx("span",{children:"Sensor 145°C Coifa"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),h.jsx("span",{children:"Sensor 300°C Duto"})]}),h.jsxs("div",{className:"flex items-center gap-1.5",children:[h.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),h.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),h.jsxs("div",{className:"mt-6 space-y-3",children:[h.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[h.jsx(is,{className:"w-4 h-4 text-emerald-400"}),h.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),h.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),h.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),h.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),h.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),h.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),h.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),h.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),h.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[h.jsxs("button",{onClick:C,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[h.jsx(Qi,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),h.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),h.jsxs("button",{onClick:N,className:"py-4 px-6 bg-red-600 hover:bg-red-500 text-white font-bold rounded-2xl shadow-glow-red transition-all flex items-center justify-center gap-2",children:[h.jsx(Bx,{className:"w-5 h-5"}),h.jsx("span",{children:"Comprar Kit na Loja"})]})]}),h.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Kw=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Zw=({onAddToCart:s})=>{const[e,n]=ut.useState("all"),[r,o]=ut.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=Kw.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),d=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return h.jsx("section",{id:"loja",className:"py-24 bg-[#0d0f13] relative",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Hl,{className:"w-3.5 h-3.5"}),"Loja Oficial Outfire"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-400",children:"Peças de Reposição Certificadas"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),h.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[h.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>h.jsx("button",{onClick:()=>n(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-red-600 text-white shadow-glow-red":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),h.jsxs("div",{className:"relative w-full lg:w-72",children:[h.jsx(av,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),h.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-red-500 transition-colors"})]})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>h.jsxs("div",{className:"glass-panel rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#1b1e25] to-[#0f1115] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[h.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&h.jsxs("span",{className:"bg-gradient-to-r from-red-600 to-amber-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1",children:[h.jsx(Yl,{className:"w-3 h-3"}),"Mais Vendido"]}),h.jsxs("span",{className:"bg-black/70 backdrop-blur-md text-gray-300 text-[10px] font-mono px-2 py-0.5 rounded border border-white/10",children:["SKU: ",p.sku]})]}),h.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),h.jsxs("div",{className:"p-6",children:[h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),h.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>h.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[h.jsx(jx,{className:"w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5"}),h.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),h.jsxs("div",{className:"p-6 pt-0",children:[h.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),h.jsxs("span",{className:"text-2xl font-black text-white font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),h.jsx("span",{className:"text-xs text-emerald-400 font-medium",children:"Em até 12x"})]}),h.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[h.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-1.5",children:[h.jsx(Hl,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Adicionar"})]}),h.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[h.jsx(Qi,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Qw=()=>{const s=[{title:"Manual de Instalação e Esquema Elétrico Central Outfire VTS 32S3",type:"PDF Oficial de Fábrica",size:"939 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/manual-instalacao-central-outfire.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return h.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(kx,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-400",children:"Documentos de Instalação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((n,r)=>h.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${n.featured?"glass-panel-glow border-red-500/40 bg-gradient-to-b from-[#181112] to-[#0e1014]":"glass-panel border-white/10"}`,children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:n.type}),h.jsx(dd,{className:`w-6 h-6 ${n.featured?"text-red-500":"text-gray-400"}`})]}),h.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:n.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:n.description})]}),h.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[h.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",n.size]}),h.jsxs("a",{href:n.link,target:n.link.startsWith("http")||n.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${n.featured?"bg-red-600 hover:bg-red-500 text-white shadow-glow-red":"bg-white/10 hover:bg-white/20 text-white"}`,children:[h.jsx(Wx,{className:"w-3.5 h-3.5"}),h.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),h.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[h.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[h.jsx(fv,{className:"w-5 h-5 text-amber-400"}),h.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),h.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((n,r)=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[h.jsx("span",{className:"text-2xl font-black text-red-500 font-mono block mb-2 opacity-80",children:n.step}),h.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:n.title}),h.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:n.desc})]},r))}),h.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[h.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[h.jsx(hd,{className:"w-4 h-4 text-emerald-400 shrink-0"}),h.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),h.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},Jw=()=>{const[s,e]=ut.useState(null),n=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return h.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[h.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wide mb-4",children:[h.jsx(Yl,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),h.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400",children:"Sistema Outfire em Ação"})]}),h.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),h.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:n.map((r,o)=>h.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-emerald-500/30 overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[h.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[h.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),h.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[h.jsx(Xx,{className:"w-5 h-5 text-emerald-400"}),h.jsx("span",{children:"Clique para Ampliar Foto"})]}),h.jsx("div",{className:"absolute top-4 left-4",children:h.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30",children:r.category})})]}),h.jsxs("div",{className:"p-6",children:[h.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[h.jsx("span",{children:r.title}),h.jsx(Kx,{className:"w-4 h-4 text-gray-400 group-hover:text-emerald-400 transition-colors"})]}),h.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&h.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:h.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[h.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:h.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),h.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),h.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),h.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},eE=()=>{const[s,e]=ut.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[n,r]=ut.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return h.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[h.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[h.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[h.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wide",children:[h.jsx(Qi,{className:"w-3.5 h-3.5"}),"Canais Diretos de Engenharia & Vendas"]}),h.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",h.jsx("br",{}),h.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-400",children:"em Supressão Outfire"})]}),h.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),h.jsxs("div",{className:"space-y-4 pt-4",children:[h.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:h.jsx(Qi,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),h.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[h.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:h.jsx(Qi,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),h.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),h.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[h.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:h.jsx(Yx,{className:"w-5 h-5"})}),h.jsxs("div",{children:[h.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),h.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),h.jsx("div",{className:"lg:col-span-7",children:h.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[h.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),h.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),n?h.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[h.jsx(is,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),h.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):h.jsxs("form",{onSubmit:o,className:"space-y-4",children:[h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),h.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),h.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),h.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),h.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[h.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),h.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),h.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),h.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),h.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),h.jsxs("button",{type:"submit",className:"w-full py-4 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-2 group",children:[h.jsx(ov,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform"}),h.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),h.jsx("div",{className:"border-t border-white/5 py-8 bg-[#050608]",children:h.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsxs("span",{className:"font-bold text-white font-sans text-sm",children:["OUT",h.jsx("span",{className:"text-red-500",children:"FIRE"}),".com.br"]}),h.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),h.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[h.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),h.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),h.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),h.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),h.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),h.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},tE=({isOpen:s,onClose:e,cartItems:n,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=ut.useState(!1),[p,m]=ut.useState(!1);if(!s)return null;const x=n.reduce((S,C)=>S+C.product.priceBRL*C.quantity,0),v=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,n.forEach((C,N)=>{S+=`${N+1}. *${C.product.name}*
`,S+=`   SKU: ${C.product.sku} | Qtd: ${C.quantity} un
`,S+=`   Valor: R$ ${(C.product.priceBRL*C.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{m(!0),setTimeout(()=>{l(),m(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return h.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[h.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),h.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:h.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[h.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(am,{className:"w-5 h-5 text-red-500"}),h.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),h.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:h.jsx(md,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:n.length===0?h.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[h.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:h.jsx(am,{className:"w-8 h-8"})}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),h.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),h.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):n.map(S=>h.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[h.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),h.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),h.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),h.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[h.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[h.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:h.jsx(Jx,{className:"w-3 h-3"})}),h.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),h.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:h.jsx($a,{className:"w-3 h-3"})})]}),h.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[h.jsx(l0,{className:"w-3 h-3"}),h.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),n.length>0&&h.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[h.jsxs("div",{className:"space-y-1.5",children:[h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Subtotal:"}),h.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),h.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[h.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),h.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),h.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[h.jsx("span",{children:"Total Estimado:"}),h.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[h.jsx(Qi,{className:"w-4 h-4"}),h.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),h.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow-glow-red transition-all flex items-center justify-center gap-2",children:[h.jsx(sm,{className:"w-4 h-4"}),h.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),h.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[h.jsx(hd,{className:"w-3.5 h-3.5 text-emerald-400"}),h.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&h.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[h.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),h.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:h.jsx(md,{className:"w-5 h-5"})})]}),p?h.jsxs("div",{className:"text-center py-12 space-y-4",children:[h.jsx(ff,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),h.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),h.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):h.jsxs("div",{className:"space-y-4",children:[h.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",h.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),h.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(nv,{className:"w-6 h-6 text-emerald-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),h.jsx(Ol,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(sm,{className:"w-6 h-6 text-blue-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),h.jsx(Ol,{className:"w-4 h-4 text-gray-400"})]}),h.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx(hd,{className:"w-6 h-6 text-amber-400"}),h.jsxs("div",{children:[h.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),h.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),h.jsx(Ol,{className:"w-4 h-4 text-gray-400"})]})]})]}),h.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},nE=()=>h.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[h.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),h.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[h.jsx(Qx,{className:"w-7 h-7 fill-white/10"}),h.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[h.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),h.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function iE(){const[s,e]=ut.useState([]),[n,r]=ut.useState(!1),o=m=>{e(x=>x.find(y=>y.product.id===m.id)?x.map(y=>y.product.id===m.id?{...y,quantity:y.quantity+1}:y):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(y=>{if(y.product.id===m){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=m=>{e(x=>x.filter(v=>v.product.id!==m))},d=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return h.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white",children:[h.jsx(pv,{cartCount:p,onOpenCart:()=>r(!0)}),h.jsxs("main",{className:"flex-1",children:[h.jsx(Ww,{}),h.jsx(Xw,{}),h.jsx(qw,{}),h.jsx($w,{}),h.jsx(Yw,{onAddToCart:o}),h.jsx(Zw,{onAddToCart:o}),h.jsx(Qw,{}),h.jsx(Jw,{})]}),h.jsx(eE,{}),h.jsx(tE,{isOpen:n,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),h.jsx(nE,{})]})}Ix.createRoot(document.getElementById("root")).render(h.jsx(Cx.StrictMode,{children:h.jsx(iE,{})}));
