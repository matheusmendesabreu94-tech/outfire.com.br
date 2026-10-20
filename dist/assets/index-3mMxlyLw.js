(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function b0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Ja={},Bu={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Zx(){if(cm)return At;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),v=Symbol.iterator;function y(k){return k===null||typeof k!="object"?null:(k=v&&k[v]||k["@@iterator"],typeof k=="function"?k:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function M(k,se,Ce){this.props=k,this.context=se,this.refs=R,this.updater=Ce||S}M.prototype.isReactComponent={},M.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},M.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function _(){}_.prototype=M.prototype;function A(k,se,Ce){this.props=k,this.context=se,this.refs=R,this.updater=Ce||S}var D=A.prototype=new _;D.constructor=A,T(D,M.prototype),D.isPureReactComponent=!0;var C=Array.isArray,U=Object.prototype.hasOwnProperty,L={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function B(k,se,Ce){var He,ve={},ne=null,pe=null;if(se!=null)for(He in se.ref!==void 0&&(pe=se.ref),se.key!==void 0&&(ne=""+se.key),se)U.call(se,He)&&!O.hasOwnProperty(He)&&(ve[He]=se[He]);var ye=arguments.length-2;if(ye===1)ve.children=Ce;else if(1<ye){for(var Ne=Array(ye),V=0;V<ye;V++)Ne[V]=arguments[V+2];ve.children=Ne}if(k&&k.defaultProps)for(He in ye=k.defaultProps,ye)ve[He]===void 0&&(ve[He]=ye[He]);return{$$typeof:s,type:k,key:ne,ref:pe,props:ve,_owner:L.current}}function b(k,se){return{$$typeof:s,type:k.type,key:se,ref:k.ref,props:k.props,_owner:k._owner}}function P(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ce){return se[Ce]})}var $=/\/+/g;function K(k,se){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):se.toString(36)}function ue(k,se,Ce,He,ve){var ne=typeof k;(ne==="undefined"||ne==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(ne){case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case s:case e:pe=!0}}if(pe)return pe=k,ve=ve(pe),k=He===""?"."+K(pe,0):He,C(ve)?(Ce="",k!=null&&(Ce=k.replace($,"$&/")+"/"),ue(ve,se,Ce,"",function(V){return V})):ve!=null&&(P(ve)&&(ve=b(ve,Ce+(!ve.key||pe&&pe.key===ve.key?"":(""+ve.key).replace($,"$&/")+"/")+k)),se.push(ve)),1;if(pe=0,He=He===""?".":He+":",C(k))for(var ye=0;ye<k.length;ye++){ne=k[ye];var Ne=He+K(ne,ye);pe+=ue(ne,se,Ce,Ne,ve)}else if(Ne=y(k),typeof Ne=="function")for(k=Ne.call(k),ye=0;!(ne=k.next()).done;)ne=ne.value,Ne=He+K(ne,ye++),pe+=ue(ne,se,Ce,Ne,ve);else if(ne==="object")throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return pe}function de(k,se,Ce){if(k==null)return k;var He=[],ve=0;return ue(k,He,"","",function(ne){return se.call(Ce,ne,ve++)}),He}function ae(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(Ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ce)},function(Ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ce)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},q={transition:null},me={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:q,ReactCurrentOwner:L};function re(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:de,forEach:function(k,se,Ce){de(k,function(){se.apply(this,arguments)},Ce)},count:function(k){var se=0;return de(k,function(){se++}),se},toArray:function(k){return de(k,function(se){return se})||[]},only:function(k){if(!P(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},At.Component=M,At.Fragment=t,At.Profiler=o,At.PureComponent=A,At.StrictMode=r,At.Suspense=p,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,At.act=re,At.cloneElement=function(k,se,Ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var He=T({},k.props),ve=k.key,ne=k.ref,pe=k._owner;if(se!=null){if(se.ref!==void 0&&(ne=se.ref,pe=L.current),se.key!==void 0&&(ve=""+se.key),k.type&&k.type.defaultProps)var ye=k.type.defaultProps;for(Ne in se)U.call(se,Ne)&&!O.hasOwnProperty(Ne)&&(He[Ne]=se[Ne]===void 0&&ye!==void 0?ye[Ne]:se[Ne])}var Ne=arguments.length-2;if(Ne===1)He.children=Ce;else if(1<Ne){ye=Array(Ne);for(var V=0;V<Ne;V++)ye[V]=arguments[V+2];He.children=ye}return{$$typeof:s,type:k.type,key:ve,ref:ne,props:He,_owner:pe}},At.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},At.createElement=B,At.createFactory=function(k){var se=B.bind(null,k);return se.type=k,se},At.createRef=function(){return{current:null}},At.forwardRef=function(k){return{$$typeof:d,render:k}},At.isValidElement=P,At.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:ae}},At.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},At.startTransition=function(k){var se=q.transition;q.transition={};try{k()}finally{q.transition=se}},At.unstable_act=re,At.useCallback=function(k,se){return Z.current.useCallback(k,se)},At.useContext=function(k){return Z.current.useContext(k)},At.useDebugValue=function(){},At.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},At.useEffect=function(k,se){return Z.current.useEffect(k,se)},At.useId=function(){return Z.current.useId()},At.useImperativeHandle=function(k,se,Ce){return Z.current.useImperativeHandle(k,se,Ce)},At.useInsertionEffect=function(k,se){return Z.current.useInsertionEffect(k,se)},At.useLayoutEffect=function(k,se){return Z.current.useLayoutEffect(k,se)},At.useMemo=function(k,se){return Z.current.useMemo(k,se)},At.useReducer=function(k,se,Ce){return Z.current.useReducer(k,se,Ce)},At.useRef=function(k){return Z.current.useRef(k)},At.useState=function(k){return Z.current.useState(k)},At.useSyncExternalStore=function(k,se,Ce){return Z.current.useSyncExternalStore(k,se,Ce)},At.useTransition=function(){return Z.current.useTransition()},At.version="18.3.1",At}var um;function Sf(){return um||(um=1,Bu.exports=Zx()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Qx(){if(dm)return Ja;dm=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,p,m){var x,v={},y=null,S=null;m!==void 0&&(y=""+m),p.key!==void 0&&(y=""+p.key),p.ref!==void 0&&(S=p.ref);for(x in p)r.call(p,x)&&!l.hasOwnProperty(x)&&(v[x]=p[x]);if(d&&d.defaultProps)for(x in p=d.defaultProps,p)v[x]===void 0&&(v[x]=p[x]);return{$$typeof:e,type:d,key:y,ref:S,props:v,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var fm;function Jx(){return fm||(fm=1,ku.exports=Qx()),ku.exports}var f=Jx(),Be=Sf();const ev=b0(Be);var Ml={},zu={exports:{}},Qn={},ju={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function tv(){return hm||(hm=1,(function(s){function e(q,me){var re=q.length;q.push(me);e:for(;0<re;){var k=re-1>>>1,se=q[k];if(0<o(se,me))q[k]=me,q[re]=se,re=k;else break e}}function t(q){return q.length===0?null:q[0]}function r(q){if(q.length===0)return null;var me=q[0],re=q.pop();if(re!==me){q[0]=re;e:for(var k=0,se=q.length,Ce=se>>>1;k<Ce;){var He=2*(k+1)-1,ve=q[He],ne=He+1,pe=q[ne];if(0>o(ve,re))ne<se&&0>o(pe,ve)?(q[k]=pe,q[ne]=re,k=ne):(q[k]=ve,q[He]=re,k=He);else if(ne<se&&0>o(pe,re))q[k]=pe,q[ne]=re,k=ne;else break e}}return me}function o(q,me){var re=q.sortIndex-me.sortIndex;return re!==0?re:q.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var p=[],m=[],x=1,v=null,y=3,S=!1,T=!1,R=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(q){for(var me=t(m);me!==null;){if(me.callback===null)r(m);else if(me.startTime<=q)r(m),me.sortIndex=me.expirationTime,e(p,me);else break;me=t(m)}}function C(q){if(R=!1,D(q),!T)if(t(p)!==null)T=!0,ae(U);else{var me=t(m);me!==null&&Z(C,me.startTime-q)}}function U(q,me){T=!1,R&&(R=!1,_(B),B=-1),S=!0;var re=y;try{for(D(me),v=t(p);v!==null&&(!(v.expirationTime>me)||q&&!z());){var k=v.callback;if(typeof k=="function"){v.callback=null,y=v.priorityLevel;var se=k(v.expirationTime<=me);me=s.unstable_now(),typeof se=="function"?v.callback=se:v===t(p)&&r(p),D(me)}else r(p);v=t(p)}if(v!==null)var Ce=!0;else{var He=t(m);He!==null&&Z(C,He.startTime-me),Ce=!1}return Ce}finally{v=null,y=re,S=!1}}var L=!1,O=null,B=-1,b=5,P=-1;function z(){return!(s.unstable_now()-P<b)}function $(){if(O!==null){var q=s.unstable_now();P=q;var me=!0;try{me=O(!0,q)}finally{me?K():(L=!1,O=null)}}else L=!1}var K;if(typeof A=="function")K=function(){A($)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=$,K=function(){de.postMessage(null)}}else K=function(){M($,0)};function ae(q){O=q,L||(L=!0,K())}function Z(q,me){B=M(function(){q(s.unstable_now())},me)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(q){q.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,ae(U))},s.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<q?Math.floor(1e3/q):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(q){switch(y){case 1:case 2:case 3:var me=3;break;default:me=y}var re=y;y=me;try{return q()}finally{y=re}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(q,me){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var re=y;y=q;try{return me()}finally{y=re}},s.unstable_scheduleCallback=function(q,me,re){var k=s.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?k+re:k):re=k,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=re+se,q={id:x++,callback:me,priorityLevel:q,startTime:re,expirationTime:se,sortIndex:-1},re>k?(q.sortIndex=re,e(m,q),t(p)===null&&q===t(m)&&(R?(_(B),B=-1):R=!0,Z(C,re-k))):(q.sortIndex=se,e(p,q),T||S||(T=!0,ae(U))),q},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(q){var me=y;return function(){var re=y;y=me;try{return q.apply(this,arguments)}finally{y=re}}}})(Vu)),Vu}var pm;function nv(){return pm||(pm=1,ju.exports=tv()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function iv(){if(mm)return Qn;mm=1;var s=Sf(),e=nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},v={};function y(n){return p.call(v,n)?!0:p.call(x,n)?!1:m.test(n)?v[n]=!0:(x[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,a,c,h,g,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=w}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){M[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];M[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){M[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){M[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){M[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){M[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){M[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){M[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){M[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,A);M[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,A);M[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,A);M[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){M[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),M.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){M[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,c){var h=M.hasOwnProperty(i)?M[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),L=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),B=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),z=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),q=Symbol.iterator;function me(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,k;function se(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ce=!1;function He(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ce){var c=ce}Reflect.construct(n,[],i)}else{try{i.call()}catch(ce){c=ce}n.call(i.prototype)}else{try{throw Error()}catch(ce){c=ce}n()}}catch(ce){if(ce&&c&&typeof ce.stack=="string"){for(var h=ce.stack.split(`
`),g=c.stack.split(`
`),w=h.length-1,F=g.length-1;1<=w&&0<=F&&h[w]!==g[F];)F--;for(;1<=w&&0<=F;w--,F--)if(h[w]!==g[F]){if(w!==1||F!==1)do if(w--,F--,0>F||h[w]!==g[F]){var H=`
`+h[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=F);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function ve(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function ne(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case L:return"Portal";case b:return"Profiler";case B:return"StrictMode";case K:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case P:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:ne(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return ne(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===B?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function V(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(w){c=""+w,g.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function ke(n){n._valueTracker||(n._valueTracker=V(n))}function Ct(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function ze(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Pt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=ye(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function at(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function kt(n,i){at(n,i);var a=ye(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?jt(n,i.type,a):i.hasOwnProperty("defaultValue")&&jt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function jt(n,i,a){(i!=="number"||ze(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var _t=Array.isArray;function Tt(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+ye(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ye(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(_t(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:ye(a)}}function E(n,i){var a=ye(i.value),c=ye(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function W(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var oe,Ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(oe=oe||document.createElement("div"),oe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=oe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ge={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lt=["Webkit","ms","Moz","O"];Object.keys(Ge).forEach(function(n){lt.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ge[i]=Ge[n]})});function Se(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ge.hasOwnProperty(n)&&Ge[n]?(""+i).trim():i+"px"}function Ie(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=Se(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var We=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,i){if(i){if(We[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var mt=null;function G(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ue=null,Ee=null,Te=null;function xe(n){if(n=ka(n)){if(typeof Ue!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),Ue(n.stateNode,n.type,i))}}function fe(n){Ee?Te?Te.push(n):Te=[n]:Ee=n}function be(){if(Ee){var n=Ee,i=Te;if(Te=Ee=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function ct(n,i){return n(i)}function St(){}var bt=!1;function Fn(n,i,a){if(bt)return n(i,a);bt=!0;try{return ct(n,i,a)}finally{bt=!1,(Ee!==null||Te!==null)&&(St(),be())}}function pn(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ki=!1;if(d)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Ki=!1}function _r(n,i,a,c,h,g,w,F,H){var ce=Array.prototype.slice.call(arguments,3);try{i.apply(a,ce)}catch(Me){this.onError(Me)}}var Pi=!1,Di=null,Zi=!1,kn=null,yr={onError:function(n){Pi=!0,Di=n}};function Zr(n,i,a,c,h,g,w,F,H){Pi=!1,Di=null,_r.apply(yr,arguments)}function Qr(n,i,a,c,h,g,w,F,H){if(Zr.apply(this,arguments),Pi){if(Pi){var ce=Di;Pi=!1,Di=null}else throw Error(t(198));Zi||(Zi=!0,kn=ce)}}function Bn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function zn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Li(n){if(Bn(n)!==n)throw Error(t(188))}function Jr(n){var i=n.alternate;if(!i){if(i=Bn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return Li(h),n;if(g===c)return Li(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var w=!1,F=h.child;F;){if(F===a){w=!0,a=h,c=g;break}if(F===c){w=!0,c=h,a=g;break}F=F.sibling}if(!w){for(F=g.child;F;){if(F===a){w=!0,a=g,c=h;break}if(F===c){w=!0,c=g,a=h;break}F=F.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Qi(n){return n=Jr(n),n!==null?Ii(n):null}function Ii(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Ii(n);if(i!==null)return i;n=n.sibling}return null}var ci=e.unstable_scheduleCallback,Ts=e.unstable_cancelCallback,Sa=e.unstable_shouldYield,es=e.unstable_requestPaint,Vt=e.unstable_now,N=e.unstable_getCurrentPriorityLevel,Y=e.unstable_ImmediatePriority,le=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,J=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,Ve=null,De=null;function Ze(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ve,n,void 0,(n.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:xt,ut=Math.log,rt=Math.LN2;function xt(n){return n>>>=0,n===0?32:31-(ut(n)/rt|0)|0}var Nt=64,Ht=4194304;function Bt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Dt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,w=a&268435455;if(w!==0){var F=w&~h;F!==0?c=Bt(F):(g&=w,g!==0&&(c=Bt(g)))}else w=a&~h,w!==0?c=Bt(w):g!==0&&(c=Bt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Xe(i),h=1<<a,c|=n[a],i&=~h;return c}function ot(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var w=31-Xe(g),F=1<<w,H=h[w];H===-1?((F&a)===0||(F&c)!==0)&&(h[w]=ot(F,i)):H<=i&&(n.expiredLanes|=F),g&=~F}}function $e(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function tt(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function $t(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function zt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Xe(i),n[i]=a}function an(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Xe(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function Le(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Xe(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var et=0;function mn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var gn,xn,As,Ui,Wf,cc=!1,Mo=[],Sr=null,Mr=null,Er=null,Ma=new Map,Ea=new Map,wr=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function wa(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&xn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function yg(n,i,a,c,h){switch(i){case"focusin":return Sr=wa(Sr,n,i,a,c,h),!0;case"dragenter":return Mr=wa(Mr,n,i,a,c,h),!0;case"mouseover":return Er=wa(Er,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Ma.set(g,wa(Ma.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Ea.set(g,wa(Ea.get(g)||null,n,i,a,c,h)),!0}return!1}function qf(n){var i=ts(n.target);if(i!==null){var a=Bn(i);if(a!==null){if(i=a.tag,i===13){if(i=zn(a),i!==null){n.blockedOn=i,Wf(n.priority,function(){As(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);mt=c,a.target.dispatchEvent(c),mt=null}else return i=ka(a),i!==null&&xn(i),n.blockedOn=a,!1;i.shift()}return!0}function Yf(n,i,a){Eo(n)&&a.delete(i)}function Sg(){cc=!1,Sr!==null&&Eo(Sr)&&(Sr=null),Mr!==null&&Eo(Mr)&&(Mr=null),Er!==null&&Eo(Er)&&(Er=null),Ma.forEach(Yf),Ea.forEach(Yf)}function ba(n,i){n.blockedOn===i&&(n.blockedOn=null,cc||(cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sg)))}function Ta(n){function i(h){return ba(h,n)}if(0<Mo.length){ba(Mo[0],n);for(var a=1;a<Mo.length;a++){var c=Mo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Sr!==null&&ba(Sr,n),Mr!==null&&ba(Mr,n),Er!==null&&ba(Er,n),Ma.forEach(i),Ea.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&wr.shift()}var Cs=C.ReactCurrentBatchConfig,wo=!0;function Mg(n,i,a,c){var h=et,g=Cs.transition;Cs.transition=null;try{et=1,uc(n,i,a,c)}finally{et=h,Cs.transition=g}}function Eg(n,i,a,c){var h=et,g=Cs.transition;Cs.transition=null;try{et=4,uc(n,i,a,c)}finally{et=h,Cs.transition=g}}function uc(n,i,a,c){if(wo){var h=dc(n,i,a,c);if(h===null)Cc(n,i,c,bo,a),Xf(n,c);else if(yg(h,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<_g.indexOf(n)){for(;h!==null;){var g=ka(h);if(g!==null&&gn(g),g=dc(n,i,a,c),g===null&&Cc(n,i,c,bo,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Cc(n,i,c,null,a)}}var bo=null;function dc(n,i,a,c){if(bo=null,n=G(c),n=ts(n),n!==null)if(i=Bn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=zn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return bo=n,null}function $f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N()){case Y:return 1;case le:return 4;case ie:case J:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var br=null,fc=null,To=null;function Kf(){if(To)return To;var n,i=fc,a=i.length,c,h="value"in br?br.value:br.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var w=a-n;for(c=1;c<=w&&i[a-c]===h[g-c];c++);return To=h.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function Zf(){return!1}function ni(n){function i(a,c,h,g,w){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=w,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Co:Zf,this.isPropagationStopped=Zf,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=ni(Rs),Aa=re({},Rs,{view:0,detail:0}),wg=ni(Aa),pc,mc,Ca,Ro=re({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(pc=n.screenX-Ca.screenX,mc=n.screenY-Ca.screenY):mc=pc=0,Ca=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),Qf=ni(Ro),bg=re({},Ro,{dataTransfer:0}),Tg=ni(bg),Ag=re({},Aa,{relatedTarget:0}),gc=ni(Ag),Cg=re({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rg=ni(Cg),Ng=re({},Rs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pg=ni(Ng),Dg=re({},Rs,{data:0}),Jf=ni(Dg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ug[n])?!!i[n]:!1}function xc(){return Og}var Fg=re({},Aa,{key:function(n){if(n.key){var i=Lg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ig[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kg=ni(Fg),Bg=re({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=ni(Bg),zg=re({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),jg=ni(zg),Vg=re({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hg=ni(Vg),Gg=re({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=ni(Gg),Xg=[9,13,27,32],vc=d&&"CompositionEvent"in window,Ra=null;d&&"documentMode"in document&&(Ra=document.documentMode);var qg=d&&"TextEvent"in window&&!Ra,th=d&&(!vc||Ra&&8<Ra&&11>=Ra),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return Xg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function Yg(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function $g(n,i){if(Ns)return n==="compositionend"||!vc&&rh(n,i)?(n=Kf(),To=fc=br=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Kg[n.type]:i==="textarea"}function oh(n,i,a,c){fe(c),i=Io(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Na=null,Pa=null;function Zg(n){bh(n,0)}function No(n){var i=Us(n);if(Ct(i))return n}function Qg(n,i){if(n==="change")return i}var lh=!1;if(d){var _c;if(d){var yc="oninput"in document;if(!yc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),yc=typeof ch.oninput=="function"}_c=yc}else _c=!1;lh=_c&&(!document.documentMode||9<document.documentMode)}function uh(){Na&&(Na.detachEvent("onpropertychange",dh),Pa=Na=null)}function dh(n){if(n.propertyName==="value"&&No(Pa)){var i=[];oh(i,Pa,n,G(n)),Fn(Zg,i)}}function Jg(n,i,a){n==="focusin"?(uh(),Na=i,Pa=a,Na.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function ex(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Pa)}function tx(n,i){if(n==="click")return No(i)}function nx(n,i){if(n==="input"||n==="change")return No(i)}function ix(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:ix;function Da(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!_i(n[h],i[h]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=ze();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ze(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rx(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=hh(a,g);var w=hh(a,c);h&&w&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sx=d&&"documentMode"in document&&11>=document.documentMode,Ps=null,Mc=null,La=null,Ec=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ps==null||Ps!==ze(c)||(c=Ps,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Da(La,c)||(La=c,c=Io(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ds={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},wc={},xh={};d&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ds.animationend.animation,delete Ds.animationiteration.animation,delete Ds.animationstart.animation),"TransitionEvent"in window||delete Ds.transitionend.transition);function Do(n){if(wc[n])return wc[n];if(!Ds[n])return n;var i=Ds[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return wc[n]=i[a];return n}var vh=Do("animationend"),_h=Do("animationiteration"),yh=Do("animationstart"),Sh=Do("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(n,i){Mh.set(n,i),l(i,[n])}for(var bc=0;bc<Eh.length;bc++){var Tc=Eh[bc],ax=Tc.toLowerCase(),ox=Tc[0].toUpperCase()+Tc.slice(1);Tr(ax,"on"+ox)}Tr(vh,"onAnimationEnd"),Tr(_h,"onAnimationIteration"),Tr(yh,"onAnimationStart"),Tr("dblclick","onDoubleClick"),Tr("focusin","onFocus"),Tr("focusout","onBlur"),Tr(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function wh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Qr(c,i,void 0,n),n.currentTarget=null}function bh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var w=c.length-1;0<=w;w--){var F=c[w],H=F.instance,ce=F.currentTarget;if(F=F.listener,H!==g&&h.isPropagationStopped())break e;wh(h,F,ce),g=H}else for(w=0;w<c.length;w++){if(F=c[w],H=F.instance,ce=F.currentTarget,F=F.listener,H!==g&&h.isPropagationStopped())break e;wh(h,F,ce),g=H}}}if(Zi)throw n=kn,Zi=!1,kn=null,n}function Kt(n,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[Lo]){n[Lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(lx.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,Ac("selectionchange",!1,i))}}function Th(n,i,a,c){switch($f(i)){case 1:var h=Mg;break;case 4:h=Eg;break;default:h=uc}a=h.bind(null,i,a,n),h=void 0,!Ki||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Cc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var F=c.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===h||H.nodeType===8&&H.parentNode===h))return;w=w.return}for(;F!==null;){if(w=ts(F),w===null)return;if(H=w.tag,H===5||H===6){c=g=w;continue e}F=F.parentNode}}c=c.return}Fn(function(){var ce=g,Me=G(a),we=[];e:{var _e=Mh.get(n);if(_e!==void 0){var qe=hc,Je=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":qe=kg;break;case"focusin":Je="focus",qe=gc;break;case"focusout":Je="blur",qe=gc;break;case"beforeblur":case"afterblur":qe=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=jg;break;case vh:case _h:case yh:qe=Rg;break;case Sh:qe=Hg;break;case"scroll":qe=wg;break;case"wheel":qe=Wg;break;case"copy":case"cut":case"paste":qe=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=eh}var nt=(i&4)!==0,sn=!nt&&n==="scroll",ee=nt?_e!==null?_e+"Capture":null:_e;nt=[];for(var X=ce,te;X!==null;){te=X;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,ee!==null&&(Re=pn(X,ee),Re!=null&&nt.push(Oa(X,Re,te)))),sn)break;X=X.return}0<nt.length&&(_e=new qe(_e,Je,null,a,Me),we.push({event:_e,listeners:nt}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",_e&&a!==mt&&(Je=a.relatedTarget||a.fromElement)&&(ts(Je)||Je[Ji]))break e;if((qe||_e)&&(_e=Me.window===Me?Me:(_e=Me.ownerDocument)?_e.defaultView||_e.parentWindow:window,qe?(Je=a.relatedTarget||a.toElement,qe=ce,Je=Je?ts(Je):null,Je!==null&&(sn=Bn(Je),Je!==sn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(qe=null,Je=ce),qe!==Je)){if(nt=Qf,Re="onMouseLeave",ee="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(nt=eh,Re="onPointerLeave",ee="onPointerEnter",X="pointer"),sn=qe==null?_e:Us(qe),te=Je==null?_e:Us(Je),_e=new nt(Re,X+"leave",qe,a,Me),_e.target=sn,_e.relatedTarget=te,Re=null,ts(Me)===ce&&(nt=new nt(ee,X+"enter",Je,a,Me),nt.target=te,nt.relatedTarget=sn,Re=nt),sn=Re,qe&&Je)t:{for(nt=qe,ee=Je,X=0,te=nt;te;te=Ls(te))X++;for(te=0,Re=ee;Re;Re=Ls(Re))te++;for(;0<X-te;)nt=Ls(nt),X--;for(;0<te-X;)ee=Ls(ee),te--;for(;X--;){if(nt===ee||ee!==null&&nt===ee.alternate)break t;nt=Ls(nt),ee=Ls(ee)}nt=null}else nt=null;qe!==null&&Ah(we,_e,qe,nt,!1),Je!==null&&sn!==null&&Ah(we,sn,Je,nt,!0)}}e:{if(_e=ce?Us(ce):window,qe=_e.nodeName&&_e.nodeName.toLowerCase(),qe==="select"||qe==="input"&&_e.type==="file")var it=Qg;else if(ah(_e))if(lh)it=nx;else{it=ex;var dt=Jg}else(qe=_e.nodeName)&&qe.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(it=tx);if(it&&(it=it(n,ce))){oh(we,it,a,Me);break e}dt&&dt(n,_e,ce),n==="focusout"&&(dt=_e._wrapperState)&&dt.controlled&&_e.type==="number"&&jt(_e,"number",_e.value)}switch(dt=ce?Us(ce):window,n){case"focusin":(ah(dt)||dt.contentEditable==="true")&&(Ps=dt,Mc=ce,La=null);break;case"focusout":La=Mc=Ps=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,gh(we,a,Me);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":gh(we,a,Me)}var ft;if(vc)e:{switch(n){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ns?rh(n,a)&&(vt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(th&&a.locale!=="ko"&&(Ns||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ns&&(ft=Kf()):(br=Me,fc="value"in br?br.value:br.textContent,Ns=!0)),dt=Io(ce,vt),0<dt.length&&(vt=new Jf(vt,n,null,a,Me),we.push({event:vt,listeners:dt}),ft?vt.data=ft:(ft=sh(a),ft!==null&&(vt.data=ft)))),(ft=qg?Yg(n,a):$g(n,a))&&(ce=Io(ce,"onBeforeInput"),0<ce.length&&(Me=new Jf("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ce}),Me.data=ft))}bh(we,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=pn(n,a),g!=null&&c.unshift(Oa(n,g,h)),g=pn(n,i),g!=null&&c.push(Oa(n,g,h))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,h){for(var g=i._reactName,w=[];a!==null&&a!==c;){var F=a,H=F.alternate,ce=F.stateNode;if(H!==null&&H===c)break;F.tag===5&&ce!==null&&(F=ce,h?(H=pn(a,g),H!=null&&w.unshift(Oa(a,H,F))):h||(H=pn(a,g),H!=null&&w.push(Oa(a,H,F)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(cx,`
`).replace(ux,"")}function Uo(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Oo(){}var Rc=null,Nc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(hx)}:Dc;function hx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Ta(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Ta(i)}function Ar(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Is,Fa="__reactProps$"+Is,Ji="__reactContainer$"+Is,Ic="__reactEvents$"+Is,px="__reactListeners$"+Is,mx="__reactHandles$"+Is;function ts(n){var i=n[Oi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ji]||a[Oi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Oi])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Oi]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[Fa]||null}var Uc=[],Os=-1;function Cr(n){return{current:n}}function Zt(n){0>Os||(n.current=Uc[Os],Uc[Os]=null,Os--)}function qt(n,i){Os++,Uc[Os]=n.current,n.current=i}var Rr={},Cn=Cr(Rr),qn=Cr(!1),ns=Rr;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Yn(n){return n=n.childContextTypes,n!=null}function ko(){Zt(qn),Zt(Cn)}function Ph(n,i,a){if(Cn.current!==Rr)throw Error(t(168));qt(Cn,i),qt(qn,a)}function Dh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,pe(n)||"Unknown",h));return re({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,ns=Cn.current,qt(Cn,n),qt(qn,qn.current),!0}function Lh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Dh(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,Zt(qn),Zt(Cn),qt(Cn,n)):Zt(qn),qt(qn,a)}var er=null,zo=!1,Oc=!1;function Ih(n){er===null?er=[n]:er.push(n)}function gx(n){zo=!0,Ih(n)}function Nr(){if(!Oc&&er!==null){Oc=!0;var n=0,i=et;try{var a=er;for(et=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}er=null,zo=!1}catch(h){throw er!==null&&(er=er.slice(n+1)),ci(Y,Nr),h}finally{et=i,Oc=!1}}return null}var ks=[],Bs=0,jo=null,Vo=0,ui=[],di=0,is=null,tr=1,nr="";function rs(n,i){ks[Bs++]=Vo,ks[Bs++]=jo,jo=n,Vo=i}function Uh(n,i,a){ui[di++]=tr,ui[di++]=nr,ui[di++]=is,is=n;var c=tr;n=nr;var h=32-Xe(c)-1;c&=~(1<<h),a+=1;var g=32-Xe(i)+h;if(30<g){var w=h-h%5;g=(c&(1<<w)-1).toString(32),c>>=w,h-=w,tr=1<<32-Xe(i)+h|a<<h|c,nr=g+n}else tr=1<<g|a<<h|c,nr=n}function Fc(n){n.return!==null&&(rs(n,1),Uh(n,1,0))}function kc(n){for(;n===jo;)jo=ks[--Bs],ks[Bs]=null,Vo=ks[--Bs],ks[Bs]=null;for(;n===is;)is=ui[--di],ui[di]=null,nr=ui[--di],ui[di]=null,tr=ui[--di],ui[di]=null}var ii=null,ri=null,Qt=!1,yi=null;function Oh(n,i){var a=mi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Fh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ii=n,ri=Ar(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ii=n,ri=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=mi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ii=n,ri=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Qt){var i=ri;if(i){var a=i;if(!Fh(n,i)){if(Bc(n))throw Error(t(418));i=Ar(a.nextSibling);var c=ii;i&&Fh(n,i)?Oh(c,a):(n.flags=n.flags&-4097|2,Qt=!1,ii=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ii=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Ho(n){if(n!==ii)return!1;if(!Qt)return kh(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=ri)){if(Bc(n))throw Bh(),Error(t(418));for(;i;)Oh(n,i),i=Ar(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ri=Ar(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ri=null}}else ri=ii?Ar(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=ri;n;)n=Ar(n.nextSibling)}function zs(){ri=ii=null,Qt=!1}function jc(n){yi===null?yi=[n]:yi.push(n)}var xx=C.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(w){var F=h.refs;w===null?delete F[g]:F[g]=w},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Go(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function jh(n){function i(ee,X){if(n){var te=ee.deletions;te===null?(ee.deletions=[X],ee.flags|=16):te.push(X)}}function a(ee,X){if(!n)return null;for(;X!==null;)i(ee,X),X=X.sibling;return null}function c(ee,X){for(ee=new Map;X!==null;)X.key!==null?ee.set(X.key,X):ee.set(X.index,X),X=X.sibling;return ee}function h(ee,X){return ee=kr(ee,X),ee.index=0,ee.sibling=null,ee}function g(ee,X,te){return ee.index=te,n?(te=ee.alternate,te!==null?(te=te.index,te<X?(ee.flags|=2,X):te):(ee.flags|=2,X)):(ee.flags|=1048576,X)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,X,te,Re){return X===null||X.tag!==6?(X=Du(te,ee.mode,Re),X.return=ee,X):(X=h(X,te),X.return=ee,X)}function H(ee,X,te,Re){var it=te.type;return it===O?Me(ee,X,te.props.children,Re,te.key):X!==null&&(X.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ae&&zh(it)===X.type)?(Re=h(X,te.props),Re.ref=Ba(ee,X,te),Re.return=ee,Re):(Re=pl(te.type,te.key,te.props,null,ee.mode,Re),Re.ref=Ba(ee,X,te),Re.return=ee,Re)}function ce(ee,X,te,Re){return X===null||X.tag!==4||X.stateNode.containerInfo!==te.containerInfo||X.stateNode.implementation!==te.implementation?(X=Lu(te,ee.mode,Re),X.return=ee,X):(X=h(X,te.children||[]),X.return=ee,X)}function Me(ee,X,te,Re,it){return X===null||X.tag!==7?(X=fs(te,ee.mode,Re,it),X.return=ee,X):(X=h(X,te),X.return=ee,X)}function we(ee,X,te){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Du(""+X,ee.mode,te),X.return=ee,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return te=pl(X.type,X.key,X.props,null,ee.mode,te),te.ref=Ba(ee,null,X),te.return=ee,te;case L:return X=Lu(X,ee.mode,te),X.return=ee,X;case ae:var Re=X._init;return we(ee,Re(X._payload),te)}if(_t(X)||me(X))return X=fs(X,ee.mode,te,null),X.return=ee,X;Go(ee,X)}return null}function _e(ee,X,te,Re){var it=X!==null?X.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return it!==null?null:F(ee,X,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===it?H(ee,X,te,Re):null;case L:return te.key===it?ce(ee,X,te,Re):null;case ae:return it=te._init,_e(ee,X,it(te._payload),Re)}if(_t(te)||me(te))return it!==null?null:Me(ee,X,te,Re,null);Go(ee,te)}return null}function qe(ee,X,te,Re,it){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ee=ee.get(te)||null,F(X,ee,""+Re,it);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case U:return ee=ee.get(Re.key===null?te:Re.key)||null,H(X,ee,Re,it);case L:return ee=ee.get(Re.key===null?te:Re.key)||null,ce(X,ee,Re,it);case ae:var dt=Re._init;return qe(ee,X,te,dt(Re._payload),it)}if(_t(Re)||me(Re))return ee=ee.get(te)||null,Me(X,ee,Re,it,null);Go(X,Re)}return null}function Je(ee,X,te,Re){for(var it=null,dt=null,ft=X,vt=X=0,yn=null;ft!==null&&vt<te.length;vt++){ft.index>vt?(yn=ft,ft=null):yn=ft.sibling;var Ft=_e(ee,ft,te[vt],Re);if(Ft===null){ft===null&&(ft=yn);break}n&&ft&&Ft.alternate===null&&i(ee,ft),X=g(Ft,X,vt),dt===null?it=Ft:dt.sibling=Ft,dt=Ft,ft=yn}if(vt===te.length)return a(ee,ft),Qt&&rs(ee,vt),it;if(ft===null){for(;vt<te.length;vt++)ft=we(ee,te[vt],Re),ft!==null&&(X=g(ft,X,vt),dt===null?it=ft:dt.sibling=ft,dt=ft);return Qt&&rs(ee,vt),it}for(ft=c(ee,ft);vt<te.length;vt++)yn=qe(ft,ee,vt,te[vt],Re),yn!==null&&(n&&yn.alternate!==null&&ft.delete(yn.key===null?vt:yn.key),X=g(yn,X,vt),dt===null?it=yn:dt.sibling=yn,dt=yn);return n&&ft.forEach(function(Br){return i(ee,Br)}),Qt&&rs(ee,vt),it}function nt(ee,X,te,Re){var it=me(te);if(typeof it!="function")throw Error(t(150));if(te=it.call(te),te==null)throw Error(t(151));for(var dt=it=null,ft=X,vt=X=0,yn=null,Ft=te.next();ft!==null&&!Ft.done;vt++,Ft=te.next()){ft.index>vt?(yn=ft,ft=null):yn=ft.sibling;var Br=_e(ee,ft,Ft.value,Re);if(Br===null){ft===null&&(ft=yn);break}n&&ft&&Br.alternate===null&&i(ee,ft),X=g(Br,X,vt),dt===null?it=Br:dt.sibling=Br,dt=Br,ft=yn}if(Ft.done)return a(ee,ft),Qt&&rs(ee,vt),it;if(ft===null){for(;!Ft.done;vt++,Ft=te.next())Ft=we(ee,Ft.value,Re),Ft!==null&&(X=g(Ft,X,vt),dt===null?it=Ft:dt.sibling=Ft,dt=Ft);return Qt&&rs(ee,vt),it}for(ft=c(ee,ft);!Ft.done;vt++,Ft=te.next())Ft=qe(ft,ee,vt,Ft.value,Re),Ft!==null&&(n&&Ft.alternate!==null&&ft.delete(Ft.key===null?vt:Ft.key),X=g(Ft,X,vt),dt===null?it=Ft:dt.sibling=Ft,dt=Ft);return n&&ft.forEach(function(Kx){return i(ee,Kx)}),Qt&&rs(ee,vt),it}function sn(ee,X,te,Re){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var it=te.key,dt=X;dt!==null;){if(dt.key===it){if(it=te.type,it===O){if(dt.tag===7){a(ee,dt.sibling),X=h(dt,te.props.children),X.return=ee,ee=X;break e}}else if(dt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===ae&&zh(it)===dt.type){a(ee,dt.sibling),X=h(dt,te.props),X.ref=Ba(ee,dt,te),X.return=ee,ee=X;break e}a(ee,dt);break}else i(ee,dt);dt=dt.sibling}te.type===O?(X=fs(te.props.children,ee.mode,Re,te.key),X.return=ee,ee=X):(Re=pl(te.type,te.key,te.props,null,ee.mode,Re),Re.ref=Ba(ee,X,te),Re.return=ee,ee=Re)}return w(ee);case L:e:{for(dt=te.key;X!==null;){if(X.key===dt)if(X.tag===4&&X.stateNode.containerInfo===te.containerInfo&&X.stateNode.implementation===te.implementation){a(ee,X.sibling),X=h(X,te.children||[]),X.return=ee,ee=X;break e}else{a(ee,X);break}else i(ee,X);X=X.sibling}X=Lu(te,ee.mode,Re),X.return=ee,ee=X}return w(ee);case ae:return dt=te._init,sn(ee,X,dt(te._payload),Re)}if(_t(te))return Je(ee,X,te,Re);if(me(te))return nt(ee,X,te,Re);Go(ee,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,X!==null&&X.tag===6?(a(ee,X.sibling),X=h(X,te),X.return=ee,ee=X):(a(ee,X),X=Du(te,ee.mode,Re),X.return=ee,ee=X),w(ee)):a(ee,X)}return sn}var js=jh(!0),Vh=jh(!1),Wo=Cr(null),Xo=null,Vs=null,Vc=null;function Hc(){Vc=Vs=Xo=null}function Gc(n){var i=Wo.current;Zt(Wo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Hs(n,i){Xo=n,Vc=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&($n=!0),n.firstContext=null)}function fi(n){var i=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:i,next:null},Vs===null){if(Xo===null)throw Error(t(308));Vs=n,Xo.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return i}var ss=null;function Xc(n){ss===null?ss=[n]:ss.push(n)}function Hh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Xc(i)):(a.next=h.next,h.next=a),i.interleaved=a,ir(n,c)}function ir(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Pr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Dr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(It&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,ir(n,a)}return h=c.interleaved,h===null?(i.next=i,Xc(c)):(i.next=h.next,h.next=i),c.interleaved=i,ir(n,a)}function qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Le(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=w:g=g.next=w,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yo(n,i,a,c){var h=n.updateQueue;Pr=!1;var g=h.firstBaseUpdate,w=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var H=F,ce=H.next;H.next=null,w===null?g=ce:w.next=ce,w=H;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==w&&(F===null?Me.firstBaseUpdate=ce:F.next=ce,Me.lastBaseUpdate=H))}if(g!==null){var we=h.baseState;w=0,Me=ce=H=null,F=g;do{var _e=F.lane,qe=F.eventTime;if((c&_e)===_e){Me!==null&&(Me=Me.next={eventTime:qe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Je=n,nt=F;switch(_e=i,qe=a,nt.tag){case 1:if(Je=nt.payload,typeof Je=="function"){we=Je.call(qe,we,_e);break e}we=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=nt.payload,_e=typeof Je=="function"?Je.call(qe,we,_e):Je,_e==null)break e;we=re({},we,_e);break e;case 2:Pr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,_e=h.effects,_e===null?h.effects=[F]:_e.push(F))}else qe={eventTime:qe,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(ce=Me=qe,H=we):Me=Me.next=qe,w|=_e;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(Me===null&&(H=we),h.baseState=H,h.firstBaseUpdate=ce,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do w|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);ls|=w,n.lanes=w,n.memoizedState=we}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var za={},Fi=Cr(za),ja=Cr(za),Va=Cr(za);function as(n){if(n===za)throw Error(t(174));return n}function Yc(n,i){switch(qt(Va,i),qt(ja,n),qt(Fi,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}Zt(Fi),qt(Fi,i)}function Gs(){Zt(Fi),Zt(ja),Zt(Va)}function qh(n){as(Va.current);var i=as(Fi.current),a=ge(i,n.type);i!==a&&(qt(ja,n),qt(Fi,a))}function $c(n){ja.current===n&&(Zt(Fi),Zt(ja))}var Jt=Cr(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Ko=C.ReactCurrentDispatcher,Qc=C.ReactCurrentBatchConfig,os=0,en=null,cn=null,vn=null,Zo=!1,Ha=!1,Ga=0,vx=0;function Rn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_i(n[a],i[a]))return!1;return!0}function eu(n,i,a,c,h,g){if(os=g,en=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=n===null||n.memoizedState===null?Mx:Ex,n=a(c,h),Ha){g=0;do{if(Ha=!1,Ga=0,25<=g)throw Error(t(301));g+=1,vn=cn=null,i.updateQueue=null,Ko.current=wx,n=a(c,h)}while(Ha)}if(Ko.current=el,i=cn!==null&&cn.next!==null,os=0,vn=cn=en=null,Zo=!1,i)throw Error(t(300));return n}function tu(){var n=Ga!==0;return Ga=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?en.memoizedState=vn=n:vn=vn.next=n,vn}function hi(){if(cn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=cn.next;var i=vn===null?en.memoizedState:vn.next;if(i!==null)vn=i,cn=n;else{if(n===null)throw Error(t(310));cn=n,n={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},vn===null?en.memoizedState=vn=n:vn=vn.next=n}return vn}function Wa(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=cn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var w=h.next;h.next=g.next,g.next=w}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var F=w=null,H=null,ce=g;do{var Me=ce.lane;if((os&Me)===Me)H!==null&&(H=H.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),c=ce.hasEagerState?ce.eagerState:n(c,ce.action);else{var we={lane:Me,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};H===null?(F=H=we,w=c):H=H.next=we,en.lanes|=Me,ls|=Me}ce=ce.next}while(ce!==null&&ce!==g);H===null?w=c:H.next=F,_i(c,i.memoizedState)||($n=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,en.lanes|=g,ls|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var w=h=h.next;do g=n(g,w.action),w=w.next;while(w!==h);_i(g,i.memoizedState)||($n=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Yh(){}function $h(n,i){var a=en,c=hi(),h=i(),g=!_i(c.memoizedState,h);if(g&&(c.memoizedState=h,$n=!0),c=c.queue,ru(Qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,Zh.bind(null,a,c,h,i),void 0,null),_n===null)throw Error(t(349));(os&30)!==0||Kh(a,i,h)}return h}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Jh(i)&&ep(n)}function Qh(n,i,a){return a(function(){Jh(i)&&ep(n)})}function Jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_i(n,a)}catch{return!0}}function ep(n){var i=ir(n,1);i!==null&&wi(i,n,1,-1)}function tp(n){var i=ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Sx.bind(null,en,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=en.updateQueue,i===null?(i={lastEffect:null,stores:null},en.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return hi().memoizedState}function Qo(n,i,a,c){var h=ki();en.flags|=n,h.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var h=hi();c=c===void 0?null:c;var g=void 0;if(cn!==null){var w=cn.memoizedState;if(g=w.destroy,c!==null&&Jc(c,w.deps)){h.memoizedState=Xa(i,a,g,c);return}}en.flags|=n,h.memoizedState=Xa(1|i,a,g,c)}function ip(n,i){return Qo(8390656,8,n,i)}function ru(n,i){return Jo(2048,8,n,i)}function rp(n,i){return Jo(4,2,n,i)}function sp(n,i){return Jo(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,ap.bind(null,i,n),a)}function su(){}function lp(n,i){var a=hi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=hi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=a):(_i(a,i)||(a=tt(),en.lanes|=a,ls|=a,n.baseState=!0),i)}function _x(n,i){var a=et;et=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{et=a,Qc.transition=c}}function dp(){return hi().memoizedState}function yx(n,i,a){var c=Or(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Hh(n,i,a,c),a!==null){var h=Vn();wi(a,n,c,h),pp(a,i,c)}}function Sx(n,i,a){var c=Or(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var w=i.lastRenderedState,F=g(w,a);if(h.hasEagerState=!0,h.eagerState=F,_i(F,w)){var H=i.interleaved;H===null?(h.next=h,Xc(i)):(h.next=H.next,H.next=h),i.interleaved=h;return}}catch{}finally{}a=Hh(n,i,h,c),a!==null&&(h=Vn(),wi(a,n,c,h),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===en||i!==null&&i===en}function hp(n,i){Ha=Zo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Le(n,a)}}var el={readContext:fi,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},Mx={readContext:fi,useCallback:function(n,i){return ki().memoizedState=[n,i===void 0?null:i],n},useContext:fi,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var a=ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yx.bind(null,en,n),[c.memoizedState,n]},useRef:function(n){var i=ki();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:su,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=_x.bind(null,n[1]),ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=en,h=ki();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(os&30)!==0||Kh(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,ip(Qh.bind(null,c,g,n),[n]),c.flags|=2048,Xa(9,Zh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=ki(),i=_n.identifierPrefix;if(Qt){var a=nr,c=tr;a=(c&~(1<<32-Xe(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=vx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ex={readContext:fi,useCallback:lp,useContext:fi,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:nu,useRef:np,useState:function(){return nu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=hi();return up(i,cn.memoizedState,n)},useTransition:function(){var n=nu(Wa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1},wx={readContext:fi,useCallback:lp,useContext:fi,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=hi();return cn===null?i.memoizedState=n:up(i,cn.memoizedState,n)},useTransition:function(){var n=iu(Wa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1};function Si(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:re({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?Bn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Vn(),h=Or(n),g=rr(c,h);g.payload=i,a!=null&&(g.callback=a),i=Dr(n,g,h),i!==null&&(wi(i,n,h,c),qo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Vn(),h=Or(n),g=rr(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Dr(n,g,h),i!==null&&(wi(i,n,h,c),qo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Vn(),c=Or(n),h=rr(a,c);h.tag=2,i!=null&&(h.callback=i),i=Dr(n,h,c),i!==null&&(wi(i,n,c,a),qo(i,n,c))}};function mp(n,i,a,c,h,g,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,w):i.prototype&&i.prototype.isPureReactComponent?!Da(a,c)||!Da(h,g):!0}function gp(n,i,a){var c=!1,h=Rr,g=i.contextType;return typeof g=="object"&&g!==null?g=fi(g):(h=Yn(i)?ns:Cn.current,c=i.contextTypes,g=(c=c!=null)?Fs(n,h):Rr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},qc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=fi(g):(g=Yn(i)?ns:Cn.current,h.context=Fs(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(au(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&tl.enqueueReplaceState(h,h.state,null),Yo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ws(n,i){try{var a="",c=i;do a+=ve(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,wu=c),cu(n,i)},a}function _p(n,i,a){a=rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){cu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof c!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new bx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Bx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=rr(-1,1),i.tag=2,Dr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Tx=C.ReactCurrentOwner,$n=!1;function jn(n,i,a,c){i.child=n===null?Vh(i,null,a,c):js(i,n.child,a,c)}function Ep(n,i,a,c,h){a=a.render;var g=i.ref;return Hs(i,h),c=eu(n,i,a,c,g,h),a=tu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,sr(n,i,h)):(Qt&&a&&Fc(i),i.flags|=1,jn(n,i,c,h),i.child)}function wp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Pu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,bp(n,i,g,c,h)):(n=pl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var w=g.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(w,c)&&n.ref===i.ref)return sr(n,i,h)}return i.flags|=1,n=kr(g,c),n.ref=i.ref,n.return=i,i.child=n}function bp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Da(g,c)&&n.ref===i.ref)if($n=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&($n=!0);else return i.lanes=n.lanes,sr(n,i,h)}return uu(n,i,a,c,h)}function Tp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(qs,si),si|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,qt(qs,si),si|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,qt(qs,si),si|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,qt(qs,si),si|=c;return jn(n,i,h,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,c,h){var g=Yn(a)?ns:Cn.current;return g=Fs(i,g),Hs(i,h),a=eu(n,i,a,c,g,h),c=tu(),n!==null&&!$n?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,sr(n,i,h)):(Qt&&c&&Fc(i),i.flags|=1,jn(n,i,a,h),i.child)}function Cp(n,i,a,c,h){if(Yn(a)){var g=!0;Bo(i)}else g=!1;if(Hs(i,h),i.stateNode===null)il(n,i),gp(i,a,c),ou(i,a,c,h),c=!0;else if(n===null){var w=i.stateNode,F=i.memoizedProps;w.props=F;var H=w.context,ce=a.contextType;typeof ce=="object"&&ce!==null?ce=fi(ce):(ce=Yn(a)?ns:Cn.current,ce=Fs(i,ce));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof w.getSnapshotBeforeUpdate=="function";we||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==c||H!==ce)&&xp(i,w,c,ce),Pr=!1;var _e=i.memoizedState;w.state=_e,Yo(i,c,w,h),H=i.memoizedState,F!==c||_e!==H||qn.current||Pr?(typeof Me=="function"&&(au(i,a,Me,c),H=i.memoizedState),(F=Pr||mp(i,a,F,c,_e,H,ce))?(we||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=ce,c=F):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,Gh(n,i),F=i.memoizedProps,ce=i.type===i.elementType?F:Si(i.type,F),w.props=ce,we=i.pendingProps,_e=w.context,H=a.contextType,typeof H=="object"&&H!==null?H=fi(H):(H=Yn(a)?ns:Cn.current,H=Fs(i,H));var qe=a.getDerivedStateFromProps;(Me=typeof qe=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(F!==we||_e!==H)&&xp(i,w,c,H),Pr=!1,_e=i.memoizedState,w.state=_e,Yo(i,c,w,h);var Je=i.memoizedState;F!==we||_e!==Je||qn.current||Pr?(typeof qe=="function"&&(au(i,a,qe,c),Je=i.memoizedState),(ce=Pr||mp(i,a,ce,c,_e,Je,H)||!1)?(Me||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Je,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Je,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Je),w.props=c,w.state=Je,w.context=H,c=ce):(typeof w.componentDidUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return du(n,i,a,c,g,h)}function du(n,i,a,c,h,g){Ap(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return h&&Lh(i,a,!1),sr(n,i,g);c=i.stateNode,Tx.current=i;var F=w&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=js(i,n.child,null,g),i.child=js(i,null,F,g)):jn(n,i,F,g),i.memoizedState=c.state,h&&Lh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),Yc(n,i.containerInfo)}function Np(n,i,a,c,h){return zs(),jc(h),i.flags|=256,jn(n,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,h=Jt.current,g=!1,w=(i.flags&128)!==0,F;if((F=w)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),qt(Jt,h&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,g?(c=i.mode,g=i.child,w={mode:"hidden",children:w},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=w):g=ml(w,c,0,null),n=fs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=hu(a),i.memoizedState=fu,n):pu(i,w));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return Ax(n,i,w,c,F,h,a);if(g){g=c.fallback,w=i.mode,h=n.child,F=h.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=kr(h,H),c.subtreeFlags=h.subtreeFlags&14680064),F!==null?g=kr(F,g):(g=fs(g,w,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,w=n.child.memoizedState,w=w===null?hu(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},g.memoizedState=w,g.childLanes=n.childLanes&~a,i.memoizedState=fu,c}return g=n.child,n=g.sibling,c=kr(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function pu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&jc(c),js(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ax(n,i,a,c,h,g,w){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(t(422))),nl(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=ml({mode:"visible",children:c.children},h,0,null),g=fs(g,h,w,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&js(i,n.child,null,w),i.child.memoizedState=hu(w),i.memoizedState=fu,g);if((i.mode&1)===0)return nl(n,i,w,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var F=c.dgst;return c=F,g=Error(t(419)),c=lu(g,c,void 0),nl(n,i,w,c)}if(F=(w&n.childLanes)!==0,$n||F){if(c=_n,c!==null){switch(w&-w){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|w))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,ir(n,h),wi(c,n,h,-1))}return Nu(),c=lu(Error(t(421))),nl(n,i,w,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=zx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ri=Ar(h.nextSibling),ii=i,Qt=!0,yi=null,n!==null&&(ui[di++]=tr,ui[di++]=nr,ui[di++]=is,tr=n.id,nr=n.overflow,is=i),i=pu(i,c.children),i.flags|=4096,i)}function Dp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function mu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Lp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(jn(n,i,c.children,a),c=Jt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,i);else if(n.tag===19)Dp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(qt(Jt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),mu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&$o(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}mu(i,!0,a,null,g);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=kr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=kr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cx(n,i,a){switch(i.tag){case 3:Rp(i),zs();break;case 5:qh(i);break;case 1:Yn(i.type)&&Bo(i);break;case 4:Yc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;qt(Wo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(qt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(qt(Jt,Jt.current&1),n=sr(n,i,a),n!==null?n.sibling:null);qt(Jt,Jt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),qt(Jt,Jt.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return sr(n,i,a)}var Ip,gu,Up,Op;Ip=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Up=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,as(Fi.current);var g=null;switch(a){case"input":h=ht(n,h),c=ht(n,c),g=[];break;case"select":h=re({},h,{value:void 0}),c=re({},c,{value:void 0}),g=[];break;case"textarea":h=Ye(n,h),c=Ye(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}Fe(a,c);var w;a=null;for(ce in h)if(!c.hasOwnProperty(ce)&&h.hasOwnProperty(ce)&&h[ce]!=null)if(ce==="style"){var F=h[ce];for(w in F)F.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(o.hasOwnProperty(ce)?g||(g=[]):(g=g||[]).push(ce,null));for(ce in c){var H=c[ce];if(F=h!=null?h[ce]:void 0,c.hasOwnProperty(ce)&&H!==F&&(H!=null||F!=null))if(ce==="style")if(F){for(w in F)!F.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in H)H.hasOwnProperty(w)&&F[w]!==H[w]&&(a||(a={}),a[w]=H[w])}else a||(g||(g=[]),g.push(ce,a)),a=H;else ce==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,F=F?F.__html:void 0,H!=null&&F!==H&&(g=g||[]).push(ce,H)):ce==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(ce,""+H):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(o.hasOwnProperty(ce)?(H!=null&&ce==="onScroll"&&Kt("scroll",n),g||F===H||(g=[])):(g=g||[]).push(ce,H))}a&&(g=g||[]).push("style",a);var ce=g;(i.updateQueue=ce)&&(i.flags|=4)}},Op=function(n,i,a,c){a!==c&&(i.flags|=4)};function qa(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Nn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Rx(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nn(i),null;case 1:return Yn(i.type)&&ko(),Nn(i),null;case 3:return c=i.stateNode,Gs(),Zt(qn),Zt(Cn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ho(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&(Au(yi),yi=null))),gu(n,i),Nn(i),null;case 5:$c(i);var h=as(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Nn(i),null}if(n=as(Fi.current),Ho(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Oi]=i,c[Fa]=g,n=(i.mode&1)!==0,a){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)Kt(Ia[h],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":Pt(c,g),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Kt("invalid",c);break;case"textarea":I(c,g),Kt("invalid",c)}Fe(a,g),h=null;for(var w in g)if(g.hasOwnProperty(w)){var F=g[w];w==="children"?typeof F=="string"?c.textContent!==F&&(g.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),h=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),h=["children",""+F]):o.hasOwnProperty(w)&&F!=null&&w==="onScroll"&&Kt("scroll",c)}switch(a){case"input":ke(c),j(c,g,!0);break;case"textarea":ke(c),W(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Oo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(a,{is:c.is}):(n=w.createElement(a),a==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,a),n[Oi]=i,n[Fa]=c,Ip(n,i,!1,!1),i.stateNode=n;e:{switch(w=Pe(a,c),a){case"dialog":Kt("cancel",n),Kt("close",n),h=c;break;case"iframe":case"object":case"embed":Kt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)Kt(Ia[h],n);h=c;break;case"source":Kt("error",n),h=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),h=c;break;case"details":Kt("toggle",n),h=c;break;case"input":Pt(n,c),h=ht(n,c),Kt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=re({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":I(n,c),h=Ye(n,c),Kt("invalid",n);break;default:h=c}Fe(a,h),F=h;for(g in F)if(F.hasOwnProperty(g)){var H=F[g];g==="style"?Ie(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&Ke(n,H)):g==="children"?typeof H=="string"?(a!=="textarea"||H!=="")&&Ae(n,H):typeof H=="number"&&Ae(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Kt("scroll",n):H!=null&&D(n,g,H,w))}switch(a){case"input":ke(n),j(n,c,!1);break;case"textarea":ke(n),W(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Tt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Tt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Nn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(Va.current),as(Fi.current),Ho(i)){if(c=i.stateNode,a=i.memoizedProps,c[Oi]=i,(g=c.nodeValue!==a)&&(n=ii,n!==null))switch(n.tag){case 3:Uo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Oi]=i,i.stateNode=c}return Nn(i),null;case 13:if(Zt(Jt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ri!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),zs(),i.flags|=98560,g=!1;else if(g=Ho(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Oi]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Nn(i),g=!1}else yi!==null&&(Au(yi),yi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?un===0&&(un=3):Nu())),i.updateQueue!==null&&(i.flags|=4),Nn(i),null);case 4:return Gs(),gu(n,i),n===null&&Ua(i.stateNode.containerInfo),Nn(i),null;case 10:return Gc(i.type._context),Nn(i),null;case 17:return Yn(i.type)&&ko(),Nn(i),null;case 19:if(Zt(Jt),g=i.memoizedState,g===null)return Nn(i),null;if(c=(i.flags&128)!==0,w=g.rendering,w===null)if(c)qa(g,!1);else{if(un!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=$o(n),w!==null){for(i.flags|=128,qa(g,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,w=g.alternate,w===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=w.childLanes,g.lanes=w.lanes,g.child=w.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=w.memoizedProps,g.memoizedState=w.memoizedState,g.updateQueue=w.updateQueue,g.type=w.type,n=w.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return qt(Jt,Jt.current&1|2),i.child}n=n.sibling}g.tail!==null&&Vt()>Ys&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=$o(w),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!w.alternate&&!Qt)return Nn(i),null}else 2*Vt()-g.renderingStartTime>Ys&&a!==1073741824&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304);g.isBackwards?(w.sibling=i.child,i.child=w):(a=g.last,a!==null?a.sibling=w:i.child=w,g.last=w)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Vt(),i.sibling=null,a=Jt.current,qt(Jt,c?a&1|2:a&1),i):(Nn(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(si&1073741824)!==0&&(Nn(i),i.subtreeFlags&6&&(i.flags|=8192)):Nn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Nx(n,i){switch(kc(i),i.tag){case 1:return Yn(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),Zt(qn),Zt(Cn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(Zt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(Jt),null;case 4:return Gs(),null;case 10:return Gc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var rl=!1,Pn=!1,Px=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Xs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nn(n,i,c)}else a.current=null}function xu(n,i,a){try{a()}catch(c){nn(n,i,c)}}var Fp=!1;function Dx(n,i){if(Rc=wo,n=mh(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var w=0,F=-1,H=-1,ce=0,Me=0,we=n,_e=null;t:for(;;){for(var qe;we!==a||h!==0&&we.nodeType!==3||(F=w+h),we!==g||c!==0&&we.nodeType!==3||(H=w+c),we.nodeType===3&&(w+=we.nodeValue.length),(qe=we.firstChild)!==null;)_e=we,we=qe;for(;;){if(we===n)break t;if(_e===a&&++ce===h&&(F=w),_e===g&&++Me===c&&(H=w),(qe=we.nextSibling)!==null)break;we=_e,_e=we.parentNode}we=qe}a=F===-1||H===-1?null:{start:F,end:H}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:n,selectionRange:a},wo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var Je=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var nt=Je.memoizedProps,sn=Je.memoizedState,ee=i.stateNode,X=ee.getSnapshotBeforeUpdate(i.elementType===i.type?nt:Si(i.type,nt),sn);ee.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){nn(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return Je=Fp,Fp=!1,Je}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&xu(i,a,g)}h=h.next}while(h!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Oi],delete i[Fa],delete i[Ic],delete i[px],delete i[mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}var wn=null,Mi=!1;function Lr(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ve,a)}catch{}switch(a.tag){case 5:Pn||Xs(a,i);case 6:var c=wn,h=Mi;wn=null,Lr(n,i,a),wn=c,Mi=h,wn!==null&&(Mi?(n=wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):wn.removeChild(a.stateNode));break;case 18:wn!==null&&(Mi?(n=wn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),Ta(n)):Lc(wn,a.stateNode));break;case 4:c=wn,h=Mi,wn=a.stateNode.containerInfo,Mi=!0,Lr(n,i,a),wn=c,Mi=h;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,w=g.destroy;g=g.tag,w!==void 0&&((g&2)!==0||(g&4)!==0)&&xu(a,i,w),h=h.next}while(h!==c)}Lr(n,i,a);break;case 1:if(!Pn&&(Xs(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){nn(a,i,F)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(Pn=(c=Pn)||a.memoizedState!==null,Lr(n,i,a),Pn=c):Lr(n,i,a);break;default:Lr(n,i,a)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Px),i.forEach(function(c){var h=jx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Ei(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,w=i,F=w;e:for(;F!==null;){switch(F.tag){case 5:wn=F.stateNode,Mi=!1;break e;case 3:wn=F.stateNode.containerInfo,Mi=!0;break e;case 4:wn=F.stateNode.containerInfo,Mi=!0;break e}F=F.return}if(wn===null)throw Error(t(160));jp(g,w,h),wn=null,Mi=!1;var H=h.alternate;H!==null&&(H.return=null),h.return=null}catch(ce){nn(h,i,ce)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Hp(i,n),i=i.sibling}function Hp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(i,n),Bi(n),c&4){try{Ya(3,n,n.return),sl(3,n)}catch(nt){nn(n,n.return,nt)}try{Ya(5,n,n.return)}catch(nt){nn(n,n.return,nt)}}break;case 1:Ei(i,n),Bi(n),c&512&&a!==null&&Xs(a,a.return);break;case 5:if(Ei(i,n),Bi(n),c&512&&a!==null&&Xs(a,a.return),n.flags&32){var h=n.stateNode;try{Ae(h,"")}catch(nt){nn(n,n.return,nt)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,w=a!==null?a.memoizedProps:g,F=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&at(h,g),Pe(F,w);var ce=Pe(F,g);for(w=0;w<H.length;w+=2){var Me=H[w],we=H[w+1];Me==="style"?Ie(h,we):Me==="dangerouslySetInnerHTML"?Ke(h,we):Me==="children"?Ae(h,we):D(h,Me,we,ce)}switch(F){case"input":kt(h,g);break;case"textarea":E(h,g);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var qe=g.value;qe!=null?Tt(h,!!g.multiple,qe,!1):_e!==!!g.multiple&&(g.defaultValue!=null?Tt(h,!!g.multiple,g.defaultValue,!0):Tt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Fa]=g}catch(nt){nn(n,n.return,nt)}}break;case 6:if(Ei(i,n),Bi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(nt){nn(n,n.return,nt)}}break;case 3:if(Ei(i,n),Bi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ta(i.containerInfo)}catch(nt){nn(n,n.return,nt)}break;case 4:Ei(i,n),Bi(n);break;case 13:Ei(i,n),Bi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Eu=Vt())),c&4&&Vp(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Pn=(ce=Pn)||Me,Ei(i,n),Pn=ce):Ei(i,n),Bi(n),c&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Me&&(n.mode&1)!==0)for(Qe=n,Me=n.child;Me!==null;){for(we=Qe=Me;Qe!==null;){switch(_e=Qe,qe=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ya(4,_e,_e.return);break;case 1:Xs(_e,_e.return);var Je=_e.stateNode;if(typeof Je.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Je.props=i.memoizedProps,Je.state=i.memoizedState,Je.componentWillUnmount()}catch(nt){nn(c,a,nt)}}break;case 5:Xs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Xp(we);continue}}qe!==null?(qe.return=_e,Qe=qe):Xp(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{h=we.stateNode,ce?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=we.stateNode,H=we.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,F.style.display=Se("display",w))}catch(nt){nn(n,n.return,nt)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ce?"":we.memoizedProps}catch(nt){nn(n,n.return,nt)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ei(i,n),Bi(n),c&4&&Vp(n);break;case 21:break;default:Ei(i,n),Bi(n)}}function Bi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ae(h,""),c.flags&=-33);var g=zp(n);yu(n,g,h);break;case 3:case 4:var w=c.stateNode.containerInfo,F=zp(n);_u(n,F,w);break;default:throw Error(t(161))}}catch(H){nn(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lx(n,i,a){Qe=n,Gp(n)}function Gp(n,i,a){for(var c=(n.mode&1)!==0;Qe!==null;){var h=Qe,g=h.child;if(h.tag===22&&c){var w=h.memoizedState!==null||rl;if(!w){var F=h.alternate,H=F!==null&&F.memoizedState!==null||Pn;F=rl;var ce=Pn;if(rl=w,(Pn=H)&&!ce)for(Qe=h;Qe!==null;)w=Qe,H=w.child,w.tag===22&&w.memoizedState!==null?qp(h):H!==null?(H.return=w,Qe=H):qp(h);for(;g!==null;)Qe=g,Gp(g),g=g.sibling;Qe=h,rl=F,Pn=ce}Wp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Qe=g):Wp(n)}}function Wp(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:Si(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Xh(i,g,c);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,w,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&a.focus();break;case"img":H.src&&(a.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ce=i.alternate;if(ce!==null){var Me=ce.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&Ta(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&vu(i)}catch(_e){nn(i,i.return,_e)}}if(i===n){Qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function Xp(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Qe=a;break}Qe=i.return}}function qp(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(H){nn(i,a,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(H){nn(i,h,H)}}var g=i.return;try{vu(i)}catch(H){nn(i,g,H)}break;case 5:var w=i.return;try{vu(i)}catch(H){nn(i,w,H)}}}catch(H){nn(i,i.return,H)}if(i===n){Qe=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Qe=F;break}Qe=i.return}}var Ix=Math.ceil,al=C.ReactCurrentDispatcher,Su=C.ReactCurrentOwner,pi=C.ReactCurrentBatchConfig,It=0,_n=null,on=null,bn=0,si=0,qs=Cr(0),un=0,$a=null,ls=0,ol=0,Mu=0,Ka=null,Kn=null,Eu=0,Ys=1/0,ar=null,ll=!1,wu=null,Ir=null,cl=!1,Ur=null,ul=0,Za=0,bu=null,dl=-1,fl=0;function Vn(){return(It&6)!==0?Vt():dl!==-1?dl:dl=Vt()}function Or(n){return(n.mode&1)===0?1:(It&2)!==0&&bn!==0?bn&-bn:xx.transition!==null?(fl===0&&(fl=tt()),fl):(n=et,n!==0||(n=window.event,n=n===void 0?16:$f(n.type)),n)}function wi(n,i,a,c){if(50<Za)throw Za=0,bu=null,Error(t(185));zt(n,a,c),((It&2)===0||n!==_n)&&(n===_n&&((It&2)===0&&(ol|=a),un===4&&Fr(n,bn)),Zn(n,c),a===1&&It===0&&(i.mode&1)===0&&(Ys=Vt()+500,zo&&Nr()))}function Zn(n,i){var a=n.callbackNode;Lt(n,i);var c=Dt(n,n===_n?bn:0);if(c===0)a!==null&&Ts(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Ts(a),i===1)n.tag===0?gx($p.bind(null,n)):Ih($p.bind(null,n)),fx(function(){(It&6)===0&&Nr()}),a=null;else{switch(mn(c)){case 1:a=Y;break;case 4:a=le;break;case 16:a=ie;break;case 536870912:a=Oe;break;default:a=ie}a=im(a,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Yp(n,i){if(dl=-1,fl=0,(It&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Dt(n,n===_n?bn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var h=It;It|=2;var g=Zp();(_n!==n||bn!==i)&&(ar=null,Ys=Vt()+500,us(n,i));do try{Fx();break}catch(F){Kp(n,F)}while(!0);Hc(),al.current=g,It=h,on!==null?i=0:(_n=null,bn=0,i=un)}if(i!==0){if(i===2&&(h=$e(n),h!==0&&(c=h,i=Tu(n,h))),i===1)throw a=$a,us(n,0),Fr(n,c),Zn(n,Vt()),a;if(i===6)Fr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Ux(h)&&(i=hl(n,c),i===2&&(g=$e(n),g!==0&&(c=g,i=Tu(n,g))),i===1))throw a=$a,us(n,0),Fr(n,c),Zn(n,Vt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,Kn,ar);break;case 3:if(Fr(n,c),(c&130023424)===c&&(i=Eu+500-Vt(),10<i)){if(Dt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Vn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Dc(ds.bind(null,n,Kn,ar),i);break}ds(n,Kn,ar);break;case 4:if(Fr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var w=31-Xe(c);g=1<<w,w=i[w],w>h&&(h=w),c&=~g}if(c=h,c=Vt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ix(c/1960))-c,10<c){n.timeoutHandle=Dc(ds.bind(null,n,Kn,ar),c);break}ds(n,Kn,ar);break;case 5:ds(n,Kn,ar);break;default:throw Error(t(329))}}}return Zn(n,Vt()),n.callbackNode===a?Yp.bind(null,n):null}function Tu(n,i){var a=Ka;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Kn,Kn=a,i!==null&&Au(i)),n}function Au(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function Ux(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!_i(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Fr(n,i){for(i&=~Mu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Xe(i),c=1<<a;n[a]=-1,i&=~c}}function $p(n){if((It&6)!==0)throw Error(t(327));$s();var i=Dt(n,0);if((i&1)===0)return Zn(n,Vt()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=$e(n);c!==0&&(i=c,a=Tu(n,c))}if(a===1)throw a=$a,us(n,0),Fr(n,i),Zn(n,Vt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,Kn,ar),Zn(n,Vt()),null}function Cu(n,i){var a=It;It|=1;try{return n(i)}finally{It=a,It===0&&(Ys=Vt()+500,zo&&Nr())}}function cs(n){Ur!==null&&Ur.tag===0&&(It&6)===0&&$s();var i=It;It|=1;var a=pi.transition,c=et;try{if(pi.transition=null,et=1,n)return n()}finally{et=c,pi.transition=a,It=i,(It&6)===0&&Nr()}}function Ru(){si=qs.current,Zt(qs)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,dx(a)),on!==null)for(a=on.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ko();break;case 3:Gs(),Zt(qn),Zt(Cn),Zc();break;case 5:$c(c);break;case 4:Gs();break;case 13:Zt(Jt);break;case 19:Zt(Jt);break;case 10:Gc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(_n=n,on=n=kr(n.current,null),bn=si=i,un=0,$a=null,Mu=ol=ls=0,Kn=Ka=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var w=g.next;g.next=h,c.next=w}a.pending=c}ss=null}return n}function Kp(n,i){do{var a=on;try{if(Hc(),Ko.current=el,Zo){for(var c=en.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Zo=!1}if(os=0,vn=cn=en=null,Ha=!1,Ga=0,Su.current=null,a===null||a.return===null){un=1,$a=i,on=null;break}e:{var g=n,w=a.return,F=a,H=i;if(i=bn,F.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ce=H,Me=F,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var _e=Me.alternate;_e?(Me.updateQueue=_e.updateQueue,Me.memoizedState=_e.memoizedState,Me.lanes=_e.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var qe=Sp(w);if(qe!==null){qe.flags&=-257,Mp(qe,w,F,g,i),qe.mode&1&&yp(g,ce,i),i=qe,H=ce;var Je=i.updateQueue;if(Je===null){var nt=new Set;nt.add(H),i.updateQueue=nt}else Je.add(H);break e}else{if((i&1)===0){yp(g,ce,i),Nu();break e}H=Error(t(426))}}else if(Qt&&F.mode&1){var sn=Sp(w);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),Mp(sn,w,F,g,i),jc(Ws(H,F));break e}}g=H=Ws(H,F),un!==4&&(un=2),Ka===null?Ka=[g]:Ka.push(g),g=w;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=vp(g,H,i);Wh(g,ee);break e;case 1:F=H;var X=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Ir===null||!Ir.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Re=_p(g,F,i);Wh(g,Re);break e}}g=g.return}while(g!==null)}Jp(a)}catch(it){i=it,on===a&&a!==null&&(on=a=a.return);continue}break}while(!0)}function Zp(){var n=al.current;return al.current=el,n===null?el:n}function Nu(){(un===0||un===3||un===2)&&(un=4),_n===null||(ls&268435455)===0&&(ol&268435455)===0||Fr(_n,bn)}function hl(n,i){var a=It;It|=2;var c=Zp();(_n!==n||bn!==i)&&(ar=null,us(n,i));do try{Ox();break}catch(h){Kp(n,h)}while(!0);if(Hc(),It=a,al.current=c,on!==null)throw Error(t(261));return _n=null,bn=0,un}function Ox(){for(;on!==null;)Qp(on)}function Fx(){for(;on!==null&&!Sa();)Qp(on)}function Qp(n){var i=nm(n.alternate,n,si);n.memoizedProps=n.pendingProps,i===null?Jp(n):on=i,Su.current=null}function Jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Rx(a,i,si),a!==null){on=a;return}}else{if(a=Nx(a,i),a!==null){a.flags&=32767,on=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{un=6,on=null;return}}if(i=i.sibling,i!==null){on=i;return}on=i=n}while(i!==null);un===0&&(un=5)}function ds(n,i,a){var c=et,h=pi.transition;try{pi.transition=null,et=1,kx(n,i,a,c)}finally{pi.transition=h,et=c}return null}function kx(n,i,a,c){do $s();while(Ur!==null);if((It&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(an(n,g),n===_n&&(on=_n=null,bn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,im(ie,function(){return $s(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=pi.transition,pi.transition=null;var w=et;et=1;var F=It;It|=4,Su.current=null,Dx(n,a),Hp(a,n),rx(Nc),wo=!!Rc,Nc=Rc=null,n.current=a,Lx(a),es(),It=F,et=w,pi.transition=g}else n.current=a;if(cl&&(cl=!1,Ur=n,ul=h),g=n.pendingLanes,g===0&&(Ir=null),Ze(a.stateNode),Zn(n,Vt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(ll)throw ll=!1,n=wu,wu=null,n;return(ul&1)!==0&&n.tag!==0&&$s(),g=n.pendingLanes,(g&1)!==0?n===bu?Za++:(Za=0,bu=n):Za=0,Nr(),null}function $s(){if(Ur!==null){var n=mn(ul),i=pi.transition,a=et;try{if(pi.transition=null,et=16>n?16:n,Ur===null)var c=!1;else{if(n=Ur,Ur=null,ul=0,(It&6)!==0)throw Error(t(331));var h=It;for(It|=4,Qe=n.current;Qe!==null;){var g=Qe,w=g.child;if((Qe.flags&16)!==0){var F=g.deletions;if(F!==null){for(var H=0;H<F.length;H++){var ce=F[H];for(Qe=ce;Qe!==null;){var Me=Qe;switch(Me.tag){case 0:case 11:case 15:Ya(8,Me,g)}var we=Me.child;if(we!==null)we.return=Me,Qe=we;else for(;Qe!==null;){Me=Qe;var _e=Me.sibling,qe=Me.return;if(kp(Me),Me===ce){Qe=null;break}if(_e!==null){_e.return=qe,Qe=_e;break}Qe=qe}}}var Je=g.alternate;if(Je!==null){var nt=Je.child;if(nt!==null){Je.child=null;do{var sn=nt.sibling;nt.sibling=null,nt=sn}while(nt!==null)}}Qe=g}}if((g.subtreeFlags&2064)!==0&&w!==null)w.return=g,Qe=w;else e:for(;Qe!==null;){if(g=Qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Qe=ee;break e}Qe=g.return}}var X=n.current;for(Qe=X;Qe!==null;){w=Qe;var te=w.child;if((w.subtreeFlags&2064)!==0&&te!==null)te.return=w,Qe=te;else e:for(w=X;Qe!==null;){if(F=Qe,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:sl(9,F)}}catch(it){nn(F,F.return,it)}if(F===w){Qe=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,Qe=Re;break e}Qe=F.return}}if(It=h,Nr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ve,n)}catch{}c=!0}return c}finally{et=a,pi.transition=i}}return!1}function em(n,i,a){i=Ws(a,i),i=vp(n,i,1),n=Dr(n,i,1),i=Vn(),n!==null&&(zt(n,1,i),Zn(n,i))}function nn(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ir===null||!Ir.has(c))){n=Ws(a,n),n=_p(i,n,1),i=Dr(i,n,1),n=Vn(),i!==null&&(zt(i,1,n),Zn(i,n));break}}i=i.return}}function Bx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Vn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(bn&a)===a&&(un===4||un===3&&(bn&130023424)===bn&&500>Vt()-Eu?us(n,0):Mu|=a),Zn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var a=Vn();n=ir(n,i),n!==null&&(zt(n,i,a),Zn(n,a))}function zx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function jx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||qn.current)$n=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return $n=!1,Cx(n,i,a);$n=(n.flags&131072)!==0}else $n=!1,Qt&&(i.flags&1048576)!==0&&Uh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var h=Fs(i,Cn.current);Hs(i,a),h=eu(null,i,c,n,h,a);var g=tu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Yn(c)?(g=!0,Bo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,qc(i),h.updater=tl,i.stateNode=h,h._reactInternals=i,ou(i,c,n,a),i=du(null,i,c,!0,g,a)):(i.tag=0,Qt&&g&&Fc(i),jn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Hx(c),n=Si(c,n),h){case 0:i=uu(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=wp(null,i,c,Si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Si(c,h),uu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Si(c,h),Cp(n,i,c,h,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Gh(n,i),Yo(i,c,null,a);var w=i.memoizedState;if(c=w.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Ws(Error(t(423)),i),i=Np(n,i,c,a,h);break e}else if(c!==h){h=Ws(Error(t(424)),i),i=Np(n,i,c,a,h);break e}else for(ri=Ar(i.stateNode.containerInfo.firstChild),ii=i,Qt=!0,yi=null,a=Vh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===h){i=sr(n,i,a);break e}jn(n,i,c,a)}i=i.child}return i;case 5:return qh(i),n===null&&zc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,w=h.children,Pc(c,h)?w=null:g!==null&&Pc(c,g)&&(i.flags|=32),Ap(n,i),jn(n,i,w,a),i.child;case 6:return n===null&&zc(i),null;case 13:return Pp(n,i,a);case 4:return Yc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=js(i,null,c,a):jn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Si(c,h),Ep(n,i,c,h,a);case 7:return jn(n,i,i.pendingProps,a),i.child;case 8:return jn(n,i,i.pendingProps.children,a),i.child;case 12:return jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,w=h.value,qt(Wo,c._currentValue),c._currentValue=w,g!==null)if(_i(g.value,w)){if(g.children===h.children&&!qn.current){i=sr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var F=g.dependencies;if(F!==null){w=g.child;for(var H=F.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=rr(-1,a&-a),H.tag=2;var ce=g.updateQueue;if(ce!==null){ce=ce.shared;var Me=ce.pending;Me===null?H.next=H:(H.next=Me.next,Me.next=H),ce.pending=H}}g.lanes|=a,H=g.alternate,H!==null&&(H.lanes|=a),Wc(g.return,a,i),F.lanes|=a;break}H=H.next}}else if(g.tag===10)w=g.type===i.type?null:g.child;else if(g.tag===18){if(w=g.return,w===null)throw Error(t(341));w.lanes|=a,F=w.alternate,F!==null&&(F.lanes|=a),Wc(w,a,i),w=g.sibling}else w=g.child;if(w!==null)w.return=g;else for(w=g;w!==null;){if(w===i){w=null;break}if(g=w.sibling,g!==null){g.return=w.return,w=g;break}w=w.return}g=w}jn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Hs(i,a),h=fi(h),c=c(h),i.flags|=1,jn(n,i,c,a),i.child;case 14:return c=i.type,h=Si(c,i.pendingProps),h=Si(c.type,h),wp(n,i,c,h,a);case 15:return bp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:Si(c,h),il(n,i),i.tag=1,Yn(c)?(n=!0,Bo(i)):n=!1,Hs(i,a),gp(i,c,h),ou(i,c,h,a),du(null,i,c,!0,n,a);case 19:return Lp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return ci(n,i)}function Vx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,i,a,c){return new Vx(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Hx(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===de)return 14}return 2}function kr(n,i){var a=n.alternate;return a===null?(a=mi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,h,g){var w=2;if(c=n,typeof n=="function")Pu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case O:return fs(a.children,h,g,i);case B:w=8,h|=8;break;case b:return n=mi(12,a,i,h|2),n.elementType=b,n.lanes=g,n;case K:return n=mi(13,a,i,h),n.elementType=K,n.lanes=g,n;case ue:return n=mi(19,a,i,h),n.elementType=ue,n.lanes=g,n;case Z:return ml(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case P:w=10;break e;case z:w=9;break e;case $:w=11;break e;case de:w=14;break e;case ae:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=mi(w,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function fs(n,i,a,c){return n=mi(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=mi(22,n,c,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=mi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Gx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$t(0),this.expirationTimes=$t(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$t(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Iu(n,i,a,c,h,g,w,F,H){return n=new Gx(n,i,a,F,H),i===1?(i=1,g===!0&&(i|=8)):i=0,g=mi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(g),n}function Wx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Rr;n=n._reactInternals;e:{if(Bn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Yn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Yn(a))return Dh(n,a,i)}return i}function sm(n,i,a,c,h,g,w,F,H){return n=Iu(a,c,!0,n,h,g,w,F,H),n.context=rm(null),a=n.current,c=Vn(),h=Or(a),g=rr(c,h),g.callback=i??null,Dr(a,g,h),n.current.lanes=h,zt(n,h,c),Zn(n,c),n}function gl(n,i,a,c){var h=i.current,g=Vn(),w=Or(h);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=rr(g,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Dr(h,i,w),n!==null&&(wi(n,h,w,g),qo(n,h,w)),w}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function Xx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}vl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},vl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){gl(null,n,null,null)}),i[Ji]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ui();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&qf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function qx(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ce=xl(w);g.call(ce)}}var w=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=w,n[Ji]=w.current,Ua(n.nodeType===8?n.parentNode:n),cs(),w}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var F=c;c=function(){var ce=xl(H);F.call(ce)}}var H=Iu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=H,n[Ji]=H.current,Ua(n.nodeType===8?n.parentNode:n),cs(function(){gl(i,H,a,c)}),H}function yl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var w=g;if(typeof h=="function"){var F=h;h=function(){var H=xl(w);F.call(H)}}gl(i,w,n,h)}else w=qx(a,i,n,h,c);return xl(w)}gn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Bt(i.pendingLanes);a!==0&&(Le(i,a|1),Zn(i,Vt()),(It&6)===0&&(Ys=Vt()+500,Nr()))}break;case 13:cs(function(){var c=ir(n,1);if(c!==null){var h=Vn();wi(c,n,1,h)}}),Uu(n,1)}},xn=function(n){if(n.tag===13){var i=ir(n,134217728);if(i!==null){var a=Vn();wi(i,n,134217728,a)}Uu(n,134217728)}},As=function(n){if(n.tag===13){var i=Or(n),a=ir(n,i);if(a!==null){var c=Vn();wi(a,n,i,c)}Uu(n,i)}},Ui=function(){return et},Wf=function(n,i){var a=et;try{return et=n,i()}finally{et=a}},Ue=function(n,i,a){switch(i){case"input":if(kt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Fo(c);if(!h)throw Error(t(90));Ct(c),kt(c,h)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Tt(n,!!a.multiple,i,!1)}},ct=Cu,St=cs;var Yx={usingClientEntryPoint:!1,Events:[ka,Us,Fo,fe,be,Cu]},Qa={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qi(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{Ve=Sl.inject($x),De=Sl}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx,Qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return Wx(n,i,null,a)},Qn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",h=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Iu(n,1,!1,null,null,a,!1,c,h),n[Ji]=i.current,Ua(n.nodeType===8?n.parentNode:n),new Ou(i)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qi(i),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return cs(n)},Qn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,a)},Qn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",w=om;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=sm(i,null,n,1,a??null,h,!1,g,w),n[Ji]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new vl(i)},Qn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,a)},Qn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},Qn.unstable_batchedUpdates=Cu,Qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var gm;function rv(){if(gm)return zu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=iv(),zu.exports}var xm;function sv(){if(xm)return Ml;xm=1;var s=rv();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var av=sv();const ov=b0(av);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),T0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Be.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},p)=>Be.createElement("svg",{ref:p,...cv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:T0("lucide",o),...d},[...u.map(([m,x])=>Be.createElement(m,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=(s,e)=>{const t=Be.forwardRef(({className:r,...o},l)=>Be.createElement(uv,{ref:l,iconNode:e,className:T0(`lucide-${lv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=pt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=pt("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=pt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=pt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=pt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=pt("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=pt("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=pt("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=pt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=pt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=pt("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=pt("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=pt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=pt("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=pt("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=pt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=pt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=pt("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=pt("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=pt("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=pt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=pt("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=pt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=pt("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=pt("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=pt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=pt("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=pt("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=pt("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=pt("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=pt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=pt("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=pt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=pt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=pt("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=pt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=pt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=pt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=pt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=pt("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=pt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=pt("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=pt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=pt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=pt("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=pt("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=pt("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=pt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=pt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=pt("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=pt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Bv=({cartCount:s,onOpenCart:e})=>{const[t,r]=Be.useState(!1),[o,l]=Be.useState(!1);Be.useEffect(()=>{const d=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",d),()=>window.removeEventListener("scroll",d)},[]);const u=[{name:"Simulação 3D",href:"#hero-3d",icon:uo},{name:"Central VTS",href:"#central-vts",icon:Lv},{name:"Normas NBR",href:"#normas",icon:Md},{name:"Calculadora & Diagrama",href:"#calculadora",icon:A0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Jl},{name:"Manuais",href:"#manuais",icon:Md},{name:"Fotos Reais",href:"#galeria",icon:vo},{name:"Contato",href:"#contato",icon:pr}];return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[f.jsxs("span",{className:"flex h-2 w-2 relative",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),f.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",f.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",f.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),f.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${t?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[f.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),f.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${d.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[f.jsx(p,{className:`w-3.5 h-3.5 ${d.highlight?"text-[#d4af37]":"opacity-70"}`}),d.name]},d.name)})}),f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[f.jsx(pr,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"(15) 99657-6807"})]}),f.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[f.jsx(Jl,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&f.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),f.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?f.jsx(wd,{className:"w-6 h-6"}):f.jsx(bv,{className:"w-6 h-6"})})]})]}),o&&f.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[u.map(d=>{const p=d.icon;return f.jsxs("a",{href:d.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[f.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),f.jsx("span",{children:d.name})]},d.name)}),f.jsx("div",{className:"pt-3 border-t border-white/10",children:f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[f.jsx(pr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="182",fa={ROTATE:0,DOLLY:1,PAN:2},da={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zv=0,Mm=1,jv=2,Wl=1,Ef=2,lo=3,Kr=0,ti=1,fr=2,mr=0,ha=1,Em=2,wm=3,bm=4,Vv=5,_s=100,Hv=101,Gv=102,Wv=103,Xv=104,qv=200,Yv=201,$v=202,Kv=203,bd=204,Td=205,Zv=206,Qv=207,Jv=208,e_=209,t_=210,n_=211,i_=212,r_=213,s_=214,Ad=0,Cd=1,Rd=2,ma=3,Nd=4,Pd=5,Dd=6,Ld=7,I0=0,a_=1,o_=2,Gi=0,U0=1,O0=2,F0=3,rc=4,k0=5,B0=6,z0=7,j0=300,Es=301,ga=302,Id=303,Ud=304,sc=306,Od=1e3,hr=1001,Fd=1002,Tn=1003,l_=1004,El=1005,On=1006,Hu=1007,Ss=1008,li=1009,V0=1010,H0=1011,ho=1012,wf=1013,qi=1014,Vi=1015,xr=1016,bf=1017,Tf=1018,po=1020,G0=35902,W0=35899,X0=1021,q0=1022,Ri=1023,vr=1026,Ms=1027,Y0=1028,Af=1029,xa=1030,Cf=1031,Rf=1033,Xl=33776,ql=33777,Yl=33778,$l=33779,kd=35840,Bd=35841,zd=35842,jd=35843,Vd=36196,Hd=37492,Gd=37496,Wd=37488,Xd=37489,qd=37490,Yd=37491,$d=37808,Kd=37809,Zd=37810,Qd=37811,Jd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,mf=36285,gf=36286,c_=3200,$0=0,u_=1,Yr="",Un="srgb",va="srgb-linear",ec="linear",Gt="srgb",Ks=7680,Tm=519,d_=512,f_=513,h_=514,Nf=515,p_=516,m_=517,Pf=518,g_=519,Am=35044,Cm="300 es",Hi=2e3,tc=2001;function K0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function x_(){const s=mo("canvas");return s.style.display="block",s}const Rm={};function Nm(...s){const e="THREE."+s.shift();console.log(e,...s)}function yt(...s){const e="THREE."+s.shift();console.warn(e,...s)}function Ut(...s){const e="THREE."+s.shift();console.error(e,...s)}function go(...s){const e=s.join(" ");e in Rm||(Rm[e]=!0,yt(...s))}function v_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,nc=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Rt(s,e,t){return Math.max(e,Math.min(t,s))}function __(s,e){return(s%e+e)%e}function Gu(s,e,t){return(1-t)*s+t*e}function eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const y_={DEG2RAD:Kl};class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ws{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let p=r[o+0],m=r[o+1],x=r[o+2],v=r[o+3],y=l[u+0],S=l[u+1],T=l[u+2],R=l[u+3];if(d<=0){e[t+0]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v;return}if(d>=1){e[t+0]=y,e[t+1]=S,e[t+2]=T,e[t+3]=R;return}if(v!==R||p!==y||m!==S||x!==T){let M=p*y+m*S+x*T+v*R;M<0&&(y=-y,S=-S,T=-T,R=-R,M=-M);let _=1-d;if(M<.9995){const A=Math.acos(M),D=Math.sin(A);_=Math.sin(_*A)/D,d=Math.sin(d*A)/D,p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+R*d}else{p=p*_+y*d,m=m*_+S*d,x=x*_+T*d,v=v*_+R*d;const A=1/Math.sqrt(p*p+m*m+x*x+v*v);p*=A,m*=A,x*=A,v*=A}}e[t]=p,e[t+1]=m,e[t+2]=x,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],p=r[o+1],m=r[o+2],x=r[o+3],v=l[u],y=l[u+1],S=l[u+2],T=l[u+3];return e[t]=d*T+x*v+p*S-m*y,e[t+1]=p*T+x*y+m*v-d*S,e[t+2]=m*T+x*S+d*y-p*v,e[t+3]=x*T-d*v-p*y-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,p=Math.sin,m=d(r/2),x=d(o/2),v=d(l/2),y=p(r/2),S=p(o/2),T=p(l/2);switch(u){case"XYZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"YXZ":this._x=y*x*v+m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"ZXY":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v-y*S*T;break;case"ZYX":this._x=y*x*v-m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v+y*S*T;break;case"YZX":this._x=y*x*v+m*S*T,this._y=m*S*v+y*x*T,this._z=m*x*T-y*S*v,this._w=m*x*v-y*S*T;break;case"XZY":this._x=y*x*v-m*S*T,this._y=m*S*v-y*x*T,this._z=m*x*T+y*S*v,this._w=m*x*v+y*S*T;break;default:yt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],p=t[9],m=t[2],x=t[6],v=t[10],y=r+d+v;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(x-p)*S,this._y=(l-m)*S,this._z=(u-o)*S}else if(r>d&&r>v){const S=2*Math.sqrt(1+r-d-v);this._w=(x-p)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+m)/S}else if(d>v){const S=2*Math.sqrt(1+d-r-v);this._w=(l-m)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(p+x)/S}else{const S=2*Math.sqrt(1+v-r-d);this._w=(u-o)/S,this._x=(l+m)/S,this._y=(p+x)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,p=t._y,m=t._z,x=t._w;return this._x=r*x+u*d+o*m-l*p,this._y=o*x+u*p+l*d-r*m,this._z=l*x+u*m+r*p-o*d,this._w=u*x-r*d-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,l=-l,u=-u,d=-d);let p=1-t;if(d<.9995){const m=Math.acos(d),x=Math.sin(m);p=Math.sin(p*m)/x,t=Math.sin(t*m)/x,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,p=e.w,m=2*(u*o-d*r),x=2*(d*t-l*o),v=2*(l*r-u*t);return this.x=t+p*m+u*v-d*x,this.y=r+p*x+d*m-l*v,this.z=o+p*v+l*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,p=t.z;return this.x=o*p-l*d,this.y=l*u-r*p,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new Q,Pm=new ws;class Mt{constructor(e,t,r,o,l,u,d,p,m){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m)}set(e,t,r,o,l,u,d,p,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=t,x[4]=l,x[5]=p,x[6]=r,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],p=r[6],m=r[1],x=r[4],v=r[7],y=r[2],S=r[5],T=r[8],R=o[0],M=o[3],_=o[6],A=o[1],D=o[4],C=o[7],U=o[2],L=o[5],O=o[8];return l[0]=u*R+d*A+p*U,l[3]=u*M+d*D+p*L,l[6]=u*_+d*C+p*O,l[1]=m*R+x*A+v*U,l[4]=m*M+x*D+v*L,l[7]=m*_+x*C+v*O,l[2]=y*R+S*A+T*U,l[5]=y*M+S*D+T*L,l[8]=y*_+S*C+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8];return t*u*x-t*d*m-r*l*x+r*d*p+o*l*m-o*u*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=x*u-d*m,y=d*p-x*l,S=m*l-u*p,T=t*v+r*y+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(o*m-x*r)*R,e[2]=(d*r-o*u)*R,e[3]=y*R,e[4]=(x*t-o*p)*R,e[5]=(o*l-d*t)*R,e[6]=S*R,e[7]=(r*p-m*t)*R,e[8]=(u*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*u+m*d)+u+e,-o*m,o*p,-o*(-m*u+p*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new Mt,Dm=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function S_(){const s={enabled:!0,workingColorSpace:va,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Gt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(o.r=pa(o.r),o.g=pa(o.g),o.b=pa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yr?ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[va]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:Dm,fromXYZ:Lm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:Dm,fromXYZ:Lm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),s}const Ot=S_();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class M_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=mo("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E_=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(qu(o[u].image)):l.push(qu(o[u]))}else l=qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?M_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(yt("Texture: Unable to serialize Texture."),{})}let w_=0;const Yu=new Q;class An extends bs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=hr,o=hr,l=On,u=Ss,d=Ri,p=li,m=An.DEFAULT_ANISOTROPY,x=Yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=_o(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yu).x}get height(){return this.source.getSize(Yu).y}get depth(){return this.source.getSize(Yu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){yt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==j0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=j0;An.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],x=p[4],v=p[8],y=p[1],S=p[5],T=p[9],R=p[2],M=p[6],_=p[10];if(Math.abs(x-y)<.01&&Math.abs(v-R)<.01&&Math.abs(T-M)<.01){if(Math.abs(x+y)<.1&&Math.abs(v+R)<.1&&Math.abs(T+M)<.1&&Math.abs(m+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,C=(S+1)/2,U=(_+1)/2,L=(x+y)/4,O=(v+R)/4,B=(T+M)/4;return D>C&&D>U?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=L/r,l=O/r):C>U?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=L/o,l=B/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=B/l),this.set(r,o,l,t),this}let A=Math.sqrt((M-T)*(M-T)+(v-R)*(v-R)+(y-x)*(y-x));return Math.abs(A)<.001&&(A=1),this.x=(M-T)/A,this.y=(v-R)/A,this.z=(y-x)/A,this.w=Math.acos((m+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b_ extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new An(o);this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Df(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends b_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Z0 extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T_ extends An{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),wl.copy(r.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),bl.subVectors(this.max,to),Qs.subVectors(e.a,to),Js.subVectors(e.b,to),ea.subVectors(e.c,to),zr.subVectors(Js,Qs),jr.subVectors(ea,Js),hs.subVectors(Qs,ea);let t=[0,-zr.z,zr.y,0,-jr.z,jr.y,0,-hs.z,hs.y,zr.z,0,-zr.x,jr.z,0,-jr.x,hs.z,0,-hs.x,-zr.y,zr.x,0,-jr.y,jr.x,0,-hs.y,hs.x,0];return!$u(t,Qs,Js,ea,bl)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,Qs,Js,ea,bl))?!1:(Tl.crossVectors(zr,jr),t=[Tl.x,Tl.y,Tl.z],$u(t,Qs,Js,ea,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],bi=new Q,wl=new yo,Qs=new Q,Js=new Q,ea=new Q,zr=new Q,jr=new Q,hs=new Q,to=new Q,bl=new Q,Tl=new Q,ps=new Q;function $u(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ps.fromArray(s,l);const d=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),p=e.dot(ps),m=t.dot(ps),x=r.dot(ps);if(Math.max(-Math.max(p,m,x),Math.min(p,m,x))>d)return!1}return!0}const A_=new yo,no=new Q,Ku=new Q;class Lf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):A_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Ku)),this.expandByPoint(no.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const lr=new Q,Zu=new Q,Al=new Q,Vr=new Q,Qu=new Q,Cl=new Q,Ju=new Q;class If{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Zu.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Zu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Al),d=Vr.dot(this.direction),p=-Vr.dot(Al),m=Vr.lengthSq(),x=Math.abs(1-u*u);let v,y,S,T;if(x>0)if(v=u*p-d,y=u*d-p,T=l*x,v>=0)if(y>=-T)if(y<=T){const R=1/x;v*=R,y*=R,S=v*(v+u*y+2*d)+y*(u*v+y+2*p)+m}else y=l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y=-l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;else y<=-T?(v=Math.max(0,-(-u*l+d)),y=v>0?-l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m):y<=T?(v=0,y=Math.min(Math.max(-l,-p),l),S=y*(y+2*p)+m):(v=Math.max(0,-(u*l+d)),y=v>0?l:Math.min(Math.max(-l,-p),l),S=-v*v+y*(y+2*p)+m);else y=u>0?-l:l,v=Math.max(0,-(u*y+d)),S=-v*v+y*(y+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(Zu).addScaledVector(Al,y),S}intersectSphere(e,t){lr.subVectors(e.center,this.origin);const r=lr.dot(this.direction),o=lr.dot(lr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,p=r+u;return p<0?null:d<0?this.at(p,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,p;const m=1/this.direction.x,x=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),x>=0?(l=(e.min.y-y.y)*x,u=(e.max.y-y.y)*x):(l=(e.max.y-y.y)*x,u=(e.min.y-y.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,r,o,l){Qu.subVectors(t,e),Cl.subVectors(r,e),Ju.crossVectors(Qu,Cl);let u=this.direction.dot(Ju),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Vr.subVectors(this.origin,e);const p=d*this.direction.dot(Cl.crossVectors(Vr,Cl));if(p<0)return null;const m=d*this.direction.dot(Qu.cross(Vr));if(m<0||p+m>u)return null;const x=-d*Vr.dot(Ju);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tn{constructor(e,t,r,o,l,u,d,p,m,x,v,y,S,T,R,M){tn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,p,m,x,v,y,S,T,R,M)}set(e,t,r,o,l,u,d,p,m,x,v,y,S,T,R,M){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=u,_[9]=d,_[13]=p,_[2]=m,_[6]=x,_[10]=v,_[14]=y,_[3]=S,_[7]=T,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ta.setFromMatrixColumn(e,0).length(),l=1/ta.setFromMatrixColumn(e,1).length(),u=1/ta.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),x=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const y=u*x,S=u*v,T=d*x,R=d*v;t[0]=p*x,t[4]=-p*v,t[8]=m,t[1]=S+T*m,t[5]=y-R*m,t[9]=-d*p,t[2]=R-y*m,t[6]=T+S*m,t[10]=u*p}else if(e.order==="YXZ"){const y=p*x,S=p*v,T=m*x,R=m*v;t[0]=y+R*d,t[4]=T*d-S,t[8]=u*m,t[1]=u*v,t[5]=u*x,t[9]=-d,t[2]=S*d-T,t[6]=R+y*d,t[10]=u*p}else if(e.order==="ZXY"){const y=p*x,S=p*v,T=m*x,R=m*v;t[0]=y-R*d,t[4]=-u*v,t[8]=T+S*d,t[1]=S+T*d,t[5]=u*x,t[9]=R-y*d,t[2]=-u*m,t[6]=d,t[10]=u*p}else if(e.order==="ZYX"){const y=u*x,S=u*v,T=d*x,R=d*v;t[0]=p*x,t[4]=T*m-S,t[8]=y*m+R,t[1]=p*v,t[5]=R*m+y,t[9]=S*m-T,t[2]=-m,t[6]=d*p,t[10]=u*p}else if(e.order==="YZX"){const y=u*p,S=u*m,T=d*p,R=d*m;t[0]=p*x,t[4]=R-y*v,t[8]=T*v+S,t[1]=v,t[5]=u*x,t[9]=-d*x,t[2]=-m*x,t[6]=S*v+T,t[10]=y-R*v}else if(e.order==="XZY"){const y=u*p,S=u*m,T=d*p,R=d*m;t[0]=p*x,t[4]=-v,t[8]=m*x,t[1]=y*v+R,t[5]=u*x,t[9]=S*v-T,t[2]=T*v-S,t[6]=d*x,t[10]=R*v+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C_,e,R_)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Hr.crossVectors(r,ai),Hr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Hr.crossVectors(r,ai)),Hr.normalize(),Rl.crossVectors(ai,Hr),o[0]=Hr.x,o[4]=Rl.x,o[8]=ai.x,o[1]=Hr.y,o[5]=Rl.y,o[9]=ai.y,o[2]=Hr.z,o[6]=Rl.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],p=r[8],m=r[12],x=r[1],v=r[5],y=r[9],S=r[13],T=r[2],R=r[6],M=r[10],_=r[14],A=r[3],D=r[7],C=r[11],U=r[15],L=o[0],O=o[4],B=o[8],b=o[12],P=o[1],z=o[5],$=o[9],K=o[13],ue=o[2],de=o[6],ae=o[10],Z=o[14],q=o[3],me=o[7],re=o[11],k=o[15];return l[0]=u*L+d*P+p*ue+m*q,l[4]=u*O+d*z+p*de+m*me,l[8]=u*B+d*$+p*ae+m*re,l[12]=u*b+d*K+p*Z+m*k,l[1]=x*L+v*P+y*ue+S*q,l[5]=x*O+v*z+y*de+S*me,l[9]=x*B+v*$+y*ae+S*re,l[13]=x*b+v*K+y*Z+S*k,l[2]=T*L+R*P+M*ue+_*q,l[6]=T*O+R*z+M*de+_*me,l[10]=T*B+R*$+M*ae+_*re,l[14]=T*b+R*K+M*Z+_*k,l[3]=A*L+D*P+C*ue+U*q,l[7]=A*O+D*z+C*de+U*me,l[11]=A*B+D*$+C*ae+U*re,l[15]=A*b+D*K+C*Z+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],p=e[9],m=e[13],x=e[2],v=e[6],y=e[10],S=e[14],T=e[3],R=e[7],M=e[11],_=e[15],A=p*S-m*y,D=d*S-m*v,C=d*y-p*v,U=u*S-m*x,L=u*y-p*x,O=u*v-d*x;return t*(R*A-M*D+_*C)-r*(T*A-M*U+_*L)+o*(T*D-R*U+_*O)-l*(T*C-R*L+M*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],p=e[6],m=e[7],x=e[8],v=e[9],y=e[10],S=e[11],T=e[12],R=e[13],M=e[14],_=e[15],A=v*M*m-R*y*m+R*p*S-d*M*S-v*p*_+d*y*_,D=T*y*m-x*M*m-T*p*S+u*M*S+x*p*_-u*y*_,C=x*R*m-T*v*m+T*d*S-u*R*S-x*d*_+u*v*_,U=T*v*p-x*R*p-T*d*y+u*R*y+x*d*M-u*v*M,L=t*A+r*D+o*C+l*U;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=A*O,e[1]=(R*y*l-v*M*l-R*o*S+r*M*S+v*o*_-r*y*_)*O,e[2]=(d*M*l-R*p*l+R*o*m-r*M*m-d*o*_+r*p*_)*O,e[3]=(v*p*l-d*y*l-v*o*m+r*y*m+d*o*S-r*p*S)*O,e[4]=D*O,e[5]=(x*M*l-T*y*l+T*o*S-t*M*S-x*o*_+t*y*_)*O,e[6]=(T*p*l-u*M*l-T*o*m+t*M*m+u*o*_-t*p*_)*O,e[7]=(u*y*l-x*p*l+x*o*m-t*y*m-u*o*S+t*p*S)*O,e[8]=C*O,e[9]=(T*v*l-x*R*l-T*r*S+t*R*S+x*r*_-t*v*_)*O,e[10]=(u*R*l-T*d*l+T*r*m-t*R*m-u*r*_+t*d*_)*O,e[11]=(x*d*l-u*v*l-x*r*m+t*v*m+u*r*S-t*d*S)*O,e[12]=U*O,e[13]=(x*R*o-T*v*o+T*r*y-t*R*y-x*r*M+t*v*M)*O,e[14]=(T*d*o-u*R*o-T*r*p+t*R*p+u*r*M-t*d*M)*O,e[15]=(u*v*o-x*d*o+x*r*p-t*v*p-u*r*y+t*d*y)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,p=e.z,m=l*u,x=l*d;return this.set(m*u+r,m*d-o*p,m*p+o*d,0,m*d+o*p,x*d+r,x*p-o*u,0,m*p-o*d,x*p+o*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,p=t._w,m=l+l,x=u+u,v=d+d,y=l*m,S=l*x,T=l*v,R=u*x,M=u*v,_=d*v,A=p*m,D=p*x,C=p*v,U=r.x,L=r.y,O=r.z;return o[0]=(1-(R+_))*U,o[1]=(S+C)*U,o[2]=(T-D)*U,o[3]=0,o[4]=(S-C)*L,o[5]=(1-(y+_))*L,o[6]=(M+A)*L,o[7]=0,o[8]=(T+D)*O,o[9]=(M-A)*O,o[10]=(1-(y+R))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=ta.set(o[0],o[1],o[2]).length();const u=ta.set(o[4],o[5],o[6]).length(),d=ta.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Ti.copy(this);const m=1/l,x=1/u,v=1/d;return Ti.elements[0]*=m,Ti.elements[1]*=m,Ti.elements[2]*=m,Ti.elements[4]*=x,Ti.elements[5]*=x,Ti.elements[6]*=x,Ti.elements[8]*=v,Ti.elements[9]*=v,Ti.elements[10]*=v,t.setFromRotationMatrix(Ti),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Hi,p=!1){const m=this.elements,x=2*l/(t-e),v=2*l/(r-o),y=(t+e)/(t-e),S=(r+o)/(r-o);let T,R;if(p)T=l/(u-l),R=u*l/(u-l);else if(d===Hi)T=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===tc)T=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Hi,p=!1){const m=this.elements,x=2/(t-e),v=2/(r-o),y=-(t+e)/(t-e),S=-(r+o)/(r-o);let T,R;if(p)T=1/(u-l),R=u/(u-l);else if(d===Hi)T=-2/(u-l),R=-(u+l)/(u-l);else if(d===tc)T=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=x,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=T,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ta=new Q,Ti=new tn,C_=new Q(0,0,0),R_=new Q(1,1,1),Hr=new Q,Rl=new Q,ai=new Q,Im=new tn,Um=new ws;class Yi{constructor(e=0,t=0,r=0,o=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],p=o[1],m=o[5],x=o[9],v=o[2],y=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-x,S),this._y=0);break;default:yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Im.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Im,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Um.setFromEuler(this),this.setFromQuaternion(Um,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let N_=0;const Om=new Q,na=new ws,cr=new tn,Nl=new Q,io=new Q,P_=new Q,D_=new ws,Fm=new Q(1,0,0),km=new Q(0,1,0),Bm=new Q(0,0,1),zm={type:"added"},L_={type:"removed"},ia={type:"childadded",child:null},ed={type:"childremoved",child:null};class Mn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Q,t=new Yi,r=new ws,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new Mt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.multiply(na),this}rotateOnWorldAxis(e,t){return na.setFromAxisAngle(e,t),this.quaternion.premultiply(na),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Bm,e)}translateOnAxis(e,t){return Om.copy(e).applyQuaternion(this.quaternion),this.position.add(Om.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(io,Nl,this.up):cr.lookAt(Nl,io,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),na.setFromRotationMatrix(cr),this.quaternion.premultiply(na.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zm),ia.child=e,this.dispatchEvent(ia),ia.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(L_),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zm),ia.child=e,this.dispatchEvent(ia),ia.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,P_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,D_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,x=p.length;m<x;m++){const v=p[m];l(e.shapes,v)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(l(e.materials,this.material[p]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(l(e.animations,p))}}if(t){const d=u(e.geometries),p=u(e.materials),m=u(e.textures),x=u(e.images),v=u(e.shapes),y=u(e.skeletons),S=u(e.animations),T=u(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),x.length>0&&(r.images=x),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(d){const p=[];for(const m in d){const x=d[m];delete x.metadata,p.push(x)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new Q,ur=new Q,td=new Q,dr=new Q,ra=new Q,sa=new Q,jm=new Q,nd=new Q,id=new Q,rd=new Q,sd=new rn,ad=new rn,od=new rn;class Ci{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ai.subVectors(o,t),ur.subVectors(r,t),td.subVectors(e,t);const u=Ai.dot(Ai),d=Ai.dot(ur),p=Ai.dot(td),m=ur.dot(ur),x=ur.dot(td),v=u*m-d*d;if(v===0)return l.set(0,0,0),null;const y=1/v,S=(m*p-d*x)*y,T=(u*x-d*p)*y;return l.set(1-S-T,T,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,dr)===null?!1:dr.x>=0&&dr.y>=0&&dr.x+dr.y<=1}static getInterpolation(e,t,r,o,l,u,d,p){return this.getBarycoord(e,t,r,o,dr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,dr.x),p.addScaledVector(u,dr.y),p.addScaledVector(d,dr.z),p)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),ur.subVectors(e,t),Ai.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ai.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;ra.subVectors(o,r),sa.subVectors(l,r),nd.subVectors(e,r);const p=ra.dot(nd),m=sa.dot(nd);if(p<=0&&m<=0)return t.copy(r);id.subVectors(e,o);const x=ra.dot(id),v=sa.dot(id);if(x>=0&&v<=x)return t.copy(o);const y=p*v-x*m;if(y<=0&&p>=0&&x<=0)return u=p/(p-x),t.copy(r).addScaledVector(ra,u);rd.subVectors(e,l);const S=ra.dot(rd),T=sa.dot(rd);if(T>=0&&S<=T)return t.copy(l);const R=S*m-p*T;if(R<=0&&m>=0&&T<=0)return d=m/(m-T),t.copy(r).addScaledVector(sa,d);const M=x*T-S*v;if(M<=0&&v-x>=0&&S-T>=0)return jm.subVectors(l,o),d=(v-x)/(v-x+(S-T)),t.copy(o).addScaledVector(jm,d);const _=1/(M+R+y);return u=R*_,d=y*_,t.copy(r).addScaledVector(ra,u).addScaledVector(sa,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Q0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ot.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ot.workingColorSpace){if(e=__(e,1),t=Rt(t,0,1),r=Rt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ld(u,l,e+1/3),this.g=ld(u,l,e),this.b=ld(u,l,e-1/3)}return Ot.colorSpaceToWorking(this,o),this}setStyle(e,t=Un){function r(l){l!==void 0&&parseFloat(l)<1&&yt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:yt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);yt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Un){const r=Q0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):yt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return Ot.workingToColorSpace(Ln.copy(this),e),Math.round(Rt(Ln.r*255,0,255))*65536+Math.round(Rt(Ln.g*255,0,255))*256+Math.round(Rt(Ln.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(Ln.copy(this),t);const r=Ln.r,o=Ln.g,l=Ln.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let p,m;const x=(d+u)/2;if(d===u)p=0,m=0;else{const v=u-d;switch(m=x<=.5?v/(u+d):v/(2-u-d),u){case r:p=(o-l)/v+(o<l?6:0);break;case o:p=(l-r)/v+2;break;case l:p=(r-o)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=x,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(Ln.copy(this),t),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Un){Ot.workingToColorSpace(Ln.copy(this),e);const t=Ln.r,r=Ln.g,o=Ln.b;return e!==Un?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Gr),this.setHSL(Gr.h+e,Gr.s+t,Gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Gr),e.getHSL(Pl);const r=Gu(Gr.h,Pl.h,t),o=Gu(Gr.s,Pl.s,t),l=Gu(Gr.l,Pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new wt;wt.NAMES=Q0;let I_=0;class So extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=ha,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bd,this.blendDst=Td,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){yt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){yt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ha&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==bd&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ma&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const p=l[d];delete p.metadata,u.push(p)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xi extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=I0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new Q,Dl=new gt;let U_=0;class Xi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:U_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Am,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Jn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),r=Jn(r,this.array),o=Jn(o,this.array),l=Jn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Am&&(e.usage=this.usage),e}}class J0 extends Xi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class eg extends Xi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class En extends Xi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let O_=0;const gi=new tn,cd=new Mn,aa=new Q,oi=new yo,ro=new yo,Sn=new Q;class vi extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O_++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(K0(e)?eg:J0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,r){return gi.makeTranslation(e,t,r),this.applyMatrix4(gi),this}scale(e,t,r){return gi.makeScale(e,t,r),this.applyMatrix4(gi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];oi.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];ro.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(oi.min,ro.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,ro.max),oi.expandByPoint(Sn)):(oi.expandByPoint(ro.min),oi.expandByPoint(ro.max))}oi.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)Sn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],p=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)Sn.fromBufferAttribute(d,m),p&&(aa.fromBufferAttribute(e,m),Sn.add(aa)),o=Math.max(o,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],p=[];for(let B=0;B<r.count;B++)d[B]=new Q,p[B]=new Q;const m=new Q,x=new Q,v=new Q,y=new gt,S=new gt,T=new gt,R=new Q,M=new Q;function _(B,b,P){m.fromBufferAttribute(r,B),x.fromBufferAttribute(r,b),v.fromBufferAttribute(r,P),y.fromBufferAttribute(l,B),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,P),x.sub(m),v.sub(m),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(R.copy(x).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),M.copy(v).multiplyScalar(S.x).addScaledVector(x,-T.x).multiplyScalar(z),d[B].add(R),d[b].add(R),d[P].add(R),p[B].add(M),p[b].add(M),p[P].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let B=0,b=A.length;B<b;++B){const P=A[B],z=P.start,$=P.count;for(let K=z,ue=z+$;K<ue;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const D=new Q,C=new Q,U=new Q,L=new Q;function O(B){U.fromBufferAttribute(o,B),L.copy(U);const b=d[B];D.copy(b),D.sub(U.multiplyScalar(U.dot(b))).normalize(),C.crossVectors(L,b);const z=C.dot(p[B])<0?-1:1;u.setXYZW(B,D.x,D.y,D.z,z)}for(let B=0,b=A.length;B<b;++B){const P=A[B],z=P.start,$=P.count;for(let K=z,ue=z+$;K<ue;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,S=r.count;y<S;y++)r.setXYZ(y,0,0,0);const o=new Q,l=new Q,u=new Q,d=new Q,p=new Q,m=new Q,x=new Q,v=new Q;if(e)for(let y=0,S=e.count;y<S;y+=3){const T=e.getX(y+0),R=e.getX(y+1),M=e.getX(y+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,M),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),d.fromBufferAttribute(r,T),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(x),p.add(x),m.add(x),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,S=t.count;y<S;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),x.subVectors(u,l),v.subVectors(o,l),x.cross(v),r.setXYZ(y+0,x.x,x.y,x.z),r.setXYZ(y+1,x.x,x.y,x.z),r.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,x=d.itemSize,v=d.normalized,y=new m.constructor(p.length*x);let S=0,T=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*x;for(let _=0;_<x;_++)y[T++]=m[S++]}return new Xi(y,x,v)}if(this.index===null)return yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vi,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const p=[],m=l[d];for(let x=0,v=m.length;x<v;x++){const y=m[x],S=e(y,r);p.push(S)}t.morphAttributes[d]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,p=u.length;d<p;d++){const m=u[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],x=[];for(let v=0,y=m.length;v<y;v++){const S=m[v];x.push(S.toJSON(e.data))}x.length>0&&(o[p]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(t))}const l=e.morphAttributes;for(const m in l){const x=[],v=l[m];for(let y=0,S=v.length;y<S;y++)x.push(v[y].clone(t));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vm=new tn,ms=new If,Ll=new Lf,Hm=new Q,Il=new Q,Ul=new Q,Ol=new Q,ud=new Q,Fl=new Q,Gm=new Q,kl=new Q;class st extends Mn{constructor(e=new vi,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Fl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const x=d[p],v=l[p];x!==0&&(ud.fromBufferAttribute(v,e),u?Fl.addScaledVector(ud,x):Fl.addScaledVector(ud.sub(t),x))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Ll.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ll,Hm)===null||ms.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Vm.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Vm),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,p=l.attributes.position,m=l.attributes.uv,x=l.attributes.uv1,v=l.attributes.normal,y=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,R=y.length;T<R;T++){const M=y[T],_=u[M.materialIndex],A=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=A,U=D;C<U;C+=3){const L=d.getX(C),O=d.getX(C+1),B=d.getX(C+2);o=Bl(this,_,e,r,m,x,v,L,O,B),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=T,_=R;M<_;M+=3){const A=d.getX(M),D=d.getX(M+1),C=d.getX(M+2);o=Bl(this,u,e,r,m,x,v,A,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(u))for(let T=0,R=y.length;T<R;T++){const M=y[T],_=u[M.materialIndex],A=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=A,U=D;C<U;C+=3){const L=C,O=C+1,B=C+2;o=Bl(this,_,e,r,m,x,v,L,O,B),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=M.materialIndex,t.push(o))}}else{const T=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=T,_=R;M<_;M+=3){const A=M,D=M+1,C=M+2;o=Bl(this,u,e,r,m,x,v,A,D,C),o&&(o.faceIndex=Math.floor(M/3),t.push(o))}}}}function F_(s,e,t,r,o,l,u,d){let p;if(e.side===ti?p=r.intersectTriangle(u,l,o,!0,d):p=r.intersectTriangle(o,l,u,e.side===Kr,d),p===null)return null;kl.copy(d),kl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(kl);return m<t.near||m>t.far?null:{distance:m,point:kl.clone(),object:s}}function Bl(s,e,t,r,o,l,u,d,p,m){s.getVertexPosition(d,Il),s.getVertexPosition(p,Ul),s.getVertexPosition(m,Ol);const x=F_(s,e,t,r,Il,Ul,Ol,Gm);if(x){const v=new Q;Ci.getBarycoord(Gm,Il,Ul,Ol,v),o&&(x.uv=Ci.getInterpolatedAttribute(o,d,p,m,v,new gt)),l&&(x.uv1=Ci.getInterpolatedAttribute(l,d,p,m,v,new gt)),u&&(x.normal=Ci.getInterpolatedAttribute(u,d,p,m,v,new Q),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new Q,materialIndex:0};Ci.getNormal(Il,Ul,Ol,y.normal),x.face=y,x.barycoord=v}return x}class Yt extends vi{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const p=[],m=[],x=[],v=[];let y=0,S=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(x,3)),this.setAttribute("uv",new En(v,2));function T(R,M,_,A,D,C,U,L,O,B,b){const P=C/O,z=U/B,$=C/2,K=U/2,ue=L/2,de=O+1,ae=B+1;let Z=0,q=0;const me=new Q;for(let re=0;re<ae;re++){const k=re*z-K;for(let se=0;se<de;se++){const Ce=se*P-$;me[R]=Ce*A,me[M]=k*D,me[_]=ue,m.push(me.x,me.y,me.z),me[R]=0,me[M]=0,me[_]=L>0?1:-1,x.push(me.x,me.y,me.z),v.push(se/O),v.push(1-re/B),Z+=1}}for(let re=0;re<B;re++)for(let k=0;k<O;k++){const se=y+k+de*re,Ce=y+k+de*(re+1),He=y+(k+1)+de*(re+1),ve=y+(k+1)+de*re;p.push(se,Ce,ve),p.push(Ce,He,ve),q+=6}d.addGroup(S,q,b),S+=q,y+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const r=_a(s[t]);for(const o in r)e[o]=r[o]}return e}function k_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function tg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const B_={clone:_a,merge:Hn};var z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=z_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=k_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ng extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Wr=new Q,Wm=new gt,Xm=new gt;class Xn extends ng{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,Xm),t.subVectors(Xm,Wm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,m=u.fullHeight;l+=u.offsetX*o/p,t-=u.offsetY*r/m,o*=u.width/p,r*=u.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,la=1;class V_ extends Mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Xn(oa,la,e,t);o.layers=this.layers,this.add(o);const l=new Xn(oa,la,e,t);l.layers=this.layers,this.add(l);const u=new Xn(oa,la,e,t);u.layers=this.layers,this.add(u);const d=new Xn(oa,la,e,t);d.layers=this.layers,this.add(d);const p=new Xn(oa,la,e,t);p.layers=this.layers,this.add(p);const m=new Xn(oa,la,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,p]=t;for(const m of t)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,p,m,x]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,o),e.render(t,x),e.setRenderTarget(v,y,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class ig extends An{constructor(e=[],t=Es,r,o,l,u,d,p,m,x){super(e,t,r,o,l,u,d,p,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rg extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ig(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Yt(5,5,5),l=new $i({name:"CubemapFromEquirect",uniforms:_a(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ti,blending:mr});l.uniforms.tEquirect.value=t;const u=new st(o,l),d=t.minFilter;return t.minFilter===Ss&&(t.minFilter=On),new V_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class In extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const H_={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const R of e.hand.values()){const M=t.getJointPose(R,r),_=this._getHandJoint(m,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const x=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=x.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&y>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(H_)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new In;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Of{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=t}clone(){return new Of(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sg extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class G_ extends An{constructor(e=null,t=1,r=1,o,l,u,d,p,m=Tn,x=Tn,v,y){super(null,u,d,p,m,x,o,l,v,y),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Q,W_=new Q,X_=new Mt;class qr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(W_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||X_.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Lf,q_=new gt(.5,.5),zl=new Q;class Ff{constructor(e=new qr,t=new qr,r=new qr,o=new qr,l=new qr,u=new qr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Hi,r=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],p=l[2],m=l[3],x=l[4],v=l[5],y=l[6],S=l[7],T=l[8],R=l[9],M=l[10],_=l[11],A=l[12],D=l[13],C=l[14],U=l[15];if(o[0].setComponents(m-u,S-x,_-T,U-A).normalize(),o[1].setComponents(m+u,S+x,_+T,U+A).normalize(),o[2].setComponents(m+d,S+v,_+R,U+D).normalize(),o[3].setComponents(m-d,S-v,_-R,U-D).normalize(),r)o[4].setComponents(p,y,M,C).normalize(),o[5].setComponents(m-p,S-y,_-M,U-C).normalize();else if(o[4].setComponents(m-p,S-y,_-M,U-C).normalize(),t===Hi)o[5].setComponents(m+p,S+y,_+M,U+C).normalize();else if(t===tc)o[5].setComponents(p,y,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=q_.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ag extends An{constructor(e,t,r,o,l,u,d,p,m){super(e,t,r,o,l,u,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends An{constructor(e,t,r=qi,o,l,u,d=Tn,p=Tn,m,x=vr,v=1){if(x!==vr&&x!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:t,depth:v};super(y,o,l,u,d,p,x,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Y_ extends xo{constructor(e,t=qi,r=Es,o,l,u=Tn,d=Tn,p,m=vr){const x={width:e,height:e,depth:1},v=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class og extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gn extends vi{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const x=[],v=[],y=[],S=[];let T=0;const R=[],M=r/2;let _=0;A(),u===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(x),this.setAttribute("position",new En(v,3)),this.setAttribute("normal",new En(y,3)),this.setAttribute("uv",new En(S,2));function A(){const C=new Q,U=new Q;let L=0;const O=(t-e)/r;for(let B=0;B<=l;B++){const b=[],P=B/l,z=P*(t-e)+e;for(let $=0;$<=o;$++){const K=$/o,ue=K*p+d,de=Math.sin(ue),ae=Math.cos(ue);U.x=z*de,U.y=-P*r+M,U.z=z*ae,v.push(U.x,U.y,U.z),C.set(de,O,ae).normalize(),y.push(C.x,C.y,C.z),S.push(K,1-P),b.push(T++)}R.push(b)}for(let B=0;B<o;B++)for(let b=0;b<l;b++){const P=R[b][B],z=R[b+1][B],$=R[b+1][B+1],K=R[b][B+1];(e>0||b!==0)&&(x.push(P,z,K),L+=3),(t>0||b!==l-1)&&(x.push(z,$,K),L+=3)}m.addGroup(_,L,0),_+=L}function D(C){const U=T,L=new gt,O=new Q;let B=0;const b=C===!0?e:t,P=C===!0?1:-1;for(let $=1;$<=o;$++)v.push(0,M*P,0),y.push(0,P,0),S.push(.5,.5),T++;const z=T;for(let $=0;$<=o;$++){const ue=$/o*p+d,de=Math.cos(ue),ae=Math.sin(ue);O.x=b*ae,O.y=M*P,O.z=b*de,v.push(O.x,O.y,O.z),y.push(0,P,0),L.x=de*.5+.5,L.y=ae*.5*P+.5,S.push(L.x,L.y),T++}for(let $=0;$<o;$++){const K=U+$,ue=z+$;C===!0?x.push(ue,ue+1,K):x.push(ue+1,ue,K),B+=3}m.addGroup(_,B,C===!0?1:2),_+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kf extends Gn{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new kf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bf extends vi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],u=[];d(o),m(r),x(),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(l.slice(),3)),this.setAttribute("uv",new En(u,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function d(A){const D=new Q,C=new Q,U=new Q;for(let L=0;L<t.length;L+=3)S(t[L+0],D),S(t[L+1],C),S(t[L+2],U),p(D,C,U,A)}function p(A,D,C,U){const L=U+1,O=[];for(let B=0;B<=L;B++){O[B]=[];const b=A.clone().lerp(C,B/L),P=D.clone().lerp(C,B/L),z=L-B;for(let $=0;$<=z;$++)$===0&&B===L?O[B][$]=b:O[B][$]=b.clone().lerp(P,$/z)}for(let B=0;B<L;B++)for(let b=0;b<2*(L-B)-1;b++){const P=Math.floor(b/2);b%2===0?(y(O[B][P+1]),y(O[B+1][P]),y(O[B][P])):(y(O[B][P+1]),y(O[B+1][P+1]),y(O[B+1][P]))}}function m(A){const D=new Q;for(let C=0;C<l.length;C+=3)D.x=l[C+0],D.y=l[C+1],D.z=l[C+2],D.normalize().multiplyScalar(A),l[C+0]=D.x,l[C+1]=D.y,l[C+2]=D.z}function x(){const A=new Q;for(let D=0;D<l.length;D+=3){A.x=l[D+0],A.y=l[D+1],A.z=l[D+2];const C=M(A)/2/Math.PI+.5,U=_(A)/Math.PI+.5;u.push(C,1-U)}T(),v()}function v(){for(let A=0;A<u.length;A+=6){const D=u[A+0],C=u[A+2],U=u[A+4],L=Math.max(D,C,U),O=Math.min(D,C,U);L>.9&&O<.1&&(D<.2&&(u[A+0]+=1),C<.2&&(u[A+2]+=1),U<.2&&(u[A+4]+=1))}}function y(A){l.push(A.x,A.y,A.z)}function S(A,D){const C=A*3;D.x=e[C+0],D.y=e[C+1],D.z=e[C+2]}function T(){const A=new Q,D=new Q,C=new Q,U=new Q,L=new gt,O=new gt,B=new gt;for(let b=0,P=0;b<l.length;b+=9,P+=6){A.set(l[b+0],l[b+1],l[b+2]),D.set(l[b+3],l[b+4],l[b+5]),C.set(l[b+6],l[b+7],l[b+8]),L.set(u[P+0],u[P+1]),O.set(u[P+2],u[P+3]),B.set(u[P+4],u[P+5]),U.copy(A).add(D).add(C).divideScalar(3);const z=M(U);R(L,P+0,A,z),R(O,P+2,D,z),R(B,P+4,C,z)}}function R(A,D,C,U){U<0&&A.x===1&&(u[D]=A.x-1),C.x===0&&C.z===0&&(u[D]=U/2/Math.PI+.5)}function M(A){return Math.atan2(A.z,-A.x)}function _(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.vertices,e.indices,e.radius,e.detail)}}class zf extends Bf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],u=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,u,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zf(e.radius,e.detail)}}class Wn extends vi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),p=Math.floor(o),m=d+1,x=p+1,v=e/d,y=t/p,S=[],T=[],R=[],M=[];for(let _=0;_<x;_++){const A=_*y-u;for(let D=0;D<m;D++){const C=D*v-l;T.push(C,-A,0),R.push(0,0,1),M.push(D/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let A=0;A<d;A++){const D=A+m*_,C=A+m*(_+1),U=A+1+m*(_+1),L=A+1+m*_;S.push(D,C,L),S.push(C,U,L)}this.setIndex(S),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(R,3)),this.setAttribute("uv",new En(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wn(e.width,e.height,e.widthSegments,e.heightSegments)}}class fo extends vi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(u+d,Math.PI);let m=0;const x=[],v=new Q,y=new Q,S=[],T=[],R=[],M=[];for(let _=0;_<=r;_++){const A=[],D=_/r;let C=0;_===0&&u===0?C=.5/t:_===r&&p===Math.PI&&(C=-.5/t);for(let U=0;U<=t;U++){const L=U/t;v.x=-e*Math.cos(o+L*l)*Math.sin(u+D*d),v.y=e*Math.cos(u+D*d),v.z=e*Math.sin(o+L*l)*Math.sin(u+D*d),T.push(v.x,v.y,v.z),y.copy(v).normalize(),R.push(y.x,y.y,y.z),M.push(L+C,1-D),A.push(m++)}x.push(A)}for(let _=0;_<r;_++)for(let A=0;A<t;A++){const D=x[_][A+1],C=x[_][A],U=x[_+1][A],L=x[_+1][A+1];(_!==0||u>0)&&S.push(D,C,L),(_!==r-1||p<Math.PI)&&S.push(C,U,L)}this.setIndex(S),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(R,3)),this.setAttribute("uv",new En(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $_ extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$0,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Q_{constructor(e,t,r){const o=this;let l=!1,u=0,d=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(x){d++,l===!1&&o.onStart!==void 0&&o.onStart(x,u,d),l=!0},this.itemEnd=function(x){u++,o.onProgress!==void 0&&o.onProgress(x,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(x){o.onError!==void 0&&o.onError(x)},this.resolveURL=function(x){return p?p(x):x},this.setURLModifier=function(x){return p=x,this},this.addHandler=function(x,v){return m.push(x,v),this},this.removeHandler=function(x){const v=m.indexOf(x);return v!==-1&&m.splice(v,2),this},this.getHandler=function(x){for(let v=0,y=m.length;v<y;v+=2){const S=m[v],T=m[v+1];if(S.global&&(S.lastIndex=0),S.test(x))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const J_=new Q_;class jf{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ca=new WeakMap;class e1 extends jf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,u=hd.get(`image:${e}`);if(u!==void 0){if(u.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(u),l.manager.itemEnd(e)},0);else{let v=ca.get(u);v===void 0&&(v=[],ca.set(u,v)),v.push({onLoad:t,onError:o})}return u}const d=mo("img");function p(){x(),t&&t(this);const v=ca.get(this)||[];for(let y=0;y<v.length;y++){const S=v[y];S.onLoad&&S.onLoad(this)}ca.delete(this),l.manager.itemEnd(e)}function m(v){x(),o&&o(v),hd.remove(`image:${e}`);const y=ca.get(this)||[];for(let S=0;S<y.length;S++){const T=y[S];T.onError&&T.onError(v)}ca.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function x(){d.removeEventListener("load",p,!1),d.removeEventListener("error",m,!1)}return d.addEventListener("load",p,!1),d.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),hd.add(`image:${e}`,d),l.manager.itemStart(e),d.src=e,d}}class lg extends jf{constructor(e){super(e)}load(e,t,r,o){const l=new An,u=new e1(this.manager);return u.setCrossOrigin(this.crossOrigin),u.setPath(this.path),u.load(e,function(d){l.image=d,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class ac extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pd=new tn,qm=new Q,Ym=new Q;class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ff,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(qm),Ym.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ym),t.updateMatrixWorld(),pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t1 extends Vf{constructor(){super(new Xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=nc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class n1 extends ac{constructor(e,t,r=0,o=Math.PI/3,l=0,u=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=u,this.map=null,this.shadow=new t1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class i1 extends Vf{constructor(){super(new Xn(90,1,.5,500)),this.isPointLightShadow=!0}}class $m extends ac{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Hf extends ng{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,d-=x*this.view.offsetY,p=d-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r1 extends Vf{constructor(){super(new Hf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cg extends ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s1 extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Km=new tn;class ug{constructor(e,t,r=0,o=1/0){this.ray=new If(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Km.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Km),this}intersectObject(e,t=!0,r=[]){return vf(e,this,r,t),r.sort(Zm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)vf(e[o],this,r,t);return r.sort(Zm),r}}function Zm(s,e){return s.distance-e.distance}function vf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)vf(l[u],e,t,!0)}}class Qm{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Rt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o1 extends bs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){yt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Jm(s,e,t,r){const o=l1(r);switch(t){case X0:return s*e;case Y0:return s*e/o.components*o.byteLength;case Af:return s*e/o.components*o.byteLength;case xa:return s*e*2/o.components*o.byteLength;case Cf:return s*e*2/o.components*o.byteLength;case q0:return s*e*3/o.components*o.byteLength;case Ri:return s*e*4/o.components*o.byteLength;case Rf:return s*e*4/o.components*o.byteLength;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case jd:return Math.max(s,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case Hd:case Wd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Gd:case qd:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l1(s){switch(s){case li:case V0:return{byteLength:1,components:1};case ho:case H0:case xr:return{byteLength:2,components:1};case bf:case Tf:return{byteLength:2,components:4};case qi:case wf:case Vi:return{byteLength:4,components:1};case G0:case W0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function c1(s){const e=new WeakMap;function t(d,p){const m=d.array,x=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,x),d.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const x=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,x);else{v.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<v.length;S++){const T=v[y],R=v[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++y,v[y]=R)}v.length=y+1;for(let S=0,T=v.length;S<T;S++){const R=v[S];s.bufferSubData(m,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function u(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:l,update:u}}var u1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,d1=`#ifdef USE_ALPHAHASH
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
#endif`,f1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,h1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g1=`#ifdef USE_AOMAP
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
#endif`,x1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,v1=`#ifdef USE_BATCHING
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
#endif`,_1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,S1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M1=`float G_BlinnPhong_Implicit( ) {
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
#endif`,w1=`#ifdef USE_BUMPMAP
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
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,T1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,C1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,P1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,L1=`#define PI 3.141592653589793
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
} // validated`,I1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U1=`vec3 transformedNormal = objectNormal;
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
#endif`,O1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,k1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,z1="gl_FragColor = linearToOutputTexel( gl_FragColor );",j1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,V1=`#ifdef USE_ENVMAP
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
#endif`,H1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,G1=`#ifdef USE_ENVMAP
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
#endif`,W1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,X1=`#ifdef USE_ENVMAP
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
#endif`,q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,K1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Z1=`#ifdef USE_GRADIENTMAP
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
}`,Q1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ty=`uniform bool receiveShadow;
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
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ry=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
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
#endif`,ly=`uniform sampler2D dfgLUT;
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
}`,cy=`
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,My=`#ifdef USE_INSTANCING_MORPH
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
#endif`,wy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,by=`#ifdef USE_MORPHTARGETS
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
#endif`,Ty=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ny=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dy=`#ifdef USE_NORMALMAP
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
#endif`,Ly=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,$y=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,iS=`#ifdef USE_TRANSMISSION
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
#endif`,rS=`#ifdef USE_TRANSMISSION
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
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uS=`uniform sampler2D t2D;
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
}`,dS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mS=`#include <common>
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
}`,gS=`#if DEPTH_PACKING == 3200
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
}`,xS=`#define DISTANCE
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
}`,vS=`#define DISTANCE
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
}`,_S=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SS=`uniform float scale;
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
}`,MS=`uniform vec3 diffuse;
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
}`,wS=`uniform vec3 diffuse;
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
}`,bS=`#define LAMBERT
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
}`,TS=`#define LAMBERT
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
}`,AS=`#define MATCAP
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
}`,CS=`#define MATCAP
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
}`,RS=`#define NORMAL
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
}`,NS=`#define NORMAL
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
}`,PS=`#define PHONG
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
}`,DS=`#define PHONG
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
}`,LS=`#define STANDARD
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
}`,IS=`#define STANDARD
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
}`,US=`#define TOON
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
}`,OS=`#define TOON
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
}`,FS=`uniform float size;
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
}`,kS=`uniform vec3 diffuse;
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
}`,BS=`#include <common>
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
}`,zS=`uniform vec3 color;
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
}`,jS=`uniform float rotation;
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
}`,VS=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:u1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:x1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:S1,bsdfs:M1,iridescence_fragment:E1,bumpmap_pars_fragment:w1,clipping_planes_fragment:b1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:R1,color_pars_fragment:N1,color_pars_vertex:P1,color_vertex:D1,common:L1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:U1,displacementmap_pars_vertex:O1,displacementmap_vertex:F1,emissivemap_fragment:k1,emissivemap_pars_fragment:B1,colorspace_fragment:z1,colorspace_pars_fragment:j1,envmap_fragment:V1,envmap_common_pars_fragment:H1,envmap_pars_fragment:G1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:ny,envmap_vertex:X1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:$1,fog_pars_fragment:K1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:Q1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:ay,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:Ey,morphnormal_vertex:wy,morphtarget_pars_vertex:by,morphtarget_vertex:Ty,normal_fragment_begin:Ay,normal_fragment_maps:Cy,normal_pars_fragment:Ry,normal_pars_vertex:Ny,normal_vertex:Py,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Oy,opaque_fragment:Fy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:jy,dithering_pars_fragment:Vy,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:aS,uv_vertex:oS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:xS,distance_frag:vS,equirect_vert:_S,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:wS,meshlambert_vert:bS,meshlambert_frag:TS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:NS,meshphong_vert:PS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:IS,meshtoon_vert:US,meshtoon_frag:OS,points_vert:FS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:jS,sprite_frag:VS},je={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ji={basic:{uniforms:Hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Hn([je.common,je.specularmap,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.fog,je.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Hn([je.common,je.envmap,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.roughnessmap,je.metalnessmap,je.fog,je.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Hn([je.common,je.aomap,je.lightmap,je.emissivemap,je.bumpmap,je.normalmap,je.displacementmap,je.gradientmap,je.fog,je.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Hn([je.common,je.bumpmap,je.normalmap,je.displacementmap,je.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Hn([je.points,je.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Hn([je.common,je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Hn([je.common,je.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Hn([je.common,je.bumpmap,je.normalmap,je.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Hn([je.sprite,je.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Hn([je.common,je.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Hn([je.lights,je.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};ji.physical={uniforms:Hn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const jl={r:0,b:0,g:0},xs=new Yi,HS=new tn;function GS(s,e,t,r,o,l,u){const d=new wt(0);let p=l===!0?0:1,m,x,v=null,y=0,S=null;function T(D){let C=D.isScene===!0?D.background:null;return C&&C.isTexture&&(C=(D.backgroundBlurriness>0?t:e).get(C)),C}function R(D){let C=!1;const U=T(D);U===null?_(d,p):U&&U.isColor&&(_(U,1),C=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?r.buffers.color.setClear(0,0,0,1,u):L==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(D,C){const U=T(C);U&&(U.isCubeTexture||U.mapping===sc)?(x===void 0&&(x=new st(new Yt(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:_a(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(L,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),xs.copy(C.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),x.material.uniforms.envMap.value=U,x.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(HS.makeRotationFromEuler(xs)),x.material.toneMapped=Ot.getTransfer(U.colorSpace)!==Gt,(v!==U||y!==U.version||S!==s.toneMapping)&&(x.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),x.layers.enableAll(),D.unshift(x,x.geometry,x.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new st(new Wn(2,2),new $i({name:"BackgroundMaterial",uniforms:_a(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(U.colorSpace)!==Gt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(v!==U||y!==U.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=U,y=U.version,S=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,C){D.getRGB(jl,tg(s)),r.buffers.color.setClear(jl.r,jl.g,jl.b,C,u)}function A(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,C=1){d.set(D),p=C,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:R,addToRenderList:M,dispose:A}}function WS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(P,z,$,K,ue){let de=!1;const ae=v(K,$,z);l!==ae&&(l=ae,m(l.object)),de=S(P,K,$,ue),de&&T(P,K,$,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,C(P,z,$,K),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function p(){return s.createVertexArray()}function m(P){return s.bindVertexArray(P)}function x(P){return s.deleteVertexArray(P)}function v(P,z,$){const K=$.wireframe===!0;let ue=r[P.id];ue===void 0&&(ue={},r[P.id]=ue);let de=ue[z.id];de===void 0&&(de={},ue[z.id]=de);let ae=de[K];return ae===void 0&&(ae=y(p()),de[K]=ae),ae}function y(P){const z=[],$=[],K=[];for(let ue=0;ue<t;ue++)z[ue]=0,$[ue]=0,K[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:K,object:P,attributes:{},index:null}}function S(P,z,$,K){const ue=l.attributes,de=z.attributes;let ae=0;const Z=$.getAttributes();for(const q in Z)if(Z[q].location>=0){const re=ue[q];let k=de[q];if(k===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),re===void 0||re.attribute!==k||k&&re.data!==k.data)return!0;ae++}return l.attributesNum!==ae||l.index!==K}function T(P,z,$,K){const ue={},de=z.attributes;let ae=0;const Z=$.getAttributes();for(const q in Z)if(Z[q].location>=0){let re=de[q];re===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(re=P.instanceColor));const k={};k.attribute=re,re&&re.data&&(k.data=re.data),ue[q]=k,ae++}l.attributes=ue,l.attributesNum=ae,l.index=K}function R(){const P=l.newAttributes;for(let z=0,$=P.length;z<$;z++)P[z]=0}function M(P){_(P,0)}function _(P,z){const $=l.newAttributes,K=l.enabledAttributes,ue=l.attributeDivisors;$[P]=1,K[P]===0&&(s.enableVertexAttribArray(P),K[P]=1),ue[P]!==z&&(s.vertexAttribDivisor(P,z),ue[P]=z)}function A(){const P=l.newAttributes,z=l.enabledAttributes;for(let $=0,K=z.length;$<K;$++)z[$]!==P[$]&&(s.disableVertexAttribArray($),z[$]=0)}function D(P,z,$,K,ue,de,ae){ae===!0?s.vertexAttribIPointer(P,z,$,ue,de):s.vertexAttribPointer(P,z,$,K,ue,de)}function C(P,z,$,K){R();const ue=K.attributes,de=$.getAttributes(),ae=z.defaultAttributeValues;for(const Z in de){const q=de[Z];if(q.location>=0){let me=ue[Z];if(me===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(me=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(me=P.instanceColor)),me!==void 0){const re=me.normalized,k=me.itemSize,se=e.get(me);if(se===void 0)continue;const Ce=se.buffer,He=se.type,ve=se.bytesPerElement,ne=He===s.INT||He===s.UNSIGNED_INT||me.gpuType===wf;if(me.isInterleavedBufferAttribute){const pe=me.data,ye=pe.stride,Ne=me.offset;if(pe.isInstancedInterleavedBuffer){for(let V=0;V<q.locationSize;V++)_(q.location+V,pe.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let V=0;V<q.locationSize;V++)M(q.location+V);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let V=0;V<q.locationSize;V++)D(q.location+V,k/q.locationSize,He,re,ye*ve,(Ne+k/q.locationSize*V)*ve,ne)}else{if(me.isInstancedBufferAttribute){for(let pe=0;pe<q.locationSize;pe++)_(q.location+pe,me.meshPerAttribute);P.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let pe=0;pe<q.locationSize;pe++)M(q.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let pe=0;pe<q.locationSize;pe++)D(q.location+pe,k/q.locationSize,He,re,k*ve,k/q.locationSize*pe*ve,ne)}}else if(ae!==void 0){const re=ae[Z];if(re!==void 0)switch(re.length){case 2:s.vertexAttrib2fv(q.location,re);break;case 3:s.vertexAttrib3fv(q.location,re);break;case 4:s.vertexAttrib4fv(q.location,re);break;default:s.vertexAttrib1fv(q.location,re)}}}}A()}function U(){B();for(const P in r){const z=r[P];for(const $ in z){const K=z[$];for(const ue in K)x(K[ue].object),delete K[ue];delete z[$]}delete r[P]}}function L(P){if(r[P.id]===void 0)return;const z=r[P.id];for(const $ in z){const K=z[$];for(const ue in K)x(K[ue].object),delete K[ue];delete z[$]}delete r[P.id]}function O(P){for(const z in r){const $=r[z];if($[P.id]===void 0)continue;const K=$[P.id];for(const ue in K)x(K[ue].object),delete K[ue];delete $[P.id]}}function B(){b(),u=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:B,resetDefaultState:b,dispose:U,releaseStatesOfGeometry:L,releaseStatesOfProgram:O,initAttributes:R,enableAttribute:M,disableUnusedAttributes:A}}function XS(s,e,t){let r;function o(m){r=m}function l(m,x){s.drawArrays(r,m,x),t.update(x,r,1)}function u(m,x,v){v!==0&&(s.drawArraysInstanced(r,m,x,v),t.update(x,r,v))}function d(m,x,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,x,0,v);let S=0;for(let T=0;T<v;T++)S+=x[T];t.update(S,r,1)}function p(m,x,v,y){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)u(m[T],x[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,x,0,y,0,v);let T=0;for(let R=0;R<v;R++)T+=x[R]*y[R];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function qS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==Ri&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const B=O===xr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==li&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!B)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const x=p(m);x!==m&&(yt("WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const v=t.logarithmicDepthBuffer===!0,y=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),L=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:A,maxVaryings:D,maxFragmentUniforms:C,maxSamples:U,samples:L}}function YS(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new qr,d=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const S=v.length!==0||y||r!==0||o;return o=y,r=v.length,S},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,y){t=x(v,y,0)},this.setState=function(v,y,S){const T=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!o||T===null||T.length===0||l&&!M)l?x(null):m();else{const A=l?0:r,D=A*4;let C=_.clippingState||null;p.value=C,C=x(T,y,D,S);for(let U=0;U!==D;++U)C[U]=t[U];_.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(v,y,S,T){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=p.value,T!==!0||M===null){const _=S+R*4,A=y.matrixWorldInverse;d.getNormalMatrix(A),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,C=S;D!==R;++D,C+=4)u.copy(v[D]).applyMatrix4(A,d),u.normal.toArray(M,C),M[C+3]=u.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function $S(s){let e=new WeakMap;function t(u,d){return d===Id?u.mapping=Es:d===Ud&&(u.mapping=ga),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Id||d===Ud)if(e.has(u)){const p=e.get(u).texture;return t(p,u.mapping)}else{const p=u.image;if(p&&p.height>0){const m=new rg(p.height);return m.fromEquirectangularTexture(s,u),e.set(u,m),u.addEventListener("dispose",o),t(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const $r=4,e0=[.125,.215,.35,.446,.526,.582],ys=20,KS=256,so=new Hf,t0=new wt;let md=null,gd=0,xd=0,vd=!1;const ZS=new Q;class n0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:d=ZS}=l;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=r0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,xd),this._renderer.xr.enabled=vd,e.scissorTest=!1,ua(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:On,minFilter:On,generateMipmaps:!1,type:xr,format:Ri,colorSpace:va,depthBuffer:!1},o=i0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=i0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QS(l)),this._blurMaterial=eM(l,e,t),this._ggxMaterial=JS(l,e,t)}return o}_compileMaterial(e){const t=new st(new vi,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,r,o,l){const p=new Xn(90,1,t,r),m=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,S=v.toneMapping;v.getClearColor(t0),v.toneMapping=Gi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new Yt,new xi({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const A=e.background;A?A.isColor&&(M.color.copy(A),e.background=null,_=!0):(M.color.copy(t0),_=!0);for(let D=0;D<6;D++){const C=D%3;C===0?(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+x[D],l.y,l.z)):C===1?(p.up.set(0,0,m[D]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+x[D],l.z)):(p.up.set(0,m[D],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+x[D]));const U=this._cubeSize;ua(o,C*U,D>2?U:0,U,U),v.setRenderTarget(o),_&&v.render(R,p),v.render(e,p)}v.toneMapping=S,v.autoClear=y,e.background=A}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ga;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=r0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const p=this._cubeSize;ua(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,so)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[r];d.material=u;const p=u.uniforms,m=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),v=Math.sqrt(m*m-x*x),y=0+m*1.25,S=v*y,{_lodMax:T}=this,R=this._sizeLods[r],M=3*R*(r>T-$r?r-T+$r:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=S,p.mipInt.value=T-t,ua(l,M,_,3*R,2*R),o.setRenderTarget(l),o.render(d,so),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,ua(e,M,_,3*R,2*R),o.setRenderTarget(e),o.render(d,so)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const p=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const x=3,v=this._lodMeshes[o];v.material=m;const y=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ys-1),R=l/T,M=isFinite(l)?1+Math.floor(x*R):ys;M>ys&&yt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${ys}`);const _=[];let A=0;for(let O=0;O<ys;++O){const B=O/R,b=Math.exp(-B*B/2);_.push(b),O===0?A+=b:O<M&&(A+=2*b)}for(let O=0;O<_.length;O++)_[O]=_[O]/A;y.envMap.value=e.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=T,y.mipInt.value=D-r;const C=this._sizeLods[o],U=3*C*(o>D-$r?o-D+$r:0),L=4*(this._cubeSize-C);ua(t,U,L,3*C,2*C),p.setRenderTarget(t),p.render(v,so)}}function QS(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+e0.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);e.push(d);let p=1/d;u>s-$r?p=e0[u-s+$r-1]:u===0&&(p=0),t.push(p);const m=1/(d-2),x=-m,v=1+m,y=[x,x,v,x,v,v,x,x,v,v,x,v],S=6,T=6,R=3,M=2,_=1,A=new Float32Array(R*T*S),D=new Float32Array(M*T*S),C=new Float32Array(_*T*S);for(let L=0;L<S;L++){const O=L%3*2/3-1,B=L>2?0:-1,b=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];A.set(b,R*T*L),D.set(y,M*T*L);const P=[L,L,L,L,L,L];C.set(P,_*T*L)}const U=new vi;U.setAttribute("position",new Xi(A,R)),U.setAttribute("uv",new Xi(D,M)),U.setAttribute("faceIndex",new Xi(C,_)),r.push(new st(U,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function i0(s,e,t){const r=new Wi(s,e,t);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ua(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function JS(s,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function eM(s,e,t){const r=new Float32Array(ys),o=new Q(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function r0(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function s0(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function tM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Id||p===Ud,x=p===Es||p===ga;if(m||x){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new n0(s)),v=m?t.fromEquirectangular(d,v):t.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const S=d.image;return m&&S&&S.height>0||x&&S&&o(S)?(t===null&&(t=new n0(s)),v=m?t.fromEquirectangular(d):t.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",l),v.texture):null}}}return d}function o(d){let p=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&p++;return p===m}function l(d){const p=d.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function nM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&go("WebGLRenderer: "+r+" extension not supported."),o}}}function iM(s,e,t,r){const o={},l=new WeakMap;function u(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);y.removeEventListener("dispose",u),delete o[y.id];const S=l.get(y);S&&(e.remove(S),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(v,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function p(v){const y=v.attributes;for(const S in y)e.update(y[S],s.ARRAY_BUFFER)}function m(v){const y=[],S=v.index,T=v.attributes.position;let R=0;if(S!==null){const A=S.array;R=S.version;for(let D=0,C=A.length;D<C;D+=3){const U=A[D+0],L=A[D+1],O=A[D+2];y.push(U,L,L,O,O,U)}}else if(T!==void 0){const A=T.array;R=T.version;for(let D=0,C=A.length/3-1;D<C;D+=3){const U=D+0,L=D+1,O=D+2;y.push(U,L,L,O,O,U)}}else return;const M=new(K0(y)?eg:J0)(y,1);M.version=R;const _=l.get(v);_&&e.remove(_),l.set(v,M)}function x(v){const y=l.get(v);if(y){const S=v.index;S!==null&&y.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:d,update:p,getWireframeAttribute:x}}function rM(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function p(y,S){s.drawElements(r,S,l,y*u),t.update(S,r,1)}function m(y,S,T){T!==0&&(s.drawElementsInstanced(r,S,l,y*u,T),t.update(S,r,T))}function x(y,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,y,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];t.update(M,r,1)}function v(y,S,T,R){if(T===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/u,S[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,l,y,0,R,0,T);let _=0;for(let A=0;A<T;A++)_+=S[A]*R[A];t.update(_,r,1)}}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=v}function sM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aM(s,e,t){const r=new WeakMap,o=new rn;function l(u,d,p){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=x!==void 0?x.length:0;let y=r.get(d);if(y===void 0||y.count!==v){let P=function(){B.dispose(),r.delete(d),d.removeEventListener("dispose",P)};var S=P;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let C=0;T===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let U=d.attributes.position.count*C,L=1;U>e.maxTextureSize&&(L=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*L*4*v),B=new Z0(O,U,L,v);B.type=Vi,B.needsUpdate=!0;const b=C*4;for(let z=0;z<v;z++){const $=_[z],K=A[z],ue=D[z],de=U*L*4*z;for(let ae=0;ae<$.count;ae++){const Z=ae*b;T===!0&&(o.fromBufferAttribute($,ae),O[de+Z+0]=o.x,O[de+Z+1]=o.y,O[de+Z+2]=o.z,O[de+Z+3]=0),R===!0&&(o.fromBufferAttribute(K,ae),O[de+Z+4]=o.x,O[de+Z+5]=o.y,O[de+Z+6]=o.z,O[de+Z+7]=0),M===!0&&(o.fromBufferAttribute(ue,ae),O[de+Z+8]=o.x,O[de+Z+9]=o.y,O[de+Z+10]=o.z,O[de+Z+11]=ue.itemSize===4?o.w:1)}}y={count:v,texture:B,size:new gt(U,L)},r.set(d,y),d.addEventListener("dispose",P)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const R=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function oM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,x=p.geometry,v=e.get(p,x);if(o.get(v)!==m&&(e.update(v),o.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return v}function u(){o=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const lM={[U0]:"LINEAR_TONE_MAPPING",[O0]:"REINHARD_TONE_MAPPING",[F0]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[B0]:"AGX_TONE_MAPPING",[z0]:"NEUTRAL_TONE_MAPPING",[k0]:"CUSTOM_TONE_MAPPING"};function cM(s,e,t,r,o){const l=new Wi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),u=new Wi(e,t,{type:xr,depthBuffer:!1,stencilBuffer:!1}),d=new vi;d.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new En([0,2,0,0,2,0],2));const p=new $_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new st(d,p),x=new Hf(-1,1,1,-1,0,1);let v=null,y=null,S=!1,T,R=null,M=[],_=!1;this.setSize=function(A,D){l.setSize(A,D),u.setSize(A,D);for(let C=0;C<M.length;C++){const U=M[C];U.setSize&&U.setSize(A,D)}},this.setEffects=function(A){M=A,_=M.length>0&&M[0].isRenderPass===!0;const D=l.width,C=l.height;for(let U=0;U<M.length;U++){const L=M[U];L.setSize&&L.setSize(D,C)}},this.begin=function(A,D){if(S||A.toneMapping===Gi&&M.length===0)return!1;if(R=D,D!==null){const C=D.width,U=D.height;(l.width!==C||l.height!==U)&&this.setSize(C,U)}return _===!1&&A.setRenderTarget(l),T=A.toneMapping,A.toneMapping=Gi,!0},this.hasRenderPass=function(){return _},this.end=function(A,D){A.toneMapping=T,S=!0;let C=l,U=u;for(let L=0;L<M.length;L++){const O=M[L];if(O.enabled!==!1&&(O.render(A,U,C,D),O.needsSwap!==!1)){const B=C;C=U,U=B}}if(v!==A.outputColorSpace||y!==A.toneMapping){v=A.outputColorSpace,y=A.toneMapping,p.defines={},Ot.getTransfer(v)===Gt&&(p.defines.SRGB_TRANSFER="");const L=lM[y];L&&(p.defines[L]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,A.setRenderTarget(R),A.render(m,x),R=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),u.dispose(),d.dispose(),p.dispose()}}const fg=new An,_f=new xo(1,1),hg=new Z0,pg=new T_,mg=new ig,a0=[],o0=[],l0=new Float32Array(16),c0=new Float32Array(9),u0=new Float32Array(4);function ya(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=a0[o];if(l===void 0&&(l=new Float32Array(o),a0[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function hn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function lc(s,e){let t=o0[e];t===void 0&&(t=new Int32Array(e),o0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),hn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),hn(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),hn(t,e)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;u0.set(r),s.uniformMatrix2fv(this.addr,!1,u0),hn(t,r)}}function mM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;c0.set(r),s.uniformMatrix3fv(this.addr,!1,c0),hn(t,r)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),hn(t,e)}else{if(fn(t,r))return;l0.set(r),s.uniformMatrix4fv(this.addr,!1,l0),hn(t,r)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),hn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),hn(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),hn(t,e)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),hn(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),hn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),hn(t,e)}}function bM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Pf:Nf,l=_f):l=fg,t.setTexture2D(e||l,o)}function TM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||pg,o)}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||mg,o)}function CM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||hg,o)}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return wM;case 35678:case 36198:case 36298:case 36306:case 35682:return bM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function NM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){const t=ya(e,this.size,2);s.uniform2fv(this.addr,t)}function DM(s,e){const t=ya(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){const t=ya(e,this.size,4);s.uniform4fv(this.addr,t)}function IM(s,e){const t=ya(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UM(s,e){const t=ya(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){const t=ya(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FM(s,e){s.uniform1iv(this.addr,e)}function kM(s,e){s.uniform2iv(this.addr,e)}function BM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function HM(s,e){s.uniform3uiv(this.addr,e)}function GM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=_f:u=fg;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function XM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||pg,l[u])}function qM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||mg,l[u])}function YM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);fn(r,l)||(s.uniform1iv(this.addr,l),hn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||hg,l[u])}function $M(s){switch(s){case 5126:return NM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return jM;case 36294:return VM;case 36295:return HM;case 36296:return GM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class KM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class ZM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function d0(s,e){s.seq.push(e),s.map[e.id]=e}function JM(s,e,t){const r=s.name,o=r.length;for(_d.lastIndex=0;;){const l=_d.exec(r),u=_d.lastIndex;let d=l[1];const p=l[2]==="]",m=l[3];if(p&&(d=d|0),m===void 0||m==="["&&u+2===o){d0(t,m===void 0?new KM(d,s,e):new ZM(d,s,e));break}else{let v=t.map[d];v===void 0&&(v=new QM(d),d0(t,v)),t=v}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const d=e.getActiveUniform(t,u),p=e.getUniformLocation(t,d.name);JM(d,p,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function f0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const eE=37297;let tE=0;function nE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const h0=new Mt;function iE(s){Ot._getMatrix(h0,Ot.workingColorSpace,s);const e=`mat3( ${h0.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return yt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function p0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+nE(s.getShaderSource(e),d)}else return l}function rE(s,e){const t=iE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sE={[U0]:"Linear",[O0]:"Reinhard",[F0]:"Cineon",[rc]:"ACESFilmic",[B0]:"AgX",[z0]:"Neutral",[k0]:"Custom"};function aE(s,e){const t=sE[e];return t===void 0?(yt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vl=new Q;function oE(){Ot.getLuminanceCoefficients(Vl);const s=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function cE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function uE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function co(s){return s!==""}function m0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(dE,hE)}const fE=new Map;function hE(s,e){let t=Et[e];if(t===void 0){const r=fE.get(e);if(r!==void 0)t=Et[r],yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function x0(s){return s.replace(pE,mE)}function mE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function v0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const gE={[Wl]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function xE(s){return gE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[Es]:"ENVMAP_TYPE_CUBE",[ga]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function _E(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[ga]:"ENVMAP_MODE_REFRACTION"};function SE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[I0]:"ENVMAP_BLENDING_MULTIPLY",[a_]:"ENVMAP_BLENDING_MIX",[o_]:"ENVMAP_BLENDING_ADD"};function EE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ME[s.combine]||"ENVMAP_BLENDING_NONE"}function wE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function bE(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const p=xE(t),m=_E(t),x=SE(t),v=EE(t),y=wE(t),S=lE(t),T=cE(l),R=o.createProgram();let M,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(co).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(co).join(`
`),_.length>0&&(_+=`
`)):(M=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),_=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",t.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Gi?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),u=yf(u),u=m0(u,t),u=g0(u,t),d=yf(d),d=m0(d,t),d=g0(d,t),u=x0(u),d=x0(d),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",t.glslVersion===Cm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=A+M+u,C=A+_+d,U=f0(o,o.VERTEX_SHADER,D),L=f0(o,o.FRAGMENT_SHADER,C);o.attachShader(R,U),o.attachShader(R,L),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function O(z){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(R)||"",K=o.getShaderInfoLog(U)||"",ue=o.getShaderInfoLog(L)||"",de=$.trim(),ae=K.trim(),Z=ue.trim();let q=!0,me=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,R,U,L);else{const re=p0(o,U,"vertex"),k=p0(o,L,"fragment");Ut("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+de+`
`+re+`
`+k)}else de!==""?yt("WebGLProgram: Program Info Log:",de):(ae===""||Z==="")&&(me=!1);me&&(z.diagnostics={runnable:q,programLog:de,vertexShader:{log:ae,prefix:M},fragmentShader:{log:Z,prefix:_}})}o.deleteShader(U),o.deleteShader(L),B=new Zl(o,R),b=uE(o,R)}let B;this.getUniforms=function(){return B===void 0&&O(this),B};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=o.getProgramParameter(R,eE)),P},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=U,this.fragmentShader=L,this}let TE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function RE(s,e,t,r,o,l,u){const d=new Uf,p=new AE,m=new Set,x=[],v=new Map,y=o.logarithmicDepthBuffer;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(b){return m.add(b),b===0?"uv":`uv${b}`}function M(b,P,z,$,K){const ue=$.fog,de=K.geometry,ae=b.isMeshStandardMaterial?$.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||ae),q=Z&&Z.mapping===sc?Z.image.height:null,me=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&yt("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const re=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,k=re!==void 0?re.length:0;let se=0;de.morphAttributes.position!==void 0&&(se=1),de.morphAttributes.normal!==void 0&&(se=2),de.morphAttributes.color!==void 0&&(se=3);let Ce,He,ve,ne;if(me){const bt=ji[me];Ce=bt.vertexShader,He=bt.fragmentShader}else Ce=b.vertexShader,He=b.fragmentShader,p.update(b),ve=p.getVertexShaderID(b),ne=p.getFragmentShaderID(b);const pe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,V=K.isBatchedMesh===!0,ke=!!b.map,Ct=!!b.matcap,ze=!!Z,ht=!!b.aoMap,Pt=!!b.lightMap,at=!!b.bumpMap,kt=!!b.normalMap,j=!!b.displacementMap,jt=!!b.emissiveMap,_t=!!b.metalnessMap,Tt=!!b.roughnessMap,Ye=b.anisotropy>0,I=b.clearcoat>0,E=b.dispersion>0,W=b.iridescence>0,he=b.sheen>0,ge=b.transmission>0,oe=Ye&&!!b.anisotropyMap,Ke=I&&!!b.clearcoatMap,Ae=I&&!!b.clearcoatNormalMap,Ge=I&&!!b.clearcoatRoughnessMap,lt=W&&!!b.iridescenceMap,Se=W&&!!b.iridescenceThicknessMap,Ie=he&&!!b.sheenColorMap,We=he&&!!b.sheenRoughnessMap,Fe=!!b.specularMap,Pe=!!b.specularColorMap,mt=!!b.specularIntensityMap,G=ge&&!!b.transmissionMap,Ue=ge&&!!b.thicknessMap,Ee=!!b.gradientMap,Te=!!b.alphaMap,xe=b.alphaTest>0,fe=!!b.alphaHash,be=!!b.extensions;let ct=Gi;b.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ct=s.toneMapping);const St={shaderID:me,shaderType:b.type,shaderName:b.name,vertexShader:Ce,fragmentShader:He,defines:b.defines,customVertexShaderID:ve,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:V,batchingColor:V&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:va,alphaToCoverage:!!b.alphaToCoverage,map:ke,matcap:Ct,envMap:ze,envMapMode:ze&&Z.mapping,envMapCubeUVHeight:q,aoMap:ht,lightMap:Pt,bumpMap:at,normalMap:kt,displacementMap:j,emissiveMap:jt,normalMapObjectSpace:kt&&b.normalMapType===u_,normalMapTangentSpace:kt&&b.normalMapType===$0,metalnessMap:_t,roughnessMap:Tt,anisotropy:Ye,anisotropyMap:oe,clearcoat:I,clearcoatMap:Ke,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ge,dispersion:E,iridescence:W,iridescenceMap:lt,iridescenceThicknessMap:Se,sheen:he,sheenColorMap:Ie,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:Pe,specularIntensityMap:mt,transmission:ge,transmissionMap:G,thicknessMap:Ue,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===ha&&b.alphaToCoverage===!1,alphaMap:Te,alphaTest:xe,alphaHash:fe,combine:b.combine,mapUv:ke&&R(b.map.channel),aoMapUv:ht&&R(b.aoMap.channel),lightMapUv:Pt&&R(b.lightMap.channel),bumpMapUv:at&&R(b.bumpMap.channel),normalMapUv:kt&&R(b.normalMap.channel),displacementMapUv:j&&R(b.displacementMap.channel),emissiveMapUv:jt&&R(b.emissiveMap.channel),metalnessMapUv:_t&&R(b.metalnessMap.channel),roughnessMapUv:Tt&&R(b.roughnessMap.channel),anisotropyMapUv:oe&&R(b.anisotropyMap.channel),clearcoatMapUv:Ke&&R(b.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&R(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ge&&R(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&R(b.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&R(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&R(b.sheenColorMap.channel),sheenRoughnessMapUv:We&&R(b.sheenRoughnessMap.channel),specularMapUv:Fe&&R(b.specularMap.channel),specularColorMapUv:Pe&&R(b.specularColorMap.channel),specularIntensityMapUv:mt&&R(b.specularIntensityMap.channel),transmissionMapUv:G&&R(b.transmissionMap.channel),thicknessMapUv:Ue&&R(b.thicknessMap.channel),alphaMapUv:Te&&R(b.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(kt||Ye),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!de.attributes.uv&&(ke||Te),fog:!!ue,useFog:b.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:ye,skinning:K.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:ke&&b.map.isVideoTexture===!0&&Ot.getTransfer(b.map.colorSpace)===Gt,decodeVideoTextureEmissive:jt&&b.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(b.emissiveMap.colorSpace)===Gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===fr,flipSided:b.side===ti,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:be&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&b.extensions.multiDraw===!0||V)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return St.vertexUv1s=m.has(1),St.vertexUv2s=m.has(2),St.vertexUv3s=m.has(3),m.clear(),St}function _(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const z in b.defines)P.push(z),P.push(b.defines[z]);return b.isRawShaderMaterial===!1&&(A(P,b),D(P,b),P.push(s.outputColorSpace)),P.push(b.customProgramCacheKey),P.join()}function A(b,P){b.push(P.precision),b.push(P.outputColorSpace),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.mapUv),b.push(P.alphaMapUv),b.push(P.lightMapUv),b.push(P.aoMapUv),b.push(P.bumpMapUv),b.push(P.normalMapUv),b.push(P.displacementMapUv),b.push(P.emissiveMapUv),b.push(P.metalnessMapUv),b.push(P.roughnessMapUv),b.push(P.anisotropyMapUv),b.push(P.clearcoatMapUv),b.push(P.clearcoatNormalMapUv),b.push(P.clearcoatRoughnessMapUv),b.push(P.iridescenceMapUv),b.push(P.iridescenceThicknessMapUv),b.push(P.sheenColorMapUv),b.push(P.sheenRoughnessMapUv),b.push(P.specularMapUv),b.push(P.specularColorMapUv),b.push(P.specularIntensityMapUv),b.push(P.transmissionMapUv),b.push(P.thicknessMapUv),b.push(P.combine),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.numLightProbes),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function D(b,P){d.disableAll(),P.instancing&&d.enable(0),P.instancingColor&&d.enable(1),P.instancingMorph&&d.enable(2),P.matcap&&d.enable(3),P.envMap&&d.enable(4),P.normalMapObjectSpace&&d.enable(5),P.normalMapTangentSpace&&d.enable(6),P.clearcoat&&d.enable(7),P.iridescence&&d.enable(8),P.alphaTest&&d.enable(9),P.vertexColors&&d.enable(10),P.vertexAlphas&&d.enable(11),P.vertexUv1s&&d.enable(12),P.vertexUv2s&&d.enable(13),P.vertexUv3s&&d.enable(14),P.vertexTangents&&d.enable(15),P.anisotropy&&d.enable(16),P.alphaHash&&d.enable(17),P.batching&&d.enable(18),P.dispersion&&d.enable(19),P.batchingColor&&d.enable(20),P.gradientMap&&d.enable(21),b.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),b.push(d.mask)}function C(b){const P=T[b.type];let z;if(P){const $=ji[P];z=B_.clone($.uniforms)}else z=b.uniforms;return z}function U(b,P){let z=v.get(P);return z!==void 0?++z.usedTimes:(z=new bE(s,P,b,l),x.push(z),v.set(P,z)),z}function L(b){if(--b.usedTimes===0){const P=x.indexOf(b);x[P]=x[x.length-1],x.pop(),v.delete(b.cacheKey),b.destroy()}}function O(b){p.remove(b)}function B(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:C,acquireProgram:U,releaseProgram:L,releaseShaderCache:O,programs:x,dispose:B}}function NE(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,p){s.get(u)[d]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function PE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function _0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function y0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(v,y,S,T,R,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:S,groupOrder:T,renderOrder:v.renderOrder,z:R,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=S,_.groupOrder=T,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,y,S,T,R,M){const _=u(v,y,S,T,R,M);S.transmission>0?r.push(_):S.transparent===!0?o.push(_):t.push(_)}function p(v,y,S,T,R,M){const _=u(v,y,S,T,R,M);S.transmission>0?r.unshift(_):S.transparent===!0?o.unshift(_):t.unshift(_)}function m(v,y){t.length>1&&t.sort(v||PE),r.length>1&&r.sort(y||_0),o.length>1&&o.sort(y||_0)}function x(){for(let v=e,y=s.length;v<y;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:p,finish:x,sort:m}}function DE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new y0,s.set(r,[u])):o>=l.length?(u=new y0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function LE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new wt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let UE=0;function OE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FE(s){const e=new LE,t=IE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,l=new tn,u=new tn;function d(m){let x=0,v=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let S=0,T=0,R=0,M=0,_=0,A=0,D=0,C=0,U=0,L=0,O=0;m.sort(OE);for(let b=0,P=m.length;b<P;b++){const z=m[b],$=z.color,K=z.intensity,ue=z.distance;let de=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===xa?de=z.shadow.map.texture:de=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)x+=$.r*K,v+=$.g*K,y+=$.b*K;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],K);O++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,q=t.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.directionalShadow[S]=q,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=z.shadow.matrix,A++}r.directional[S]=ae,S++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy($).multiplyScalar(K),ae.distance=ue,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[R]=ae;const Z=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,Z.updateMatrices(z),z.castShadow&&L++),r.spotLightMatrix[R]=Z.matrix,z.castShadow){const q=t.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,r.spotShadow[R]=q,r.spotShadowMap[R]=de,C++}R++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy($).multiplyScalar(K),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[M]=ae,M++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const Z=z.shadow,q=t.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=de,r.pointShadowMatrix[T]=z.shadow.matrix,D++}r.point[T]=ae,T++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(K),ae.groundColor.copy(z.groundColor).multiplyScalar(K),r.hemi[_]=ae,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=je.LTC_FLOAT_1,r.rectAreaLTC2=je.LTC_FLOAT_2):(r.rectAreaLTC1=je.LTC_HALF_1,r.rectAreaLTC2=je.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=v,r.ambient[2]=y;const B=r.hash;(B.directionalLength!==S||B.pointLength!==T||B.spotLength!==R||B.rectAreaLength!==M||B.hemiLength!==_||B.numDirectionalShadows!==A||B.numPointShadows!==D||B.numSpotShadows!==C||B.numSpotMaps!==U||B.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=T,r.hemi.length=_,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=C+U-L,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=O,B.directionalLength=S,B.pointLength=T,B.spotLength=R,B.rectAreaLength=M,B.hemiLength=_,B.numDirectionalShadows=A,B.numPointShadows=D,B.numSpotShadows=C,B.numSpotMaps=U,B.numLightProbes=O,r.version=UE++)}function p(m,x){let v=0,y=0,S=0,T=0,R=0;const M=x.matrixWorldInverse;for(let _=0,A=m.length;_<A;_++){const D=m[_];if(D.isDirectionalLight){const C=r.directional[v];C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),v++}else if(D.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),u.identity(),l.copy(D.matrixWorld),l.premultiply(M),u.extractRotation(l),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),T++}else if(D.isPointLight){const C=r.point[y];C.position.setFromMatrixPosition(D.matrixWorld),C.position.applyMatrix4(M),y++}else if(D.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(D.matrixWorld),C.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function S0(s){const e=new FE(s),t=[],r=[];function o(x){m.camera=x,t.length=0,r.length=0}function l(x){t.push(x)}function u(x){r.push(x)}function d(){e.setup(t)}function p(x){e.setupView(t,x)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:p,pushLight:l,pushShadow:u}}function kE(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new S0(s),e.set(o,[d])):l>=u.length?(d=new S0(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zE=`uniform sampler2D shadow_pass;
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
}`,jE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],VE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],M0=new tn,ao=new Q,yd=new Q;function HE(s,e,t){let r=new Ff;const o=new gt,l=new gt,u=new rn,d=new K_,p=new Z_,m={},x=t.maxTextureSize,v={[Kr]:ti,[ti]:Kr,[fr]:fr},y=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new vi;T.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new st(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let _=this.type;this.render=function(L,O,B){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||L.length===0)return;L.type===Ef&&(yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),L.type=Wl);const b=s.getRenderTarget(),P=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),$=s.state;$.setBlending(mr),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=_!==this.type;K&&O.traverse(function(ue){ue.material&&(Array.isArray(ue.material)?ue.material.forEach(de=>de.needsUpdate=!0):ue.material.needsUpdate=!0)});for(let ue=0,de=L.length;ue<de;ue++){const ae=L[ue],Z=ae.shadow;if(Z===void 0){yt("WebGLShadowMap:",ae,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const q=Z.getFrameExtents();if(o.multiply(q),l.copy(Z.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/q.x),o.x=l.x*q.x,Z.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/q.y),o.y=l.y*q.y,Z.mapSize.y=l.y)),Z.map===null||K===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===lo){if(ae.isPointLight){yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Wi(o.x,o.y,{format:xa,type:xr,minFilter:On,magFilter:On,generateMipmaps:!1}),Z.map.texture.name=ae.name+".shadowMap",Z.map.depthTexture=new xo(o.x,o.y,Vi),Z.map.depthTexture.name=ae.name+".shadowMapDepth",Z.map.depthTexture.format=vr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Tn,Z.map.depthTexture.magFilter=Tn}else{ae.isPointLight?(Z.map=new rg(o.x),Z.map.depthTexture=new Y_(o.x,qi)):(Z.map=new Wi(o.x,o.y),Z.map.depthTexture=new xo(o.x,o.y,qi)),Z.map.depthTexture.name=ae.name+".shadowMap",Z.map.depthTexture.format=vr;const re=s.state.buffers.depth.getReversed();this.type===Wl?(Z.map.depthTexture.compareFunction=re?Pf:Nf,Z.map.depthTexture.minFilter=On,Z.map.depthTexture.magFilter=On):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Tn,Z.map.depthTexture.magFilter=Tn)}Z.camera.updateProjectionMatrix()}const me=Z.map.isWebGLCubeRenderTarget?6:1;for(let re=0;re<me;re++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,re),s.clear();else{re===0&&(s.setRenderTarget(Z.map),s.clear());const k=Z.getViewport(re);u.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),$.viewport(u)}if(ae.isPointLight){const k=Z.camera,se=Z.matrix,Ce=ae.distance||k.far;Ce!==k.far&&(k.far=Ce,k.updateProjectionMatrix()),ao.setFromMatrixPosition(ae.matrixWorld),k.position.copy(ao),yd.copy(k.position),yd.add(jE[re]),k.up.copy(VE[re]),k.lookAt(yd),k.updateMatrixWorld(),se.makeTranslation(-ao.x,-ao.y,-ao.z),M0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(M0,k.coordinateSystem,k.reversedDepth)}else Z.updateMatrices(ae);r=Z.getFrustum(),C(O,B,Z.camera,ae,this.type)}Z.isPointLightShadow!==!0&&this.type===lo&&A(Z,B),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(b,P,z)};function A(L,O){const B=e.update(R);y.defines.VSM_SAMPLES!==L.blurSamples&&(y.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Wi(o.x,o.y,{format:xa,type:xr})),y.uniforms.shadow_pass.value=L.map.depthTexture,y.uniforms.resolution.value=L.mapSize,y.uniforms.radius.value=L.radius,s.setRenderTarget(L.mapPass),s.clear(),s.renderBufferDirect(O,null,B,y,R,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,s.setRenderTarget(L.map),s.clear(),s.renderBufferDirect(O,null,B,S,R,null)}function D(L,O,B,b){let P=null;const z=B.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(z!==void 0)P=z;else if(P=B.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=P.uuid,K=O.uuid;let ue=m[$];ue===void 0&&(ue={},m[$]=ue);let de=ue[K];de===void 0&&(de=P.clone(),ue[K]=de,O.addEventListener("dispose",U)),P=de}if(P.visible=O.visible,P.wireframe=O.wireframe,b===lo?P.side=O.shadowSide!==null?O.shadowSide:O.side:P.side=O.shadowSide!==null?O.shadowSide:v[O.side],P.alphaMap=O.alphaMap,P.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,P.map=O.map,P.clipShadows=O.clipShadows,P.clippingPlanes=O.clippingPlanes,P.clipIntersection=O.clipIntersection,P.displacementMap=O.displacementMap,P.displacementScale=O.displacementScale,P.displacementBias=O.displacementBias,P.wireframeLinewidth=O.wireframeLinewidth,P.linewidth=O.linewidth,B.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const $=s.properties.get(P);$.light=B}return P}function C(L,O,B,b,P){if(L.visible===!1)return;if(L.layers.test(O.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&P===lo)&&(!L.frustumCulled||r.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,L.matrixWorld);const K=e.update(L),ue=L.material;if(Array.isArray(ue)){const de=K.groups;for(let ae=0,Z=de.length;ae<Z;ae++){const q=de[ae],me=ue[q.materialIndex];if(me&&me.visible){const re=D(L,me,b,P);L.onBeforeShadow(s,L,O,B,K,re,q),s.renderBufferDirect(B,null,K,re,L,q),L.onAfterShadow(s,L,O,B,K,re,q)}}}else if(ue.visible){const de=D(L,ue,b,P);L.onBeforeShadow(s,L,O,B,K,de,null),s.renderBufferDirect(B,null,K,de,L,null),L.onAfterShadow(s,L,O,B,K,de,null)}}const $=L.children;for(let K=0,ue=$.length;K<ue;K++)C($[K],O,B,b,P)}function U(L){L.target.removeEventListener("dispose",U);for(const B in m){const b=m[B],P=L.target.uuid;P in b&&(b[P].dispose(),delete b[P])}}}const GE={[Ad]:Cd,[Rd]:Dd,[Nd]:Ld,[ma]:Pd,[Cd]:Ad,[Dd]:Rd,[Ld]:Nd,[Pd]:ma};function WE(s,e){function t(){let G=!1;const Ue=new rn;let Ee=null;const Te=new rn(0,0,0,0);return{setMask:function(xe){Ee!==xe&&!G&&(s.colorMask(xe,xe,xe,xe),Ee=xe)},setLocked:function(xe){G=xe},setClear:function(xe,fe,be,ct,St){St===!0&&(xe*=ct,fe*=ct,be*=ct),Ue.set(xe,fe,be,ct),Te.equals(Ue)===!1&&(s.clearColor(xe,fe,be,ct),Te.copy(Ue))},reset:function(){G=!1,Ee=null,Te.set(-1,0,0,0)}}}function r(){let G=!1,Ue=!1,Ee=null,Te=null,xe=null;return{setReversed:function(fe){if(Ue!==fe){const be=e.get("EXT_clip_control");fe?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Ue=fe;const ct=xe;xe=null,this.setClear(ct)}},getReversed:function(){return Ue},setTest:function(fe){fe?pe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(fe){Ee!==fe&&!G&&(s.depthMask(fe),Ee=fe)},setFunc:function(fe){if(Ue&&(fe=GE[fe]),Te!==fe){switch(fe){case Ad:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Te=fe}},setLocked:function(fe){G=fe},setClear:function(fe){xe!==fe&&(Ue&&(fe=1-fe),s.clearDepth(fe),xe=fe)},reset:function(){G=!1,Ee=null,Te=null,xe=null,Ue=!1}}}function o(){let G=!1,Ue=null,Ee=null,Te=null,xe=null,fe=null,be=null,ct=null,St=null;return{setTest:function(bt){G||(bt?pe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(bt){Ue!==bt&&!G&&(s.stencilMask(bt),Ue=bt)},setFunc:function(bt,Fn,pn){(Ee!==bt||Te!==Fn||xe!==pn)&&(s.stencilFunc(bt,Fn,pn),Ee=bt,Te=Fn,xe=pn)},setOp:function(bt,Fn,pn){(fe!==bt||be!==Fn||ct!==pn)&&(s.stencilOp(bt,Fn,pn),fe=bt,be=Fn,ct=pn)},setLocked:function(bt){G=bt},setClear:function(bt){St!==bt&&(s.clearStencil(bt),St=bt)},reset:function(){G=!1,Ue=null,Ee=null,Te=null,xe=null,fe=null,be=null,ct=null,St=null}}}const l=new t,u=new r,d=new o,p=new WeakMap,m=new WeakMap;let x={},v={},y=new WeakMap,S=[],T=null,R=!1,M=null,_=null,A=null,D=null,C=null,U=null,L=null,O=new wt(0,0,0),B=0,b=!1,P=null,z=null,$=null,K=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Z=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),ae=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),ae=Z>=2);let me=null,re={};const k=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ce=new rn().fromArray(k),He=new rn().fromArray(se);function ve(G,Ue,Ee,Te){const xe=new Uint8Array(4),fe=s.createTexture();s.bindTexture(G,fe),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let be=0;be<Ee;be++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,Te,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Ue+be,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return fe}const ne={};ne[s.TEXTURE_2D]=ve(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=ve(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=ve(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=ve(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(s.DEPTH_TEST),u.setFunc(ma),at(!1),kt(Mm),pe(s.CULL_FACE),ht(mr);function pe(G){x[G]!==!0&&(s.enable(G),x[G]=!0)}function ye(G){x[G]!==!1&&(s.disable(G),x[G]=!1)}function Ne(G,Ue){return v[G]!==Ue?(s.bindFramebuffer(G,Ue),v[G]=Ue,G===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),G===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function V(G,Ue){let Ee=S,Te=!1;if(G){Ee=y.get(Ue),Ee===void 0&&(Ee=[],y.set(Ue,Ee));const xe=G.textures;if(Ee.length!==xe.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,be=xe.length;fe<be;fe++)Ee[fe]=s.COLOR_ATTACHMENT0+fe;Ee.length=xe.length,Te=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,Te=!0);Te&&s.drawBuffers(Ee)}function ke(G){return T!==G?(s.useProgram(G),T=G,!0):!1}const Ct={[_s]:s.FUNC_ADD,[Hv]:s.FUNC_SUBTRACT,[Gv]:s.FUNC_REVERSE_SUBTRACT};Ct[Wv]=s.MIN,Ct[Xv]=s.MAX;const ze={[qv]:s.ZERO,[Yv]:s.ONE,[$v]:s.SRC_COLOR,[bd]:s.SRC_ALPHA,[t_]:s.SRC_ALPHA_SATURATE,[Jv]:s.DST_COLOR,[Zv]:s.DST_ALPHA,[Kv]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[e_]:s.ONE_MINUS_DST_COLOR,[Qv]:s.ONE_MINUS_DST_ALPHA,[n_]:s.CONSTANT_COLOR,[i_]:s.ONE_MINUS_CONSTANT_COLOR,[r_]:s.CONSTANT_ALPHA,[s_]:s.ONE_MINUS_CONSTANT_ALPHA};function ht(G,Ue,Ee,Te,xe,fe,be,ct,St,bt){if(G===mr){R===!0&&(ye(s.BLEND),R=!1);return}if(R===!1&&(pe(s.BLEND),R=!0),G!==Vv){if(G!==M||bt!==b){if((_!==_s||C!==_s)&&(s.blendEquation(s.FUNC_ADD),_=_s,C=_s),bt)switch(G){case ha:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFunc(s.ONE,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case bm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ut("WebGLState: Invalid blending: ",G);break}else switch(G){case ha:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Em:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wm:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bm:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",G);break}A=null,D=null,U=null,L=null,O.set(0,0,0),B=0,M=G,b=bt}return}xe=xe||Ue,fe=fe||Ee,be=be||Te,(Ue!==_||xe!==C)&&(s.blendEquationSeparate(Ct[Ue],Ct[xe]),_=Ue,C=xe),(Ee!==A||Te!==D||fe!==U||be!==L)&&(s.blendFuncSeparate(ze[Ee],ze[Te],ze[fe],ze[be]),A=Ee,D=Te,U=fe,L=be),(ct.equals(O)===!1||St!==B)&&(s.blendColor(ct.r,ct.g,ct.b,St),O.copy(ct),B=St),M=G,b=!1}function Pt(G,Ue){G.side===fr?ye(s.CULL_FACE):pe(s.CULL_FACE);let Ee=G.side===ti;Ue&&(Ee=!Ee),at(Ee),G.blending===ha&&G.transparent===!1?ht(mr):ht(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),l.setMask(G.colorWrite);const Te=G.stencilWrite;d.setTest(Te),Te&&(d.setMask(G.stencilWriteMask),d.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),d.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),jt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function at(G){P!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),P=G)}function kt(G){G!==zv?(pe(s.CULL_FACE),G!==z&&(G===Mm?s.cullFace(s.BACK):G===jv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),z=G}function j(G){G!==$&&(ae&&s.lineWidth(G),$=G)}function jt(G,Ue,Ee){G?(pe(s.POLYGON_OFFSET_FILL),(K!==Ue||ue!==Ee)&&(s.polygonOffset(Ue,Ee),K=Ue,ue=Ee)):ye(s.POLYGON_OFFSET_FILL)}function _t(G){G?pe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function Tt(G){G===void 0&&(G=s.TEXTURE0+de-1),me!==G&&(s.activeTexture(G),me=G)}function Ye(G,Ue,Ee){Ee===void 0&&(me===null?Ee=s.TEXTURE0+de-1:Ee=me);let Te=re[Ee];Te===void 0&&(Te={type:void 0,texture:void 0},re[Ee]=Te),(Te.type!==G||Te.texture!==Ue)&&(me!==Ee&&(s.activeTexture(Ee),me=Ee),s.bindTexture(G,Ue||ne[G]),Te.type=G,Te.texture=Ue)}function I(){const G=re[me];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function he(){try{s.texSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function ge(){try{s.texSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function oe(){try{s.compressedTexSubImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Ae(){try{s.texStorage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Ge(){try{s.texStorage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function lt(){try{s.texImage2D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Se(){try{s.texImage3D(...arguments)}catch(G){Ut("WebGLState:",G)}}function Ie(G){Ce.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Ce.copy(G))}function We(G){He.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),He.copy(G))}function Fe(G,Ue){let Ee=m.get(Ue);Ee===void 0&&(Ee=new WeakMap,m.set(Ue,Ee));let Te=Ee.get(G);Te===void 0&&(Te=s.getUniformBlockIndex(Ue,G.name),Ee.set(G,Te))}function Pe(G,Ue){const Te=m.get(Ue).get(G);p.get(Ue)!==Te&&(s.uniformBlockBinding(Ue,Te,G.__bindingPointIndex),p.set(Ue,Te))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),x={},me=null,re={},v={},y=new WeakMap,S=[],T=null,R=!1,M=null,_=null,A=null,D=null,C=null,U=null,L=null,O=new wt(0,0,0),B=0,b=!1,P=null,z=null,$=null,K=null,ue=null,Ce.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:pe,disable:ye,bindFramebuffer:Ne,drawBuffers:V,useProgram:ke,setBlending:ht,setMaterial:Pt,setFlipSided:at,setCullFace:kt,setLineWidth:j,setPolygonOffset:jt,setScissorTest:_t,activeTexture:Tt,bindTexture:Ye,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:lt,texImage3D:Se,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:Ge,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:oe,compressedTexSubImage3D:Ke,scissor:Ie,viewport:We,reset:mt}}function XE(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new gt,x=new WeakMap;let v;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return S?new OffscreenCanvas(I,E):mo("canvas")}function R(I,E,W){let he=1;const ge=Ye(I);if((ge.width>W||ge.height>W)&&(he=W/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const oe=Math.floor(he*ge.width),Ke=Math.floor(he*ge.height);v===void 0&&(v=T(oe,Ke));const Ae=E?T(oe,Ke):v;return Ae.width=oe,Ae.height=Ke,Ae.getContext("2d").drawImage(I,0,0,oe,Ke),yt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+oe+"x"+Ke+")."),Ae}else return"data"in I&&yt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function M(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(I,E,W,he,ge=!1){if(I!==null){if(s[I]!==void 0)return s[I];yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let oe=E;if(E===s.RED&&(W===s.FLOAT&&(oe=s.R32F),W===s.HALF_FLOAT&&(oe=s.R16F),W===s.UNSIGNED_BYTE&&(oe=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.R8UI),W===s.UNSIGNED_SHORT&&(oe=s.R16UI),W===s.UNSIGNED_INT&&(oe=s.R32UI),W===s.BYTE&&(oe=s.R8I),W===s.SHORT&&(oe=s.R16I),W===s.INT&&(oe=s.R32I)),E===s.RG&&(W===s.FLOAT&&(oe=s.RG32F),W===s.HALF_FLOAT&&(oe=s.RG16F),W===s.UNSIGNED_BYTE&&(oe=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RG8UI),W===s.UNSIGNED_SHORT&&(oe=s.RG16UI),W===s.UNSIGNED_INT&&(oe=s.RG32UI),W===s.BYTE&&(oe=s.RG8I),W===s.SHORT&&(oe=s.RG16I),W===s.INT&&(oe=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RGB8UI),W===s.UNSIGNED_SHORT&&(oe=s.RGB16UI),W===s.UNSIGNED_INT&&(oe=s.RGB32UI),W===s.BYTE&&(oe=s.RGB8I),W===s.SHORT&&(oe=s.RGB16I),W===s.INT&&(oe=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(oe=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(oe=s.RGBA16UI),W===s.UNSIGNED_INT&&(oe=s.RGBA32UI),W===s.BYTE&&(oe=s.RGBA8I),W===s.SHORT&&(oe=s.RGBA16I),W===s.INT&&(oe=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(oe=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(oe=s.R11F_G11F_B10F)),E===s.RGBA){const Ke=ge?ec:Ot.getTransfer(he);W===s.FLOAT&&(oe=s.RGBA32F),W===s.HALF_FLOAT&&(oe=s.RGBA16F),W===s.UNSIGNED_BYTE&&(oe=Ke===Gt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(oe=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(oe=s.RGB5_A1)}return(oe===s.R16F||oe===s.R32F||oe===s.RG16F||oe===s.RG32F||oe===s.RGBA16F||oe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function C(I,E){let W;return I?E===null||E===qi||E===po?W=s.DEPTH24_STENCIL8:E===Vi?W=s.DEPTH32F_STENCIL8:E===ho&&(W=s.DEPTH24_STENCIL8,yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===po?W=s.DEPTH_COMPONENT24:E===Vi?W=s.DEPTH_COMPONENT32F:E===ho&&(W=s.DEPTH_COMPONENT16),W}function U(I,E){return M(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function L(I){const E=I.target;E.removeEventListener("dispose",L),B(E),E.isVideoTexture&&x.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),P(E)}function B(I){const E=r.get(I);if(E.__webglInit===void 0)return;const W=I.source,he=y.get(W);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&b(I),Object.keys(he).length===0&&y.delete(W)}r.remove(I)}function b(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const W=I.source,he=y.get(W);delete he[E.__cacheKey],u.memory.textures--}function P(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=I.textures;for(let he=0,ge=W.length;he<ge;he++){const oe=r.get(W[he]);oe.__webglTexture&&(s.deleteTexture(oe.__webglTexture),u.memory.textures--),r.remove(W[he])}r.remove(I)}let z=0;function $(){z=0}function K(){const I=z;return I>=o.maxTextures&&yt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),z+=1,I}function ue(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function de(I,E){const W=r.get(I);if(I.isVideoTexture&&_t(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&W.__version!==I.version){const he=I.image;if(he===null)yt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)yt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,I,E);return}}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function ae(I,E){const W=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ne(W,I,E);return}else I.isExternalTexture&&(W.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function Z(I,E){const W=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&W.__version!==I.version){ne(W,I,E);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function q(I,E){const W=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&W.__version!==I.version){pe(W,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const me={[Od]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},re={[Tn]:s.NEAREST,[l_]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[On]:s.LINEAR,[Hu]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},k={[d_]:s.NEVER,[g_]:s.ALWAYS,[f_]:s.LESS,[Nf]:s.LEQUAL,[h_]:s.EQUAL,[Pf]:s.GEQUAL,[p_]:s.GREATER,[m_]:s.NOTEQUAL};function se(I,E){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Hu||E.magFilter===El||E.magFilter===Ss||E.minFilter===On||E.minFilter===Hu||E.minFilter===El||E.minFilter===Ss)&&yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,me[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,me[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,me[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,re[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==El&&E.minFilter!==Ss||E.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(I,E){let W=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",L));const he=E.source;let ge=y.get(he);ge===void 0&&(ge={},y.set(he,ge));const oe=ue(E);if(oe!==I.__cacheKey){ge[oe]===void 0&&(ge[oe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,W=!0),ge[oe].usedTimes++;const Ke=ge[I.__cacheKey];Ke!==void 0&&(ge[I.__cacheKey].usedTimes--,Ke.usedTimes===0&&b(E)),I.__cacheKey=oe,I.__webglTexture=ge[oe].texture}return W}function He(I,E,W){return Math.floor(Math.floor(I/W)/E)}function ve(I,E,W,he){const oe=I.updateRanges;if(oe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,he,E.data);else{oe.sort((Se,Ie)=>Se.start-Ie.start);let Ke=0;for(let Se=1;Se<oe.length;Se++){const Ie=oe[Ke],We=oe[Se],Fe=Ie.start+Ie.count,Pe=He(We.start,E.width,4),mt=He(Ie.start,E.width,4);We.start<=Fe+1&&Pe===mt&&He(We.start+We.count-1,E.width,4)===Pe?Ie.count=Math.max(Ie.count,We.start+We.count-Ie.start):(++Ke,oe[Ke]=We)}oe.length=Ke+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ge=s.getParameter(s.UNPACK_SKIP_PIXELS),lt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Se=0,Ie=oe.length;Se<Ie;Se++){const We=oe[Se],Fe=Math.floor(We.start/4),Pe=Math.ceil(We.count/4),mt=Fe%E.width,G=Math.floor(Fe/E.width),Ue=Pe,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,G),t.texSubImage2D(s.TEXTURE_2D,0,mt,G,Ue,Ee,W,he,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ge),s.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function ne(I,E,W){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Ce(I,E),oe=E.source;t.bindTexture(he,I.__webglTexture,s.TEXTURE0+W);const Ke=r.get(oe);if(oe.version!==Ke.__version||ge===!0){t.activeTexture(s.TEXTURE0+W);const Ae=Ot.getPrimaries(Ot.workingColorSpace),Ge=E.colorSpace===Yr?null:Ot.getPrimaries(E.colorSpace),lt=E.colorSpace===Yr||Ae===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Se=R(E.image,!1,o.maxTextureSize);Se=Tt(E,Se);const Ie=l.convert(E.format,E.colorSpace),We=l.convert(E.type);let Fe=D(E.internalFormat,Ie,We,E.colorSpace,E.isVideoTexture);se(he,E);let Pe;const mt=E.mipmaps,G=E.isVideoTexture!==!0,Ue=Ke.__version===void 0||ge===!0,Ee=oe.dataReady,Te=U(E,Se);if(E.isDepthTexture)Fe=C(E.format===Ms,E.type),Ue&&(G?t.texStorage2D(s.TEXTURE_2D,1,Fe,Se.width,Se.height):t.texImage2D(s.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Ie,We,null));else if(E.isDataTexture)if(mt.length>0){G&&Ue&&t.texStorage2D(s.TEXTURE_2D,Te,Fe,mt[0].width,mt[0].height);for(let xe=0,fe=mt.length;xe<fe;xe++)Pe=mt[xe],G?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Ie,We,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,Fe,Pe.width,Pe.height,0,Ie,We,Pe.data);E.generateMipmaps=!1}else G?(Ue&&t.texStorage2D(s.TEXTURE_2D,Te,Fe,Se.width,Se.height),Ee&&ve(E,Se,Ie,We)):t.texImage2D(s.TEXTURE_2D,0,Fe,Se.width,Se.height,0,Ie,We,Se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){G&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Fe,mt[0].width,mt[0].height,Se.depth);for(let xe=0,fe=mt.length;xe<fe;xe++)if(Pe=mt[xe],E.format!==Ri)if(Ie!==null)if(G){if(Ee)if(E.layerUpdates.size>0){const be=Jm(Pe.width,Pe.height,E.format,E.type);for(const ct of E.layerUpdates){const St=Pe.data.subarray(ct*be/Pe.data.BYTES_PER_ELEMENT,(ct+1)*be/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,ct,Pe.width,Pe.height,1,Ie,St)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,Se.depth,Ie,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Fe,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,Se.depth,Ie,We,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Fe,Pe.width,Pe.height,Se.depth,0,Ie,We,Pe.data)}else{G&&Ue&&t.texStorage2D(s.TEXTURE_2D,Te,Fe,mt[0].width,mt[0].height);for(let xe=0,fe=mt.length;xe<fe;xe++)Pe=mt[xe],E.format!==Ri?Ie!==null?G?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Ie,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Fe,Pe.width,Pe.height,0,Pe.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Ie,We,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,Fe,Pe.width,Pe.height,0,Ie,We,Pe.data)}else if(E.isDataArrayTexture)if(G){if(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Fe,Se.width,Se.height,Se.depth),Ee)if(E.layerUpdates.size>0){const xe=Jm(Se.width,Se.height,E.format,E.type);for(const fe of E.layerUpdates){const be=Se.data.subarray(fe*xe/Se.data.BYTES_PER_ELEMENT,(fe+1)*xe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Se.width,Se.height,1,Ie,We,be)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ie,We,Se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,Se.width,Se.height,Se.depth,0,Ie,We,Se.data);else if(E.isData3DTexture)G?(Ue&&t.texStorage3D(s.TEXTURE_3D,Te,Fe,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ie,We,Se.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,Se.width,Se.height,Se.depth,0,Ie,We,Se.data);else if(E.isFramebufferTexture){if(Ue)if(G)t.texStorage2D(s.TEXTURE_2D,Te,Fe,Se.width,Se.height);else{let xe=Se.width,fe=Se.height;for(let be=0;be<Te;be++)t.texImage2D(s.TEXTURE_2D,be,Fe,xe,fe,0,Ie,We,null),xe>>=1,fe>>=1}}else if(mt.length>0){if(G&&Ue){const xe=Ye(mt[0]);t.texStorage2D(s.TEXTURE_2D,Te,Fe,xe.width,xe.height)}for(let xe=0,fe=mt.length;xe<fe;xe++)Pe=mt[xe],G?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Ie,We,Pe):t.texImage2D(s.TEXTURE_2D,xe,Fe,Ie,We,Pe);E.generateMipmaps=!1}else if(G){if(Ue){const xe=Ye(Se);t.texStorage2D(s.TEXTURE_2D,Te,Fe,xe.width,xe.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie,We,Se)}else t.texImage2D(s.TEXTURE_2D,0,Fe,Ie,We,Se);M(E)&&_(he),Ke.__version=oe.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function pe(I,E,W){if(E.image.length!==6)return;const he=Ce(I,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+W);const oe=r.get(ge);if(ge.version!==oe.__version||he===!0){t.activeTexture(s.TEXTURE0+W);const Ke=Ot.getPrimaries(Ot.workingColorSpace),Ae=E.colorSpace===Yr?null:Ot.getPrimaries(E.colorSpace),Ge=E.colorSpace===Yr||Ke===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let fe=0;fe<6;fe++)!lt&&!Se?Ie[fe]=R(E.image[fe],!0,o.maxCubemapSize):Ie[fe]=Se?E.image[fe].image:E.image[fe],Ie[fe]=Tt(E,Ie[fe]);const We=Ie[0],Fe=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),mt=D(E.internalFormat,Fe,Pe,E.colorSpace),G=E.isVideoTexture!==!0,Ue=oe.__version===void 0||he===!0,Ee=ge.dataReady;let Te=U(E,We);se(s.TEXTURE_CUBE_MAP,E);let xe;if(lt){G&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,mt,We.width,We.height);for(let fe=0;fe<6;fe++){xe=Ie[fe].mipmaps;for(let be=0;be<xe.length;be++){const ct=xe[be];E.format!==Ri?Fe!==null?G?Ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,ct.width,ct.height,Fe,ct.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,mt,ct.width,ct.height,0,ct.data):yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,ct.width,ct.height,Fe,Pe,ct.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,mt,ct.width,ct.height,0,Fe,Pe,ct.data)}}}else{if(xe=E.mipmaps,G&&Ue){xe.length>0&&Te++;const fe=Ye(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Te,mt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Se){G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ie[fe].width,Ie[fe].height,Fe,Pe,Ie[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,mt,Ie[fe].width,Ie[fe].height,0,Fe,Pe,Ie[fe].data);for(let be=0;be<xe.length;be++){const St=xe[be].image[fe].image;G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,St.width,St.height,Fe,Pe,St.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,mt,St.width,St.height,0,Fe,Pe,St.data)}}else{G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Fe,Pe,Ie[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,mt,Fe,Pe,Ie[fe]);for(let be=0;be<xe.length;be++){const ct=xe[be];G?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,Fe,Pe,ct.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,mt,Fe,Pe,ct.image[fe])}}}M(E)&&_(s.TEXTURE_CUBE_MAP),oe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function ye(I,E,W,he,ge,oe){const Ke=l.convert(W.format,W.colorSpace),Ae=l.convert(W.type),Ge=D(W.internalFormat,Ke,Ae,W.colorSpace),lt=r.get(E),Se=r.get(W);if(Se.__renderTarget=E,!lt.__hasExternalTextures){const Ie=Math.max(1,E.width>>oe),We=Math.max(1,E.height>>oe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,oe,Ge,Ie,We,E.depth,0,Ke,Ae,null):t.texImage2D(ge,oe,Ge,Ie,We,0,Ke,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Se.__webglTexture,0,j(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Se.__webglTexture,oe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(I,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,oe=C(E.stencilBuffer,ge),Ke=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(E),oe,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(E),oe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,oe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,I)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const oe=he[ge],Ke=l.convert(oe.format,oe.colorSpace),Ae=l.convert(oe.type),Ge=D(oe.internalFormat,Ke,Ae,oe.colorSpace);jt(E)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(E),Ge,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(E),Ge,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ge,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function V(I,E,W){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",L)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),se(s.TEXTURE_CUBE_MAP,E.depthTexture);const lt=l.convert(E.depthTexture.format),Se=l.convert(E.depthTexture.type);let Ie;E.depthTexture.format===vr?Ie=s.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(Ie=s.DEPTH24_STENCIL8);for(let We=0;We<6;We++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Ie,E.width,E.height,0,lt,Se,null)}}else de(E.depthTexture,0);const oe=ge.__webglTexture,Ke=j(E),Ae=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,Ge=E.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ge,Ae,oe,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Ge,Ae,oe,0);else if(E.depthTexture.format===Ms)jt(E)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ge,Ae,oe,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,Ge,Ae,oe,0);else throw new Error("Unknown depthTexture format")}function ke(I){const E=r.get(I),W=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const he=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)V(E.__webglFramebuffer[he],I,he);else{const he=I.texture.mipmaps;he&&he.length>0?V(E.__webglFramebuffer[0],I,0):V(E.__webglFramebuffer,I,0)}else if(W){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Ne(E.__webglDepthbuffer[he],I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,oe)}}else{const he=I.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ne(E.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,oe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,oe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,oe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ct(I,E,W){const he=r.get(I);E!==void 0&&ye(he.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&ke(I)}function ze(I){const E=I.texture,W=r.get(I),he=r.get(E);I.addEventListener("dispose",O);const ge=I.textures,oe=I.isWebGLCubeRenderTarget===!0,Ke=ge.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,u.memory.textures++),oe){W.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Ae]=[];for(let Ge=0;Ge<E.mipmaps.length;Ge++)W.__webglFramebuffer[Ae][Ge]=s.createFramebuffer()}else W.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)W.__webglFramebuffer[Ae]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let Ae=0,Ge=ge.length;Ae<Ge;Ae++){const lt=r.get(ge[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&jt(I)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ge=ge[Ae];W.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Ae]);const lt=l.convert(Ge.format,Ge.colorSpace),Se=l.convert(Ge.type),Ie=D(Ge.internalFormat,lt,Se,Ge.colorSpace,I.isXRRenderTarget===!0),We=j(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ie,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,W.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(W.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(oe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),se(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)ye(W.__webglFramebuffer[Ae][Ge],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ge);else ye(W.__webglFramebuffer[Ae],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);M(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ke){for(let Ae=0,Ge=ge.length;Ae<Ge;Ae++){const lt=ge[Ae],Se=r.get(lt);let Ie=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Se.__webglTexture),se(Ie,lt),ye(W.__webglFramebuffer,I,lt,s.COLOR_ATTACHMENT0+Ae,Ie,0),M(lt)&&_(Ie)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,he.__webglTexture),se(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ge=0;Ge<E.mipmaps.length;Ge++)ye(W.__webglFramebuffer[Ge],I,E,s.COLOR_ATTACHMENT0,Ae,Ge);else ye(W.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Ae,0);M(E)&&_(Ae),t.unbindTexture()}I.depthBuffer&&ke(I)}function ht(I){const E=I.textures;for(let W=0,he=E.length;W<he;W++){const ge=E[W];if(M(ge)){const oe=A(I),Ke=r.get(ge).__webglTexture;t.bindTexture(oe,Ke),_(oe),t.unbindTexture()}}}const Pt=[],at=[];function kt(I){if(I.samples>0){if(jt(I)===!1){const E=I.textures,W=I.width,he=I.height;let ge=s.COLOR_BUFFER_BIT;const oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(I),Ae=E.length>1;if(Ae)for(let lt=0;lt<E.length;lt++)t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const Ge=I.texture.mipmaps;Ge&&Ge.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let lt=0;lt<E.length;lt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Se,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,ge,s.NEAREST),p===!0&&(Pt.length=0,at.length=0,Pt.push(s.COLOR_ATTACHMENT0+lt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Pt.push(oe),at.push(oe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,at)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let lt=0;lt<E.length;lt++){t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[lt]);const Se=r.get(E[lt]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Se,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function j(I){return Math.min(o.maxSamples,I.samples)}function jt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function _t(I){const E=u.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Tt(I,E){const W=I.colorSpace,he=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||W!==va&&W!==Yr&&(Ot.getTransfer(W)===Gt?(he!==Ri||ge!==li)&&yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",W)),E}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=de,this.setTexture2DArray=ae,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=Ct,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=kt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qE(s,e){function t(r,o=Yr){let l;const u=Ot.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===G0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===W0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===V0)return s.BYTE;if(r===H0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===wf)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===xr)return s.HALF_FLOAT;if(r===X0)return s.ALPHA;if(r===q0)return s.RGB;if(r===Ri)return s.RGBA;if(r===vr)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===Y0)return s.RED;if(r===Af)return s.RED_INTEGER;if(r===xa)return s.RG;if(r===Cf)return s.RG_INTEGER;if(r===Rf)return s.RGBA_INTEGER;if(r===Xl||r===ql||r===Yl||r===$l)if(u===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Bd||r===zd||r===jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Hd||r===Gd||r===Wd||r===Xd||r===qd||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Hd)return u===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Gd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wd)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===qd)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$d)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return u===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new og(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new $i({vertexShader:YE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new Wn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",p=1,m=null,x=null,v=null,y=null,S=null,T=null;const R=typeof XRWebGLBinding<"u",M=new KE,_={},A=t.getContextAttributes();let D=null,C=null;const U=[],L=[],O=new gt;let B=null;const b=new Xn;b.viewport=new rn;const P=new Xn;P.viewport=new rn;const z=[b,P],$=new s1;let K=null,ue=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let pe=U[ne];return pe===void 0&&(pe=new dd,U[ne]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ne){let pe=U[ne];return pe===void 0&&(pe=new dd,U[ne]=pe),pe.getGripSpace()},this.getHand=function(ne){let pe=U[ne];return pe===void 0&&(pe=new dd,U[ne]=pe),pe.getHandSpace()};function de(ne){const pe=L.indexOf(ne.inputSource);if(pe===-1)return;const ye=U[pe];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,m||u),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ae(){o.removeEventListener("select",de),o.removeEventListener("selectstart",de),o.removeEventListener("selectend",de),o.removeEventListener("squeeze",de),o.removeEventListener("squeezestart",de),o.removeEventListener("squeezeend",de),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",Z);for(let ne=0;ne<U.length;ne++){const pe=L[ne];pe!==null&&(L[ne]=null,U[ne].disconnect(pe))}K=null,ue=null,M.reset();for(const ne in _)delete _[ne];e.setRenderTarget(D),S=null,y=null,v=null,o=null,C=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(B),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){l=ne,r.isPresenting===!0&&yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(D=e.getRenderTarget(),o.addEventListener("select",de),o.addEventListener("selectstart",de),o.addEventListener("selectend",de),o.addEventListener("squeeze",de),o.addEventListener("squeezestart",de),o.addEventListener("squeezeend",de),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(O),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,V=null;A.depth&&(V=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=A.stencil?Ms:vr,Ne=A.stencil?po:qi);const ke={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:l};v=this.getBinding(),y=v.createProjectionLayer(ke),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),C=new Wi(y.textureWidth,y.textureHeight,{format:Ri,type:li,depthTexture:new xo(y.textureWidth,y.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ye={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,ye),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new Wi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:li,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,u=await o.requestReferenceSpace(d),ve.setContext(o),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function Z(ne){for(let pe=0;pe<ne.removed.length;pe++){const ye=ne.removed[pe],Ne=L.indexOf(ye);Ne>=0&&(L[Ne]=null,U[Ne].disconnect(ye))}for(let pe=0;pe<ne.added.length;pe++){const ye=ne.added[pe];let Ne=L.indexOf(ye);if(Ne===-1){for(let ke=0;ke<U.length;ke++)if(ke>=L.length){L.push(ye),Ne=ke;break}else if(L[ke]===null){L[ke]=ye,Ne=ke;break}if(Ne===-1)break}const V=U[Ne];V&&V.connect(ye)}}const q=new Q,me=new Q;function re(ne,pe,ye){q.setFromMatrixPosition(pe.matrixWorld),me.setFromMatrixPosition(ye.matrixWorld);const Ne=q.distanceTo(me),V=pe.projectionMatrix.elements,ke=ye.projectionMatrix.elements,Ct=V[14]/(V[10]-1),ze=V[14]/(V[10]+1),ht=(V[9]+1)/V[5],Pt=(V[9]-1)/V[5],at=(V[8]-1)/V[0],kt=(ke[8]+1)/ke[0],j=Ct*at,jt=Ct*kt,_t=Ne/(-at+kt),Tt=_t*-at;if(pe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Tt),ne.translateZ(_t),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),V[10]===-1)ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=Ct+_t,I=ze+_t,E=j-Tt,W=jt+(Ne-Tt),he=ht*ze/I*Ye,ge=Pt*ze/I*Ye;ne.projectionMatrix.makePerspective(E,W,he,ge,Ye,I),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function k(ne,pe){pe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(pe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let pe=ne.near,ye=ne.far;M.texture!==null&&(M.depthNear>0&&(pe=M.depthNear),M.depthFar>0&&(ye=M.depthFar)),$.near=P.near=b.near=pe,$.far=P.far=b.far=ye,(K!==$.near||ue!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,ue=$.far),$.layers.mask=ne.layers.mask|6,b.layers.mask=$.layers.mask&3,P.layers.mask=$.layers.mask&5;const Ne=ne.parent,V=$.cameras;k($,Ne);for(let ke=0;ke<V.length;ke++)k(V[ke],Ne);V.length===2?re($,b,P):$.projectionMatrix.copy(b.projectionMatrix),se(ne,$,Ne)};function se(ne,pe,ye){ye===null?ne.matrix.copy(pe.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(pe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(pe.projectionMatrix),ne.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=nc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(y===null&&S===null))return p},this.setFoveation=function(ne){p=ne,y!==null&&(y.fixedFoveation=ne),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh($)},this.getCameraTexture=function(ne){return _[ne]};let Ce=null;function He(ne,pe){if(x=pe.getViewerPose(m||u),T=pe,x!==null){const ye=x.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Ne=!1;ye.length!==$.cameras.length&&($.cameras.length=0,Ne=!0);for(let ze=0;ze<ye.length;ze++){const ht=ye[ze];let Pt=null;if(S!==null)Pt=S.getViewport(ht);else{const kt=v.getViewSubImage(y,ht);Pt=kt.viewport,ze===0&&(e.setRenderTargetTextures(C,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(C))}let at=z[ze];at===void 0&&(at=new Xn,at.layers.enable(ze),at.viewport=new rn,z[ze]=at),at.matrix.fromArray(ht.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(ht.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),ze===0&&($.matrix.copy(at.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ne===!0&&$.cameras.push(at)}const V=o.enabledFeatures;if(V&&V.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const ze=v.getDepthInformation(ye[0]);ze&&ze.isValid&&ze.texture&&M.init(ze,o.renderState)}if(V&&V.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let ze=0;ze<ye.length;ze++){const ht=ye[ze].camera;if(ht){let Pt=_[ht];Pt||(Pt=new og,_[ht]=Pt);const at=v.getCameraImage(ht);Pt.sourceTexture=at}}}}for(let ye=0;ye<U.length;ye++){const Ne=L[ye],V=U[ye];Ne!==null&&V!==void 0&&V.update(Ne,pe,m||u)}Ce&&Ce(ne,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const ve=new dg;ve.setAnimationLoop(He),this.setAnimationLoop=function(ne){Ce=ne},this.dispose=function(){}}}const vs=new Yi,QE=new tn;function JE(s,e){function t(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,tg(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function o(M,_,A,D,C){_.isMeshBasicMaterial||_.isMeshLambertMaterial?l(M,_):_.isMeshToonMaterial?(l(M,_),v(M,_)):_.isMeshPhongMaterial?(l(M,_),x(M,_)):_.isMeshStandardMaterial?(l(M,_),y(M,_),_.isMeshPhysicalMaterial&&S(M,_,C)):_.isMeshMatcapMaterial?(l(M,_),T(M,_)):_.isMeshDepthMaterial?l(M,_):_.isMeshDistanceMaterial?(l(M,_),R(M,_)):_.isMeshNormalMaterial?l(M,_):_.isLineBasicMaterial?(u(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,A,D):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,t(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===ti&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,t(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===ti&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,t(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,t(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const A=e.get(_),D=A.envMap,C=A.envMapRotation;D&&(M.envMap.value=D,vs.copy(C),vs.x*=-1,vs.y*=-1,vs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),M.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(vs)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,M.aoMapTransform))}function u(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,A,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*A,M.scale.value=D*.5,_.map&&(M.map.value=_.map,t(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,t(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,t(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function x(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,A){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===ti&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const A=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function ew(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,D){const C=D.program;r.uniformBlockBinding(A,C)}function m(A,D){let C=o[A.id];C===void 0&&(T(A),C=x(A),o[A.id]=C,A.addEventListener("dispose",M));const U=D.program;r.updateUBOMapping(A,U);const L=e.render.frame;l[A.id]!==L&&(y(A),l[A.id]=L)}function x(A){const D=v();A.__bindingPointIndex=D;const C=s.createBuffer(),U=A.__size,L=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,U,L),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,C),C}function v(){for(let A=0;A<d;A++)if(u.indexOf(A)===-1)return u.push(A),A;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(A){const D=o[A.id],C=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let L=0,O=C.length;L<O;L++){const B=Array.isArray(C[L])?C[L]:[C[L]];for(let b=0,P=B.length;b<P;b++){const z=B[b];if(S(z,L,b,U)===!0){const $=z.__offset,K=Array.isArray(z.value)?z.value:[z.value];let ue=0;for(let de=0;de<K.length;de++){const ae=K[de],Z=R(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,$+ue,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,ue),ue+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(A,D,C,U){const L=A.value,O=D+"_"+C;if(U[O]===void 0)return typeof L=="number"||typeof L=="boolean"?U[O]=L:U[O]=L.clone(),!0;{const B=U[O];if(typeof L=="number"||typeof L=="boolean"){if(B!==L)return U[O]=L,!0}else if(B.equals(L)===!1)return B.copy(L),!0}return!1}function T(A){const D=A.uniforms;let C=0;const U=16;for(let O=0,B=D.length;O<B;O++){const b=Array.isArray(D[O])?D[O]:[D[O]];for(let P=0,z=b.length;P<z;P++){const $=b[P],K=Array.isArray($.value)?$.value:[$.value];for(let ue=0,de=K.length;ue<de;ue++){const ae=K[ue],Z=R(ae),q=C%U,me=q%Z.boundary,re=q+me;C+=me,re!==0&&U-re<Z.storage&&(C+=U-re),$.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=C,C+=Z.storage}}}const L=C%U;return L>0&&(C+=U-L),A.__size=C,A.__cache={},this}function R(A){const D={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(D.boundary=4,D.storage=4):A.isVector2?(D.boundary=8,D.storage=8):A.isVector3||A.isColor?(D.boundary=16,D.storage=12):A.isVector4?(D.boundary=16,D.storage=16):A.isMatrix3?(D.boundary=48,D.storage=48):A.isMatrix4?(D.boundary=64,D.storage=64):A.isTexture?yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):yt("WebGLRenderer: Unsupported uniform value type.",A),D}function M(A){const D=A.target;D.removeEventListener("dispose",M);const C=u.indexOf(D.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function _(){for(const A in o)s.deleteBuffer(o[A]);u=[],o={},l={}}return{bind:p,update:m,dispose:_}}const tw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function nw(){return zi===null&&(zi=new G_(tw,16,16,xa,xr),zi.name="DFG_LUT",zi.minFilter=On,zi.magFilter=On,zi.wrapS=hr,zi.wrapT=hr,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class gg{constructor(e={}){const{canvas:t=x_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1,outputBufferType:S=li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const R=S,M=new Set([Rf,Cf,Af]),_=new Set([li,qi,ho,po,bf,Tf]),A=new Uint32Array(4),D=new Int32Array(4);let C=null,U=null;const L=[],O=[];let B=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=Un;let z=0,$=0,K=null,ue=-1,de=null;const ae=new rn,Z=new rn;let q=null;const me=new wt(0);let re=0,k=t.width,se=t.height,Ce=1,He=null,ve=null;const ne=new rn(0,0,k,se),pe=new rn(0,0,k,se);let ye=!1;const Ne=new Ff;let V=!1,ke=!1;const Ct=new tn,ze=new Q,ht=new rn,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function kt(){return K===null?Ce:1}let j=r;function jt(N,Y){return t.getContext(N,Y)}try{const N={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",St,!1),t.addEventListener("webglcontextcreationerror",bt,!1),j===null){const Y="webgl2";if(j=jt(Y,N),j===null)throw jt(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ut("WebGLRenderer: "+N.message),N}let _t,Tt,Ye,I,E,W,he,ge,oe,Ke,Ae,Ge,lt,Se,Ie,We,Fe,Pe,mt,G,Ue,Ee,Te,xe;function fe(){_t=new nM(j),_t.init(),Ee=new qE(j,_t),Tt=new qS(j,_t,e,Ee),Ye=new WE(j,_t),Tt.reversedDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),I=new sM(j),E=new NE,W=new XE(j,_t,Ye,E,Tt,Ee,I),he=new $S(b),ge=new tM(b),oe=new c1(j),Te=new WS(j,oe),Ke=new iM(j,oe,I,Te),Ae=new oM(j,Ke,oe,I),mt=new aM(j,Tt,W),We=new YS(E),Ge=new RE(b,he,ge,_t,Tt,Te,We),lt=new JE(b,E),Se=new DE,Ie=new kE(_t),Pe=new GS(b,he,ge,Ye,Ae,T,p),Fe=new HE(b,Ae,Tt),xe=new ew(j,I,Tt,Ye),G=new XS(j,_t,I),Ue=new rM(j,_t,I),I.programs=Ge.programs,b.capabilities=Tt,b.extensions=_t,b.properties=E,b.renderLists=Se,b.shadowMap=Fe,b.state=Ye,b.info=I}fe(),R!==li&&(B=new cM(R,t.width,t.height,o,l));const be=new ZE(b,j);this.xr=be,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=_t.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=_t.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(N){N!==void 0&&(Ce=N,this.setSize(k,se,!1))},this.getSize=function(N){return N.set(k,se)},this.setSize=function(N,Y,le=!0){if(be.isPresenting){yt("WebGLRenderer: Can't change size while VR device is presenting.");return}k=N,se=Y,t.width=Math.floor(N*Ce),t.height=Math.floor(Y*Ce),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(k*Ce,se*Ce).floor()},this.setDrawingBufferSize=function(N,Y,le){k=N,se=Y,Ce=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(R===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(ae)},this.getViewport=function(N){return N.copy(ne)},this.setViewport=function(N,Y,le,ie){N.isVector4?ne.set(N.x,N.y,N.z,N.w):ne.set(N,Y,le,ie),Ye.viewport(ae.copy(ne).multiplyScalar(Ce).round())},this.getScissor=function(N){return N.copy(pe)},this.setScissor=function(N,Y,le,ie){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,Y,le,ie),Ye.scissor(Z.copy(pe).multiplyScalar(Ce).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(N){Ye.setScissorTest(ye=N)},this.setOpaqueSort=function(N){He=N},this.setTransparentSort=function(N){ve=N},this.getClearColor=function(N){return N.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,le=!0){let ie=0;if(N){let J=!1;if(K!==null){const Oe=K.texture.format;J=M.has(Oe)}if(J){const Oe=K.texture.type,Ve=_.has(Oe),De=Pe.getClearColor(),Ze=Pe.getClearAlpha(),Xe=De.r,ut=De.g,rt=De.b;Ve?(A[0]=Xe,A[1]=ut,A[2]=rt,A[3]=Ze,j.clearBufferuiv(j.COLOR,0,A)):(D[0]=Xe,D[1]=ut,D[2]=rt,D[3]=Ze,j.clearBufferiv(j.COLOR,0,D))}else ie|=j.COLOR_BUFFER_BIT}Y&&(ie|=j.DEPTH_BUFFER_BIT),le&&(ie|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",St,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Pe.dispose(),Se.dispose(),Ie.dispose(),E.dispose(),he.dispose(),ge.dispose(),Ae.dispose(),Te.dispose(),xe.dispose(),Ge.dispose(),be.dispose(),be.removeEventListener("sessionstart",Di),be.removeEventListener("sessionend",Zi),kn.stop()};function ct(N){N.preventDefault(),Nm("WebGLRenderer: Context Lost."),P=!0}function St(){Nm("WebGLRenderer: Context Restored."),P=!1;const N=I.autoReset,Y=Fe.enabled,le=Fe.autoUpdate,ie=Fe.needsUpdate,J=Fe.type;fe(),I.autoReset=N,Fe.enabled=Y,Fe.autoUpdate=le,Fe.needsUpdate=ie,Fe.type=J}function bt(N){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Fn(N){const Y=N.target;Y.removeEventListener("dispose",Fn),pn(Y)}function pn(N){Ki(N),E.remove(N)}function Ki(N){const Y=E.get(N).programs;Y!==void 0&&(Y.forEach(function(le){Ge.releaseProgram(le)}),N.isShaderMaterial&&Ge.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,ie,J,Oe){Y===null&&(Y=Pt);const Ve=J.isMesh&&J.matrixWorld.determinant()<0,De=Ii(N,Y,le,ie,J);Ye.setMaterial(ie,Ve);let Ze=le.index,Xe=1;if(ie.wireframe===!0){if(Ze=Ke.getWireframeAttribute(le),Ze===void 0)return;Xe=2}const ut=le.drawRange,rt=le.attributes.position;let xt=ut.start*Xe,Nt=(ut.start+ut.count)*Xe;Oe!==null&&(xt=Math.max(xt,Oe.start*Xe),Nt=Math.min(Nt,(Oe.start+Oe.count)*Xe)),Ze!==null?(xt=Math.max(xt,0),Nt=Math.min(Nt,Ze.count)):rt!=null&&(xt=Math.max(xt,0),Nt=Math.min(Nt,rt.count));const Ht=Nt-xt;if(Ht<0||Ht===1/0)return;Te.setup(J,ie,De,le,Ze);let Bt,Dt=G;if(Ze!==null&&(Bt=oe.get(Ze),Dt=Ue,Dt.setIndex(Bt)),J.isMesh)ie.wireframe===!0?(Ye.setLineWidth(ie.wireframeLinewidth*kt()),Dt.setMode(j.LINES)):Dt.setMode(j.TRIANGLES);else if(J.isLine){let ot=ie.linewidth;ot===void 0&&(ot=1),Ye.setLineWidth(ot*kt()),J.isLineSegments?Dt.setMode(j.LINES):J.isLineLoop?Dt.setMode(j.LINE_LOOP):Dt.setMode(j.LINE_STRIP)}else J.isPoints?Dt.setMode(j.POINTS):J.isSprite&&Dt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Dt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Dt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const ot=J._multiDrawStarts,Lt=J._multiDrawCounts,$e=J._multiDrawCount,tt=Ze?oe.get(Ze).bytesPerElement:1,$t=E.get(ie).currentProgram.getUniforms();for(let zt=0;zt<$e;zt++)$t.setValue(j,"_gl_DrawID",zt),Dt.render(ot[zt]/tt,Lt[zt])}else if(J.isInstancedMesh)Dt.renderInstances(xt,Ht,J.count);else if(le.isInstancedBufferGeometry){const ot=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Lt=Math.min(le.instanceCount,ot);Dt.renderInstances(xt,Ht,Lt)}else Dt.render(xt,Ht)};function Ni(N,Y,le){N.transparent===!0&&N.side===fr&&N.forceSinglePass===!1?(N.side=ti,N.needsUpdate=!0,Li(N,Y,le),N.side=Kr,N.needsUpdate=!0,Li(N,Y,le),N.side=fr):Li(N,Y,le)}this.compile=function(N,Y,le=null){le===null&&(le=N),U=Ie.get(le),U.init(Y),O.push(U),le.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),N!==le&&N.traverseVisible(function(J){J.isLight&&J.layers.test(Y.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const ie=new Set;return N.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Oe=J.material;if(Oe)if(Array.isArray(Oe))for(let Ve=0;Ve<Oe.length;Ve++){const De=Oe[Ve];Ni(De,le,J),ie.add(De)}else Ni(Oe,le,J),ie.add(Oe)}),U=O.pop(),ie},this.compileAsync=function(N,Y,le=null){const ie=this.compile(N,Y,le);return new Promise(J=>{function Oe(){if(ie.forEach(function(Ve){E.get(Ve).currentProgram.isReady()&&ie.delete(Ve)}),ie.size===0){J(N);return}setTimeout(Oe,10)}_t.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let _r=null;function Pi(N){_r&&_r(N)}function Di(){kn.stop()}function Zi(){kn.start()}const kn=new dg;kn.setAnimationLoop(Pi),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(N){_r=N,be.setAnimationLoop(N),N===null?kn.stop():kn.start()},be.addEventListener("sessionstart",Di),be.addEventListener("sessionend",Zi),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const le=be.enabled===!0&&be.isPresenting===!0,ie=B!==null&&(K===null||le)&&B.begin(b,K);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(Y),Y=be.getCamera()),N.isScene===!0&&N.onBeforeRender(b,N,Y,K),U=Ie.get(N,O.length),U.init(Y),O.push(U),Ct.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ne.setFromProjectionMatrix(Ct,Hi,Y.reversedDepth),ke=this.localClippingEnabled,V=We.init(this.clippingPlanes,ke),C=Se.get(N,L.length),C.init(),L.push(C),be.enabled===!0&&be.isPresenting===!0){const Ve=b.xr.getDepthSensingMesh();Ve!==null&&yr(Ve,Y,-1/0,b.sortObjects)}yr(N,Y,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(He,ve),at=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,at&&Pe.addToRenderList(C,N),this.info.render.frame++,V===!0&&We.beginShadows();const J=U.state.shadowsArray;if(Fe.render(J,N,Y),V===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&B.hasRenderPass())===!1){const Ve=C.opaque,De=C.transmissive;if(U.setupLights(),Y.isArrayCamera){const Ze=Y.cameras;if(De.length>0)for(let Xe=0,ut=Ze.length;Xe<ut;Xe++){const rt=Ze[Xe];Qr(Ve,De,N,rt)}at&&Pe.render(N);for(let Xe=0,ut=Ze.length;Xe<ut;Xe++){const rt=Ze[Xe];Zr(C,N,rt,rt.viewport)}}else De.length>0&&Qr(Ve,De,N,Y),at&&Pe.render(N),Zr(C,N,Y)}K!==null&&$===0&&(W.updateMultisampleRenderTarget(K),W.updateRenderTargetMipmap(K)),ie&&B.end(b),N.isScene===!0&&N.onAfterRender(b,N,Y),Te.resetDefaultState(),ue=-1,de=null,O.pop(),O.length>0?(U=O[O.length-1],V===!0&&We.setGlobalState(b.clippingPlanes,U.state.camera)):U=null,L.pop(),L.length>0?C=L[L.length-1]:C=null};function yr(N,Y,le,ie){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ne.intersectsSprite(N)){ie&&ht.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ct);const Ve=Ae.update(N),De=N.material;De.visible&&C.push(N,Ve,De,le,ht.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ne.intersectsObject(N))){const Ve=Ae.update(N),De=N.material;if(ie&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),ht.copy(N.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),ht.copy(Ve.boundingSphere.center)),ht.applyMatrix4(N.matrixWorld).applyMatrix4(Ct)),Array.isArray(De)){const Ze=Ve.groups;for(let Xe=0,ut=Ze.length;Xe<ut;Xe++){const rt=Ze[Xe],xt=De[rt.materialIndex];xt&&xt.visible&&C.push(N,Ve,xt,le,ht.z,rt)}}else De.visible&&C.push(N,Ve,De,le,ht.z,null)}}const Oe=N.children;for(let Ve=0,De=Oe.length;Ve<De;Ve++)yr(Oe[Ve],Y,le,ie)}function Zr(N,Y,le,ie){const{opaque:J,transmissive:Oe,transparent:Ve}=N;U.setupLightsView(le),V===!0&&We.setGlobalState(b.clippingPlanes,le),ie&&Ye.viewport(ae.copy(ie)),J.length>0&&Bn(J,Y,le),Oe.length>0&&Bn(Oe,Y,le),Ve.length>0&&Bn(Ve,Y,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Qr(N,Y,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ie.id]===void 0){const xt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ie.id]=new Wi(1,1,{generateMipmaps:!0,type:xt?xr:li,minFilter:Ss,samples:Tt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const Oe=U.state.transmissionRenderTarget[ie.id],Ve=ie.viewport||ae;Oe.setSize(Ve.z*b.transmissionResolutionScale,Ve.w*b.transmissionResolutionScale);const De=b.getRenderTarget(),Ze=b.getActiveCubeFace(),Xe=b.getActiveMipmapLevel();b.setRenderTarget(Oe),b.getClearColor(me),re=b.getClearAlpha(),re<1&&b.setClearColor(16777215,.5),b.clear(),at&&Pe.render(le);const ut=b.toneMapping;b.toneMapping=Gi;const rt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),U.setupLightsView(ie),V===!0&&We.setGlobalState(b.clippingPlanes,ie),Bn(N,le,ie),W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe),_t.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Nt=0,Ht=Y.length;Nt<Ht;Nt++){const Bt=Y[Nt],{object:Dt,geometry:ot,material:Lt,group:$e}=Bt;if(Lt.side===fr&&Dt.layers.test(ie.layers)){const tt=Lt.side;Lt.side=ti,Lt.needsUpdate=!0,zn(Dt,le,ie,ot,Lt,$e),Lt.side=tt,Lt.needsUpdate=!0,xt=!0}}xt===!0&&(W.updateMultisampleRenderTarget(Oe),W.updateRenderTargetMipmap(Oe))}b.setRenderTarget(De,Ze,Xe),b.setClearColor(me,re),rt!==void 0&&(ie.viewport=rt),b.toneMapping=ut}function Bn(N,Y,le){const ie=Y.isScene===!0?Y.overrideMaterial:null;for(let J=0,Oe=N.length;J<Oe;J++){const Ve=N[J],{object:De,geometry:Ze,group:Xe}=Ve;let ut=Ve.material;ut.allowOverride===!0&&ie!==null&&(ut=ie),De.layers.test(le.layers)&&zn(De,Y,le,Ze,ut,Xe)}}function zn(N,Y,le,ie,J,Oe){N.onBeforeRender(b,Y,le,ie,J,Oe),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),J.onBeforeRender(b,Y,le,ie,N,Oe),J.transparent===!0&&J.side===fr&&J.forceSinglePass===!1?(J.side=ti,J.needsUpdate=!0,b.renderBufferDirect(le,Y,ie,J,N,Oe),J.side=Kr,J.needsUpdate=!0,b.renderBufferDirect(le,Y,ie,J,N,Oe),J.side=fr):b.renderBufferDirect(le,Y,ie,J,N,Oe),N.onAfterRender(b,Y,le,ie,J,Oe)}function Li(N,Y,le){Y.isScene!==!0&&(Y=Pt);const ie=E.get(N),J=U.state.lights,Oe=U.state.shadowsArray,Ve=J.state.version,De=Ge.getParameters(N,J.state,Oe,Y,le),Ze=Ge.getProgramCacheKey(De);let Xe=ie.programs;ie.environment=N.isMeshStandardMaterial?Y.environment:null,ie.fog=Y.fog,ie.envMap=(N.isMeshStandardMaterial?ge:he).get(N.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,Xe===void 0&&(N.addEventListener("dispose",Fn),Xe=new Map,ie.programs=Xe);let ut=Xe.get(Ze);if(ut!==void 0){if(ie.currentProgram===ut&&ie.lightsStateVersion===Ve)return Qi(N,De),ut}else De.uniforms=Ge.getUniforms(N),N.onBeforeCompile(De,b),ut=Ge.acquireProgram(De,Ze),Xe.set(Ze,ut),ie.uniforms=De.uniforms;const rt=ie.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=We.uniform),Qi(N,De),ie.needsLights=Ts(N),ie.lightsStateVersion=Ve,ie.needsLights&&(rt.ambientLightColor.value=J.state.ambient,rt.lightProbe.value=J.state.probe,rt.directionalLights.value=J.state.directional,rt.directionalLightShadows.value=J.state.directionalShadow,rt.spotLights.value=J.state.spot,rt.spotLightShadows.value=J.state.spotShadow,rt.rectAreaLights.value=J.state.rectArea,rt.ltc_1.value=J.state.rectAreaLTC1,rt.ltc_2.value=J.state.rectAreaLTC2,rt.pointLights.value=J.state.point,rt.pointLightShadows.value=J.state.pointShadow,rt.hemisphereLights.value=J.state.hemi,rt.directionalShadowMap.value=J.state.directionalShadowMap,rt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,rt.spotShadowMap.value=J.state.spotShadowMap,rt.spotLightMatrix.value=J.state.spotLightMatrix,rt.spotLightMap.value=J.state.spotLightMap,rt.pointShadowMap.value=J.state.pointShadowMap,rt.pointShadowMatrix.value=J.state.pointShadowMatrix),ie.currentProgram=ut,ie.uniformsList=null,ut}function Jr(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=Zl.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Qi(N,Y){const le=E.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function Ii(N,Y,le,ie,J){Y.isScene!==!0&&(Y=Pt),W.resetTextureUnits();const Oe=Y.fog,Ve=ie.isMeshStandardMaterial?Y.environment:null,De=K===null?b.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:va,Ze=(ie.isMeshStandardMaterial?ge:he).get(ie.envMap||Ve),Xe=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ut=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),rt=!!le.morphAttributes.position,xt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Ht=Gi;ie.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=b.toneMapping);const Bt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Dt=Bt!==void 0?Bt.length:0,ot=E.get(ie),Lt=U.state.lights;if(V===!0&&(ke===!0||N!==de)){const gn=N===de&&ie.id===ue;We.setState(ie,N,gn)}let $e=!1;ie.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Lt.state.version||ot.outputColorSpace!==De||J.isBatchedMesh&&ot.batching===!1||!J.isBatchedMesh&&ot.batching===!0||J.isBatchedMesh&&ot.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&ot.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&ot.instancing===!1||!J.isInstancedMesh&&ot.instancing===!0||J.isSkinnedMesh&&ot.skinning===!1||!J.isSkinnedMesh&&ot.skinning===!0||J.isInstancedMesh&&ot.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&ot.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&ot.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&ot.instancingMorph===!1&&J.morphTexture!==null||ot.envMap!==Ze||ie.fog===!0&&ot.fog!==Oe||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==We.numPlanes||ot.numIntersection!==We.numIntersection)||ot.vertexAlphas!==Xe||ot.vertexTangents!==ut||ot.morphTargets!==rt||ot.morphNormals!==xt||ot.morphColors!==Nt||ot.toneMapping!==Ht||ot.morphTargetsCount!==Dt)&&($e=!0):($e=!0,ot.__version=ie.version);let tt=ot.currentProgram;$e===!0&&(tt=Li(ie,Y,J));let $t=!1,zt=!1,an=!1;const Le=tt.getUniforms(),et=ot.uniforms;if(Ye.useProgram(tt.program)&&($t=!0,zt=!0,an=!0),ie.id!==ue&&(ue=ie.id,zt=!0),$t||de!==N){Ye.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Le.setValue(j,"projectionMatrix",N.projectionMatrix),Le.setValue(j,"viewMatrix",N.matrixWorldInverse);const xn=Le.map.cameraPosition;xn!==void 0&&xn.setValue(j,ze.setFromMatrixPosition(N.matrixWorld)),Tt.logarithmicDepthBuffer&&Le.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Le.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),de!==N&&(de=N,zt=!0,an=!0)}if(ot.needsLights&&(Lt.state.directionalShadowMap.length>0&&Le.setValue(j,"directionalShadowMap",Lt.state.directionalShadowMap,W),Lt.state.spotShadowMap.length>0&&Le.setValue(j,"spotShadowMap",Lt.state.spotShadowMap,W),Lt.state.pointShadowMap.length>0&&Le.setValue(j,"pointShadowMap",Lt.state.pointShadowMap,W)),J.isSkinnedMesh){Le.setOptional(j,J,"bindMatrix"),Le.setOptional(j,J,"bindMatrixInverse");const gn=J.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Le.setValue(j,"boneTexture",gn.boneTexture,W))}J.isBatchedMesh&&(Le.setOptional(j,J,"batchingTexture"),Le.setValue(j,"batchingTexture",J._matricesTexture,W),Le.setOptional(j,J,"batchingIdTexture"),Le.setValue(j,"batchingIdTexture",J._indirectTexture,W),Le.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&Le.setValue(j,"batchingColorTexture",J._colorsTexture,W));const mn=le.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&mt.update(J,le,tt),(zt||ot.receiveShadow!==J.receiveShadow)&&(ot.receiveShadow=J.receiveShadow,Le.setValue(j,"receiveShadow",J.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(et.envMap.value=Ze,et.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&Y.environment!==null&&(et.envMapIntensity.value=Y.environmentIntensity),et.dfgLUT!==void 0&&(et.dfgLUT.value=nw()),zt&&(Le.setValue(j,"toneMappingExposure",b.toneMappingExposure),ot.needsLights&&ci(et,an),Oe&&ie.fog===!0&&lt.refreshFogUniforms(et,Oe),lt.refreshMaterialUniforms(et,ie,Ce,se,U.state.transmissionRenderTarget[N.id]),Zl.upload(j,Jr(ot),et,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Zl.upload(j,Jr(ot),et,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Le.setValue(j,"center",J.center),Le.setValue(j,"modelViewMatrix",J.modelViewMatrix),Le.setValue(j,"normalMatrix",J.normalMatrix),Le.setValue(j,"modelMatrix",J.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const gn=ie.uniformsGroups;for(let xn=0,As=gn.length;xn<As;xn++){const Ui=gn[xn];xe.update(Ui,tt),xe.bind(Ui,tt)}}return tt}function ci(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ts(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(N,Y,le){const ie=E.get(N);ie.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(N.texture).__webglTexture=Y,E.get(N.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const le=E.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0};const Sa=j.createFramebuffer();this.setRenderTarget=function(N,Y=0,le=0){K=N,z=Y,$=le;let ie=null,J=!1,Oe=!1;if(N){const De=E.get(N);if(De.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(j.FRAMEBUFFER,De.__webglFramebuffer),ae.copy(N.viewport),Z.copy(N.scissor),q=N.scissorTest,Ye.viewport(ae),Ye.scissor(Z),Ye.setScissorTest(q),ue=-1;return}else if(De.__webglFramebuffer===void 0)W.setupRenderTarget(N);else if(De.__hasExternalTextures)W.rebindTextures(N,E.get(N.texture).__webglTexture,E.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ut=N.depthTexture;if(De.__boundDepthTexture!==ut){if(ut!==null&&E.has(ut)&&(N.width!==ut.image.width||N.height!==ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(N)}}const Ze=N.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Oe=!0);const Xe=E.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Xe[Y])?ie=Xe[Y][le]:ie=Xe[Y],J=!0):N.samples>0&&W.useMultisampledRTT(N)===!1?ie=E.get(N).__webglMultisampledFramebuffer:Array.isArray(Xe)?ie=Xe[le]:ie=Xe,ae.copy(N.viewport),Z.copy(N.scissor),q=N.scissorTest}else ae.copy(ne).multiplyScalar(Ce).floor(),Z.copy(pe).multiplyScalar(Ce).floor(),q=ye;if(le!==0&&(ie=Sa),Ye.bindFramebuffer(j.FRAMEBUFFER,ie)&&Ye.drawBuffers(N,ie),Ye.viewport(ae),Ye.scissor(Z),Ye.setScissorTest(q),J){const De=E.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,De.__webglTexture,le)}else if(Oe){const De=Y;for(let Ze=0;Ze<N.textures.length;Ze++){const Xe=E.get(N.textures[Ze]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Ze,Xe.__webglTexture,le,De)}}else if(N!==null&&le!==0){const De=E.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,De.__webglTexture,le)}ue=-1},this.readRenderTargetPixels=function(N,Y,le,ie,J,Oe,Ve,De=0){if(!(N&&N.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze){Ye.bindFramebuffer(j.FRAMEBUFFER,Ze);try{const Xe=N.textures[De],ut=Xe.format,rt=Xe.type;if(!Tt.textureFormatReadable(ut)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(rt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ie&&le>=0&&le<=N.height-J&&(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),j.readPixels(Y,le,ie,J,Ee.convert(ut),Ee.convert(rt),Oe))}finally{const Xe=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(j.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,ie,J,Oe,Ve,De=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=E.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ve!==void 0&&(Ze=Ze[Ve]),Ze)if(Y>=0&&Y<=N.width-ie&&le>=0&&le<=N.height-J){Ye.bindFramebuffer(j.FRAMEBUFFER,Ze);const Xe=N.textures[De],ut=Xe.format,rt=Xe.type;if(!Tt.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,xt),j.bufferData(j.PIXEL_PACK_BUFFER,Oe.byteLength,j.STREAM_READ),N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+De),j.readPixels(Y,le,ie,J,Ee.convert(ut),Ee.convert(rt),0);const Nt=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(j.FRAMEBUFFER,Nt);const Ht=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await v_(j,Ht,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,xt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Oe),j.deleteBuffer(xt),j.deleteSync(Ht),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,le=0){const ie=Math.pow(2,-le),J=Math.floor(N.image.width*ie),Oe=Math.floor(N.image.height*ie),Ve=Y!==null?Y.x:0,De=Y!==null?Y.y:0;W.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,le,0,0,Ve,De,J,Oe),Ye.unbindTexture()};const es=j.createFramebuffer(),Vt=j.createFramebuffer();this.copyTextureToTexture=function(N,Y,le=null,ie=null,J=0,Oe=null){Oe===null&&(J!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Oe=J,J=0):Oe=0);let Ve,De,Ze,Xe,ut,rt,xt,Nt,Ht;const Bt=N.isCompressedTexture?N.mipmaps[Oe]:N.image;if(le!==null)Ve=le.max.x-le.min.x,De=le.max.y-le.min.y,Ze=le.isBox3?le.max.z-le.min.z:1,Xe=le.min.x,ut=le.min.y,rt=le.isBox3?le.min.z:0;else{const mn=Math.pow(2,-J);Ve=Math.floor(Bt.width*mn),De=Math.floor(Bt.height*mn),N.isDataArrayTexture?Ze=Bt.depth:N.isData3DTexture?Ze=Math.floor(Bt.depth*mn):Ze=1,Xe=0,ut=0,rt=0}ie!==null?(xt=ie.x,Nt=ie.y,Ht=ie.z):(xt=0,Nt=0,Ht=0);const Dt=Ee.convert(Y.format),ot=Ee.convert(Y.type);let Lt;Y.isData3DTexture?(W.setTexture3D(Y,0),Lt=j.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Lt=j.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Lt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Y.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Y.unpackAlignment);const $e=j.getParameter(j.UNPACK_ROW_LENGTH),tt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),$t=j.getParameter(j.UNPACK_SKIP_PIXELS),zt=j.getParameter(j.UNPACK_SKIP_ROWS),an=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Bt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Bt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,Xe),j.pixelStorei(j.UNPACK_SKIP_ROWS,ut),j.pixelStorei(j.UNPACK_SKIP_IMAGES,rt);const Le=N.isDataArrayTexture||N.isData3DTexture,et=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const mn=E.get(N),gn=E.get(Y),xn=E.get(mn.__renderTarget),As=E.get(gn.__renderTarget);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,As.__webglFramebuffer);for(let Ui=0;Ui<Ze;Ui++)Le&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(N).__webglTexture,J,rt+Ui),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(Y).__webglTexture,Oe,Ht+Ui)),j.blitFramebuffer(Xe,ut,Ve,De,xt,Nt,Ve,De,j.DEPTH_BUFFER_BIT,j.NEAREST);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||N.isRenderTargetTexture||E.has(N)){const mn=E.get(N),gn=E.get(Y);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,es),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,Vt);for(let xn=0;xn<Ze;xn++)Le?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,mn.__webglTexture,J,rt+xn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,mn.__webglTexture,J),et?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,gn.__webglTexture,Oe,Ht+xn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,gn.__webglTexture,Oe),J!==0?j.blitFramebuffer(Xe,ut,Ve,De,xt,Nt,Ve,De,j.COLOR_BUFFER_BIT,j.NEAREST):et?j.copyTexSubImage3D(Lt,Oe,xt,Nt,Ht+xn,Xe,ut,Ve,De):j.copyTexSubImage2D(Lt,Oe,xt,Nt,Xe,ut,Ve,De);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else et?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Lt,Oe,xt,Nt,Ht,Ve,De,Ze,Dt,ot,Bt.data):Y.isCompressedArrayTexture?j.compressedTexSubImage3D(Lt,Oe,xt,Nt,Ht,Ve,De,Ze,Dt,Bt.data):j.texSubImage3D(Lt,Oe,xt,Nt,Ht,Ve,De,Ze,Dt,ot,Bt):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Oe,xt,Nt,Ve,De,Dt,ot,Bt.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Oe,xt,Nt,Bt.width,Bt.height,Dt,Bt.data):j.texSubImage2D(j.TEXTURE_2D,Oe,xt,Nt,Ve,De,Dt,ot,Bt);j.pixelStorei(j.UNPACK_ROW_LENGTH,$e),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,tt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,$t),j.pixelStorei(j.UNPACK_SKIP_ROWS,zt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,an),Oe===0&&Y.generateMipmaps&&j.generateMipmap(Lt),Ye.unbindTexture()},this.initRenderTarget=function(N){E.get(N).__webglFramebuffer===void 0&&W.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?W.setTextureCube(N,0):N.isData3DTexture?W.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?W.setTexture2DArray(N,0):W.setTexture2D(N,0),Ye.unbindTexture()},this.resetState=function(){z=0,$=0,K=null,Ye.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}const E0={type:"change"},Gf={type:"start"},xg={type:"end"},Hl=new If,w0=new qr,iw=Math.cos(70*y_.DEG2RAD),dn=new Q,ei=2*Math.PI,Xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6;class vg extends o1{constructor(e,t=null){super(e,t),this.state=Xt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fa.ROTATE,MIDDLE:fa.DOLLY,RIGHT:fa.PAN},this.touches={ONE:da.ROTATE,TWO:da.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ws,this._lastTargetPosition=new Q,this._quat=new ws().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Qm,this._sphericalDelta=new Qm,this._scale=1,this._panOffset=new Q,this._rotateStart=new gt,this._rotateEnd=new gt,this._rotateDelta=new gt,this._panStart=new gt,this._panEnd=new gt,this._panDelta=new gt,this._dollyStart=new gt,this._dollyEnd=new gt,this._dollyDelta=new gt,this._dollyDirection=new Q,this._mouse=new gt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sw.bind(this),this._onPointerDown=rw.bind(this),this._onPointerUp=aw.bind(this),this._onContextMenu=hw.bind(this),this._onMouseWheel=cw.bind(this),this._onKeyDown=uw.bind(this),this._onTouchStart=dw.bind(this),this._onTouchMove=fw.bind(this),this._onMouseDown=ow.bind(this),this._onMouseMove=lw.bind(this),this._interceptControlDown=pw.bind(this),this._interceptControlUp=mw.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(E0),this.update(),this.state=Xt.NONE}update(e=null){const t=this.object.position;dn.copy(t).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=ei:r>Math.PI&&(r-=ei),o<-Math.PI?o+=ei:o>Math.PI&&(o-=ei),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),t.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=dn.length();u=this._clampDistance(d*this._scale);const p=d-u;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Q(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(d),this.object.updateMatrixWorld(),u=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<iw?this.object.lookAt(this.target):(w0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(w0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(E0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ei/60*this.autoRotateSpeed*e:ei/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){dn.setFromMatrixColumn(t,0),dn.multiplyScalar(-e),this._panOffset.add(dn)}_panUp(e,t){this.screenSpacePanning===!0?dn.setFromMatrixColumn(t,1):(dn.setFromMatrixColumn(t,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(e),this._panOffset.add(dn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;dn.copy(o).sub(this.target);let l=dn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,d=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ei*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ei*this._rotateDelta.x/t.clientHeight),this._rotateUp(ei*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new gt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function rw(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function sw(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function aw(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xg),this.state=Xt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ow(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Xt.DOLLY;break;case fa.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xt.ROTATE}break;case fa.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Xt.PAN}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Gf)}function lw(s){switch(this.state){case Xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cw(s){this.enabled===!1||this.enableZoom===!1||this.state!==Xt.NONE||(s.preventDefault(),this.dispatchEvent(Gf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(xg))}function uw(s){this.enabled!==!1&&this._handleKeyDown(s)}function dw(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case da.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Xt.TOUCH_ROTATE;break;case da.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Xt.TOUCH_PAN;break;default:this.state=Xt.NONE}break;case 2:switch(this.touches.TWO){case da.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Xt.TOUCH_DOLLY_PAN;break;case da.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Xt.TOUCH_DOLLY_ROTATE;break;default:this.state=Xt.NONE}break;default:this.state=Xt.NONE}this.state!==Xt.NONE&&this.dispatchEvent(Gf)}function fw(s){switch(this._trackPointer(s),this.state){case Xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Xt.NONE}}function hw(s){this.enabled!==!1&&s.preventDefault()}function pw(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mw(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gw=()=>{const s=Be.useRef(null),e=Be.useRef(null),t=Be.useRef(null),[r,o]=Be.useState(0),l=Be.useRef(0),[u,d]=Be.useState(!1),p=Be.useRef(!1),[m,x]=Be.useState("STANDBY"),v=Be.useRef("STANDBY");v.current=m;const[y,S]=Be.useState(10),T=Be.useRef(10);T.current=y;const[R,M]=Be.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[_,A]=Be.useState(null),[D,C]=Be.useState("geral"),U=Be.useRef(null),L=Be.useRef(null),O=Be.useRef(null),B=Be.useRef(null),b=Be.useRef(null),P=Be.useRef(null),z=Be.useRef(null),$=Be.useRef(null),K=Be.useRef(null),ue=Be.useRef(null),de=Be.useRef(null),ae=Be.useRef(null),Z=Be.useRef(null),q=Be.useRef(null),me=Be.useRef(null),re=Be.useRef(null),k=Be.useRef(null),se=Be.useRef(null),Ce=Be.useRef(new Q(0,2.2,4.4)),He=Be.useRef(new Q(0,1.4,0)),ve=Be.useCallback(()=>{let Ne=P.current;Ne||(Ne=document.createElement("canvas"),Ne.width=512,Ne.height=360,P.current=Ne);const V=Ne.getContext("2d");if(!V)return;const ke=v.current,Ct=T.current;ke==="STANDBY"||ke==="HEATING"?V.fillStyle="#061a1b":ke==="FIRE_ALARM"?V.fillStyle="#3a0808":ke==="SUPPRESSION"?V.fillStyle="#3a1f04":V.fillStyle="#05291b",V.fillRect(0,0,512,360),V.strokeStyle="#3f3f46",V.lineWidth=4,V.strokeRect(2,2,508,356),V.fillStyle="rgba(0, 0, 0, 0.5)",V.fillRect(0,0,512,42),V.fillStyle="#94a3b8",V.font="bold 14px monospace",V.textAlign="left",V.fillText("OUTFIRE IHM v3.2",16,27),V.textAlign="right",V.fillStyle="#10b981",V.fillText("BAT: 13.8V [100%]",496,27),ke==="STANDBY"||ke==="HEATING"?(V.fillStyle="#10b981",V.font="bold 24px Inter, sans-serif",V.textAlign="center",V.fillText("● SISTEMA PROTEGIDO",256,90),V.fillStyle="#cbd5e1",V.font="13px monospace",V.fillText("MONITORAMENTO ATIVO (145°C / 300°C)",256,120),V.fillStyle="#0f2922",V.fillRect(24,145,464,46),V.fillStyle="#a7f3d0",V.font="13px Inter, sans-serif",V.textAlign="left",V.fillText("SENSOR COIFA (145°C):",38,174),V.textAlign="right",V.fillText(ke==="HEATING"?"280°C [SUBINDO]":"180°C [NORMAL]",474,174),V.fillStyle="#0f2922",V.fillRect(24,200,464,46),V.fillStyle="#a7f3d0",V.textAlign="left",V.fillText("VÁLVULA SOLENOIDE DE GÁS:",38,229),V.textAlign="right",V.fillStyle="#34d399",V.fillText("ABERTA / LIBERADA",474,229),V.fillStyle="#0f2922",V.fillRect(24,255,464,46),V.fillStyle="#a7f3d0",V.textAlign="left",V.fillText("SISTEMA DE EXAUSTÃO:",38,284),V.textAlign="right",V.fillStyle="#34d399",V.fillText("OPERANDO / CONECTADO",474,284),V.fillStyle="#64748b",V.font="11px monospace",V.textAlign="center",V.fillText("DISPARO AUTOMÁTICO EM CASO DE FOGO OU BOTOEIRA MANUAL",256,332)):ke==="FIRE_ALARM"?(V.fillStyle="#ef4444",V.font="bold 26px Inter, sans-serif",V.textAlign="center",V.fillText("🚨 FOGO DETECTADO! 🚨",256,82),V.fillStyle="#fecaca",V.font="bold 14px Inter, sans-serif",V.fillText("SENSOR TÉRMICO SUPEROU 145°C",256,110),V.fillStyle="#1c0505",V.fillRect(40,128,432,105),V.strokeStyle="#ef4444",V.lineWidth=3,V.strokeRect(40,128,432,105),V.fillStyle="#ffffff",V.font="bold 64px monospace",V.fillText(`00:0${Math.max(0,Ct)}`,256,204),V.fillStyle="#fca5a5",V.font="bold 13px Inter, sans-serif",V.fillText("DISPARO AUTOMÁTICO DE SAPONIFICANTE",256,260),V.fillStyle="#dc2626",V.fillRect(24,285,464,52),V.fillStyle="#ffffff",V.font="bold 14px Inter, sans-serif",V.fillText("EVACUAR O LOCAL OU ACIONAR A BOTOEIRA MANUAL",256,317)):ke==="SUPPRESSION"?(V.fillStyle="#f59e0b",V.font="bold 25px Inter, sans-serif",V.textAlign="center",V.fillText("⚡ DISPARO DE SUPRESSÃO ATIVO ⚡",256,85),V.fillStyle="#ffffff",V.font="bold 15px monospace",V.fillText("DESCARGA DE SAPONIFICANTE & CO2",256,118),V.fillStyle="#ef4444",V.fillRect(24,140,464,48),V.fillStyle="#ffffff",V.font="bold 14px Inter, sans-serif",V.fillText("VÁLVULA DE GÁS: CORTADA (BLOQUEADA)",256,170),V.fillStyle="#3b82f6",V.fillRect(24,198,464,48),V.fillStyle="#ffffff",V.fillText("EXAUSTOR: DESLIGADO (DAMPER FECHADO)",256,228),V.fillStyle="#cbd5e1",V.font="bold 13px Inter, sans-serif",V.fillText("MANTA DE SABÃO ENCAPSULANDO O ÓLEO QUENTE",256,282),V.fillStyle="#a7f3d0",V.font="12px monospace",V.fillText("TEMPERATURA EM QUEDA DRÁSTICA...",256,318)):ke==="EXTINGUISHED"&&(V.fillStyle="#10b981",V.font="bold 25px Inter, sans-serif",V.textAlign="center",V.fillText("✓ INCÊNDIO EXTINTO COM SUCESSO",256,85),V.fillStyle="#e2e8f0",V.font="bold 14px Inter, sans-serif",V.fillText("REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)",256,118),V.fillStyle="#064e3b",V.fillRect(24,140,464,46),V.fillStyle="#6ee7b7",V.font="13px Inter, sans-serif",V.textAlign="left",V.fillText("TEMPERATURA FINAL DO ÓLEO:",38,169),V.textAlign="right",V.fillText("42°C (TOTALMENTE RESFRIADO)",474,169),V.fillStyle="#064e3b",V.fillRect(24,198,464,46),V.fillStyle="#6ee7b7",V.textAlign="left",V.fillText("INTERTRAVAMENTO DE SEGURANÇA:",38,227),V.textAlign="right",V.fillText("ATIVO / SEGURO",474,227),V.fillStyle="#064e3b",V.fillRect(24,256,464,46),V.fillStyle="#6ee7b7",V.textAlign="left",V.fillText("COZINHA & ESTRUTURA:",38,285),V.textAlign="right",V.fillText("100% PRESERVADAS (AVCB OK)",474,285),V.fillStyle="#94a3b8",V.font="11px monospace",V.textAlign="center",V.fillText("SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME",256,332)),b.current&&(b.current.needsUpdate=!0)},[]),ne=Be.useCallback(()=>{p.current=!0,d(!0),x("SUPPRESSION"),S(0),M({temp:140,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0}),ue.current&&(ue.current.rotation.x=.65),setTimeout(()=>{x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0})},3500)},[]),pe=Be.useCallback(()=>{p.current=!1,d(!1),x("STANDBY"),S(10),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),ue.current&&(ue.current.rotation.x=0),q.current&&(q.current.scale.set(.001,.001,.001),q.current.visible=!1)},[]);Be.useEffect(()=>{ve()},[m,y,ve]),Be.useEffect(()=>{const Ne=()=>{if(!s.current)return;const V=s.current.getBoundingClientRect(),ke=s.current.offsetHeight-window.innerHeight;if(ke<=0)return;const Ct=-V.top,ze=Math.min(1,Math.max(0,Ct/ke));if(l.current=ze,o(ze),!(p.current&&ze>.05))if(p.current&&ze<=.05&&(p.current=!1,d(!1)),ze<.18)x("STANDBY"),M({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10});else if(ze>=.18&&ze<.42){x("HEATING");const ht=Math.round(180+(ze-.18)/.24*185);M({temp:ht,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:10})}else if(ze>=.42&&ze<.65){x("FIRE_ALARM");const ht=Math.max(1,Math.round(10-(ze-.42)/.23*9));S(ht),M({temp:420,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"ALERTA DE FOGO",countdown:ht})}else ze>=.65&&ze<.85?(x("SUPPRESSION"),M({temp:160,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(x("EXTINGUISHED"),M({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",Ne,{passive:!0}),Ne(),()=>window.removeEventListener("scroll",Ne)},[]);const ye=Ne=>{C(Ne),Ne==="geral"?(Ce.current.set(0,2.2,4.4),He.current.set(0,1.4,0)):Ne==="central"?(Ce.current.set(1.9,1.85,1.5),He.current.set(2.1,1.8,.15)):Ne==="fritadeira"?(Ce.current.set(-.2,1.4,2.2),He.current.set(-.2,1,0)):Ne==="botoeira"&&(Ce.current.set(1.4,1.45,1.3),He.current.set(1.45,1.4,.05))};return Be.useEffect(()=>{if(!t.current||!e.current)return;const Ne=e.current.clientWidth||window.innerWidth,V=e.current.clientHeight||window.innerHeight,ke=new sg;U.current=ke,ke.background=new wt(658448),ke.fog=new Of(658448,.035);const Ct=new Xn(45,Ne/V,.1,100);Ct.position.set(0,2.2,4.4),L.current=Ct;const ze=new gg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});ze.setSize(Ne,V),ze.setPixelRatio(Math.min(window.devicePixelRatio,2)),ze.shadowMap.enabled=!0,ze.shadowMap.type=Ef,ze.toneMapping=rc,ze.toneMappingExposure=1.1,O.current=ze;const ht=new vg(Ct,ze.domElement);ht.enableDamping=!0,ht.dampingFactor=.05,ht.enableZoom=!1,ht.enablePan=!1,ht.maxPolarAngle=Math.PI/2+.05,ht.target.set(0,1.4,0),B.current=ht;const Pt=new cg(16774890,.75);ke.add(Pt);const at=new xf(16777215,1.3);at.position.set(4,6,4),at.castShadow=!0,at.shadow.mapSize.width=1024,at.shadow.mapSize.height=1024,ke.add(at);const kt=new n1(16766880,2.8,6,Math.PI/3,.3);kt.position.set(0,2.7,0),kt.target.position.set(0,.9,0),ke.add(kt),ke.add(kt.target);const j=new $m(16733440,0,5);j.position.set(-.35,1.2,.1),ke.add(j),K.current=j;const jt=new $m(16711680,0,8);jt.position.set(2.1,2.25,.2),ke.add(jt),z.current=jt;const _t=new Wt({color:13421772,metalness:.9,roughness:.22}),Tt=new Wt({color:1579551,roughness:.6,metalness:.1}),Ye=new Wt({color:987413,roughness:.8,metalness:.2}),I=new st(new Wn(14,14),Ye);I.rotation.x=-Math.PI/2,I.receiveShadow=!0,ke.add(I);const E=new st(new Wn(14,8),Tt);E.position.set(0,4,-1.2),E.receiveShadow=!0,ke.add(E);const W=new st(new Wn(14,8),Tt);W.rotation.y=Math.PI/2,W.position.set(-4.5,4,0),ke.add(W);const he=new In;ke.add(he);const ge=new st(new Yt(2.6,.9,1),_t);ge.position.set(0,.45,0),ge.castShadow=!0,ge.receiveShadow=!0,he.add(ge);const oe=new In;oe.position.set(-.55,.9,0),he.add(oe),Z.current=oe;const Ke=new st(new Yt(.85,.12,.75),_t);Ke.position.set(0,.06,0),oe.add(Ke);const Ae=new st(new Yt(.72,.02,.62),new Wt({color:9584654,roughness:.1,metalness:.3}));Ae.position.set(0,.11,0),oe.add(Ae);const Ge=new Wt({color:1118481,roughness:.5}),lt=new st(new Gn(.012,.012,.28),Ge);lt.position.set(-.16,.22,.34),lt.rotation.x=Math.PI/3,oe.add(lt);const Se=new st(new Gn(.012,.012,.28),Ge);Se.position.set(.16,.22,.34),Se.rotation.x=Math.PI/3,oe.add(Se);const Ie=new In;Ie.position.set(.65,.9,0),he.add(Ie);const We=new st(new Yt(.95,.06,.75),new Wt({color:3355448,roughness:.4,metalness:.7}));We.position.set(0,.03,0),Ie.add(We);const Fe=new In;Fe.position.set(0,2.3,0),ke.add(Fe);const Pe=new st(new Yt(2.8,.6,1.2),_t);Pe.castShadow=!0,Fe.add(Pe);const mt=new Wt({color:10066329,metalness:.9,roughness:.3});for(let $e=-1;$e<=1;$e+=.5){const tt=new st(new Yt(.42,.35,.04),mt);tt.position.set($e,-.15,0),tt.rotation.x=-Math.PI/6,Fe.add(tt)}const G=new st(new Gn(.28,.28,1.5,32),_t);G.position.set(0,1,0),Fe.add(G);const Ue=new Wt({color:11817737,metalness:.8,roughness:.3}),Ee=new Wt({color:13938487,metalness:.9,roughness:.2}),Te=new st(new Gn(.015,.015,2.4),Ue);Te.rotation.z=Math.PI/2,Te.position.set(0,-.28,-.2),Fe.add(Te),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([$e,tt,$t])=>{const zt=new st(new kf(.025,.06,16),Ee);zt.position.set($e,tt,$t),zt.rotation.x=Math.PI,Fe.add(zt)});const fe=new In;fe.position.set(2.1,1.8,.15),fe.rotation.y=-.28,ke.add(fe),ae.current=fe,fe.userData={interactiveType:"central",name:"Central Outfire VTS"};const ct=new lg().load("/assets/tampa-central-moderna.png");ct.colorSpace=Un;const St=new Wt({color:1316378,roughness:.45,metalness:.8}),bt=new Wt({map:ct,roughness:.35,metalness:.25}),Fn=[St,St,St,St,bt,St],pn=new st(new Yt(.72,.52,.22),Fn);pn.castShadow=!0,fe.add(pn),ve();const Ki=new ag(P.current);Ki.colorSpace=Un,b.current=Ki;const Ni=new xi({map:Ki,transparent:!1}),_r=new st(new Wn(.29,.2),Ni);_r.position.set(.08,.02,.111),fe.add(_r);const Pi=new st(new Gn(.016,.016,1.6,16),_t);Pi.position.set(0,1.05,0),fe.add(Pi);const Di=new st(new Gn(.045,.045,.03,16),new Wt({color:1118481,metalness:.8}));Di.position.set(0,.275,0),fe.add(Di);const Zi=new Wt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),kn=new st(new Gn(.038,.042,.065,16),Zi);kn.position.set(0,.32,0),fe.add(kn),$.current=kn;const yr=new st(new Yt(.68,.02,.2),St);yr.position.set(0,-.32,0),fe.add(yr);const Zr=new Wt({color:592396,roughness:.5}),Qr=new st(new Yt(.24,.15,.14),Zr);Qr.position.set(-.16,-.23,0),fe.add(Qr);const Bn=new st(new Yt(.24,.15,.14),Zr);Bn.position.set(.16,-.23,0),fe.add(Bn);const zn=new In;zn.position.set(1.45,1.4,.08),ke.add(zn),de.current=zn,zn.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const Li=new st(new Yt(.18,.24,.08),new Wt({color:13373713,roughness:.3,metalness:.3}));Li.castShadow=!0,zn.add(Li);const Jr=new st(new Yt(.14,.18,.015),new Wt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));Jr.position.set(0,0,.042),zn.add(Jr);const Qi=new st(new Yt(.1,.06,.025),new Wt({color:16436245,roughness:.3}));Qi.position.set(0,-.01,.048),zn.add(Qi),ue.current=Qi;const Ii=new st(new Yt(.74,.08,.64),new Wt({color:16317180,roughness:.9,metalness:.05}));Ii.position.set(-.55,1.05,0),Ii.scale.set(.001,.001,.001),Ii.visible=!1,ke.add(Ii),q.current=Ii;const ci=new In;ke.add(ci),me.current=ci;const Ts=70,Sa=new zf(.08,1),es=[];for(let $e=0;$e<Ts;$e++){const tt=new st(Sa,new xi({color:16729344,transparent:!0,opacity:.85}));tt.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),tt.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},ci.add(tt),es.push(tt)}const Vt=new In;ke.add(Vt),re.current=Vt;const N=50,Y=new fo(.12,8,8),le=[];for(let $e=0;$e<N;$e++){const tt=new st(Y,new xi({color:2040877,transparent:!0,opacity:.4}));tt.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),tt.userData={speedY:.6+Math.random()*1,maxH:2.2},Vt.add(tt),le.push(tt)}const ie=new In;ke.add(ie),k.current=ie;const J=80,Oe=new fo(.025,8,8),Ve=[];for(let $e=0;$e<J;$e++){const tt=new st(Oe,new xi({color:16777215,transparent:!0,opacity:.9}));tt.position.set(-.55,1.9,0),tt.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},ie.add(tt),Ve.push(tt)}const De=new In;ke.add(De),se.current=De;const Ze=35,Xe=new fo(.16,8,8),ut=[];for(let $e=0;$e<Ze;$e++){const tt=new st(Xe,new xi({color:14870768,transparent:!0,opacity:.4}));tt.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),De.add(tt),ut.push(tt)}const rt=new ug,xt=new gt,Nt=$e=>{var zt,an;const tt=ze.domElement.getBoundingClientRect();xt.x=($e.clientX-tt.left)/tt.width*2-1,xt.y=-(($e.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(xt,Ct);const $t=rt.intersectObjects([zn,fe,oe],!0);if($t.length>0){let Le=$t[0].object;for(;Le&&!((zt=Le.userData)!=null&&zt.interactiveType)&&Le.parent;)Le=Le.parent;if(Le&&((an=Le.userData)!=null&&an.interactiveType)){ze.domElement.style.cursor="pointer",A(Le.userData.name);return}}ze.domElement.style.cursor="default",A(null)},Ht=$e=>{var zt,an,Le;const tt=ze.domElement.getBoundingClientRect();xt.x=($e.clientX-tt.left)/tt.width*2-1,xt.y=-(($e.clientY-tt.top)/tt.height)*2+1,rt.setFromCamera(xt,Ct);const $t=rt.intersectObjects([zn,fe,oe],!0);if($t.length>0){let et=$t[0].object;for(;et&&!((zt=et.userData)!=null&&zt.interactiveType)&&et.parent;)et=et.parent;((an=et==null?void 0:et.userData)==null?void 0:an.interactiveType)==="botoeira"?ne():((Le=et==null?void 0:et.userData)==null?void 0:Le.interactiveType)==="central"&&ye("central")}};ze.domElement.addEventListener("mousemove",Nt),ze.domElement.addEventListener("click",Ht);const Bt=()=>{if(!e.current||!O.current||!L.current)return;const $e=e.current.clientWidth,tt=e.current.clientHeight;L.current.aspect=$e/tt,L.current.updateProjectionMatrix(),O.current.setSize($e,tt)};window.addEventListener("resize",Bt);let Dt;const ot=new a1,Lt=()=>{Dt=requestAnimationFrame(Lt);const $e=ot.getDelta(),tt=ot.getElapsedTime();Ct.position.lerp(Ce.current,.05),ht.target.lerp(He.current,.05),ht.update();const $t=v.current,zt=l.current;if($t==="HEATING"||$t==="FIRE_ALARM"){ci.visible=!0,Vt.visible=!0,k.current.visible=!1,se.current.visible=!1;const an=$t==="FIRE_ALARM"?1:Math.max(.2,(zt-.18)/.24);if(K.current&&(K.current.intensity=(2.5+Math.sin(tt*20)*1.5)*an,K.current.color.setHex(Math.random()>.3?16729344:16755200)),es.forEach((Le,et)=>{Le.visible=!0,Le.position.y+=Le.userData.speedY*$e,Le.position.x+=Math.sin(tt*10+et)*.006;const mn=(Le.position.y-Le.userData.baseY)/1;Le.scale.setScalar(Math.max(.01,(1-mn)*Le.userData.scale*an)),Le.material.opacity=1-mn,Le.position.y>Le.userData.baseY+.9&&(Le.position.y=Le.userData.baseY,Le.position.x=-.55+(Math.random()-.5)*.5,Le.position.z=(Math.random()-.5)*.4)}),le.forEach(Le=>{Le.visible=!0,Le.position.y+=Le.userData.speedY*$e,Le.scale.setScalar(an),Le.position.y>Le.userData.maxH&&(Le.position.y=1.3,Le.position.x=-.55+(Math.random()-.5)*.4)}),$t==="FIRE_ALARM"){const Le=Math.sin(tt*24)>0;z.current&&$.current&&(z.current.intensity=Le?5:0,$.current.material.emissive=Le?new wt(16711680):new wt(0))}}else if($t==="SUPPRESSION"){ci.visible=!0,k.current.visible=!0,se.current.visible=!0,es.forEach(Le=>{Le.scale.multiplyScalar(.92),Le.scale.x<.05&&(Le.visible=!1)}),K.current&&(K.current.intensity=Math.max(0,K.current.intensity-$e*4)),Ve.forEach((Le,et)=>{Le.visible=!0,Le.position.y-=Le.userData.speed*$e,Le.position.x+=Math.sin(tt*15+et)*.01,Le.position.y<1.05&&(Le.position.y=Le.userData.origY,Le.position.x=-.55+Le.userData.spread)}),q.current&&(q.current.visible=!0,q.current.scale.lerp(new Q(1,1,1),.08)),ut.forEach((Le,et)=>{Le.visible=!0,Le.position.y+=Math.sin(tt*3+et)*.004,Le.position.x+=Math.cos(tt*2+et)*.004});const an=Math.sin(tt*30)>0;z.current&&$.current&&(z.current.intensity=an?4:.2,$.current.material.emissive=an?new wt(16711680):new wt(3342336))}else $t==="EXTINGUISHED"?(ci.visible=!1,Vt.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!0,q.current.scale.set(1,1,1)),z.current&&$.current&&(z.current.intensity=0,$.current.material.emissive=new wt(0))):(ci.visible=!1,Vt.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),q.current&&(q.current.visible=!1),z.current&&$.current&&(z.current.intensity=0,$.current.material.emissive=new wt(0)));ze.render(ke,Ct)};return Lt(),()=>{cancelAnimationFrame(Dt),window.removeEventListener("resize",Bt),ze.domElement.removeEventListener("mousemove",Nt),ze.domElement.removeEventListener("click",Ht),ze.dispose()}},[ne,ve]),f.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[350vh] bg-[#07080a]",children:f.jsxs("div",{ref:e,className:"sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none",children:[f.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),f.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[f.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[f.jsx(N0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),f.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),f.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),f.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&f.jsx(Ql,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&f.jsx(uo,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&f.jsx(uo,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&f.jsx(yv,{className:"w-4 h-4 text-amber-300 animate-spin"}),m==="EXTINGUISHED"&&f.jsx(ic,{className:"w-4 h-4 text-emerald-400"}),R.systemStatus]}),m==="FIRE_ALARM"&&f.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping",children:["DISPARO EM ",y,"s"]})]})]}),f.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(uo,{className:`w-3.5 h-3.5 ${R.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),f.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[R.temp,"°C"]})]})]}),f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(Fv,{className:`w-3.5 h-3.5 ${R.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),f.jsx("span",{className:`text-xs font-bold font-mono ${R.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:R.gasStatus})]})]}),f.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[f.jsx(L0,{className:`w-3.5 h-3.5 ${R.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),f.jsxs("div",{className:"flex flex-col",children:[f.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),f.jsx("span",{className:`text-xs font-bold font-mono ${R.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:R.exhaustStatus})]})]})]})]}),_&&f.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[f.jsx(R0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),f.jsxs("span",{children:[_," — Clique para interagir"]})]}),f.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-3",children:[f.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[f.jsxs("button",{onClick:ne,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED",className:`py-2.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[f.jsx(Cv,{className:"w-4 h-4 text-red-400"}),f.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&f.jsxs("button",{onClick:pe,className:"py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95",children:[f.jsx(P0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Restaurar"})]})]}),f.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-[#f3e5ab]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg",children:[f.jsx(vv,{className:"w-4 h-4 text-[#d4af37] animate-bounce"}),f.jsx("span",{children:r<.85?"Role a página para ver a evolução do fogo e o combate automático":"Continue rolando para conhecer os detalhes técnicos da Central Outfire"})]}),f.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs",children:[f.jsxs("span",{className:"text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1",children:[f.jsx(gv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),f.jsx("button",{onClick:()=>ye("geral"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),f.jsx("button",{onClick:()=>ye("central"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),f.jsx("button",{onClick:()=>ye("fritadeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),f.jsx("button",{onClick:()=>ye("botoeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${D==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})})},xw=()=>{const[s,e]=Be.useState("3d"),t=Be.useRef(null),r=Be.useRef(null),[o,l]=Be.useState(!1),u=Be.useRef(!1);u.current=o;const[d,p]=Be.useState(!1),m=Be.useRef(!1);m.current=d;const[x,v]=Be.useState(null),y=Be.useRef(null),S=Be.useRef(null),T=Be.useRef(null),R=Be.useRef(null),M=()=>{l(C=>!C)},_=()=>{p(C=>!C)},A=()=>{T.current&&R.current&&(R.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};Be.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const C=r.current.clientWidth,U=r.current.clientHeight,L=new sg;L.background=new wt(921879);const O=new Xn(40,C/U,.1,100);O.position.set(1.8,1.2,2.2),R.current=O;const B=new gg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});B.setSize(C,U),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.shadowMap.enabled=!0,B.shadowMap.type=Ef,B.toneMapping=rc,B.toneMappingExposure=1.15;const b=new vg(O,B.domElement);b.enableDamping=!0,b.dampingFactor=.05,b.minDistance=1.2,b.maxDistance=6,b.target.set(0,0,0),T.current=b;const P=new cg(16774890,.9);L.add(P);const z=new xf(16777215,1.5);z.position.set(3,4,3),z.castShadow=!0,L.add(z);const $=new xf(13938487,.85);$.position.set(-3,-2,-3),L.add($);const K=new xi({color:0,transparent:!0,opacity:.35}),ue=new st(new Wn(2.2,1.4),K);ue.rotation.x=-Math.PI/2,ue.position.set(0,-.65,0),L.add(ue);const ae=new lg().load("/assets/tampa-central-moderna.png");ae.colorSpace=Un;const Z=new Wt({color:1316379,metalness:.85,roughness:.35}),q=new Wt({map:ae,metalness:.2,roughness:.35}),me=[Z,Z,Z,Z,q,Z],re=new st(new Yt(1.4,1,.58),me);re.castShadow=!0,re.receiveShadow=!0,L.add(re);const k=new xi({color:460810}),se=new st(new Wn(.88,.22),k);se.rotation.x=-Math.PI/2,se.position.set(0,.501,-.05),L.add(se);const Ce=new st(new Wn(.7,.22),k);Ce.rotation.x=Math.PI/2,Ce.position.set(0,-.501,-.05),L.add(Ce);const He=document.createElement("canvas");He.width=512,He.height=360;const ve=He.getContext("2d");ve&&(ve.fillStyle="#061317",ve.fillRect(0,0,512,360),ve.strokeStyle="#3f3f46",ve.lineWidth=4,ve.strokeRect(2,2,508,356),ve.fillStyle="rgba(0, 0, 0, 0.6)",ve.fillRect(0,0,512,44),ve.fillStyle="#94a3b8",ve.font="bold 16px monospace",ve.fillText("OUTFIRE VTS 32S3",18,28),ve.fillStyle="#10b981",ve.textAlign="right",ve.fillText("BAT: 100% [27.6V]",494,28),ve.textAlign="center",ve.fillStyle="#10b981",ve.font="bold 24px sans-serif",ve.fillText("● SISTEMA MONITORADO",256,100),ve.fillStyle="#cbd5e1",ve.font="13px monospace",ve.fillText("SUPRESSÃO AUTOMÁTICA NBR 14518",256,128),ve.fillStyle="#0a231f",ve.fillRect(24,150,464,46),ve.fillStyle="#6ee7b7",ve.font="bold 14px sans-serif",ve.textAlign="left",ve.fillText("LINHAS DE DETECÇÃO (COIFAS):",38,178),ve.textAlign="right",ve.fillText("NORMAL (145°C / 300°C)",474,178),ve.fillStyle="#0a231f",ve.fillRect(24,206,464,46),ve.fillStyle="#6ee7b7",ve.textAlign="left",ve.fillText("VÁLVULA SOLENOIDE DE GÁS:",38,234),ve.textAlign="right",ve.fillStyle="#34d399",ve.fillText("ABERTA / LIBERADA",474,234),ve.fillStyle="#0a231f",ve.fillRect(24,262,464,46),ve.fillStyle="#6ee7b7",ve.textAlign="left",ve.fillText("STATUS EXAUSTÃO & DAMPERS:",38,290),ve.textAlign="right",ve.fillText("SUPERVISIONADO",474,290),ve.fillStyle="#d4af37",ve.font="bold 12px monospace",ve.textAlign="center",ve.fillText("TOQUE PARA ACESSAR O MENU DE CONFIGURAÇÃO",256,335));const ne=new ag(He);ne.colorSpace=Un;const pe=new xi({map:ne}),ye=new st(new Wn(.38,.27),pe);ye.position.set(.18,.02,.292),L.add(ye);const Ne=new Wt({color:1579552,metalness:.9,roughness:.3}),V=new st(new Yt(.4,.29,.008),Ne);V.position.set(.18,.02,.288),L.add(V);const ke=new xi({color:460810}),Ct=new st(new Wn(.04,.12),ke);Ct.rotation.y=Math.PI,Ct.position.set(-.5,.3,-.291),L.add(Ct);const ze=new st(new Wn(.04,.12),ke);ze.rotation.y=Math.PI,ze.position.set(.5,.3,-.291),L.add(ze);const ht=new Wt({color:11580344,metalness:.9,roughness:.2}),Pt=new Gn(.012,.012,.015,8),at=new In;at.position.set(0,0,-.05),L.add(at),y.current=at;const kt=new Wt({color:2040619,metalness:.8,roughness:.35}),j=new st(new Yt(.95,.02,.25),kt);j.position.set(0,.505,0),j.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},at.add(j),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([Te,xe,fe])=>{const be=new st(Pt,ht);be.position.set(Te,xe,fe),at.add(be)});const jt=new Wt({color:13948120,metalness:.9,roughness:.2}),_t=new st(new Yt(.85,.44,.2),jt);_t.position.set(0,.27,0),_t.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},at.add(_t);const Tt=new xi({color:15381256}),Ye=new st(new Wn(.24,.08),Tt);Ye.position.set(0,.27,.101),at.add(Ye);const I=new In;I.position.set(0,0,-.05),L.add(I),S.current=I;const E=new Wt({color:2040619,metalness:.8,roughness:.35}),W=new st(new Yt(.74,.02,.24),E);W.position.set(0,-.505,0),W.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},I.add(W),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([Te,xe,fe])=>{const be=new st(Pt,ht);be.position.set(Te,xe,fe),I.add(be)});const he=new Wt({color:592397,roughness:.5}),ge=new st(new Yt(.3,.38,.18),he);ge.position.set(-.18,-.305,0),ge.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},I.add(ge);const oe=new st(new Yt(.3,.38,.18),he);oe.position.set(.18,-.305,0),oe.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},I.add(oe);const Ke=new Wt({color:2450411,metalness:.8}),Ae=new Wt({color:15680580,metalness:.8}),Ge=new st(new Gn(.012,.012,.03),Ke);Ge.position.set(-.24,-.1,.05),I.add(Ge);const lt=new st(new Gn(.012,.012,.03),Ae);lt.position.set(-.12,-.1,.05),I.add(lt);const Se=new st(new Gn(.012,.012,.03),Ke);Se.position.set(.12,-.1,.05),I.add(Se);const Ie=new st(new Gn(.012,.012,.03),Ae);Ie.position.set(.24,-.1,.05),I.add(Ie);const We=new ug,Fe=new gt,Pe=Te=>{var be,ct;const xe=B.domElement.getBoundingClientRect();Fe.x=(Te.clientX-xe.left)/xe.width*2-1,Fe.y=-((Te.clientY-xe.top)/xe.height)*2+1,We.setFromCamera(Fe,O);const fe=We.intersectObjects([at,I,re],!0);if(fe.length>0){let St=fe[0].object;if((be=St.userData)!=null&&be.isPsu){B.domElement.style.cursor="pointer",v(u.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((ct=St.userData)!=null&&ct.isBattery){B.domElement.style.cursor="pointer",v(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{B.domElement.style.cursor="grab",v("Gabinete Central Outfire (Arraste para girar 360°)");return}}B.domElement.style.cursor="default",v(null)},mt=Te=>{var be,ct;const xe=B.domElement.getBoundingClientRect();Fe.x=(Te.clientX-xe.left)/xe.width*2-1,Fe.y=-((Te.clientY-xe.top)/xe.height)*2+1,We.setFromCamera(Fe,O);const fe=We.intersectObjects([at,I],!0);if(fe.length>0){const St=fe[0].object;(be=St.userData)!=null&&be.isPsu?l(bt=>!bt):(ct=St.userData)!=null&&ct.isBattery&&p(bt=>!bt)}};B.domElement.addEventListener("mousemove",Pe),B.domElement.addEventListener("click",mt);const G=()=>{if(!r.current||!B||!O)return;const Te=r.current.clientWidth,xe=r.current.clientHeight;O.aspect=Te/xe,O.updateProjectionMatrix(),B.setSize(Te,xe)};window.addEventListener("resize",G);let Ue;const Ee=()=>{Ue=requestAnimationFrame(Ee);const Te=u.current?.52:0;y.current&&(y.current.position.y+=(Te-y.current.position.y)*.12);const xe=m.current?-.52:0;S.current&&(S.current.position.y+=(xe-S.current.position.y)*.12),b.update(),B.render(L,O)};return Ee(),()=>{cancelAnimationFrame(Ue),window.removeEventListener("resize",G),B.domElement.removeEventListener("mousemove",Pe),B.domElement.removeEventListener("click",mt),B.dispose()}},[s]);const D=[{icon:Mv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:_m,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Uv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:mv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Ed,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:N0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return f.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[f.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[f.jsx(_m,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[f.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[f.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&f.jsxs("div",{className:"relative w-full h-full",children:[f.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),x&&f.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:x}),f.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsxs("button",{onClick:M,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[f.jsx(kv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),f.jsxs("button",{onClick:_,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${d?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[f.jsx(dv,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:d?"Recolher Baterias":"Descer Baterias"})]})]}),f.jsx("button",{onClick:A,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:f.jsx(P0,{className:"w-4 h-4"})})]})]}),s==="interno"&&f.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&f.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),f.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),f.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[f.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[f.jsx(vo,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Gabinete 3D Interativo"})]}),f.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),f.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),f.jsx("div",{className:"lg:col-span-5 space-y-4",children:f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-6",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),f.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:f.jsx(Iv,{className:"w-6 h-6"})})]}),f.jsxs("div",{className:"space-y-3.5 text-sm",children:[f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx(Xr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsxs("span",{className:"text-gray-300",children:[f.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[f.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx("span",{children:"Dimensionar Cozinha"}),f.jsx(Gl,{className:"w-4 h-4 fill-black"})]}),f.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[f.jsx(C0,{className:"w-4 h-4 text-[#d4af37]"}),f.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:D.map((C,U)=>{const L=C.icon;return f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:f.jsx(L,{className:"w-6 h-6"})}),f.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:C.title}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:C.desc})]},U)})})]})]})},vw=()=>f.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(Ed,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",f.jsx("br",{}),f.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),f.jsx(vm,{className:"w-7 h-7 text-red-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",f.jsx("strong",{children:"1.700 vezes"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(uo,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),f.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),f.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),f.jsx(vm,{className:"w-7 h-7 text-amber-500"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),f.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",f.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[f.jsx(Ed,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),f.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),f.jsx(ic,{className:"w-7 h-7 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",f.jsx("strong",{children:"saponificação"}),"."]}),f.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[f.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[f.jsx(vo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),f.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),f.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[f.jsxs("div",{className:"p-4",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),f.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[f.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),f.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),_w=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return f.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(Nv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),f.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>f.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),f.jsx(Sv,{className:"w-6 h-6 text-[#d4af37]"})]}),f.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),f.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),f.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),f.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>f.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[f.jsx(ic,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{children:r})]},o))})]}),f.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[f.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),f.jsx(_v,{className:"w-4 h-4"})]})]},t))}),f.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:f.jsx(pv,{className:"w-8 h-8"})}),f.jsxs("div",{className:"flex-1 text-center md:text-left",children:[f.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),f.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",f.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),f.jsx("div",{className:"shrink-0",children:f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},yw=({onAddToCart:s})=>{var M,_;const[e,t]=Be.useState(1),[r,o]=Be.useState(9),[l,u]=Be.useState(!0),[d,p]=Be.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=A=>{if(t(A),A>d.length){const D=[...d];for(let C=d.length+1;C<=A;C++)D.push({id:C,name:`Coifa Setor ${C}`,lengthMeters:2,appliances:[{id:`${C}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${C}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(D)}else A<d.length&&p(d.slice(0,A))},x=(A,D)=>{const C=[...d];C[A].lengthMeters=Math.max(1,Math.min(8,Number(D.toFixed(1)))),p(C)},v=(A,D)=>{const C={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},U={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},L={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},O=[...d];O[A].appliances.push({id:Math.random().toString(36).substring(7),name:C[D],type:D,icon:U[D],widthMeters:L[D]}),p(O)},y=(A,D)=>{const C=[...d];C[A].appliances.splice(D,1),p(C)},S=Be.useMemo(()=>{let A=0,D=0,C=0,U=0;d.forEach(me=>{A+=me.appliances.length,D+=2,l&&(C+=1);const re=Math.max(1,Math.round(me.lengthMeters/.9));U+=re});const L=A+D+C,O=L*2,B=Math.max(9,O);let b=9;B>9&&B<=16?b=16:B>16&&B<=25?b=25:B>25&&(b=Math.ceil(B/9)*9);const P=Math.max(1,Math.ceil(r/3)),z=P,$=Math.max(10,Math.ceil(r/3*5)),K=$<=10?10:$<=25?25:45,ue=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,de=e===1?8900:e===2?14500:19800,ae=L*185+P*210,Z=U*295+z*320,q=de+ae+Z+1200;return{applianceNozzlesCount:A,plenumNozzlesCount:D,damperNozzlesCount:C,totalSaponificanteNozzles:L,saponificanteLiters:B,recommendedSaponificanteCylinderLiters:b,hoodSensorsCount:U,co2NozzlesCount:P,ductSensorsCount:z,co2Kg:$,recommendedCo2CylinderKg:K,centralModel:ue,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:q}},[d,r,l,e]),T=()=>{let A=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;A+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,A+=`🏢 *Configuração da Cozinha:*
`,A+=`• Quantidade de Coifas: ${e} independente(s)
`,A+=`• Comprimento do Duto de Exaustão: ${r} metros

`,d.forEach((C,U)=>{A+=`📍 *Coifa ${U+1} (${C.lengthMeters}m):*
`,A+=`  Equipamentos sob a coifa: ${C.appliances.map(L=>L.name).join(", ")||"Nenhum"}
`}),A+=`
⚙️ *Memória de Cálculo de Supressão:*
`,A+=`• Bicos de Saponificante (Classe K): ${S.totalSaponificanteNozzles} bicos (${S.applianceNozzlesCount} equipamentos + ${S.plenumNozzlesCount} pleno + ${S.damperNozzlesCount} colarinho)
`,A+=`• Volume de Saponificante: ${S.saponificanteLiters} Litros (Cilindro recomendado: ${S.recommendedSaponificanteCylinderLiters}L)
`,A+=`• Sensores Reguláveis na Coifa (145°C): ${S.hoodSensorsCount} unidades
`,A+=`• Bicos de CO2 no Duto: ${S.co2NozzlesCount} unidades (1 a cada 3m)
`,A+=`• Sensores Reguláveis no Duto (300°C): ${S.ductSensorsCount} unidades (1 a cada 3m)
`,A+=`• Volume de CO2 no Duto: ${S.recommendedCo2CylinderKg} Kg (mínimo de 10kg)
`,A+=`• Intertravamento: Válvula de corte de gás + Fechamento de Dampers e Exaustor
`,A+=`• Modelo da Central: ${S.centralModel}

`,A+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const D=encodeURIComponent(A);window.open(`https://wa.me/5515996576807?text=${D}`,"_blank")},R=()=>{const A={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:S.estimatedPriceBRL,description:`Sistema customizado: ${S.totalSaponificanteNozzles} bicos saponificante (${S.recommendedSaponificanteCylinderLiters}L), ${S.co2NozzlesCount} bicos CO2 (${S.recommendedCo2CylinderKg}kg), ${S.hoodSensorsCount} sensores 145°C e ${S.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${S.centralModel}`,`Cilindro Saponificante Classe K: ${S.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${S.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${S.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${S.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${S.hoodSensorsCount} (145°C) + ${S.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(A)};return f.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(A0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[f.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[f.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),f.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),f.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(A=>f.jsxs("button",{onClick:()=>m(A),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===A?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[f.jsxs("span",{children:[A," ",A===1?"Coifa":"Coifas"]}),f.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:A===1?"Individual":"Setorizada"})]},A))})]}),f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center justify-between mb-2",children:[f.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[f.jsx(L0,{className:"w-4 h-4 text-cyan-400"}),f.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),f.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),f.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:A=>o(Number(A.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),f.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[f.jsx("span",{children:"3 m (Curto)"}),f.jsx("span",{children:"15 m (Médio)"}),f.jsx("span",{children:"30 m (Longo)"})]}),f.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[f.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),f.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[S.co2NozzlesCount," bicos CO2"]})]})]}),d.map((A,D)=>f.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[f.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:D+1}),f.jsx("h4",{className:"font-bold text-white text-sm",children:A.name})]}),f.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[A.lengthMeters," m"]})]}),f.jsxs("div",{children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[f.jsx("span",{children:"Comprimento da Coifa:"}),f.jsxs("span",{children:[A.lengthMeters," metros lineares"]})]}),f.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:A.lengthMeters,onChange:C=>x(D,Number(C.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),f.jsxs("div",{children:[f.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",A.appliances.length," protegidos):"]}),f.jsx("div",{className:"space-y-2 mb-3",children:A.appliances.map((C,U)=>f.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[f.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[f.jsx("span",{className:"text-base",children:C.icon}),f.jsx("span",{className:"font-medium",children:C.name}),f.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),f.jsx("button",{onClick:()=>y(D,U),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:f.jsx(D0,{className:"w-3.5 h-3.5"})})]},C.id))}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[f.jsxs("button",{onClick:()=>v(D,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fritadeira"})]}),f.jsxs("button",{onClick:()=>v(D,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Fogão"})]}),f.jsxs("button",{onClick:()=>v(D,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Chapa"})]}),f.jsxs("button",{onClick:()=>v(D,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[f.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),f.jsx("span",{children:"+ Grelha"})]})]})]})]},A.id))]}),f.jsx("div",{className:"lg:col-span-7 space-y-6",children:f.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),f.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),f.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),f.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[f.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),f.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 340",children:[f.jsxs("defs",{children:[f.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[f.jsx("stop",{offset:"0%",stopColor:"#4a5568"}),f.jsx("stop",{offset:"50%",stopColor:"#718096"}),f.jsx("stop",{offset:"100%",stopColor:"#4a5568"})]}),f.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[f.jsx("stop",{offset:"0%",stopColor:"#2d3748"}),f.jsx("stop",{offset:"100%",stopColor:"#1a202c"})]})]}),f.jsx("rect",{x:"250",y:"40",width:"100",height:"70",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"250",y:"30",width:"300",height:"40",fill:"url(#ductGrad)",stroke:"#a0aec0",strokeWidth:"1.5"}),f.jsx("rect",{x:"360",y:"24",width:"45",height:"52",fill:"#9b2c2c",stroke:"#feb2b2",strokeWidth:"1.5",rx:"3"}),f.jsx("text",{x:"382",y:"54",fill:"#ffffff",fontSize:"9",fontWeight:"bold",textAnchor:"middle",children:"DAMPER"}),Array.from({length:S.co2NozzlesCount}).map((A,D)=>{const C=270+D*(250/Math.max(1,S.co2NozzlesCount));return f.jsxs("g",{children:[f.jsx("circle",{cx:C,cy:"50",r:"6",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:C,y:"68",fill:"#fc8181",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),f.jsx("rect",{x:C+12,y:"44",width:"10",height:"10",fill:"#805ad5",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${C+17}, 49)`})]},`co2-${D}`)}),f.jsx("polygon",{points:"60,150 120,110 480,110 540,150",fill:"url(#hoodGrad)",stroke:"#cbd5e0",strokeWidth:"2"}),f.jsx("rect",{x:"60",y:"150",width:"480",height:"25",fill:"#2d3748",stroke:"#cbd5e0",strokeWidth:"1.5"}),f.jsxs("text",{x:"300",y:"167",fill:"#cbd5e0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",letterSpacing:"2",children:["COIFA INOX ",(M=d[0])==null?void 0:M.lengthMeters,"m (",e," ZONA",e>1?"S":"",")"]}),f.jsx("circle",{cx:"180",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"180",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),f.jsx("circle",{cx:"420",cy:"130",r:"6",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.5"}),f.jsx("text",{x:"420",y:"120",fill:"#f6e05e",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"}),Array.from({length:S.hoodSensorsCount}).map((A,D)=>{const C=100+(D+1)*(400/(S.hoodSensorsCount+1));return f.jsxs("g",{children:[f.jsx("circle",{cx:C,cy:"142",r:"5",fill:"#dd6b20",stroke:"#ffffff",strokeWidth:"1.2"}),f.jsx("text",{x:C,y:"158",fill:"#fbd38d",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"145°C"})]},`sensor-${D}`)}),f.jsx("rect",{x:"60",y:"240",width:"480",height:"70",fill:"#1a202c",stroke:"#4a5568",strokeWidth:"1.5"}),(_=d[0])==null?void 0:_.appliances.map((A,D)=>{const C=d[0].appliances.length,U=440/Math.max(1,C),L=80+D*U,O=U-10;return f.jsxs("g",{children:[f.jsx("rect",{x:L,y:"220",width:O,height:"80",fill:"#2d3748",stroke:"#718096",strokeWidth:"1.2",rx:"4"}),f.jsx("text",{x:L+O/2,y:"255",fill:"#ffffff",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:A.name.split(" ")[0]}),f.jsx("text",{x:L+O/2,y:"275",fill:"#a0aec0",fontSize:"8",textAnchor:"middle",children:A.type.toUpperCase()}),f.jsx("line",{x1:L+O/2,y1:"175",x2:L+O/2,y2:"200",stroke:"#d4af37",strokeWidth:"2"}),f.jsx("polygon",{points:`${L+O/2-5},200 ${L+O/2+5},200 ${L+O/2},210`,fill:"#d4af37"}),f.jsx("text",{x:L+O/2,y:"195",fill:"#ecc94b",fontSize:"7",fontWeight:"bold",textAnchor:"end",children:"BICOK"})]},A.id)}),f.jsx("rect",{x:"535",y:"160",width:"55",height:"85",fill:"#171923",stroke:"#e53e3e",strokeWidth:"2",rx:"5"}),f.jsx("rect",{x:"542",y:"170",width:"40",height:"30",fill:"#3182ce",rx:"2"}),f.jsx("text",{x:"562",y:"188",fill:"#ffffff",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"VTS 32S3"}),f.jsx("circle",{cx:"562",cy:"225",r:"7",fill:"#e53e3e"}),f.jsx("text",{x:"562",y:"240",fill:"#e2e8f0",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),f.jsx("line",{x1:"60",y1:"310",x2:"540",y2:"310",stroke:"#ecc94b",strokeWidth:"3"}),f.jsx("rect",{x:"180",y:"303",width:"20",height:"14",fill:"#e53e3e",stroke:"#ffffff",strokeWidth:"1"}),f.jsx("text",{x:"190",y:"328",fill:"#feb2b2",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"})]}),f.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 pt-2 border-t border-white/10 text-[10px] text-gray-300",children:[f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),f.jsx("span",{children:"Bico Saponificante Classe K"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),f.jsx("span",{children:"Bico CO2 Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),f.jsx("span",{children:"Sensor 145°C Coifa"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),f.jsx("span",{children:"Sensor 300°C Duto"})]}),f.jsxs("div",{className:"flex items-center gap-1.5",children:[f.jsx("span",{className:"w-2.5 h-2.5 rounded-sm bg-red-700"}),f.jsx("span",{children:"Damper Corta-Fogo"})]})]})]}),f.jsxs("div",{className:"mt-6 space-y-3",children:[f.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[f.jsx(Xr,{className:"w-4 h-4 text-emerald-400"}),f.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.totalSaponificanteNozzles," un"]}),f.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",S.saponificanteLiters,"L calculados)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),f.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[S.recommendedSaponificanteCylinderLiters," L"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.co2NozzlesCount," un"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),f.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[S.recommendedCo2CylinderKg," Kg"]}),f.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),f.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.hoodSensorsCount," un (1/metro)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),f.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[S.ductSensorsCount," un (1 a cada 3m)"]})]}),f.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),f.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[f.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[f.jsx(pr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),f.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),f.jsxs("button",{onClick:R,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(hv,{className:"w-5 h-5 fill-black"}),f.jsx("span",{children:"Comprar Kit na Loja"})]})]}),f.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Sw=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Mw=({onAddToCart:s})=>{const[e,t]=Be.useState("all"),[r,o]=Be.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],u=Sw.filter(p=>{const m=e==="all"||p.category===e,x=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&x}),d=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return f.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(Jl,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),f.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[f.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>f.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),f.jsxs("div",{className:"relative w-full lg:w-72",children:[f.jsx(Pv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),f.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(p=>f.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[f.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&f.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[f.jsx(vo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),f.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),f.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),f.jsxs("div",{className:"p-6",children:[f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),f.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,x)=>f.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[f.jsx(xv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),f.jsx("span",{className:"line-clamp-1",children:m})]},x))})]})]}),f.jsxs("div",{className:"p-6 pt-0",children:[f.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),f.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),f.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[f.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[f.jsx(Jl,{className:"w-3.5 h-3.5 fill-black"}),f.jsx("span",{children:"Adicionar"})]}),f.jsxs("button",{onClick:()=>d(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[f.jsx(pr,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Ew=()=>{const s=[{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"733 KB",description:"Diagrama completo de ligação dos bornes, ligação dos relés de gás e exaustão, sensores reguláveis, dampers e alimentação 12V/Bateria.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return f.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(fv,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>f.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between mb-4",children:[f.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),f.jsx(Md,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),f.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),f.jsxs("div",{className:"pt-4 border-t border-white/10 flex items-center justify-between",children:[f.jsxs("span",{className:"text-xs text-gray-400 font-mono",children:["Tamanho: ",t.size]}),f.jsxs("a",{href:t.link,target:t.link.startsWith("http")||t.link.endsWith(".pdf")?"_blank":"_self",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[f.jsx(C0,{className:"w-3.5 h-3.5"}),f.jsx("span",{children:"Baixar Documento"})]})]})]},r))}),f.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[f.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[f.jsx(Ov,{className:"w-5 h-5 text-amber-400"}),f.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),f.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[f.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),f.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),f.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),f.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[f.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[f.jsx(Ql,{className:"w-4 h-4 text-emerald-400 shrink-0"}),f.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),f.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},ww=()=>{const[s,e]=Be.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return f.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[f.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[f.jsx(vo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),f.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",f.jsx("br",{}),f.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),f.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>f.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[f.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[f.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),f.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[f.jsx(R0,{className:"w-5 h-5 text-amber-400"}),f.jsx("span",{children:"Clique para Ampliar Foto"})]}),f.jsx("div",{className:"absolute top-4 left-4",children:f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),f.jsxs("div",{className:"p-6",children:[f.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[f.jsx("span",{children:r.title}),f.jsx(wv,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),f.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&f.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:f.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[f.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:f.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),f.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[f.jsxs("div",{children:[f.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),f.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),f.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},bw=()=>{const[s,e]=Be.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=Be.useState(!1),o=l=>{l.preventDefault();let u=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;u+=`👤 *Nome:* ${s.nome}
`,u+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,u+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,u+=`📍 *Cidade / Estado:* ${s.cidade}
`,u+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(u+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(u)}`,"_blank"),r(!1)},1e3)};return f.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[f.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[f.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[f.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[f.jsx(pr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),f.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",f.jsx("br",{}),f.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),f.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),f.jsxs("div",{className:"space-y-4 pt-4",children:[f.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:f.jsx(pr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),f.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[f.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:f.jsx(pr,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),f.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),f.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[f.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:f.jsx(Ev,{className:"w-5 h-5"})}),f.jsxs("div",{children:[f.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),f.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),f.jsx("div",{className:"lg:col-span-7",children:f.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[f.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),f.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?f.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[f.jsx(Xr,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),f.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):f.jsxs("form",{onSubmit:o,className:"space-y-4",children:[f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),f.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),f.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),f.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),f.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[f.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),f.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),f.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),f.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),f.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),f.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[f.jsx(Dv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),f.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),f.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:f.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),f.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),f.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[f.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),f.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),f.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),f.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),f.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),f.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Tw=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[u,d]=Be.useState(!1),[p,m]=Be.useState(!1);if(!s)return null;const x=t.reduce((S,T)=>S+T.product.priceBRL*T.quantity,0),v=()=>{let S=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;S+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,R)=>{S+=`${R+1}. *${T.product.name}*
`,S+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,S+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),S+=`💰 *TOTAL DO PEDIDO:* R$ ${x.toLocaleString("pt-BR")},00

`,S+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(S)}`,"_blank")},y=S=>{m(!0),setTimeout(()=>{l(),m(!1),d(!1),e(),alert(`Pedido registrado com sucesso via ${S}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return f.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[f.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),f.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:f.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[f.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(Sm,{className:"w-5 h-5 text-[#d4af37]"}),f.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),f.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:f.jsx(wd,{className:"w-5 h-5"})})]}),f.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?f.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[f.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:f.jsx(Sm,{className:"w-8 h-8"})}),f.jsxs("div",{children:[f.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),f.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),f.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(S=>f.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[f.jsx("img",{src:S.product.image,alt:S.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:S.product.name}),f.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",S.product.sku]}),f.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",S.product.priceBRL.toLocaleString("pt-BR"),",00"]}),f.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[f.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[f.jsx("button",{onClick:()=>r(S.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:f.jsx(Av,{className:"w-3 h-3"})}),f.jsx("span",{className:"px-2 text-xs font-bold text-white",children:S.quantity}),f.jsx("button",{onClick:()=>r(S.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:f.jsx(oo,{className:"w-3 h-3"})})]}),f.jsxs("button",{onClick:()=>o(S.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[f.jsx(D0,{className:"w-3 h-3"}),f.jsx("span",{children:"Remover"})]})]})]})]},S.product.id))}),t.length>0&&f.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[f.jsxs("div",{className:"space-y-1.5",children:[f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Subtotal:"}),f.jsxs("span",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]}),f.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[f.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),f.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),f.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[f.jsx("span",{children:"Total Estimado:"}),f.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",x.toLocaleString("pt-BR"),",00"]})]})]}),f.jsxs("div",{className:"space-y-2",children:[f.jsxs("button",{onClick:v,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[f.jsx(pr,{className:"w-4 h-4"}),f.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),f.jsxs("button",{onClick:()=>d(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[f.jsx(ym,{className:"w-4 h-4 fill-black"}),f.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),f.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[f.jsx(Ql,{className:"w-3.5 h-3.5 text-emerald-400"}),f.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),u&&f.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[f.jsxs("div",{children:[f.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[f.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),f.jsx("button",{onClick:()=>d(!1),className:"p-1 text-gray-400 hover:text-white",children:f.jsx(wd,{className:"w-5 h-5"})})]}),p?f.jsxs("div",{className:"text-center py-12 space-y-4",children:[f.jsx(ic,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),f.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),f.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):f.jsxs("div",{className:"space-y-4",children:[f.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",f.jsxs("strong",{children:["R$ ",x.toLocaleString("pt-BR"),",00"]}),":"]}),f.jsxs("button",{onClick:()=>y("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(Rv,{className:"w-6 h-6 text-emerald-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),f.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(ym,{className:"w-6 h-6 text-blue-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),f.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]}),f.jsxs("button",{onClick:()=>y("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx(Ql,{className:"w-6 h-6 text-amber-400"}),f.jsxs("div",{children:[f.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),f.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),f.jsx(Gl,{className:"w-4 h-4 text-gray-400"})]})]})]}),f.jsx("button",{onClick:()=>d(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Aw=()=>f.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[f.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),f.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[f.jsx(Tv,{className:"w-7 h-7 fill-white/10"}),f.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[f.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),f.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Cw(){const[s,e]=Be.useState([]),[t,r]=Be.useState(!1),o=m=>{e(x=>x.find(y=>y.product.id===m.id)?x.map(y=>y.product.id===m.id?{...y,quantity:y.quantity+1}:y):[...x,{product:m,quantity:1}]),r(!0)},l=(m,x)=>{e(v=>v.map(y=>{if(y.product.id===m){const S=y.quantity+x;return S>0?{...y,quantity:S}:null}return y}).filter(Boolean))},u=m=>{e(x=>x.filter(v=>v.product.id!==m))},d=()=>{e([])},p=s.reduce((m,x)=>m+x.quantity,0);return f.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[f.jsx(Bv,{cartCount:p,onOpenCart:()=>r(!0)}),f.jsxs("main",{className:"flex-1",children:[f.jsx(gw,{}),f.jsx(xw,{}),f.jsx(vw,{}),f.jsx(_w,{}),f.jsx(yw,{onAddToCart:o}),f.jsx(Mw,{onAddToCart:o}),f.jsx(Ew,{}),f.jsx(ww,{})]}),f.jsx(bw,{}),f.jsx(Tw,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:u,onClearCart:d}),f.jsx(Aw,{})]})}ov.createRoot(document.getElementById("root")).render(f.jsx(ev.StrictMode,{children:f.jsx(Cw,{})}));
