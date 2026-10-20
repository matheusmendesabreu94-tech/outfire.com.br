(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function U0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},eo={},Xu={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function ov(){if(mm)return bt;mm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function M(F,se,we){this.props=F,this.context=se,this.refs=A,this.updater=we||S}M.prototype.isReactComponent={},M.prototype.setState=function(F,se){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,se,"setState")},M.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function _(){}_.prototype=M.prototype;function C(F,se,we){this.props=F,this.context=se,this.refs=A,this.updater=we||S}var D=C.prototype=new _;D.constructor=C,T(D,M.prototype),D.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function B(F,se,we){var Xe,$e={},re=null,he=null;if(se!=null)for(Xe in se.ref!==void 0&&(he=se.ref),se.key!==void 0&&(re=""+se.key),se)I.call(se,Xe)&&!O.hasOwnProperty(Xe)&&($e[Xe]=se[Xe]);var ve=arguments.length-2;if(ve===1)$e.children=we;else if(1<ve){for(var Te=Array(ve),j=0;j<ve;j++)Te[j]=arguments[j+2];$e.children=Te}if(F&&F.defaultProps)for(Xe in ve=F.defaultProps,ve)$e[Xe]===void 0&&($e[Xe]=ve[Xe]);return{$$typeof:s,type:F,key:re,ref:he,props:$e,_owner:L.current}}function b(F,se){return{$$typeof:s,type:F.type,key:se,ref:F.ref,props:F.props,_owner:F._owner}}function P(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var se={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(we){return se[we]})}var $=/\/+/g;function K(F,se){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):se.toString(36)}function ue(F,se,we,Xe,$e){var re=typeof F;(re==="undefined"||re==="boolean")&&(F=null);var he=!1;if(F===null)he=!0;else switch(re){case"string":case"number":he=!0;break;case"object":switch(F.$$typeof){case s:case e:he=!0}}if(he)return he=F,$e=$e(he),F=Xe===""?"."+K(he,0):Xe,R($e)?(we="",F!=null&&(we=F.replace($,"$&/")+"/"),ue($e,se,we,"",function(j){return j})):$e!=null&&(P($e)&&($e=b($e,we+(!$e.key||he&&he.key===$e.key?"":(""+$e.key).replace($,"$&/")+"/")+F)),se.push($e)),1;if(he=0,Xe=Xe===""?".":Xe+":",R(F))for(var ve=0;ve<F.length;ve++){re=F[ve];var Te=Xe+K(re,ve);he+=ue(re,se,we,Te,$e)}else if(Te=y(F),typeof Te=="function")for(F=Te.call(F),ve=0;!(re=F.next()).done;)re=re.value,Te=Xe+K(re,ve++),he+=ue(re,se,we,Te,$e);else if(re==="object")throw se=String(F),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return he}function de(F,se,we){if(F==null)return F;var Xe=[],$e=0;return ue(F,Xe,"","",function(re){return se.call(we,re,$e++)}),Xe}function ie(F){if(F._status===-1){var se=F._result;se=se(),se.then(function(we){(F._status===0||F._status===-1)&&(F._status=1,F._result=we)},function(we){(F._status===0||F._status===-1)&&(F._status=2,F._result=we)}),F._status===-1&&(F._status=0,F._result=se)}if(F._status===1)return F._result.default;throw F._result}var Q={current:null},q={transition:null},pe={ReactCurrentDispatcher:Q,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function ae(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:de,forEach:function(F,se,we){de(F,function(){se.apply(this,arguments)},we)},count:function(F){var se=0;return de(F,function(){se++}),se},toArray:function(F){return de(F,function(se){return se})||[]},only:function(F){if(!P(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},bt.Component=M,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=C,bt.StrictMode=r,bt.Suspense=p,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=pe,bt.act=ae,bt.cloneElement=function(F,se,we){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Xe=T({},F.props),$e=F.key,re=F.ref,he=F._owner;if(se!=null){if(se.ref!==void 0&&(re=se.ref,he=L.current),se.key!==void 0&&($e=""+se.key),F.type&&F.type.defaultProps)var ve=F.type.defaultProps;for(Te in se)I.call(se,Te)&&!O.hasOwnProperty(Te)&&(Xe[Te]=se[Te]===void 0&&ve!==void 0?ve[Te]:se[Te])}var Te=arguments.length-2;if(Te===1)Xe.children=we;else if(1<Te){ve=Array(Te);for(var j=0;j<Te;j++)ve[j]=arguments[j+2];Xe.children=ve}return{$$typeof:s,type:F.type,key:$e,ref:re,props:Xe,_owner:he}},bt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},bt.createElement=B,bt.createFactory=function(F){var se=B.bind(null,F);return se.type=F,se},bt.createRef=function(){return{current:null}},bt.forwardRef=function(F){return{$$typeof:d,render:F}},bt.isValidElement=P,bt.lazy=function(F){return{$$typeof:x,_payload:{_status:-1,_result:F},_init:ie}},bt.memo=function(F,se){return{$$typeof:m,type:F,compare:se===void 0?null:se}},bt.startTransition=function(F){var se=q.transition;q.transition={};try{F()}finally{q.transition=se}},bt.unstable_act=ae,bt.useCallback=function(F,se){return Q.current.useCallback(F,se)},bt.useContext=function(F){return Q.current.useContext(F)},bt.useDebugValue=function(){},bt.useDeferredValue=function(F){return Q.current.useDeferredValue(F)},bt.useEffect=function(F,se){return Q.current.useEffect(F,se)},bt.useId=function(){return Q.current.useId()},bt.useImperativeHandle=function(F,se,we){return Q.current.useImperativeHandle(F,se,we)},bt.useInsertionEffect=function(F,se){return Q.current.useInsertionEffect(F,se)},bt.useLayoutEffect=function(F,se){return Q.current.useLayoutEffect(F,se)},bt.useMemo=function(F,se){return Q.current.useMemo(F,se)},bt.useReducer=function(F,se,we){return Q.current.useReducer(F,se,we)},bt.useRef=function(F){return Q.current.useRef(F)},bt.useState=function(F){return Q.current.useState(F)},bt.useSyncExternalStore=function(F,se,we){return Q.current.useSyncExternalStore(F,se,we)},bt.useTransition=function(){return Q.current.useTransition()},bt.version="18.3.1",bt}var gm;function Rf(){return gm||(gm=1,Xu.exports=ov()),Xu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xm;function lv(){if(xm)return eo;xm=1;var s=Rf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:o.current}}return eo.Fragment=t,eo.jsx=u,eo.jsxs=u,eo}var vm;function cv(){return vm||(vm=1,Wu.exports=lv()),Wu.exports}var f=cv(),Fe=Rf();const uv=U0(Fe);var El={},qu={exports:{}},Kn={},Yu={exports:{}},$u={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m;function dv(){return _m||(_m=1,(function(s){function e(q,pe){var ae=q.length;q.push(pe);e:for(;0<ae;){var F=ae-1>>>1,se=q[F];if(0<o(se,pe))q[F]=pe,q[ae]=se,ae=F;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var pe=q[0],ae=q.pop();if(ae!==pe){q[0]=ae;e:for(var F=0,se=q.length,we=se>>>1;F<we;){var Xe=2*(F+1)-1,$e=q[Xe],re=Xe+1,he=q[re];if(0>o($e,ae))re<se&&0>o(he,$e)?(q[F]=he,q[re]=ae,F=re):(q[F]=$e,q[Xe]=ae,F=Xe);else if(re<se&&0>o(he,ae))q[F]=he,q[re]=ae,F=re;else break e}}return pe}function o(q,pe){var ae=q.sortIndex-pe.sortIndex;return ae!==0?ae:q.id-pe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,S=!1,T=!1,A=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var pe=t(m);pe!==null;){if(pe.callback===null)r(m);else if(pe.startTime<=q)r(m),pe.sortIndex=pe.expirationTime,e(p,pe);else break;pe=t(m)}}function R(q){if(A=!1,D(q),!T)if(t(p)!==null)T=!0,ie(I);else{var pe=t(m);pe!==null&&Q(R,pe.startTime-q)}}function I(q,pe){T=!1,A&&(A=!1,_(B),B=-1),S=!0;var ae=y;try{for(D(pe),v=t(p);v!==null&&(!(v.expirationTime>pe)||q&&!z());){var F=v.callback;if(typeof F=="function"){v.callback=null,y=v.priorityLevel;var se=F(v.expirationTime<=pe);pe=s.unstable_now(),typeof se=="function"?v.callback=se:v===t(p)&&r(p),D(pe)}else r(p);v=t(p)}if(v!==null)var we=!0;else{var Xe=t(m);Xe!==null&&Q(R,Xe.startTime-pe),we=!1}return we}finally{v=null,y=ae,S=!1}}var L=!1,O=null,B=-1,b=5,P=-1;function z(){return!(s.unstable_now()-P<b)}function $(){if(O!==null){var q=s.unstable_now();P=q;var pe=!0;try{pe=O(!0,q)}finally{pe?K():(L=!1,O=null)}}else L=!1}var K;if(typeof C=="function")K=function(){C($)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=$,K=function(){de.postMessage(null)}}else K=function(){M($,0)};function ie(q){O=q,L||(L=!0,K())}function Q(q,pe){B=M(function(){q(s.unstable_now())},pe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ie(I))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(q){switch(y){case 1:case 2:case 3:var pe=3;break;default:pe=y}var ae=y;y=pe;try{return q()}finally{y=ae}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,pe){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var ae=y;y=q;try{return pe()}finally{y=ae}},s.unstable_scheduleCallback=function(q,pe,ae){var F=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?F+ae:F):ae=F,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=ae+se,q={id:x++,callback:pe,priorityLevel:q,startTime:ae,expirationTime:se,sortIndex:-1},ae>F?(q.sortIndex=ae,e(m,q),t(p)===null&&q===t(m)&&(A?(_(B),B=-1):A=!0,Q(R,ae-F))):(q.sortIndex=se,e(p,q),T||S||(T=!0,ie(I))),q},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(q){var pe=y;return function(){var ae=y;y=pe;try{return q.apply(this,arguments)}finally{y=ae}}}})($u)),$u}var ym;function fv(){return ym||(ym=1,Yu.exports=dv()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sm;function hv(){if(Sm)return Kn;Sm=1;var s=Rf(),e=fv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);M[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);M[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);M[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var h=M.hasOwnProperty(i)?M[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),q=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var ae=Object.assign,F;function se(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var we=!1;function Xe(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,k=g.length-1;1<=w&&0<=k&&h[w]!==g[k];)k--;for(;1<=w&&0<=k;w--,k--)if(h[w]!==g[k]){if(w!==1||k!==1)do if(w--,k--,0>k||h[w]!==g[k]){var G=`
`+h[w].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=w&&0<=k);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function $e(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case b:return"Profiler";case B:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ve(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Te(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function j(n){var i=Te(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Oe(n){n._valueTracker||(n._valueTracker=j(n))}function Tt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Te(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ze(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lt(n,i){var a=i.checked;return ae({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ct(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ve(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function kt(n,i){dt(n,i);var a=ve(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?It(n,i.type,a):i.hasOwnProperty("defaultValue")&&It(n,i.type,ve(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function V(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function It(n,i,a){(i!=="number"||ze(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var mt=Array.isArray;function wt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ve(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function qe(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function U(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(mt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ve(a)}}function E(n,i){var a=ve(i.value),c=ve(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function X(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,He=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function be(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var ke={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(ke).forEach(function(n){st.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ke[i]=ke[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||ke.hasOwnProperty(n)&&ke[n]?(""+i).trim():i+"px"}function Pe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ke=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,i){if(i){if(Ke[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yt=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ue=null,Ee=null,Ie=null;function Se(n){if(n=Ba(n)){if(typeof Ue!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Ue(n.stateNode,n.type,i))}}function ge(n){Ee?Ie?Ie.push(n):Ie=[n]:Ee=n}function De(){if(Ee){var n=Ee,i=Ie;if(Ie=Ee=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function ht(n,i){return n(i)}function Rt(){}var Pt=!1;function On(n,i,a){if(Pt)return n(i,a);Pt=!0;try{return ht(n,i,a)}finally{Pt=!1,(Ee!==null||Ie!==null)&&(Rt(),De())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var $i=!1;if(d)try{var Ri={};Object.defineProperty(Ri,"passive",{get:function(){$i=!0}}),window.addEventListener("test",Ri,Ri),window.removeEventListener("test",Ri,Ri)}catch{$i=!1}function _r(n,i,a,c,h,g,w,k,G){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(_e){this.onError(_e)}}var Ni=!1,Pi=null,Ki=!1,Fn=null,yr={onError:function(n){Ni=!0,Pi=n}};function Zr(n,i,a,c,h,g,w,k,G){Ni=!1,Pi=null,_r.apply(yr,arguments)}function Qr(n,i,a,c,h,g,w,k,G){if(Zr.apply(this,arguments),Ni){if(Ni){var ce=Pi;Ni=!1,Pi=null}else throw Error(t(198));Ki||(Ki=!0,Fn=ce)}}function kn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Bn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Di(n){if(kn(n)!==n)throw Error(t(188))}function Jr(n){var i=n.alternate;if(!i){if(i=kn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Di(h),n;if(g===c)return Di(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,k=h.child;k;){if(k===a){w=!0,a=h,c=g;break}if(k===c){w=!0,c=h,a=g;break}k=k.sibling}if(!w){for(k=g.child;k;){if(k===a){w=!0,a=g,c=h;break}if(k===c){w=!0,c=g,a=h;break}k=k.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Zi(n){return n=Jr(n),n!==null?Li(n):null}function Li(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Li(n);if(i!==null)return i;n=n.sibling}return null}var li=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Ma=e.unstable_shouldYield,es=e.unstable_requestPaint,Vt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,le=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,J=e.unstable_LowPriority,Le=e.unstable_IdlePriority,je=null,Ce=null;function Ze(n){if(Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var Ge=Math.clz32?Math.clz32:xt,ot=Math.log,rt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(ot(n)/rt|0)|0}var Nt=64,Gt=4194304;function zt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var k=w&~h;k!==0?c=zt(k):(g&=w,g!==0&&(c=zt(g)))}else w=a&~h,w!==0?c=zt(w):g!==0&&(c=zt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Ge(i),h=1<<a,c|=n[a],i&=~h;return c}function at(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-Ge(g),k=1<<w,G=h[w];G===-1?((k&a)===0||(k&c)!==0)&&(h[w]=at(k,i)):G<=i&&(n.expiredLanes|=k),g&=~k}}function Ye(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tt(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function qt(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function jt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ge(i),n[i]=a}function on(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Ge(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Re(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Ge(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var et=0;function xn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var vn,_n,As,Ii,Zf,gc=!1,Eo=[],Sr=null,Mr=null,Er=null,Ea=new Map,wa=new Map,wr=[],Rg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Qf(n,i){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ea.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(i.pointerId)}}function ba(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ba(i),i!==null&&_n(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Ng(n,i,a,c,h){switch(i){case"focusin":return Sr=ba(Sr,n,i,a,c,h),!0;case"dragenter":return Mr=ba(Mr,n,i,a,c,h),!0;case"mouseover":return Er=ba(Er,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Ea.set(g,ba(Ea.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,wa.set(g,ba(wa.get(g)||null,n,i,a,c,h)),!0}return!1}function Jf(n){var i=ts(n.target);if(i!==null){var a=kn(i);if(a!==null){if(i=a.tag,i===13){if(i=Bn(a),i!==null){n.blockedOn=i,Zf(n.priority,function(){As(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function wo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=vc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);yt=c,a.target.dispatchEvent(c),yt=null}else return i=Ba(a),i!==null&&_n(i),n.blockedOn=a,!1;i.shift()}return!0}function eh(n,i,a){wo(n)&&a.delete(i)}function Pg(){gc=!1,Sr!==null&&wo(Sr)&&(Sr=null),Mr!==null&&wo(Mr)&&(Mr=null),Er!==null&&wo(Er)&&(Er=null),Ea.forEach(eh),wa.forEach(eh)}function Ta(n,i){n.blockedOn===i&&(n.blockedOn=null,gc||(gc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Pg)))}function Aa(n){function i(h){return Ta(h,n)}if(0<Eo.length){Ta(Eo[0],n);for(var a=1;a<Eo.length;a++){var c=Eo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Sr!==null&&Ta(Sr,n),Mr!==null&&Ta(Mr,n),Er!==null&&Ta(Er,n),Ea.forEach(i),wa.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Jf(a),a.blockedOn===null&&wr.shift()}var Cs=R.ReactCurrentBatchConfig,bo=!0;function Dg(n,i,a,c){var h=et,g=Cs.transition;Cs.transition=null;try{et=1,xc(n,i,a,c)}finally{et=h,Cs.transition=g}}function Lg(n,i,a,c){var h=et,g=Cs.transition;Cs.transition=null;try{et=4,xc(n,i,a,c)}finally{et=h,Cs.transition=g}}function xc(n,i,a,c){if(bo){var h=vc(n,i,a,c);if(h===null)Uc(n,i,c,To,a),Qf(n,c);else if(Ng(h,n,i,a,c))c.stopPropagation();else if(Qf(n,c),i&4&&-1<Rg.indexOf(n)){for(;h!==null;){var g=Ba(h);if(g!==null&&vn(g),g=vc(n,i,a,c),g===null&&Uc(n,i,c,To,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Uc(n,i,c,null,a)}}var To=null;function vc(n,i,a,c){if(To=null,n=H(c),n=ts(n),n!==null)if(i=kn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Bn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return To=n,null}function th(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case le:return 4;case ne:case J:return 16;case Le:return 536870912;default:return 16}default:return 16}}var br=null,_c=null,Ao=null;function nh(){if(Ao)return Ao;var n,i=_c,a=i.length,c,h="value"in br?br.value:br.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[g-c];c++);return Ao=h.slice(n,1<c?1-c:void 0)}function Co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function ih(){return!1}function ti(n){function i(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(a=n[k],this[k]=a?a(g):g[k]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ro:ih,this.isPropagationStopped=ih,this}return ae(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yc=ti(Rs),Ca=ae({},Rs,{view:0,detail:0}),Ig=ti(Ca),Sc,Mc,Ra,No=ae({},Ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ra&&(Ra&&n.type==="mousemove"?(Sc=n.screenX-Ra.screenX,Mc=n.screenY-Ra.screenY):Mc=Sc=0,Ra=n),Sc)},movementY:function(n){return"movementY"in n?n.movementY:Mc}}),rh=ti(No),Ug=ae({},No,{dataTransfer:0}),Og=ti(Ug),Fg=ae({},Ca,{relatedTarget:0}),Ec=ti(Fg),kg=ae({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=ti(kg),zg=ae({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),jg=ti(zg),Vg=ae({},Rs,{data:0}),sh=ti(Vg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Xg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Wg[n])?!!i[n]:!1}function wc(){return Xg}var qg=ae({},Ca,{key:function(n){if(n.key){var i=Gg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wc,charCode:function(n){return n.type==="keypress"?Co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yg=ti(qg),$g=ae({},No,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ah=ti($g),Kg=ae({},Ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wc}),Zg=ti(Kg),Qg=ae({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Jg=ti(Qg),ex=ae({},No,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=ti(ex),nx=[9,13,27,32],bc=d&&"CompositionEvent"in window,Na=null;d&&"documentMode"in document&&(Na=document.documentMode);var ix=d&&"TextEvent"in window&&!Na,oh=d&&(!bc||Na&&8<Na&&11>=Na),lh=" ",ch=!1;function uh(n,i){switch(n){case"keyup":return nx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function rx(n,i){switch(n){case"compositionend":return dh(i);case"keypress":return i.which!==32?null:(ch=!0,lh);case"textInput":return n=i.data,n===lh&&ch?null:n;default:return null}}function sx(n,i){if(Ns)return n==="compositionend"||!bc&&uh(n,i)?(n=nh(),Ao=_c=br=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return oh&&i.locale!=="ko"?null:i.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ax[n.type]:i==="textarea"}function hh(n,i,a,c){ge(c),i=Uo(i,"onChange"),0<i.length&&(a=new yc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Pa=null,Da=null;function ox(n){Ph(n,0)}function Po(n){var i=Us(n);if(Tt(i))return n}function lx(n,i){if(n==="change")return i}var ph=!1;if(d){var Tc;if(d){var Ac="oninput"in document;if(!Ac){var mh=document.createElement("div");mh.setAttribute("oninput","return;"),Ac=typeof mh.oninput=="function"}Tc=Ac}else Tc=!1;ph=Tc&&(!document.documentMode||9<document.documentMode)}function gh(){Pa&&(Pa.detachEvent("onpropertychange",xh),Da=Pa=null)}function xh(n){if(n.propertyName==="value"&&Po(Da)){var i=[];hh(i,Da,n,H(n)),On(ox,i)}}function cx(n,i,a){n==="focusin"?(gh(),Pa=i,Da=a,Pa.attachEvent("onpropertychange",xh)):n==="focusout"&&gh()}function ux(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Po(Da)}function dx(n,i){if(n==="click")return Po(i)}function fx(n,i){if(n==="input"||n==="change")return Po(i)}function hx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xi=typeof Object.is=="function"?Object.is:hx;function La(n,i){if(xi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!xi(n[h],i[h]))return!1}return!0}function vh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function _h(n,i){var a=vh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=vh(a)}}function yh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?yh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Sh(){for(var n=window,i=ze();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ze(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function px(n){var i=Sh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&yh(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=_h(a,g);var w=_h(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mx=d&&"documentMode"in document&&11>=document.documentMode,Ps=null,Rc=null,Ia=null,Nc=!1;function Mh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Ps==null||Ps!==ze(c)||(c=Ps,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&La(Ia,c)||(Ia=c,c=Uo(Rc,"onSelect"),0<c.length&&(i=new yc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function Do(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:Do("Animation","AnimationEnd"),animationiteration:Do("Animation","AnimationIteration"),animationstart:Do("Animation","AnimationStart"),transitionend:Do("Transition","TransitionEnd")},Pc={},Eh={};d&&(Eh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Lo(n){if(Pc[n])return Pc[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Eh)return Pc[n]=i[a];return n}var wh=Lo("animationend"),bh=Lo("animationiteration"),Th=Lo("animationstart"),Ah=Lo("transitionend"),Ch=new Map,Rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){Ch.set(n,i),l(i,[n])}for(var Dc=0;Dc<Rh.length;Dc++){var Lc=Rh[Dc],gx=Lc.toLowerCase(),xx=Lc[0].toUpperCase()+Lc.slice(1);Tr(gx,"on"+xx)}Tr(wh,"onAnimationEnd"),Tr(bh,"onAnimationIteration"),Tr(Th,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Ah,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ua));function Nh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Qr(c,i,void 0,n),n.currentTarget=null}function Ph(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var k=c[w],G=k.instance,ce=k.currentTarget;if(k=k.listener,G!==g&&h.isPropagationStopped())break e;Nh(h,k,ce),g=G}else for(w=0;w<c.length;w++){if(k=c[w],G=k.instance,ce=k.currentTarget,k=k.listener,G!==g&&h.isPropagationStopped())break e;Nh(h,k,ce),g=G}}}if(Ki)throw n=Fn,Ki=!1,Fn=null,n}function Yt(n,i){var a=i[jc];a===void 0&&(a=i[jc]=new Set);var c=n+"__bubble";a.has(c)||(Dh(i,n,2,!1),a.add(c))}function Ic(n,i,a){var c=0;i&&(c|=4),Dh(a,n,c,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function Oa(n){if(!n[Io]){n[Io]=!0,r.forEach(function(a){a!=="selectionchange"&&(vx.has(a)||Ic(a,!1,n),Ic(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Io]||(i[Io]=!0,Ic("selectionchange",!1,i))}}function Dh(n,i,a,c){switch(th(i)){case 1:var h=Dg;break;case 4:h=Lg;break;default:h=xc}a=h.bind(null,i,a,n),h=void 0,!$i||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Uc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var k=c.stateNode.containerInfo;if(k===h||k.nodeType===8&&k.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var G=w.tag;if((G===3||G===4)&&(G=w.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;w=w.return}for(;k!==null;){if(w=ts(k),w===null)return;if(G=w.tag,G===5||G===6){c=g=w;continue e}k=k.parentNode}}c=c.return}On(function(){var ce=g,_e=H(a),Me=[];e:{var xe=Ch.get(n);if(xe!==void 0){var We=yc,Je=n;switch(n){case"keypress":if(Co(a)===0)break e;case"keydown":case"keyup":We=Yg;break;case"focusin":Je="focus",We=Ec;break;case"focusout":Je="blur",We=Ec;break;case"beforeblur":case"afterblur":We=Ec;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=rh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Og;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=Zg;break;case wh:case bh:case Th:We=Bg;break;case Ah:We=Jg;break;case"scroll":We=Ig;break;case"wheel":We=tx;break;case"copy":case"cut":case"paste":We=jg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=ah}var nt=(i&4)!==0,an=!nt&&n==="scroll",ee=nt?xe!==null?xe+"Capture":null:xe;nt=[];for(var W=ce,te;W!==null;){te=W;var Ae=te.stateNode;if(te.tag===5&&Ae!==null&&(te=Ae,ee!==null&&(Ae=gn(W,ee),Ae!=null&&nt.push(Fa(W,Ae,te)))),an)break;W=W.return}0<nt.length&&(xe=new We(xe,Je,null,a,_e),Me.push({event:xe,listeners:nt}))}}if((i&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",xe&&a!==yt&&(Je=a.relatedTarget||a.fromElement)&&(ts(Je)||Je[Qi]))break e;if((We||xe)&&(xe=_e.window===_e?_e:(xe=_e.ownerDocument)?xe.defaultView||xe.parentWindow:window,We?(Je=a.relatedTarget||a.toElement,We=ce,Je=Je?ts(Je):null,Je!==null&&(an=kn(Je),Je!==an||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(We=null,Je=ce),We!==Je)){if(nt=rh,Ae="onMouseLeave",ee="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(nt=ah,Ae="onPointerLeave",ee="onPointerEnter",W="pointer"),an=We==null?xe:Us(We),te=Je==null?xe:Us(Je),xe=new nt(Ae,W+"leave",We,a,_e),xe.target=an,xe.relatedTarget=te,Ae=null,ts(_e)===ce&&(nt=new nt(ee,W+"enter",Je,a,_e),nt.target=te,nt.relatedTarget=an,Ae=nt),an=Ae,We&&Je)t:{for(nt=We,ee=Je,W=0,te=nt;te;te=Ls(te))W++;for(te=0,Ae=ee;Ae;Ae=Ls(Ae))te++;for(;0<W-te;)nt=Ls(nt),W--;for(;0<te-W;)ee=Ls(ee),te--;for(;W--;){if(nt===ee||ee!==null&&nt===ee.alternate)break t;nt=Ls(nt),ee=Ls(ee)}nt=null}else nt=null;We!==null&&Lh(Me,xe,We,nt,!1),Je!==null&&an!==null&&Lh(Me,an,Je,nt,!0)}}e:{if(xe=ce?Us(ce):window,We=xe.nodeName&&xe.nodeName.toLowerCase(),We==="select"||We==="input"&&xe.type==="file")var it=lx;else if(fh(xe))if(ph)it=fx;else{it=ux;var ct=cx}else(We=xe.nodeName)&&We.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(it=dx);if(it&&(it=it(n,ce))){hh(Me,it,a,_e);break e}ct&&ct(n,xe,ce),n==="focusout"&&(ct=xe._wrapperState)&&ct.controlled&&xe.type==="number"&&It(xe,"number",xe.value)}switch(ct=ce?Us(ce):window,n){case"focusin":(fh(ct)||ct.contentEditable==="true")&&(Ps=ct,Rc=ce,Ia=null);break;case"focusout":Ia=Rc=Ps=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Mh(Me,a,_e);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Mh(Me,a,_e)}var ut;if(bc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ns?uh(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(oh&&a.locale!=="ko"&&(Ns||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ns&&(ut=nh()):(br=_e,_c="value"in br?br.value:br.textContent,Ns=!0)),ct=Uo(ce,vt),0<ct.length&&(vt=new sh(vt,n,null,a,_e),Me.push({event:vt,listeners:ct}),ut?vt.data=ut:(ut=dh(a),ut!==null&&(vt.data=ut)))),(ut=ix?rx(n,a):sx(n,a))&&(ce=Uo(ce,"onBeforeInput"),0<ce.length&&(_e=new sh("onBeforeInput","beforeinput",null,a,_e),Me.push({event:_e,listeners:ce}),_e.data=ut))}Ph(Me,i)})}function Fa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Uo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=gn(n,a),g!=null&&c.unshift(Fa(n,g,h)),g=gn(n,i),g!=null&&c.push(Fa(n,g,h))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Lh(n,i,a,c,h){for(var g=i._reactName,w=[];a!==null&&a!==c;){var k=a,G=k.alternate,ce=k.stateNode;if(G!==null&&G===c)break;k.tag===5&&ce!==null&&(k=ce,h?(G=gn(a,g),G!=null&&w.unshift(Fa(a,G,k))):h||(G=gn(a,g),G!=null&&w.push(Fa(a,G,k)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var _x=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Ih(n){return(typeof n=="string"?n:""+n).replace(_x,`
`).replace(yx,"")}function Oo(n,i,a){if(i=Ih(i),Ih(n)!==i&&a)throw Error(t(425))}function Fo(){}var Oc=null,Fc=null;function kc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Bc=typeof setTimeout=="function"?setTimeout:void 0,Sx=typeof clearTimeout=="function"?clearTimeout:void 0,Uh=typeof Promise=="function"?Promise:void 0,Mx=typeof queueMicrotask=="function"?queueMicrotask:typeof Uh<"u"?function(n){return Uh.resolve(null).then(n).catch(Ex)}:Bc;function Ex(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Aa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Aa(i)}function Ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Oh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Ui="__reactFiber$"+Is,ka="__reactProps$"+Is,Qi="__reactContainer$"+Is,jc="__reactEvents$"+Is,wx="__reactListeners$"+Is,bx="__reactHandles$"+Is;function ts(n){var i=n[Ui];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Ui]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Oh(n);n!==null;){if(a=n[Ui])return a;n=Oh(n)}return i}n=a,a=n.parentNode}return null}function Ba(n){return n=n[Ui]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[ka]||null}var Vc=[],Os=-1;function Cr(n){return{current:n}}function $t(n){0>Os||(n.current=Vc[Os],Vc[Os]=null,Os--)}function Xt(n,i){Os++,Vc[Os]=n.current,n.current=i}var Rr={},Cn=Cr(Rr),Wn=Cr(!1),ns=Rr;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Xn(n){return n=n.childContextTypes,n!=null}function Bo(){$t(Wn),$t(Cn)}function Fh(n,i,a){if(Cn.current!==Rr)throw Error(t(168));Xt(Cn,i),Xt(Wn,a)}function kh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,he(n)||"Unknown",h));return ae({},a,c)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,ns=Cn.current,Xt(Cn,n),Xt(Wn,Wn.current),!0}function Bh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=kh(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,$t(Wn),$t(Cn),Xt(Cn,n)):$t(Wn),Xt(Wn,a)}var Ji=null,jo=!1,Gc=!1;function zh(n){Ji===null?Ji=[n]:Ji.push(n)}function Tx(n){jo=!0,zh(n)}function Nr(){if(!Gc&&Ji!==null){Gc=!0;var n=0,i=et;try{var a=Ji;for(et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,jo=!1}catch(h){throw Ji!==null&&(Ji=Ji.slice(n+1)),li(Y,Nr),h}finally{et=i,Gc=!1}}return null}var ks=[],Bs=0,Vo=null,Go=0,ci=[],ui=0,is=null,er=1,tr="";function rs(n,i){ks[Bs++]=Go,ks[Bs++]=Vo,Vo=n,Go=i}function jh(n,i,a){ci[ui++]=er,ci[ui++]=tr,ci[ui++]=is,is=n;var c=er;n=tr;var h=32-Ge(c)-1;c&=~(1<<h),a+=1;var g=32-Ge(i)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,er=1<<32-Ge(i)+h|a<<h|c,tr=g+n}else er=1<<g|a<<h|c,tr=n}function Hc(n){n.return!==null&&(rs(n,1),jh(n,1,0))}function Wc(n){for(;n===Vo;)Vo=ks[--Bs],ks[Bs]=null,Go=ks[--Bs],ks[Bs]=null;for(;n===is;)is=ci[--ui],ci[ui]=null,tr=ci[--ui],ci[ui]=null,er=ci[--ui],ci[ui]=null}var ni=null,ii=null,Qt=!1,vi=null;function Vh(n,i){var a=pi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Gh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ni=n,ii=Ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ni=n,ii=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=pi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ni=n,ii=null,!0):!1;default:return!1}}function Xc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function qc(n){if(Qt){var i=ii;if(i){var a=i;if(!Gh(n,i)){if(Xc(n))throw Error(t(418));i=Ar(a.nextSibling);var c=ni;i&&Gh(n,i)?Vh(c,a):(n.flags=n.flags&-4097|2,Qt=!1,ni=n)}}else{if(Xc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ni=n}}}function Hh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ni=n}function Ho(n){if(n!==ni)return!1;if(!Qt)return Hh(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!kc(n.type,n.memoizedProps)),i&&(i=ii)){if(Xc(n))throw Wh(),Error(t(418));for(;i;)Vh(n,i),i=Ar(i.nextSibling)}if(Hh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ii=Ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ii=null}}else ii=ni?Ar(n.stateNode.nextSibling):null;return!0}function Wh(){for(var n=ii;n;)n=Ar(n.nextSibling)}function zs(){ii=ni=null,Qt=!1}function Yc(n){vi===null?vi=[n]:vi.push(n)}var Ax=R.ReactCurrentBatchConfig;function za(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var k=h.refs;w===null?delete k[g]:k[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Xh(n){var i=n._init;return i(n._payload)}function qh(n){function i(ee,W){if(n){var te=ee.deletions;te===null?(ee.deletions=[W],ee.flags|=16):te.push(W)}}function a(ee,W){if(!n)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function c(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function h(ee,W){return ee=kr(ee,W),ee.index=0,ee.sibling=null,ee}function g(ee,W,te){return ee.index=te,n?(te=ee.alternate,te!==null?(te=te.index,te<W?(ee.flags|=2,W):te):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function k(ee,W,te,Ae){return W===null||W.tag!==6?(W=Bu(te,ee.mode,Ae),W.return=ee,W):(W=h(W,te),W.return=ee,W)}function G(ee,W,te,Ae){var it=te.type;return it===O?_e(ee,W,te.props.children,Ae,te.key):W!==null&&(W.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ie&&Xh(it)===W.type)?(Ae=h(W,te.props),Ae.ref=za(ee,W,te),Ae.return=ee,Ae):(Ae=ml(te.type,te.key,te.props,null,ee.mode,Ae),Ae.ref=za(ee,W,te),Ae.return=ee,Ae)}function ce(ee,W,te,Ae){return W===null||W.tag!==4||W.stateNode.containerInfo!==te.containerInfo||W.stateNode.implementation!==te.implementation?(W=zu(te,ee.mode,Ae),W.return=ee,W):(W=h(W,te.children||[]),W.return=ee,W)}function _e(ee,W,te,Ae,it){return W===null||W.tag!==7?(W=fs(te,ee.mode,Ae,it),W.return=ee,W):(W=h(W,te),W.return=ee,W)}function Me(ee,W,te){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Bu(""+W,ee.mode,te),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case I:return te=ml(W.type,W.key,W.props,null,ee.mode,te),te.ref=za(ee,null,W),te.return=ee,te;case L:return W=zu(W,ee.mode,te),W.return=ee,W;case ie:var Ae=W._init;return Me(ee,Ae(W._payload),te)}if(mt(W)||pe(W))return W=fs(W,ee.mode,te,null),W.return=ee,W;Wo(ee,W)}return null}function xe(ee,W,te,Ae){var it=W!==null?W.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return it!==null?null:k(ee,W,""+te,Ae);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return te.key===it?G(ee,W,te,Ae):null;case L:return te.key===it?ce(ee,W,te,Ae):null;case ie:return it=te._init,xe(ee,W,it(te._payload),Ae)}if(mt(te)||pe(te))return it!==null?null:_e(ee,W,te,Ae,null);Wo(ee,te)}return null}function We(ee,W,te,Ae,it){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(te)||null,k(W,ee,""+Ae,it);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case I:return ee=ee.get(Ae.key===null?te:Ae.key)||null,G(W,ee,Ae,it);case L:return ee=ee.get(Ae.key===null?te:Ae.key)||null,ce(W,ee,Ae,it);case ie:var ct=Ae._init;return We(ee,W,te,ct(Ae._payload),it)}if(mt(Ae)||pe(Ae))return ee=ee.get(te)||null,_e(W,ee,Ae,it,null);Wo(W,Ae)}return null}function Je(ee,W,te,Ae){for(var it=null,ct=null,ut=W,vt=W=0,Mn=null;ut!==null&&vt<te.length;vt++){ut.index>vt?(Mn=ut,ut=null):Mn=ut.sibling;var Bt=xe(ee,ut,te[vt],Ae);if(Bt===null){ut===null&&(ut=Mn);break}n&&ut&&Bt.alternate===null&&i(ee,ut),W=g(Bt,W,vt),ct===null?it=Bt:ct.sibling=Bt,ct=Bt,ut=Mn}if(vt===te.length)return a(ee,ut),Qt&&rs(ee,vt),it;if(ut===null){for(;vt<te.length;vt++)ut=Me(ee,te[vt],Ae),ut!==null&&(W=g(ut,W,vt),ct===null?it=ut:ct.sibling=ut,ct=ut);return Qt&&rs(ee,vt),it}for(ut=c(ee,ut);vt<te.length;vt++)Mn=We(ut,ee,vt,te[vt],Ae),Mn!==null&&(n&&Mn.alternate!==null&&ut.delete(Mn.key===null?vt:Mn.key),W=g(Mn,W,vt),ct===null?it=Mn:ct.sibling=Mn,ct=Mn);return n&&ut.forEach(function(Br){return i(ee,Br)}),Qt&&rs(ee,vt),it}function nt(ee,W,te,Ae){var it=pe(te);if(typeof it!="function")throw Error(t(150));if(te=it.call(te),te==null)throw Error(t(151));for(var ct=it=null,ut=W,vt=W=0,Mn=null,Bt=te.next();ut!==null&&!Bt.done;vt++,Bt=te.next()){ut.index>vt?(Mn=ut,ut=null):Mn=ut.sibling;var Br=xe(ee,ut,Bt.value,Ae);if(Br===null){ut===null&&(ut=Mn);break}n&&ut&&Br.alternate===null&&i(ee,ut),W=g(Br,W,vt),ct===null?it=Br:ct.sibling=Br,ct=Br,ut=Mn}if(Bt.done)return a(ee,ut),Qt&&rs(ee,vt),it;if(ut===null){for(;!Bt.done;vt++,Bt=te.next())Bt=Me(ee,Bt.value,Ae),Bt!==null&&(W=g(Bt,W,vt),ct===null?it=Bt:ct.sibling=Bt,ct=Bt);return Qt&&rs(ee,vt),it}for(ut=c(ee,ut);!Bt.done;vt++,Bt=te.next())Bt=We(ut,ee,vt,Bt.value,Ae),Bt!==null&&(n&&Bt.alternate!==null&&ut.delete(Bt.key===null?vt:Bt.key),W=g(Bt,W,vt),ct===null?it=Bt:ct.sibling=Bt,ct=Bt);return n&&ut.forEach(function(av){return i(ee,av)}),Qt&&rs(ee,vt),it}function an(ee,W,te,Ae){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case I:e:{for(var it=te.key,ct=W;ct!==null;){if(ct.key===it){if(it=te.type,it===O){if(ct.tag===7){a(ee,ct.sibling),W=h(ct,te.props.children),W.return=ee,ee=W;break e}}else if(ct.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ie&&Xh(it)===ct.type){a(ee,ct.sibling),W=h(ct,te.props),W.ref=za(ee,ct,te),W.return=ee,ee=W;break e}a(ee,ct);break}else i(ee,ct);ct=ct.sibling}te.type===O?(W=fs(te.props.children,ee.mode,Ae,te.key),W.return=ee,ee=W):(Ae=ml(te.type,te.key,te.props,null,ee.mode,Ae),Ae.ref=za(ee,W,te),Ae.return=ee,ee=Ae)}return w(ee);case L:e:{for(ct=te.key;W!==null;){if(W.key===ct)if(W.tag===4&&W.stateNode.containerInfo===te.containerInfo&&W.stateNode.implementation===te.implementation){a(ee,W.sibling),W=h(W,te.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=zu(te,ee.mode,Ae),W.return=ee,ee=W}return w(ee);case ie:return ct=te._init,an(ee,W,ct(te._payload),Ae)}if(mt(te))return Je(ee,W,te,Ae);if(pe(te))return nt(ee,W,te,Ae);Wo(ee,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,W!==null&&W.tag===6?(a(ee,W.sibling),W=h(W,te),W.return=ee,ee=W):(a(ee,W),W=Bu(te,ee.mode,Ae),W.return=ee,ee=W),w(ee)):a(ee,W)}return an}var js=qh(!0),Yh=qh(!1),Xo=Cr(null),qo=null,Vs=null,$c=null;function Kc(){$c=Vs=qo=null}function Zc(n){var i=Xo.current;$t(Xo),n._currentValue=i}function Qc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Gs(n,i){qo=n,$c=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(qn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if($c!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(qo===null)throw Error(t(308));Vs=n,qo.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var ss=null;function Jc(n){ss===null?ss=[n]:ss.push(n)}function $h(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Jc(i)):(a.next=h.next,h.next=a),i.interleaved=a,nr(n,c)}function nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pr=!1;function eu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ut&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,nr(n,a)}return h=c.interleaved,h===null?(i.next=i,Jc(c)):(i.next=h.next,h.next=i),c.interleaved=i,nr(n,a)}function Yo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Re(n,a)}}function Zh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function $o(n,i,a,c){var h=n.updateQueue;Pr=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,k=h.shared.pending;if(k!==null){h.shared.pending=null;var G=k,ce=G.next;G.next=null,w===null?g=ce:w.next=ce,w=G;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,k=_e.lastBaseUpdate,k!==w&&(k===null?_e.firstBaseUpdate=ce:k.next=ce,_e.lastBaseUpdate=G))}if(g!==null){var Me=h.baseState;w=0,_e=ce=G=null,k=g;do{var xe=k.lane,We=k.eventTime;if((c&xe)===xe){_e!==null&&(_e=_e.next={eventTime:We,lane:0,tag:k.tag,payload:k.payload,callback:k.callback,next:null});e:{var Je=n,nt=k;switch(xe=i,We=a,nt.tag){case 1:if(Je=nt.payload,typeof Je=="function"){Me=Je.call(We,Me,xe);break e}Me=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=nt.payload,xe=typeof Je=="function"?Je.call(We,Me,xe):Je,xe==null)break e;Me=ae({},Me,xe);break e;case 2:Pr=!0}}k.callback!==null&&k.lane!==0&&(n.flags|=64,xe=h.effects,xe===null?h.effects=[k]:xe.push(k))}else We={eventTime:We,lane:xe,tag:k.tag,payload:k.payload,callback:k.callback,next:null},_e===null?(ce=_e=We,G=Me):_e=_e.next=We,w|=xe;if(k=k.next,k===null){if(k=h.shared.pending,k===null)break;xe=k,k=xe.next,xe.next=null,h.lastBaseUpdate=xe,h.shared.pending=null}}while(!0);if(_e===null&&(G=Me),h.baseState=G,h.firstBaseUpdate=ce,h.lastBaseUpdate=_e,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);ls|=w,n.lanes=w,n.memoizedState=Me}}function Qh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var ja={},Oi=Cr(ja),Va=Cr(ja),Ga=Cr(ja);function as(n){if(n===ja)throw Error(t(174));return n}function tu(n,i){switch(Xt(Ga,i),Xt(Va,n),Xt(Oi,ja),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}$t(Oi),Xt(Oi,i)}function Hs(){$t(Oi),$t(Va),$t(Ga)}function Jh(n){as(Ga.current);var i=as(Oi.current),a=me(i,n.type);i!==a&&(Xt(Va,n),Xt(Oi,a))}function nu(n){Va.current===n&&($t(Oi),$t(Va))}var en=Cr(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var iu=[];function ru(){for(var n=0;n<iu.length;n++)iu[n]._workInProgressVersionPrimary=null;iu.length=0}var Zo=R.ReactCurrentDispatcher,su=R.ReactCurrentBatchConfig,os=0,tn=null,un=null,yn=null,Qo=!1,Ha=!1,Wa=0,Cx=0;function Rn(){throw Error(t(321))}function au(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!xi(n[a],i[a]))return!1;return!0}function ou(n,i,a,c,h,g){if(os=g,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zo.current=n===null||n.memoizedState===null?Dx:Lx,n=a(c,h),Ha){g=0;do{if(Ha=!1,Wa=0,25<=g)throw Error(t(301));g+=1,yn=un=null,i.updateQueue=null,Zo.current=Ix,n=a(c,h)}while(Ha)}if(Zo.current=tl,i=un!==null&&un.next!==null,os=0,yn=un=tn=null,Qo=!1,i)throw Error(t(300));return n}function lu(){var n=Wa!==0;return Wa=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?tn.memoizedState=yn=n:yn=yn.next=n,yn}function fi(){if(un===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=un.next;var i=yn===null?tn.memoizedState:yn.next;if(i!==null)yn=i,un=n;else{if(n===null)throw Error(t(310));un=n,n={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},yn===null?tn.memoizedState=yn=n:yn=yn.next=n}return yn}function Xa(n,i){return typeof i=="function"?i(n):i}function cu(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=un,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var k=w=null,G=null,ce=g;do{var _e=ce.lane;if((os&_e)===_e)G!==null&&(G=G.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var Me={lane:_e,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};G===null?(k=G=Me,w=c):G=G.next=Me,tn.lanes|=_e,ls|=_e}ce=ce.next}while(ce!==null&&ce!==g);G===null?w=c:G.next=k,xi(c,i.memoizedState)||(qn=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,tn.lanes|=g,ls|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function uu(n){var i=fi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);xi(g,i.memoizedState)||(qn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function ep(){}function tp(n,i){var a=tn,c=fi(),h=i(),g=!xi(c.memoizedState,h);if(g&&(c.memoizedState=h,qn=!0),c=c.queue,du(rp.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(a.flags|=2048,qa(9,ip.bind(null,a,c,h,i),void 0,null),Sn===null)throw Error(t(349));(os&30)!==0||np(a,i,h)}return h}function np(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function ip(n,i,a,c){i.value=a,i.getSnapshot=c,sp(i)&&ap(n)}function rp(n,i,a){return a(function(){sp(i)&&ap(n)})}function sp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!xi(n,a)}catch{return!0}}function ap(n){var i=nr(n,1);i!==null&&Mi(i,n,1,-1)}function op(n){var i=Fi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:n},i.queue=n,n=n.dispatch=Px.bind(null,tn,n),[i.memoizedState,n]}function qa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function lp(){return fi().memoizedState}function Jo(n,i,a,c){var h=Fi();tn.flags|=n,h.memoizedState=qa(1|i,a,void 0,c===void 0?null:c)}function el(n,i,a,c){var h=fi();c=c===void 0?null:c;var g=void 0;if(un!==null){var w=un.memoizedState;if(g=w.destroy,c!==null&&au(c,w.deps)){h.memoizedState=qa(i,a,g,c);return}}tn.flags|=n,h.memoizedState=qa(1|i,a,g,c)}function cp(n,i){return Jo(8390656,8,n,i)}function du(n,i){return el(2048,8,n,i)}function up(n,i){return el(4,2,n,i)}function dp(n,i){return el(4,4,n,i)}function fp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function hp(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,fp.bind(null,i,n),a)}function fu(){}function pp(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function mp(n,i){var a=fi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&au(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function gp(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,qn=!0),n.memoizedState=a):(xi(a,i)||(a=tt(),tn.lanes|=a,ls|=a,n.baseState=!0),i)}function Rx(n,i){var a=et;et=a!==0&&4>a?a:4,n(!0);var c=su.transition;su.transition={};try{n(!1),i()}finally{et=a,su.transition=c}}function xp(){return fi().memoizedState}function Nx(n,i,a){var c=Or(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},vp(n))_p(i,a);else if(a=$h(n,i,a,c),a!==null){var h=jn();Mi(a,n,c,h),yp(a,i,c)}}function Px(n,i,a){var c=Or(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(vp(n))_p(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,k=g(w,a);if(h.hasEagerState=!0,h.eagerState=k,xi(k,w)){var G=i.interleaved;G===null?(h.next=h,Jc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=$h(n,i,h,c),a!==null&&(h=jn(),Mi(a,n,c,h),yp(a,i,c))}}function vp(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function _p(n,i){Ha=Qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function yp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Re(n,a)}}var tl={readContext:di,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Dx={readContext:di,useCallback:function(n,i){return Fi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:cp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4194308,4,fp.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jo(4,2,n,i)},useMemo:function(n,i){var a=Fi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Fi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Nx.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=Fi();return n={current:n},i.memoizedState=n},useState:op,useDebugValue:fu,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=op(!1),i=n[0];return n=Rx.bind(null,n[1]),Fi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tn,h=Fi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),Sn===null)throw Error(t(349));(os&30)!==0||np(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,cp(rp.bind(null,c,g,n),[n]),c.flags|=2048,qa(9,ip.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=Fi(),i=Sn.identifierPrefix;if(Qt){var a=tr,c=er;a=(c&~(1<<32-Ge(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Cx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Lx={readContext:di,useCallback:pp,useContext:di,useEffect:du,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:dp,useMemo:mp,useReducer:cu,useRef:lp,useState:function(){return cu(Xa)},useDebugValue:fu,useDeferredValue:function(n){var i=fi();return gp(i,un.memoizedState,n)},useTransition:function(){var n=cu(Xa)[0],i=fi().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:xp,unstable_isNewReconciler:!1},Ix={readContext:di,useCallback:pp,useContext:di,useEffect:du,useImperativeHandle:hp,useInsertionEffect:up,useLayoutEffect:dp,useMemo:mp,useReducer:uu,useRef:lp,useState:function(){return uu(Xa)},useDebugValue:fu,useDeferredValue:function(n){var i=fi();return un===null?i.memoizedState=n:gp(i,un.memoizedState,n)},useTransition:function(){var n=uu(Xa)[0],i=fi().memoizedState;return[n,i]},useMutableSource:ep,useSyncExternalStore:tp,useId:xp,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=ae({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function hu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ae({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=jn(),h=Or(n),g=ir(c,h);g.payload=i,a!=null&&(g.callback=a),i=Dr(n,g,h),i!==null&&(Mi(i,n,h,c),Yo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=jn(),h=Or(n),g=ir(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Dr(n,g,h),i!==null&&(Mi(i,n,h,c),Yo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=jn(),c=Or(n),h=ir(a,c);h.tag=2,i!=null&&(h.callback=i),i=Dr(n,h,c),i!==null&&(Mi(i,n,c,a),Yo(i,n,c))}};function Sp(n,i,a,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!La(a,c)||!La(h,g):!0}function Mp(n,i,a){var c=!1,h=Rr,g=i.contextType;return typeof g=="object"&&g!==null?g=di(g):(h=Xn(i)?ns:Cn.current,c=i.contextTypes,g=(c=c!=null)?Fs(n,h):Rr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ep(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function pu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},eu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=di(g):(g=Xn(i)?ns:Cn.current,h.context=Fs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(hu(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&nl.enqueueReplaceState(h,h.state,null),$o(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=$e(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function mu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function gu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ux=typeof WeakMap=="function"?WeakMap:Map;function wp(n,i,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cl||(cl=!0,Pu=c),gu(n,i)},a}function bp(n,i,a){a=ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){gu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){gu(n,i),typeof c!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function Tp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Ux;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=$x.bind(null,n,i,a),i.then(n,n))}function Ap(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Cp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ir(-1,1),i.tag=2,Dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Ox=R.ReactCurrentOwner,qn=!1;function zn(n,i,a,c){i.child=n===null?Yh(i,null,a,c):js(i,n.child,a,c)}function Rp(n,i,a,c,h){a=a.render;var g=i.ref;return Gs(i,h),c=ou(n,i,a,c,g,h),a=lu(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Qt&&a&&Hc(i),i.flags|=1,zn(n,i,c,h),i.child)}function Np(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!ku(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,Pp(n,i,g,c,h)):(n=ml(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:La,a(w,c)&&n.ref===i.ref)return rr(n,i,h)}return i.flags|=1,n=kr(g,c),n.ref=i.ref,n.return=i,i.child=n}function Pp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(La(g,c)&&n.ref===i.ref)if(qn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(qn=!0);else return i.lanes=n.lanes,rr(n,i,h)}return xu(n,i,a,c,h)}function Dp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(qs,ri),ri|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(qs,ri),ri|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Xt(qs,ri),ri|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Xt(qs,ri),ri|=c;return zn(n,i,h,a),i.child}function Lp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function xu(n,i,a,c,h){var g=Xn(a)?ns:Cn.current;return g=Fs(i,g),Gs(i,h),a=ou(n,i,a,c,g,h),c=lu(),n!==null&&!qn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Qt&&c&&Hc(i),i.flags|=1,zn(n,i,a,h),i.child)}function Ip(n,i,a,c,h){if(Xn(a)){var g=!0;zo(i)}else g=!1;if(Gs(i,h),i.stateNode===null)rl(n,i),Mp(i,a,c),pu(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,k=i.memoizedProps;w.props=k;var G=w.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=di(ce):(ce=Xn(a)?ns:Cn.current,ce=Fs(i,ce));var _e=a.getDerivedStateFromProps,Me=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==c||G!==ce)&&Ep(i,w,c,ce),Pr=!1;var xe=i.memoizedState;w.state=xe,$o(i,c,w,h),G=i.memoizedState,k!==c||xe!==G||Wn.current||Pr?(typeof _e=="function"&&(hu(i,a,_e,c),G=i.memoizedState),(k=Pr||Sp(i,a,k,c,xe,G,ce))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),w.props=c,w.state=G,w.context=ce,c=k):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Kh(n,i),k=i.memoizedProps,ce=i.type===i.elementType?k:_i(i.type,k),w.props=ce,Me=i.pendingProps,xe=w.context,G=a.contextType,typeof G=="object"&&G!==null?G=di(G):(G=Xn(a)?ns:Cn.current,G=Fs(i,G));var We=a.getDerivedStateFromProps;(_e=typeof We=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(k!==Me||xe!==G)&&Ep(i,w,c,G),Pr=!1,xe=i.memoizedState,w.state=xe,$o(i,c,w,h);var Je=i.memoizedState;k!==Me||xe!==Je||Wn.current||Pr?(typeof We=="function"&&(hu(i,a,We,c),Je=i.memoizedState),(ce=Pr||Sp(i,a,ce,c,xe,Je,G)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Je,G),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Je,G)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),w.props=c,w.state=Je,w.context=G,c=ce):(typeof w.componentDidUpdate!="function"||k===n.memoizedProps&&xe===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||k===n.memoizedProps&&xe===n.memoizedState||(i.flags|=1024),c=!1)}return vu(n,i,a,c,g,h)}function vu(n,i,a,c,h,g){Lp(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Bh(i,a,!1),rr(n,i,g);c=i.stateNode,Ox.current=i;var k=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=js(i,n.child,null,g),i.child=js(i,null,k,g)):zn(n,i,k,g),i.memoizedState=c.state,h&&Bh(i,a,!0),i.child}function Up(n){var i=n.stateNode;i.pendingContext?Fh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Fh(n,i.context,!1),tu(n,i.containerInfo)}function Op(n,i,a,c,h){return zs(),Yc(h),i.flags|=256,zn(n,i,a,c),i.child}var _u={dehydrated:null,treeContext:null,retryLane:0};function yu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fp(n,i,a){var c=i.pendingProps,h=en.current,g=!1,w=(i.flags&128)!==0,k;if((k=w)||(k=n!==null&&n.memoizedState===null?!1:(h&2)!==0),k?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Xt(en,h&1),n===null)return qc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=gl(w,c,0,null),n=fs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=yu(a),i.memoizedState=_u,n):Su(i,w));if(h=n.memoizedState,h!==null&&(k=h.dehydrated,k!==null))return Fx(n,i,w,c,k,h,a);if(g){g=c.fallback,w=i.mode,h=n.child,k=h.sibling;var G={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=kr(h,G),c.subtreeFlags=h.subtreeFlags&14680064),k!==null?g=kr(k,g):(g=fs(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?yu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=_u,c}return g=n.child,n=g.sibling,c=kr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function Su(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,c){return c!==null&&Yc(c),js(i,n.child,null,a),n=Su(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Fx(n,i,a,c,h,g,w){if(a)return i.flags&256?(i.flags&=-257,c=mu(Error(t(422))),il(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=gl({mode:"visible",children:c.children},h,0,null),g=fs(g,h,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,w),i.child.memoizedState=yu(w),i.memoizedState=_u,g);if((i.mode&1)===0)return il(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var k=c.dgst;return c=k,g=Error(t(419)),c=mu(g,c,void 0),il(n,i,w,c)}if(k=(w&n.childLanes)!==0,qn||k){if(c=Sn,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,nr(n,h),Mi(c,n,h,-1))}return Fu(),c=mu(Error(t(421))),il(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=Kx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ii=Ar(h.nextSibling),ni=i,Qt=!0,vi=null,n!==null&&(ci[ui++]=er,ci[ui++]=tr,ci[ui++]=is,er=n.id,tr=n.overflow,is=i),i=Su(i,c.children),i.flags|=4096,i)}function kp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Qc(n.return,i,a)}function Mu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Bp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(zn(n,i,c.children,a),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kp(n,a,i);else if(n.tag===19)kp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Ko(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Mu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Ko(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}Mu(i,!0,a,null,g);break;case"together":Mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function kx(n,i,a){switch(i.tag){case 3:Up(i),zs();break;case 5:Jh(i);break;case 1:Xn(i.type)&&zo(i);break;case 4:tu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Xt(Xo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Fp(n,i,a):(Xt(en,en.current&1),n=rr(n,i,a),n!==null?n.sibling:null);Xt(en,en.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Bp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xt(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,Dp(n,i,a)}return rr(n,i,a)}var zp,Eu,jp,Vp;zp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Eu=function(){},jp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,as(Oi.current);var g=null;switch(a){case"input":h=lt(n,h),c=lt(n,c),g=[];break;case"select":h=ae({},h,{value:void 0}),c=ae({},c,{value:void 0}),g=[];break;case"textarea":h=qe(n,h),c=qe(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fo)}Ve(a,c);var w;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var k=h[ce];for(w in k)k.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var G=c[ce];if(k=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&G!==k&&(G!=null||k!=null))if(ce==="style")if(k){for(w in k)!k.hasOwnProperty(w)||G&&G.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in G)G.hasOwnProperty(w)&&k[w]!==G[w]&&(a||(a={}),a[w]=G[w])}else a||(g||(g=[]),g.push(ce,a)),a=G;else ce==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,k=k?k.__html:void 0,G!=null&&k!==G&&(g=g||[]).push(ce,G)):ce==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(ce,""+G):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(G!=null&&ce==="onScroll"&&Yt("scroll",n),g||k===G||(g=[])):(g=g||[]).push(ce,G))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},Vp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ya(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Bx(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Xn(i.type)&&Bo(),Nn(i),null;case 3:return c=i.stateNode,Hs(),$t(Wn),$t(Cn),ru(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ho(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Iu(vi),vi=null))),Eu(n,i),Nn(i),null;case 5:nu(i);var h=as(Ga.current);if(a=i.type,n!==null&&i.stateNode!=null)jp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=as(Oi.current),Ho(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Ui]=i,c[ka]=g,n=(i.mode&1)!==0,a){case"dialog":Yt("cancel",c),Yt("close",c);break;case"iframe":case"object":case"embed":Yt("load",c);break;case"video":case"audio":for(h=0;h<Ua.length;h++)Yt(Ua[h],c);break;case"source":Yt("error",c);break;case"img":case"image":case"link":Yt("error",c),Yt("load",c);break;case"details":Yt("toggle",c);break;case"input":Ct(c,g),Yt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",c);break;case"textarea":U(c,g),Yt("invalid",c)}Ve(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var k=g[w];w==="children"?typeof k=="string"?c.textContent!==k&&(g.suppressHydrationWarning!==!0&&Oo(c.textContent,k,n),h=["children",k]):typeof k=="number"&&c.textContent!==""+k&&(g.suppressHydrationWarning!==!0&&Oo(c.textContent,k,n),h=["children",""+k]):o.hasOwnProperty(w)&&k!=null&&w==="onScroll"&&Yt("scroll",c)}switch(a){case"input":Oe(c),V(c,g,!0);break;case"textarea":Oe(c),X(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Fo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Ui]=i,n[ka]=c,zp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,c),a){case"dialog":Yt("cancel",n),Yt("close",n),h=c;break;case"iframe":case"object":case"embed":Yt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ua.length;h++)Yt(Ua[h],n);h=c;break;case"source":Yt("error",n),h=c;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),h=c;break;case"details":Yt("toggle",n),h=c;break;case"input":Ct(n,c),h=lt(n,c),Yt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=ae({},c,{value:void 0}),Yt("invalid",n);break;case"textarea":U(n,c),h=qe(n,c),Yt("invalid",n);break;default:h=c}Ve(a,h),k=h;for(g in k)if(k.hasOwnProperty(g)){var G=k[g];g==="style"?Pe(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&He(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&be(n,G):typeof G=="number"&&be(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&Yt("scroll",n):G!=null&&D(n,g,G,w))}switch(a){case"input":Oe(n),V(n,c,!1);break;case"textarea":Oe(n),X(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ve(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?wt(n,!!c.multiple,g,!1):c.defaultValue!=null&&wt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Fo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)Vp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(Ga.current),as(Oi.current),Ho(i)){if(c=i.stateNode,a=i.memoizedProps,c[Ui]=i,(g=c.nodeValue!==a)&&(n=ni,n!==null))switch(n.tag){case 3:Oo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Oo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Ui]=i,i.stateNode=c}return Nn(i),null;case 13:if($t(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ii!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Wh(),zs(),i.flags|=98560,g=!1;else if(g=Ho(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ui]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),g=!1}else vi!==null&&(Iu(vi),vi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?dn===0&&(dn=3):Fu())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Hs(),Eu(n,i),n===null&&Oa(i.stateNode.containerInfo),Nn(i),null;case 10:return Zc(i.type._context),Nn(i),null;case 17:return Xn(i.type)&&Bo(),Nn(i),null;case 19:if($t(en),g=i.memoizedState,g===null)return Nn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)Ya(g,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Ko(n),w!==null){for(i.flags|=128,Ya(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(en,en.current&1|2),i.child}n=n.sibling}g.tail!==null&&Vt()>Ys&&(i.flags|=128,c=!0,Ya(g,!1),i.lanes=4194304)}else{if(!c)if(n=Ko(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ya(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Qt)return Nn(i),null}else 2*Vt()-g.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,Ya(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Vt(),i.sibling=null,a=en.current,Xt(en,c?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return Ou(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ri&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function zx(n,i){switch(Wc(i),i.tag){case 1:return Xn(i.type)&&Bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Hs(),$t(Wn),$t(Cn),ru(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return nu(i),null;case 13:if($t(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return $t(en),null;case 4:return Hs(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Ou(),null;case 24:return null;default:return null}}var sl=!1,Pn=!1,jx=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function wu(n,i,a){try{a()}catch(c){nn(n,i,c)}}var Gp=!1;function Vx(n,i){if(Oc=bo,n=Sh(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,k=-1,G=-1,ce=0,_e=0,Me=n,xe=null;t:for(;;){for(var We;Me!==a||h!==0&&Me.nodeType!==3||(k=w+h),Me!==g||c!==0&&Me.nodeType!==3||(G=w+c),Me.nodeType===3&&(w+=Me.nodeValue.length),(We=Me.firstChild)!==null;)xe=Me,Me=We;for(;;){if(Me===n)break t;if(xe===a&&++ce===h&&(k=w),xe===g&&++_e===c&&(G=w),(We=Me.nextSibling)!==null)break;Me=xe,xe=Me.parentNode}Me=We}a=k===-1||G===-1?null:{start:k,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},bo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var nt=Je.memoizedProps,an=Je.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?nt:_i(i.type,nt),an);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){nn(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return Je=Gp,Gp=!1,Je}function $a(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&wu(i,a,g)}h=h.next}while(h!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function bu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Hp(n){var i=n.alternate;i!==null&&(n.alternate=null,Hp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ui],delete i[ka],delete i[jc],delete i[wx],delete i[bx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wp(n){return n.tag===5||n.tag===3||n.tag===4}function Xp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fo));else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}function Au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,a),n=n.sibling;n!==null;)Au(n,i,a),n=n.sibling}var wn=null,yi=!1;function Lr(n,i,a){for(a=a.child;a!==null;)qp(n,i,a),a=a.sibling}function qp(n,i,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 5:Pn||Xs(a,i);case 6:var c=wn,h=yi;wn=null,Lr(n,i,a),wn=c,yi=h,wn!==null&&(yi?(n=wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):wn.removeChild(a.stateNode));break;case 18:wn!==null&&(yi?(n=wn,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),Aa(n)):zc(wn,a.stateNode));break;case 4:c=wn,h=yi,wn=a.stateNode.containerInfo,yi=!0,Lr(n,i,a),wn=c,yi=h;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&wu(a,i,w),h=h.next}while(h!==c)}Lr(n,i,a);break;case 1:if(!Pn&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(k){nn(a,i,k)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Lr(n,i,a),Pn=c):Lr(n,i,a);break;default:Lr(n,i,a)}}function Yp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new jx),i.forEach(function(c){var h=Zx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Si(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,w=i,k=w;e:for(;k!==null;){switch(k.tag){case 5:wn=k.stateNode,yi=!1;break e;case 3:wn=k.stateNode.containerInfo,yi=!0;break e;case 4:wn=k.stateNode.containerInfo,yi=!0;break e}k=k.return}if(wn===null)throw Error(t(160));qp(g,w,h),wn=null,yi=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ce){nn(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)$p(i,n),i=i.sibling}function $p(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),ki(n),c&4){try{$a(3,n,n.return),al(3,n)}catch(nt){nn(n,n.return,nt)}try{$a(5,n,n.return)}catch(nt){nn(n,n.return,nt)}}break;case 1:Si(i,n),ki(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Si(i,n),ki(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var h=n.stateNode;try{be(h,"")}catch(nt){nn(n,n.return,nt)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,k=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{k==="input"&&g.type==="radio"&&g.name!=null&&dt(h,g),Ne(k,w);var ce=Ne(k,g);for(w=0;w<G.length;w+=2){var _e=G[w],Me=G[w+1];_e==="style"?Pe(h,Me):_e==="dangerouslySetInnerHTML"?He(h,Me):_e==="children"?be(h,Me):D(h,_e,Me,ce)}switch(k){case"input":kt(h,g);break;case"textarea":E(h,g);break;case"select":var xe=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?wt(h,!!g.multiple,We,!1):xe!==!!g.multiple&&(g.defaultValue!=null?wt(h,!!g.multiple,g.defaultValue,!0):wt(h,!!g.multiple,g.multiple?[]:"",!1))}h[ka]=g}catch(nt){nn(n,n.return,nt)}}break;case 6:if(Si(i,n),ki(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(nt){nn(n,n.return,nt)}}break;case 3:if(Si(i,n),ki(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Aa(i.containerInfo)}catch(nt){nn(n,n.return,nt)}break;case 4:Si(i,n),ki(n);break;case 13:Si(i,n),ki(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Nu=Vt())),c&4&&Yp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(ce=Pn)||_e,Si(i,n),Pn=ce):Si(i,n),ki(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!_e&&(n.mode&1)!==0)for(Qe=n,_e=n.child;_e!==null;){for(Me=Qe=_e;Qe!==null;){switch(xe=Qe,We=xe.child,xe.tag){case 0:case 11:case 14:case 15:$a(4,xe,xe.return);break;case 1:Xs(xe,xe.return);var Je=xe.stateNode;if(typeof Je.componentWillUnmount=="function"){c=xe,a=xe.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(nt){nn(c,a,nt)}}break;case 5:Xs(xe,xe.return);break;case 22:if(xe.memoizedState!==null){Qp(Me);continue}}We!==null?(We.return=xe,Qe=We):Qp(Me)}_e=_e.sibling}e:for(_e=null,Me=n;;){if(Me.tag===5){if(_e===null){_e=Me;try{h=Me.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(k=Me.stateNode,G=Me.memoizedProps.style,w=G!=null&&G.hasOwnProperty("display")?G.display:null,k.style.display=ye("display",w))}catch(nt){nn(n,n.return,nt)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ce?"":Me.memoizedProps}catch(nt){nn(n,n.return,nt)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Si(i,n),ki(n),c&4&&Yp(n);break;case 21:break;default:Si(i,n),ki(n)}}function ki(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Wp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(be(h,""),c.flags&=-33);var g=Xp(n);Au(n,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,k=Xp(n);Tu(n,k,w);break;default:throw Error(t(161))}}catch(G){nn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gx(n,i,a){Qe=n,Kp(n)}function Kp(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var h=Qe,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||sl;if(!w){var k=h.alternate,G=k!==null&&k.memoizedState!==null||Pn;k=sl;var ce=Pn;if(sl=w,(Pn=G)&&!ce)for(Qe=h;Qe!==null;)w=Qe,G=w.child,w.tag===22&&w.memoizedState!==null?Jp(h):G!==null?(G.return=w,Qe=G):Jp(h);for(;g!==null;)Qe=g,Kp(g),g=g.sibling;Qe=h,sl=k,Pn=ce}Zp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Qe=g):Zp(n)}}function Zp(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:_i(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Qh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Qh(i,w,a)}break;case 5:var k=i.stateNode;if(a===null&&i.flags&4){a=k;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var _e=ce.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&Aa(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&bu(i)}catch(xe){nn(i,i.return,xe)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Qp(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Jp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(G){nn(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){nn(i,h,G)}}var g=i.return;try{bu(i)}catch(G){nn(i,g,G)}break;case 5:var w=i.return;try{bu(i)}catch(G){nn(i,w,G)}}}catch(G){nn(i,i.return,G)}if(i===n){Qe=null;break}var k=i.sibling;if(k!==null){k.return=i.return,Qe=k;break}Qe=i.return}}var Hx=Math.ceil,ol=R.ReactCurrentDispatcher,Cu=R.ReactCurrentOwner,hi=R.ReactCurrentBatchConfig,Ut=0,Sn=null,ln=null,bn=0,ri=0,qs=Cr(0),dn=0,Ka=null,ls=0,ll=0,Ru=0,Za=null,Yn=null,Nu=0,Ys=1/0,sr=null,cl=!1,Pu=null,Ir=null,ul=!1,Ur=null,dl=0,Qa=0,Du=null,fl=-1,hl=0;function jn(){return(Ut&6)!==0?Vt():fl!==-1?fl:fl=Vt()}function Or(n){return(n.mode&1)===0?1:(Ut&2)!==0&&bn!==0?bn&-bn:Ax.transition!==null?(hl===0&&(hl=tt()),hl):(n=et,n!==0||(n=window.event,n=n===void 0?16:th(n.type)),n)}function Mi(n,i,a,c){if(50<Qa)throw Qa=0,Du=null,Error(t(185));jt(n,a,c),((Ut&2)===0||n!==Sn)&&(n===Sn&&((Ut&2)===0&&(ll|=a),dn===4&&Fr(n,bn)),$n(n,c),a===1&&Ut===0&&(i.mode&1)===0&&(Ys=Vt()+500,jo&&Nr()))}function $n(n,i){var a=n.callbackNode;Lt(n,i);var c=Dt(n,n===Sn?bn:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ts(a),i===1)n.tag===0?Tx(tm.bind(null,n)):zh(tm.bind(null,n)),Mx(function(){(Ut&6)===0&&Nr()}),a=null;else{switch(xn(c)){case 1:a=Y;break;case 4:a=le;break;case 16:a=ne;break;case 536870912:a=Le;break;default:a=ne}a=cm(a,em.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function em(n,i){if(fl=-1,hl=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Dt(n,n===Sn?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pl(n,c);else{i=c;var h=Ut;Ut|=2;var g=im();(Sn!==n||bn!==i)&&(sr=null,Ys=Vt()+500,us(n,i));do try{qx();break}catch(k){nm(n,k)}while(!0);Kc(),ol.current=g,Ut=h,ln!==null?i=0:(Sn=null,bn=0,i=dn)}if(i!==0){if(i===2&&(h=Ye(n),h!==0&&(c=h,i=Lu(n,h))),i===1)throw a=Ka,us(n,0),Fr(n,c),$n(n,Vt()),a;if(i===6)Fr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Wx(h)&&(i=pl(n,c),i===2&&(g=Ye(n),g!==0&&(c=g,i=Lu(n,g))),i===1))throw a=Ka,us(n,0),Fr(n,c),$n(n,Vt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,Yn,sr);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=Nu+500-Vt(),10<i)){if(Dt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){jn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Bc(ds.bind(null,n,Yn,sr),i);break}ds(n,Yn,sr);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-Ge(c);g=1<<w,w=i[w],w>h&&(h=w),c&=~g}if(c=h,c=Vt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Hx(c/1960))-c,10<c){n.timeoutHandle=Bc(ds.bind(null,n,Yn,sr),c);break}ds(n,Yn,sr);break;case 5:ds(n,Yn,sr);break;default:throw Error(t(329))}}}return $n(n,Vt()),n.callbackNode===a?em.bind(null,n):null}function Lu(n,i){var a=Za;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=pl(n,i),n!==2&&(i=Yn,Yn=a,i!==null&&Iu(i)),n}function Iu(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function Wx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!xi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Ru,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ge(i),c=1<<a;n[a]=-1,i&=~c}}function tm(n){if((Ut&6)!==0)throw Error(t(327));$s();var i=Dt(n,0);if((i&1)===0)return $n(n,Vt()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var c=Ye(n);c!==0&&(i=c,a=Lu(n,c))}if(a===1)throw a=Ka,us(n,0),Fr(n,i),$n(n,Vt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,Yn,sr),$n(n,Vt()),null}function Uu(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(Ys=Vt()+500,jo&&Nr())}}function cs(n){Ur!==null&&Ur.tag===0&&(Ut&6)===0&&$s();var i=Ut;Ut|=1;var a=hi.transition,c=et;try{if(hi.transition=null,et=1,n)return n()}finally{et=c,hi.transition=a,Ut=i,(Ut&6)===0&&Nr()}}function Ou(){ri=qs.current,$t(qs)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sx(a)),ln!==null)for(a=ln.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bo();break;case 3:Hs(),$t(Wn),$t(Cn),ru();break;case 5:nu(c);break;case 4:Hs();break;case 13:$t(en);break;case 19:$t(en);break;case 10:Zc(c.type._context);break;case 22:case 23:Ou()}a=a.return}if(Sn=n,ln=n=kr(n.current,null),bn=ri=i,dn=0,Ka=null,Ru=ll=ls=0,Yn=Za=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}ss=null}return n}function nm(n,i){do{var a=ln;try{if(Kc(),Zo.current=tl,Qo){for(var c=tn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Qo=!1}if(os=0,yn=un=tn=null,Ha=!1,Wa=0,Cu.current=null,a===null||a.return===null){dn=1,Ka=i,ln=null;break}e:{var g=n,w=a.return,k=a,G=i;if(i=bn,k.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ce=G,_e=k,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var xe=_e.alternate;xe?(_e.updateQueue=xe.updateQueue,_e.memoizedState=xe.memoizedState,_e.lanes=xe.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var We=Ap(w);if(We!==null){We.flags&=-257,Cp(We,w,k,g,i),We.mode&1&&Tp(g,ce,i),i=We,G=ce;var Je=i.updateQueue;if(Je===null){var nt=new Set;nt.add(G),i.updateQueue=nt}else Je.add(G);break e}else{if((i&1)===0){Tp(g,ce,i),Fu();break e}G=Error(t(426))}}else if(Qt&&k.mode&1){var an=Ap(w);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Cp(an,w,k,g,i),Yc(Ws(G,k));break e}}g=G=Ws(G,k),dn!==4&&(dn=2),Za===null?Za=[g]:Za.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=wp(g,G,i);Zh(g,ee);break e;case 1:k=G;var W=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Ir===null||!Ir.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ae=bp(g,k,i);Zh(g,Ae);break e}}g=g.return}while(g!==null)}sm(a)}catch(it){i=it,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function im(){var n=ol.current;return ol.current=tl,n===null?tl:n}function Fu(){(dn===0||dn===3||dn===2)&&(dn=4),Sn===null||(ls&268435455)===0&&(ll&268435455)===0||Fr(Sn,bn)}function pl(n,i){var a=Ut;Ut|=2;var c=im();(Sn!==n||bn!==i)&&(sr=null,us(n,i));do try{Xx();break}catch(h){nm(n,h)}while(!0);if(Kc(),Ut=a,ol.current=c,ln!==null)throw Error(t(261));return Sn=null,bn=0,dn}function Xx(){for(;ln!==null;)rm(ln)}function qx(){for(;ln!==null&&!Ma();)rm(ln)}function rm(n){var i=lm(n.alternate,n,ri);n.memoizedProps=n.pendingProps,i===null?sm(n):ln=i,Cu.current=null}function sm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Bx(a,i,ri),a!==null){ln=a;return}}else{if(a=zx(a,i),a!==null){a.flags&=32767,ln=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);dn===0&&(dn=5)}function ds(n,i,a){var c=et,h=hi.transition;try{hi.transition=null,et=1,Yx(n,i,a,c)}finally{hi.transition=h,et=c}return null}function Yx(n,i,a,c){do $s();while(Ur!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(on(n,g),n===Sn&&(ln=Sn=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,cm(ne,function(){return $s(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=hi.transition,hi.transition=null;var w=et;et=1;var k=Ut;Ut|=4,Cu.current=null,Vx(n,a),$p(a,n),px(Fc),bo=!!Oc,Fc=Oc=null,n.current=a,Gx(a),es(),Ut=k,et=w,hi.transition=g}else n.current=a;if(ul&&(ul=!1,Ur=n,dl=h),g=n.pendingLanes,g===0&&(Ir=null),Ze(a.stateNode),$n(n,Vt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(cl)throw cl=!1,n=Pu,Pu=null,n;return(dl&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===Du?Qa++:(Qa=0,Du=n):Qa=0,Nr(),null}function $s(){if(Ur!==null){var n=xn(dl),i=hi.transition,a=et;try{if(hi.transition=null,et=16>n?16:n,Ur===null)var c=!1;else{if(n=Ur,Ur=null,dl=0,(Ut&6)!==0)throw Error(t(331));var h=Ut;for(Ut|=4,Qe=n.current;Qe!==null;){var g=Qe,w=g.child;if((Qe.flags&16)!==0){var k=g.deletions;if(k!==null){for(var G=0;G<k.length;G++){var ce=k[G];for(Qe=ce;Qe!==null;){var _e=Qe;switch(_e.tag){case 0:case 11:case 15:$a(8,_e,g)}var Me=_e.child;if(Me!==null)Me.return=_e,Qe=Me;else for(;Qe!==null;){_e=Qe;var xe=_e.sibling,We=_e.return;if(Hp(_e),_e===ce){Qe=null;break}if(xe!==null){xe.return=We,Qe=xe;break}Qe=We}}}var Je=g.alternate;if(Je!==null){var nt=Je.child;if(nt!==null){Je.child=null;do{var an=nt.sibling;nt.sibling=null,nt=an}while(nt!==null)}}Qe=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Qe=w;else e:for(;Qe!==null;){if(g=Qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:$a(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Qe=ee;break e}Qe=g.return}}var W=n.current;for(Qe=W;Qe!==null;){w=Qe;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Qe=te;else e:for(w=W;Qe!==null;){if(k=Qe,(k.flags&2048)!==0)try{switch(k.tag){case 0:case 11:case 15:al(9,k)}}catch(it){nn(k,k.return,it)}if(k===w){Qe=null;break e}var Ae=k.sibling;if(Ae!==null){Ae.return=k.return,Qe=Ae;break e}Qe=k.return}}if(Ut=h,Nr(),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(je,n)}catch{}c=!0}return c}finally{et=a,hi.transition=i}}return!1}function am(n,i,a){i=Ws(a,i),i=wp(n,i,1),n=Dr(n,i,1),i=jn(),n!==null&&(jt(n,1,i),$n(n,i))}function nn(n,i,a){if(n.tag===3)am(n,n,a);else for(;i!==null;){if(i.tag===3){am(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ir===null||!Ir.has(c))){n=Ws(a,n),n=bp(i,n,1),i=Dr(i,n,1),n=jn(),i!==null&&(jt(i,1,n),$n(i,n));break}}i=i.return}}function $x(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=jn(),n.pingedLanes|=n.suspendedLanes&a,Sn===n&&(bn&a)===a&&(dn===4||dn===3&&(bn&130023424)===bn&&500>Vt()-Nu?us(n,0):Ru|=a),$n(n,i)}function om(n,i){i===0&&((n.mode&1)===0?i=1:(i=Gt,Gt<<=1,(Gt&130023424)===0&&(Gt=4194304)));var a=jn();n=nr(n,i),n!==null&&(jt(n,i,a),$n(n,a))}function Kx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),om(n,a)}function Zx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),om(n,a)}var lm;lm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Wn.current)qn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return qn=!1,kx(n,i,a);qn=(n.flags&131072)!==0}else qn=!1,Qt&&(i.flags&1048576)!==0&&jh(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;rl(n,i),n=i.pendingProps;var h=Fs(i,Cn.current);Gs(i,a),h=ou(null,i,c,n,h,a);var g=lu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Xn(c)?(g=!0,zo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,eu(i),h.updater=nl,i.stateNode=h,h._reactInternals=i,pu(i,c,n,a),i=vu(null,i,c,!0,g,a)):(i.tag=0,Qt&&g&&Hc(i),zn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Jx(c),n=_i(c,n),h){case 0:i=xu(null,i,c,n,a);break e;case 1:i=Ip(null,i,c,n,a);break e;case 11:i=Rp(null,i,c,n,a);break e;case 14:i=Np(null,i,c,_i(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),xu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),Ip(n,i,c,h,a);case 3:e:{if(Up(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Kh(n,i),$o(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ws(Error(t(423)),i),i=Op(n,i,c,a,h);break e}else if(c!==h){h=Ws(Error(t(424)),i),i=Op(n,i,c,a,h);break e}else for(ii=Ar(i.stateNode.containerInfo.firstChild),ni=i,Qt=!0,vi=null,a=Yh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===h){i=rr(n,i,a);break e}zn(n,i,c,a)}i=i.child}return i;case 5:return Jh(i),n===null&&qc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,kc(c,h)?w=null:g!==null&&kc(c,g)&&(i.flags|=32),Lp(n,i),zn(n,i,w,a),i.child;case 6:return n===null&&qc(i),null;case 13:return Fp(n,i,a);case 4:return tu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,a):zn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),Rp(n,i,c,h,a);case 7:return zn(n,i,i.pendingProps,a),i.child;case 8:return zn(n,i,i.pendingProps.children,a),i.child;case 12:return zn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,Xt(Xo,c._currentValue),c._currentValue=w,g!==null)if(xi(g.value,w)){if(g.children===h.children&&!Wn.current){i=rr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var k=g.dependencies;if(k!==null){w=g.child;for(var G=k.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=ir(-1,a&-a),G.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var _e=ce.pending;_e===null?G.next=G:(G.next=_e.next,_e.next=G),ce.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),Qc(g.return,a,i),k.lanes|=a;break}G=G.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,k=w.alternate,k!==null&&(k.lanes|=a),Qc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}zn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Gs(i,a),h=di(h),c=c(h),i.flags|=1,zn(n,i,c,a),i.child;case 14:return c=i.type,h=_i(c,i.pendingProps),h=_i(c.type,h),Np(n,i,c,h,a);case 15:return Pp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:_i(c,h),rl(n,i),i.tag=1,Xn(c)?(n=!0,zo(i)):n=!1,Gs(i,a),Mp(i,c,h),pu(i,c,h,a),vu(null,i,c,!0,n,a);case 19:return Bp(n,i,a);case 22:return Dp(n,i,a)}throw Error(t(156,i.tag))};function cm(n,i){return li(n,i)}function Qx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,i,a,c){return new Qx(n,i,a,c)}function ku(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Jx(n){if(typeof n=="function")return ku(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===de)return 14}return 2}function kr(n,i){var a=n.alternate;return a===null?(a=pi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,c,h,g){var w=2;if(c=n,typeof n=="function")ku(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case O:return fs(a.children,h,g,i);case B:w=8,h|=8;break;case b:return n=pi(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case K:return n=pi(13,a,i,h),n.elementType=K,n.lanes=g,n;case ue:return n=pi(19,a,i,h),n.elementType=ue,n.lanes=g,n;case Q:return gl(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case z:w=9;break e;case $:w=11;break e;case de:w=14;break e;case ie:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=pi(w,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function fs(n,i,a,c){return n=pi(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=pi(22,n,c,i),n.elementType=Q,n.lanes=a,n.stateNode={isHidden:!1},n}function Bu(n,i,a){return n=pi(6,n,null,i),n.lanes=a,n}function zu(n,i,a){return i=pi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ev(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qt(0),this.expirationTimes=qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ju(n,i,a,c,h,g,w,k,G){return n=new ev(n,i,a,k,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=pi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(g),n}function tv(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function um(n){if(!n)return Rr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Xn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Xn(a))return kh(n,a,i)}return i}function dm(n,i,a,c,h,g,w,k,G){return n=ju(a,c,!0,n,h,g,w,k,G),n.context=um(null),a=n.current,c=jn(),h=Or(a),g=ir(c,h),g.callback=i??null,Dr(a,g,h),n.current.lanes=h,jt(n,h,c),$n(n,c),n}function xl(n,i,a,c){var h=i.current,g=jn(),w=Or(h);return a=um(a),i.context===null?i.context=a:i.pendingContext=a,i=ir(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dr(h,i,w),n!==null&&(Mi(n,h,w,g),Yo(n,h,w)),w}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function fm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Vu(n,i){fm(n,i),(n=n.alternate)&&fm(n,i)}function nv(){return null}var hm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gu(n){this._internalRoot=n}_l.prototype.render=Gu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));xl(n,i,null,null)},_l.prototype.unmount=Gu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){xl(null,n,null,null)}),i[Qi]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ii();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&Jf(n)}};function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function pm(){}function iv(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=vl(w);g.call(ce)}}var w=dm(i,c,n,0,null,!1,!1,"",pm);return n._reactRootContainer=w,n[Qi]=w.current,Oa(n.nodeType===8?n.parentNode:n),cs(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var k=c;c=function(){var ce=vl(G);k.call(ce)}}var G=ju(n,0,!1,null,null,!1,!1,"",pm);return n._reactRootContainer=G,n[Qi]=G.current,Oa(n.nodeType===8?n.parentNode:n),cs(function(){xl(i,G,a,c)}),G}function Sl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var k=h;h=function(){var G=vl(w);k.call(G)}}xl(i,w,n,h)}else w=iv(a,i,n,h,c);return vl(w)}vn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=zt(i.pendingLanes);a!==0&&(Re(i,a|1),$n(i,Vt()),(Ut&6)===0&&(Ys=Vt()+500,Nr()))}break;case 13:cs(function(){var c=nr(n,1);if(c!==null){var h=jn();Mi(c,n,1,h)}}),Vu(n,1)}},_n=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var a=jn();Mi(i,n,134217728,a)}Vu(n,134217728)}},As=function(n){if(n.tag===13){var i=Or(n),a=nr(n,i);if(a!==null){var c=jn();Mi(a,n,i,c)}Vu(n,i)}},Ii=function(){return et},Zf=function(n,i){var a=et;try{return et=n,i()}finally{et=a}},Ue=function(n,i,a){switch(i){case"input":if(kt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=ko(c);if(!h)throw Error(t(90));Tt(c),kt(c,h)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&wt(n,!!a.multiple,i,!1)}},ht=Uu,Rt=cs;var rv={usingClientEntryPoint:!1,Events:[Ba,Us,ko,ge,De,Uu]},Ja={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sv={bundleType:Ja.bundleType,version:Ja.version,rendererPackageName:Ja.rendererPackageName,rendererConfig:Ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Zi(n),n===null?null:n.stateNode},findFiberByHostInstance:Ja.findFiberByHostInstance||nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{je=Ml.inject(sv),Ce=Ml}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rv,Kn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return tv(n,i,null,a)},Kn.createRoot=function(n,i){if(!Hu(n))throw Error(t(299));var a=!1,c="",h=hm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ju(n,1,!1,null,null,a,!1,c,h),n[Qi]=i.current,Oa(n.nodeType===8?n.parentNode:n),new Gu(i)},Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Zi(i),n=n===null?null:n.stateNode,n},Kn.flushSync=function(n){return cs(n)},Kn.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!0,a)},Kn.hydrateRoot=function(n,i,a){if(!Hu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=hm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=dm(i,null,n,1,a??null,h,!1,g,w),n[Qi]=i.current,Oa(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new _l(i)},Kn.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!1,a)},Kn.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},Kn.unstable_batchedUpdates=Uu,Kn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,c)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var Mm;function pv(){if(Mm)return qu.exports;Mm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),qu.exports=hv(),qu.exports}var Em;function mv(){if(Em)return El;Em=1;var s=pv();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var gv=mv();const xv=U0(gv);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),O0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=Fe.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>Fe.createElement("svg",{ref:p,..._v,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:O0("lucide",o),...d},[...u.map(([m,x])=>Fe.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(s,e)=>{const t=Fe.forwardRef(({className:r,...o},l)=>Fe.createElement(yv,{ref:l,iconNode:e,className:O0(`lucide-${vv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=ft("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ft("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ft("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ft("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=ft("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ft("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=ft("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=ft("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=ft("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=ft("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ft("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=ft("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ft("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=ft("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ft("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ft("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ft("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ft("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ft("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=ft("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ft("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
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
 */const zv=ft("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ft("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=ft("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=ft("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=ft("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ft("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=ft("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ft("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ft("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),$v=({cartCount:s,onOpenCart:e})=>{const[t,r]=Fe.useState(!1),[o,l]=Fe.useState(!1);Fe.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:ho},{name:"Central VTS",href:"#central-vts",icon:Gv},{name:"Normas NBR",href:"#normas",icon:Nd},{name:"Calculadora & Diagrama",href:"#calculadora",icon:F0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:nc},{name:"Manuais",href:"#manuais",icon:Nd},{name:"Fotos Reais",href:"#galeria",icon:yo},{name:"Contato",href:"#contato",icon:pr}];return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[f.jsxs("span",{className:"flex h-2 w-2 relative",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),f.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",f.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",f.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),f.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${t?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[f.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),f.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[f.jsx(p,{className:`w-3.5 h-3.5 ${d.highlight?"text-[#d4af37]":"opacity-70"}`}),d.name]},d.name)})}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[f.jsx(pr,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"(15) 99657-6807"})]}),f.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[f.jsx(nc,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&f.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),f.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?f.jsx(Dd,{className:"w-6 h-6"}):f.jsx(Uv,{className:"w-6 h-6"})})]})]}),o&&f.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[f.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),f.jsx("span",{children:d.name})]},d.name)}),f.jsx("div",{className:"pt-3 border-t border-white/10",children:f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[f.jsx(pr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Nf="182",fa={ROTATE:0,DOLLY:1,PAN:2},da={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kv=0,Cm=1,Zv=2,Yl=1,Pf=2,uo=3,Kr=0,Jn=1,dr=2,mr=0,ha=1,Rm=2,Nm=3,Pm=4,Qv=5,_s=100,Jv=101,e_=102,t_=103,n_=104,i_=200,r_=201,s_=202,a_=203,Ld=204,Id=205,o_=206,l_=207,c_=208,u_=209,d_=210,f_=211,h_=212,p_=213,m_=214,Ud=0,Od=1,Fd=2,ma=3,kd=4,Bd=5,zd=6,jd=7,H0=0,g_=1,x_=2,Gi=0,W0=1,X0=2,q0=3,cc=4,Y0=5,$0=6,K0=7,Z0=300,Es=301,ga=302,Vd=303,Gd=304,uc=306,Hd=1e3,hr=1001,Wd=1002,Tn=1003,v_=1004,wl=1005,Un=1006,Ku=1007,Ss=1008,oi=1009,Q0=1010,J0=1011,mo=1012,Df=1013,Xi=1014,ji=1015,xr=1016,Lf=1017,If=1018,go=1020,eg=35902,tg=35899,ng=1021,ig=1022,Ai=1023,vr=1026,Ms=1027,rg=1028,Uf=1029,xa=1030,Of=1031,Ff=1033,$l=33776,Kl=33777,Zl=33778,Ql=33779,Xd=35840,qd=35841,Yd=35842,$d=35843,Kd=36196,Zd=37492,Qd=37496,Jd=37488,ef=37489,tf=37490,nf=37491,rf=37808,sf=37809,af=37810,of=37811,lf=37812,cf=37813,uf=37814,df=37815,ff=37816,hf=37817,pf=37818,mf=37819,gf=37820,xf=37821,vf=36492,_f=36494,yf=36495,Sf=36283,Mf=36284,Ef=36285,wf=36286,__=3200,sg=0,y_=1,Yr="",Gn="srgb",va="srgb-linear",ic="linear",Ht="srgb",Ks=7680,Dm=519,S_=512,M_=513,E_=514,kf=515,w_=516,b_=517,Bf=518,T_=519,Lm=35044,Im="300 es",Vi=2e3,rc=2001;function ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A_(){const s=xo("canvas");return s.style.display="block",s}const Um={};function Om(...s){const e="THREE."+s.shift();console.log(e,...s)}function _t(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ot(...s){const e="THREE."+s.shift();console.error(e,...s)}function vo(...s){const e=s.join(" ");e in Um||(Um[e]=!0,_t(...s))}function C_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jl=Math.PI/180,sc=180/Math.PI;function So(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function R_(s,e){return(s%e+e)%e}function Zu(s,e,t){return(1-t)*s+t*e}function to(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const N_={DEG2RAD:Jl};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],y=l[u+0],S=l[u+1],T=l[u+2],A=l[u+3];if(d<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d>=1){e[t+0]=y,e[t+1]=S,e[t+2]=T,e[t+3]=A;return}if(v!==A||p!==y||m!==S||x!==T){let M=p*y+m*S+x*T+v*A;M<0&&(y=-y,S=-S,T=-T,A=-A,M=-M);let _=1-d;if(M<.9995){const C=Math.acos(M),D=Math.sin(C);_=Math.sin(_*C)/D,d=Math.sin(d*C)/D,p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+A*d}else{p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+A*d;const C=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=C,m*=C,x*=C,v*=C}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[t]=d*T+x*v+p*S-m*y,e[t+1]=p*T+x*y+m*v-d*S,e[t+2]=m*T+x*S+d*y-p*v,e[t+3]=x*T-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),S=p(o/2),T=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"YXZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"ZXY":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"ZYX":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"YZX":this._x=y*x*v+m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v-y*S*T;break;case"XZY":this._x=y*x*v-m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v+y*S*T;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],v=t[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),v=2*(l*r-u*t);return this.x=t+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new Z,Fm=new ws;class Mt{constructor(e,t,r,o,l,u,d,p,m){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],S=r[5],T=r[8],A=o[0],M=o[3],_=o[6],C=o[1],D=o[4],R=o[7],I=o[2],L=o[5],O=o[8];return l[0]=u*A+d*C+p*I,l[3]=u*M+d*D+p*L,l[6]=u*_+d*R+p*O,l[1]=m*A+x*C+v*I,l[4]=m*M+x*D+v*L,l[7]=m*_+x*R+v*O,l[2]=y*A+S*C+T*I,l[5]=y*M+S*D+T*L,l[8]=y*_+S*R+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,S=m*l-u*p,T=t*v+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(o*m-x*r)*A,e[2]=(d*r-o*u)*A,e[3]=y*A,e[4]=(x*t-o*p)*A,e[5]=(o*l-d*t)*A,e[6]=S*A,e[7]=(r*p-m*t)*A,e[8]=(u*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ju=new Mt,km=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function P_(){const s={enabled:!0,workingColorSpace:va,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=pa(o.r),o.g=pa(o.g),o.b=pa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?ic:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[va]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:km,fromXYZ:Bm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gn},outputColorSpaceConfig:{drawingBufferColorSpace:Gn}},[Gn]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:km,fromXYZ:Bm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gn}}}),s}const Ft=P_();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class D_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=xo("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let L_=0;class zf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=So(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(ed(o[u].image)):l.push(ed(o[u]))}else l=ed(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?D_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let I_=0;const td=new Z;class An extends bs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=hr,o=hr,l=Un,u=Ss,d=Ai,p=oi,m=An.DEFAULT_ANISOTROPY,x=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=So(),this.name="",this.source=new zf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hd:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hd:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Z0;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],S=p[5],T=p[9],A=p[2],M=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+A)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,R=(S+1)/2,I=(_+1)/2,L=(x+y)/4,O=(v+A)/4,B=(T+M)/4;return D>R&&D>I?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=L/r,l=O/r):R>I?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=L/o,l=B/o):I<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(I),r=O/l,o=B/l),this.set(r,o,l,t),this}let C=Math.sqrt((M-T)*(M-T)+(v-A)*(v-A)+(y-x)*(y-x));return Math.abs(C)<.001&&(C=1),this.x=(M-T)/C,this.y=(v-A)/C,this.z=(y-x)/C,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class U_ extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new An(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new zf(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Hi extends U_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class og extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class O_ extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mo{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Ei):Ei.fromBufferAttribute(l,u),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(no),Tl.subVectors(this.max,no),Qs.subVectors(e.a,no),Js.subVectors(e.b,no),ea.subVectors(e.c,no),zr.subVectors(Js,Qs),jr.subVectors(ea,Js),hs.subVectors(Qs,ea);let t=[0,-zr.z,zr.y,0,-jr.z,jr.y,0,-hs.z,hs.y,zr.z,0,-zr.x,jr.z,0,-jr.x,hs.z,0,-hs.x,-zr.y,zr.x,0,-jr.y,jr.x,0,-hs.y,hs.x,0];return!nd(t,Qs,Js,ea,Tl)||(t=[1,0,0,0,1,0,0,0,1],!nd(t,Qs,Js,ea,Tl))?!1:(Al.crossVectors(zr,jr),t=[Al.x,Al.y,Al.z],nd(t,Qs,Js,ea,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ei=new Z,bl=new Mo,Qs=new Z,Js=new Z,ea=new Z,zr=new Z,jr=new Z,hs=new Z,no=new Z,Tl=new Z,Al=new Z,ps=new Z;function nd(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ps.fromArray(s,l);const d=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),p=e.dot(ps),m=t.dot(ps),x=r.dot(ps);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const F_=new Mo,io=new Z,id=new Z;class dc{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):F_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;io.subVectors(e,this.center);const t=io.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(io,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(io.copy(e.center).add(id)),this.expandByPoint(io.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const or=new Z,rd=new Z,Cl=new Z,Vr=new Z,sd=new Z,Rl=new Z,ad=new Z;class fc{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){rd.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(rd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),d=Vr.dot(this.direction),p=-Vr.dot(Cl),m=Vr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,T;if(x>0)if(v=u*p-d,y=u*d-p,T=l*x,v>=0)if(y>=-T)if(y<=T){const A=1/x;v*=A,y*=A,S=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-T?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=T?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(rd).addScaledVector(Cl,y),S}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){sd.subVectors(t,e),Rl.subVectors(r,e),ad.crossVectors(sd,Rl);let u=this.direction.dot(ad),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Vr.subVectors(this.origin,e);const p=d*this.direction.dot(Rl.crossVectors(Vr,Rl));if(p<0)return null;const m=d*this.direction.dot(sd.cross(Vr));if(m<0||p+m>u)return null;const x=-d*Vr.dot(ad);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,r,o,l,u,d,p,m,x,v,y,S,T,A,M){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,v,y,S,T,A,M)}set(e,t,r,o,l,u,d,p,m,x,v,y,S,T,A,M){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,T=d*x,A=d*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=S+T*m,t[5]=y-A*m,t[9]=-d*p,t[2]=A-y*m,t[6]=T+S*m,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*v,T=m*x,A=m*v;t[0]=y+A*d,t[4]=T*d-S,t[8]=u*m,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=S*d-T,t[6]=A+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*v,T=m*x,A=m*v;t[0]=y-A*d,t[4]=-u*v,t[8]=T+S*d,t[1]=S+T*d,t[5]=u*x,t[9]=A-y*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*v,T=d*x,A=d*v;t[0]=p*x,t[4]=T*m-S,t[8]=y*m+A,t[1]=p*v,t[5]=A*m+y,t[9]=S*m-T,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,T=d*p,A=d*m;t[0]=p*x,t[4]=A-y*v,t[8]=T*v+S,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=S*v+T,t[10]=y-A*v}else if(e.order==="XZY"){const y=u*p,S=u*m,T=d*p,A=d*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=y*v+A,t[5]=u*x,t[9]=S*v-T,t[2]=T*v-S,t[6]=d*x,t[10]=A*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k_,e,B_)}lookAt(e,t,r){const o=this.elements;return si.subVectors(e,t),si.lengthSq()===0&&(si.z=1),si.normalize(),Gr.crossVectors(r,si),Gr.lengthSq()===0&&(Math.abs(r.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Gr.crossVectors(r,si)),Gr.normalize(),Nl.crossVectors(si,Gr),o[0]=Gr.x,o[4]=Nl.x,o[8]=si.x,o[1]=Gr.y,o[5]=Nl.y,o[9]=si.y,o[2]=Gr.z,o[6]=Nl.z,o[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],S=r[13],T=r[2],A=r[6],M=r[10],_=r[14],C=r[3],D=r[7],R=r[11],I=r[15],L=o[0],O=o[4],B=o[8],b=o[12],P=o[1],z=o[5],$=o[9],K=o[13],ue=o[2],de=o[6],ie=o[10],Q=o[14],q=o[3],pe=o[7],ae=o[11],F=o[15];return l[0]=u*L+d*P+p*ue+m*q,l[4]=u*O+d*z+p*de+m*pe,l[8]=u*B+d*$+p*ie+m*ae,l[12]=u*b+d*K+p*Q+m*F,l[1]=x*L+v*P+y*ue+S*q,l[5]=x*O+v*z+y*de+S*pe,l[9]=x*B+v*$+y*ie+S*ae,l[13]=x*b+v*K+y*Q+S*F,l[2]=T*L+A*P+M*ue+_*q,l[6]=T*O+A*z+M*de+_*pe,l[10]=T*B+A*$+M*ie+_*ae,l[14]=T*b+A*K+M*Q+_*F,l[3]=C*L+D*P+R*ue+I*q,l[7]=C*O+D*z+R*de+I*pe,l[11]=C*B+D*$+R*ie+I*ae,l[15]=C*b+D*K+R*Q+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],S=e[14],T=e[3],A=e[7],M=e[11],_=e[15],C=p*S-m*y,D=d*S-m*v,R=d*y-p*v,I=u*S-m*x,L=u*y-p*x,O=u*v-d*x;return t*(A*C-M*D+_*R)-r*(T*C-M*I+_*L)+o*(T*D-A*I+_*O)-l*(T*R-A*L+M*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],S=e[11],T=e[12],A=e[13],M=e[14],_=e[15],C=v*M*m-A*y*m+A*p*S-d*M*S-v*p*_+d*y*_,D=T*y*m-x*M*m-T*p*S+u*M*S+x*p*_-u*y*_,R=x*A*m-T*v*m+T*d*S-u*A*S-x*d*_+u*v*_,I=T*v*p-x*A*p-T*d*y+u*A*y+x*d*M-u*v*M,L=t*C+r*D+o*R+l*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=C*O,e[1]=(A*y*l-v*M*l-A*o*S+r*M*S+v*o*_-r*y*_)*O,e[2]=(d*M*l-A*p*l+A*o*m-r*M*m-d*o*_+r*p*_)*O,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*S-r*p*S)*O,e[4]=D*O,e[5]=(x*M*l-T*y*l+T*o*S-t*M*S-x*o*_+t*y*_)*O,e[6]=(T*p*l-u*M*l-T*o*m+t*M*m+u*o*_-t*p*_)*O,e[7]=(u*y*l-x*p*l+x*o*m-t*y*m-u*o*S+t*p*S)*O,e[8]=R*O,e[9]=(T*v*l-x*A*l-T*r*S+t*A*S+x*r*_-t*v*_)*O,e[10]=(u*A*l-T*d*l+T*r*m-t*A*m-u*r*_+t*d*_)*O,e[11]=(x*d*l-u*v*l-x*r*m+t*v*m+u*r*S-t*d*S)*O,e[12]=I*O,e[13]=(x*A*o-T*v*o+T*r*y-t*A*y-x*r*M+t*v*M)*O,e[14]=(T*d*o-u*A*o-T*r*p+t*A*p+u*r*M-t*d*M)*O,e[15]=(u*v*o-x*d*o+x*r*p-t*v*p-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,v=d+d,y=l*m,S=l*x,T=l*v,A=u*x,M=u*v,_=d*v,C=p*m,D=p*x,R=p*v,I=r.x,L=r.y,O=r.z;return o[0]=(1-(A+_))*I,o[1]=(S+R)*I,o[2]=(T-D)*I,o[3]=0,o[4]=(S-R)*L,o[5]=(1-(y+_))*L,o[6]=(M+C)*L,o[7]=0,o[8]=(T+D)*O,o[9]=(M-C)*O,o[10]=(1-(y+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=ta.set(o[0],o[1],o[2]).length();const u=ta.set(o[4],o[5],o[6]).length(),d=ta.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),wi.copy(this);const m=1/l,x=1/u,v=1/d;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=v,wi.elements[9]*=v,wi.elements[10]*=v,t.setFromRotationMatrix(wi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Vi,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let T,A;if(p)T=l/(u-l),A=u*l/(u-l);else if(d===Vi)T=-(u+l)/(u-l),A=-2*u*l/(u-l);else if(d===rc)T=-u/(u-l),A=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Vi,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let T,A;if(p)T=1/(u-l),A=u/(u-l);else if(d===Vi)T=-2/(u-l),A=-(u+l)/(u-l);else if(d===rc)T=-1/(u-l),A=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ta=new Z,wi=new Jt,k_=new Z(0,0,0),B_=new Z(1,1,1),Gr=new Z,Nl=new Z,si=new Z,zm=new Jt,jm=new ws;class qi{constructor(e=0,t=0,r=0,o=qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jm.setFromEuler(this),this.setFromQuaternion(jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qi.DEFAULT_ORDER="XYZ";class jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z_=0;const Vm=new Z,na=new ws,lr=new Jt,Pl=new Z,ro=new Z,j_=new Z,V_=new ws,Gm=new Z(1,0,0),Hm=new Z(0,1,0),Wm=new Z(0,0,1),Xm={type:"added"},G_={type:"removed"},ia={type:"childadded",child:null},od={type:"childremoved",child:null};class hn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=So(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=hn.DEFAULT_UP.clone();const e=new Z,t=new qi,r=new ws,o=new Z(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Mt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=hn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pl.copy(e):Pl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(ro,Pl,this.up):lr.lookAt(Pl,ro,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),na.setFromRotationMatrix(lr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(G_),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,e,j_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ro,V_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}hn.DEFAULT_UP=new Z(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bi=new Z,cr=new Z,ld=new Z,ur=new Z,ra=new Z,sa=new Z,qm=new Z,cd=new Z,ud=new Z,dd=new Z,fd=new rn,hd=new rn,pd=new rn;class Ti{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){bi.subVectors(o,t),cr.subVectors(r,t),ld.subVectors(e,t);const u=bi.dot(bi),d=bi.dot(cr),p=bi.dot(ld),m=cr.dot(cr),x=cr.dot(ld),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*x)*y,T=(u*x-d*p)*y;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,ur)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ur.x),p.addScaledVector(u,ur.y),p.addScaledVector(d,ur.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return fd.setScalar(0),hd.setScalar(0),pd.setScalar(0),fd.fromBufferAttribute(e,t),hd.fromBufferAttribute(e,r),pd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(fd,l.x),u.addScaledVector(hd,l.y),u.addScaledVector(pd,l.z),u}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),cr.subVectors(e,t),bi.cross(cr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),bi.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),cd.subVectors(e,r);const p=ra.dot(cd),m=sa.dot(cd);if(p<=0&&m<=0)return t.copy(r);ud.subVectors(e,o);const x=ra.dot(ud),v=sa.dot(ud);if(x>=0&&v<=x)return t.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(ra,u);dd.subVectors(e,l);const S=ra.dot(dd),T=sa.dot(dd);if(T>=0&&S<=T)return t.copy(l);const A=S*m-p*T;if(A<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(sa,d);const M=x*T-S*v;if(M<=0&&v-x>=0&&S-T>=0)return qm.subVectors(l,o),d=(v-x)/(v-x+(S-T)),t.copy(o).addScaledVector(qm,d);const _=1/(M+A+y);return u=A*_,d=y*_,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const lg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Dl={h:0,s:0,l:0};function md(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ft.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ft.workingColorSpace){if(e=R_(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=md(u,l,e+1/3),this.g=md(u,l,e),this.b=md(u,l,e-1/3)}return Ft.colorSpaceToWorking(this,o),this}setStyle(e,t=Gn){function r(l){l!==void 0&&parseFloat(l)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gn){const r=lg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gn){return Ft.workingToColorSpace(Ln.copy(this),e),Math.round(At(Ln.r*255,0,255))*65536+Math.round(At(Ln.g*255,0,255))*256+Math.round(At(Ln.b*255,0,255))}getHexString(e=Gn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Gn){Ft.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==Gn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(Dl);const r=Zu(Hr.h,Dl.h,t),o=Zu(Hr.s,Dl.s,t),l=Zu(Hr.l,Dl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new St;St.NAMES=lg;let H_=0;class ya extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=So(),this.name="",this.type="Material",this.blending=ha,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ld,this.blendDst=Id,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ld&&(r.blendSrc=this.blendSrc),this.blendDst!==Id&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fr extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=H0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Z,Ll=new gt;let W_=0;class Wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:W_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Lm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=to(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=to(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=to(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=to(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=to(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),o=Zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),r=Zn(r,this.array),o=Zn(o,this.array),l=Zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lm&&(e.usage=this.usage),e}}class cg extends Wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ug extends Wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class sn extends Wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let X_=0;const mi=new Jt,gd=new hn,aa=new Z,ai=new Mo,so=new Mo,En=new Z;class ei extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=So(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ag(e)?ug:cg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,r){return mi.makeTranslation(e,t,r),this.applyMatrix4(mi),this}scale(e,t,r){return mi.makeScale(e,t,r),this.applyMatrix4(mi),this}lookAt(e){return gd.lookAt(e),gd.updateMatrix(),this.applyMatrix4(gd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new sn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ai.setFromBufferAttribute(l),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];so.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ai.min,so.min),ai.expandByPoint(En),En.addVectors(ai.max,so.max),ai.expandByPoint(En)):(ai.expandByPoint(so.min),ai.expandByPoint(so.max))}ai.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)En.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(En));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)En.fromBufferAttribute(d,m),p&&(aa.fromBufferAttribute(e,m),En.add(aa)),o=Math.max(o,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new Z,p[B]=new Z;const m=new Z,x=new Z,v=new Z,y=new gt,S=new gt,T=new gt,A=new Z,M=new Z;function _(B,b,P){m.fromBufferAttribute(r,B),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,P),y.fromBufferAttribute(l,B),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,P),x.sub(m),v.sub(m),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(A.copy(x).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(z),d[B].add(A),d[b].add(A),d[P].add(A),p[B].add(M),p[b].add(M),p[P].add(M))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let B=0,b=C.length;B<b;++B){const P=C[B],z=P.start,$=P.count;for(let K=z,ue=z+$;K<ue;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new Z,R=new Z,I=new Z,L=new Z;function O(B){I.fromBufferAttribute(o,B),L.copy(I);const b=d[B];D.copy(b),D.sub(I.multiplyScalar(I.dot(b))).normalize(),R.crossVectors(L,b);const z=R.dot(p[B])<0?-1:1;u.setXYZW(B,D.x,D.y,D.z,z)}for(let B=0,b=C.length;B<b;++B){const P=C[B],z=P.start,$=P.count;for(let K=z,ue=z+$;K<ue;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new Z,l=new Z,u=new Z,d=new Z,p=new Z,m=new Z,x=new Z,v=new Z;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),A=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,M),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,A),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(A,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let S=0,T=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*x;for(let _=0;_<x;_++)y[T++]=m[S++]}return new Wi(y,x,v)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],S=e(y,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ym=new Jt,ms=new fc,Il=new dc,$m=new Z,Ul=new Z,Ol=new Z,Fl=new Z,xd=new Z,kl=new Z,Km=new Z,Bl=new Z;class pt extends hn{constructor(e=new ei,t=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){kl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(xd.fromBufferAttribute(v,e),u?kl.addScaledVector(xd,x):kl.addScaledVector(xd.sub(t),x))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Il.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Il,$m)===null||ms.origin.distanceToSquared($m)>(e.far-e.near)**2))&&(Ym.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Ym),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=u[M.materialIndex],C=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let R=C,I=D;R<I;R+=3){const L=d.getX(R),O=d.getX(R+1),B=d.getX(R+2);o=zl(this,_,e,r,m,x,v,L,O,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const C=d.getX(M),D=d.getX(M+1),R=d.getX(M+2);o=zl(this,u,e,r,m,x,v,C,D,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const M=y[T],_=u[M.materialIndex],C=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let R=C,I=D;R<I;R+=3){const L=R,O=R+1,B=R+2;o=zl(this,_,e,r,m,x,v,L,O,B),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const C=M,D=M+1,R=M+2;o=zl(this,u,e,r,m,x,v,C,D,R),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function q_(s,e,t,r,o,l,u,d){let p;if(e.side===Jn?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Kr,d),p===null)return null;Bl.copy(d),Bl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Bl);return m<t.near||m>t.far?null:{distance:m,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Ul),s.getVertexPosition(p,Ol),s.getVertexPosition(m,Fl);const x=q_(s,e,t,r,Ul,Ol,Fl,Km);if(x){const v=new Z;Ti.getBarycoord(Km,Ul,Ol,Fl,v),o&&(x.uv=Ti.getInterpolatedAttribute(o,d,p,m,v,new gt)),l&&(x.uv1=Ti.getInterpolatedAttribute(l,d,p,m,v,new gt)),u&&(x.normal=Ti.getInterpolatedAttribute(u,d,p,m,v,new Z),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Z,materialIndex:0};Ti.getNormal(Ul,Ol,Fl,y.normal),x.face=y,x.barycoord=v}return x}class Zt extends ei{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new sn(m,3)),this.setAttribute("normal",new sn(x,3)),this.setAttribute("uv",new sn(v,2));function T(A,M,_,C,D,R,I,L,O,B,b){const P=R/O,z=I/B,$=R/2,K=I/2,ue=L/2,de=O+1,ie=B+1;let Q=0,q=0;const pe=new Z;for(let ae=0;ae<ie;ae++){const F=ae*z-K;for(let se=0;se<de;se++){const we=se*P-$;pe[A]=we*C,pe[M]=F*D,pe[_]=ue,m.push(pe.x,pe.y,pe.z),pe[A]=0,pe[M]=0,pe[_]=L>0?1:-1,x.push(pe.x,pe.y,pe.z),v.push(se/O),v.push(1-ae/B),Q+=1}}for(let ae=0;ae<B;ae++)for(let F=0;F<O;F++){const se=y+F+de*ae,we=y+F+de*(ae+1),Xe=y+(F+1)+de*(ae+1),$e=y+(F+1)+de*ae;p.push(se,we,$e),p.push(we,Xe,$e),q+=6}d.addGroup(S,q,b),S+=q,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Vn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function Y_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const $_={clone:_a,merge:Vn};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=Z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=Y_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class fg extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new Z,Zm=new gt,Qm=new gt;class Hn extends fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sc*2*Math.atan(Math.tan(Jl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Qm),t.subVectors(Qm,Zm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,la=1;class Q_ extends hn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(oa,la,e,t);o.layers=this.layers,this.add(o);const l=new Hn(oa,la,e,t);l.layers=this.layers,this.add(l);const u=new Hn(oa,la,e,t);u.layers=this.layers,this.add(u);const d=new Hn(oa,la,e,t);d.layers=this.layers,this.add(d);const p=new Hn(oa,la,e,t);p.layers=this.layers,this.add(p);const m=new Hn(oa,la,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class hg extends An{constructor(e=[],t=Es,r,o,l,u,d,p,m,x){super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pg extends Hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Zt(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:mr});l.uniforms.tEquirect.value=t;const u=new pt(o,l),d=t.minFilter;return t.minFilter===Ss&&(t.minFilter=Un),new Q_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class In extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const J_={type:"move"};class vd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const M=t.getJointPose(A,r),_=this._getHandJoint(m,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(J_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new In;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Vf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(e),this.density=t}clone(){return new Vf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mg extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class e1 extends An{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Tn,x=Tn,v,y){super(null,u,d,p,m,x,o,l,v,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new Z,t1=new Z,n1=new Mt;class qr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=_d.subVectors(r,t).cross(t1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(_d),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||n1.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new dc,i1=new gt(.5,.5),jl=new Z;class Gf{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],v=l[5],y=l[6],S=l[7],T=l[8],A=l[9],M=l[10],_=l[11],C=l[12],D=l[13],R=l[14],I=l[15];if(o[0].setComponents(m-u,S-x,_-T,I-C).normalize(),o[1].setComponents(m+u,S+x,_+T,I+C).normalize(),o[2].setComponents(m+d,S+v,_+A,I+D).normalize(),o[3].setComponents(m-d,S-v,_-A,I-D).normalize(),r)o[4].setComponents(p,y,M,R).normalize(),o[5].setComponents(m-p,S-y,_-M,I-R).normalize();else if(o[4].setComponents(m-p,S-y,_-M,I-R).normalize(),t===Vi)o[5].setComponents(m+p,S+y,_+M,I+R).normalize();else if(t===rc)o[5].setComponents(p,y,M,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=i1.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(jl.x=o.normal.x>0?e.max.x:e.min.x,jl.y=o.normal.y>0?e.max.y:e.min.y,jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class gg extends ya{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ac=new Z,oc=new Z,Jm=new Jt,ao=new fc,Vl=new dc,yd=new Z,e0=new Z;class r1 extends hn{constructor(e=new ei,t=new gg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)ac.fromBufferAttribute(t,o-1),oc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=ac.distanceTo(oc);e.setAttribute("lineDistance",new sn(r,1))}else _t("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Vl.copy(r.boundingSphere),Vl.applyMatrix4(o),Vl.radius+=l,e.ray.intersectsSphere(Vl)===!1)return;Jm.copy(o).invert(),ao.copy(e.ray).applyMatrix4(Jm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,x=r.index,y=r.attributes.position;if(x!==null){const S=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let A=S,M=T-1;A<M;A+=m){const _=x.getX(A),C=x.getX(A+1),D=Gl(this,e,ao,p,_,C,A);D&&t.push(D)}if(this.isLineLoop){const A=x.getX(T-1),M=x.getX(S),_=Gl(this,e,ao,p,A,M,T-1);_&&t.push(_)}}else{const S=Math.max(0,u.start),T=Math.min(y.count,u.start+u.count);for(let A=S,M=T-1;A<M;A+=m){const _=Gl(this,e,ao,p,A,A+1,A);_&&t.push(_)}if(this.isLineLoop){const A=Gl(this,e,ao,p,T-1,S,T-1);A&&t.push(A)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Gl(s,e,t,r,o,l,u){const d=s.geometry.attributes.position;if(ac.fromBufferAttribute(d,o),oc.fromBufferAttribute(d,l),t.distanceSqToSegment(ac,oc,yd,e0)>r)return;yd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(yd);if(!(m<e.near||m>e.far))return{distance:m,point:e0.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const t0=new Z,n0=new Z;class s1 extends r1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)t0.fromBufferAttribute(t,o),n0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+t0.distanceTo(n0);e.setAttribute("lineDistance",new sn(r,1))}else _t("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class a1 extends An{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _o extends An{constructor(e,t,r=Xi,o,l,u,d=Tn,p=Tn,m,x=vr,v=1){if(x!==vr&&x!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class o1 extends _o{constructor(e,t=Xi,r=Es,o,l,u=Tn,d=Tn,p,m=vr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class xg extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gi extends ei{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],S=[];let T=0;const A=[],M=r/2;let _=0;C(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new sn(v,3)),this.setAttribute("normal",new sn(y,3)),this.setAttribute("uv",new sn(S,2));function C(){const R=new Z,I=new Z;let L=0;const O=(t-e)/r;for(let B=0;B<=l;B++){const b=[],P=B/l,z=P*(t-e)+e;for(let $=0;$<=o;$++){const K=$/o,ue=K*p+d,de=Math.sin(ue),ie=Math.cos(ue);I.x=z*de,I.y=-P*r+M,I.z=z*ie,v.push(I.x,I.y,I.z),R.set(de,O,ie).normalize(),y.push(R.x,R.y,R.z),S.push(K,1-P),b.push(T++)}A.push(b)}for(let B=0;B<o;B++)for(let b=0;b<l;b++){const P=A[b][B],z=A[b+1][B],$=A[b+1][B+1],K=A[b][B+1];(e>0||b!==0)&&(x.push(P,z,K),L+=3),(t>0||b!==l-1)&&(x.push(z,$,K),L+=3)}m.addGroup(_,L,0),_+=L}function D(R){const I=T,L=new gt,O=new Z;let B=0;const b=R===!0?e:t,P=R===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,M*P,0),y.push(0,P,0),S.push(.5,.5),T++;const z=T;for(let $=0;$<=o;$++){const ue=$/o*p+d,de=Math.cos(ue),ie=Math.sin(ue);O.x=b*ie,O.y=M*P,O.z=b*de,v.push(O.x,O.y,O.z),y.push(0,P,0),L.x=de*.5+.5,L.y=ie*.5*P+.5,S.push(L.x,L.y),T++}for(let $=0;$<o;$++){const K=I+$,ue=z+$;R===!0?x.push(ue,ue+1,K):x.push(ue+1,ue,K),B+=3}m.addGroup(_,B,R===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Hf extends gi{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Hf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wf extends ei{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),m(r),x(),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(l.slice(),3)),this.setAttribute("uv",new sn(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(C){const D=new Z,R=new Z,I=new Z;for(let L=0;L<t.length;L+=3)S(t[L+0],D),S(t[L+1],R),S(t[L+2],I),p(D,R,I,C)}function p(C,D,R,I){const L=I+1,O=[];for(let B=0;B<=L;B++){O[B]=[];const b=C.clone().lerp(R,B/L),P=D.clone().lerp(R,B/L),z=L-B;for(let $=0;$<=z;$++)$===0&&B===L?O[B][$]=b:O[B][$]=b.clone().lerp(P,$/z)}for(let B=0;B<L;B++)for(let b=0;b<2*(L-B)-1;b++){const P=Math.floor(b/2);b%2===0?(y(O[B][P+1]),y(O[B+1][P]),y(O[B][P])):(y(O[B][P+1]),y(O[B+1][P+1]),y(O[B+1][P]))}}function m(C){const D=new Z;for(let R=0;R<l.length;R+=3)D.x=l[R+0],D.y=l[R+1],D.z=l[R+2],D.normalize().multiplyScalar(C),l[R+0]=D.x,l[R+1]=D.y,l[R+2]=D.z}function x(){const C=new Z;for(let D=0;D<l.length;D+=3){C.x=l[D+0],C.y=l[D+1],C.z=l[D+2];const R=M(C)/2/Math.PI+.5,I=_(C)/Math.PI+.5;u.push(R,1-I)}T(),v()}function v(){for(let C=0;C<u.length;C+=6){const D=u[C+0],R=u[C+2],I=u[C+4],L=Math.max(D,R,I),O=Math.min(D,R,I);L>.9&&O<.1&&(D<.2&&(u[C+0]+=1),R<.2&&(u[C+2]+=1),I<.2&&(u[C+4]+=1))}}function y(C){l.push(C.x,C.y,C.z)}function S(C,D){const R=C*3;D.x=e[R+0],D.y=e[R+1],D.z=e[R+2]}function T(){const C=new Z,D=new Z,R=new Z,I=new Z,L=new gt,O=new gt,B=new gt;for(let b=0,P=0;b<l.length;b+=9,P+=6){C.set(l[b+0],l[b+1],l[b+2]),D.set(l[b+3],l[b+4],l[b+5]),R.set(l[b+6],l[b+7],l[b+8]),L.set(u[P+0],u[P+1]),O.set(u[P+2],u[P+3]),B.set(u[P+4],u[P+5]),I.copy(C).add(D).add(R).divideScalar(3);const z=M(I);A(L,P+0,C,z),A(O,P+2,D,z),A(B,P+4,R,z)}}function A(C,D,R,I){I<0&&C.x===1&&(u[D]=C.x-1),R.x===0&&R.z===0&&(u[D]=I/2/Math.PI+.5)}function M(C){return Math.atan2(C.z,-C.x)}function _(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wf(e.vertices,e.indices,e.radius,e.detail)}}class Xf extends Wf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xf(e.radius,e.detail)}}class Ci extends ei{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=t/p,S=[],T=[],A=[],M=[];for(let _=0;_<x;_++){const C=_*y-u;for(let D=0;D<m;D++){const R=D*v-l;T.push(R,-C,0),A.push(0,0,1),M.push(D/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<d;C++){const D=C+m*_,R=C+m*(_+1),I=C+1+m*(_+1),L=C+1+m*_;S.push(D,R,L),S.push(R,I,L)}this.setIndex(S),this.setAttribute("position",new sn(T,3)),this.setAttribute("normal",new sn(A,3)),this.setAttribute("uv",new sn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ci(e.width,e.height,e.widthSegments,e.heightSegments)}}class po extends ei{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new Z,y=new Z,S=[],T=[],A=[],M=[];for(let _=0;_<=r;_++){const C=[],D=_/r;let R=0;_===0&&u===0?R=.5/t:_===r&&p===Math.PI&&(R=-.5/t);for(let I=0;I<=t;I++){const L=I/t;v.x=-e*Math.cos(o+L*l)*Math.sin(u+D*d),v.y=e*Math.cos(u+D*d),v.z=e*Math.sin(o+L*l)*Math.sin(u+D*d),T.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),M.push(L+R,1-D),C.push(m++)}x.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const D=x[_][C+1],R=x[_][C],I=x[_+1][C],L=x[_+1][C+1];(_!==0||u>0)&&S.push(D,R,L),(_!==r-1||p<Math.PI)&&S.push(R,I,L)}this.setIndex(S),this.setAttribute("position",new sn(T,3)),this.setAttribute("normal",new sn(A,3)),this.setAttribute("uv",new sn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class l1 extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kt extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class c1 extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=__,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class u1 extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class d1{constructor(e,t,r){const o=this;let l=!1,u=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){d++,l===!1&&o.onStart!==void 0&&o.onStart(x,u,d),l=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const f1=new d1;class qf{constructor(e){this.manager=e!==void 0?e:f1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}qf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ca=new WeakMap;class h1 extends qf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=Sd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=ca.get(u);v===void 0&&(v=[],ca.set(u,v)),v.push({onLoad:t,onError:o})}return u}const d=xo("img");function p(){x(),t&&t(this);const v=ca.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}ca.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),Sd.remove(`image:${e}`);const y=ca.get(this)||[];for(let S=0;S<y.length;S++){const T=y[S];T.onError&&T.onError(v)}ca.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),Sd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class vg extends qf{constructor(e){super(e)}load(e,t,r,o){const l=new An,u=new h1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class hc extends hn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Md=new Jt,i0=new Z,r0=new Z;class Yf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;i0.setFromMatrixPosition(e.matrixWorld),t.position.copy(i0),r0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(r0),t.updateMatrixWorld(),Md.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Md,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Md)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class p1 extends Yf{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=sc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class m1 extends hc{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new p1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class g1 extends Yf{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0}}class s0 extends hc{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new g1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $f extends fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class x1 extends Yf{constructor(){super(new $f(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class bf extends hc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new x1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class _g extends hc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class v1 extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class _1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const a0=new Jt;class yg{constructor(e,t,r=0,o=1/0){this.ray=new fc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return a0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(a0),this}intersectObject(e,t=!0,r=[]){return Tf(e,this,r,t),r.sort(o0),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Tf(e[o],this,r,t);return r.sort(o0),r}}function o0(s,e){return s.distance-e.distance}function Tf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)Tf(l[u],e,t,!0)}}class l0{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class y1 extends s1{constructor(e=10,t=10,r=4473924,o=8947848){r=new St(r),o=new St(o);const l=t/2,u=e/t,d=e/2,p=[],m=[];for(let y=0,S=0,T=-d;y<=t;y++,T+=u){p.push(-d,0,T,d,0,T),p.push(T,0,-d,T,0,d);const A=y===l?r:o;A.toArray(m,S),S+=3,A.toArray(m,S),S+=3,A.toArray(m,S),S+=3,A.toArray(m,S),S+=3}const x=new ei;x.setAttribute("position",new sn(p,3)),x.setAttribute("color",new sn(m,3));const v=new gg({vertexColors:!0,toneMapped:!1});super(x,v),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class S1 extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){_t("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function c0(s,e,t,r){const o=M1(r);switch(t){case ng:return s*e;case rg:return s*e/o.components*o.byteLength;case Uf:return s*e/o.components*o.byteLength;case xa:return s*e*2/o.components*o.byteLength;case Of:return s*e*2/o.components*o.byteLength;case ig:return s*e*3/o.components*o.byteLength;case Ai:return s*e*4/o.components*o.byteLength;case Ff:return s*e*4/o.components*o.byteLength;case $l:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qd:case $d:return Math.max(s,16)*Math.max(e,8)/4;case Xd:case Yd:return Math.max(s,8)*Math.max(e,8)/2;case Kd:case Zd:case Jd:case ef:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qd:case tf:case nf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case af:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case lf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case cf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case uf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case df:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ff:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case pf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case mf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case gf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case xf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case vf:case _f:case yf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Sf:case Mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ef:case wf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function M1(s){switch(s){case oi:case Q0:return{byteLength:1,components:1};case mo:case J0:case xr:return{byteLength:2,components:1};case Lf:case If:return{byteLength:2,components:4};case Xi:case Df:case ji:return{byteLength:4,components:1};case eg:case tg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nf}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function E1(s){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<v.length;S++){const T=v[y],A=v[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,v[y]=A)}v.length=y+1;for(let S=0,T=v.length;S<T;S++){const A=v[S];s.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var w1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,b1=`#ifdef USE_ALPHAHASH
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
#endif`,T1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,A1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,P1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,D1=`#ifdef USE_BATCHING
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
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,I1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,U1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,O1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F1=`#ifdef USE_IRIDESCENCE
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
#endif`,k1=`#ifdef USE_BUMPMAP
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
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,V1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,G1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,H1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,W1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,X1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,q1=`#define PI 3.141592653589793
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
} // validated`,Y1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$1=`vec3 transformedNormal = objectNormal;
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
#endif`,K1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Z1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Q1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,J1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ey="gl_FragColor = linearToOutputTexel( gl_FragColor );",ty=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ry=`#ifdef USE_ENVMAP
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
#endif`,sy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ay=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ly=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dy=`#ifdef USE_GRADIENTMAP
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
}`,fy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,my=`uniform bool receiveShadow;
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
#endif`,gy=`#ifdef USE_ENVMAP
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
#endif`,xy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sy=`PhysicalMaterial material;
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
#endif`,My=`uniform sampler2D dfgLUT;
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
}`,Ey=`
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
#endif`,wy=`#if defined( RE_IndirectDiffuse )
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
#endif`,by=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ay=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ry=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ly=`#if defined( USE_POINTS_UV )
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
#endif`,Iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Oy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ky=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,By=`#ifdef USE_MORPHTARGETS
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
#endif`,zy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$y=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ky=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lS=`float getShadowMask() {
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
}`,cS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uS=`#ifdef USE_SKINNING
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
#endif`,dS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xS=`#ifdef USE_TRANSMISSION
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
#endif`,vS=`#ifdef USE_TRANSMISSION
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
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ES=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wS=`uniform sampler2D t2D;
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
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,AS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RS=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,PS=`#define DISTANCE
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
}`,DS=`#define DISTANCE
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
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`uniform float scale;
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
}`,OS=`uniform vec3 diffuse;
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
}`,FS=`#include <common>
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#define LAMBERT
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
}`,zS=`#define LAMBERT
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
}`,jS=`#define MATCAP
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
}`,VS=`#define MATCAP
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
}`,GS=`#define NORMAL
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
}`,HS=`#define NORMAL
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
}`,WS=`#define PHONG
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
}`,XS=`#define PHONG
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
}`,qS=`#define STANDARD
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
}`,YS=`#define STANDARD
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
}`,$S=`#define TOON
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
}`,KS=`#define TOON
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
}`,ZS=`uniform float size;
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
}`,QS=`uniform vec3 diffuse;
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
}`,JS=`#include <common>
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
}`,eM=`uniform vec3 color;
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
}`,tM=`uniform float rotation;
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
}`,nM=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:w1,alphahash_pars_fragment:b1,alphamap_fragment:T1,alphamap_pars_fragment:A1,alphatest_fragment:C1,alphatest_pars_fragment:R1,aomap_fragment:N1,aomap_pars_fragment:P1,batching_pars_vertex:D1,batching_vertex:L1,begin_vertex:I1,beginnormal_vertex:U1,bsdfs:O1,iridescence_fragment:F1,bumpmap_pars_fragment:k1,clipping_planes_fragment:B1,clipping_planes_pars_fragment:z1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:V1,color_fragment:G1,color_pars_fragment:H1,color_pars_vertex:W1,color_vertex:X1,common:q1,cube_uv_reflection_fragment:Y1,defaultnormal_vertex:$1,displacementmap_pars_vertex:K1,displacementmap_vertex:Z1,emissivemap_fragment:Q1,emissivemap_pars_fragment:J1,colorspace_fragment:ey,colorspace_pars_fragment:ty,envmap_fragment:ny,envmap_common_pars_fragment:iy,envmap_pars_fragment:ry,envmap_pars_vertex:sy,envmap_physical_pars_fragment:gy,envmap_vertex:ay,fog_vertex:oy,fog_pars_vertex:ly,fog_fragment:cy,fog_pars_fragment:uy,gradientmap_pars_fragment:dy,lightmap_pars_fragment:fy,lights_lambert_fragment:hy,lights_lambert_pars_fragment:py,lights_pars_begin:my,lights_toon_fragment:xy,lights_toon_pars_fragment:vy,lights_phong_fragment:_y,lights_phong_pars_fragment:yy,lights_physical_fragment:Sy,lights_physical_pars_fragment:My,lights_fragment_begin:Ey,lights_fragment_maps:wy,lights_fragment_end:by,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:Ay,logdepthbuf_pars_vertex:Cy,logdepthbuf_vertex:Ry,map_fragment:Ny,map_pars_fragment:Py,map_particle_fragment:Dy,map_particle_pars_fragment:Ly,metalnessmap_fragment:Iy,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Oy,morphcolor_vertex:Fy,morphnormal_vertex:ky,morphtarget_pars_vertex:By,morphtarget_vertex:zy,normal_fragment_begin:jy,normal_fragment_maps:Vy,normal_pars_fragment:Gy,normal_pars_vertex:Hy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:Yy,clearcoat_pars_fragment:$y,iridescence_pars_fragment:Ky,opaque_fragment:Zy,packing:Qy,premultiplied_alpha_fragment:Jy,project_vertex:eS,dithering_fragment:tS,dithering_pars_fragment:nS,roughnessmap_fragment:iS,roughnessmap_pars_fragment:rS,shadowmap_pars_fragment:sS,shadowmap_pars_vertex:aS,shadowmap_vertex:oS,shadowmask_pars_fragment:lS,skinbase_vertex:cS,skinning_pars_vertex:uS,skinning_vertex:dS,skinnormal_vertex:fS,specularmap_fragment:hS,specularmap_pars_fragment:pS,tonemapping_fragment:mS,tonemapping_pars_fragment:gS,transmission_fragment:xS,transmission_pars_fragment:vS,uv_pars_fragment:_S,uv_pars_vertex:yS,uv_vertex:SS,worldpos_vertex:MS,background_vert:ES,background_frag:wS,backgroundCube_vert:bS,backgroundCube_frag:TS,cube_vert:AS,cube_frag:CS,depth_vert:RS,depth_frag:NS,distance_vert:PS,distance_frag:DS,equirect_vert:LS,equirect_frag:IS,linedashed_vert:US,linedashed_frag:OS,meshbasic_vert:FS,meshbasic_frag:kS,meshlambert_vert:BS,meshlambert_frag:zS,meshmatcap_vert:jS,meshmatcap_frag:VS,meshnormal_vert:GS,meshnormal_frag:HS,meshphong_vert:WS,meshphong_frag:XS,meshphysical_vert:qS,meshphysical_frag:YS,meshtoon_vert:$S,meshtoon_frag:KS,points_vert:ZS,points_frag:QS,shadow_vert:JS,shadow_frag:eM,sprite_vert:tM,sprite_frag:nM},Be={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},zi={basic:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new St(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Vn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Vn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Vn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new St(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Vn([Be.points,Be.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Vn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Vn([Be.common,Be.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Vn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Vn([Be.sprite,Be.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Vn([Be.common,Be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Vn([Be.lights,Be.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};zi.physical={uniforms:Vn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const Hl={r:0,b:0,g:0},xs=new qi,iM=new Jt;function rM(s,e,t,r,o,l,u){const d=new St(0);let p=l===!0?0:1,m,x,v=null,y=0,S=null;function T(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function A(D){let R=!1;const I=T(D);I===null?_(d,p):I&&I.isColor&&(_(I,1),R=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,R){const I=T(R);I&&(I.isCubeTexture||I.mapping===uc)?(x===void 0&&(x=new pt(new Zt(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:_a(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),xs.copy(R.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),x.material.uniforms.envMap.value=I,x.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(iM.makeRotationFromEuler(xs)),x.material.toneMapped=Ft.getTransfer(I.colorSpace)!==Ht,(v!==I||y!==I.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new pt(new Ci(2,2),new Yi({name:"BackgroundMaterial",uniforms:_a(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Ft.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||y!==I.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,y=I.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,R){D.getRGB(Hl,dg(s)),r.buffers.color.setClear(Hl.r,Hl.g,Hl.b,R,u)}function C(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,R=1){d.set(D),p=R,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:A,addToRenderList:M,dispose:C}}function sM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(P,z,$,K,ue){let de=!1;const ie=v(K,$,z);l!==ie&&(l=ie,m(l.object)),de=S(P,K,$,ue),de&&T(P,K,$,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(P,z,$,K),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(P){return s.bindVertexArray(P)}function x(P){return s.deleteVertexArray(P)}function v(P,z,$){const K=$.wireframe===!0;let ue=r[P.id];ue===void 0&&(ue={},r[P.id]=ue);let de=ue[z.id];de===void 0&&(de={},ue[z.id]=de);let ie=de[K];return ie===void 0&&(ie=y(p()),de[K]=ie),ie}function y(P){const z=[],$=[],K=[];for(let ue=0;ue<t;ue++)z[ue]=0,$[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:P,attributes:{},index:null}}function S(P,z,$,K){const ue=l.attributes,de=z.attributes;let ie=0;const Q=$.getAttributes();for(const q in Q)if(Q[q].location>=0){const ae=ue[q];let F=de[q];if(F===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(F=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(F=P.instanceColor)),ae===void 0||ae.attribute!==F||F&&ae.data!==F.data)return!0;ie++}return l.attributesNum!==ie||l.index!==K}function T(P,z,$,K){const ue={},de=z.attributes;let ie=0;const Q=$.getAttributes();for(const q in Q)if(Q[q].location>=0){let ae=de[q];ae===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const F={};F.attribute=ae,ae&&ae.data&&(F.data=ae.data),ue[q]=F,ie++}l.attributes=ue,l.attributesNum=ie,l.index=K}function A(){const P=l.newAttributes;for(let z=0,$=P.length;z<$;z++)P[z]=0}function M(P){_(P,0)}function _(P,z){const $=l.newAttributes,K=l.enabledAttributes,ue=l.attributeDivisors;$[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),ue[P]!==z&&(s.vertexAttribDivisor(P,z),ue[P]=z)}function C(){const P=l.newAttributes,z=l.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==P[$]&&(s.disableVertexAttribArray($),z[$]=0)}function D(P,z,$,K,ue,de,ie){ie===!0?s.vertexAttribIPointer(P,z,$,ue,de):s.vertexAttribPointer(P,z,$,K,ue,de)}function R(P,z,$,K){A();const ue=K.attributes,de=$.getAttributes(),ie=z.defaultAttributeValues;for(const Q in de){const q=de[Q];if(q.location>=0){let pe=ue[Q];if(pe===void 0&&(Q==="instanceMatrix"&&P.instanceMatrix&&(pe=P.instanceMatrix),Q==="instanceColor"&&P.instanceColor&&(pe=P.instanceColor)),pe!==void 0){const ae=pe.normalized,F=pe.itemSize,se=e.get(pe);if(se===void 0)continue;const we=se.buffer,Xe=se.type,$e=se.bytesPerElement,re=Xe===s.INT||Xe===s.UNSIGNED_INT||pe.gpuType===Df;if(pe.isInterleavedBufferAttribute){const he=pe.data,ve=he.stride,Te=pe.offset;if(he.isInstancedInterleavedBuffer){for(let j=0;j<q.locationSize;j++)_(q.location+j,he.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let j=0;j<q.locationSize;j++)M(q.location+j);s.bindBuffer(s.ARRAY_BUFFER,we);for(let j=0;j<q.locationSize;j++)D(q.location+j,F/q.locationSize,Xe,ae,ve*$e,(Te+F/q.locationSize*j)*$e,re)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<q.locationSize;he++)_(q.location+he,pe.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<q.locationSize;he++)M(q.location+he);s.bindBuffer(s.ARRAY_BUFFER,we);for(let he=0;he<q.locationSize;he++)D(q.location+he,F/q.locationSize,Xe,ae,F*$e,F/q.locationSize*he*$e,re)}}else if(ie!==void 0){const ae=ie[Q];if(ae!==void 0)switch(ae.length){case 2:s.vertexAttrib2fv(q.location,ae);break;case 3:s.vertexAttrib3fv(q.location,ae);break;case 4:s.vertexAttrib4fv(q.location,ae);break;default:s.vertexAttrib1fv(q.location,ae)}}}}C()}function I(){B();for(const P in r){const z=r[P];for(const $ in z){const K=z[$];for(const ue in K)x(K[ue].object),delete K[ue];delete z[$]}delete r[P]}}function L(P){if(r[P.id]===void 0)return;const z=r[P.id];for(const $ in z){const K=z[$];for(const ue in K)x(K[ue].object),delete K[ue];delete z[$]}delete r[P.id]}function O(P){for(const z in r){const $=r[z];if($[P.id]===void 0)continue;const K=$[P.id];for(const ue in K)x(K[ue].object),delete K[ue];delete $[P.id]}}function B(){b(),u=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:M,disableUnusedAttributes:C}}function aM(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let S=0;for(let T=0;T<v;T++)S+=x[T];t.update(S,r,1)}function p(m,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],x[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let T=0;for(let A=0;A<v;A++)T+=x[A]*y[A];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function oM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ai&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const B=O===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==oi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!B)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(_t("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:C,maxVaryings:D,maxFragmentUniforms:R,maxSamples:I,samples:L}}function lM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,d=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,A=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!M)l?x(null):m();else{const C=l?0:r,D=C*4;let R=_.clippingState||null;p.value=R,R=x(T,y,D,S);for(let I=0;I!==D;++I)R[I]=t[I];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,T){const A=v!==null?v.length:0;let M=null;if(A!==0){if(M=p.value,T!==!0||M===null){const _=S+A*4,C=y.matrixWorldInverse;d.getNormalMatrix(C),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,R=S;D!==A;++D,R+=4)u.copy(v[D]).applyMatrix4(C,d),u.normal.toArray(M,R),M[R+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,M}}function cM(s){let e=new WeakMap;function t(u,d){return d===Vd?u.mapping=Es:d===Gd&&(u.mapping=ga),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Vd||d===Gd)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new pg(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const $r=4,u0=[.125,.215,.35,.446,.526,.582],ys=20,uM=256,oo=new $f,d0=new St;let Ed=null,wd=0,bd=0,Td=!1;const dM=new Z;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=dM}=l;Ed=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ed,wd,bd),this._renderer.xr.enabled=Td,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ed=this._renderer.getRenderTarget(),wd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:xr,format:Ai,colorSpace:va,depthBuffer:!1},o=h0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=fM(l)),this._blurMaterial=pM(l,e,t),this._ggxMaterial=hM(l,e,t)}return o}_compileMaterial(e){const t=new pt(new ei,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,r,o,l){const p=new Hn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(d0),v.toneMapping=Gi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new pt(new Zt,new fr({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,M=A.material;let _=!1;const C=e.background;C?C.isColor&&(M.color.copy(C),e.background=null,_=!0):(M.color.copy(d0),_=!0);for(let D=0;D<6;D++){const R=D%3;R===0?(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[D],l.y,l.z)):R===1?(p.up.set(0,0,m[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[D],l.z)):(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[D]));const I=this._cubeSize;ua(o,R*I,D>2?I:0,I,I),v.setRenderTarget(o),_&&v.render(A,p),v.render(e,p)}v.toneMapping=S,v.autoClear=y,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ga;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;ua(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,oo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),y=0+m*1.25,S=v*y,{_lodMax:T}=this,A=this._sizeLods[r],M=3*A*(r>T-$r?r-T+$r:0),_=4*(this._cubeSize-A);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-t,ua(l,M,_,3*A,2*A),o.setRenderTarget(l),o.render(d,oo),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,ua(e,M,_,3*A,2*A),o.setRenderTarget(e),o.render(d,oo)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ys-1),A=l/T,M=isFinite(l)?1+Math.floor(x*A):ys;M>ys&&_t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const _=[];let C=0;for(let O=0;O<ys;++O){const B=O/A,b=Math.exp(-B*B/2);_.push(b),O===0?C+=b:O<M&&(C+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/C;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const R=this._sizeLods[o],I=3*R*(o>D-$r?o-D+$r:0),L=4*(this._cubeSize-R);ua(t,I,L,3*R,2*R),p.setRenderTarget(t),p.render(v,oo)}}function fM(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+u0.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-$r?p=u0[u-s+$r-1]:u===0&&(p=0),t.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,T=6,A=3,M=2,_=1,C=new Float32Array(A*T*S),D=new Float32Array(M*T*S),R=new Float32Array(_*T*S);for(let L=0;L<S;L++){const O=L%3*2/3-1,B=L>2?0:-1,b=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];C.set(b,A*T*L),D.set(y,M*T*L);const P=[L,L,L,L,L,L];R.set(P,_*T*L)}const I=new ei;I.setAttribute("position",new Wi(C,A)),I.setAttribute("uv",new Wi(D,M)),I.setAttribute("faceIndex",new Wi(R,_)),r.push(new pt(I,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function h0(s,e,t){const r=new Hi(s,e,t);return r.texture.mapping=uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ua(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function hM(s,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:uM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function pM(s,e,t){const r=new Float32Array(ys),o=new Z(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function p0(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function m0(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function pc(){return`

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
	`}function mM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Vd||p===Gd,x=p===Es||p===ga;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new f0(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new f0(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function gM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&vo("WebGLRenderer: "+r+" extension not supported."),o}}}function xM(s,e,t,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,T=v.attributes.position;let A=0;if(S!==null){const C=S.array;A=S.version;for(let D=0,R=C.length;D<R;D+=3){const I=C[D+0],L=C[D+1],O=C[D+2];y.push(I,L,L,O,O,I)}}else if(T!==void 0){const C=T.array;A=T.version;for(let D=0,R=C.length/3-1;D<R;D+=3){const I=D+0,L=D+1,O=D+2;y.push(I,L,L,O,O,I)}}else return;const M=new(ag(y)?ug:cg)(y,1);M.version=A;const _=l.get(v);_&&e.remove(_),l.set(v,M)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function vM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function m(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,y*u,T),t.update(S,r,T))}function x(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];t.update(M,r,1)}function v(y,S,T,A){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/u,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,A,0,T);let _=0;for(let C=0;C<T;C++)_+=S[C]*A[C];t.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function _M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function yM(s,e,t){const r=new WeakMap,o=new rn;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let P=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),A===!0&&(R=2),M===!0&&(R=3);let I=d.attributes.position.count*R,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*L*4*v),B=new og(O,I,L,v);B.type=ji,B.needsUpdate=!0;const b=R*4;for(let z=0;z<v;z++){const $=_[z],K=C[z],ue=D[z],de=I*L*4*z;for(let ie=0;ie<$.count;ie++){const Q=ie*b;T===!0&&(o.fromBufferAttribute($,ie),O[de+Q+0]=o.x,O[de+Q+1]=o.y,O[de+Q+2]=o.z,O[de+Q+3]=0),A===!0&&(o.fromBufferAttribute(K,ie),O[de+Q+4]=o.x,O[de+Q+5]=o.y,O[de+Q+6]=o.z,O[de+Q+7]=0),M===!0&&(o.fromBufferAttribute(ue,ie),O[de+Q+8]=o.x,O[de+Q+9]=o.y,O[de+Q+10]=o.z,O[de+Q+11]=ue.itemSize===4?o.w:1)}}y={count:v,texture:B,size:new gt(I,L)},r.set(d,y),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function SM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const MM={[W0]:"LINEAR_TONE_MAPPING",[X0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[cc]:"ACES_FILMIC_TONE_MAPPING",[$0]:"AGX_TONE_MAPPING",[K0]:"NEUTRAL_TONE_MAPPING",[Y0]:"CUSTOM_TONE_MAPPING"};function EM(s,e,t,r,o){const l=new Hi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Hi(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),d=new ei;d.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new sn([0,2,0,0,2,0],2));const p=new l1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new pt(d,p),x=new $f(-1,1,1,-1,0,1);let v=null,y=null,S=!1,T,A=null,M=[],_=!1;this.setSize=function(C,D){l.setSize(C,D),u.setSize(C,D);for(let R=0;R<M.length;R++){const I=M[R];I.setSize&&I.setSize(C,D)}},this.setEffects=function(C){M=C,_=M.length>0&&M[0].isRenderPass===!0;const D=l.width,R=l.height;for(let I=0;I<M.length;I++){const L=M[I];L.setSize&&L.setSize(D,R)}},this.begin=function(C,D){if(S||C.toneMapping===Gi&&M.length===0)return!1;if(A=D,D!==null){const R=D.width,I=D.height;(l.width!==R||l.height!==I)&&this.setSize(R,I)}return _===!1&&C.setRenderTarget(l),T=C.toneMapping,C.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(C,D){C.toneMapping=T,S=!0;let R=l,I=u;for(let L=0;L<M.length;L++){const O=M[L];if(O.enabled!==!1&&(O.render(C,I,R,D),O.needsSwap!==!1)){const B=R;R=I,I=B}}if(v!==C.outputColorSpace||y!==C.toneMapping){v=C.outputColorSpace,y=C.toneMapping,p.defines={},Ft.getTransfer(v)===Ht&&(p.defines.SRGB_TRANSFER="");const L=MM[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(A),C.render(m,x),A=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const Mg=new An,Af=new _o(1,1),Eg=new og,wg=new O_,bg=new hg,g0=[],x0=[],v0=new Float32Array(16),_0=new Float32Array(9),y0=new Float32Array(4);function Sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=g0[o];if(l===void 0&&(l=new Float32Array(o),g0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function mc(s,e){let t=x0[e];t===void 0&&(t=new Int32Array(e),x0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function CM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;y0.set(r),s.uniformMatrix2fv(this.addr,!1,y0),mn(t,r)}}function RM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;_0.set(r),s.uniformMatrix3fv(this.addr,!1,_0),mn(t,r)}}function NM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;v0.set(r),s.uniformMatrix4fv(this.addr,!1,v0),mn(t,r)}}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function UM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function BM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Af.compareFunction=t.isReversedDepthBuffer()?Bf:kf,l=Af):l=Mg,t.setTexture2D(e||l,o)}function zM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||wg,o)}function jM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||bg,o)}function VM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Eg,o)}function GM(s){switch(s){case 5126:return wM;case 35664:return bM;case 35665:return TM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return NM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return OM;case 36295:return FM;case 36296:return kM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return jM;case 36289:case 36303:case 36311:case 36292:return VM}}function HM(s,e){s.uniform1fv(this.addr,e)}function WM(s,e){const t=Sa(e,this.size,2);s.uniform2fv(this.addr,t)}function XM(s,e){const t=Sa(e,this.size,3);s.uniform3fv(this.addr,t)}function qM(s,e){const t=Sa(e,this.size,4);s.uniform4fv(this.addr,t)}function YM(s,e){const t=Sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $M(s,e){const t=Sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function KM(s,e){const t=Sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ZM(s,e){s.uniform1iv(this.addr,e)}function QM(s,e){s.uniform2iv(this.addr,e)}function JM(s,e){s.uniform3iv(this.addr,e)}function eE(s,e){s.uniform4iv(this.addr,e)}function tE(s,e){s.uniform1uiv(this.addr,e)}function nE(s,e){s.uniform2uiv(this.addr,e)}function iE(s,e){s.uniform3uiv(this.addr,e)}function rE(s,e){s.uniform4uiv(this.addr,e)}function sE(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Af:u=Mg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function aE(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||wg,l[u])}function oE(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||bg,l[u])}function lE(s,e,t){const r=this.cache,o=e.length,l=mc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Eg,l[u])}function cE(s){switch(s){case 5126:return HM;case 35664:return WM;case 35665:return XM;case 35666:return qM;case 35674:return YM;case 35675:return $M;case 35676:return KM;case 5124:case 35670:return ZM;case 35667:case 35671:return QM;case 35668:case 35672:return JM;case 35669:case 35673:return eE;case 5125:return tE;case 36294:return nE;case 36295:return iE;case 36296:return rE;case 35678:case 36198:case 36298:case 36306:case 35682:return sE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return oE;case 36289:case 36303:case 36311:case 36292:return lE}}class uE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=GM(t.type)}}class dE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cE(t.type)}}class fE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function S0(s,e){s.seq.push(e),s.map[e.id]=e}function hE(s,e,t){const r=s.name,o=r.length;for(Ad.lastIndex=0;;){const l=Ad.exec(r),u=Ad.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){S0(t,m===void 0?new uE(d,s,e):new dE(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new fE(d),S0(t,v)),t=v}}}class ec{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);hE(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function M0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const pE=37297;let mE=0;function gE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const E0=new Mt;function xE(s){Ft._getMatrix(E0,Ft.workingColorSpace,s);const e=`mat3( ${E0.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function w0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+gE(s.getShaderSource(e),d)}else return l}function vE(s,e){const t=xE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const _E={[W0]:"Linear",[X0]:"Reinhard",[q0]:"Cineon",[cc]:"ACESFilmic",[$0]:"AgX",[K0]:"Neutral",[Y0]:"Custom"};function yE(s,e){const t=_E[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new Z;function SE(){Ft.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ME(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fo).join(`
`)}function EE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function wE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function fo(s){return s!==""}function b0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function T0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cf(s){return s.replace(bE,AE)}const TE=new Map;function AE(s,e){let t=Et[e];if(t===void 0){const r=TE.get(e);if(r!==void 0)t=Et[r],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Cf(t)}const CE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function A0(s){return s.replace(CE,RE)}function RE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function C0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const NE={[Yl]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function PE(s){return NE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const DE={[Es]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE",[uc]:"ENVMAP_TYPE_CUBE_UV"};function LE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":DE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const IE={[ga]:"ENVMAP_MODE_REFRACTION"};function UE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":IE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const OE={[H0]:"ENVMAP_BLENDING_MULTIPLY",[g_]:"ENVMAP_BLENDING_MIX",[x_]:"ENVMAP_BLENDING_ADD"};function FE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":OE[s.combine]||"ENVMAP_BLENDING_NONE"}function kE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function BE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=PE(t),m=LE(t),x=UE(t),v=FE(t),y=kE(t),S=ME(t),T=EE(l),A=o.createProgram();let M,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(fo).join(`
`),_.length>0&&(_+=`
`)):(M=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fo).join(`
`),_=[C0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Gi?yE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,vE("linearToOutputTexel",t.outputColorSpace),SE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fo).join(`
`)),u=Cf(u),u=b0(u,t),u=T0(u,t),d=Cf(d),d=b0(d,t),d=T0(d,t),u=A0(u),d=A0(d),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",t.glslVersion===Im?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=C+M+u,R=C+_+d,I=M0(o,o.VERTEX_SHADER,D),L=M0(o,o.FRAGMENT_SHADER,R);o.attachShader(A,I),o.attachShader(A,L),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(A)||"",K=o.getShaderInfoLog(I)||"",ue=o.getShaderInfoLog(L)||"",de=$.trim(),ie=K.trim(),Q=ue.trim();let q=!0,pe=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,I,L);else{const ae=w0(o,I,"vertex"),F=w0(o,L,"fragment");Ot("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+de+`
`+ae+`
`+F)}else de!==""?_t("WebGLProgram: Program Info Log:",de):(ie===""||Q==="")&&(pe=!1);pe&&(z.diagnostics={runnable:q,programLog:de,vertexShader:{log:ie,prefix:M},fragmentShader:{log:Q,prefix:_}})}o.deleteShader(I),o.deleteShader(L),B=new ec(o,A),b=wE(o,A)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(A,pE)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=L,this}let zE=0;class jE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new VE(e),t.set(e,r)),r}}class VE{constructor(e){this.id=zE++,this.code=e,this.usedTimes=0}}function GE(s,e,t,r,o,l,u){const d=new jf,p=new jE,m=new Set,x=[],v=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function M(b,P,z,$,K){const ue=$.fog,de=K.geometry,ie=b.isMeshStandardMaterial?$.environment:null,Q=(b.isMeshStandardMaterial?t:e).get(b.envMap||ie),q=Q&&Q.mapping===uc?Q.image.height:null,pe=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&_t("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const ae=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=ae!==void 0?ae.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let we,Xe,$e,re;if(pe){const Pt=zi[pe];we=Pt.vertexShader,Xe=Pt.fragmentShader}else we=b.vertexShader,Xe=b.fragmentShader,p.update(b),$e=p.getVertexShaderID(b),re=p.getFragmentShaderID(b);const he=s.getRenderTarget(),ve=s.state.buffers.depth.getReversed(),Te=K.isInstancedMesh===!0,j=K.isBatchedMesh===!0,Oe=!!b.map,Tt=!!b.matcap,ze=!!Q,lt=!!b.aoMap,Ct=!!b.lightMap,dt=!!b.bumpMap,kt=!!b.normalMap,V=!!b.displacementMap,It=!!b.emissiveMap,mt=!!b.metalnessMap,wt=!!b.roughnessMap,qe=b.anisotropy>0,U=b.clearcoat>0,E=b.dispersion>0,X=b.iridescence>0,fe=b.sheen>0,me=b.transmission>0,oe=qe&&!!b.anisotropyMap,He=U&&!!b.clearcoatMap,be=U&&!!b.clearcoatNormalMap,ke=U&&!!b.clearcoatRoughnessMap,st=X&&!!b.iridescenceMap,ye=X&&!!b.iridescenceThicknessMap,Pe=fe&&!!b.sheenColorMap,Ke=fe&&!!b.sheenRoughnessMap,Ve=!!b.specularMap,Ne=!!b.specularColorMap,yt=!!b.specularIntensityMap,H=me&&!!b.transmissionMap,Ue=me&&!!b.thicknessMap,Ee=!!b.gradientMap,Ie=!!b.alphaMap,Se=b.alphaTest>0,ge=!!b.alphaHash,De=!!b.extensions;let ht=Gi;b.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(ht=s.toneMapping);const Rt={shaderID:pe,shaderType:b.type,shaderName:b.name,vertexShader:we,fragmentShader:Xe,defines:b.defines,customVertexShaderID:$e,customFragmentShaderID:re,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:j,batchingColor:j&&K._colorsTexture!==null,instancing:Te,instancingColor:Te&&K.instanceColor!==null,instancingMorph:Te&&K.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:va,alphaToCoverage:!!b.alphaToCoverage,map:Oe,matcap:Tt,envMap:ze,envMapMode:ze&&Q.mapping,envMapCubeUVHeight:q,aoMap:lt,lightMap:Ct,bumpMap:dt,normalMap:kt,displacementMap:V,emissiveMap:It,normalMapObjectSpace:kt&&b.normalMapType===y_,normalMapTangentSpace:kt&&b.normalMapType===sg,metalnessMap:mt,roughnessMap:wt,anisotropy:qe,anisotropyMap:oe,clearcoat:U,clearcoatMap:He,clearcoatNormalMap:be,clearcoatRoughnessMap:ke,dispersion:E,iridescence:X,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:fe,sheenColorMap:Pe,sheenRoughnessMap:Ke,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:yt,transmission:me,transmissionMap:H,thicknessMap:Ue,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===ha&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Se,alphaHash:ge,combine:b.combine,mapUv:Oe&&A(b.map.channel),aoMapUv:lt&&A(b.aoMap.channel),lightMapUv:Ct&&A(b.lightMap.channel),bumpMapUv:dt&&A(b.bumpMap.channel),normalMapUv:kt&&A(b.normalMap.channel),displacementMapUv:V&&A(b.displacementMap.channel),emissiveMapUv:It&&A(b.emissiveMap.channel),metalnessMapUv:mt&&A(b.metalnessMap.channel),roughnessMapUv:wt&&A(b.roughnessMap.channel),anisotropyMapUv:oe&&A(b.anisotropyMap.channel),clearcoatMapUv:He&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ke&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&A(b.sheenRoughnessMap.channel),specularMapUv:Ve&&A(b.specularMap.channel),specularColorMapUv:Ne&&A(b.specularColorMap.channel),specularIntensityMapUv:yt&&A(b.specularIntensityMap.channel),transmissionMapUv:H&&A(b.transmissionMap.channel),thicknessMapUv:Ue&&A(b.thicknessMap.channel),alphaMapUv:Ie&&A(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(kt||qe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!de.attributes.uv&&(Oe||Ie),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ve,skinning:K.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:se,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ht,decodeVideoTexture:Oe&&b.map.isVideoTexture===!0&&Ft.getTransfer(b.map.colorSpace)===Ht,decodeVideoTextureEmissive:It&&b.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(b.emissiveMap.colorSpace)===Ht,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dr,flipSided:b.side===Jn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:De&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&b.extensions.multiDraw===!0||j)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Rt.vertexUv1s=m.has(1),Rt.vertexUv2s=m.has(2),Rt.vertexUv3s=m.has(3),m.clear(),Rt}function _(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)P.push(z),P.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(C(P,b),D(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function C(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const P=T[b.type];let z;if(P){const $=zi[P];z=$_.clone($.uniforms)}else z=b.uniforms;return z}function I(b,P){let z=v.get(P);return z!==void 0?++z.usedTimes:(z=new BE(s,P,b,l),x.push(z),v.set(P,z)),z}function L(b){if(--b.usedTimes===0){const P=x.indexOf(b);x[P]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:R,acquireProgram:I,releaseProgram:L,releaseShaderCache:O,programs:x,dispose:B}}function HE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function WE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function R0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function N0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,y,S,T,A,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:A,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=A,_.group=M),e++,_}function d(v,y,S,T,A,M){const _=u(v,y,S,T,A,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function p(v,y,S,T,A,M){const _=u(v,y,S,T,A,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||WE),r.length>1&&r.sort(y||R0),o.length>1&&o.sort(y||R0)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function XE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new N0,s.set(r,[u])):o>=l.length?(u=new N0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function qE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new St};break;case"SpotLight":t={position:new Z,direction:new Z,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function YE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $E=0;function KE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ZE(s){const e=new qE,t=YE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const o=new Z,l=new Jt,u=new Jt;function d(m){let x=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,T=0,A=0,M=0,_=0,C=0,D=0,R=0,I=0,L=0,O=0;m.sort(KE);for(let b=0,P=m.length;b<P;b++){const z=m[b],$=z.color,K=z.intensity,ue=z.distance;let de=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===xa?de=z.shadow.map.texture:de=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=$.r*K,v+=$.g*K,y+=$.b*K;else if(z.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(z.sh.coefficients[ie],K);O++}else if(z.isDirectionalLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Q=z.shadow,q=t.get(z);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=z.shadow.matrix,C++}r.directional[S]=ie,S++}else if(z.isSpotLight){const ie=e.get(z);ie.position.setFromMatrixPosition(z.matrixWorld),ie.color.copy($).multiplyScalar(K),ie.distance=ue,ie.coneCos=Math.cos(z.angle),ie.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ie.decay=z.decay,r.spot[A]=ie;const Q=z.shadow;if(z.map&&(r.spotLightMap[I]=z.map,I++,Q.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[A]=Q.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,r.spotShadow[A]=q,r.spotShadowMap[A]=de,R++}A++}else if(z.isRectAreaLight){const ie=e.get(z);ie.color.copy($).multiplyScalar(K),ie.halfWidth.set(z.width*.5,0,0),ie.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=ie,M++}else if(z.isPointLight){const ie=e.get(z);if(ie.color.copy(z.color).multiplyScalar(z.intensity),ie.distance=z.distance,ie.decay=z.decay,z.castShadow){const Q=z.shadow,q=t.get(z);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=z.shadow.matrix,D++}r.point[T]=ie,T++}else if(z.isHemisphereLight){const ie=e.get(z);ie.skyColor.copy(z.color).multiplyScalar(K),ie.groundColor.copy(z.groundColor).multiplyScalar(K),r.hemi[_]=ie,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Be.LTC_FLOAT_1,r.rectAreaLTC2=Be.LTC_FLOAT_2):(r.rectAreaLTC1=Be.LTC_HALF_1,r.rectAreaLTC2=Be.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==S||B.pointLength!==T||B.spotLength!==A||B.rectAreaLength!==M||B.hemiLength!==_||B.numDirectionalShadows!==C||B.numPointShadows!==D||B.numSpotShadows!==R||B.numSpotMaps!==I||B.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=A,r.rectArea.length=M,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+I-L,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,B.directionalLength=S,B.pointLength=T,B.spotLength=A,B.rectAreaLength=M,B.hemiLength=_,B.numDirectionalShadows=C,B.numPointShadows=D,B.numSpotShadows=R,B.numSpotMaps=I,B.numLightProbes=O,r.version=$E++)}function p(m,x){let v=0,y=0,S=0,T=0,A=0;const M=x.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const D=m[_];if(D.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),v++}else if(D.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:r}}function P0(s){const e=new ZE(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function QE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new P0(s),e.set(o,[d])):l>=u.length?(d=new P0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const JE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ew=`uniform sampler2D shadow_pass;
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
}`,tw=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],nw=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],D0=new Jt,lo=new Z,Cd=new Z;function iw(s,e,t){let r=new Gf;const o=new gt,l=new gt,u=new rn,d=new c1,p=new u1,m={},x=t.maxTextureSize,v={[Kr]:Jn,[Jn]:Kr,[dr]:dr},y=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:JE,fragmentShader:ew}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new ei;T.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new pt(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let _=this.type;this.render=function(L,O,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===Pf&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Yl);const b=s.getRenderTarget(),P=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(mr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=_!==this.type;K&&O.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(de=>de.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,de=L.length;ue<de;ue++){const ie=L[ue],Q=ie.shadow;if(Q===void 0){_t("WebGLShadowMap:",ie,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;o.copy(Q.mapSize);const q=Q.getFrameExtents();if(o.multiply(q),l.copy(Q.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/q.x),o.x=l.x*q.x,Q.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/q.y),o.y=l.y*q.y,Q.mapSize.y=l.y)),Q.map===null||K===!0){if(Q.map!==null&&(Q.map.depthTexture!==null&&(Q.map.depthTexture.dispose(),Q.map.depthTexture=null),Q.map.dispose()),this.type===uo){if(ie.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Q.map=new Hi(o.x,o.y,{format:xa,type:xr,minFilter:Un,magFilter:Un,generateMipmaps:!1}),Q.map.texture.name=ie.name+".shadowMap",Q.map.depthTexture=new _o(o.x,o.y,ji),Q.map.depthTexture.name=ie.name+".shadowMapDepth",Q.map.depthTexture.format=vr,Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Tn,Q.map.depthTexture.magFilter=Tn}else{ie.isPointLight?(Q.map=new pg(o.x),Q.map.depthTexture=new o1(o.x,Xi)):(Q.map=new Hi(o.x,o.y),Q.map.depthTexture=new _o(o.x,o.y,Xi)),Q.map.depthTexture.name=ie.name+".shadowMap",Q.map.depthTexture.format=vr;const ae=s.state.buffers.depth.getReversed();this.type===Yl?(Q.map.depthTexture.compareFunction=ae?Bf:kf,Q.map.depthTexture.minFilter=Un,Q.map.depthTexture.magFilter=Un):(Q.map.depthTexture.compareFunction=null,Q.map.depthTexture.minFilter=Tn,Q.map.depthTexture.magFilter=Tn)}Q.camera.updateProjectionMatrix()}const pe=Q.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<pe;ae++){if(Q.map.isWebGLCubeRenderTarget)s.setRenderTarget(Q.map,ae),s.clear();else{ae===0&&(s.setRenderTarget(Q.map),s.clear());const F=Q.getViewport(ae);u.set(l.x*F.x,l.y*F.y,l.x*F.z,l.y*F.w),$.viewport(u)}if(ie.isPointLight){const F=Q.camera,se=Q.matrix,we=ie.distance||F.far;we!==F.far&&(F.far=we,F.updateProjectionMatrix()),lo.setFromMatrixPosition(ie.matrixWorld),F.position.copy(lo),Cd.copy(F.position),Cd.add(tw[ae]),F.up.copy(nw[ae]),F.lookAt(Cd),F.updateMatrixWorld(),se.makeTranslation(-lo.x,-lo.y,-lo.z),D0.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Q._frustum.setFromProjectionMatrix(D0,F.coordinateSystem,F.reversedDepth)}else Q.updateMatrices(ie);r=Q.getFrustum(),R(O,B,Q.camera,ie,this.type)}Q.isPointLightShadow!==!0&&this.type===uo&&C(Q,B),Q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(b,P,z)};function C(L,O){const B=e.update(A);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Hi(o.x,o.y,{format:xa,type:xr})),y.uniforms.shadow_pass.value=L.map.depthTexture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,B,y,A,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,B,S,A,null)}function D(L,O,B,b){let P=null;const z=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)P=z;else if(P=B.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=P.uuid,K=O.uuid;let ue=m[$];ue===void 0&&(ue={},m[$]=ue);let de=ue[K];de===void 0&&(de=P.clone(),ue[K]=de,O.addEventListener("dispose",I)),P=de}if(P.visible=O.visible,P.wireframe=O.wireframe,b===uo?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:v[O.side],P.alphaMap=O.alphaMap,P.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,P.map=O.map,P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.displacementMap=O.displacementMap,P.displacementScale=O.displacementScale,P.displacementBias=O.displacementBias,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,B.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const $=s.properties.get(P);$.light=B}return P}function R(L,O,B,b,P){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===uo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ue=L.material;if(Array.isArray(ue)){const de=K.groups;for(let ie=0,Q=de.length;ie<Q;ie++){const q=de[ie],pe=ue[q.materialIndex];if(pe&&pe.visible){const ae=D(L,pe,b,P);L.onBeforeShadow(s,L,O,B,K,ae,q),s.renderBufferDirect(B,null,K,ae,L,q),L.onAfterShadow(s,L,O,B,K,ae,q)}}}else if(ue.visible){const de=D(L,ue,b,P);L.onBeforeShadow(s,L,O,B,K,de,null),s.renderBufferDirect(B,null,K,de,L,null),L.onAfterShadow(s,L,O,B,K,de,null)}}const $=L.children;for(let K=0,ue=$.length;K<ue;K++)R($[K],O,B,b,P)}function I(L){L.target.removeEventListener("dispose",I);for(const B in m){const b=m[B],P=L.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const rw={[Ud]:Od,[Fd]:zd,[kd]:jd,[ma]:Bd,[Od]:Ud,[zd]:Fd,[jd]:kd,[Bd]:ma};function sw(s,e){function t(){let H=!1;const Ue=new rn;let Ee=null;const Ie=new rn(0,0,0,0);return{setMask:function(Se){Ee!==Se&&!H&&(s.colorMask(Se,Se,Se,Se),Ee=Se)},setLocked:function(Se){H=Se},setClear:function(Se,ge,De,ht,Rt){Rt===!0&&(Se*=ht,ge*=ht,De*=ht),Ue.set(Se,ge,De,ht),Ie.equals(Ue)===!1&&(s.clearColor(Se,ge,De,ht),Ie.copy(Ue))},reset:function(){H=!1,Ee=null,Ie.set(-1,0,0,0)}}}function r(){let H=!1,Ue=!1,Ee=null,Ie=null,Se=null;return{setReversed:function(ge){if(Ue!==ge){const De=e.get("EXT_clip_control");ge?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),Ue=ge;const ht=Se;Se=null,this.setClear(ht)}},getReversed:function(){return Ue},setTest:function(ge){ge?he(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(ge){Ee!==ge&&!H&&(s.depthMask(ge),Ee=ge)},setFunc:function(ge){if(Ue&&(ge=rw[ge]),Ie!==ge){switch(ge){case Ud:s.depthFunc(s.NEVER);break;case Od:s.depthFunc(s.ALWAYS);break;case Fd:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case kd:s.depthFunc(s.EQUAL);break;case Bd:s.depthFunc(s.GEQUAL);break;case zd:s.depthFunc(s.GREATER);break;case jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=ge}},setLocked:function(ge){H=ge},setClear:function(ge){Se!==ge&&(Ue&&(ge=1-ge),s.clearDepth(ge),Se=ge)},reset:function(){H=!1,Ee=null,Ie=null,Se=null,Ue=!1}}}function o(){let H=!1,Ue=null,Ee=null,Ie=null,Se=null,ge=null,De=null,ht=null,Rt=null;return{setTest:function(Pt){H||(Pt?he(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(Pt){Ue!==Pt&&!H&&(s.stencilMask(Pt),Ue=Pt)},setFunc:function(Pt,On,gn){(Ee!==Pt||Ie!==On||Se!==gn)&&(s.stencilFunc(Pt,On,gn),Ee=Pt,Ie=On,Se=gn)},setOp:function(Pt,On,gn){(ge!==Pt||De!==On||ht!==gn)&&(s.stencilOp(Pt,On,gn),ge=Pt,De=On,ht=gn)},setLocked:function(Pt){H=Pt},setClear:function(Pt){Rt!==Pt&&(s.clearStencil(Pt),Rt=Pt)},reset:function(){H=!1,Ue=null,Ee=null,Ie=null,Se=null,ge=null,De=null,ht=null,Rt=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,C=null,D=null,R=null,I=null,L=null,O=new St(0,0,0),B=0,b=!1,P=null,z=null,$=null,K=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,Q=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(q)[1]),ie=Q>=1):q.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ie=Q>=2);let pe=null,ae={};const F=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),we=new rn().fromArray(F),Xe=new rn().fromArray(se);function $e(H,Ue,Ee,Ie){const Se=new Uint8Array(4),ge=s.createTexture();s.bindTexture(H,ge),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let De=0;De<Ee;De++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Ue+De,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return ge}const re={};re[s.TEXTURE_2D]=$e(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=$e(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=$e(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=$e(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),he(s.DEPTH_TEST),u.setFunc(ma),dt(!1),kt(Cm),he(s.CULL_FACE),lt(mr);function he(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function ve(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Te(H,Ue){return v[H]!==Ue?(s.bindFramebuffer(H,Ue),v[H]=Ue,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function j(H,Ue){let Ee=S,Ie=!1;if(H){Ee=y.get(Ue),Ee===void 0&&(Ee=[],y.set(Ue,Ee));const Se=H.textures;if(Ee.length!==Se.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let ge=0,De=Se.length;ge<De;ge++)Ee[ge]=s.COLOR_ATTACHMENT0+ge;Ee.length=Se.length,Ie=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Ee)}function Oe(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Tt={[_s]:s.FUNC_ADD,[Jv]:s.FUNC_SUBTRACT,[e_]:s.FUNC_REVERSE_SUBTRACT};Tt[t_]=s.MIN,Tt[n_]=s.MAX;const ze={[i_]:s.ZERO,[r_]:s.ONE,[s_]:s.SRC_COLOR,[Ld]:s.SRC_ALPHA,[d_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[o_]:s.DST_ALPHA,[a_]:s.ONE_MINUS_SRC_COLOR,[Id]:s.ONE_MINUS_SRC_ALPHA,[u_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[f_]:s.CONSTANT_COLOR,[h_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function lt(H,Ue,Ee,Ie,Se,ge,De,ht,Rt,Pt){if(H===mr){A===!0&&(ve(s.BLEND),A=!1);return}if(A===!1&&(he(s.BLEND),A=!0),H!==Qv){if(H!==M||Pt!==b){if((_!==_s||R!==_s)&&(s.blendEquation(s.FUNC_ADD),_=_s,R=_s),Pt)switch(H){case ha:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rm:s.blendFunc(s.ONE,s.ONE);break;case Nm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Pm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",H);break}else switch(H){case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Rm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Nm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",H);break}C=null,D=null,I=null,L=null,O.set(0,0,0),B=0,M=H,b=Pt}return}Se=Se||Ue,ge=ge||Ee,De=De||Ie,(Ue!==_||Se!==R)&&(s.blendEquationSeparate(Tt[Ue],Tt[Se]),_=Ue,R=Se),(Ee!==C||Ie!==D||ge!==I||De!==L)&&(s.blendFuncSeparate(ze[Ee],ze[Ie],ze[ge],ze[De]),C=Ee,D=Ie,I=ge,L=De),(ht.equals(O)===!1||Rt!==B)&&(s.blendColor(ht.r,ht.g,ht.b,Rt),O.copy(ht),B=Rt),M=H,b=!1}function Ct(H,Ue){H.side===dr?ve(s.CULL_FACE):he(s.CULL_FACE);let Ee=H.side===Jn;Ue&&(Ee=!Ee),dt(Ee),H.blending===ha&&H.transparent===!1?lt(mr):lt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ie=H.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(H.stencilWriteMask),d.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),d.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),It(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){P!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),P=H)}function kt(H){H!==Kv?(he(s.CULL_FACE),H!==z&&(H===Cm?s.cullFace(s.BACK):H===Zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),z=H}function V(H){H!==$&&(ie&&s.lineWidth(H),$=H)}function It(H,Ue,Ee){H?(he(s.POLYGON_OFFSET_FILL),(K!==Ue||ue!==Ee)&&(s.polygonOffset(Ue,Ee),K=Ue,ue=Ee)):ve(s.POLYGON_OFFSET_FILL)}function mt(H){H?he(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function wt(H){H===void 0&&(H=s.TEXTURE0+de-1),pe!==H&&(s.activeTexture(H),pe=H)}function qe(H,Ue,Ee){Ee===void 0&&(pe===null?Ee=s.TEXTURE0+de-1:Ee=pe);let Ie=ae[Ee];Ie===void 0&&(Ie={type:void 0,texture:void 0},ae[Ee]=Ie),(Ie.type!==H||Ie.texture!==Ue)&&(pe!==Ee&&(s.activeTexture(Ee),pe=Ee),s.bindTexture(H,Ue||re[H]),Ie.type=H,Ie.texture=Ue)}function U(){const H=ae[pe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function fe(){try{s.texSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function me(){try{s.texSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function He(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function be(){try{s.texStorage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function ke(){try{s.texStorage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function st(){try{s.texImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Pe(H){we.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),we.copy(H))}function Ke(H){Xe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Xe.copy(H))}function Ve(H,Ue){let Ee=m.get(Ue);Ee===void 0&&(Ee=new WeakMap,m.set(Ue,Ee));let Ie=Ee.get(H);Ie===void 0&&(Ie=s.getUniformBlockIndex(Ue,H.name),Ee.set(H,Ie))}function Ne(H,Ue){const Ie=m.get(Ue).get(H);p.get(Ue)!==Ie&&(s.uniformBlockBinding(Ue,Ie,H.__bindingPointIndex),p.set(Ue,Ie))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},pe=null,ae={},v={},y=new WeakMap,S=[],T=null,A=!1,M=null,_=null,C=null,D=null,R=null,I=null,L=null,O=new St(0,0,0),B=0,b=!1,P=null,z=null,$=null,K=null,ue=null,we.set(0,0,s.canvas.width,s.canvas.height),Xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:he,disable:ve,bindFramebuffer:Te,drawBuffers:j,useProgram:Oe,setBlending:lt,setMaterial:Ct,setFlipSided:dt,setCullFace:kt,setLineWidth:V,setPolygonOffset:It,setScissorTest:mt,activeTexture:wt,bindTexture:qe,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:st,texImage3D:ye,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:be,texStorage3D:ke,texSubImage2D:fe,texSubImage3D:me,compressedTexSubImage2D:oe,compressedTexSubImage3D:He,scissor:Pe,viewport:Ke,reset:yt}}function aw(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return S?new OffscreenCanvas(U,E):xo("canvas")}function A(U,E,X){let fe=1;const me=qe(U);if((me.width>X||me.height>X)&&(fe=X/Math.max(me.width,me.height)),fe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const oe=Math.floor(fe*me.width),He=Math.floor(fe*me.height);v===void 0&&(v=T(oe,He));const be=E?T(oe,He):v;return be.width=oe,be.height=He,be.getContext("2d").drawImage(U,0,0,oe,He),_t("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+oe+"x"+He+")."),be}else return"data"in U&&_t("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),U;return U}function M(U){return U.generateMipmaps}function _(U){s.generateMipmap(U)}function C(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(U,E,X,fe,me=!1){if(U!==null){if(s[U]!==void 0)return s[U];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let oe=E;if(E===s.RED&&(X===s.FLOAT&&(oe=s.R32F),X===s.HALF_FLOAT&&(oe=s.R16F),X===s.UNSIGNED_BYTE&&(oe=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(oe=s.R8UI),X===s.UNSIGNED_SHORT&&(oe=s.R16UI),X===s.UNSIGNED_INT&&(oe=s.R32UI),X===s.BYTE&&(oe=s.R8I),X===s.SHORT&&(oe=s.R16I),X===s.INT&&(oe=s.R32I)),E===s.RG&&(X===s.FLOAT&&(oe=s.RG32F),X===s.HALF_FLOAT&&(oe=s.RG16F),X===s.UNSIGNED_BYTE&&(oe=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(oe=s.RG8UI),X===s.UNSIGNED_SHORT&&(oe=s.RG16UI),X===s.UNSIGNED_INT&&(oe=s.RG32UI),X===s.BYTE&&(oe=s.RG8I),X===s.SHORT&&(oe=s.RG16I),X===s.INT&&(oe=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),X===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),X===s.UNSIGNED_INT&&(oe=s.RGB32UI),X===s.BYTE&&(oe=s.RGB8I),X===s.SHORT&&(oe=s.RGB16I),X===s.INT&&(oe=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),X===s.UNSIGNED_INT&&(oe=s.RGBA32UI),X===s.BYTE&&(oe=s.RGBA8I),X===s.SHORT&&(oe=s.RGBA16I),X===s.INT&&(oe=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),E===s.RGBA){const He=me?ic:Ft.getTransfer(fe);X===s.FLOAT&&(oe=s.RGBA32F),X===s.HALF_FLOAT&&(oe=s.RGBA16F),X===s.UNSIGNED_BYTE&&(oe=He===Ht?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function R(U,E){let X;return U?E===null||E===Xi||E===go?X=s.DEPTH24_STENCIL8:E===ji?X=s.DEPTH32F_STENCIL8:E===mo&&(X=s.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===go?X=s.DEPTH_COMPONENT24:E===ji?X=s.DEPTH_COMPONENT32F:E===mo&&(X=s.DEPTH_COMPONENT16),X}function I(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Tn&&U.minFilter!==Un?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function L(U){const E=U.target;E.removeEventListener("dispose",L),B(E),E.isVideoTexture&&x.delete(E)}function O(U){const E=U.target;E.removeEventListener("dispose",O),P(E)}function B(U){const E=r.get(U);if(E.__webglInit===void 0)return;const X=U.source,fe=y.get(X);if(fe){const me=fe[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&b(U),Object.keys(fe).length===0&&y.delete(X)}r.remove(U)}function b(U){const E=r.get(U);s.deleteTexture(E.__webglTexture);const X=U.source,fe=y.get(X);delete fe[E.__cacheKey],u.memory.textures--}function P(U){const E=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(E.__webglFramebuffer[fe]))for(let me=0;me<E.__webglFramebuffer[fe].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[fe][me]);else s.deleteFramebuffer(E.__webglFramebuffer[fe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[fe])}else{if(Array.isArray(E.__webglFramebuffer))for(let fe=0;fe<E.__webglFramebuffer.length;fe++)s.deleteFramebuffer(E.__webglFramebuffer[fe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let fe=0;fe<E.__webglColorRenderbuffer.length;fe++)E.__webglColorRenderbuffer[fe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[fe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=U.textures;for(let fe=0,me=X.length;fe<me;fe++){const oe=r.get(X[fe]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(X[fe])}r.remove(U)}let z=0;function $(){z=0}function K(){const U=z;return U>=o.maxTextures&&_t("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),z+=1,U}function ue(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function de(U,E){const X=r.get(U);if(U.isVideoTexture&&mt(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&X.__version!==U.version){const fe=U.image;if(fe===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{re(X,U,E);return}}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function ie(U,E){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){re(X,U,E);return}else U.isExternalTexture&&(X.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function Q(U,E){const X=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&X.__version!==U.version){re(X,U,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function q(U,E){const X=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&X.__version!==U.version){he(X,U,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const pe={[Hd]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[Wd]:s.MIRRORED_REPEAT},ae={[Tn]:s.NEAREST,[v_]:s.NEAREST_MIPMAP_NEAREST,[wl]:s.NEAREST_MIPMAP_LINEAR,[Un]:s.LINEAR,[Ku]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},F={[S_]:s.NEVER,[T_]:s.ALWAYS,[M_]:s.LESS,[kf]:s.LEQUAL,[E_]:s.EQUAL,[Bf]:s.GEQUAL,[w_]:s.GREATER,[b_]:s.NOTEQUAL};function se(U,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Un||E.magFilter===Ku||E.magFilter===wl||E.magFilter===Ss||E.minFilter===Un||E.minFilter===Ku||E.minFilter===wl||E.minFilter===Ss)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,pe[E.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,pe[E.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,pe[E.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,ae[E.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,ae[E.minFilter]),E.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==wl&&E.minFilter!==Ss||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function we(U,E){let X=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",L));const fe=E.source;let me=y.get(fe);me===void 0&&(me={},y.set(fe,me));const oe=ue(E);if(oe!==U.__cacheKey){me[oe]===void 0&&(me[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,X=!0),me[oe].usedTimes++;const He=me[U.__cacheKey];He!==void 0&&(me[U.__cacheKey].usedTimes--,He.usedTimes===0&&b(E)),U.__cacheKey=oe,U.__webglTexture=me[oe].texture}return X}function Xe(U,E,X){return Math.floor(Math.floor(U/X)/E)}function $e(U,E,X,fe){const oe=U.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,fe,E.data);else{oe.sort((ye,Pe)=>ye.start-Pe.start);let He=0;for(let ye=1;ye<oe.length;ye++){const Pe=oe[He],Ke=oe[ye],Ve=Pe.start+Pe.count,Ne=Xe(Ke.start,E.width,4),yt=Xe(Pe.start,E.width,4);Ke.start<=Ve+1&&Ne===yt&&Xe(Ke.start+Ke.count-1,E.width,4)===Ne?Pe.count=Math.max(Pe.count,Ke.start+Ke.count-Pe.start):(++He,oe[He]=Ke)}oe.length=He+1;const be=s.getParameter(s.UNPACK_ROW_LENGTH),ke=s.getParameter(s.UNPACK_SKIP_PIXELS),st=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,Pe=oe.length;ye<Pe;ye++){const Ke=oe[ye],Ve=Math.floor(Ke.start/4),Ne=Math.ceil(Ke.count/4),yt=Ve%E.width,H=Math.floor(Ve/E.width),Ue=Ne,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,yt),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,yt,H,Ue,Ee,X,fe,E.data)}U.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,be),s.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,st)}}function re(U,E,X){let fe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(fe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(fe=s.TEXTURE_3D);const me=we(U,E),oe=E.source;t.bindTexture(fe,U.__webglTexture,s.TEXTURE0+X);const He=r.get(oe);if(oe.version!==He.__version||me===!0){t.activeTexture(s.TEXTURE0+X);const be=Ft.getPrimaries(Ft.workingColorSpace),ke=E.colorSpace===Yr?null:Ft.getPrimaries(E.colorSpace),st=E.colorSpace===Yr||be===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=A(E.image,!1,o.maxTextureSize);ye=wt(E,ye);const Pe=l.convert(E.format,E.colorSpace),Ke=l.convert(E.type);let Ve=D(E.internalFormat,Pe,Ke,E.colorSpace,E.isVideoTexture);se(fe,E);let Ne;const yt=E.mipmaps,H=E.isVideoTexture!==!0,Ue=He.__version===void 0||me===!0,Ee=oe.dataReady,Ie=I(E,ye);if(E.isDepthTexture)Ve=R(E.format===Ms,E.type),Ue&&(H?t.texStorage2D(s.TEXTURE_2D,1,Ve,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Pe,Ke,null));else if(E.isDataTexture)if(yt.length>0){H&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,yt[0].width,yt[0].height);for(let Se=0,ge=yt.length;Se<ge;Se++)Ne=yt[Se],H?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Ke,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,Pe,Ke,Ne.data);E.generateMipmaps=!1}else H?(Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ye.width,ye.height),Ee&&$e(E,ye,Pe,Ke)):t.texImage2D(s.TEXTURE_2D,0,Ve,ye.width,ye.height,0,Pe,Ke,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,yt[0].width,yt[0].height,ye.depth);for(let Se=0,ge=yt.length;Se<ge;Se++)if(Ne=yt[Se],E.format!==Ai)if(Pe!==null)if(H){if(Ee)if(E.layerUpdates.size>0){const De=c0(Ne.width,Ne.height,E.format,E.type);for(const ht of E.layerUpdates){const Rt=Ne.data.subarray(ht*De/Ne.data.BYTES_PER_ELEMENT,(ht+1)*De/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,ht,Ne.width,Ne.height,1,Pe,Rt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,Pe,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ve,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,ye.depth,Pe,Ke,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ve,Ne.width,Ne.height,ye.depth,0,Pe,Ke,Ne.data)}else{H&&Ue&&t.texStorage2D(s.TEXTURE_2D,Ie,Ve,yt[0].width,yt[0].height);for(let Se=0,ge=yt.length;Se<ge;Se++)Ne=yt[Se],E.format!==Ai?Pe!==null?H?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,Ne.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,Pe,Ke,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Ve,Ne.width,Ne.height,0,Pe,Ke,Ne.data)}else if(E.isDataArrayTexture)if(H){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Ve,ye.width,ye.height,ye.depth),Ee)if(E.layerUpdates.size>0){const Se=c0(ye.width,ye.height,E.format,E.type);for(const ge of E.layerUpdates){const De=ye.data.subarray(ge*Se/ye.data.BYTES_PER_ELEMENT,(ge+1)*Se/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ge,ye.width,ye.height,1,Pe,Ke,De)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ke,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,ye.width,ye.height,ye.depth,0,Pe,Ke,ye.data);else if(E.isData3DTexture)H?(Ue&&t.texStorage3D(s.TEXTURE_3D,Ie,Ve,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Pe,Ke,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Ve,ye.width,ye.height,ye.depth,0,Pe,Ke,ye.data);else if(E.isFramebufferTexture){if(Ue)if(H)t.texStorage2D(s.TEXTURE_2D,Ie,Ve,ye.width,ye.height);else{let Se=ye.width,ge=ye.height;for(let De=0;De<Ie;De++)t.texImage2D(s.TEXTURE_2D,De,Ve,Se,ge,0,Pe,Ke,null),Se>>=1,ge>>=1}}else if(yt.length>0){if(H&&Ue){const Se=qe(yt[0]);t.texStorage2D(s.TEXTURE_2D,Ie,Ve,Se.width,Se.height)}for(let Se=0,ge=yt.length;Se<ge;Se++)Ne=yt[Se],H?Ee&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Pe,Ke,Ne):t.texImage2D(s.TEXTURE_2D,Se,Ve,Pe,Ke,Ne);E.generateMipmaps=!1}else if(H){if(Ue){const Se=qe(ye);t.texStorage2D(s.TEXTURE_2D,Ie,Ve,Se.width,Se.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Ke,ye)}else t.texImage2D(s.TEXTURE_2D,0,Ve,Pe,Ke,ye);M(E)&&_(fe),He.__version=oe.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function he(U,E,X){if(E.image.length!==6)return;const fe=we(U,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+X);const oe=r.get(me);if(me.version!==oe.__version||fe===!0){t.activeTexture(s.TEXTURE0+X);const He=Ft.getPrimaries(Ft.workingColorSpace),be=E.colorSpace===Yr?null:Ft.getPrimaries(E.colorSpace),ke=E.colorSpace===Yr||He===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,Pe=[];for(let ge=0;ge<6;ge++)!st&&!ye?Pe[ge]=A(E.image[ge],!0,o.maxCubemapSize):Pe[ge]=ye?E.image[ge].image:E.image[ge],Pe[ge]=wt(E,Pe[ge]);const Ke=Pe[0],Ve=l.convert(E.format,E.colorSpace),Ne=l.convert(E.type),yt=D(E.internalFormat,Ve,Ne,E.colorSpace),H=E.isVideoTexture!==!0,Ue=oe.__version===void 0||fe===!0,Ee=me.dataReady;let Ie=I(E,Ke);se(s.TEXTURE_CUBE_MAP,E);let Se;if(st){H&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,yt,Ke.width,Ke.height);for(let ge=0;ge<6;ge++){Se=Pe[ge].mipmaps;for(let De=0;De<Se.length;De++){const ht=Se[De];E.format!==Ai?Ve!==null?H?Ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,ht.width,ht.height,Ve,ht.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,yt,ht.width,ht.height,0,ht.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,0,0,ht.width,ht.height,Ve,Ne,ht.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De,yt,ht.width,ht.height,0,Ve,Ne,ht.data)}}}else{if(Se=E.mipmaps,H&&Ue){Se.length>0&&Ie++;const ge=qe(Pe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,yt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ye){H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Pe[ge].width,Pe[ge].height,Ve,Ne,Pe[ge].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,Pe[ge].width,Pe[ge].height,0,Ve,Ne,Pe[ge].data);for(let De=0;De<Se.length;De++){const Rt=Se[De].image[ge].image;H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,Rt.width,Rt.height,Ve,Ne,Rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,yt,Rt.width,Rt.height,0,Ve,Ne,Rt.data)}}else{H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ve,Ne,Pe[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,yt,Ve,Ne,Pe[ge]);for(let De=0;De<Se.length;De++){const ht=Se[De];H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,0,0,Ve,Ne,ht.image[ge]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ge,De+1,yt,Ve,Ne,ht.image[ge])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),oe.__version=me.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function ve(U,E,X,fe,me,oe){const He=l.convert(X.format,X.colorSpace),be=l.convert(X.type),ke=D(X.internalFormat,He,be,X.colorSpace),st=r.get(E),ye=r.get(X);if(ye.__renderTarget=E,!st.__hasExternalTextures){const Pe=Math.max(1,E.width>>oe),Ke=Math.max(1,E.height>>oe);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,oe,ke,Pe,Ke,E.depth,0,He,be,null):t.texImage2D(me,oe,ke,Pe,Ke,0,He,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),It(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,fe,me,ye.__webglTexture,0,V(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,fe,me,ye.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(U,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,U),E.depthBuffer){const fe=E.depthTexture,me=fe&&fe.isDepthTexture?fe.type:null,oe=R(E.stencilBuffer,me),He=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;It(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),oe,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,oe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,He,s.RENDERBUFFER,U)}else{const fe=E.textures;for(let me=0;me<fe.length;me++){const oe=fe[me],He=l.convert(oe.format,oe.colorSpace),be=l.convert(oe.type),ke=D(oe.internalFormat,He,be,oe.colorSpace);It(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,V(E),ke,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,V(E),ke,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ke,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function j(U,E,X){const fe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),fe){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,E.depthTexture);const st=l.convert(E.depthTexture.format),ye=l.convert(E.depthTexture.type);let Pe;E.depthTexture.format===vr?Pe=s.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Pe=s.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,Pe,E.width,E.height,0,st,ye,null)}}else de(E.depthTexture,0);const oe=me.__webglTexture,He=V(E),be=fe?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,ke=E.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)It(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,be,oe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,ke,be,oe,0);else if(E.depthTexture.format===Ms)It(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,be,oe,0,He):s.framebufferTexture2D(s.FRAMEBUFFER,ke,be,oe,0);else throw new Error("Unknown depthTexture format")}function Oe(U){const E=r.get(U),X=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const fe=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),fe){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,fe.removeEventListener("dispose",me)};fe.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=fe}if(U.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let fe=0;fe<6;fe++)j(E.__webglFramebuffer[fe],U,fe);else{const fe=U.texture.mipmaps;fe&&fe.length>0?j(E.__webglFramebuffer[0],U,0):j(E.__webglFramebuffer,U,0)}else if(X){E.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[fe]),E.__webglDepthbuffer[fe]===void 0)E.__webglDepthbuffer[fe]=s.createRenderbuffer(),Te(E.__webglDepthbuffer[fe],U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[fe];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}else{const fe=U.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Te(E.__webglDepthbuffer,U,!1);else{const me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Tt(U,E,X){const fe=r.get(U);E!==void 0&&ve(fe.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Oe(U)}function ze(U){const E=U.texture,X=r.get(U),fe=r.get(E);U.addEventListener("dispose",O);const me=U.textures,oe=U.isWebGLCubeRenderTarget===!0,He=me.length>1;if(He||(fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture()),fe.__version=E.version,u.memory.textures++),oe){X.__webglFramebuffer=[];for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[be]=[];for(let ke=0;ke<E.mipmaps.length;ke++)X.__webglFramebuffer[be][ke]=s.createFramebuffer()}else X.__webglFramebuffer[be]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let be=0;be<E.mipmaps.length;be++)X.__webglFramebuffer[be]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if(He)for(let be=0,ke=me.length;be<ke;be++){const st=r.get(me[be]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&It(U)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let be=0;be<me.length;be++){const ke=me[be];X.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[be]);const st=l.convert(ke.format,ke.colorSpace),ye=l.convert(ke.type),Pe=D(ke.internalFormat,st,ye,ke.colorSpace,U.isXRRenderTarget===!0),Ke=V(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,X.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(X.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),se(s.TEXTURE_CUBE_MAP,E);for(let be=0;be<6;be++)if(E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)ve(X.__webglFramebuffer[be][ke],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else ve(X.__webglFramebuffer[be],U,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);M(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let be=0,ke=me.length;be<ke;be++){const st=me[be],ye=r.get(st);let Pe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Pe,ye.__webglTexture),se(Pe,st),ve(X.__webglFramebuffer,U,st,s.COLOR_ATTACHMENT0+be,Pe,0),M(st)&&_(Pe)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(be=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,fe.__webglTexture),se(be,E),E.mipmaps&&E.mipmaps.length>0)for(let ke=0;ke<E.mipmaps.length;ke++)ve(X.__webglFramebuffer[ke],U,E,s.COLOR_ATTACHMENT0,be,ke);else ve(X.__webglFramebuffer,U,E,s.COLOR_ATTACHMENT0,be,0);M(E)&&_(be),t.unbindTexture()}U.depthBuffer&&Oe(U)}function lt(U){const E=U.textures;for(let X=0,fe=E.length;X<fe;X++){const me=E[X];if(M(me)){const oe=C(U),He=r.get(me).__webglTexture;t.bindTexture(oe,He),_(oe),t.unbindTexture()}}}const Ct=[],dt=[];function kt(U){if(U.samples>0){if(It(U)===!1){const E=U.textures,X=U.width,fe=U.height;let me=s.COLOR_BUFFER_BIT;const oe=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,He=r.get(U),be=E.length>1;if(be)for(let st=0;st<E.length;st++)t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const ke=U.texture.mipmaps;ke&&ke.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let st=0;st<E.length;st++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,He.__webglColorRenderbuffer[st]);const ye=r.get(E[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,fe,0,0,X,fe,me,s.NEAREST),p===!0&&(Ct.length=0,dt.length=0,Ct.push(s.COLOR_ATTACHMENT0+st),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Ct.push(oe),dt.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,dt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let st=0;st<E.length;st++){t.bindFramebuffer(s.FRAMEBUFFER,He.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,He.__webglColorRenderbuffer[st]);const ye=r.get(E[st]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,He.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const E=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function V(U){return Math.min(o.maxSamples,U.samples)}function It(U){const E=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function mt(U){const E=u.render.frame;x.get(U)!==E&&(x.set(U,E),U.update())}function wt(U,E){const X=U.colorSpace,fe=U.format,me=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||X!==va&&X!==Yr&&(Ft.getTransfer(X)===Ht?(fe!==Ai||me!==oi)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",X)),E}function qe(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(m.width=U.naturalWidth||U.width,m.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(m.width=U.displayWidth,m.height=U.displayHeight):(m.width=U.width,m.height=U.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=de,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=q,this.rebindTextures=Tt,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ow(s,e){function t(r,o=Yr){let l;const u=Ft.getTransfer(o);if(r===oi)return s.UNSIGNED_BYTE;if(r===Lf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===If)return s.UNSIGNED_SHORT_5_5_5_1;if(r===eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===tg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Q0)return s.BYTE;if(r===J0)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Df)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===ji)return s.FLOAT;if(r===xr)return s.HALF_FLOAT;if(r===ng)return s.ALPHA;if(r===ig)return s.RGB;if(r===Ai)return s.RGBA;if(r===vr)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===rg)return s.RED;if(r===Uf)return s.RED_INTEGER;if(r===xa)return s.RG;if(r===Of)return s.RG_INTEGER;if(r===Ff)return s.RGBA_INTEGER;if(r===$l||r===Kl||r===Zl||r===Ql)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xd||r===qd||r===Yd||r===$d)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Xd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===qd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$d)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Kd||r===Zd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Jd)return l.COMPRESSED_R11_EAC;if(r===ef)return l.COMPRESSED_SIGNED_R11_EAC;if(r===tf)return l.COMPRESSED_RG11_EAC;if(r===nf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf||r===df||r===ff||r===hf||r===pf||r===mf||r===gf||r===xf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===rf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===sf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===af)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===of)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===cf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===df)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ff)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===hf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vf||r===_f||r===yf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===vf)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===_f)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sf||r===Mf||r===Ef||r===wf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Sf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ef)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===wf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===go?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const lw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cw=`
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

}`;class uw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new xg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Yi({vertexShader:lw,fragmentShader:cw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pt(new Ci(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class dw extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",M=new uw,_={},C=t.getContextAttributes();let D=null,R=null;const I=[],L=[],O=new gt;let B=null;const b=new Hn;b.viewport=new rn;const P=new Hn;P.viewport=new rn;const z=[b,P],$=new v1;let K=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=I[re];return he===void 0&&(he=new vd,I[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=I[re];return he===void 0&&(he=new vd,I[re]=he),he.getGripSpace()},this.getHand=function(re){let he=I[re];return he===void 0&&(he=new vd,I[re]=he),he.getHandSpace()};function de(re){const he=L.indexOf(re.inputSource);if(he===-1)return;const ve=I[he];ve!==void 0&&(ve.update(re.inputSource,re.frame,m||u),ve.dispatchEvent({type:re.type,data:re.inputSource}))}function ie(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",Q);for(let re=0;re<I.length;re++){const he=L[re];he!==null&&(L[re]=null,I[re].disconnect(he))}K=null,ue=null,M.reset();for(const re in _)delete _[re];e.setRenderTarget(D),S=null,y=null,v=null,o=null,R=null,$e.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){d=re,r.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(re){m=re},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",Q),C.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Te=null,j=null;C.depth&&(j=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=C.stencil?Ms:vr,Te=C.stencil?go:Xi);const Oe={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(Oe),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Hi(y.textureWidth,y.textureHeight,{format:Ai,type:oi,depthTexture:new _o(y.textureWidth,y.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ve={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ve),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Hi(S.framebufferWidth,S.framebufferHeight,{format:Ai,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),$e.setContext(o),$e.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Q(re){for(let he=0;he<re.removed.length;he++){const ve=re.removed[he],Te=L.indexOf(ve);Te>=0&&(L[Te]=null,I[Te].disconnect(ve))}for(let he=0;he<re.added.length;he++){const ve=re.added[he];let Te=L.indexOf(ve);if(Te===-1){for(let Oe=0;Oe<I.length;Oe++)if(Oe>=L.length){L.push(ve),Te=Oe;break}else if(L[Oe]===null){L[Oe]=ve,Te=Oe;break}if(Te===-1)break}const j=I[Te];j&&j.connect(ve)}}const q=new Z,pe=new Z;function ae(re,he,ve){q.setFromMatrixPosition(he.matrixWorld),pe.setFromMatrixPosition(ve.matrixWorld);const Te=q.distanceTo(pe),j=he.projectionMatrix.elements,Oe=ve.projectionMatrix.elements,Tt=j[14]/(j[10]-1),ze=j[14]/(j[10]+1),lt=(j[9]+1)/j[5],Ct=(j[9]-1)/j[5],dt=(j[8]-1)/j[0],kt=(Oe[8]+1)/Oe[0],V=Tt*dt,It=Tt*kt,mt=Te/(-dt+kt),wt=mt*-dt;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(wt),re.translateZ(mt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),j[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const qe=Tt+mt,U=ze+mt,E=V-wt,X=It+(Te-wt),fe=lt*ze/U*qe,me=Ct*ze/U*qe;re.projectionMatrix.makePerspective(E,X,fe,me,qe,U),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function F(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,ve=re.far;M.texture!==null&&(M.depthNear>0&&(he=M.depthNear),M.depthFar>0&&(ve=M.depthFar)),$.near=P.near=b.near=he,$.far=P.far=b.far=ve,(K!==$.near||ue!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,ue=$.far),$.layers.mask=re.layers.mask|6,b.layers.mask=$.layers.mask&3,P.layers.mask=$.layers.mask&5;const Te=re.parent,j=$.cameras;F($,Te);for(let Oe=0;Oe<j.length;Oe++)F(j[Oe],Te);j.length===2?ae($,b,P):$.projectionMatrix.copy(b.projectionMatrix),se(re,$,Te)};function se(re,he,ve){ve===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(ve.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=sc*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(re){p=re,y!==null&&(y.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(re){return _[re]};let we=null;function Xe(re,he){if(x=he.getViewerPose(m||u),T=he,x!==null){const ve=x.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Te=!1;ve.length!==$.cameras.length&&($.cameras.length=0,Te=!0);for(let ze=0;ze<ve.length;ze++){const lt=ve[ze];let Ct=null;if(S!==null)Ct=S.getViewport(lt);else{const kt=v.getViewSubImage(y,lt);Ct=kt.viewport,ze===0&&(e.setRenderTargetTextures(R,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(R))}let dt=z[ze];dt===void 0&&(dt=new Hn,dt.layers.enable(ze),dt.viewport=new rn,z[ze]=dt),dt.matrix.fromArray(lt.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(lt.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ze===0&&($.matrix.copy(dt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Te===!0&&$.cameras.push(dt)}const j=o.enabledFeatures;if(j&&j.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&A){v=r.getBinding();const ze=v.getDepthInformation(ve[0]);ze&&ze.isValid&&ze.texture&&M.init(ze,o.renderState)}if(j&&j.includes("camera-access")&&A){e.state.unbindTexture(),v=r.getBinding();for(let ze=0;ze<ve.length;ze++){const lt=ve[ze].camera;if(lt){let Ct=_[lt];Ct||(Ct=new xg,_[lt]=Ct);const dt=v.getCameraImage(lt);Ct.sourceTexture=dt}}}}for(let ve=0;ve<I.length;ve++){const Te=L[ve],j=I[ve];Te!==null&&j!==void 0&&j.update(Te,he,m||u)}we&&we(re,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),T=null}const $e=new Sg;$e.setAnimationLoop(Xe),this.setAnimationLoop=function(re){we=re},this.dispose=function(){}}}const vs=new qi,fw=new Jt;function hw(s,e){function t(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,dg(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,C,D,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(M,_):_.isMeshToonMaterial?(l(M,_),v(M,_)):_.isMeshPhongMaterial?(l(M,_),x(M,_)):_.isMeshStandardMaterial?(l(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,R)):_.isMeshMatcapMaterial?(l(M,_),T(M,_)):_.isMeshDepthMaterial?l(M,_):_.isMeshDistanceMaterial?(l(M,_),A(M,_)):_.isMeshNormalMaterial?l(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,C,D):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,t(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Jn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,t(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Jn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,t(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,t(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const C=e.get(_),D=C.envMap,R=C.envMapRotation;D&&(M.envMap.value=D,vs.copy(R),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(fw.makeRotationFromEuler(vs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,C,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*C,M.scale.value=D*.5,_.map&&(M.map.value=_.map,t(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,C){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=C.texture,M.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const C=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(C.matrixWorld),M.nearDistance.value=C.shadow.camera.near,M.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function pw(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,D){const R=D.program;r.uniformBlockBinding(C,R)}function m(C,D){let R=o[C.id];R===void 0&&(T(C),R=x(C),o[C.id]=R,C.addEventListener("dispose",M));const I=D.program;r.updateUBOMapping(C,I);const L=e.render.frame;l[C.id]!==L&&(y(C),l[C.id]=L)}function x(C){const D=v();C.__bindingPointIndex=D;const R=s.createBuffer(),I=C.__size,L=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,I,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function v(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(C){const D=o[C.id],R=C.uniforms,I=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,O=R.length;L<O;L++){const B=Array.isArray(R[L])?R[L]:[R[L]];for(let b=0,P=B.length;b<P;b++){const z=B[b];if(S(z,L,b,I)===!0){const $=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let de=0;de<K.length;de++){const ie=K[de],Q=A(ie);typeof ie=="number"||typeof ie=="boolean"?(z.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,$+ue,z.__data)):ie.isMatrix3?(z.__data[0]=ie.elements[0],z.__data[1]=ie.elements[1],z.__data[2]=ie.elements[2],z.__data[3]=0,z.__data[4]=ie.elements[3],z.__data[5]=ie.elements[4],z.__data[6]=ie.elements[5],z.__data[7]=0,z.__data[8]=ie.elements[6],z.__data[9]=ie.elements[7],z.__data[10]=ie.elements[8],z.__data[11]=0):(ie.toArray(z.__data,ue),ue+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,D,R,I){const L=C.value,O=D+"_"+R;if(I[O]===void 0)return typeof L=="number"||typeof L=="boolean"?I[O]=L:I[O]=L.clone(),!0;{const B=I[O];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return I[O]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function T(C){const D=C.uniforms;let R=0;const I=16;for(let O=0,B=D.length;O<B;O++){const b=Array.isArray(D[O])?D[O]:[D[O]];for(let P=0,z=b.length;P<z;P++){const $=b[P],K=Array.isArray($.value)?$.value:[$.value];for(let ue=0,de=K.length;ue<de;ue++){const ie=K[ue],Q=A(ie),q=R%I,pe=q%Q.boundary,ae=q+pe;R+=pe,ae!==0&&I-ae<Q.storage&&(R+=I-ae),$.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=Q.storage}}}const L=R%I;return L>0&&(R+=I-L),C.__size=R,C.__cache={},this}function A(C){const D={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(D.boundary=4,D.storage=4):C.isVector2?(D.boundary=8,D.storage=8):C.isVector3||C.isColor?(D.boundary=16,D.storage=12):C.isVector4?(D.boundary=16,D.storage=16):C.isMatrix3?(D.boundary=48,D.storage=48):C.isMatrix4?(D.boundary=64,D.storage=64):C.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_t("WebGLRenderer: Unsupported uniform value type.",C),D}function M(C){const D=C.target;D.removeEventListener("dispose",M);const R=u.indexOf(D.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function _(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},l={}}return{bind:p,update:m,dispose:_}}const mw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bi=null;function gw(){return Bi===null&&(Bi=new e1(mw,16,16,xa,xr),Bi.name="DFG_LUT",Bi.minFilter=Un,Bi.magFilter=Un,Bi.wrapS=hr,Bi.wrapT=hr,Bi.generateMipmaps=!1,Bi.needsUpdate=!0),Bi}class Tg{constructor(e={}){const{canvas:t=A_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=oi}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const A=S,M=new Set([Ff,Of,Uf]),_=new Set([oi,Xi,mo,go,Lf,If]),C=new Uint32Array(4),D=new Int32Array(4);let R=null,I=null;const L=[],O=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=Gn;let z=0,$=0,K=null,ue=-1,de=null;const ie=new rn,Q=new rn;let q=null;const pe=new St(0);let ae=0,F=t.width,se=t.height,we=1,Xe=null,$e=null;const re=new rn(0,0,F,se),he=new rn(0,0,F,se);let ve=!1;const Te=new Gf;let j=!1,Oe=!1;const Tt=new Jt,ze=new Z,lt=new rn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function kt(){return K===null?we:1}let V=r;function It(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Nf}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",Pt,!1),V===null){const Y="webgl2";if(V=It(Y,N),V===null)throw It(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ot("WebGLRenderer: "+N.message),N}let mt,wt,qe,U,E,X,fe,me,oe,He,be,ke,st,ye,Pe,Ke,Ve,Ne,yt,H,Ue,Ee,Ie,Se;function ge(){mt=new gM(V),mt.init(),Ee=new ow(V,mt),wt=new oM(V,mt,e,Ee),qe=new sw(V,mt),wt.reversedDepthBuffer&&y&&qe.buffers.depth.setReversed(!0),U=new _M(V),E=new HE,X=new aw(V,mt,qe,E,wt,Ee,U),fe=new cM(b),me=new mM(b),oe=new E1(V),Ie=new sM(V,oe),He=new xM(V,oe,U,Ie),be=new SM(V,He,oe,U),yt=new yM(V,wt,X),Ke=new lM(E),ke=new GE(b,fe,me,mt,wt,Ie,Ke),st=new hw(b,E),ye=new XE,Pe=new QE(mt),Ne=new rM(b,fe,me,qe,be,T,p),Ve=new iw(b,be,wt),Se=new pw(V,U,wt,qe),H=new aM(V,mt,U),Ue=new vM(V,mt,U),U.programs=ke.programs,b.capabilities=wt,b.extensions=mt,b.properties=E,b.renderLists=ye,b.shadowMap=Ve,b.state=qe,b.info=U}ge(),A!==oi&&(B=new EM(A,t.width,t.height,o,l));const De=new dw(b,V);this.xr=De,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const N=mt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=mt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(N){N!==void 0&&(we=N,this.setSize(F,se,!1))},this.getSize=function(N){return N.set(F,se)},this.setSize=function(N,Y,le=!0){if(De.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}F=N,se=Y,t.width=Math.floor(N*we),t.height=Math.floor(Y*we),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(F*we,se*we).floor()},this.setDrawingBufferSize=function(N,Y,le){F=N,se=Y,we=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(A===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ie)},this.getViewport=function(N){return N.copy(re)},this.setViewport=function(N,Y,le,ne){N.isVector4?re.set(N.x,N.y,N.z,N.w):re.set(N,Y,le,ne),qe.viewport(ie.copy(re).multiplyScalar(we).round())},this.getScissor=function(N){return N.copy(he)},this.setScissor=function(N,Y,le,ne){N.isVector4?he.set(N.x,N.y,N.z,N.w):he.set(N,Y,le,ne),qe.scissor(Q.copy(he).multiplyScalar(we).round())},this.getScissorTest=function(){return ve},this.setScissorTest=function(N){qe.setScissorTest(ve=N)},this.setOpaqueSort=function(N){Xe=N},this.setTransparentSort=function(N){$e=N},this.getClearColor=function(N){return N.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,le=!0){let ne=0;if(N){let J=!1;if(K!==null){const Le=K.texture.format;J=M.has(Le)}if(J){const Le=K.texture.type,je=_.has(Le),Ce=Ne.getClearColor(),Ze=Ne.getClearAlpha(),Ge=Ce.r,ot=Ce.g,rt=Ce.b;je?(C[0]=Ge,C[1]=ot,C[2]=rt,C[3]=Ze,V.clearBufferuiv(V.COLOR,0,C)):(D[0]=Ge,D[1]=ot,D[2]=rt,D[3]=Ze,V.clearBufferiv(V.COLOR,0,D))}else ne|=V.COLOR_BUFFER_BIT}Y&&(ne|=V.DEPTH_BUFFER_BIT),le&&(ne|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Pt,!1),Ne.dispose(),ye.dispose(),Pe.dispose(),E.dispose(),fe.dispose(),me.dispose(),be.dispose(),Ie.dispose(),Se.dispose(),ke.dispose(),De.dispose(),De.removeEventListener("sessionstart",Pi),De.removeEventListener("sessionend",Ki),Fn.stop()};function ht(N){N.preventDefault(),Om("WebGLRenderer: Context Lost."),P=!0}function Rt(){Om("WebGLRenderer: Context Restored."),P=!1;const N=U.autoReset,Y=Ve.enabled,le=Ve.autoUpdate,ne=Ve.needsUpdate,J=Ve.type;ge(),U.autoReset=N,Ve.enabled=Y,Ve.autoUpdate=le,Ve.needsUpdate=ne,Ve.type=J}function Pt(N){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function On(N){const Y=N.target;Y.removeEventListener("dispose",On),gn(Y)}function gn(N){$i(N),E.remove(N)}function $i(N){const Y=E.get(N).programs;Y!==void 0&&(Y.forEach(function(le){ke.releaseProgram(le)}),N.isShaderMaterial&&ke.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,ne,J,Le){Y===null&&(Y=Ct);const je=J.isMesh&&J.matrixWorld.determinant()<0,Ce=Li(N,Y,le,ne,J);qe.setMaterial(ne,je);let Ze=le.index,Ge=1;if(ne.wireframe===!0){if(Ze=He.getWireframeAttribute(le),Ze===void 0)return;Ge=2}const ot=le.drawRange,rt=le.attributes.position;let xt=ot.start*Ge,Nt=(ot.start+ot.count)*Ge;Le!==null&&(xt=Math.max(xt,Le.start*Ge),Nt=Math.min(Nt,(Le.start+Le.count)*Ge)),Ze!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,Ze.count)):rt!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,rt.count));const Gt=Nt-xt;if(Gt<0||Gt===1/0)return;Ie.setup(J,ne,Ce,le,Ze);let zt,Dt=H;if(Ze!==null&&(zt=oe.get(Ze),Dt=Ue,Dt.setIndex(zt)),J.isMesh)ne.wireframe===!0?(qe.setLineWidth(ne.wireframeLinewidth*kt()),Dt.setMode(V.LINES)):Dt.setMode(V.TRIANGLES);else if(J.isLine){let at=ne.linewidth;at===void 0&&(at=1),qe.setLineWidth(at*kt()),J.isLineSegments?Dt.setMode(V.LINES):J.isLineLoop?Dt.setMode(V.LINE_LOOP):Dt.setMode(V.LINE_STRIP)}else J.isPoints?Dt.setMode(V.POINTS):J.isSprite&&Dt.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const at=J._multiDrawStarts,Lt=J._multiDrawCounts,Ye=J._multiDrawCount,tt=Ze?oe.get(Ze).bytesPerElement:1,qt=E.get(ne).currentProgram.getUniforms();for(let jt=0;jt<Ye;jt++)qt.setValue(V,"_gl_DrawID",jt),Dt.render(at[jt]/tt,Lt[jt])}else if(J.isInstancedMesh)Dt.renderInstances(xt,Gt,J.count);else if(le.isInstancedBufferGeometry){const at=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,at);Dt.renderInstances(xt,Gt,Lt)}else Dt.render(xt,Gt)};function Ri(N,Y,le){N.transparent===!0&&N.side===dr&&N.forceSinglePass===!1?(N.side=Jn,N.needsUpdate=!0,Di(N,Y,le),N.side=Kr,N.needsUpdate=!0,Di(N,Y,le),N.side=dr):Di(N,Y,le)}this.compile=function(N,Y,le=null){le===null&&(le=N),I=Pe.get(le),I.init(Y),O.push(I),le.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),N!==le&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(I.pushLight(J),J.castShadow&&I.pushShadow(J))}),I.setupLights();const ne=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Le=J.material;if(Le)if(Array.isArray(Le))for(let je=0;je<Le.length;je++){const Ce=Le[je];Ri(Ce,le,J),ne.add(Ce)}else Ri(Le,le,J),ne.add(Le)}),I=O.pop(),ne},this.compileAsync=function(N,Y,le=null){const ne=this.compile(N,Y,le);return new Promise(J=>{function Le(){if(ne.forEach(function(je){E.get(je).currentProgram.isReady()&&ne.delete(je)}),ne.size===0){J(N);return}setTimeout(Le,10)}mt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let _r=null;function Ni(N){_r&&_r(N)}function Pi(){Fn.stop()}function Ki(){Fn.start()}const Fn=new Sg;Fn.setAnimationLoop(Ni),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(N){_r=N,De.setAnimationLoop(N),N===null?Fn.stop():Fn.start()},De.addEventListener("sessionstart",Pi),De.addEventListener("sessionend",Ki),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const le=De.enabled===!0&&De.isPresenting===!0,ne=B!==null&&(K===null||le)&&B.begin(b,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Y),Y=De.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,Y,K),I=Pe.get(N,O.length),I.init(Y),O.push(I),Tt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Te.setFromProjectionMatrix(Tt,Vi,Y.reversedDepth),Oe=this.localClippingEnabled,j=Ke.init(this.clippingPlanes,Oe),R=ye.get(N,L.length),R.init(),L.push(R),De.enabled===!0&&De.isPresenting===!0){const je=b.xr.getDepthSensingMesh();je!==null&&yr(je,Y,-1/0,b.sortObjects)}yr(N,Y,0,b.sortObjects),R.finish(),b.sortObjects===!0&&R.sort(Xe,$e),dt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,dt&&Ne.addToRenderList(R,N),this.info.render.frame++,j===!0&&Ke.beginShadows();const J=I.state.shadowsArray;if(Ve.render(J,N,Y),j===!0&&Ke.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&B.hasRenderPass())===!1){const je=R.opaque,Ce=R.transmissive;if(I.setupLights(),Y.isArrayCamera){const Ze=Y.cameras;if(Ce.length>0)for(let Ge=0,ot=Ze.length;Ge<ot;Ge++){const rt=Ze[Ge];Qr(je,Ce,N,rt)}dt&&Ne.render(N);for(let Ge=0,ot=Ze.length;Ge<ot;Ge++){const rt=Ze[Ge];Zr(R,N,rt,rt.viewport)}}else Ce.length>0&&Qr(je,Ce,N,Y),dt&&Ne.render(N),Zr(R,N,Y)}K!==null&&$===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),ne&&B.end(b),N.isScene===!0&&N.onAfterRender(b,N,Y),Ie.resetDefaultState(),ue=-1,de=null,O.pop(),O.length>0?(I=O[O.length-1],j===!0&&Ke.setGlobalState(b.clippingPlanes,I.state.camera)):I=null,L.pop(),L.length>0?R=L[L.length-1]:R=null};function yr(N,Y,le,ne){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)I.pushLight(N),N.castShadow&&I.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Te.intersectsSprite(N)){ne&&lt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Tt);const je=be.update(N),Ce=N.material;Ce.visible&&R.push(N,je,Ce,le,lt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Te.intersectsObject(N))){const je=be.update(N),Ce=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),lt.copy(N.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),lt.copy(je.boundingSphere.center)),lt.applyMatrix4(N.matrixWorld).applyMatrix4(Tt)),Array.isArray(Ce)){const Ze=je.groups;for(let Ge=0,ot=Ze.length;Ge<ot;Ge++){const rt=Ze[Ge],xt=Ce[rt.materialIndex];xt&&xt.visible&&R.push(N,je,xt,le,lt.z,rt)}}else Ce.visible&&R.push(N,je,Ce,le,lt.z,null)}}const Le=N.children;for(let je=0,Ce=Le.length;je<Ce;je++)yr(Le[je],Y,le,ne)}function Zr(N,Y,le,ne){const{opaque:J,transmissive:Le,transparent:je}=N;I.setupLightsView(le),j===!0&&Ke.setGlobalState(b.clippingPlanes,le),ne&&qe.viewport(ie.copy(ne)),J.length>0&&kn(J,Y,le),Le.length>0&&kn(Le,Y,le),je.length>0&&kn(je,Y,le),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Qr(N,Y,le,ne){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ne.id]===void 0){const xt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ne.id]=new Hi(1,1,{generateMipmaps:!0,type:xt?xr:oi,minFilter:Ss,samples:wt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Le=I.state.transmissionRenderTarget[ne.id],je=ne.viewport||ie;Le.setSize(je.z*b.transmissionResolutionScale,je.w*b.transmissionResolutionScale);const Ce=b.getRenderTarget(),Ze=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(Le),b.getClearColor(pe),ae=b.getClearAlpha(),ae<1&&b.setClearColor(16777215,.5),b.clear(),dt&&Ne.render(le);const ot=b.toneMapping;b.toneMapping=Gi;const rt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),I.setupLightsView(ne),j===!0&&Ke.setGlobalState(b.clippingPlanes,ne),kn(N,le,ne),X.updateMultisampleRenderTarget(Le),X.updateRenderTargetMipmap(Le),mt.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,Gt=Y.length;Nt<Gt;Nt++){const zt=Y[Nt],{object:Dt,geometry:at,material:Lt,group:Ye}=zt;if(Lt.side===dr&&Dt.layers.test(ne.layers)){const tt=Lt.side;Lt.side=Jn,Lt.needsUpdate=!0,Bn(Dt,le,ne,at,Lt,Ye),Lt.side=tt,Lt.needsUpdate=!0,xt=!0}}xt===!0&&(X.updateMultisampleRenderTarget(Le),X.updateRenderTargetMipmap(Le))}b.setRenderTarget(Ce,Ze,Ge),b.setClearColor(pe,ae),rt!==void 0&&(ne.viewport=rt),b.toneMapping=ot}function kn(N,Y,le){const ne=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Le=N.length;J<Le;J++){const je=N[J],{object:Ce,geometry:Ze,group:Ge}=je;let ot=je.material;ot.allowOverride===!0&&ne!==null&&(ot=ne),Ce.layers.test(le.layers)&&Bn(Ce,Y,le,Ze,ot,Ge)}}function Bn(N,Y,le,ne,J,Le){N.onBeforeRender(b,Y,le,ne,J,Le),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,Y,le,ne,N,Le),J.transparent===!0&&J.side===dr&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,b.renderBufferDirect(le,Y,ne,J,N,Le),J.side=Kr,J.needsUpdate=!0,b.renderBufferDirect(le,Y,ne,J,N,Le),J.side=dr):b.renderBufferDirect(le,Y,ne,J,N,Le),N.onAfterRender(b,Y,le,ne,J,Le)}function Di(N,Y,le){Y.isScene!==!0&&(Y=Ct);const ne=E.get(N),J=I.state.lights,Le=I.state.shadowsArray,je=J.state.version,Ce=ke.getParameters(N,J.state,Le,Y,le),Ze=ke.getProgramCacheKey(Ce);let Ge=ne.programs;ne.environment=N.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(N.isMeshStandardMaterial?me:fe).get(N.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Ge===void 0&&(N.addEventListener("dispose",On),Ge=new Map,ne.programs=Ge);let ot=Ge.get(Ze);if(ot!==void 0){if(ne.currentProgram===ot&&ne.lightsStateVersion===je)return Zi(N,Ce),ot}else Ce.uniforms=ke.getUniforms(N),N.onBeforeCompile(Ce,b),ot=ke.acquireProgram(Ce,Ze),Ge.set(Ze,ot),ne.uniforms=Ce.uniforms;const rt=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=Ke.uniform),Zi(N,Ce),ne.needsLights=Ts(N),ne.lightsStateVersion=je,ne.needsLights&&(rt.ambientLightColor.value=J.state.ambient,rt.lightProbe.value=J.state.probe,rt.directionalLights.value=J.state.directional,rt.directionalLightShadows.value=J.state.directionalShadow,rt.spotLights.value=J.state.spot,rt.spotLightShadows.value=J.state.spotShadow,rt.rectAreaLights.value=J.state.rectArea,rt.ltc_1.value=J.state.rectAreaLTC1,rt.ltc_2.value=J.state.rectAreaLTC2,rt.pointLights.value=J.state.point,rt.pointLightShadows.value=J.state.pointShadow,rt.hemisphereLights.value=J.state.hemi,rt.directionalShadowMap.value=J.state.directionalShadowMap,rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,rt.spotShadowMap.value=J.state.spotShadowMap,rt.spotLightMatrix.value=J.state.spotLightMatrix,rt.spotLightMap.value=J.state.spotLightMap,rt.pointShadowMap.value=J.state.pointShadowMap,rt.pointShadowMatrix.value=J.state.pointShadowMatrix),ne.currentProgram=ot,ne.uniformsList=null,ot}function Jr(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=ec.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Zi(N,Y){const le=E.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Li(N,Y,le,ne,J){Y.isScene!==!0&&(Y=Ct),X.resetTextureUnits();const Le=Y.fog,je=ne.isMeshStandardMaterial?Y.environment:null,Ce=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:va,Ze=(ne.isMeshStandardMaterial?me:fe).get(ne.envMap||je),Ge=ne.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ot=!!le.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),rt=!!le.morphAttributes.position,xt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Gt=Gi;ne.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Gt=b.toneMapping);const zt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Dt=zt!==void 0?zt.length:0,at=E.get(ne),Lt=I.state.lights;if(j===!0&&(Oe===!0||N!==de)){const vn=N===de&&ne.id===ue;Ke.setState(ne,N,vn)}let Ye=!1;ne.version===at.__version?(at.needsLights&&at.lightsStateVersion!==Lt.state.version||at.outputColorSpace!==Ce||J.isBatchedMesh&&at.batching===!1||!J.isBatchedMesh&&at.batching===!0||J.isBatchedMesh&&at.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&at.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&at.instancing===!1||!J.isInstancedMesh&&at.instancing===!0||J.isSkinnedMesh&&at.skinning===!1||!J.isSkinnedMesh&&at.skinning===!0||J.isInstancedMesh&&at.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&at.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&at.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&at.instancingMorph===!1&&J.morphTexture!==null||at.envMap!==Ze||ne.fog===!0&&at.fog!==Le||at.numClippingPlanes!==void 0&&(at.numClippingPlanes!==Ke.numPlanes||at.numIntersection!==Ke.numIntersection)||at.vertexAlphas!==Ge||at.vertexTangents!==ot||at.morphTargets!==rt||at.morphNormals!==xt||at.morphColors!==Nt||at.toneMapping!==Gt||at.morphTargetsCount!==Dt)&&(Ye=!0):(Ye=!0,at.__version=ne.version);let tt=at.currentProgram;Ye===!0&&(tt=Di(ne,Y,J));let qt=!1,jt=!1,on=!1;const Re=tt.getUniforms(),et=at.uniforms;if(qe.useProgram(tt.program)&&(qt=!0,jt=!0,on=!0),ne.id!==ue&&(ue=ne.id,jt=!0),qt||de!==N){qe.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Re.setValue(V,"projectionMatrix",N.projectionMatrix),Re.setValue(V,"viewMatrix",N.matrixWorldInverse);const _n=Re.map.cameraPosition;_n!==void 0&&_n.setValue(V,ze.setFromMatrixPosition(N.matrixWorld)),wt.logarithmicDepthBuffer&&Re.setValue(V,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Re.setValue(V,"isOrthographic",N.isOrthographicCamera===!0),de!==N&&(de=N,jt=!0,on=!0)}if(at.needsLights&&(Lt.state.directionalShadowMap.length>0&&Re.setValue(V,"directionalShadowMap",Lt.state.directionalShadowMap,X),Lt.state.spotShadowMap.length>0&&Re.setValue(V,"spotShadowMap",Lt.state.spotShadowMap,X),Lt.state.pointShadowMap.length>0&&Re.setValue(V,"pointShadowMap",Lt.state.pointShadowMap,X)),J.isSkinnedMesh){Re.setOptional(V,J,"bindMatrix"),Re.setOptional(V,J,"bindMatrixInverse");const vn=J.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Re.setValue(V,"boneTexture",vn.boneTexture,X))}J.isBatchedMesh&&(Re.setOptional(V,J,"batchingTexture"),Re.setValue(V,"batchingTexture",J._matricesTexture,X),Re.setOptional(V,J,"batchingIdTexture"),Re.setValue(V,"batchingIdTexture",J._indirectTexture,X),Re.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Re.setValue(V,"batchingColorTexture",J._colorsTexture,X));const xn=le.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&yt.update(J,le,tt),(jt||at.receiveShadow!==J.receiveShadow)&&(at.receiveShadow=J.receiveShadow,Re.setValue(V,"receiveShadow",J.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(et.envMap.value=Ze,et.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(et.envMapIntensity.value=Y.environmentIntensity),et.dfgLUT!==void 0&&(et.dfgLUT.value=gw()),jt&&(Re.setValue(V,"toneMappingExposure",b.toneMappingExposure),at.needsLights&&li(et,on),Le&&ne.fog===!0&&st.refreshFogUniforms(et,Le),st.refreshMaterialUniforms(et,ne,we,se,I.state.transmissionRenderTarget[N.id]),ec.upload(V,Jr(at),et,X)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(ec.upload(V,Jr(at),et,X),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Re.setValue(V,"center",J.center),Re.setValue(V,"modelViewMatrix",J.modelViewMatrix),Re.setValue(V,"normalMatrix",J.normalMatrix),Re.setValue(V,"modelMatrix",J.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const vn=ne.uniformsGroups;for(let _n=0,As=vn.length;_n<As;_n++){const Ii=vn[_n];Se.update(Ii,tt),Se.bind(Ii,tt)}}return tt}function li(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ts(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,Y,le){const ne=E.get(N);ne.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),E.get(N.texture).__webglTexture=Y,E.get(N.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:le,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const le=E.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Ma=V.createFramebuffer();this.setRenderTarget=function(N,Y=0,le=0){K=N,z=Y,$=le;let ne=null,J=!1,Le=!1;if(N){const Ce=E.get(N);if(Ce.__useDefaultFramebuffer!==void 0){qe.bindFramebuffer(V.FRAMEBUFFER,Ce.__webglFramebuffer),ie.copy(N.viewport),Q.copy(N.scissor),q=N.scissorTest,qe.viewport(ie),qe.scissor(Q),qe.setScissorTest(q),ue=-1;return}else if(Ce.__webglFramebuffer===void 0)X.setupRenderTarget(N);else if(Ce.__hasExternalTextures)X.rebindTextures(N,E.get(N.texture).__webglTexture,E.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ot=N.depthTexture;if(Ce.__boundDepthTexture!==ot){if(ot!==null&&E.has(ot)&&(N.width!==ot.image.width||N.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(N)}}const Ze=N.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Le=!0);const Ge=E.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Ge[Y])?ne=Ge[Y][le]:ne=Ge[Y],J=!0):N.samples>0&&X.useMultisampledRTT(N)===!1?ne=E.get(N).__webglMultisampledFramebuffer:Array.isArray(Ge)?ne=Ge[le]:ne=Ge,ie.copy(N.viewport),Q.copy(N.scissor),q=N.scissorTest}else ie.copy(re).multiplyScalar(we).floor(),Q.copy(he).multiplyScalar(we).floor(),q=ve;if(le!==0&&(ne=Ma),qe.bindFramebuffer(V.FRAMEBUFFER,ne)&&qe.drawBuffers(N,ne),qe.viewport(ie),qe.scissor(Q),qe.setScissorTest(q),J){const Ce=E.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Ce.__webglTexture,le)}else if(Le){const Ce=Y;for(let Ze=0;Ze<N.textures.length;Ze++){const Ge=E.get(N.textures[Ze]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ze,Ge.__webglTexture,le,Ce)}}else if(N!==null&&le!==0){const Ce=E.get(N.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ce.__webglTexture,le)}ue=-1},this.readRenderTargetPixels=function(N,Y,le,ne,J,Le,je,Ce=0){if(!(N&&N.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je]),Ze){qe.bindFramebuffer(V.FRAMEBUFFER,Ze);try{const Ge=N.textures[Ce],ot=Ge.format,rt=Ge.type;if(!wt.textureFormatReadable(ot)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(rt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ne&&le>=0&&le<=N.height-J&&(N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),V.readPixels(Y,le,ne,J,Ee.convert(ot),Ee.convert(rt),Le))}finally{const Ge=K!==null?E.get(K).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,ne,J,Le,je,Ce=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&je!==void 0&&(Ze=Ze[je]),Ze)if(Y>=0&&Y<=N.width-ne&&le>=0&&le<=N.height-J){qe.bindFramebuffer(V.FRAMEBUFFER,Ze);const Ge=N.textures[Ce],ot=Ge.format,rt=Ge.type;if(!wt.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.bufferData(V.PIXEL_PACK_BUFFER,Le.byteLength,V.STREAM_READ),N.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Ce),V.readPixels(Y,le,ne,J,Ee.convert(ot),Ee.convert(rt),0);const Nt=K!==null?E.get(K).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Nt);const Gt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await C_(V,Gt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,xt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Le),V.deleteBuffer(xt),V.deleteSync(Gt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,le=0){const ne=Math.pow(2,-le),J=Math.floor(N.image.width*ne),Le=Math.floor(N.image.height*ne),je=Y!==null?Y.x:0,Ce=Y!==null?Y.y:0;X.setTexture2D(N,0),V.copyTexSubImage2D(V.TEXTURE_2D,le,0,0,je,Ce,J,Le),qe.unbindTexture()};const es=V.createFramebuffer(),Vt=V.createFramebuffer();this.copyTextureToTexture=function(N,Y,le=null,ne=null,J=0,Le=null){Le===null&&(J!==0?(vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Le=J,J=0):Le=0);let je,Ce,Ze,Ge,ot,rt,xt,Nt,Gt;const zt=N.isCompressedTexture?N.mipmaps[Le]:N.image;if(le!==null)je=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Ze=le.isBox3?le.max.z-le.min.z:1,Ge=le.min.x,ot=le.min.y,rt=le.isBox3?le.min.z:0;else{const xn=Math.pow(2,-J);je=Math.floor(zt.width*xn),Ce=Math.floor(zt.height*xn),N.isDataArrayTexture?Ze=zt.depth:N.isData3DTexture?Ze=Math.floor(zt.depth*xn):Ze=1,Ge=0,ot=0,rt=0}ne!==null?(xt=ne.x,Nt=ne.y,Gt=ne.z):(xt=0,Nt=0,Gt=0);const Dt=Ee.convert(Y.format),at=Ee.convert(Y.type);let Lt;Y.isData3DTexture?(X.setTexture3D(Y,0),Lt=V.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(X.setTexture2DArray(Y,0),Lt=V.TEXTURE_2D_ARRAY):(X.setTexture2D(Y,0),Lt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Y.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ye=V.getParameter(V.UNPACK_ROW_LENGTH),tt=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qt=V.getParameter(V.UNPACK_SKIP_PIXELS),jt=V.getParameter(V.UNPACK_SKIP_ROWS),on=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,zt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,zt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ge),V.pixelStorei(V.UNPACK_SKIP_ROWS,ot),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rt);const Re=N.isDataArrayTexture||N.isData3DTexture,et=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const xn=E.get(N),vn=E.get(Y),_n=E.get(xn.__renderTarget),As=E.get(vn.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,_n.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Ii=0;Ii<Ze;Ii++)Re&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(N).__webglTexture,J,rt+Ii),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Le,Gt+Ii)),V.blitFramebuffer(Ge,ot,je,Ce,xt,Nt,je,Ce,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||E.has(N)){const xn=E.get(N),vn=E.get(Y);qe.bindFramebuffer(V.READ_FRAMEBUFFER,es),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Vt);for(let _n=0;_n<Ze;_n++)Re?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xn.__webglTexture,J,rt+_n):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xn.__webglTexture,J),et?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,vn.__webglTexture,Le,Gt+_n):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,vn.__webglTexture,Le),J!==0?V.blitFramebuffer(Ge,ot,je,Ce,xt,Nt,je,Ce,V.COLOR_BUFFER_BIT,V.NEAREST):et?V.copyTexSubImage3D(Lt,Le,xt,Nt,Gt+_n,Ge,ot,je,Ce):V.copyTexSubImage2D(Lt,Le,xt,Nt,Ge,ot,je,Ce);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else et?N.isDataTexture||N.isData3DTexture?V.texSubImage3D(Lt,Le,xt,Nt,Gt,je,Ce,Ze,Dt,at,zt.data):Y.isCompressedArrayTexture?V.compressedTexSubImage3D(Lt,Le,xt,Nt,Gt,je,Ce,Ze,Dt,zt.data):V.texSubImage3D(Lt,Le,xt,Nt,Gt,je,Ce,Ze,Dt,at,zt):N.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Le,xt,Nt,je,Ce,Dt,at,zt.data):N.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Le,xt,Nt,zt.width,zt.height,Dt,zt.data):V.texSubImage2D(V.TEXTURE_2D,Le,xt,Nt,je,Ce,Dt,at,zt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,tt),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,jt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,on),Le===0&&Y.generateMipmaps&&V.generateMipmap(Lt),qe.unbindTexture()},this.initRenderTarget=function(N){E.get(N).__webglFramebuffer===void 0&&X.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?X.setTextureCube(N,0):N.isData3DTexture?X.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?X.setTexture2DArray(N,0):X.setTexture2D(N,0),qe.unbindTexture()},this.resetState=function(){z=0,$=0,K=null,qe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}const L0={type:"change"},Kf={type:"start"},Ag={type:"end"},Xl=new fc,I0=new qr,xw=Math.cos(70*N_.DEG2RAD),fn=new Z,Qn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rd=1e-6;class Cg extends S1{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fa.ROTATE,MIDDLE:fa.DOLLY,RIGHT:fa.PAN},this.touches={ONE:da.ROTATE,TWO:da.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new ws,this._lastTargetPosition=new Z,this._quat=new ws().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l0,this._sphericalDelta=new l0,this._scale=1,this._panOffset=new Z,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new Z,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=_w.bind(this),this._onPointerDown=vw.bind(this),this._onPointerUp=yw.bind(this),this._onContextMenu=Aw.bind(this),this._onMouseWheel=Ew.bind(this),this._onKeyDown=ww.bind(this),this._onTouchStart=bw.bind(this),this._onTouchMove=Tw.bind(this),this._onMouseDown=Sw.bind(this),this._onMouseMove=Mw.bind(this),this._interceptControlDown=Cw.bind(this),this._interceptControlUp=Rw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(L0),this.update(),this.state=Wt.NONE}update(e=null){const t=this.object.position;fn.copy(t).sub(this.target),fn.applyQuaternion(this._quat),this._spherical.setFromVector3(fn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Qn:r>Math.PI&&(r-=Qn),o<-Math.PI?o+=Qn:o>Math.PI&&(o-=Qn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(fn.setFromSpherical(this._spherical),fn.applyQuaternion(this._quatInverse),t.copy(this.target).add(fn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=fn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new Z(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Z(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=fn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<xw?this.object.lookAt(this.target):(I0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(I0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Rd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rd||this._lastTargetPosition.distanceToSquared(this.target)>Rd?(this.dispatchEvent(L0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Qn/60*this.autoRotateSpeed*e:Qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){fn.setFromMatrixColumn(t,0),fn.multiplyScalar(-e),this._panOffset.add(fn)}_panUp(e,t){this.screenSpacePanning===!0?fn.setFromMatrixColumn(t,1):(fn.setFromMatrixColumn(t,0),fn.crossVectors(this.object.up,fn)),fn.multiplyScalar(e),this._panOffset.add(fn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;fn.copy(o).sub(this.target);let l=fn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new gt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function vw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function _w(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function yw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ag),this.state=Wt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Sw(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Wt.DOLLY;break;case fa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}break;case fa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Kf)}function Mw(s){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Ew(s){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(s.preventDefault(),this.dispatchEvent(Kf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Ag))}function ww(s){this.enabled!==!1&&this._handleKeyDown(s)}function bw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case da.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Wt.TOUCH_ROTATE;break;case da.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case da.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Wt.TOUCH_DOLLY_PAN;break;case da.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Kf)}function Tw(s){switch(this._trackPointer(s),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Wt.NONE}}function Aw(s){this.enabled!==!1&&s.preventDefault()}function Cw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Rw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Nw=()=>{const s=Fe.useRef(null),e=Fe.useRef(null),t=Fe.useRef(null),[r,o]=Fe.useState(0),l=Fe.useRef(0),[u,d]=Fe.useState(!1),p=Fe.useRef(!1),[m,x]=Fe.useState("STANDBY"),v=Fe.useRef("STANDBY");v.current=m;const[y,S]=Fe.useState(10),T=Fe.useRef(10);T.current=y;const[A,M]=Fe.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,C]=Fe.useState(null),[D,R]=Fe.useState("geral"),I=Fe.useRef(null),L=Fe.useRef(null),O=Fe.useRef(null),B=Fe.useRef(null),b=Fe.useRef(null),P=Fe.useRef(null),z=Fe.useRef(null),$=Fe.useRef(null),K=Fe.useRef(null),ue=Fe.useRef(null),de=Fe.useRef(null),ie=Fe.useRef(null),Q=Fe.useRef(null),q=Fe.useRef(null),pe=Fe.useRef(null),ae=Fe.useRef(null),F=Fe.useRef(null),se=Fe.useRef(null),we=Fe.useRef(new Z(0,2.2,4.4)),Xe=Fe.useRef(new Z(0,1.4,0)),$e=Fe.useCallback(()=>{let Te=P.current;Te||(Te=document.createElement("canvas"),Te.width=512,Te.height=360,P.current=Te);const j=Te.getContext("2d");if(!j)return;const Oe=v.current,Tt=T.current;Oe==="STANDBY"||Oe==="HEATING"?j.fillStyle="#061a1b":Oe==="FIRE_ALARM"?j.fillStyle="#3a0808":Oe==="SUPPRESSION"?j.fillStyle="#3a1f04":j.fillStyle="#05291b",j.fillRect(0,0,512,360),j.strokeStyle="#3f3f46",j.lineWidth=4,j.strokeRect(2,2,508,356),j.fillStyle="rgba(0, 0, 0, 0.5)",j.fillRect(0,0,512,42),j.fillStyle="#94a3b8",j.font="bold 14px monospace",j.textAlign="left",j.fillText("OUTFIRE IHM v3.2",16,27),j.textAlign="right",j.fillStyle="#10b981",j.fillText("BAT: 13.8V [100%]",496,27),Oe==="STANDBY"||Oe==="HEATING"?(j.fillStyle="#10b981",j.font="bold 24px Inter, sans-serif",j.textAlign="center",j.fillText("● SISTEMA PROTEGIDO",256,90),j.fillStyle="#cbd5e1",j.font="13px monospace",j.fillText("MONITORAMENTO ATIVO (145°C / 300°C)",256,120),j.fillStyle="#0f2922",j.fillRect(24,145,464,46),j.fillStyle="#a7f3d0",j.font="13px Inter, sans-serif",j.textAlign="left",j.fillText("SENSOR COIFA (145°C):",38,174),j.textAlign="right",j.fillText(Oe==="HEATING"?"280°C [SUBINDO]":"180°C [NORMAL]",474,174),j.fillStyle="#0f2922",j.fillRect(24,200,464,46),j.fillStyle="#a7f3d0",j.textAlign="left",j.fillText("VÁLVULA SOLENOIDE DE GÁS:",38,229),j.textAlign="right",j.fillStyle="#34d399",j.fillText("ABERTA / LIBERADA",474,229),j.fillStyle="#0f2922",j.fillRect(24,255,464,46),j.fillStyle="#a7f3d0",j.textAlign="left",j.fillText("SISTEMA DE EXAUSTÃO:",38,284),j.textAlign="right",j.fillStyle="#34d399",j.fillText("OPERANDO / CONECTADO",474,284),j.fillStyle="#64748b",j.font="11px monospace",j.textAlign="center",j.fillText("DISPARO AUTOMÁTICO EM CASO DE FOGO OU BOTOEIRA MANUAL",256,332)):Oe==="FIRE_ALARM"?(j.fillStyle="#ef4444",j.font="bold 26px Inter, sans-serif",j.textAlign="center",j.fillText("🚨 FOGO DETECTADO! 🚨",256,82),j.fillStyle="#fecaca",j.font="bold 14px Inter, sans-serif",j.fillText("SENSOR TÉRMICO SUPEROU 145°C",256,110),j.fillStyle="#1c0505",j.fillRect(40,128,432,105),j.strokeStyle="#ef4444",j.lineWidth=3,j.strokeRect(40,128,432,105),j.fillStyle="#ffffff",j.font="bold 64px monospace",j.fillText(`00:0${Math.max(0,Tt)}`,256,204),j.fillStyle="#fca5a5",j.font="bold 13px Inter, sans-serif",j.fillText("DISPARO AUTOMÁTICO DE SAPONIFICANTE",256,260),j.fillStyle="#dc2626",j.fillRect(24,285,464,52),j.fillStyle="#ffffff",j.font="bold 14px Inter, sans-serif",j.fillText("EVACUAR O LOCAL OU ACIONAR A BOTOEIRA MANUAL",256,317)):Oe==="SUPPRESSION"?(j.fillStyle="#f59e0b",j.font="bold 25px Inter, sans-serif",j.textAlign="center",j.fillText("⚡ DISPARO DE SUPRESSÃO ATIVO ⚡",256,85),j.fillStyle="#ffffff",j.font="bold 15px monospace",j.fillText("DESCARGA DE SAPONIFICANTE & CO2",256,118),j.fillStyle="#ef4444",j.fillRect(24,140,464,48),j.fillStyle="#ffffff",j.font="bold 14px Inter, sans-serif",j.fillText("VÁLVULA DE GÁS: CORTADA (BLOQUEADA)",256,170),j.fillStyle="#3b82f6",j.fillRect(24,198,464,48),j.fillStyle="#ffffff",j.fillText("EXAUSTOR: DESLIGADO (DAMPER FECHADO)",256,228),j.fillStyle="#cbd5e1",j.font="bold 13px Inter, sans-serif",j.fillText("MANTA DE SABÃO ENCAPSULANDO O ÓLEO QUENTE",256,282),j.fillStyle="#a7f3d0",j.font="12px monospace",j.fillText("TEMPERATURA EM QUEDA DRÁSTICA...",256,318)):Oe==="EXTINGUISHED"&&(j.fillStyle="#10b981",j.font="bold 25px Inter, sans-serif",j.textAlign="center",j.fillText("✓ INCÊNDIO EXTINTO COM SUCESSO",256,85),j.fillStyle="#e2e8f0",j.font="bold 14px Inter, sans-serif",j.fillText("REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)",256,118),j.fillStyle="#064e3b",j.fillRect(24,140,464,46),j.fillStyle="#6ee7b7",j.font="13px Inter, sans-serif",j.textAlign="left",j.fillText("TEMPERATURA FINAL DO ÓLEO:",38,169),j.textAlign="right",j.fillText("42°C (TOTALMENTE RESFRIADO)",474,169),j.fillStyle="#064e3b",j.fillRect(24,198,464,46),j.fillStyle="#6ee7b7",j.textAlign="left",j.fillText("INTERTRAVAMENTO DE SEGURANÇA:",38,227),j.textAlign="right",j.fillText("ATIVO / SEGURO",474,227),j.fillStyle="#064e3b",j.fillRect(24,256,464,46),j.fillStyle="#6ee7b7",j.textAlign="left",j.fillText("COZINHA & ESTRUTURA:",38,285),j.textAlign="right",j.fillText("100% PRESERVADAS (AVCB OK)",474,285),j.fillStyle="#94a3b8",j.font="11px monospace",j.textAlign="center",j.fillText("SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME",256,332)),b.current&&(b.current.needsUpdate=!0)},[]),re=Fe.useCallback(()=>{p.current=!0,d(!0),x("SUPPRESSION"),S(0),M({temp:140,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0}),ue.current&&(ue.current.rotation.x=.65),setTimeout(()=>{x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0})},3500)},[]),he=Fe.useCallback(()=>{p.current=!1,d(!1),x("STANDBY"),S(10),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),ue.current&&(ue.current.rotation.x=0),q.current&&(q.current.scale.set(.001,.001,.001),q.current.visible=!1)},[]);Fe.useEffect(()=>{$e()},[m,y,$e]),Fe.useEffect(()=>{const Te=()=>{if(!s.current)return;const j=s.current.getBoundingClientRect(),Oe=s.current.offsetHeight-window.innerHeight;if(Oe<=0)return;const Tt=-j.top,ze=Math.min(1,Math.max(0,Tt/Oe));if(l.current=ze,o(ze),!(p.current&&ze>.05))if(p.current&&ze<=.05&&(p.current=!1,d(!1)),ze<.18)x("STANDBY"),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10});else if(ze>=.18&&ze<.42){x("HEATING");const lt=Math.round(180+(ze-.18)/.24*185);M({temp:lt,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:10})}else if(ze>=.42&&ze<.65){x("FIRE_ALARM");const lt=Math.max(1,Math.round(10-(ze-.42)/.23*9));S(lt),M({temp:420,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"ALERTA DE FOGO",countdown:lt})}else ze>=.65&&ze<.85?(x("SUPPRESSION"),M({temp:160,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",Te,{passive:!0}),Te(),()=>window.removeEventListener("scroll",Te)},[]);const ve=Te=>{R(Te),Te==="geral"?(we.current.set(0,2.2,4.4),Xe.current.set(0,1.4,0)):Te==="central"?(we.current.set(1.9,1.85,1.5),Xe.current.set(2.1,1.8,.15)):Te==="fritadeira"?(we.current.set(-.2,1.4,2.2),Xe.current.set(-.2,1,0)):Te==="botoeira"&&(we.current.set(1.4,1.45,1.3),Xe.current.set(1.45,1.4,.05))};return Fe.useEffect(()=>{if(!t.current||!e.current)return;const Te=e.current.clientWidth||window.innerWidth,j=e.current.clientHeight||window.innerHeight,Oe=new mg;I.current=Oe,Oe.background=new St(658448),Oe.fog=new Vf(658448,.035);const Tt=new Hn(45,Te/j,.1,100);Tt.position.set(0,2.2,4.4),L.current=Tt;const ze=new Tg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});ze.setSize(Te,j),ze.setPixelRatio(Math.min(window.devicePixelRatio,2)),ze.shadowMap.enabled=!0,ze.shadowMap.type=Pf,ze.toneMapping=cc,ze.toneMappingExposure=1.1,O.current=ze;const lt=new Cg(Tt,ze.domElement);lt.enableDamping=!0,lt.dampingFactor=.05,lt.enableZoom=!1,lt.enablePan=!1,lt.maxPolarAngle=Math.PI/2+.05,lt.target.set(0,1.4,0),B.current=lt;const Ct=new _g(16774890,.75);Oe.add(Ct);const dt=new bf(16777215,1.3);dt.position.set(4,6,4),dt.castShadow=!0,dt.shadow.mapSize.width=1024,dt.shadow.mapSize.height=1024,Oe.add(dt);const kt=new m1(16766880,2.8,6,Math.PI/3,.3);kt.position.set(0,2.7,0),kt.target.position.set(0,.9,0),Oe.add(kt),Oe.add(kt.target);const V=new s0(16733440,0,5);V.position.set(-.35,1.2,.1),Oe.add(V),K.current=V;const It=new s0(16711680,0,8);It.position.set(2.1,2.25,.2),Oe.add(It),z.current=It;const mt=new Kt({color:13421772,metalness:.9,roughness:.22}),wt=new Kt({color:1579551,roughness:.6,metalness:.1}),qe=new Kt({color:987413,roughness:.8,metalness:.2}),U=new pt(new Ci(14,14),qe);U.rotation.x=-Math.PI/2,U.receiveShadow=!0,Oe.add(U);const E=new pt(new Ci(14,8),wt);E.position.set(0,4,-1.2),E.receiveShadow=!0,Oe.add(E);const X=new pt(new Ci(14,8),wt);X.rotation.y=Math.PI/2,X.position.set(-4.5,4,0),Oe.add(X);const fe=new In;Oe.add(fe);const me=new pt(new Zt(2.6,.9,1),mt);me.position.set(0,.45,0),me.castShadow=!0,me.receiveShadow=!0,fe.add(me);const oe=new In;oe.position.set(-.55,.9,0),fe.add(oe),Q.current=oe;const He=new pt(new Zt(.85,.12,.75),mt);He.position.set(0,.06,0),oe.add(He);const be=new pt(new Zt(.72,.02,.62),new Kt({color:9584654,roughness:.1,metalness:.3}));be.position.set(0,.11,0),oe.add(be);const ke=new Kt({color:1118481,roughness:.5}),st=new pt(new gi(.012,.012,.28),ke);st.position.set(-.16,.22,.34),st.rotation.x=Math.PI/3,oe.add(st);const ye=new pt(new gi(.012,.012,.28),ke);ye.position.set(.16,.22,.34),ye.rotation.x=Math.PI/3,oe.add(ye);const Pe=new In;Pe.position.set(.65,.9,0),fe.add(Pe);const Ke=new pt(new Zt(.95,.06,.75),new Kt({color:3355448,roughness:.4,metalness:.7}));Ke.position.set(0,.03,0),Pe.add(Ke);const Ve=new In;Ve.position.set(0,2.3,0),Oe.add(Ve);const Ne=new pt(new Zt(2.8,.6,1.2),mt);Ne.castShadow=!0,Ve.add(Ne);const yt=new Kt({color:10066329,metalness:.9,roughness:.3});for(let Ye=-1;Ye<=1;Ye+=.5){const tt=new pt(new Zt(.42,.35,.04),yt);tt.position.set(Ye,-.15,0),tt.rotation.x=-Math.PI/6,Ve.add(tt)}const H=new pt(new gi(.28,.28,1.5,32),mt);H.position.set(0,1,0),Ve.add(H);const Ue=new Kt({color:11817737,metalness:.8,roughness:.3}),Ee=new Kt({color:13938487,metalness:.9,roughness:.2}),Ie=new pt(new gi(.015,.015,2.4),Ue);Ie.rotation.z=Math.PI/2,Ie.position.set(0,-.28,-.2),Ve.add(Ie),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([Ye,tt,qt])=>{const jt=new pt(new Hf(.025,.06,16),Ee);jt.position.set(Ye,tt,qt),jt.rotation.x=Math.PI,Ve.add(jt)});const ge=new In;ge.position.set(2.1,1.8,.15),ge.rotation.y=-.28,Oe.add(ge),ie.current=ge,ge.userData={interactiveType:"central",name:"Central Outfire VTS"};const ht=new vg().load("/assets/tampa-central-moderna.png");ht.colorSpace=Gn;const Rt=new Kt({color:1316378,roughness:.45,metalness:.8}),Pt=new Kt({map:ht,roughness:.35,metalness:.25}),On=[Rt,Rt,Rt,Rt,Pt,Rt],gn=new pt(new Zt(.72,.52,.22),On);gn.castShadow=!0,ge.add(gn),$e();const $i=new a1(P.current);$i.colorSpace=Gn,b.current=$i;const Ri=new fr({map:$i,transparent:!1}),_r=new pt(new Ci(.29,.2),Ri);_r.position.set(.08,.02,.111),ge.add(_r);const Ni=new pt(new gi(.016,.016,1.6,16),mt);Ni.position.set(0,1.05,0),ge.add(Ni);const Pi=new pt(new gi(.045,.045,.03,16),new Kt({color:1118481,metalness:.8}));Pi.position.set(0,.275,0),ge.add(Pi);const Ki=new Kt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),Fn=new pt(new gi(.038,.042,.065,16),Ki);Fn.position.set(0,.32,0),ge.add(Fn),$.current=Fn;const yr=new pt(new Zt(.68,.02,.2),Rt);yr.position.set(0,-.32,0),ge.add(yr);const Zr=new Kt({color:592396,roughness:.5}),Qr=new pt(new Zt(.24,.15,.14),Zr);Qr.position.set(-.16,-.23,0),ge.add(Qr);const kn=new pt(new Zt(.24,.15,.14),Zr);kn.position.set(.16,-.23,0),ge.add(kn);const Bn=new In;Bn.position.set(1.45,1.4,.08),Oe.add(Bn),de.current=Bn,Bn.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Di=new pt(new Zt(.18,.24,.08),new Kt({color:13373713,roughness:.3,metalness:.3}));Di.castShadow=!0,Bn.add(Di);const Jr=new pt(new Zt(.14,.18,.015),new Kt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));Jr.position.set(0,0,.042),Bn.add(Jr);const Zi=new pt(new Zt(.1,.06,.025),new Kt({color:16436245,roughness:.3}));Zi.position.set(0,-.01,.048),Bn.add(Zi),ue.current=Zi;const Li=new pt(new Zt(.74,.08,.64),new Kt({color:16317180,roughness:.9,metalness:.05}));Li.position.set(-.55,1.05,0),Li.scale.set(.001,.001,.001),Li.visible=!1,Oe.add(Li),q.current=Li;const li=new In;Oe.add(li),pe.current=li;const Ts=70,Ma=new Xf(.08,1),es=[];for(let Ye=0;Ye<Ts;Ye++){const tt=new pt(Ma,new fr({color:16729344,transparent:!0,opacity:.85}));tt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),tt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},li.add(tt),es.push(tt)}const Vt=new In;Oe.add(Vt),ae.current=Vt;const N=50,Y=new po(.12,8,8),le=[];for(let Ye=0;Ye<N;Ye++){const tt=new pt(Y,new fr({color:2040877,transparent:!0,opacity:.4}));tt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),tt.userData={speedY:.6+Math.random()*1,maxH:2.2},Vt.add(tt),le.push(tt)}const ne=new In;Oe.add(ne),F.current=ne;const J=80,Le=new po(.025,8,8),je=[];for(let Ye=0;Ye<J;Ye++){const tt=new pt(Le,new fr({color:16777215,transparent:!0,opacity:.9}));tt.position.set(-.55,1.9,0),tt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},ne.add(tt),je.push(tt)}const Ce=new In;Oe.add(Ce),se.current=Ce;const Ze=35,Ge=new po(.16,8,8),ot=[];for(let Ye=0;Ye<Ze;Ye++){const tt=new pt(Ge,new fr({color:14870768,transparent:!0,opacity:.4}));tt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),Ce.add(tt),ot.push(tt)}const rt=new yg,xt=new gt,Nt=Ye=>{var jt,on;const tt=ze.domElement.getBoundingClientRect();xt.x=(Ye.clientX-tt.left)/tt.width*2-1,xt.y=-((Ye.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(xt,Tt);const qt=rt.intersectObjects([Bn,ge,oe],!0);if(qt.length>0){let Re=qt[0].object;for(;Re&&!((jt=Re.userData)!=null&&jt.interactiveType)&&Re.parent;)Re=Re.parent;if(Re&&((on=Re.userData)!=null&&on.interactiveType)){ze.domElement.style.cursor="pointer",C(Re.userData.name);return}}ze.domElement.style.cursor="default",C(null)},Gt=Ye=>{var jt,on,Re;const tt=ze.domElement.getBoundingClientRect();xt.x=(Ye.clientX-tt.left)/tt.width*2-1,xt.y=-((Ye.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(xt,Tt);const qt=rt.intersectObjects([Bn,ge,oe],!0);if(qt.length>0){let et=qt[0].object;for(;et&&!((jt=et.userData)!=null&&jt.interactiveType)&&et.parent;)et=et.parent;((on=et==null?void 0:et.userData)==null?void 0:on.interactiveType)==="botoeira"?re():((Re=et==null?void 0:et.userData)==null?void 0:Re.interactiveType)==="central"&&ve("central")}};ze.domElement.addEventListener("mousemove",Nt),ze.domElement.addEventListener("click",Gt);const zt=()=>{if(!e.current||!O.current||!L.current)return;const Ye=e.current.clientWidth,tt=e.current.clientHeight;L.current.aspect=Ye/tt,L.current.updateProjectionMatrix(),O.current.setSize(Ye,tt)};window.addEventListener("resize",zt);let Dt;const at=new _1,Lt=()=>{Dt=requestAnimationFrame(Lt);const Ye=at.getDelta(),tt=at.getElapsedTime();Tt.position.lerp(we.current,.05),lt.target.lerp(Xe.current,.05),lt.update();const qt=v.current,jt=l.current;if(qt==="HEATING"||qt==="FIRE_ALARM"){li.visible=!0,Vt.visible=!0,F.current.visible=!1,se.current.visible=!1;const on=qt==="FIRE_ALARM"?1:Math.max(.2,(jt-.18)/.24);if(K.current&&(K.current.intensity=(2.5+Math.sin(tt*20)*1.5)*on,K.current.color.setHex(Math.random()>.3?16729344:16755200)),es.forEach((Re,et)=>{Re.visible=!0,Re.position.y+=Re.userData.speedY*Ye,Re.position.x+=Math.sin(tt*10+et)*.006;const xn=(Re.position.y-Re.userData.baseY)/1;Re.scale.setScalar(Math.max(.01,(1-xn)*Re.userData.scale*on)),Re.material.opacity=1-xn,Re.position.y>Re.userData.baseY+.9&&(Re.position.y=Re.userData.baseY,Re.position.x=-.55+(Math.random()-.5)*.5,Re.position.z=(Math.random()-.5)*.4)}),le.forEach(Re=>{Re.visible=!0,Re.position.y+=Re.userData.speedY*Ye,Re.scale.setScalar(on),Re.position.y>Re.userData.maxH&&(Re.position.y=1.3,Re.position.x=-.55+(Math.random()-.5)*.4)}),qt==="FIRE_ALARM"){const Re=Math.sin(tt*24)>0;z.current&&$.current&&(z.current.intensity=Re?5:0,$.current.material.emissive=Re?new St(16711680):new St(0))}}else if(qt==="SUPPRESSION"){li.visible=!0,F.current.visible=!0,se.current.visible=!0,es.forEach(Re=>{Re.scale.multiplyScalar(.92),Re.scale.x<.05&&(Re.visible=!1)}),K.current&&(K.current.intensity=Math.max(0,K.current.intensity-Ye*4)),je.forEach((Re,et)=>{Re.visible=!0,Re.position.y-=Re.userData.speed*Ye,Re.position.x+=Math.sin(tt*15+et)*.01,Re.position.y<1.05&&(Re.position.y=Re.userData.origY,Re.position.x=-.55+Re.userData.spread)}),q.current&&(q.current.visible=!0,q.current.scale.lerp(new Z(1,1,1),.08)),ot.forEach((Re,et)=>{Re.visible=!0,Re.position.y+=Math.sin(tt*3+et)*.004,Re.position.x+=Math.cos(tt*2+et)*.004});const on=Math.sin(tt*30)>0;z.current&&$.current&&(z.current.intensity=on?4:.2,$.current.material.emissive=on?new St(16711680):new St(3342336))}else qt==="EXTINGUISHED"?(li.visible=!1,Vt.visible=!1,F.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!0,q.current.scale.set(1,1,1)),z.current&&$.current&&(z.current.intensity=0,$.current.material.emissive=new St(0))):(li.visible=!1,Vt.visible=!1,F.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!1),z.current&&$.current&&(z.current.intensity=0,$.current.material.emissive=new St(0)));ze.render(Oe,Tt)};return Lt(),()=>{cancelAnimationFrame(Dt),window.removeEventListener("resize",zt),ze.domElement.removeEventListener("mousemove",Nt),ze.domElement.removeEventListener("click",Gt),ze.dispose()}},[re,$e]),f.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[350vh] bg-[#07080a]",children:f.jsxs("div",{ref:e,className:"sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none",children:[f.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),f.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[f.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[f.jsx(z0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),f.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),f.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&f.jsx(tc,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&f.jsx(ho,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&f.jsx(ho,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&f.jsx(Nv,{className:"w-4 h-4 text-amber-300 animate-spin"}),m==="EXTINGUISHED"&&f.jsx(lc,{className:"w-4 h-4 text-emerald-400"}),A.systemStatus]}),m==="FIRE_ALARM"&&f.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping",children:["DISPARO EM ",y,"s"]})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(ho,{className:`w-3.5 h-3.5 ${A.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),f.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[A.temp,"°C"]})]})]}),f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(qv,{className:`w-3.5 h-3.5 ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),f.jsx("span",{className:`text-xs font-bold font-mono ${A.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:A.gasStatus})]})]}),f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(G0,{className:`w-3.5 h-3.5 ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),f.jsx("span",{className:`text-xs font-bold font-mono ${A.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:A.exhaustStatus})]})]})]})]}),_&&f.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[f.jsx(B0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),f.jsxs("span",{children:[_," — Clique para interagir"]})]}),f.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-3",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[f.jsxs("button",{onClick:re,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED",className:`py-2.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[f.jsx(kv,{className:"w-4 h-4 text-red-400"}),f.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&f.jsxs("button",{onClick:he,className:"py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95",children:[f.jsx(j0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Restaurar"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-[#f3e5ab]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg",children:[f.jsx(Cv,{className:"w-4 h-4 text-[#d4af37] animate-bounce"}),f.jsx("span",{children:r<.85?"Role a página para ver a evolução do fogo e o combate automático":"Continue rolando para conhecer os detalhes técnicos da Central Outfire"})]}),f.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs",children:[f.jsxs("span",{className:"text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1",children:[f.jsx(Tv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),f.jsx("button",{onClick:()=>ve("geral"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),f.jsx("button",{onClick:()=>ve("central"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),f.jsx("button",{onClick:()=>ve("fritadeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),f.jsx("button",{onClick:()=>ve("botoeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})})},Pw=()=>{const[s,e]=Fe.useState("3d"),t=Fe.useRef(null),r=Fe.useRef(null),[o,l]=Fe.useState(!1),u=Fe.useRef(!1);u.current=o;const[d,p]=Fe.useState(!1),m=Fe.useRef(!1);m.current=d;const[x,v]=Fe.useState(null),y=Fe.useRef(null),S=Fe.useRef(null),T=Fe.useRef(null),A=Fe.useRef(null),M=()=>{l(R=>!R)},_=()=>{p(R=>!R)},C=()=>{T.current&&A.current&&(A.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Fe.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const R=r.current.clientWidth,I=r.current.clientHeight,L=new mg;L.background=new St(921879);const O=new Hn(40,R/I,.1,100);O.position.set(1.8,1.2,2.2),A.current=O;const B=new Tg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});B.setSize(R,I),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.shadowMap.enabled=!0,B.shadowMap.type=Pf,B.toneMapping=cc,B.toneMappingExposure=1.15;const b=new Cg(O,B.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.minDistance=1.2,b.maxDistance=6,b.target.set(0,0,0),T.current=b;const P=new _g(16774890,.85);L.add(P);const z=new bf(16777215,1.4);z.position.set(3,4,3),z.castShadow=!0,L.add(z);const $=new bf(13938487,.8);$.position.set(-3,-2,-3),L.add($);const K=new y1(4,20,13938487,2565930);K.position.y=-.75,L.add(K);const de=new vg().load("/assets/tampa-central-moderna.png");de.colorSpace=Gn;const ie=new Kt({color:1579551,metalness:.8,roughness:.35}),Q=new Kt({map:de,metalness:.25,roughness:.35}),q=[ie,ie,ie,ie,Q,ie],pe=new pt(new Zt(1.4,1,.58),q);pe.castShadow=!0,pe.receiveShadow=!0,L.add(pe);const ae=new fr({color:460810}),F=new pt(new Ci(.04,.12),ae);F.rotation.y=Math.PI,F.position.set(-.5,.3,-.291),L.add(F);const se=new pt(new Ci(.04,.12),ae);se.rotation.y=Math.PI,se.position.set(.5,.3,-.291),L.add(se);const we=new In;we.position.set(0,0,-.05),L.add(we),y.current=we;const Xe=new Kt({color:2237998,metalness:.7,roughness:.4}),$e=new pt(new Zt(.95,.02,.24),Xe);$e.position.set(0,.51,0),$e.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},we.add($e);const re=new Kt({color:13948120,metalness:.9,roughness:.2}),he=new pt(new Zt(.85,.45,.2),re);he.position.set(0,.74,0),he.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},we.add(he);const ve=new fr({color:15381256}),Te=new pt(new Ci(.24,.08),ve);Te.position.set(0,.74,.101),we.add(Te);const j=new In;j.position.set(0,0,-.05),L.add(j),S.current=j;const Oe=new Kt({color:2237998,metalness:.7,roughness:.4}),Tt=new pt(new Zt(.74,.02,.24),Oe);Tt.position.set(0,-.51,0),Tt.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},j.add(Tt);const ze=new Kt({color:592397,roughness:.5}),lt=new pt(new Zt(.32,.4,.18),ze);lt.position.set(-.18,-.72,0),lt.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},j.add(lt);const Ct=new pt(new Zt(.32,.4,.18),ze);Ct.position.set(.18,-.72,0),Ct.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},j.add(Ct);const dt=new Kt({color:2450411,metalness:.8}),kt=new pt(new gi(.012,.012,.03),dt);kt.position.set(-.24,-.51,.05),j.add(kt);const V=new pt(new gi(.012,.012,.03),dt);V.position.set(.12,-.51,.05),j.add(V);const It=new yg,mt=new gt,wt=fe=>{var He,be;const me=B.domElement.getBoundingClientRect();mt.x=(fe.clientX-me.left)/me.width*2-1,mt.y=-((fe.clientY-me.top)/me.height)*2+1,It.setFromCamera(mt,O);const oe=It.intersectObjects([we,j,pe],!0);if(oe.length>0){let ke=oe[0].object;if((He=ke.userData)!=null&&He.isPsu){B.domElement.style.cursor="pointer",v(u.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((be=ke.userData)!=null&&be.isBattery){B.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{B.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}B.domElement.style.cursor="default",v(null)},qe=fe=>{var He,be;const me=B.domElement.getBoundingClientRect();mt.x=(fe.clientX-me.left)/me.width*2-1,mt.y=-((fe.clientY-me.top)/me.height)*2+1,It.setFromCamera(mt,O);const oe=It.intersectObjects([we,j],!0);if(oe.length>0){const ke=oe[0].object;(He=ke.userData)!=null&&He.isPsu?l(st=>!st):(be=ke.userData)!=null&&be.isBattery&&p(st=>!st)}};B.domElement.addEventListener("mousemove",wt),B.domElement.addEventListener("click",qe);const U=()=>{if(!r.current||!B||!O)return;const fe=r.current.clientWidth,me=r.current.clientHeight;O.aspect=fe/me,O.updateProjectionMatrix(),B.setSize(fe,me)};window.addEventListener("resize",U);let E;const X=()=>{E=requestAnimationFrame(X);const fe=u.current?.48:0;y.current&&(y.current.position.y+=(fe-y.current.position.y)*.12);const me=m.current?-.48:0;S.current&&(S.current.position.y+=(me-S.current.position.y)*.12),b.update(),B.render(L,O)};return X(),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",U),B.domElement.removeEventListener("mousemove",wt),B.domElement.removeEventListener("click",qe),B.dispose()}},[s]);const D=[{icon:Dv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:bm,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Wv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:bv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Pd,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:z0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return f.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[f.jsx(bm,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[f.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[f.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&f.jsxs("div",{className:"relative w-full h-full",children:[f.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&f.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),f.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsxs("button",{onClick:M,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[f.jsx(Yv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),f.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${d?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[f.jsx(Sv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:d?"Recolher Baterias":"Descer Baterias"})]})]}),f.jsx("button",{onClick:C,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:f.jsx(j0,{className:"w-4 h-4"})})]})]}),s==="interno"&&f.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&f.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),f.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),f.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[f.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[f.jsx(yo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Gabinete 3D Interativo"})]}),f.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),f.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),f.jsx("div",{className:"lg:col-span-5 space-y-4",children:f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),f.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:f.jsx(Hv,{className:"w-6 h-6"})})]}),f.jsxs("div",{className:"space-y-3.5 text-sm",children:[f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[f.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx("span",{children:"Dimensionar Cozinha"}),f.jsx(ql,{className:"w-4 h-4 fill-black"})]}),f.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[f.jsx(k0,{className:"w-4 h-4 text-[#d4af37]"}),f.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:D.map((R,I)=>{const L=R.icon;return f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:f.jsx(L,{className:"w-6 h-6"})}),f.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:R.title}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:R.desc})]},I)})})]})]})},Dw=()=>f.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(Pd,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",f.jsx("br",{}),f.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),f.jsx(wm,{className:"w-7 h-7 text-red-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",f.jsx("strong",{children:"1.700 vezes"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(ho,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),f.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),f.jsx(wm,{className:"w-7 h-7 text-amber-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",f.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(Pd,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),f.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),f.jsx(lc,{className:"w-7 h-7 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",f.jsx("strong",{children:"saponificação"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[f.jsx(yo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),f.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[f.jsxs("div",{className:"p-4",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),Lw=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return f.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(zv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),f.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),f.jsx(Pv,{className:"w-6 h-6 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),f.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),f.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),f.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>f.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[f.jsx(lc,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{children:r})]},o))})]}),f.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[f.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),f.jsx(Rv,{className:"w-4 h-4"})]})]},t))}),f.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:f.jsx(wv,{className:"w-8 h-8"})}),f.jsxs("div",{className:"flex-1 text-center md:text-left",children:[f.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",f.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),f.jsx("div",{className:"shrink-0",children:f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},Iw=({onAddToCart:s})=>{var M,_;const[e,t]=Fe.useState(1),[r,o]=Fe.useState(9),[l,u]=Fe.useState(!0),[d,p]=Fe.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=C=>{if(t(C),C>d.length){const D=[...d];for(let R=d.length+1;R<=C;R++)D.push({id:R,name:`Coifa Setor ${R}`,lengthMeters:2,appliances:[{id:`${R}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${R}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(D)}else C<d.length&&p(d.slice(0,C))},x=(C,D)=>{const R=[...d];R[C].lengthMeters=Math.max(1,Math.min(8,Number(D.toFixed(1)))),p(R)},v=(C,D)=>{const R={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},I={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},L={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},O=[...d];O[C].appliances.push({id:Math.random().toString(36).substring(7),name:R[D],type:D,icon:I[D],widthMeters:L[D]}),p(O)},y=(C,D)=>{const R=[...d];R[C].appliances.splice(D,1),p(R)},S=Fe.useMemo(()=>{let C=0,D=0,R=0,I=0;d.forEach(pe=>{C+=pe.appliances.length,D+=2,l&&(R+=1);const ae=Math.max(1,Math.round(pe.lengthMeters/.9));I+=ae});const L=C+D+R,O=L*2,B=Math.max(9,O);let b=9;B>9&&B<=16?b=16:B>16&&B<=25?b=25:B>25&&(b=Math.ceil(B/9)*9);const P=Math.max(1,Math.ceil(r/3)),z=P,$=Math.max(10,Math.ceil(r/3*5)),K=$<=10?10:$<=25?25:45,ue=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,de=e===1?8900:e===2?14500:19800,ie=L*185+P*210,Q=I*295+z*320,q=de+ie+Q+1200;return{applianceNozzlesCount:C,plenumNozzlesCount:D,damperNozzlesCount:R,totalSaponificanteNozzles:L,saponificanteLiters:B,recommendedSaponificanteCylinderLiters:b,hoodSensorsCount:I,co2NozzlesCount:P,ductSensorsCount:z,co2Kg:$,recommendedCo2CylinderKg:K,centralModel:ue,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:q}},[d,r,l,e]),T=()=>{let C=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;C+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,C+=`🏢 *Configuração da Cozinha:*
`,C+=`• Quantidade de Coifas: ${e} independente(s)
`,C+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((R,I)=>{C+=`📍 *Coifa ${I+1} (${R.lengthMeters}m):*
`,C+=`  Equipamentos sob a coifa: ${R.appliances.map(L=>L.name).join(", ")||"Nenhum"}
`}),C+=`
⚙️ *Memória de Cálculo de Supressão:*
`,C+=`• Bicos de Saponificante (Classe K): ${S.totalSaponificanteNozzles} bicos (${S.applianceNozzlesCount} equipamentos + ${S.plenumNozzlesCount} pleno + ${S.damperNozzlesCount} colarinho)
`,C+=`• Volume de Saponificante: ${S.saponificanteLiters} Litros (Cilindro recomendado: ${S.recommendedSaponificanteCylinderLiters}L)
`,C+=`• Sensores Reguláveis na Coifa (145°C): ${S.hoodSensorsCount} unidades
`,C+=`• Bicos de CO2 no Duto: ${S.co2NozzlesCount} unidades (1 a cada 3m)
`,C+=`• Sensores Reguláveis no Duto (300°C): ${S.ductSensorsCount} unidades (1 a cada 3m)
`,C+=`• Volume de CO2 no Duto: ${S.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,C+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,C+=`• Modelo da Central: ${S.centralModel}

`,C+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const D=encodeURIComponent(C);window.open(`https://wa.me/5515996576807?text=${D}`,"_blank")},A=()=>{const C={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(C)};return f.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(F0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[f.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[f.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),f.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(C=>f.jsxs("button",{onClick:()=>m(C),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===C?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[f.jsxs("span",{children:[C," ",C===1?"Coifa":"Coifas"]}),f.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:C===1?"Individual":"Setorizada"})]},C))})]}),f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(G0,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),f.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),f.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:C=>o(Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),f.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[f.jsx("span",{children:"3 m (Curto)"}),f.jsx("span",{children:"15 m (Médio)"}),f.jsx("span",{children:"30 m (Longo)"})]}),f.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[f.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),f.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((C,D)=>f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:D+1}),f.jsx("h4",{className:"font-bold text-white text-sm",children:C.name})]}),f.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[C.lengthMeters," m"]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[f.jsx("span",{children:"Comprimento da Coifa:"}),f.jsxs("span",{children:[C.lengthMeters," metros lineares"]})]}),f.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:C.lengthMeters,onChange:R=>x(D,Number(R.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",C.appliances.length," protegidos):"]}),f.jsx("div",{className:"space-y-2 mb-3",children:C.appliances.map((R,I)=>f.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[f.jsx("span",{className:"text-base",children:R.icon}),f.jsx("span",{className:"font-medium",children:R.name}),f.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),f.jsx("button",{onClick:()=>y(D,I),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:f.jsx(V0,{className:"w-3.5 h-3.5"})})]},R.id))}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[f.jsxs("button",{onClick:()=>v(D,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(co,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fritadeira"})]}),f.jsxs("button",{onClick:()=>v(D,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(co,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fogão"})]}),f.jsxs("button",{onClick:()=>v(D,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(co,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Chapa"})]}),f.jsxs("button",{onClick:()=>v(D,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(co,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Grelha"})]})]})]})]},C.id))]}),f.jsx("div",{className:"lg:col-span-7 space-y-6",children:f.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),f.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),f.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),f.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),f.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[f.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),f.jsx("stop",{offset:"50%",stopColor:"#718096"}),f.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),f.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),f.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),f.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),f.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((C,D)=>{const R=270+D*(250/Math.max(1,S.co2NozzlesCount));return f.jsxs("g",{children:[f.jsx("circle",{cx:R,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:R,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),f.jsx("rect",{x:R+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${R+17}, 49)`})]},`co2-${D}`)}),f.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),f.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),f.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),f.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),f.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((C,D)=>{const R=100+(D+1)*(400/(S.hoodSensorsCount+1));return f.jsxs("g",{children:[f.jsx("circle",{cx:R,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),f.jsx("text",{x:R,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${D}`)}),f.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(_=d[0])==null?void 0:_.appliances.map((C,D)=>{const R=d[0].appliances.length,I=440/Math.max(1,R),L=80+D*I,O=I-10;return f.jsxs("g",{children:[f.jsx("rect",{x:L,y:"220",width:O,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),f.jsx("text",{x:L+O/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:C.name.split(" ")[0]}),f.jsx("text",{x:L+O/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:C.type.toUpperCase()}),f.jsx("line",{x1:L+O/2,y1:"175",x2:L+O/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),f.jsx("polygon",{points:`${L+O/2-5},200 ${L+O/2+5},200 ${L+O/2},210`,fill:"#d4af37"}),f.jsx("text",{x:L+O/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},C.id)}),f.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),f.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),f.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),f.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),f.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),f.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),f.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),f.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),f.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),f.jsx("span",{children:"Bico Saponificante Classe K"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),f.jsx("span",{children:"Bico CO2 Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),f.jsx("span",{children:"Sensor 145°C Coifa"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),f.jsx("span",{children:"Sensor 300°C Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),f.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),f.jsxs("div",{className:"mt-6 space-y-3",children:[f.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[f.jsx(Xr,{className:"w-4 h-4 text-emerald-400"}),f.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),f.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),f.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[f.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[f.jsx(pr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),f.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),f.jsxs("button",{onClick:A,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(Ev,{className:"w-5 h-5 fill-black"}),f.jsx("span",{children:"Comprar Kit na Loja"})]})]}),f.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Uw=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Ow=({onAddToCart:s})=>{const[e,t]=Fe.useState("all"),[r,o]=Fe.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=Uw.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),d=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return f.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(nc,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),f.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[f.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>f.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),f.jsxs("div",{className:"relative w-full lg:w-72",children:[f.jsx(jv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>f.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[f.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&f.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[f.jsx(yo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),f.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),f.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),f.jsxs("div",{className:"p-6",children:[f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),f.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>f.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[f.jsx(Av,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),f.jsxs("div",{className:"p-6 pt-0",children:[f.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),f.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[f.jsx(nc,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"Adicionar"})]}),f.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[f.jsx(pr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Fw=()=>{const s=[{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"733 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return f.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(Mv,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>f.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),f.jsx(Nd,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),f.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",t.size]}),f.jsxs("a",{href:t.link,target:t.link.startsWith("http")||t.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[f.jsx(k0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),f.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[f.jsx(Xv,{className:"w-5 h-5 text-amber-400"}),f.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[f.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),f.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[f.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[f.jsx(tc,{className:"w-4 h-4 text-emerald-400 shrink-0"}),f.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},kw=()=>{const[s,e]=Fe.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return f.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(yo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>f.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[f.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[f.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[f.jsx(B0,{className:"w-5 h-5 text-amber-400"}),f.jsx("span",{children:"Clique para Ampliar Foto"})]}),f.jsx("div",{className:"absolute top-4 left-4",children:f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),f.jsxs("div",{className:"p-6",children:[f.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[f.jsx("span",{children:r.title}),f.jsx(Iv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),f.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&f.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:f.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[f.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:f.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),f.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),f.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),f.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},Bw=()=>{const[s,e]=Fe.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Fe.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return f.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[f.jsx(pr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),f.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),f.jsxs("div",{className:"space-y-4 pt-4",children:[f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:f.jsx(pr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),f.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:f.jsx(pr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),f.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:f.jsx(Lv,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),f.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),f.jsx("div",{className:"lg:col-span-7",children:f.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[f.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),f.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?f.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[f.jsx(Xr,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),f.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):f.jsxs("form",{onSubmit:o,className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),f.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),f.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),f.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[f.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),f.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),f.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),f.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),f.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[f.jsx(Vv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),f.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),f.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),f.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),f.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[f.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),f.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),f.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),f.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),f.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),f.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},zw=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=Fe.useState(!1),[p,m]=Fe.useState(!1);if(!s)return null;const x=t.reduce((S,T)=>S+T.product.priceBRL*T.quantity,0),v=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,A)=>{S+=`${A+1}. *${T.product.name}*
`,S+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,S+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{m(!0),setTimeout(()=>{l(),m(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return f.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[f.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),f.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:f.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[f.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Am,{className:"w-5 h-5 text-[#d4af37]"}),f.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),f.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:f.jsx(Dd,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?f.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:f.jsx(Am,{className:"w-8 h-8"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),f.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),f.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(S=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[f.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),f.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),f.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),f.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[f.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[f.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:f.jsx(Fv,{className:"w-3 h-3"})}),f.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),f.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:f.jsx(co,{className:"w-3 h-3"})})]}),f.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[f.jsx(V0,{className:"w-3 h-3"}),f.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),t.length>0&&f.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Subtotal:"}),f.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),f.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),f.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[f.jsx("span",{children:"Total Estimado:"}),f.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[f.jsx(pr,{className:"w-4 h-4"}),f.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),f.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(Tm,{className:"w-4 h-4 fill-black"}),f.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),f.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[f.jsx(tc,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&f.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[f.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),f.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:f.jsx(Dd,{className:"w-5 h-5"})})]}),p?f.jsxs("div",{className:"text-center py-12 space-y-4",children:[f.jsx(lc,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),f.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):f.jsxs("div",{className:"space-y-4",children:[f.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",f.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),f.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(Bv,{className:"w-6 h-6 text-emerald-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),f.jsx(ql,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(Tm,{className:"w-6 h-6 text-blue-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),f.jsx(ql,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(tc,{className:"w-6 h-6 text-amber-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),f.jsx(ql,{className:"w-4 h-4 text-gray-400"})]})]})]}),f.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},jw=()=>f.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[f.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[f.jsx(Ov,{className:"w-7 h-7 fill-white/10"}),f.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Vw(){const[s,e]=Fe.useState([]),[t,r]=Fe.useState(!1),o=m=>{e(x=>x.find(y=>y.product.id===m.id)?x.map(y=>y.product.id===m.id?{...y,quantity:y.quantity+1}:y):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(y=>{if(y.product.id===m){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=m=>{e(x=>x.filter(v=>v.product.id!==m))},d=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return f.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[f.jsx($v,{cartCount:p,onOpenCart:()=>r(!0)}),f.jsxs("main",{className:"flex-1",children:[f.jsx(Nw,{}),f.jsx(Pw,{}),f.jsx(Dw,{}),f.jsx(Lw,{}),f.jsx(Iw,{onAddToCart:o}),f.jsx(Ow,{onAddToCart:o}),f.jsx(Fw,{}),f.jsx(kw,{})]}),f.jsx(Bw,{}),f.jsx(zw,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),f.jsx(jw,{})]})}xv.createRoot(document.getElementById("root")).render(f.jsx(uv.StrictMode,{children:f.jsx(Vw,{})}));
