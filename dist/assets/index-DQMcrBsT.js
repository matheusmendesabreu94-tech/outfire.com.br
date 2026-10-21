(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function T0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Ja={},Bu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Zx(){if(cm)return Rt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function S(k){return k===null||typeof k!="object"?null:(k=_&&k[_]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(k,se,Ce){this.props=k,this.context=se,this.refs=C,this.updater=Ce||M}y.prototype.isReactComponent={},y.prototype.setState=function(k,se){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,se,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function x(){}x.prototype=y.prototype;function A(k,se,Ce){this.props=k,this.context=se,this.refs=C,this.updater=Ce||M}var L=A.prototype=new x;L.constructor=A,T(L,y.prototype),L.isPureReactComponent=!0;var P=Array.isArray,U=Object.prototype.hasOwnProperty,D={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function z(k,se,Ce){var He,Ze={},ie=null,me=null;if(se!=null)for(He in se.ref!==void 0&&(me=se.ref),se.key!==void 0&&(ie=""+se.key),se)U.call(se,He)&&!O.hasOwnProperty(He)&&(Ze[He]=se[He]);var _e=arguments.length-2;if(_e===1)Ze.children=Ce;else if(1<_e){for(var Ne=Array(_e),V=0;V<_e;V++)Ne[V]=arguments[V+2];Ze.children=Ne}if(k&&k.defaultProps)for(He in _e=k.defaultProps,_e)Ze[He]===void 0&&(Ze[He]=_e[He]);return{$$typeof:s,type:k,key:ie,ref:me,props:Ze,_owner:D.current}}function w(k,se){return{$$typeof:s,type:k.type,key:se,ref:k.ref,props:k.props,_owner:k._owner}}function N(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var se={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ce){return se[Ce]})}var Y=/\/+/g;function K(k,se){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):se.toString(36)}function ae(k,se,Ce,He,Ze){var ie=typeof k;(ie==="undefined"||ie==="boolean")&&(k=null);var me=!1;if(k===null)me=!0;else switch(ie){case"string":case"number":me=!0;break;case"object":switch(k.$$typeof){case s:case e:me=!0}}if(me)return me=k,Ze=Ze(me),k=He===""?"."+K(me,0):He,P(Ze)?(Ce="",k!=null&&(Ce=k.replace(Y,"$&/")+"/"),ae(Ze,se,Ce,"",function(V){return V})):Ze!=null&&(N(Ze)&&(Ze=w(Ze,Ce+(!Ze.key||me&&me.key===Ze.key?"":(""+Ze.key).replace(Y,"$&/")+"/")+k)),se.push(Ze)),1;if(me=0,He=He===""?".":He+":",P(k))for(var _e=0;_e<k.length;_e++){ie=k[_e];var Ne=He+K(ie,_e);me+=ae(ie,se,Ce,Ne,Ze)}else if(Ne=S(k),typeof Ne=="function")for(k=Ne.call(k),_e=0;!(ie=k.next()).done;)ie=ie.value,Ne=He+K(ie,_e++),me+=ae(ie,se,Ce,Ne,Ze);else if(ie==="object")throw se=String(k),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return me}function le(k,se,Ce){if(k==null)return k;var He=[],Ze=0;return ae(k,He,"","",function(ie){return se.call(Ce,ie,Ze++)}),He}function ne(k){if(k._status===-1){var se=k._result;se=se(),se.then(function(Ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ce)},function(Ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ce)}),k._status===-1&&(k._status=0,k._result=se)}if(k._status===1)return k._result.default;throw k._result}var Z={current:null},W={transition:null},he={ReactCurrentDispatcher:Z,ReactCurrentBatchConfig:W,ReactCurrentOwner:D};function oe(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:le,forEach:function(k,se,Ce){le(k,function(){se.apply(this,arguments)},Ce)},count:function(k){var se=0;return le(k,function(){se++}),se},toArray:function(k){return le(k,function(se){return se})||[]},only:function(k){if(!N(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=A,Rt.StrictMode=r,Rt.Suspense=p,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=he,Rt.act=oe,Rt.cloneElement=function(k,se,Ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var He=T({},k.props),Ze=k.key,ie=k.ref,me=k._owner;if(se!=null){if(se.ref!==void 0&&(ie=se.ref,me=D.current),se.key!==void 0&&(Ze=""+se.key),k.type&&k.type.defaultProps)var _e=k.type.defaultProps;for(Ne in se)U.call(se,Ne)&&!O.hasOwnProperty(Ne)&&(He[Ne]=se[Ne]===void 0&&_e!==void 0?_e[Ne]:se[Ne])}var Ne=arguments.length-2;if(Ne===1)He.children=Ce;else if(1<Ne){_e=Array(Ne);for(var V=0;V<Ne;V++)_e[V]=arguments[V+2];He.children=_e}return{$$typeof:s,type:k.type,key:Ze,ref:ie,props:He,_owner:me}},Rt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},Rt.createElement=z,Rt.createFactory=function(k){var se=z.bind(null,k);return se.type=k,se},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(k){return{$$typeof:f,render:k}},Rt.isValidElement=N,Rt.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:ne}},Rt.memo=function(k,se){return{$$typeof:m,type:k,compare:se===void 0?null:se}},Rt.startTransition=function(k){var se=W.transition;W.transition={};try{k()}finally{W.transition=se}},Rt.unstable_act=oe,Rt.useCallback=function(k,se){return Z.current.useCallback(k,se)},Rt.useContext=function(k){return Z.current.useContext(k)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(k){return Z.current.useDeferredValue(k)},Rt.useEffect=function(k,se){return Z.current.useEffect(k,se)},Rt.useId=function(){return Z.current.useId()},Rt.useImperativeHandle=function(k,se,Ce){return Z.current.useImperativeHandle(k,se,Ce)},Rt.useInsertionEffect=function(k,se){return Z.current.useInsertionEffect(k,se)},Rt.useLayoutEffect=function(k,se){return Z.current.useLayoutEffect(k,se)},Rt.useMemo=function(k,se){return Z.current.useMemo(k,se)},Rt.useReducer=function(k,se,Ce){return Z.current.useReducer(k,se,Ce)},Rt.useRef=function(k){return Z.current.useRef(k)},Rt.useState=function(k){return Z.current.useState(k)},Rt.useSyncExternalStore=function(k,se,Ce){return Z.current.useSyncExternalStore(k,se,Ce)},Rt.useTransition=function(){return Z.current.useTransition()},Rt.version="18.3.1",Rt}var um;function Sf(){return um||(um=1,Bu.exports=Zx()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function Qx(){if(dm)return Ja;dm=1;var s=Sf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,_={},S=null,M=null;m!==void 0&&(S=""+m),p.key!==void 0&&(S=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:f,key:S,ref:M,props:_,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=d,Ja.jsxs=d,Ja}var fm;function Jx(){return fm||(fm=1,ku.exports=Qx()),ku.exports}var u=Jx(),ke=Sf();const ev=T0(ke);var Ml={},zu={exports:{}},Zn={},ju={exports:{}},Vu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function tv(){return hm||(hm=1,(function(s){function e(W,he){var oe=W.length;W.push(he);e:for(;0<oe;){var k=oe-1>>>1,se=W[k];if(0<o(se,he))W[k]=he,W[oe]=se,oe=k;else break e}}function t(W){return W.length===0?null:W[0]}function r(W){if(W.length===0)return null;var he=W[0],oe=W.pop();if(oe!==he){W[0]=oe;e:for(var k=0,se=W.length,Ce=se>>>1;k<Ce;){var He=2*(k+1)-1,Ze=W[He],ie=He+1,me=W[ie];if(0>o(Ze,oe))ie<se&&0>o(me,Ze)?(W[k]=me,W[ie]=oe,k=ie):(W[k]=Ze,W[He]=oe,k=He);else if(ie<se&&0>o(me,oe))W[k]=me,W[ie]=oe,k=ie;else break e}}return he}function o(W,he){var oe=W.sortIndex-he.sortIndex;return oe!==0?oe:W.id-he.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,_=null,S=3,M=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(W){for(var he=t(m);he!==null;){if(he.callback===null)r(m);else if(he.startTime<=W)r(m),he.sortIndex=he.expirationTime,e(p,he);else break;he=t(m)}}function P(W){if(C=!1,L(W),!T)if(t(p)!==null)T=!0,ne(U);else{var he=t(m);he!==null&&Z(P,he.startTime-W)}}function U(W,he){T=!1,C&&(C=!1,x(z),z=-1),M=!0;var oe=S;try{for(L(he),_=t(p);_!==null&&(!(_.expirationTime>he)||W&&!B());){var k=_.callback;if(typeof k=="function"){_.callback=null,S=_.priorityLevel;var se=k(_.expirationTime<=he);he=s.unstable_now(),typeof se=="function"?_.callback=se:_===t(p)&&r(p),L(he)}else r(p);_=t(p)}if(_!==null)var Ce=!0;else{var He=t(m);He!==null&&Z(P,He.startTime-he),Ce=!1}return Ce}finally{_=null,S=oe,M=!1}}var D=!1,O=null,z=-1,w=5,N=-1;function B(){return!(s.unstable_now()-N<w)}function Y(){if(O!==null){var W=s.unstable_now();N=W;var he=!0;try{he=O(!0,W)}finally{he?K():(D=!1,O=null)}}else D=!1}var K;if(typeof A=="function")K=function(){A(Y)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,le=ae.port2;ae.port1.onmessage=Y,K=function(){le.postMessage(null)}}else K=function(){y(Y,0)};function ne(W){O=W,D||(D=!0,K())}function Z(W,he){z=y(function(){W(s.unstable_now())},he)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(W){W.callback=null},s.unstable_continueExecution=function(){T||M||(T=!0,ne(U))},s.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<W?Math.floor(1e3/W):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(W){switch(S){case 1:case 2:case 3:var he=3;break;default:he=S}var oe=S;S=he;try{return W()}finally{S=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(W,he){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var oe=S;S=W;try{return he()}finally{S=oe}},s.unstable_scheduleCallback=function(W,he,oe){var k=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,W){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=oe+se,W={id:v++,callback:he,priorityLevel:W,startTime:oe,expirationTime:se,sortIndex:-1},oe>k?(W.sortIndex=oe,e(m,W),t(p)===null&&W===t(m)&&(C?(x(z),z=-1):C=!0,Z(P,oe-k))):(W.sortIndex=se,e(p,W),T||M||(T=!0,ne(U))),W},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(W){var he=S;return function(){var oe=S;S=he;try{return W.apply(this,arguments)}finally{S=oe}}}})(Vu)),Vu}var pm;function nv(){return pm||(pm=1,ju.exports=tv()),ju.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function iv(){if(mm)return Zn;mm=1;var s=Sf(),e=nv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function S(n){return p.call(_,n)?!0:p.call(v,n)?!1:m.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,h,g,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function A(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,A);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,A);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,A);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var h=y.hasOwnProperty(i)?y[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,h,c)&&(a=null),c||h===null?S(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),D=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),N=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),le=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),Z=Symbol.for("react.offscreen"),W=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,k;function se(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Ce=!1;function He(n,i){if(!n||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var c=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){c=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){c=ue}n()}}catch(ue){if(ue&&c&&typeof ue.stack=="string"){for(var h=ue.stack.split(`
`),g=c.stack.split(`
`),b=h.length-1,F=g.length-1;1<=b&&0<=F&&h[b]!==g[F];)F--;for(;1<=b&&0<=F;b--,F--)if(h[b]!==g[F]){if(b!==1||F!==1)do if(b--,F--,0>F||h[b]!==g[F]){var G=`
`+h[b].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=b&&0<=F);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function Ze(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case D:return"Portal";case w:return"Profiler";case z:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case N:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case le:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function _e(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function V(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,g=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){c=""+b,g.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=V(n))}function Nt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Dt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=_e(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function jt(n,i){nt(n,i);var a=_e(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Gt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Gt(n,i.type,_e(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function j(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Gt(n,i,a){(i!=="number"||Be(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var xt=Array.isArray;function Ct(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+_e(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ye(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function I(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(xt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:_e(a)}}function E(n,i){var a=_e(i.value),c=_e(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function X(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function pe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?pe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,$e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ae(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},st=["Webkit","ms","Moz","O"];Object.keys(Ve).forEach(function(n){st.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ve[i]=Ve[n]})});function ye(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ve.hasOwnProperty(n)&&Ve[n]?(""+i).trim():i+"px"}function De(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=ye(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ge=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oe(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function H(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ie=null,Ee=null,be=null;function xe(n){if(n=ka(n)){if(typeof Ie!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Fo(i),Ie(n.stateNode,n.type,i))}}function fe(n){Ee?be?be.push(n):be=[n]:Ee=n}function Te(){if(Ee){var n=Ee,i=be;if(be=Ee=null,xe(n),i)for(n=0;n<i.length;n++)xe(i[n])}}function at(n,i){return n(i)}function yt(){}var Tt=!1;function Bn(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return at(n,i,a)}finally{Tt=!1,(Ee!==null||be!==null)&&(yt(),Te())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=Fo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Ki=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){Ki=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{Ki=!1}function vr(n,i,a,c,h,g,b,F,G){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(Me){this.onError(Me)}}var Pi=!1,Di=null,Li=!1,ti=null,Zi={onError:function(n){Pi=!0,Di=n}};function Qr(n,i,a,c,h,g,b,F,G){Pi=!1,Di=null,vr.apply(Zi,arguments)}function Jr(n,i,a,c,h,g,b,F,G){if(Qr.apply(this,arguments),Pi){if(Pi){var ue=Di;Pi=!1,Di=null}else throw Error(t(198));Li||(Li=!0,ti=ue)}}function zn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function _r(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function bn(n){if(zn(n)!==n)throw Error(t(188))}function es(n){var i=n.alternate;if(!i){if(i=zn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var g=h.alternate;if(g===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===a)return bn(h),n;if(g===c)return bn(h),i;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=g;else{for(var b=!1,F=h.child;F;){if(F===a){b=!0,a=h,c=g;break}if(F===c){b=!0,c=h,a=g;break}F=F.sibling}if(!b){for(F=g.child;F;){if(F===a){b=!0,a=g,c=h;break}if(F===c){b=!0,c=g,a=h;break}F=F.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function yr(n){return n=es(n),n!==null?Sr(n):null}function Sr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Sr(n);if(i!==null)return i;n=n.sibling}return null}var Ii=e.unstable_scheduleCallback,ci=e.unstable_cancelCallback,ya=e.unstable_shouldYield,Sa=e.unstable_requestPaint,Yt=e.unstable_now,R=e.unstable_getCurrentPriorityLevel,$=e.unstable_ImmediatePriority,de=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,J=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,je=null,Le=null;function qe(n){if(Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(je,n,void 0,(n.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:vt,lt=Math.log,it=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(lt(n)/it|0)|0}var Et=64,Ht=4194304;function Vt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,g=n.pingedLanes,b=a&268435455;if(b!==0){var F=b&~h;F!==0?c=Vt(F):(g&=b,g!==0&&(c=Vt(g)))}else b=a&~h,b!==0?c=Vt(b):g!==0&&(c=Vt(g));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-We(i),h=1<<a,c|=n[a],i&=~h;return c}function rt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var b=31-We(g),F=1<<b,G=h[b];G===-1?((F&a)===0||(F&c)!==0)&&(h[b]=rt(F,i)):G<=i&&(n.expiredLanes|=F),g&=~F}}function At(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function pt(){var n=Et;return Et<<=1,(Et&4194240)===0&&(Et=64),n}function ot(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Ut(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-We(i),n[i]=a}function un(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-We(a),g=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~g}}function St(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-We(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var Se=0;function Ot(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var an,xn,Ts,Ui,Wf,cc=!1,Mo=[],Mr=null,Er=null,br=null,Ma=new Map,Ea=new Map,wr=[],_g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ma.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(i.pointerId)}}function ba(n,i,a,c,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&xn(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function yg(n,i,a,c,h){switch(i){case"focusin":return Mr=ba(Mr,n,i,a,c,h),!0;case"dragenter":return Er=ba(Er,n,i,a,c,h),!0;case"mouseover":return br=ba(br,n,i,a,c,h),!0;case"pointerover":var g=h.pointerId;return Ma.set(g,ba(Ma.get(g)||null,n,i,a,c,h)),!0;case"gotpointercapture":return g=h.pointerId,Ea.set(g,ba(Ea.get(g)||null,n,i,a,c,h)),!0}return!1}function qf(n){var i=ts(n.target);if(i!==null){var a=zn(i);if(a!==null){if(i=a.tag,i===13){if(i=_r(a),i!==null){n.blockedOn=i,Wf(n.priority,function(){Ts(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Eo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);ht=c,a.target.dispatchEvent(c),ht=null}else return i=ka(a),i!==null&&xn(i),n.blockedOn=a,!1;i.shift()}return!0}function Yf(n,i,a){Eo(n)&&a.delete(i)}function Sg(){cc=!1,Mr!==null&&Eo(Mr)&&(Mr=null),Er!==null&&Eo(Er)&&(Er=null),br!==null&&Eo(br)&&(br=null),Ma.forEach(Yf),Ea.forEach(Yf)}function wa(n,i){n.blockedOn===i&&(n.blockedOn=null,cc||(cc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Sg)))}function Ta(n){function i(h){return wa(h,n)}if(0<Mo.length){wa(Mo[0],n);for(var a=1;a<Mo.length;a++){var c=Mo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Mr!==null&&wa(Mr,n),Er!==null&&wa(Er,n),br!==null&&wa(br,n),Ma.forEach(i),Ea.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&wr.shift()}var As=P.ReactCurrentBatchConfig,bo=!0;function Mg(n,i,a,c){var h=Se,g=As.transition;As.transition=null;try{Se=1,uc(n,i,a,c)}finally{Se=h,As.transition=g}}function Eg(n,i,a,c){var h=Se,g=As.transition;As.transition=null;try{Se=4,uc(n,i,a,c)}finally{Se=h,As.transition=g}}function uc(n,i,a,c){if(bo){var h=dc(n,i,a,c);if(h===null)Cc(n,i,c,wo,a),Xf(n,c);else if(yg(h,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<_g.indexOf(n)){for(;h!==null;){var g=ka(h);if(g!==null&&an(g),g=dc(n,i,a,c),g===null&&Cc(n,i,c,wo,a),g===h)break;h=g}h!==null&&c.stopPropagation()}else Cc(n,i,c,null,a)}}var wo=null;function dc(n,i,a,c){if(wo=null,n=H(c),n=ts(n),n!==null)if(i=zn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=_r(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wo=n,null}function $f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(R()){case $:return 1;case de:return 4;case re:case J:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var Tr=null,fc=null,To=null;function Kf(){if(To)return To;var n,i=fc,a=i.length,c,h="value"in Tr?Tr.value:Tr.textContent,g=h.length;for(n=0;n<a&&i[n]===h[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===h[g-c];c++);return To=h.slice(n,1<c?1-c:void 0)}function Ao(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Co(){return!0}function Zf(){return!1}function ni(n){function i(a,c,h,g,b){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=g,this.target=b,this.currentTarget=null;for(var F in n)n.hasOwnProperty(F)&&(a=n[F],this[F]=a?a(g):g[F]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Co:Zf,this.isPropagationStopped=Zf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Co)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Co)},persist:function(){},isPersistent:Co}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=ni(Cs),Aa=oe({},Cs,{view:0,detail:0}),bg=ni(Aa),pc,mc,Ca,Ro=oe({},Aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ca&&(Ca&&n.type==="mousemove"?(pc=n.screenX-Ca.screenX,mc=n.screenY-Ca.screenY):mc=pc=0,Ca=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),Qf=ni(Ro),wg=oe({},Ro,{dataTransfer:0}),Tg=ni(wg),Ag=oe({},Aa,{relatedTarget:0}),gc=ni(Ag),Cg=oe({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Rg=ni(Cg),Ng=oe({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pg=ni(Ng),Dg=oe({},Cs,{data:0}),Jf=ni(Dg),Lg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ig={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Ug[n])?!!i[n]:!1}function xc(){return Og}var Fg=oe({},Aa,{key:function(n){if(n.key){var i=Lg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ao(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ig[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?Ao(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ao(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kg=ni(Fg),Bg=oe({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=ni(Bg),zg=oe({},Aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),jg=ni(zg),Vg=oe({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gg=ni(Vg),Hg=oe({},Ro,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wg=ni(Hg),Xg=[9,13,27,32],vc=f&&"CompositionEvent"in window,Ra=null;f&&"documentMode"in document&&(Ra=document.documentMode);var qg=f&&"TextEvent"in window&&!Ra,th=f&&(!vc||Ra&&8<Ra&&11>=Ra),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return Xg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Rs=!1;function Yg(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function $g(n,i){if(Rs)return n==="compositionend"||!vc&&rh(n,i)?(n=Kf(),To=fc=Tr=null,Rs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var Kg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Kg[n.type]:i==="textarea"}function oh(n,i,a,c){fe(c),i=Io(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Na=null,Pa=null;function Zg(n){wh(n,0)}function No(n){var i=Is(n);if(Nt(i))return n}function Qg(n,i){if(n==="change")return i}var lh=!1;if(f){var _c;if(f){var yc="oninput"in document;if(!yc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),yc=typeof ch.oninput=="function"}_c=yc}else _c=!1;lh=_c&&(!document.documentMode||9<document.documentMode)}function uh(){Na&&(Na.detachEvent("onpropertychange",dh),Pa=Na=null)}function dh(n){if(n.propertyName==="value"&&No(Pa)){var i=[];oh(i,Pa,n,H(n)),Bn(Zg,i)}}function Jg(n,i,a){n==="focusin"?(uh(),Na=i,Pa=a,Na.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function ex(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Pa)}function tx(n,i){if(n==="click")return No(i)}function nx(n,i){if(n==="input"||n==="change")return No(i)}function ix(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:ix;function Da(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!p.call(i,h)||!vi(n[h],i[h]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=Be();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Be(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function rx(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,g=Math.min(c.start,h);c=c.end===void 0?g:Math.min(c.end,h),!n.extend&&g>c&&(h=c,c=g,g=h),h=hh(a,g);var b=hh(a,c);h&&b&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var sx=f&&"documentMode"in document&&11>=document.documentMode,Ns=null,Mc=null,La=null,Ec=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ns==null||Ns!==Be(c)||(c=Ns,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),La&&Da(La,c)||(La=c,c=Io(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ns)))}function Po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Ps={animationend:Po("Animation","AnimationEnd"),animationiteration:Po("Animation","AnimationIteration"),animationstart:Po("Animation","AnimationStart"),transitionend:Po("Transition","TransitionEnd")},bc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Do(n){if(bc[n])return bc[n];if(!Ps[n])return n;var i=Ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return bc[n]=i[a];return n}var vh=Do("animationend"),_h=Do("animationiteration"),yh=Do("animationstart"),Sh=Do("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,i){Mh.set(n,i),l(i,[n])}for(var wc=0;wc<Eh.length;wc++){var Tc=Eh[wc],ax=Tc.toLowerCase(),ox=Tc[0].toUpperCase()+Tc.slice(1);Ar(ax,"on"+ox)}Ar(vh,"onAnimationEnd"),Ar(_h,"onAnimationIteration"),Ar(yh,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Sh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function bh(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Jr(c,i,void 0,n),n.currentTarget=null}function wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var g=void 0;if(i)for(var b=c.length-1;0<=b;b--){var F=c[b],G=F.instance,ue=F.currentTarget;if(F=F.listener,G!==g&&h.isPropagationStopped())break e;bh(h,F,ue),g=G}else for(b=0;b<c.length;b++){if(F=c[b],G=F.instance,ue=F.currentTarget,F=F.listener,G!==g&&h.isPropagationStopped())break e;bh(h,F,ue),g=G}}}if(Li)throw n=ti,Li=!1,ti=null,n}function Zt(n,i){var a=i[Ic];a===void 0&&(a=i[Ic]=new Set);var c=n+"__bubble";a.has(c)||(Th(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),Th(a,n,c,i)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ua(n){if(!n[Lo]){n[Lo]=!0,r.forEach(function(a){a!=="selectionchange"&&(lx.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Lo]||(i[Lo]=!0,Ac("selectionchange",!1,i))}}function Th(n,i,a,c){switch($f(i)){case 1:var h=Mg;break;case 4:h=Eg;break;default:h=uc}a=h.bind(null,i,a,n),h=void 0,!Ki||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function Cc(n,i,a,c,h){var g=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var F=c.stateNode.containerInfo;if(F===h||F.nodeType===8&&F.parentNode===h)break;if(b===4)for(b=c.return;b!==null;){var G=b.tag;if((G===3||G===4)&&(G=b.stateNode.containerInfo,G===h||G.nodeType===8&&G.parentNode===h))return;b=b.return}for(;F!==null;){if(b=ts(F),b===null)return;if(G=b.tag,G===5||G===6){c=g=b;continue e}F=F.parentNode}}c=c.return}Bn(function(){var ue=g,Me=H(a),we=[];e:{var ve=Mh.get(n);if(ve!==void 0){var Xe=hc,Qe=n;switch(n){case"keypress":if(Ao(a)===0)break e;case"keydown":case"keyup":Xe=kg;break;case"focusin":Qe="focus",Xe=gc;break;case"focusout":Qe="blur",Xe=gc;break;case"beforeblur":case"afterblur":Xe=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=Tg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=jg;break;case vh:case _h:case yh:Xe=Rg;break;case Sh:Xe=Gg;break;case"scroll":Xe=bg;break;case"wheel":Xe=Wg;break;case"copy":case"cut":case"paste":Xe=Pg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=eh}var Je=(i&4)!==0,on=!Je&&n==="scroll",ee=Je?ve!==null?ve+"Capture":null:ve;Je=[];for(var q=ue,te;q!==null;){te=q;var Re=te.stateNode;if(te.tag===5&&Re!==null&&(te=Re,ee!==null&&(Re=gn(q,ee),Re!=null&&Je.push(Oa(q,Re,te)))),on)break;q=q.return}0<Je.length&&(ve=new Xe(ve,Qe,null,a,Me),we.push({event:ve,listeners:Je}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",ve&&a!==ht&&(Qe=a.relatedTarget||a.fromElement)&&(ts(Qe)||Qe[Qi]))break e;if((Xe||ve)&&(ve=Me.window===Me?Me:(ve=Me.ownerDocument)?ve.defaultView||ve.parentWindow:window,Xe?(Qe=a.relatedTarget||a.toElement,Xe=ue,Qe=Qe?ts(Qe):null,Qe!==null&&(on=zn(Qe),Qe!==on||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(Xe=null,Qe=ue),Xe!==Qe)){if(Je=Qf,Re="onMouseLeave",ee="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(Je=eh,Re="onPointerLeave",ee="onPointerEnter",q="pointer"),on=Xe==null?ve:Is(Xe),te=Qe==null?ve:Is(Qe),ve=new Je(Re,q+"leave",Xe,a,Me),ve.target=on,ve.relatedTarget=te,Re=null,ts(Me)===ue&&(Je=new Je(ee,q+"enter",Qe,a,Me),Je.target=te,Je.relatedTarget=on,Re=Je),on=Re,Xe&&Qe)t:{for(Je=Xe,ee=Qe,q=0,te=Je;te;te=Ds(te))q++;for(te=0,Re=ee;Re;Re=Ds(Re))te++;for(;0<q-te;)Je=Ds(Je),q--;for(;0<te-q;)ee=Ds(ee),te--;for(;q--;){if(Je===ee||ee!==null&&Je===ee.alternate)break t;Je=Ds(Je),ee=Ds(ee)}Je=null}else Je=null;Xe!==null&&Ah(we,ve,Xe,Je,!1),Qe!==null&&on!==null&&Ah(we,on,Qe,Je,!0)}}e:{if(ve=ue?Is(ue):window,Xe=ve.nodeName&&ve.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&ve.type==="file")var tt=Qg;else if(ah(ve))if(lh)tt=nx;else{tt=ex;var ct=Jg}else(Xe=ve.nodeName)&&Xe.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(tt=tx);if(tt&&(tt=tt(n,ue))){oh(we,tt,a,Me);break e}ct&&ct(n,ve,ue),n==="focusout"&&(ct=ve._wrapperState)&&ct.controlled&&ve.type==="number"&&Gt(ve,"number",ve.value)}switch(ct=ue?Is(ue):window,n){case"focusin":(ah(ct)||ct.contentEditable==="true")&&(Ns=ct,Mc=ue,La=null);break;case"focusout":La=Mc=Ns=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,gh(we,a,Me);break;case"selectionchange":if(sx)break;case"keydown":case"keyup":gh(we,a,Me)}var ut;if(vc)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Rs?rh(n,a)&&(gt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(gt="onCompositionStart");gt&&(th&&a.locale!=="ko"&&(Rs||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Rs&&(ut=Kf()):(Tr=Me,fc="value"in Tr?Tr.value:Tr.textContent,Rs=!0)),ct=Io(ue,gt),0<ct.length&&(gt=new Jf(gt,n,null,a,Me),we.push({event:gt,listeners:ct}),ut?gt.data=ut:(ut=sh(a),ut!==null&&(gt.data=ut)))),(ut=qg?Yg(n,a):$g(n,a))&&(ue=Io(ue,"onBeforeInput"),0<ue.length&&(Me=new Jf("onBeforeInput","beforeinput",null,a,Me),we.push({event:Me,listeners:ue}),Me.data=ut))}wh(we,i)})}function Oa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Io(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=gn(n,a),g!=null&&c.unshift(Oa(n,g,h)),g=gn(n,i),g!=null&&c.push(Oa(n,g,h))),n=n.return}return c}function Ds(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,h){for(var g=i._reactName,b=[];a!==null&&a!==c;){var F=a,G=F.alternate,ue=F.stateNode;if(G!==null&&G===c)break;F.tag===5&&ue!==null&&(F=ue,h?(G=gn(a,g),G!=null&&b.unshift(Oa(a,G,F))):h||(G=gn(a,g),G!=null&&b.push(Oa(a,G,F)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var cx=/\r\n?/g,ux=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(cx,`
`).replace(ux,"")}function Uo(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Oo(){}var Rc=null,Nc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dc=typeof setTimeout=="function"?setTimeout:void 0,dx=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,fx=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(hx)}:Dc;function hx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),Ta(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);Ta(i)}function Cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ls=Math.random().toString(36).slice(2),Oi="__reactFiber$"+Ls,Fa="__reactProps$"+Ls,Qi="__reactContainer$"+Ls,Ic="__reactEvents$"+Ls,px="__reactListeners$"+Ls,mx="__reactHandles$"+Ls;function ts(n){var i=n[Oi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Oi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Oi])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function ka(n){return n=n[Oi]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Fo(n){return n[Fa]||null}var Uc=[],Us=-1;function Rr(n){return{current:n}}function Qt(n){0>Us||(n.current=Uc[Us],Uc[Us]=null,Us--)}function Kt(n,i){Us++,Uc[Us]=n.current,n.current=i}var Nr={},Rn=Rr(Nr),Xn=Rr(!1),ns=Nr;function Os(n,i){var a=n.type.contextTypes;if(!a)return Nr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in a)h[g]=i[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function qn(n){return n=n.childContextTypes,n!=null}function ko(){Qt(Xn),Qt(Rn)}function Ph(n,i,a){if(Rn.current!==Nr)throw Error(t(168));Kt(Rn,i),Kt(Xn,a)}function Dh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,me(n)||"Unknown",h));return oe({},a,c)}function Bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,ns=Rn.current,Kt(Rn,n),Kt(Xn,Xn.current),!0}function Lh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Dh(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,Qt(Xn),Qt(Rn),Kt(Rn,n)):Qt(Xn),Kt(Xn,a)}var Ji=null,zo=!1,Oc=!1;function Ih(n){Ji===null?Ji=[n]:Ji.push(n)}function gx(n){zo=!0,Ih(n)}function Pr(){if(!Oc&&Ji!==null){Oc=!0;var n=0,i=Se;try{var a=Ji;for(Se=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ji=null,zo=!1}catch(h){throw Ji!==null&&(Ji=Ji.slice(n+1)),Ii($,Pr),h}finally{Se=i,Oc=!1}}return null}var Fs=[],ks=0,jo=null,Vo=0,ui=[],di=0,is=null,er=1,tr="";function rs(n,i){Fs[ks++]=Vo,Fs[ks++]=jo,jo=n,Vo=i}function Uh(n,i,a){ui[di++]=er,ui[di++]=tr,ui[di++]=is,is=n;var c=er;n=tr;var h=32-We(c)-1;c&=~(1<<h),a+=1;var g=32-We(i)+h;if(30<g){var b=h-h%5;g=(c&(1<<b)-1).toString(32),c>>=b,h-=b,er=1<<32-We(i)+h|a<<h|c,tr=g+n}else er=1<<g|a<<h|c,tr=n}function Fc(n){n.return!==null&&(rs(n,1),Uh(n,1,0))}function kc(n){for(;n===jo;)jo=Fs[--ks],Fs[ks]=null,Vo=Fs[--ks],Fs[ks]=null;for(;n===is;)is=ui[--di],ui[di]=null,tr=ui[--di],ui[di]=null,er=ui[--di],ui[di]=null}var ii=null,ri=null,Jt=!1,_i=null;function Oh(n,i){var a=mi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Fh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ii=n,ri=Cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ii=n,ri=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=mi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ii=n,ri=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(Jt){var i=ri;if(i){var a=i;if(!Fh(n,i)){if(Bc(n))throw Error(t(418));i=Cr(a.nextSibling);var c=ii;i&&Fh(n,i)?Oh(c,a):(n.flags=n.flags&-4097|2,Jt=!1,ii=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ii=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ii=n}function Go(n){if(n!==ii)return!1;if(!Jt)return kh(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=ri)){if(Bc(n))throw Bh(),Error(t(418));for(;i;)Oh(n,i),i=Cr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ri=Cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ri=null}}else ri=ii?Cr(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=ri;n;)n=Cr(n.nextSibling)}function Bs(){ri=ii=null,Jt=!1}function jc(n){_i===null?_i=[n]:_i.push(n)}var xx=P.ReactCurrentBatchConfig;function Ba(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(b){var F=h.refs;b===null?delete F[g]:F[g]=b},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ho(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function jh(n){function i(ee,q){if(n){var te=ee.deletions;te===null?(ee.deletions=[q],ee.flags|=16):te.push(q)}}function a(ee,q){if(!n)return null;for(;q!==null;)i(ee,q),q=q.sibling;return null}function c(ee,q){for(ee=new Map;q!==null;)q.key!==null?ee.set(q.key,q):ee.set(q.index,q),q=q.sibling;return ee}function h(ee,q){return ee=Br(ee,q),ee.index=0,ee.sibling=null,ee}function g(ee,q,te){return ee.index=te,n?(te=ee.alternate,te!==null?(te=te.index,te<q?(ee.flags|=2,q):te):(ee.flags|=2,q)):(ee.flags|=1048576,q)}function b(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function F(ee,q,te,Re){return q===null||q.tag!==6?(q=Du(te,ee.mode,Re),q.return=ee,q):(q=h(q,te),q.return=ee,q)}function G(ee,q,te,Re){var tt=te.type;return tt===O?Me(ee,q,te.props.children,Re,te.key):q!==null&&(q.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ne&&zh(tt)===q.type)?(Re=h(q,te.props),Re.ref=Ba(ee,q,te),Re.return=ee,Re):(Re=pl(te.type,te.key,te.props,null,ee.mode,Re),Re.ref=Ba(ee,q,te),Re.return=ee,Re)}function ue(ee,q,te,Re){return q===null||q.tag!==4||q.stateNode.containerInfo!==te.containerInfo||q.stateNode.implementation!==te.implementation?(q=Lu(te,ee.mode,Re),q.return=ee,q):(q=h(q,te.children||[]),q.return=ee,q)}function Me(ee,q,te,Re,tt){return q===null||q.tag!==7?(q=fs(te,ee.mode,Re,tt),q.return=ee,q):(q=h(q,te),q.return=ee,q)}function we(ee,q,te){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Du(""+q,ee.mode,te),q.return=ee,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case U:return te=pl(q.type,q.key,q.props,null,ee.mode,te),te.ref=Ba(ee,null,q),te.return=ee,te;case D:return q=Lu(q,ee.mode,te),q.return=ee,q;case ne:var Re=q._init;return we(ee,Re(q._payload),te)}if(xt(q)||he(q))return q=fs(q,ee.mode,te,null),q.return=ee,q;Ho(ee,q)}return null}function ve(ee,q,te,Re){var tt=q!==null?q.key:null;if(typeof te=="string"&&te!==""||typeof te=="number")return tt!==null?null:F(ee,q,""+te,Re);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case U:return te.key===tt?G(ee,q,te,Re):null;case D:return te.key===tt?ue(ee,q,te,Re):null;case ne:return tt=te._init,ve(ee,q,tt(te._payload),Re)}if(xt(te)||he(te))return tt!==null?null:Me(ee,q,te,Re,null);Ho(ee,te)}return null}function Xe(ee,q,te,Re,tt){if(typeof Re=="string"&&Re!==""||typeof Re=="number")return ee=ee.get(te)||null,F(q,ee,""+Re,tt);if(typeof Re=="object"&&Re!==null){switch(Re.$$typeof){case U:return ee=ee.get(Re.key===null?te:Re.key)||null,G(q,ee,Re,tt);case D:return ee=ee.get(Re.key===null?te:Re.key)||null,ue(q,ee,Re,tt);case ne:var ct=Re._init;return Xe(ee,q,te,ct(Re._payload),tt)}if(xt(Re)||he(Re))return ee=ee.get(te)||null,Me(q,ee,Re,tt,null);Ho(q,Re)}return null}function Qe(ee,q,te,Re){for(var tt=null,ct=null,ut=q,gt=q=0,yn=null;ut!==null&&gt<te.length;gt++){ut.index>gt?(yn=ut,ut=null):yn=ut.sibling;var zt=ve(ee,ut,te[gt],Re);if(zt===null){ut===null&&(ut=yn);break}n&&ut&&zt.alternate===null&&i(ee,ut),q=g(zt,q,gt),ct===null?tt=zt:ct.sibling=zt,ct=zt,ut=yn}if(gt===te.length)return a(ee,ut),Jt&&rs(ee,gt),tt;if(ut===null){for(;gt<te.length;gt++)ut=we(ee,te[gt],Re),ut!==null&&(q=g(ut,q,gt),ct===null?tt=ut:ct.sibling=ut,ct=ut);return Jt&&rs(ee,gt),tt}for(ut=c(ee,ut);gt<te.length;gt++)yn=Xe(ut,ee,gt,te[gt],Re),yn!==null&&(n&&yn.alternate!==null&&ut.delete(yn.key===null?gt:yn.key),q=g(yn,q,gt),ct===null?tt=yn:ct.sibling=yn,ct=yn);return n&&ut.forEach(function(zr){return i(ee,zr)}),Jt&&rs(ee,gt),tt}function Je(ee,q,te,Re){var tt=he(te);if(typeof tt!="function")throw Error(t(150));if(te=tt.call(te),te==null)throw Error(t(151));for(var ct=tt=null,ut=q,gt=q=0,yn=null,zt=te.next();ut!==null&&!zt.done;gt++,zt=te.next()){ut.index>gt?(yn=ut,ut=null):yn=ut.sibling;var zr=ve(ee,ut,zt.value,Re);if(zr===null){ut===null&&(ut=yn);break}n&&ut&&zr.alternate===null&&i(ee,ut),q=g(zr,q,gt),ct===null?tt=zr:ct.sibling=zr,ct=zr,ut=yn}if(zt.done)return a(ee,ut),Jt&&rs(ee,gt),tt;if(ut===null){for(;!zt.done;gt++,zt=te.next())zt=we(ee,zt.value,Re),zt!==null&&(q=g(zt,q,gt),ct===null?tt=zt:ct.sibling=zt,ct=zt);return Jt&&rs(ee,gt),tt}for(ut=c(ee,ut);!zt.done;gt++,zt=te.next())zt=Xe(ut,ee,gt,zt.value,Re),zt!==null&&(n&&zt.alternate!==null&&ut.delete(zt.key===null?gt:zt.key),q=g(zt,q,gt),ct===null?tt=zt:ct.sibling=zt,ct=zt);return n&&ut.forEach(function(Kx){return i(ee,Kx)}),Jt&&rs(ee,gt),tt}function on(ee,q,te,Re){if(typeof te=="object"&&te!==null&&te.type===O&&te.key===null&&(te=te.props.children),typeof te=="object"&&te!==null){switch(te.$$typeof){case U:e:{for(var tt=te.key,ct=q;ct!==null;){if(ct.key===tt){if(tt=te.type,tt===O){if(ct.tag===7){a(ee,ct.sibling),q=h(ct,te.props.children),q.return=ee,ee=q;break e}}else if(ct.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===ne&&zh(tt)===ct.type){a(ee,ct.sibling),q=h(ct,te.props),q.ref=Ba(ee,ct,te),q.return=ee,ee=q;break e}a(ee,ct);break}else i(ee,ct);ct=ct.sibling}te.type===O?(q=fs(te.props.children,ee.mode,Re,te.key),q.return=ee,ee=q):(Re=pl(te.type,te.key,te.props,null,ee.mode,Re),Re.ref=Ba(ee,q,te),Re.return=ee,ee=Re)}return b(ee);case D:e:{for(ct=te.key;q!==null;){if(q.key===ct)if(q.tag===4&&q.stateNode.containerInfo===te.containerInfo&&q.stateNode.implementation===te.implementation){a(ee,q.sibling),q=h(q,te.children||[]),q.return=ee,ee=q;break e}else{a(ee,q);break}else i(ee,q);q=q.sibling}q=Lu(te,ee.mode,Re),q.return=ee,ee=q}return b(ee);case ne:return ct=te._init,on(ee,q,ct(te._payload),Re)}if(xt(te))return Qe(ee,q,te,Re);if(he(te))return Je(ee,q,te,Re);Ho(ee,te)}return typeof te=="string"&&te!==""||typeof te=="number"?(te=""+te,q!==null&&q.tag===6?(a(ee,q.sibling),q=h(q,te),q.return=ee,ee=q):(a(ee,q),q=Du(te,ee.mode,Re),q.return=ee,ee=q),b(ee)):a(ee,q)}return on}var zs=jh(!0),Vh=jh(!1),Wo=Rr(null),Xo=null,js=null,Vc=null;function Gc(){Vc=js=Xo=null}function Hc(n){var i=Wo.current;Qt(Wo),n._currentValue=i}function Wc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Vs(n,i){Xo=n,Vc=js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function fi(n){var i=n._currentValue;if(Vc!==n)if(n={context:n,memoizedValue:i,next:null},js===null){if(Xo===null)throw Error(t(308));js=n,Xo.dependencies={lanes:0,firstContext:n}}else js=js.next=n;return i}var ss=null;function Xc(n){ss===null?ss=[n]:ss.push(n)}function Gh(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Xc(i)):(a.next=h.next,h.next=a),i.interleaved=a,nr(n,c)}function nr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Dr=!1;function qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ft&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,nr(n,a)}return h=c.interleaved,h===null?(i.next=i,Xc(c)):(i.next=h.next,h.next=i),c.interleaved=i,nr(n,a)}function qo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,St(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?h=g=b:g=g.next=b,a=a.next}while(a!==null);g===null?h=g=i:g=g.next=i}else h=g=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yo(n,i,a,c){var h=n.updateQueue;Dr=!1;var g=h.firstBaseUpdate,b=h.lastBaseUpdate,F=h.shared.pending;if(F!==null){h.shared.pending=null;var G=F,ue=G.next;G.next=null,b===null?g=ue:b.next=ue,b=G;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,F=Me.lastBaseUpdate,F!==b&&(F===null?Me.firstBaseUpdate=ue:F.next=ue,Me.lastBaseUpdate=G))}if(g!==null){var we=h.baseState;b=0,Me=ue=G=null,F=g;do{var ve=F.lane,Xe=F.eventTime;if((c&ve)===ve){Me!==null&&(Me=Me.next={eventTime:Xe,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Qe=n,Je=F;switch(ve=i,Xe=a,Je.tag){case 1:if(Qe=Je.payload,typeof Qe=="function"){we=Qe.call(Xe,we,ve);break e}we=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=Je.payload,ve=typeof Qe=="function"?Qe.call(Xe,we,ve):Qe,ve==null)break e;we=oe({},we,ve);break e;case 2:Dr=!0}}F.callback!==null&&F.lane!==0&&(n.flags|=64,ve=h.effects,ve===null?h.effects=[F]:ve.push(F))}else Xe={eventTime:Xe,lane:ve,tag:F.tag,payload:F.payload,callback:F.callback,next:null},Me===null?(ue=Me=Xe,G=we):Me=Me.next=Xe,b|=ve;if(F=F.next,F===null){if(F=h.shared.pending,F===null)break;ve=F,F=ve.next,ve.next=null,h.lastBaseUpdate=ve,h.shared.pending=null}}while(!0);if(Me===null&&(G=we),h.baseState=G,h.firstBaseUpdate=ue,h.lastBaseUpdate=Me,i=h.shared.interleaved,i!==null){h=i;do b|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);ls|=b,n.lanes=b,n.memoizedState=we}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var za={},Fi=Rr(za),ja=Rr(za),Va=Rr(za);function as(n){if(n===za)throw Error(t(174));return n}function Yc(n,i){switch(Kt(Va,i),Kt(ja,n),Kt(Fi,za),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}Qt(Fi),Kt(Fi,i)}function Gs(){Qt(Fi),Qt(ja),Qt(Va)}function qh(n){as(Va.current);var i=as(Fi.current),a=ge(i,n.type);i!==a&&(Kt(ja,n),Kt(Fi,a))}function $c(n){ja.current===n&&(Qt(Fi),Qt(ja))}var en=Rr(0);function $o(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Ko=P.ReactCurrentDispatcher,Qc=P.ReactCurrentBatchConfig,os=0,tn=null,dn=null,vn=null,Zo=!1,Ga=!1,Ha=0,vx=0;function Nn(){throw Error(t(321))}function Jc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!vi(n[a],i[a]))return!1;return!0}function eu(n,i,a,c,h,g){if(os=g,tn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ko.current=n===null||n.memoizedState===null?Mx:Ex,n=a(c,h),Ga){g=0;do{if(Ga=!1,Ha=0,25<=g)throw Error(t(301));g+=1,vn=dn=null,i.updateQueue=null,Ko.current=bx,n=a(c,h)}while(Ga)}if(Ko.current=el,i=dn!==null&&dn.next!==null,os=0,vn=dn=tn=null,Zo=!1,i)throw Error(t(300));return n}function tu(){var n=Ha!==0;return Ha=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?tn.memoizedState=vn=n:vn=vn.next=n,vn}function hi(){if(dn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var i=vn===null?tn.memoizedState:vn.next;if(i!==null)vn=i,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},vn===null?tn.memoizedState=vn=n:vn=vn.next=n}return vn}function Wa(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=dn,h=c.baseQueue,g=a.pending;if(g!==null){if(h!==null){var b=h.next;h.next=g.next,g.next=b}c.baseQueue=h=g,a.pending=null}if(h!==null){g=h.next,c=c.baseState;var F=b=null,G=null,ue=g;do{var Me=ue.lane;if((os&Me)===Me)G!==null&&(G=G.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),c=ue.hasEagerState?ue.eagerState:n(c,ue.action);else{var we={lane:Me,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};G===null?(F=G=we,b=c):G=G.next=we,tn.lanes|=Me,ls|=Me}ue=ue.next}while(ue!==null&&ue!==g);G===null?b=c:G.next=F,vi(c,i.memoizedState)||(Yn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=G,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do g=h.lane,tn.lanes|=g,ls|=g,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=hi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,g=i.memoizedState;if(h!==null){a.pending=null;var b=h=h.next;do g=n(g,b.action),b=b.next;while(b!==h);vi(g,i.memoizedState)||(Yn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),a.lastRenderedState=g}return[g,c]}function Yh(){}function $h(n,i){var a=tn,c=hi(),h=i(),g=!vi(c.memoizedState,h);if(g&&(c.memoizedState=h,Yn=!0),c=c.queue,ru(Qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||g||vn!==null&&vn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,Zh.bind(null,a,c,h,i),void 0,null),_n===null)throw Error(t(349));(os&30)!==0||Kh(a,i,h)}return h}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Jh(i)&&ep(n)}function Qh(n,i,a){return a(function(){Jh(i)&&ep(n)})}function Jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!vi(n,a)}catch{return!0}}function ep(n){var i=nr(n,1);i!==null&&Ei(i,n,1,-1)}function tp(n){var i=ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Sx.bind(null,tn,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=tn.updateQueue,i===null?(i={lastEffect:null,stores:null},tn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return hi().memoizedState}function Qo(n,i,a,c){var h=ki();tn.flags|=n,h.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function Jo(n,i,a,c){var h=hi();c=c===void 0?null:c;var g=void 0;if(dn!==null){var b=dn.memoizedState;if(g=b.destroy,c!==null&&Jc(c,b.deps)){h.memoizedState=Xa(i,a,g,c);return}}tn.flags|=n,h.memoizedState=Xa(1|i,a,g,c)}function ip(n,i){return Qo(8390656,8,n,i)}function ru(n,i){return Jo(2048,8,n,i)}function rp(n,i){return Jo(4,2,n,i)}function sp(n,i){return Jo(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4,4,ap.bind(null,i,n),a)}function su(){}function lp(n,i){var a=hi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=hi();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Jc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(vi(a,i)||(a=pt(),tn.lanes|=a,ls|=a,n.baseState=!0),i)}function _x(n,i){var a=Se;Se=a!==0&&4>a?a:4,n(!0);var c=Qc.transition;Qc.transition={};try{n(!1),i()}finally{Se=a,Qc.transition=c}}function dp(){return hi().memoizedState}function yx(n,i,a){var c=Fr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var h=Vn();Ei(a,n,c,h),pp(a,i,c)}}function Sx(n,i,a){var c=Fr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var b=i.lastRenderedState,F=g(b,a);if(h.hasEagerState=!0,h.eagerState=F,vi(F,b)){var G=i.interleaved;G===null?(h.next=h,Xc(i)):(h.next=G.next,G.next=h),i.interleaved=h;return}}catch{}finally{}a=Gh(n,i,h,c),a!==null&&(h=Vn(),Ei(a,n,c,h),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===tn||i!==null&&i===tn}function hp(n,i){Ga=Zo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,St(n,a)}}var el={readContext:fi,useCallback:Nn,useContext:Nn,useEffect:Nn,useImperativeHandle:Nn,useInsertionEffect:Nn,useLayoutEffect:Nn,useMemo:Nn,useReducer:Nn,useRef:Nn,useState:Nn,useDebugValue:Nn,useDeferredValue:Nn,useTransition:Nn,useMutableSource:Nn,useSyncExternalStore:Nn,useId:Nn,unstable_isNewReconciler:!1},Mx={readContext:fi,useCallback:function(n,i){return ki().memoizedState=[n,i===void 0?null:i],n},useContext:fi,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Qo(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Qo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Qo(4,2,n,i)},useMemo:function(n,i){var a=ki();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=ki();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yx.bind(null,tn,n),[c.memoizedState,n]},useRef:function(n){var i=ki();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:su,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=_x.bind(null,n[1]),ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=tn,h=ki();if(Jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(os&30)!==0||Kh(c,i,a)}h.memoizedState=a;var g={value:a,getSnapshot:i};return h.queue=g,ip(Qh.bind(null,c,g,n),[n]),c.flags|=2048,Xa(9,Zh.bind(null,c,g,a,i),void 0,null),a},useId:function(){var n=ki(),i=_n.identifierPrefix;if(Jt){var a=tr,c=er;a=(c&~(1<<32-We(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=vx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Ex={readContext:fi,useCallback:lp,useContext:fi,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:nu,useRef:np,useState:function(){return nu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=hi();return up(i,dn.memoizedState,n)},useTransition:function(){var n=nu(Wa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1},bx={readContext:fi,useCallback:lp,useContext:fi,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=hi();return dn===null?i.memoizedState=n:up(i,dn.memoizedState,n)},useTransition:function(){var n=iu(Wa)[0],i=hi().memoizedState;return[n,i]},useMutableSource:Yh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:oe({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?zn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Vn(),h=Fr(n),g=ir(c,h);g.payload=i,a!=null&&(g.callback=a),i=Lr(n,g,h),i!==null&&(Ei(i,n,h,c),qo(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Vn(),h=Fr(n),g=ir(c,h);g.tag=1,g.payload=i,a!=null&&(g.callback=a),i=Lr(n,g,h),i!==null&&(Ei(i,n,h,c),qo(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Vn(),c=Fr(n),h=ir(a,c);h.tag=2,i!=null&&(h.callback=i),i=Lr(n,h,c),i!==null&&(Ei(i,n,c,a),qo(i,n,c))}};function mp(n,i,a,c,h,g,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,b):i.prototype&&i.prototype.isPureReactComponent?!Da(a,c)||!Da(h,g):!0}function gp(n,i,a){var c=!1,h=Nr,g=i.contextType;return typeof g=="object"&&g!==null?g=fi(g):(h=qn(i)?ns:Rn.current,c=i.contextTypes,g=(c=c!=null)?Os(n,h):Nr),i=new i(a,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},qc(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=fi(g):(g=qn(i)?ns:Rn.current,h.context=Os(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(au(n,i,g,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&tl.enqueueReplaceState(h,h.state,null),Yo(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,i){try{var a="",c=i;do a+=Ze(c),c=c.return;while(c);var h=a}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var wx=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=ir(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){ll||(ll=!0,bu=c),cu(n,i)},a}function _p(n,i,a){a=ir(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){cu(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new wx;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=Bx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ir(-1,1),i.tag=2,Lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var Tx=P.ReactCurrentOwner,Yn=!1;function jn(n,i,a,c){i.child=n===null?Vh(i,null,a,c):zs(i,n.child,a,c)}function Ep(n,i,a,c,h){a=a.render;var g=i.ref;return Vs(i,h),c=eu(n,i,a,c,g,h),a=tu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Jt&&a&&Fc(i),i.flags|=1,jn(n,i,c,h),i.child)}function bp(n,i,a,c,h){if(n===null){var g=a.type;return typeof g=="function"&&!Pu(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=g,wp(n,i,g,c,h)):(n=pl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var b=g.memoizedProps;if(a=a.compare,a=a!==null?a:Da,a(b,c)&&n.ref===i.ref)return rr(n,i,h)}return i.flags|=1,n=Br(g,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,h){if(n!==null){var g=n.memoizedProps;if(Da(g,c)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=c=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,rr(n,i,h)}return uu(n,i,a,c,h)}function Tp(n,i,a){var c=i.pendingProps,h=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Kt(Xs,si),si|=a;else{if((a&1073741824)===0)return n=g!==null?g.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Kt(Xs,si),si|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,Kt(Xs,si),si|=c}else g!==null?(c=g.baseLanes|a,i.memoizedState=null):c=a,Kt(Xs,si),si|=c;return jn(n,i,h,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,c,h){var g=qn(a)?ns:Rn.current;return g=Os(i,g),Vs(i,h),a=eu(n,i,a,c,g,h),c=tu(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,rr(n,i,h)):(Jt&&c&&Fc(i),i.flags|=1,jn(n,i,a,h),i.child)}function Cp(n,i,a,c,h){if(qn(a)){var g=!0;Bo(i)}else g=!1;if(Vs(i,h),i.stateNode===null)il(n,i),gp(i,a,c),ou(i,a,c,h),c=!0;else if(n===null){var b=i.stateNode,F=i.memoizedProps;b.props=F;var G=b.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=fi(ue):(ue=qn(a)?ns:Rn.current,ue=Os(i,ue));var Me=a.getDerivedStateFromProps,we=typeof Me=="function"||typeof b.getSnapshotBeforeUpdate=="function";we||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==c||G!==ue)&&xp(i,b,c,ue),Dr=!1;var ve=i.memoizedState;b.state=ve,Yo(i,c,b,h),G=i.memoizedState,F!==c||ve!==G||Xn.current||Dr?(typeof Me=="function"&&(au(i,a,Me,c),G=i.memoizedState),(F=Dr||mp(i,a,F,c,ve,G,ue))?(we||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=G),b.props=c,b.state=G,b.context=ue,c=F):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Hh(n,i),F=i.memoizedProps,ue=i.type===i.elementType?F:yi(i.type,F),b.props=ue,we=i.pendingProps,ve=b.context,G=a.contextType,typeof G=="object"&&G!==null?G=fi(G):(G=qn(a)?ns:Rn.current,G=Os(i,G));var Xe=a.getDerivedStateFromProps;(Me=typeof Xe=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(F!==we||ve!==G)&&xp(i,b,c,G),Dr=!1,ve=i.memoizedState,b.state=ve,Yo(i,c,b,h);var Qe=i.memoizedState;F!==we||ve!==Qe||Xn.current||Dr?(typeof Xe=="function"&&(au(i,a,Xe,c),Qe=i.memoizedState),(ue=Dr||mp(i,a,ue,c,ve,Qe,G)||!1)?(Me||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Qe,G),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Qe,G)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Qe),b.props=c,b.state=Qe,b.context=G,c=ue):(typeof b.componentDidUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||F===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return du(n,i,a,c,g,h)}function du(n,i,a,c,h,g){Ap(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return h&&Lh(i,a,!1),rr(n,i,g);c=i.stateNode,Tx.current=i;var F=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=zs(i,n.child,null,g),i.child=zs(i,null,F,g)):jn(n,i,F,g),i.memoizedState=c.state,h&&Lh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),Yc(n,i.containerInfo)}function Np(n,i,a,c,h){return Bs(),jc(h),i.flags|=256,jn(n,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,h=en.current,g=!1,b=(i.flags&128)!==0,F;if((F=b)||(F=n!==null&&n.memoizedState===null?!1:(h&2)!==0),F?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Kt(en,h&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,g?(c=i.mode,g=i.child,b={mode:"hidden",children:b},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=b):g=ml(b,c,0,null),n=fs(n,c,a,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=hu(a),i.memoizedState=fu,n):pu(i,b));if(h=n.memoizedState,h!==null&&(F=h.dehydrated,F!==null))return Ax(n,i,b,c,F,h,a);if(g){g=c.fallback,b=i.mode,h=n.child,F=h.sibling;var G={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=G,i.deletions=null):(c=Br(h,G),c.subtreeFlags=h.subtreeFlags&14680064),F!==null?g=Br(F,g):(g=fs(g,b,a,null),g.flags|=2),g.return=i,c.return=i,c.sibling=g,i.child=c,c=g,g=i.child,b=n.child.memoizedState,b=b===null?hu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},g.memoizedState=b,g.childLanes=n.childLanes&~a,i.memoizedState=fu,c}return g=n.child,n=g.sibling,c=Br(g,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function pu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,c){return c!==null&&jc(c),zs(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ax(n,i,a,c,h,g,b){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(t(422))),nl(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=c.fallback,h=i.mode,c=ml({mode:"visible",children:c.children},h,0,null),g=fs(g,h,b,null),g.flags|=2,c.return=i,g.return=i,c.sibling=g,i.child=c,(i.mode&1)!==0&&zs(i,n.child,null,b),i.child.memoizedState=hu(b),i.memoizedState=fu,g);if((i.mode&1)===0)return nl(n,i,b,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var F=c.dgst;return c=F,g=Error(t(419)),c=lu(g,c,void 0),nl(n,i,b,c)}if(F=(b&n.childLanes)!==0,Yn||F){if(c=_n,c!==null){switch(b&-b){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|b))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,nr(n,h),Ei(c,n,h,-1))}return Nu(),c=lu(Error(t(421))),nl(n,i,b,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=zx.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ri=Cr(h.nextSibling),ii=i,Jt=!0,_i=null,n!==null&&(ui[di++]=er,ui[di++]=tr,ui[di++]=is,er=n.id,tr=n.overflow,is=i),i=pu(i,c.children),i.flags|=4096,i)}function Dp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Wc(n.return,i,a)}function mu(n,i,a,c,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=h)}function Lp(n,i,a){var c=i.pendingProps,h=c.revealOrder,g=c.tail;if(jn(n,i,c.children,a),c=en.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dp(n,a,i);else if(n.tag===19)Dp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Kt(en,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&$o(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),mu(i,!1,h,a,g);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&$o(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}mu(i,!0,a,null,g);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Cx(n,i,a){switch(i.tag){case 3:Rp(i),Bs();break;case 5:qh(i);break;case 1:qn(i.type)&&Bo(i);break;case 4:Yc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Kt(Wo,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Kt(en,en.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(Kt(en,en.current&1),n=rr(n,i,a),n!==null?n.sibling:null);Kt(en,en.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Kt(en,en.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,a)}return rr(n,i,a)}var Ip,gu,Up,Op;Ip=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Up=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,as(Fi.current);var g=null;switch(a){case"input":h=dt(n,h),c=dt(n,c),g=[];break;case"select":h=oe({},h,{value:void 0}),c=oe({},c,{value:void 0}),g=[];break;case"textarea":h=Ye(n,h),c=Ye(n,c),g=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}Oe(a,c);var b;a=null;for(ue in h)if(!c.hasOwnProperty(ue)&&h.hasOwnProperty(ue)&&h[ue]!=null)if(ue==="style"){var F=h[ue];for(b in F)F.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?g||(g=[]):(g=g||[]).push(ue,null));for(ue in c){var G=c[ue];if(F=h!=null?h[ue]:void 0,c.hasOwnProperty(ue)&&G!==F&&(G!=null||F!=null))if(ue==="style")if(F){for(b in F)!F.hasOwnProperty(b)||G&&G.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in G)G.hasOwnProperty(b)&&F[b]!==G[b]&&(a||(a={}),a[b]=G[b])}else a||(g||(g=[]),g.push(ue,a)),a=G;else ue==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,F=F?F.__html:void 0,G!=null&&F!==G&&(g=g||[]).push(ue,G)):ue==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(ue,""+G):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(G!=null&&ue==="onScroll"&&Zt("scroll",n),g||F===G||(g=[])):(g=g||[]).push(ue,G))}a&&(g=g||[]).push("style",a);var ue=g;(i.updateQueue=ue)&&(i.flags|=4)}},Op=function(n,i,a,c){a!==c&&(i.flags|=4)};function qa(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Rx(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pn(i),null;case 1:return qn(i.type)&&ko(),Pn(i),null;case 3:return c=i.stateNode,Gs(),Qt(Xn),Qt(Rn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Go(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Au(_i),_i=null))),gu(n,i),Pn(i),null;case 5:$c(i);var h=as(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Pn(i),null}if(n=as(Fi.current),Go(i)){c=i.stateNode,a=i.type;var g=i.memoizedProps;switch(c[Oi]=i,c[Fa]=g,n=(i.mode&1)!==0,a){case"dialog":Zt("cancel",c),Zt("close",c);break;case"iframe":case"object":case"embed":Zt("load",c);break;case"video":case"audio":for(h=0;h<Ia.length;h++)Zt(Ia[h],c);break;case"source":Zt("error",c);break;case"img":case"image":case"link":Zt("error",c),Zt("load",c);break;case"details":Zt("toggle",c);break;case"input":Dt(c,g),Zt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Zt("invalid",c);break;case"textarea":I(c,g),Zt("invalid",c)}Oe(a,g),h=null;for(var b in g)if(g.hasOwnProperty(b)){var F=g[b];b==="children"?typeof F=="string"?c.textContent!==F&&(g.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),h=["children",F]):typeof F=="number"&&c.textContent!==""+F&&(g.suppressHydrationWarning!==!0&&Uo(c.textContent,F,n),h=["children",""+F]):o.hasOwnProperty(b)&&F!=null&&b==="onScroll"&&Zt("scroll",c)}switch(a){case"input":Fe(c),j(c,g,!0);break;case"textarea":Fe(c),X(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Oo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Oi]=i,n[Fa]=c,Ip(n,i,!1,!1),i.stateNode=n;e:{switch(b=Pe(a,c),a){case"dialog":Zt("cancel",n),Zt("close",n),h=c;break;case"iframe":case"object":case"embed":Zt("load",n),h=c;break;case"video":case"audio":for(h=0;h<Ia.length;h++)Zt(Ia[h],n);h=c;break;case"source":Zt("error",n),h=c;break;case"img":case"image":case"link":Zt("error",n),Zt("load",n),h=c;break;case"details":Zt("toggle",n),h=c;break;case"input":Dt(n,c),h=dt(n,c),Zt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=oe({},c,{value:void 0}),Zt("invalid",n);break;case"textarea":I(n,c),h=Ye(n,c),Zt("invalid",n);break;default:h=c}Oe(a,h),F=h;for(g in F)if(F.hasOwnProperty(g)){var G=F[g];g==="style"?De(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&$e(n,G)):g==="children"?typeof G=="string"?(a!=="textarea"||G!=="")&&Ae(n,G):typeof G=="number"&&Ae(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?G!=null&&g==="onScroll"&&Zt("scroll",n):G!=null&&L(n,g,G,b))}switch(a){case"input":Fe(n),j(n,c,!1);break;case"textarea":Fe(n),X(n);break;case"option":c.value!=null&&n.setAttribute("value",""+_e(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ct(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Pn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(Va.current),as(Fi.current),Go(i)){if(c=i.stateNode,a=i.memoizedProps,c[Oi]=i,(g=c.nodeValue!==a)&&(n=ii,n!==null))switch(n.tag){case 3:Uo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Uo(c.nodeValue,a,(n.mode&1)!==0)}g&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Oi]=i,i.stateNode=c}return Pn(i),null;case 13:if(Qt(en),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ri!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),Bs(),i.flags|=98560,g=!1;else if(g=Go(i),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Oi]=i}else Bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pn(i),g=!1}else _i!==null&&(Au(_i),_i=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(en.current&1)!==0?fn===0&&(fn=3):Nu())),i.updateQueue!==null&&(i.flags|=4),Pn(i),null);case 4:return Gs(),gu(n,i),n===null&&Ua(i.stateNode.containerInfo),Pn(i),null;case 10:return Hc(i.type._context),Pn(i),null;case 17:return qn(i.type)&&ko(),Pn(i),null;case 19:if(Qt(en),g=i.memoizedState,g===null)return Pn(i),null;if(c=(i.flags&128)!==0,b=g.rendering,b===null)if(c)qa(g,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=$o(n),b!==null){for(i.flags|=128,qa(g,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)g=a,n=c,g.flags&=14680066,b=g.alternate,b===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=b.childLanes,g.lanes=b.lanes,g.child=b.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=b.memoizedProps,g.memoizedState=b.memoizedState,g.updateQueue=b.updateQueue,g.type=b.type,n=b.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Kt(en,en.current&1|2),i.child}n=n.sibling}g.tail!==null&&Yt()>qs&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304)}else{if(!c)if(n=$o(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),qa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!b.alternate&&!Jt)return Pn(i),null}else 2*Yt()-g.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,qa(g,!1),i.lanes=4194304);g.isBackwards?(b.sibling=i.child,i.child=b):(a=g.last,a!==null?a.sibling=b:i.child=b,g.last=b)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Yt(),i.sibling=null,a=en.current,Kt(en,c?a&1|2:a&1),i):(Pn(i),null);case 22:case 23:return Ru(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(si&1073741824)!==0&&(Pn(i),i.subtreeFlags&6&&(i.flags|=8192)):Pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Nx(n,i){switch(kc(i),i.tag){case 1:return qn(i.type)&&ko(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Gs(),Qt(Xn),Qt(Rn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(Qt(en),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Qt(en),null;case 4:return Gs(),null;case 10:return Hc(i.type._context),null;case 22:case 23:return Ru(),null;case 24:return null;default:return null}}var rl=!1,Dn=!1,Px=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function Ws(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){rn(n,i,c)}else a.current=null}function xu(n,i,a){try{a()}catch(c){rn(n,i,c)}}var Fp=!1;function Dx(n,i){if(Rc=bo,n=mh(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var b=0,F=-1,G=-1,ue=0,Me=0,we=n,ve=null;t:for(;;){for(var Xe;we!==a||h!==0&&we.nodeType!==3||(F=b+h),we!==g||c!==0&&we.nodeType!==3||(G=b+c),we.nodeType===3&&(b+=we.nodeValue.length),(Xe=we.firstChild)!==null;)ve=we,we=Xe;for(;;){if(we===n)break t;if(ve===a&&++ue===h&&(F=b),ve===g&&++Me===c&&(G=b),(Xe=we.nextSibling)!==null)break;we=ve,ve=we.parentNode}we=Xe}a=F===-1||G===-1?null:{start:F,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:n,selectionRange:a},bo=!1,Ke=i;Ke!==null;)if(i=Ke,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ke=n;else for(;Ke!==null;){i=Ke;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var Je=Qe.memoizedProps,on=Qe.memoizedState,ee=i.stateNode,q=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Je:yi(i.type,Je),on);ee.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var te=i.stateNode.containerInfo;te.nodeType===1?te.textContent="":te.nodeType===9&&te.documentElement&&te.removeChild(te.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Re){rn(i,i.return,Re)}if(n=i.sibling,n!==null){n.return=i.return,Ke=n;break}Ke=i.return}return Qe=Fp,Fp=!1,Qe}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&xu(i,a,g)}h=h.next}while(h!==c)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Oi],delete i[Fa],delete i[Ic],delete i[px],delete i[mx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}var wn=null,Si=!1;function Ir(n,i,a){for(a=a.child;a!==null;)jp(n,i,a),a=a.sibling}function jp(n,i,a){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(je,a)}catch{}switch(a.tag){case 5:Dn||Ws(a,i);case 6:var c=wn,h=Si;wn=null,Ir(n,i,a),wn=c,Si=h,wn!==null&&(Si?(n=wn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):wn.removeChild(a.stateNode));break;case 18:wn!==null&&(Si?(n=wn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),Ta(n)):Lc(wn,a.stateNode));break;case 4:c=wn,h=Si,wn=a.stateNode.containerInfo,Si=!0,Ir(n,i,a),wn=c,Si=h;break;case 0:case 11:case 14:case 15:if(!Dn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var g=h,b=g.destroy;g=g.tag,b!==void 0&&((g&2)!==0||(g&4)!==0)&&xu(a,i,b),h=h.next}while(h!==c)}Ir(n,i,a);break;case 1:if(!Dn&&(Ws(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(F){rn(a,i,F)}Ir(n,i,a);break;case 21:Ir(n,i,a);break;case 22:a.mode&1?(Dn=(c=Dn)||a.memoizedState!==null,Ir(n,i,a),Dn=c):Ir(n,i,a);break;default:Ir(n,i,a)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Px),i.forEach(function(c){var h=jx.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function Mi(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var g=n,b=i,F=b;e:for(;F!==null;){switch(F.tag){case 5:wn=F.stateNode,Si=!1;break e;case 3:wn=F.stateNode.containerInfo,Si=!0;break e;case 4:wn=F.stateNode.containerInfo,Si=!0;break e}F=F.return}if(wn===null)throw Error(t(160));jp(g,b,h),wn=null,Si=!1;var G=h.alternate;G!==null&&(G.return=null),h.return=null}catch(ue){rn(h,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Bi(n),c&4){try{Ya(3,n,n.return),sl(3,n)}catch(Je){rn(n,n.return,Je)}try{Ya(5,n,n.return)}catch(Je){rn(n,n.return,Je)}}break;case 1:Mi(i,n),Bi(n),c&512&&a!==null&&Ws(a,a.return);break;case 5:if(Mi(i,n),Bi(n),c&512&&a!==null&&Ws(a,a.return),n.flags&32){var h=n.stateNode;try{Ae(h,"")}catch(Je){rn(n,n.return,Je)}}if(c&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,b=a!==null?a.memoizedProps:g,F=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{F==="input"&&g.type==="radio"&&g.name!=null&&nt(h,g),Pe(F,b);var ue=Pe(F,g);for(b=0;b<G.length;b+=2){var Me=G[b],we=G[b+1];Me==="style"?De(h,we):Me==="dangerouslySetInnerHTML"?$e(h,we):Me==="children"?Ae(h,we):L(h,Me,we,ue)}switch(F){case"input":jt(h,g);break;case"textarea":E(h,g);break;case"select":var ve=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?Ct(h,!!g.multiple,Xe,!1):ve!==!!g.multiple&&(g.defaultValue!=null?Ct(h,!!g.multiple,g.defaultValue,!0):Ct(h,!!g.multiple,g.multiple?[]:"",!1))}h[Fa]=g}catch(Je){rn(n,n.return,Je)}}break;case 6:if(Mi(i,n),Bi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(Je){rn(n,n.return,Je)}}break;case 3:if(Mi(i,n),Bi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ta(i.containerInfo)}catch(Je){rn(n,n.return,Je)}break;case 4:Mi(i,n),Bi(n);break;case 13:Mi(i,n),Bi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||(Eu=Yt())),c&4&&Vp(n);break;case 22:if(Me=a!==null&&a.memoizedState!==null,n.mode&1?(Dn=(ue=Dn)||Me,Mi(i,n),Dn=ue):Mi(i,n),Bi(n),c&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!Me&&(n.mode&1)!==0)for(Ke=n,Me=n.child;Me!==null;){for(we=Ke=Me;Ke!==null;){switch(ve=Ke,Xe=ve.child,ve.tag){case 0:case 11:case 14:case 15:Ya(4,ve,ve.return);break;case 1:Ws(ve,ve.return);var Qe=ve.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(Je){rn(c,a,Je)}}break;case 5:Ws(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Xp(we);continue}}Xe!==null?(Xe.return=ve,Ke=Xe):Xp(we)}Me=Me.sibling}e:for(Me=null,we=n;;){if(we.tag===5){if(Me===null){Me=we;try{h=we.stateNode,ue?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(F=we.stateNode,G=we.memoizedProps.style,b=G!=null&&G.hasOwnProperty("display")?G.display:null,F.style.display=ye("display",b))}catch(Je){rn(n,n.return,Je)}}}else if(we.tag===6){if(Me===null)try{we.stateNode.nodeValue=ue?"":we.memoizedProps}catch(Je){rn(n,n.return,Je)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Me===we&&(Me=null),we=we.return}Me===we&&(Me=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Mi(i,n),Bi(n),c&4&&Vp(n);break;case 21:break;default:Mi(i,n),Bi(n)}}function Bi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(Ae(h,""),c.flags&=-33);var g=zp(n);yu(n,g,h);break;case 3:case 4:var b=c.stateNode.containerInfo,F=zp(n);_u(n,F,b);break;default:throw Error(t(161))}}catch(G){rn(n,n.return,G)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Lx(n,i,a){Ke=n,Hp(n)}function Hp(n,i,a){for(var c=(n.mode&1)!==0;Ke!==null;){var h=Ke,g=h.child;if(h.tag===22&&c){var b=h.memoizedState!==null||rl;if(!b){var F=h.alternate,G=F!==null&&F.memoizedState!==null||Dn;F=rl;var ue=Dn;if(rl=b,(Dn=G)&&!ue)for(Ke=h;Ke!==null;)b=Ke,G=b.child,b.tag===22&&b.memoizedState!==null?qp(h):G!==null?(G.return=b,Ke=G):qp(h);for(;g!==null;)Ke=g,Hp(g),g=g.sibling;Ke=h,rl=F,Dn=ue}Wp(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ke=g):Wp(n)}}function Wp(n){for(;Ke!==null;){var i=Ke;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Dn||sl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Dn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&Xh(i,g,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,b,a)}break;case 5:var F=i.stateNode;if(a===null&&i.flags&4){a=F;var G=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&a.focus();break;case"img":G.src&&(a.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var Me=ue.memoizedState;if(Me!==null){var we=Me.dehydrated;we!==null&&Ta(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||i.flags&512&&vu(i)}catch(ve){rn(i,i.return,ve)}}if(i===n){Ke=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function Xp(n){for(;Ke!==null;){var i=Ke;if(i===n){Ke=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ke=a;break}Ke=i.return}}function qp(n){for(;Ke!==null;){var i=Ke;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(G){rn(i,a,G)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(G){rn(i,h,G)}}var g=i.return;try{vu(i)}catch(G){rn(i,g,G)}break;case 5:var b=i.return;try{vu(i)}catch(G){rn(i,b,G)}}}catch(G){rn(i,i.return,G)}if(i===n){Ke=null;break}var F=i.sibling;if(F!==null){F.return=i.return,Ke=F;break}Ke=i.return}}var Ix=Math.ceil,al=P.ReactCurrentDispatcher,Su=P.ReactCurrentOwner,pi=P.ReactCurrentBatchConfig,Ft=0,_n=null,ln=null,Tn=0,si=0,Xs=Rr(0),fn=0,$a=null,ls=0,ol=0,Mu=0,Ka=null,$n=null,Eu=0,qs=1/0,sr=null,ll=!1,bu=null,Ur=null,cl=!1,Or=null,ul=0,Za=0,wu=null,dl=-1,fl=0;function Vn(){return(Ft&6)!==0?Yt():dl!==-1?dl:dl=Yt()}function Fr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&Tn!==0?Tn&-Tn:xx.transition!==null?(fl===0&&(fl=pt()),fl):(n=Se,n!==0||(n=window.event,n=n===void 0?16:$f(n.type)),n)}function Ei(n,i,a,c){if(50<Za)throw Za=0,wu=null,Error(t(185));Ut(n,a,c),((Ft&2)===0||n!==_n)&&(n===_n&&((Ft&2)===0&&(ol|=a),fn===4&&kr(n,Tn)),Kn(n,c),a===1&&Ft===0&&(i.mode&1)===0&&(qs=Yt()+500,zo&&Pr()))}function Kn(n,i){var a=n.callbackNode;It(n,i);var c=Lt(n,n===_n?Tn:0);if(c===0)a!==null&&ci(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ci(a),i===1)n.tag===0?gx($p.bind(null,n)):Ih($p.bind(null,n)),fx(function(){(Ft&6)===0&&Pr()}),a=null;else{switch(Ot(c)){case 1:a=$;break;case 4:a=de;break;case 16:a=re;break;case 536870912:a=Ue;break;default:a=re}a=im(a,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Yp(n,i){if(dl=-1,fl=0,(Ft&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ys()&&n.callbackNode!==a)return null;var c=Lt(n,n===_n?Tn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=hl(n,c);else{i=c;var h=Ft;Ft|=2;var g=Zp();(_n!==n||Tn!==i)&&(sr=null,qs=Yt()+500,us(n,i));do try{Fx();break}catch(F){Kp(n,F)}while(!0);Gc(),al.current=g,Ft=h,ln!==null?i=0:(_n=null,Tn=0,i=fn)}if(i!==0){if(i===2&&(h=At(n),h!==0&&(c=h,i=Tu(n,h))),i===1)throw a=$a,us(n,0),kr(n,c),Kn(n,Yt()),a;if(i===6)kr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!Ux(h)&&(i=hl(n,c),i===2&&(g=At(n),g!==0&&(c=g,i=Tu(n,g))),i===1))throw a=$a,us(n,0),kr(n,c),Kn(n,Yt()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,$n,sr);break;case 3:if(kr(n,c),(c&130023424)===c&&(i=Eu+500-Yt(),10<i)){if(Lt(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Vn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Dc(ds.bind(null,n,$n,sr),i);break}ds(n,$n,sr);break;case 4:if(kr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var b=31-We(c);g=1<<b,b=i[b],b>h&&(h=b),c&=~g}if(c=h,c=Yt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ix(c/1960))-c,10<c){n.timeoutHandle=Dc(ds.bind(null,n,$n,sr),c);break}ds(n,$n,sr);break;case 5:ds(n,$n,sr);break;default:throw Error(t(329))}}}return Kn(n,Yt()),n.callbackNode===a?Yp.bind(null,n):null}function Tu(n,i){var a=Ka;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=hl(n,i),n!==2&&(i=$n,$n=a,i!==null&&Au(i)),n}function Au(n){$n===null?$n=n:$n.push.apply($n,n)}function Ux(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],g=h.getSnapshot;h=h.value;try{if(!vi(g(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(n,i){for(i&=~Mu,i&=~ol,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-We(i),c=1<<a;n[a]=-1,i&=~c}}function $p(n){if((Ft&6)!==0)throw Error(t(327));Ys();var i=Lt(n,0);if((i&1)===0)return Kn(n,Yt()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var c=At(n);c!==0&&(i=c,a=Tu(n,c))}if(a===1)throw a=$a,us(n,0),kr(n,i),Kn(n,Yt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,$n,sr),Kn(n,Yt()),null}function Cu(n,i){var a=Ft;Ft|=1;try{return n(i)}finally{Ft=a,Ft===0&&(qs=Yt()+500,zo&&Pr())}}function cs(n){Or!==null&&Or.tag===0&&(Ft&6)===0&&Ys();var i=Ft;Ft|=1;var a=pi.transition,c=Se;try{if(pi.transition=null,Se=1,n)return n()}finally{Se=c,pi.transition=a,Ft=i,(Ft&6)===0&&Pr()}}function Ru(){si=Xs.current,Qt(Xs)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,dx(a)),ln!==null)for(a=ln.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ko();break;case 3:Gs(),Qt(Xn),Qt(Rn),Zc();break;case 5:$c(c);break;case 4:Gs();break;case 13:Qt(en);break;case 19:Qt(en);break;case 10:Hc(c.type._context);break;case 22:case 23:Ru()}a=a.return}if(_n=n,ln=n=Br(n.current,null),Tn=si=i,fn=0,$a=null,Mu=ol=ls=0,$n=Ka=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,g=a.pending;if(g!==null){var b=g.next;g.next=h,c.next=b}a.pending=c}ss=null}return n}function Kp(n,i){do{var a=ln;try{if(Gc(),Ko.current=el,Zo){for(var c=tn.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Zo=!1}if(os=0,vn=dn=tn=null,Ga=!1,Ha=0,Su.current=null,a===null||a.return===null){fn=1,$a=i,ln=null;break}e:{var g=n,b=a.return,F=a,G=i;if(i=Tn,F.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var ue=G,Me=F,we=Me.tag;if((Me.mode&1)===0&&(we===0||we===11||we===15)){var ve=Me.alternate;ve?(Me.updateQueue=ve.updateQueue,Me.memoizedState=ve.memoizedState,Me.lanes=ve.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Xe=Sp(b);if(Xe!==null){Xe.flags&=-257,Mp(Xe,b,F,g,i),Xe.mode&1&&yp(g,ue,i),i=Xe,G=ue;var Qe=i.updateQueue;if(Qe===null){var Je=new Set;Je.add(G),i.updateQueue=Je}else Qe.add(G);break e}else{if((i&1)===0){yp(g,ue,i),Nu();break e}G=Error(t(426))}}else if(Jt&&F.mode&1){var on=Sp(b);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Mp(on,b,F,g,i),jc(Hs(G,F));break e}}g=G=Hs(G,F),fn!==4&&(fn=2),Ka===null?Ka=[g]:Ka.push(g),g=b;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var ee=vp(g,G,i);Wh(g,ee);break e;case 1:F=G;var q=g.type,te=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||te!==null&&typeof te.componentDidCatch=="function"&&(Ur===null||!Ur.has(te)))){g.flags|=65536,i&=-i,g.lanes|=i;var Re=_p(g,F,i);Wh(g,Re);break e}}g=g.return}while(g!==null)}Jp(a)}catch(tt){i=tt,ln===a&&a!==null&&(ln=a=a.return);continue}break}while(!0)}function Zp(){var n=al.current;return al.current=el,n===null?el:n}function Nu(){(fn===0||fn===3||fn===2)&&(fn=4),_n===null||(ls&268435455)===0&&(ol&268435455)===0||kr(_n,Tn)}function hl(n,i){var a=Ft;Ft|=2;var c=Zp();(_n!==n||Tn!==i)&&(sr=null,us(n,i));do try{Ox();break}catch(h){Kp(n,h)}while(!0);if(Gc(),Ft=a,al.current=c,ln!==null)throw Error(t(261));return _n=null,Tn=0,fn}function Ox(){for(;ln!==null;)Qp(ln)}function Fx(){for(;ln!==null&&!ya();)Qp(ln)}function Qp(n){var i=nm(n.alternate,n,si);n.memoizedProps=n.pendingProps,i===null?Jp(n):ln=i,Su.current=null}function Jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Rx(a,i,si),a!==null){ln=a;return}}else{if(a=Nx(a,i),a!==null){a.flags&=32767,ln=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,ln=null;return}}if(i=i.sibling,i!==null){ln=i;return}ln=i=n}while(i!==null);fn===0&&(fn=5)}function ds(n,i,a){var c=Se,h=pi.transition;try{pi.transition=null,Se=1,kx(n,i,a,c)}finally{pi.transition=h,Se=c}return null}function kx(n,i,a,c){do Ys();while(Or!==null);if((Ft&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=a.lanes|a.childLanes;if(un(n,g),n===_n&&(ln=_n=null,Tn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,im(re,function(){return Ys(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=pi.transition,pi.transition=null;var b=Se;Se=1;var F=Ft;Ft|=4,Su.current=null,Dx(n,a),Gp(a,n),rx(Nc),bo=!!Rc,Nc=Rc=null,n.current=a,Lx(a),Sa(),Ft=F,Se=b,pi.transition=g}else n.current=a;if(cl&&(cl=!1,Or=n,ul=h),g=n.pendingLanes,g===0&&(Ur=null),qe(a.stateNode),Kn(n,Yt()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(ll)throw ll=!1,n=bu,bu=null,n;return(ul&1)!==0&&n.tag!==0&&Ys(),g=n.pendingLanes,(g&1)!==0?n===wu?Za++:(Za=0,wu=n):Za=0,Pr(),null}function Ys(){if(Or!==null){var n=Ot(ul),i=pi.transition,a=Se;try{if(pi.transition=null,Se=16>n?16:n,Or===null)var c=!1;else{if(n=Or,Or=null,ul=0,(Ft&6)!==0)throw Error(t(331));var h=Ft;for(Ft|=4,Ke=n.current;Ke!==null;){var g=Ke,b=g.child;if((Ke.flags&16)!==0){var F=g.deletions;if(F!==null){for(var G=0;G<F.length;G++){var ue=F[G];for(Ke=ue;Ke!==null;){var Me=Ke;switch(Me.tag){case 0:case 11:case 15:Ya(8,Me,g)}var we=Me.child;if(we!==null)we.return=Me,Ke=we;else for(;Ke!==null;){Me=Ke;var ve=Me.sibling,Xe=Me.return;if(kp(Me),Me===ue){Ke=null;break}if(ve!==null){ve.return=Xe,Ke=ve;break}Ke=Xe}}}var Qe=g.alternate;if(Qe!==null){var Je=Qe.child;if(Je!==null){Qe.child=null;do{var on=Je.sibling;Je.sibling=null,Je=on}while(Je!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&b!==null)b.return=g,Ke=b;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ya(9,g,g.return)}var ee=g.sibling;if(ee!==null){ee.return=g.return,Ke=ee;break e}Ke=g.return}}var q=n.current;for(Ke=q;Ke!==null;){b=Ke;var te=b.child;if((b.subtreeFlags&2064)!==0&&te!==null)te.return=b,Ke=te;else e:for(b=q;Ke!==null;){if(F=Ke,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:sl(9,F)}}catch(tt){rn(F,F.return,tt)}if(F===b){Ke=null;break e}var Re=F.sibling;if(Re!==null){Re.return=F.return,Ke=Re;break e}Ke=F.return}}if(Ft=h,Pr(),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(je,n)}catch{}c=!0}return c}finally{Se=a,pi.transition=i}}return!1}function em(n,i,a){i=Hs(a,i),i=vp(n,i,1),n=Lr(n,i,1),i=Vn(),n!==null&&(Ut(n,1,i),Kn(n,i))}function rn(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){n=Hs(a,n),n=_p(i,n,1),i=Lr(i,n,1),n=Vn(),i!==null&&(Ut(i,1,n),Kn(i,n));break}}i=i.return}}function Bx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Vn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(Tn&a)===a&&(fn===4||fn===3&&(Tn&130023424)===Tn&&500>Yt()-Eu?us(n,0):Mu|=a),Kn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ht,Ht<<=1,(Ht&130023424)===0&&(Ht=4194304)));var a=Vn();n=nr(n,i),n!==null&&(Ut(n,i,a),Kn(n,a))}function zx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function jx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Xn.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,Cx(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,Jt&&(i.flags&1048576)!==0&&Uh(i,Vo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;il(n,i),n=i.pendingProps;var h=Os(i,Rn.current);Vs(i,a),h=eu(null,i,c,n,h,a);var g=tu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(c)?(g=!0,Bo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,qc(i),h.updater=tl,i.stateNode=h,h._reactInternals=i,ou(i,c,n,a),i=du(null,i,c,!0,g,a)):(i.tag=0,Jt&&g&&Fc(i),jn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(il(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=Gx(c),n=yi(c,n),h){case 0:i=uu(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=bp(null,i,c,yi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),uu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),Cp(n,i,c,h,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,g=i.memoizedState,h=g.element,Hh(n,i),Yo(i,c,null,a);var b=i.memoizedState;if(c=b.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=Hs(Error(t(423)),i),i=Np(n,i,c,a,h);break e}else if(c!==h){h=Hs(Error(t(424)),i),i=Np(n,i,c,a,h);break e}else for(ri=Cr(i.stateNode.containerInfo.firstChild),ii=i,Jt=!0,_i=null,a=Vh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Bs(),c===h){i=rr(n,i,a);break e}jn(n,i,c,a)}i=i.child}return i;case 5:return qh(i),n===null&&zc(i),c=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,b=h.children,Pc(c,h)?b=null:g!==null&&Pc(c,g)&&(i.flags|=32),Ap(n,i),jn(n,i,b,a),i.child;case 6:return n===null&&zc(i),null;case 13:return Pp(n,i,a);case 4:return Yc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=zs(i,null,c,a):jn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),Ep(n,i,c,h,a);case 7:return jn(n,i,i.pendingProps,a),i.child;case 8:return jn(n,i,i.pendingProps.children,a),i.child;case 12:return jn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,g=i.memoizedProps,b=h.value,Kt(Wo,c._currentValue),c._currentValue=b,g!==null)if(vi(g.value,b)){if(g.children===h.children&&!Xn.current){i=rr(n,i,a);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var F=g.dependencies;if(F!==null){b=g.child;for(var G=F.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=ir(-1,a&-a),G.tag=2;var ue=g.updateQueue;if(ue!==null){ue=ue.shared;var Me=ue.pending;Me===null?G.next=G:(G.next=Me.next,Me.next=G),ue.pending=G}}g.lanes|=a,G=g.alternate,G!==null&&(G.lanes|=a),Wc(g.return,a,i),F.lanes|=a;break}G=G.next}}else if(g.tag===10)b=g.type===i.type?null:g.child;else if(g.tag===18){if(b=g.return,b===null)throw Error(t(341));b.lanes|=a,F=b.alternate,F!==null&&(F.lanes|=a),Wc(b,a,i),b=g.sibling}else b=g.child;if(b!==null)b.return=g;else for(b=g;b!==null;){if(b===i){b=null;break}if(g=b.sibling,g!==null){g.return=b.return,b=g;break}b=b.return}g=b}jn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,Vs(i,a),h=fi(h),c=c(h),i.flags|=1,jn(n,i,c,a),i.child;case 14:return c=i.type,h=yi(c,i.pendingProps),h=yi(c.type,h),bp(n,i,c,h,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:yi(c,h),il(n,i),i.tag=1,qn(c)?(n=!0,Bo(i)):n=!1,Vs(i,a),gp(i,c,h),ou(i,c,h,a),du(null,i,c,!0,n,a);case 19:return Lp(n,i,a);case 22:return Tp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Ii(n,i)}function Vx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,i,a,c){return new Vx(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gx(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===le)return 14}return 2}function Br(n,i){var a=n.alternate;return a===null?(a=mi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,c,h,g){var b=2;if(c=n,typeof n=="function")Pu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case O:return fs(a.children,h,g,i);case z:b=8,h|=8;break;case w:return n=mi(12,a,i,h|2),n.elementType=w,n.lanes=g,n;case K:return n=mi(13,a,i,h),n.elementType=K,n.lanes=g,n;case ae:return n=mi(19,a,i,h),n.elementType=ae,n.lanes=g,n;case Z:return ml(a,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case N:b=10;break e;case B:b=9;break e;case Y:b=11;break e;case le:b=14;break e;case ne:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=mi(b,a,i,h),i.elementType=n,i.type=c,i.lanes=g,i}function fs(n,i,a,c){return n=mi(7,n,c,i),n.lanes=a,n}function ml(n,i,a,c){return n=mi(22,n,c,i),n.elementType=Z,n.lanes=a,n.stateNode={isHidden:!1},n}function Du(n,i,a){return n=mi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=mi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Hx(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ot(0),this.expirationTimes=ot(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ot(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Iu(n,i,a,c,h,g,b,F,G){return n=new Hx(n,i,a,F,G),i===1?(i=1,g===!0&&(i|=8)):i=0,g=mi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qc(g),n}function Wx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Nr;n=n._reactInternals;e:{if(zn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Dh(n,a,i)}return i}function sm(n,i,a,c,h,g,b,F,G){return n=Iu(a,c,!0,n,h,g,b,F,G),n.context=rm(null),a=n.current,c=Vn(),h=Fr(a),g=ir(c,h),g.callback=i??null,Lr(a,g,h),n.current.lanes=h,Ut(n,h,c),Kn(n,c),n}function gl(n,i,a,c){var h=i.current,g=Vn(),b=Fr(h);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=ir(g,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(h,i,b),n!==null&&(Ei(n,h,b,g),qo(n,h,b)),b}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function Xx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}vl.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},vl.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){gl(null,n,null,null)}),i[Qi]=null}};function vl(n){this._internalRoot=n}vl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ui();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&qf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function qx(n,i,a,c,h){if(h){if(typeof c=="function"){var g=c;c=function(){var ue=xl(b);g.call(ue)}}var b=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=b,n[Qi]=b.current,Ua(n.nodeType===8?n.parentNode:n),cs(),b}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var F=c;c=function(){var ue=xl(G);F.call(ue)}}var G=Iu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=G,n[Qi]=G.current,Ua(n.nodeType===8?n.parentNode:n),cs(function(){gl(i,G,a,c)}),G}function yl(n,i,a,c,h){var g=a._reactRootContainer;if(g){var b=g;if(typeof h=="function"){var F=h;h=function(){var G=xl(b);F.call(G)}}gl(i,b,n,h)}else b=qx(a,i,n,h,c);return xl(b)}an=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Vt(i.pendingLanes);a!==0&&(St(i,a|1),Kn(i,Yt()),(Ft&6)===0&&(qs=Yt()+500,Pr()))}break;case 13:cs(function(){var c=nr(n,1);if(c!==null){var h=Vn();Ei(c,n,1,h)}}),Uu(n,1)}},xn=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var a=Vn();Ei(i,n,134217728,a)}Uu(n,134217728)}},Ts=function(n){if(n.tag===13){var i=Fr(n),a=nr(n,i);if(a!==null){var c=Vn();Ei(a,n,i,c)}Uu(n,i)}},Ui=function(){return Se},Wf=function(n,i){var a=Se;try{return Se=n,i()}finally{Se=a}},Ie=function(n,i,a){switch(i){case"input":if(jt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=Fo(c);if(!h)throw Error(t(90));Nt(c),jt(c,h)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&Ct(n,!!a.multiple,i,!1)}},at=Cu,yt=cs;var Yx={usingClientEntryPoint:!1,Events:[ka,Is,Fo,fe,Te,Cu]},Qa={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:Qa.bundleType,version:Qa.version,rendererPackageName:Qa.rendererPackageName,rendererConfig:Qa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=yr(n),n===null?null:n.stateNode},findFiberByHostInstance:Qa.findFiberByHostInstance||Xx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{je=Sl.inject($x),Le=Sl}catch{}}return Zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yx,Zn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return Wx(n,i,null,a)},Zn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",h=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Iu(n,1,!1,null,null,a,!1,c,h),n[Qi]=i.current,Ua(n.nodeType===8?n.parentNode:n),new Ou(i)},Zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=yr(i),n=n===null?null:n.stateNode,n},Zn.flushSync=function(n){return cs(n)},Zn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,a)},Zn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,g="",b=om;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=sm(i,null,n,1,a??null,h,!1,g,b),n[Qi]=i.current,Ua(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new vl(i)},Zn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,a)},Zn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},Zn.unstable_batchedUpdates=Cu,Zn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,c)},Zn.version="18.3.1-next-f1338f8080-20240426",Zn}var gm;function rv(){if(gm)return zu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=iv(),zu.exports}var xm;function sv(){if(xm)return Ml;xm=1;var s=rv();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var av=sv();const ov=T0(av);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),A0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ke.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:d,...f},p)=>ke.createElement("svg",{ref:p,...cv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:A0("lucide",o),...f},[...d.map(([m,v])=>ke.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=(s,e)=>{const t=ke.forwardRef(({className:r,...o},l)=>ke.createElement(uv,{ref:l,iconNode:e,className:A0(`lucide-${lv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=ft("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ft("Battery",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=ft("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ft("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ft("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ft("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ft("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ft("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ft("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ft("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ft("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=ft("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=ft("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=ft("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=ft("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=ft("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=ft("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ft("Droplets",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=ft("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ft("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ft("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=ft("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ft("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ft("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ft("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ft("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ft("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ft("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ft("OctagonAlert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=ft("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=ft("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ft("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=ft("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=ft("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ft("Scale",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ft("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ft("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ft("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=ft("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ft("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=ft("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=ft("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=ft("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=ft("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=ft("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ft("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=ft("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ft("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=ft("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ft("ZapOff",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.463.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ft("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),kv=({cartCount:s,onOpenCart:e})=>{const[t,r]=ke.useState(!1),[o,l]=ke.useState(!1);ke.useEffect(()=>{const f=()=>{r(window.scrollY>40)};return window.addEventListener("scroll",f),()=>window.removeEventListener("scroll",f)},[]);const d=[{name:"Simulação 3D",href:"#hero-3d",icon:uo},{name:"Central VTS",href:"#central-vts",icon:Dv},{name:"Normas NBR",href:"#normas",icon:Md},{name:"Calculadora & Diagrama",href:"#calculadora",icon:C0,highlight:!0},{name:"Loja Virtual",href:"#loja",icon:Jl},{name:"Manuais",href:"#manuais",icon:Md},{name:"Fotos Reais",href:"#galeria",icon:vo},{name:"Contato",href:"#contato",icon:hr}];return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"bg-gradient-to-r from-[#08090b] via-[#141208] to-[#08090b] border-b border-[#d4af37]/30 text-xs py-1.5 px-4 text-center text-[#f3e5ab] flex items-center justify-center gap-2 font-medium",children:[u.jsxs("span",{className:"flex h-2 w-2 relative",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4af37] opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-2 w-2 bg-[#d4af37]"})]}),u.jsxs("span",{className:"tracking-wide",children:["SISTEMA EM CONFORMIDADE TOTAL COM ",u.jsx("strong",{className:"text-[#e5c05d]",children:"ABNT NBR 14518"}),", ",u.jsx("strong",{className:"text-[#e5c05d]",children:"NFPA 96 & 17A"})," E CORPO DE BOMBEIROS (AVCB)"]})]}),u.jsxs("header",{className:`sticky top-0 z-50 transition-all duration-300 ${t?"bg-[#08090b]/95 backdrop-blur-md border-b border-[#d4af37]/20 shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2.5":"bg-[#08090b]/85 backdrop-blur-sm border-b border-white/5 py-3.5"}`,children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between",children:[u.jsx("a",{href:"#",className:"flex items-center gap-3 group",children:u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE - Sistemas contra Incêndio",className:"h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.3)]"})}),u.jsx("nav",{className:"hidden lg:flex items-center gap-1",children:d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,className:`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${f.highlight?"bg-[#d4af37]/15 text-[#e5c05d] hover:bg-[#d4af37]/25 border border-[#d4af37]/40 shadow-[0_0_15px_rgba(212,175,55,0.2)] font-semibold":"text-gray-300 hover:text-[#f3e5ab] hover:bg-white/5"}`,children:[u.jsx(p,{className:`w-3.5 h-3.5 ${f.highlight?"text-[#d4af37]":"opacity-70"}`}),f.name]},f.name)})}),u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20do%20sistema%20Outfire%20para%20minha%20cozinha%20industrial.",target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black px-4 py-2 rounded-lg shadow-glow-gold hover:shadow-glow-gold-lg transition-all",children:[u.jsx(hr,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"(15) 99657-6807"})]}),u.jsxs("button",{onClick:e,className:"relative p-2.5 rounded-xl bg-[#14171e] hover:bg-[#1a1f28] border border-[#d4af37]/25 text-[#f3e5ab] hover:text-white transition-all flex items-center justify-center group shadow-md",title:"Ver Carrinho de Compras",children:[u.jsx(Jl,{className:"w-5 h-5 group-hover:scale-105 transition-transform"}),s>0&&u.jsx("span",{className:"absolute -top-1.5 -right-1.5 bg-[#d4af37] text-black font-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center shadow-glow-gold animate-pulse",children:s})]}),u.jsx("button",{onClick:()=>l(!o),className:"lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white",children:o?u.jsx(bd,{className:"w-6 h-6"}):u.jsx(bv,{className:"w-6 h-6"})})]})]}),o&&u.jsxs("div",{className:"lg:hidden mt-3 px-4 pt-2 pb-6 bg-[#0e1014] border-b border-[#d4af37]/20 space-y-2",children:[d.map(f=>{const p=f.icon;return u.jsxs("a",{href:f.href,onClick:()=>l(!1),className:"flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-200 hover:bg-[#d4af37]/10 hover:text-[#f3e5ab] transition-all",children:[u.jsx(p,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:f.name})]},f.name)}),u.jsx("div",{className:"pt-3 border-t border-white/10",children:u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-sm font-black rounded-lg shadow-glow-gold",children:[u.jsx(hr,{className:"w-4 h-4 fill-black"}),"Falar com Engenharia Outfire no WhatsApp"]})})]})]})]})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mf="182",da={ROTATE:0,DOLLY:1,PAN:2},ua={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Bv=0,Em=1,zv=2,Wl=1,Ef=2,lo=3,Zr=0,ei=1,dr=2,pr=0,fa=1,bm=2,wm=3,Tm=4,jv=5,_s=100,Vv=101,Gv=102,Hv=103,Wv=104,Xv=200,qv=201,Yv=202,$v=203,wd=204,Td=205,Kv=206,Zv=207,Qv=208,Jv=209,e_=210,t_=211,n_=212,i_=213,r_=214,Ad=0,Cd=1,Rd=2,pa=3,Nd=4,Pd=5,Dd=6,Ld=7,U0=0,s_=1,a_=2,Hi=0,O0=1,F0=2,k0=3,rc=4,B0=5,z0=6,j0=7,V0=300,Es=301,ma=302,Id=303,Ud=304,sc=306,Od=1e3,fr=1001,Fd=1002,An=1003,o_=1004,El=1005,kn=1006,Gu=1007,Ss=1008,li=1009,G0=1010,H0=1011,ho=1012,bf=1013,qi=1014,Vi=1015,gr=1016,wf=1017,Tf=1018,po=1020,W0=35902,X0=35899,q0=1021,Y0=1022,Ri=1023,xr=1026,Ms=1027,$0=1028,Af=1029,ga=1030,Cf=1031,Rf=1033,Xl=33776,ql=33777,Yl=33778,$l=33779,kd=35840,Bd=35841,zd=35842,jd=35843,Vd=36196,Gd=37492,Hd=37496,Wd=37488,Xd=37489,qd=37490,Yd=37491,$d=37808,Kd=37809,Zd=37810,Qd=37811,Jd=37812,ef=37813,tf=37814,nf=37815,rf=37816,sf=37817,af=37818,of=37819,lf=37820,cf=37821,uf=36492,df=36494,ff=36495,hf=36283,pf=36284,mf=36285,gf=36286,l_=3200,K0=0,c_=1,$r="",On="srgb",xa="srgb-linear",ec="linear",Xt="srgb",$s=7680,Am=519,u_=512,d_=513,f_=514,Nf=515,h_=516,p_=517,Pf=518,m_=519,Cm=35044,Rm="300 es",Gi=2e3,tc=2001;function Z0(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function mo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function g_(){const s=mo("canvas");return s.style.display="block",s}const Nm={};function Pm(...s){const e="THREE."+s.shift();console.log(e,...s)}function _t(...s){const e="THREE."+s.shift();console.warn(e,...s)}function kt(...s){const e="THREE."+s.shift();console.error(e,...s)}function go(...s){const e=s.join(" ");e in Nm||(Nm[e]=!0,_t(...s))}function x_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}class ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,d=o.length;l<d;l++)o[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kl=Math.PI/180,nc=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Pt(s,e,t){return Math.max(e,Math.min(t,s))}function v_(s,e){return(s%e+e)%e}function Hu(s,e,t){return(1-t)*s+t*e}function eo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const __={DEG2RAD:Kl};class mt{constructor(e=0,t=0){mt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,d=this.y-e.y;return this.x=l*r-d*o+e.x,this.y=l*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bs{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,d,f){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],S=l[d+0],M=l[d+1],T=l[d+2],C=l[d+3];if(f<=0){e[t+0]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_;return}if(f>=1){e[t+0]=S,e[t+1]=M,e[t+2]=T,e[t+3]=C;return}if(_!==C||p!==S||m!==M||v!==T){let y=p*S+m*M+v*T+_*C;y<0&&(S=-S,M=-M,T=-T,C=-C,y=-y);let x=1-f;if(y<.9995){const A=Math.acos(y),L=Math.sin(A);x=Math.sin(x*A)/L,f=Math.sin(f*A)/L,p=p*x+S*f,m=m*x+M*f,v=v*x+T*f,_=_*x+C*f}else{p=p*x+S*f,m=m*x+M*f,v=v*x+T*f,_=_*x+C*f;const A=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=A,m*=A,v*=A,_*=A}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,d){const f=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=l[d],S=l[d+1],M=l[d+2],T=l[d+3];return e[t]=f*T+v*_+p*M-m*S,e[t+1]=p*T+v*S+m*_-f*M,e[t+2]=m*T+v*M+f*S-p*_,e[t+3]=v*T-f*_-p*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(o/2),_=f(l/2),S=p(r/2),M=p(o/2),T=p(l/2);switch(d){case"XYZ":this._x=S*v*_+m*M*T,this._y=m*M*_-S*v*T,this._z=m*v*T+S*M*_,this._w=m*v*_-S*M*T;break;case"YXZ":this._x=S*v*_+m*M*T,this._y=m*M*_-S*v*T,this._z=m*v*T-S*M*_,this._w=m*v*_+S*M*T;break;case"ZXY":this._x=S*v*_-m*M*T,this._y=m*M*_+S*v*T,this._z=m*v*T+S*M*_,this._w=m*v*_-S*M*T;break;case"ZYX":this._x=S*v*_-m*M*T,this._y=m*M*_+S*v*T,this._z=m*v*T-S*M*_,this._w=m*v*_+S*M*T;break;case"YZX":this._x=S*v*_+m*M*T,this._y=m*M*_+S*v*T,this._z=m*v*T-S*M*_,this._w=m*v*_-S*M*T;break;case"XZY":this._x=S*v*_-m*M*T,this._y=m*M*_-S*v*T,this._z=m*v*T+S*M*_,this._w=m*v*_+S*M*T;break;default:_t("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],d=t[1],f=t[5],p=t[9],m=t[2],v=t[6],_=t[10],S=r+f+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-m)*M,this._z=(d-o)*M}else if(r>f&&r>_){const M=2*Math.sqrt(1+r-f-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(l+m)/M}else if(f>_){const M=2*Math.sqrt(1+f-r-_);this._w=(l-m)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-f);this._w=(d-o)/M,this._x=(l+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,d=e._w,f=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+d*f+o*m-l*p,this._y=o*v+d*p+l*f-r*m,this._z=l*v+d*m+r*p-o*f,this._w=d*v-r*f-o*p-l*m,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let r=e._x,o=e._y,l=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+o*t,this._z=this._z*p+l*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,d=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*d,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*d,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*o-f*r),v=2*(f*t-l*o),_=2*(l*r-d*t);return this.x=t+p*m+d*_-f*v,this.y=r+p*v+f*m-l*_,this.z=o+p*_+l*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,d=t.x,f=t.y,p=t.z;return this.x=o*p-l*f,this.y=l*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wu.copy(this).projectOnVector(e),this.sub(Wu)}reflect(e){return this.sub(Wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Pt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wu=new Q,Dm=new bs;class Mt{constructor(e,t,r,o,l,d,f,p,m){Mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m)}set(e,t,r,o,l,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],_=r[7],S=r[2],M=r[5],T=r[8],C=o[0],y=o[3],x=o[6],A=o[1],L=o[4],P=o[7],U=o[2],D=o[5],O=o[8];return l[0]=d*C+f*A+p*U,l[3]=d*y+f*L+p*D,l[6]=d*x+f*P+p*O,l[1]=m*C+v*A+_*U,l[4]=m*y+v*L+_*D,l[7]=m*x+v*P+_*O,l[2]=S*C+M*A+T*U,l[5]=S*y+M*L+T*D,l[8]=S*x+M*P+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*f*m-r*l*v+r*f*p+o*l*m-o*d*p}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=v*d-f*m,S=f*p-v*l,M=m*l-d*p,T=t*_+r*S+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=_*C,e[1]=(o*m-v*r)*C,e[2]=(f*r-o*d)*C,e[3]=S*C,e[4]=(v*t-o*p)*C,e[5]=(o*l-f*t)*C,e[6]=M*C,e[7]=(r*p-m*t)*C,e[8]=(d*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,d,f){const p=Math.cos(l),m=Math.sin(l);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-o*m,o*p,-o*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Xu.makeScale(e,t)),this}rotate(e){return this.premultiply(Xu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xu=new Mt,Lm=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){const s={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(o,l,d){return this.enabled===!1||l===d||!l||!d||(this.spaces[l].transfer===Xt&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[l].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Xt&&(o.r=ha(o.r),o.g=ha(o.g),o.b=ha(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===$r?ec:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,d){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return go("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return go("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[xa]:{primaries:e,whitePoint:r,transfer:ec,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:r,transfer:Xt,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),s}const Bt=y_();function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ha(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class S_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=mo("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=mo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let d=0;d<l.length;d++)l[d]=mr(l[d]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(mr(t[r]/255)*255):t[r]=mr(t[r]);return{data:t,width:e.width,height:e.height}}else return _t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let M_=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?l.push(qu(o[d].image)):l.push(qu(o[d]))}else l=qu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function qu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?S_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(_t("Texture: Unable to serialize Texture."),{})}let E_=0;const Yu=new Q;class Cn extends ws{constructor(e=Cn.DEFAULT_IMAGE,t=Cn.DEFAULT_MAPPING,r=fr,o=fr,l=kn,d=Ss,f=Ri,p=li,m=Cn.DEFAULT_ANISOTROPY,v=$r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=_o(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yu).x}get height(){return this.source.getSize(Yu).y}get depth(){return this.source.getSize(Yu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){_t(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==V0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Fd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Fd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Cn.DEFAULT_IMAGE=null;Cn.DEFAULT_MAPPING=V0;Cn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,r=0,o=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*o+d[12]*l,this.y=d[1]*t+d[5]*r+d[9]*o+d[13]*l,this.z=d[2]*t+d[6]*r+d[10]*o+d[14]*l,this.w=d[3]*t+d[7]*r+d[11]*o+d[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const p=e.elements,m=p[0],v=p[4],_=p[8],S=p[1],M=p[5],T=p[9],C=p[2],y=p[6],x=p[10];if(Math.abs(v-S)<.01&&Math.abs(_-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(_+C)<.1&&Math.abs(T+y)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(m+1)/2,P=(M+1)/2,U=(x+1)/2,D=(v+S)/4,O=(_+C)/4,z=(T+y)/4;return L>P&&L>U?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=D/r,l=O/r):P>U?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=D/o,l=z/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=z/l),this.set(r,o,l,t),this}let A=Math.sqrt((y-T)*(y-T)+(_-C)*(_-C)+(S-v)*(S-v));return Math.abs(A)<.001&&(A=1),this.x=(y-T)/A,this.y=(_-C)/A,this.z=(S-v)/A,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Pt(this.x,e.x,t.x),this.y=Pt(this.y,e.y,t.y),this.z=Pt(this.z,e.z,t.z),this.w=Pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Pt(this.x,e,t),this.y=Pt(this.y,e,t),this.z=Pt(this.z,e,t),this.w=Pt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Pt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b_ extends ws{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t);const o={width:e,height:t,depth:r.depth},l=new Cn(o);this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Df(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends b_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Q0 extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class w_ extends Cn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=An,this.minFilter=An,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yo{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=l.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,bi):bi.fromBufferAttribute(l,d),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bl.copy(r.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const o=e.children;for(let l=0,d=o.length;l<d;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),wl.subVectors(this.max,to),Zs.subVectors(e.a,to),Qs.subVectors(e.b,to),Js.subVectors(e.c,to),jr.subVectors(Qs,Zs),Vr.subVectors(Js,Qs),hs.subVectors(Zs,Js);let t=[0,-jr.z,jr.y,0,-Vr.z,Vr.y,0,-hs.z,hs.y,jr.z,0,-jr.x,Vr.z,0,-Vr.x,hs.z,0,-hs.x,-jr.y,jr.x,0,-Vr.y,Vr.x,0,-hs.y,hs.x,0];return!$u(t,Zs,Qs,Js,wl)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,Zs,Qs,Js,wl))?!1:(Tl.crossVectors(jr,Vr),t=[Tl.x,Tl.y,Tl.z],$u(t,Zs,Qs,Js,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ar[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ar[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ar[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ar[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ar[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ar[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ar[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ar[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ar),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ar=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],bi=new Q,bl=new yo,Zs=new Q,Qs=new Q,Js=new Q,jr=new Q,Vr=new Q,hs=new Q,to=new Q,wl=new Q,Tl=new Q,ps=new Q;function $u(s,e,t,r,o){for(let l=0,d=s.length-3;l<=d;l+=3){ps.fromArray(s,l);const f=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),p=e.dot(ps),m=t.dot(ps),v=r.dot(ps);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const T_=new yo,no=new Q,Ku=new Q;class Lf{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):T_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,d=e.length;l<d;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(Ku)),this.expandByPoint(no.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const or=new Q,Zu=new Q,Al=new Q,Gr=new Q,Qu=new Q,Cl=new Q,Ju=new Q;class If{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Zu.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),Gr.copy(this.origin).sub(Zu);const l=e.distanceTo(t)*.5,d=-this.direction.dot(Al),f=Gr.dot(this.direction),p=-Gr.dot(Al),m=Gr.lengthSq(),v=Math.abs(1-d*d);let _,S,M,T;if(v>0)if(_=d*p-f,S=d*f-p,T=l*v,_>=0)if(S>=-T)if(S<=T){const C=1/v;_*=C,S*=C,M=_*(_+d*S+2*f)+S*(d*_+S+2*p)+m}else S=l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;else S=-l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;else S<=-T?(_=Math.max(0,-(-d*l+f)),S=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m):S<=T?(_=0,S=Math.min(Math.max(-l,-p),l),M=S*(S+2*p)+m):(_=Math.max(0,-(d*l+f)),S=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+S*(S+2*p)+m);else S=d>0?-l:l,_=Math.max(0,-(d*S+f)),M=-_*_+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Zu).addScaledVector(Al,S),M}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const d=Math.sqrt(l-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),v>=0?(l=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(l=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||l>o||((l>r||isNaN(r))&&(r=l),(d<o||isNaN(o))&&(o=d),_>=0?(f=(e.min.z-S.z)*_,p=(e.max.z-S.z)*_):(f=(e.max.z-S.z)*_,p=(e.min.z-S.z)*_),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){Qu.subVectors(t,e),Cl.subVectors(r,e),Ju.crossVectors(Qu,Cl);let d=this.direction.dot(Ju),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Gr.subVectors(this.origin,e);const p=f*this.direction.dot(Cl.crossVectors(Gr,Cl));if(p<0)return null;const m=f*this.direction.dot(Qu.cross(Gr));if(m<0||p+m>d)return null;const v=-f*Gr.dot(Ju);return v<0?null:this.at(v/d,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(e,t,r,o,l,d,f,p,m,v,_,S,M,T,C,y){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,d,f,p,m,v,_,S,M,T,C,y)}set(e,t,r,o,l,d,f,p,m,v,_,S,M,T,C,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=o,x[1]=l,x[5]=d,x[9]=f,x[13]=p,x[2]=m,x[6]=v,x[10]=_,x[14]=S,x[3]=M,x[7]=T,x[11]=C,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/ea.setFromMatrixColumn(e,0).length(),l=1/ea.setFromMatrixColumn(e,1).length(),d=1/ea.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const S=d*v,M=d*_,T=f*v,C=f*_;t[0]=p*v,t[4]=-p*_,t[8]=m,t[1]=M+T*m,t[5]=S-C*m,t[9]=-f*p,t[2]=C-S*m,t[6]=T+M*m,t[10]=d*p}else if(e.order==="YXZ"){const S=p*v,M=p*_,T=m*v,C=m*_;t[0]=S+C*f,t[4]=T*f-M,t[8]=d*m,t[1]=d*_,t[5]=d*v,t[9]=-f,t[2]=M*f-T,t[6]=C+S*f,t[10]=d*p}else if(e.order==="ZXY"){const S=p*v,M=p*_,T=m*v,C=m*_;t[0]=S-C*f,t[4]=-d*_,t[8]=T+M*f,t[1]=M+T*f,t[5]=d*v,t[9]=C-S*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const S=d*v,M=d*_,T=f*v,C=f*_;t[0]=p*v,t[4]=T*m-M,t[8]=S*m+C,t[1]=p*_,t[5]=C*m+S,t[9]=M*m-T,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const S=d*p,M=d*m,T=f*p,C=f*m;t[0]=p*v,t[4]=C-S*_,t[8]=T*_+M,t[1]=_,t[5]=d*v,t[9]=-f*v,t[2]=-m*v,t[6]=M*_+T,t[10]=S-C*_}else if(e.order==="XZY"){const S=d*p,M=d*m,T=f*p,C=f*m;t[0]=p*v,t[4]=-_,t[8]=m*v,t[1]=S*_+C,t[5]=d*v,t[9]=M*_-T,t[2]=T*_-M,t[6]=f*v,t[10]=C*_+S}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(A_,e,C_)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Hr.crossVectors(r,ai),Hr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Hr.crossVectors(r,ai)),Hr.normalize(),Rl.crossVectors(ai,Hr),o[0]=Hr.x,o[4]=Rl.x,o[8]=ai.x,o[1]=Hr.y,o[5]=Rl.y,o[9]=ai.y,o[2]=Hr.z,o[6]=Rl.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],_=r[5],S=r[9],M=r[13],T=r[2],C=r[6],y=r[10],x=r[14],A=r[3],L=r[7],P=r[11],U=r[15],D=o[0],O=o[4],z=o[8],w=o[12],N=o[1],B=o[5],Y=o[9],K=o[13],ae=o[2],le=o[6],ne=o[10],Z=o[14],W=o[3],he=o[7],oe=o[11],k=o[15];return l[0]=d*D+f*N+p*ae+m*W,l[4]=d*O+f*B+p*le+m*he,l[8]=d*z+f*Y+p*ne+m*oe,l[12]=d*w+f*K+p*Z+m*k,l[1]=v*D+_*N+S*ae+M*W,l[5]=v*O+_*B+S*le+M*he,l[9]=v*z+_*Y+S*ne+M*oe,l[13]=v*w+_*K+S*Z+M*k,l[2]=T*D+C*N+y*ae+x*W,l[6]=T*O+C*B+y*le+x*he,l[10]=T*z+C*Y+y*ne+x*oe,l[14]=T*w+C*K+y*Z+x*k,l[3]=A*D+L*N+P*ae+U*W,l[7]=A*O+L*B+P*le+U*he,l[11]=A*z+L*Y+P*ne+U*oe,l[15]=A*w+L*K+P*Z+U*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],_=e[6],S=e[10],M=e[14],T=e[3],C=e[7],y=e[11],x=e[15],A=p*M-m*S,L=f*M-m*_,P=f*S-p*_,U=d*M-m*v,D=d*S-p*v,O=d*_-f*v;return t*(C*A-y*L+x*P)-r*(T*A-y*U+x*D)+o*(T*L-C*U+x*O)-l*(T*P-C*D+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],_=e[9],S=e[10],M=e[11],T=e[12],C=e[13],y=e[14],x=e[15],A=_*y*m-C*S*m+C*p*M-f*y*M-_*p*x+f*S*x,L=T*S*m-v*y*m-T*p*M+d*y*M+v*p*x-d*S*x,P=v*C*m-T*_*m+T*f*M-d*C*M-v*f*x+d*_*x,U=T*_*p-v*C*p-T*f*S+d*C*S+v*f*y-d*_*y,D=t*A+r*L+o*P+l*U;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=A*O,e[1]=(C*S*l-_*y*l-C*o*M+r*y*M+_*o*x-r*S*x)*O,e[2]=(f*y*l-C*p*l+C*o*m-r*y*m-f*o*x+r*p*x)*O,e[3]=(_*p*l-f*S*l-_*o*m+r*S*m+f*o*M-r*p*M)*O,e[4]=L*O,e[5]=(v*y*l-T*S*l+T*o*M-t*y*M-v*o*x+t*S*x)*O,e[6]=(T*p*l-d*y*l-T*o*m+t*y*m+d*o*x-t*p*x)*O,e[7]=(d*S*l-v*p*l+v*o*m-t*S*m-d*o*M+t*p*M)*O,e[8]=P*O,e[9]=(T*_*l-v*C*l-T*r*M+t*C*M+v*r*x-t*_*x)*O,e[10]=(d*C*l-T*f*l+T*r*m-t*C*m-d*r*x+t*f*x)*O,e[11]=(v*f*l-d*_*l-v*r*m+t*_*m+d*r*M-t*f*M)*O,e[12]=U*O,e[13]=(v*C*o-T*_*o+T*r*S-t*C*S-v*r*y+t*_*y)*O,e[14]=(T*f*o-d*C*o-T*r*p+t*C*p+d*r*y-t*f*y)*O,e[15]=(d*_*o-v*f*o+v*r*p-t*_*p-d*r*S+t*f*S)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,d=e.x,f=e.y,p=e.z,m=l*d,v=l*f;return this.set(m*d+r,m*f-o*p,m*p+o*f,0,m*f+o*p,v*f+r,v*p-o*d,0,m*p-o*f,v*p+o*d,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,d){return this.set(1,r,l,0,e,1,d,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,d=t._y,f=t._z,p=t._w,m=l+l,v=d+d,_=f+f,S=l*m,M=l*v,T=l*_,C=d*v,y=d*_,x=f*_,A=p*m,L=p*v,P=p*_,U=r.x,D=r.y,O=r.z;return o[0]=(1-(C+x))*U,o[1]=(M+P)*U,o[2]=(T-L)*U,o[3]=0,o[4]=(M-P)*D,o[5]=(1-(S+x))*D,o[6]=(y+A)*D,o[7]=0,o[8]=(T+L)*O,o[9]=(y-A)*O,o[10]=(1-(S+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;if(e.x=o[12],e.y=o[13],e.z=o[14],this.determinant()===0)return r.set(1,1,1),t.identity(),this;let l=ea.set(o[0],o[1],o[2]).length();const d=ea.set(o[4],o[5],o[6]).length(),f=ea.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),wi.copy(this);const m=1/l,v=1/d,_=1/f;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=_,wi.elements[9]*=_,wi.elements[10]*=_,t.setFromRotationMatrix(wi),r.x=l,r.y=d,r.z=f,this}makePerspective(e,t,r,o,l,d,f=Gi,p=!1){const m=this.elements,v=2*l/(t-e),_=2*l/(r-o),S=(t+e)/(t-e),M=(r+o)/(r-o);let T,C;if(p)T=l/(d-l),C=d*l/(d-l);else if(f===Gi)T=-(d+l)/(d-l),C=-2*d*l/(d-l);else if(f===tc)T=-d/(d-l),C=-d*l/(d-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,o,l,d,f=Gi,p=!1){const m=this.elements,v=2/(t-e),_=2/(r-o),S=-(t+e)/(t-e),M=-(r+o)/(r-o);let T,C;if(p)T=1/(d-l),C=d/(d-l);else if(f===Gi)T=-2/(d-l),C=-(d+l)/(d-l);else if(f===tc)T=-1/(d-l),C=-l/(d-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=T,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ea=new Q,wi=new nn,A_=new Q(0,0,0),C_=new Q(1,1,1),Hr=new Q,Rl=new Q,ai=new Q,Um=new nn,Om=new bs;class Yi{constructor(e=0,t=0,r=0,o=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],d=o[4],f=o[8],p=o[1],m=o[5],v=o[9],_=o[2],S=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-d,l)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Pt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(Pt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Pt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:_t("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Um,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Om.setFromEuler(this),this.setFromQuaternion(Om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Uf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R_=0;const Fm=new Q,ta=new bs,lr=new nn,Nl=new Q,io=new Q,N_=new Q,P_=new bs,km=new Q(1,0,0),Bm=new Q(0,1,0),zm=new Q(0,0,1),jm={type:"added"},D_={type:"removed"},na={type:"childadded",child:null},ed={type:"childremoved",child:null};class Mn extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R_++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Q,t=new Yi,r=new bs,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new Mt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Uf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.multiply(ta),this}rotateOnWorldAxis(e,t){return ta.setFromAxisAngle(e,t),this.quaternion.premultiply(ta),this}rotateX(e){return this.rotateOnAxis(km,e)}rotateY(e){return this.rotateOnAxis(Bm,e)}rotateZ(e){return this.rotateOnAxis(zm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(km,e)}translateY(e){return this.translateOnAxis(Bm,e)}translateZ(e){return this.translateOnAxis(zm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(lr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Nl.copy(e):Nl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?lr.lookAt(io,Nl,this.up):lr.lookAt(Nl,io,this.up),this.quaternion.setFromRotationMatrix(lr),o&&(lr.extractRotation(o.matrixWorld),ta.setFromRotationMatrix(lr),this.quaternion.premultiply(ta.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jm),na.child=e,this.dispatchEvent(na),na.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D_),ed.child=e,this.dispatchEvent(ed),ed.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),lr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),lr.multiply(e.parent.matrixWorld)),e.applyMatrix4(lr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jm),na.child=e,this.dispatchEvent(na),na.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,N_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,P_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,d=o.length;l<d;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(l(e.materials,this.material[p]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),_=d(e.shapes),S=d(e.skeletons),M=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),M.length>0&&(r.animations=M),T.length>0&&(r.nodes=T)}return r.object=o,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new Q,cr=new Q,td=new Q,ur=new Q,ia=new Q,ra=new Q,Vm=new Q,nd=new Q,id=new Q,rd=new Q,sd=new sn,ad=new sn,od=new sn;class Ai{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ti.subVectors(e,t),o.cross(Ti);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ti.subVectors(o,t),cr.subVectors(r,t),td.subVectors(e,t);const d=Ti.dot(Ti),f=Ti.dot(cr),p=Ti.dot(td),m=cr.dot(cr),v=cr.dot(td),_=d*m-f*f;if(_===0)return l.set(0,0,0),null;const S=1/_,M=(m*p-f*v)*S,T=(d*v-f*p)*S;return l.set(1-M-T,T,M)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,ur)===null?!1:ur.x>=0&&ur.y>=0&&ur.x+ur.y<=1}static getInterpolation(e,t,r,o,l,d,f,p){return this.getBarycoord(e,t,r,o,ur)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,ur.x),p.addScaledVector(d,ur.y),p.addScaledVector(f,ur.z),p)}static getInterpolatedAttribute(e,t,r,o,l,d){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(sd,l.x),d.addScaledVector(ad,l.y),d.addScaledVector(od,l.z),d}static isFrontFacing(e,t,r,o){return Ti.subVectors(r,t),cr.subVectors(e,t),Ti.cross(cr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),cr.subVectors(this.a,this.b),Ti.cross(cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ai.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let d,f;ia.subVectors(o,r),ra.subVectors(l,r),nd.subVectors(e,r);const p=ia.dot(nd),m=ra.dot(nd);if(p<=0&&m<=0)return t.copy(r);id.subVectors(e,o);const v=ia.dot(id),_=ra.dot(id);if(v>=0&&_<=v)return t.copy(o);const S=p*_-v*m;if(S<=0&&p>=0&&v<=0)return d=p/(p-v),t.copy(r).addScaledVector(ia,d);rd.subVectors(e,l);const M=ia.dot(rd),T=ra.dot(rd);if(T>=0&&M<=T)return t.copy(l);const C=M*m-p*T;if(C<=0&&m>=0&&T<=0)return f=m/(m-T),t.copy(r).addScaledVector(ra,f);const y=v*T-M*_;if(y<=0&&_-v>=0&&M-T>=0)return Vm.subVectors(l,o),f=(_-v)/(_-v+(M-T)),t.copy(o).addScaledVector(Vm,f);const x=1/(y+C+S);return d=C*x,f=S*x,t.copy(r).addScaledVector(ia,d).addScaledVector(ra,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const J0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wr={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function ld(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class wt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Bt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Bt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Bt.workingColorSpace){if(e=v_(e,1),t=Pt(t,0,1),r=Pt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,d=2*r-l;this.r=ld(d,l,e+1/3),this.g=ld(d,l,e),this.b=ld(d,l,e-1/3)}return Bt.colorSpaceToWorking(this,o),this}setStyle(e,t=On){function r(l){l!==void 0&&parseFloat(l)<1&&_t("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:_t("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],d=l.length;if(d===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(l,16),t);_t("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const r=J0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):_t("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=ha(e.r),this.g=ha(e.g),this.b=ha(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return Bt.workingToColorSpace(In.copy(this),e),Math.round(Pt(In.r*255,0,255))*65536+Math.round(Pt(In.g*255,0,255))*256+Math.round(Pt(In.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Bt.workingColorSpace){Bt.workingToColorSpace(In.copy(this),t);const r=In.r,o=In.g,l=In.b,d=Math.max(r,o,l),f=Math.min(r,o,l);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const _=d-f;switch(m=v<=.5?_/(d+f):_/(2-d-f),d){case r:p=(o-l)/_+(o<l?6:0);break;case o:p=(l-r)/_+2;break;case l:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Bt.workingColorSpace){return Bt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=On){Bt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,o=In.b;return e!==On?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Wr),this.setHSL(Wr.h+e,Wr.s+t,Wr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Wr),e.getHSL(Pl);const r=Hu(Wr.h,Pl.h,t),o=Hu(Wr.s,Pl.s,t),l=Hu(Wr.l,Pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new wt;wt.NAMES=J0;let L_=0;class So extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=fa,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=pa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){_t(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){_t(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==fa&&(r.blending=this.blending),this.side!==Zr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==pa&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(r.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const d=[];for(const f in l){const p=l[f];delete p.metadata,d.push(p)}return d}if(t){const l=o(e.textures),d=o(e.images);l.length>0&&(r.textures=l),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ci extends So{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=U0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=new Q,Dl=new mt;let I_=0;class Xi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Cm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=eo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),r=Qn(r,this.array),o=Qn(o,this.array),l=Qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cm&&(e.usage=this.usage),e}}class eg extends Xi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class tg extends Xi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class En extends Xi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let U_=0;const gi=new nn,cd=new Mn,sa=new Q,oi=new yo,ro=new yo,Sn=new Q;class xi extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z0(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new Mt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,r){return gi.makeTranslation(e,t,r),this.applyMatrix4(gi),this}scale(e,t,r){return gi.makeScale(e,t,r),this.applyMatrix4(gi),this}lookAt(e){return cd.lookAt(e),cd.updateMatrix(),this.applyMatrix4(cd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sa).negate(),this.translate(sa.x,sa.y,sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new En(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&_t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];oi.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),t)for(let l=0,d=t.length;l<d;l++){const f=t[l];ro.setFromBufferAttribute(f),this.morphTargetsRelative?(Sn.addVectors(oi.min,ro.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,ro.max),oi.expandByPoint(Sn)):(oi.expandByPoint(ro.min),oi.expandByPoint(ro.max))}oi.getCenter(r);let o=0;for(let l=0,d=e.count;l<d;l++)Sn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Sn));if(t)for(let l=0,d=t.length;l<d;l++){const f=t[l],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)Sn.fromBufferAttribute(f,m),p&&(sa.fromBufferAttribute(e,m),Sn.add(sa)),o=Math.max(o,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],p=[];for(let z=0;z<r.count;z++)f[z]=new Q,p[z]=new Q;const m=new Q,v=new Q,_=new Q,S=new mt,M=new mt,T=new mt,C=new Q,y=new Q;function x(z,w,N){m.fromBufferAttribute(r,z),v.fromBufferAttribute(r,w),_.fromBufferAttribute(r,N),S.fromBufferAttribute(l,z),M.fromBufferAttribute(l,w),T.fromBufferAttribute(l,N),v.sub(m),_.sub(m),M.sub(S),T.sub(S);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(B),y.copy(_).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(B),f[z].add(C),f[w].add(C),f[N].add(C),p[z].add(y),p[w].add(y),p[N].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let z=0,w=A.length;z<w;++z){const N=A[z],B=N.start,Y=N.count;for(let K=B,ae=B+Y;K<ae;K+=3)x(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new Q,P=new Q,U=new Q,D=new Q;function O(z){U.fromBufferAttribute(o,z),D.copy(U);const w=f[z];L.copy(w),L.sub(U.multiplyScalar(U.dot(w))).normalize(),P.crossVectors(D,w);const B=P.dot(p[z])<0?-1:1;d.setXYZW(z,L.x,L.y,L.z,B)}for(let z=0,w=A.length;z<w;++z){const N=A[z],B=N.start,Y=N.count;for(let K=B,ae=B+Y;K<ae;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Xi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let S=0,M=r.count;S<M;S++)r.setXYZ(S,0,0,0);const o=new Q,l=new Q,d=new Q,f=new Q,p=new Q,m=new Q,v=new Q,_=new Q;if(e)for(let S=0,M=e.count;S<M;S+=3){const T=e.getX(S+0),C=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),d.fromBufferAttribute(t,y),v.subVectors(d,l),_.subVectors(o,l),v.cross(_),f.fromBufferAttribute(r,T),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,y),f.add(v),p.add(v),m.add(v),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=t.count;S<M;S+=3)o.fromBufferAttribute(t,S+0),l.fromBufferAttribute(t,S+1),d.fromBufferAttribute(t,S+2),v.subVectors(d,l),_.subVectors(o,l),v.cross(_),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,_=f.normalized,S=new m.constructor(p.length*v);let M=0,T=0;for(let C=0,y=p.length;C<y;C++){f.isInterleavedBufferAttribute?M=p[C]*f.data.stride+f.offset:M=p[C]*v;for(let x=0;x<v;x++)S[T++]=m[M++]}return new Xi(S,v,_)}if(this.index===null)return _t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xi,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],m=e(p,r);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const p=[],m=l[f];for(let v=0,_=m.length;v<_;v++){const S=m[v],M=e(S,r);p.push(M)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let l=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(t))}const l=e.morphAttributes;for(const m in l){const v=[],_=l[m];for(let S=0,M=_.length;S<M;S++)v.push(_[S].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const _=d[m];this.addGroup(_.start,_.count,_.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gm=new nn,ms=new If,Ll=new Lf,Hm=new Q,Il=new Q,Ul=new Q,Ol=new Q,ud=new Q,Fl=new Q,Wm=new Q,kl=new Q;class et extends Mn{constructor(e=new xi,t=new Ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,d=o.length;l<d;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Fl.set(0,0,0);for(let p=0,m=l.length;p<m;p++){const v=f[p],_=l[p];v!==0&&(ud.fromBufferAttribute(_,e),d?Fl.addScaledVector(ud,v):Fl.addScaledVector(ud.sub(t),v))}t.add(Fl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ll.copy(r.boundingSphere),Ll.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Ll.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Ll,Hm)===null||ms.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Gm.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Gm),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,d=this.material,f=l.index,p=l.attributes.position,m=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,S=l.groups,M=l.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],x=d[y.materialIndex],A=Math.max(y.start,M.start),L=Math.min(f.count,Math.min(y.start+y.count,M.start+M.count));for(let P=A,U=L;P<U;P+=3){const D=f.getX(P),O=f.getX(P+1),z=f.getX(P+2);o=Bl(this,x,e,r,m,v,_,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let y=T,x=C;y<x;y+=3){const A=f.getX(y),L=f.getX(y+1),P=f.getX(y+2);o=Bl(this,d,e,r,m,v,_,A,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let T=0,C=S.length;T<C;T++){const y=S[T],x=d[y.materialIndex],A=Math.max(y.start,M.start),L=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let P=A,U=L;P<U;P+=3){const D=P,O=P+1,z=P+2;o=Bl(this,x,e,r,m,v,_,D,O,z),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=T,x=C;y<x;y+=3){const A=y,L=y+1,P=y+2;o=Bl(this,d,e,r,m,v,_,A,L,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function O_(s,e,t,r,o,l,d,f){let p;if(e.side===ei?p=r.intersectTriangle(d,l,o,!0,f):p=r.intersectTriangle(o,l,d,e.side===Zr,f),p===null)return null;kl.copy(f),kl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(kl);return m<t.near||m>t.far?null:{distance:m,point:kl.clone(),object:s}}function Bl(s,e,t,r,o,l,d,f,p,m){s.getVertexPosition(f,Il),s.getVertexPosition(p,Ul),s.getVertexPosition(m,Ol);const v=O_(s,e,t,r,Il,Ul,Ol,Wm);if(v){const _=new Q;Ai.getBarycoord(Wm,Il,Ul,Ol,_),o&&(v.uv=Ai.getInterpolatedAttribute(o,f,p,m,_,new mt)),l&&(v.uv1=Ai.getInterpolatedAttribute(l,f,p,m,_,new mt)),d&&(v.normal=Ai.getInterpolatedAttribute(d,f,p,m,_,new Q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:f,b:p,c:m,normal:new Q,materialIndex:0};Ai.getNormal(Il,Ul,Ol,S.normal),v.face=S,v.barycoord=_}return v}class $t extends xi{constructor(e=1,t=1,r=1,o=1,l=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:d};const f=this;o=Math.floor(o),l=Math.floor(l),d=Math.floor(d);const p=[],m=[],v=[],_=[];let S=0,M=0;T("z","y","x",-1,-1,r,t,e,d,l,0),T("z","y","x",1,-1,r,t,-e,d,l,1),T("x","z","y",1,1,e,r,t,o,d,2),T("x","z","y",1,-1,e,r,-t,o,d,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(p),this.setAttribute("position",new En(m,3)),this.setAttribute("normal",new En(v,3)),this.setAttribute("uv",new En(_,2));function T(C,y,x,A,L,P,U,D,O,z,w){const N=P/O,B=U/z,Y=P/2,K=U/2,ae=D/2,le=O+1,ne=z+1;let Z=0,W=0;const he=new Q;for(let oe=0;oe<ne;oe++){const k=oe*B-K;for(let se=0;se<le;se++){const Ce=se*N-Y;he[C]=Ce*A,he[y]=k*L,he[x]=ae,m.push(he.x,he.y,he.z),he[C]=0,he[y]=0,he[x]=D>0?1:-1,v.push(he.x,he.y,he.z),_.push(se/O),_.push(1-oe/z),Z+=1}}for(let oe=0;oe<z;oe++)for(let k=0;k<O;k++){const se=S+k+le*oe,Ce=S+k+le*(oe+1),He=S+(k+1)+le*(oe+1),Ze=S+(k+1)+le*oe;p.push(se,Ce,Ze),p.push(Ce,He,Ze),W+=6}f.addGroup(M,W,w),M+=W,S+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function va(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(_t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Gn(s){const e={};for(let t=0;t<s.length;t++){const r=va(s[t]);for(const o in r)e[o]=r[o]}return e}function F_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ng(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Bt.workingColorSpace}const k_={clone:va,merge:Gn};var B_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends So{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B_,this.fragmentShader=z_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=va(e.uniforms),this.uniformsGroups=F_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?t.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[o]={type:"m4",value:d.toArray()}:t.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ig extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xr=new Q,Xm=new mt,qm=new mt;class Wn extends ig{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=nc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return nc*2*Math.atan(Math.tan(Kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z),Xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xr.x,Xr.y).multiplyScalar(-e/Xr.z)}getViewSize(e,t){return this.getViewBounds(e,Xm,qm),t.subVectors(qm,Xm)}setViewOffset(e,t,r,o,l,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Kl*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;l+=d.offsetX*o/p,t-=d.offsetY*r/m,o*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const aa=-90,oa=1;class j_ extends Mn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Wn(aa,oa,e,t);o.layers=this.layers,this.add(o);const l=new Wn(aa,oa,e,t);l.layers=this.layers,this.add(l);const d=new Wn(aa,oa,e,t);d.layers=this.layers,this.add(d);const f=new Wn(aa,oa,e,t);f.layers=this.layers,this.add(f);const p=new Wn(aa,oa,e,t);p.layers=this.layers,this.add(p);const m=new Wn(aa,oa,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,d,f,p]=t;for(const m of t)this.remove(m);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,d,f,p,m,v]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,d),e.setRenderTarget(r,2,o),e.render(t,f),e.setRenderTarget(r,3,o),e.render(t,p),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(_,S,M),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class rg extends Cn{constructor(e=[],t=Es,r,o,l,d,f,p,m,v){super(e,t,r,o,l,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sg extends Wi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new rg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new $t(5,5,5),l=new $i({name:"CubemapFromEquirect",uniforms:va(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:pr});l.uniforms.tEquirect.value=t;const d=new et(o,l),f=t.minFilter;return t.minFilter===Ss&&(t.minFilter=kn),new j_(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,o);e.setRenderTarget(l)}}class Un extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V_={type:"move"};class dd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),x=this._getHandJoint(m,C);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=v.position.distanceTo(_.position),M=.02,T=.005;m.inputState.pinching&&S>M+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(V_)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Un;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class Of{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new wt(e),this.density=t}clone(){return new Of(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ag extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class G_ extends Cn{constructor(e=null,t=1,r=1,o,l,d,f,p,m=An,v=An,_,S){super(null,d,f,p,m,v,o,l,_,S),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fd=new Q,H_=new Q,W_=new Mt;class Yr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=fd.subVectors(r,t).cross(H_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(fd),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||W_.getNormalMatrix(e),o=this.coplanarPoint(fd).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Lf,X_=new mt(.5,.5),zl=new Q;class Ff{constructor(e=new Yr,t=new Yr,r=new Yr,o=new Yr,l=new Yr,d=new Yr){this.planes=[e,t,r,o,l,d]}set(e,t,r,o,l,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi,r=!1){const o=this.planes,l=e.elements,d=l[0],f=l[1],p=l[2],m=l[3],v=l[4],_=l[5],S=l[6],M=l[7],T=l[8],C=l[9],y=l[10],x=l[11],A=l[12],L=l[13],P=l[14],U=l[15];if(o[0].setComponents(m-d,M-v,x-T,U-A).normalize(),o[1].setComponents(m+d,M+v,x+T,U+A).normalize(),o[2].setComponents(m+f,M+_,x+C,U+L).normalize(),o[3].setComponents(m-f,M-_,x-C,U-L).normalize(),r)o[4].setComponents(p,S,y,P).normalize(),o[5].setComponents(m-p,M-S,x-y,U-P).normalize();else if(o[4].setComponents(m-p,M-S,x-y,U-P).normalize(),t===Gi)o[5].setComponents(m+p,M+S,x+y,U+P).normalize();else if(t===tc)o[5].setComponents(p,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=X_.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q_ extends Cn{constructor(e,t,r,o,l,d,f,p,m){super(e,t,r,o,l,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends Cn{constructor(e,t,r=qi,o,l,d,f=An,p=An,m,v=xr,_=1){if(v!==xr&&v!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:t,depth:_};super(S,o,l,d,f,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Y_ extends xo{constructor(e,t=qi,r=Es,o,l,d=An,f=An,p,m=xr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,o,l,d,f,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class og extends Cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fn extends xi{constructor(e=1,t=1,r=1,o=32,l=1,d=!1,f=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:d,thetaStart:f,thetaLength:p};const m=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],S=[],M=[];let T=0;const C=[],y=r/2;let x=0;A(),d===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(v),this.setAttribute("position",new En(_,3)),this.setAttribute("normal",new En(S,3)),this.setAttribute("uv",new En(M,2));function A(){const P=new Q,U=new Q;let D=0;const O=(t-e)/r;for(let z=0;z<=l;z++){const w=[],N=z/l,B=N*(t-e)+e;for(let Y=0;Y<=o;Y++){const K=Y/o,ae=K*p+f,le=Math.sin(ae),ne=Math.cos(ae);U.x=B*le,U.y=-N*r+y,U.z=B*ne,_.push(U.x,U.y,U.z),P.set(le,O,ne).normalize(),S.push(P.x,P.y,P.z),M.push(K,1-N),w.push(T++)}C.push(w)}for(let z=0;z<o;z++)for(let w=0;w<l;w++){const N=C[w][z],B=C[w+1][z],Y=C[w+1][z+1],K=C[w][z+1];(e>0||w!==0)&&(v.push(N,B,K),D+=3),(t>0||w!==l-1)&&(v.push(B,Y,K),D+=3)}m.addGroup(x,D,0),x+=D}function L(P){const U=T,D=new mt,O=new Q;let z=0;const w=P===!0?e:t,N=P===!0?1:-1;for(let Y=1;Y<=o;Y++)_.push(0,y*N,0),S.push(0,N,0),M.push(.5,.5),T++;const B=T;for(let Y=0;Y<=o;Y++){const ae=Y/o*p+f,le=Math.cos(ae),ne=Math.sin(ae);O.x=w*ne,O.y=y*N,O.z=w*le,_.push(O.x,O.y,O.z),S.push(0,N,0),D.x=le*.5+.5,D.y=ne*.5*N+.5,M.push(D.x,D.y),T++}for(let Y=0;Y<o;Y++){const K=U+Y,ae=B+Y;P===!0?v.push(ae,ae+1,K):v.push(ae+1,ae,K),z+=3}m.addGroup(x,z,P===!0?1:2),x+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class kf extends Fn{constructor(e=1,t=1,r=32,o=1,l=!1,d=0,f=Math.PI*2){super(0,e,t,r,o,l,d,f),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:d,thetaLength:f}}static fromJSON(e){return new kf(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Bf extends xi{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],d=[];f(o),m(r),v(),this.setAttribute("position",new En(l,3)),this.setAttribute("normal",new En(l.slice(),3)),this.setAttribute("uv",new En(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(A){const L=new Q,P=new Q,U=new Q;for(let D=0;D<t.length;D+=3)M(t[D+0],L),M(t[D+1],P),M(t[D+2],U),p(L,P,U,A)}function p(A,L,P,U){const D=U+1,O=[];for(let z=0;z<=D;z++){O[z]=[];const w=A.clone().lerp(P,z/D),N=L.clone().lerp(P,z/D),B=D-z;for(let Y=0;Y<=B;Y++)Y===0&&z===D?O[z][Y]=w:O[z][Y]=w.clone().lerp(N,Y/B)}for(let z=0;z<D;z++)for(let w=0;w<2*(D-z)-1;w++){const N=Math.floor(w/2);w%2===0?(S(O[z][N+1]),S(O[z+1][N]),S(O[z][N])):(S(O[z][N+1]),S(O[z+1][N+1]),S(O[z+1][N]))}}function m(A){const L=new Q;for(let P=0;P<l.length;P+=3)L.x=l[P+0],L.y=l[P+1],L.z=l[P+2],L.normalize().multiplyScalar(A),l[P+0]=L.x,l[P+1]=L.y,l[P+2]=L.z}function v(){const A=new Q;for(let L=0;L<l.length;L+=3){A.x=l[L+0],A.y=l[L+1],A.z=l[L+2];const P=y(A)/2/Math.PI+.5,U=x(A)/Math.PI+.5;d.push(P,1-U)}T(),_()}function _(){for(let A=0;A<d.length;A+=6){const L=d[A+0],P=d[A+2],U=d[A+4],D=Math.max(L,P,U),O=Math.min(L,P,U);D>.9&&O<.1&&(L<.2&&(d[A+0]+=1),P<.2&&(d[A+2]+=1),U<.2&&(d[A+4]+=1))}}function S(A){l.push(A.x,A.y,A.z)}function M(A,L){const P=A*3;L.x=e[P+0],L.y=e[P+1],L.z=e[P+2]}function T(){const A=new Q,L=new Q,P=new Q,U=new Q,D=new mt,O=new mt,z=new mt;for(let w=0,N=0;w<l.length;w+=9,N+=6){A.set(l[w+0],l[w+1],l[w+2]),L.set(l[w+3],l[w+4],l[w+5]),P.set(l[w+6],l[w+7],l[w+8]),D.set(d[N+0],d[N+1]),O.set(d[N+2],d[N+3]),z.set(d[N+4],d[N+5]),U.copy(A).add(L).add(P).divideScalar(3);const B=y(U);C(D,N+0,A,B),C(O,N+2,L,B),C(z,N+4,P,B)}}function C(A,L,P,U){U<0&&A.x===1&&(d[L]=A.x-1),P.x===0&&P.z===0&&(d[L]=U/2/Math.PI+.5)}function y(A){return Math.atan2(A.z,-A.x)}function x(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.vertices,e.indices,e.radius,e.detail)}}class zf extends Bf{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=1/r,l=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(l,d,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zf(e.radius,e.detail)}}class Hn extends xi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,d=t/2,f=Math.floor(r),p=Math.floor(o),m=f+1,v=p+1,_=e/f,S=t/p,M=[],T=[],C=[],y=[];for(let x=0;x<v;x++){const A=x*S-d;for(let L=0;L<m;L++){const P=L*_-l;T.push(P,-A,0),C.push(0,0,1),y.push(L/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let A=0;A<f;A++){const L=A+m*x,P=A+m*(x+1),U=A+1+m*(x+1),D=A+1+m*x;M.push(L,P,D),M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hn(e.width,e.height,e.widthSegments,e.heightSegments)}}class fo extends xi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,d=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:d,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const p=Math.min(d+f,Math.PI);let m=0;const v=[],_=new Q,S=new Q,M=[],T=[],C=[],y=[];for(let x=0;x<=r;x++){const A=[],L=x/r;let P=0;x===0&&d===0?P=.5/t:x===r&&p===Math.PI&&(P=-.5/t);for(let U=0;U<=t;U++){const D=U/t;_.x=-e*Math.cos(o+D*l)*Math.sin(d+L*f),_.y=e*Math.cos(d+L*f),_.z=e*Math.sin(o+D*l)*Math.sin(d+L*f),T.push(_.x,_.y,_.z),S.copy(_).normalize(),C.push(S.x,S.y,S.z),y.push(D+P,1-L),A.push(m++)}v.push(A)}for(let x=0;x<r;x++)for(let A=0;A<t;A++){const L=v[x][A+1],P=v[x][A],U=v[x+1][A],D=v[x+1][A+1];(x!==0||d>0)&&M.push(L,P,D),(x!==r-1||p<Math.PI)&&M.push(P,U,D)}this.setIndex(M),this.setAttribute("position",new En(T,3)),this.setAttribute("normal",new En(C,3)),this.setAttribute("uv",new En(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class $_ extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wt extends So{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class K_ extends So{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends So{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Q_{constructor(e,t,r){const o=this;let l=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,l===!1&&o.onStart!==void 0&&o.onStart(v,d,f),l=!0},this.itemEnd=function(v){d++,o.onProgress!==void 0&&o.onProgress(v,d,f),d===f&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,_){return m.push(v,_),this},this.removeHandler=function(v){const _=m.indexOf(v);return _!==-1&&m.splice(_,2),this},this.getHandler=function(v){for(let _=0,S=m.length;_<S;_+=2){const M=m[_],T=m[_+1];if(M.global&&(M.lastIndex=0),M.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const J_=new Q_;class jf{constructor(e){this.manager=e!==void 0?e:J_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(o,l){r.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jf.DEFAULT_MATERIAL_NAME="__DEFAULT";const la=new WeakMap;class e1 extends jf{constructor(e){super(e)}load(e,t,r,o){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=this,d=hd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)l.manager.itemStart(e),setTimeout(function(){t&&t(d),l.manager.itemEnd(e)},0);else{let _=la.get(d);_===void 0&&(_=[],la.set(d,_)),_.push({onLoad:t,onError:o})}return d}const f=mo("img");function p(){v(),t&&t(this);const _=la.get(this)||[];for(let S=0;S<_.length;S++){const M=_[S];M.onLoad&&M.onLoad(this)}la.delete(this),l.manager.itemEnd(e)}function m(_){v(),o&&o(_),hd.remove(`image:${e}`);const S=la.get(this)||[];for(let M=0;M<S.length;M++){const T=S[M];T.onError&&T.onError(_)}la.delete(this),l.manager.itemError(e),l.manager.itemEnd(e)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),hd.add(`image:${e}`,f),l.manager.itemStart(e),f.src=e,f}}class lg extends jf{constructor(e){super(e)}load(e,t,r,o){const l=new Cn,d=new e1(this.manager);return d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){l.image=f,l.needsUpdate=!0,t!==void 0&&t(l)},r,o),l}}class ac extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const pd=new nn,Ym=new Q,$m=new Q;class Vf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ff,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Ym.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ym),$m.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($m),t.updateMatrixWorld(),pd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(pd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class t1 extends Vf{constructor(){super(new Wn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=nc*2*e.angle*this.focus,o=this.mapSize.width/this.mapSize.height*this.aspect,l=e.distance||t.far;(r!==t.fov||o!==t.aspect||l!==t.far)&&(t.fov=r,t.aspect=o,t.far=l,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class n1 extends ac{constructor(e,t,r=0,o=Math.PI/3,l=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.distance=r,this.angle=o,this.penumbra=l,this.decay=d,this.map=null,this.shadow=new t1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class i1 extends Vf{constructor(){super(new Wn(90,1,.5,500)),this.isPointLightShadow=!0}}class Km extends ac{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new i1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Gf extends ig{constructor(e=-1,t=1,r=1,o=-1,l=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,d=r+e,f=o+t,p=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,d=l+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class r1 extends Vf{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xf extends ac{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new r1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class cg extends ac{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class s1 extends Wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class a1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const Zm=new nn;class ug{constructor(e,t,r=0,o=1/0){this.ray=new If(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Uf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):kt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zm),this}intersectObject(e,t=!0,r=[]){return vf(e,this,r,t),r.sort(Qm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)vf(e[o],this,r,t);return r.sort(Qm),r}}function Qm(s,e){return s.distance-e.distance}function vf(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let d=0,f=l.length;d<f;d++)vf(l[d],e,t,!0)}}class Jm{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o1 extends ws{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){_t("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function e0(s,e,t,r){const o=l1(r);switch(t){case q0:return s*e;case $0:return s*e/o.components*o.byteLength;case Af:return s*e/o.components*o.byteLength;case ga:return s*e*2/o.components*o.byteLength;case Cf:return s*e*2/o.components*o.byteLength;case Y0:return s*e*3/o.components*o.byteLength;case Ri:return s*e*4/o.components*o.byteLength;case Rf:return s*e*4/o.components*o.byteLength;case Xl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case $l:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bd:case jd:return Math.max(s,16)*Math.max(e,8)/4;case kd:case zd:return Math.max(s,8)*Math.max(e,8)/2;case Vd:case Gd:case Wd:case Xd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hd:case qd:case Yd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ef:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case uf:case df:case ff:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hf:case pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case mf:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function l1(s){switch(s){case li:case G0:return{byteLength:1,components:1};case ho:case H0:case gr:return{byteLength:2,components:1};case wf:case Tf:return{byteLength:2,components:4};case qi:case bf:case Vi:return{byteLength:4,components:1};case W0:case X0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mf}}));typeof window<"u"&&(window.__THREE__?_t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mf);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let s=null,e=!1,t=null,r=null;function o(l,d){t(l,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function c1(s){const e=new WeakMap;function t(f,p){const m=f.array,v=f.usage,_=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,v),f.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:_}}function r(f,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,f),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,T)=>M.start-T.start);let S=0;for(let M=1;M<_.length;M++){const T=_[S],C=_[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++S,_[S]=C)}_.length=S+1;for(let M=0,T=_.length;M<T;M++){const C=_[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:o,remove:l,update:d}}var u1=`#ifdef USE_ALPHAHASH
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
#endif`,b1=`#ifdef USE_BUMPMAP
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
#endif`,w1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,H1=`#ifdef USE_ENVMAP
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
#endif`,by=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Gy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hy=`#ifdef USE_ROUGHNESSMAP
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
}`,bS=`uniform vec3 diffuse;
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
}`,wS=`#define LAMBERT
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
}`,bt={alphahash_fragment:u1,alphahash_pars_fragment:d1,alphamap_fragment:f1,alphamap_pars_fragment:h1,alphatest_fragment:p1,alphatest_pars_fragment:m1,aomap_fragment:g1,aomap_pars_fragment:x1,batching_pars_vertex:v1,batching_vertex:_1,begin_vertex:y1,beginnormal_vertex:S1,bsdfs:M1,iridescence_fragment:E1,bumpmap_pars_fragment:b1,clipping_planes_fragment:w1,clipping_planes_pars_fragment:T1,clipping_planes_pars_vertex:A1,clipping_planes_vertex:C1,color_fragment:R1,color_pars_fragment:N1,color_pars_vertex:P1,color_vertex:D1,common:L1,cube_uv_reflection_fragment:I1,defaultnormal_vertex:U1,displacementmap_pars_vertex:O1,displacementmap_vertex:F1,emissivemap_fragment:k1,emissivemap_pars_fragment:B1,colorspace_fragment:z1,colorspace_pars_fragment:j1,envmap_fragment:V1,envmap_common_pars_fragment:G1,envmap_pars_fragment:H1,envmap_pars_vertex:W1,envmap_physical_pars_fragment:ny,envmap_vertex:X1,fog_vertex:q1,fog_pars_vertex:Y1,fog_fragment:$1,fog_pars_fragment:K1,gradientmap_pars_fragment:Z1,lightmap_pars_fragment:Q1,lights_lambert_fragment:J1,lights_lambert_pars_fragment:ey,lights_pars_begin:ty,lights_toon_fragment:iy,lights_toon_pars_fragment:ry,lights_phong_fragment:sy,lights_phong_pars_fragment:ay,lights_physical_fragment:oy,lights_physical_pars_fragment:ly,lights_fragment_begin:cy,lights_fragment_maps:uy,lights_fragment_end:dy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:py,logdepthbuf_vertex:my,map_fragment:gy,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:My,morphcolor_vertex:Ey,morphnormal_vertex:by,morphtarget_pars_vertex:wy,morphtarget_vertex:Ty,normal_fragment_begin:Ay,normal_fragment_maps:Cy,normal_pars_fragment:Ry,normal_pars_vertex:Ny,normal_vertex:Py,normalmap_pars_fragment:Dy,clearcoat_normal_fragment_begin:Ly,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Uy,iridescence_pars_fragment:Oy,opaque_fragment:Fy,packing:ky,premultiplied_alpha_fragment:By,project_vertex:zy,dithering_fragment:jy,dithering_pars_fragment:Vy,roughnessmap_fragment:Gy,roughnessmap_pars_fragment:Hy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:qy,shadowmask_pars_fragment:Yy,skinbase_vertex:$y,skinning_pars_vertex:Ky,skinning_vertex:Zy,skinnormal_vertex:Qy,specularmap_fragment:Jy,specularmap_pars_fragment:eS,tonemapping_fragment:tS,tonemapping_pars_fragment:nS,transmission_fragment:iS,transmission_pars_fragment:rS,uv_pars_fragment:sS,uv_pars_vertex:aS,uv_vertex:oS,worldpos_vertex:lS,background_vert:cS,background_frag:uS,backgroundCube_vert:dS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:pS,depth_vert:mS,depth_frag:gS,distance_vert:xS,distance_frag:vS,equirect_vert:_S,equirect_frag:yS,linedashed_vert:SS,linedashed_frag:MS,meshbasic_vert:ES,meshbasic_frag:bS,meshlambert_vert:wS,meshlambert_frag:TS,meshmatcap_vert:AS,meshmatcap_frag:CS,meshnormal_vert:RS,meshnormal_frag:NS,meshphong_vert:PS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:IS,meshtoon_vert:US,meshtoon_frag:OS,points_vert:FS,points_frag:kS,shadow_vert:BS,shadow_frag:zS,sprite_vert:jS,sprite_frag:VS},ze={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ji={basic:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:Gn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:Gn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:Gn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new wt(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:Gn([ze.points,ze.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:Gn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:Gn([ze.common,ze.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:Gn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:Gn([ze.sprite,ze.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:Gn([ze.common,ze.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:Gn([ze.lights,ze.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};ji.physical={uniforms:Gn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const jl={r:0,b:0,g:0},xs=new Yi,GS=new nn;function HS(s,e,t,r,o,l,d){const f=new wt(0);let p=l===!0?0:1,m,v,_=null,S=0,M=null;function T(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?t:e).get(P)),P}function C(L){let P=!1;const U=T(L);U===null?x(f,p):U&&U.isColor&&(x(U,1),P=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?r.buffers.color.setClear(0,0,0,1,d):D==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,P){const U=T(P);U&&(U.isCubeTexture||U.mapping===sc)?(v===void 0&&(v=new et(new $t(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:va(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(D,O,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),xs.copy(P.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),v.material.uniforms.envMap.value=U,v.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(xs)),v.material.toneMapped=Bt.getTransfer(U.colorSpace)!==Xt,(_!==U||S!==U.version||M!==s.toneMapping)&&(v.material.needsUpdate=!0,_=U,S=U.version,M=s.toneMapping),v.layers.enableAll(),L.unshift(v,v.geometry,v.material,0,0,null)):U&&U.isTexture&&(m===void 0&&(m=new et(new Hn(2,2),new $i({name:"BackgroundMaterial",uniforms:va(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=U,m.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,m.material.toneMapped=Bt.getTransfer(U.colorSpace)!==Xt,U.matrixAutoUpdate===!0&&U.updateMatrix(),m.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||S!==U.version||M!==s.toneMapping)&&(m.material.needsUpdate=!0,_=U,S=U.version,M=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,P){L.getRGB(jl,ng(s)),r.buffers.color.setClear(jl.r,jl.g,jl.b,P,d)}function A(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(L,P=1){f.set(L),p=P,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(L){p=L,x(f,p)},render:C,addToRenderList:y,dispose:A}}function WS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=S(null);let l=o,d=!1;function f(N,B,Y,K,ae){let le=!1;const ne=_(K,Y,B);l!==ne&&(l=ne,m(l.object)),le=M(N,K,Y,ae),le&&T(N,K,Y,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(le||d)&&(d=!1,P(N,B,Y,K),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function p(){return s.createVertexArray()}function m(N){return s.bindVertexArray(N)}function v(N){return s.deleteVertexArray(N)}function _(N,B,Y){const K=Y.wireframe===!0;let ae=r[N.id];ae===void 0&&(ae={},r[N.id]=ae);let le=ae[B.id];le===void 0&&(le={},ae[B.id]=le);let ne=le[K];return ne===void 0&&(ne=S(p()),le[K]=ne),ne}function S(N){const B=[],Y=[],K=[];for(let ae=0;ae<t;ae++)B[ae]=0,Y[ae]=0,K[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:K,object:N,attributes:{},index:null}}function M(N,B,Y,K){const ae=l.attributes,le=B.attributes;let ne=0;const Z=Y.getAttributes();for(const W in Z)if(Z[W].location>=0){const oe=ae[W];let k=le[W];if(k===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(k=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(k=N.instanceColor)),oe===void 0||oe.attribute!==k||k&&oe.data!==k.data)return!0;ne++}return l.attributesNum!==ne||l.index!==K}function T(N,B,Y,K){const ae={},le=B.attributes;let ne=0;const Z=Y.getAttributes();for(const W in Z)if(Z[W].location>=0){let oe=le[W];oe===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(oe=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(oe=N.instanceColor));const k={};k.attribute=oe,oe&&oe.data&&(k.data=oe.data),ae[W]=k,ne++}l.attributes=ae,l.attributesNum=ne,l.index=K}function C(){const N=l.newAttributes;for(let B=0,Y=N.length;B<Y;B++)N[B]=0}function y(N){x(N,0)}function x(N,B){const Y=l.newAttributes,K=l.enabledAttributes,ae=l.attributeDivisors;Y[N]=1,K[N]===0&&(s.enableVertexAttribArray(N),K[N]=1),ae[N]!==B&&(s.vertexAttribDivisor(N,B),ae[N]=B)}function A(){const N=l.newAttributes,B=l.enabledAttributes;for(let Y=0,K=B.length;Y<K;Y++)B[Y]!==N[Y]&&(s.disableVertexAttribArray(Y),B[Y]=0)}function L(N,B,Y,K,ae,le,ne){ne===!0?s.vertexAttribIPointer(N,B,Y,ae,le):s.vertexAttribPointer(N,B,Y,K,ae,le)}function P(N,B,Y,K){C();const ae=K.attributes,le=Y.getAttributes(),ne=B.defaultAttributeValues;for(const Z in le){const W=le[Z];if(W.location>=0){let he=ae[Z];if(he===void 0&&(Z==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),Z==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),he!==void 0){const oe=he.normalized,k=he.itemSize,se=e.get(he);if(se===void 0)continue;const Ce=se.buffer,He=se.type,Ze=se.bytesPerElement,ie=He===s.INT||He===s.UNSIGNED_INT||he.gpuType===bf;if(he.isInterleavedBufferAttribute){const me=he.data,_e=me.stride,Ne=he.offset;if(me.isInstancedInterleavedBuffer){for(let V=0;V<W.locationSize;V++)x(W.location+V,me.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let V=0;V<W.locationSize;V++)y(W.location+V);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let V=0;V<W.locationSize;V++)L(W.location+V,k/W.locationSize,He,oe,_e*Ze,(Ne+k/W.locationSize*V)*Ze,ie)}else{if(he.isInstancedBufferAttribute){for(let me=0;me<W.locationSize;me++)x(W.location+me,he.meshPerAttribute);N.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let me=0;me<W.locationSize;me++)y(W.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ce);for(let me=0;me<W.locationSize;me++)L(W.location+me,k/W.locationSize,He,oe,k*Ze,k/W.locationSize*me*Ze,ie)}}else if(ne!==void 0){const oe=ne[Z];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(W.location,oe);break;case 3:s.vertexAttrib3fv(W.location,oe);break;case 4:s.vertexAttrib4fv(W.location,oe);break;default:s.vertexAttrib1fv(W.location,oe)}}}}A()}function U(){z();for(const N in r){const B=r[N];for(const Y in B){const K=B[Y];for(const ae in K)v(K[ae].object),delete K[ae];delete B[Y]}delete r[N]}}function D(N){if(r[N.id]===void 0)return;const B=r[N.id];for(const Y in B){const K=B[Y];for(const ae in K)v(K[ae].object),delete K[ae];delete B[Y]}delete r[N.id]}function O(N){for(const B in r){const Y=r[B];if(Y[N.id]===void 0)continue;const K=Y[N.id];for(const ae in K)v(K[ae].object),delete K[ae];delete Y[N.id]}}function z(){w(),d=!0,l!==o&&(l=o,m(l.object))}function w(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:z,resetDefaultState:w,dispose:U,releaseStatesOfGeometry:D,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:y,disableUnusedAttributes:A}}function XS(s,e,t){let r;function o(m){r=m}function l(m,v){s.drawArrays(r,m,v),t.update(v,r,1)}function d(m,v,_){_!==0&&(s.drawArraysInstanced(r,m,v,_),t.update(v,r,_))}function f(m,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,v,0,_);let M=0;for(let T=0;T<_;T++)M+=v[T];t.update(M,r,1)}function p(m,v,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<m.length;T++)d(m[T],v[T],S[T]);else{M.multiDrawArraysInstancedWEBGL(r,m,0,v,0,S,0,_);let T=0;for(let C=0;C<_;C++)T+=v[C]*S[C];t.update(T,r,1)}}this.setMode=o,this.render=l,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function qS(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(O){return!(O!==Ri&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(O){const z=O===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==li&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Vi&&!z)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(_t("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=t.logarithmicDepthBuffer===!0,S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),A=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:P,maxSamples:U,samples:D}}function YS(s){const e=this;let t=null,r=0,o=!1,l=!1;const d=new Yr,f=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||r!==0||o;return o=S,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,S){t=v(_,S,0)},this.setState=function(_,S,M){const T=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||T===null||T.length===0||l&&!y)l?v(null):m();else{const A=l?0:r,L=A*4;let P=x.clippingState||null;p.value=P,P=v(T,S,L,M);for(let U=0;U!==L;++U)P[U]=t[U];x.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=A}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,S,M,T){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=p.value,T!==!0||y===null){const x=M+C*4,A=S.matrixWorldInverse;f.getNormalMatrix(A),(y===null||y.length<x)&&(y=new Float32Array(x));for(let L=0,P=M;L!==C;++L,P+=4)d.copy(_[L]).applyMatrix4(A,f),d.normal.toArray(y,P),y[P+3]=d.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function $S(s){let e=new WeakMap;function t(d,f){return f===Id?d.mapping=Es:f===Ud&&(d.mapping=ma),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===Id||f===Ud)if(e.has(d)){const p=e.get(d).texture;return t(p,d.mapping)}else{const p=d.image;if(p&&p.height>0){const m=new sg(p.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",o),t(m.texture,d.mapping)}else return null}}return d}function o(d){const f=d.target;f.removeEventListener("dispose",o);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Kr=4,t0=[.125,.215,.35,.446,.526,.582],ys=20,KS=256,so=new Gf,n0=new wt;let md=null,gd=0,xd=0,vd=!1;const ZS=new Q;class i0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:d=256,position:f=ZS}=l;md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=a0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,xd),this._renderer.xr.enabled=vd,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Es||e.mapping===ma?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),xd=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:gr,format:Ri,colorSpace:xa,depthBuffer:!1},o=r0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QS(l)),this._blurMaterial=eM(l,e,t),this._ggxMaterial=JS(l,e,t)}return o}_compileMaterial(e){const t=new et(new xi,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,r,o,l){const p=new Wn(90,1,t,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,M=_.toneMapping;_.getClearColor(n0),_.toneMapping=Hi,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new $t,new Ci({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let x=!1;const A=e.background;A?A.isColor&&(y.color.copy(A),e.background=null,x=!0):(y.color.copy(n0),x=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[L],l.y,l.z)):P===1?(p.up.set(0,0,m[L]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[L],l.z)):(p.up.set(0,m[L],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[L]));const U=this._cubeSize;ca(o,P*U,L>2?U:0,U,U),_.setRenderTarget(o),x&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=S,e.background=A}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Es||e.mapping===ma;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=a0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());const l=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=l;const f=l.uniforms;f.envMap.value=e;const p=this._cubeSize;ca(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(d,so)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,m=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),S=0+m*1.25,M=_*S,{_lodMax:T}=this,C=this._sizeLods[r],y=3*C*(r>T-Kr?r-T+Kr:0),x=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=T-t,ca(l,y,x,3*C,2*C),o.setRenderTarget(l),o.render(f,so),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-r,ca(e,y,x,3*C,2*C),o.setRenderTarget(e),o.render(f,so)}_blur(e,t,r,o,l){const d=this._pingPongRenderTarget;this._halfBlur(e,d,t,r,o,"latitudinal",l),this._halfBlur(d,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,d,f){const p=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const S=m.uniforms,M=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ys-1),C=l/T,y=isFinite(l)?1+Math.floor(v*C):ys;y>ys&&_t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const x=[];let A=0;for(let O=0;O<ys;++O){const z=O/C,w=Math.exp(-z*z/2);x.push(w),O===0?A+=w:O<y&&(A+=2*w)}for(let O=0;O<x.length;O++)x[O]=x[O]/A;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=x,S.latitudinal.value=d==="latitudinal",f&&(S.poleAxis.value=f);const{_lodMax:L}=this;S.dTheta.value=T,S.mipInt.value=L-r;const P=this._sizeLods[o],U=3*P*(o>L-Kr?o-L+Kr:0),D=4*(this._cubeSize-P);ca(t,U,D,3*P,2*P),p.setRenderTarget(t),p.render(_,so)}}function QS(s){const e=[],t=[],r=[];let o=s;const l=s-Kr+1+t0.length;for(let d=0;d<l;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-Kr?p=t0[d-s+Kr-1]:d===0&&(p=0),t.push(p);const m=1/(f-2),v=-m,_=1+m,S=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,T=6,C=3,y=2,x=1,A=new Float32Array(C*T*M),L=new Float32Array(y*T*M),P=new Float32Array(x*T*M);for(let D=0;D<M;D++){const O=D%3*2/3-1,z=D>2?0:-1,w=[O,z,0,O+2/3,z,0,O+2/3,z+1,0,O,z,0,O+2/3,z+1,0,O,z+1,0];A.set(w,C*T*D),L.set(S,y*T*D);const N=[D,D,D,D,D,D];P.set(N,x*T*D)}const U=new xi;U.setAttribute("position",new Xi(A,C)),U.setAttribute("uv",new Xi(L,y)),U.setAttribute("faceIndex",new Xi(P,x)),r.push(new et(U,null)),o>Kr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function r0(s,e,t){const r=new Wi(s,e,t);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ca(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function JS(s,e,t){return new $i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:KS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function eM(s,e,t){const r=new Float32Array(ys),o=new Q(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:oc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function s0(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function a0(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function oc(){return`

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
	`}function tM(s){let e=new WeakMap,t=null;function r(f){if(f&&f.isTexture){const p=f.mapping,m=p===Id||p===Ud,v=p===Es||p===ma;if(m||v){let _=e.get(f);const S=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==S)return t===null&&(t=new i0(s)),_=m?t.fromEquirectangular(f,_):t.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),_.texture;if(_!==void 0)return _.texture;{const M=f.image;return m&&M&&M.height>0||v&&M&&o(M)?(t===null&&(t=new i0(s)),_=m?t.fromEquirectangular(f):t.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,e.set(f,_),f.addEventListener("dispose",l),_.texture):null}}}return f}function o(f){let p=0;const m=6;for(let v=0;v<m;v++)f[v]!==void 0&&p++;return p===m}function l(f){const p=f.target;p.removeEventListener("dispose",l);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function d(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:d}}function nM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&go("WebGLRenderer: "+r+" extension not supported."),o}}}function iM(s,e,t,r){const o={},l=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const T in S.attributes)e.remove(S.attributes[T]);S.removeEventListener("dispose",d),delete o[S.id];const M=l.get(S);M&&(e.remove(M),l.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,t.memory.geometries--}function f(_,S){return o[S.id]===!0||(S.addEventListener("dispose",d),o[S.id]=!0,t.memory.geometries++),S}function p(_){const S=_.attributes;for(const M in S)e.update(S[M],s.ARRAY_BUFFER)}function m(_){const S=[],M=_.index,T=_.attributes.position;let C=0;if(M!==null){const A=M.array;C=M.version;for(let L=0,P=A.length;L<P;L+=3){const U=A[L+0],D=A[L+1],O=A[L+2];S.push(U,D,D,O,O,U)}}else if(T!==void 0){const A=T.array;C=T.version;for(let L=0,P=A.length/3-1;L<P;L+=3){const U=L+0,D=L+1,O=L+2;S.push(U,D,D,O,O,U)}}else return;const y=new(Z0(S)?tg:eg)(S,1);y.version=C;const x=l.get(_);x&&e.remove(x),l.set(_,y)}function v(_){const S=l.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return l.get(_)}return{get:f,update:p,getWireframeAttribute:v}}function rM(s,e,t){let r;function o(S){r=S}let l,d;function f(S){l=S.type,d=S.bytesPerElement}function p(S,M){s.drawElements(r,M,l,S*d),t.update(M,r,1)}function m(S,M,T){T!==0&&(s.drawElementsInstanced(r,M,l,S*d,T),t.update(M,r,T))}function v(S,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,l,S,0,T);let y=0;for(let x=0;x<T;x++)y+=M[x];t.update(y,r,1)}function _(S,M,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<S.length;x++)m(S[x]/d,M[x],C[x]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,l,S,0,C,0,T);let x=0;for(let A=0;A<T;A++)x+=M[A]*C[A];t.update(x,r,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function sM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:kt("WebGLInfo: Unknown draw mode:",d);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function aM(s,e,t){const r=new WeakMap,o=new sn;function l(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=v!==void 0?v.length:0;let S=r.get(f);if(S===void 0||S.count!==_){let N=function(){z.dispose(),r.delete(f),f.removeEventListener("dispose",N)};var M=N;S!==void 0&&S.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let P=0;T===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let U=f.attributes.position.count*P,D=1;U>e.maxTextureSize&&(D=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*D*4*_),z=new Q0(O,U,D,_);z.type=Vi,z.needsUpdate=!0;const w=P*4;for(let B=0;B<_;B++){const Y=x[B],K=A[B],ae=L[B],le=U*D*4*B;for(let ne=0;ne<Y.count;ne++){const Z=ne*w;T===!0&&(o.fromBufferAttribute(Y,ne),O[le+Z+0]=o.x,O[le+Z+1]=o.y,O[le+Z+2]=o.z,O[le+Z+3]=0),C===!0&&(o.fromBufferAttribute(K,ne),O[le+Z+4]=o.x,O[le+Z+5]=o.y,O[le+Z+6]=o.z,O[le+Z+7]=0),y===!0&&(o.fromBufferAttribute(ae,ne),O[le+Z+8]=o.x,O[le+Z+9]=o.y,O[le+Z+10]=o.z,O[le+Z+11]=ae.itemSize===4?o.w:1)}}S={count:_,texture:z,size:new mt(U,D)},r.set(f,S),f.addEventListener("dispose",N)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let T=0;for(let y=0;y<m.length;y++)T+=m[y];const C=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:l}}function oM(s,e,t,r){let o=new WeakMap;function l(p){const m=r.render.frame,v=p.geometry,_=e.get(p,v);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==m&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),o.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return _}function d(){o=new WeakMap}function f(p){const m=p.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:d}}const lM={[O0]:"LINEAR_TONE_MAPPING",[F0]:"REINHARD_TONE_MAPPING",[k0]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[z0]:"AGX_TONE_MAPPING",[j0]:"NEUTRAL_TONE_MAPPING",[B0]:"CUSTOM_TONE_MAPPING"};function cM(s,e,t,r,o){const l=new Wi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),d=new Wi(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),f=new xi;f.setAttribute("position",new En([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new En([0,2,0,0,2,0],2));const p=new $_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new et(f,p),v=new Gf(-1,1,1,-1,0,1);let _=null,S=null,M=!1,T,C=null,y=[],x=!1;this.setSize=function(A,L){l.setSize(A,L),d.setSize(A,L);for(let P=0;P<y.length;P++){const U=y[P];U.setSize&&U.setSize(A,L)}},this.setEffects=function(A){y=A,x=y.length>0&&y[0].isRenderPass===!0;const L=l.width,P=l.height;for(let U=0;U<y.length;U++){const D=y[U];D.setSize&&D.setSize(L,P)}},this.begin=function(A,L){if(M||A.toneMapping===Hi&&y.length===0)return!1;if(C=L,L!==null){const P=L.width,U=L.height;(l.width!==P||l.height!==U)&&this.setSize(P,U)}return x===!1&&A.setRenderTarget(l),T=A.toneMapping,A.toneMapping=Hi,!0},this.hasRenderPass=function(){return x},this.end=function(A,L){A.toneMapping=T,M=!0;let P=l,U=d;for(let D=0;D<y.length;D++){const O=y[D];if(O.enabled!==!1&&(O.render(A,U,P,L),O.needsSwap!==!1)){const z=P;P=U,U=z}}if(_!==A.outputColorSpace||S!==A.toneMapping){_=A.outputColorSpace,S=A.toneMapping,p.defines={},Bt.getTransfer(_)===Xt&&(p.defines.SRGB_TRANSFER="");const D=lM[S];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=P.texture,A.setRenderTarget(C),A.render(m,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),d.dispose(),f.dispose(),p.dispose()}}const fg=new Cn,_f=new xo(1,1),hg=new Q0,pg=new w_,mg=new rg,o0=[],l0=[],c0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function _a(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=o0[o];if(l===void 0&&(l=new Float32Array(o),o0[o]=l),e!==0){r.toArray(l,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(l,f)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function lc(s,e){let t=l0[e];t===void 0&&(t=new Int32Array(e),l0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function uM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function fM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function pM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;d0.set(r),s.uniformMatrix2fv(this.addr,!1,d0),mn(t,r)}}function mM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;u0.set(r),s.uniformMatrix3fv(this.addr,!1,u0),mn(t,r)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;c0.set(r),s.uniformMatrix4fv(this.addr,!1,c0),mn(t,r)}}function xM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function _M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function wM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_f.compareFunction=t.isReversedDepthBuffer()?Pf:Nf,l=_f):l=fg,t.setTexture2D(e||l,o)}function TM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||pg,o)}function AM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||mg,o)}function CM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||hg,o)}function RM(s){switch(s){case 5126:return uM;case 35664:return dM;case 35665:return fM;case 35666:return hM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return xM;case 35667:case 35671:return vM;case 35668:case 35672:return _M;case 35669:case 35673:return yM;case 5125:return SM;case 36294:return MM;case 36295:return EM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return wM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return AM;case 36289:case 36303:case 36311:case 36292:return CM}}function NM(s,e){s.uniform1fv(this.addr,e)}function PM(s,e){const t=_a(e,this.size,2);s.uniform2fv(this.addr,t)}function DM(s,e){const t=_a(e,this.size,3);s.uniform3fv(this.addr,t)}function LM(s,e){const t=_a(e,this.size,4);s.uniform4fv(this.addr,t)}function IM(s,e){const t=_a(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function UM(s,e){const t=_a(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){const t=_a(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FM(s,e){s.uniform1iv(this.addr,e)}function kM(s,e){s.uniform2iv(this.addr,e)}function BM(s,e){s.uniform3iv(this.addr,e)}function zM(s,e){s.uniform4iv(this.addr,e)}function jM(s,e){s.uniform1uiv(this.addr,e)}function VM(s,e){s.uniform2uiv(this.addr,e)}function GM(s,e){s.uniform3uiv(this.addr,e)}function HM(s,e){s.uniform4uiv(this.addr,e)}function WM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let d;this.type===s.SAMPLER_2D_SHADOW?d=_f:d=fg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||d,l[f])}function XM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let d=0;d!==o;++d)t.setTexture3D(e[d]||pg,l[d])}function qM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let d=0;d!==o;++d)t.setTextureCube(e[d]||mg,l[d])}function YM(s,e,t){const r=this.cache,o=e.length,l=lc(t,o);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let d=0;d!==o;++d)t.setTexture2DArray(e[d]||hg,l[d])}function $M(s){switch(s){case 5126:return NM;case 35664:return PM;case 35665:return DM;case 35666:return LM;case 35674:return IM;case 35675:return UM;case 35676:return OM;case 5124:case 35670:return FM;case 35667:case 35671:return kM;case 35668:case 35672:return BM;case 35669:case 35673:return zM;case 5125:return jM;case 36294:return VM;case 36295:return GM;case 36296:return HM;case 35678:case 36198:case 36298:case 36306:case 35682:return WM;case 35679:case 36299:case 36307:return XM;case 35680:case 36300:case 36308:case 36293:return qM;case 36289:case 36303:case 36311:case 36292:return YM}}class KM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=RM(t.type)}}class ZM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$M(t.type)}}class QM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,d=o.length;l!==d;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const _d=/(\w+)(\])?(\[|\.)?/g;function f0(s,e){s.seq.push(e),s.map[e.id]=e}function JM(s,e,t){const r=s.name,o=r.length;for(_d.lastIndex=0;;){const l=_d.exec(r),d=_d.lastIndex;let f=l[1];const p=l[2]==="]",m=l[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===o){f0(t,m===void 0?new KM(f,s,e):new ZM(f,s,e));break}else{let _=t.map[f];_===void 0&&(_=new QM(f),f0(t,_)),t=_}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);JM(f,p,this)}const o=[],l=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):l.push(d);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,d=t.length;l!==d;++l){const f=t[l],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const d=e[o];d.id in t&&r.push(d)}return r}}function h0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const eE=37297;let tE=0;function nE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let d=o;d<l;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const p0=new Mt;function iE(s){Bt._getMatrix(p0,Bt.workingColorSpace,s);const e=`mat3( ${p0.elements.map(t=>t.toFixed(4))} )`;switch(Bt.getTransfer(s)){case ec:return[e,"LinearTransferOETF"];case Xt:return[e,"sRGBTransferOETF"];default:return _t("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function m0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const d=/ERROR: 0:(\d+)/.exec(l);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+l+`

`+nE(s.getShaderSource(e),f)}else return l}function rE(s,e){const t=iE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sE={[O0]:"Linear",[F0]:"Reinhard",[k0]:"Cineon",[rc]:"ACESFilmic",[z0]:"AgX",[j0]:"Neutral",[B0]:"Custom"};function aE(s,e){const t=sE[e];return t===void 0?(_t("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vl=new Q;function oE(){Bt.getLuminanceCoefficients(Vl);const s=Vl.x.toFixed(4),e=Vl.y.toFixed(4),t=Vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function cE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function uE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),d=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[d]={type:l.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function co(s){return s!==""}function g0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function yf(s){return s.replace(dE,hE)}const fE=new Map;function hE(s,e){let t=bt[e];if(t===void 0){const r=fE.get(e);if(r!==void 0)t=bt[r],_t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return yf(t)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(s){return s.replace(pE,mE)}function mE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function _0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const gE={[Wl]:"SHADOWMAP_TYPE_PCF",[lo]:"SHADOWMAP_TYPE_VSM"};function xE(s){return gE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[Es]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function _E(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":vE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[ma]:"ENVMAP_MODE_REFRACTION"};function SE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[U0]:"ENVMAP_BLENDING_MULTIPLY",[s_]:"ENVMAP_BLENDING_MIX",[a_]:"ENVMAP_BLENDING_ADD"};function EE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":ME[s.combine]||"ENVMAP_BLENDING_NONE"}function bE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function wE(s,e,t,r){const o=s.getContext(),l=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=xE(t),m=_E(t),v=SE(t),_=EE(t),S=bE(t),M=lE(t),T=cE(l),C=o.createProgram();let y,x,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(co).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(co).join(`
`),x.length>0&&(x+=`
`)):(y=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),x=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?bt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(co).join(`
`)),d=yf(d),d=g0(d,t),d=x0(d,t),f=yf(f),f=g0(f,t),f=x0(f,t),d=v0(d),f=v0(f),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=A+y+d,P=A+x+f,U=h0(o,o.VERTEX_SHADER,L),D=h0(o,o.FRAGMENT_SHADER,P);o.attachShader(C,U),o.attachShader(C,D),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(B){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",K=o.getShaderInfoLog(U)||"",ae=o.getShaderInfoLog(D)||"",le=Y.trim(),ne=K.trim(),Z=ae.trim();let W=!0,he=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,D);else{const oe=m0(o,U,"vertex"),k=m0(o,D,"fragment");kt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+le+`
`+oe+`
`+k)}else le!==""?_t("WebGLProgram: Program Info Log:",le):(ne===""||Z==="")&&(he=!1);he&&(B.diagnostics={runnable:W,programLog:le,vertexShader:{log:ne,prefix:y},fragmentShader:{log:Z,prefix:x}})}o.deleteShader(U),o.deleteShader(D),z=new Zl(o,C),w=uE(o,C)}let z;this.getUniforms=function(){return z===void 0&&O(this),z};let w;this.getAttributes=function(){return w===void 0&&O(this),w};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=o.getProgramParameter(C,eE)),N},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=D,this}let TE=0;class AE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(o)===!1&&(d.add(o),o.usedTimes++),d.has(l)===!1&&(d.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new CE(e),t.set(e,r)),r}}class CE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function RE(s,e,t,r,o,l,d){const f=new Uf,p=new AE,m=new Set,v=[],_=new Map,S=o.logarithmicDepthBuffer;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return m.add(w),w===0?"uv":`uv${w}`}function y(w,N,B,Y,K){const ae=Y.fog,le=K.geometry,ne=w.isMeshStandardMaterial?Y.environment:null,Z=(w.isMeshStandardMaterial?t:e).get(w.envMap||ne),W=Z&&Z.mapping===sc?Z.image.height:null,he=T[w.type];w.precision!==null&&(M=o.getMaxPrecision(w.precision),M!==w.precision&&_t("WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const oe=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,k=oe!==void 0?oe.length:0;let se=0;le.morphAttributes.position!==void 0&&(se=1),le.morphAttributes.normal!==void 0&&(se=2),le.morphAttributes.color!==void 0&&(se=3);let Ce,He,Ze,ie;if(he){const Tt=ji[he];Ce=Tt.vertexShader,He=Tt.fragmentShader}else Ce=w.vertexShader,He=w.fragmentShader,p.update(w),Ze=p.getVertexShaderID(w),ie=p.getFragmentShaderID(w);const me=s.getRenderTarget(),_e=s.state.buffers.depth.getReversed(),Ne=K.isInstancedMesh===!0,V=K.isBatchedMesh===!0,Fe=!!w.map,Nt=!!w.matcap,Be=!!Z,dt=!!w.aoMap,Dt=!!w.lightMap,nt=!!w.bumpMap,jt=!!w.normalMap,j=!!w.displacementMap,Gt=!!w.emissiveMap,xt=!!w.metalnessMap,Ct=!!w.roughnessMap,Ye=w.anisotropy>0,I=w.clearcoat>0,E=w.dispersion>0,X=w.iridescence>0,pe=w.sheen>0,ge=w.transmission>0,ce=Ye&&!!w.anisotropyMap,$e=I&&!!w.clearcoatMap,Ae=I&&!!w.clearcoatNormalMap,Ve=I&&!!w.clearcoatRoughnessMap,st=X&&!!w.iridescenceMap,ye=X&&!!w.iridescenceThicknessMap,De=pe&&!!w.sheenColorMap,Ge=pe&&!!w.sheenRoughnessMap,Oe=!!w.specularMap,Pe=!!w.specularColorMap,ht=!!w.specularIntensityMap,H=ge&&!!w.transmissionMap,Ie=ge&&!!w.thicknessMap,Ee=!!w.gradientMap,be=!!w.alphaMap,xe=w.alphaTest>0,fe=!!w.alphaHash,Te=!!w.extensions;let at=Hi;w.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=s.toneMapping);const yt={shaderID:he,shaderType:w.type,shaderName:w.name,vertexShader:Ce,fragmentShader:He,defines:w.defines,customVertexShaderID:Ze,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:V,batchingColor:V&&K._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&K.instanceColor!==null,instancingMorph:Ne&&K.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:xa,alphaToCoverage:!!w.alphaToCoverage,map:Fe,matcap:Nt,envMap:Be,envMapMode:Be&&Z.mapping,envMapCubeUVHeight:W,aoMap:dt,lightMap:Dt,bumpMap:nt,normalMap:jt,displacementMap:j,emissiveMap:Gt,normalMapObjectSpace:jt&&w.normalMapType===c_,normalMapTangentSpace:jt&&w.normalMapType===K0,metalnessMap:xt,roughnessMap:Ct,anisotropy:Ye,anisotropyMap:ce,clearcoat:I,clearcoatMap:$e,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Ve,dispersion:E,iridescence:X,iridescenceMap:st,iridescenceThicknessMap:ye,sheen:pe,sheenColorMap:De,sheenRoughnessMap:Ge,specularMap:Oe,specularColorMap:Pe,specularIntensityMap:ht,transmission:ge,transmissionMap:H,thicknessMap:Ie,gradientMap:Ee,opaque:w.transparent===!1&&w.blending===fa&&w.alphaToCoverage===!1,alphaMap:be,alphaTest:xe,alphaHash:fe,combine:w.combine,mapUv:Fe&&C(w.map.channel),aoMapUv:dt&&C(w.aoMap.channel),lightMapUv:Dt&&C(w.lightMap.channel),bumpMapUv:nt&&C(w.bumpMap.channel),normalMapUv:jt&&C(w.normalMap.channel),displacementMapUv:j&&C(w.displacementMap.channel),emissiveMapUv:Gt&&C(w.emissiveMap.channel),metalnessMapUv:xt&&C(w.metalnessMap.channel),roughnessMapUv:Ct&&C(w.roughnessMap.channel),anisotropyMapUv:ce&&C(w.anisotropyMap.channel),clearcoatMapUv:$e&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:De&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&C(w.sheenRoughnessMap.channel),specularMapUv:Oe&&C(w.specularMap.channel),specularColorMapUv:Pe&&C(w.specularColorMap.channel),specularIntensityMapUv:ht&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:Ie&&C(w.thicknessMap.channel),alphaMapUv:be&&C(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(jt||Ye),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!le.attributes.uv&&(Fe||be),fog:!!ae,useFog:w.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:_e,skinning:K.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:Fe&&w.map.isVideoTexture===!0&&Bt.getTransfer(w.map.colorSpace)===Xt,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&Bt.getTransfer(w.emissiveMap.colorSpace)===Xt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===dr,flipSided:w.side===ei,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Te&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Te&&w.extensions.multiDraw===!0||V)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return yt.vertexUv1s=m.has(1),yt.vertexUv2s=m.has(2),yt.vertexUv3s=m.has(3),m.clear(),yt}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)N.push(B),N.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(A(N,w),L(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function A(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function L(w,N){f.disableAll(),N.instancing&&f.enable(0),N.instancingColor&&f.enable(1),N.instancingMorph&&f.enable(2),N.matcap&&f.enable(3),N.envMap&&f.enable(4),N.normalMapObjectSpace&&f.enable(5),N.normalMapTangentSpace&&f.enable(6),N.clearcoat&&f.enable(7),N.iridescence&&f.enable(8),N.alphaTest&&f.enable(9),N.vertexColors&&f.enable(10),N.vertexAlphas&&f.enable(11),N.vertexUv1s&&f.enable(12),N.vertexUv2s&&f.enable(13),N.vertexUv3s&&f.enable(14),N.vertexTangents&&f.enable(15),N.anisotropy&&f.enable(16),N.alphaHash&&f.enable(17),N.batching&&f.enable(18),N.dispersion&&f.enable(19),N.batchingColor&&f.enable(20),N.gradientMap&&f.enable(21),w.push(f.mask),f.disableAll(),N.fog&&f.enable(0),N.useFog&&f.enable(1),N.flatShading&&f.enable(2),N.logarithmicDepthBuffer&&f.enable(3),N.reversedDepthBuffer&&f.enable(4),N.skinning&&f.enable(5),N.morphTargets&&f.enable(6),N.morphNormals&&f.enable(7),N.morphColors&&f.enable(8),N.premultipliedAlpha&&f.enable(9),N.shadowMapEnabled&&f.enable(10),N.doubleSided&&f.enable(11),N.flipSided&&f.enable(12),N.useDepthPacking&&f.enable(13),N.dithering&&f.enable(14),N.transmission&&f.enable(15),N.sheen&&f.enable(16),N.opaque&&f.enable(17),N.pointsUvs&&f.enable(18),N.decodeVideoTexture&&f.enable(19),N.decodeVideoTextureEmissive&&f.enable(20),N.alphaToCoverage&&f.enable(21),w.push(f.mask)}function P(w){const N=T[w.type];let B;if(N){const Y=ji[N];B=k_.clone(Y.uniforms)}else B=w.uniforms;return B}function U(w,N){let B=_.get(N);return B!==void 0?++B.usedTimes:(B=new wE(s,N,w,l),v.push(B),_.set(N,B)),B}function D(w){if(--w.usedTimes===0){const N=v.indexOf(w);v[N]=v[v.length-1],v.pop(),_.delete(w.cacheKey),w.destroy()}}function O(w){p.remove(w)}function z(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:P,acquireProgram:U,releaseProgram:D,releaseShaderCache:O,programs:v,dispose:z}}function NE(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function PE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function y0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function S0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function d(_,S,M,T,C,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:S,material:M,groupOrder:T,renderOrder:_.renderOrder,z:C,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=S,x.material=M,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=C,x.group=y),e++,x}function f(_,S,M,T,C,y){const x=d(_,S,M,T,C,y);M.transmission>0?r.push(x):M.transparent===!0?o.push(x):t.push(x)}function p(_,S,M,T,C,y){const x=d(_,S,M,T,C,y);M.transmission>0?r.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function m(_,S){t.length>1&&t.sort(_||PE),r.length>1&&r.sort(S||y0),o.length>1&&o.sort(S||y0)}function v(){for(let _=e,S=s.length;_<S;_++){const M=s[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:f,unshift:p,finish:v,sort:m}}function DE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let d;return l===void 0?(d=new S0,s.set(r,[d])):o>=l.length?(d=new S0,l.push(d)):d=l[o],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function LE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new wt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return s[e.id]=t,t}}}function IE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let UE=0;function OE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function FE(s){const e=new LE,t=IE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Q);const o=new Q,l=new nn,d=new nn;function f(m){let v=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let M=0,T=0,C=0,y=0,x=0,A=0,L=0,P=0,U=0,D=0,O=0;m.sort(OE);for(let w=0,N=m.length;w<N;w++){const B=m[w],Y=B.color,K=B.intensity,ae=B.distance;let le=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ga?le=B.shadow.map.texture:le=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=Y.r*K,_+=Y.g*K,S+=Y.b*K;else if(B.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(B.sh.coefficients[ne],K);O++}else if(B.isDirectionalLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const Z=B.shadow,W=t.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.directionalShadow[M]=W,r.directionalShadowMap[M]=le,r.directionalShadowMatrix[M]=B.shadow.matrix,A++}r.directional[M]=ne,M++}else if(B.isSpotLight){const ne=e.get(B);ne.position.setFromMatrixPosition(B.matrixWorld),ne.color.copy(Y).multiplyScalar(K),ne.distance=ae,ne.coneCos=Math.cos(B.angle),ne.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),ne.decay=B.decay,r.spot[C]=ne;const Z=B.shadow;if(B.map&&(r.spotLightMap[U]=B.map,U++,Z.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[C]=Z.matrix,B.castShadow){const W=t.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,r.spotShadow[C]=W,r.spotShadowMap[C]=le,P++}C++}else if(B.isRectAreaLight){const ne=e.get(B);ne.color.copy(Y).multiplyScalar(K),ne.halfWidth.set(B.width*.5,0,0),ne.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=ne,y++}else if(B.isPointLight){const ne=e.get(B);if(ne.color.copy(B.color).multiplyScalar(B.intensity),ne.distance=B.distance,ne.decay=B.decay,B.castShadow){const Z=B.shadow,W=t.get(B);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,r.pointShadow[T]=W,r.pointShadowMap[T]=le,r.pointShadowMatrix[T]=B.shadow.matrix,L++}r.point[T]=ne,T++}else if(B.isHemisphereLight){const ne=e.get(B);ne.skyColor.copy(B.color).multiplyScalar(K),ne.groundColor.copy(B.groundColor).multiplyScalar(K),r.hemi[x]=ne,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=S;const z=r.hash;(z.directionalLength!==M||z.pointLength!==T||z.spotLength!==C||z.rectAreaLength!==y||z.hemiLength!==x||z.numDirectionalShadows!==A||z.numPointShadows!==L||z.numSpotShadows!==P||z.numSpotMaps!==U||z.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=x,r.directionalShadow.length=A,r.directionalShadowMap.length=A,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=A,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=P+U-D,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,z.directionalLength=M,z.pointLength=T,z.spotLength=C,z.rectAreaLength=y,z.hemiLength=x,z.numDirectionalShadows=A,z.numPointShadows=L,z.numSpotShadows=P,z.numSpotMaps=U,z.numLightProbes=O,r.version=UE++)}function p(m,v){let _=0,S=0,M=0,T=0,C=0;const y=v.matrixWorldInverse;for(let x=0,A=m.length;x<A;x++){const L=m[x];if(L.isDirectionalLight){const P=r.directional[_];P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(L.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const P=r.rectArea[T];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),d.identity(),l.copy(L.matrixWorld),l.premultiply(y),d.extractRotation(l),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:f,setupView:p,state:r}}function M0(s){const e=new FE(s),t=[],r=[];function o(v){m.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function d(v){r.push(v)}function f(){e.setup(t)}function p(v){e.setupView(t,v)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:d}}function kE(s){let e=new WeakMap;function t(o,l=0){const d=e.get(o);let f;return d===void 0?(f=new M0(s),e.set(o,[f])):l>=d.length?(f=new M0(s),d.push(f)):f=d[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const BE=`void main() {
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
}`,jE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],VE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],E0=new nn,ao=new Q,yd=new Q;function GE(s,e,t){let r=new Ff;const o=new mt,l=new mt,d=new sn,f=new K_,p=new Z_,m={},v=t.maxTextureSize,_={[Zr]:ei,[ei]:Zr,[dr]:dr},S=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:BE,fragmentShader:zE}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const T=new xi;T.setAttribute("position",new Xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new et(T,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let x=this.type;this.render=function(D,O,z){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;D.type===Ef&&(_t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),D.type=Wl);const w=s.getRenderTarget(),N=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(pr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const K=x!==this.type;K&&O.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(le=>le.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,le=D.length;ae<le;ae++){const ne=D[ae],Z=ne.shadow;if(Z===void 0){_t("WebGLShadowMap:",ne,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;o.copy(Z.mapSize);const W=Z.getFrameExtents();if(o.multiply(W),l.copy(Z.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/W.x),o.x=l.x*W.x,Z.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/W.y),o.y=l.y*W.y,Z.mapSize.y=l.y)),Z.map===null||K===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===lo){if(ne.isPointLight){_t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Wi(o.x,o.y,{format:ga,type:gr,minFilter:kn,magFilter:kn,generateMipmaps:!1}),Z.map.texture.name=ne.name+".shadowMap",Z.map.depthTexture=new xo(o.x,o.y,Vi),Z.map.depthTexture.name=ne.name+".shadowMapDepth",Z.map.depthTexture.format=xr,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An}else{ne.isPointLight?(Z.map=new sg(o.x),Z.map.depthTexture=new Y_(o.x,qi)):(Z.map=new Wi(o.x,o.y),Z.map.depthTexture=new xo(o.x,o.y,qi)),Z.map.depthTexture.name=ne.name+".shadowMap",Z.map.depthTexture.format=xr;const oe=s.state.buffers.depth.getReversed();this.type===Wl?(Z.map.depthTexture.compareFunction=oe?Pf:Nf,Z.map.depthTexture.minFilter=kn,Z.map.depthTexture.magFilter=kn):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=An,Z.map.depthTexture.magFilter=An)}Z.camera.updateProjectionMatrix()}const he=Z.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<he;oe++){if(Z.map.isWebGLCubeRenderTarget)s.setRenderTarget(Z.map,oe),s.clear();else{oe===0&&(s.setRenderTarget(Z.map),s.clear());const k=Z.getViewport(oe);d.set(l.x*k.x,l.y*k.y,l.x*k.z,l.y*k.w),Y.viewport(d)}if(ne.isPointLight){const k=Z.camera,se=Z.matrix,Ce=ne.distance||k.far;Ce!==k.far&&(k.far=Ce,k.updateProjectionMatrix()),ao.setFromMatrixPosition(ne.matrixWorld),k.position.copy(ao),yd.copy(k.position),yd.add(jE[oe]),k.up.copy(VE[oe]),k.lookAt(yd),k.updateMatrixWorld(),se.makeTranslation(-ao.x,-ao.y,-ao.z),E0.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(E0,k.coordinateSystem,k.reversedDepth)}else Z.updateMatrices(ne);r=Z.getFrustum(),P(O,z,Z.camera,ne,this.type)}Z.isPointLightShadow!==!0&&this.type===lo&&A(Z,z),Z.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(w,N,B)};function A(D,O){const z=e.update(C);S.defines.VSM_SAMPLES!==D.blurSamples&&(S.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Wi(o.x,o.y,{format:ga,type:gr})),S.uniforms.shadow_pass.value=D.map.depthTexture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(O,null,z,S,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(O,null,z,M,C,null)}function L(D,O,z,w){let N=null;const B=z.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)N=B;else if(N=z.isPointLight===!0?p:f,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Y=N.uuid,K=O.uuid;let ae=m[Y];ae===void 0&&(ae={},m[Y]=ae);let le=ae[K];le===void 0&&(le=N.clone(),ae[K]=le,O.addEventListener("dispose",U)),N=le}if(N.visible=O.visible,N.wireframe=O.wireframe,w===lo?N.side=O.shadowSide!==null?O.shadowSide:O.side:N.side=O.shadowSide!==null?O.shadowSide:_[O.side],N.alphaMap=O.alphaMap,N.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,N.map=O.map,N.clipShadows=O.clipShadows,N.clippingPlanes=O.clippingPlanes,N.clipIntersection=O.clipIntersection,N.displacementMap=O.displacementMap,N.displacementScale=O.displacementScale,N.displacementBias=O.displacementBias,N.wireframeLinewidth=O.wireframeLinewidth,N.linewidth=O.linewidth,z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const Y=s.properties.get(N);Y.light=z}return N}function P(D,O,z,w,N){if(D.visible===!1)return;if(D.layers.test(O.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&N===lo)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,D.matrixWorld);const K=e.update(D),ae=D.material;if(Array.isArray(ae)){const le=K.groups;for(let ne=0,Z=le.length;ne<Z;ne++){const W=le[ne],he=ae[W.materialIndex];if(he&&he.visible){const oe=L(D,he,w,N);D.onBeforeShadow(s,D,O,z,K,oe,W),s.renderBufferDirect(z,null,K,oe,D,W),D.onAfterShadow(s,D,O,z,K,oe,W)}}}else if(ae.visible){const le=L(D,ae,w,N);D.onBeforeShadow(s,D,O,z,K,le,null),s.renderBufferDirect(z,null,K,le,D,null),D.onAfterShadow(s,D,O,z,K,le,null)}}const Y=D.children;for(let K=0,ae=Y.length;K<ae;K++)P(Y[K],O,z,w,N)}function U(D){D.target.removeEventListener("dispose",U);for(const z in m){const w=m[z],N=D.target.uuid;N in w&&(w[N].dispose(),delete w[N])}}}const HE={[Ad]:Cd,[Rd]:Dd,[Nd]:Ld,[pa]:Pd,[Cd]:Ad,[Dd]:Rd,[Ld]:Nd,[Pd]:pa};function WE(s,e){function t(){let H=!1;const Ie=new sn;let Ee=null;const be=new sn(0,0,0,0);return{setMask:function(xe){Ee!==xe&&!H&&(s.colorMask(xe,xe,xe,xe),Ee=xe)},setLocked:function(xe){H=xe},setClear:function(xe,fe,Te,at,yt){yt===!0&&(xe*=at,fe*=at,Te*=at),Ie.set(xe,fe,Te,at),be.equals(Ie)===!1&&(s.clearColor(xe,fe,Te,at),be.copy(Ie))},reset:function(){H=!1,Ee=null,be.set(-1,0,0,0)}}}function r(){let H=!1,Ie=!1,Ee=null,be=null,xe=null;return{setReversed:function(fe){if(Ie!==fe){const Te=e.get("EXT_clip_control");fe?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),Ie=fe;const at=xe;xe=null,this.setClear(at)}},getReversed:function(){return Ie},setTest:function(fe){fe?me(s.DEPTH_TEST):_e(s.DEPTH_TEST)},setMask:function(fe){Ee!==fe&&!H&&(s.depthMask(fe),Ee=fe)},setFunc:function(fe){if(Ie&&(fe=HE[fe]),be!==fe){switch(fe){case Ad:s.depthFunc(s.NEVER);break;case Cd:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case pa:s.depthFunc(s.LEQUAL);break;case Nd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case Ld:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=fe}},setLocked:function(fe){H=fe},setClear:function(fe){xe!==fe&&(Ie&&(fe=1-fe),s.clearDepth(fe),xe=fe)},reset:function(){H=!1,Ee=null,be=null,xe=null,Ie=!1}}}function o(){let H=!1,Ie=null,Ee=null,be=null,xe=null,fe=null,Te=null,at=null,yt=null;return{setTest:function(Tt){H||(Tt?me(s.STENCIL_TEST):_e(s.STENCIL_TEST))},setMask:function(Tt){Ie!==Tt&&!H&&(s.stencilMask(Tt),Ie=Tt)},setFunc:function(Tt,Bn,gn){(Ee!==Tt||be!==Bn||xe!==gn)&&(s.stencilFunc(Tt,Bn,gn),Ee=Tt,be=Bn,xe=gn)},setOp:function(Tt,Bn,gn){(fe!==Tt||Te!==Bn||at!==gn)&&(s.stencilOp(Tt,Bn,gn),fe=Tt,Te=Bn,at=gn)},setLocked:function(Tt){H=Tt},setClear:function(Tt){yt!==Tt&&(s.clearStencil(Tt),yt=Tt)},reset:function(){H=!1,Ie=null,Ee=null,be=null,xe=null,fe=null,Te=null,at=null,yt=null}}}const l=new t,d=new r,f=new o,p=new WeakMap,m=new WeakMap;let v={},_={},S=new WeakMap,M=[],T=null,C=!1,y=null,x=null,A=null,L=null,P=null,U=null,D=null,O=new wt(0,0,0),z=0,w=!1,N=null,B=null,Y=null,K=null,ae=null;const le=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,Z=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),ne=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ne=Z>=2);let he=null,oe={};const k=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ce=new sn().fromArray(k),He=new sn().fromArray(se);function Ze(H,Ie,Ee,be){const xe=new Uint8Array(4),fe=s.createTexture();s.bindTexture(H,fe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Te=0;Te<Ee;Te++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ie,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Ie+Te,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return fe}const ie={};ie[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),d.setClear(1),f.setClear(0),me(s.DEPTH_TEST),d.setFunc(pa),nt(!1),jt(Em),me(s.CULL_FACE),dt(pr);function me(H){v[H]!==!0&&(s.enable(H),v[H]=!0)}function _e(H){v[H]!==!1&&(s.disable(H),v[H]=!1)}function Ne(H,Ie){return _[H]!==Ie?(s.bindFramebuffer(H,Ie),_[H]=Ie,H===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ie),H===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ie),!0):!1}function V(H,Ie){let Ee=M,be=!1;if(H){Ee=S.get(Ie),Ee===void 0&&(Ee=[],S.set(Ie,Ee));const xe=H.textures;if(Ee.length!==xe.length||Ee[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,Te=xe.length;fe<Te;fe++)Ee[fe]=s.COLOR_ATTACHMENT0+fe;Ee.length=xe.length,be=!0}}else Ee[0]!==s.BACK&&(Ee[0]=s.BACK,be=!0);be&&s.drawBuffers(Ee)}function Fe(H){return T!==H?(s.useProgram(H),T=H,!0):!1}const Nt={[_s]:s.FUNC_ADD,[Vv]:s.FUNC_SUBTRACT,[Gv]:s.FUNC_REVERSE_SUBTRACT};Nt[Hv]=s.MIN,Nt[Wv]=s.MAX;const Be={[Xv]:s.ZERO,[qv]:s.ONE,[Yv]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[e_]:s.SRC_ALPHA_SATURATE,[Qv]:s.DST_COLOR,[Kv]:s.DST_ALPHA,[$v]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[Jv]:s.ONE_MINUS_DST_COLOR,[Zv]:s.ONE_MINUS_DST_ALPHA,[t_]:s.CONSTANT_COLOR,[n_]:s.ONE_MINUS_CONSTANT_COLOR,[i_]:s.CONSTANT_ALPHA,[r_]:s.ONE_MINUS_CONSTANT_ALPHA};function dt(H,Ie,Ee,be,xe,fe,Te,at,yt,Tt){if(H===pr){C===!0&&(_e(s.BLEND),C=!1);return}if(C===!1&&(me(s.BLEND),C=!0),H!==jv){if(H!==y||Tt!==w){if((x!==_s||P!==_s)&&(s.blendEquation(s.FUNC_ADD),x=_s,P=_s),Tt)switch(H){case fa:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFunc(s.ONE,s.ONE);break;case wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Tm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",H);break}else switch(H){case fa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case bm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case wm:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tm:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",H);break}A=null,L=null,U=null,D=null,O.set(0,0,0),z=0,y=H,w=Tt}return}xe=xe||Ie,fe=fe||Ee,Te=Te||be,(Ie!==x||xe!==P)&&(s.blendEquationSeparate(Nt[Ie],Nt[xe]),x=Ie,P=xe),(Ee!==A||be!==L||fe!==U||Te!==D)&&(s.blendFuncSeparate(Be[Ee],Be[be],Be[fe],Be[Te]),A=Ee,L=be,U=fe,D=Te),(at.equals(O)===!1||yt!==z)&&(s.blendColor(at.r,at.g,at.b,yt),O.copy(at),z=yt),y=H,w=!1}function Dt(H,Ie){H.side===dr?_e(s.CULL_FACE):me(s.CULL_FACE);let Ee=H.side===ei;Ie&&(Ee=!Ee),nt(Ee),H.blending===fa&&H.transparent===!1?dt(pr):dt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),l.setMask(H.colorWrite);const be=H.stencilWrite;f.setTest(be),be&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):_e(s.SAMPLE_ALPHA_TO_COVERAGE)}function nt(H){N!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),N=H)}function jt(H){H!==Bv?(me(s.CULL_FACE),H!==B&&(H===Em?s.cullFace(s.BACK):H===zv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):_e(s.CULL_FACE),B=H}function j(H){H!==Y&&(ne&&s.lineWidth(H),Y=H)}function Gt(H,Ie,Ee){H?(me(s.POLYGON_OFFSET_FILL),(K!==Ie||ae!==Ee)&&(s.polygonOffset(Ie,Ee),K=Ie,ae=Ee)):_e(s.POLYGON_OFFSET_FILL)}function xt(H){H?me(s.SCISSOR_TEST):_e(s.SCISSOR_TEST)}function Ct(H){H===void 0&&(H=s.TEXTURE0+le-1),he!==H&&(s.activeTexture(H),he=H)}function Ye(H,Ie,Ee){Ee===void 0&&(he===null?Ee=s.TEXTURE0+le-1:Ee=he);let be=oe[Ee];be===void 0&&(be={type:void 0,texture:void 0},oe[Ee]=be),(be.type!==H||be.texture!==Ie)&&(he!==Ee&&(s.activeTexture(Ee),he=Ee),s.bindTexture(H,Ie||ie[H]),be.type=H,be.texture=Ie)}function I(){const H=oe[he];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function X(){try{s.compressedTexImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function pe(){try{s.texSubImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function ge(){try{s.texSubImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function Ae(){try{s.texStorage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function Ve(){try{s.texStorage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function st(){try{s.texImage2D(...arguments)}catch(H){kt("WebGLState:",H)}}function ye(){try{s.texImage3D(...arguments)}catch(H){kt("WebGLState:",H)}}function De(H){Ce.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ce.copy(H))}function Ge(H){He.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),He.copy(H))}function Oe(H,Ie){let Ee=m.get(Ie);Ee===void 0&&(Ee=new WeakMap,m.set(Ie,Ee));let be=Ee.get(H);be===void 0&&(be=s.getUniformBlockIndex(Ie,H.name),Ee.set(H,be))}function Pe(H,Ie){const be=m.get(Ie).get(H);p.get(Ie)!==be&&(s.uniformBlockBinding(Ie,be,H.__bindingPointIndex),p.set(Ie,be))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},he=null,oe={},_={},S=new WeakMap,M=[],T=null,C=!1,y=null,x=null,A=null,L=null,P=null,U=null,D=null,O=new wt(0,0,0),z=0,w=!1,N=null,B=null,Y=null,K=null,ae=null,Ce.set(0,0,s.canvas.width,s.canvas.height),He.set(0,0,s.canvas.width,s.canvas.height),l.reset(),d.reset(),f.reset()}return{buffers:{color:l,depth:d,stencil:f},enable:me,disable:_e,bindFramebuffer:Ne,drawBuffers:V,useProgram:Fe,setBlending:dt,setMaterial:Dt,setFlipSided:nt,setCullFace:jt,setLineWidth:j,setPolygonOffset:Gt,setScissorTest:xt,activeTexture:Ct,bindTexture:Ye,unbindTexture:I,compressedTexImage2D:E,compressedTexImage3D:X,texImage2D:st,texImage3D:ye,updateUBOMapping:Oe,uniformBlockBinding:Pe,texStorage2D:Ae,texStorage3D:Ve,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:ce,compressedTexSubImage3D:$e,scissor:De,viewport:Ge,reset:ht}}function XE(s,e,t,r,o,l,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new mt,v=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(I,E){return M?new OffscreenCanvas(I,E):mo("canvas")}function C(I,E,X){let pe=1;const ge=Ye(I);if((ge.width>X||ge.height>X)&&(pe=X/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ce=Math.floor(pe*ge.width),$e=Math.floor(pe*ge.height);_===void 0&&(_=T(ce,$e));const Ae=E?T(ce,$e):_;return Ae.width=ce,Ae.height=$e,Ae.getContext("2d").drawImage(I,0,0,ce,$e),_t("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+$e+")."),Ae}else return"data"in I&&_t("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),I;return I}function y(I){return I.generateMipmaps}function x(I){s.generateMipmap(I)}function A(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(I,E,X,pe,ge=!1){if(I!==null){if(s[I]!==void 0)return s[I];_t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ce=E;if(E===s.RED&&(X===s.FLOAT&&(ce=s.R32F),X===s.HALF_FLOAT&&(ce=s.R16F),X===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.R8UI),X===s.UNSIGNED_SHORT&&(ce=s.R16UI),X===s.UNSIGNED_INT&&(ce=s.R32UI),X===s.BYTE&&(ce=s.R8I),X===s.SHORT&&(ce=s.R16I),X===s.INT&&(ce=s.R32I)),E===s.RG&&(X===s.FLOAT&&(ce=s.RG32F),X===s.HALF_FLOAT&&(ce=s.RG16F),X===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RG8UI),X===s.UNSIGNED_SHORT&&(ce=s.RG16UI),X===s.UNSIGNED_INT&&(ce=s.RG32UI),X===s.BYTE&&(ce=s.RG8I),X===s.SHORT&&(ce=s.RG16I),X===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),X===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),X===s.UNSIGNED_INT&&(ce=s.RGB32UI),X===s.BYTE&&(ce=s.RGB8I),X===s.SHORT&&(ce=s.RGB16I),X===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(X===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),X===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),X===s.UNSIGNED_INT&&(ce=s.RGBA32UI),X===s.BYTE&&(ce=s.RGBA8I),X===s.SHORT&&(ce=s.RGBA16I),X===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(X===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),X===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const $e=ge?ec:Bt.getTransfer(pe);X===s.FLOAT&&(ce=s.RGBA32F),X===s.HALF_FLOAT&&(ce=s.RGBA16F),X===s.UNSIGNED_BYTE&&(ce=$e===Xt?s.SRGB8_ALPHA8:s.RGBA8),X===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),X===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(I,E){let X;return I?E===null||E===qi||E===po?X=s.DEPTH24_STENCIL8:E===Vi?X=s.DEPTH32F_STENCIL8:E===ho&&(X=s.DEPTH24_STENCIL8,_t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===po?X=s.DEPTH_COMPONENT24:E===Vi?X=s.DEPTH_COMPONENT32F:E===ho&&(X=s.DEPTH_COMPONENT16),X}function U(I,E){return y(I)===!0||I.isFramebufferTexture&&I.minFilter!==An&&I.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function D(I){const E=I.target;E.removeEventListener("dispose",D),z(E),E.isVideoTexture&&v.delete(E)}function O(I){const E=I.target;E.removeEventListener("dispose",O),N(E)}function z(I){const E=r.get(I);if(E.__webglInit===void 0)return;const X=I.source,pe=S.get(X);if(pe){const ge=pe[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&w(I),Object.keys(pe).length===0&&S.delete(X)}r.remove(I)}function w(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const X=I.source,pe=S.get(X);delete pe[E.__cacheKey],d.memory.textures--}function N(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let ge=0;ge<E.__webglFramebuffer[pe].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[pe][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const X=I.textures;for(let pe=0,ge=X.length;pe<ge;pe++){const ce=r.get(X[pe]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),d.memory.textures--),r.remove(X[pe])}r.remove(I)}let B=0;function Y(){B=0}function K(){const I=B;return I>=o.maxTextures&&_t("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),B+=1,I}function ae(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function le(I,E){const X=r.get(I);if(I.isVideoTexture&&xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&X.__version!==I.version){const pe=I.image;if(pe===null)_t("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)_t("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(X,I,E);return}}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,X.__webglTexture,s.TEXTURE0+E)}function ne(I,E){const X=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ie(X,I,E);return}else I.isExternalTexture&&(X.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,X.__webglTexture,s.TEXTURE0+E)}function Z(I,E){const X=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&X.__version!==I.version){ie(X,I,E);return}t.bindTexture(s.TEXTURE_3D,X.__webglTexture,s.TEXTURE0+E)}function W(I,E){const X=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&X.__version!==I.version){me(X,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture,s.TEXTURE0+E)}const he={[Od]:s.REPEAT,[fr]:s.CLAMP_TO_EDGE,[Fd]:s.MIRRORED_REPEAT},oe={[An]:s.NEAREST,[o_]:s.NEAREST_MIPMAP_NEAREST,[El]:s.NEAREST_MIPMAP_LINEAR,[kn]:s.LINEAR,[Gu]:s.LINEAR_MIPMAP_NEAREST,[Ss]:s.LINEAR_MIPMAP_LINEAR},k={[u_]:s.NEVER,[m_]:s.ALWAYS,[d_]:s.LESS,[Nf]:s.LEQUAL,[f_]:s.EQUAL,[Pf]:s.GEQUAL,[h_]:s.GREATER,[p_]:s.NOTEQUAL};function se(I,E){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===Gu||E.magFilter===El||E.magFilter===Ss||E.minFilter===kn||E.minFilter===Gu||E.minFilter===El||E.minFilter===Ss)&&_t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,he[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,he[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,he[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,oe[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,oe[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==El&&E.minFilter!==Ss||E.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ce(I,E){let X=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",D));const pe=E.source;let ge=S.get(pe);ge===void 0&&(ge={},S.set(pe,ge));const ce=ae(E);if(ce!==I.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,X=!0),ge[ce].usedTimes++;const $e=ge[I.__cacheKey];$e!==void 0&&(ge[I.__cacheKey].usedTimes--,$e.usedTimes===0&&w(E)),I.__cacheKey=ce,I.__webglTexture=ge[ce].texture}return X}function He(I,E,X){return Math.floor(Math.floor(I/X)/E)}function Ze(I,E,X,pe){const ce=I.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,X,pe,E.data);else{ce.sort((ye,De)=>ye.start-De.start);let $e=0;for(let ye=1;ye<ce.length;ye++){const De=ce[$e],Ge=ce[ye],Oe=De.start+De.count,Pe=He(Ge.start,E.width,4),ht=He(De.start,E.width,4);Ge.start<=Oe+1&&Pe===ht&&He(Ge.start+Ge.count-1,E.width,4)===Pe?De.count=Math.max(De.count,Ge.start+Ge.count-De.start):(++$e,ce[$e]=Ge)}ce.length=$e+1;const Ae=s.getParameter(s.UNPACK_ROW_LENGTH),Ve=s.getParameter(s.UNPACK_SKIP_PIXELS),st=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let ye=0,De=ce.length;ye<De;ye++){const Ge=ce[ye],Oe=Math.floor(Ge.start/4),Pe=Math.ceil(Ge.count/4),ht=Oe%E.width,H=Math.floor(Oe/E.width),Ie=Pe,Ee=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,ht,H,Ie,Ee,X,pe,E.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ae),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ve),s.pixelStorei(s.UNPACK_SKIP_ROWS,st)}}function ie(I,E,X){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const ge=Ce(I,E),ce=E.source;t.bindTexture(pe,I.__webglTexture,s.TEXTURE0+X);const $e=r.get(ce);if(ce.version!==$e.__version||ge===!0){t.activeTexture(s.TEXTURE0+X);const Ae=Bt.getPrimaries(Bt.workingColorSpace),Ve=E.colorSpace===$r?null:Bt.getPrimaries(E.colorSpace),st=E.colorSpace===$r||Ae===Ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let ye=C(E.image,!1,o.maxTextureSize);ye=Ct(E,ye);const De=l.convert(E.format,E.colorSpace),Ge=l.convert(E.type);let Oe=L(E.internalFormat,De,Ge,E.colorSpace,E.isVideoTexture);se(pe,E);let Pe;const ht=E.mipmaps,H=E.isVideoTexture!==!0,Ie=$e.__version===void 0||ge===!0,Ee=ce.dataReady,be=U(E,ye);if(E.isDepthTexture)Oe=P(E.format===Ms,E.type),Ie&&(H?t.texStorage2D(s.TEXTURE_2D,1,Oe,ye.width,ye.height):t.texImage2D(s.TEXTURE_2D,0,Oe,ye.width,ye.height,0,De,Ge,null));else if(E.isDataTexture)if(ht.length>0){H&&Ie&&t.texStorage2D(s.TEXTURE_2D,be,Oe,ht[0].width,ht[0].height);for(let xe=0,fe=ht.length;xe<fe;xe++)Pe=ht[xe],H?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,De,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,Oe,Pe.width,Pe.height,0,De,Ge,Pe.data);E.generateMipmaps=!1}else H?(Ie&&t.texStorage2D(s.TEXTURE_2D,be,Oe,ye.width,ye.height),Ee&&Ze(E,ye,De,Ge)):t.texImage2D(s.TEXTURE_2D,0,Oe,ye.width,ye.height,0,De,Ge,ye.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){H&&Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Oe,ht[0].width,ht[0].height,ye.depth);for(let xe=0,fe=ht.length;xe<fe;xe++)if(Pe=ht[xe],E.format!==Ri)if(De!==null)if(H){if(Ee)if(E.layerUpdates.size>0){const Te=e0(Pe.width,Pe.height,E.format,E.type);for(const at of E.layerUpdates){const yt=Pe.data.subarray(at*Te/Pe.data.BYTES_PER_ELEMENT,(at+1)*Te/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,at,Pe.width,Pe.height,1,De,yt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,ye.depth,De,Pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,Pe.width,Pe.height,ye.depth,0,Pe.data,0,0);else _t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ee&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,ye.depth,De,Ge,Pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,xe,Oe,Pe.width,Pe.height,ye.depth,0,De,Ge,Pe.data)}else{H&&Ie&&t.texStorage2D(s.TEXTURE_2D,be,Oe,ht[0].width,ht[0].height);for(let xe=0,fe=ht.length;xe<fe;xe++)Pe=ht[xe],E.format!==Ri?De!==null?H?Ee&&t.compressedTexSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,De,Pe.data):t.compressedTexImage2D(s.TEXTURE_2D,xe,Oe,Pe.width,Pe.height,0,Pe.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,De,Ge,Pe.data):t.texImage2D(s.TEXTURE_2D,xe,Oe,Pe.width,Pe.height,0,De,Ge,Pe.data)}else if(E.isDataArrayTexture)if(H){if(Ie&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Oe,ye.width,ye.height,ye.depth),Ee)if(E.layerUpdates.size>0){const xe=e0(ye.width,ye.height,E.format,E.type);for(const fe of E.layerUpdates){const Te=ye.data.subarray(fe*xe/ye.data.BYTES_PER_ELEMENT,(fe+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,ye.width,ye.height,1,De,Ge,Te)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,De,Ge,ye.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Oe,ye.width,ye.height,ye.depth,0,De,Ge,ye.data);else if(E.isData3DTexture)H?(Ie&&t.texStorage3D(s.TEXTURE_3D,be,Oe,ye.width,ye.height,ye.depth),Ee&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,De,Ge,ye.data)):t.texImage3D(s.TEXTURE_3D,0,Oe,ye.width,ye.height,ye.depth,0,De,Ge,ye.data);else if(E.isFramebufferTexture){if(Ie)if(H)t.texStorage2D(s.TEXTURE_2D,be,Oe,ye.width,ye.height);else{let xe=ye.width,fe=ye.height;for(let Te=0;Te<be;Te++)t.texImage2D(s.TEXTURE_2D,Te,Oe,xe,fe,0,De,Ge,null),xe>>=1,fe>>=1}}else if(ht.length>0){if(H&&Ie){const xe=Ye(ht[0]);t.texStorage2D(s.TEXTURE_2D,be,Oe,xe.width,xe.height)}for(let xe=0,fe=ht.length;xe<fe;xe++)Pe=ht[xe],H?Ee&&t.texSubImage2D(s.TEXTURE_2D,xe,0,0,De,Ge,Pe):t.texImage2D(s.TEXTURE_2D,xe,Oe,De,Ge,Pe);E.generateMipmaps=!1}else if(H){if(Ie){const xe=Ye(ye);t.texStorage2D(s.TEXTURE_2D,be,Oe,xe.width,xe.height)}Ee&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,Ge,ye)}else t.texImage2D(s.TEXTURE_2D,0,Oe,De,Ge,ye);y(E)&&x(pe),$e.__version=ce.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function me(I,E,X){if(E.image.length!==6)return;const pe=Ce(I,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+X);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){t.activeTexture(s.TEXTURE0+X);const $e=Bt.getPrimaries(Bt.workingColorSpace),Ae=E.colorSpace===$r?null:Bt.getPrimaries(E.colorSpace),Ve=E.colorSpace===$r||$e===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);const st=E.isCompressedTexture||E.image[0].isCompressedTexture,ye=E.image[0]&&E.image[0].isDataTexture,De=[];for(let fe=0;fe<6;fe++)!st&&!ye?De[fe]=C(E.image[fe],!0,o.maxCubemapSize):De[fe]=ye?E.image[fe].image:E.image[fe],De[fe]=Ct(E,De[fe]);const Ge=De[0],Oe=l.convert(E.format,E.colorSpace),Pe=l.convert(E.type),ht=L(E.internalFormat,Oe,Pe,E.colorSpace),H=E.isVideoTexture!==!0,Ie=ce.__version===void 0||pe===!0,Ee=ge.dataReady;let be=U(E,Ge);se(s.TEXTURE_CUBE_MAP,E);let xe;if(st){H&&Ie&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){xe=De[fe].mipmaps;for(let Te=0;Te<xe.length;Te++){const at=xe[Te];E.format!==Ri?Oe!==null?H?Ee&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,0,0,at.width,at.height,Oe,at.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,ht,at.width,at.height,0,at.data):_t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,0,0,at.width,at.height,Oe,Pe,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te,ht,at.width,at.height,0,Oe,Pe,at.data)}}}else{if(xe=E.mipmaps,H&&Ie){xe.length>0&&be++;const fe=Ye(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ye){H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,De[fe].width,De[fe].height,Oe,Pe,De[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,De[fe].width,De[fe].height,0,Oe,Pe,De[fe].data);for(let Te=0;Te<xe.length;Te++){const yt=xe[Te].image[fe].image;H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,0,0,yt.width,yt.height,Oe,Pe,yt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,ht,yt.width,yt.height,0,Oe,Pe,yt.data)}}else{H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe,Pe,De[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ht,Oe,Pe,De[fe]);for(let Te=0;Te<xe.length;Te++){const at=xe[Te];H?Ee&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,0,0,Oe,Pe,at.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Te+1,ht,Oe,Pe,at.image[fe])}}}y(E)&&x(s.TEXTURE_CUBE_MAP),ce.__version=ge.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function _e(I,E,X,pe,ge,ce){const $e=l.convert(X.format,X.colorSpace),Ae=l.convert(X.type),Ve=L(X.internalFormat,$e,Ae,X.colorSpace),st=r.get(E),ye=r.get(X);if(ye.__renderTarget=E,!st.__hasExternalTextures){const De=Math.max(1,E.width>>ce),Ge=Math.max(1,E.height>>ce);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Ve,De,Ge,E.depth,0,$e,Ae,null):t.texImage2D(ge,ce,Ve,De,Ge,0,$e,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,0,j(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ge,ye.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(I,E,X){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const pe=E.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=P(E.stencilBuffer,ge),$e=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Gt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(E),ce,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(E),ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,I)}else{const pe=E.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],$e=l.convert(ce.format,ce.colorSpace),Ae=l.convert(ce.type),Ve=L(ce.internalFormat,$e,Ae,ce.colorSpace);Gt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j(E),Ve,E.width,E.height):X?s.renderbufferStorageMultisample(s.RENDERBUFFER,j(E),Ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Ve,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function V(I,E,X){const pe=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",D)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),se(s.TEXTURE_CUBE_MAP,E.depthTexture);const st=l.convert(E.depthTexture.format),ye=l.convert(E.depthTexture.type);let De;E.depthTexture.format===xr?De=s.DEPTH_COMPONENT24:E.depthTexture.format===Ms&&(De=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,De,E.width,E.height,0,st,ye,null)}}else le(E.depthTexture,0);const ce=ge.__webglTexture,$e=j(E),Ae=pe?s.TEXTURE_CUBE_MAP_POSITIVE_X+X:s.TEXTURE_2D,Ve=E.depthTexture.format===Ms?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===xr)Gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ve,Ae,ce,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ve,Ae,ce,0);else if(E.depthTexture.format===Ms)Gt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Ve,Ae,ce,0,$e):s.framebufferTexture2D(s.FRAMEBUFFER,Ve,Ae,ce,0);else throw new Error("Unknown depthTexture format")}function Fe(I){const E=r.get(I),X=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const pe=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=pe}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(X)for(let pe=0;pe<6;pe++)V(E.__webglFramebuffer[pe],I,pe);else{const pe=I.texture.mipmaps;pe&&pe.length>0?V(E.__webglFramebuffer[0],I,0):V(E.__webglFramebuffer,I,0)}else if(X){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),Ne(E.__webglDepthbuffer[pe],I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}else{const pe=I.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ne(E.__webglDepthbuffer,I,!1);else{const ge=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Nt(I,E,X){const pe=r.get(I);E!==void 0&&_e(pe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),X!==void 0&&Fe(I)}function Be(I){const E=I.texture,X=r.get(I),pe=r.get(E);I.addEventListener("dispose",O);const ge=I.textures,ce=I.isWebGLCubeRenderTarget===!0,$e=ge.length>1;if($e||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,d.memory.textures++),ce){X.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[Ae]=[];for(let Ve=0;Ve<E.mipmaps.length;Ve++)X.__webglFramebuffer[Ae][Ve]=s.createFramebuffer()}else X.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)X.__webglFramebuffer[Ae]=s.createFramebuffer()}else X.__webglFramebuffer=s.createFramebuffer();if($e)for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const st=r.get(ge[Ae]);st.__webglTexture===void 0&&(st.__webglTexture=s.createTexture(),d.memory.textures++)}if(I.samples>0&&Gt(I)===!1){X.__webglMultisampledFramebuffer=s.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Ve=ge[Ae];X.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,X.__webglColorRenderbuffer[Ae]);const st=l.convert(Ve.format,Ve.colorSpace),ye=l.convert(Ve.type),De=L(Ve.internalFormat,st,ye,Ve.colorSpace,I.isXRRenderTarget===!0),Ge=j(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,De,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,X.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(X.__webglDepthRenderbuffer=s.createRenderbuffer(),Ne(X.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)_e(X.__webglFramebuffer[Ae][Ve],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ve);else _e(X.__webglFramebuffer[Ae],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($e){for(let Ae=0,Ve=ge.length;Ae<Ve;Ae++){const st=ge[Ae],ye=r.get(st);let De=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(De=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(De,ye.__webglTexture),se(De,st),_e(X.__webglFramebuffer,I,st,s.COLOR_ATTACHMENT0+Ae,De,0),y(st)&&x(De)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ae=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),se(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Ve=0;Ve<E.mipmaps.length;Ve++)_e(X.__webglFramebuffer[Ve],I,E,s.COLOR_ATTACHMENT0,Ae,Ve);else _e(X.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&x(Ae),t.unbindTexture()}I.depthBuffer&&Fe(I)}function dt(I){const E=I.textures;for(let X=0,pe=E.length;X<pe;X++){const ge=E[X];if(y(ge)){const ce=A(I),$e=r.get(ge).__webglTexture;t.bindTexture(ce,$e),x(ce),t.unbindTexture()}}}const Dt=[],nt=[];function jt(I){if(I.samples>0){if(Gt(I)===!1){const E=I.textures,X=I.width,pe=I.height;let ge=s.COLOR_BUFFER_BIT;const ce=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=r.get(I),Ae=E.length>1;if(Ae)for(let st=0;st<E.length;st++)t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ve=I.texture.mipmaps;Ve&&Ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let st=0;st<E.length;st++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[st]);const ye=r.get(E[st]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ye,0)}s.blitFramebuffer(0,0,X,pe,0,0,X,pe,ge,s.NEAREST),p===!0&&(Dt.length=0,nt.length=0,Dt.push(s.COLOR_ATTACHMENT0+st),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Dt.push(ce),nt.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,nt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let st=0;st<E.length;st++){t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.RENDERBUFFER,$e.__webglColorRenderbuffer[st]);const ye=r.get(E[st]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+st,s.TEXTURE_2D,ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&p){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function j(I){return Math.min(o.maxSamples,I.samples)}function Gt(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function xt(I){const E=d.render.frame;v.get(I)!==E&&(v.set(I,E),I.update())}function Ct(I,E){const X=I.colorSpace,pe=I.format,ge=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||X!==xa&&X!==$r&&(Bt.getTransfer(X)===Xt?(pe!==Ri||ge!==li)&&_t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",X)),E}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(m.width=I.naturalWidth||I.width,m.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(m.width=I.displayWidth,m.height=I.displayHeight):(m.width=I.width,m.height=I.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=Y,this.setTexture2D=le,this.setTexture2DArray=ne,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qE(s,e){function t(r,o=$r){let l;const d=Bt.getTransfer(o);if(r===li)return s.UNSIGNED_BYTE;if(r===wf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Tf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===W0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===X0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===G0)return s.BYTE;if(r===H0)return s.SHORT;if(r===ho)return s.UNSIGNED_SHORT;if(r===bf)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===gr)return s.HALF_FLOAT;if(r===q0)return s.ALPHA;if(r===Y0)return s.RGB;if(r===Ri)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===Ms)return s.DEPTH_STENCIL;if(r===$0)return s.RED;if(r===Af)return s.RED_INTEGER;if(r===ga)return s.RG;if(r===Cf)return s.RG_INTEGER;if(r===Rf)return s.RGBA_INTEGER;if(r===Xl||r===ql||r===Yl||r===$l)if(d===Xt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kd||r===Bd||r===zd||r===jd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===jd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===Gd||r===Hd||r===Wd||r===Xd||r===qd||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Vd||r===Gd)return d===Xt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Hd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Wd)return l.COMPRESSED_R11_EAC;if(r===Xd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===qd)return l.COMPRESSED_RG11_EAC;if(r===Yd)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$d||r===Kd||r===Zd||r===Qd||r===Jd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$d)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Jd)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ef)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===tf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===sf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===af)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===of)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===lf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===cf)return d===Xt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===uf||r===df||r===ff)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===uf)return d===Xt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===df)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hf||r===pf||r===mf||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===hf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===pf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===po?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const YE=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new og(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new $i({vertexShader:YE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new Hn(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends ws{constructor(e,t){super();const r=this;let o=null,l=1,d=null,f="local-floor",p=1,m=null,v=null,_=null,S=null,M=null,T=null;const C=typeof XRWebGLBinding<"u",y=new KE,x={},A=t.getContextAttributes();let L=null,P=null;const U=[],D=[],O=new mt;let z=null;const w=new Wn;w.viewport=new sn;const N=new Wn;N.viewport=new sn;const B=[w,N],Y=new s1;let K=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=U[ie];return me===void 0&&(me=new dd,U[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=U[ie];return me===void 0&&(me=new dd,U[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=U[ie];return me===void 0&&(me=new dd,U[ie]=me),me.getHandSpace()};function le(ie){const me=D.indexOf(ie.inputSource);if(me===-1)return;const _e=U[me];_e!==void 0&&(_e.update(ie.inputSource,ie.frame,m||d),_e.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){o.removeEventListener("select",le),o.removeEventListener("selectstart",le),o.removeEventListener("selectend",le),o.removeEventListener("squeeze",le),o.removeEventListener("squeezestart",le),o.removeEventListener("squeezeend",le),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<U.length;ie++){const me=D[ie];me!==null&&(D[ie]=null,U[ie].disconnect(me))}K=null,ae=null,y.reset();for(const ie in x)delete x[ie];e.setRenderTarget(L),M=null,S=null,_=null,o=null,P=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(z),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&_t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&_t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(ie){m=ie},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,t)),_},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(ie){if(o=ie,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",le),o.addEventListener("selectstart",le),o.addEventListener("selectend",le),o.addEventListener("squeeze",le),o.addEventListener("squeezestart",le),o.addEventListener("squeezeend",le),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",Z),A.xrCompatible!==!0&&await t.makeXRCompatible(),z=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ne=null,V=null;A.depth&&(V=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=A.stencil?Ms:xr,Ne=A.stencil?po:qi);const Fe={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:l};_=this.getBinding(),S=_.createProjectionLayer(Fe),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new Wi(S.textureWidth,S.textureHeight,{format:Ri,type:li,depthTexture:new xo(S.textureWidth,S.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const _e={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,_e),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ri,type:li,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(ie){for(let me=0;me<ie.removed.length;me++){const _e=ie.removed[me],Ne=D.indexOf(_e);Ne>=0&&(D[Ne]=null,U[Ne].disconnect(_e))}for(let me=0;me<ie.added.length;me++){const _e=ie.added[me];let Ne=D.indexOf(_e);if(Ne===-1){for(let Fe=0;Fe<U.length;Fe++)if(Fe>=D.length){D.push(_e),Ne=Fe;break}else if(D[Fe]===null){D[Fe]=_e,Ne=Fe;break}if(Ne===-1)break}const V=U[Ne];V&&V.connect(_e)}}const W=new Q,he=new Q;function oe(ie,me,_e){W.setFromMatrixPosition(me.matrixWorld),he.setFromMatrixPosition(_e.matrixWorld);const Ne=W.distanceTo(he),V=me.projectionMatrix.elements,Fe=_e.projectionMatrix.elements,Nt=V[14]/(V[10]-1),Be=V[14]/(V[10]+1),dt=(V[9]+1)/V[5],Dt=(V[9]-1)/V[5],nt=(V[8]-1)/V[0],jt=(Fe[8]+1)/Fe[0],j=Nt*nt,Gt=Nt*jt,xt=Ne/(-nt+jt),Ct=xt*-nt;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Ct),ie.translateZ(xt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),V[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ye=Nt+xt,I=Be+xt,E=j-Ct,X=Gt+(Ne-Ct),pe=dt*Be/I*Ye,ge=Dt*Be/I*Ye;ie.projectionMatrix.makePerspective(E,X,pe,ge,Ye,I),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function k(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(o===null)return;let me=ie.near,_e=ie.far;y.texture!==null&&(y.depthNear>0&&(me=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),Y.near=N.near=w.near=me,Y.far=N.far=w.far=_e,(K!==Y.near||ae!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),K=Y.near,ae=Y.far),Y.layers.mask=ie.layers.mask|6,w.layers.mask=Y.layers.mask&3,N.layers.mask=Y.layers.mask&5;const Ne=ie.parent,V=Y.cameras;k(Y,Ne);for(let Fe=0;Fe<V.length;Fe++)k(V[Fe],Ne);V.length===2?oe(Y,w,N):Y.projectionMatrix.copy(w.projectionMatrix),se(ie,Y,Ne)};function se(ie,me,_e){_e===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(_e.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=nc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(S===null&&M===null))return p},this.setFoveation=function(ie){p=ie,S!==null&&(S.fixedFoveation=ie),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(ie){return x[ie]};let Ce=null;function He(ie,me){if(v=me.getViewerPose(m||d),T=me,v!==null){const _e=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let Ne=!1;_e.length!==Y.cameras.length&&(Y.cameras.length=0,Ne=!0);for(let Be=0;Be<_e.length;Be++){const dt=_e[Be];let Dt=null;if(M!==null)Dt=M.getViewport(dt);else{const jt=_.getViewSubImage(S,dt);Dt=jt.viewport,Be===0&&(e.setRenderTargetTextures(P,jt.colorTexture,jt.depthStencilTexture),e.setRenderTarget(P))}let nt=B[Be];nt===void 0&&(nt=new Wn,nt.layers.enable(Be),nt.viewport=new sn,B[Be]=nt),nt.matrix.fromArray(dt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(dt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Be===0&&(Y.matrix.copy(nt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ne===!0&&Y.cameras.push(nt)}const V=o.enabledFeatures;if(V&&V.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const Be=_.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&y.init(Be,o.renderState)}if(V&&V.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let Be=0;Be<_e.length;Be++){const dt=_e[Be].camera;if(dt){let Dt=x[dt];Dt||(Dt=new og,x[dt]=Dt);const nt=_.getCameraImage(dt);Dt.sourceTexture=nt}}}}for(let _e=0;_e<U.length;_e++){const Ne=D[_e],V=U[_e];Ne!==null&&V!==void 0&&V.update(Ne,me,m||d)}Ce&&Ce(ie,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),T=null}const Ze=new dg;Ze.setAnimationLoop(He),this.setAnimationLoop=function(ie){Ce=ie},this.dispose=function(){}}}const vs=new Yi,QE=new nn;function JE(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,ng(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,A,L,P){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),_(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),S(y,x),x.isMeshPhysicalMaterial&&M(y,x,P)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),C(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(d(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,A,L):x.isSpriteMaterial?m(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===ei&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===ei&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const A=e.get(x),L=A.envMap,P=A.envMapRotation;L&&(y.envMap.value=L,vs.copy(P),vs.x*=-1,vs.y*=-1,vs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),y.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(vs)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,A,L){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*A,y.scale.value=L*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function S(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function M(y,x,A){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===ei&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=A.texture,y.transmissionSamplerSize.value.set(A.width,A.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function C(y,x){const A=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(A.matrixWorld),y.nearDistance.value=A.shadow.camera.near,y.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function eb(s,e,t,r){let o={},l={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,L){const P=L.program;r.uniformBlockBinding(A,P)}function m(A,L){let P=o[A.id];P===void 0&&(T(A),P=v(A),o[A.id]=P,A.addEventListener("dispose",y));const U=L.program;r.updateUBOMapping(A,U);const D=e.render.frame;l[A.id]!==D&&(S(A),l[A.id]=D)}function v(A){const L=_();A.__bindingPointIndex=L;const P=s.createBuffer(),U=A.__size,D=A.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,U,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,P),P}function _(){for(let A=0;A<f;A++)if(d.indexOf(A)===-1)return d.push(A),A;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(A){const L=o[A.id],P=A.uniforms,U=A.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let D=0,O=P.length;D<O;D++){const z=Array.isArray(P[D])?P[D]:[P[D]];for(let w=0,N=z.length;w<N;w++){const B=z[w];if(M(B,D,w,U)===!0){const Y=B.__offset,K=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let le=0;le<K.length;le++){const ne=K[le],Z=C(ne);typeof ne=="number"||typeof ne=="boolean"?(B.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,Y+ae,B.__data)):ne.isMatrix3?(B.__data[0]=ne.elements[0],B.__data[1]=ne.elements[1],B.__data[2]=ne.elements[2],B.__data[3]=0,B.__data[4]=ne.elements[3],B.__data[5]=ne.elements[4],B.__data[6]=ne.elements[5],B.__data[7]=0,B.__data[8]=ne.elements[6],B.__data[9]=ne.elements[7],B.__data[10]=ne.elements[8],B.__data[11]=0):(ne.toArray(B.__data,ae),ae+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(A,L,P,U){const D=A.value,O=L+"_"+P;if(U[O]===void 0)return typeof D=="number"||typeof D=="boolean"?U[O]=D:U[O]=D.clone(),!0;{const z=U[O];if(typeof D=="number"||typeof D=="boolean"){if(z!==D)return U[O]=D,!0}else if(z.equals(D)===!1)return z.copy(D),!0}return!1}function T(A){const L=A.uniforms;let P=0;const U=16;for(let O=0,z=L.length;O<z;O++){const w=Array.isArray(L[O])?L[O]:[L[O]];for(let N=0,B=w.length;N<B;N++){const Y=w[N],K=Array.isArray(Y.value)?Y.value:[Y.value];for(let ae=0,le=K.length;ae<le;ae++){const ne=K[ae],Z=C(ne),W=P%U,he=W%Z.boundary,oe=W+he;P+=he,oe!==0&&U-oe<Z.storage&&(P+=U-oe),Y.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=Z.storage}}}const D=P%U;return D>0&&(P+=U-D),A.__size=P,A.__cache={},this}function C(A){const L={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(L.boundary=4,L.storage=4):A.isVector2?(L.boundary=8,L.storage=8):A.isVector3||A.isColor?(L.boundary=16,L.storage=12):A.isVector4?(L.boundary=16,L.storage=16):A.isMatrix3?(L.boundary=48,L.storage=48):A.isMatrix4?(L.boundary=64,L.storage=64):A.isTexture?_t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):_t("WebGLRenderer: Unsupported uniform value type.",A),L}function y(A){const L=A.target;L.removeEventListener("dispose",y);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function x(){for(const A in o)s.deleteBuffer(o[A]);d=[],o={},l={}}return{bind:p,update:m,dispose:x}}const tb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function nb(){return zi===null&&(zi=new G_(tb,16,16,ga,gr),zi.name="DFG_LUT",zi.minFilter=kn,zi.magFilter=kn,zi.wrapS=fr,zi.wrapT=fr,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class gg{constructor(e={}){const{canvas:t=g_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1,outputBufferType:M=li}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=d;const C=M,y=new Set([Rf,Cf,Af]),x=new Set([li,qi,ho,po,wf,Tf]),A=new Uint32Array(4),L=new Int32Array(4);let P=null,U=null;const D=[],O=[];let z=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let N=!1;this._outputColorSpace=On;let B=0,Y=0,K=null,ae=-1,le=null;const ne=new sn,Z=new sn;let W=null;const he=new wt(0);let oe=0,k=t.width,se=t.height,Ce=1,He=null,Ze=null;const ie=new sn(0,0,k,se),me=new sn(0,0,k,se);let _e=!1;const Ne=new Ff;let V=!1,Fe=!1;const Nt=new nn,Be=new Q,dt=new sn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function jt(){return K===null?Ce:1}let j=r;function Gt(R,$){return t.getContext(R,$)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Mf}`),t.addEventListener("webglcontextlost",at,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Tt,!1),j===null){const $="webgl2";if(j=Gt($,R),j===null)throw Gt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw kt("WebGLRenderer: "+R.message),R}let xt,Ct,Ye,I,E,X,pe,ge,ce,$e,Ae,Ve,st,ye,De,Ge,Oe,Pe,ht,H,Ie,Ee,be,xe;function fe(){xt=new nM(j),xt.init(),Ee=new qE(j,xt),Ct=new qS(j,xt,e,Ee),Ye=new WE(j,xt),Ct.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),I=new sM(j),E=new NE,X=new XE(j,xt,Ye,E,Ct,Ee,I),pe=new $S(w),ge=new tM(w),ce=new c1(j),be=new WS(j,ce),$e=new iM(j,ce,I,be),Ae=new oM(j,$e,ce,I),ht=new aM(j,Ct,X),Ge=new YS(E),Ve=new RE(w,pe,ge,xt,Ct,be,Ge),st=new JE(w,E),ye=new DE,De=new kE(xt),Pe=new HS(w,pe,ge,Ye,Ae,T,p),Oe=new GE(w,Ae,Ct),xe=new eb(j,I,Ct,Ye),H=new XS(j,xt,I),Ie=new rM(j,xt,I),I.programs=Ve.programs,w.capabilities=Ct,w.extensions=xt,w.properties=E,w.renderLists=ye,w.shadowMap=Oe,w.state=Ye,w.info=I}fe(),C!==li&&(z=new cM(C,t.width,t.height,o,l));const Te=new ZE(w,j);this.xr=Te,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const R=xt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Ce},this.setPixelRatio=function(R){R!==void 0&&(Ce=R,this.setSize(k,se,!1))},this.getSize=function(R){return R.set(k,se)},this.setSize=function(R,$,de=!0){if(Te.isPresenting){_t("WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,se=$,t.width=Math.floor(R*Ce),t.height=Math.floor($*Ce),de===!0&&(t.style.width=R+"px",t.style.height=$+"px"),z!==null&&z.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(k*Ce,se*Ce).floor()},this.setDrawingBufferSize=function(R,$,de){k=R,se=$,Ce=de,t.width=Math.floor(R*de),t.height=Math.floor($*de),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(C===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(ne)},this.getViewport=function(R){return R.copy(ie)},this.setViewport=function(R,$,de,re){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,$,de,re),Ye.viewport(ne.copy(ie).multiplyScalar(Ce).round())},this.getScissor=function(R){return R.copy(me)},this.setScissor=function(R,$,de,re){R.isVector4?me.set(R.x,R.y,R.z,R.w):me.set(R,$,de,re),Ye.scissor(Z.copy(me).multiplyScalar(Ce).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(R){Ye.setScissorTest(_e=R)},this.setOpaqueSort=function(R){He=R},this.setTransparentSort=function(R){Ze=R},this.getClearColor=function(R){return R.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,de=!0){let re=0;if(R){let J=!1;if(K!==null){const Ue=K.texture.format;J=y.has(Ue)}if(J){const Ue=K.texture.type,je=x.has(Ue),Le=Pe.getClearColor(),qe=Pe.getClearAlpha(),We=Le.r,lt=Le.g,it=Le.b;je?(A[0]=We,A[1]=lt,A[2]=it,A[3]=qe,j.clearBufferuiv(j.COLOR,0,A)):(L[0]=We,L[1]=lt,L[2]=it,L[3]=qe,j.clearBufferiv(j.COLOR,0,L))}else re|=j.COLOR_BUFFER_BIT}$&&(re|=j.DEPTH_BUFFER_BIT),de&&(re|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",at,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Tt,!1),Pe.dispose(),ye.dispose(),De.dispose(),E.dispose(),pe.dispose(),ge.dispose(),Ae.dispose(),be.dispose(),xe.dispose(),Ve.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Di),Te.removeEventListener("sessionend",Li),ti.stop()};function at(R){R.preventDefault(),Pm("WebGLRenderer: Context Lost."),N=!0}function yt(){Pm("WebGLRenderer: Context Restored."),N=!1;const R=I.autoReset,$=Oe.enabled,de=Oe.autoUpdate,re=Oe.needsUpdate,J=Oe.type;fe(),I.autoReset=R,Oe.enabled=$,Oe.autoUpdate=de,Oe.needsUpdate=re,Oe.type=J}function Tt(R){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Bn(R){const $=R.target;$.removeEventListener("dispose",Bn),gn($)}function gn(R){Ki(R),E.remove(R)}function Ki(R){const $=E.get(R).programs;$!==void 0&&($.forEach(function(de){Ve.releaseProgram(de)}),R.isShaderMaterial&&Ve.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,de,re,J,Ue){$===null&&($=Dt);const je=J.isMesh&&J.matrixWorld.determinant()<0,Le=Sr(R,$,de,re,J);Ye.setMaterial(re,je);let qe=de.index,We=1;if(re.wireframe===!0){if(qe=$e.getWireframeAttribute(de),qe===void 0)return;We=2}const lt=de.drawRange,it=de.attributes.position;let vt=lt.start*We,Et=(lt.start+lt.count)*We;Ue!==null&&(vt=Math.max(vt,Ue.start*We),Et=Math.min(Et,(Ue.start+Ue.count)*We)),qe!==null?(vt=Math.max(vt,0),Et=Math.min(Et,qe.count)):it!=null&&(vt=Math.max(vt,0),Et=Math.min(Et,it.count));const Ht=Et-vt;if(Ht<0||Ht===1/0)return;be.setup(J,re,Le,de,qe);let Vt,Lt=H;if(qe!==null&&(Vt=ce.get(qe),Lt=Ie,Lt.setIndex(Vt)),J.isMesh)re.wireframe===!0?(Ye.setLineWidth(re.wireframeLinewidth*jt()),Lt.setMode(j.LINES)):Lt.setMode(j.TRIANGLES);else if(J.isLine){let rt=re.linewidth;rt===void 0&&(rt=1),Ye.setLineWidth(rt*jt()),J.isLineSegments?Lt.setMode(j.LINES):J.isLineLoop?Lt.setMode(j.LINE_LOOP):Lt.setMode(j.LINE_STRIP)}else J.isPoints?Lt.setMode(j.POINTS):J.isSprite&&Lt.setMode(j.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)go("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Lt.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const rt=J._multiDrawStarts,It=J._multiDrawCounts,At=J._multiDrawCount,pt=qe?ce.get(qe).bytesPerElement:1,ot=E.get(re).currentProgram.getUniforms();for(let Ut=0;Ut<At;Ut++)ot.setValue(j,"_gl_DrawID",Ut),Lt.render(rt[Ut]/pt,It[Ut])}else if(J.isInstancedMesh)Lt.renderInstances(vt,Ht,J.count);else if(de.isInstancedBufferGeometry){const rt=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,It=Math.min(de.instanceCount,rt);Lt.renderInstances(vt,Ht,It)}else Lt.render(vt,Ht)};function Ni(R,$,de){R.transparent===!0&&R.side===dr&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,bn(R,$,de),R.side=Zr,R.needsUpdate=!0,bn(R,$,de),R.side=dr):bn(R,$,de)}this.compile=function(R,$,de=null){de===null&&(de=R),U=De.get(de),U.init($),O.push(U),de.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),R!==de&&R.traverseVisible(function(J){J.isLight&&J.layers.test($.layers)&&(U.pushLight(J),J.castShadow&&U.pushShadow(J))}),U.setupLights();const re=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Ue=J.material;if(Ue)if(Array.isArray(Ue))for(let je=0;je<Ue.length;je++){const Le=Ue[je];Ni(Le,de,J),re.add(Le)}else Ni(Ue,de,J),re.add(Ue)}),U=O.pop(),re},this.compileAsync=function(R,$,de=null){const re=this.compile(R,$,de);return new Promise(J=>{function Ue(){if(re.forEach(function(je){E.get(je).currentProgram.isReady()&&re.delete(je)}),re.size===0){J(R);return}setTimeout(Ue,10)}xt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let vr=null;function Pi(R){vr&&vr(R)}function Di(){ti.stop()}function Li(){ti.start()}const ti=new dg;ti.setAnimationLoop(Pi),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){vr=R,Te.setAnimationLoop(R),R===null?ti.stop():ti.start()},Te.addEventListener("sessionstart",Di),Te.addEventListener("sessionend",Li),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;const de=Te.enabled===!0&&Te.isPresenting===!0,re=z!==null&&(K===null||de)&&z.begin(w,K);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera($),$=Te.getCamera()),R.isScene===!0&&R.onBeforeRender(w,R,$,K),U=De.get(R,O.length),U.init($),O.push(U),Nt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ne.setFromProjectionMatrix(Nt,Gi,$.reversedDepth),Fe=this.localClippingEnabled,V=Ge.init(this.clippingPlanes,Fe),P=ye.get(R,D.length),P.init(),D.push(P),Te.enabled===!0&&Te.isPresenting===!0){const je=w.xr.getDepthSensingMesh();je!==null&&Zi(je,$,-1/0,w.sortObjects)}Zi(R,$,0,w.sortObjects),P.finish(),w.sortObjects===!0&&P.sort(He,Ze),nt=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,nt&&Pe.addToRenderList(P,R),this.info.render.frame++,V===!0&&Ge.beginShadows();const J=U.state.shadowsArray;if(Oe.render(J,R,$),V===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&z.hasRenderPass())===!1){const je=P.opaque,Le=P.transmissive;if(U.setupLights(),$.isArrayCamera){const qe=$.cameras;if(Le.length>0)for(let We=0,lt=qe.length;We<lt;We++){const it=qe[We];Jr(je,Le,R,it)}nt&&Pe.render(R);for(let We=0,lt=qe.length;We<lt;We++){const it=qe[We];Qr(P,R,it,it.viewport)}}else Le.length>0&&Jr(je,Le,R,$),nt&&Pe.render(R),Qr(P,R,$)}K!==null&&Y===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),re&&z.end(w),R.isScene===!0&&R.onAfterRender(w,R,$),be.resetDefaultState(),ae=-1,le=null,O.pop(),O.length>0?(U=O[O.length-1],V===!0&&Ge.setGlobalState(w.clippingPlanes,U.state.camera)):U=null,D.pop(),D.length>0?P=D[D.length-1]:P=null};function Zi(R,$,de,re){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)de=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)U.pushLight(R),R.castShadow&&U.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Ne.intersectsSprite(R)){re&&dt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Nt);const je=Ae.update(R),Le=R.material;Le.visible&&P.push(R,je,Le,de,dt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Ne.intersectsObject(R))){const je=Ae.update(R),Le=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),dt.copy(R.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),dt.copy(je.boundingSphere.center)),dt.applyMatrix4(R.matrixWorld).applyMatrix4(Nt)),Array.isArray(Le)){const qe=je.groups;for(let We=0,lt=qe.length;We<lt;We++){const it=qe[We],vt=Le[it.materialIndex];vt&&vt.visible&&P.push(R,je,vt,de,dt.z,it)}}else Le.visible&&P.push(R,je,Le,de,dt.z,null)}}const Ue=R.children;for(let je=0,Le=Ue.length;je<Le;je++)Zi(Ue[je],$,de,re)}function Qr(R,$,de,re){const{opaque:J,transmissive:Ue,transparent:je}=R;U.setupLightsView(de),V===!0&&Ge.setGlobalState(w.clippingPlanes,de),re&&Ye.viewport(ne.copy(re)),J.length>0&&zn(J,$,de),Ue.length>0&&zn(Ue,$,de),je.length>0&&zn(je,$,de),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Jr(R,$,de,re){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[re.id]===void 0){const vt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[re.id]=new Wi(1,1,{generateMipmaps:!0,type:vt?gr:li,minFilter:Ss,samples:Ct.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Bt.workingColorSpace})}const Ue=U.state.transmissionRenderTarget[re.id],je=re.viewport||ne;Ue.setSize(je.z*w.transmissionResolutionScale,je.w*w.transmissionResolutionScale);const Le=w.getRenderTarget(),qe=w.getActiveCubeFace(),We=w.getActiveMipmapLevel();w.setRenderTarget(Ue),w.getClearColor(he),oe=w.getClearAlpha(),oe<1&&w.setClearColor(16777215,.5),w.clear(),nt&&Pe.render(de);const lt=w.toneMapping;w.toneMapping=Hi;const it=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),U.setupLightsView(re),V===!0&&Ge.setGlobalState(w.clippingPlanes,re),zn(R,de,re),X.updateMultisampleRenderTarget(Ue),X.updateRenderTargetMipmap(Ue),xt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Et=0,Ht=$.length;Et<Ht;Et++){const Vt=$[Et],{object:Lt,geometry:rt,material:It,group:At}=Vt;if(It.side===dr&&Lt.layers.test(re.layers)){const pt=It.side;It.side=ei,It.needsUpdate=!0,_r(Lt,de,re,rt,It,At),It.side=pt,It.needsUpdate=!0,vt=!0}}vt===!0&&(X.updateMultisampleRenderTarget(Ue),X.updateRenderTargetMipmap(Ue))}w.setRenderTarget(Le,qe,We),w.setClearColor(he,oe),it!==void 0&&(re.viewport=it),w.toneMapping=lt}function zn(R,$,de){const re=$.isScene===!0?$.overrideMaterial:null;for(let J=0,Ue=R.length;J<Ue;J++){const je=R[J],{object:Le,geometry:qe,group:We}=je;let lt=je.material;lt.allowOverride===!0&&re!==null&&(lt=re),Le.layers.test(de.layers)&&_r(Le,$,de,qe,lt,We)}}function _r(R,$,de,re,J,Ue){R.onBeforeRender(w,$,de,re,J,Ue),R.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(w,$,de,re,R,Ue),J.transparent===!0&&J.side===dr&&J.forceSinglePass===!1?(J.side=ei,J.needsUpdate=!0,w.renderBufferDirect(de,$,re,J,R,Ue),J.side=Zr,J.needsUpdate=!0,w.renderBufferDirect(de,$,re,J,R,Ue),J.side=dr):w.renderBufferDirect(de,$,re,J,R,Ue),R.onAfterRender(w,$,de,re,J,Ue)}function bn(R,$,de){$.isScene!==!0&&($=Dt);const re=E.get(R),J=U.state.lights,Ue=U.state.shadowsArray,je=J.state.version,Le=Ve.getParameters(R,J.state,Ue,$,de),qe=Ve.getProgramCacheKey(Le);let We=re.programs;re.environment=R.isMeshStandardMaterial?$.environment:null,re.fog=$.fog,re.envMap=(R.isMeshStandardMaterial?ge:pe).get(R.envMap||re.environment),re.envMapRotation=re.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,We===void 0&&(R.addEventListener("dispose",Bn),We=new Map,re.programs=We);let lt=We.get(qe);if(lt!==void 0){if(re.currentProgram===lt&&re.lightsStateVersion===je)return yr(R,Le),lt}else Le.uniforms=Ve.getUniforms(R),R.onBeforeCompile(Le,w),lt=Ve.acquireProgram(Le,qe),We.set(qe,lt),re.uniforms=Le.uniforms;const it=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(it.clippingPlanes=Ge.uniform),yr(R,Le),re.needsLights=ci(R),re.lightsStateVersion=je,re.needsLights&&(it.ambientLightColor.value=J.state.ambient,it.lightProbe.value=J.state.probe,it.directionalLights.value=J.state.directional,it.directionalLightShadows.value=J.state.directionalShadow,it.spotLights.value=J.state.spot,it.spotLightShadows.value=J.state.spotShadow,it.rectAreaLights.value=J.state.rectArea,it.ltc_1.value=J.state.rectAreaLTC1,it.ltc_2.value=J.state.rectAreaLTC2,it.pointLights.value=J.state.point,it.pointLightShadows.value=J.state.pointShadow,it.hemisphereLights.value=J.state.hemi,it.directionalShadowMap.value=J.state.directionalShadowMap,it.directionalShadowMatrix.value=J.state.directionalShadowMatrix,it.spotShadowMap.value=J.state.spotShadowMap,it.spotLightMatrix.value=J.state.spotLightMatrix,it.spotLightMap.value=J.state.spotLightMap,it.pointShadowMap.value=J.state.pointShadowMap,it.pointShadowMatrix.value=J.state.pointShadowMatrix),re.currentProgram=lt,re.uniformsList=null,lt}function es(R){if(R.uniformsList===null){const $=R.currentProgram.getUniforms();R.uniformsList=Zl.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function yr(R,$){const de=E.get(R);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function Sr(R,$,de,re,J){$.isScene!==!0&&($=Dt),X.resetTextureUnits();const Ue=$.fog,je=re.isMeshStandardMaterial?$.environment:null,Le=K===null?w.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:xa,qe=(re.isMeshStandardMaterial?ge:pe).get(re.envMap||je),We=re.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,lt=!!de.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),it=!!de.morphAttributes.position,vt=!!de.morphAttributes.normal,Et=!!de.morphAttributes.color;let Ht=Hi;re.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Ht=w.toneMapping);const Vt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Lt=Vt!==void 0?Vt.length:0,rt=E.get(re),It=U.state.lights;if(V===!0&&(Fe===!0||R!==le)){const an=R===le&&re.id===ae;Ge.setState(re,R,an)}let At=!1;re.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==It.state.version||rt.outputColorSpace!==Le||J.isBatchedMesh&&rt.batching===!1||!J.isBatchedMesh&&rt.batching===!0||J.isBatchedMesh&&rt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&rt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&rt.instancing===!1||!J.isInstancedMesh&&rt.instancing===!0||J.isSkinnedMesh&&rt.skinning===!1||!J.isSkinnedMesh&&rt.skinning===!0||J.isInstancedMesh&&rt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&rt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&rt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&rt.instancingMorph===!1&&J.morphTexture!==null||rt.envMap!==qe||re.fog===!0&&rt.fog!==Ue||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ge.numPlanes||rt.numIntersection!==Ge.numIntersection)||rt.vertexAlphas!==We||rt.vertexTangents!==lt||rt.morphTargets!==it||rt.morphNormals!==vt||rt.morphColors!==Et||rt.toneMapping!==Ht||rt.morphTargetsCount!==Lt)&&(At=!0):(At=!0,rt.__version=re.version);let pt=rt.currentProgram;At===!0&&(pt=bn(re,$,J));let ot=!1,Ut=!1,un=!1;const St=pt.getUniforms(),Se=rt.uniforms;if(Ye.useProgram(pt.program)&&(ot=!0,Ut=!0,un=!0),re.id!==ae&&(ae=re.id,Ut=!0),ot||le!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),St.setValue(j,"projectionMatrix",R.projectionMatrix),St.setValue(j,"viewMatrix",R.matrixWorldInverse);const xn=St.map.cameraPosition;xn!==void 0&&xn.setValue(j,Be.setFromMatrixPosition(R.matrixWorld)),Ct.logarithmicDepthBuffer&&St.setValue(j,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&St.setValue(j,"isOrthographic",R.isOrthographicCamera===!0),le!==R&&(le=R,Ut=!0,un=!0)}if(rt.needsLights&&(It.state.directionalShadowMap.length>0&&St.setValue(j,"directionalShadowMap",It.state.directionalShadowMap,X),It.state.spotShadowMap.length>0&&St.setValue(j,"spotShadowMap",It.state.spotShadowMap,X),It.state.pointShadowMap.length>0&&St.setValue(j,"pointShadowMap",It.state.pointShadowMap,X)),J.isSkinnedMesh){St.setOptional(j,J,"bindMatrix"),St.setOptional(j,J,"bindMatrixInverse");const an=J.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),St.setValue(j,"boneTexture",an.boneTexture,X))}J.isBatchedMesh&&(St.setOptional(j,J,"batchingTexture"),St.setValue(j,"batchingTexture",J._matricesTexture,X),St.setOptional(j,J,"batchingIdTexture"),St.setValue(j,"batchingIdTexture",J._indirectTexture,X),St.setOptional(j,J,"batchingColorTexture"),J._colorsTexture!==null&&St.setValue(j,"batchingColorTexture",J._colorsTexture,X));const Ot=de.morphAttributes;if((Ot.position!==void 0||Ot.normal!==void 0||Ot.color!==void 0)&&ht.update(J,de,pt),(Ut||rt.receiveShadow!==J.receiveShadow)&&(rt.receiveShadow=J.receiveShadow,St.setValue(j,"receiveShadow",J.receiveShadow)),re.isMeshGouraudMaterial&&re.envMap!==null&&(Se.envMap.value=qe,Se.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),re.isMeshStandardMaterial&&re.envMap===null&&$.environment!==null&&(Se.envMapIntensity.value=$.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=nb()),Ut&&(St.setValue(j,"toneMappingExposure",w.toneMappingExposure),rt.needsLights&&Ii(Se,un),Ue&&re.fog===!0&&st.refreshFogUniforms(Se,Ue),st.refreshMaterialUniforms(Se,re,Ce,se,U.state.transmissionRenderTarget[R.id]),Zl.upload(j,es(rt),Se,X)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Zl.upload(j,es(rt),Se,X),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&St.setValue(j,"center",J.center),St.setValue(j,"modelViewMatrix",J.modelViewMatrix),St.setValue(j,"normalMatrix",J.normalMatrix),St.setValue(j,"modelMatrix",J.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const an=re.uniformsGroups;for(let xn=0,Ts=an.length;xn<Ts;xn++){const Ui=an[xn];xe.update(Ui,pt),xe.bind(Ui,pt)}}return pt}function Ii(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function ci(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(R,$,de){const re=E.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=$,E.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:de,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){const de=E.get(R);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0};const ya=j.createFramebuffer();this.setRenderTarget=function(R,$=0,de=0){K=R,B=$,Y=de;let re=null,J=!1,Ue=!1;if(R){const Le=E.get(R);if(Le.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(j.FRAMEBUFFER,Le.__webglFramebuffer),ne.copy(R.viewport),Z.copy(R.scissor),W=R.scissorTest,Ye.viewport(ne),Ye.scissor(Z),Ye.setScissorTest(W),ae=-1;return}else if(Le.__webglFramebuffer===void 0)X.setupRenderTarget(R);else if(Le.__hasExternalTextures)X.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const lt=R.depthTexture;if(Le.__boundDepthTexture!==lt){if(lt!==null&&E.has(lt)&&(R.width!==lt.image.width||R.height!==lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(R)}}const qe=R.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ue=!0);const We=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(We[$])?re=We[$][de]:re=We[$],J=!0):R.samples>0&&X.useMultisampledRTT(R)===!1?re=E.get(R).__webglMultisampledFramebuffer:Array.isArray(We)?re=We[de]:re=We,ne.copy(R.viewport),Z.copy(R.scissor),W=R.scissorTest}else ne.copy(ie).multiplyScalar(Ce).floor(),Z.copy(me).multiplyScalar(Ce).floor(),W=_e;if(de!==0&&(re=ya),Ye.bindFramebuffer(j.FRAMEBUFFER,re)&&Ye.drawBuffers(R,re),Ye.viewport(ne),Ye.scissor(Z),Ye.setScissorTest(W),J){const Le=E.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+$,Le.__webglTexture,de)}else if(Ue){const Le=$;for(let qe=0;qe<R.textures.length;qe++){const We=E.get(R.textures[qe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+qe,We.__webglTexture,de,Le)}}else if(R!==null&&de!==0){const Le=E.get(R.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Le.__webglTexture,de)}ae=-1},this.readRenderTargetPixels=function(R,$,de,re,J,Ue,je,Le=0){if(!(R&&R.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe){Ye.bindFramebuffer(j.FRAMEBUFFER,qe);try{const We=R.textures[Le],lt=We.format,it=We.type;if(!Ct.textureFormatReadable(lt)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(it)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-re&&de>=0&&de<=R.height-J&&(R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le),j.readPixels($,de,re,J,Ee.convert(lt),Ee.convert(it),Ue))}finally{const We=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(j.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(R,$,de,re,J,Ue,je,Le=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&je!==void 0&&(qe=qe[je]),qe)if($>=0&&$<=R.width-re&&de>=0&&de<=R.height-J){Ye.bindFramebuffer(j.FRAMEBUFFER,qe);const We=R.textures[Le],lt=We.format,it=We.type;if(!Ct.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const vt=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,vt),j.bufferData(j.PIXEL_PACK_BUFFER,Ue.byteLength,j.STREAM_READ),R.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Le),j.readPixels($,de,re,J,Ee.convert(lt),Ee.convert(it),0);const Et=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(j.FRAMEBUFFER,Et);const Ht=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await x_(j,Ht,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,vt),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Ue),j.deleteBuffer(vt),j.deleteSync(Ht),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,de=0){const re=Math.pow(2,-de),J=Math.floor(R.image.width*re),Ue=Math.floor(R.image.height*re),je=$!==null?$.x:0,Le=$!==null?$.y:0;X.setTexture2D(R,0),j.copyTexSubImage2D(j.TEXTURE_2D,de,0,0,je,Le,J,Ue),Ye.unbindTexture()};const Sa=j.createFramebuffer(),Yt=j.createFramebuffer();this.copyTextureToTexture=function(R,$,de=null,re=null,J=0,Ue=null){Ue===null&&(J!==0?(go("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ue=J,J=0):Ue=0);let je,Le,qe,We,lt,it,vt,Et,Ht;const Vt=R.isCompressedTexture?R.mipmaps[Ue]:R.image;if(de!==null)je=de.max.x-de.min.x,Le=de.max.y-de.min.y,qe=de.isBox3?de.max.z-de.min.z:1,We=de.min.x,lt=de.min.y,it=de.isBox3?de.min.z:0;else{const Ot=Math.pow(2,-J);je=Math.floor(Vt.width*Ot),Le=Math.floor(Vt.height*Ot),R.isDataArrayTexture?qe=Vt.depth:R.isData3DTexture?qe=Math.floor(Vt.depth*Ot):qe=1,We=0,lt=0,it=0}re!==null?(vt=re.x,Et=re.y,Ht=re.z):(vt=0,Et=0,Ht=0);const Lt=Ee.convert($.format),rt=Ee.convert($.type);let It;$.isData3DTexture?(X.setTexture3D($,0),It=j.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(X.setTexture2DArray($,0),It=j.TEXTURE_2D_ARRAY):(X.setTexture2D($,0),It=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,$.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,$.unpackAlignment);const At=j.getParameter(j.UNPACK_ROW_LENGTH),pt=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ot=j.getParameter(j.UNPACK_SKIP_PIXELS),Ut=j.getParameter(j.UNPACK_SKIP_ROWS),un=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,Vt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Vt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,We),j.pixelStorei(j.UNPACK_SKIP_ROWS,lt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,it);const St=R.isDataArrayTexture||R.isData3DTexture,Se=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){const Ot=E.get(R),an=E.get($),xn=E.get(Ot.__renderTarget),Ts=E.get(an.__renderTarget);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,xn.__webglFramebuffer),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Ui=0;Ui<qe;Ui++)St&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,it+Ui),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,E.get($).__webglTexture,Ue,Ht+Ui)),j.blitFramebuffer(We,lt,je,Le,vt,Et,je,Le,j.DEPTH_BUFFER_BIT,j.NEAREST);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const Ot=E.get(R),an=E.get($);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,Sa),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,Yt);for(let xn=0;xn<qe;xn++)St?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ot.__webglTexture,J,it+xn):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Ot.__webglTexture,J),Se?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,an.__webglTexture,Ue,Ht+xn):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,an.__webglTexture,Ue),J!==0?j.blitFramebuffer(We,lt,je,Le,vt,Et,je,Le,j.COLOR_BUFFER_BIT,j.NEAREST):Se?j.copyTexSubImage3D(It,Ue,vt,Et,Ht+xn,We,lt,je,Le):j.copyTexSubImage2D(It,Ue,vt,Et,We,lt,je,Le);Ye.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Se?R.isDataTexture||R.isData3DTexture?j.texSubImage3D(It,Ue,vt,Et,Ht,je,Le,qe,Lt,rt,Vt.data):$.isCompressedArrayTexture?j.compressedTexSubImage3D(It,Ue,vt,Et,Ht,je,Le,qe,Lt,Vt.data):j.texSubImage3D(It,Ue,vt,Et,Ht,je,Le,qe,Lt,rt,Vt):R.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Ue,vt,Et,je,Le,Lt,rt,Vt.data):R.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Ue,vt,Et,Vt.width,Vt.height,Lt,Vt.data):j.texSubImage2D(j.TEXTURE_2D,Ue,vt,Et,je,Le,Lt,rt,Vt);j.pixelStorei(j.UNPACK_ROW_LENGTH,At),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ot),j.pixelStorei(j.UNPACK_SKIP_ROWS,Ut),j.pixelStorei(j.UNPACK_SKIP_IMAGES,un),Ue===0&&$.generateMipmaps&&j.generateMipmap(It),Ye.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&X.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?X.setTextureCube(R,0):R.isData3DTexture?X.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?X.setTexture2DArray(R,0):X.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){B=0,Y=0,K=null,Ye.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Bt._getUnpackColorSpace()}}const b0={type:"change"},Hf={type:"start"},xg={type:"end"},Gl=new If,w0=new Yr,ib=Math.cos(70*__.DEG2RAD),hn=new Q,Jn=2*Math.PI,qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sd=1e-6;class vg extends o1{constructor(e,t=null){super(e,t),this.state=qt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:da.ROTATE,MIDDLE:da.DOLLY,RIGHT:da.PAN},this.touches={ONE:ua.ROTATE,TWO:ua.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new bs,this._lastTargetPosition=new Q,this._quat=new bs().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jm,this._sphericalDelta=new Jm,this._scale=1,this._panOffset=new Q,this._rotateStart=new mt,this._rotateEnd=new mt,this._rotateDelta=new mt,this._panStart=new mt,this._panEnd=new mt,this._panDelta=new mt,this._dollyStart=new mt,this._dollyEnd=new mt,this._dollyDelta=new mt,this._dollyDirection=new Q,this._mouse=new mt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sb.bind(this),this._onPointerDown=rb.bind(this),this._onPointerUp=ab.bind(this),this._onContextMenu=hb.bind(this),this._onMouseWheel=cb.bind(this),this._onKeyDown=ub.bind(this),this._onTouchStart=db.bind(this),this._onTouchMove=fb.bind(this),this._onMouseDown=ob.bind(this),this._onMouseMove=lb.bind(this),this._interceptControlDown=pb.bind(this),this._interceptControlUp=mb.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(b0),this.update(),this.state=qt.NONE}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Jn:r>Math.PI&&(r-=Jn),o<-Math.PI?o+=Jn:o>Math.PI&&(o-=Jn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const d=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=d!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let d=null;if(this.object.isPerspectiveCamera){const f=hn.length();d=this._clampDistance(f*this._scale);const p=f-d;this.object.position.addScaledVector(this._dollyDirection,p),this.object.updateMatrixWorld(),l=!!p}else if(this.object.isOrthographicCamera){const f=new Q(this._mouse.x,this._mouse.y,0);f.unproject(this.object);const p=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=p!==this.object.zoom;const m=new Q(this._mouse.x,this._mouse.y,0);m.unproject(this.object),this.object.position.sub(m).add(f),this.object.updateMatrixWorld(),d=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;d!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(d).add(this.object.position):(Gl.origin.copy(this.object.position),Gl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gl.direction))<ib?this.object.lookAt(this.target):(w0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gl.intersectPlane(w0,this.target))))}else if(this.object.isOrthographicCamera){const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),d!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>Sd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sd||this._lastTargetPosition.distanceToSquared(this.target)>Sd?(this.dispatchEvent(b0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jn/60*this.autoRotateSpeed*e:Jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;hn.copy(o).sub(this.target);let l=hn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,d=r.width,f=r.height;this._mouse.x=o/d*2-1,this._mouse.y=-(l/f)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const d=(e.pageX+t.x)*.5,f=(e.pageY+t.y)*.5;this._updateZoomParameters(d,f)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new mt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function rb(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function sb(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function ab(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xg),this.state=qt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ob(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case da.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=qt.DOLLY;break;case da.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}break;case da.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=qt.PAN}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Hf)}function lb(s){switch(this.state){case qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function cb(s){this.enabled===!1||this.enableZoom===!1||this.state!==qt.NONE||(s.preventDefault(),this.dispatchEvent(Hf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(xg))}function ub(s){this.enabled!==!1&&this._handleKeyDown(s)}function db(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case ua.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=qt.TOUCH_ROTATE;break;case ua.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=qt.TOUCH_PAN;break;default:this.state=qt.NONE}break;case 2:switch(this.touches.TWO){case ua.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=qt.TOUCH_DOLLY_PAN;break;case ua.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=qt.TOUCH_DOLLY_ROTATE;break;default:this.state=qt.NONE}break;default:this.state=qt.NONE}this.state!==qt.NONE&&this.dispatchEvent(Hf)}function fb(s){switch(this._trackPointer(s),this.state){case qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=qt.NONE}}function hb(s){this.enabled!==!1&&s.preventDefault()}function pb(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mb(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const gb=()=>{const s=ke.useRef(null),e=ke.useRef(null),t=ke.useRef(null),[r,o]=ke.useState(0),l=ke.useRef(0),[d,f]=ke.useState(!1),p=ke.useRef(!1),[m,v]=ke.useState("STANDBY"),_=ke.useRef("STANDBY");_.current=m;const[S,M]=ke.useState(10),T=ke.useRef(10);T.current=S;const[C,y]=ke.useState({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),[x,A]=ke.useState(null),[L,P]=ke.useState("geral"),U=ke.useRef(null),D=ke.useRef(null),O=ke.useRef(null),z=ke.useRef(null),w=ke.useRef(null),N=ke.useRef(null),B=ke.useRef(null),Y=ke.useRef(null),K=ke.useRef(null),ae=ke.useRef(null),le=ke.useRef(null),ne=ke.useRef(null),Z=ke.useRef(null),W=ke.useRef(null),he=ke.useRef(null),oe=ke.useRef(null),k=ke.useRef(null),se=ke.useRef(null),Ce=ke.useRef(new Q(0,2.2,4.4)),He=ke.useRef(new Q(0,1.4,0)),Ze=ke.useCallback(()=>{let Ne=N.current;Ne||(Ne=document.createElement("canvas"),Ne.width=512,Ne.height=360,N.current=Ne);const V=Ne.getContext("2d");if(!V)return;const Fe=_.current,Nt=T.current;Fe==="STANDBY"||Fe==="HEATING"?V.fillStyle="#061a1b":Fe==="FIRE_ALARM"?V.fillStyle="#3a0808":Fe==="SUPPRESSION"?V.fillStyle="#3a1f04":V.fillStyle="#05291b",V.fillRect(0,0,512,360),V.strokeStyle="#3f3f46",V.lineWidth=4,V.strokeRect(2,2,508,356),V.fillStyle="rgba(0, 0, 0, 0.5)",V.fillRect(0,0,512,42),V.fillStyle="#94a3b8",V.font="bold 14px monospace",V.textAlign="left",V.fillText("OUTFIRE IHM v3.2",16,27),V.textAlign="right",V.fillStyle="#10b981",V.fillText("BAT: 13.8V [100%]",496,27),Fe==="STANDBY"||Fe==="HEATING"?(V.fillStyle="#10b981",V.font="bold 24px Inter, sans-serif",V.textAlign="center",V.fillText("● SISTEMA PROTEGIDO",256,90),V.fillStyle="#cbd5e1",V.font="13px monospace",V.fillText("MONITORAMENTO ATIVO (145°C / 300°C)",256,120),V.fillStyle="#0f2922",V.fillRect(24,145,464,46),V.fillStyle="#a7f3d0",V.font="13px Inter, sans-serif",V.textAlign="left",V.fillText("SENSOR COIFA (145°C):",38,174),V.textAlign="right",V.fillText(Fe==="HEATING"?"280°C [SUBINDO]":"180°C [NORMAL]",474,174),V.fillStyle="#0f2922",V.fillRect(24,200,464,46),V.fillStyle="#a7f3d0",V.textAlign="left",V.fillText("VÁLVULA SOLENOIDE DE GÁS:",38,229),V.textAlign="right",V.fillStyle="#34d399",V.fillText("ABERTA / LIBERADA",474,229),V.fillStyle="#0f2922",V.fillRect(24,255,464,46),V.fillStyle="#a7f3d0",V.textAlign="left",V.fillText("SISTEMA DE EXAUSTÃO:",38,284),V.textAlign="right",V.fillStyle="#34d399",V.fillText("OPERANDO / CONECTADO",474,284),V.fillStyle="#64748b",V.font="11px monospace",V.textAlign="center",V.fillText("DISPARO AUTOMÁTICO EM CASO DE FOGO OU BOTOEIRA MANUAL",256,332)):Fe==="FIRE_ALARM"?(V.fillStyle="#ef4444",V.font="bold 26px Inter, sans-serif",V.textAlign="center",V.fillText("🚨 FOGO DETECTADO! 🚨",256,82),V.fillStyle="#fecaca",V.font="bold 14px Inter, sans-serif",V.fillText("SENSOR TÉRMICO SUPEROU 145°C",256,110),V.fillStyle="#1c0505",V.fillRect(40,128,432,105),V.strokeStyle="#ef4444",V.lineWidth=3,V.strokeRect(40,128,432,105),V.fillStyle="#ffffff",V.font="bold 64px monospace",V.fillText(`00:0${Math.max(0,Nt)}`,256,204),V.fillStyle="#fca5a5",V.font="bold 13px Inter, sans-serif",V.fillText("DISPARO AUTOMÁTICO DE SAPONIFICANTE",256,260),V.fillStyle="#dc2626",V.fillRect(24,285,464,52),V.fillStyle="#ffffff",V.font="bold 14px Inter, sans-serif",V.fillText("EVACUAR O LOCAL OU ACIONAR A BOTOEIRA MANUAL",256,317)):Fe==="SUPPRESSION"?(V.fillStyle="#f59e0b",V.font="bold 25px Inter, sans-serif",V.textAlign="center",V.fillText("⚡ DISPARO DE SUPRESSÃO ATIVO ⚡",256,85),V.fillStyle="#ffffff",V.font="bold 15px monospace",V.fillText("DESCARGA DE SAPONIFICANTE & CO2",256,118),V.fillStyle="#ef4444",V.fillRect(24,140,464,48),V.fillStyle="#ffffff",V.font="bold 14px Inter, sans-serif",V.fillText("VÁLVULA DE GÁS: CORTADA (BLOQUEADA)",256,170),V.fillStyle="#3b82f6",V.fillRect(24,198,464,48),V.fillStyle="#ffffff",V.fillText("EXAUSTOR: DESLIGADO (DAMPER FECHADO)",256,228),V.fillStyle="#cbd5e1",V.font="bold 13px Inter, sans-serif",V.fillText("MANTA DE SABÃO ENCAPSULANDO O ÓLEO QUENTE",256,282),V.fillStyle="#a7f3d0",V.font="12px monospace",V.fillText("TEMPERATURA EM QUEDA DRÁSTICA...",256,318)):Fe==="EXTINGUISHED"&&(V.fillStyle="#10b981",V.font="bold 25px Inter, sans-serif",V.textAlign="center",V.fillText("✓ INCÊNDIO EXTINTO COM SUCESSO",256,85),V.fillStyle="#e2e8f0",V.font="bold 14px Inter, sans-serif",V.fillText("REIGNIÇÃO 100% IMPEDIDA (SAPONIFICAÇÃO)",256,118),V.fillStyle="#064e3b",V.fillRect(24,140,464,46),V.fillStyle="#6ee7b7",V.font="13px Inter, sans-serif",V.textAlign="left",V.fillText("TEMPERATURA FINAL DO ÓLEO:",38,169),V.textAlign="right",V.fillText("42°C (TOTALMENTE RESFRIADO)",474,169),V.fillStyle="#064e3b",V.fillRect(24,198,464,46),V.fillStyle="#6ee7b7",V.textAlign="left",V.fillText("INTERTRAVAMENTO DE SEGURANÇA:",38,227),V.textAlign="right",V.fillText("ATIVO / SEGURO",474,227),V.fillStyle="#064e3b",V.fillRect(24,256,464,46),V.fillStyle="#6ee7b7",V.textAlign="left",V.fillText("COZINHA & ESTRUTURA:",38,285),V.textAlign="right",V.fillText("100% PRESERVADAS (AVCB OK)",474,285),V.fillStyle="#94a3b8",V.font="11px monospace",V.textAlign="center",V.fillText("SISTEMA PRONTO PARA LIMPEZA COM ÁGUA E REARME",256,332)),w.current&&(w.current.needsUpdate=!0)},[]),ie=ke.useCallback(()=>{p.current=!0,f(!0),v("SUPPRESSION"),M(0),y({temp:140,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0}),ae.current&&(ae.current.rotation.x=.65),setTimeout(()=>{v("EXTINGUISHED"),y({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0})},3500)},[]),me=ke.useCallback(()=>{p.current=!1,f(!1),v("STANDBY"),M(10),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10}),ae.current&&(ae.current.rotation.x=0),W.current&&(W.current.scale.set(.001,.001,.001),W.current.visible=!1)},[]);ke.useEffect(()=>{Ze()},[m,S,Ze]),ke.useEffect(()=>{const Ne=()=>{if(!s.current)return;const V=s.current.getBoundingClientRect(),Fe=s.current.offsetHeight-window.innerHeight;if(Fe<=0)return;const Nt=-V.top,Be=Math.min(1,Math.max(0,Nt/Fe));if(l.current=Be,o(Be),!(p.current&&Be>.05))if(p.current&&Be<=.05&&(p.current=!1,f(!1)),Be<.18)v("STANDBY"),y({temp:180,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"PRONTIDÃO",countdown:10});else if(Be>=.18&&Be<.42){v("HEATING");const dt=Math.round(180+(Be-.18)/.24*185);y({temp:dt,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"AQUECIMENTO",countdown:10})}else if(Be>=.42&&Be<.65){v("FIRE_ALARM");const dt=Math.max(1,Math.round(10-(Be-.42)/.23*9));M(dt),y({temp:420,gasStatus:"ABERTO",exhaustStatus:"LIGADO",systemStatus:"ALERTA DE FOGO",countdown:dt})}else Be>=.65&&Be<.85?(v("SUPPRESSION"),y({temp:160,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"COMBATE ATIVO",countdown:0})):(v("EXTINGUISHED"),y({temp:42,gasStatus:"CORTADO",exhaustStatus:"INTERTRAVADO",systemStatus:"INCÊNDIO EXTINTO",countdown:0}))};return window.addEventListener("scroll",Ne,{passive:!0}),Ne(),()=>window.removeEventListener("scroll",Ne)},[]);const _e=Ne=>{P(Ne),Ne==="geral"?(Ce.current.set(0,2.2,4.4),He.current.set(0,1.4,0)):Ne==="central"?(Ce.current.set(1.9,1.85,1.5),He.current.set(2.1,1.8,.15)):Ne==="fritadeira"?(Ce.current.set(-.2,1.4,2.2),He.current.set(-.2,1,0)):Ne==="botoeira"&&(Ce.current.set(1.4,1.45,1.3),He.current.set(1.45,1.4,.05))};return ke.useEffect(()=>{if(!t.current||!e.current)return;const Ne=e.current.clientWidth||window.innerWidth,V=e.current.clientHeight||window.innerHeight,Fe=new ag;U.current=Fe,Fe.background=new wt(658448),Fe.fog=new Of(658448,.035);const Nt=new Wn(45,Ne/V,.1,100);Nt.position.set(0,2.2,4.4),D.current=Nt;const Be=new gg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});Be.setSize(Ne,V),Be.setPixelRatio(Math.min(window.devicePixelRatio,2)),Be.shadowMap.enabled=!0,Be.shadowMap.type=Ef,Be.toneMapping=rc,Be.toneMappingExposure=1.1,O.current=Be;const dt=new vg(Nt,Be.domElement);dt.enableDamping=!0,dt.dampingFactor=.05,dt.enableZoom=!1,dt.enablePan=!1,dt.maxPolarAngle=Math.PI/2+.05,dt.target.set(0,1.4,0),z.current=dt;const Dt=new cg(16774890,.75);Fe.add(Dt);const nt=new xf(16777215,1.3);nt.position.set(4,6,4),nt.castShadow=!0,nt.shadow.mapSize.width=1024,nt.shadow.mapSize.height=1024,Fe.add(nt);const jt=new n1(16766880,2.8,6,Math.PI/3,.3);jt.position.set(0,2.7,0),jt.target.position.set(0,.9,0),Fe.add(jt),Fe.add(jt.target);const j=new Km(16733440,0,5);j.position.set(-.35,1.2,.1),Fe.add(j),K.current=j;const Gt=new Km(16711680,0,8);Gt.position.set(2.1,2.25,.2),Fe.add(Gt),B.current=Gt;const xt=new Wt({color:13421772,metalness:.9,roughness:.22}),Ct=new Wt({color:1579551,roughness:.6,metalness:.1}),Ye=new Wt({color:987413,roughness:.8,metalness:.2}),I=new et(new Hn(14,14),Ye);I.rotation.x=-Math.PI/2,I.receiveShadow=!0,Fe.add(I);const E=new et(new Hn(14,8),Ct);E.position.set(0,4,-1.2),E.receiveShadow=!0,Fe.add(E);const X=new et(new Hn(14,8),Ct);X.rotation.y=Math.PI/2,X.position.set(-4.5,4,0),Fe.add(X);const pe=new Un;Fe.add(pe);const ge=new et(new $t(2.6,.9,1),xt);ge.position.set(0,.45,0),ge.castShadow=!0,ge.receiveShadow=!0,pe.add(ge);const ce=new Un;ce.position.set(-.55,.9,0),pe.add(ce),Z.current=ce;const $e=new et(new $t(.85,.12,.75),xt);$e.position.set(0,.06,0),ce.add($e);const Ae=new et(new $t(.72,.02,.62),new Wt({color:9584654,roughness:.1,metalness:.3}));Ae.position.set(0,.11,0),ce.add(Ae);const Ve=new Wt({color:1118481,roughness:.5}),st=new et(new Fn(.012,.012,.28),Ve);st.position.set(-.16,.22,.34),st.rotation.x=Math.PI/3,ce.add(st);const ye=new et(new Fn(.012,.012,.28),Ve);ye.position.set(.16,.22,.34),ye.rotation.x=Math.PI/3,ce.add(ye);const De=new Un;De.position.set(.65,.9,0),pe.add(De);const Ge=new et(new $t(.95,.06,.75),new Wt({color:3355448,roughness:.4,metalness:.7}));Ge.position.set(0,.03,0),De.add(Ge);const Oe=new Un;Oe.position.set(0,2.3,0),Fe.add(Oe);const Pe=new et(new $t(2.8,.6,1.2),xt);Pe.castShadow=!0,Oe.add(Pe);const ht=new Wt({color:10066329,metalness:.9,roughness:.3});for(let pt=-1;pt<=1;pt+=.5){const ot=new et(new $t(.42,.35,.04),ht);ot.position.set(pt,-.15,0),ot.rotation.x=-Math.PI/6,Oe.add(ot)}const H=new et(new Fn(.28,.28,1.5,32),xt);H.position.set(0,1,0),Oe.add(H);const Ie=new Wt({color:11817737,metalness:.8,roughness:.3}),Ee=new Wt({color:13938487,metalness:.9,roughness:.2}),be=new et(new Fn(.015,.015,2.4),Ie);be.rotation.z=Math.PI/2,be.position.set(0,-.28,-.2),Oe.add(be),[[-.7,-.32,0],[-.35,-.32,0],[.45,-.32,0],[.85,-.32,0]].forEach(([pt,ot,Ut])=>{const un=new et(new kf(.025,.06,16),Ee);un.position.set(pt,ot,Ut),un.rotation.x=Math.PI,Oe.add(un)});const fe=new Un;fe.position.set(2.1,1.8,.15),fe.rotation.y=-.28,Fe.add(fe),ne.current=fe,fe.userData={interactiveType:"central",name:"Central Outfire VTS"};const at=new lg().load("/assets/tampa-central-moderna.png");at.colorSpace=On;const yt=new Wt({color:1316378,roughness:.45,metalness:.8}),Tt=new Wt({map:at,roughness:.35,metalness:.25}),Bn=[yt,yt,yt,yt,Tt,yt],gn=new et(new $t(.72,.52,.22),Bn);gn.castShadow=!0,fe.add(gn),Ze();const Ki=new q_(N.current);Ki.colorSpace=On,w.current=Ki;const Ni=new Ci({map:Ki,transparent:!1}),vr=new et(new Hn(.114,.085),Ni);vr.position.set(0,0,.112),fe.add(vr);const Pi=new et(new $t(.124,.095,.004),yt);Pi.position.set(0,0,.1105),fe.add(Pi);const Di=new et(new Fn(.016,.016,1.6,16),xt);Di.position.set(0,1.05,0),fe.add(Di);const Li=new et(new Fn(.045,.045,.03,16),new Wt({color:1118481,metalness:.8}));Li.position.set(0,.275,0),fe.add(Li);const ti=new Wt({color:16711680,transparent:!0,opacity:.85,roughness:.1}),Zi=new et(new Fn(.038,.042,.065,16),ti);Zi.position.set(0,.32,0),fe.add(Zi),Y.current=Zi;const Qr=new et(new $t(.68,.02,.2),yt);Qr.position.set(0,-.32,0),fe.add(Qr);const Jr=new Wt({color:592396,roughness:.5}),zn=new et(new $t(.24,.15,.14),Jr);zn.position.set(-.16,-.23,0),fe.add(zn);const _r=new et(new $t(.24,.15,.14),Jr);_r.position.set(.16,-.23,0),fe.add(_r);const bn=new Un;bn.position.set(1.45,1.4,.08),Fe.add(bn),le.current=bn,bn.userData={interactiveType:"botoeira",name:"Acionador Manual de Emergência"};const es=new et(new $t(.18,.24,.08),new Wt({color:13373713,roughness:.3,metalness:.3}));es.castShadow=!0,bn.add(es);const yr=new et(new $t(.14,.18,.015),new Wt({color:16777215,transparent:!0,opacity:.45,roughness:.1}));yr.position.set(0,0,.042),bn.add(yr);const Sr=new et(new $t(.1,.06,.025),new Wt({color:16436245,roughness:.3}));Sr.position.set(0,-.01,.048),bn.add(Sr),ae.current=Sr;const Ii=new et(new $t(.74,.08,.64),new Wt({color:16317180,roughness:.9,metalness:.05}));Ii.position.set(-.55,1.05,0),Ii.scale.set(.001,.001,.001),Ii.visible=!1,Fe.add(Ii),W.current=Ii;const ci=new Un;Fe.add(ci),he.current=ci;const ya=70,Sa=new zf(.08,1),Yt=[];for(let pt=0;pt<ya;pt++){const ot=new et(Sa,new Ci({color:16729344,transparent:!0,opacity:.85}));ot.position.set(-.55+(Math.random()-.5)*.5,1.05+Math.random()*.4,(Math.random()-.5)*.4),ot.userData={baseY:1.05,speedY:.8+Math.random()*1.5,scale:.4+Math.random()*.8},ci.add(ot),Yt.push(ot)}const R=new Un;Fe.add(R),oe.current=R;const $=50,de=new fo(.12,8,8),re=[];for(let pt=0;pt<$;pt++){const ot=new et(de,new Ci({color:2040877,transparent:!0,opacity:.4}));ot.position.set(-.55+(Math.random()-.5)*.6,1.3+Math.random()*1,(Math.random()-.5)*.4),ot.userData={speedY:.6+Math.random()*1,maxH:2.2},R.add(ot),re.push(ot)}const J=new Un;Fe.add(J),k.current=J;const Ue=80,je=new fo(.025,8,8),Le=[];for(let pt=0;pt<Ue;pt++){const ot=new et(je,new Ci({color:16777215,transparent:!0,opacity:.9}));ot.position.set(-.55,1.9,0),ot.userData={origY:1.98,speed:3.5+Math.random()*2,spread:(Math.random()-.5)*.4},J.add(ot),Le.push(ot)}const qe=new Un;Fe.add(qe),se.current=qe;const We=35,lt=new fo(.16,8,8),it=[];for(let pt=0;pt<We;pt++){const ot=new et(lt,new Ci({color:14870768,transparent:!0,opacity:.4}));ot.position.set((Math.random()-.5)*.4,2.7+Math.random()*.5,(Math.random()-.5)*.3),qe.add(ot),it.push(ot)}const vt=new ug,Et=new mt,Ht=pt=>{var un,St;const ot=Be.domElement.getBoundingClientRect();Et.x=(pt.clientX-ot.left)/ot.width*2-1,Et.y=-((pt.clientY-ot.top)/ot.height)*2+1,vt.setFromCamera(Et,Nt);const Ut=vt.intersectObjects([bn,fe,ce],!0);if(Ut.length>0){let Se=Ut[0].object;for(;Se&&!((un=Se.userData)!=null&&un.interactiveType)&&Se.parent;)Se=Se.parent;if(Se&&((St=Se.userData)!=null&&St.interactiveType)){Be.domElement.style.cursor="pointer",A(Se.userData.name);return}}Be.domElement.style.cursor="default",A(null)},Vt=pt=>{var un,St,Se;const ot=Be.domElement.getBoundingClientRect();Et.x=(pt.clientX-ot.left)/ot.width*2-1,Et.y=-((pt.clientY-ot.top)/ot.height)*2+1,vt.setFromCamera(Et,Nt);const Ut=vt.intersectObjects([bn,fe,ce],!0);if(Ut.length>0){let Ot=Ut[0].object;for(;Ot&&!((un=Ot.userData)!=null&&un.interactiveType)&&Ot.parent;)Ot=Ot.parent;((St=Ot==null?void 0:Ot.userData)==null?void 0:St.interactiveType)==="botoeira"?ie():((Se=Ot==null?void 0:Ot.userData)==null?void 0:Se.interactiveType)==="central"&&_e("central")}};Be.domElement.addEventListener("mousemove",Ht),Be.domElement.addEventListener("click",Vt);const Lt=()=>{if(!e.current||!O.current||!D.current)return;const pt=e.current.clientWidth,ot=e.current.clientHeight;D.current.aspect=pt/ot,D.current.updateProjectionMatrix(),O.current.setSize(pt,ot)};window.addEventListener("resize",Lt);let rt;const It=new a1,At=()=>{rt=requestAnimationFrame(At);const pt=It.getDelta(),ot=It.getElapsedTime();Nt.position.lerp(Ce.current,.05),dt.target.lerp(He.current,.05),dt.update();const Ut=_.current,un=l.current;if(Ut==="HEATING"||Ut==="FIRE_ALARM"){ci.visible=!0,R.visible=!0,k.current.visible=!1,se.current.visible=!1;const St=Ut==="FIRE_ALARM"?1:Math.max(.2,(un-.18)/.24);if(K.current&&(K.current.intensity=(2.5+Math.sin(ot*20)*1.5)*St,K.current.color.setHex(Math.random()>.3?16729344:16755200)),Yt.forEach((Se,Ot)=>{Se.visible=!0,Se.position.y+=Se.userData.speedY*pt,Se.position.x+=Math.sin(ot*10+Ot)*.006;const an=(Se.position.y-Se.userData.baseY)/1;Se.scale.setScalar(Math.max(.01,(1-an)*Se.userData.scale*St)),Se.material.opacity=1-an,Se.position.y>Se.userData.baseY+.9&&(Se.position.y=Se.userData.baseY,Se.position.x=-.55+(Math.random()-.5)*.5,Se.position.z=(Math.random()-.5)*.4)}),re.forEach(Se=>{Se.visible=!0,Se.position.y+=Se.userData.speedY*pt,Se.scale.setScalar(St),Se.position.y>Se.userData.maxH&&(Se.position.y=1.3,Se.position.x=-.55+(Math.random()-.5)*.4)}),Ut==="FIRE_ALARM"){const Se=Math.sin(ot*24)>0;B.current&&Y.current&&(B.current.intensity=Se?5:0,Y.current.material.emissive=Se?new wt(16711680):new wt(0))}}else if(Ut==="SUPPRESSION"){ci.visible=!0,k.current.visible=!0,se.current.visible=!0,Yt.forEach(Se=>{Se.scale.multiplyScalar(.92),Se.scale.x<.05&&(Se.visible=!1)}),K.current&&(K.current.intensity=Math.max(0,K.current.intensity-pt*4)),Le.forEach((Se,Ot)=>{Se.visible=!0,Se.position.y-=Se.userData.speed*pt,Se.position.x+=Math.sin(ot*15+Ot)*.01,Se.position.y<1.05&&(Se.position.y=Se.userData.origY,Se.position.x=-.55+Se.userData.spread)}),W.current&&(W.current.visible=!0,W.current.scale.lerp(new Q(1,1,1),.08)),it.forEach((Se,Ot)=>{Se.visible=!0,Se.position.y+=Math.sin(ot*3+Ot)*.004,Se.position.x+=Math.cos(ot*2+Ot)*.004});const St=Math.sin(ot*30)>0;B.current&&Y.current&&(B.current.intensity=St?4:.2,Y.current.material.emissive=St?new wt(16711680):new wt(3342336))}else Ut==="EXTINGUISHED"?(ci.visible=!1,R.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),W.current&&(W.current.visible=!0,W.current.scale.set(1,1,1)),B.current&&Y.current&&(B.current.intensity=0,Y.current.material.emissive=new wt(0))):(ci.visible=!1,R.visible=!1,k.current.visible=!1,se.current.visible=!1,K.current&&(K.current.intensity=0),W.current&&(W.current.visible=!1),B.current&&Y.current&&(B.current.intensity=0,Y.current.material.emissive=new wt(0)));Be.render(Fe,Nt)};return At(),()=>{cancelAnimationFrame(rt),window.removeEventListener("resize",Lt),Be.domElement.removeEventListener("mousemove",Ht),Be.domElement.removeEventListener("click",Vt),Be.dispose()}},[ie,Ze]),u.jsx("section",{id:"hero-3d",ref:s,className:"relative w-full h-[350vh] bg-[#07080a]",children:u.jsxs("div",{ref:e,className:"sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between select-none",children:[u.jsx("canvas",{ref:t,className:"absolute inset-0 w-full h-full block z-0 outline-none"}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pointer-events-none",children:[u.jsxs("div",{className:"flex flex-col gap-1.5 pointer-events-auto",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#d4af37]/40 shadow-glow-gold text-xs font-bold text-[#f3e5ab]",children:[u.jsx(P0,{className:"w-3.5 h-3.5 text-[#d4af37] animate-pulse"}),u.jsx("span",{children:"Simulador 3D Autônomo Outfire"}),u.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{className:"text-[11px] font-mono text-gray-300",children:"NBR 14518"})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs("span",{className:`px-3 py-1 rounded-lg text-xs font-black tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md border ${m==="STANDBY"?"bg-emerald-950/80 border-emerald-500/40 text-emerald-300":m==="HEATING"?"bg-amber-950/80 border-amber-500/50 text-amber-300":m==="FIRE_ALARM"?"bg-red-950/90 border-red-500 text-red-200 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.5)]":m==="SUPPRESSION"?"bg-amber-950/90 border-amber-500 text-amber-200 shadow-[0_0_20px_rgba(245,158,11,0.5)]":"bg-emerald-900/90 border-emerald-400 text-emerald-200"}`,children:[m==="STANDBY"&&u.jsx(Ql,{className:"w-4 h-4 text-emerald-400"}),m==="HEATING"&&u.jsx(uo,{className:"w-4 h-4 text-amber-400 animate-pulse"}),m==="FIRE_ALARM"&&u.jsx(uo,{className:"w-4 h-4 text-red-400 animate-bounce"}),m==="SUPPRESSION"&&u.jsx(_v,{className:"w-4 h-4 text-amber-300 animate-spin"}),m==="EXTINGUISHED"&&u.jsx(ic,{className:"w-4 h-4 text-emerald-400"}),C.systemStatus]}),m==="FIRE_ALARM"&&u.jsxs("span",{className:"px-2.5 py-1 rounded-lg bg-red-600 text-white font-mono font-black text-xs animate-ping",children:["DISPARO EM ",S,"s"]})]})]}),u.jsxs("div",{className:"flex items-center gap-2 pointer-events-auto bg-black/75 backdrop-blur-md p-2 rounded-2xl border border-white/10 shadow-2xl",children:[u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(uo,{className:`w-3.5 h-3.5 ${C.temp>200?"text-red-400 animate-pulse":"text-amber-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"TEMP. ÓLEO"}),u.jsxs("span",{className:"text-xs font-bold text-white font-mono",children:[C.temp,"°C"]})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(Ov,{className:`w-3.5 h-3.5 ${C.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"VÁLVULA GÁS"}),u.jsx("span",{className:`text-xs font-bold font-mono ${C.gasStatus==="CORTADO"?"text-red-400":"text-emerald-400"}`,children:C.gasStatus})]})]}),u.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 flex items-center gap-2",children:[u.jsx(I0,{className:`w-3.5 h-3.5 ${C.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`}),u.jsxs("div",{className:"flex flex-col",children:[u.jsx("span",{className:"text-[9px] text-gray-400 font-mono",children:"EXAUSTÃO"}),u.jsx("span",{className:`text-xs font-bold font-mono ${C.exhaustStatus==="INTERTRAVADO"?"text-red-400":"text-emerald-400"}`,children:C.exhaustStatus})]})]})]})]}),x&&u.jsxs("div",{className:"absolute top-28 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-4 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/60 text-xs text-[#f3e5ab] font-bold shadow-glow-gold flex items-center gap-2 animate-pulse",children:[u.jsx(N0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),u.jsxs("span",{children:[x," — Clique para interagir"]})]}),u.jsxs("div",{className:"relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-3",children:[u.jsxs("div",{className:"flex flex-wrap items-center gap-2.5",children:[u.jsxs("button",{onClick:ie,disabled:m==="SUPPRESSION"||m==="EXTINGUISHED",className:`py-2.5 px-5 rounded-2xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 border ${m==="FIRE_ALARM"?"bg-gradient-to-r from-red-600 via-rose-500 to-red-700 text-white border-white animate-pulse shadow-[0_0_35px_rgba(225,29,72,0.8)] scale-105":"bg-[#181212]/90 hover:bg-red-950/80 text-red-300 border-red-500/40 shadow-lg"}`,children:[u.jsx(Av,{className:"w-4 h-4 text-red-400"}),u.jsx("span",{children:"🚨 Disparar Acionador Manual"})]}),(m==="EXTINGUISHED"||m==="FIRE_ALARM"||m==="SUPPRESSION")&&u.jsxs("button",{onClick:me,className:"py-2.5 px-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center gap-2 border border-white/15 transition-all duration-200 active:scale-95",children:[u.jsx(D0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Restaurar"})]})]}),u.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-[#f3e5ab]/90 bg-black/75 backdrop-blur-md px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg",children:[u.jsx(xv,{className:"w-4 h-4 text-[#d4af37] animate-bounce"}),u.jsx("span",{children:r<.85?"Role a página para ver a evolução do fogo e o combate automático":"Continue rolando para conhecer os detalhes técnicos da Central Outfire"})]}),u.jsxs("div",{className:"hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md p-1.5 rounded-2xl border border-white/10 text-xs",children:[u.jsxs("span",{className:"text-[10px] text-gray-400 px-2 font-mono flex items-center gap-1",children:[u.jsx(mv,{className:"w-3 h-3 text-[#d4af37]"})," Câmera:"]}),u.jsx("button",{onClick:()=>_e("geral"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${L==="geral"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Geral"}),u.jsx("button",{onClick:()=>_e("central"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${L==="central"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Central"}),u.jsx("button",{onClick:()=>_e("fritadeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${L==="fritadeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Fritadeira"}),u.jsx("button",{onClick:()=>_e("botoeira"),className:`px-2.5 py-1 rounded-xl font-bold transition-all ${L==="botoeira"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-300 hover:text-white"}`,children:"Botoeira"})]})]})]})})},xb=()=>{const[s,e]=ke.useState("3d"),t=ke.useRef(null),r=ke.useRef(null),[o,l]=ke.useState(!1),d=ke.useRef(!1);d.current=o;const[f,p]=ke.useState(!1),m=ke.useRef(!1);m.current=f;const[v,_]=ke.useState(null),S=ke.useRef(null),M=ke.useRef(null),T=ke.useRef(null),C=ke.useRef(null),y=()=>{l(P=>!P)},x=()=>{p(P=>!P)},A=()=>{T.current&&C.current&&(C.current.position.set(1.8,1.2,2.2),T.current.target.set(0,0,0),T.current.update())};ke.useEffect(()=>{if(s!=="3d"||!t.current||!r.current)return;const P=r.current.clientWidth,U=r.current.clientHeight,D=new ag;D.background=new wt(921879);const O=new Wn(40,P/U,.1,100);O.position.set(1.8,1.2,2.2),C.current=O;const z=new gg({canvas:t.current,antialias:!0,powerPreference:"high-performance"});z.setSize(P,U),z.setPixelRatio(Math.min(window.devicePixelRatio,2)),z.shadowMap.enabled=!0,z.shadowMap.type=Ef,z.toneMapping=rc,z.toneMappingExposure=1.15;const w=new vg(O,z.domElement);w.enableDamping=!0,w.dampingFactor=.05,w.minDistance=1.2,w.maxDistance=6,w.target.set(0,0,0),T.current=w;const N=new cg(16774890,.9);D.add(N);const B=new xf(16777215,1.5);B.position.set(3,4,3),B.castShadow=!0,D.add(B);const Y=new xf(13938487,.85);Y.position.set(-3,-2,-3),D.add(Y);const K=new Ci({color:0,transparent:!0,opacity:.35}),ae=new et(new Hn(2.2,1.4),K);ae.rotation.x=-Math.PI/2,ae.position.set(0,-.65,0),D.add(ae);const le=new lg,ne=le.load("/assets/tampa-central-moderna.png");ne.colorSpace=On;const Z=new Wt({color:1316379,metalness:.85,roughness:.35}),W=new Wt({map:ne,metalness:.2,roughness:.35}),he=[Z,Z,Z,Z,W,Z],oe=new et(new $t(1.4,1,.58),he);oe.castShadow=!0,oe.receiveShadow=!0,D.add(oe);const k=new Ci({color:460810}),se=new et(new Hn(.88,.22),k);se.rotation.x=-Math.PI/2,se.position.set(0,.501,-.05),D.add(se);const Ce=new et(new Hn(.7,.22),k);Ce.rotation.x=Math.PI/2,Ce.position.set(0,-.501,-.05),D.add(Ce);const He=le.load("/assets/tela-ihm-display.jpg");He.colorSpace=On;const Ze=new Wt({map:He,roughness:.2,metalness:.05,emissive:16777215,emissiveMap:He,emissiveIntensity:.22}),ie=new et(new Hn(.219,.164),Ze);ie.position.set(0,0,.295),D.add(ie);const me=new Wt({color:1579552,metalness:.9,roughness:.35}),_e=new et(new $t(.238,.182,.008),me);_e.position.set(0,0,.291),D.add(_e);const Ne=new Wt({color:11580344,metalness:.95,roughness:.2}),V=new Fn(.004,.004,.006,8);[[-.108,.08],[.108,.08],[-.108,-.08],[.108,-.08]].forEach(([be,xe])=>{const fe=new et(V,Ne);fe.rotation.x=Math.PI/2,fe.position.set(be,xe,.295),D.add(fe)});const Fe=new Ci({color:460810}),Nt=new et(new Hn(.04,.12),Fe);Nt.rotation.y=Math.PI,Nt.position.set(-.5,.3,-.291),D.add(Nt);const Be=new et(new Hn(.04,.12),Fe);Be.rotation.y=Math.PI,Be.position.set(.5,.3,-.291),D.add(Be);const dt=new Wt({color:11580344,metalness:.9,roughness:.2}),Dt=new Fn(.012,.012,.015,8),nt=new Un;nt.position.set(0,0,-.05),D.add(nt),S.current=nt;const jt=new Wt({color:2040619,metalness:.8,roughness:.35}),j=new et(new $t(.95,.02,.25),jt);j.position.set(0,.505,0),j.userData={isPsu:!0,name:"Tampa da Fonte de Alimentação"},nt.add(j),[[-.43,.518,-.09],[-.43,.518,.09],[.43,.518,-.09],[.43,.518,.09]].forEach(([be,xe,fe])=>{const Te=new et(Dt,dt);Te.position.set(be,xe,fe),nt.add(Te)});const Gt=new Wt({color:13948120,metalness:.9,roughness:.2}),xt=new et(new $t(.85,.44,.2),Gt);xt.position.set(0,.27,0),xt.userData={isPsu:!0,name:"Fonte de Alimentação Andeli MS-350-24 (24V Industrial)"},nt.add(xt);const Ct=new Ci({color:15381256}),Ye=new et(new Hn(.24,.08),Ct);Ye.position.set(0,.27,.101),nt.add(Ye);const I=new Un;I.position.set(0,0,-.05),D.add(I),M.current=I;const E=new Wt({color:2040619,metalness:.8,roughness:.35}),X=new et(new $t(.74,.02,.24),E);X.position.set(0,-.505,0),X.userData={isBattery:!0,name:"Tampa da Gaveta de Baterias"},I.add(X),[[-.33,-.518,-.09],[-.33,-.518,.09],[.33,-.518,-.09],[.33,-.518,.09]].forEach(([be,xe,fe])=>{const Te=new et(Dt,dt);Te.position.set(be,xe,fe),I.add(Te)});const pe=new Wt({color:592397,roughness:.5}),ge=new et(new $t(.3,.38,.18),pe);ge.position.set(-.18,-.305,0),ge.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},I.add(ge);const ce=new et(new $t(.3,.38,.18),pe);ce.position.set(.18,-.305,0),ce.userData={isBattery:!0,name:"Bateria Pionero 12V 7Ah (Banco de Backup)"},I.add(ce);const $e=new Wt({color:2450411,metalness:.8}),Ae=new Wt({color:15680580,metalness:.8}),Ve=new et(new Fn(.012,.012,.03),$e);Ve.position.set(-.24,-.1,.05),I.add(Ve);const st=new et(new Fn(.012,.012,.03),Ae);st.position.set(-.12,-.1,.05),I.add(st);const ye=new et(new Fn(.012,.012,.03),$e);ye.position.set(.12,-.1,.05),I.add(ye);const De=new et(new Fn(.012,.012,.03),Ae);De.position.set(.24,-.1,.05),I.add(De);const Ge=new ug,Oe=new mt,Pe=be=>{var Te,at;const xe=z.domElement.getBoundingClientRect();Oe.x=(be.clientX-xe.left)/xe.width*2-1,Oe.y=-((be.clientY-xe.top)/xe.height)*2+1,Ge.setFromCamera(Oe,O);const fe=Ge.intersectObjects([nt,I,oe],!0);if(fe.length>0){let yt=fe[0].object;if((Te=yt.userData)!=null&&Te.isPsu){z.domElement.style.cursor="pointer",_(d.current?"⚡ Fonte Aberta (Clique para recolher)":"⚡ Fonte de Alimentação (Clique para subir gaveta)");return}else if((at=yt.userData)!=null&&at.isBattery){z.domElement.style.cursor="pointer",_(m.current?"🔋 Baterias Abertas (Clique para recolher)":"🔋 Baterias de Backup (Clique para descer gaveta)");return}else{z.domElement.style.cursor="grab",_("Gabinete Central Outfire (Arraste para girar 360°)");return}}z.domElement.style.cursor="default",_(null)},ht=be=>{var Te,at;const xe=z.domElement.getBoundingClientRect();Oe.x=(be.clientX-xe.left)/xe.width*2-1,Oe.y=-((be.clientY-xe.top)/xe.height)*2+1,Ge.setFromCamera(Oe,O);const fe=Ge.intersectObjects([nt,I],!0);if(fe.length>0){const yt=fe[0].object;(Te=yt.userData)!=null&&Te.isPsu?l(Tt=>!Tt):(at=yt.userData)!=null&&at.isBattery&&p(Tt=>!Tt)}};z.domElement.addEventListener("mousemove",Pe),z.domElement.addEventListener("click",ht);const H=()=>{if(!r.current||!z||!O)return;const be=r.current.clientWidth,xe=r.current.clientHeight;O.aspect=be/xe,O.updateProjectionMatrix(),z.setSize(be,xe)};window.addEventListener("resize",H);let Ie;const Ee=()=>{Ie=requestAnimationFrame(Ee);const be=d.current?.52:0;S.current&&(S.current.position.y+=(be-S.current.position.y)*.12);const xe=m.current?-.52:0;M.current&&(M.current.position.y+=(xe-M.current.position.y)*.12),w.update(),z.render(D,O)};return Ee(),()=>{cancelAnimationFrame(Ie),window.removeEventListener("resize",H),z.domElement.removeEventListener("mousemove",Pe),z.domElement.removeEventListener("click",ht),z.dispose()}},[s]);const L=[{icon:Sv,title:"Multicoifa Independente (Até 3 Coifas)",desc:"Capacidade de proteger e controlar até 3 coifas simultaneamente de maneira 100% autônoma. O disparo em uma coifa não interrompe a operação das demais."},{icon:ym,title:"IHM Touchscreen Inteligente",desc:"Interface gráfica colorida touch com diagnóstico contínuo de baterias, rede elétrica, pressão de cilindros e estado das válvulas de gás."},{icon:Iv,title:"Alertas Inteligentes por Voz Falada",desc:"Diferente de sistemas que apenas apitam gerando pânico, a Central VTS emite avisos sonoros falados em português, instruindo a brigada com clareza."},{icon:pv,title:"Agenda Semanal Automática de Gás",desc:"Programe os horários em que a válvula de gás deve abrir e fechar a cada dia da semana. Garante segurança total fora do horário de expediente e evita esquecimentos."},{icon:Ed,title:"Proteção Anti-Disparo com Botão Abortar",desc:"Em caso de alarme em falso, a tela exibe contagem regressiva configurável (ex: 60s) permitindo abortar com um toque antes de descarregar os cilindros."},{icon:P0,title:"Alarme Convencional Segregado",desc:"Integração perfeita com o sistema predial do shopping/edifício, mantendo a linha de supressão por saponificante imune a fumaças corriqueiras de grelhados."}];return u.jsxs("section",{id:"central-vts",className:"py-24 bg-[#08090c] relative overflow-hidden",children:[u.jsx("div",{className:"absolute top-1/4 -left-48 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsx("div",{className:"absolute bottom-10 -right-48 w-96 h-96 bg-[#997b1a]/10 rounded-full blur-[140px] pointer-events-none"}),u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold tracking-wide uppercase mb-4",children:[u.jsx(ym,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia e Automação Nacional"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Comando Inteligente ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Outfire VTS 32S3"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"O verdadeiro cérebro do sistema de supressão. Controle absoluto, monitoramento em tempo real, automação de gás e proteção anti-disparo acidental na ponta dos seus dedos."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-20",children:[u.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[u.jsxs("div",{ref:r,className:"relative w-full max-w-xl aspect-[4/3] rounded-3xl bg-gradient-to-br from-[#14171e] to-[#0a0b0e] border border-[#d4af37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center overflow-hidden group",children:[s==="3d"&&u.jsxs("div",{className:"relative w-full h-full",children:[u.jsx("canvas",{ref:t,className:"w-full h-full block outline-none cursor-grab active:cursor-grabbing"}),v&&u.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-[#d4af37]/50 text-xs text-[#f3e5ab] font-bold shadow-glow-gold",children:v}),u.jsxs("div",{className:"absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-auto",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsxs("button",{onClick:y,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${o?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(Fv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:o?"Recolher Fonte":"Subir Fonte"})]}),u.jsxs("button",{onClick:x,className:`py-1.5 px-3 rounded-lg text-xs font-bold transition-all border flex items-center gap-1.5 ${f?"bg-amber-500 text-black border-amber-400 shadow-glow-gold":"bg-black/80 hover:bg-black text-[#f3e5ab] border-[#d4af37]/40"}`,children:[u.jsx(dv,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:f?"Recolher Baterias":"Descer Baterias"})]})]}),u.jsx("button",{onClick:A,title:"Resetar Câmera",className:"p-1.5 rounded-lg bg-black/80 hover:bg-black text-[#f3e5ab] border border-[#d4af37]/30 transition-all",children:u.jsx(D0,{className:"w-4 h-4"})})]})]}),s==="interno"&&u.jsx("img",{src:"/assets/central-outfire-interno.jpg",alt:"Placa e Relés Internos da Central Outfire",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),s==="instalado"&&u.jsx("img",{src:"/assets/central-outfire-instalada.jpg",alt:"Central Outfire Instalada em Cozinha Real",className:"w-full h-full object-cover rounded-2xl transition-all duration-500 group-hover:scale-105"}),u.jsxs("div",{className:"absolute top-4 left-4 bg-[#08090b]/90 backdrop-blur-md border border-[#d4af37]/30 px-3 py-1.5 rounded-lg text-xs font-mono text-[#f3e5ab] pointer-events-none",children:[s==="3d"&&"Gabinete 3D Interativo (Gire 360° com o mouse/toque)",s==="interno"&&"Eletrônica Robusta, Relés de Potência & Bornes",s==="instalado"&&"Instalação Real em Cozinha Profissional"]})]}),u.jsxs("div",{className:"flex items-center gap-2 mt-4 bg-[#12141a] p-1.5 rounded-2xl border border-[#d4af37]/25 shadow-md",children:[u.jsxs("button",{onClick:()=>e("3d"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${s==="3d"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:[u.jsx(vo,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Gabinete 3D Interativo"})]}),u.jsx("button",{onClick:()=>e("interno"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="interno"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Eletrônica Interna"}),u.jsx("button",{onClick:()=>e("instalado"),className:`px-4 py-2 rounded-xl text-xs font-bold transition-all ${s==="instalado"?"bg-[#d4af37] text-black shadow-glow-gold":"text-gray-400 hover:text-white"}`,children:"Instalação Real"})]})]}),u.jsx("div",{className:"lg:col-span-5 space-y-4",children:u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/30 relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-2xl font-black text-white font-sans",children:"Painel Central VTS 32S3"}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-mono font-bold",children:"AUTOMAÇÃO & SUPRESSÃO CONFORME NBR 14518"})]}),u.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#d4af37]/15 border border-[#d4af37]/30 flex items-center justify-center text-[#d4af37]",children:u.jsx(Lv,{className:"w-6 h-6"})})]}),u.jsxs("div",{className:"space-y-3.5 text-sm",children:[u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Dupla Ação de Supressão:"})," Saponificante na cocção + CO2 no duto e fechamento automático dos dampers."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Corte de Gás e Exaustor:"})," Intertravamento elétrico instantâneo ao sinal de disparo."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Detecção Térmica Regulável:"})," Calibração em 145°C na coifa e 300°C no duto."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Bateria de Backup Interna:"})," Funcionamento ininterrupto mesmo com queda de rede."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Menu protegido por senha:"})," Previne alterações indevidas por pessoas não autorizadas."]})]}),u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx(qr,{className:"w-5 h-5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsxs("span",{className:"text-gray-300",children:[u.jsx("strong",{children:"Opção de Anular Disparo:"})," Sistema inteligente com botão de cancelamento na IHM para evitar disparos acidentais ou alarmes falsos."]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3",children:[u.jsxs("a",{href:"#calculadora",className:"flex-1 py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-center text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx("span",{children:"Dimensionar Cozinha"}),u.jsx(Hl,{className:"w-4 h-4 fill-black"})]}),u.jsxs("a",{href:"/assets/Manual_Tecnico_OutFire_2026.pdf",download:"Manual_Tecnico_OutFire_2026.pdf",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-4 bg-[#14171e] hover:bg-[#1f2430] text-[#f3e5ab] font-bold text-center text-sm rounded-xl border border-[#d4af37]/30 transition-all flex items-center justify-center gap-2",children:[u.jsx(R0,{className:"w-4 h-4 text-[#d4af37]"}),u.jsx("span",{children:"Baixar Manual Técnico"})]})]})]})})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:L.map((P,U)=>{const D=P.icon;return u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/5 hover:border-[#d4af37]/40 transition-all duration-300 hover:-translate-y-1 group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#d4af37]/10 border border-[#d4af37]/20 text-[#d4af37] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 shadow-sm",children:u.jsx(D,{className:"w-6 h-6"})}),u.jsx("h4",{className:"text-lg font-bold text-white mb-2 font-sans group-hover:text-[#f3e5ab] transition-colors",children:P.title}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:P.desc})]},U)})})]})]})},vb=()=>u.jsx("section",{id:"por-que-outfire",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Ed,{className:"w-3.5 h-3.5"}),"Entenda o Risco Real em Cozinhas Industriais"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Por Que Extintores Comuns e Água ",u.jsx("br",{}),u.jsx("span",{className:"text-red-500",children:"São Fatais em Incêndio de Óleo?"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Mais de 65% dos incêndios que destroem restaurantes começam na linha de cocção. Conheça a diferença entre uma tragédia anunciada e a proteção autônoma Classe K."})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:[u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-red-900/30 bg-gradient-to-b from-red-950/20 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-red-600/20 text-red-400 px-3 py-1 rounded-full border border-red-500/30",children:"PERIGO EXTREMO"}),u.jsx(_m,{className:"w-7 h-7 text-red-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Jogar Água em Óleo Fervente"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["A água ferve a 100°C e o óleo em chamas está acima de 360°C. Ao atingir o fundo da cuba, a água vaporiza instantaneamente, expandindo seu volume em ",u.jsx("strong",{children:"1.700 vezes"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(uo,{className:"w-4 h-4 text-red-400"}),"Efeito Bola de Fogo (BLEVE):"]}),u.jsx("p",{children:"O óleo ardente é arremessado no teto e contra os cozinheiros em uma fração de segundo, gerando queimaduras de 3° grau e destruição imediata da cozinha."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-red-900/30 text-xs font-mono text-red-400 font-bold",children:"Resultado: Tragédia & Risco de Morte"})]}),u.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-amber-900/30 bg-gradient-to-b from-amber-950/10 to-black/40 relative flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:"INEFICAZ NA PRÁTICA"}),u.jsx(_m,{className:"w-7 h-7 text-amber-500"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Extintor Manual de Pó (ABC)"}),u.jsxs("p",{className:"text-sm text-gray-400 leading-relaxed mb-6",children:["Extintores de pó químico comum sufocam a chama por poucos segundos, mas ",u.jsx("strong",{children:"não resfriam a massa de óleo"}),", que permanece acima do ponto de ignição."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-amber-950/20 border border-amber-900/30 text-xs text-amber-300 space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold",children:[u.jsx(Ed,{className:"w-4 h-4 text-amber-400"}),"Reignição e Sujeira Tóxica:"]}),u.jsx("p",{children:"Assim que o pó se dissipa ou o ar circula, o óleo em chamas volta a pegar fogo com a mesma violência. Além disso, o pó contamina todos os alimentos e dutos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-amber-900/30 text-xs font-mono text-amber-400 font-bold",children:"Resultado: Reignição e Perda Total"})]}),u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/60 bg-gradient-to-b from-[#1a170e]/80 via-[#0e1015] to-[#08090c] relative flex flex-col justify-between shadow-glow-gold",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-black bg-[#d4af37] text-black px-3 py-1 rounded-full shadow-glow-gold",children:"SOLUÇÃO DEFINITIVA OUTFIRE"}),u.jsx(ic,{className:"w-7 h-7 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-black text-white mb-2 font-sans",children:"Sistema Automatizado Outfire"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:["Ao disparar, o agente saponificante reage quimicamente com os ácidos graxos do óleo quente em um processo chamado ",u.jsx("strong",{children:"saponificação"}),"."]}),u.jsxs("div",{className:"p-4 rounded-xl bg-[#14171e] border border-[#d4af37]/30 text-xs text-[#f3e5ab] space-y-2",children:[u.jsxs("div",{className:"flex items-center gap-2 font-bold text-[#e5c05d]",children:[u.jsx(vo,{className:"w-4 h-4 text-[#d4af37]"}),"Manta Espumosa e Resfriamento:"]}),u.jsx("p",{className:"text-gray-300",children:"Cria uma espessa manta de sabão alcalino que bloqueia o oxigênio, impede a liberação de vapores inflamáveis e resfria o óleo rapidamente. O CO2 protege o duto sem deixar resíduos."})]})]}),u.jsx("div",{className:"mt-6 pt-4 border-t border-[#d4af37]/30 text-xs font-mono text-[#e5c05d] font-bold",children:"Resultado: Fogo 100% Extinto & Cozinha Salva"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-[#121418] border border-white/10 text-center",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-red-500 font-mono",children:"65%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"dos incêndios em restaurantes iniciam nos equipamentos de cocção e coifas."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-amber-400 font-mono",children:"360°C"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"temperatura crítica em que o óleo vegetal entra em autoignição espontânea."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-emerald-400 font-mono",children:"0 seg"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"tempo de hesitação humana: a Central Outfire atua 100% de forma autônoma."})]}),u.jsxs("div",{className:"p-4 border-t md:border-t-0 md:border-l border-white/10",children:[u.jsx("div",{className:"text-3xl sm:text-4xl font-black text-blue-400 font-mono",children:"100%"}),u.jsx("p",{className:"text-xs text-gray-400 mt-2",children:"garantia de conformidade para aprovação em vistoria do Corpo de Bombeiros (AVCB)."})]})]})]})}),_b=()=>{const s=[{code:"ABNT NBR 14518",title:"Sistemas de Ventilação para Cozinhas Profissionais",authority:"Associação Brasileira de Normas Técnicas",details:"Estabelece a obrigatoriedade de sistema fixo automático de extinção de incêndio para coifas, dutos e equipamentos de cocção com óleo ou gordura.",highlights:["Intertravamento obrigatório de gás e energia elétrica","Desligamento automático do sistema de exaustão mecânica","Proteção específica por agente Classe K nos aparelhos de queima","Dampers corta-fogo para bloqueio de propagação em dutos"]},{code:"NFPA 96 & NFPA 17A",title:"Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations",authority:"National Fire Protection Association (USA)",details:"Padrão global mais respeitado do mundo para dimensionamento de agentes saponificantes líquidos e inundação por gás inerte em dutos de cocção comercial.",highlights:["Tempo máximo de resposta de detecção térmica","Cobertura milimétrica por bico aspersor calibrado","Mínimo de autonomia de agente extintor para resfriamento total","Acionador manual de emergência em rota de fuga"]},{code:"Instruções Técnicas do Corpo de Bombeiros",title:"Emissão e Renovação de AVCB / CLCB",authority:"Polícia Militar do Estado de São Paulo / Corpos de Bombeiros Estaduais",details:"Exigência legal indispensável para a liberação de alvarás de funcionamento de restaurantes, lanchonetes, padarias, hotéis e praças de alimentação de shoppings.",highlights:["Condição mandatória para aprovação em vistoria física","Evita multas pesadas e interdição cautelar imediata da cozinha","Garante laudo ART emitido por Engenheiro Mecânico credenciado","Laudo de comissionamento e teste hidrostático"]}];return u.jsx("section",{id:"normas",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Rv,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Conformidade Regulatória Obrigatória"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Normas Técnicas & Exigências ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"do Corpo de Bombeiros (AVCB)"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Instalar o sistema Outfire não é apenas segurança: é uma exigência legal para manter seu restaurante aberto, aprovado em vistorias e coberto pela apólice de seguro."})]}),u.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16",children:s.map((e,t)=>u.jsxs("div",{className:"glass-panel-gold p-6 sm:p-8 rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-xs font-mono font-bold bg-[#d4af37]/15 text-[#e5c05d] px-3 py-1 rounded-full border border-[#d4af37]/30",children:e.code}),u.jsx(yv,{className:"w-6 h-6 text-[#d4af37]"})]}),u.jsx("h3",{className:"text-xl font-bold text-white mb-1 font-sans",children:e.title}),u.jsx("span",{className:"text-xs text-[#e5c05d] block mb-4 font-mono font-bold",children:e.authority}),u.jsx("p",{className:"text-sm text-gray-300 leading-relaxed mb-6",children:e.details}),u.jsx("div",{className:"space-y-2.5 pt-4 border-t border-white/10",children:e.highlights.map((r,o)=>u.jsxs("div",{className:"flex items-start gap-2.5 text-xs text-gray-300",children:[u.jsx(ic,{className:"w-4 h-4 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{children:r})]},o))})]}),u.jsxs("div",{className:"mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-blue-400 font-semibold",children:[u.jsx("span",{children:"100% Atendido pelo Sistema Outfire"}),u.jsx(vv,{className:"w-4 h-4"})]})]},t))}),u.jsxs("div",{className:"p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-red-950/40 via-black/60 to-red-950/40 border border-red-500/30 flex flex-col md:flex-row items-center gap-6",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 shrink-0",children:u.jsx(hv,{className:"w-8 h-8"})}),u.jsxs("div",{className:"flex-1 text-center md:text-left",children:[u.jsx("h4",{className:"text-lg sm:text-xl font-bold text-white mb-1",children:"Atenção: Shoppings e Seguradoras não toleram improvisos!"}),u.jsxs("p",{className:"text-sm text-gray-300 leading-relaxed",children:["Em caso de princípio de incêndio em coifas sem sistema fixo automatizado conforme a ",u.jsx("strong",{children:"NBR 14518"}),", as companhias de seguro negam o pagamento da indenização por infração grave às normas. Grandes shoppings exigem laudo de comissionamento Outfire para liberar a operação da loja."]})]}),u.jsx("div",{className:"shrink-0",children:u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20preciso%20de%20um%20laudo%20ou%20projeto%20Outfire%20para%20aprovar%20minha%20cozinha%20no%20Corpo%20de%20Bombeiros%2FShopping.",target:"_blank",rel:"noopener noreferrer",className:"py-3 px-6 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl shadow-glow-red transition-all block text-center",children:"Consultar Engenheiro Outfire"})})]})]})})},yb=({onAddToCart:s})=>{const[e,t]=ke.useState(1),[r,o]=ke.useState(9),[l,d]=ke.useState(!0),[f,p]=ke.useState([{id:1,name:"Coifa Principal (Cocção Pesada)",lengthMeters:2.5,appliances:[{id:"1",name:"Fritadeira Industrial (2 cubas)",type:"fritadeira",icon:"🍟",widthMeters:.6},{id:"2",name:"Fogão Industrial 6 Bocas",type:"fogao",icon:"🍳",widthMeters:1.1},{id:"3",name:"Chapa de Lanche / Bifeira",type:"chapa",icon:"🥩",widthMeters:.8}]}]),m=y=>{if(t(y),y>f.length){const x=[...f];for(let A=f.length+1;A<=y;A++)x.push({id:A,name:`Coifa Setor ${A}`,lengthMeters:2,appliances:[{id:`${A}-1`,name:"Fogão 4 Bocas",type:"fogao",icon:"🍳",widthMeters:.9},{id:`${A}-2`,name:"Chapa Elétrica/Gás",type:"chapa",icon:"🥩",widthMeters:.8}]});p(x)}else y<f.length&&p(f.slice(0,y))},v=(y,x)=>{const A=[...f];A[y].lengthMeters=Math.max(1,Math.min(8,Number(x.toFixed(1)))),p(A)},_=(y,x)=>{const A={fritadeira:"Fritadeira Industrial",fogao:"Fogão Industrial",chapa:"Chapa Profissional",charbroiler:"Charbroiler / Grelha"},L={fritadeira:"🍟",fogao:"🍳",chapa:"🥩",charbroiler:"🔥"},P={fritadeira:.5,fogao:.9,chapa:.8,charbroiler:.7},U=[...f];U[y].appliances.push({id:Math.random().toString(36).substring(7),name:A[x],type:x,icon:L[x],widthMeters:P[x]}),p(U)},S=(y,x)=>{const A=[...f];A[y].appliances.splice(x,1),p(A)},M=ke.useMemo(()=>{let y=0,x=0,A=0,L=0;f.forEach(Z=>{y+=Z.appliances.length,x+=2,l&&(A+=1);const W=Math.max(1,Math.round(Z.lengthMeters/.9));L+=W});const P=y+x+A,U=P*2,D=Math.max(9,U);let O=9;D>9&&D<=16?O=16:D>16&&D<=25?O=25:D>25&&(O=Math.ceil(D/9)*9);const z=Math.max(1,Math.ceil(r/3)),w=z,N=Math.max(10,Math.ceil(r/3*5)),B=N<=10?10:N<=25?25:45,Y=`Central Outfire VTS 32S3 (${e} Coifa${e>1?"s":""} Independentes)`,K=e===1?8900:e===2?14500:19800,ae=P*185+z*210,le=L*295+w*320,ne=K+ae+le+1200;return{applianceNozzlesCount:y,plenumNozzlesCount:x,damperNozzlesCount:A,totalSaponificanteNozzles:P,saponificanteLiters:D,recommendedSaponificanteCylinderLiters:O,hoodSensorsCount:L,co2NozzlesCount:z,ductSensorsCount:w,co2Kg:N,recommendedCo2CylinderKg:B,centralModel:Y,hoodsCount:e,dampersCount:e,gasValvesCount:1,estimatedPriceBRL:ne}},[f,r,l,e]),T=()=>{let y=`🔥 *ORÇAMENTO TÉCNICO - SISTEMA OUTFIRE VTS 32S3*

`;y+=`Olá, equipe de Engenharia da Outfire! Realizei o dimensionamento da minha cozinha no site outfire.com.br e gostaria de uma proposta formal:

`,y+=`🏢 *Configuração da Cozinha:*
`,y+=`• Quantidade de Coifas: ${e} independente(s)
`,y+=`• Comprimento do Duto de Exaustão: ${r} metros

`,f.forEach((A,L)=>{y+=`📍 *Coifa ${L+1} (${A.lengthMeters}m):*
`,y+=`  Equipamentos sob a coifa: ${A.appliances.map(P=>P.name).join(", ")||"Nenhum"}
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

`,y+="Gostaria de agendar uma consulta técnica ou receber a proposta com laudo ART para AVCB. Aguardo retorno!";const x=encodeURIComponent(y);window.open(`https://wa.me/5515996576807?text=${x}`,"_blank")},C=()=>{const y={id:`custom-kit-${Date.now()}`,sku:`OUT-CUSTOM-${e}C`,name:`Kit Personalizado Outfire VTS (${e} Coifa${e>1?"s":""} + Duto ${r}m)`,category:"kit",priceBRL:M.estimatedPriceBRL,description:`Sistema customizado: ${M.totalSaponificanteNozzles} bicos saponificante (${M.recommendedSaponificanteCylinderLiters}L), ${M.co2NozzlesCount} bicos CO2 (${M.recommendedCo2CylinderKg}kg), ${M.hoodSensorsCount} sensores 145°C e ${M.ductSensorsCount} sensores 300°C.`,image:"/assets/central-outfire-fundo-removido.png",specs:[`${M.centralModel}`,`Cilindro Saponificante Classe K: ${M.recommendedSaponificanteCylinderLiters} Litros`,`Cilindro CO2 pressurizado: ${M.recommendedCo2CylinderKg} Kg`,`Bicos Saponificante em Inox: ${M.totalSaponificanteNozzles} unidades`,`Bicos CO2 em Duto: ${M.co2NozzlesCount} unidades`,`Sensores Reguláveis: ${M.hoodSensorsCount} (145°C) + ${M.ductSensorsCount} (300°C)`,"Válvula de corte rápido de gás com rearme manual","Dampers corta-fogo com atuador elétrico"],inStock:!0};s(y)};return u.jsx("section",{id:"calculadora",className:"py-24 bg-[#0a0b0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(C0,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Engenharia sob Medida"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Calculadora de Supressão & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Diagrama Automatizado da sua Cozinha"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Informe as medidas da sua coifa, duto e equipamentos. O sistema calcula a quantidade exata de bicos de saponificante, CO2, sensores e gera o diagrama técnico em tempo real."})]}),u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"glass-panel-gold p-6 rounded-2xl border border-[#d4af37]/30",children:[u.jsxs("label",{className:"text-sm font-bold text-white block mb-3 flex items-center justify-between",children:[u.jsx("span",{children:"1. Quantidade de Coifas Independentes:"}),u.jsx("span",{className:"text-xs font-mono text-[#e5c05d]",children:"Até 3 simultâneas"})]}),u.jsx("div",{className:"grid grid-cols-3 gap-2",children:[1,2,3].map(y=>u.jsxs("button",{onClick:()=>m(y),className:`py-3 px-4 rounded-xl text-sm font-bold flex flex-col items-center gap-1 transition-all ${e===y?"bg-[#d4af37] text-black shadow-glow-gold border border-[#e5c05d]":"bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10"}`,children:[u.jsxs("span",{children:[y," ",y===1?"Coifa":"Coifas"]}),u.jsx("span",{className:"text-[10px] opacity-75 font-normal",children:y===1?"Individual":"Setorizada"})]},y))})]}),u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center justify-between mb-2",children:[u.jsxs("label",{className:"text-sm font-bold text-white flex items-center gap-2",children:[u.jsx(I0,{className:"w-4 h-4 text-cyan-400"}),u.jsx("span",{children:"2. Comprimento do Duto de Exaustão:"})]}),u.jsxs("span",{className:"font-mono text-base font-black text-cyan-400",children:[r," metros"]})]}),u.jsx("input",{type:"range",min:"3",max:"30",step:"1",value:r,onChange:y=>o(Number(y.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"}),u.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400 mt-2 font-mono",children:[u.jsx("span",{children:"3 m (Curto)"}),u.jsx("span",{children:"15 m (Médio)"}),u.jsx("span",{children:"30 m (Longo)"})]}),u.jsxs("div",{className:"mt-4 p-3 bg-cyan-950/20 border border-cyan-800/30 rounded-xl text-xs text-cyan-200 flex items-center justify-between",children:[u.jsx("span",{children:"Regra técnica: 1 bico de CO2 + 1 sensor (300°C) a cada 3m"}),u.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[M.co2NozzlesCount," bicos CO2"]})]})]}),f.map((y,x)=>u.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-white/10 space-y-4",children:[u.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-6 h-6 rounded-full bg-red-600/30 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center",children:x+1}),u.jsx("h4",{className:"font-bold text-white text-sm",children:y.name})]}),u.jsxs("span",{className:"text-xs font-mono font-bold text-amber-400",children:[y.lengthMeters," m"]})]}),u.jsxs("div",{children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400 mb-1.5",children:[u.jsx("span",{children:"Comprimento da Coifa:"}),u.jsxs("span",{children:[y.lengthMeters," metros lineares"]})]}),u.jsx("input",{type:"range",min:"1.0",max:"6.0",step:"0.5",value:y.lengthMeters,onChange:A=>v(x,Number(A.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-amber-500"})]}),u.jsxs("div",{children:[u.jsxs("label",{className:"text-xs font-bold text-gray-300 block mb-2",children:["Equipamentos sob a Coifa (",y.appliances.length," protegidos):"]}),u.jsx("div",{className:"space-y-2 mb-3",children:y.appliances.map((A,L)=>u.jsxs("div",{className:"flex items-center justify-between p-2.5 bg-white/5 rounded-xl border border-white/5 text-xs",children:[u.jsxs("div",{className:"flex items-center gap-2 text-gray-200",children:[u.jsx("span",{className:"text-base",children:A.icon}),u.jsx("span",{className:"font-medium",children:A.name}),u.jsx("span",{className:"text-[10px] bg-[#1a170e] text-[#e5c05d] px-2 py-0.5 rounded border border-[#d4af37]/40 font-mono font-bold",children:"1 bico Saponificante"})]}),u.jsx("button",{onClick:()=>S(x,L),className:"p-1 text-gray-400 hover:text-red-400 transition-colors",title:"Remover equipamento",children:u.jsx(L0,{className:"w-3.5 h-3.5"})})]},A.id))}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-1.5",children:[u.jsxs("button",{onClick:()=>_(x,"fritadeira"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fritadeira"})]}),u.jsxs("button",{onClick:()=>_(x,"fogao"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Fogão"})]}),u.jsxs("button",{onClick:()=>_(x,"chapa"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Chapa"})]}),u.jsxs("button",{onClick:()=>_(x,"charbroiler"),className:"p-2 rounded-lg bg-white/5 hover:bg-[#d4af37]/15 text-gray-300 hover:text-[#f3e5ab] text-[11px] font-medium flex items-center justify-center gap-1 border border-white/5 transition-all",children:[u.jsx(oo,{className:"w-3 h-3 text-[#d4af37]"}),u.jsx("span",{children:"+ Grelha"})]})]})]})]},y.id))]}),u.jsx("div",{className:"lg:col-span-7 space-y-6",children:u.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-white/10 overflow-hidden shadow-2xl relative",children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"}),u.jsx("h3",{className:"font-bold text-white text-base font-sans",children:"Diagrama Esquemático da sua Cozinha"})]}),u.jsx("span",{className:"text-[11px] font-mono text-gray-400 bg-black/40 px-2 py-1 rounded-lg border border-white/5",children:"RENDERIZADO EM TEMPO REAL"})]}),u.jsxs("div",{className:"relative w-full aspect-[16/9] bg-[#0d0f14] rounded-2xl border border-white/10 p-4 flex flex-col justify-between overflow-hidden",children:[u.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none",style:{backgroundImage:"radial-gradient(circle, #4a5568 1px, transparent 1px)",backgroundSize:"20px 20px"}}),u.jsxs("svg",{className:"w-full h-auto",viewBox:"0 0 940 430",children:[u.jsxs("defs",{children:[u.jsxs("linearGradient",{id:"chromeGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#475569"}),u.jsx("stop",{offset:"25%",stopColor:"#cbd5e1"}),u.jsx("stop",{offset:"50%",stopColor:"#ffffff"}),u.jsx("stop",{offset:"75%",stopColor:"#e2e8f0"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"co2Grad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#7f1d1d"}),u.jsx("stop",{offset:"25%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"50%",stopColor:"#ef4444"}),u.jsx("stop",{offset:"80%",stopColor:"#b91c1c"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"ductGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#64748b"}),u.jsx("stop",{offset:"100%",stopColor:"#334155"})]}),u.jsxs("linearGradient",{id:"hoodGrad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#334155"}),u.jsx("stop",{offset:"50%",stopColor:"#1e293b"}),u.jsx("stop",{offset:"100%",stopColor:"#0f172a"})]}),u.jsxs("linearGradient",{id:"damperGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#991b1b"}),u.jsx("stop",{offset:"50%",stopColor:"#dc2626"}),u.jsx("stop",{offset:"100%",stopColor:"#7f1d1d"})]}),u.jsxs("linearGradient",{id:"centralGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[u.jsx("stop",{offset:"0%",stopColor:"#181a20"}),u.jsx("stop",{offset:"50%",stopColor:"#111317"}),u.jsx("stop",{offset:"100%",stopColor:"#0a0c0f"})]}),u.jsxs("linearGradient",{id:"goldGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[u.jsx("stop",{offset:"0%",stopColor:"#b45309"}),u.jsx("stop",{offset:"50%",stopColor:"#f59e0b"}),u.jsx("stop",{offset:"100%",stopColor:"#d97706"})]})]}),u.jsx("rect",{x:"140",y:"24",width:"600",height:"34",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{fill:"#94a3b8",opacity:"0.6",children:[u.jsx("text",{x:"240",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"}),u.jsx("text",{x:"440",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » FLUXO DE EXAUSTÃO » »"}),u.jsx("text",{x:"640",y:"44",fontSize:"10",fontWeight:"bold",letterSpacing:"3",children:"» » »"})]}),Array.from({length:M.co2NozzlesCount}).map((y,x)=>{const A=180+x*(500/Math.max(1,M.co2NozzlesCount));return u.jsxs("g",{children:[u.jsx("line",{x1:A,y1:"24",x2:A,y2:"38",stroke:"#ef4444",strokeWidth:"2"}),u.jsx("circle",{cx:A,cy:"38",r:"5",fill:"#ef4444",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("polygon",{points:`${A-4},43 ${A+4},43 ${A},49`,fill:"#ef4444",opacity:"0.8"}),u.jsx("text",{x:A,y:"19",fill:"#fca5a5",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsx("rect",{x:A+14,y:"33",width:"9",height:"9",fill:"#a855f7",stroke:"#ffffff",strokeWidth:"1",transform:`rotate(45, ${A+18.5}, 37.5)`}),u.jsx("text",{x:A+18.5,y:"19",fill:"#d8b4fe",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"300°C"})]},`co2-duct-${x}`)}),u.jsx("rect",{x:"735",y:"16",width:"22",height:"50",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.5",rx:"3"}),u.jsx("circle",{cx:"746",cy:"41",r:"9",fill:"#0f172a",stroke:"#94a3b8",strokeWidth:"1"}),u.jsx("path",{d:"M 746 34 L 746 48 M 739 41 L 753 41",stroke:"#38bdf8",strokeWidth:"1.5"}),u.jsx("text",{x:"746",y:"11",fill:"#94a3b8",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"EXAUSTOR"}),u.jsxs("g",{id:"cilindro-co2",children:[u.jsx("path",{d:"M 780 40 L 780 20 L 740 20 L 740 24",fill:"none",stroke:"#ef4444",strokeWidth:"2.5"}),u.jsx("rect",{x:"774",y:"30",width:"12",height:"12",fill:"#1e293b",stroke:"#ef4444",strokeWidth:"1"}),u.jsx("rect",{x:"776",y:"42",width:"8",height:"10",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"0.8"}),u.jsx("circle",{cx:"780",cy:"40",r:"4",fill:"#f59e0b"}),u.jsx("path",{d:"M 768 62 C 768 48, 792 48, 792 62 Z",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1"}),u.jsx("rect",{x:"768",y:"60",width:"24",height:"85",rx:"3",fill:"url(#co2Grad)",stroke:"#fca5a5",strokeWidth:"1.2"}),u.jsx("rect",{x:"767",y:"145",width:"26",height:"5",rx:"2",fill:"#1e293b",stroke:"#7f1d1d",strokeWidth:"1"}),u.jsx("rect",{x:"770",y:"80",width:"20",height:"36",fill:"#1e293b",rx:"2",opacity:"0.9"}),u.jsx("text",{x:"780",y:"92",fill:"#ef4444",fontSize:"7",fontWeight:"bold",textAnchor:"middle",children:"CO2"}),u.jsxs("text",{x:"780",y:"102",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedCo2CylinderKg,"kg"]}),u.jsx("text",{x:"780",y:"111",fill:"#94a3b8",fontSize:"4.5",textAnchor:"middle",children:"NBR 14518"}),u.jsx("text",{x:"780",y:"162",fill:"#fca5a5",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"CILINDRO CO2"}),u.jsx("text",{x:"780",y:"171",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:"(DUTO / EXAUSTÃO)"})]}),u.jsxs("g",{id:"cilindro-saponificante",children:[u.jsx("path",{d:"M 46 160 L 46 122 L 95 122",fill:"none",stroke:"#d4af37",strokeWidth:"3"}),u.jsx("rect",{x:"42",y:"160",width:"8",height:"12",fill:"#d97706",stroke:"#f59e0b",strokeWidth:"1"}),u.jsx("circle",{cx:"46",cy:"158",r:"4.5",fill:"#f59e0b"}),u.jsx("circle",{cx:"36",cy:"166",r:"6.5",fill:"#ffffff",stroke:"#334155",strokeWidth:"1.2"}),u.jsx("path",{d:"M 33 166 A 3.5 3.5 0 0 1 39 166",fill:"none",stroke:"#22c55e",strokeWidth:"1.5"}),u.jsx("line",{x1:"36",y1:"166",x2:"38",y2:"163",stroke:"#dc2626",strokeWidth:"1"}),u.jsx("path",{d:"M 28 184 C 28 168, 64 168, 64 184 Z",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsx("rect",{x:"28",y:"182",width:"36",height:"135",rx:"3",fill:"url(#chromeGrad)",stroke:"#cbd5e1",strokeWidth:"1.5"}),u.jsx("rect",{x:"26",y:"317",width:"40",height:"7",rx:"2",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1"}),u.jsx("rect",{x:"31",y:"215",width:"30",height:"52",fill:"#0f172a",rx:"3",stroke:"#d4af37",strokeWidth:"0.8",opacity:"0.95"}),u.jsx("text",{x:"46",y:"228",fill:"#d4af37",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"OUTFIRE"}),u.jsx("text",{x:"46",y:"238",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CLASSE K"}),u.jsxs("text",{x:"46",y:"250",fill:"#38bdf8",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:[M.recommendedSaponificanteCylinderLiters,"L"]}),u.jsx("text",{x:"46",y:"260",fill:"#94a3b8",fontSize:"5",textAnchor:"middle",children:"INOX 304"}),u.jsx("text",{x:"46",y:"337",fill:"#fef08a",fontSize:"7.5",fontWeight:"bold",textAnchor:"middle",children:"SAPONIFICANTE"}),u.jsx("text",{x:"46",y:"347",fill:"#cbd5e1",fontSize:"6.5",textAnchor:"middle",children:"(CROMADO / INOX)"})]}),f.slice(0,e).map((y,x)=>{const A=e,L=635,P=A===1?0:A===2?30:18,U=(L-(A-1)*P)/A,D=95+x*(U+P),O=A===1?84:A===2?65:52,z=D+(U-O)/2,w=O+16,N=z-8,B=66,Y=38,K=y.appliances.length>0?y.appliances:[{id:`app-${x}`,name:"Fogão/Cocção",type:"fogao",icon:"🍳",widthMeters:.9}];return u.jsxs("g",{children:[u.jsx("rect",{x:z,y:"58",width:O,height:"60",fill:"url(#ductGrad)",stroke:"#94a3b8",strokeWidth:"1.5"}),u.jsxs("g",{id:`damper-${x}`,children:[u.jsx("rect",{x:N-2,y:B,width:w+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N-2,y:B+Y-4,width:w+4,height:"4",fill:"#475569",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("rect",{x:N,y:B+3,width:w,height:Y-6,fill:"url(#damperGrad)",stroke:"#fecaca",strokeWidth:"1.2",rx:"3"}),u.jsx("rect",{x:N+w-2,y:B+7,width:"12",height:"18",fill:"#0f172a",stroke:"#cbd5e1",strokeWidth:"1",rx:"2"}),u.jsx("circle",{cx:N+w+4,cy:B+16,r:"2.5",fill:"#eab308"}),u.jsxs("text",{x:N+w/2,y:B+18,fill:"#ffffff",fontSize:A===3?"7":"8",fontWeight:"bold",textAnchor:"middle",children:["DAMPER ",A>1?`#${x+1}`:""]}),u.jsx("text",{x:N+w/2,y:B+27,fill:"#fca5a5",fontSize:A===3?"5.5":"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTA-FOGO"})]}),u.jsx("line",{x1:x===0?95:D-P,y1:"122",x2:D+U-10,y2:"122",stroke:"#d4af37",strokeWidth:"2.5"}),u.jsx("polygon",{points:`${D},158 ${D+U*.12},118 ${D+U*.88},118 ${D+U},158`,fill:"url(#hoodGrad)",stroke:"#cbd5e1",strokeWidth:"1.8"}),u.jsx("rect",{x:D,y:"158",width:U,height:"20",fill:"#1e293b",stroke:"#cbd5e1",strokeWidth:"1.2"}),u.jsxs("text",{x:D+U/2,y:"172",fill:"#f8fafc",fontSize:A===3?"8":"9.5",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1",children:["COIFA ",A>1?`${x+1}`:"INOX"," (",y.lengthMeters,"m - SETOR ",x+1,")"]}),u.jsxs("g",{children:[u.jsx("circle",{cx:D+U*.25,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+U*.25,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 1"}),u.jsx("circle",{cx:D+U*.75,cy:"138",r:"5",fill:"#d4af37",stroke:"#ffffff",strokeWidth:"1.2"}),u.jsx("text",{x:D+U*.75,y:"132",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"PLENO 2"})]}),Array.from({length:Math.max(1,Math.round(y.lengthMeters/.9))}).map((ae,le,ne)=>{const Z=D+25+le*((U-50)/Math.max(1,ne.length-1||1));return u.jsxs("g",{children:[u.jsx("circle",{cx:Z,cy:"150",r:"4",fill:"#ea580c",stroke:"#ffffff",strokeWidth:"1"}),u.jsx("text",{x:Z,y:"164",fill:"#fdba74",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"145°"})]},`sensor-h-${x}-${le}`)}),u.jsx("rect",{x:D,y:"240",width:U,height:"85",fill:"#0f172a",stroke:"#334155",strokeWidth:"1.2",rx:"3"}),K.map((ae,le)=>{const ne=K.length,Z=(U-12)/ne,W=D+6+le*Z,he=Z-6;return u.jsxs("g",{children:[u.jsx("rect",{x:W,y:"245",width:he,height:"75",fill:"#1e293b",stroke:"#475569",strokeWidth:"1",rx:"3"}),u.jsx("text",{x:W+he/2,y:"272",fill:"#ffffff",fontSize:A===3?"7":"8.5",fontWeight:"bold",textAnchor:"middle",children:ae.name.split(" ")[0]}),u.jsx("text",{x:W+he/2,y:"286",fill:"#94a3b8",fontSize:A===3?"5.5":"6.5",textAnchor:"middle",children:ae.type.toUpperCase()}),u.jsx("line",{x1:W+he/2,y1:"178",x2:W+he/2,y2:"225",stroke:"#d4af37",strokeWidth:"2"}),u.jsx("polygon",{points:`${W+he/2-4},225 ${W+he/2+4},225 ${W+he/2},233`,fill:"#d4af37"}),u.jsx("text",{x:W+he/2,y:"220",fill:"#fef08a",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"BICOK"})]},ae.id||`app-${x}-${le}`)})]},`hood-block-${y.id||x}`)}),u.jsxs("g",{id:"central-outfire-diagrama",children:[u.jsx("path",{d:"M 770 200 L 710 200 L 710 85 L 680 85",fill:"none",stroke:"#38bdf8",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 770 330 L 740 330 L 740 375 L 300 375",fill:"none",stroke:"#eab308",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("path",{d:"M 780 185 L 780 160",fill:"none",stroke:"#ef4444",strokeWidth:"1.5",strokeDasharray:"3 3"}),u.jsx("rect",{x:"765",y:"188",width:"155",height:"152",rx:"6",fill:"url(#centralGrad)",stroke:"#d4af37",strokeWidth:"1.8"}),u.jsx("rect",{x:"780",y:"184",width:"125",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"788",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"805",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"880",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"897",cy:"187",r:"1.5",fill:"#cbd5e1"}),u.jsx("rect",{x:"790",y:"338",width:"105",height:"6",rx:"1.5",fill:"#1f232b",stroke:"#94a3b8",strokeWidth:"0.8"}),u.jsx("circle",{cx:"798",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"815",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"870",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("circle",{cx:"887",cy:"341",r:"1.5",fill:"#cbd5e1"}),u.jsx("text",{x:"842",y:"206",fill:"#f59e0b",fontSize:"9",fontWeight:"bold",textAnchor:"middle",letterSpacing:"1.5",children:"OUTFIRE"}),u.jsx("polygon",{points:"842,192 846,197 842,201 838,197",fill:"#f59e0b"}),u.jsxs("g",{transform:"translate(772, 218)",children:[u.jsx("rect",{x:"0",y:"0",width:"22",height:"22",fill:"#0f172a",stroke:"#d4af37",strokeWidth:"0.8"}),u.jsx("rect",{x:"3",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"14",y:"3",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"3",y:"14",width:"5",height:"5",fill:"#d4af37"}),u.jsx("rect",{x:"10",y:"10",width:"3",height:"3",fill:"#d4af37"})]}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"74",rx:"3",fill:"#061317",stroke:"#38bdf8",strokeWidth:"1"}),u.jsx("rect",{x:"798",y:"215",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"803",y:"224",fill:"#ffffff",fontSize:"6",fontWeight:"bold",children:"10/05 15:42"}),u.jsx("circle",{cx:"906",cy:"221",r:"2.5",fill:"#22c55e",stroke:"#ffffff",strokeWidth:"0.5"}),u.jsx("rect",{x:"801",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"813.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"EXAUST OK"}),u.jsx("rect",{x:"828",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"840.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"ENERG OK"}),u.jsx("rect",{x:"855",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"867.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"GÁS OK"}),u.jsx("rect",{x:"882",y:"229",width:"25",height:"11",fill:"#15803d",rx:"1"}),u.jsx("text",{x:"894.5",y:"237",fill:"#ffffff",fontSize:"4.5",fontWeight:"bold",textAnchor:"middle",children:"DAMP OK"}),u.jsx("rect",{x:"803",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"SETORES"}),u.jsx("rect",{x:"857",y:"243",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"253",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONTROLE GÁS"}),u.jsx("rect",{x:"803",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"828",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"REARMAR"}),u.jsx("rect",{x:"857",y:"260",width:"50",height:"14",fill:"#1d4ed8",rx:"2"}),u.jsx("text",{x:"882",y:"270",fill:"#ffffff",fontSize:"5.5",fontWeight:"bold",textAnchor:"middle",children:"CONFIG"}),u.jsx("rect",{x:"798",y:"277",width:"114",height:"12",fill:"#0284c7"}),u.jsx("text",{x:"855",y:"286",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"SISTEMA OPERANTE"}),u.jsx("rect",{x:"769",y:"300",width:"147",height:"24",fill:"#b91c1c",rx:"2"}),u.jsx("text",{x:"842",y:"311",fill:"#ffffff",fontSize:"6",fontWeight:"bold",textAnchor:"middle",children:"EM CASO DE INCÊNDIO EVACUAR O LOCAL"}),u.jsx("text",{x:"842",y:"319",fill:"#fef08a",fontSize:"5",fontWeight:"bold",textAnchor:"middle",children:"SUPORTE: (15) 98157-7847 / OUTFIRE.COM.BR"}),u.jsx("text",{x:"842",y:"360",fill:"#f59e0b",fontSize:"8",fontWeight:"bold",textAnchor:"middle",children:"CENTRAL VTS 32S3"}),u.jsxs("text",{x:"842",y:"370",fill:"#94a3b8",fontSize:"6.5",textAnchor:"middle",children:["(",e," Coifa",e>1?"s":""," Independentes)"]})]}),u.jsx("line",{x1:"90",y1:"385",x2:"740",y2:"385",stroke:"#eab308",strokeWidth:"3"}),u.jsx("rect",{x:"260",y:"374",width:"45",height:"22",fill:"#b91c1c",stroke:"#fecaca",strokeWidth:"1",rx:"2"}),u.jsx("rect",{x:"277",y:"366",width:"11",height:"9",fill:"#1e293b",stroke:"#eab308",strokeWidth:"0.8"}),u.jsx("text",{x:"282.5",y:"388",fill:"#ffffff",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"VÁLVULA GÁS"}),u.jsx("text",{x:"282.5",y:"405",fill:"#fef08a",fontSize:"6.5",fontWeight:"bold",textAnchor:"middle",children:"CORTE INSTANTÂNEO"})]}),u.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-x-4 gap-y-2 pt-3 border-t border-white/10 text-[10.5px] text-gray-300",children:[u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#d4af37]"}),u.jsx("span",{children:"Bico Saponificante (Classe K)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-gradient-to-b from-gray-200 to-gray-400 border border-white/50"}),u.jsx("span",{children:"Cilindro Saponificante (Inox)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-red-500"}),u.jsx("span",{children:"Bico CO2 Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-4 rounded-sm bg-red-600 border border-red-300"}),u.jsx("span",{children:"Cilindro CO2 (Vermelho)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-500"}),u.jsx("span",{children:"Sensor 145°C Coifa"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-purple-500"}),u.jsx("span",{children:"Sensor 300°C Duto"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2.5 rounded-sm bg-red-700 border border-red-300"}),u.jsx("span",{children:"Damper Corta-Fogo (Acima da Coifa)"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-3 rounded-sm bg-black border border-amber-400"}),u.jsx("span",{children:"Central Outfire VTS 32S3"})]}),u.jsxs("div",{className:"flex items-center gap-1.5",children:[u.jsx("span",{className:"w-3 h-2 rounded-sm bg-red-600 border border-amber-300"}),u.jsx("span",{children:"Válvula de Gás (Corte Automático)"})]})]})]}),u.jsxs("div",{className:"mt-6 space-y-3",children:[u.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2",children:[u.jsx(qr,{className:"w-4 h-4 text-emerald-400"}),u.jsx("span",{children:"Resumo do Dimensionamento Técnico (BOM)"})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.totalSaponificanteNozzles," un"]}),u.jsxs("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:["(",M.saponificanteLiters,"L calculados)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro Saponificante"}),u.jsxs("span",{className:"text-lg font-black text-amber-400 font-mono",children:[M.recommendedSaponificanteCylinderLiters," L"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 9L"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Bicos de CO2 (Duto)"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.co2NozzlesCount," un"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"(1 a cada 3m de duto)"})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Cilindro de CO2"}),u.jsxs("span",{className:"text-lg font-black text-cyan-400 font-mono",children:[M.recommendedCo2CylinderKg," Kg"]}),u.jsx("span",{className:"text-[10px] text-gray-400 block mt-0.5",children:"Mínimo de 10kg"})]})]}),u.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Coifa (145°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.hoodSensorsCount," un (1/metro)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Sensores Duto (300°C)"}),u.jsxs("span",{className:"text-base font-bold text-white font-mono",children:[M.ductSensorsCount," un (1 a cada 3m)"]})]}),u.jsxs("div",{className:"p-3 bg-white/5 rounded-xl border border-white/5 col-span-2 sm:col-span-1",children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Intertravamento Total"}),u.jsx("span",{className:"text-xs font-bold text-emerald-400 block",children:"Gás + Exaustão + Damper"})]})]})]}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4",children:[u.jsxs("button",{onClick:T,className:"flex-1 py-4 px-6 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 group",children:[u.jsx(hr,{className:"w-5 h-5 group-hover:scale-110 transition-transform"}),u.jsx("span",{children:"Enviar Orçamento para WhatsApp"})]}),u.jsxs("button",{onClick:C,className:"py-4 px-6 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black rounded-2xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(fv,{className:"w-5 h-5 fill-black"}),u.jsx("span",{children:"Comprar Kit na Loja"})]})]}),u.jsx("p",{className:"text-center text-xs text-gray-400 mt-3",children:"*O projeto inclui memória de cálculo e documentação pronta para laudo ART e vistoria do Corpo de Bombeiros."})]})})]})]})})},Sb=[{id:"central-outfire-vts-1",sku:"OUT-VTS-1C",name:"Central Outfire VTS 32S3 - 1 Coifa (Kit Completo)",category:"kit",priceBRL:8900,description:"Sistema completo integrado de CO2 e Saponificante Classe K para 1 coifa industrial. Acompanha IHM touchscreen colorida, cilindro saponificante 9L, cilindro CO2 10kg, bicos de inox, sensores térmicos reguláveis e intertravamento de gás.",image:"/assets/central-outfire-fundo-removido.png",specs:["Controle autônomo para 1 coifa","IHM Touchscreen colorida com avisos de voz","1x Cilindro Saponificante 9 Litros Classe K","1x Cilindro CO2 10 Kg com cabeçote solenoide","Intertravamento de Gás e Exaustor","Certificação em conformidade com NBR 14518"],featured:!0,inStock:!0},{id:"central-outfire-vts-2",sku:"OUT-VTS-2C",name:"Central Outfire VTS 32S3 - 2 Coifas (Atuação Independente)",category:"kit",priceBRL:14500,description:"Sistema de supressão inteligente para cozinhas de médio/grande porte com 2 coifas independentes. Se disparar a Coifa 1, a Coifa 2 continua operando com segurança.",image:"/assets/central-outfire-instalada.jpg",specs:["Controle independente para até 2 coifas","IHM Touchscreen com monitoramento individual por setor","2x Cilindros Saponificante (dimensionados sob medida)","Cilindros de CO2 dedicados para cada duto","Contagem regressiva de segurança anti-disparo acidental","Agenda semanal para abertura e corte automático de gás"],featured:!0,inStock:!0},{id:"central-outfire-vts-3",sku:"OUT-VTS-3C",name:"Central Outfire VTS 32S3 - 3 Coifas (Linha Master Industrial)",category:"kit",priceBRL:19800,description:"A mais avançada central de combate a incêndio em cozinhas profissionais do Brasil. Monitora e protege até 3 coifas simultâneas de forma 100% autônoma e setorizada.",image:"/assets/central-outfire-ihm.jpg",specs:["Controle simultâneo e independente de 3 coifas","Acionamento individual de dampers e CO2 por duto","Alertas de voz falada de alta potência","Histórico completo de eventos e diagnósticos de vazamento","Interface para integração com Alarme Predial de Shoppings","Atende plenamente ABNT NBR 14518, NFPA 96 e NFPA 17A"],featured:!0,inStock:!0},{id:"bico-saponificante-inox",sku:"OUT-BIC-SAP",name:"Bico Aspersor de Inox para Saponificante (Classe K)",category:"bicos",priceBRL:185,description:"Bico difusor de alta vazão em aço inoxidável 304 com rosca NPT. Acompanha capa protetora de borracha/silicone de alta temperatura contra acúmulo de gordura.",image:"/assets/central-outfire-interno.jpg",specs:["Material: Aço Inoxidável 304 polido",'Rosca: 3/8" ou 1/2" NPT',"Ângulo de abertura especial para cubas e filtros","Capa protetora com cordão de retenção inclusa"],featured:!1,inStock:!0},{id:"bico-co2-duto",sku:"OUT-BIC-CO2",name:"Bico Difusor de CO2 para Dutos de Exaustão",category:"bicos",priceBRL:210,description:"Bico de alta pressão calibrado para inundação total de CO2 dentro da linha de dutos, eliminando o oxigênio rapidamente.",image:"/assets/central-outfire-interno.jpg",specs:["Inundação rápida em alta pressão","Rosca NPT padronizada","Resistente a calor contínuo de até 400°C"],featured:!1,inStock:!0},{id:"sensor-coifa-145c",sku:"OUT-SNS-145",name:"Sensor Térmico Regulável para Coifa (Calibrado 145°C)",category:"sensores",priceBRL:295,description:"Sensor eletromecânico e termostático de precisão em aço inox para monitoramento de temperatura na zona de cocção.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de regulagem: 50°C a 200°C (ajustado em 145°C)","Haste blindada em inox resistente a vapores e gordura","Contato seco normalmente aberto/fechado","Cabo de alta temperatura blindado em malha metálica"],featured:!1,inStock:!0},{id:"sensor-duto-300c",sku:"OUT-SNS-300",name:"Sensor Térmico Regulável para Duto (Calibrado 300°C)",category:"sensores",priceBRL:320,description:"Sensor de alta temperatura para detecção de fogo na linha de duto de exaustão e acionamento instantâneo de CO2 e dampers.",image:"/assets/central-outfire-interno.jpg",specs:["Faixa de operação: até 350°C (ajustado em 300°C)","Instalação externa com sonda inserida no duto","Conexão estanque anti-vazamento de óleo"],featured:!1,inStock:!0},{id:"recarga-saponificante-9l",sku:"OUT-AG-SAP9",name:"Galão Agente Saponificante Classe K Outfire (9 Litros)",category:"cilindro",priceBRL:680,description:"Composto líquido à base de sais orgânicos e acetato de potássio formulado especificamente para saponificação imediata de óleos vegetais e gorduras animais.",image:"/assets/central-outfire-fundo-removido.png",specs:["Volume: 9 Litros líquidos","Ação de saponificação com espuma refrigerante espessa","Não tóxico e biodegradável","Laudo técnico de conformidade para bombeiros"],featured:!1,inStock:!0},{id:"valvula-gas-solenoide-1pol",sku:"OUT-VLV-GAS1",name:'Válvula Solenoide de Corte Rápido de Gás 1" (Bivolt)',category:"valvulas",priceBRL:840,description:"Válvula de corte de segurança para linha de GLP / Gás Natural. Fecha instantaneamente ao menor sinal de disparo ou vazamento de gás.",image:"/assets/central-outfire-interno.jpg",specs:["Diâmetro: 1 polegada BSP/NPT","Rearme manual para segurança obrigatória","Corpo em latão forjado de alta resistência","Compatível com GLP e Gás Natural encanado"],featured:!1,inStock:!0},{id:"damper-corta-fogo-motorizado",sku:"OUT-DMP-CF",name:"Damper Corta-Fogo Motorizado com Mola de Retorno",category:"acessorios",priceBRL:1250,description:"Damper para isolamento mecânico de dutos de coifa. Fecha automaticamente no disparo de CO2 para aprisionar o gás e sufocar o incêndio.",image:"/assets/central-outfire-interno.jpg",specs:["Lâminas corta-fogo com vedação hermética","Atuador 24V com retorno por mola mecânica","Resistência ao fogo: 120 minutos (TRRF 120)","Microswitch de confirmação de fechamento"],featured:!1,inStock:!0},{id:"acionador-manual-pull",sku:"OUT-ACT-MAN",name:"Estação de Disparo Manual de Emergência (Tipo Puxador)",category:"acessorios",priceBRL:310,description:"Acionador de emergência de dupla ação em caixa metálica amarela/vermelha com lacre e trava de segurança.",image:"/assets/central-outfire-fundo-removido.png",specs:["Acionamento mecânico e elétrico simultâneo","Pintura eletrostática de alta visibilidade","Trava de segurança para impedir toque acidental"],featured:!1,inStock:!0}],Mb=({onAddToCart:s})=>{const[e,t]=ke.useState("all"),[r,o]=ke.useState(""),l=[{id:"all",name:"Todos os Produtos"},{id:"kit",name:"Sistemas Completos"},{id:"bicos",name:"Bicos de Aspersão"},{id:"sensores",name:"Sensores Reguláveis"},{id:"cilindro",name:"Cilindros & Recargas"},{id:"valvulas",name:"Válvulas de Gás"},{id:"acessorios",name:"Acessórios & Acionadores"}],d=Sb.filter(p=>{const m=e==="all"||p.category===e,v=p.name.toLowerCase().includes(r.toLowerCase())||p.description.toLowerCase().includes(r.toLowerCase())||p.sku.toLowerCase().includes(r.toLowerCase());return m&&v}),f=p=>{const m=`Olá! Gostaria de comprar ou solicitar proposta para o produto:
*${p.name}* (SKU: ${p.sku})
Valor: R$ ${p.priceBRL.toLocaleString("pt-BR")},00.
Poderia me passar os prazos de entrega e condições de faturamento?`;window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(m)}`,"_blank")};return u.jsx("section",{id:"loja",className:"py-24 bg-[#08090c] relative",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(Jl,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Loja Oficial Outfire"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Sistemas Completos & ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"Peças de Reposição Certificadas"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Adquira o sistema completo para sua cozinha ou componentes avulsos para manutenção preventiva. Entrega expressa para todo o Brasil com nota fiscal e laudos de conformidade técnica."})]}),u.jsxs("div",{className:"flex flex-col lg:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10",children:[u.jsx("div",{className:"flex flex-wrap items-center gap-2 w-full lg:w-auto",children:l.map(p=>u.jsx("button",{onClick:()=>t(p.id),className:`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${e===p.id?"bg-[#d4af37] text-black shadow-glow-gold":"bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5"}`,children:p.name},p.id))}),u.jsxs("div",{className:"relative w-full lg:w-72",children:[u.jsx(Nv,{className:"w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2"}),u.jsx("input",{type:"text",placeholder:"Buscar bicos, sensores, cilindros...",value:r,onChange:p=>o(p.target.value),className:"w-full bg-[#12141a] border border-[#d4af37]/20 text-white text-xs rounded-xl pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#d4af37] transition-colors"})]})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:d.map(p=>u.jsxs("div",{className:"glass-panel-gold rounded-3xl border border-[#d4af37]/25 hover:border-[#d4af37]/60 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"relative w-full h-56 bg-gradient-to-br from-[#171a22] to-[#0a0c10] p-6 flex items-center justify-center overflow-hidden border-b border-white/5",children:[u.jsx("img",{src:p.image,alt:p.name,className:"max-h-full max-w-full object-contain filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-1.5",children:[p.featured&&u.jsxs("span",{className:"bg-gradient-to-r from-[#d4af37] to-[#e5c05d] text-black text-[10px] font-black px-2.5 py-0.5 rounded-full shadow-glow-gold flex items-center gap-1",children:[u.jsx(vo,{className:"w-3 h-3 fill-black"}),"Mais Vendido"]}),u.jsxs("span",{className:"bg-black/80 backdrop-blur-md text-[#f3e5ab] text-[10px] font-mono px-2 py-0.5 rounded border border-[#d4af37]/30",children:["SKU: ",p.sku]})]}),u.jsx("span",{className:"absolute bottom-3 right-3 text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800",children:"Pronta Entrega"})]}),u.jsxs("div",{className:"p-6",children:[u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans line-clamp-1",children:p.name}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2",children:p.description}),u.jsx("div",{className:"space-y-1.5 mb-6",children:p.specs.slice(0,3).map((m,v)=>u.jsxs("div",{className:"flex items-start gap-2 text-[11px] text-gray-300",children:[u.jsx(gv,{className:"w-3.5 h-3.5 text-[#d4af37] shrink-0 mt-0.5"}),u.jsx("span",{className:"line-clamp-1",children:m})]},v))})]})]}),u.jsxs("div",{className:"p-6 pt-0",children:[u.jsxs("div",{className:"flex items-baseline justify-between mb-4 pt-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("span",{className:"text-[10px] text-gray-400 block",children:"Preço à vista ou faturado"}),u.jsxs("span",{className:"text-2xl font-black text-[#f3e5ab] font-mono",children:["R$ ",p.priceBRL.toLocaleString("pt-BR"),",00"]})]}),u.jsx("span",{className:"text-xs text-[#e5c05d] font-bold",children:"Em até 12x"})]}),u.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[u.jsxs("button",{onClick:()=>s(p),className:"py-2.5 px-3 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black text-xs font-black rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-1.5",children:[u.jsx(Jl,{className:"w-3.5 h-3.5 fill-black"}),u.jsx("span",{children:"Adicionar"})]}),u.jsxs("button",{onClick:()=>f(p),className:"py-2.5 px-3 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5",title:"Negociar faturamento via WhatsApp",children:[u.jsx(hr,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"WhatsApp"})]})]})]})]},p.id))})]})})},Eb=()=>{const s=[{title:"Manual do Usuário — Sistema OutFire® (Edição Oficial 2026)",type:"Manual Mais Completo (14 Seções)",size:"1.2 MB",description:"Guia operacional definitivo da IHM: Dashboard 2026, Setores e Modo Limpeza, Central Mista (CO2 + Detecção), Checklist Wizard 8 etapas, Alertas de Falha, Pré-Alarme 15s, Agenda de Gás, Avisos de Voz DAC, Pareamento Sem Fio e Garantia de 12 Meses.",link:"/manual-usuario.html",pdfLink:"/assets/Manual_Usuario_OutFire_2026.pdf",featured:!0},{title:"Manual Técnico e Esquema Elétrico Central Outfire 2026",type:"PDF Oficial de Engenharia",size:"750 KB",description:"Diagrama elétrico completo de bornes, acionamento das solenoides, intertravamento do exaustor, sensores reguláveis 145°C/300°C e dampers motorizados.",link:"/assets/Manual_Tecnico_OutFire_2026.pdf",pdfLink:"/assets/Manual_Tecnico_OutFire_2026.pdf",featured:!0},{title:"Procedimento Operacional Padrão (POP) Pós-Disparo",type:"Guia Técnico",size:"280 KB",description:"Instruções passo a passo para a equipe do restaurante após o combate a incêndio: limpeza do agente saponificante, rearme da válvula e recarga.",link:"#contato"},{title:"Certificado de Conformidade Técnica & Memorial Descritivo (NBR 14518)",type:"Documento para Bombeiros / AVCB",size:"420 KB",description:"Documentação comprobatória das características técnicas e ensaios de conformidade para instrução de processos no Corpo de Bombeiros.",link:"#contato"}],e=[{step:"01",title:"Posicionamento da Central VTS 32S3",desc:"Fixar o painel em local de fácil visualização e acesso fora da zona de fogo direto, a 1,50m do piso, próximo à rota de saída."},{step:"02",title:"Passagem dos Cabos Blindados de Alta Temperatura",desc:"Lançar a fiação dos sensores da coifa (145°C) e dos sensores do duto (300°C) utilizando conduítes metálicos independentes."},{step:"03",title:"Interligação da Válvula de Gás e Exaustor",desc:"Conectar os contatos secos (relés) da central à bobina da válvula solenoide de gás e ao contator do motor de exaustão."},{step:"04",title:"Comissionamento e Teste sem Disparo",desc:"Simular acionamento pelo menu de teste da IHM para validar corte de gás e parada do exaustor antes da liberação final."}];return u.jsx("section",{id:"manuais",className:"py-24 bg-[#0a0c0e] relative border-t border-white/5",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(vm,{className:"w-3.5 h-3.5"}),"Engenharia & Suporte"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Central de Manuais Técnicos & ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Documentos de Instalação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Tenha acesso imediato aos esquemas elétricos, guias de montagem passo a passo e memoriais de cálculo para instaladores, engenheiros e montadores de coifa."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8 mb-16",children:s.map((t,r)=>u.jsxs("div",{className:`p-6 sm:p-8 rounded-3xl border flex flex-col justify-between transition-all ${t.featured?"glass-panel-gold border-amber-500/40 bg-gradient-to-b from-[#1a1710] to-[#0e1014] shadow-glow-gold":"glass-panel border-white/10"}`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsx("span",{className:"text-[10px] font-mono font-bold bg-white/10 text-gray-300 px-2.5 py-1 rounded-md",children:t.type}),u.jsx(Md,{className:`w-6 h-6 ${t.featured?"text-amber-400":"text-gray-400"}`})]}),u.jsx("h3",{className:"text-lg font-bold text-white mb-2 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-6",children:t.description})]}),u.jsxs("div",{className:"pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[u.jsx("span",{className:"text-xs text-gray-400 font-mono",children:t.size}),u.jsxs("div",{className:"flex items-center gap-2",children:[t.pdfLink&&t.pdfLink!==t.link&&u.jsxs("a",{href:t.link,target:"_blank",rel:"noopener noreferrer",className:"py-2 px-3 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white transition-all",children:[u.jsx(vm,{className:"w-3.5 h-3.5 text-amber-400"}),u.jsx("span",{children:"Ver Online"})]}),u.jsxs("a",{href:t.pdfLink||t.link,target:"_blank",rel:"noopener noreferrer",className:`py-2 px-4 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${t.featured?"gold-gradient hover:brightness-110 text-black font-extrabold shadow-glow-gold":"bg-white/10 hover:bg-white/20 text-white"}`,children:[u.jsx(R0,{className:"w-3.5 h-3.5"}),u.jsx("span",{children:"Baixar PDF"})]})]})]})]},r))}),u.jsxs("div",{className:"glass-panel p-8 rounded-3xl border border-white/10",children:[u.jsxs("div",{className:"flex items-center gap-2.5 mb-6",children:[u.jsx(Uv,{className:"w-5 h-5 text-amber-400"}),u.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:"Guia Prático de Instalação da Central Outfire VTS 32S3"})]}),u.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:e.map((t,r)=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 relative",children:[u.jsx("span",{className:"text-2xl font-black text-amber-400 font-mono block mb-2 opacity-90",children:t.step}),u.jsx("h4",{className:"text-sm font-bold text-white mb-1.5 font-sans",children:t.title}),u.jsx("p",{className:"text-xs text-gray-400 leading-relaxed",children:t.desc})]},r))}),u.jsxs("div",{className:"mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4",children:[u.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300 text-center sm:text-left",children:[u.jsx(Ql,{className:"w-4 h-4 text-emerald-400 shrink-0"}),u.jsx("span",{children:"Precisa de suporte na instalação da sua equipe? Engenheiros especializados disponíveis por WhatsApp."})]}),u.jsx("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20sou%20instalador%2Fengenheiro%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20t%C3%A9cnica%20sobre%20a%20Central%20Outfire.",target:"_blank",rel:"noopener noreferrer",className:"py-2.5 px-5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/10 transition-all shrink-0",children:"Suporte Técnico de Engenharia →"})]})]})]})})},bb=()=>{const[s,e]=ke.useState(null),t=[{src:"/assets/central-outfire-instalada.jpg",title:"Central Outfire VTS Instalada em Cozinha Real",category:"Instalação em Restaurante",desc:"Central montada estrategicamente na parede lateral da coifa, com chicote elétrico de alta temperatura interligado à válvula de corte de gás e aos dampers do duto."},{src:"/assets/central-outfire-interno.jpg",title:"Placa de Controle & Relés de Potência Outfire",category:"Engenharia Interna",desc:"Eletrônica industrial com proteção contra surtos, bornes reforçados para conexões dos sensores de 145°C e 300°C, relés dedicados e backup por bateria."},{src:"/assets/central-outfire-ihm.jpg",title:"IHM Touchscreen em Operação com Alerta",category:"Interface de Operação",desc:"Tela de alta resolução colorida exibindo o status de alerta térmico, contagem regressiva anti-disparo acidental e menu com senha para parametrizações."},{src:"/assets/central-outfire-fundo-removido.png",title:"Gabinete Industrial Outfire VTS 32S3",category:"Design Robusto",desc:"Construção em chapa de aço com pintura eletrostática texturizada de alta durabilidade, projetada para suportar a gordura e o ambiente severo de cozinhas industriais."}];return u.jsxs("section",{id:"galeria",className:"py-24 bg-[#0d0f13] relative",children:[u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[u.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wide mb-4",children:[u.jsx(vo,{className:"w-3.5 h-3.5"}),"Casos Reais & Engenharia em Campo"]}),u.jsxs("h2",{className:"text-3xl sm:text-5xl font-black text-white tracking-tight font-sans",children:["Instalações Reais do ",u.jsx("br",{}),u.jsx("span",{className:"gold-gradient-text",children:"Sistema Outfire em Ação"})]}),u.jsx("p",{className:"mt-4 text-base sm:text-lg text-gray-400 leading-relaxed",children:"Veja detalhes da montagem física da Central Outfire VTS 32S3, acabamento dos componentes e a integração visual impecável nas cozinhas dos nossos clientes."})]}),u.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map((r,o)=>u.jsxs("div",{onClick:()=>e(r),className:"glass-panel rounded-3xl border border-white/10 hover:border-amber-500/40 hover:shadow-glow-gold overflow-hidden cursor-pointer group transition-all duration-300 hover:-translate-y-1",children:[u.jsxs("div",{className:"relative h-72 sm:h-80 bg-black/50 overflow-hidden flex items-center justify-center",children:[u.jsx("img",{src:r.src,alt:r.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"}),u.jsxs("div",{className:"absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-bold text-sm",children:[u.jsx(N0,{className:"w-5 h-5 text-amber-400"}),u.jsx("span",{children:"Clique para Ampliar Foto"})]}),u.jsx("div",{className:"absolute top-4 left-4",children:u.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-amber-400 px-3 py-1 rounded-full border border-amber-500/30",children:r.category})})]}),u.jsxs("div",{className:"p-6",children:[u.jsxs("h3",{className:"text-lg font-bold text-white mb-2 font-sans flex items-center justify-between",children:[u.jsx("span",{children:r.title}),u.jsx(Ev,{className:"w-4 h-4 text-gray-400 group-hover:text-amber-400 transition-colors"})]}),u.jsx("p",{className:"text-xs sm:text-sm text-gray-400 leading-relaxed",children:r.desc})]})]},o))})]}),s&&u.jsx("div",{onClick:()=>e(null),className:"fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8",children:u.jsxs("div",{onClick:r=>r.stopPropagation(),className:"max-w-4xl w-full bg-[#12141a] rounded-3xl border border-white/10 overflow-hidden shadow-2xl",children:[u.jsx("div",{className:"relative max-h-[70vh] bg-black flex items-center justify-center p-2",children:u.jsx("img",{src:s.src,alt:s.title,className:"max-h-[65vh] w-auto object-contain rounded-xl"})}),u.jsxs("div",{className:"p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-bold text-white",children:s.title}),u.jsx("p",{className:"text-xs text-gray-400 mt-1",children:s.desc})]}),u.jsx("button",{onClick:()=>e(null),className:"py-2 px-5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-xl transition-all",children:"Fechar"})]})]})})]})},wb=()=>{const[s,e]=ke.useState({nome:"",empresa:"",telefone:"",cidade:"",coifas:"1",mensagem:""}),[t,r]=ke.useState(!1),o=l=>{l.preventDefault();let d=`📋 *NOVO CONTATO PELO SITE OUTFIRE.COM.BR*

`;d+=`👤 *Nome:* ${s.nome}
`,d+=`🏢 *Empresa / Restaurante:* ${s.empresa||"Não informado"}
`,d+=`📱 *Telefone / WhatsApp:* ${s.telefone}
`,d+=`📍 *Cidade / Estado:* ${s.cidade}
`,d+=`🍳 *Qtd de Coifas:* ${s.coifas} coifa(s)
`,s.mensagem&&(d+=`💬 *Mensagem:* ${s.mensagem}
`),r(!0),setTimeout(()=>{window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(d)}`,"_blank"),r(!1)},1e3)};return u.jsxs("footer",{id:"contato",className:"bg-[#08090b] text-gray-400 border-t border-white/10 relative overflow-hidden",children:[u.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10",children:u.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[u.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#d4af37]/10 border border-[#d4af37]/30 text-[#e5c05d] text-xs font-bold uppercase tracking-wide",children:[u.jsx(hr,{className:"w-3.5 h-3.5 text-[#d4af37]"}),"Canais Diretos de Engenharia & Vendas"]}),u.jsxs("h3",{className:"text-3xl sm:text-4xl font-black text-white font-sans tracking-tight",children:["Fale com um Especialista ",u.jsx("br",{}),u.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-[#f3e5ab] via-[#d4af37] to-[#b89628]",children:"em Supressão Outfire"})]}),u.jsx("p",{className:"text-sm text-gray-400 leading-relaxed",children:"Dúvidas sobre dimensionamento de bicos, sensores, laudos para o Corpo de Bombeiros (AVCB) ou solicitação de visita técnica para cozinhas em shopping centers e restaurantes."}),u.jsxs("div",{className:"space-y-4 pt-4",children:[u.jsxs("a",{href:"https://wa.me/5515996576807",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform",children:u.jsx(hr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"WhatsApp Vendas & Orçamentos"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-emerald-400 transition-colors",children:"(15) 99657-6807"})]})]}),u.jsxs("a",{href:"https://wa.me/5515981577847",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-emerald-500/30 transition-all text-white group",children:[u.jsx("div",{className:"w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 group-hover:scale-110 transition-transform",children:u.jsx(hr,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"text-xs text-gray-400 block font-mono",children:"Suporte Técnico & Pós-Venda"}),u.jsx("span",{className:"text-base font-bold text-white group-hover:text-red-400 transition-colors",children:"(15) 98157-7847"})]})]}),u.jsxs("div",{className:"flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-gray-300",children:[u.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0",children:u.jsx(Mv,{className:"w-5 h-5"})}),u.jsxs("div",{children:[u.jsx("span",{className:"font-bold text-white block",children:"Atendimento em Todo o Brasil"}),u.jsx("span",{className:"text-gray-400",children:"Envio de kits prontos para instalação com laudo ART e suporte remoto."})]})]})]})]}),u.jsx("div",{className:"lg:col-span-7",children:u.jsxs("div",{className:"glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative",children:[u.jsx("h4",{className:"text-xl font-bold text-white mb-2 font-sans",children:"Solicite uma Proposta Técnica sem Compromisso"}),u.jsx("p",{className:"text-xs text-gray-400 mb-6",children:"Preencha os dados e nosso engenheiro entrará em contato em menos de 15 minutos com o dimensionamento preliminar."}),t?u.jsxs("div",{className:"p-8 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl",children:[u.jsx(qr,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h5",{className:"text-base font-bold text-white",children:"Encaminhando para o WhatsApp..."}),u.jsx("p",{className:"text-xs text-gray-300",children:"Você será direcionado diretamente para um especialista no WhatsApp."})]}):u.jsxs("form",{onSubmit:o,className:"space-y-4",children:[u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Seu Nome Completo *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: Carlos Silva",value:s.nome,onChange:l=>e({...s,nome:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Nome do Restaurante / Empresa"}),u.jsx("input",{type:"text",placeholder:"Ex: Hamburgueria Grill",value:s.empresa,onChange:l=>e({...s,empresa:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"WhatsApp com DDD *"}),u.jsx("input",{type:"tel",required:!0,placeholder:"Ex: (11) 98765-4321",value:s.telefone,onChange:l=>e({...s,telefone:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Cidade e Estado *"}),u.jsx("input",{type:"text",required:!0,placeholder:"Ex: São Paulo / SP",value:s.cidade,onChange:l=>e({...s,cidade:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Quantas Coifas precisam de proteção?"}),u.jsxs("select",{value:s.coifas,onChange:l=>e({...s,coifas:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500",children:[u.jsx("option",{value:"1",children:"1 Coifa (Pequeno / Médio Porte)"}),u.jsx("option",{value:"2",children:"2 Coifas (Atuação Independente)"}),u.jsx("option",{value:"3",children:"3 Coifas (Atuação Independente)"}),u.jsx("option",{value:"mais de 3",children:"Mais de 3 Coifas / Projeto Especial"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"text-xs font-semibold text-gray-300 block mb-1.5",children:"Detalhes adicionais (opcional)"}),u.jsx("textarea",{rows:3,placeholder:"Ex: Tenho 2 fritadeiras e 1 chapa, preciso de laudo urgente para renovação de AVCB.",value:s.mensagem,onChange:l=>e({...s,mensagem:l.target.value}),className:"w-full bg-[#14161c] border border-white/10 text-white text-xs rounded-xl px-4 py-3 focus:outline-none focus:border-red-500"})]}),u.jsxs("button",{type:"submit",className:"w-full py-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-sm rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2 group",children:[u.jsx(Pv,{className:"w-4 h-4 group-hover:translate-x-1 transition-transform fill-black"}),u.jsx("span",{children:"Enviar para a Engenharia Outfire"})]})]})]})})]})}),u.jsx("div",{className:"border-t border-[#d4af37]/20 py-8 bg-[#050608]",children:u.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/assets/logo-outfire-gold.png",alt:"OUTFIRE",className:"h-8 w-auto object-contain"}),u.jsxs("span",{children:["© ",new Date().getFullYear()," Outfire Sistemas contra Incêndio. Todos os direitos reservados."]})]}),u.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[u.jsx("a",{href:"#hero-3d",className:"hover:text-white transition-colors",children:"Simulação 3D"}),u.jsx("a",{href:"#central-vts",className:"hover:text-white transition-colors",children:"Central VTS"}),u.jsx("a",{href:"#normas",className:"hover:text-white transition-colors",children:"Normas NBR"}),u.jsx("a",{href:"#calculadora",className:"hover:text-white transition-colors",children:"Calculadora"}),u.jsx("a",{href:"#loja",className:"hover:text-white transition-colors",children:"Loja"}),u.jsx("a",{href:"/assets/manual-instalacao-central-outfire.pdf",target:"_blank",className:"hover:text-white transition-colors",children:"Manual PDF"})]})]})})]})},Tb=({isOpen:s,onClose:e,cartItems:t,onUpdateQuantity:r,onRemoveItem:o,onClearCart:l})=>{const[d,f]=ke.useState(!1),[p,m]=ke.useState(!1);if(!s)return null;const v=t.reduce((M,T)=>M+T.product.priceBRL*T.quantity,0),_=()=>{let M=`🛒 *PEDIDO LOJA OUTFIRE - PROPOSTA COMERCIAL*

`;M+=`Olá, equipe Outfire! Gostaria de fechar o pedido dos seguintes itens pelo site:

`,t.forEach((T,C)=>{M+=`${C+1}. *${T.product.name}*
`,M+=`   SKU: ${T.product.sku} | Qtd: ${T.quantity} un
`,M+=`   Valor: R$ ${(T.product.priceBRL*T.quantity).toLocaleString("pt-BR")},00

`}),M+=`💰 *TOTAL DO PEDIDO:* R$ ${v.toLocaleString("pt-BR")},00

`,M+="Por favor, me informe as opções de pagamento (Faturamento B2B / Boleto / Pix / Cartão) e valor do frete.",window.open(`https://wa.me/5515996576807?text=${encodeURIComponent(M)}`,"_blank")},S=M=>{m(!0),setTimeout(()=>{l(),m(!1),f(!1),e(),alert(`Pedido registrado com sucesso via ${M}! Nossa equipe entrará em contato para emissão de NF-e e envio.`)},2e3)};return u.jsxs("div",{className:"fixed inset-0 z-50 overflow-hidden",children:[u.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"}),u.jsx("div",{className:"fixed inset-y-0 right-0 max-w-full flex pl-10",children:u.jsxs("div",{className:"w-screen max-w-md bg-[#0f1115] border-l border-white/10 flex flex-col justify-between shadow-2xl relative",children:[u.jsxs("div",{className:"p-6 border-b border-white/10 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Mm,{className:"w-5 h-5 text-[#d4af37]"}),u.jsx("h2",{className:"text-lg font-bold text-white font-sans",children:"Seu Carrinho de Compras"})]}),u.jsx("button",{onClick:e,className:"p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors",children:u.jsx(bd,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1 overflow-y-auto p-6 space-y-4",children:t.length===0?u.jsxs("div",{className:"h-full flex flex-col items-center justify-center text-center text-gray-400 space-y-4",children:[u.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-500",children:u.jsx(Mm,{className:"w-8 h-8"})}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-base font-bold text-white",children:"Seu carrinho está vazio"}),u.jsx("p",{className:"text-xs text-gray-400 mt-1 max-w-xs",children:"Monte um kit na calculadora ou adicione peças avulsas de reposição da nossa loja."})]}),u.jsx("a",{href:"#calculadora",onClick:e,className:"py-2.5 px-4 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl shadow-glow-red transition-all",children:"Abrir Calculadora da Cozinha"})]}):t.map(M=>u.jsxs("div",{className:"p-4 bg-white/5 rounded-2xl border border-white/5 flex items-start gap-3 relative group",children:[u.jsx("img",{src:M.product.image,alt:M.product.name,className:"w-16 h-16 object-contain rounded-xl bg-black/40 p-1 border border-white/5 shrink-0"}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h4",{className:"text-xs font-bold text-white line-clamp-1",children:M.product.name}),u.jsxs("span",{className:"text-[10px] font-mono text-gray-400 block mt-0.5",children:["SKU: ",M.product.sku]}),u.jsxs("span",{className:"text-sm font-bold text-amber-400 font-mono block mt-1",children:["R$ ",M.product.priceBRL.toLocaleString("pt-BR"),",00"]}),u.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[u.jsxs("div",{className:"flex items-center bg-black/50 border border-white/10 rounded-lg",children:[u.jsx("button",{onClick:()=>r(M.product.id,-1),className:"p-1 hover:text-red-400 transition-colors",children:u.jsx(Tv,{className:"w-3 h-3"})}),u.jsx("span",{className:"px-2 text-xs font-bold text-white",children:M.quantity}),u.jsx("button",{onClick:()=>r(M.product.id,1),className:"p-1 hover:text-emerald-400 transition-colors",children:u.jsx(oo,{className:"w-3 h-3"})})]}),u.jsxs("button",{onClick:()=>o(M.product.id),className:"text-gray-400 hover:text-red-400 text-xs transition-colors flex items-center gap-1",children:[u.jsx(L0,{className:"w-3 h-3"}),u.jsx("span",{children:"Remover"})]})]})]})]},M.product.id))}),t.length>0&&u.jsxs("div",{className:"p-6 border-t border-white/10 bg-[#0c0d10] space-y-4",children:[u.jsxs("div",{className:"space-y-1.5",children:[u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Subtotal:"}),u.jsxs("span",{children:["R$ ",v.toLocaleString("pt-BR"),",00"]})]}),u.jsxs("div",{className:"flex justify-between text-xs text-gray-400",children:[u.jsx("span",{children:"Nota Fiscal & Laudo ART:"}),u.jsx("span",{className:"text-emerald-400 font-medium",children:"Incluso"})]}),u.jsxs("div",{className:"flex justify-between text-base font-bold text-white pt-2 border-t border-white/10",children:[u.jsx("span",{children:"Total Estimado:"}),u.jsxs("span",{className:"font-mono text-xl text-amber-400",children:["R$ ",v.toLocaleString("pt-BR"),",00"]})]})]}),u.jsxs("div",{className:"space-y-2",children:[u.jsxs("button",{onClick:_,className:"w-full py-3.5 px-4 bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-500 hover:to-green-600 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2",children:[u.jsx(hr,{className:"w-4 h-4"}),u.jsx("span",{children:"Enviar Pedido pelo WhatsApp (Comercial)"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"w-full py-3 px-4 bg-gradient-to-r from-[#d4af37] via-[#e5c05d] to-[#b89628] hover:from-[#e5c05d] hover:to-[#d4af37] text-black font-black text-xs rounded-xl shadow-glow-gold transition-all flex items-center justify-center gap-2",children:[u.jsx(Sm,{className:"w-4 h-4 fill-black"}),u.jsx("span",{children:"Finalizar Pagamento Online (Pix / Cartão)"})]})]}),u.jsxs("div",{className:"flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center",children:[u.jsx(Ql,{className:"w-3.5 h-3.5 text-emerald-400"}),u.jsx("span",{children:"Compra segura com garantia direta do fabricante Outfire"})]})]}),d&&u.jsxs("div",{className:"absolute inset-0 bg-[#0d0f13] z-20 p-6 flex flex-col justify-between",children:[u.jsxs("div",{children:[u.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-white/10 mb-6",children:[u.jsx("h3",{className:"font-bold text-white text-base",children:"Checkout Rápido Outfire"}),u.jsx("button",{onClick:()=>f(!1),className:"p-1 text-gray-400 hover:text-white",children:u.jsx(bd,{className:"w-5 h-5"})})]}),p?u.jsxs("div",{className:"text-center py-12 space-y-4",children:[u.jsx(ic,{className:"w-16 h-16 text-emerald-400 mx-auto animate-bounce"}),u.jsx("h4",{className:"text-lg font-bold text-white",children:"Pagamento Confirmado!"}),u.jsx("p",{className:"text-xs text-gray-300",children:"Obrigado por confiar na Outfire. Seus dados foram encaminhados para a expedição e o engenheiro responsável entrará em contato."})]}):u.jsxs("div",{className:"space-y-4",children:[u.jsxs("p",{className:"text-xs text-gray-300",children:["Selecione a forma de pagamento desejada para concluir o pedido de ",u.jsxs("strong",{children:["R$ ",v.toLocaleString("pt-BR"),",00"]}),":"]}),u.jsxs("button",{onClick:()=>S("PIX"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Cv,{className:"w-6 h-6 text-emerald-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Pagar via Pix"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Aprovação imediata com 5% de desconto"})]})]}),u.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Cartão de Crédito"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Sm,{className:"w-6 h-6 text-blue-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Cartão de Crédito"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Parcelamento em até 12x sem juros"})]})]}),u.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]}),u.jsxs("button",{onClick:()=>S("Boleto Faturado B2B"),className:"w-full p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between text-left transition-all",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(Ql,{className:"w-6 h-6 text-amber-400"}),u.jsxs("div",{children:[u.jsx("span",{className:"text-sm font-bold text-white block",children:"Faturamento B2B / Boleto PJ"}),u.jsx("span",{className:"text-[11px] text-gray-400",children:"Para restaurantes e empresas cadastradas"})]})]}),u.jsx(Hl,{className:"w-4 h-4 text-gray-400"})]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full py-3 bg-white/10 text-gray-300 font-bold text-xs rounded-xl hover:bg-white/20 transition-all",children:"Voltar ao Carrinho"})]})]})})]})},Ab=()=>u.jsxs("aside",{"aria-label":"Atendimento rápido",className:"fixed bottom-6 right-6 z-40 flex items-center group",children:[u.jsx("div",{className:"hidden sm:block mr-3 px-3.5 py-1.5 rounded-xl bg-[#12141a]/95 backdrop-blur-md border border-white/10 text-white text-xs font-semibold shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",children:"Falar com Engenheiro no WhatsApp 💬"}),u.jsxs("a",{href:"https://wa.me/5515996576807?text=Ol%C3%A1%2C%20estou%20no%20site%20da%20Outfire%20e%20gostaria%20de%20um%20or%C3%A7amento%20t%C3%A9cnico.",target:"_blank",rel:"noopener noreferrer",className:"w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 text-white flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-110 active:scale-95 transition-all duration-300 relative border-2 border-white/20",title:"Atendimento no WhatsApp","aria-label":"Atendimento no WhatsApp",children:[u.jsx(wv,{className:"w-7 h-7 fill-white/10"}),u.jsxs("span",{className:"absolute -top-1 -right-1 flex h-4 w-4",children:[u.jsx("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"}),u.jsx("span",{className:"relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"})]})]})]});function Cb(){const[s,e]=ke.useState([]),[t,r]=ke.useState(!1),o=m=>{e(v=>v.find(S=>S.product.id===m.id)?v.map(S=>S.product.id===m.id?{...S,quantity:S.quantity+1}:S):[...v,{product:m,quantity:1}]),r(!0)},l=(m,v)=>{e(_=>_.map(S=>{if(S.product.id===m){const M=S.quantity+v;return M>0?{...S,quantity:M}:null}return S}).filter(Boolean))},d=m=>{e(v=>v.filter(_=>_.product.id!==m))},f=()=>{e([])},p=s.reduce((m,v)=>m+v.quantity,0);return u.jsxs("div",{className:"min-h-screen bg-[#0a0c0e] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200",children:[u.jsx(kv,{cartCount:p,onOpenCart:()=>r(!0)}),u.jsxs("main",{className:"flex-1",children:[u.jsx(gb,{}),u.jsx(xb,{}),u.jsx(vb,{}),u.jsx(_b,{}),u.jsx(yb,{onAddToCart:o}),u.jsx(Mb,{onAddToCart:o}),u.jsx(Eb,{}),u.jsx(bb,{})]}),u.jsx(wb,{}),u.jsx(Tb,{isOpen:t,onClose:()=>r(!1),cartItems:s,onUpdateQuantity:l,onRemoveItem:d,onClearCart:f}),u.jsx(Ab,{})]})}ov.createRoot(document.getElementById("root")).render(u.jsx(ev.StrictMode,{children:u.jsx(Cb,{})}));
